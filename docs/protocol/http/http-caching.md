# HTTP Caching

## Cache-Control

通过指定首部字段 Cache-Control 的指令，就能操作缓存的工作机制。

指令的参数是可选的，多个指令之间通过 `,` 分隔。首部字段 Cache-Control 的指令可用于请求及响应时。

```
Cache-Control: private, max-age=0, no-cache
```

可用的指令按请求和响应分类如下所示。

### Request Cache-Control Directives

| 指令                   | 参数   | 说明                             |
| ---------------------- | ------ | -------------------------------- |
| no-cache               | 无     | 强制向源服务器再次验证           |
| no-store               | 无     | 不缓存请求或响应的任何内容       |
| max-age=\<seconds>     | 必需   | 资源缓存的最大周期               |
| max-stale[=\<seconds>] | 可省略 | 表明客户端愿意接收过期的资源     |
| min-fresh=\<seconds>   | 必需   | 期望在指定时间内的资源为最新状态 |
| no-transform           | 无     | 缓存不可更改媒体类型             |
| only-if-cached         | 无     | 从缓存获取资源                   |

- no-cache

客户端发送的请求中如果包含 no-cache 指令，则表示客户端将不会接收缓存过的响应。于是，缓存服务器必须把客户端请求转发给源服务器。

- max-age

当客户端发送的请求中包含 max-age 指令时，如果判定缓存资源的缓存时间数值比指定时间的数值更小，那么客户端就接收缓存的资源。比如，指定时间为一周，缓存服务器已缓存该资源未超过一周，就返回该资源。另外，当指定 max-age 值为 0，那么缓存服务器通常需要将请求转发给源服务器。

- min-fresh

min-fresh 指令要求缓存服务器返回至少还未过指定时间的缓存资源。比如，当指定 min-fresh 为 60 秒后，过了 60 秒的资源都无法作为响应返回了。

- max-stale

使用 max-stale 可指示缓存资源，即使过期也照常接收。如果指令未指定参数值，那么无论经过多久，客户端都会接收响应；如果指令中指定了具体数值，那么即使过期，只要仍处于 max-stale 指定的时间内，仍旧会被客户端接收。

- only-if-cached

使用 only-if-cached 指令表示客户端只接受已缓存的响应。换言之，该指令要求缓存服务器不重新加载响应，也不会再次确认资源有效性。若发生请求缓存服务器的本地缓存无响应，则返回状态码 504 Gateway Timeout。

### Response Cache-Control Directives

| 指令                | 参数   | 说明                             |
| ------------------- | ------ | -------------------------------- |
| public              | 无     | 可向任意方提供响应的缓存         |
| private             | 可省略 | 仅向特定用户返回响应             |
| no-cache            | 可省略 | 发送响应前必须先确认其有效性     |
| no-store            | 无     | 不缓存请求或响应的任何内容       |
| no-transform        | 无     | 缓存不可更改媒体类型             |
| must-revalidate     | 无     | 资源过期后必须向源服务器进行确认 |
| proxy-revalidate    | 无     | 同上，但它仅适用于共享缓存       |
| max-age=\<seconds>  | 必需   | 资源缓存的最大周期               |
| s-maxage=\<seconds> | 必需   | 同上，但它仅适用于共享缓存       |

- no-cache

如果服务器返回的响应中包含 no-cache 指令，那么在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证。

由服务器返回的响应中，若报文首部字段 Cache-Control 中对 no-cache 字段名具体[指定参数值](https://tools.ietf.org/html/rfc7234#section-5.2.2.2)，那么客户端在接收到这个被指定参数值的首部字段对应的响应报文后，就不能使用缓存。换言之，无参数值的首部字段可以使用缓存。只能在响应指令中指定该参数。

- s-maxage

s-maxage 指令的功能和 max-age 指令的相同，它们的不同点是 s-maxage 指令只适用于供多位用户使用的公共缓存服务器。也就是说，对于向同一用户重复返回响应的服务器来说，这个指令没有任何作用。

另外，当使用 s-maxage 指令后，则直接忽略对 Expires 首部字段及 max-age 指令的处理。

- max-age

当服务器返回的响应中包含 max-age 指令时，缓存服务器将不对资源的有效性再作确认，而 max-age 数值代表资源保存为缓存的最长时间。

应用 HTTP/1.1 版本的缓存服务器遇到同时存在 Expires 首部字段的情况时，会优先处理 max-age 指令，而忽略掉 Expires 首部字段。而 HTTP/1.0 版本的缓存服务器的情况却相反，max-age 指令会被忽略掉。

- must-revalidate

使用 must-revalidate 指令，代理会向源服务器再次验证即将返回的响应缓存目前是否仍然有效。若代理无法连通源服务器再次获取有效资源的话，缓存必须给客户端一条 504（Gateway Timeout）状态码。

另外，使用 must-revalidate 指令会忽略请求的 max-stale 指令（即使已经在首部使用了 max-stale，也不会再有效果）。

- proxy-revalidate

proxy-revalidate 指令等效于 must-revalidate，但仅适用于共享缓存。

## Pragma

Pragma 是 HTTP/1.1 之前版本的历史遗留字段，仅作为与 HTTP/1.0 的向后兼容而定义。

规范定义的形式唯一，如下所示。

```
Pragma: no-cache
```

该首部字段属于通用首部字段，但只用在客户端发送的请求中。客户端会要求所有的中间服务器不返回缓存的资源。

所有的中间服务器如果都能以 HTTP/1.1 为基准，那直接采用 Cache-Control: no-cache 指定缓存的处理方式是最为理想的。但要整体掌握全部中间服务器使用的 HTTP 协议版本却是不现实的。因此，发送的请求会同时含有下面两个首部字段。

```
Cache-Control: no-cache
Pragma: no-cache
```

## References

- [RFC 7234 - Header Field Definitions](https://tools.ietf.org/html/rfc7234#section-5)
- [MDN - HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
- [循序渐进理解 HTTP Cache 机制](https://blog.techbridge.cc/2017/06/17/cache-introduction)
- [web.dev - 使用 HTTP 缓存避免不必要的网络请求](https://web.dev/i18n/zh/http-cache/)

