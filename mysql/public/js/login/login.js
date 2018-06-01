
//载入header导航
// $(document).ready(function () {
 
//     $('#header').load('header.html',function(){
//     	//显示
//     	$("#navbar_login").click(function(){
//     		$("li").siblings(".active").removeClass("active");
// 			$(this).addClass("active");
// 			$("#login_form").show();
// 		});
//     });
    
// });

$("#navbar_login").click(function(){
	$("li").siblings(".active").removeClass("active");
	$(this).addClass("active");
	$("#login_form").show();
});

$("input").focus(function(){
	$("#error_tips").html("");
});

function checkUserId(){
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


$("#login").click(function(){
	login();
});

$("#password").keydown(function(e){
	if(13 == e.keyCode){
		login();
	}
});

function login(){
	console.log("login");
	if(checkUserId()){
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

$("#btn").click(function(){
	$.get("/getuserinfo",function(result){
		//console.log(result);
		$("#hello").html("");
		var compiled = _.template($("#userinfo_moban").html());
		var htmlString = compiled(result[0]);
		$("#hello").append($(htmlString));
	})
});

