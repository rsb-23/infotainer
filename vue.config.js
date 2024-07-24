const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/infotainer/" : "/",
};
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production" ? process.env.VUE_APP_BASE_URL : "/",
//   configureWebpack: {
//     plugins: [
//       new HtmlWebpackPlugin({
//         title: "Infotainer",
//         template: "public/index.html",
//         inject: true,
//       }),
//     ],
//   },
// };
