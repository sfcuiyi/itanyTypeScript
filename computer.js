// 在typeScript中 使用关键字 class 定义类
// class 类名:类名首字母大写（规范 ） + 驼峰命名法
var Computer = /** @class */ (function () {
    function Computer() {
        this.type = "笔记本";
    }
    //定义方法
    //方法名(方法参数列表)[:返回值类型]{}
    Computer.prototype.play = function (player) {
        console.log(player + "\u6B63\u5728\u73A9\u7535\u8111....");
    };
    Computer.prototype.teach = function (teacher, subject) {
        return teacher + "\u6B63\u5728\u6559" + subject + ".......";
    };
    Computer.prototype.test = function (price) {
        console.log(price);
        // 在类中  this 代表当前类的一个对象（实例），方法的调用者
        console.log(this.price);
    };
    return Computer;
}());
var c = new Computer();
c.label = "Apple";
c.price = 8000;
console.log(c.price);
var c1 = new Computer();
c1.price = 90000;
c.play("老王");
var str = c.teach("旺叔:站长", "开车");
console.log(str);
c.test(7);
console.log(Math.sqrt(2));
// 定义 平面直角坐标系中的 点  这个类  提供方法 distance(x,y) 作用 计算当前点和参数对应的点的距离
// 
