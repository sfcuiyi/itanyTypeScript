"use strict";
exports.__esModule = true;
var Girl = /** @class */ (function () {
    function Girl(name, age) {
        this.name = name;
        this.age = age;
    }
    Girl.prototype.introduce = function () {
        console.log("i am " + this.name + ",i am " + this.age + " years old");
    };
    return Girl;
}());
exports.Girl = Girl;
