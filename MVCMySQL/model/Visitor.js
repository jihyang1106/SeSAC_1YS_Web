const mysql = require("mysql");

const conn = mysql.createConnection({
    host: 'localhost',
    user : 'user',
    password : '3306',
    database : 'testdb',
})

// Cvisitor.js에서 넘겨준 콜백함수가 인자로 들어옴
exports.get_visitor = (cb) => {
    let sql = "SELECT * FROM visitor";
    // 결과를 두번째 매개변수에 넣는다.
    // 콜백함수를 넘겨주는 이유 => query가 느리게 동작하기 때문
    conn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("visitors : ", rows);
        cb(rows);
    })
}


exports.register_visitor = (info, cb) => {
    // info = req.body {name : , comment : }
    let sql = `INSERT INTO visitor(name, comment) VALUES('${info.name}','${info.comment}')`;
    conn.query(sql, (err, result) => {
        if(err) throw err;
        // select는 행으로 결과가 나오지만 insert는 그냥 결과로 나온다. 
        //console.log("insert result: ", result);
        cb(result.insertId);
    })

}