# TypeScript

## 主讲：崔译 

### 一、简介

JavaScript的超集，可以编译成JavaScript，始于JavaScript，归于JavaScript

### 二、安装

```powershell
[sudo] npm install -g typescript
#typescript compile
tsc -v
```
### 三、HelloWorld

```typescript
class Person{
    name:string;
    age:number;
    say(){
        console.log(this.name ,this.age);
    }
}

class Man extends Person{

}
```

```powershell
tsc 文件名
```

生成一个同名的js文件

### 四、数据类型

```typescript
function test(a:number):number
{
    // typescript强类型语言
    // 一旦声明类型，值就必须是该类型
    // 声明方式 变量或者参数： 参数名/变量名：类型名
    // 如果是方法：  function aaa() : 返回值类型 {}
    let num :number = 1;
    // 16进制
    let hexNum : number = 0xfff;
    // 2进制
    let binaryNum : number = 0b101101;
    // 8进制
    let octalNum : number = 0o1234567;

    let flag:boolean = false;
    let flag2:boolean = undefined;
    // let flag3:boolean = 0;
    let flag4:boolean = null;
    // let flag5:boolean = "";
    console.log(flag2,flag4);


    //  字符串 string  ‘‘ “” 
    let str = ``;


    //数组类型
    // let arr = [],new Array()
    // 表示一个元素都是number类型的数组
    let arr : number[] = [1,2,3];
    // 表示一个元素都是string类型的数组，<>中的类型  叫做 泛型
    let arr2 : Array<string> = ["a","b","c"];
    console.log(arr,arr2);


    // 枚举类型 使用场景：当某个值得取值是有限个固定值的时候
    enum Season {SPRING,WINTER};
    //e 的值是 Season的下标
    let e:Season = Season.WINTER;
    console.log(e,Season[1],Season[e]);

    // 表示任意类型
    // 在编写代码的过程中，可能无法确定某些数据的类型
    // 这些值可能来自于动态的内容  比如用户输入的内容，或者其他第三方js文件（模块）提供的数据
    // 解耦合：降低耦合度：当fun方法返回值类型发生更改的时候，当前ts文件内容不需要修改
    //  当一个地方发生修改的时候，不会引起 蝴蝶效应
    let notSure:any = 1;
    notSure = "maybe set it to string";


    // 不表示任何类型  一般用于方法的返回值类型 
    function f():void{
        // 无返回值
        return;
    }

    let v : void = null;
    v = undefined;


    //

    let s : any = "abcasdasd";

    // 强制类型转换 ==> 类型断言 ，将一个变量强制转换为应有的类型
    let sLength : number = (s as string).length;
    let sLength2: number = (<string>s).length;
    return 1;
}




test(1);
```

### 五、面向对象编程

面向对象编程思想认为：**一切皆对象**

将世间的万事万物全部抽象成 **类**：描述一类事物的一个抽象概念

类是对象的抽象，对象是类的实例

 猪   猪八戒

```javascript
// Date 类 d对象
var d = new Date();
//Person 类 p1  p2 是对象
function Person(){//xxxx}
var p1 = new Person();
var p2 = new Person();
//抽象Computer这个类
function Computer(label,price,type)
{
  // 属性  表示类的特征
  this.lable = label;
  this.price = price;
  this.type = type;
  // 函数(方法)，表示类的行为==> 方法名 动词
  teach = function(){
    
  }
  play = function(){
    
  }
}

let c1 = new Computer('联想','6000','笔记本');
let c2 = new Computer('Apple','8000','一体机');
 
```

```typescript
// 在typeScript中 使用关键字 class 定义类
// class 类名:类名首字母大写（规范 ） + 驼峰命名法
class Computer{

    //定义属性
    //[访问修饰符] 属性名:类型 [=值]；
    label:string;
    price:number;
    type:string = "笔记本";

    //定义方法
    //方法名(方法参数列表)[:返回值类型]{}
    play(player:string):void{
        console.log(`${player}正在玩电脑....`);
    }

    teach(teacher:string,subject:string):string{
        return `${teacher}正在教${subject}.......`;
    }


    test(price:number)
    {
        console.log(price);
        // 在类中  this 代表当前类的一个对象（实例），方法的调用者
        console.log(this.price);
    }
}

let c = new Computer();
c.label = "Apple";
c.price = 8000;
console.log(c.price);
let c1 = new Computer();
c1.price = 90000;

c.play("老王");
let str = c.teach("旺叔:站长","开车");
console.log(str);

c.test(7);
console.log(Math.sqrt(2))


```

