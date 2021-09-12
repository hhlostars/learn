const { Article } = require('../model')

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    // 处理请求
    const article = new Article(req.body.article)
    article.author = req.user._id
    article.populate('author').exec
    await article.save()
    console.log(article);
    res.status(201).json({
      article
    })
  } catch (error) {
    next(error)
  }
}

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
exports.getArticleById = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId).populate('author')
    if(!article) {
      return res.status(404).end
    }

    res.status(200).json({
      article
    })
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


