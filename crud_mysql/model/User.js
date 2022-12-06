const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "member",
        {
            ID : {
                type : DataTypes.STRING(10),
                allowNull : false,
                primaryKey : true
            },
            Password : {
                type : DataTypes.STRING(20),
                allowNull : false
            },
            name : {
                type : DataTypes.STRING(10),
                allowNull : false
            }
        },
        {
            tableName : "member",
            freezeTableName : true,
            timestamps : false
        }
    );
} 

module.exports = User;

// const mysql = require("mysql");

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user : 'user',
//     password : 'root1106',
//     database : 'testdb',
// })

// // 로그인 성공 유무
// exports.selectById = (user, cb) => {
//     let sql = `SELECT * FROM member WHERE ID LIKE BINARY '${user.ID}' 
//     and Password=${user.Pwd}`;
//     conn.query(sql, (err, rows) => {
//         if(err) throw err;
//         cb(rows[0]);
//     })
// }

// // 회원가입
// exports.insert = (user, cb) => {
//     let sql = `INSERT INTO member values('${user.ID}','${user.Pwd}','${user.name}')`;
//     conn.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log("insert result : ", result);
//         cb(result);
//     })
// }

// // 회원 profile 
// exports.profile = (id, cb) => {
//     let sql = `SELECT * FROM member WHERE ID='${id}' LIMIT 1`;
//     conn.query(sql, (err, row)=> {
//         if(err) throw err;
//         cb(row);
//     })
// }

// // 회원 profile 수정
// exports.update = (user, cb) => {
//     let sql = `UPDATE member SET Password='${user.Pwd}', name='${user.name}'
//     WHERE ID='${user.ID}'`;
//     conn.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log("update result: ", result);
//         cb();
//     })
// }

// // 회원 profile 삭제
// exports.delete = (id, cb) => {
//     let sql = `DELETE FROM member WHERE ID='${id}'`;
//     conn.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log("delete result: ", result);
//         cb();
//     })
// }
