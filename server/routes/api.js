module.exports = (app) => {
  const cruds = require("./controller");

  var router = require("express").Router();

  router.post("/register", cruds.register);
  router.post("/login", cruds.login);
  router.post("/create", cruds.create);
  router.get("/findall", cruds.findAll);
  router.get("/findone/:id", cruds.findOne);
  router.put("/update/:id", cruds.update);
  router.delete("/delete/:id", cruds.delete);
  router.delete("/deleteall", cruds.deleteAll);
  app.use("/api", router);
};
