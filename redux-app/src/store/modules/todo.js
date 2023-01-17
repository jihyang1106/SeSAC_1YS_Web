// 액션 타입 정의하기
const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

// 액션 생성 함수 작성
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

// 할 일을 완료하는 DONE 함수 작성
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// 초기 상태 설정
const initState = {
  list: [
    { id: 0, text: "리액트 공부하기", done: false },
    { id: 1, text: "척추의 요정이 말한다. 척주 펴기!", done: false },
    { id: 2, text: "취업 하기", done: false },
  ],
};

let counts = initState.list.length;
initState["nextID"] = counts;

// reducer 설정(실제 작업을 하는 코드)
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      console.log("state!", state);
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
