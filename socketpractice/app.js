const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const http = require("http");
const server = http.createServer(app);
// express로 구현한 app을 담아서 express가 http를 통해서 실행될 수 있다.
const socketIO = require("socket.io");
const io = socketIO(server);

const moment = require("moment");
// 운영 체제마다 경로를 나타내는 슬래쉬가 다르기 때문에 path.join 사용
app.use(express.static(path.join(__dirname, "src")));

io.on("connection", (socket) => {
  console.log("연결완료");
  socket.on("chatting", (data) => {
    const { name, msg } = data;
    io.emit("chatting", {
      name,
      msg,
      time: moment(new Date()).format("h:mm"),
    });
  });
});

server.listen(PORT, () => {
  console.log(`server is running : ${PORT}`);
});
