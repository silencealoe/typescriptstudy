import { stringify } from "querystring"

let arr1:number[]=[1,2,3] // 数值类型的数组
console.log(arr1)
let arr2:Array<String>=['hello', 'world']
console.log(arr2)
// 数组赋值：
//1.字面量赋值
//2.构造函数赋值
let arr3:Array<String> = new Array('i', 'am', 'happy')
console.log(arr3)
let arr4:Array<boolean> = new Array(true, false)
console.log(arr4)
let arr5:number[] = new Array(1,2,3,4)
console.log(arr5)
// 元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比如，你可以定义一对值分别为string和number类型的元祖。
let arr6:[string, number] = ['abc', 12]
console.log(arr6)

// 字符串 
let str:string = 'hello everyone' // 基本类型 hello everyone
let str2:String = new String('good morning') // 引用类型 [String: 'good morning']
console.log(str)
console.log(str.length)
console.log(str2)
console.log(str2.length)

let str3:string = '清晨起来打开窗，心情美美哒，今天不用去上班，真的很开心'
console.log(str3.substr(0,7)) // 字符串截取
console.log(str3.substring(0, 7))  

// Date() 日期类型
let date:Date = new Date('2020/08/22 16:29:22')
let date2:Date = new Date()
console.log(date.getTime())
console.log(date2)  

// RegExp 正则表达式
// let reg: RegExp = new RegExp('abc')  // /abc/
// 构造函数创建
let reg: RegExp = new RegExp('abc', 'gi')  // /abc/gi
// 字面量创建
let reg2:RegExp = /abcde/gi
let testStr:string = 'abcdefgh'
// console.log(reg2.test(testStr)) // true
console.log(reg2.exec(testStr)) // [ 'abcde', index: 0, input: 'abcdefgh', groups: undefined ] 
console.log(reg)

// 类 TypeScript就是一个基于类的面向对象编程语言。
class People{
    name: string
    age: Number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('i am '+this.name+',age is'+this.age)
    }
}

let p = new People('xiaoming', 20)
p.say()

// 类的修饰符
// public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
// protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
// private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
// readonly： 只读修饰符 将属性设置为只读，只读属性必须在声明时或者构造函数里被初始化（注意）
class Animal{
    public readonly sex:string
    protected name: string
    protected age: number
    public constructor(sex:string, name:string,age: number) {
        this.sex=sex
        this.name=name
        this.age=age
    }
    public sayHi(){
        console.log('i am ' + this.name+' age is ' + this.age)
    }
}
 let cat = new Animal('girl', 'jumiao', 2)
 cat.sayHi()
//  console.log(cat.age) // 私有的不能在类外访问
//  console.log(cat.name) // 受保护的不能在类外访问
 console.log(cat.sex) // 公有的可以访问
//  cat.sex = 'boy' // 设置只读时不能修改
 console.log(cat.sex)

 class AnimalTwo extends Animal{
    public color:string
    public constructor(sex:string,name:string,age:number,color:string){
        super(sex, name, age)
        this.color = color
    }
    public sayHi() {
        super.sayHi()
        console.log('my name is ' + this.name + ', my sex is '+this.sex + ', color is ' + this.color)
    }
    public say(){
         console.log('dog name is'+this.color+' ,'+this.sex)
     }

 }
 let dog = new AnimalTwo('girl', 'dafu',2, 'green')
 dog.sayHi()

 // 接口： 定义一些规范，使用了这些接口，就必须按照接口中的规范操作
 interface Human {
     name: string
     gender: string
     hasMoney?:Boolean
 }
 let human:Human = {name:'xiaoming', gender:'male', hasMoney: false}
 console.log(human)
 // 规范函数类型接口
 interface searchHuman{(source:string,subString:string):boolean}
 let myHuman:searchHuman
 myHuman = function(source:string, substring:string):boolean{
     let flag = source.search(substring)
     return flag!==-1
 }
 console.log(myHuman('高，富，帅，德', '帅')) 

 // namespace 命名空间： 内部模块，被用于组织有些具有内在联系的特性和对象

 namespace student{
     export class Xiaoming{
         name:string = '王小明'
         talk () {
            console.log('我是王小明')
         }
     }
 }

 namespace doctor{
     export class Xiaoming{
         name:string='李小明'
         talk () {
             console.log('我是李小明')
         }
     }
 }
 let xiaoming1:student.Xiaoming = new student.Xiaoming()
 let xiaoming2:student.Xiaoming = new doctor.Xiaoming()
 xiaoming2.talk()