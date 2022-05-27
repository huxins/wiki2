# HTTP Range Requests

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

## References

- [聊一聊 HTTP 的 Range, Content-Range](https://dabing1022.github.io/2016/12/24/%E8%81%8A%E4%B8%80%E8%81%8AHTTP%E7%9A%84Range,%20Content-Range/)

