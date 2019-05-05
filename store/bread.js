//message.js
import * as api from "~/api/index";
//配置命名空间
const GET_BREAD = 'GET_BREAD'
const SET_BREAD = 'SET_BREAD'

export const state = () => ({
  breadcrumbs: [{
      to: "",
      text: "订单中心"
    },
    {
      to: "",
      text: "我的订单"
    }
  ]
})

export const getters = {
  [GET_BREAD](state) {
    return state.breadcrumbs
  },
}

export const mutations = {
  [SET_BREAD](state, payload) {
    state.breadcrumbs = payload
  }
}

export const actions = {
  setBread(context,payload){
    context.commit(SET_BREAD, payload)
  }
}
