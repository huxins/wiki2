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

## Encoder

response `MIME body` 默认的编码是 `ISO 8859-1`。

`ISO-8859-1` 编码目前在浏览器中都是以 `Windows-1252` 来实现的。

- 设置 `MIME body` 默认编码。

```java
resp.setCharacterEncoding(StandardCharsets.UTF_8);
```

- 通过设置 Header 告诉浏览器回传数据编码格式，同时会设置 `MIME body` 默认编码。

```java
resp.setHeader("Content-Type", "text/html; charset=utf-8");
```

- 浏览器（Chrome）下载含中文文件名问题，HTTP header 不支持 `UTF-8`。仅支持 `ISO-8859-1`。
  - 服务端将 `UTF-8` 编码的数据转换为 `ISO-8859-1`。
  - `ISO-8859-1` 由单个字节组成，不影响编码转换。
  - 浏览器仅可以使用 `UTF-8` 解码下载的文件名，且 `UTF-8` 包含 `ISO-8859-1`。

```java
// Chrome
String fileName = new String("文档.word".getBytes(StandardCharsets.UTF_8), StandardCharsets.ISO_8859_1);
// Chrome、IE11
String fileName = URLEncoder.encode("文档.word", StandardCharsets.UTF_8.name()).replace("+","%20");
// Chrome、IE11
String fileName = new URI(null, null, "文档.word", null).toASCIIString();
resp.setHeader("Content-Disposition", String.format("attachment; filename=%s", fileName));
```


