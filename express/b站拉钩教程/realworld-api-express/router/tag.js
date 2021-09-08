const express = require('express')
const tagsCtrl = require('../controller/tags')

const router = express.Router()

// 获取标签列表
router.get('/tags', tagsCtrl.getTags)