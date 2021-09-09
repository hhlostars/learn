const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 处理用户登录
exports.login = async (req, res, next) => {
  try {
    // 1.数据验证
    // 2.生成 token
    const user = req.user.toJSON()
    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret)

    // 3.发送成功响应
    delete user.password
    res.status(200).json({
      ...user,
      token
    })
  } catch (error) {
    next(error)
  }
}

// 处理用户注册
exports.register = async (req, res, next) => {
  try {
    // 处理请求
    // 1.获取请求体数据
    console.log(req.body);

    // 2.数据验证

    // 3.验证通过保存到数据库
    let user = new User(req.body.user)

    await user.save()
    // 4.发送成功响应

    user = user.toJSON()
    delete user.password
    res.status(201).json({
      user
    })
  } catch (error) {
    next(error)
  }
}

// 获取当前用户 
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user
    })
  } catch (error) {
    next(error)
  }
}

// 更新当前用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('put /user')
  } catch (error) {
    next(error)
  }
}