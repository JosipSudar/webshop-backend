module.exports = (app) => {
  const products = require("../controller/products.controller");
  var router = require("express").Router();
  //get all
  router.get("/get", products.getProducts);
  router.get("/get/:id", products.getProductsByID);

  // get by: categorie id
  router.get("/get/category/:id", products.getProductsByCategorie);
  app.use("/api/products", router);
};
