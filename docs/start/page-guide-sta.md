# 数据统计

页面需要使用 **PTT 统计代码组件**`ping_tcss_tgideas_https_min.js`进行数据上报。

如没有正确执行上报，少加、漏加、错加代码将导致页面统计不到任何数据，后果很严重。

页面重构完成后请仔细检查，并且详细阅读以下说明。

## 页面 PV 统计代码

需要在页面底部添加 `PTT 统计代码`，如果是官网记得 `siteType` 属性填写为 `os`

::: warning 警告
PTT 的主函数 pgvMain() 请不要延迟执行，建议直接调用，或者最迟在 document.DOMContentLoaded(即通常理解的 domReady) 事件内调用。晚于此时间点上报统计请求，有`统计数据丢失`的风险，也会触发`网页质量工单`。
:::

```html
<script src="//ossweb-img.qq.com/images/js/PTT/ping_tcss_tgideas_https_min.js"></script>
<script>
  //此段代码不能放到外链JS中，
  var setSite = {
    //设置网站属性
    siteType: 'a20160711xxx', //必填项:"os"代表是官网，如果不是，则填写actName例如a20160701xxx
    pageType: 'index', //必填项:本页面的定位；按照页面含义填写例如main||list||detail||download||share||page1||pageN,不支持点(.)、下划线(_)
    pageName: '首页', //必填项:页面中文名
    project: 'other', //选填项:如果是官网模块则是必填;按照模块内容，填写固定的对应值;官网微社区base;同人站doujin;赛事match;故事站story;文化站history;粉丝站fans;爆料站coming;论坛bbs;皮肤skin;默认other;
    osact: 0 //选填项:默认是0。osact=0表示非官网专题；osact=pc表示pc官网/pc官网专题；osact=m表示移动官网/移动官网专题；osact=ingame表示微社区/微社区专题
  };
  if (typeof pgvMain == 'function') pgvMain(); //千万不能忘记！
</script>
```

::: warning 注意

siteType 要么填写 os 要么填写文件夹名称，不要直接复制照搬，必须全小写。
PTT 所有埋点如有多个单词拼接，请使用英文中横线(-)，禁止所有其他写法例如点(.)、下划线(`_`)、英文逗号(,)、驼峰式(大小写)等，包括但不限于 siteType、pageType、pageName、PTTSendClick、exposure。

:::

一般只需要改的是前三项 siteType、pageType、pageName，其中 pageType 和 pageName 可以自定义，可参考上面代码中的注释。

::: danger 不要遗漏

不要忘了在加载完 PTT 组件后，执行 `if(typeof(pgvMain)=='function')pgvMain();`

:::
如果使用 PTT 上报方式，以下组件由于 PTT 上报已经集成故不能使用，会冲突：

- js/comm/stayTime.min.js 停留时间统计组件
- js/comm/pagecount.min.js 停留时间统计组件
- js/comm/exposure.min.js 触达率/曝光次数统计组件

## 关于 setSite.project

选填，目的是区分官网类型，在官网体系内是必填项。

例如隶属于官网体系的赛事中心，会有自己的主页、资讯列表页详情页等，这个时候需要细化官网体系，就需要 project 区分；

**按照模块内容，填写固定的对应值；**

| 站点类型 | project 值 |
| -------- | :--------: |
| 原生官网 |    base    |
| 微社区   |   ingame   |
| 同人站   |   doujin   |
| 赛事     |   match    |
| 故事站   |   story    |
| 文化站   |  history   |
| 粉丝站   |    fans    |
| 爆料站   |   coming   |
| 论坛     |    bbs     |
| 皮肤     |    skin    |

如果什么都不填，则自动默认值为 other。

如果以上可选项都不适用于该内容模块，请联系需求接口人。

## 曝光埋点

用来统计官网的模块的曝光量和模块点击；

::: warning 注意

官网一定要添加

:::

### 使用方法

PC 端和移动端用法一样； 在官网模块 dom 结构上添加 exposure-tag="英文名,中文解释" 属性及值；

```html
<div class="news" exposure-tag="英文名,中文解释"></div>
<!-- 例如： -->
<div class="news" exposure-tag="news,新闻"></div>
```

**官网曝光埋点案例：**

