# 移动端 H5 页面音频/视频规范

移动端设备屏幕尺寸、分辨率各不相同，不同系统对音频/视频的支持情况也不一样，为了音频/视频可以在不同设备表现更好，请参阅以下规范。

## 音频输出建议

- 音频格式为.mp3；
- 音频文件大小压缩控制在 5M 以内；

## 音频 H5 常见问题

背景音乐不能自动播放，音频在 H5 页面中通常做为背景音乐，有些需求要求实现自动播放

**解决方法：**

- 页面设计中添加播放音乐的开关，通过交互操作实现音乐的播放；
- 微信或 APP 场景中通过监听 WeixinJSBridgeReady 事件、DOMContentLoaded 事件；
- 通过手势事件播放音乐，监听 body 的 touchstart 事件，回调中播放音乐；

## 视频输出尺寸

- 竖版视频尺寸：750x1448px，其中安全区域大小 750x1095px；横版视频尺寸：1422x600px，其中安全区域大小 960x600px；
- H5 视频码率规范及尺寸详细如下图：
  ![](https://game.gtimg.cn/images/tgideas/doc/cntimg/gitbook/spec/spec-video-sizes.png)

## 视频 H5 页面交互设计建议

- 因视频文件一般较大，为了体验流畅，需要设计加载页面，页面尺寸同视频分辨率一致；
- 对于不能自动播放视频的设备，设计开始播放视频的指引按钮；

## 视频 H5 前端组件推荐

- 全屏适配组件 mmdPlugin，可以实现适配屏幕，实现全屏展示视频;横竖屏兼容，可强制横/竖屏;[详情请查看](http://tgideas.qq.com/doc/frontend/component/m/mmd.html)
- video 视频兼容组件 mmdVideoPlayer，针对已知 video 兼容问题进行封装优化,增加了属性和功能,灵活性更高;[详情请查看](http://tgideas.qq.com/doc/frontend/component/m/mmd.html)

## 视频压缩教程

[Handbrake](https://handbrake.fr/)是个免费的视频压缩软件，对 x264（视频编码工具）的支持更好，可以设置更多视频压缩相关参数。

1. 设置预设

![](https://ossweb-img.qq.com/upload/webplat/info/tgideas/20180122/1516606066482347.png)

2. 尺寸设置

![](https://ossweb-img.qq.com/upload/webplat/info/tgideas/20180122/1516606072973676.png)

3. 视频压缩参数设置

码率在 950（黑白）-1350（大量运动镜头）之间

在 Extra Options 输入

```
vbv-bufsize=5000:vbv-maxrate=5000

```

需要控制循环和播放的视频，需要加入

```
keyint=24:min-keyint=12

```

![](https://ossweb-img.qq.com/upload/webplat/info/tgideas/20180122/1516606083768783.png)

4. 音频设置

![](https://ossweb-img.qq.com/upload/webplat/info/tgideas/20180122/1516606089363552.png)
