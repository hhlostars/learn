const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      // /api 触发该代理配置 
      // 请求转发给谁
      target: 'http://localhost:5000',
      // 控制服务器收到的响应头中 Host 字段的值
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    })
  )
}