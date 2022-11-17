// 구조 분해 할당
// let list = ['1','2'];
// [item1, item2] = list; // let item1 = list[0]; 할 필요 xx
// // 만약 item1과 item2 값이 없을 때 'peach'로 대체 가능
// [item1, item2 = 'peach', item3='orange'] = list; 
// console.log(item1);
// console.log(item2);
// console.log(item3);

let x = 1;
let y = 3;
console.log(x,y);

// // 배열 구조 분해 (tmp 임시 변수 없어도 가능)
[y,x] = [x,y];
console.log(x,y);

// 객체 구조 분해
let obj = {
    a : 'one',
    b : 'two',
    c : 'three'
};

// let { b, a } = obj; // {}안에 순서 상관 무 / 배열에서는 순서 상관 유
// console.log(obj.a);
// console.log(obj.b);
// let { b:key1, a } = obj; // 객체의 이름을 바꾸고 싶을 때 ":" 이용
// console.log(a);
// console.log(key1);
let { b:key1, a, c = 'three'} = obj;  // 객체 안에 변수를 더 추가하고 싶을 때
// console.log(a);
// console.log(key1);
// console.log(c);

// // 전개 연산자 (가장 마지막에 들어가야 함)
let { b, ...rest } = obj;
console.log(b);
console.log(rest);