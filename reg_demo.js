
// \w 等价于：[0-9A-Za-z_]
let str = 'Aabc2_'
let matchArr = str.match(/\w/g)
console.log(matchArr)