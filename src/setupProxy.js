const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/boards.4chan.org',
    createProxyMiddleware({
      target: 'https://boards.4chan.org/',
      changeOrigin: true,
      pathRewrite: function (path, req) { return path.replace('/boards.4chan.org', '') }
    })
  );
  app.use(
    '/boards.4channel.org',
    createProxyMiddleware({
      target: 'https://boards.4channel.org/',
      changeOrigin: true,
      pathRewrite: function (path, req) { return path.replace('/boards.4channel.org', '') }
    })
  );
};