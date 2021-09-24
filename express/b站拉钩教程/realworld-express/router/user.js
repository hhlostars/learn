const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')
const noauth = require('../middleware/noauth')

const router = express.Router()

router.get('/login', noauth, userCtrl.showLogin)

router.get('/register', noauth, userCtrl.showRegister)

router.post('/register', userValidator.register, userCtrl.register)

router.post('/login', userValidator.login, userCtrl.login)

router.get('/settings', auth, userCtrl.showSettings)

router.get('/logout', userCtrl.logout)


router.get('/profile/:username', auth, userCtrl.showProfile)

router.get('/profile/:username/favorites', auth, userCtrl.showProfile)

module.exports = router