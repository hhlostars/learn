const express = require('express')
const articlesCtrl = require('../controller/articles')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')
const router = express.Router()

router.get('/', articlesCtrl.showIndex)

router.get('/editor', auth, articlesCtrl.showEditor)

router.get('/article/:articleId', auth, articlesCtrl.showEditor)

router.get('/article/:articleId', articlesCtrl.showArticle)

module.exports = router
