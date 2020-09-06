/*
author:584c28fd21e82e5eb31e51e784444f46
JavaScript写的生成随机数
如果在浏览器中调试的话去掉前面的定义变量的var
*/

// => 为定义匿名函数
/* 
Math.floor() 返回小于或等于一个给定数字的最大整数。
粟子：Math.floor(6.9) === 6
*/
// Math.random()返回介于 0（包含） ~ 1（不包含） 之间的一个随机数

var akb = x => Math.floor(Math.random() * 10**x);
