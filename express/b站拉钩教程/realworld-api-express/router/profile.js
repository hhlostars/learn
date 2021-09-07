const express = require('express')

const router = express()

// 获取用户资料
router.post('/profiles/:username', async (req, res, next) => {
  try {
    // 处理请求
    res.send(`post profiles/${req.params}`)
  } catch (error) {
    next(error)
  }
})

// 关注用户
router.post('/users', async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /users')
  } catch (error) {
    next(error)
  }
})

// 取消关注用户
router.get('/user', async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /user')
  } catch (error) {
    next(error)
  }
})

module.exports = router