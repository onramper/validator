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
  resolve: { extensions: [".ts"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].js",
    filename: "[name].js",
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.ProvidePlugin({
    //   Buffer: ["buffer", "Buffer"],
    // }),
    // new webpack.ProvidePlugin({
    //   process: "process/browser",
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   sourceMap: true,
    //   include: /\.min\.js$/,
    // }),
  ],
  devtool: "source-map",
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendors: {
  //         priority: -10,
  //         test: /[\\/]node_modules[\\/]/,
  //       },
  //     },

  //     chunks: "async",
  //     minChunks: 1,
  //     minSize: 30000,
  //     name: true,
  //   },
  // },
};
