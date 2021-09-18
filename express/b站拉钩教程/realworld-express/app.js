const express = require('express')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
const path = require('path')

// const errorHandler = require('./middleware/error-handler')
require('./model')

const router = require('./router')

const app = express()

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

const port = process.env.PORT || 3000

// 挂载路由
app.use(router)

// 挂载统一处理服务端错误中间件
// app.use(errorHandler())

// view engine setup
// 当渲染 .art结尾的文件时， 使用express-art-template
app.engine('html', require('express-art-template'));
app.set('view options', {
  debug: true
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// 托管静态资源
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')))

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler())
}

app.listen(port, () => console.log(`Example app listening on port port!`))