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
