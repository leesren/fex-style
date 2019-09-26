# Javascript 编码规范

- 使用 UTF-8 编码来保存文件。

- 总是使用 var 声明变量， 变量命名规范使用驼峰式（variableNamesLikeThis）,当命名构造函数或类时使用驼峰式的大写，有意义的变量名，多个变量声明用逗号隔开，将变量声明放在当前环境作用域开始的地方(function 的最上面)，比如：

```js
(function(){
   var btnExample,
        ... ...  ,    //其他变量
        something,
        variableNamesLikeThis,
        btnTest;
   function User(name){
 this.name = name;
   }
   if (something) {
      // ...
   } else {
      // ...
   }
})()
```

- Javascript 没有块级作用域，不要在块内声明一个函数

```js
//错误的写法

if (x) {
  function foo() {}
}
//正确的写法
function foo() {}
if (x) {
}
```

- 每个表达式语句后面加分号。

- 优先使用单引号(‘)于双引号(“)，因为字符串可能包含 HTML 代码, 比如：

```js
var test = ‘<span class=”example”></span>’;
```

- 操作符两端添加空格

```js
var a = 1,
  b = 2;
if (a > b) {
  //do some thing
}
```

- 不要使用 with- 对象和数组的初始化直接使用{}，[]

```js
var a = {},
  b = [];
```

- 注释

```js
/**
 * foo函数描述
 * @type {number} 类型
 */
function foo(type) {
  //do some thing
}
```

- eval 尽量不用。只用于解析序列化串(最好用 JSON 的 JSON.parse()来替代 eval()), eval() 会让程序执行的比较混乱, 当 eval() 里面包含用户输入的话就更加危险.可以用其他更佳的, 更清晰, 更安全的方式写你的代码,

- for-in 只用于 object/map/hash 的遍历

* 尽量避免修改内置对象的原型，或在内置对象原型添加方法（Date, Object,Array ,String 等等）
  //避免修改内置对象的原型

```js
Date.prototype.addDay = function(days){
......
}
```

- 空行：方法之间加，单行或多行注释前加，逻辑块之间加空行增加可读性- 避免额外的逗号。

如：`var arr = [1,2,3,];`

- 所有的循环体和判断体都需要用 {}括起来

```js
if(a){
...
}
```

- 不要把参数命名为 arguments, 这将会覆盖函数作用域内传过来的 arguments 对象

```js
// bad
function foo(name, options, arguments) {
  // ...do some thing...
}

// good
function foo(name, options, args) {
  // ...do some thing...
}
```

- Javascript 继承使用寄生组合式继承：通过借用构造函数来继承属性,通过原型链形式来继承方法。

```js
function inheritPrototype(subType, superType) {
  var F = function() {};
  F.prototype = superType.prototype;
  subType.prototype = new F(); //创建父类原型的一个副本，将创建的对象(副本)赋值给子类的原型
  //高级浏览器可以直接用Object.create(superType.prototype)
  subType.constructor = subType;
}

/*
 *超类
 */
function SuperType(name) {
  this.name = name;
  this.friends = ['gay1', 'gay2'];
}
SuperType.prototype.sayName = function() {
  alert(this.name);
};

/*
 *子类
 */
function SubType(name, age) {
  SuperType.call(this, name); //继承SuperType的属性
  this.age = age; //扩展出age属性
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
  alert(this.age);
}; //扩展出sayAge方法
```

- `"use strict"` (ECMAscript 5 声明)在函数内使用，放在函数的第一行，使得 Javascript 在更严格的条件下运行， 增加运行速度。

```js
function foo() {
  'use strict';
  a = 123; //严格模式下直接报错 a 未声明
}
```

- 缓存局部变量，根据作用域链的特性局部变量访问是最快的。在编写代码的时候应尽量少使用全局变量，尽可能使用局部变量

```js
function foo(){
    ...
    var changeColor = function(){
       var doc=document;
        doc.getElementById("test").onclick=function(){
            doc.getElementById("test").style.backgroundColor="red";
        };
    }
}
```

- 事件绑定，对于列表的事件绑定使用事件委托

```js
//bad
$(‘ul li’).on(‘click’, function(){  ... });

//good
$(‘ul’).on(‘click’, ‘li’ function(){  ... });
```

- 使用 require 或 seajs 模块化管理 javascrit

- 使用 html 模板库处理 html 字符串拼接

- 使用 jslint 进行脚步检测 比如：http://www.jslint.com/

## 开发性能规范

- 减少 http 请求，

- 使用外部 javascript 和 CSS 充分利用缓存

- 考虑把大图切成多张小图，常见在 banner 图过大的场景

- 高端浏览器数据离线化，考虑将数据缓存在 localStorage

- 图片使用 CSS Sprites 或 DATAURI

- 外链 CSS 中避免 @import 引入，避免使用 css 表达式

- 避免打包大型类库

- 初始首屏之外的图片资源可考虑延迟加载

- 单页面应用(SPA)考虑延迟加载非首屏业务模块

- 尽量使用 CSS3 代替图片 icon、使用 CSS3 动画代替 JS 动画，低端浏览器可以考虑降级处理

- 缓存 DOM 选择与计算

- 减少触发页面重绘的操作

- 尽可能使用事件代理，避免批量绑定事件

- HTML 结构层级保持足够简单

## 性能测试网站

- 访问 [Google PageSpeed](http://developers.google.com/speed/pagespeed/insights/)

- [webpagestest](https://www.webpagetest.org/)
