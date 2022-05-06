const nav = require('./config/nav')

const mix = require('./config/mix')
const network = require('./config/network')
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
      '/mix/cms/': mix.cms,
      '/network/proxy/': network.proxy,
      '/java/jdk/': node.environment,
      '/node/environment/': node.environment
    }
  }
};
