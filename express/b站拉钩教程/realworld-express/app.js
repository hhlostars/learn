const express = require('express')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
const path = require('path')
const session = require('express-session');
const MongoStore = require('connect-mongo');

const { sessionSecret } = require('./config/config.default')

const mongoose = require('mongoose')

// const errorHandler = require('./middleware/error-handler')
require('./model')

const router = require('./router')
const { options } = require('./router')

const app = express()



app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// 配置session中间件
// 存储session
//  1. 生成sessionId  2. 存储数据 req.session.xxx = xxx
// 获取session
// 根据sessionId 获取容器中的数据
// req.session.xxx
// 注意： 默认数据存储在内存中
app.use(session({
  secret: sessionSecret,        // 签发session id 密钥
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60
  },
  store: MongoStore.create({
    mongoUrl: 'mongodb://1.117.165.105:27027/realworld'
  })
}))

// 全局挂载sessionUser
app.use((req, res, next) => {
  app.locals.sessionUser = req.session.user
  next()
})

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