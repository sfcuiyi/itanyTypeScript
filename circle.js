"use strict";
exports.__esModule = true;
var point_1 = require("./point");
// 定义 圆  Circle 类  提供方法 isInside 判断一个点 是否在圆内  是==> true
var Circle = /** @class */ (function () {
    function Circle(center, r) {
        this.center = center;
        this.r = r;
    }
    Circle.prototype.contains = function (p) {
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
    };
    return Circle;
}());
var center = new point_1.Point(0, 0);
var somePoint = new point_1.Point(8, 8);
var circle = new Circle(center, 4);
console.log(circle.contains(somePoint));
