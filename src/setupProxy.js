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
      target: 'http://giftguru.loclx.io/',
      changeOrigin: true,
      secure: false
    })
  );
  app.use(
    '/get_profiles',
    createProxyMiddleware({
      target: 'http://giftguru.loclx.io/',
      changeOrigin: true,
      secure: false
    })
  );
};