module.exports = (app) => {
  const users = require("../controller/users.controller");
  const methods = require("../midallware/methods");
  var router = require("express").Router();
  //login
  router.post("/login", users.login);
  router.get("/get", methods.TestToken, users.getUser);
  router.get("/check-auth", users.tokens);
  app.use("/api/users", router);
};
