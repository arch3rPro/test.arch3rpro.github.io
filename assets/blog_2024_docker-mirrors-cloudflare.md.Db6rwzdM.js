import{_ as p}from"./chunks/articleMetadata.BFdhdBYc.js";import{_ as o,C as h,c as k,o as n,j as t,G as c,at as d,a as E,w as u,b as g,e as m}from"./chunks/framework.CWSM2P0l.js";import"./chunks/theme.B-mdu031.js";const b="/wiki/assets/1718812800.BySZVqBZ.png",y="/wiki/assets/1718812801.B1k6UI8l.png",F="/wiki/assets/1718812802.DzwHq4aM.png",C="/wiki/assets/1718812803.BlFAAC6d.png",q="/wiki/assets/1718812804.DcnbRGmh.png",_="/wiki/assets/1718812805.B4ADmpGn.png",f="/wiki/assets/1718812806.B2ExR0ok.png",B="/wiki/assets/1718812807.Bl0XvYkH.png",v="/wiki/assets/1718812808.B0LUIUCy.png",W=JSON.parse('{"title":"利用CloudFlare自建Docker镜像站","description":"docker hub国内镜像源都下线，在网络上搜集到了利用CloudFlare Workers自建Docker镜像站的办法","frontmatter":{"title":"利用CloudFlare自建Docker镜像站","description":"docker hub国内镜像源都下线，在网络上搜集到了利用CloudFlare Workers自建Docker镜像站的办法","date":"2024-06-20T12:50:06.000Z","tags":["Docker","CloudFlare"]},"headers":[],"relativePath":"blog/2024/docker-mirrors-cloudflare.md","filePath":"posts/blog/2024/docker-mirrors-cloudflare/README.md","lastUpdated":1742398166000}'),D={name:"blog/2024/docker-mirrors-cloudflare.md"};function w(i,s,A,x,P,z){const l=p,r=h("ClientOnly");return n(),k("div",null,[s[0]||(s[0]=t("h1",{id:"利用cloudflare自建docker镜像站",tabindex:"-1"},[E("利用CloudFlare自建Docker镜像站 "),t("a",{class:"header-anchor",href:"#利用cloudflare自建docker镜像站","aria-label":'Permalink to "利用CloudFlare自建Docker镜像站"'},"​")],-1)),c(r,null,{default:u(()=>{var a,e;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((e=i.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(n(),g(l,{key:0,article:i.$frontmatter},null,8,["article"])):m("",!0)]}),_:1}),s[1]||(s[1]=d('<div class="tip custom-block"><p class="custom-block-title">引言</p><p>于2024年6月国内的Docker Hub镜像源大多已下线，我在网络上搜集到了利用CloudFlare自建Docker镜像站的办法，仅用于解决个人开发难题，请勿滥用CloudFlare，珍惜来之不易的机会！</p><div class="tip custom-block"><p class="custom-block-title">项目地址</p><p>原项目地址：<a href="https://github.com/ciiiii/cloudflare-docker-proxy" target="_blank" rel="noreferrer">https://github.com/ciiiii/cloudflare-docker-proxy</a></p><p>我修改地址：<a href="https://github.com/yqchilde/cloudflare-docker-proxy" target="_blank" rel="noreferrer">https://github.com/yqchilde/cloudflare-docker-proxy</a></p></div></div><div class="info custom-block"><p class="custom-block-title">有朋友连docker都装不上了，这是安装办法，get-docker.sh这个建议本地获取之后，复制到服务器上</p><p>curl -fsSL <a href="https://get.docker.com" target="_blank" rel="noreferrer">https://get.docker.com</a> -o get-docker.sh<br> sudo DOWNLOAD_URL=<a href="https://mirrors.ustc.edu.cn/docker-ce" target="_blank" rel="noreferrer">https://mirrors.ustc.edu.cn/docker-ce</a> sh get-docker.sh</p></div><h2 id="准备账号" tabindex="-1">准备账号 <a class="header-anchor" href="#准备账号" aria-label="Permalink to &quot;准备账号&quot;">​</a></h2><p>既然是基于cloudflare的，那就先去 <strong><a href="https://www.cloudflare.com/zh-cn/" target="_blank" rel="noreferrer">注册</a></strong> 个账号，此处省略 ~</p><p>有了账号之后获取两个值，账号ID和TOKEN<br> 账号ID：可以从Url路径上获取，也可以点开Works和Pages页面右侧获取<br> 账号TOKEN：点击右上角-&gt;我的个人资料-&gt;API令牌-&gt;创建令牌-&gt;编辑Cloudflare Workers-&gt;使用模板</p><p><img src="'+b+'" alt="img" loading="lazy"></p><p><img src="'+y+'" alt="img" loading="lazy"></p><p><img src="'+F+'" alt="img" loading="lazy"></p><p><img src="'+C+`" alt="img" loading="lazy"></p><h2 id="仓库代码" tabindex="-1">仓库代码 <a class="header-anchor" href="#仓库代码" aria-label="Permalink to &quot;仓库代码&quot;">​</a></h2><p>接下来打开我修改的仓库地址 <a href="https://github.com/yqchilde/cloudflare-docker-proxy" target="_blank" rel="noreferrer">cloudflare-docker-proxy</a> ，fork项目</p><p>fork到自己仓库后，需要修改以下文件</p><ol><li><strong><code>src/index.js</code></strong>，将下面的closeai.me替换为你自己的域名（先写上，待会从cf配置域名）</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> routes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // production</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;docker.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: dockerHub,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;quay.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://quay.io&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;gcr.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://gcr.io&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;k8s-gcr.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://k8s.gcr.io&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;k8s.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://registry.k8s.io&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ghcr.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://ghcr.io&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;cloudsmith.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://docker.cloudsmith.io&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // staging</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;docker-staging.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: dockerHub,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="2"><li><strong><code>wrangler.toml</code></strong>，将下面的closeai.me替换为你自己的域名（先写上，待会从cf配置域名）</li></ol><div class="language-toml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">routes = [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { pattern = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docker.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, custom_domain = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { pattern = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;quay.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, custom_domain = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { pattern = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gcr.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, custom_domain = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { pattern = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;k8s-gcr.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, custom_domain = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { pattern = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;k8s.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, custom_domain = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { pattern = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ghcr.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, custom_domain = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { pattern = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cloudsmith.closeai.me&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, custom_domain = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li><strong><code>README.md</code></strong>，全局将<code>yqchilde</code>替换为你的<code>github用户名</code>，这一步是为了将<code>Deploy with Workers</code>按钮的超链接变更到你自己的仓库</li></ol><h2 id="部署配置" tabindex="-1">部署配置 <a class="header-anchor" href="#部署配置" aria-label="Permalink to &quot;部署配置&quot;">​</a></h2><p>改好之后，点击<code>Deploy with Workers</code>按钮进行跳转，然后授权，并填入cloudflare的账号id和token后进行自动部署</p><p><img src="`+q+'" alt="img" loading="lazy"></p><p>进入到cloudflare的Workers界面就可以看到部署过来的workers了</p><p><img src="'+_+'" alt="img" loading="lazy"></p><p>workers默认会分配一个域名，但是这个域名可能已经被墙了，如果在国内机器ping不通，那就使用自定义域名吧</p><p>先添加一个域名，然后从域名商那边将dns解析到cloudflare，这样就会cloudflare管理了，打开workers设置添加自定义域就可以了，二级域名会自动解析过去</p><p><img src="'+f+'" alt="img" loading="lazy"></p><p><img src="'+B+`" alt="img" loading="lazy"></p><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2><p>在<code>/etc/docker/daemon.json</code>中配置<code>registry-mirrors</code>，如果你搭建了这一套流程，下面的域名换成你自己的即可，改完配置执行<code>sudo service docker restart</code>重启docker</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;registry-mirrors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://docker.closeai.me&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="`+v+'" alt="img" loading="lazy"></p><h2 id="github-actions" tabindex="-1">Github Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;Github Actions&quot;">​</a></h2><p>项目中有github actions的配置，请注意和密钥的修改，更改之后可以当仓库代码变动时，自动部署到cloudflare</p>',32))])}const j=o(D,[["render",w]]);export{W as __pageData,j as default};
