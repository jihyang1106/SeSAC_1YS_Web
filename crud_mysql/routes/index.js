const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 로그인
router.get("/signin", controller.signin);
router.post("/signin", controller.signinChk);

// // 회원가입
router.get("/signup", controller.signup)
router.post("/signup", controller.signupChk);

// // 프로필(회원정보 수정)
router.post("/profile", controller.profile);
router.patch("/profile/update", controller.updateProfile);

// // 회원정보 삭제
router.delete("/profile/delete", controller.deleteUser);

module.exports = router;