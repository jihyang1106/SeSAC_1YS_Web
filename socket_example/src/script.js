const username = prompt("닉네임을 입력해주세요");
const socket = io.connect();

const container = document.querySelector(".container");
const input = document.querySelector("#msg_box");
const dm = document.querySelector(".dm");

socket.on("connect", () => {
  console.log("server connected");
  socket.emit("username", username);
});

let myId = ""; // socket_id
socket.on("info", (socketID) => {
  myId = socketID;
});

// 리스트에 있는 닉네임들 불러오기(리스트 업데이트)
socket.on("list", (list) => {
  console.log(list);
  const members = document.querySelector("#members");
  // select box option tag 모두 지우고 전체 추가하기
  while (members.firstChild) members.removeChild(members.lastChild);
  const option = document.createElement("option");
  option.text = "전체";
  option.value = "전체";
  members.appendChild(option);

  // console.log(Object.entries(list));
  for (let [key, value] of Object.entries(list)) {
    const members = document.querySelector("#members");
    const option = document.createElement("option");
    option.text = value;
    option.value = value;
    members.appendChild(option);
  }
});

// notice emit 응답
socket.on("notice", (msg) => {
  const div = document.createElement("div");
  div.classList.add("notice");
  div.textContent = msg;
  container.appendChild(div);
});

// 전송 버튼 눌렀을 때 실행 함수
const btnSend = () => {
  // socket.emit("send", { msg: input.value });

  // 메세지를 보낼때 보내는 사람의 정보도
  const to = document.querySelector("#members").value;
  socket.emit("send", { msg: input.value, to });
};

// newMsg emit 응답
socket.on("newMsg", (json) => {
  // msg : 메시지, form : 보낸 사람 소켓 아이디, username : 보낸 사람 닉네임
  // jsom = { msg : , from : , username: }
  const outer_div = document.createElement("div");
  const div = document.createElement("div");
  div.textContent = `${json.username} : ${json.msg}`;

  if (myId == json.from) {
    if (json.is_dm) outer_div.classList.add("my-dm", "dm");
    else outer_div.classList.add("my-chat");
  } else {
    if (json.is_dm) outer_div.classList.add("dm");
    else outer_div.classList.add("other-chat");
  }

  outer_div.appendChild(div);
  container.appendChild(outer_div);
});

const enter = () => {
  if (event.keyCode == 13) {
    btnSend();
  }
};
