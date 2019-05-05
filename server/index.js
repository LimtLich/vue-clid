import express from 'express'
import path from 'path'

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

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

router.get('/', (req, res) => {
  // res.send('你的浏览器版本太低')
  res.render('browser')
})

// Export the server middleware
export default {
  path: '/browser',
  handler: router
}
