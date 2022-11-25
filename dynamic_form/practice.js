const express = require('express');
const app = express();
const port = 8090;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res)=>{
    res.render("3way-dynamic");
})

// Get
app.get("/login", (req,res)=>{
    console.log("get요청 성공!");
    if(req.query.id === "asdf" && req.query.pwd === "1234"){
        res.send("<p style='color:blue'>로그인 성공 :)</p>");
    }else {
        res.send("<p style='color:red'>로그인 실패 :< </span>");
    }
})

// Post
app.post("/login", (req,res)=>{
    console.log("post요청 성공!")
    if(req.body.id === "asdf" && req.body.pwd === "1234"){
        res.send("<p style='color:blue'>로그인 성공 :)</p>");
    }else {
        res.send("<p style='color:red'>로그인 실패 :< </span>");
    }
})

// fetch Get요청 fetch는 json 객체로 보내줘야 한다. 
app.get("/fetchGet", (req,res)=>{
    console.log("get요청 성공")
    if(req.query.id === "asdf" && req.query.pwd === "1234"){
        res.send({ msg : "<p style='color:blue'>로그인 성공 :)</p>"});
    }else {
        res.send({ msg : "<p style='color:red'>로그인 실패 :< </span>" });
    }
})

app.post("/fetchPost", (req,res)=>{
    console.log("post요청 성공")
    if(req.body.id === "asdf" && req.body.pwd === "1234"){
        res.send({ msg : "<p style='color:blue'>로그인 성공 :)</p>"});
    }else {
        res.send({ msg : "<p style='color:red'>로그인 실패 :< </span>" });
    }
})

app.listen(port, ()=>{
    console.log(port, "port open!");
})