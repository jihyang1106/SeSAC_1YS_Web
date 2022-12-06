const mysql = require("mysql");

const conn = mysql.createConnection({
    host: 'localhost',
    user : 'user',
    password : '3306',
    database : 'testdb',
})

// SELECT
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

// INSERT
exports.register_visitor = (info, cb) => {
    // info = req.body {name : , comment : }
    let sql = `INSERT INTO visitor(name, comment) VALUES('${info.name}','${info.comment}')`;
    conn.query(sql, (err, result) => {
        if(err) throw err; 
        //console.log("insert result: ", result);
        cb(result.insertId);
    })
}

// DELETE
exports.delete_visitor = (id, cb) => {
    let sql = `DELETE FROM visitor WHERE id=${id}`;
    conn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("delete result: ", result);
        cb();
    })
}

// GET으로 데이터 조회
exports.get_visitor_by_id_model = (id, cb) => {
    let sql = `SELECT * FROM visitor WHERE id=${id}`;
    conn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("select by id: ", rows);
        cb(rows[0]);
    })
}

// UPDATE
exports.update_visitor = (info, cb) => {
    let sql = `UPDATE visitor SET name='${info.name}', comment='${info.comment}'
    WHERE id=${info.id}`;
    conn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("update result: ", result);
        cb();
    })
}