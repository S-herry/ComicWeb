const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/main.jsx",
    devtool: "source-map",
    output: {
      filename: "js/main.js",
      publicPath: "/",
      path: path.resolve(__dirname, "./build"),
      clean: true,
      chunkFilename: "js/main.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "css/style.css",
        chunkFilename: "css/style.css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(?:js|jsx?|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: "3.38.0",
                  },
                ],
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: ["postcss-preset-env"],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|jpe?g|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                publicPath: "./image",
                outputPath: "./image",
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      compress: true,
      port: 9000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
  };
};
