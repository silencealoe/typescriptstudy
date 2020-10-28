import { abort } from "process"

// ts 中的类
class Person2{
    constructor(public name: string){}
}
class Teacher extends Person2{
    constructor(public age:number){
        super('xiaoming')
    }
    say(){
        console.log(this.name + 'age =' + this.age)
    }
}
// const p2 = new Person2('xiaoming', 12, 'male')
// console.log(p2.name) // 公有属性在外部可访问
// console.log(p2.age) // 私有属性在类的外部不能访问
// console.log(p2.sex) // 受保护的属性在类的外部不能访问
const t2 = new Teacher(12)
t2.say()

// 类的setter,getter,static
// set 和 get 对类中不可访问的属性进行封装
// set 和 get并不是方法而是属性
// static 静态方法，可以直接通过类名获取，不需要实例化
class Person3{
    constructor(private _age: number){}
    get age(){
        return this._age
    }
    set age(age:number){
        this._age = age
    }
    static say() {
        console.log('i love you')
    }
}
const p3 = new Person3(20)
p3.age = 18
console.log(p3.age)
Person3.say()

// 抽象类用来描述一种类型应该具备的基本特征与功能， 具体如何去完成这些行为由子类通过方法重写来完成
// 抽象类无法直接创建对象，只能被子类继承后，创建子类对象。
abstract class Person4{
    skill(){
        console.log('everyone has his own skills')
    }
}
class Teacher1 extends Person4 {
    skill(){
        console.log('i am teacher')
    }
}

class Student extends Person4 {
    skill(){
        console.log(' i am student')
    }
}

