// new Promise(function(resolve, reject){

// });

function func1(){
    return new Promise(function(resolve, reject){
        resolve("성공");        
    });
}

function func2(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("성공");  
        },1000);       
    });
}

// var a = func1();
// console.log(a);
// func1().then(function(res){
//     console.log("func1 result:", res);
// });

var b = func2();
console.log(b);
func2().then((res)=>{
    console.log("func2 result:", res);
    return 'a';
}).then(function(res){
    console.log("abc:",res);
})
