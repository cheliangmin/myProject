const user = require("./user/user.js");
const content = require("./content/content.js");
exports.getUserInfo = user.getUserInfo;

exports.doLogin = user.doLogin;

exports.doLogout = user.doLogout;
exports.doRegister = user.doRegister;
exports.findUser = user.findUser;
exports.getUser = user.getUser;

exports.getAllContent = content.getAllContent;
exports.doAddContent = content.doAddContent;

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