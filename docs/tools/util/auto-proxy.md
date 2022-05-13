# AutoProxy

## Syntax

- `*`
  - 通配符，默认附加两端，匹配 HTTP URL，无法匹配 HTTPS。
  - 例如 `youtube.com`，匹配 URL 包含 `youtube.com` 的 HTTP 链接。 
- `||`
  - 限制匹配范围为域名，因此可以匹配 HTTP 和 HTTPS。
  - 例如 `||youtube.com`，匹配域名包含 `youtube.com` 的所有 URL 链接。 
- `|`
  - 将规则限定在某种协议。
  - 例如 `|https://www.youtube.com`，匹配以此为开头的 URL。
- `@@`
  - 禁止代理，对所匹配的规则生效。
  - 例如 `@@|https://www.youtube.com`，禁止代理以此为开头的 URL。
- `!`
  - 注释。


## Reference

- [AutoProxy 代理规则简单写法](https://mydf.github.io/blog/autoproxy/)
- [AutoProxy 规则](https://www.cnblogs.com/dieangel/p/3783083.html)
- [How to write filters](https://help.eyeo.com/en/adblockplus/how-to-write-filters)

