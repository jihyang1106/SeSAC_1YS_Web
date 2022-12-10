const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); // 데이터를 json 형태로 파싱(post 요청시 사용)

// 세션 사용하기
const session = require("express-session");
// 세션 안에 옵션 객체를 넣기
app.use(session({
    secret: "sesac", // 무조건 써야함 임의의 문자열로 세션 암호화 결정
    resave: false, // 변경사항이 없어도 재저장을 할 것인지에 대한 여부
    saveUninitialized: true, // 초기화되지 않은 세션 저장 여부, 보통 true
    // cookie: // 서버가 발급해준 세션 ID를 쿠키로 사용 가능
    //         { // session id 쿠키에 대한 옵션
    //             httpOnly:true,
    //             maxAge:
    //         },
    // secure:
}));


// 세션 생성
app.get("/setSession", (req,res)=>{
    req.session.user = "SeSAC";
    res.send("세션 생성 성공");
})

// app.get("/", (req,res)=>{
//     if(req.session.user){
//         // 로그인되어있다.
//         res.render("index", {islogin : true});
//     }else {
//         // 로그인 되지 않았다.
//         res.render("index", {islogin : false});
//     }
//     res.send("session");
// })


// 세션을 사용해서 로그인 여부 검증 (세션에 로그인 여부 저장)
// const user = { id : "asdf", pwd: "1234"};
// app.post("/login", (req,res)=>{
//     if(req.body.id == user.id && req.body.pwd == user.pwd){
//         // 세션에 아이디를 저장
//         req.session.user = req.body.id; 
//         res.send("로그인 성공");
//     }else {
//         res.send("로그인 실패");
//     }
//     res.send("세션 생성 성공");
// })

// 세션 삭제 (로그아웃 시)
// app.destroy("/logout", (req,res)=>{
//     req.session.destroy((err)=>{
//         if(err) throw err; // 에러 처리
//         res.send("로그아웃 성공");
//     });
// })

// session 실습
app.get("/", (req,res)=>{
    res.render("login");
})

app.post("/login", (req,res)=>{
    // 로그인 시
    if(req.body.id && req.body.pwd){
        // 세션에 로그인 아이디 저장
        req.session.user = req.body.id;
        res.send(req.session.user);
    }else {
        res.send("로그인 실패");
    }
})

app.get("/logout", (req,res)=>{
    console.log(req.session.user);
    if(req.session.user){
        res.render("logout", {data : req.session.user});
    }
})

app.delete("/logout", (req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err; // 에러 처리
        res.send();
    });
})

app.get("*", (req,res)=>{
    res.render("404");
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})