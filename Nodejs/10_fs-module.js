// // 콜백함수처럼 했지만, 현재는 promise 방식으로 사용 가능
// // 내장 모듈이라서 설치 불필요

// // (1) 콜백함수로 데이터 가져오기
//const fs = require("fs");
// fs.readFile("./test.txt", function(err, data){ 
//     if(err) throw err; // throw하는 즉시 멈춘다.
//     console.log("data: ", data);
//     console.log(data + ""); 
//     console.log(data.toString()); 
//     console.log(String(data));  
// });

// // (2) Promise객체로 데이터 가져오기
   const fs2 = require("fs").promises; // promise로 되어있는 함수 사용 가능
// fs2.readFile("./test.txt")
//     .then((data)=>{
//     console.log("promise - data : ", data);
//     }).catch((err)=>{
//         console.log(err.message);
//     })

// (3) 콜백 함수로 writeFile
// fs.writeFile('./write2.txt', 'codingon', function(err){ // 에러만 처리하는 함수를 세번째 매개변수로
//     if(err) throw err;
//     console.log("writeFile success!");
//     fs.readFile("./write2.txt", function(err, data){
//         if(err) throw err;
//         console.log(data.toString());
//     })
// });

// // (4) Promise 객체로 writeFile 
fs2.writeFile("./write.txt", "sesac")
    .then(()=>{
        console.log("writeFile success");
        return fs2.readFile("./write.txt");
    })
    .then((data)=>{
        console.log(data.toString());
    });