const { createProxyMiddleware } = require("http-proxy-middleware");

const PROXY_URL = "http://localhost:3500";

const proxy = createProxyMiddleware({
  changeOrigin: true,
  target: PROXY_URL,
});

module.exports = function(app) {
  app.use("/apps", proxy);
  app.use("/assets", proxy);
  app.use("/units", proxy);
};