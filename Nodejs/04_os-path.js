// (1) OS 모듈
// 내장 모듈이라서 OS를 불러와서 사용할 수 있음
// const os = require("os");
// console.log("os.type : " + os.type());
// // console.log("os.cpus : " + os.cpus());
// console.log("os.homedir : " + os.homedir());
// console.log("os.freemem : " + os.freemem());
// console.log("os.totalmem : " + os.totalmem());

// (2) path 모듈
// 폴더와 파일 경로를 좀 더 쉽게 찾을 수 있게 도와줌
const path = require("path");
const file = __filename;
console.log("path.extname : ", path.extname(file)); // 현재 파일의 확장자
console.log("path.parse : ", path.parse(file)); // 현재 파일의 경로를 구분자로 구분 지어서 보여줌(문자열연결 시"," 필요 "+"xx)
console.log("path.basename :", path.basename(file)); // 파일 이름(window에서)

// 실습 : 내장 모듈 이용하기
// const os = require("os");
// console.log("1) 사용 가능한 메모리 : " + os.freemem());
// console.log("2) 전체 메모리 용량 : " + os.totalmem());
// console.log("3) 홈 디렉토리 경로 : " + os.homedir());
// const path = require("path");
// const file = __filename;
// console.log("1) 경로 구분자 : " + path.sep );
// console.log("2) 현재 파일의 확장자 : " + path.extname(file));
// console.log("3) 현재 파일의 경로를 분리해서 출력 : ", path.parse(file));
// console.log(path.basename(file));
