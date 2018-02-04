let str = 'abcdabc'

let execArr = /a/g.exec(str)
console.log('可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。')
console.log('返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。')
console.log('在循环中反复地调用 exec() 方法是唯一一种获得全局模式的完整模式匹配信息的方法。')
console.log(execArr)

let exec2 = /e/g.exec(str)
console.log('返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。')
console.log(exec2)

console.log("注意：不要把正则表达式字面量（或者RegExp构造器）放在 while 条件表达式里。由于每次迭代时 lastIndex的属性都被重置，如果匹配，将会造成一个死循环。并且要确保使用了'g'标记来进行全局的匹配，否则同样会造成死循环。")
let reg = /a/g
let result
while ((result = reg.exec(str)) !== null) {
    console.log(result)
}