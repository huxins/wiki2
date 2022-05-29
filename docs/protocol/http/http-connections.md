# HTTP Connections

Connection 首部字段具备如下两个作用。

- 控制不再转发给代理的首部字段
- 管理持久连接

## Hop-by-hop Headers

除去标准的 [hop-by-hop headers](https://tools.ietf.org/html/rfc2616#section-13.5.1)，任何逐段传输头都需要在 Connection 头中列出，这样才能让第一个代理知道必须处理它们且不转发这些头。标准的逐段传输头也可以列出（常见的例子是 Keep-Alive，但这不是必须的）。

## Persistent Connections

HTTP 协议的初始版本中，每进行一次 HTTP 通信就要断开一次 TCP 连接，HTTP/1.1 和一部分的 HTTP/1.0 想出了持久连接（HTTP Persistent Connections，也称为 HTTP keep-alive 或 HTTP connection reuse）的方法。持久连接的特点是，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。

在 HTTP/1.1 中，所有的连接默认都是持久连接，但在 HTTP/1.0 内并未标准化。虽然有一部分服务器通过非标准的手段实现了持久连接，但服务器端不一定能够支持持久连接。毫无疑问，除了服务器端，客户端也需要支持持久连接。

HTTP/1.0 请求的默认值：

```http
GET /get HTTP/1.1
Host: httpbin.org
Connection: close
```

HTTP/1.1 请求的默认值：

```http
GET /get HTTP/1.1
Host: httpbin.org
Connection: keep-alive
```

## Pipelining

持久连接使得多数请求以管线化（pipelining）方式发送成为可能。从前发送请求后需等待并收到响应，才能发送下一个请求。管线化技术出现后，不用等待响应亦可直接发送下一个请求。这样就能够做到同时并行发送多个请求，而不需要一个接一个地等待响应了。

HTTP 流水线在现代浏览器中并不是默认被启用的。

## References

- [MDN - HTTP/1.x 的连接管理](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
- [MDN - Connection](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection)

