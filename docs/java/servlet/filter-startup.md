# Filter Startup

## Startup

从 Servlet 3.0 开始，配置 Filter 有两种方式。

- 在 Filter 类中使用 @WebFilter 注解进行配置。

```java
@WebFilter(filterName="CodeFilter", urlPatterns="/*")
```

- 在 web.xml 文件中进行配置。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://java.sun.com/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
         metadata-complete="true"
         version="3.0">
    <servlet>
        <servlet-name>WebServlet</servlet-name>
        <servlet-class>cn.inxiny.controller.ApplicationController</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>WebServlet</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
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

