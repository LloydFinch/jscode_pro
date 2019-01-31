//function命令写法
function print(s) {
	console.log(s);
}

print('hello world');

//表达式写法
var print1 = function(s){
	console.log(s);
}
print1('hello android');

//函数表达式写法家了函数名，这个函数名只有函数内部可以看到，适用于递归
var f = function f(){
	console.log(typeof f);
}
f();


//Function构造函数，这里的new可以省略
var add = new Function('x','y','return x+y');
console.log(add(1,2));

function foo(x){
	if(x>100){
		//这里存在变量提升，这个temp变量会被提升到函数第一行，建议使用let
		var temp = x-100;
	}
	console.log(temp);
}
foo(101);

function func(a,b){
	console.log(arguments.length);
	console.log(Array.prototype.slice.call(arguments));
	console.log(a+b);
	arguments[0]=10;
	arguments[1]=20;
	console.log(a+b);
	console.log(Array.prototype.slice.call(arguments));
	console.log(arguments.callee);
	return a+b;
}
console.log(func(1,2));

//函数内的函数：闭包
function outFunc(){
	var tem = "I'm inner"; //外部无法访问
	
	function innerFunc(){
		return tem;
	}
	return innerFunc;
}
console.log(outFunc()());

//上述的更风骚的写法
function outFunc1(){
	var temp = 'inner';
	return function(){return temp};
}
console.log(outFunc1()());

//立即调用的函数表达式
(function(){console.log('call me immediately')}());
//更多风骚的写法
var i = function(){return 10;}();
console.log(i);
console.log(!function(){return false}());



















