# HttpServletResponse

## Constant

JAX-RS API 提供的相关常量。

- [HttpHeaders](https://javaee.github.io/javaee-spec/javadocs/javax/ws/rs/core/HttpHeaders.html)
- [MediaType](https://javaee.github.io/javaee-spec/javadocs/javax/ws/rs/core/MediaType.html)

```xml
<dependency>
    <groupId>javax.ws.rs</groupId>
    <artifactId>javax.ws.rs-api</artifactId>
    <version>2.1.1</version>
</dependency>
```

获取资源文件 MIME type。

```java
MimetypesFileTypeMap.getDefaultFileTypeMap().getContentType("test.jpg");
```

