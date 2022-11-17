// module.js의 모듈을 불러와서 add 함수 정의후 다시 모듈 정의
const num = require('./01_module.js');
const a = num.a;
const b = num.b;

function add(){
    return a + b;
}

module.exports = add;
