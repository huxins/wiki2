# Uniform Resource Identifier

## URI and URL

URL 是 URI 的子集，URI 定义了资源是什么，URL 进一步定义了如何获取资源。

URI：统一资源标志符。任何东西，只要能够唯一地标识出来，都可以说这个标识是 URI 。

URL：统一资源定位符。如果这个标识是一个可获取到上述对象的路径，那么同时它也是一个 URL。

### Syntax

通用 URI 的格式如下：

```
URI = scheme ":" ["//" authority] path ["?" query] ["#" fragment]
```

其中 authority 组件分为三个子组件：

```
authority = [userinfo "@"] host [":" port]
```

## References

- [RFC 3986 - Uniform Resource Identifier (URI): Generic Syntax](https://tools.ietf.org/html/rfc3986)
- [知乎 - URL 和 URI 有什么不同](https://www.zhihu.com/question/19557151)
- [知乎 - HTTP 协议中 URI 和 URL 有什么区别](https://www.zhihu.com/question/21950864)
- [IANA - Uniform Resource Identifier (URI) Schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)

