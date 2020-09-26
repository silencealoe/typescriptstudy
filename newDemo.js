var xiaohua = {
    name: 'xiaohua',
    age: 12
};
console.log(xiaohua.name);
// 基础静态类型 number ,string, boolean, null, undefined, symbol, void
var conut = 12;
// 对象类型
var people = {
    name: 'erya',
    age: 11,
    female: true
};
console.log(people.female); // true
// 数组
var man = ['liyifeng', 'zhoujielun', 'wadazhi']; // 数组中的元素只能是字符串类型
console.log(man[2]);
// 类的形式
var Person = /** @class */ (function () {
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
// 函数类型
var test = function () { return 'abc'; };
console.log(test());
// 类型注释, 类型推断
var typeObj = {
    name: '小明' // 可以推断出类型
};
var one = 1; // 可以推断出类型, 类型推断
var two = false; // 可以推断出类型, 类型推断
function getTotal(a, b) {
    return a + b + '';
}
var total = getTotal(1, 2);
//函数参数定义和返回值定义
function add(one, two) {
    return one + two;
}
var res = add(1, 2);
console.log(res);
