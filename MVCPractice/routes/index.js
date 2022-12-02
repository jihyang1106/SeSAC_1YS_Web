const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
// router.post("/login", controller.axios);
router.post("/login2", controller.loginPost);

module.exports = router;