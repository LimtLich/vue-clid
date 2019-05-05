//message.js
import * as api from "~/api/index";
//配置命名空间
const GET_MESSAGE = 'GET_MESSAGE'
const SET_MESSAGE = 'SET_MESSAGE'
const GET_SERVICEMESSAGE = 'GET_SERVICEMESSAGE'
const SET_SERVICEMESSAGE = 'SET_SERVICEMESSAGE'
const SET_ORDERMESSAGE = 'SET_ORDERMESSAGE'

export const state = () => ({
  messageCount: null,
  serviceMessage:null,
  orderMessageCount: null
})

export const getters = {
  [GET_MESSAGE](state) {
    return state.messageCount
  },
  [GET_SERVICEMESSAGE](state) {
    return state.serviceMessage
  },
}

export const mutations = {
  [SET_MESSAGE](state, payload) {
    state.messageCount = payload
  },
  [SET_SERVICEMESSAGE](state, payload) {
    state.serviceMessage = payload
  },
  [SET_ORDERMESSAGE](state, payload) {
    state.orderMessageCount = payload
  }
}

export const actions = {
  async getUnRead({
    commit
  }) {
    let count = await api.getUnReadMessage()
    if (count.code == 200) {
      commit(SET_MESSAGE, count.data)
    } else {
      commit(SET_MESSAGE, 0)
    }
  },
  async getServiceUnRead({
    commit
  }) {
    let count = await api.getUnReadServiceMessage()
    if (count.code == 200) {
      commit(SET_SERVICEMESSAGE, count.data)
    } else {
      commit(SET_SERVICEMESSAGE, 0)
    }
  },
  async getOrderMessages({
    commit
  }) {
    let count = await api.getMessageList()
    if (count.code == 200) {
      let filterUnRead = _.filter(count.data.list, e => e.read == false)
      commit(SET_ORDERMESSAGE, filterUnRead)
    } else {
      commit(SET_ORDERMESSAGE, 0)
    }
  },
  async updateMessage({
    commit
  }, params) {
    let res = await api.setMessageIsRead(params.orderId)
    if (res.code == 200) {
      let count = await api.getUnReadMessage()
      commit(SET_MESSAGE, count.data)
    }
  },
  async updateServiceMessage({
    commit
  }, params) {
    let res = await api.setServiceMessageIsRead(params.appearanceId)
    if (res.code == 200) {
      let count = await api.getUnReadServiceMessage()
      commit(SET_SERVICEMESSAGE, count.data)
    }
  }
}
