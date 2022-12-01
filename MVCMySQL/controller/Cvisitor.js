const Visitor = require("../model/Visitor");

// 인자를 콜백함수로 넘겨준다!
exports.visitor = (req,res) => {
    Visitor.get_visitor((rows)=>{
        res.render("visitor", {data : rows});
    })
}

exports.register = (req,res)=> {
    // req.body와 콜백함수 넘겨줌(insert문에서 req.body를 사용해야 하기 때문)
    Visitor.register_visitor( req.body, (insertId)=>{
         res.send(String(insertId)); // 쿼리를 날려서 나온 결과값(id만 넘겨주게 됨)
    })
}