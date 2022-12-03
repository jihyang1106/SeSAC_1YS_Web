// 로그인 
function login(){
    let form = document.querySelector("#userForm");
    let data = { ID : form.ID.value, Pwd : form.Password.value };
    // 빈칸 경고
    if(!data.ID || !data.Pwd){
        alert("빈칸을 다 채워주세요! :(");
        return false;
    }
    axios({
        method:"post",
        url:"/user/signin",
        data:data
    }).then((res)=>{
        let formInfo = document.querySelector("#formInfo");
        if(res.data){
            alert("로그인 성공하셨어요! :)");
            form.reset();
            formInfo.ID.value = res.data.ID;
            formInfo.submit();
        }else{
            alert("대소문자 구분해서 다시 입력해주시겠어요? :(");
            form.reset();
        }
    })
}


// 회원 등록
function register(){
    let form = document.querySelector("#userForm");
    if(!form.ID.value || !form.Password.value || !form.name.value ){
        alert("빈칸을 다 채워주세요! :(");
        return false;
    }
    axios({
        method:"post",
        url:"/user/signup",
        data: {ID : form.ID.value, Pwd : form.Password.value, name : form.name.value}
    }).then((res)=>{
        alert("회원가입에 성공하셨습니다. :)");
        form.reset();
        window.location.href = 'http://localhost:8080/user/signin';
    })
}

// 회원정보수정
function updateProfile(){
    let form = document.querySelector("#userForm")
    let data = { ID : form.ID.value, Pwd : form.Password.value, 
        name : form.name.value};
    axios({
        method:"patch",
        url:"/user/profile/update",
        data : data
    }).then((res)=>{
       if(res){
            alert("회원수정에 성공했습니다! :)");
       }else {
            alert("오류가 발생했습니다 :(");
       }
    })
}

function deleteProfile(id) {
    if(confirm("정말 탈퇴하시겠어요? :(")){
        axios({
            method:"delete",
            url:"/user/profile/delete",
            data:{ID:id}
        }).then((res)=>{
            if(res){
                alert("회원탈퇴가 완료되었습니다:( 다음에 또 봐요");
                document.location.href = "/user/signin";
            }else {
                alert("오류가 발생했습니다 :(");
            }
        })
    }else{
        alert("잘 생각하셨어요!");
        return false;
    }

}