import React, { useState } from "react";

export default function EventEx() {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChange = (event) => {
    if (event.target.name === "name") setName(event.target.value);
    else setEmail(event.target.value);
  };

  const onClick = () => {
    setInfo(info.concat({ name: name, email: email }));
    setName("");
    setEmail("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="이름"
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="이메일"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>등록</button>
      {info.map((element, idx) => (
        <h2 key={idx}>
          {element.name} : {element.email}
        </h2>
      ))}
    </div>
  );
}
