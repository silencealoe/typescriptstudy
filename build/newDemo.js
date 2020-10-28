"use strict";
var xiaohua = {
    name: 'xiaohua',
    age: 12
};
console.log(xiaohua.name);
var conut = 12;
var people = {
    name: 'erya',
    age: 11,
    female: true
};
console.log(people.female);
var man = ['liyifeng', 'zhoujielun', 'wadazhi'];
console.log(man[2]);
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.action = function () {
        console.log('i can song');
    };
    return Person;
}());
var p = new Person('wang', 10);
p.action();
var test = function () { return 'abc'; };
console.log(test());
var typeObj = {
    name: '小明'
};
var one = 1;
var two = false;
function getTotal(a, b) {
    return a + b + '';
}
var total = getTotal(1, 2);
function add(one, two) {
    return one + two;
}
function objFunc(_a) {
    var one = _a.one;
    console.log('objjj', one);
}
objFunc({ one: 'hello' });
var stringArr = ['aa', 'a', 'b'];
var undefinedArr = [undefined, undefined];
var varyArr = [1, 'aaa'];
var objArr = [
    {
        name: '小红',
        age: 18
    }
];
objArr.forEach(function (item) {
    console.log(item.name);
});
var GirlType = (function () {
    function GirlType(name, age) {
        this.name = name;
        this.age = age;
    }
    return GirlType;
}());
var girlArr = [{
        name: '小明',
        age: 11
    }];
console.log(girlArr[0]);
var examp = [1, 'a', true];
var animals = {
    name: 'fish',
    size: 10,
    eat: true,
    color: 'red',
    shape: 'shin',
    action: function () {
        return 'eat';
    }
};
var getAnimal = function (animals) {
    console.log(animals.name + animals.size + animals.eat + animals.color + animals.shape);
    console.log(animals.action());
};
getAnimal(animals);
var People = (function () {
    function People() {
        this.name = 'xiaoming';
        this.size = 22;
        this.eat = true;
    }
    People.prototype.action = function () {
        return 'sing song';
    };
    return People;
}());
var pe = new People();
console.log(pe.name);
var plant = {
    name: 'tree',
    size: 11,
    eat: false,
    action: function () {
        return 'shaveeee';
    },
    shave: function () {
        return 'huahuahua';
    }
};
var getPlant = function (plant) {
    console.log(plant.name + plant.shave());
};
getPlant(plant);
