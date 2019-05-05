import * as api from '~/api/'
import {
  BACK_HOST,
  LOGIN_HOST
} from '~/api/config'

export default async function({
  app,
  store,
  route,
  redirect,
  req
}) {
  let isServer = process.server
  let isClient = process.client

  let r_userAgent_sessionId = app.$cookies.get('r_userAgent_sessionId')

  const backUrl = `${LOGIN_HOST}?backUrl=${encodeURIComponent(BACK_HOST)}/`
  if (r_userAgent_sessionId) {

    if (_.isEmpty(store.state.user.userInfo)) {
      try {
        let user = await api.login({
          cookie: `r_userAgent_sessionId=${r_userAgent_sessionId}`
        })
        if (user.code == '200') {
          store.commit('user/SET_USER_INFO', user.data)
        } else {
          if (isServer) {
            redirect(backUrl)
          } else {
            location.href = backUrl
          }
        }
      } catch (e) {
        console.error('error:', e)
        if (isServer) {
          redirect(backUrl)
        } else {
          location.href = backUrl
        }
      }
    } else {
      console.log("用户已登录!!")
    }
  } else {
    console.log('cookie为空，未登录1')
    if (isServer) {
      redirect(backUrl)
    } else {
      location.href = backUrl
    }
  }
}
