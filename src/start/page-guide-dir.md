# 文件目录

- 图片文件夹：ossweb-img
- CSS 文件夹：css
- JS 文件夹：js
- include 页面片段文件夹：inc

::: warning 警告
路径`分离前`文件图片、`CSS`、`JS` 引用的资源路径保留 http:或者使用相对路径，不然本地无法预览。 路径 分离后 的 `CSS`、`JS` 引用的资源路径使用`相对域名根目录的路径/cp/专题目录/`。
:::

![](https://ossweb-img.qq.com/upload/webplat/info/tgideas/20170919/253581312537051.jpg)

## include

- 多页面专题，提取页面相同 HTML 代码片段，页面中 `include` 载入使用
- 路径需要从域名根目录开始，引用方式必须为 `virtual`，不能为 file

- `include` 推荐使用`.html` 格式，可以在文件中再次 `include` 其他文件

**正确：**

```html
<!--#include virtual="/web201801/inc/nav.html" -->
<!--#include virtual="/m/m2018/inc/nav.html" -->
<!--#include virtual="/cp/a20160112music/inc/nav.html" -->
```

**错误：**

```html
<!--#include file="/inc/文件名.html"-->
<!--#include file="inc/文件名.html"-->
```

## 专题目录命名

专题目录就是重构包文件夹名称，使用 `a+日期+专题英文或拼音` 统一使用小写字母，例如：`a20090817avatar`，文件名禁止以数字开头。 重构包命名优先使用有意义的英文名，如使用拼音，拼音字符超过 10 个，请使用首个拼音的全称+后面拼音的简写

**常用示例：**

| 专题名称           |     描述     |
| ------------------ | :----------: |
| a20090817lottery   |   抽奖专题   |
| a20090817sign      |   签到专题   |
| a20090817booking   |   预约专题   |
| a20090817citymatch |  城市赛专题  |
| a20090817tgamatch  | TGA 赛事专题 |
| a20090817fans      |    粉丝站    |
| a20090817coming    |    爆料站    |

## 文件命名

所有文件名统一使用小写，首页命名为`index.html` html 内页，有明显分类的，参考使用以下示例命名，无明确意义的，可用`page01.html`、`page02.html`，禁止使用特殊字符，统一使用小写字母

**常用命名：**
| 专题名称 | 描述 |
| ------------------ | :----------: |
|index.html |引导页&首页|
|main.html |首页|
|news.html |资讯页|
|newsdetail.html |资讯详情页|
|raiders.html |攻略页|
|raidersdetail.html |攻略页详情页|
|download.html |下载页面|
|actlist.html |活动列表页面|
|video.html |视频|
|cdkey.html |CDKEY 兑换页|
|wallpaper.html |壁纸页面|
