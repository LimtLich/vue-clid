export function getType(index, types) {
  let num = Number(index)
  if (num < 10) {
    return `第0${Number(index)+1}类 ${types[num]}`
  } else {
    return `第${Number(index)+1}类 ${types[num]}`
  }
}

export function getTypeName(index) {
  let num = Number(index)
  return TradeTypes[num]
}

export function getInvoiceType(status) {
  let maps = ['公司', '个人']
  return maps[status]
}

export function getOwnTypes(status) {
  let maps = ['原始', '继承', '承受', '转让', '其他']
  return maps[status]
}

export function getBelongTypes(status) {
  let maps = ['个人作品', '法人作品', '职务作品', '委托作品', '合作作品', '其他']
  return maps[status]
}
export function getCreativeNature(status) {
  let maps = ['原创', '改编', '翻译', '汇编', '注释', '整理', '其他']
  return maps[status]
}
export function getSignatureType(status) {
  let maps = ['本名', '匿名', '别名']
  return maps[status]
}
export function getAppType(status) {
  let maps = ['网站应用', '移动应用', '桌面客户端应用']
  return maps[status]
}
export function getAppStatus(status) {
  let maps = ['未授权', '普通授权', '高级授权']
  return maps[status]
}
export function getAuthorMes(status) {
  let maps = ['已知', '原作者已不存在', '无法联系到原作者']
  return maps[status]
}
export function getFilterCartType(status) {
  let maps = ["文字作品", "口述作品", "音乐作品", "戏剧作品", "曲艺作品", "舞蹈作品", "杂技作品", "美术作品", "摄影作品", "工程设计图、产品设计图", "地图、示意图", "模型作品", "建筑作品", "电影作品", "类似摄制电影方法创作完成的作品", "汇编作品", "多媒体汇编作品", "其他作品"]
  return maps[status]
}
export function getFilterCerTypeMin(status) {
  let maps = ["身份证", "护照", "港澳居民来往大陆通行证", "台湾居民来往大陆通行证", "户口簿", "军官证", "其他证件", "企业营业执照", "组织机构代码证", "事业单位法人证书", "社团登记证"]
  return maps[status]
}
export function getFilterCerType(status) {
  let maps = ["身份证", "护照", "港澳居民来往大陆通行证", "台湾居民来往大陆通行证", "户口簿", "军官证", "其他证件", "企业营业执照", "组织机构代码证", "事业单位法人证书", "社团登记证"]
  return maps[status]
}
export function getFilterAuthorType(status) {
  let maps = ["自然人", "企业法人", "机关法人", "事业单位法人", "社会团体法人", "其他组织"]
  return maps[status]
}
export function getOpusFirType(status) {
  let maps = ['摄影', '美术/建筑', '工程设计/产品设计', '文学小说', '短文章', '词作', '短视频', '影视剧作', '音频', '声效', '编曲']
  return maps[status]
}
export function getOpusSecType(status) {
  let maps = ['100字以下', '101-5000字', '5001-10000字', '1万字', '词曲', '曲', '电视剧/集', '超短片1分钟', '超短片1-5分钟', '超短片5-10分钟', '超短片10-25分钟', '超短片25-45分钟', '超过45分钟']
  return maps[status]
}
export function getAuthType(status) {
  let maps = ['摄影', '美术/建筑', '工程设计/产品设计', '文学小说', '短文章', '词作', '短视频', '影视剧作', '音频', '声效', '编曲']
  return maps[status]
}
export function getManageState(status) {
  let maps = ['未启用', '已启用']
  return maps[status]
}
export function getNameState(status) {
  let maps = ['黑名单', '白名单']
  return maps[status]
}
export function getChainState(status) {
  let maps = ['未登记', '已登记']
  return maps[status]
}
export function getTraceState(status) {
  let maps = ['进行中', '已停止']
  return maps[status]
}
export function getOwnershipType(status) {
  let maps = ['个人作品', '合作作品','企业作品']
  return maps[status]
}
export function getTrademarkType(status) {
  let maps = ['文字', '图形', '文字及图形']
  return maps[status]
}
export function getPicType(status) {
  let maps = ['着色', '黑白']
  return maps[status]
}
export function getOrderState(status) {
  let maps = ['待支付', '已支付', '已完成', '已关闭']
  return maps[status]
}
//订单字典
export function getOrderDetailState(status) {
  let maps = ['未提交', '待付款', '已付款', '交易完成', '已关闭', '交易成功', '未发货', '已发货', '资料待审核', '待提交资料', '待退款', '已退款', '已拒绝退款', '退款中']
  return maps[status]
}
export function getPaymentType(status) {
  let maps = ['在线支付', '银联支付', '银联支付B2B', '微信支付']
  return maps[status]
}
export function getcompanyType(status) {
  let maps = ['企业', '大专院校', '科研单位', '事业单位']
  return maps[status]
}
export function formatNum(num, format = '0,0', denominator = 1) {
  return numeral(num / denominator).format(format)
}
export function formatTime(millisecond) {
  return moment(millisecond).format('YYYY-MM-DD HH:mm:ss')
}
export function verifyNumber(email) {
  let pattern = /^\+?[1-9]\d*$/
  return pattern.test(email)
}
export function verifyUrl(email) {
  let pattern = /(http|https):\/\/([\w.]+\/?)\S*/
  return pattern.test(email)
}
export function verifyAngel(email) {
  let pattern = /^\+?[0-9]\d*$/
  return pattern.test(email)
}
export function verifyPhoneCode(email) {
  let pattern = /^\+?[0-9]\d{1,4}$/
  return pattern.test(email)
}
export function verifyPassport(email) {
  let pattern = /^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$/
  return pattern.test(email)
}
export function verifyIDCard15(email) {
  let pattern = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/
  return pattern.test(email)
}
export function verifyIDCard(email) {
  let pattern = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
  return pattern.test(email)
}
export function verifyHKMAKAO(email) {
  let pattern = /^[a-zA-Z]{1}([0-9]{11}|[0-9]{10}|[0-9]{8})$/
  return pattern.test(email)
}
export function verifyHukou(email) {
  let pattern = /^[a-zA-Z0-9]{3,21}$/
  return pattern.test(email)
}
export function verifyArmy(email) {
  let pattern = /[\u4e00-\u9fa5](字第){1}(\d{4,8})(号?)$/
  return pattern.test(email)
}
export function verifyLicsence(email) {
  let pattern = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/
  return pattern.test(email)
}
export function verifyZuZhi(email) {
  let pattern = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]/
  return pattern.test(email)
}
export function verifyTAIWAN1(email) {
  let pattern = /^[0-9]{8}$/
  return pattern.test(email)
}
export function verifyTAIWAN2(email) {
  let pattern = /^[0-9]{10}$/
  return pattern.test(email)
}
export function verifyZipCode(email) {
  let pattern = /^[0-9]{6}$/
  return pattern.test(email)
}
export function verifyTel(tel) {
  let pattern = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
  return pattern.test(tel)
}
export function verifyEmail(email) {
  let pattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  return pattern.test(email)
}
export function verifyMobile(email) {
  let pattern = /^1[34578]\d{9}$/
  return pattern.test(email)
}
export function verifyXCode(email) {
  let pattern = /\d{15}|\d{19}/
  return pattern.test(email)
}
export function verifyNtshrCode(email) {
  let pattern = /^[a-zA-Z0-9]{10,20}$/
  return pattern.test(email)
}
export function initEditor(editor) {
  editor.customConfig.menus = [
    'head', // 标题
    'bold', // 粗体
    'fontSize', // 字号
    'fontName', // 字体
    'italic', // 斜体
    'underline', // 下划线
    'strikeThrough', // 删除线
    'foreColor', // 文字颜色
    'link', // 插入链接
    'list', // 列表
    'justify', // 对齐方式
    'emoticon', // 表情
    'image', // 插入图片
    'video', // 插入视频
    'undo', // 撤销
    'redo' // 重复
  ]
  editor.customConfig.uploadImgShowBase64 = true
  editor.customConfig.zIndex = 10
  editor.create()
  window.editor = editor
  // editor.cmd.do('justifyLeft')
}
export function formatSmallChinese(num) {
  let AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
  let BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  let a = ("" + num).replace(/(^0*)/g, "").split("."),
    k = 0,
    re = "";
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
          .test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re;
    if (a[0].charAt(i) != 0)
      re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) // 加上小数部分(如果有小数部分)
  {
    re += BB[6];
    for (let i = 0; i < a[1].length; i++)
      re += AA[a[1].charAt(i)];
  }
  if (re == '一十')
    re = "十";
  if (re.match(/^一/) && re.length == 3)
    re = re.replace("一", "");
  return re;
}
