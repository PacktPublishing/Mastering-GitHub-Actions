const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js", // your main entry point file
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"), // output directory as dist
  },
  mode: "production", // use 'development' for unminified builds
  target: "node", // target node runtime
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "LICENSE.txt"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
};
