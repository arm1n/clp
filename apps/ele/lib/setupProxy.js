var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware;

var PROXY_URL = "http://localhost:3500";
var proxy = createProxyMiddleware({
  changeOrigin: true,
  target: PROXY_URL
});

module.exports = function (app) {
  app.use("/apps", proxy);
  app.use("/assets", proxy);
  app.use("/units", proxy);
};