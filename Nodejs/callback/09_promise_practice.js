function login(id, pw){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("사용자 입장");
            resolve(id);
        }, 3000);
    })
}

function getVideo(id){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(id + "의 비디오 리스트");
            resolve(['아바타', '라라랜드']);
        }, 2000);
    })
}

function getDetail(video){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("비디오 제목: " + video);
        }, 1000);
    })
}

// 내가 푼 방식
login('kim', '1234').then((id)=>{
    getVideo(id).then((videos)=>{
        getDetail(videos[0]).then((m)=>{
            console.log(m);
        })
    })
})

// 강사님 코드
login('kim','1234').then(function(user){
    return getVideo(user);
}).then(function(videos){
    console.log("videos:", videos);
    return getDetail(videos[0]);
}).then(function(m){
    console.log(m);
})
