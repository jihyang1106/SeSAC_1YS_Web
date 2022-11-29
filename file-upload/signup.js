const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/", (req,res)=>{
    res.render("signup");
})

// 업로드한 파일이 보이기 위한 static 설정 
app.use("/uploads", express.static("uploads")); 

// upload 경로 및 이름 설정 
const upload = multer({
    storage : multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname); // 선택한 파일의 확장자
            const filename = req.body.id + ext;
            done(null, filename);
        }
    })
})

app.post("/upload", upload.single("userfile"), (req,res)=>{
    // axios
    // res.send("<img src="+req.file.path+" title="+req.file.filename+">");
    // fetch & Ajax
    const body = req.body;
    const file = req.file;
    console.log(body, file);
    res.send({body : req.body, file : req.file});

})

app.listen(port, ()=>{
   console.log("server open : ", port); 
})


