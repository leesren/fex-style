# 游戏内异形屏适配规范

异形屏越来越多，统一下适配规范，让大家更好更方便地处理

适配原则：安卓和 IOS 使用同一套样式，针对 2:1 宽高比的设备统一使用异形屏处理

## 适配步骤

### 1. html 文件 meta 新增 viewport-fit=cover （ios）

范例：

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,viewport-fit=cover"
/>
```

### 2. JS 添加刘海方向识别代码

```js
//依赖zepto:https://ossweb-img.qq.com/images/js/zepto/zepto.min.js
//以下js只是通过横屏方向判断刘海在左边还是右边，再配合css实现对应的适配
var orientationDetect = function() {
  var displayStr = '';
  if (displayStr.length > 0) {
    $(document.body).removeClass(displayStr);
  }
  switch (window.orientation) {
    case 0:
      //刘海在上边
      displayStr = 'direction_por';
      break;
    case -90:
      //刘海在右边
      displayStr = 'direction_land_ops';
      break;
    case 90:
      //刘海在左边
      displayStr = 'direction_land';
      break;
    case 180:
      //刘海在下边
      displayStr = 'direction_por_ops';
      break;
  }
  $(document.body).addClass(displayStr);
};
window.addEventListener('DOMContentLoaded', orientationDetect, false);
window.addEventListener('orientationchange', orientationDetect, false);
```

### 3. CSS 根据刘海方向特殊适配

适配原则：

- 不使用之前苹果专用的 env()方法进行适配

- 安卓和 IOS 均使用 mediaquery 将 ratio 2/1 的设备统一使用异形屏表现

- 刘海间距：50 像素(建议使用 rem 单位等比换算,本案例基准 100)

示例：

```css
@media screen and (min-aspect-ratio: 200/100) {
  /* 刘海在左，处理菜单和内容位置 */
  .direction_land .menu {
    padding-left: 0.5rem;
  }
  .direction_land .content {
    margin-left: 2rem;
  }
  /* 刘海在右，处理内容 */
  .direction_land_ops .content {
    margin-right: 0.5rem;
  }
}
```

### 4. DEMO

[代码示范 on codepen](https://codepen.io/nornor-the-scripter/pen/aKEGKr)

### 5. 实际案例

![](https://game.gtimg.cn/images/tgideas/weweb/tech/s3/iphonex.png)

使用浏览器 iphonex 模拟器可以发现菜单变宽了，案例具体可参照[全军出击微社区](http://pubgm.qq.com/ingame/all_dev201805/index.shtml)

## 调试方法

![](https://game.gtimg.cn/images/tgideas/weweb/tech/s3/lhpdb.png)

更新至最新 Chrome 调试器，在调试设备中选择 iphoneX 进行调试即可（基本可覆盖安卓刘海设备的情况）
