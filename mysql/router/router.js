const user = require("./user/user.js");

exports.getUserInfo = user.getUserInfo;

exports.doLogin = user.doLogin;

exports.showIndex = function(req,res,next) {
	res.render("index");
}