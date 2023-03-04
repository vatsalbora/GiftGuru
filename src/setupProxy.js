const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/seed',
    createProxyMiddleware({
      target: 'http://giftguru.loclx.io/',
      changeOrigin: true,
      secure: false
    })
  );
  app.use(
    '/get_recomendations',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
      secure: false
    })
  );
};