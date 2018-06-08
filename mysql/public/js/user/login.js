
//载入header导航
$(document).ready(function () {

 	$("#navbar_login").click(function(){
        $('#footer_app').html("");
        if(0 == $('#app').find("#login_form").length ) {
            $("li").siblings(".active").removeClass("active");
            $(this).addClass("active");
            $('#app').html("");
            $('#app').load('html/user/login.html', function () {
                $("#login_form").show();
                doLogin();
            });
        }else{
            doLogin();
		}
    });
    
});
function doLogin() {
    $("#login").click(function () {
        login();
    });
    $("#password").keydown(function (e) {
        if (13 == e.keyCode) {
            login();
        }
    });
}
// $("#navbar_login").click(function(){
// 	$("li").siblings(".active").removeClass("active");
// 	$(this).addClass("active");
// 	$("#login_form").show();
// });

$("input").focus(function(){
	$("#error_tips").html("");
});

function checkUserInfo(){
	if("" == $("#userid").val()){
		$("#error_tips").html("你还没有输入帐号！");
		return false;
	}
	if("" == $("#password").val()){
		$("#error_tips").html("你还没有输入密码！");
		return false;
	}
	return true;
}


// $("#login").click(function(){
// 	login();
// });

$("#navbar_logout").click(function(){
	logout();
});

// $("#password").keydown(function(e){
// 	if(13 == e.keyCode){
// 		login();
// 	}
// });

function login(){
	console.log("login");
	if(checkUserInfo()){
		$.get("/dologin",{
			"username":$("#userid").val(),
			"password":$("#password").val()
		},function(result){
			console.log("login_result:" + result);
			 if(result.flag == "1"){
	            console.log("登陆成功");
	            $("#login_form").hide();
	            window.location = "/";
	            //$("#navbar_login").hide();
	            // $("#navbar_user a").html("欢迎你!" + result.name);
	            // $("#navbar_user").show();
	        }else if(result.flag  == "-2"){
	            console.log("用户名不存在");
	            $("#error_tips").html("用户名不存在");
	        }else if(result.flag  == "-1"){
	            console.log("密码错误");
	            $("#error_tips").html("密码错误");
	        }else if(result.flag  == "-3"){
	            console.log("服务器错误");
	            $("#error_tips").html("服务器错误");
	        }
		});
	}
}

function logout(){
	$.get("/dologout",function(result){
		window.location = "/";
	})
}
$("#btn").click(function(){
	$.get("/getuserinfo",function(result){
		//console.log(result);
		$("#hello").html("");
		var compiled = _.template($("#userinfo_moban").html());
		var htmlString = compiled(result[0]);
		$("#hello").append($(htmlString));
	})
});

