// console.log(global);
// console.log(global.console); // == global.console.log(global.console);

//내장객체 
let obj = {
    out : {
        in : {
            key : 'value'
        }
    }
};
console.log(obj);
console.log(obj["out"]);
console.time("시간"); // time과 timeEnd은 내용이 같아야 함
console.error("error");
console.timeEnd("시간");
console.table([{name:'abc'},{name:'def'}]); // table 보고 싶을 때
console.dir(obj, {colors:true, depth:1}); // 객체의 구조
console.dir(obj, {colors:true, depth:2});
console.trace("error"); // "error"가 어디서 일어나는 지 알려줌