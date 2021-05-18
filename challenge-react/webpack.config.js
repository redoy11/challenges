// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const config = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: 'public',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: [/node_modules/],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'source-map-loader',
      },
    ],
  },

  mode: 'development',
};

module.exports = config;
