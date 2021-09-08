const express = require('express')
const articlesCtrl = require('../controller/articles')

const router = express.Router()

// 获取文章列表
router.get('/articles', articlesCtrl.getArticles)


// 获取限制的文章列表
router.get('/articles/feed', articlesCtrl.getArticlesFeed)


// 获取单个具体文章
router.get('/articles/:slug', articlesCtrl.getArticleBySlug)


// 创建文章
router.post('/articles', articlesCtrl.createArticle)

// 更新文章
router.put('/articles/:slug', articlesCtrl.updateArticleBySlug)

// 删除文章
router.delete('/articles/:slug', articlesCtrl.deleteArticleBySlug)

// 添加文章评论
router.post('/articles/:slug/comments', articlesCtrl.addArticleComments)

// 获取文章评论
router.get('/articles/:slug/comments', articlesCtrl.getArticleComments)

// 删除文章评论
router.delete('/articles/:slug/comments/:id', articlesCtrl.deleteArticleComments)

// 喜欢文章评论
router.post('/articles/:slug/favorite', articlesCtrl.favoriteArticleComments)

// 取关文章
router.delete('/articles/:slug/favorite', articlesCtrl.unfavoriteArticleComments)

module.exports = router
