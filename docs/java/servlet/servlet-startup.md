# Servlet Startup

## Startup

从 Servlet 3.0 开始，配置 Servlet 有两种方式。

- 在 Servlet 类中使用 @WebServlet 注解进行配置。

```java
@WebServlet(urlPatterns="/WebServlet")
```

- 在 web.xml 文件中进行配置。

```xml
<servlet>
    <servlet-name>WebServlet</servlet-name>
    <servlet-class>cn.inxiny.controller.ApplicationController</servlet-class>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>WebServlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

## ServletConfig

配置 Serlvet 初始化参数。

```xml
<servlet>
    <servlet-name>WebServlet</servlet-name>
    <servlet-class>cn.inxiny.controller.ApplicationController</servlet-class>
    <init-param>
        <param-name>name</param-name>
        <param-value>value</param-value>
    </init-param>
</servlet>
<servlet-mapping>
    <servlet-name>WebServlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

获取 Servlet 初始化参数。

```java
this.getServletConfig().getInitParameter("name");
```

## ServletContext

配置 Serlvet 初始化参数。

```xml
<context-param>
    <param-name>name</param-name>
    <param-value>value</param-value>
</context-param>
```

获取 Servlet 初始化参数。

```java
this.getServletContext().getInitParameter("name");
```

获取资源文件绝对路径。

```java
this.getServletContext().getRealPath("/WEB-INF/classes/jdbc.properties");
```

获取资源文件 MIME type。

```java
this.getServletContext().getMimeType("test.jpg");
```

获取资源文件流。

```java
this.getServletContext().getResourceAsStream("/WEB-INF/classes/test.jpg");
```

## Reference

- [Difference between `/` and `/*` in servlet mapping url pattern](https://stackoverflow.com/questions/4140448/difference-between-and-in-servlet-mapping-url-pattern)

