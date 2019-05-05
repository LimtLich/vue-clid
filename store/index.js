export const actions = {
  nuxtServerInit({
    commit,
    dispatch,
    state,
    rootState
  }, {
    req,
    app
  }) {
    // console.log(`req.headers.cookie:`, app.$cookies.get('r_userAgent_sessionId'))
    if (req.session && req.session.authUser) {
      // console.log(`req.session.authUser,`, JSON.stringify(req.session.authUser))
      commit('user/SET_USER_INFO', req.session.authUser)
    }
  },
}