```typescript
// 定义 平面直角坐标系中的 点  这个类  提供方法 distance(x,y) 作用 计算当前点和参数对应的点的距离
class Point{

    x:number;
    y:number;

    //在类中，有一个方法非常特别，叫做 构造方法，该方法方法名constructor
    // 方法参数任意，没有 返回值类型
    // 该方法会在new 一个对象的时候，自动调用
    // 每一个类其实默认存在一个无参的构造方法,当显示的提供了有参构造后，默认的无参构造消失
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }


    // distance(x:number,y:number):number{
    //     return Math.sqrt( Math.pow( this.x - x ,2) + Math.pow( this.y - y , 2) );
    // }

    distance(dis:Point):number{
        return Math.sqrt( Math.pow( this.x - dis.x ,2) + Math.pow( this.y - dis.y , 2) );
    }

}
// let p = new Point();
//p.x = 0;
//p.y = 0;
let p = new Point(0,0);
let p2  =new Point(6,8);

let distance : number = p.distance(p2);
console.log(distance);


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
```

### 六：模块的导入和导出

```typescript
// point.ts
// export用于导出一个类，只有被导出的类才可以在其他文件中被导入
//方式1
export class Point{
}
export class A{
  
}
//方式2
class Point{}
class A{}
export {Point,A}
```

```typescript
//other.ts
//import 用于导入其他类（该类必须被导出），{}中可以写多个要导入的类，from后跟的是类所在文件名（不加后缀）
import {Point,A} from './point';
```

**本质上  使用的是commonjs**

### 七、访问修饰符

| public  | 公有 的，能被外部访问的（默认值）                 |
| ------- | --------------------------------- |
| private | 私有的，被声明为私有的属性，不能在外部（声明该属性的类的外部）访问 |

其他用法

```typescript
class Student{

    // private name:string;
    // private age:number;
    // public score:number;
    // private className:string;
    // private schoolName:string;
    // private subject:string;
    // private garde:string;

    // constructor(
    //     name:string,
    //     age:number,
    //     score:number,
    //     className:string,
    //     schoolName:string,
    //     subject:string,
    //     garde:string
    // )
    // {
    //     //this.xxx =xx 省略
    // }

    // 同时声明类的属性 以及 构造方法 并且在调用构造方法的时候，为属性赋值
  	// 等同于上面注释的代码
    constructor(
        private name:string,
        private age:number,
        public score:number,
        private className:string,
        private schoolName:string,
        private subject:string,
        private garde:string
    ){

    }

    test(){
        console.log(this.name);
    }

}


let s = new Student("nnn",22,99,'wbs','itany','前端','step2');
s.test();
```

### 八、继承

发生在类和类之间，类A 继承 类B  A叫做子类   B叫做父类/超类

继承：A 拥有 B 中所有的 非私有的 属性和方法

```typescript
class B{}
class A extends B {}
```

```typescript
class Parent{

    // public money:number = 1;
    // private age : number;

    // constructor(
       
    // ){}

    constructor(
        public  money:number,
        private age:number
    ){

    }


    public say()
    {
        console.log("say.....");
    }

    private noSay()
    {
        console.log("noSay.....")
    }
}

class Child extends Parent{
    // 创建子类对象之前，会默认先创建父类对象
    // 调用子类构造方法之前，会默认先调用父类的 无参构造
    //如果父类没有无参构造，此时会报错
    // 此时：调用父类的有参构造

    constructor(money,age)
    {
        // 调用父类的构造方法
        super(money,age);
    }
}


let c = new Child(2,22);
// c.age = 1;
console.log(c.money);
c.say();
```

### 九、接口与实现

```typescript
//所谓的接口，是一种特殊的类型，在接口中定义的方法  叫抽象方法（没有方法体）
// 方法 = 方法声明(访问修饰符，方法名，参数列表，返回值类型) + 方法体({}中的内容)
interface SomeInterface{

    someMethod(paramA:number):string;

    otherMerhod():void;

}
interface OtherInterface{
    other();
}

//类 可以实现某个 或者 某些 接口
// 当某个类实现了某个或者某些接口的时候，需要实现接口中的抽象方法
// 键盘快捷方式 --> quickFix
class SomeInterfaceImpl implements SomeInterface,OtherInterface{
    other() {
    }
    someMethod(paramA: number): string {
        return null;
    }
    otherMerhod(): void {
    }
}
```

//  复习bootstrap常用类

//  了解 MVC 和 MVVM

### 十、装饰器

### 十一、声明文件