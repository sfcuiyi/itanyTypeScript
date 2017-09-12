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

// 定义 平面直角坐标系中的 点  这个类  提供方法 distance(x,y) 作用 计算当前点和参数对应的点的距离
// 






