console.log('hell0.');

var a:number = 1;

var b:string = 'zhang';

let c:string = `
	<div>Yo, ${b}</div>
	`;
let d:string[] = ['a','b','1'];

function hello(name:string = 'lyh'):string{
	return 'hello ' + name;
}

console.log(hello());

let hello2 = (name:any):any => `hello ${name}`

console.log(hello2(1));

let obj = {e:1,f:2};
let add = ({e,f}:{e:number,f:number}) => {return e+f}

console.log(add(obj));

class Person{
	name:string;
	constructor(name:string){
		this.name = name;
	}
	greet(){
		return `${this.name}向你问好`
	}
}

console.log(new Person('小米').greet());

class Student extends Person{
	major:string;
	constructor(name:string,major:string){
		super(name);
		this.major = major;
	}
	greet(){
		return `${this.major}系的${this.name}向你问好`
	}
}

console.log(new Student('小马','哲学').greet());