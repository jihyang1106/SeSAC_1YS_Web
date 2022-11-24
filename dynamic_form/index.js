const express = require("express");
const app = express();
const port = 8080;

// ejs 템플릿 사용
app.set('view engine', 'ejs');

// body-parser
app.use(express.urlencoded({extended: true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); // 데이터를 json 형태로 파싱(post 요청시 사용)

//axios
app.get("/", (req,res)=>{
    res.render("index");
})
// axios get
app.get("/form", (req,res)=>{
    console.log(req.query);
    res.send("이름은 : " + req.query.name); // , XX  + 여야 함
})

// axios get 실습
app.get("/axios", (req,res)=>{
    res.render("axios");
})
app.get("/axiosGet", (req,res)=>{
   res.send(req.query);
})

// axios post
app.post("/form", (req,res)=>{
    console.log(req.body);
    res.send({msg : "이름은 : " + req.body.name});
})

// axios post 실습
app.get("/axiosPost", (req,res)=>{
    res.render("axiosPost");
})

app.post("/axiosPost", (req,res)=>{
    if(req.body.id === "asdf" && req.body.pwd === "1234"){
        res.send("<span style='color:blue'>로그인 성공 :)</span>");
    }else if(req.body.id != "asdf") {
        res.send("<span style='color:red'>아이디가 달라요 :< </span>");
    } else if(req.body.pwd != "1234") {
        res.send("<span style='color:red'>비밀번호가 달라요 :< </span>");
    } else {
        res.send("<span style='color:red'>로그인 실패 :<</span>");
    }
})

// fetch 실습 
app.get("/fetch", (req,res)=>{
    res.render("fetch");
})

// fetch get
app.get("/fetchGet", (req,res)=>{
    res.send(req.query);
})
// fetch post
app.post("/fetchPost", (req,res)=>{
    res.send(req.body);
})

app.listen(port, ()=>{
    console.log("port : ", port);
})