
// 如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。

let str = '1111abcabc'
let searchRegReturn = str.search(/x/g)
console.log('返回值:stringObject 中第一个与 regexp 相匹配的子串的起始位置。' +
    '注释：如果没有找到任何匹配的子串，则返回 -1。')
console.log(searchRegReturn)

let searchStrReturn = str.search('bc')
console.log(searchStrReturn)



