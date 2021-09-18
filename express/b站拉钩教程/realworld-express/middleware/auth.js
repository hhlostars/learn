const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
  // 从请求头获取token
  let token = req.headers.authentication
  // 验证 token 是否有效
  token = token ? token.split(' ')[1] : null
  // 无效 响应 401状态码
  if(!token) {
    return res.status(401).end()
  }
  // 有效 把用户信息读取挂载到 req 请求对象上 继续往后执行
  try {
    const decodedToken = await verify(token, jwtSecret)
    req.user = await User.findById(decodedToken.userId)
    // console.log(decodedToken);
    next()
  } catch (error) {
    return res.status(401).end()
  }
}