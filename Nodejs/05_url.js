// url 모듈 : 인터넷 주소를 쉽게 조작하도록 도와주는 모듈
// searchParams WHATWG 방식에서 ? 뒤의 처리 부분을 도와준다.
const url = require("url");
// console.log(url);
// const myUrl = "https://sesac.seoul.kr/common/greeting.do";
// console.log(url.parse(myUrl));
// console.log(url.format(myUrl));
// console.log(url.parse(myUrl).protocol);
// var obj = url.parse("https://sesac.seoul.kr/common/greeting.do");
// console.log(obj); // 문자열을 문자로
// console.log(url.format(obj)); // 나눈 문자를 다시 문자열로
// console.log(obj.protocol);

let ipStr = new url.URL("http://localhost?name=sesac&name=홍길동&age=10");
console.log(ipStr.searchParams.getAll('name')); // ? 뒷 문자열 중에서 (특정 key의 value)
console.log(ipStr.searchParams.keys()); // url에서의 모든 keys
console.log(ipStr.searchParams.values()); // url에서의 모든 values

ipStr.searchParams.append("age", "20"); // key와 value 추가
console.log(ipStr.searchParams.getAll('age')); // 20이 추가된 것 확인 가능
console.log(ipStr.searchParams.has('name')); // 주어진 검색 매개변수의 존재 여부를 나타내는 boolean값

// 실습 : url 모듈 이용하기
// let myURL = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac");
// console.log("1) 위의 URL에서 모든 키를 가져오기 : ", myURL.searchParams.keys());
// console.log("2) 위의 URL에서 모든 값을 가져오기 : ", myURL.searchParams.values());
// myURL.searchParams.delete("sm");
// console.log("3) 위의 URL에서 sm 키를 삭제하고 1)을 이용해 모든 키 가져오기 : ", myURL.searchParams.keys());