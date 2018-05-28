const mysql2 = require("../../db/mysql2.js");

exports.getUserInfo = getUserInfo;

function getUserInfo(req,res,next){
	console.log("getUserInfo...");
	mysql2.queryAllData("t_user",function(err,results){
		//console.log(results);
		res.json(results);
	})
}