const express = require('express')

const router = express.Router()

// 用户相关路由
router.use(require('./user'))

// 文章相关路由
router.use('/profiles', require('./profile'))

router.get('/', (req, res) => {
  res.send('Hello World!')
})
router.post('/', (req, res) => {
  res.send(req.body);
})

module.exports = router