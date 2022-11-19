const http = require("http");
const file = require("fs").promises;

const server = http.createServer((req, res)=>{
    file.readFile("../../css/22.10.29_css_position_실습.html")
    .then(function(data){
        res.end(String(data));
    });
});

server.listen(8080, function(){
    console.log("8080번 .port 실행");
})

