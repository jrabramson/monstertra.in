const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

const outputDirectory = "dist";

const env = dotenv.config().parsed || {};
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: ["babel-polyfill", "./frontend/src/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./frontend/public/index.html",
      favicon: "./frontend/public/favicon.ico",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "frontend/src/public", to: "assets" }],
    }),
    new webpack.DefinePlugin(envKeys),
  ],
};
