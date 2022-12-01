exports.main = (req,res) => {
    res.render("index");
}

exports.axios = (req,res) => {
    console.log(req.body);
    if(req.body.id === "asdf" && req.body.pwd === "1234"){
        res.send("<span style='color:blue'>로그인 성공 :)</span>");
    }else {
        res.send("<span style='color:red'>로그인 실패 :<</span>");
    }
}