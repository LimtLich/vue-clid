export const FILE_ROOT = 'https://meadend.7ipr.com'
export const CHAIN_ROOT = process.env._ENV == 'production' ? 'https://conveyor.7ipr.com' : 'https://conveyoruat.7ipr.com'
export const API_ROOT = '/api'

export const PAY_ROOT = process.env._ENV == 'production' ? 'https://payment.7ipr.com' : 'https://paymentuat.7ipr.com'
export const HOST_ROOT = process.env._ENV == 'production' ? 'https://justice.7ipr.com/' : 'https://justiceuat.7ipr.com/'
export const PWD_HOST = process.env._ENV == 'production' ? 'https://uc.7ipr.com/forget/login/forget.htm' : 'https://ucuat.7ipr.com/forget/login/forget.htm'
export const PLATFORM_HOST = process.env._ENV == 'production' ? 'https://open.7ipr.com/doc.html' : 'https://openuat.7ipr.com/doc.html'
export const REGIS_HOST = process.env._ENV == 'production' ? 'https://uc.7ipr.com/custm/user/user_reg_add.htm?formCode=REG_FORM' : 'https://ucuat.7ipr.com/custm/user/user_reg_add.htm?formCode=REG_FORM'
export const LOGIN_HOST = process.env._ENV == 'production' ? 'https://uc.7ipr.com/login.htm' : 'https://ucuat.7ipr.com/login.htm'
export const LOGOUT_HOST = process.env._ENV == 'production' ? 'https://uc.7ipr.com/logout.htm' : 'https://ucuat.7ipr.com/logout.htm'

export const BACK_HOST = process.env._ENV == 'production' ? 'https://iptm.7ipr.com' : (process.env._ENV == 'test' ? 'https://iptmuat.7ipr.com' : 'http://localhost.7ipr.com:3000') //前端地址
export const INFO_HOST = process.env._ENV == 'production' ? 'https://portal.7ipr.com/member/info_detail.htm' : 'https://portaluat.7ipr.com/member/info_detail.htm'
