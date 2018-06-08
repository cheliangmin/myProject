const mysql2 = require("../../db/mysql2.js");
const formidable = require("formidable");

exports.getAllContent = getAllContent;
exports.doAddContent = doAddContent;

function getAllContent(req,res,next) {
    mysql2.queryAllData("t_content",function(err,results){
        //console.log(results);
        res.json(results);
    })
}

function doAddContent (req,res,next){
    var form = new formidable.IncomingForm();
    var author = req.session.username;

    var sqlInsert = 'INSERT INTO `t_content`(title,author,content,createDate) VALUES(?,?,?,?) ';
    form.parse(req, function(err, fields) {
        var title = fields.title;
        var content = fields.content;
        var createDate = new Date();

        mysql2.execSql(sqlInsert,[title,author,content,createDate],function (err,result) {
            if(err){
                console.log(err);
                res.json(-3);
                return;
            }
            res.json(1);
            return;
        });

    });
}