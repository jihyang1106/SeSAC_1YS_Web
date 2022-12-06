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
            comment : { // comment mediumtext null
                type : DataTypes.TEXT("medium"),
            }
        },
        { 
            tableName : "visitor", 
            freezeTableName : true, 
            timestamps : false, 
        }
    );
}

module.exports = Visitor;