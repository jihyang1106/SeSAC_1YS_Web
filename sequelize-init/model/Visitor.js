const Visitor = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "visitor", // create table visitor ()
        {
            id : { // id int not null primary key auto_increment
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            name : { // name varchar(10) not null
                type : DataTypes.STRING(10),
                allowNull : false,
            },
            comment : { // comment mediumtext null(null 이면 allowNull 안적어줘도 됨)
                type : DataTypes.TEXT("medium"),
            }
        },
        {  // // SELECT * FROM visitor; => sql문을 만들때자동으로 SELECT * FROM visitors 이렇게 복수형으로 생성한다.
            tableName : "visitor", 
            freezeTableName : true, // 복수형을 사용하지 않고, 그대로 하겠다.
            timestamps : false, // default 값 true false라고 해두지 않으면 row가 생성, 수정할때마다 createAt이나 modifyAt 수정한 시간을 저장한다.
            // 알아서 생성한 시간과 수정한 시간을 저장한다.
            // collate, charset 속성 등등
        }
    );
}

// 테이블 정의 자체를 JavaScript로 정의 해야한다.
// Sequelize.define(
//     "visitor", // create table visitor ()
//     {
//         id : { // id int not null primary key auto_increment
//             type : DataTypes.INTEGER,
//             allowNull : false,
//             primaryKey : true,
//             auto_increment : true
//         },
//         name : { // name varchar(10) not null
//             type : DataTypes.STRING(10),
//             allowNull : false,
//         },
//         comment : { // comment mediumtext null(null 이면 allowNull 안적어줘도 됨)
//             type : DataTypes.TEXT("medium"),
//         }
//     },
//     {  // // SELECT * FROM visitor; => sql문을 만들때자동으로 SELECT * FROM visitors 이렇게 복수형으로 생성한다.
//         tableName : "visitor", 
//         freezeTableName : true, // 복수형을 사용하지 않고, 그대로 하겠다.
//         timestamp : false, // default 값 true false라고 해두지 않으면 row가 생성, 수정할때마다 createAt이나 modifyAt 수정한 시간을 저장한다.
//         // 알아서 생성한 시간과 수정한 시간을 저장한다.
//         // collate, charset 속성 등등
//     }
// );

module.exports = Visitor;