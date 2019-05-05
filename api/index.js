import axios from 'axios'
import qs from 'qs'
import request from 'superagent'
import {
  FILE_ROOT,
  API_ROOT,
  PAY_ROOT,
  HOST_ROOT,
  BACK_HOST,
  LOGIN_HOST,
  CHAIN_ROOT
} from './config.js'

axios.defaults.withCredentials = true; //让ajax携带cookie
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8;'

// 拦截器
axios.interceptors.request.use(config => {
  // config.data = qs.stringify(config.data, {
  //   allowDots: true
  // })
  return config
}, error => {
  return Promise.reject(error)
})

function fetch(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        //未登录
        if (response.data.code < 200 && process.client) {
          if (url.split('/')[5] && url.split('/')[5] == 'developerInfo' || url.split('/')[5] == 'hasMessage' || url.split('/')[4] && url.split('/')[4] == 'message'|| url.split('/')[4] && url.split('/')[4] == 'message?undefined') {
            console.log(url)
          } else {
            location.href = `${LOGIN_HOST}?backUrl=${BACK_HOST}/`
          }
        }
        resolve(response.data)
      }, reject)
  })
}

function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then((response) => {
        //未登录
        if (response.data.code < 200 && process.client) {
          location.href = `${LOGIN_HOST}?backUrl=${BACK_HOST}/`
        }
        resolve(response.data)
      }, reject)
  })
}

function put(url, data) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then((response) => {
        //未登录
        if (response.data.code < 200 && process.client) {
          location.href = `${LOGIN_HOST}?backUrl=${BACK_HOST}/`
        }
        resolve(response.data)
      }, reject)
  })
}

function del(url) {
  return new Promise((resolve, reject) => {
    axios.delete(url)
      .then((response) => {
        //未登录
        if (response.data.code < 200 && process.client) {
          location.href = `${LOGIN_HOST}?backUrl=${BACK_HOST}/`
        }
        resolve(response.data)
      }, reject)
  })
}

//登录
export function login(params) {
  return request.post(`${API_ROOT}/login`).send(params).then(res => {
    return res.body
  }).catch(e => {
    return Promise.reject(e)
  })
}
//登出
export function logout() {
  return request.post(`${API_ROOT}/logout`).send({}).then(res => {
    return res.body
  }).catch(e => {
    return Promise.reject(e)
  })
}

//文件上传
export function uploadFiles(file) {
  return request.post(`${FILE_ROOT}/ipr/fastdfs/upload`).attach('file', file).then(res => res.body)
}

