function season(s)
{
    switch(Number(s))
    {
        case 1:
            console.log("spring");
            break;
        case 2:
            console.log("winter");
            break;
        case 3:
            console.log("automn");
            break;
        case 4:
            console.log("summer");
            break;
    }
}

season("a");


console.log(typeof("aa") == 'object')

var d = new Date();
console.log(typeof(d) == 'object');

function User(){}
var u = new User();
u = 1;
console.log(typeof(u) == 'object');

var arr = new Array(3,4);
console.log(typeof(arr) == 'object');