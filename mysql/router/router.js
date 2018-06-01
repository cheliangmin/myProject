const user = require("./user/user.js");

exports.getUserInfo = user.getUserInfo;

exports.doLogin = user.doLogin;

exports.showIndex = function(req,res,next) {
	console.log("showIndex...");
	var login = req.session.login || false;
	var username = req.session.username || "";
	if(login)
	console.log("用户"+username+"登陆了");
	res.render("index",{
		"login":login,
		"username":username
	});
}