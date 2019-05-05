import express from 'express'
import request from 'superagent'
import {
  HOST_ROOT
} from '../../api/config'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// login
router.post('/login', async (req, res, next) => {
  console.log(`req.body:`, req.body.cookie)
  try {
    let userRes = await request.post(`${HOST_ROOT}/justice/user/auth`)
    // let userRes = await request.post(`https://justice.7ipr.com/justice/user/auth`)
      .set('Cookie', req.body.cookie)
      .set('Content-Type', 'application/json;charset=UTF-8')
      .send({})
    console.log(`userRes:`, userRes.body)
    if (userRes && userRes.body.code == '200') {
      console.log('--------login success----------')
      let data = userRes.body
      req.session.authUser = data.data
      return res.json(data)
    } else {
      console.log('--------login fails----------')
    }
    res.json({
      code: userRes.body.code,
      message: userRes.body.message
    })
  } catch (e) {
    console.error('login error:',e)
    res.json({
      code: '500',
      message: '服务器异常'
    })
  }
})

// logout
router.post('/logout', async (req, res) => {
  delete req.session.authUser
  res.json({
    ok: true
  })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
