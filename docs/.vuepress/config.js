const nav = require('./config/nav')

const tools = require('./config/tools')
const utils = require('./config/utils')
const operating_system = require('./config/operating-system')
const database = require('./config/database')
const protocol = require('./config/protocol')
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
      '/tools/util/': tools.util,
      '/utils/git/': utils.git,
      '/utils/subversion/': utils.subversion,
      '/operating-system/linux/': operating_system.linux,
      '/database/postgresql/': database.postgresql,
      '/protocol/generic-syntax/': protocol.generic_syntax,
      '/protocol/http/': protocol.http,
      '/node/environment/': node.environment
    }
  }
};
