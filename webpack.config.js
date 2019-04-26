const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const argv = require('webpack-nano/argv');

const args = {
  concat: true,
  min: true,
  ...argv
};

const plugins = [];

if (args.report) {
  plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

module.exports = {
  devtool: false,

  entry: {
    'test': './index.js',
  },

  mode: 'production',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /[\\/]node_modules[\\/]/,
      use: {
        loader: 'babel-loader',
        options: {
         presets: [
           ['@babel/preset-env', {
             corejs: 3,
             debug: args.debug,
             useBuiltIns: 'usage',
           }],
         ],
       },
      },
    }],
  },

  optimization: {
    concatenateModules: args.concat,
    minimize: args.min,
    noEmitOnErrors: true,
  },

  output: {
    pathinfo: !args.min,
  },

  plugins,
};
