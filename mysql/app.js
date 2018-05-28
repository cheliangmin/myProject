var express = require("express");
var app = express();
var router = require("./router/router.js");


app.use(express.static("./public"));


app.get("/getuserinfo",router.getUserInfo);



app.listen(3000);