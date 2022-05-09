# Maven Resources

## Specifying resource directories

默认情况下，Maven 会在 `src/main/resources` 下查找项目的资源。

所有资源可能不在 `src/main/resources` 中。因此，可以通过将以下内容添加到 POM 来指定这些目录。

```xml
<resources>
  <resource>
    <directory>${project.basedir}/src/main/resources</directory>
  </resource>
</resources>
```

## Including and excluding files and directories

指定资源目录时，可能不会使用该目录中的每个文件。因此，需要指定我们想要包含的文件或指定我们想要排除的文件。

```xml
<resources>
  <resource>
    <directory>${project.build.sourceDirectory}</directory>
    <includes>
      <include>**/*.xml</include>
    </includes>
  </resource>
  <resource>
    <directory>${project.basedir}/src/main/resources</directory>
  </resource>
</resources>
```

## Reference

- [Specifying resource directories](https://maven.apache.org/plugins/maven-resources-plugin/examples/resource-directory.html)

