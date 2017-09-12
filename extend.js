var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    // public money:number = 1;
    // private age : number;
    // constructor(
    // ){}
    function Parent(money, age) {
        this.money = money;
        this.age = age;
    }
    Parent.prototype.say = function () {
        console.log("say.....");
    };
    Parent.prototype.noSay = function () {
        console.log("noSay.....");
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Parent));
var c = new Child(2, 22);
// c.age = 1;
console.log(c.money);
c.say();
