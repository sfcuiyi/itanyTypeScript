var Student = /** @class */ (function () {
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
    // 同时声明类的属性 以及 构造方法
    function Student(name, age, score, className, schoolName, subject, garde) {
        this.name = name;
        this.age = age;
        this.score = score;
        this.className = className;
        this.schoolName = schoolName;
        this.subject = subject;
        this.garde = garde;
    }
    Student.prototype.test = function () {
        console.log(this.name);
    };
    return Student;
}());
var s = new Student("nnn", 22, 99, 'wbs', 'itany', '前端', 'step2');
s.test();
