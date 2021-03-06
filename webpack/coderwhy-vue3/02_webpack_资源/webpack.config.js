const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
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
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      }
    ]
  }
}