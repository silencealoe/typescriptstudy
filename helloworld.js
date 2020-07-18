"use strict";
// 变量的类型
// String
var a = 'hello';
console.log(a);
//undefined
var b; // undefined
console.log(b);
//Number
var age = 10;
console.log(age);
//Boolean
//在typescript中boolean只有true和false
var result = true;
var failure = false;
console.log(result);
console.log(failure);
// enum 枚举
var animal;
(function (animal) {
    animal[animal["tiger"] = 0] = "tiger";
    animal[animal["lion"] = 1] = "lion";
    animal[animal["elephant"] = 2] = "elephant";
})(animal || (animal = {}));
console.log(animal.tiger);
(function (animal) {
    animal["xiaoming"] = "12";
    animal["xiaohong"] = "10";
    animal["xiaohua"] = "13";
})(animal || (animal = {}));
console.log(animal.xiaohua);
// 任意类型
var t = 10;
t = '哈哈哈';
t = true;
console.log(t);
