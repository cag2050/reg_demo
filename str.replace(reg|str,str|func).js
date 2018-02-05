let str = 'abcabc'

let returnStr = str.replace('ab', '11')
console.log(returnStr)

let handledStr = str.replace(/ab/g, '11')
console.log(handledStr)

let str2 = '"a", "b"'
let handledStr2 = str2.replace(/"([^"]*)"/g, "'$1'")
console.log(handledStr2)

// 在所有的class里添加一个新的样式：newClass
let classStr = 'class="class1 class2" class="aaa"'
let handledStr3 = classStr.replace(/class=\"(.*?)\"/g, 'class="$1 newClass"')
console.log(handledStr3)
