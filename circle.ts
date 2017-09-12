//import 用于导入其他类（该类必须被导出），{}中可以写多个要导入的类，from后跟的是类所在文件名（不加后缀）
import {Point,A} from './point';
// 定义 圆  Circle 类  提供方法 isInside 判断一个点 是否在圆内  是==> true
class Circle {
    //圆心
    center:Point;
    //半径
    r:number;

    constructor(center:Point,r:number)
    {
        this.center = center;
        this.r = r;
        let a= new A();
    }

    contains(p:Point):boolean{
        // if(this.center.distance(p) < this.r)
        // {
        //     return true;
        // }else{
        //     return false;
        // }

        // if(this.center.distance(p) < this.r)
        // {
        //     return true;
        // }
        // return false;

        // return this.center.distance(p) < this.r ? true : false;

        return this.center.distance(p) < this.r;
    }
}

let center = new Point(0,0);

let somePoint = new Point(8,8);

let circle = new Circle(center,4);

console.log(circle.contains(somePoint))