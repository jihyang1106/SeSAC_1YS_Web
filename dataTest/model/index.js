const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

// db connection
const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.sequelize = sequelize; 
db.Sequelize = Sequelize;

// 레시피 테이블
db.recipe = require("./recipe")(sequelize, Sequelize);

//forien key 설정
module.exports = db;