const path = require("path");
const ShowCompileFilePlugin = require("./webpack/plugins/showCompileFilePlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  context: path.resolve(__dirname),
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    chunkFilename: "chunk-[name]-[chunkhash:8][ext]",
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    alias: {
      templates: path.resolve(__dirname, "./templates"),
    },
    extensions: ["/bi", ".ts", ".tsx", ".js"],
  },
  resolveLoader: {
    modules: ["./webpack/loaders", "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.bi$/,
        use: ["bi-loader"],
      },
      {
        test: /\.tsx?/,
        use: ["ts-loader"],
      },
      {
        test: /\.template/,
        use: [
          {
            loader: "template-loader",
            options: {
              log: true,
            },
          },
        ],
      },
      {
        test: /\.jpe?g|png|gif/,
        use: [
          {
            loader: 'my-file-loader',
            options: {
              limit: 2000,
              name:'[hash:8].[ext]',
              outputPath: '/assets',
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'my-style-loader',
          },
          {
            loader: 'my-css-loader',
            options: {
              module: true
            }
          }
        ]
      }
    ],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8888,
    open: true,
  },
};
