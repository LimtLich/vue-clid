import * as api from '~/api/'
export default async function({
  app,
  store,
  route,
  redirect,
  req
}) {
  console.log('stats userInfo:', JSON.stringify(store.state.user.userInfo))

  let r_userAgent_sessionId = app.$cookies.get('r_userAgent_sessionId')
  if (r_userAgent_sessionId) {
    if (_.isEmpty(store.state.user.userInfo)) {
      try {
        let user = await api.login({
          cookie: `r_userAgent_sessionId=${r_userAgent_sessionId}`
        })
        if (user.code == '200') {
          store.commit('user/SET_USER_INFO', user.data)
        }
      } catch (e) {
        console.error('error:', e)
      }
    } else {
      console.log("用户已登录!!")
    }
  } else {
    console.log('cookie为空，未登录2')
  }
}
