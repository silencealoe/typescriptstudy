"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = ['hello', 'world'];
console.log(arr2);
var arr3 = new Array('i', 'am', 'happy');
console.log(arr3);
var arr4 = new Array(true, false);
console.log(arr4);
var arr5 = new Array(1, 2, 3, 4);
console.log(arr5);
var arr6 = ['abc', 12];
console.log(arr6);
var str = 'hello everyone';
var str2 = new String('good morning');
console.log(str);
console.log(str.length);
console.log(str2);
console.log(str2.length);
var str3 = '清晨起来打开窗，心情美美哒，今天不用去上班，真的很开心';
console.log(str3.substr(0, 7));
console.log(str3.substring(0, 7));
var date = new Date('2020/08/22 16:29:22');
var date2 = new Date();
console.log(date.getTime());
console.log(date2);
var reg = new RegExp('abc', 'gi');
var reg2 = /abcde/gi;
var testStr = 'abcdefgh';
console.log(reg2.exec(testStr));
console.log(reg);
var People = (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.say = function () {
        console.log('i am ' + this.name + ',age is' + this.age);
    };
    return People;
}());
var p = new People('xiaoming', 20);
p.say();
var Animal = (function () {
    function Animal(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    Animal.prototype.sayHi = function () {
        console.log('i am ' + this.name + ' age is ' + this.age);
    };
    return Animal;
}());
var cat = new Animal('girl', 'jumiao', 2);
cat.sayHi();
console.log(cat.sex);
console.log(cat.sex);
var AnimalTwo = (function (_super) {
    __extends(AnimalTwo, _super);
    function AnimalTwo(sex, name, age, color) {
        var _this = _super.call(this, sex, name, age) || this;
        _this.color = color;
        return _this;
    }
    AnimalTwo.prototype.sayHi = function () {
        _super.prototype.sayHi.call(this);
        console.log('my name is ' + this.name + ', my sex is ' + this.sex + ', color is ' + this.color);
    };
    AnimalTwo.prototype.say = function () {
        console.log('dog name is' + this.color + ' ,' + this.sex);
    };
    return AnimalTwo;
}(Animal));
var dog = new AnimalTwo('girl', 'dafu', 2, 'green');
dog.sayHi();
var human = { name: 'xiaoming', gender: 'male', hasMoney: false };
console.log(human);
var myHuman;
myHuman = function (source, substring) {
    var flag = source.search(substring);
    return flag !== -1;
};
console.log(myHuman('高，富，帅，德', '帅'));
var student;
(function (student) {
    var Xiaoming = (function () {
        function Xiaoming() {
            this.name = '王小明';
        }
        Xiaoming.prototype.talk = function () {
            console.log('我是王小明');
        };
        return Xiaoming;
    }());
    student.Xiaoming = Xiaoming;
})(student || (student = {}));
var doctor;
(function (doctor) {
    var Xiaoming = (function () {
        function Xiaoming() {
            this.name = '李小明';
        }
        Xiaoming.prototype.talk = function () {
            console.log('我是李小明');
        };
        return Xiaoming;
    }());
    doctor.Xiaoming = Xiaoming;
})(doctor || (doctor = {}));
var xiaoming1 = new student.Xiaoming();
var xiaoming2 = new doctor.Xiaoming();
xiaoming2.talk();
