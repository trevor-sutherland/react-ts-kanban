const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.sass$|\.scss$|\.css$/,
        // include: path.resolve(__dirname, 'app/sass'),
        use : [
          MiniCssExtractPlugin.loader, //4 Extracts needed chunks
          'css-loader', //3 Compiles css// -- Number of loaders to use before css-loader eg. postcss-loader, sass-loader
          'postcss-loader', //2. Lints css
          'sass-loader', //1. Turns sass into css
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'], // add .tsx, .ts
  },
  mode: "production",
  plugins: [
    new CssMinimizerPlugin(),
    new MiniCssExtractPlugin({
      filename     : 'css/[name][contenthash].css',
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      template: "static/index.html",
    }),
  ],
  performance: false,
};
