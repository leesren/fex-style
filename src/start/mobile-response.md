# 移动端页面适配知识

目前腾讯互动娱乐移动端外包页面可分为官网和专题类型。

## 专题页面

绝大部分的专题需要严格按照设计比例进行，可采用 [rem 布局](https://tgideas.qq.com/doc/frontend/spec/m/layout.html) 从而能够较精确的页面设计还原。

此外，不推荐通过`transform:scale | zoom`的方式进行缩放的方式适配，可能会出现模糊、容器外弹窗缩放比例不正确、滚动异常等情况。

如果横竖都需要兼容，分两种情况

1. 页面没有滚动内容 此时可使用 css3 旋转屏幕的方式

2. 页面有滚动区域 分两种情况
   - 使用 CSS 的媒体查询功能对非当前设计的屏幕方向[给予提示](https://tgideas.qq.com/doc/frontend/spec/m/compatibility.html#%E6%A8%AA%E7%AB%96%E5%B1%8F%E5%85%BC%E5%AE%B9)，提示用户手动旋转屏幕
   - 如果项目横竖屏都能正常使用，设计稿阶段需要有两版，分别对应横屏竖屏，然后前端重构使用 CSS 媒体查询对页面元素进行横竖适配。

## 官网页面

官网可看作是专题的一个特殊分类，所以上面对于专题页面的适配方式也适用于官网页面。但在实际项目中，还有这些点需要注意：

- **新闻列表标题长度不定，需要做自适应处理。如超过一行之后自动换行，高度自适应；或者超出内容用省略号显示。**

```css
/* 超出一行用省略号显示 */
.title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 超出2行用省略号显示 */
.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
```

- **官网页面的生命周期比普通专题更长，需要特别注意后期的可维护性，例如：**

  - 版块的增减是否会影响页面整体的布局

  * tab 的数量是很可能会增减的，每个 tab 的宽度不要写死，推荐 flex 布局。

    [我们就来谈谈 Flexbox 布局](https://tgideas.qq.com/gicp/news/475/6515231.html)

  * 版块的标题，在设计阶段就需要注意，尽量不要使用特殊字体和不可延展的背景。重构在写页面的时候就能使用系统默认字体，且方便对不同长度的标题做自适应处理。

## 异形屏

异形屏越来越多，但大多数时候，页面设计为竖屏浏览，不需要特别处理；而微社区大部分页面是横屏设计，此时可参考[游戏内异形屏适配规范](https://tgideas.qq.com/weweb/tech/detail.shtml?infoid=680909#)