//提交资料
export function submitInformation(params) {
  return post(`${HOST_ROOT}justice/appearance`, params)
}
//更新资料
export function updateInformation(params) {
  return put(`${HOST_ROOT}justice/appearance`, params)
}
//更新资料状态
export function updateServiceStatus(params) {
  return put(`${HOST_ROOT}justice/appearance/updateServiceStatus`, params)
}
//删除资料
export function deleteInformation(id) {
  return del(`${HOST_ROOT}justice/appearance/` + id)
}
//获取审核详情
export function getAuditInformation(id) {
  return fetch(`${HOST_ROOT}justice/appearance/` + id)
}
//新增商品
export function createProduct(params) {
  return post(`${HOST_ROOT}justice/item`, params)
}
//获取商品列表
export function getProductList(params) {
  return fetch(`${HOST_ROOT}justice/category`, params)
}
//获取商品详情
export function getProductDetail(id) {
  return fetch(`${HOST_ROOT}justice/item/` + id)
}
//根据类目ID获取商品列表
export function getProductListById(params) {
  return fetch(`${HOST_ROOT}justice/category?${params}`)
}
//根据类目获取商品
export function getProductDetailByCat(id) {
  return fetch(`${HOST_ROOT}justice/category/` + id)
}
//更新商品
export function updateProduct(params) {
  return put(`${HOST_ROOT}justice/item`, params)
}
//删除商品
export function deleteProduct(id) {
  return del(`${HOST_ROOT}justice/item/` + id)
}
//新增订单
export function createOrder(params) {
  return post(`${HOST_ROOT}justice/order`, params)
}
//导出订单
export function orderExport(params) {
  return `${HOST_ROOT}justice/order/export?ids=` + params
}
//导出资料
export function apperanceExport(params) {
  return `${HOST_ROOT}justice/appearance/export/` + params
}
//根据用户id查询订单
export function getOrderByUserID(params) {
  return fetch(`${HOST_ROOT}justice/order/fastQueryList?${params}`)
}
//更新订单
export function editOrder(params) {
  return put(`${HOST_ROOT}justice/order`, params)
}
//管理员查询所有订单
export function getAllOrderAdmin(params) {
  return fetch(`${HOST_ROOT}justice/order/fastQueryList?${params}`)
}
//获取订单支付签名
export function getOrderSign(id, payType) {
  return fetch(`${HOST_ROOT}justice/order/paying?id=${id}&payType=${payType}`).then(res => res.data)
}
//获取订单详情
export function getOrderInfo(id) {
  return fetch(`${HOST_ROOT}justice/order/` + id)
}
//是否存在未读订单信息
export function getUnReadMessage() {
  return fetch(`${HOST_ROOT}justice/order/hasMessage`)
}
//是否存在未读服务信息
export function getUnReadServiceMessage() {
  return fetch(`${HOST_ROOT}justice/appearance/hasMessage`)
}
//设置信息为已读
export function setMessageIsRead(id) {
  return put(`${HOST_ROOT}justice/order/haveRead?orderId=` + id)
}
//设置服务信息为已读
export function setServiceMessageIsRead(id) {
  return put(`${HOST_ROOT}justice/appearance/haveRead?appearanceId=` + id)
}
//获取订单item详情
export function getOrderItemInfo(id) {
  return fetch(`${HOST_ROOT}justice/order/item/` + id)
}
// //获取服务列表
// export function getServiceList(params) {
//   return fetch(`${HOST_ROOT}justice/order/item?${params}`)
// }
//获取服务列表
export function getServiceList(params) {
  return fetch(`${HOST_ROOT}justice/order/item/fastQueryList?${params}`)
}
//管理员查询所有服务列表
// export function getServiceListAdmin(params) {
//   return fetch(`${HOST_ROOT}justice/order/item/listAdmin?${params}`)
// }
//获取支付信息
export function getPayInfo(params) {
  return fetch(`${PAY_ROOT}/payment/unifiedOrder${qs.stringify(params, { addQueryPrefix: true })}`)
}

//申请退款
export function orderRefund(params) {
  return post(`${HOST_ROOT}justice/refund`, params)
}
//获取退款详情
export function getRefundInfo(id) {
  return fetch(`${HOST_ROOT}justice/refund/findByOrderId?orderId=` + id)
}
//更新退款详情
export function updateRefundInfo(params) {
  return put(`${HOST_ROOT}justice/refund`, params)
}
/**
 * 原创保护接口
 */

//新增原创保护流程
export function createOriginal(params) {
  return post(`${HOST_ROOT}original/author`, params)
}

//更新原创保护流程
export function updateOriginal(params) {
  return put(`${HOST_ROOT}original/author`, params)
}

//获取用户暂存信息
export function getTempInfo() {
  return fetch(`${HOST_ROOT}original/author/getTempInfo`)
}

//下载存正

//获取安全交付文件
export function getDeliveryImg(param) {
  console.log("param:", param)
  return fetch(`${HOST_ROOT}original/file/downloadFile?txHash=${param.txHash}&id=${param.id}`)
}

//获取安全交付文件信息
export function getDeliveryInfo(param) {
  console.log("param:", param)
  return fetch(`${HOST_ROOT}original/file/getFileInfo?txHash=${param.txHash}&id=${param.id}`)
}

//检查文件是否存在
export function checkTortFile(id) {
  return fetch(`${HOST_ROOT}/original/author/tortFileExist/` + id)
}

//供应链附件下载
export function getTortFile(id) {
  return fetch(`${HOST_ROOT}original/author/downloadTortFile/` + id)
}

//获取暗水印图片
export function getTortFile2(params) {
  return fetch(`${HOST_ROOT}chain/conveyor/file/detail`,params)
}

//获取安全交付列表
export function getSecureDelivery(params) {
  return fetch(`${HOST_ROOT}original/secure/delivery?${params}`)
}

