//"use strict";

function cook(data){
	console.log("开始做饭");
	var p = new Promise(function(resolve,reject){
		console.log("做饭完毕");
		if(data > 6){
			resolve("盖浇饭");
		}else{
			reject("饭烧糊了");
		}
		
	});
	return p;
}
function eat(data){
	console.log("开始吃饭" + data);
	var p = new Promise(function(resolve,reject){
		console.log("吃饭完毕");
		resolve("一只碗一双筷子");
	});
	return p;
}
function wash(data){
	console.log("开始洗碗" + data);
	var p = new Promise(function(resolve,reject){
		console.log("洗碗完毕");
		resolve("干净碗筷");
	});
	return p;
}

var data = Math.random();
console.log(data);

cook(6)
.then(eat)
.catch((err)=>{
	console.log("吃不上饭：" + err);
	throw new failCook();
})
.then(wash)
.then(function(data){
	console.log(data);
})
.catch(failCook);

function failCook(){
	console.log("煮饭失败了");
}