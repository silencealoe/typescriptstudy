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
var Person2 = (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age) {
        var _this = _super.call(this, 'xiaoming') || this;
        _this.age = age;
        return _this;
    }
    Teacher.prototype.say = function () {
        console.log(this.name + 'age =' + this.age);
    };
    return Teacher;
}(Person2));
var t2 = new Teacher(12);
t2.say();
var Person3 = (function () {
    function Person3(_age) {
        this._age = _age;
    }
    Object.defineProperty(Person3.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Person3.say = function () {
        console.log('i love you');
    };
    return Person3;
}());
var p3 = new Person3(20);
p3.age = 18;
console.log(p3.age);
Person3.say();
var Person4 = (function () {
    function Person4() {
    }
    Person4.prototype.skill = function () {
        console.log('everyone has his own skills');
    };
    return Person4;
}());
var Teacher1 = (function (_super) {
    __extends(Teacher1, _super);
    function Teacher1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher1.prototype.skill = function () {
        console.log('i am teacher');
    };
    return Teacher1;
}(Person4));
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.skill = function () {
        console.log(' i am student');
    };
    return Student;
}(Person4));
