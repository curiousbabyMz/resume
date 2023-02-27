import { merge } from "webpack-merge";
import TestPlugin from "../webpackPlugin/testPlugin";

module.exports = merge(require("./webpack.config.ts"), {
  devServer: {
    port: 8000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
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
  plugins: [
    new TestPlugin({
      a: 1,
    }),
  ],
});
