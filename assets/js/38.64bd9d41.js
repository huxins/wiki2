(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{317:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"http-range-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-range-requests"}},[e._v("#")]),e._v(" HTTP Range Requests")]),e._v(" "),t("p",[e._v("如果 Server 支持 Range，首先就要告诉客户端，服务器会在响应头中添加 "),t("code",[e._v("Accept-Ranges: bytes")]),e._v(" 来表示支持 Range 的请求，之后客户端才可能发起带 Range 的请求。不支持的话，用 "),t("code",[e._v("Accept-Ranges: none")]),e._v(" 告知客户端，对不起，我不支持。")]),e._v(" "),t("p",[e._v("请求资源，确定是否支持 Range 的请求：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token method property"}},[e._v("HEAD")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token request-target url"}},[e._v("/centos/7/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("mirrors.tuna.tsinghua.edu.cn")])]),e._v("\n")])])]),t("p",[e._v("响应：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token response-status"}},[t("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token status-code number"}},[e._v("200")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[e._v("OK")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Sat, 21 May 2022 09:08:27 GMT")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("application/octet-stream")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Length")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("1020264448")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Ranges")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("bytes")])]),e._v("\n")])])]),t("p",[e._v("Server 通过请求头中的 "),t("code",[e._v("Range: bytes=0-xxx")]),e._v(" 来判断是否是做 Range 请求，如果这个值存在而且有效，则只发回请求的那部分文件内容，响应的状态码变成 206，表示 Partial Content，并设置 Content-Range。如果无效，则返回 416 状态码，表明 Requested Range Not Satisfiable。如果请求头中不带 Range，那么 Server 则正常响应，也不会设置 Content-Range 等。")]),e._v(" "),t("p",[e._v("如果服务器端无法响应范围请求，则会返回状态码 200 OK 和完整的实体内容。")]),e._v(" "),t("p",[e._v("单重 Range 请求：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token method property"}},[e._v("GET")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token request-target url"}},[e._v("/centos/7/isos/x86_64/sha256sum.txt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("mirrors.tuna.tsinghua.edu.cn")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("bytes=0-10")])]),e._v("\n")])])]),t("p",[e._v("单重 Range 响应：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token response-status"}},[t("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token status-code number"}},[e._v("206")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[e._v("Partial Content")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Sat, 21 May 2022 10:00:59 GMT")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("text/plain")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Length")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("11")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("bytes 0-10/398")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token text-plain"}},[e._v("\n689531cce9c\n")])])])]),t("p",[e._v("多重 Range 请求：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token method property"}},[e._v("GET")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token request-target url"}},[e._v("/centos/7/isos/x86_64/sha256sum.txt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("mirrors.tuna.tsinghua.edu.cn")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("bytes=0-10, 369-")])]),e._v("\n")])])]),t("p",[e._v("多重 Range 响应：")]),e._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token response-status"}},[t("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token status-code number"}},[e._v("206")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[e._v("Partial Content")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Sat, 21 May 2022 10:29:09 GMT")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("multipart/byteranges; boundary=00000000000002795091")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Length")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("241")])]),e._v("\n\n\n--00000000000002795091\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("text/plain")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("bytes 0-10/398")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token text-plain"}},[e._v("\n689531cce9c\n--00000000000002795091\nContent-Type: text/plain\nContent-Range: bytes 369-397/398\n\nCentOS-7-x86_64-DVD-2009.iso\n\n--00000000000002795091--\n\n")])])])]),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://dabing1022.github.io/2016/12/24/%E8%81%8A%E4%B8%80%E8%81%8AHTTP%E7%9A%84Range,%20Content-Range/",target:"_blank",rel:"noopener noreferrer"}},[e._v("聊一聊 HTTP 的 Range, Content-Range"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);