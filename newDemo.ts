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
// 函数类型
const test:() => string = () => {return 'abc'}
console.log(test())

// 类型注释, 类型推断
const typeObj = {
    name: '小明' // 可以推断出类型
}
let one = 1 // 可以推断出类型, 类型推断
let two = false // 可以推断出类型, 类型推断
function getTotal(a: number, b :number) { // 不写类型注释，类型判断为any
    return a+b+''
}
const total = getTotal(1, 2)

//函数参数定义和返回值定义
function add (one: number, two: number) : number {
    return one + two
}
// let res = add(1, 2)
// console.log(res)

// 当函数参数是对象时
function objFunc({one} : {one: string}) : void {
    console.log('objjj', one)
} 
objFunc({one: 'hello'})
// 有返回值的函数，我们就可以给他一个类型注解void
// 一个函数是永远也执行不完的，就可以定义返回值为never

// 数组的类型注解
const stringArr: string[] = ['aa', 'a', 'b'] // 数组时字符
const undefinedArr: undefined[] = [undefined, undefined]
const varyArr: (string | number)[] = [1, 'aaa'] // 数组中有多种类型

// 当数组中包含对象时
const objArr: {name: string, age: number}[] = [
    {
        name: '小红',
        age: 18
    }
]
objArr.forEach(item => {
    console.log(item.name)
})

// 类型别名
type girls = {name: string, age: number}
// const girlArr: girls[] = [{
//     name: '小明',
//     age: 11
// }]
// 使用类进行定义
class GirlType {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
const girlArr: GirlType[] = [{
    name: '小明',
    age: 11
}]
console.log(girlArr[0])