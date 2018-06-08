// $("#navbar_register").click(function(){
// 	$("li").siblings(".active").removeClass("active");
// 	$(this).addClass("active");
// 	$("#register_form").show();
// });

$(document).ready(function () {

	//点击导航注册按钮
	$("#navbar_register").click(function(){
        $('#footer_app').html("");
		//判断注册页面是否加载，没有就load
        if(0 == $('#app').find("#register_form").length ) {
        	//加载前先清空别的页面
            $('#app').html("");
            //清除li元素的class：active
            $("li").siblings(".active").removeClass("active");
            //为点击的li元素添加class:active
            $(this).addClass("active");
            $('#app').load('html/user/register.html', function () {
                $("#register_form").show();
                doRegister();
            });
        }else{
            doRegister();
		}
    });
    
});
function doRegister() {
	//点击userid时，清除错误提示
    initUserIdInput();
    //点击password时，清除错误提示
    initPasswordInput();
    //检查用户名是否存在和空
    checkUserName();
    //检查密码是否为空
    checkPassword();
    //点击注册按钮
    $("#register").click(function () {
        console.log(checkAll());
        if (checkAll())
            register();
    });
    //在密码框增加回车注册
    $("#password").keydown(function (e) {
        if (13 == e.keyCode) {
            if (checkAll())
                register();
        }
    });
}
//检查所有输入框是否都是成功状态
function checkAll(){
	if($("#userid").parent("div").hasClass("has-success") &&
		$("#password").parent("div").hasClass("has-success")){
		return true;
	}
	return false;
}
function checkUserName(){
	console.log("checkUserName");
	$("#userid").blur(function(){
		if("" == $("#userid").val()){
			$("#error_tips").html("你还没有输入帐号！");
			$("#userid").parent("div").addClass("has-error");
			return false;
		}else{
			$.get("/finduser",{
				"username":$("#userid").val()
			},function(result){

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
function initPasswordInput(){
    $("#password").focus(function(){
        $("#error_tips").html("");
        $("#password").parent("div").removeClass("has-error");
    });
}
function checkPassword(){
    $("#password").blur(function() {
        if ("" == $("#password").val()) {
            $("#error_tips").html("你还没有输入密码！");
            $("#password").parent("div").addClass("has-error");
            return false;
        }
        console.log("checkPassword return true");
        $("#password").parent("div").addClass("has-success");
        return true;
    });
}

function register(){
	$.get("/doregister",{
		"username":$("#userid").val(),
		"password":$("#password").val()
	},function(result){
		console.log("register_result:" + result);
		 if(result == "1"){
			console.log("注册成功");
			$("#register_form").hide();
			window.location = "/";
			//$("#navbar_login").hide();
			// $("#navbar_user a").html("欢迎你!" + result.name);
			// $("#navbar_user").show();
		}else if(result  == "-3"){
			console.log("服务器错误");
			$("#error_tips").html("服务器错误");
		}
	});
}