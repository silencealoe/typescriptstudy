// 变量的类型

// String
var a:string = 'hello'
console.log(a)

//undefined
var b:string // undefined
// console.log(b)

//Number
var age:number = 10
console.log(age)

//Boolean
//在typescript中boolean只有true和false
var result:boolean = true
var failure:boolean = false
console.log(result)
console.log(failure)

// enum 枚举
enum animal{tiger, lion, elephant}
console.log(animal.tiger)
enum animal{xiaoming='12', xiaohong='10', xiaohua='13'}
console.log(animal.xiaohua)

// 任意类型
var t:any=10
t='哈哈哈'
t=true
console.log(t)
