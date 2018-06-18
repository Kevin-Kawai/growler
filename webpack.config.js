const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: __dirname+'/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.s?css$/, loader: "style-loader!css-loader!sass-loader"},
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{presets: ['es2015']}},
      {test: /\.vue$/, loader: "vue-loader"}
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
