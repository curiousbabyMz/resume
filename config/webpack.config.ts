require("@babel/register");
import hwp from "html-webpack-plugin";
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
        test: /\.s[ac]ss$/,
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
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
            limit: 1024 * 2,
          },
        },
      },
    ],
  },
  plugins: [
    new hwp({
      template: path.resolve(__dirname, "../src/index.html"),
      favicon: "",
    }),
  ],
};
