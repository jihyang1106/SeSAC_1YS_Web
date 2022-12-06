const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require("./routes");
app.use("/user", router);

app.get("*", (req,res)=>{
    res.render("404");
})

app.listen(port, ()=>{
    console.log("server open : ", port);
})