const mysql2 = require("../../db/mysql2.js");

exports.getUserInfo = getUserInfo;
exports.doLogin = doLogin;

function getUserInfo(req,res,next){
	console.log("getUserInfo...");
	mysql2.queryAllData("t_user",function(err,results){
		//console.log(results);
		res.json(results);
	})
}

function doLogin(req,res,next){
	console.log("doLogin...");
	var name = req.query.username;
	var password = req.query.password;
	var sql = 'SELECT * FROM `t_user` WHERE `name` = ? ';
	mysql2.execSql(sql,[name],function(err,results){
		var passwordQuery = "";
		console.log(results);
		if(results.length > 0){
			passwordQuery = results[0].password;
		}
		//服务器错误
		if(err){
			console.log(err);
			res.json(-3);
			return;
		}
		//用户名不存在
		if(0 == results.length){
			res.json(-2);
			return;
		}
		//密码错误
		if(password != passwordQuery){
			res.json(-1);
			return;
		}
		//登录成功
		res.json(1);
		return;
	});
}