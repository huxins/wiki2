# Maven Plugins

- **Build plugins** 将在构建期间执行，它们应该在 POM 的 \<build/> 元素中进行配置。
- **Reporting plugins** 将在站点生成期间执行，它们应在 POM 的 \<reporting/> 元素中进行配置。

## Compiler

启用 Eclipse 编译器：

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-compiler-plugin</artifactId>
  <version>3.1</version>
  <dependencies>
    <dependency>
      <groupId>org.codehaus.plexus</groupId>
      <artifactId>plexus-compiler-eclipse</artifactId>
      <version>2.8.5</version>
    </dependency>
  </dependencies>
  <configuration>
    <compilerId>eclipse</compilerId>
    <source>1.8</source>
    <target>1.8</target>
    <encoding>UTF-8</encoding>
    <compilerArgs>
      <arg>-extdirs</arg>
      <arg>${project.basedir}/src/main/webapp/WEB-INF/lib</arg>
    </compilerArgs>
  </configuration>
</plugin>
```

maven-compiler-plugin 的 \<compilerArguments> 在版本 3.1 中废弃。

```xml
<compilerArguments>
  <extdirs>${project.basedir}/src/main/webapp/WEB-INF/lib</extdirs>
</compilerArguments>
```

## Site

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-project-info-reports-plugin</artifactId>
  <version>2.9</version>
</plugin>
```

## Reference

- [Available Plugins](https://maven.apache.org/plugins/index.html)
- [Guide to Configuring Plug-ins](https://maven.apache.org/guides/mini/guide-configuring-plugins.html)
- [difference between executions and configurations](https://stackoverflow.com/questions/33908315/what-is-the-difference-between-executions-and-configurations-in-a-maven-plugin)
- [Java 开发基础工具的使用 - 编译与构建](http://liufor.com/2016/05/30/java-basics-compiler-and-build/)
- [Skipping Tests](https://maven.apache.org/surefire/maven-surefire-plugin/examples/skipping-tests.html)
- [Maven skip tests](https://stackoverflow.com/questions/24727536/maven-skip-tests)
- [maven-site-plugin 3.3 ClassNotFoundException](https://stackoverflow.com/questions/51091539/maven-site-plugins-3-3-java-lang-classnotfoundexception-org-apache-maven-doxia)

