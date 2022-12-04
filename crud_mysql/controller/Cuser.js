const User = require("../model/User");

// 로그인 페이지 렌더
exports.signin = (req,res) => {
    res.render("signin");
}
// 로그인 체크(회원 유무)
exports.signinChk = (req,res) => {
    User.selectById(req.body, (row)=>{
        res.send(row);
    })
}

// 회원가입 페이지 렌더
exports.signup = (req,res) => {
    res.render("signup");
}
// 회원가입 체크(회원 등록)
exports.signupChk = (req,res) => {
    User.insert(req.body, (result)=>{
        res.send(result);
    })
}

// 회원정보수정 폼 페이지
exports.profile = (req,res) => {
    User.profile(req.body.ID, (row) => {
        if(row.length>0) {
            res.render("profile", {data : row[0]});
        }else {
            res.redirect("/user/signin");
        }
    })
}

// 회원정보수정
exports.updateProfile = (req,res) => {
    User.update(req.body, ()=>{
        res.send(true);
    })
}

// 회원정보삭제 
exports.deleteUser = (req,res) => {
    User.delete(req.body.ID, ()=>{
        res.send(true)
    })
}