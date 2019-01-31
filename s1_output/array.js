
var arr = ['a',1,2];
console.log(arr);
//风骚点的方法遍历数组
arr.forEach(function(a){
	console.log(a);
});

arr.length = 10;
console.log(arr);

arr.length = 2;
console.log(arr);

arr[10086] = 10;
console.log(arr);

arr[1.1] = 1.1;
console.log(arr);
console.log(arr.length);


var arr1 = [];
arr1[-1] = -1;
console.log(arr1.length);
console.log(arr1);

var arr2 = [1,2,3,4,5];
delete arr2[4];
console.log(arr2.length);//长度还是5，但是arr2[4]是个空位
console.log(arr2);




