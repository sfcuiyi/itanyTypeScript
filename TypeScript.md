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

