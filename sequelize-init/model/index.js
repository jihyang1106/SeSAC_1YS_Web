const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

// db에 connection 
const db = {};
const sequelize = new Sequelize(
    config.database, // DB이름
    config.username, // 유저이름
    config.password, // 비밀번호
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// 모델이름과 동일하게하기
// 괄호가 있다 => 함수를 실행시키겠다.
// Sequlize.define()으로 모델을 정의할 수 있다. 
// 함수를 실행시켜야지 Visitor 함수의 return 값을 받아올 수 있다. 
// sequelize 모듈 호출해온것을 두 번째 매개변수로
// sequelize안에 DataTypes을 사용하기 위해 두 번째 인자로 보냈다.
db.Visitor = require("./Visitor")(sequelize, Sequelize);

// db = { 
//     "sequlize" : sequelize,
//     "Sequelize" : Sequelize,
//     "visitor" : "Visitor.js에서 return 받은 값"
// }

module.exports = db;