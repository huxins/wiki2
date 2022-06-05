const nav = require('./config/nav')

const tools = require('./config/tools')
const utils = require('./config/utils')
const operating_system = require('./config/operating-system')
const protocol = require('./config/protocol')
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
      '/utils/git/': utils.git,
      '/operating-system/linux/': operating_system.linux,
      '/operating-system/red-hat/': operating_system.red_hat,
      '/protocol/generic-syntax/': protocol.generic_syntax,
      '/protocol/http/': protocol.http,
      '/java/jdk/': java.jdk,
      '/java/servlet/': java.servlet,
      '/node/environment/': node.environment
    }
  }
};
