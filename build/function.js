"use strict";
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
var res = testFunc('狮子', '大象', '老虎', '长颈鹿');
console.log(res);
