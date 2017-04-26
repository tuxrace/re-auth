module.exports = {
  entry: {
    app: './src/index.js',
    vendor:['react','react-dom']
  },
  output:{
    filename:'[name].build.js'
  },
  module:{
    loaders: [
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#source-map'
}