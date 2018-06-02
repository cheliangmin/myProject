var express = require("express");
var app = express();
var router = require("./router/router.js");
const session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
 // cookie: { secure: true }
}));

app.use(express.static("./public"));
app.set("view engine", "ejs");

app.get("/favicon.ico",function(req,res,next){
  next();
});

app.get("/",router.showIndex);

app.get("/getuserinfo",router.getUserInfo);

app.get("/dologin",router.doLogin);

app.get("/dologout",router.doLogout);

app.get("/doregister",router.doRegister);

app.get("/finduser",router.findUser);
app.get("/getallcontent",router.getAllContent);

app.listen(3000);