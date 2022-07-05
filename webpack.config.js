const webpack = require("webpack");
const path = require("path");
// const DeclarationBundlerPlugin = require("declaration-bundler-webpack-plugin");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.ts"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
      },
    ],
  },
  resolve: { extensions: [".ts", ".js"] },
  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
  },
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  devtool: "source-map",
};
