//user.js

//配置命名空间
const GET_USER_INFO = 'GET_USER_INFO'
const SET_USER_INFO = 'SET_USER_INFO'

export const state = () => ({
  userInfo: {}
})

export const getters = {
  [GET_USER_INFO](state) {
    return state.userInfo
  },
}

export const mutations = {
  [SET_USER_INFO](state, payload) {
    state.userInfo = payload
  },
}

export const actions = {
  async logout({
    commit,
  }) {
    let res = await api.logout()
    commit(SET_USER_INFO, {})
  }
}
