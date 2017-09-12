class Student{

    // private name:string;
    // private age:number;
    // private score:number;
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