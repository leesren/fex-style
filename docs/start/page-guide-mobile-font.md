# 移动端页面字体使用参考

PC 页面中通常使用微软雅黑作为中文字体进行设计，但在移动端，手机系统 ios、android 等是不支持微软雅黑字体，建议使用移动端系统默认的字体进行设置；如需求中有特殊字体或者图标可以使用 WEB 字体进行设置；

## 系统默认字体设置

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC',
    'Helvetica Neue', STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;
}
```

::: tip 提示
`-apple-system` 是在以 WebKit 为内核的浏览器（如 Safari）中，调用 Apple（苹果公司）系统（iOS, macOS, watchOS, tvOS）中默认字体（现在一般情况下，英文是 San Francisco，中文是苹方）
`BlinkMacSystemFont` 是在 Chrome 中实现调用 Apple 的系统字体
:::

### ios 系统默认字体

iOS 4.0+： 中文字体为 "华文黑体 STHeiTi"、英文字体为 "Helvetica Neue"；

iOS 9+： Safari 开始支持 -apple-system 参数， Chrome 使用 BlinkMacSystemFont ，兼容 iOS ／ MacOS

### android 系统默认字体

原生 Android 下中文字体与英文字体都选择默认的无衬线字体。

4.0 之前版本英文字体原生 Android 使用的是 Droid Sans，中文字体原生 Android 会命中 Droid Sans Fallback

4.0 之后中英文字体都会使用原生 Android 新的 Roboto 字体

### winphone 系统默认字体

默认中文字体是 Dengxian(方正等线体)

默认英文和数字字体是 Segoe

综上，各个手机系统有自己的默认字体，如无特殊需求，手机端无需定义中文字体，建议使用系统默认字体。如果需求包含特殊字体，可以使用 CSS3 `@font-face` 进行定义。

## WEB 字体

移动端 IOS 系统、安卓系统均支持`.ttf`格式的字体，WEB 字体选择中建议引用`.ttf`格式字体；

```css
// 定义web字体
@font-face {
  font-family: 'WebFontName';
  src: url('WebFontName.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.WebFontName {
  font-family: 'WebFontName';
}
```

::: warning 警告

在使用 web 字体前，请先确认字体是否免费，或是否有该字体的版权；
中文字体文件一般较大，有几 M 或者更大，建议使用工具提取页面中需要的字的字体文件；

:::

### WEB 字体相关工具介绍

**字体格式的转换工具**

为了全面兼容不同浏览器，需要.eot,.woff,.ttf,.svg 四种格式的字体文件，但大多数我们得到的可能只有一种格式的字体，可以通过一些在线工具进行格式转换

[fontsquirrel](https://www.fontsquirrel.com/tools/webfont-generator),上传已有的字体文件，然后会生成所有需要的格式文件；

[cloudconvert](https://cloudconvert.com/),全能格式在线转换，适合从一种字体格式转换为另一种；

**提取页面所需字体工具**

推荐使用 [字蛛+（Font-spider-Plus）](https://github.com/allanguys/font-spider-plus)进行字体提取压缩,是一个智能 WebFont 压缩工具，它能自动分析出本地页面和线上页面使用的 WebFont 并进行按需压缩。
