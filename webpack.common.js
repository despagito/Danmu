var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    // 这个端口的作用,应该是热更新到server.js的.
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3001',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        // loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }, {
        // image loader写在这里才有效,下面那个rules的没用!
        test: /\.(png|svg|jpg|gif)$/,
        loaders: [
          'file-loader'
        ]
      }
    ],
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      components: 'src/components',
      style: 'src/style'
    },
    extensions: ['', '.js']
  },
  status: "dev" // dev or prod
}
