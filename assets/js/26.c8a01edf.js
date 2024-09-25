(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{306:function(t,s,e){"use strict";e.r(s);var r=e(14),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),s("h2",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 临时使用镜像")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" express "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置镜像")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npmmirror.com\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复镜像")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npmjs.org\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 源码镜像")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" disturl https://npmmirror.com/mirrors/node/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# node-sass")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" sass_binary_site https://npmmirror.com/mirrors/node-sass/\n")])])]),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h3",{attrs:{id:"package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[t._v("#")]),t._v(" package.json")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("key")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("包名")])]),t._v(" "),s("tr",[s("td",[t._v("version")]),t._v(" "),s("td",[t._v("包的版本号")])]),t._v(" "),s("tr",[s("td",[t._v("description")]),t._v(" "),s("td",[t._v("包的描述")])]),t._v(" "),s("tr",[s("td",[t._v("main")]),t._v(" "),s("td",[t._v("模块导出对象")])]),t._v(" "),s("tr",[s("td",[t._v("author")]),t._v(" "),s("td",[t._v("包的作者")])]),t._v(" "),s("tr",[s("td",[t._v("dependencies")]),t._v(" "),s("td",[t._v("依赖包列表")])]),t._v(" "),s("tr",[s("td",[t._v("devDependencies")]),t._v(" "),s("td",[t._v("依赖包列表")])])])]),t._v(" "),s("h4",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" dependencies")]),t._v(" "),s("h5",{attrs:{id:"依赖版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖版本"}},[t._v("#")]),t._v(" 依赖版本")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~2.2.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配最近小版本，会匹配所有的2.2.x版本，但最高不会匹配2.3.0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue-router"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.2.0"')]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配最近大版本，会匹配所有的2.x.x版本，但最高不会匹配3.0.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://npmmirror.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM MIRROR"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://javascript.ruanyifeng.com/nodejs/npm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 模块管理器"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://fengmk2.github.io/blog/2014/03/node-env-and-faster-npm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速搭建 Node.js / io.js 开发环境以及加速 npm"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for",target:"_blank",rel:"noopener noreferrer"}},[t._v('What is the "module" package.json field for?'),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/SunshowerC/blog/issues/8",target:"_blank",rel:"noopener noreferrer"}},[t._v("package.json 中 你还不清楚的 browser，module，main 字段优先级"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);