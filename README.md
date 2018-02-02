
### 对应关系：




### reg.test(str)
检索字符串中指定的值。返回 true 或 false。

### reg.exec(str)
一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。

### str.search(reg|str)
如果匹配成功，则 search() 返回正则表达式或要查找的字符串在字符串中首次匹配项的索引。否则，返回 -1。

### str.match(reg)
存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。 如果没找到匹配结果返回 null 。