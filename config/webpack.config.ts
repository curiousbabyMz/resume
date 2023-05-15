require("@babel/register");
import HWP from "html-webpack-plugin";
import path from "path";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
        include: /src/,
      },
      {
        test: /\.(jpeg|jpg|png)$/,
        include: /src/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
            limit: 1024 * 2,
            name: "[name]-[hash:8].[ext]",
            outputPath: "./imgs",
            publicPath: "./imgs",
          },
        },
      },
    ],
  },
  plugins: [
    new HWP({
      template: path.resolve(__dirname, "../src/index.html"),
      favicon: "",
    }),
  ],
};
