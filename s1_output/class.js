//标砖的对象定义和使用

class Base{
	

}


class Point{

	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	//set方法，有问题
	set x(x1){
		console.log('set value ',x1);
	}

	//get方法，有问题
	get x(){
	//	return x;
		console.log('get value');
	}

	//toString方法
	toString(){
		return '('+this.x+','+this.y+')';
	}

	angle(){
		console.log(this.x*this.x+this.y*this.y);
	}

	//静态方法
	static getClassName(){
		return 'Point';
	}
}

let point = new Point(3,4);
point.angle();
//point.x = 5;
console.log(point.x);
console.log('point = ' + point);
console.log('get class name: ' + Point.getClassName());


//标准继承方法
class ColorPoint extends Point{

	constructor(x,y,color){
		super(x,y);
		this.color = color;
	}

	toString(){
		return this.color;	
	}
	
	getColor(){
		return this.color;	
	}
}


let colorPoint = new ColorPoint(10,20,'red');
colorPoint.angle();
console.log(colorPoint);
console.log(colorPoint.getColor());
console.log(ColorPoint.getClassName());







