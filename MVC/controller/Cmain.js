const Test = require("../model/Test");

exports.main = (req, res) => {
    // res.send("this is main, hello");
    // res.render("index");
    let hi = Test.hello();
    res.send(hi);
}
exports.test = (req,res) => {
    res.send("test");
}

exports.post = (req,res) => {
    res.send("post");
}

// module.exports = { 
//     main : main,
//     test : test,
//     post : post
// }
