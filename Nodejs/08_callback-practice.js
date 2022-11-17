function call(name, f){
    setTimeout(() => {
        console.log("사용자는 " + name);
        f("call");
    }, 2000);
    
}
function back(b){
    setTimeout(() => {
        b("back");
    }, 1000);
}
function hell(h){
    setTimeout(() => { 
        h("hell");
    }, 500);    
}

// let a = call("kim");
// console.log("시작은 " + a);
// let b = back();
// console.log("두번째는 " + b);
// let c = hell();
// console.log("세번째는 " + c);

call("kim",(m)=>{
  console.log("시작은 " + m); 
  back((m)=>{
    console.log("두번째는 " + m); 
    hell((m)=>{
        console.log("세번째는 " + m);
    })
  })
});
