# 移动端页面设计规范

## 页面尺寸

移动端设备屏幕尺寸非常多，为了适配不同设备，推荐使用 iPhoneX 的屏幕比例作为基准，使用尺寸大小：750x1624px，同时需保证重要内容在安全区域内，尺寸大小：646x1206px。

::: warning 例外情况
如果专题有跳转逻辑，比如登录引起的跳转，会引起微信浏览器底部出现导航条。此时的安全区域尺寸大小：646x1112px
:::

部分设备分辨率可查询 [SCREEN SIZES](http://screensiz.es/)，并参考设备的[分辨率分布](https://mta.qq.com/mta/data/device/resolution)

相关参考资料： [IOS 设备信息](https://www.theiphonewiki.com/wiki/Models)，[IOS 版本信息](https://developer.apple.com/support/app-store/)

## 推荐设计尺寸

**移动端设计稿推荐设计尺寸：750x1624px，重要内容在安全区域内：646x1206px**

移动端的首屏尤为重要，很多时候用户只关注到首屏的内容。并且很多移动端页面采用分屏浏览的的形式，这种形式让用户更集中注意力在一个画面中。首屏范围的设定选取的主流机型 IPHONE6 的分辨率大小，安全宽高为向下兼容到 iphone5s 的尺寸。

考虑到目标用户为游戏玩家，对设备要求较高，故而舍弃过去兼容到 4s 的尺寸，也更加便于设计师的发挥。

重要的操作按钮，主体 slogan 和游戏 icon 的露出，需要再安全区域内展示。

## 首屏范围的由来

市面上的机型超过 65%的长宽比为 178:100，如果按照设计 app 的思路，只需要选取一个中间设备 iPhone 6 尺寸来适配即可，但我们发现微信/手 Q 的浏览器头部并不是按照等比来缩放的，所以如果设计稿按照 iPhone 6 尺寸来等比例放大到 iPhone 6 plus 上，会出现留有一条黑边。

所以我们使用 iPhone 6 的大小等比例缩小到 iPhone 6 的尺寸，让设计稿溢出一点，当再适配到其他设备时，减去溢出的部分即可也不会影响设计稿的质量。
![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/wx-top.png)

iphone5/6 的头部为 128 高度; 而 iphone6 plus 的高度为 192 导致浏览框的比例不完全统一

## 适配剩下 35%尺寸

让设计稿在 178:100 的比例中显示最佳状态，在其他尺寸尽量信息完整

## 页面排版

### 标题文字

- 主标题建议在 7 个字内，一行最多不超过 7 字，标题一般是经过设计的字体

- 副标题文字需要能够说明详细活动信息，字体建议在 24-40 号之间

![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/slogan.png)
![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/slogan-demo.png)

- 标题文字超过 7 个字的情况下，文字折行处理，并且加强重要词语

![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/slogan2.png)

![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/slogan2-demo.png)

### 正文标题与内容

标题：字号 48，使用粗体

正文：字号 30 点，使用常规体

引文和次要信息：字号 24

段首无需空格，左对齐即可

![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/article.png)

### 文章列表的字号与间距

文章的标题不宜过长，建议控制在 18 字内

文章列表的间距需不得小于 90px

字号建议用 26~30 号

## 页面组件

### 按钮

- 页面只有一个按钮时候，按钮居中对齐，按钮高度需要大于 80px

- 如果按钮的重要级相当，建议用左右布局；不一致则建议用上下布局

![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/btn-guide1.png)
![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/btn-guide2.png)

### 页签与导航

![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/tab1.png)

- 移动端页面页签最多 5 个，页签字数一般 2 个，支持左右滑动切换页签

- 页签整体宽度与对应的内容宽度对齐，高度大于 90px；字体大于 30 号，使用粗体

![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/header.png)

头部条的高度建议 120px，icon 的大小为 100x100px

首页导航条：标签最多不超过三个

### 图标

- 热区大小 最小面积：44x44 像素

- 图形大小 最小面积：30x30 像素

### 游戏下载

建议将 LOGO 放置于页面的右上角，按钮大小：170x64 像素左右
![](https://game.gtimg.cn/images/tgideas/doc/cntimg/base/mdesign/game-download.png)

## 下载完整版

完整版内容请查看[TGIDEAS 移动端页面设计规范](https://share.weiyun.com/c248664877c2868c712ed7e1324719d5)

密码: ujcuWx
