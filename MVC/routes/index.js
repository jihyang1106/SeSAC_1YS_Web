var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

// router에 대한 정의를 여기에 한다. 여러개가 와도 되고, post도 가능
router.get("/", controller.main);
router.get("/test", controller.test);

module.exports = router;