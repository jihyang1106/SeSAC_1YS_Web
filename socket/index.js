const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/practice/practice.html");
});

app.use(express.static("public"));

// 클라이언트 소켓이 연결되면 콜백 함수가 실행된다.
// socket : 클라이언트 소켓과 연결되고 새로 생성된 소켓
// 서버 소켓(클라이언트 소켓과 연결)
var socketList = [];
io.on("connection", (socket) => {
  socketList.push(socket);
  console.log("server socket connected", socket.id);

  // 최초 입장시
  io.emit("notice", `${socket.id}님이 입장하셨습니다.`);

  socket.on("send", function (msg) {
    console.log(msg);
    socketList.map((item, i) => {
      console.log("socket", socket);
      if (item != socket) {
        item.emit("SEND", msg);
      }
    });
  });

  // socket.on("response", (str) => {
  //   console.log(str);
  // });
  // 실습(1)
  // let data = { hello: "안녕하세요", study: "공부합시다", bye: "안녕히계세요" };

  // socket.on("send", (msg) => {
  //   console.log("client " + msg);
  //   socket.emit("res", msg + " : " + data[msg]);
  // });

  // 클라이언트 연결이 끊어졌을 때 확인 가능
  socket.on("disconnect", () => {
    console.log("server socket disconnected");
  });
});

http.listen(port, () => {
  console.log("Server port : ", port);
});
