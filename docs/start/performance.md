# 移动端页面性能优化指引

## 性能指标

- **首次有效渲染** 英文缩写为`FMP`，是指主要内容出现在页面上所需的时间，最好在 1s 以内
- **英雄渲染时间** 页面最重要部分渲染完成所需的时间
- **可交互时间** 英文缩写为`TTI`，是指页面布局已经稳定，关键的页面字体已经可见，主进程可以足够的处理用户的输入
- **页面帧率** 英文缩写为`FPS`，`60FPS`及以上为佳

## 网络资源加载

- 网络资源加载方面，主要的优化思路是减少资源体积，提高加载效率，移动 `H5` 前端性能优化指南开篇总结的很详细
- 另外，随着 `https` 项目改造，`http2.0` 已经在 ieg 全面使用，`http2.0` 为我们带来了很多新的优化手段：
  1. [HTTP/2 与 WEB 性能优化（一）](https://imququ.com/post/http2-and-wpo-1.html)
  2. [HTTP/2 与 WEB 性能优化（二）](https://imququ.com/post/http2-and-wpo-2.html)
  3. [HTTP/2 与 WEB 性能优化（三）](https://imququ.com/post/http2-and-wpo-3.html)

* 图片优化也是一个很热门的优化手段，特别是对于有很多图片需要展示的站点。我们内部在蜘蛛平台上已经开始使用 `webp` 和 `sharpp` 技术来优化图片。[web 前端优化之图片优化](https://www.jianshu.com/p/b55e951e9f03)这篇文章讲的比较细。
* 对于用到特殊字体的页面，字体文件对于网络加载来说也是一个很大的开销。`FSP` 工具可以减少中文字体文件的大小

## 存储及缓存

### 常见存储方式

- `cookie`
- `localStorage`
- `sessionStorage`
- `cacheStorage`
- `web SQL/indexDB`

### 常见缓存

- 浏览器缓存，即响应头（response header）中带的缓存指令，可以看看[这篇文章](https://blog.csdn.net/xiaozhuo_tang/article/details/78300855)
- 使用 serviceworker 缓存或离线页面。对于 serviceworker 不了解的同学，可以[看看这篇文章](https://segmentfault.com/a/1190000004653475)。MDN 上的 Using [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)手把手教你如何使用 serviceworker
- 客户端缓存，即内嵌在客户端里的页面，可以通过客户端的能力缓存部分资源文件甚至整个页面

## 页面渲染

- [移动 H5 前端性能优化指南](https://mp.weixin.qq.com/s/rMm8u6QM5O4dFClLEcXc3A)
- [google 出品的渲染性能](https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn)

## 性能调试及分析

`chrome devtools` 的 `timeline` 就是最好的性能调试工具，看完如何使用 [Timeline 工具](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool)这篇官方文档就能掌握用法了

另有一些常用的搜集和分析性能数据的方法：

- [前端性能分析](https://mp.weixin.qq.com/s/RHJq-Ju6E1YDWIQa0pPqcw)

## 性能监控

性能监控工具很多，公司内也有一些前端页面的性能监控平台，强烈推荐 Lighthouse：

- [lighthouse](https://developers.google.com/web/tools/lighthouse/)

## 更多资源

- [技术|性能优化的常见模式及趋势](https://mp.weixin.qq.com/s?spm=a2c4e.10696291.0.0.b56319a4ED01ae&__biz=MzI3MzEzMDI1OQ==&mid=402377146&idx=1&sn=a0ce95942028a23ea8fa3995728aa6fb&scene=4#wechat_redirect)
