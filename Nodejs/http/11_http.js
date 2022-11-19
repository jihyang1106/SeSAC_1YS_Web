const http = require('http');
const fs = require("fs").promises;

const server = http.createServer(function(req,res){ // 클라이언트의 요청, 서버의 응답
    fs.readFile("./index.html")
        .then(function(data){
            res.end(data.toString());
        });
}); // 웹 서버를 사용할 때 쓰는 객체

// server.on() // 이벤트를 등록하는 함수
// server.listen() // 서버를 실행, 클라이언트를 기다림

server.listen(8080, function(){
    console.log("8080번 port 실행");
})
