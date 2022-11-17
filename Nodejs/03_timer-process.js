// setTimeout(function(){
//     console.log("1.5초 후 실행");
// },1500);

// function a() {console.log("1.5초 후 실행");}
// setTimeout(a,1500);

const func1 = setTimeout(function(){
    console.log("1.5초 후 실행"); 
}, 1500);
const func2 = setInterval(()=>{
    console.log("1초마다 반복"); 
}, 1000);
const func3 = setTimeout(()=>{
    console.log("func3 실행");
}, 3000);

setTimeout(()=>{
    clearTimeout(func3);
    clearInterval(func2);
},2500); 

const func4 = setImmediate(()=>{
    console.log("func4 즉시 실행"); 
})
const func5 = setImmediate(()=>{
    console.log("func5 즉시 실행"); 
})
clearImmediate(func5);

console.log("__filename :" + __filename);
console.log("__dirname : ", __dirname);

// // process 객체 = 현재 실행 중인 노드 프로세스 정보
// // 컴퓨터에 따라 결과가 다르게 나올 수 있다. 
console.log("process.version : ", process.version);
console.log("process.arch : ", process.arch);
console.log("process.platform : ", process.platform);
console.log("process.cpuUsage : ", process.cpuUsage());
