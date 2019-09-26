# 重构答疑

重构可以当做是制作横屏的移动官网来实现，内容的接入，也是和双端官网一致，不同的是测试环节，会有一些类似登录态，白名单的环节，在下方测试环节，均会提及

## 一、重构环节

### 横屏微社区，竖屏如何兼顾？

横屏的微社区一般设计师很少会设计竖屏版本，因为重构基本可以自行处理。

**规则：**

- 左侧 fixed 导航->底部 fixed 导航

- 左栏变为顶部，右栏随后

### 微社区常用 JS，iconfont 字体库

微社区公共字体库

```css
@font-face {
  font-family: 'igfont';
  src: url('//ossweb-img.qq.com/images/js/bsCommonFiles/iconfont/iconfont.eot');
  src: url('//ossweb-img.qq.com/images/js/bsCommonFiles/iconfont/iconfont.eot?#iefix')
      format('embedded-opentype'), url('//ossweb-img.qq.com/images/js/bsCommonFiles/iconfont/iconfont.svg#iconfont')
      format('svg'),
    url('//ossweb-img.qq.com/images/js/bsCommonFiles/iconfont/iconfont.woff')
      format('woff'), url('//ossweb-img.qq.com/images/js/bsCommonFiles/iconfont/iconfont.ttf')
      format('truetype');
}
.igfont {
  font-family: 'igfont' !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.1px;
  -moz-osx-font-smoothing: grayscale;
}
```

图标集合地址：`http://ossweb-img.qq.com/images/js/bsCommonFiles/iconfont/demo_unicode.html`

### 微社区常用 JS 目录

```bash
# gitlab 仓库
```

### seo 问题可以忽略？

是的，场景在游戏内，无需考虑 SEO 问题

### 是否能使用 VueJs？

VUE 框架在微社区中应用广泛，是微社区目前推荐的框架，也能快速提高开发速度。附上版本对应的 JS 地址

```
https://ossweb-img.qq.com/images/js/bsCommonFiles/js/vue2.min.js //vue 2.0
https://ossweb-img.qq.com/images/js/bsCommonFiles/js/vue.js //vue 1.0
```

### 适配能否像移动官网那样用 rem？

适配选型可以参照移动官网，一般微社区有两种做法：

1. 布局百分比适配，字体与图片均为设计稿除 `2` 尺寸

2. `rem` 布局计算， 基准值 `100` ，下方为`<head>`里插入的适配代码

```js
(function(win, doc) {
  if (!win.addEventListener) return;
  var html = document.documentElement;
  function setFont() {
    var w = html.clientWidth,
      h = html.clientHeight;
    html.style.fontSize =
      w > h ? (w / 1334) * 100 + 'px' : (w / 750) * 100 + 'px';
  }
  doc.addEventListener('DOMContentLoaded', setFont, false);
  win.addEventListener('resize', setFont, false);
  win.addEventListener('load', setFont, false);
})(window, document);
```

### IOS 中 BORDER 的 0.5 像素如何处理？

常规做法是判断 IOS 设备，给 BODY 添加 class，区别样式：

- JS

```js
if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
  var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
    version = parseInt(v[1], 10);
  if (version >= 8) {
    document.documentElement.classList.add('hairlines');
  }
}
```

- CSS：

```css
.hairlines .index {
  border-width: 0.5px;
}
```

### 微社区数据统计接入

接入参考：http://tguide.oa.com/index.php/ptt

## 二、开发环节

::: warning
开发的每个功能环节，都依赖游戏的登录态。因此需要特别注意这点
:::

### JS 里的登录态约定（确保功能正常的基础）

微社区游戏的登录态，约定使用 sessionStorage 记录。字段：`dataSearch`，以下附上记录登录态代码：

```js
var dataSearch = window.location.search; //获取URL参数
//判断是否有内容或者是否是较为有效的登录态信息
if (
  !sessionStorage.dataSearch &&
  dataSearch.indexOf('appid') != -1 &&
  dataSearch
) {
  sessionStorage.dataSearch = window.location.search; //将登录态存到sessionStorage
}
```

