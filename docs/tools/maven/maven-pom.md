# Maven POM

在创建 POM 之前，我们首先需要描述项目组、项目的唯一ID。

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    
    <!-- 模型版本 -->
    <modelVersion>4.0.0</modelVersion>
    <!-- 公司或者组织的唯一ID -->
    <groupId>com.companyname.project-group</groupId>
    <!-- 项目的唯一ID -->
    <artifactId>project</artifactId>
    <!-- 版本号 -->
    <version>1.0</version>
    
</project>
```

所有 POM 文件都需要 project 元素和三个必需字段：groupId，artifactId，version。

## Super POM

Super POM 是 Maven 默认的 POM，所有的 POM 都继承自 Super POM。Super POM 包含了一些可以被继承的默认设置。因此，当 Maven 发现需要下载 POM 中的依赖时，它会到 Super POM 中配置的默认仓库 https://repo.maven.apache.org/maven2 去下载。

Maven 使用 Effective POM（Super pom 加上工程自己的配置）来执行相关的目标，使用以下命令来查看 Effective POM 默认配置：

```sh
$ mvn help:effective-pom
```

## Reference

- [POM](https://maven.apache.org/pom.html)
- [Super POM](https://maven.apache.org/ref/3.5.4/maven-model-builder/super-pom.html)

