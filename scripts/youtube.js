async function fetchYoutubeThumbnail(channelId) {
  try {
    // Normalize channel input (remove @ if present)
    const normalizedChannelId = channelId.replace(/^@/, "");

    // Fetch channel page
    const response = await fetch(`https://www.youtube.com/@${normalizedChannelId}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    // Get text content of the page
    const pageContent = await response.text();

    // Regex to find thumbnail URL
    const thumbnailRegex = /https:\/\/yt3\.googleusercontent\.com\/[^"'\s]+/;
    const match = pageContent.match(thumbnailRegex);

    // Return the first matching thumbnail URL
    if (match) {
      return match[0];
    }

    throw new Error("Thumbnail not found");
  } catch (error) {
    console.error("Error fetching channel thumbnail:", error);
    throw error;
  }
}

export default fetchYoutubeThumbnail;
