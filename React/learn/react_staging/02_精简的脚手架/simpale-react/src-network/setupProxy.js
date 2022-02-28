const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {
      // /api 触发该代理配置 
      // 请求转发给谁
      target: 'http://localhost:5001',
      // 控制服务器收到的响应头中 Host 字段的值
      changeOrigin: true,
      pathRewrite: {'^/api1': ''}
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5002',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    }),
  )
}