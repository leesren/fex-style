# 页面内容检查

## 文字

- 检查页面文字是否有错别字
- 检查文字中有无任何政治敏感信息
- 活动规则中的解释权、活动时间、奖励发放时间等，都需要排查语句是否通顺，文字有无缺失
- 页面中如有使用到英文，需要确保英文准确，切忌胡乱翻译。如：礼包翻译成 package"

## 图片

- 需要排除图片版权问题，常见如人物形象、道具、抽奖图片、KV、Logo 等
- 图片内容需要和文字描述保持一致
- 图片中使用到的特殊字体，需要确保得到字体授权，禁止使用任何没有得到授权的字体。
- 如图片对于身体暴露程度较高，需要和产品协商确认

## 视频

- 视频中如使用非游戏内的素材，需要确保得到授权。对于内容，需要验证没有错别字、政治敏感、身体暴露等违规内容
- 视频广告如需要屏蔽，参照【视频广告屏蔽指引】进行操作
- 使用非指定视频的视频源时，需要单独上传到指定服务器，页面引入 JS 进行调用，【详情点击】

## 音频

- 音频使用.mp3 格式，页面使用 audio 播放。
- 音频进行压缩，文件大小控制在 5M 以内；

## 版权信息

底部版权信息，在 频道【游戏私有版号信息】，并且分别录入对应信息，并确认信息的准确性

## 渠道页面

提前在 MCT(内网)中申请好权限，设置渠道包各项信息；
如需生成渠道落地页，需要在落地页面的下载按钮上增加如下 CSS 类名；
移动端模板页中的下载按钮 a 标签必须加上 class： `mct_download_btn`，
PC 端模板页中的安卓下载按钮 a 标签必须加上 class： `android_mct_download_btn`，
PC 端模板页中的 iOS 下载按钮 a 标签必须加上 class： `ios_mct_download_btn`，

**说明：**

- 为了保证所有渠道发布时间统一（之前有部分项目出现渠道提前一天拿出新包提供下载，导致被投诉），版本在应用宝审核通过后才能生成对应的渠道包。
- 考虑到外部有部分渠道会扫描应用宝的下载链接，渠道包有提前获取的风险，应用宝一般是发布当天才提供审核。

**方案：**

- 涉及到媒介推广的项目，建议在项目开始的时定好时间节点，设置项目上线前半个小时的邮件提醒，周知到对应接口人和 leader。
- 收到提醒后检查对应的 checklist 是否准备完毕，如果无问题把 checklist 结果以邮件形式发送对应负责人，邮件确认。如有问题或者缺少内容需要提前周知到媒介的同学进行处理。
- 如果项目有官网 cp 配合，提供对应的 checklist 文件给对应的项目经理或者产品经理，要求验收完发邮件确认上线。如有问题或者缺少内容需要提前周知到媒介的同学进行处理。
- 媒介在资源投放前需要与重构及官网的产品负责人确认好投放链接及页面状态， 页面确认没有问题才能推送