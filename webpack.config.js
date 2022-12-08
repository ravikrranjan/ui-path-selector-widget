const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // filename: "app.js",
    filename: "[fullhash].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
