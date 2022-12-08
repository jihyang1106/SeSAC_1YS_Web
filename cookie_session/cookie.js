const express = require("express");
const app = express();
const port = 8080;

const cookieParser = require("cookie-parser");
// cookieParser를 사용하기 위해 미들웨어로 등록
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); // 데이터를 json 형태로 파싱(post 요청시 사용)

// 서버의 응답으로 보내기 위해서 res로 
// app.get("/", (req,res)=>{
//     if(req.cookies.test) {
//         res.render("ejs 파일명", { popup : "none"});
//     }else {
//         res.render("ejs 파일명", { popup : "display"});
//     }
//     res.send("hello");
// })

// 옵션 객체 : 쿠키의 만료일 등
const cookieOption = {
    // httpOnly : true,
    maxAge : 10000,
    // expires : 
    // path : 
    // secure :
    // signed :
}

// 서버의 응답
// res.cookie("key", "value", 옵션객체) key value는 마음대로 지정
// app.get("/set", (req,res)=>{
//     res.cookie("test", "1", cookieOption);
//     res.send("cookie 생성 성공");
// })

// 클라이언트에 저장된 쿠키 가져오기
// 서버에서 쿠키를 확인하고 싶을 때 
// app.get("/get", (req,res)=>{
//     console.log(req.cookies);
//     res.send(req.cookies);
// })

app.get("/", (req,res)=>{
    res.render("popup",{ data : req.cookies });
    console.log("cookies : ", req.cookies)
})

app.get("/popup", (req,res)=>{
    res.cookie("DONOTOPEN", "1", cookieOption);
    console.log("req.cookies : ", req.cookies);
    res.send(req.cookies);
})


app.listen(port, ()=>{
    console.log("server open: ", port);
})