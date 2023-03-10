module.exports = (app) => {
  const articles = require("../controller/articles.controller");
  var router = require("express").Router();

  router.get("/get", articles.getArticles);
  router.get("/get/:id", articles.getArticlesByID);
  app.use("/api/articles", router);
};
