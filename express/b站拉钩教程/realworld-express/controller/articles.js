const { Article } = require("../model")

exports.showIndex = async (req, res, next) => {
  try {
    // console.log(req.session.user);
    res.render('index', {
      sessionUser: req.session.user
    })
  } catch (error) {
    next(error)
  }
}

exports.showEditor = async (req, res, next) => {
  try {
    res.render('editor')
  } catch (error) {
    next(error)
  }
}

exports.showArticle = async (req, res, next) => {
  try {
    res.render('article')
  } catch (error) {
    next(error)
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article({
      ...req.body.article,
      author: req.session.user._id
    })
    await article.save()
    res.status(201).json({
      article
    })
  } catch (error) {
    next(error)
  }
}

