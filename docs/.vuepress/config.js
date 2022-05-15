const nav = require('./config/nav')

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
      '/tools/maven/': tools.maven,
      '/tools/postgresql/': tools.postgresql,
      '/tools/util/': tools.util,
      '/java/jdk/': java.jdk,
      '/java/servlet/': java.servlet,
      '/node/environment/': node.environment
    }
  }
};
