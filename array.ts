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