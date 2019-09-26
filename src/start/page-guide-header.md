# 页面头部

本章将介绍页面的`<head>`标签含有的内容。包含页面的基本信息、SEO 优化、双端页面跳转等。

## DOCTYPE 设置

文档类型统一使用 html5 的 doctype：

```html
<!DOCTYPE html>
```

## 页面编码

编码默认使用 GBK，特定情况下有指定要求也可以是 UTF-8

```html
<meta charset="GBK" />
```

```html
<meta charset="UTF-8" />
```

## TDK

::: warning 注意
请修改为对应项目的内容，禁止直接复制使用
:::

### 页面标题(Title)

页面名称-产品中文全称-官方网站-腾讯游戏-产品 slogan，28 个汉字以内

```html
<title>抓金角银角大王每周末放送装备 - 地下城与勇士官方网站 - 腾讯游戏</title>
```

### 页面关键字(Keywords)

Keywords 为产品名、专题名、专题相关名词，之间用英文半角逗号隔开

```html
<meta
  name="keywords"
  content="英雄联盟,lol,lol新手礼包,lol攻略,lol视频,lol视频攻略,英雄资料,英雄联盟战争学院,明星解说视频,101战争学院,英雄,攻略,WCG,点亮图标,赛事"
/>
```

## 页面描述(Description)

不超过 150 个字符，描述内容要和页面内容相关。

```html
<meta
  name="description"
  content="英雄联盟官方网站，海量风格各异的英雄，丰富、便捷的物品合成系统，游戏内置的匹配、排行和竞技系统，独创的“召唤师”系统及技能、符文、天赋等系统组合，必将带你进入一个崭新而又丰富多彩的游戏世界。"
/>
```

## 页面 Meta

### PC 端 Meta：

```html
<meta charset="gbk" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="robots" content="all" />
<meta name="author" content="Tencent-CP" />
<meta name="Copyright" content="Tencent" />
<meta name="Description" content="页面的描述内容" />
<meta name="Keywords" content="页面关键字" />
```

### 移动端 Meta：

```html
<meta charset="gbk" />
<meta
  name="viewport"
  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
/>
<!-- 为了防止页面数字被识别为电话号码，可根据实际需要添加： -->
<meta name="format-detection" content="telephone=no" />
<!-- 让添加到主屏幕的网页再次打开时全屏展示，可添加：   -->
<meta content="yes" name="mobile-web-app-capable" />
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta name="robots" content="all" />
<meta name="author" content="Tencent-CP" />
<meta name="Copyright" content="Tencent" />
<meta name="Description" content="页面的描述内容" />
<meta name="Keywords" content="页面关键字" />
```

## 页面跳转

如为双端页面，需要自动判断跳转，PC 访问移动端页面，跳转到对应的 PC 专题上，反之亦然。

### PC 端添加：

```js
(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var a = document.referrer,
      b = {
        'baidu.com': 'seo_baidu',
        'sogou.com': 'seo_sogou',
        'sm.cn': 'seo_sm',
        'so.com': 'seo_360',
        'bing.com': 'seo_bing',
        'google.com': 'seo_google'
      },
      c;
    for (c in b) {
      if (-1 != a.indexOf(c)) {
        a = b[c];
        if (window.sessionStorage) {
          sessionStorage.setItem('channel', a);
        } else {
          var d = d || 0,
            b = '';
          0 != d &&
            ((b = new Date()),
            b.setTime(b.getTime() + 1000 * d),
            (b = '; expires=' + b.toGMTString()));
          document.cookie = 'channel=' + escape(a) + b + '; path=/';
        }
        break;
      }
    }
    window.location.href = '/m/' + location.search;
  }
})();
```

::: warning 注意
`window.location.href` 跳转地址 `/m/` ，默认为移动端官网地址；
如是专题或其他需求，需要根据实际情况将 `/m/` 替换为相对应的移动端地址；
:::

### 移动端添加：

```js
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  window.location.href = 'PC端专题地址' + location.search;
}
```
