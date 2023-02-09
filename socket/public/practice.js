let socket = io();
let chatView = document.getElementById("chatView");
let chatForm = document.getElementById("chatForm");
let send = document.querySelector("#send");

let user;
// 최초 입장 시
socket.on("notice", (msg) => {
  $("#notice").text(msg);
});

const chat = () => {
  let msg = $("#msg");

  socket.emit("send", msg.val());
  let msgLine = $("<div class='msgLine'>");
  let msgBox = $("<div class='me'>");

  msgBox.append(msg.val());
  msgBox.css("display", "inline-block");
  msgLine.css("text-align", "right");
  msgLine.append(msgBox);

  $("#chatView").append(msgLine);
  //   msg.val("");
  //   chatView.scrollTop = chatView.scrollHeight;
  chatView.scrollTo(0, chatView.scrollHeight);
};

socket.on("SEND", function (msg) {
  var msgLine = $('<div class="msgLine">');
  var msgBox = $('<div class="msgBox">');

  msgBox.append(msg);
  msgBox.css("display", "inline-block");

  msgLine.append(msgBox);
  $("#chatView").append(msgLine);

  //   chatView.scrollTop = chatView.scrollHeight;
  chatView.scrollTo(0, chatView.scrollHeight);
});
