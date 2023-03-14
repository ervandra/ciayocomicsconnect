const express = require("express");
const next = require("next");
const favicon = require("serve-favicon");
const path = require("path");
const routes = require("./routes");
require("dotenv").config();

const port = parseInt(process.env.PORT, 10) || 3005;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});

app.prepare().then(() => {
  express()
    .use(favicon(path.join(__dirname, "static", "favicon.ico")))
    .use(handler)
    .listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
});
