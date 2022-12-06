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
// 괄호가 있다 => 함수를 실행한다. => 함수의 return 값을 받는다.
// sequelize의 db 정보(config)와 모델을 정의 한 것을 connect하기 위해 첫 번째 인자
// Sequelize의 DataTypes을 사용하기 위해 두 번째 인자
db.Visitor = require("./Visitor")(sequelize, Sequelize);

module.exports = db;