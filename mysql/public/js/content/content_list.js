$(document).ready(function () {
    $("#navbar_content").click(function () {
        $('#footer_app').html("");
        if($(this).is("#navbar_content")){
            $("li").siblings(".active").removeClass("active");
            $(this).addClass("active");
        }
        if(0 == $('#app').find("#content_form").length ) {
            $('#app').html("");

            $('#app').load('html/content/content.html', function () {
                $("#content_form").show();
                getAllContent();
            });
        }else{
            console.log("没执行");
            getAllContent();
        }
    });
});

function getAllContent() {
    $.get("/getallcontent", function (results) {
        console.log(results);
        $("#content_form").html("");
        var compiled = _.template($("#content_moban").html());
        for (var i = 0; i < results.length; i++) {
            results[i].createDate = formatDateTime(results[i].createDate);
            var htmlString = compiled(results[i]);
            $("#content_form").append($(htmlString));
        }
    });
}
//2018-06-01T16:00:00.000Z
function formatDateTime(date) {
    console.log(date);
    var arr = date.split("T");
    var year = arr[0];
    var time = arr[1].split("\.")[0];
    return year + " " + time ;
};