// 获取用户资料
exports.getUserProfile = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /:username')
  } catch (error) {
    next(error)
  }
}

// 关注用户
exports.followUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /:username/follow')
  } catch (error) {
    next(error)
  }
}

// 取消关注用户
exports.unfollowUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('delete /:username/follow')
  } catch (error) {
    next(error)
  }
}

