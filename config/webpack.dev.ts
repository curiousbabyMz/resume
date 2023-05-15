import path from "path";
import { merge } from "webpack-merge";
import TestPlugin from "../webpackPlugin/testPlugin";
const testplugin = new TestPlugin({
  a: 1,
});
module.exports = merge(require("./webpack.config.ts"), {
  devServer: {
    port: 8000,
    hot: true,
    // historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "../public"),
      publicPath: "/public",
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]-[hash:8]",
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [testplugin],
});
