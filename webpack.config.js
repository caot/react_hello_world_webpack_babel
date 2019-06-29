const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: {
    javascript: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist')},
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'src'),
    port: 3000 // <--- Add this line and choose your own port number
  },
  module:{
    rules:[{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: ['babel-loader'],
    }]
  },
  plugins:[
    new HWP(
      {template: path.join(__dirname,'src/index.html')}
    )
  ],
  resolve: {
    extensions: [ '.js', '.jsx']
  }
}
