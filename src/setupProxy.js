const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://43.202.23.75/',
      changeOrigin: true,
    })
  );
};
