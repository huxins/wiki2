# HTTP Message

用于 HTTP 协议交互的信息被称为 HTTP 报文。请求端的 HTTP 报文叫做请求报文，响应端的叫做响应报文。HTTP 报文本身是由多行（用 CR+LF 作换行符）数据构成的字符串文本。

HTTP 报文大致可分为报文首部和报文主体两块。两者由最初出现的空行（CR+LF）来划分。通常，并不一定要有报文主体。

## Message Types

### Request

请求报文是由请求方法、请求 URI、协议版本、可选的请求首部字段和内容实体构成的。

发送请求：

```http
GET /get HTTP/1.1
Host: httpbin.org
```

### Response

响应报文基本上由协议版本、状态码、用以解释状态码的原因短语、可选的响应首部字段以及实体主体构成。

发送响应：

```http
HTTP/1.1 200 OK
Date: Thu, 19 May 2022 18:29:02 GMT
Content-Type: application/json
Content-Length: 18

{
  "code": "OK"
}
```

## Encoding

- 报文（message）
  是 HTTP 通信中的基本单位，由 8 位组字节流（octet sequence，其中 octet 为 8 个比特）组成，通过 HTTP 通信传输。
- 实体（entity）
  作为请求或响应的有效载荷数据（补充项）被传输，其内容由实体首部和实体主体组成。

HTTP 报文的主体用于传输请求或响应的实体主体。

通常，报文主体等于实体主体。只有当传输中进行编码操作时，实体主体的内容发生变化，才导致它和报文主体产生差异。

### Content-Encoding

向待发送邮件内增加附件时，为了使邮件容量变小，我们会先用 ZIP 压缩文件之后再添加附件发送。HTTP 协议中有一种被称为内容编码的功能也能进行类似的操作。

内容编码指明应用在实体内容上的编码格式，并保持实体信息原样压缩。内容编码后的实体由客户端接收并负责解码。

常用的内容编码有以下几种。

- gzip（GNU zip）
- compress（UNIX 系统的标准压缩）
- deflate（zlib）
- identity（不进行编码）

### Transfer-Encoding

在 HTTP 通信过程中，请求的编码实体资源尚未全部传输完成之前，浏览器无法显示请求页面。在传输大容量数据时，通过把数据分割成多块，能够让浏览器逐步显示页面。

这种把实体主体分块的功能称为分块传输编码（Chunked Transfer Coding）。

分块传输编码会将实体主体分成多个部分（块）。每一块都会用十六进制来标记块的大小，而实体主体的最后一块会使用“0(CR+LF)”来标记。

使用分块传输编码的实体主体会由接收的客户端负责解码，恢复到编码前的实体主体。

HTTP/1.1 中存在一种称为传输编码（Transfer Coding）的机制，它可以在通信时按某种编码方式传输，但只定义作用于分块传输编码中。

## Multipart Types

发送邮件时，我们可以在邮件里写入文字并添加多份附件。这是因为采用了 MIME（Multipurpose Internet Mail Extensions，多用途因特网邮件扩展）机制，它允许邮件处理文本、图片、视频等多个不同类型的数据。

相应地，HTTP 协议中也采纳了多部分对象集合，发送的一份报文主体内可含有多类型实体。通常是在图片或文本文件等上传时使用。

多部分对象集合包含的对象如下。

- multipart/form-data
  在 Web 表单文件上传时使用。
  
- multipart/byteranges
  状态码 206（Partial Content，部分内容）响应报文包含了多个范围的内容时使用。
  
- multipart/form-data

  ```http
  POST /post HTTP/1.1
  Host: httpbin.org
  Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
  
  ------WebKitFormBoundary7MA4YWxkTrZu0gW
  Content-Disposition: form-data; name="A"
  
  one
  ------WebKitFormBoundary7MA4YWxkTrZu0gW
  Content-Disposition: form-data; name="B"
  
  two
  ------WebKitFormBoundary7MA4YWxkTrZu0gW--
  ```

- multipart/byteranges

  ```http
  HTTP/1.1 206 Partial Content
  Date: Sat, 21 May 2022 10:12:29 GMT
  Content-Type: multipart/byteranges; boundary=00000000000002794934
  Content-Length: 223
  
  
  --00000000000002794934
  Content-Type: text/plain
  Content-Range: bytes 0-10/398
  
  689531cce9c
  --00000000000002794934
  Content-Type: text/plain
  Content-Range: bytes 380-390/398
  
  6_64-DVD-20
  --00000000000002794934--
  
  ```

## References

- [Stack Overflow - What exactly is an HTTP Entity?](https://stackoverflow.com/questions/9197745/what-exactly-is-an-http-entity)

