require("@babel/register");
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { merge } from "webpack-merge";

module.exports = merge(require("./webpack.config"), {
  // entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: {
      // keep: /dll/,
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.[jt]sx?$/,
        include: /src/,
      }),
    ],
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: "all",
      minSize: 20 * 1024,
      cacheGroups: {
        vendor: {
          priority: 1,
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          minSize: 0,
          minChunks: 1,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
});
