const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static(path.join(__dirname, "src")));

// {소켓아이디 : 닉네임, 소켓아이디 : 닉네임}
let list = {};

io.on("connect", (socket) => {
  console.log("Server Socket Connected");

  socket.emit("info", socket.id);

  socket.on("username", (name) => {
    list[socket.id] = name;
    io.emit("notice", `${name}님이 입장하셨습니다.`);
    // 사용자의 리스트 보내기 (모든 클라이언트)
    io.emit("list", list);
  });

  // send emit 응답
  socket.on("send", (json) => {
    console.log("json", json);
    json["from"] = socket.id;
    json["username"] = list[socket.id];
    json["is_dm"] = false;
    if (json.to === "전체") io.emit("newMsg", json);
    else {
      json["is_dm"] = true;
      const socketID = Object.keys(list).find((key) => list[key] == json.to);
      // 소켓 아이디에 해당하는 클라이언트에게 메세지 전송
      io.to(socketID).emit("newMsg", json);
      socket.emit("newMsg", json);
    }
  });

  socket.on("disconnect", () => {
    io.emit("notice", `${list[socket.id]} 님이 퇴장하셨습니다.`);
    // 나간 닉네임은 list에서 삭제한 후 업데이트
    delete list[socket.id];
    io.emit("list", list);
  });
});

http.listen(8000, () => {
  console.log("Server port : ", 8000);
});
