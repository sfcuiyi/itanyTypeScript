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