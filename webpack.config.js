import { VueLoaderPlugin } from "vue-loader"

export default {
  mode: 'development',
  entry: './src/app/index.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}