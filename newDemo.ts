interface Girls {
    name: string,
    age: number
}
let xiaohua:Girls = {
    name: 'xiaohua',
    age: 12
}
console.log(xiaohua.name)

// 基础静态类型 number ,string, boolean, null, undefined, symbol, void
let conut:number = 12

// 对象类型
const people: {name: string, age: number, female: boolean} = {
    name: 'erya',
    age: 11,
    female: true
}
console.log(people.female) // true
// 数组
const man: string [] = ['liyifeng', 'zhoujielun', 'wadazhi'] // 数组中的元素只能是字符串类型
console.log(man[2])

// 类的形式
class Person{
    name: string
    age: number
    constructor(name:string, age: number) {
        this.name = name
        this.age = age
    }
    action(){
        console.log('i can song')
    }
}
const p: Person = new Person('wang', 10)
p.action()
