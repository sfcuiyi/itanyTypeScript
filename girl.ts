export class Girl{

    private age :number;
    name :string;

    //提供访问方法
    // get age()
    // {
    //     return 18;
    // }

    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`i am ${this.name},i am ${this.age} years old`);
    }

}