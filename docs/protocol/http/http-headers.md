# HTTP Headers

[RFC 2616](https://tools.ietf.org/html/rfc2616#section-14) 定义了 47 种首部字段。

在 HTTP 协议通信交互中使用到的首部字段，不限于 RFC 2616 中定义的 47 种首部字段。还有 Cookie、Set-Cookie 和 Content-Disposition 等在其他 RFC 中定义的首部字段，它们的使用频率也很高。

这些非正式的首部字段统一归纳在 [RFC 4229](https://tools.ietf.org/html/rfc4229) HTTP Header Field Registrations 中。

## Header Field Names

[RFC 2616](https://tools.ietf.org/html/rfc2616#section-4.2)：Header names 不区分大小写。

[RFC 7230](https://tools.ietf.org/html/rfc7230#section-3.2)：Header names 不区分大小写。

[RFC 7540](https://tools.ietf.org/html/rfc7540#section-8.1.2)：Header names 不区分大小写，然而 Header names 必须先转换为小写，才能使用在 HTTP/2 中编码。

## Header Fields

- [General Header Fields](https://tools.ietf.org/html/rfc2616#section-4.5)
  - 请求报文和响应报文两方都会使用的首部。
- [Request Header Fields](https://tools.ietf.org/html/rfc2616#section-5.3)
  - 从客户端向服务器端发送请求报文时使用的首部。补充了请求的附加内容、客户端信息、响应内容相关优先级等信息。
- [Response Header Fields](https://tools.ietf.org/html/rfc2616#section-6.2)
  - 从服务器端向客户端返回响应报文时使用的首部。补充了响应的附加内容，也会要求客户端附加额外的内容信息。
- [Entity Header Fields](https://tools.ietf.org/html/rfc2616#section-7.1)
  - 针对请求报文和响应报文的实体部分使用的首部。补充了资源内容更新时间等与实体有关的信息。

## End-to-end and Hop-by-hop

HTTP 首部字段将定义成缓存代理和非缓存代理的行为，分成 2 种类型。

### End-to-end Header

分在此类别中的首部会转发给请求和响应对应的最终接收目标，且必须保存在由缓存生成的响应中，另外规定它必须被转发。

### Hop-by-hop Header

分在此类别中的首部只对单次转发有效，会因通过缓存或代理而不再转发。HTTP/1.1 和之后版本中，如果要使用 hop-by-hop 首部，需提供 Connection 首部字段。

## References

- [MDN - HTTP Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)

