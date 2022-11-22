const express = require("express");
const app = express();
const port = 8080;

/* 1) 파일 불러오기
   첫번째 인자: 기본 주소(도메인빼고), 두번째 인자: 함수(무조건 매개변수 필요) */
app.get("/", (req,res)=>{ // req: 클라이언트가 서버에게 보내는 요청
    res.send("Hello Express!"); // res: 서버가 클라이언트에게 보내는 응답
})

// __dirname : C:/~~~~/express/
app.get("/test", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html"); // 무조건 절대경로로!
})

/* 2) 미들웨어 등록 
// 클라이언트가 어떠한 폴더에 접근할 수 있게 하려면 서버측에서 권한을 줘야 함(static)
// express안에 있는 static 메서드를 사용해서 미들웨어 등록
// 첫번째 인자: 가상 경로(원하는 값), 두번째 인자: express.static("폴더이름"); */
app.use("/static", express.static("static")); 
// app.use("/public", express.static("static")); 
// img src="../static/img/sample.jpg" => img src="/public/img/sample.jpg"
// static 이라는 실제 존재하는 폴더에 public 경로로 접근할 수 있도록 함 


/* 3)-1 ejs 템플릿 
 localhost:8080/ejs
 app.get("/ejs", (req,res)=>{
     res.render("index"); // views 폴더안의 파일, 확장자 필요 없음
 }) */
app.set('view engine', 'ejs');

/*3)-2 ejs 파일을 렌더와 동시에 데이터를 보내기
 (두번째 인자는 선택, 넘겨줄 때 객체형태로 넘기기)*/
app.get("/ejs", (req,res)=>{
    res.render("index", {
        title: "index.ejs 파일입니다.",
        data: ["a", "b", "c"]
    });
})

// ejs 실습(1)
app.get("/ejs", (req,res)=>{
    res.render("practice"); 
}) 
// ejs 실습(2)
app.get("/img", (req,res)=>{
    res.render("practice", {
        data : [
            "static/img/1.jpg",
            "static/img/2.jpg",
            "static/img/3.jpg"
        ]
    });
})

// body-parser
app.use(express.urlencoded({extended: true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); // 데이터를 json 형태로 파싱(post 요청시 사용)

// form.ejs 렌더
app.get("/form", (req,res)=>{
    res.render("form");
})

// get 요청 
app.get("/getForm", (req,res)=>{
    console.log(req.query); // get 요청을 하면 query에 정보를 담겨옴
    res.send("get 요청 성공!");
})

// post 요청
app.post("/postForm", (req,res)=>{
    console.log(req.body); // post 요청을 하면 body에 정보를 담겨옴
    res.render("result", { data: req.body })
})

// form 실습
app.get("/form-practice", (req,res)=>{
    res.render("form-practice");
})

// get 요청 실습
app.get("/getPractice", (req,res)=>{
    console.log(req.query);
    res.send("get 요청 성공했습니당!");
})

// post 요청 실습
app.post("/postPractice", (req,res)=>{
    console.log(req.body);
    res.send("post 요청 성공했습니당!");
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})
