import{o as e,c as a,b as t}from"./app.6f040543.js";const n='{"title":"Vue3","description":"vue3学习笔记","frontmatter":{"title":"Vue3","head":[["meta",{"name":"description","content":"vue3学习笔记"}],["meta",{"name":"keywords","content":"vue vue3 vuejs vue.js"}]]},"headers":[{"level":2,"title":"基础","slug":"基础"},{"level":3,"title":"安装","slug":"安装"},{"level":3,"title":"生命周期","slug":"生命周期"},{"level":3,"title":"模版语法","slug":"模版语法"}],"relativePath":"front-end/vue/index.md","lastUpdated":1630597057739}',s={},l=[t('<h2 id="基础"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>使用 npm：</p><div class="language-shell"><pre><code><span class="token function">npm</span> init vite <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span> -- --template vue\n<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span>\n<span class="token function">npm</span> <span class="token function">install</span>\n<span class="token function">npm</span> run dev\n</code></pre></div><p>或者 yarn：</p><div class="language-shell"><pre><code><span class="token function">yarn</span> create vite\n</code></pre></div><h3 id="生命周期"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><p><img src="https://cdn.jsdelivr.net/gh/qiyoe/qiyoe.github.io/c-blog/vue3/lifecycle.svg" alt="lifecycle"></p><p>由上图可以看出:</p><ul><li>beforeCeate: 初始化事件和生命周期--完成状态 <ul><li>实例初始化, el 和 data 未初始化, 组件各个选项对象未创建(即无法访问 methods, data, computed)--完成状态</li></ul></li><li>created: 初始化注入和交互(响应式)--完成状态 <ul><li>实例创建, 但是不可见(因为还没挂载). 可以进行数据的预处理</li></ul></li><li>beforeMount: el 和 data 初始化, 生成模<strong>板 HTML</strong><ul><li>如有 &quot;template&quot; 选项, 则把模板编译到 render 函数(虚拟 DOM)--完成状态</li><li>反之, 编译 el&#39;s innerHTML 为模板--完成状态</li></ul></li><li>mounted: 创建 app.$el 并将之挂载到 el (模板 HTML 渲染到 HTML 页面)--完成状态</li><li>beforeUpdate: 数据发生改变--完成状态</li><li>updated: 虚拟 DOM 重新渲染并修补 DOM(diff 算法打补丁)--完成状态</li><li>beforeUnmount: 当 app.unmount() 调用之前(可以获取实例; 清除定时器和监听的 DOM 事件)--完成状态</li><li>unmounted: 实例卸载--完成状态</li></ul><h3 id="模版语法"><a class="header-anchor" href="#模版语法" aria-hidden="true">#</a> 模版语法</h3><h4 id="插值"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值</h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isButtonDisabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>如果 <code>isButtonDisabled</code> 的值是 <code>truthy</code>，那么 <code>disabled</code> attribute 将被包含在内。<strong>如果该值是一个空字符串，它也会被包括在内，与 <code>&lt;button disabled=&quot;&quot;&gt;</code> 保持一致。</strong> 对于其他 <code>falsy</code> 的值，该 attribute 将被省略。</p><p><strong>即对于 <code>v-bind</code> 来说, <code>&quot;&quot;</code> 也是 <code>true</code></strong></p></div><h4 id="指令"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h4><p>动态参数</p><p><cite><a href="https://v3.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">-- 《vue3官方文档》</a></cite></p>',16)];s.render=function(t,n,s,o,p,i){return e(),a("div",null,l)};export{n as __pageData,s as default};
