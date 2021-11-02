const { User } = require('../model')


// 处理用户登录
exports.showLogin = async (req, res, next) => {
  try {
    res.render('login', {
      isLogin: true
    })
  } catch (error) {
    next(error)
  }
}

exports.showRegister = async (req, res, next) => {
  try {
    res.render('login', {
      isLogin: false
    })
  } catch (error) {
    next(error)
  }
}

exports.showSettings = async (req, res, next) => {
  try {
    res.render('settings')
  } catch (error) {
    next(error)
  }
}

exports.showProfile = async (req, res, next) => {
  try {
    res.render('profile')
  } catch (error) {
    next(error)
  }
}

exports.register = async (req, res, next) => {
  try {
    console.log(req.body);
    // 1 数据验证
    // 2 验证通过 创建新用户
    const user = new User(req.body.user)
    await user.save()
    // 3 保持登录状态
    req.session.user = user
    // 4 跳转到首页
    res.status(200).json({
      user
    })
  } catch (error) {
    next(error)
  }
}

// logout
exports.logout = async (req, res, next) => {
  try {
    // 清除用户的登陆状态
    req.session.user = null
    res.redirect('/')
  } catch (error) {
    next(error)
  }
}

// login
exports.login = async (req, res, next) => {
  try {
    const user = req.user
    req.session.user = user
    res.status(200).json({
      user
    })
  } catch (error) {
    next(error)
  }
}
