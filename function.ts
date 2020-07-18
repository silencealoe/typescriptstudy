// function testFunc(name:string):string{ // ():string函数返回值类型，没有时，类型为viod
//     return name
// }

// function testFunc(name:string, age?:number):string{ // testFunc(name:string, age?:number)函数参数可选
//     return name
// }
// function testFunc(name:string='xiaohong', age:number=12, sex?:boolean):string{ // testFunc(name:string, age:number=12)函数默认参数
//     return 'name:' + name+'age:'+age
// }
function testFunc(...animal:string[]):string{ // testFunc(name:string, age:number=12)函数默认参数
    console.log(animal)
    let str=''
    for(let i=0;i<animal.length;i++) {
        str = str + animal[i]
    }
    return str
}
// var str = 'xiaoming' 
var res = testFunc('狮子','大象', '老虎', '长颈鹿')
console.log(res)