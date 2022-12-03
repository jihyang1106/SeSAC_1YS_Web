const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require("./routes");
app.use("/user", router);

app.get("*", (req,res)=>{
    res.send("입력하신 주소가 존재하지 않습니다.")
})

app.listen(port, ()=>{
    console.log("server open : ", port);
})