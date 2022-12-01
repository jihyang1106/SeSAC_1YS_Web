const model = require("../model/User");

exports.main = (req,res) => {
    res.render("index");
}

exports.axios = (req,res) => {
    console.log(req.body);
    let info = model.user();
    if(req.body.id === info.id && req.body.pwd === info.pwd){
        res.send("<span style='color:blue'>로그인 성공 :)</span>");
    }else {
        res.send("<span style='color:red'>로그인 실패 :<</span>");
    }
}

exports.loginPost = (req,res) => {
    let users = model.user2();
    let userList = users.split("\n");

    let login_compare = false;
    let userName = "";

    for(var i=0;i<userList.length;i++){
       let user = userList[i].split("//");

       if(req.body.id === user[0] && req.body.pwd === user[1]){
            login_compare = true;
            userName = user[2];
            break;
       }
    }

    if(login_compare) res.send(`${userName} 님 환영합니다.`);
    else res.send("로그인 실패");
   
}