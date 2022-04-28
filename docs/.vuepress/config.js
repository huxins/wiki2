const nav = require('./config/nav')

const 数据归档 = require('./config/数据归档')
const software = require('./config/software')
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
      '/software/': software.software,
      '/node/environment/': node.node_environment,
      '/node/application/': node.node_application,
      '/数据归档/浏览器数据/': 数据归档.浏览器数据
    }
  }
};
