// const Visitor = require("../model/Visitor");
// 객체 구조 분해 할당으로 db 안에 visitor를 가져오겠다.
// == const { Visitor } = require("../model/index");  
const { Visitor } = require("../model");

exports.visitor = async (req, res) => {
    /* sequelize안에 있는 findAll함수 == SELECT문
       sequelize는 promise 객체여서 콜백함수 필요없음
       대신 결과값이 나오고 나서 실행하는 함수를 then으로!
    */
    // Visitor.findAll() 
    // .then((result)=>{
    //     console.log(result);
    //     console.log("result id : ", result[0].id);
    //     res.render("visitor", {data :result});
    // })

    // Visitor.findAll() 결과가 나올때까지 기다리고 난 뒤 결과가 result 안에 들어간다.
    // async 함수안에 await을 사용할 수 있다. 
    let result = await Visitor.findAll(); 
    console.log(result);
    res.render("visitor", {data : result});
    
    // SELECT * FROM visitor;
    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

// INSERT INTO visitor
exports.register = async (req, res) => {
    let data = {
        // key는 컬럼이름과 같아야 한다.
        name : req.body.name,
        comment : req.body.comment
    }
    // Visitor.create(data) // 무조건 인자가 들어가야한다. 
    // .then((result)=>{
    //     console.log("insert result : ", result);
    //     // console.log("result id: ", result.id)
    //     res.send(String(result.id));
    // })
    let result = await Visitor.create(data);
    console.log("insert result : ", result);
    res.send(String(result.id));

    // INSER INTO visitor(name, comment) values('${req.body.name}', '${req.body.comment}');
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

// DELETE
exports.delete = async (req, res) => {
    // Visitor.destroy({
    //     where : {id : req.body.id}
    // })
    // .then((result)=>{
    //     console.log("destory result : ", result);
    //     res.send(true);
    // })
    let result = await Visitor.destroy({
        where : {id : req.body.id}
    })
    console.log("destory result: ", result);
    res.send(true);
    // DELETE FROM visitor WHERE id = '${req.body.id}';
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}


// updateLoad
exports.get_visitor_by_id = async (req, res) => {
    // 1. async await
    let result = await Visitor.findOne({
        where : { id : req.query.id }
    });
    console.log("result one : ", result);
    res.send(result);

    // Visitor.findOne({ // sequelize안에 있는 findOne함수 ==> SELECT로 조건에 해당하는 행만
    //     where : { id : req.query.id } // findAll과 findOne의 차이점 limit이 걸려있는지 아닌지 
    // }) 
    // .then((result)=>{
    //     res.send(result);
    //     console.log("result one : ", result);
    // })

    /* findAll로도 where 절 가능
    // Visitor.findOne({ // sequelize안에 있는 findOne함수 ==> SELECT로 조건에 해당하는 행만
    //     where : { id : req.query.id },
    //     limit : 1
        }) */



    // SELECT * FROM visitor WHERE id = "req.query.id";
    // // req.query.id 에 해당하는 데이터를 조회
    // // 서버 응답 > 조회한 데이터
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

// UPDATE
exports.update_visitor = async (req, res) => {
    // 첫 번째 인자
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }
    // 두 번째 인자 where 절
    // Visitor.update(data,{
    //     where : {id : req.body.id}
    // })
    // .then((result)=>{
    //     console.log("update result : ", result);
    //     res.send(true);
    // })
    let result = await Visitor.update(data, {
        where : {id : req.body.id}
    }).then((result)=>{
        console.log("update result : ", result);
        res.send(true);
    })
    // UPDATE visitor SET name='${req.body.name}', comment='${req.body.comment}' WHERE id='${req.body.id}}'
    // 서버의 응답 
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}

