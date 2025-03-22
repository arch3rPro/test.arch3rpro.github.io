import{_ as r}from"./chunks/articleMetadata.BFdhdBYc.js";import{_ as p,C as o,c as d,o as t,j as n,G as c,at as k,a as g,w as m,b as u,e as y}from"./chunks/framework.CWSM2P0l.js";import"./chunks/theme.B-mdu031.js";const b="/wiki/assets/1742098903.DWlTyzxR.png",F="/wiki/assets/1742099007.Dp1lUu2F.png",E="/wiki/assets/1742099061.DKDTafeB.png",_="/wiki/assets/1742099123.O0GVoOKR.png",C="/wiki/assets/1742099222.DfdOp__N.png",f="/wiki/assets/1742099567.DM70R63W.png",v="/wiki/assets/1742099590.rCu2hyVR.png",z="/wiki/assets/1742099785.B5dhSC18.png",O=JSON.parse('{"title":"Terminal配置","description":"配置一个适合我本人Mac开发的终端","frontmatter":{"sort":4,"title":"Terminal配置","description":"配置一个适合我本人Mac开发的终端","date":"2025-03-16T12:18:15.000Z","tags":["MacOS"]},"headers":[],"relativePath":"efficiency/mac/terminal.md","filePath":"posts/efficiency/mac/terminal/README.md","lastUpdated":1742398166000}'),B={name:"efficiency/mac/terminal.md"};function w(i,s,x,D,T,q){const l=r,h=o("ClientOnly");return t(),d("div",null,[s[0]||(s[0]=n("h1",{id:"terminal配置",tabindex:"-1"},[g("Terminal配置 "),n("a",{class:"header-anchor",href:"#terminal配置","aria-label":'Permalink to "Terminal配置"'},"​")],-1)),c(h,null,{default:m(()=>{var a,e;return[(((a=i.$frontmatter)==null?void 0:a.aside)??!0)&&(((e=i.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(t(),u(l,{key:0,article:i.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),s[1]||(s[1]=k('<h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><p>打开<code>终端</code> -&gt; <code>设置</code>，按照图片所示配置</p><p><img src="'+b+'" alt="img" loading="lazy"></p><p><img src="'+F+'" alt="img" loading="lazy"></p><p><img src="'+E+'" alt="img" loading="lazy"></p><p><img src="'+_+'" alt="img" loading="lazy"></p><h2 id="安装homebrew" tabindex="-1">安装Homebrew <a class="header-anchor" href="#安装homebrew" aria-label="Permalink to &quot;安装Homebrew&quot;">​</a></h2><p>执行命令安装，按照脚本提示执行</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/bin/zsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+C+'" alt="img" loading="lazy"></p><h2 id="安装oh-my-zsh" tabindex="-1">安装Oh-My-Zsh <a class="header-anchor" href="#安装oh-my-zsh" aria-label="Permalink to &quot;安装Oh-My-Zsh&quot;">​</a></h2><p>执行命令安装，按照脚本提示执行</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="配置插件与主题" tabindex="-1">配置插件与主题 <a class="header-anchor" href="#配置插件与主题" aria-label="Permalink to &quot;配置插件与主题&quot;">​</a></h3><p><strong>下载自动补全插件</strong> <code>zsh-autosuggestions</code>，安装命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/zsh-users/zsh-autosuggestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${ZSH_CUSTOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">~</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.oh-my-zsh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/plugins/zsh-autosuggestions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>下载语法高亮插件</strong> <code>zsh-syntax-highlighting</code>，安装命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/zsh-users/zsh-syntax-highlighting.git</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${ZSH_CUSTOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">~</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.oh-my-zsh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">custom}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/plugins/zsh-syntax-highlighting</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 <code>vim ~/.zshrc</code> 编辑zsh配置，配置后执行 <code>source ~/.zshrc</code> 生效，如图：</p><p><img src="'+f+'" alt="img" loading="lazy"></p><p><img src="'+v+'" alt="img" loading="lazy"></p><p><img src="'+z+'" alt="img" loading="lazy"></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://gitee.com/cunkai/HomebrewCN" target="_blank" rel="noreferrer">Homebrew国内源项目</a></li><li><a href="https://ohmyz.sh/#install" target="_blank" rel="noreferrer">Oh-My-Zsh官网</a></li></ul>',24))])}const $=p(B,[["render",w]]);export{O as __pageData,$ as default};
