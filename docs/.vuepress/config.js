const nav = require('./config/nav')

const network = require('./config/network')
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
      '/network/proxy/': network.proxy,
      '/node/environment/': node.environment
    }
  }
};
