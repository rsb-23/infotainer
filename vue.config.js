const { defineConfig } = require("@vue/cli-service");

const isCodespace = !!process.env.CODESPACE_NAME;
const devPublicPath = isCodespace
  ? `https://${process.env.CODESPACE_NAME}-8080.app.github.dev/`
  : "/";
console.log("isCodespace", isCodespace);
console.log("devPublicPath", devPublicPath);

module.exports = defineConfig({
  transpileDependencies: true,
  
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/"
      : devPublicPath,
});
