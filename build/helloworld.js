"use strict";
var a = 'hello';
console.log(a);
var b;
var age = 10;
console.log(age);
var result = true;
var failure = false;
console.log(result);
console.log(failure);
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
var t = 10;
t = '哈哈哈';
t = true;
console.log(t);
