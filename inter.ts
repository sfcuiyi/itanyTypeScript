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