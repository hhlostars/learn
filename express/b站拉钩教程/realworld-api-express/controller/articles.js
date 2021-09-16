const { Article, User } = require('../model')
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
    const articlesCount = await Article.countDocuments()
    const { 
      limit = 20,
      offset = 0,
      tag,
      author
    } = req.query

    const filter = {}
    if (tag) {
      filter.tagList = tag
    }
    if(author) {
      const user = await User.findOne({ username: author})
      filter.author = user ? user._id : null
    }

    const articles = await Article.find(filter)
      .skip(Number.parseInt(offset))    //跳过多少条
      .limit(parseInt(limit))   //取多少条
      .sort({
        // -1 倒序  1 升序排序
        // createdAt: -1
      })
    res.status(200).json({
      articles,
      articlesCount
    })
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
    if (!article) {
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
exports.updateArticleById = async (req, res, next) => {
  try {
    const article = req.article
    const bodyArticle = req.body.article
    article.title = bodyArticle.title || article.title
    article.description = bodyArticle.description || article.description
    article.body = bodyArticle.body || article.body
    await article.save()
    res.status(200).json({
      article
    })
    res.send('updated')
  } catch (error) {
    next(error)
  }
}

// 删除文章
exports.deleteArticleBySlug = async (req, res, next) => {
  try {
    const article = req.article
    await article.remove()
    res.status(204).json({
      "msg": "删除成功"
    })
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


