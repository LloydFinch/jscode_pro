
// 这里不能定义函数
class Person{
	constructor(name){
		this.name = name;
	}
}

function User(name){
	
	this.name = name;	
	this.say = function(){
		console.log(name);
	}
}



var person = new Person('tom');
console.log(person);

var user = new User('jerry');
user.say();
console.log(user);











