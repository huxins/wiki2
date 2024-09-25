(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{327:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"maven-environment-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven-environment-setup"}},[t._v("#")]),t._v(" Maven Environment Setup")]),t._v(" "),a("h2",{attrs:{id:"convention-over-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convention-over-configuration"}},[t._v("#")]),t._v(" Convention Over Configuration")]),t._v(" "),a("p",[t._v("Maven 使用约定优于配置的原则，它要求在没有定制之前，所有的项目都有如下的结构：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("目录")]),t._v(" "),a("th",[t._v("目的")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("${basedir}")]),t._v(" "),a("td",[t._v("存放 pom.xml 和所有的子目录")])]),t._v(" "),a("tr",[a("td",[t._v("${basedir}/src/main/java")]),t._v(" "),a("td",[t._v("项目的 java 源代码")])]),t._v(" "),a("tr",[a("td",[t._v("${basedir}/src/main/resources")]),t._v(" "),a("td",[t._v("项目的资源，比如说 property 文件")])]),t._v(" "),a("tr",[a("td",[t._v("${basedir}/src/test/java")]),t._v(" "),a("td",[t._v("项目的测试类，比如说 Junit 代码")])]),t._v(" "),a("tr",[a("td",[t._v("${basedir}/src/test/resources")]),t._v(" "),a("td",[t._v("测试用的资源")])]),t._v(" "),a("tr",[a("td",[t._v("${basedir}/src/main/webapp/WEB-INF")]),t._v(" "),a("td",[t._v("Web 应用文件目录")])]),t._v(" "),a("tr",[a("td",[t._v("${basedir}/target")]),t._v(" "),a("td",[t._v("打包输出目录")])]),t._v(" "),a("tr",[a("td",[t._v("${basedir}/target/classes")]),t._v(" "),a("td",[t._v("编译输出目录")])]),t._v(" "),a("tr",[a("td",[t._v("${basedir}/target/test-classes")]),t._v(" "),a("td",[t._v("测试编译输出目录")])]),t._v(" "),a("tr",[a("td",[t._v("Test.java")]),t._v(" "),a("td",[t._v("Maven 自动运行该命名的测试类")])]),t._v(" "),a("tr",[a("td",[t._v("~/.m2/repository")]),t._v(" "),a("td",[t._v("Maven 默认的本地仓库目录位置")])])])]),t._v(" "),a("h2",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),a("p",[t._v("下载：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://mirrors.tencent.com/apache/maven/maven-3/3.5.4/binaries/apache-maven-3.5.4-bin.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" apache-maven-3.5.4-bin.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" apache-maven-3.5.4 /usr/local/\n")])])]),a("p",[t._v("编辑 "),a("strong",[t._v("/etc/profile")]),t._v(" 文件，在文件末尾添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MAVEN_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/apache-maven-3.5.4\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v("}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MAVEN_HOME}")]),t._v("/bin\n")])])]),a("p",[t._v("保存文件，并运行如下命令使环境变量生效：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);