const express = require("express");
const app = express();
const port = 8080;
const mysql = require("mysql");

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '3306',
    database : 'testdb',
})

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req,res)=>{
    conn.query('select * from user', (err, result)=>{
        if(err) throw err; // 에러 처리
        res.render("index", {rows : result});
    });
})

app.listen(port, ()=>{
    console.log("open port : " + port);
})
