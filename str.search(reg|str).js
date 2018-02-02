
// 如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。

let str = '1111abc'
let searchRegReturn = str.search(/x/)
console.log(searchRegReturn)

let str2 = '1111abc'
let searchStrReturn = str2.search('bc')
console.log(searchStrReturn)



