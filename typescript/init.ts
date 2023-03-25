// 변수
// 키워드 변수이름:타입= 값;
// 타입표기(type annotation)
const str: string = "string";
const num: number = 1;
const bool: boolean = true;

// object
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
const arr3: String[] = ["a", "b", "c"];
// console.log(arr3[0].concat("!"));

// tuple : 정의해서 고정 하는 값 (길이 고정, 요소의 타입 지정)
const arr4: [boolean, string] = [true, "a"];

// enum
enum Names {
  sesac,
  새싹,
}
let name1: Names = Names.sesac;
let name2: String = Names[0];
// console.log(name1);
// console.log(name2);

// any : 최대한 안 쓰는 게 좋다.
// 모든 타입에 대해서 허용한다.
const any1: any = "a";
const any2: any = 1;
const any3: any = [1, 2, 3];

// void : undefined와 null만 들어갈 수 있는 타입
// 함수에는 쓰는데 변수에는 잘 사용하지 x
// 함수에 리턴타입이 없으면 void로 지정
const var1: void = undefined;

// never
// 함수를 실행할 때 절대 마칠 수 없는 타입에 부여
function neverEnd(): never {
  while (true) {}
}

//////////////// 함수
// (매개변수 : type) : <return>
// function 함수이름 (매개변수:type) :  반환타입 {}
function sum1(a: number, b: number): number {
  return a + b;
}

// ?가 있으면 선택적으로 받을 수도 있고 안받을 수도 있음
function sum2(a: number, b?: number): number {
  if (b == undefined) return a;
  else return a + b;
  // return a + b; // number + number 혹은 number + undefined 일 수도 있음
}

// sum2(1);
// sum2(1, 2);

// interface
interface Student {
  name: String; // not null
  age: number; // not null
  nickname?: string; // null
}

const student1: Student = {
  name: "이름1",
  age: 12,
};

const student2: Student = {
  name: "이름2",
  age: 14,
  nickname: "닉네임1",
};

function check(stu: Student) {
  console.log(stu.name);
}

check(student1);
check(student2);

//class
// class 클래스이름 {
//   변수명: 타입;
//   constructor(변수: 타입) {
//     this.변수명 = 변수;
//   }
// }

class Person {
  id: string;
  constructor(name: string, age: number) {
    this.id = name + age;
  }
}

const person1 = new Person("이름1", 30);
console.log(person1.id);

interface Shape {
  width: number;
  getLength(): number; // getLength()는 number를 return 하는 함수
}

// 오류남 생성자를 만들어야 함
// class Square implements Shape {
//   width: number;
//   getLength(): number {
//     return this.width;
//   }
// }

// read-only
class Square2 implements Shape {
  constructor(readonly width: number) {}
  getLength(): number {
    return this.width;
  }
}

const square2 = new Square2(10);
console.log(square2.getLength());

class Person2 {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}
const person3 = new Person2("person3", 1);
console.log(person3.name);
// console.log(person3.age);

// 제네릭(Generic) : 제사용성 높은 컴포넌트 만들 때 사용
// 한가지타입이 아니라 여러가지 타입
function getText<T>(text: T): T {
  return text;
}
console.log(getText<string>("a"));
console.log(getText<number>(1));