//新增安全交付
export function addSecureDelivery(params) {
  return post(`${HOST_ROOT}original/secure/delivery`, params)
}

//获取安全交付详情
export function getSecureById(id) {
  return fetch(`${HOST_ROOT}original/secure/delivery/` + id)
}

//更新安全交付详情
export function updateSecureDelivery(params) {
  return put(`${HOST_ROOT}original/secure/delivery`, params)
}

//删除安全交付
export function delSecureById(id) {
  return del(`${HOST_ROOT}original/secure/delivery/` + id)
}

//批量删除安全交付
export function delMutiSecureById(params) {
  return del(`${HOST_ROOT}original/secure/delivery/batchDelete?ids=` + params)
}

//批量禁用/启用安全交付
export function stopOrStartSecure(params) {
  return put(`${HOST_ROOT}original/secure/delivery/batchEnableOrDisabled?ids=${params.id}&status=${params.status}`)
}
export function stopOrStartMutiSecure(params) {
  return put(`${HOST_ROOT}original/secure/delivery/batchEnableOrDisabled?ids=` + params.ids + `&status=${params.status}`)
}
export function delTortById(id) {
  return del(`${HOST_ROOT}tort/task/?ids=` + id)
}

//批量删除溯源任务
export function delMutiTortById(params) {
  return del(`${HOST_ROOT}tort/task?ids=` + params)
}

//禁用/启用溯源任务
export function stopOrStartTort(params) {
  return put(`${HOST_ROOT}tort/task/batchEnableOrDisabled?ids=${params.id}&status=${params.status}`)
}
//批量禁用/启用溯源任务
export function stopOrStartMutiTort(params) {
  return put(`${HOST_ROOT}tort/task/batchEnableOrDisabled?ids=` + params.ids + `&status=${params.status}`)
}

//新增溯源
export function addTortTask(params) {
  return post(`${HOST_ROOT}tort/task`, params)
}

//新增溯源
export function updateTortTask(params) {
  return put(`${HOST_ROOT}tort/task`, params)
}

//获取溯源列表
export function getTortTask(params) {
  return fetch(`${HOST_ROOT}tort/task?${params}`)
}

//获取溯源列表
export function getTortTaskByAdmin(params) {
  return fetch(`${HOST_ROOT}tort/task/listByAdmin?${params}`)
}

//获取溯源详情
export function getTortDetail(id) {
  return fetch(`${HOST_ROOT}tort/task/` + id)
}

//获取溯源快照
export function getSnapshotPicture(id) {
  return fetch(`${HOST_ROOT}tort/task/getSnapshotPicture/` + id)
}

//查询侵权溯源信息
export function getTortResult(params) {
  return fetch(`${HOST_ROOT}tort/task/listSearchInfo?${params}`)
}

//删除用户暂存信息
export function deleteAuthor(id) {
  return del(`${HOST_ROOT}original/author/` + id)
}

//确认提交资料
export function submitOriginal(id) {
  return put(`${HOST_ROOT}original/author/submitInfo/` + id)
}

//获取历史存证数据
export function getHistoryList(params) {
  return fetch(`${HOST_ROOT}original/author?${params}`)
}

//获取存证数据详情
export function getCertInfo(params) {
  return fetch(`${HOST_ROOT}original/file?${params}`)
}

//获取区块数据详情
export function getChainInfo(params) {
  return fetch(`${HOST_ROOT}original/file?${params}`)
}

//生成二维码
export function getChainQrCode(params) {
  return `${HOST_ROOT}api/qrcode?${params}`
}

//获取文件详情
export function getUploadedFileDetail(params) {
  // return post(`${CHAIN_ROOT}/conveyor/file/detail`, params)
  let postData = qs.stringify(params, {
    allowDots: true
  })
  let instance = axios.create({
    baseURL: CHAIN_ROOT,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
    }
  });
  return instance.post('/conveyor/file/detail', postData)
}

//获取版权首页统计
export function getOriginalFileTotal() {
  return fetch(`${HOST_ROOT}original/file/getOriginalFileTotal`)
}

