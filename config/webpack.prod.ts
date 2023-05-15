import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";
import SpeedMeasurePlugin from "speed-measure-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import { merge } from "webpack-merge";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

const smp = new SpeedMeasurePlugin();

module.exports =
  //  smp.wrap(
  merge(require("./webpack.config"), {
    output: {
      filename: "js/[name]-[hash:8]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      clean: {
        // keep: /dll/,
      },
    },
    cache: true,
    optimization: {
      usedExports: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          test: /\.[jt]sx?$/,
          include: /src/,
          terserOptions: {
            compress: true,
          },
        }),
        new CssMinimizerPlugin({
          include: /src/,
          parallel: true,
        }),
        new CompressionPlugin({
          test: /\.(css|tsx|js)$/,
          threshold: 500,
          minRatio: 0.7,
          algorithm: "gzip",
        }),
      ],
      runtimeChunk: {
        name: "manifest",
      },
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            priority: 1,
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            reuseExistingChunk: true,
          },
          react: {
            chunks: "all",
            priority: 2,
            name: "react",
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          },
          styles: {
            chunks: "all",
            name: "css/styles",
            type: "css/mini-extract",
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          include: /src/,
          use: [
            // "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                esModule: true,
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
      // new BundleAnalyzerPlugin(),
      new MiniCssExtractPlugin(),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /dayjs$/,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../public"),
            to: path.resolve(__dirname, "../dist/public"),
          },
        ],
      }),
    ],
  });
// );
