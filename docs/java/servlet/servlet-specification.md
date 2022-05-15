# Servlet Specification

## Servlet API

- 3.0.1 之前的 Servlet API 构件。

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
    <scope>provided</scope>
</dependency>
```

- 3.0.1 及之后的 Servlet API 构件。

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>3.1.0</version>
    <scope>provided</scope>
</dependency>
```

## Deployment descriptor

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://java.sun.com/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
         metadata-complete="true"
         version="3.0">
</web-app>
```

## Reference

- [Java Servlet Specification](https://javaee.github.io/servlet-spec/)
- [Java Servlet 3.1 规范笔记](https://emacsist.github.io/emacsist/servlet/Java%20Servlet%203.1%20%E8%A7%84%E8%8C%83%E7%AC%94%E8%AE%B0.html)

