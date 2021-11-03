import{_ as n,c as e,o as a,d as o}from"./app.a519e37d.js";const g='{"title":"Commitizen","description":"\u524D\u7AEF\u4EE3\u7801\u98CE\u683C\u89C4\u8303\u4E4BCommitizen","frontmatter":{"title":"Commitizen","head":[["meta",{"name":"description","content":"\u524D\u7AEF\u4EE3\u7801\u98CE\u683C\u89C4\u8303\u4E4BCommitizen"}],["meta",{"name":"keywords","content":"\u524D\u7AEF\u4EE3\u7801\u98CE\u683C\u89C4\u8303 commitizen"}]]},"headers":[{"level":2,"title":"\u524D\u7F6E\u77E5\u8BC6","slug":"\u524D\u7F6E\u77E5\u8BC6"},{"level":2,"title":"\u5B89\u88C5","slug":"-1"},{"level":2,"title":"\u9A8C\u8BC1","slug":"-2"},{"level":2,"title":"\u8BBE\u7F6E\u4E2D\u6587","slug":"-3"}],"relativePath":"front-end/lint/commitizen.md","lastUpdated":1635934309112}',s={},t=o(`__VP_STATIC_START__<h2 id="" tabindex="-1"><a class="header-anchor" href="#">#</a> \u524D\u7F6E\u77E5\u8BC6</h2><p>\u6709\u4E86 <code>Commitlint</code> \u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u89C4\u8303 <code>commit</code> \u7684\u4FE1\u606F\u6821\u9A8C\u4E86\u3002 <code>Commitizen</code> \u53EF\u4EE5\u4EE4\u8FD9\u79CD\u6821\u9A8C\u4F53\u9A8C\u611F\u66F4\u4F73\u3002</p><p><a href="http://commitizen.github.io/cz-cli/" target="_blank" rel="noopener noreferrer">commitizen \u5B98\u65B9\u6587\u6863</a></p><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1">#</a> \u5B89\u88C5</h2><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -D commitizen
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> commitizen -D
</code></pre></div><p>\u4E4B\u540E\u7EC8\u7AEF\u8FD0\u884C\uFF1A</p><div class="language-shell"><pre><code>npx commitizen init cz-conventional-changelog --save-dev --save-exact
<span class="token comment"># or</span>
npx commitizen init cz-conventional-changelog --yarn --dev --exact
</code></pre></div><p>\u5728 <code>package.json</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0\u547D\u4EE4\uFF1A</p><div class="language-js"><pre><code><span class="token string">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token string">&quot;cz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cz&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>\u5982\u679C\u5B89\u88C5\u4E86 <code>husky</code>\uFF1A</p><ul><li>\u547D\u4EE4\u547D\u540D\u4E3A <code>commit</code> \uFF0C\u8FD0\u884C\u6B64\u547D\u4EE4\u7684\u65F6\u5019 <code>npm</code> \u548C <code>husky</code> \u4F1A\u81EA\u52A8\u8FD0\u884C\u540D\u4E3A <code>precommit</code> \u7684\u811A\u672C 2 \u6B21</li><li>\u547D\u4EE4\u547D\u540D\u4E3A\u5176\u4ED6\uFF0C\u5982 <code>cz</code> \uFF0C\u8FD0\u884C\u6B64\u547D\u4EE4\u7684\u65F6\u5019 <code>npm</code> \u53EA\u4F1A\u81EA\u52A8\u8FD0\u884C\u540D\u4E3A <code>prexxx</code> \u7684\u811A\u672C</li></ul></div><h2 id="-2" tabindex="-1"><a class="header-anchor" href="#-2">#</a> \u9A8C\u8BC1</h2><p>\u7EC8\u7AEF\u8FD0\u884C\uFF1A</p><div class="language-shell"><pre><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token function">yarn</span> cz
<span class="token comment"># or</span>
<span class="token function">npm</span> cz
</code></pre></div><h2 id="-3" tabindex="-1"><a class="header-anchor" href="#-3">#</a> \u8BBE\u7F6E\u4E2D\u6587</h2><p>cz-conventional-changelog \u51FA\u6765\u7684\u9009\u9879\u90FD\u662F\u82F1\u6587\uFF0C\u5BF9\u4E8E\u5F00\u59CB\u4F7F\u7528\u7684\u65B0\u624B\u6765\u8BF4\u4E0D\u592A\u65B9\u4FBF\u3002\u8FD9\u91CC\u662F<a href="https://github.com/z649319834/cz-conventional-changelog-zh" target="_blank" rel="noopener noreferrer">\u4E2D\u6587\u7248</a>\u7684</p>__VP_STATIC_END__`,15),c=[t];function i(p,l,d,r,m,h){return a(),e("div",null,c)}var k=n(s,[["render",i]]);export{g as __pageData,k as default};
