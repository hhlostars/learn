module.exports = async (req, res, next) => {
  // 检查有没有 session user
  const sessionUser = req.session.user
  console.log('noauth', sessionUser);
  if(!sessionUser) {
    return res.redirect('/')
  }
  next()
}