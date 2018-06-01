const mysql2 = require("../../db/mysql2.js");
const md5 = require("../../utils/md5.js");


exports.getUserInfo = getUserInfo;
exports.doLogin = doLogin;
exports.doLogout = doLogout;
exports.doRegister = doRegister;
exports.findUser = findUser;

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
		var userinfo = {
				"name":"",
				"login":false,
				"flag":""
		};

		if(results.length > 0){
			passwordQuery = results[0].password;
			userinfo.name = results[0].name;
			userinfo.login = true;
		}
		//服务器错误
		if(err){
			console.log(err);
			userinfo.flag = "-3";
			res.json(userinfo);
			return;
		}
		//用户名不存在
		if(0 == results.length){
			userinfo.flag = "-2";
			res.json(userinfo);
			return;
		}
		//密码错误
		if(password != passwordQuery){
			userinfo.flag = "-1";
			res.json(userinfo);
			return;
		}
		//登录成功
		userinfo.flag = "1";
		req.session.login = true;
		req.session.username = userinfo.name;
		res.json(userinfo);
		return;
	});
}

function doLogout(req,res,next){
	console.log("doLogout...");
	req.session.login = false;
	req.session.username = "";

	res.json(1);
}

function doRegister(req,res,nect) {
	console.log("doRegister...");
	var name = req.query.username;
	var password = req.query.password;

    password = md5(md5(password) + "lyhcar");

	var sqlInsert = 'INSERT INTO `t_user`(name,password) VALUES(?,?) ';
	console.log("新增注册："+name +" "+password);

	mysql2.execSql(sqlInsert,[name,password],function(err,results){
		//console.log(results);
		if(err){
			console.log(err);
			res.json(-3);
			return;
		}

		req.session.login = true;
		req.session.username = name;
		res.json(1);
		return;
	});
}

/**
 * [findUser description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [-3:服务器错误；-2:用户名已存在；1:用户名不存在]
 */
function findUser(req,res,next){
	var name = req.query.username;
	var sqlQuery = 'SELECT * FROM `t_user` WHERE `name` = ? ';
	mysql2.execSql(sqlQuery,[name],function(err,results){
		if(err){
			console.log(err);
			res.json(-3);
			return;
		}
		if(results.length > 0){
			res.json(-2);
			return;
		}
		res.json(1);
		return;
	});
}