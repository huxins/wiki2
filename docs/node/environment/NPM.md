# NPM

## CLI

```sh
# 临时使用镜像
$ npm install express --registry=https://registry.npmmirror.com
# 配置镜像
$ npm config set registry https://registry.npmmirror.com
# 恢复镜像
$ npm config set registry https://registry.npmjs.org
# 源码镜像
$ npm config set disturl https://npmmirror.com/mirrors/node/
# node-sass
$ npm config set sass_binary_site https://npmmirror.com/mirrors/node-sass/
```

## 配置

### package.json

| key             | description  |
| --------------- | ------------ |
| name            | 包名         |
| version         | 包的版本号   |
| description     | 包的描述     |
| main            | 模块导出对象 |
| author          | 包的作者     |
| dependencies    | 依赖包列表   |
| devDependencies | 依赖包列表   |

#### dependencies

##### 依赖版本

```json
"devDependencies": {
    "vue": "~2.2.2",		// 匹配最近小版本，会匹配所有的2.2.x版本，但最高不会匹配2.3.0
    "vue-router": "^2.2.0"	// 匹配最近大版本，会匹配所有的2.x.x版本，但最高不会匹配3.0.0
}
```

## 参考链接

- [NPM](https://www.npmjs.com/)
- [NPM MIRROR](https://npmmirror.com/)
- [npm 模块管理器](https://javascript.ruanyifeng.com/nodejs/npm.html)
- [快速搭建 Node.js / io.js 开发环境以及加速 npm](https://fengmk2.github.io/blog/2014/03/node-env-and-faster-npm.html)
- [What is the "module" package.json field for?](https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for)
- [package.json 中 你还不清楚的 browser，module，main 字段优先级](https://github.com/SunshowerC/blog/issues/8)

