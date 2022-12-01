let express = require("express");
let controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
router.post("/login", controller.axios);

module.exports = router;