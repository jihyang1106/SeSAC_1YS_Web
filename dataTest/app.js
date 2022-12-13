const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require("./routes");
app.use("/", router);

// const getHTML = async () => {
//     try {
//         return await axios.get("https://www.10000recipe.com/ranking/home_new.html?rtype=r&dtype=d");
//     } catch (err) {
//         console.log(err);
//     }
// }

// getHTML()
//     .then((res) => {
//         // load()는 인자로 html 문자열을 받아 cheerio 객체 반환
//         const $ = cheerio.load(res.data);
        
//         return data;
//     })
//     .then((res)=> console.log(res));



app.listen(port, ()=>{
    console.log("server open : ", port);
})