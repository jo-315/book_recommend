const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // エントリポイントのファイル
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    // 出力先のディレクトリ
    path: path.resolve(__dirname, './public'),
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // css-loader -> style-loaderの順で通していく
      },
    ]
  },
  resolve: {
    // import './foo.vue' の代わりに import './foo' と書けるようになる(拡張子省略)
    extensions: ['.js', '.vue'],
    alias: {
      // vue-template-compilerに読ませてコンパイルするために必要
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // setup for vue.js
    new VueLoaderPlugin()
  ],
  // docker内で watch option を使うための設定
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}
