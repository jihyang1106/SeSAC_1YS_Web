"use strict";

const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendBtn = document.querySelector(".send-button");
const displayContiner = document.querySelector(".display-container");

chatInput.addEventListener("keypress", (e) => {
  if (e.keycode === 13) send();
});

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  socket.emit("chatting", param);
}

sendBtn.addEventListener("click", send);

socket.on("notice", (msg) => {
  console.log(msg);
});
socket.on("chatting", (data) => {
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time); // LiModel을 인스턴스화
  item.makeLi();
  displayContiner.scrollTo(0, displayContiner.scrollHeight);
  //   const li = document.createElement("li");
  //   li.innerText = `${data.name}님이 - ${data.msg}`;
  //   chatList.appendChild(li);
});

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");
    li.classList.add(nickname.value === this.name ? "sent" : "received");
    const dom = `<span class="profile">
        <span class="user">${this.name}</span>
        <img class="img" src="https://placeimg.com/50/50/any" alt="any" />
        </span>
        <span class="message">${this.msg}</span>
        <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}

console.log(socket);
