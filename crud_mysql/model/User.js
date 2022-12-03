const mysql = require("mysql");

const conn = mysql.createConnection({
    host: 'localhost',
    user : 'user',
    password : '3306',
    database : 'testdb',
})

// 로그인 성공 유무
exports.selectById = (user, cb) => {
    let sql = `SELECT * FROM member WHERE ID LIKE BINARY '${user.ID}' 
    and Password=${user.Pwd}`;
    conn.query(sql, (err, rows) => {
        if(err) throw err;
        cb(rows[0]);
    })
}

// 회원가입
exports.insert = (user, cb) => {
    let sql = `INSERT INTO member values('${user.ID}','${user.Pwd}','${user.name}')`;
    conn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("insert result : ", result);
        cb(result);
    })
}

// 회원 profile 
exports.profile = (id, cb) => {
    let sql = `SELECT * FROM member WHERE ID='${id}' LIMIT 1`;
    conn.query(sql, (err, row)=> {
        if(err) throw err;
        // console.log("users : ", row); 
        cb(row);
    })
}