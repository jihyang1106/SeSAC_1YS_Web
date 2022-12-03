const Visitor = require("../model/Visitor");

// SELECT
// 인자를 콜백함수로 넘겨준다!
exports.visitor = (req,res) => {
    Visitor.get_visitor((rows)=>{
        res.render("visitor", {data : rows});
    })
}

// INSERT
exports.register = (req,res) => {
    // req.body와 콜백함수 넘겨줌(insert문에서 req.body를 사용해야 하기 때문)
    Visitor.register_visitor( req.body, (insertId)=>{
         res.send(String(insertId)); // 쿼리를 날려서 나온 결과값(id만 넘겨주게 됨)
    })
}

// DELETE
exports.delete = (req,res) => {
    // mysql req.body.id에 해당하는 데이터 삭제
    // 서버 응답 res.send();
    Visitor.delete_visitor(req.body.id, ()=>{
        res.send(true); // 서버에 응답을 보내야지만 실행!
    })
}

// ID값으로 데이터 조회(GET)
exports.get_visitor_by_id = (req,res) => {
    // mysql req.body.id에 해당하는 데이터 조회
    // 조회한 데이터 응답
    Visitor.get_visitor_by_id_model(req.query.id, (rows)=>{
        res.send(rows);
    })
}

exports.update = (req,res) => {
    // req.body 데이터를 mysql에 update 할 수 있도록
    // mysql req.body.id에 해당하는 데이터 수정
    // 수정한 데이터 응답
    Visitor.update_visitor(req.body, ()=>{
        res.send("success");
    })
}