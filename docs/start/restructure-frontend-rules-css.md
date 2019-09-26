# CSS 编码规范

- 使用 UTF-8 编码来保存文件,

- 尽量少用多重选择器或后代选择器，因为这会影响性能

```css
/* 不推荐 */
ul#example {
}
div.error {
}
/* 推荐 */
#example {
}
.error {
}
```

- 使用组合属性。比如 font,margin,padding 等

```css
/* 不推荐 */
.example {
  margin-top: 0;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
}
/* 推荐 */
.example {
  margin: 0 10px 5px;
}
```

- 如果 css 属性的值为 0,则后面不要带上单位。除非真的是需要

```css
margin: 0;
padding: 0;
```

- 在 URI 类型的值里不要加上引号，比如：

```css
background: url(images/icon.png);
```

- 如果有可能，尽量使用 3 个字符的十六进制数

```css
/_不推荐_/
color: #eebbcc;
/_推荐_/
color: #ebc;
```

- 背景图片请尽可能使用 sprite 技术, 减小 http 请求, 考虑到多人协作开发, sprite 按模块制作;

- 代码缩进与格式: 每个 css 属性声明后都要使用一个分号，在紧跟属性名的冒号后使用一个空格，每一个 css 选择器或是属性声明都要新起一行

````css
h1, h2, h3 { font-weight: normal; line-height: 1.2; }
```

- ID 和 class 的命名规则参考 html-6，在 ID 和 class 中使用‘-’来作为连字符。具体可以根据当前功能模块命名。比如：

```css
.btn
.btn-success
.btn-info
.btn-warning
.btn-larger
.btn-small
````

- 必须为大区块样式添加注释, 小区块适量注释;

```css
/_注释_/ .example {
}
```

- 对于媒体查询的 css 直接写在对应 css 选择器下面

```css
.example {
  width: 100px;
}
@media (max-width: 768px) {
  .example {
    width: 50px;
  }
}
```

- 避免使用 css hack，优先考虑使用另一种写法来解决

- 避免使用 css 表达式 expression（标准、性能、安全性等问题）

- 不要使用@import 引入样式文件，对页面性能很有影响，（使用@import 导入的 CSS，客户端在浏览网页时是先将 html 的结构呈现出来，再把外部的 CSS 文件加载到网页当中。在 IE6/7/8 中，这会导致样式表文件逐个加载，并行下载资源是加速页面的一个关键。这种方法在 IE 中会导致页面需要更多的时间才能加载完成，）

- 书写代码前, 考虑并提高样式重复使用率;

- 使用合法、规范的 css,可以通过 W3C CSS validator 来进行验证。
