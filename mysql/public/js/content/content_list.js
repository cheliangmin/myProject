$(document).ready(function () {
    $("#navbar_content").click(function () {
        loadContentPage();
    });
});

function loadContentPage(){
    console.log("loadContentPage");
    $('#app').html("");
    $("li").siblings(".active").removeClass("active");
    $(this).addClass("active");
    $('#app').load('html/content/content.html', function () {
        $("#content_form").show();
        $.get("/getallcontent",function (results) {
            console.log(results);
            var compiled = _.template($("#content_moban").html());
            for (var i = 0; i < results.length; i++) {
               results[i].createDate = formatDateTime(results[i].createDate);
                var htmlString = compiled(results[i]);
                $("#content_form").append($(htmlString));
            }
        });
    });
}
//2018-06-01T16:00:00.000Z
function formatDateTime(date) {
    var arr = date.split("T");
    var year = arr[0];
    var time = arr[1].split("\.")[0];
    return year + " " + time ;
};