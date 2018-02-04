
// 如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。

let str = '1111abcabc'
let searchRegReturn = str.search(/bc/)
console.log('返回值:stringObject 中第一个与 regexp 相匹配的子串的起始位置。' +
    '注释：如果没有找到任何匹配的子串，则返回 -1。')
console.log('search() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置。')
console.log(searchRegReturn)

let searchStrReturn = str.search('d')
console.log(searchStrReturn)



