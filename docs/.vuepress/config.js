const nav = require('./config/nav')

const 数据归档 = require('./config/数据归档')
const 计算机网络 = require('./config/计算机网络')
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
      '/数据归档/': 数据归档,
      '/计算机网络/代理服务器/': 计算机网络.代理服务器,
      '/node/environment/': node.node_environment,
      '/node/application/': node.node_application
    }
  }
};
