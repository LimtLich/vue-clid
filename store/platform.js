//message.js
import * as api from "~/api/index";
//配置命名空间
const GET_HEAD = 'GET_HEAD'
const SET_HEAD = 'SET_HEAD'

export const state = () => ({
  header: ''
})

export const getters = {
  [GET_HEAD](state) {
    return state.header
  },
}

export const mutations = {
  [SET_HEAD](state, payload) {
    state.header = payload
  }
}

export const actions = {
  setHeader(context, payload) {
    context.commit(SET_HEAD, payload)
  }
}
