"use strict";
// function testFunc(name:string):string{ // ():string函数返回值类型，没有时，类型为viod
//     return name
// }
// function testFunc(name:string, age?:number):string{ // testFunc(name:string, age?:number)函数参数可选
//     return name
// }
// function testFunc(name:string='xiaohong', age:number=12, sex?:boolean):string{ // testFunc(name:string, age:number=12)函数默认参数
//     return 'name:' + name+'age:'+age
// }
function testFunc() {
    var animal = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        animal[_i] = arguments[_i];
    }
    console.log(animal);
    var str = '';
    for (var i = 0; i < animal.length; i++) {
        str = str + animal[i];
    }
    return str;
}
// var str = 'xiaoming' 
var res = testFunc('狮子', '大象', '老虎', '长颈鹿');
console.log(res);
