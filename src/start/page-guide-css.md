# CSS 规范

## 选择器

- CSS 类名命名参考[注释与命名](/start/page-guide-name.html)

- 禁止使用层级过深的选择器，最多 3 级。

**错误示范：**

```css
.without-animation
  .book-body
  .body-inner
  .book-header
  .dropdown
  .dropdown-menu
  .buttons {
}
.without-animation
  .book-body
  .body-inner
  .book-header
  .dropdown
  .dropdown-right
  .buttons {
}
.without-animation
  .book-body
  .body-inner
  .book-header
  .pull-left
  .dropdown-menu
  .buttons {
}
.without-animation
  .book-body
  .body-inner
  .book-header
  .pull-left
  .dropdown-right
  .buttons {
}
.without-animation
  .book-body
  .body-inner
  .book-header
  .font-settings
  .dropdown-menu
  .buttons {
}
.without-animation
  .book-body
  .body-inner
  .book-header
  .font-settings
  .dropdown-right
  .buttons {
}
.without-animation
  .book-body
  .body-inner
  .book-header
  .js-toolbar-action
  .dropdown-menu
  .buttons {
}
.without-animation
  .book-body
  .body-inner
  .book-header
  .js-toolbar-action
  .dropdown-right
  .buttons {
}
```

- 除非有特定的功能、组件要求等，禁止随意使用 id 来定义元素样式

- 除非是样式 reset 需要，禁止对纯元素选择器设置特定样式，避免样式污染

**错误示范：**

```css
//会导致页面所有的a标签都被加上背景
a {
  background: url(xxx);
}

//后期修改可能会添加一些span标签，如果刚好在div里面，会被污染；不利于后期维护
div span {
  display: block;
}
```

## reset 示例

### PC 端

```css
body,
dl,
dd,
ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
p,
form,
header,
section,
article,
footer {
  margin: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5 tahoma, '\5FAE\8F6F\96C5\9ED1', sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
em,
b {
  font-style: normal;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
img {
  border: 0;
}
body {
  padding-top: 42px;
}
button,
input,
select,
textarea {
  font-size: 100%;
  outline: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th,
ul,
ol {
  padding: 0;
}
```

### 移动端

#### 有较多文字的文章类页面：

```css
/* 移动端常用reset.css (文字版本) */
/* reset */
html,
body,
div,
p,
ul,
li,
dl,
dt,
dd,
em,
i,
span,
a,
img,
input,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}
a,
img,
input {
  border: none;
}
body {
  font: 14px/1.75 -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
```

#### 如果页面无文字，或者不希望文字被长按选中，可使用下面的 reset；适合于大多数专题页面

```css
/* 移动端常用reset.css (无文字版本) */
/* reset */
html,
body,
div,
p,
ul,
li,
dl,
dt,
dd,
em,
i,
span,
a,
img,
input,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}
a,
img,
input {
  border: none;
}
body {
  font: 14px/1.75 -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
a,
img {
  -webkit-touch-callout: none; /* 禁止长按链接与图片弹出菜单 */
}
html,
body {
  -webkit-user-select: none; /* 禁止选中文本（如无文本选中需求，此为必选项） */
  user-select: none;
}
```

::: tip 提示
移动端页面不需要设置微软雅黑、宋体等字体，终端浏览器字体取决于设备上的系统字体。
:::
