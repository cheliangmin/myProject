$(document).ready(function () {
    showContent();
    showAddContent();

    $("#navbar_index").click(function () {
        $("li").siblings(".active").removeClass("active");
        $(this).addClass("active");
        showContent();
        showAddContent();

    });
});
function doAddContent(){

    console.log("doAddContent");
    $.get("/getuser",function(login){
        console.log(login);
        $("#add_content").click(function () {
            console.log("发表");
            if(chenckAll (login)){
                $.post("/doaddcontent",{
                    "title":$("#content_title").val(),
                    "content":chargeContent($("#content").val())
                },function(result){
                    if (result == -3) {
                        $("#error_tips").html("服务器错误");
                        return false;
                    }else if(result == 1){
                        window.location = "/";
                    }
                });
            }
        });
    });
}

function chargeContent(content){
    content = content.replace(/\n/g, '<br/>');
    content = content.replace(/\s/g, '&nbsp');
    console.log(content);
    return content;
}
function chenckAll (login){
    if("" == $("#content_title").val()){
        $("#error_tips").html("标题不能为空");
        return false;
    }
    if("" == $("#content").val()){
        $("#error_tips").html("内容不能为空");
        return false;
    }
    if(!login){
        $("#error_tips").html("你还没有登陆");
        return false;
    }
    return true;
}

function initContentTitleInput(){
    $("#content_title").focus(function(){
        $("#error_tips").html("");
    });
}
function initContentInput(){
    $("#content").focus(function(){
        $("#error_tips").html("");
    });
}
function showAddContent() {
    if(0 == $('#footer_app').find("#add_content_form").length ) {
        $('#footer_app').html("");
        $('#footer_app').load('html/content/addContent.html', function () {
            $("#add_content_form").show();
            doAddContent();
            initContentTitleInput();
            initContentInput();
        });
    }else{
        $("#add_content_form").show();
    }
}

function showContent(){
    if(0 == $('#app').find("#content_form").length ) {
        $('#app').html("");
        $('#app').load('html/content/content.html', function () {
            $("#content_form").show();
            getAllContent();
        });
    }else{
        getAllContent();

    }
}

function getAllContent() {
    $.get("/getallcontent", function (results) {
        console.log(results);
        $("#content_form").html("");
        var compiled = _.template($("#content_moban").html());
        for (var i = 0; i < results.length; i++) {
            results[i].createDate = formatDateTime(results[i].createDate);
            var htmlString = compiled(results[i]);
            $("#content_form").prepend($(htmlString));
        }
    });
}
//2018-06-01T16:00:00.000Z
function formatDateTime(date) {
    var arr = date.split("T");
    var year = arr[0];
    var time = arr[1].split("\.")[0];
    return year + " " + time ;
};