# 视口（viewport）基础知识

了解视口知识，有助于选择合适的移动端页面适配的方式。

## 基本名词解释

- **屏幕尺寸**

  表示屏幕对角线的长度，单位为英寸(in)，1 英寸等于 2.54 厘米。例如：iPhone6 的屏幕尺寸为 4.7 英寸。
  [屏幕尺寸参考大全](http://screensiz.es/)

* **设备像素 DP(device pixels)**

  又称物理像素（physical pixel），是显示器设备上的一个物理像素点，系统可以通过控制每个像素点的颜色，使屏幕显示出不同的图像，每个设备的物理像素点是固定的，单位 pt。

* **分辨率**

表示设备屏幕在水平和垂直方向上的物理像素个数。例如，iPhone6 的分辨率为 750pt \* 1334pt。

每英寸像素 PPI（pixel per inch）

每英寸屏幕内有多少个设备像素点（物理像素），即像素密度（pixel density）。PPI 的值越高，画质越好，画面越细腻 计算公式为：PPI = （横向像素^2 +纵向像素^2 ）^0.5 /屏幕尺寸。例如：iPhone6 的像素密度等于 （750^2 +1334^2 ）^0.5/4.7 = 326。

- **设备独立像素 DIP（device-independent pixel，density-independent pixel）**

也叫密度无关像素，独立于设备的用于逻辑上衡量像素的单位，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用并控制的虚拟像素，然后由相关系统转换为物理像素。

- **CSS 像素**

又称为虚拟像素，设备独立像素的一种，是一种抽象单位，也可以理解为直觉像素。CSS 像素是 Web 编程的概念，指的是 CSS 样式代码中使用的逻辑像素。 CSS 像素 = 设备独立像素 = 逻辑像素

设备像素比 DPR(device pixel ratio)

未缩放状态下，设备像素和 CSS 像素的初始比例关系，也可以解释为默认缩放比例。 DPR 计算公式：DPR = 设备像素/CSS 像素。 可以通过 window.devicePixelRatio 获取移动设备的像素比。

- **viewport 相关的 CSS 单位**

vw – 视区（视口）宽度百分值，Viewport's Width 简写，1vw 等于 window.innerWidth 的 1%
vh – 视区高度百分值，Viewport's Height 简写，1vh 等于 window.innerHeight 的 1%
vmin – vw 或 vh，取小的那个
vmax – vw 或 vh，取大的那个
