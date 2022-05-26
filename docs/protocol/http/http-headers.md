# HTTP Headers

## Header Field Names

[RFC 2616](https://tools.ietf.org/html/rfc2616#section-4.2)：Header names 不区分大小写。

[RFC 7230](https://tools.ietf.org/html/rfc7230#section-3.2)：Header names 不区分大小写。

[RFC 7540](https://tools.ietf.org/html/rfc7540#section-8.1.2)：Header names 不区分大小写，然而 Header names 必须先转换为小写，才能使用在 HTTP/2 中编码。

## Range

如果 Server 支持 Range，首先就要告诉客户端，服务器会在响应头中添加 `Accept-Ranges: bytes` 来表示支持 Range 的请求，之后客户端才可能发起带 Range 的请求。不支持的话，用 `Accept-Ranges: none` 告知客户端，对不起，我不支持。

请求资源，确定是否支持 Range 的请求：

```http
HEAD /centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso HTTP/1.1
Host: mirrors.tuna.tsinghua.edu.cn
```

响应：

```http
HTTP/1.1 200 OK
Date: Sat, 21 May 2022 09:08:27 GMT
Content-Type: application/octet-stream
Content-Length: 1020264448
Accept-Ranges: bytes
```

Server 通过请求头中的 `Range: bytes=0-xxx` 来判断是否是做 Range 请求，如果这个值存在而且有效，则只发回请求的那部分文件内容，响应的状态码变成 206，表示 Partial Content，并设置 Content-Range。如果无效，则返回 416 状态码，表明 Requested Range Not Satisfiable。如果请求头中不带 Range，那么 Server 则正常响应，也不会设置 Content-Range 等。

如果服务器端无法响应范围请求，则会返回状态码 200 OK 和完整的实体内容。

单重 Range 请求：

```http
GET /centos/7/isos/x86_64/sha256sum.txt HTTP/1.1
Host: mirrors.tuna.tsinghua.edu.cn
Range: bytes=0-10
```

单重 Range 响应：

```http
HTTP/1.1 206 Partial Content
Date: Sat, 21 May 2022 10:00:59 GMT
Content-Type: text/plain
Content-Length: 11
Content-Range: bytes 0-10/398

689531cce9c
```

多重 Range 请求：

```http
GET /centos/7/isos/x86_64/sha256sum.txt HTTP/1.1
Host: mirrors.tuna.tsinghua.edu.cn
Range: bytes=0-10, 369-
```

多重 Range 响应：

```http
HTTP/1.1 206 Partial Content
Date: Sat, 21 May 2022 10:29:09 GMT
Content-Type: multipart/byteranges; boundary=00000000000002795091
Content-Length: 241


--00000000000002795091
Content-Type: text/plain
Content-Range: bytes 0-10/398

689531cce9c
--00000000000002795091
Content-Type: text/plain
Content-Range: bytes 369-397/398

CentOS-7-x86_64-DVD-2009.iso

--00000000000002795091--

```

## Content Negotiation

同一个 Web 网站有可能存在着多份相同内容的页面。比如英文版和中文版的 Web 页面，它们内容上虽相同，但使用的语言却不同。

当浏览器的默认语言为英文或中文，访问相同 URI 的 Web 页面时，则会显示对应的英文版或中文版的 Web 页面。这样的机制称为内容协商（Content Negotiation）。

内容协商机制是指客户端和服务器端就响应的资源内容进行交涉，然后提供给客户端最为适合的资源。内容协商会以响应资源的语言、字符集、编码方式等作为判断的基准。

包含在请求报文中的某些首部字段（如下）就是判断的基准。

- Accept

  表示客户端期望服务器返回的媒体格式。

- Accept-Charset

  表示客户端期望服务器返回的字符集类型。
  
- Accept-Encoding

  表示客户端期望服务器返回的内容编码方式。
  
- Accept-Language

  表示客户端期望服务器返回的内容的自然语言。
  
- Content-Language

  服务器通过此字段告知客户端返回的 Body 信息的语言是什么。

## References

- [聊一聊 HTTP 的 Range, Content-Range](https://dabing1022.github.io/2016/12/24/%E8%81%8A%E4%B8%80%E8%81%8AHTTP%E7%9A%84Range,%20Content-Range/)

