interface Comparator{
    compare(a:any,b:any):number;
}

class Sort{
    sort(arr:any[],com:Comparator){
        // 数组排序
        for(var i = 0; i < arr.length ; i++){
            for(var j = 0; j < arr.length - i - 1 ; j++){
                // let flag = (arr[j]-arr[j+1])*order > 0;
                let flag = com.compare(arr[j] , arr[j+1])  > 0;
                if(flag){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    // x y
                    // x = x + y;
                    // y = x - y;
                    // x = x - y; 
                    // 解构赋值
                    // [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
    }
}


let arr = [21,1,53,78,67980,9089,234,213];
let s = new Sort();


// s.sort(arr,com);

class Person{
    constructor(
        public name:string,
        public age:number
    ){}
}

let perArr = [];
perArr.push(new Person("abc",33));
perArr.push(new Person("abcdef",22));
perArr.push(new Person("abcde",44));

class PersonComparator implements Comparator{
    compare(a: any, b: any): number {
        // return a.age - b.age;
        return a.name.length - b.name.length;
    }

}

let com = new PersonComparator();
s.sort(perArr,com);
console.log(perArr[0].name,perArr[1].name,perArr[2].name);