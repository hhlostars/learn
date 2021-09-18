// 获取标签
exports.getTags = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /tags')
  } catch (error) {
    next(error)
  }
}