# HTTP Cookies

HTTP 是无状态协议，它不对之前发生过的请求和响应的状态进行管理。也就是说，无法根据之前的状态进行本次的请求处理。

于是引入了 Cookie 技术。Cookie 技术通过在请求和响应报文中写入 Cookie 信息来控制客户端的状态。

Cookie 会根据从服务器端发送的响应报文内的一个叫做 Set-Cookie 的首部字段信息，通知客户端保存 Cookie。当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入 Cookie 值后发送出去。

服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息。

- 没有 Cookie 信息状态下的请求

```http
GET /get HTTP/1.1
Host: httpbin.org
```

- 存有 Cookie 信息状态下的请求

```http
GET /cookies HTTP/1.1
Host: httpbin.org
Cookie: JEID=0032DDFF; USID=9399
```

- 在响应中添加 Cookie

```http
HTTP/1.1 200 OK
Date: Thu, 19 May 2022 18:29:02 GMT
Content-Type: application/json
Content-Length: 18
Set-Cookie: JEID=0032DDFF; Path=/

{
  "code": "OK"
}
```

