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
var arr1 = [1, 2, 3]; // 数值类型的数组
console.log(arr1);
var arr2 = ['hello', 'world'];
console.log(arr2);
// 数组赋值：
//1.字面量赋值
//2.构造函数赋值
var arr3 = new Array('i', 'am', 'happy');
console.log(arr3);
var arr4 = new Array(true, false);
console.log(arr4);
var arr5 = new Array(1, 2, 3, 4);
console.log(arr5);
// 元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比如，你可以定义一对值分别为string和number类型的元祖。
var arr6 = ['abc', 12];
console.log(arr6);
// 字符串 
var str = 'hello everyone'; // 基本类型 hello everyone
var str2 = new String('good morning'); // 引用类型 [String: 'good morning']
console.log(str);
console.log(str.length);
console.log(str2);
console.log(str2.length);
var str3 = '清晨起来打开窗，心情美美哒，今天不用去上班，真的很开心';
console.log(str3.substr(0, 7)); // 字符串截取
console.log(str3.substring(0, 7));
// Date() 日期类型
var date = new Date('2020/08/22 16:29:22');
var date2 = new Date();
console.log(date.getTime());
console.log(date2);
// RegExp 正则表达式
// let reg: RegExp = new RegExp('abc')  // /abc/
// 构造函数创建
var reg = new RegExp('abc', 'gi'); // /abc/gi
// 字面量创建
var reg2 = /abcde/gi;
var testStr = 'abcdefgh';
// console.log(reg2.test(testStr)) // true
console.log(reg2.exec(testStr)); // [ 'abcde', index: 0, input: 'abcdefgh', groups: undefined ] 
console.log(reg);
// 类 TypeScript就是一个基于类的面向对象编程语言。
var People = /** @class */ (function () {
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
// 类的修饰符
// public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
// protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
// private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
// readonly： 只读修饰符 将属性设置为只读，只读属性必须在声明时或者构造函数里被初始化（注意）
var Animal = /** @class */ (function () {
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
//  console.log(cat.age) // 私有的不能在类外访问
//  console.log(cat.name) // 受保护的不能在类外访问
console.log(cat.sex); // 公有的可以访问
//  cat.sex = 'boy' // 设置只读时不能修改
console.log(cat.sex);
var AnimalTwo = /** @class */ (function (_super) {
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
// namespace 命名空间： 内部模块，被用于组织有些具有内在联系的特性和对象
var student;
(function (student) {
    var Xiaoming = /** @class */ (function () {
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
    var Xiaoming = /** @class */ (function () {
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
