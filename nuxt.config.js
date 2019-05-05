import bodyParser from 'body-parser'
import session from 'express-session'
import webpack from 'webpack'
import serveStatic from 'serve-static'

export default {
  head: {
    title: 'vue',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'renderer',
        content: 'webkit'
      },
      {
        "http-equiv": 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ''
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_252407_8kil1ka9ypx.css'
    }],
    script: [{
        src: '//apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'
      }, {
        src: '//static.geetest.com/static/tools/gt.js'
      }, {
        src: '//at.alicdn.com/t/font_252407_8kil1ka9ypx.js'
      },
      {
        src: '/cnzz.js'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Add axios globally
   */
  build: {
    extractCSS: false,
    cssSourceMap: false,
    // vendor: ['axios', 'lodash', 'moment'],
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash',
        'moment': 'moment',
        'numeral': 'numeral'
      })
    ],
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     // 拓展 webpack 配置
    //     config.entry.polyfill = ['babel-polyfill']
    //   }
    // }
  },
  plugins: [
    '~/plugins/vue-filters',
    '~/plugins/vue-moment'
  ],
  router: {
    middleware: ['userAgent', 'stats']
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['cookie-universal-nuxt', {
      parseJSON: true
    }]
  ],
  env: {
    _ENV: process.env._ENV
  },
  /*
   ** Add server middleware
   ** Nuxt.js uses `connect` module as server
   ** So most of express middleware works with nuxt.js server middleware
   */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: '7ipr-original-certification',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 86400000
      }
    }),
    // Api middleware
    '~/server/api',
    '~/server',
    // static files
    {
      path: '/static',
      handler: serveStatic(__dirname + '/server/public')
    }
  ]
}
