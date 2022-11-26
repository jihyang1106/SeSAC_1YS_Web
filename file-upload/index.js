const express = require("express");
const multer = require("multer"); 
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// 미들웨어 연습
app.get("/", test, test2, (req,res)=>{
    console.log("hello");
    res.send("hello");
})

function test(req, res, next) {
    console.log(req.query);
    console.log("test 함수입니다.");
    next(); // test 미들웨어 함수가 끝났고, 그 다음을 진행해라
}
function test2(req,res,next) {
    console.log("test2 함수입니다.");
}

// 경로 설정 및 파일 생성
// const upload = multer({
//     dest : "uploads/" // destination
// })

// 디테일한 경로 및 이름 설정
const upload = multer({
    storage: multer.diskStorage({ 
        destination (req,file,done){
            done(null, 'uploads/') // 첫 번째 인자 null (성공할 시)
        },
        filename(req,file,done){
            console.log(req.body);
            const ext = path.extname(file.originalname); // 확장자 : ext, originalname : 클라이언트가 올린 파일의 원본 이름
            const filename = Date.now() + ext; 
            done(null, filename);
        }
    })
})

// localhost:8080/file
app.get("/file", (req,res)=>{
    res.render("file");
})

// upload.single
app.post("/upload", upload.single("userfile"), (req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send("upload complete");
})

// upload.array
app.post("/upload-array", upload.array("userfile"), (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send("upload complete");
})

// upload.fields
app.post("/upload-fields", upload.fields([{name:'userfile1'},{name:'userfile2'},{name:'userfile3'}]), (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send("upload complete");
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})

