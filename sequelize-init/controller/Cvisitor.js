// 객체 구조 분해 할당으로 db 안에 visitor를 가져온다.
const { Visitor } = require("../model");
const { Op } = require("sequelize"); // where안에 조건절을 위해

// visitor 페이지 렌더 (SELECT)
// (1) promise 객체
// exports.visitor = (req, res) => {
//     Visitor.findAll() 
//     .then((result)=>{
//         console.log("visitor result : ", result);
//         console.log("result id : ", result[0].id);
//         res.render("visitor", {data :result});
//     })
// }

// (2) async await 
exports.visitor = async (req, res) => {
    let result = await Visitor.findAll(); 
    res.render("visitor", {data : result})
}

// visitor 등록 (INSERT)
// (1) promise 객체
// exports.register = (req, res) => {
//     let data = {
//         name : req.body.name,
//         comment : req.body.comment
//     }
//     Visitor.create(data)
//     .then((result)=>{
//         console.log("insert result : ", result);
//         console.log("result id: ", result.id)
//         res.send(String(result.id));
//     })
// }

// (2) async await
exports.register = async (req, res) => {
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }
    let result = await Visitor.create(data);
    res.send(String(result.id));
}

// updateLoad (SELECT get 조회)
// (1) promise 객체
// exports.get_visitor_by_id = (req, res) => {
//     Visitor.findOne({ 
//         where : { id : req.query.id } 
//     }) 
//     .then((result)=>{
//         res.send(result);
//         console.log("result one : ", result);
//         console.log("result.id: ", result.id); 
//     })
// }

// (2) async await
exports.get_visitor_by_id = async (req, res) => {
    let result = await Visitor.findOne({
        where : { id : { [Op.substring] : req.query.id } },
    });
    res.send(result);
}


// visitor 수정 (UPDATE)
// (1) promise 객체
// exports.update_visitor =  (req, res) => {
//     // 첫 번째 인자 데이터
//     let data = {
//         name : req.body.name,
//         comment : req.body.comment
//     }
//     // 두 번째 인자 where 절
//     Visitor.update(data,{
//         where : {id : req.body.id}
//     })
//     .then((result)=>{
//         console.log("update result: ", result);
//         console.log("update result[0]: ", result[0]);
//         res.send(true);
//     })
// }

// (2) async awit
exports.update_visitor = async (req, res) => {
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }
    await Visitor.update(data, {
        where : {id : req.body.id}
    }).then(()=>{
        res.send(true);
    })
}

// visitor 삭제 (DELETE)
// (1) promise 객체
// exports.delete =  (req, res) => {
//     Visitor.destroy({
//         where : {id : req.body.id}
//     })
//     .then((result)=>{
//         console.log("destory result : ", result);
//         console.log("destory result typeof : ", typeof(result));
//         res.send(true);
//     })
// }

// (2) async await
exports.delete = async (req, res) => {
    await Visitor.destroy({
        where : {id : req.body.id}
    })
    res.send(true);
}

// sql 쿼리문과 연동 된 것 (기존 코드)
// const Visitor = require("../model/Visitor");

// visitor 페이지 렌더
// exports.visitor = (req, res) => {    
//     Visitor.get_visitor(function(result){
//         res.render("visitor", {data: result});
//     })
// }

// visitor 등록
// exports.register = (req, res) => {
//     Visitor.register_visitor( req.body, function(id){
//         res.send(String(id));
//     })
// }

// updateLoad (SELECT)
// exports.get_visitor_by_id = async (req, res) => {
//     // req.query.id 에 해당하는 데이터를 조회
//     // 서버 응답 > 조회한 데이터
//     Visitor.get_visitor_by_id_model(req.query.id, function(rows){
//         res.send(rows);
//     });
// }

// visitor 수정 (UPDATE)
// exports.update_visitor = (req, res) => {
//     // 서버의 응답 
//     Visitor.update_visitor(req.body, function(){
//         res.send(true);
//     });
// }

// visitor 삭제 (DELETE)
// exports.delete = async (req, res) => {
//     Visitor.delete_visitor(req.body.id, function(){
//         res.send(true);
//     })
// }