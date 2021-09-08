// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /articles')
  } catch (error) {
    next(error)
  }
}

// 获取限制的文章列表
exports.getArticlesFeed = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /articles/feed')
  } catch (error) {
    next(error)
  }
}

// 获取单个具体文章
exports.getArticleBySlug = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /articles/:slug')
  } catch (error) {
    next(error)
  }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /articles')
  } catch (error) {
    next(error)
  }
}

// 更新文章
exports.updateArticleBySlug = async (req, res, next) => {
  try {
    // 处理请求
    res.send('put /articles/:slug')
  } catch (error) {
    next(error)
  }
}

// 删除文章
exports.deleteArticleBySlug = async (req, res, next) => {
  try {
    // 处理请求
    res.send('delete /articles/:slug')
  } catch (error) {
    next(error)
  }
}

// 添加文章评论
exports.addArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /articles/:slug')
  } catch (error) {
    next(error)
  }
}

// 获取文章评论
exports.getArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /articles/:slug/comments')
  } catch (error) {
    next(error)
  }
}

// 删除文章评论
exports.deleteArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('delete /articles/:slug/comments/:id')
  } catch (error) {
    next(error)
  }
}

// 喜欢文章
exports.favoriteArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /articles/:slug')
  } catch (error) {
    next(error)
  }
}

// 不喜欢文章
exports.unfavoriteArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('delete /articles/:slug')
  } catch (error) {
    next(error)
  }
}


