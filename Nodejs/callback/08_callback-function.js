// function func1(value, call){
//     console.log(value);
//     call();
// }
// func1('a', function(){
//     console.log("1");
// });

// function func2(){
//     console.log("2");
// }
// func1(func2);   

console.log("start");
function login(id, pw){
    setTimeout(()=>{
        console.log("로그인 성공");
        pw(id);
    }, 2000);
}

login("kim", function(id){
    console.log(id + "님 환영합니다!");
});

console.log("finish");
