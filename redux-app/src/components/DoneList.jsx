import { useSelector } from "react-redux";

const DoneList = () => {
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );
  return (
    <section>
      <h1>완료된 목록</h1>
      {list.map((el) => (
        <li key={el.id}>
          {el.text}
          &nbsp;<button>완료</button>
        </li>
      ))}
    </section>
  );
};

export default DoneList;
