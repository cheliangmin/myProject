var redis = require("redis");
var client = redis.createClient(6379,'127.0.0.1');
 
client.set("name","lee",function(err,response){
console.log(err,response);
});
client.get("name",function(err,response){
console.log(err,response);
});