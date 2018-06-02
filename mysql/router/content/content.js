const mysql2 = require("../../db/mysql2.js");

exports.getAllContent = getAllContent;

function getAllContent(req,res,next) {
    mysql2.queryAllData("t_content",function(err,results){
        //console.log(results);
        res.json(results);
    })
}