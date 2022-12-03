const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// localhost:8080/visitor/
router.get("/", controller.visitor);
// localhost:8080/visitor/register
router.post("/register", controller.register);
// localhost:8080/visitor/delete
router.delete("/delete", controller.delete);

// 수정하기 위해 id값으로 데이터 조회
router.get("/get_visitor", controller.get_visitor_by_id);

// localhost:8080/visitor/update
router.patch("/update", controller.update);

module.exports = router;