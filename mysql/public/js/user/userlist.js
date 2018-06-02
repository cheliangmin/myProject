$(document).ready(function () {
    $("#navbar_userlist").click(function(){
        if(0 == $('#app').find("#userlist_detail").length ) {
            $('#app').html("");
            $("li").siblings(".active").removeClass("active");
            $(this).addClass("active");
            $('#app').load('html/user/userlist.html', function () {
                $("#userlist").show();
                getUserInfo();
            });
        }else{
            getUserInfo();
        }
    });
});

function getUserInfo(){
    $.get("/getuserinfo", function (results) {
        $("#userlist_detail").html("");
        var compiled = _.template($("#userinfo_moban").html());
        for (var i = 0; i < results.length; i++) {
            var htmlString = compiled(results[i]);
            $("#userlist_detail").append($(htmlString));
        }
    });
}