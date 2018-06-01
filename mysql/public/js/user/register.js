// $("#navbar_register").click(function(){
// 	$("li").siblings(".active").removeClass("active");
// 	$(this).addClass("active");
// 	$("#register_form").show();
// });

$(document).ready(function () {
	$("#navbar_register").click(function(){
		$('#login_register').html("");
    	$('#login_register').load('html/user/register.html',function(){
    	//显示
    	
			$("li").siblings(".active").removeClass("active");
			$(this).addClass("active");
			$("#register_form").show();

			initUserIdInput();

			checkUserName();

			$("#register").click(function(){
				register();
			});
			$("#password").keydown(function(e){
				if(13 == e.keyCode){
					register();
				}
			});
		});
    });
    
});

function checkUserName(){
	
	console.log("checkUserName");
	$("#userid").blur(function(){
		if("" == $("#userid").val()){
			$("#error_tips").html("你还没有输入帐号！");
			$("#userid").parent("div").addClass("has-error");
		}else{
			$.get("/finduser",{
				"username":$("#userid").val()
			},function(result){
				console.log(result);
				if (result == -3) {
					$("#error_tips").html("服务器错误");
					return false;
				}else if (result == -2) {
					$("#error_tips").html("用户名已存在");
					$("#userid").parent("div").addClass("has-error");
					return false;
				}else if(result == 1){
					$("#userid").parent("div").addClass("has-success");
					return true;
				}
			});
		}
	});
}

function initUserIdInput(){
	$("#userid").focus(function(){
		$("#error_tips").html("");
		$("#userid").parent("div").removeClass("has-error");
	});
}
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

function register(){
		if(checkUserInfo() && checkUserName()){
		$.get("/doregister",{
			"username":$("#userid").val(),
			"password":$("#password").val()
		},function(result){
			console.log("register_result:" + result);
			 if(result.flag == "1"){
	            console.log("登陆成功");
	            $("#register_form").hide();
	            window.location = "/";
	            //$("#navbar_login").hide();
	            // $("#navbar_user a").html("欢迎你!" + result.name);
	            // $("#navbar_user").show();
	        }else if(result.flag  == "-3"){
	            console.log("服务器错误");
	            $("#error_tips").html("服务器错误");
	        }
		});
	}
}