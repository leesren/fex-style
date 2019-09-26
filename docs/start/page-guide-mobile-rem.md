# rem 布局

::: tip 提示
规范只列举了 rem 布局这一种适配方式，但不是说限制只能用这种布局方式。 无论用何种方式，需要保证在不同比例、不同尺寸的手机上，测试微信、手 Q、safari、UC 等主流浏览器无明显错位、变形。
:::

## viewport

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
/>
```

## 初始字号

css 中设定 html 根元素的初始字体大小为 100px

```css
html {
  font-size: 100px;
}
```

## 单位转换

不管你拿到的设计稿宽度是 640px 还是 750px，多大都一样。和我们平时做 PC 页面的做法基本一样，只需要把单位 px 换算成 rem，所有设计稿的的元素大小全除以 100 单位换成 rem，例如设计稿上个某个文字的大小为 30px，直接写 font-size:0.3rem。

## 示例代码

用 `onorientationchange` 函数来检测屏幕旋转，在一些 APP 或游戏内嵌页面会有该函数不会执行、orientation 获取不到的情况。所以如果是游戏 app 内嵌页建议使用 `resize` 事件，检查宽高变化来检测屏幕是否旋转。

```html
<script>
  //屏幕适应
  (function(win, doc) {
    if (!win.addEventListener) return;
    var html = document.documentElement;
    function setFont() {
      var html = document.documentElement;
      var k = 640;
      html.style.fontSize = (html.clientWidth / k) * 100 + 'px';
    }
    setFont();
    setTimeout(function() {
      setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded', setFont, false);
    win.addEventListener('resize', setFont, false);
    win.addEventListener('load', setFont, false);
  })(window, document);
</script>
```

## 注意事项

使用 rem 方式布局有以下几点需要注意：

- 页面用不同尺寸的手机进行测试

- 因为小于 1px 浏览器支持不够好为会导致计算会有误差，背景图使用雪碧图时，图标之间多留 5px 的空隙，同时图片的 backgrornd-size 属性最好写上图片的宽高，不写误差更大。

- 雪碧图，如图片宽高为 346px\*160px 需要设置 background-size 属性设置为 background-size: 3.46rem 1.6rem;

- 大小为 1px 的元素不要使用 rem，直接用 px

- 多栏多列布局优先使用百分比%或是 display:flex

示例猛戳 [这里](http://tgideas.qq.com/act/devonding/CP/index.htm)（请用 Chrome 模拟移动端方式查看）

## px-to-viewport

还有一种就是基于 H5 的新单位 VW 和 VH， 通过插件，把 px 单位转化成 vw

```js
require('postcss-px-to-viewport')({
  viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
  // viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
  unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
  selectorBlackList: ['.ignore', '.hairlines', /^.am-/], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
  minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
  mediaQuery: false // 允许在媒体查询中转换`px`
});
```
