require("@babel/register");
import { merge } from "webpack-merge";

module.exports = merge(require("./webpack.config.ts"), {
  //   entry: path.resolve(__dirname, "src/index.tsx"),
  devServer: {
    port: 8000,
    hot: true,
  },
});
