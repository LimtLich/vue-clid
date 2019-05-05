import parser from 'ua-parser-js'
export default function({
  req,
  route,
  redirect
}) {
  if (process.server) {
    let {
      browser
    } = parser(req.headers['user-agent'])
    // 如果IE版本小于10强制重定向
    if (browser.name == 'IE' && Number(browser.major) < 10) {
      redirect('/browser')
    }
  }
}
