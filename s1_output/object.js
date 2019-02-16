
//来个自定义方法玩玩
Number.prototype.double = function(){
	return this.valueOf()+this.valueOf();
};

let a1 = (123).double();
console.log(a1);

var a = {a:'a'};
var b = {b:'b'};
var c = {c:'c'};

var abc = Object.assign(a,b,c);
console.log(abc);
