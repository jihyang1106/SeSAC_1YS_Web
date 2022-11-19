function func3(flag){
    return new Promise((resolve, reject)=>{
        if(flag == true){
            resolve("flag는 true");
        }else{
            reject("flag는 false");
        }
    })
}

// func3(false).then(
//     (msg)=>{
//     console.log("msg1: ", msg);
//     }, (msg)=>{
//     console.log("msg2: ", msg); 
//     },
// );

// func3(false).then(
//     function(msg){
//     console.log("msg1: ", msg);
//     }
// ).catch(function(msg){
//     console.log("msg2: ", msg);
//     }
// )

func3(false).then(
    (msg)=>{
    console.log("msg1: ", msg);
    }, (msg)=>{
    console.log("msg2: ", msg);
    },
).catch(function(msg){
    console.log("msg3: ", msg);
    }
) // then에서 처리하지 않으면 catch에서 처리, then에서 모두 처리 되면 catch에서 처리 xx