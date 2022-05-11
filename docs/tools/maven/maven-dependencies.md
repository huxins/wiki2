# Maven Dependencies

## use external dependencies

- Repository dependency

```xml
<dependencies>
    <dependency>
        <groupId>cn.hutool</groupId>
        <artifactId>hutool-all</artifactId>
        <version>5.8.0</version>
    </dependency>
</dependencies>
```

- Local dependency

```xml
<dependencies>
    <dependency>
        <groupId>cn.hutool</groupId>
        <artifactId>hutool-all</artifactId>
        <version>5.8.0</version>
        <scope>system</scope>
        <systemPath>${project.build.sourceDirectory}/webapp/WEB-INF/lib/hutool-all-5.8.0.jar</systemPath>
    </dependency>
</dependencies>
```

## Reference

- [Introduction to the Dependency Mechanism](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html)

