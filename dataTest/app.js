const express = require("express");
const app = express();
const port = 8090;

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

// DB 연결 성공 여부
// const {sequelize} = require('./model/index'); 
// // 다른 require문은 일단 생략
// const ConnectDB = async () => {
//     try {
//         await sequelize.authenticate().then( 
//             () => console.log('데이터베이스 연결 성공!')
//         );
//         await sequelize.sync().then(
//             () => console.log('동기화 완료!')
//         );
//     } catch (error) {
//         console.error('DB 연결 및 동기화 실패', error);
//     }
// }
// // DB와 연결 및 동기화
// ConnectDB();



app.listen(port, ()=>{
    console.log("server open : ", port);
})