### 双平台判断方法

一般登录态格式如下：

?partition=1011&roleid=104994510013439323&area=1&algorithm=v2&version=1.13.11×tamp=1494567380&appid= wxfdab5af74990787a &openid=oiz-ewRrOIHDAt88S5FquKqChdvw

**判断规则** ：

最简单的方法是判断登录态的 appid 属性是否含有 wx 字符，例子：

```js
//获取URL参数
function getParamVal(url, name) {
  url = url || location.search;
  url = url.replace(/\'|\"|\<|\>/, '');
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = url.substr(url.indexOf('?') + 1).match(reg);
  if (r != null) {
    return r[2];
  } else {
    return null;
  }
}
//从sessionStorage的dataSearch中获得登录态的appid
var appid = getParamVal(sessionStorage['dataSearch'], 'appid');
console.log(appid, 'appid');
if (appid.indexOf('wx') > -1) {
  //游戏圈逻辑
} else {
  //部落逻辑
}
```

VUE2.0 的判断方法：

```js

//微信平台：platform="wx"、QQ平台：platform="qq"、其他else
computed : {
    //双平台判断
    platform:function(){
        if(sessionStorage['dataSearch']&&sessionStorage['dataSearch'].indexOf("appid")>-1){
            var appid = getParamVal(sessionStorage['dataSearch'],"appid");
            if(appid.indexOf("wx")>-1){
                return "wx"
            }else{
                return "qq"
            }
        }else{
            return "else"
        }
    },
}
```

## 三、测试环节

### 如何在 MSDK 浏览器中模拟页面测试？

1. 使用 MSDK 浏览器测试客户端，见附件。IOS 使用 `itools`连接电脑进行安装即可

2. 用现有游戏微社区，JS 加白名单逻辑，跳转到你测试的页面

### 如何抓游戏登录态？

1. `WINDOWS` 使用 `fiddler` 抓包（需要注意 `HTTPS`，详细暂且百度）

2. `MAC` 使用 `charles` 抓包（需要注意 `HTTPS`，详细暂且百度）

3. 使用页面输出，复制到电脑，一般思路是用 `textarea` 装着。测试入口用下方白名单方式实现。[参照例子](http://hyrz.qq.com/ingame/v3/newsindex.shtml?acctype=qq&appid=wx82dd7436af5db835&openid=ozwwNj0TmLtqf8exbz-b9MIVR4gk&access_token=3FQKEwGM8IsNJgl5UeNx6yPuaeCKm_C9-Ci6Q5ov_ePzwSNuIFV1IzdLHf25Uj572ylCij_F-lowLC1OUHcvws060WqR6jYtAMMKsU_I9rI&platid=0&areaid=1&partition=100003&appid=wx82dd7436af5db835&version=2.15.0i&timestamp=1482899807&sig=f27f05d4ff98eb40e83c2061cdc67d61&encode=2&algorithm=v2&user-agent=ios_sdk&openid=ozwwNj0TmLtqf8exbz-b9MIVR4gk&msdkEncodeParam=adcb70c3bfff67cb699e73f17e85068e180a973d88e4bb48d0cb8d4a67eaf7ec1a4ccef65cca5c434d9518d1a1f7ff359cae433b8963c80441f77c5ffd1fffa8fc228c5ab64b0e8f62b8134032c355503c291c77ca13526b46145f11cbe21d23ef402536c5f2f712425731dd2026b58f358262570c0af5305867ca201a8cb3739ca687464cc5253afade2759341ee998a1feba13d4a556ded6c54ea6589cd85d445c51c9d172da52229eab7080c39dc3c56e60241424a75c8bed29c08f07a8951185210368d07ff40491005bf0a8d444ac0b9f096028e321&ADTAG=ingame.hyrz.push.match)
