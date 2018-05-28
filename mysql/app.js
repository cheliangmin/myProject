var express = require("express");
var app = express();
var router = require("./router/router.js");


app.use(express.static("./public"));
app.set("view engine", "ejs");

//app.get("/",router.showIndex);

app.get("/getuserinfo",router.getUserInfo);

app.get("/dologin",router.doLogin);

app.listen(3000);