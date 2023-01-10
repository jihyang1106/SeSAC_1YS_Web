import React, { useState } from "react";

export default function EventFun() {
  const [form, setForm] = useState({
    username: "",
    msg: "",
  });
  const { username, msg } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ":" + msg);
    setForm({
      username: "",
      msg: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>리액트의 이벤트</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자이름"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="msg"
        placeholder="입력하세요"
        value={msg}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>클릭</button>
    </div>
  );
}
