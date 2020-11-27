const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");

const inicioController = require("../controllers/inicio");

let routes = app => {
  router.get("/", loginController.getLogin);
  router.get("/inicio", inicioController.getInicio);
  return app.use("/", router);
};

module.exports = routes;