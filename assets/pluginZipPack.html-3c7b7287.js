import{_ as e,r as p,o as t,c,b as n,d as a,e as i,f as o}from"./app-ec7502b2.js";const l={},u=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),a(" 介绍")],-1),r=n("p",null,[n("code",null,"plugin-zip-pack"),a(" 该插件用于项目的 webpack、vite build 结束后压缩指定目录资源为.zip 包。")],-1),d={href:"https://www.npmjs.com/package/plugin-zip-pack",target:"_blank",rel:"noopener noreferrer"},k=o(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p><code>cnpm install plugin-zip-pack -D</code></p><p><code>npm install plugin-zip-pack -D</code></p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ul><li>vite</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> vitePluginPackZip<span class="token punctuation">,</span> webpackPluginPackZip <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;plugin-zip-pack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vitePluginPackZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// vitePluginPackZip({</span>
    <span class="token comment">//   optZipName: &#39;测试包&#39;</span>
    <span class="token comment">// }),</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>webpack</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> webpackPluginPackZip <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;plugin-zip-pack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">webpackPluginPackZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(m,g){const s=p("ExternalLinkIcon");return t(),c("div",null,[u,r,n("p",null,[n("a",d,[a("plugin-zip-pack - npm (npmjs.com)"),i(s)])]),k])}const h=e(l,[["render",v],["__file","pluginZipPack.html.vue"]]);export{h as default};
