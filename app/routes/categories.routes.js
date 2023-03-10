module.exports = (app) => {
  const categories = require("../controller/categories.controller");
  var router = require("express").Router();

  router.get("/get", categories.getCategories);
  router.get("/get/:id", categories.getCategoriesByID);
  app.use("/api/categories", router);
};
