"use strict";
exports.__esModule = true;
// 定义 平面直角坐标系中的 点  这个类  提供方法 distance(x,y) 作用 计算当前点和参数对应的点的距离
var Point = /** @class */ (function () {
    //在类中，有一个方法非常特别，叫做 构造方法，该方法方法名constructor
    // 方法参数任意，没有 返回值类型
    // 该方法会在new 一个对象的时候，自动调用
    // 每一个类其实默认存在一个无参的构造方法,当显示的提供了有参构造后，默认的无参构造消失
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // distance(x:number,y:number):number{
    //     return Math.sqrt( Math.pow( this.x - x ,2) + Math.pow( this.y - y , 2) );
    // }
    Point.prototype.distance = function (dis) {
        return Math.sqrt(Math.pow(this.x - dis.x, 2) + Math.pow(this.y - dis.y, 2));
    };
    return Point;
}());
exports.Point = Point;
// let p = new Point();
//p.x = 0;
//p.y = 0;
var p = new Point(0, 0);
var p2 = new Point(6, 8);
var distance = p.distance(p2);
console.log(distance);
