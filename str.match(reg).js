
// 存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。 如果没找到匹配结果返回 null 。

let str = 'abcabc';

let matchArr = str.match(/[c]/)
console.log('如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，返回的数组还含有两个对象属性。index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，input 属性声明的是对 stringObject 的引用。')
console.log(matchArr)

let matchArr2 = str.match(/[c]/g)
console.log('如果 regexp 具有标志 g，则 match() 方法将执行全局检索，找到 stringObject 中的所有匹配子字符串。若没有找到任何匹配的子串，则返回 null。如果找到了一个或多个匹配子串，则返回一个数组。不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 stringObject 中所有的匹配子串，而且也没有 index 属性或 input 属性。')
console.log(matchArr2)

let matchArr3 = str.match(/[2]/g)
console.log('如果没找到匹配结果返回 null ')
console.log(matchArr3)
