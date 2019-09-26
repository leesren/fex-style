# WEB 前端页面安全指引

安全问题无小事，web 前端是 Web 安全的第一道屏障，本篇结合真实案例及相关资料，汇总整理了前端方面的安全防护措施,请大家一定要重视。如有遇到新的问题，欢迎反馈。

安全是相对于风险来讲的，风险一直伴随着互联网，攻击者出于不同目的，通过恶意代码、漏洞、网页仿冒等各种手段对 WEB 进行攻击，防御者不断通过各种修复方法来应对，随着互联网的发展，大家的安全意识也越来越强，比如 HTTPS 协议的使用就是提升 web 安全的一项措施，但是安全问题仍遍布互联网的角角落落，需要我们每个人一起努力守护。下面的内容主要收集了 WEB 前端方面发现的安全问题及修复办法，了解之前，让我们先来看看几条防御原则：

- **不要在页面中插入任何不可信数据，除非这些数据已经据根据编码规则进行了编码**

HTML 里有太多地方容易形成 XSS 漏洞而且形成漏洞的原因又有差别，比如有些漏洞发生在 HTML 标签里，有些发生在 HTML 标签的属性里，还有的发生在页面的`<script>`里，甚至有些还出现在 CSS 里，再加上不同的浏览器对页面的解析或多或少有些不同，使得有些漏洞只在特定浏览器里才会产生。
关于 XSS 的漏洞，想要了解详细内容可以阅读 [XSS Filter Evasion Cheat Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet) ；如果英文阅读不便，可以阅读 [XSS 防御备忘录中文版](https://www.zybuluo.com/laodao/note/9592)

- **页面中不要引用外部 CDN 资源的 JavaScript 文件、CSS 文件**
- **对用户输入的内容进行安全性验证**

## 常见的前端安全问题

前端的安全问题主要集中在跨站脚本攻击(XSS)这一类，产生 XSS 漏洞的原因各种各样，对于漏洞的利用也是花样百出，我们先来认识下它。

跨站脚本攻击（Cross Site Scripting）为不和 CSS 混淆，故将跨站脚本攻击缩写为 XSS。
恶意攻击者往 Web 页面里插入恶意 Script 代码，当用户浏览该页之时，嵌入其中 Web 里面的 Script 代码会被执行，从而达到恶意攻击用户的目的。

**防范 XSS：**

- 对输入进行验证
- 对输出进行编码
  想详细了解可以参考这两篇文章 [《Cross-site Scripting (XSS)#Stored_and_Reflected_XSS_Attacks)》](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS) 和 [《DOM Based XSS》](https://www.owasp.org/index.php/DOM_Based_XSS)

## URL 跳转漏洞

借助未验证的 URL 跳转，将应用程序引导到不安全的第三方区域，从而导致的安全问题。
由于是从可信的站点跳转出去的，用户会比较信任，所以跳转漏洞一般用于钓鱼攻击，通过转到恶意网站欺骗用户输入用户名和密码盗取用户信息，或欺骗用户进行金钱交易；

也可能引发的 XSS 漏洞（主要是跳转常常使用 302 跳转，即设置 HTTP 响应头，Locatioin: url，如果 url 包含了 CRLF，则可能隔断了 http 响应头，使得后面部分落到了 http body，从而导致 xss 漏洞）。

如[https://qt.qq.com/safecheck.html?flag=1&url=https://jtvx518.cc](https://qt.qq.com/safecheck.html?flag=1&url=https://jtvx518.cc)

**修复方法：**

- 在控制页面转向的地方校验传入的 URL 是否为可信域名。
- 接入防御 JS 代码 [https://js.aq.qq.com/js/aq_common.js](https://js.aq.qq.com/js/aq_common.js)

**漏洞检测：**

- 修改参数中的合法 URL 为非法 URL，然后查看是否能正常跳转或者响应包是否包含了任意的构造 URL

## `target="_blank"` 存在跳转风险

带有 `target="_blank"` 跳转的网页拥有了浏览器 window.opener 对象赋予的对原网页的跳转权限，这可能会被恶意网站利用，例如一个恶意网站在某 UGC 网站 Po 了其恶意网址，该 UGC 网站用户在新窗口打开页面时，恶意网站利用该漏洞将原 UGC 网站跳转到伪造的钓鱼页面，用户返回到原窗口时可能会忽视浏览器 URL 已发生了变化，伪造页面即可进一步进行钓鱼或其他恶意行为...

修复方法： 为 `target="_blank"` 加上 rel="noopener noreferrer" 属性。

## JQUERY 的下列方法存在 XSS 的风险，在使用前应该对输入的内容进行编码或检查

```js

.html(val) | $("#MyH").html("as>/" <img src=abc.jpg onerror='alert(0);'>alert('s');"); .append(val)|$("#MyH").append("<strong>Hello</strong><script>alert(3);"); . prepend(val)|$("#MyH").prepend("<strong>Hello</strong><script>alert(3);"); . before(val)|$("#MyH").before("<strong>Hello</strong><script>alert(3);"); .replaceWith(val)|$("#MyH").replaceWith("<strong>Hello</strong><script>alert(3);"); . after(val)|$("#MyH").after("<strong>Hello</strong><script>alert(3);");


```

** 修复方法：**

- 在使用前应该对输入的内容进行编码或检查
- 使用.text()方法替换.html()方法操作元素内容

## 防御/修复方法

- 接入防御 JS 代码 [https://js.aq.qq.com/js/aq_common.js](https://js.aq.qq.com/js/aq_common.js)
- 使用 https 协议，页面中的资源的引用目前使用自适应的写法

## 检测工具

- 代理类检测 Webscarab，OWASP-开放 Web 应用程序安全项目
- 综合扫描类工具 skipfish，谷歌开源的
- Web 安全测试平台 Vega Platform [https://www.oschina.net/p/vega](https://www.oschina.net/p/vega)
- 抓包工具 - HttpWatch
- AppScan

## 更多资源

- [前端安全系列（一）：如何防止 XSS 攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)
- [前端安全系列（二）：如何防止 CSRF 攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)
- [常见 web 安全攻防总结](https://www.jianshu.com/p/303206ae2471)
