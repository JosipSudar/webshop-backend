module.exports = (app) => {
  const orders = require("../controller/orders.controller");
  var router = require("express").Router();

  router.post("/post", orders.postOrders);
  router.get("/get/:id", orders.getOrdersByID);
  app.use("/api/orders", router);
};
