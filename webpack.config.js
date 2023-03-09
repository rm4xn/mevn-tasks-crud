import { VueLoaderPlugin } from "vue-loader"
import { dirname } from 'path'
import { fileURLToPath } from 'url'

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
  output: {
    path: dirname(fileURLToPath(import.meta.url)) + '/public'
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}