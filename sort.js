var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function (arr, com) {
        // 数组排序
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                // let flag = (arr[j]-arr[j+1])*order > 0;
                var flag = com.compare(arr[j], arr[j + 1]) > 0;
                if (flag) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    // x y
                    // x = x + y;
                    // y = x - y;
                    // x = x - y; 
                    // 解构赋值
                    // [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
    };
    return Sort;
}());
var arr = [21, 1, 53, 78, 67980, 9089, 234, 213];
var s = new Sort();
// s.sort(arr,com);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var perArr = [];
perArr.push(new Person("abc", 33));
perArr.push(new Person("abcdef", 22));
perArr.push(new Person("abcde", 44));
var PersonComparator = /** @class */ (function () {
    function PersonComparator() {
    }
    PersonComparator.prototype.compare = function (a, b) {
        // return a.age - b.age;
        return a.name.length - b.name.length;
    };
    return PersonComparator;
}());
var com = new PersonComparator();
s.sort(perArr, com);
console.log(perArr[0].name, perArr[1].name, perArr[2].name);
