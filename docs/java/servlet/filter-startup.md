# Filter Startup

## Startup

从 Servlet 3.0 开始，配置 Filter 有两种方式。

- 在 Filter 类中使用 @WebFilter 注解进行配置。

```java
@WebFilter(filterName="CodeFilter", urlPatterns="/*")
```

- 在 web.xml 文件中进行配置。

```xml
<filter>
    <filter-name>ApplicationFilter</filter-name>
    <filter-class>cn.inxiny.controller.ApplicationFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>ApplicationFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

## FilterConfig

配置 Filter 初始化参数。

```xml
<filter>
    <filter-name>ApplicationFilter</filter-name>
    <filter-class>cn.inxiny.controller.ApplicationFilter</filter-class>
    <init-param>
        <param-name>name</param-name>
        <param-value>value</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>ApplicationFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

获取 Servlet 初始化参数。

```java
filterConfig.getInitParameter("name");
```

