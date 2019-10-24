(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{267:function(e,t,o){"use strict";o.r(t);var a=o(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"guide-to-v2ray-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#guide-to-v2ray-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Guide to V2Ray configuration")]),e._v(" "),o("h2",{attrs:{id:"disclaimer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disclaimer","aria-hidden":"true"}},[e._v("#")]),e._v(" Disclaimer")]),e._v(" "),o("p",[e._v("This repository is a fork of "),o("code",[e._v("ToutyRater/v2ray-guide")]),e._v(", thank you to help many people cross the GFW.")]),e._v(" "),o("p",[e._v("As we want to make "),o("a",{attrs:{href:"https://github.com/ToutyRater/v2ray-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("the original guide of V2Ray"),o("OutboundLink")],1),e._v(" more well-maintained and up-to-date, as well as multi-lingual, we forked this new repository. You are welcome to contribute your experience, translation and making a correction to this document by opening an issue.")]),e._v(" "),o("p",[e._v("The documents now licensed under "),o("a",{attrs:{href:"%60LICENSE.md%60"}},[e._v("BY-CC 4.0")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("V2Ray is a tool under Project V. Project V is a project that includes a set of tools for building specific network environments, and V2Ray is the core one. The Project V manual said "),o("code",[e._v("Project V is a set of tools to help you build your own privacy network over the internet. The core of Project V, named V2Ray, is responsible for network protocols and communications. It can work standalone, as well as combine with other tools.")]),e._v(" However, in terms of launching time, Project V is prior than V2Ray.")]),e._v(" "),o("p",[e._v("If you still don't understand, then we simply say, V2Ray is a similar proxy software to Shadowsocks. V2Ray can be used to access the internet (over the censorship) to learn advanced science and technology from the free internet.")]),e._v(" "),o("p",[e._v("V2Ray User manual:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.v2ray.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.v2ray.com"),o("OutboundLink")],1),e._v(" (Has been blocked in China)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://v2fly.org"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("V2Ray repository address: "),o("a",{attrs:{href:"https://github.com/v2ray/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/v2ray/v2ray-core"),o("OutboundLink")],1),e._v("\nV2Ray repository address (V2Fly repository): "),o("a",{attrs:{href:"https://github.com/v2fly/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/v2ray/v2ray-core"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("V2Ray Telegram user discussion group: "),o("a",{attrs:{href:"https://t.me/v2fly_chat",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://t.me/projectv2ray"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"frequent-questions-q-a"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frequent-questions-q-a","aria-hidden":"true"}},[e._v("#")]),e._v(" Frequent questions: Q&A")]),e._v(" "),o("h4",{attrs:{id:"what-is-the-difference-between-v2ray-and-shadowsocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-v2ray-and-shadowsocks","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the difference between V2Ray and Shadowsocks?")]),e._v(" "),o("p",[e._v("The difference is still that Shadowsocks is just a simple proxy tool; it is a protocol of encryption. However, V2Ray is designed as a platform, and any developer can use the modules provided by V2Ray to develop new proxy software.")]),e._v(" "),o("p",[e._v("Anyone familiar with the history of Shadowsocks should know that it is a self-using software developed by clowwindy. The original intention of the development is to make it easy and efficient to cross the firewall and censorship. Before clowwindy made Shadowsocks opensource, it has been used as a private proxy protocol for a long time. Whereas V2Ray was developed after clowwindy receive the menace from the Chinese government, the Project V team developed as a protest.")]),e._v(" "),o("p",[e._v("Due to the different historical backgrounds at birth, they have different features.")]),e._v(" "),o("p",[e._v("Merely speaking, Shadowsocks is a single proxy protocol, and V2Ray is more complicated than a single protocol proxy. Sounds a bit bleak to Shadowsocks? of course not! From another point of view, Shadowsocks is easy to deploy, and V2Ray has more complicated configurations while deploying.")]),e._v(" "),o("h4",{attrs:{id:"since-v2ray-is-more-complicated-why-using-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#since-v2ray-is-more-complicated-why-using-it","aria-hidden":"true"}},[e._v("#")]),e._v(" Since V2Ray is more complicated, why using it?")]),e._v(" "),o("p",[e._v("The advantages and disadvantages of something always come along. For instance, V2Ray has the following advantages:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("A new and powerful protocol:")]),e._v(" V2Ray uses the new self-developed VMess protocol, which improves some of the existing shortcomings of Shadowsocks and is more difficult to detect by the firewall.")]),e._v(" "),o("li",[o("strong",[e._v("Better performance:")]),e._v(" Better network performance, specific data can be seen "),o("a",{attrs:{href:"https://steemit.com/cn/@v2ray/3cjiux",target:"_blank",rel:"noopener noreferrer"}},[e._v("V2Ray official blog"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("strong",[e._v("More features:")]),e._v(" The following are some of the features of V2Ray:\n"),o("ul",[o("li",[e._v("mKCP: KCP protocol implementation on V2Ray, you don't need to install another kcptun.")]),e._v(" "),o("li",[e._v("Dynamic port: dynamically change the communication port to combat the speed limit of long-term large triaffic port")]),e._v(" "),o("li",[e._v("Routing features: you can freely set the flow direction of the specified data packet, to block advertisements and enable anti-tracking")]),e._v(" "),o("li",[e._v("Outbound proxy, or say chain proxy, uses many links for better privacy")]),e._v(" "),o("li",[e._v("Obfuscation: similar to the obfuscation of ShadowsocksR, and the data package for mKCP can also be obfuscated. Obfuscating the traffic packets other protocol traffic, making inspection more difficult")]),e._v(" "),o("li",[e._v("WebSocket protocol: Only use WebSocket proxy, or for CDN intermediate proxy (better anti-blocking)")]),e._v(" "),o("li",[e._v("Mux: Multiplexing, further improving the concurrent performance of the proxy")])])])]),e._v(" "),o("h4",{attrs:{id:"no-sliver-bullet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-sliver-bullet","aria-hidden":"true"}},[e._v("#")]),e._v(" No sliver bullet")]),e._v(" "),o("p",[e._v("For now, V2Ray has the following disadvantages:")]),e._v(" "),o("ul",[o("li",[e._v("Complex configuration")]),e._v(" "),o("li",[e._v("Lack of 3rd-party clients and services")])]),e._v(" "),o("h4",{attrs:{id:"it-seems-v2ray-good-but-i-just-want-to-cross-the-internet-censorship-don-t-want-to-waste-too-long-time-how-can-i-do"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#it-seems-v2ray-good-but-i-just-want-to-cross-the-internet-censorship-don-t-want-to-waste-too-long-time-how-can-i-do","aria-hidden":"true"}},[e._v("#")]),e._v(" It seems V2Ray good, but I just want to cross the internet censorship, don't want to waste too long time. How can I do?")]),e._v(" "),o("p",[e._v("No matter what you do, there is an effort. Effort does not mean success, but no effort definitely suggest no gains. But if your requirement is relatively simple, you can find a VPN rather than deploying V2Ray be yourself.")]),e._v(" "),o("h4",{attrs:{id:"i-decided-to-try-to-deploy-v2ray-so-how-can-i-follow-this-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-decided-to-try-to-deploy-v2ray-so-how-can-i-follow-this-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" I decided to try to deploy V2Ray, so how can I follow this guide?")]),e._v(" "),o("p",[e._v("V2Ray's user manual explains everything in great detail. This guide mainly explains the features of V2Ray from easy to difficult in practically available configurations, and strives to reduce the difficulty of newcomers using V2Ray.")]),e._v(" "),o("p",[e._v("**The users of this guide should have some Linux shell experiences, such as how to buy a VPS, how to log in to VPS with SSH, how to use nano (or vim) to edit a text and some basic Linux commands. There are many guides online. There is no need to repeat them and write a tutorial. If you don't have any experience, you are strongly encouraged that you learn them in prior, then deploy V2Ray. **")]),e._v(" "),o("p",[e._v("This guide can be seen as a simple version of the V2Ray user manual or as a practical guide to V2Ray.")]),e._v(" "),o("p",[e._v("You can follow the instructions in this guide to build V2Ray without reading this user manual, but we don't recommend it. Because this guide is just to guide you on how to configure V2Ray. There are certain shortcuts compared to the user manual, and something is ignored. So we hope everyone spends to read the V2Ray user manual.")]),e._v(" "),o("h4",{attrs:{id:"just-starting-to-use-v2ray-what-do-i-need-to-pay-attention-to"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#just-starting-to-use-v2ray-what-do-i-need-to-pay-attention-to","aria-hidden":"true"}},[e._v("#")]),e._v(" Just starting to use V2Ray, what do I need to pay attention to?")]),e._v(" "),o("p",[e._v("Since many V2Ray users have experience with Shadowsocks, they can basically use V2Ray like Shadowsocks. However, V2Ray is not quite the same as Shadowsocks so that we will introduce the differences in usage. Please note that the difference does not mean good or bad. You are recommended to choose the configuration to fit your network environment.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Client: V2Ray itself is just a kernel. The GUI client of V2Ray is mostly a shell called V2Ray kernel, similar to the relationship between the Linux kernel and the Linux operating system. But many clients of Shadowsocks are re-implemented the protocol by the author. The content of this article does not involve the use of GUI clients at this moment.")])]),e._v(" "),o("li",[o("p",[e._v("Policy proxy: Perhaps the first imagination is PAC. Whether Shadowsocks (specifically Shadowsocks-libev) or V2Ray themselves do not support PAC, it controlled by the user client. Whereas Shadowsocks uses ACL, V2Ray uses its routing function, and we do not say which is good or bad. You can choose the better one, depends on you.")])]),e._v(" "),o("li",[o("p",[e._v("Share Link/QR Code: V2Ray does not have a uniform URL format like Shadowsocks, so the shared link/QR code of each V2Ray graphics client is not necessarily universal. However, we are working on the implementation of the V2Ray endpoint protocol. It will provide a universal link for V2Ray clients.")])]),e._v(" "),o("li",[o("p",[e._v("Encryption: V2Ray (specifically VMess protocol) does not like Shadowsocks, which emphasizes the choice of encryption, and VMess encryption is specified by the client, the server is adaptive.")])]),e._v(" "),o("li",[o("p",[e._v("Time: Use V2Ray to ensure accurate time, as this is for safe design.")])]),e._v(" "),o("li",[o("p",[e._v("Password: V2Ray (VMesss) only uses UUID, which acts like Shadowsocks' password, but randomness is much better than Shadowsocks' password, but it is not convenient to remember (safety and convenience contradiction).")])]),e._v(" "),o("li",[o("p",[e._v("UDP relay: VMess is a TCP-based stream protocol. For UDP packets, VMess will be converted to TCP stream and then relay packets, i.e. UDP over TCP. To enable UDP, you can enable UDP in the client's socks protocol. However, note that this is not very good for gaming acceleration.")])]),e._v(" "),o("li",[o("p",[e._v("Gateway proxy: In fact, they are no different. Don't think that you can't use them on the router without plug-ins.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);