const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const options = {};

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({      
      title: 'Development',
    }),
    new WebpackManifestPlugin(options)
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
