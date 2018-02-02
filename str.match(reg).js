
// 存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。 如果没找到匹配结果返回 null 。

let str = 'a101';
let matchArr = str.match(/[1]/g)

console.log(matchArr)
