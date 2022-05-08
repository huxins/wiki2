# Maven Environment Setup

## Convention Over Configuration

Maven 使用约定优于配置的原则，它要求在没有定制之前，所有的项目都有如下的结构：

| 目录                               | 目的                             |
| ---------------------------------- | -------------------------------- |
| ${basedir}                         | 存放 pom.xml 和所有的子目录      |
| ${basedir}/src/main/java           | 项目的 java 源代码               |
| ${basedir}/src/main/resources      | 项目的资源，比如说 property 文件 |
| ${basedir}/src/test/java           | 项目的测试类，比如说 Junit 代码  |
| ${basedir}/src/test/resources      | 测试用的资源                     |
| ${basedir}/src/main/webapp/WEB-INF | Web 应用文件目录                 |
| ${basedir}/target                  | 打包输出目录                     |
| ${basedir}/target/classes          | 编译输出目录                     |
| ${basedir}/target/test-classes     | 测试编译输出目录                 |
| Test.java                          | Maven 自动运行该命名的测试类     |
| ~/.m2/repository                   | Maven 默认的本地仓库目录位置     |

## Linux

下载：

```sh
$ wget https://mirrors.tencent.com/apache/maven/maven-3/3.5.4/binaries/apache-maven-3.5.4-bin.tar.gz
$ tar -zxvf apache-maven-3.5.4-bin.tar.gz
$ mv apache-maven-3.5.4 /usr/local/
```

编辑 **/etc/profile** 文件，在文件末尾添加如下代码：

```sh
$ export MAVEN_HOME=/usr/local/apache-maven-3.5.4
$ export PATH=${PATH}:${MAVEN_HOME}/bin
```

保存文件，并运行如下命令使环境变量生效：

```sh
$ source /etc/profile
```

