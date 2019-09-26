# 移动端事件介绍

移动端事件主要有触摸、滑动、点击、拖拽、双击、旋转、放大缩小，下面主要会介绍前三种事件

## 触摸

- `touchstart`：手指触摸到屏幕会触发
- `touchmove`：当手指在屏幕上移动时，会触发
- `touchend`：当手指离开屏幕时，会触发
- `touchcancel`：可由系统进行的触发，比如手指触摸屏幕的时候，突然 alert 了一下，或者系统中其他打断了 touch 的行为，则可以触发该事件

## swipe 类滑动事件

- `swipe`：手指在屏幕上滑动时会触发
- `swipeLeft`：手指在屏幕上向左滑动时会触发
- `swipeRight`：手指在屏幕上向右滑动时会触发
- `swipeUp`：手指在屏幕上向上滑动时会触发
- `swipeDown`：手指在屏幕上向下滑动时会触发

## 点击事件

### tap

标准事件中没有 tap 事件，tap 事件是 `zepto.js`，使用 touch 进行封装的

- `tap`: 手指碰一下屏幕会触发
- `longTap`: 手指长按屏幕会触发
- `singleTap`: 手指碰一下屏幕会触发
- `doubleTap`: 手指双击屏幕会触发

### click

- 移动端的 click 有 `300ms` 延迟的问题，在移动端浏览器中，连续两次点击是缩放操作，所以在用户点击屏幕后，浏览器会检查在 `300ms` 内是否有另一次点击，如果没有则触发 `click` 事件。因为有延迟，所以尽量不使用 `click` 做为点击事件

- 可以使用 `touchstart` 代替点击事件，但前提是同一对象上不能同时绑定一个单击事件和一个滑动事件

## 点透问题

- 原因 当一个用户在点击屏幕的时候，系统会触发 `touch` 事件和 `click` 事件，`touch` 事件优先处理，`touch` 事件经过 捕获，处理, 冒泡 一系列流程处理完成后， 才回去触发 click 事件
- 场景 `tap` 和 `click` 不能混用 `A` 和 `B` 不是后代继承关系(如果是后代继承关系的话，就直接是冒泡子类的话题了) `A` 发生 `touch`， `A` `touch` 后立即消失， `B` 事件绑定 `click` `A` `z-index` 大于 `B`，即 `A` 显示在 `B` 浮层之上
- 解决方案 可以 `touch` 阶段取消掉系统触发的 click 事件，也可以让消失的元素延迟 `200-300ms`

### HTML 代码 HTML codes

```html
<body>
  <div>
    <div id="A"></div>
    <div id="B"></div>
  </div>
</body>
<script type="text/javascript">
  var A = document.getElementById('A');
  var B = document.getElementById('B');
  A.addEventListener('touchstart', function(e) {
    A.style.display = 'none';
  });
  A.addEventListener('touchend', function(e) {
    e.preventDefault();
  });
  B.onclick = function() {
    console.log('兄弟元素B被点击了');
  };
</script>
```
