
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { DefinePlugin } = require('webpack')
const CopyWebpack = require('copy-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  // 设置模式
  // development 开发阶段, 会设置development
  // production 准备打包上线的时候, 设置production
  mode: "development",
  // 设置source-map, 建立js映射文件, 方便调试代码和错误
  devtool: "source-map",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './public', 
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        // 语法糖
        // loader: 'css-loader'

        // 完整写法
        use: [
          // {loader: 'css-loader'}
          "style-loader",
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      },
      // {
      //   test: /\.(jpg|png|svg|gif|jpeg)$/,
      //   // use: 'file-loader'
      //   use: {
      //     // loader: 'file-loader',
      //     loader: 'url-loader',
      //     options: {
      //       outputPath: 'img',
      //       name: '[name]_[hash:6].[ext]',
      //       limit: 100 * 1024
      //     }
      //   }
      // }
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        type: 'asset',
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      },
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-transform-block-scoping",
              "@babel/plugin-transform-arrow-functions"
            ]
          }
        }
      },
       {
         test: /\.vue$/,
         loader: "vue-loader"
       }
    ]
  },
  plugins: [
    // 一个个插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '哈哈哈哈哈'
    }),
    new DefinePlugin({
      BASE_URL: "'/'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // 打包public目录下的文件
    new CopyWebpack({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}