//新增地址
export function addAddress(params) {
  return post(`${HOST_ROOT}justice/delivery`, params)
}
//更新地址
export function updateAddress(params) {
  return put(`${HOST_ROOT}justice/delivery`, params)
}
//删除地址
export function deleteAddress(id) {
  return del(`${HOST_ROOT}justice/delivery/` + id)
}
//设置默认地址
export function setDefaultAddress(id) {
  return put(`${HOST_ROOT}justice/delivery/` + id)
}
//获取地址列表
export function getAddressList() {
  return fetch(`${HOST_ROOT}justice/delivery`)
}

//新增合作机构
export function addCooL(params) {
  return post(`${HOST_ROOT}justice/cooperate`, params)
}
//更新合作机构
export function updateCool(params) {
  return put(`${HOST_ROOT}justice/cooperate`, params)
}
//删除合作机构
export function deleteCool(id) {
  return del(`${HOST_ROOT}justice/cooperate/` + id)
}
//批量处理合作机构
export function batchUpdateCoo(params) {
  return put(`${HOST_ROOT}/justice/cooperate/batchUpdate`, params)
}
//获取合作机构列表
export function getCooList(params) {
  return fetch(`${HOST_ROOT}justice/cooperateOut?${params}`)
}

//获取发票列表
export function getInvoiceList(params) {
  return fetch(`${HOST_ROOT}justice/invoice?${params}`)
}

//获取发票订单列表
export function getInvoiceOrderList(params) {
  return fetch(`${HOST_ROOT}justice/order/findInvoices?${params}`)
}

//获取发票详情
export function getInvoiceById(id) {
  return fetch(`${HOST_ROOT}justice/invoice/` + id)
}

//新增发票
export function addInvoice(params) {
  return post(`${HOST_ROOT}justice/invoice`, params)
}

//修改发票
export function updateInvoice(params) {
  return put(`${HOST_ROOT}justice/invoice`, params)
}

//删除发票
export function delInvoice(id) {
  return del(`${HOST_ROOT}justice/invoice/` + id)
}

//更新订单发票
export function updateOrderInvoice(params) {
  return put(`${HOST_ROOT}justice/order/updateInvoice`, params)
}

//获取消息列表
export function getMessageList(params) {
  return fetch(`${HOST_ROOT}justice/message?${params}`)
}

//删除消息
export function delMessagesById(params) {
  return del(`${HOST_ROOT}justice/message/batchDelete?ids=` + params)
}

//设置消息已读/未读
export function setMessagesById(params) {
  return put(`${HOST_ROOT}justice/message/batchRead?ids=` + params)
}

//获取黑白名单列表
export function getBlackWhiteList(params) {
  return fetch(`${HOST_ROOT}tort/black/white?${params}`)
}

//创建白名单
export function addWhite(params) {
  return post(`${HOST_ROOT}tort/black/white`, params)
}

//更新名单状态
export function updateWhite(params) {
  return put(`${HOST_ROOT}tort/black/white`, params)
}

//批量更新名单状态
export function updateMutiWhite(params) {
  return put(`${HOST_ROOT}tort/black/white/batchEnableOrDisabled?ids=`+ params)
}

// 开放平台

//获取应用列表
export function getPlatformList(params) {
  return fetch(`${HOST_ROOT}platform/apply/app?${params}`)
}

//新增应用
export function addPlatformApp(params) {
  return post(`${HOST_ROOT}platform/apply/app`, params)
}

//更新应用
export function updatePlatformApp(params) {
  return put(`${HOST_ROOT}platform/apply/app`, params)
}

//获取应用详情
export function getPlatformApp(id) {
  return fetch(`${HOST_ROOT}platform/apply/app/` + id)
}

//获取开发者列表
export function getDeveloperList(params) {
  return fetch(`${HOST_ROOT}platform/developer?${params}`)
}

//新增开发者
export function addDeveloper(params) {
  return post(`${HOST_ROOT}platform/developer`, params)
}

//更新开发者
export function updateDeveloper(params) {
  return put(`${HOST_ROOT}platform/developer`, params)
}

//获取开发者详情
export function getDeveloper() {
  return fetch(`${HOST_ROOT}platform/developer/developerInfo`)
}

//阿里云身份校验
export function validIdCardByAli(params) {
  return fetch(`${HOST_ROOT}original/author/verifyIdCard?${params}`)
}