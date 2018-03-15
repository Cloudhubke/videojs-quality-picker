const isDev = process.env.NODE_ENV !== 'production';
const join = require('path').join;

module.exports = {
  entry: './lib/vjs-quality-picker',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: 'vjs-quality-picker.js',
  },
  target: 'web',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  devServer: isDev
    ? {
        contentBase: './example',
        inline: true,
        port: 7979,
      }
    : null,
};
