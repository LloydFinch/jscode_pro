
console.log(a);
var a = 10;


function countdown(n){
	while(n-->0){
		console.log(n);
	}
}
countdown(3);

{
	var b = 10;
}
b++;
console.log(b);

var x = 1;
var y = 2;
if(x=y){ //好习惯：将常量写到运算符左边
	console.log(x);
}


tag:
{
	console.log('hello');
	break tag; //跳转到tag标签，后面的world就不打印
	console.log('world');

}

console.log(typeof c);


console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Array);

console.log(typeof null);

if(''){
	console.log('hello');
}


if([]){
	console.log([]);
}

if({}){
	console.log({});
}


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


console.log(0xff);
console.log(0o377);
console.log(0b111);


console.log(4-'a');
console.log(typeof NaN);

console.log(0/0);
console.log(1/0);
console.log(1/-0);


var s = 'h\
e\
l\
l\
o' 
console.log(s);

console.log('\251');
console.log('\xA9');
console.log('\u00A9');

var str = 'android'
console.log(str[0]);
console.log(str[100]);
console.log(str[a]);
str[0] = 'a';
console.log(str);
console.log(str.length);


//console.log(btoa('hello'));

var base = new Buffer('hello');
console.log(base.toString('base64'));

var obj = {
	a:'a',
	1:1 //键名是数字，会被自动转换成字符串
};
console.log(obj);
console.log(obj[1]);


var obj1 = {
	f:function(){
		console.log('this is a function');
	}, //属性值是个函数
	
	oo:{a:10,b:true} //属性值是个对象
}
console.log(obj1);
obj1.f();
console.log(obj1.oo.a);


var objj = {};
console.log(objj);
objj.a = 10;
console.log(objj);
objj.b = 20;
console.log(objj);

console.log({foo:'666'});

console.log(eval('{foo:123}'));
console.log(eval('({foo:123})'));
console.log(Object.keys(objj));
delete objj.b;
console.log(Object.keys(objj));
console.log('a' in objj);
console.log('b' in objj);

var oba = {
	a:1,
	b:2,
	c:3
}
for (var i in oba){
	console.log(i,'=',oba[i]);
}



















