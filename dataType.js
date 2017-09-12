function test(a) {
    // typescript强类型语言
    // 一旦声明类型，值就必须是该类型
    // 声明方式 变量或者参数： 参数名/变量名：类型名
    // 如果是方法：  function aaa() : 返回值类型 {}
    var num = 1;
    // 16进制
    var hexNum = 0xfff;
    // 2进制
    var binaryNum = 45;
    // 8进制
    var octalNum = 342391;
    var flag = false;
    var flag2 = undefined;
    // let flag3:boolean = 0;
    var flag4 = null;
    // let flag5:boolean = "";
    console.log(flag2, flag4);
    //  字符串 string  ‘‘ “” 
    var str = "";
    //数组类型
    // let arr = [],new Array()
    // 表示一个元素都是number类型的数组
    var arr = [1, 2, 3];
    // 表示一个元素都是string类型的数组，<>中的类型  叫做 泛型
    var arr2 = ["a", "b", "c"];
    console.log(arr, arr2);
    // 枚举类型 使用场景：当某个值得取值是有限个固定值的时候
    var Season;
    (function (Season) {
        Season[Season["SPRING"] = 0] = "SPRING";
        Season[Season["WINTER"] = 1] = "WINTER";
    })(Season || (Season = {}));
    ;
    //e 的值是 Season的下标
    var e = Season.WINTER;
    console.log(e, Season[1], Season[e]);
    // 表示任意类型
    // 在编写代码的过程中，可能无法确定某些数据的类型
    // 这些值可能来自于动态的内容  比如用户输入的内容，或者其他第三方js文件（模块）提供的数据
    // 解耦合：降低耦合度：当fun方法返回值类型发生更改的时候，当前ts文件内容不需要修改
    //  当一个地方发生修改的时候，不会引起 蝴蝶效应
    var notSure = 1;
    notSure = "maybe set it to string";
    // 不表示任何类型  一般用于方法的返回值类型 
    function f() {
        // 无返回值
        return;
    }
    var v = null;
    v = undefined;
    //
    var s = "abcasdasd";
    var sLength = s.length;
    return 1;
}
test(1);
