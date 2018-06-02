$(document).ready(function () {
    $("#navbar_userlist").click(function(){
        $('#app').html("");
        $("li").siblings(".active").removeClass("active");
        $(this).addClass("active");
        $('#app').load('html/user/userlist.html',function(){
            //显示


            $("#userlist").show();

            $.get("/getuserinfo",function (results) {
                var compiled = _.template($("#userinfo_moban").html());
                for (var i = 0; i < results.length; i++) {
                    var htmlString = compiled(results[i]);
                    $("#userlist_detail").append($(htmlString));
                }
            });
        });
    });
});
