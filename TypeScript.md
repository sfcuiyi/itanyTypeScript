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

```