![](https://game.gtimg.cn/images/tgideas/doc/cntimg/gitbook/spec/common-datareport1.png)

## 按钮上报

### PC 端

```html
<!-- 开始游戏 -->
<a href="#" onclick="PTTSendClick('btn','start','开始游戏');">开始游戏</a>
<!-- 分享给朋友 -->
<a href="#" onclick="PTTSendClick('btn','share','分享');">分享给朋友</a>
<!-- 预约-->
<a href="#" onclick="PTTSendClick('btn','order','预约');">预约</a>
<!-- 下载游戏 -->
<a href="#" onclick="PTTSendClick('btn','download','下载游戏');">下载游戏</a>
<!-- 视频播放 -->
<a href="#" onclick="PTTSendClick('btn','playvideo','播放视频');">播放视频</a>
```

### 移动端

```html
<a href="javascript:;" id="btnStart">开始游戏</a>
<script src="//ossweb-img.qq.com/images/js/mobile_build/util/zepto.js"></script>
<script>
  $('#btnStart').tap(function() {
    PTTSendClick('btn', 'start', '开始游戏');
  });
</script>
```

::: tip 提示
直接在 dom 元素上增加 onclick 事件，在传递参数的时候，请确保双引号和单引号的嵌套使用正确。 页面中，PTTSendClick 传递的第二个参数不能重复，必须是唯一值
:::

如页面为翻屏形式，在每次翻屏结束时的回调函数中执行上报，其中 e.nowpage 为当前页,e.nextpage 为翻屏触达的页

```js
PTTSendClick('page', 'page' + e.nowpage + 'to' + 'page' + e.nextpage, '翻屏');
```

H5 专题中，如需要统计页面加载流失等，可以将 PTT 组件前置放在 head 中，JS 脚本执行

```js
PTTSendClick('page', 'loadstart', '开始加载');
```

在页面加载完成的回调函数中执行

```js
PTTSendClick('page', 'loadend', '加载结束');
```

::: tip 提示
如在脚本中使用到 PTTSendClick，比方说统计流失率。

在页面的进入执行 PTTSendClick('loading','loadstart','开始加载');

以及加载完成执行 PTTSendClick('loading','loadend','加载完成')进行数据上报时候，需要确保在此之前 PTT 组件已经加载完成且已经执行过 pgvMain 这个函数，不然执行 PTTSendClick 会报错。
:::

## ADTAG 上报

数据上报还有另外一种方式是在链接上加一个参数，用于特定渠道访问量统计。比如链接是http://pvp.qq.com，那在后面拼接参数ADTAG=专题名称.位置.描述

注：用英文句号.做分割，最多不可超过 4 个

最终为：http://pvp.qq.com?ADTAG=a20170505.btn.logo

::: tip 提示
如果原链接本来就带参数，比如`http://pvp.qq.com/path/page.html?id=123,加上&再拼接即可`，和平常的`url`传参方式一样。

最终为：`http://pvp.qq.com/path/page.html?id=123&ADTAG=a20170505.btn.logo`
:::

## 虚拟上报

虚拟上报分为虚拟域名和虚拟页面

- 虚拟页面

如果一个页面需要区分多种情况，可以构造不同的虚拟 URL，这样就可以使用虚拟后的 URL 查看此页面的数据，

其中 virtualURL：虚拟 URL，注意不要包含域名。

```js
if (typeof pgvMain == 'function') pgvMain({ virtualURL: '/path/xxx.html' });
```

- 虚拟域名

适用情形：如果一个页面需要上报数据到另外的域名，可以构造虚拟域名，构造虚拟域名后需在虚拟域名下查看该页面的数据

virtualDomain：虚拟域名，会发送这个域名到点击流服务器

```js
if (typeof pgvMain == 'function') pgvMain({ virtualDomain: 'xxx.qq.com' });
```

## 其他上报方式

除非项目指定使用以下 ping_tcss_ied 上报数据，否则统一使用上面的 PTT 统计代码组件

- **页面 PV 统计**

```html
<!-- 底部加入JS -->
<script src="//pingjs.qq.com/ping_tcss_ied.js"></script>
<script>
  if (typeof pgvMain == 'function') {
    pgvMain();
  }
</script>
```

- **按钮上报**

```html
<!-- 按钮上报，参数为：专题名称.页面名称.元素描述.功能 -->
<a
  href="javascript:;"
  onclick="pgvSendClick({hottag:'a20150825file.index.btn.open'});"
></a>
```

使用`ping_tcss_ied`上报时候，虚拟上报和 ADTAG 使用同 `PTT 统计代码组件`。
