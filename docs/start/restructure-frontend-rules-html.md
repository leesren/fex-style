# HTML 编码规范

基本准则 代码风格统一，代码要求简洁明了有序，符合 web 标准, 语义化 xhtml, 结构表现行为分离,兼容性优良. 页面性能良好

## 协议

省略图片、样式、脚本以及其他媒体文件 `URL` 的协议部分 （`http:`,`https:`），除非文件在两种协议下都不可用。这种方案称为 `protocol-relative URL`，好处是无论你是使用 `HTTPS` 还是 `HTTP` 访问页面，浏览器都会以相同的协议请求页面中的资源，同时可以节省一部分字节。

```html
//省略http:,https:
<script src="//ossweb-img.qq.com/images/js/mobile_bundle/milo.js"></script>

.example { background: url("//ossweb-img.qq.com/images/img.png"); }
```

## 编码规范

文档类型声明及编码: 统一为 `html5` 声明类型 `<!DOCTYPE html>` ; 编码统一为 `utf-8`
在定义页面的编码时使用 `<meta charset="utf-8">`

::: warning
Warning: 使用 AMS 的运营活动页面请使用 GBK.
:::

所有编码均遵循 xhtml 标准, 所有标签必须闭合; 属性值必须用双引号包括;

引入 css 文件或 JavaScript 文件时, 须略去默认 type 声明. 引入第三方 javascript 需加上 charset 属性指明编码格式。将 css 放在页面头部，脚本放在页面的底部( </body>之前)。 -内联元素中不可嵌套块级元素

```html
<!-- 不推荐 -->
<span class="”container”">
  <div>test</div>
</span>
<!-- 推荐 -->
<div class="”container”">
  <span>test</span>
</div>
```

id 与 class 命名,尽可能短，并符合语义, 英文单词全部小写字母，多个单词用 - 分隔。
比如：left-nav、header-nav、media-list 等等

需要为 html 元素添加自定义属性的时候, 以 data- 为前缀来添加自定义属性，避免使用其他命名方式;

语义化 html, 如段落标记用 p, 列表用 ul，根据用途来选择标签。

```html
<!-- 不推荐 -->
<div onclick="goToRecommendations();">All recommendations</div>
<!-- 推荐 -->
<a href="recommendations/">All recommendations</a>
```

给区块代码及重要功能加上注释, 用 TODO 来标志代码中需要完善的地方, DESC 来标注描述。

```html
<!-- TODO: 精简代码结构 --> <div>
  <div>
    <div>test</div>
  </div> </div>
<!-- DESC: left menu -->
<nav>
  <a href=”/”>home</a>
</nav>
```

尽可能减少 html 标签嵌套 -把多媒体元素可知化。像图片、视频、动画等多媒体元素，要有相关的文字来体现其内容，比如<img>可以使用 alt 属性来说明图片内容, 给重要的元素加上 title;

```html
<!-- 不推荐 -->
<img src="spreadsheet.png" />
<!-- 推荐 -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot." />
```

`HTML` 中`<，>，&`等有特殊含义，这类符号已经用来表示 `HTML` 标签，因此就不能直接当作文本中的符号来使用。为了在 `HTML`文档中使用这些符号，就需要定义它的转义字符串比如： `<(&lt;)、>(&gt;)、>(&amp;)`等等;

为每个块级元素新起一行，并且对每个子元素进行缩进 ,代码缩进每次缩进两个空格

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>
```

标签、属性名只使用小写字母

```html
<!-- 不推荐 -->

<a href="/">Home</a>

<!-- 推荐 -->
<img src="google.png" alt="Google" />
```

书写链接地址时, 必须避免重定向，例如：`href="https://www.qq.com/"`, 即须在 URL 地址后面加上/；

在页面中尽量避免使用内联 `style` 属性,即 `style="…"`;

在保证视觉效果的情况下选择最小的图片格式与图片质量, 以减少加载时间;

确保页面的 结构、样式、行为三者相分离。确保文档或模板中只包含 `html`，把用到的样式都写到样式表文件中，把脚本都写到 `js` 文件中。一些特殊的页面比如首页可以把少量只在该页面用到的特殊的 `css` 和 `JavaScript` 直接写在页面上以减少 `http` 请求让页面尽快的呈现。

书写页面过程中, 请考虑向后扩展性;
