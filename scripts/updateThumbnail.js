import fs from "fs";
import path from "path";
import fetchYoutubeThumbnail from "./youtube.js";

// Path to the channels.js file
const filePath = path.join("src/data/channels.js");

// Read the file
fs.readFile(filePath, "utf8", async (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Find the array of channels using a regex
  const arrayStart = data.indexOf("export default [");
  const arrayEnd = data.lastIndexOf("];");

  if (arrayStart === -1 || arrayEnd === -1) {
    console.error("Could not find the channels array in the file.");
    return;
  }

  // Extract the array content
  const arrayContent = data.slice(arrayStart + "export default ".length, arrayEnd + 1);

  let channels = [];
  try {
    const ytLogoUrl = "";
    const size = "";
    channels = eval(arrayContent); // Parse the array safely
  } catch (parseError) {
    console.error("Error parsing channels array:", parseError);
    return;
  }

  // Loop through each channel and update its data
  channels = await Promise.all(
    channels.map(async (channel) => {
      // Fetch the thumbnail URL for the channel
      let thumbnailUrl = await fetchYoutubeThumbnail(channel.id);
      // remove domain from thumbnailId
      thumbnailUrl = thumbnailUrl
        .replace("https://yt3.googleusercontent.com", "`${ytLogoUrl}")
        .replace(/=s.*/, "${size}`");
      return {
        ...channel,
        logo: thumbnailUrl,
      };
    })
  );

  // Convert the updated array back to a string
  let updatedArray = JSON.stringify(channels, null, 2);
  // Replace all the backticks with the template literals
  updatedArray = updatedArray.replace(/"(`)|(`)"/g, "`");

  console.log(updatedArray);
  // Replace the old array with the updated array in the file content
  const updatedContent = data.slice(0, arrayStart + "export default ".length) + updatedArray + data.slice(arrayEnd + 1);

  // Write the updated content back to the file
  fs.writeFile(filePath, updatedContent, "utf8", (writeErr) => {
    if (writeErr) {
      console.error("Error writing file:", writeErr);
      return;
    }
    console.log("File updated successfully!");
  });
});
