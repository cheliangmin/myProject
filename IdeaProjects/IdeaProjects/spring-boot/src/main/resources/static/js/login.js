$("#login").click(function () {
    $.get("/login",{
        "email":$("#inputEmail").val(),
        "password":$("#inputPassword").val()
    },function (result) {
        alert(result);
    })
});