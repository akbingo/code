# EXCEL生成随机数

## 生成六位数字

excel内置了两个随机函数 `RAND()` 和 `RANDBETWEEN()` 。RAND() 为生成大于或等于0且小于1的随机数，RANDBETWEEN()返回一个介于指定数字之间的随机数。

我们采用 RANDBETWEEN(0，999999) 就可以生成一个随机数，不过美中不足的是有可能是 64789 这样的五位数，需要在最前面补足 0。于是加个 TEXT() 函数，TEXT(RANDBETWEEN(0,999999),"000000")就可以生成一个6位数的随机数。同理，也可以生成n位的随机数。**注意一点，excel中的函数采用的是双引号，单引号会报错，和 json 一样。**

## 生成随机英文字母

excel 中有个 CODE() 函数可以查询字母的编码，用 `CODE("a")`,`CODE("z")`,`CODE("A")`,`CODE("Z")`便可查询到a,z,A,Z的编码分别为97，122，65和90，那么再配合CHAR()来生成字母。

`CHAR(RANDBETWEEN(97,122))`便可随机生成小写字母。

`CHAR(RANDBETWEEN(65,90))`便可随机生成大写字母。

那么，便可搭配使用了。例如在excel表格中输入`=CHAR(RANDBETWEEN(65,90)) & CHAR(RANDBETWEEN(97,122)) & TEXT(RANDBETWEEN(0,9999),"0000")`便可生成一个包含大小写字母和数字的六位随机数。
