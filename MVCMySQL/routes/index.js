const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// localhost:8080/visitor/
router.get("/", controller.visitor);
router.post("/register", controller.register);

module.exports = router;