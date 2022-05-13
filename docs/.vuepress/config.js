const nav = require('./config/nav')

const dev = require('./config/dev')
const tools = require('./config/tools')
const java = require('./config/java')
const node = require('./config/node')

module.exports = {
  title: '偷影子的人',
  description: '你在，春华秋实夏蝉冬雪。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    sidebarDepth: 2,
    nav: nav.nav,
    sidebar:{
      '/dev/aliyun/': dev.aliyun,
      '/tools/maven/': tools.maven,
      '/tools/postgresql/': tools.postgresql,
      '/tools/util/': tools.util,
      '/java/jdk/': java.jdk,
      '/node/environment/': node.environment
    }
  }
};
