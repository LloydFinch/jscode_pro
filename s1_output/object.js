
//来个自定义方法玩玩
Number.prototype.double = function(){
	return this.valueOf()+this.valueOf();
};

let a = (123).double();
console.log(a);


