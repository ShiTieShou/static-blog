import{o as e,c as r,r as a,d as l,b as t,e as o,f as h}from"./app.ffa6469b.js";const s={props:["cssProperty"],computed:{src(){return"https://caniuse.bitsofco.de/embed/index.html?feat="+this.cssProperty+"&periods=future_1,current,past_1,past_2,past_3&accessible-colours=false"}}},d=["src"];s.render=function(a,l,t,o,h,s){return e(),r("iframe",{width:"100%",height:"410px",src:s.src,frameborder:"0"},"\n  ",8,d)};const i=t('<h2 id="前置知识"><a class="header-anchor" href="#前置知识" aria-hidden="true">#</a> 前置知识</h2><h3 id="css-3d坐标轴空间"><a class="header-anchor" href="#css-3d坐标轴空间" aria-hidden="true">#</a> css 3d坐标轴空间</h3><div align="center"><img src="https://cdn.jsdelivr.net/gh/qiyoe/qiyoe.github.io/c-blog/css-secrets/css-3d.jpg" width="300" align="center"></div><p><strong>正向轴对着眼睛，顺时针则旋转角度为正，逆时针则旋转角度为负。</strong></p><p>或者用左手法则也行：<strong>伸出左手，大拇指指向正轴方向，四个手指的指向即是旋转正向，但务必记住是左手！</strong></p><h3 id="css-2d坐标轴空间"><a class="header-anchor" href="#css-2d坐标轴空间" aria-hidden="true">#</a> css 2d坐标轴空间</h3><ul><li>rotate 顺时针为+，逆时针为-</li><li>translate x为横轴，y为纵轴</li><li>scale x为横轴，y为纵轴</li><li>skew 延x轴逆时针为正，沿+y顺时针为正</li></ul><h2 id="边框与背景"><a class="header-anchor" href="#边框与背景" aria-hidden="true">#</a> 边框与背景</h2><h3 id="半透明边框"><a class="header-anchor" href="#半透明边框" aria-hidden="true">#</a> 半透明边框</h3><blockquote><p>背景知识：👉 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip" target="_blank" rel="noopener noreferrer">background-clip</a></p></blockquote><p>默认情况下，背景的颜色会延伸至边框下层，这意味着我们设置的透明边框效果会被覆盖掉，在css3中，我们可以通过设置<code>background-clip:padding-box</code>来改变背景的默认行为，达到我们想要的效果。</p>',11),n=t('<h3 id="多重边框"><a class="header-anchor" href="#多重边框" aria-hidden="true">#</a> 多重边框</h3><blockquote><p>背景知识：👉 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow" target="_blank" rel="noopener noreferrer">box-shadow</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline" target="_blank" rel="noopener noreferrer">outline</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-offset" target="_blank" rel="noopener noreferrer">outline-offset</a></p></blockquote><p><code>box-shadow</code>相信很多人都已经用透了，可用来给元素添加各种阴影效果，反过来，也只有我们需要实现阴影时才会想起它，其实，<code>box-shadow</code>还接受第四个参数作为阴影扩张半径，当我们只设置扩张半径时，零偏移，零模糊，产生的效果其实相当于一条实线“<strong>边框</strong>”。</p><p><code>box-shadow</code>只能模拟实线边框效果，某些情况下，我们可能需要生成虚线的边框效果，我们可以通过类似于<code>border</code>的描边<code>outline</code>和对应的描边偏移<code>outline-offset</code>来实现。</p>',4),c=t('<h3 id="边框内圆角"><a class="header-anchor" href="#边框内圆角" aria-hidden="true">#</a> 边框内圆角</h3><blockquote><p>背景知识：👉 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow" target="_blank" rel="noopener noreferrer">box-shadow</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline" target="_blank" rel="noopener noreferrer">outline</a></p></blockquote><p>我们知道<code>box-shadow</code>是会紧贴<code>border-radius</code>圆角边的，但是，描边<code>outline</code>并不会与圆角边<code>border-radius</code>贴合，我们可以将两者组合，通过<code>box-shadow</code>去填补描边<code>outline</code>所产生的间隙来达到我们想要的效果。</p><div class="danger custom-block"><p class="custom-block-title">关于扩张半径的取值？</p><p>假设圆角<code>border-radius</code>的半径为<code>r</code>,根据勾股定理，扩张半径的最小值应等于<code>(√2−1)r ~= 3.314</code>，最大值不能超过描边宽度，即<code>6px</code>。</p></div>',4),u=t('<h3 id="背景定位"><a class="header-anchor" href="#背景定位" aria-hidden="true">#</a> 背景定位</h3><blockquote><p>背景知识：👉 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position" target="_blank" rel="noopener noreferrer">background-position</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin" target="_blank" rel="noopener noreferrer">background-origin</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc" target="_blank" rel="noopener noreferrer">calc</a></p></blockquote>',2),p=t('<h3 id="条纹背景"><a class="header-anchor" href="#条纹背景" aria-hidden="true">#</a> 条纹背景</h3><blockquote><p>背景知识：👉 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient" target="_blank" rel="noopener noreferrer">gradient</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient" target="_blank" rel="noopener noreferrer">linear-gradient</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient" target="_blank" rel="noopener noreferrer">radial-gradient</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-linear-gradient" target="_blank" rel="noopener noreferrer">repeating-linear-gradient</a></p></blockquote><ul><li>进度条</li></ul>',3),g=o("ul",null,[o("li",null,"不规则卡片")],-1),_=o("blockquote",null,[o("p",null,[h("示例中为了实现:hover时有贴边的阴影，所以采用了"),o("code",null,"radial-gradient"),h("。")])],-1),b=t('<h3 id="_1px-线-边"><a class="header-anchor" href="#_1px-线-边" aria-hidden="true">#</a> 1px 线/边</h3><blockquote><p>背景知识：👉 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow" target="_blank" rel="noopener noreferrer">box-shadow</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform" target="_blank" rel="noopener noreferrer">transform</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media" target="_blank" rel="noopener noreferrer">@media</a></p></blockquote><ul><li><code>box-shadow</code> + <code>transform</code> 实现 1px 线条</li></ul>',3),f=o("ul",null,[o("li",null,[o("code",null,"border"),h(" + "),o("code",null,"伪元素"),h(" + "),o("code",null,"transform"),h(" 实现 1px 独立边框 👍")])],-1),v=t('<h2 id="常见形状"><a class="header-anchor" href="#常见形状" aria-hidden="true">#</a> 常见形状</h2><h3 id="圆与椭圆"><a class="header-anchor" href="#圆与椭圆" aria-hidden="true">#</a> 圆与椭圆</h3><blockquote><p>背景知识：👉 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius" target="_blank" rel="noopener noreferrer">border-radius</a></p></blockquote><p>通常我们一般使用<code>border-radius</code>来时实现圆角效果，其实<code>border-radius</code>是可以单独指定它的半长轴和半短轴，只需要用“/”分割即可。我们可以通过这个属性轻松实现半圆、半椭圆、四分之一圆及四分之一圆等常见的图形。</p>',4),S=o("h3",{id:"parallel四边形"},[o("a",{class:"header-anchor",href:"#parallel四边形","aria-hidden":"true"},"#"),h(" parallel四边形")],-1),C=o("blockquote",null,[o("p",null,[h("背景知识：👉 "),o("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform",target:"_blank",rel:"noopener noreferrer"},"transform"),h(", "),o("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path",target:"_blank",rel:"noopener noreferrer"},"clip-path")])],-1),m=o("h3",{id:"切角效果"},[o("a",{class:"header-anchor",href:"#切角效果","aria-hidden":"true"},"#"),h(" 切角效果")],-1),k=o("blockquote",null,[o("p",null,[h("背景知识：👉 "),o("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient",target:"_blank",rel:"noopener noreferrer"},"gradient"),h(", "),o("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path",target:"_blank",rel:"noopener noreferrer"},"clip-path")])],-1),T=t('<h3 id="简易饼图"><a class="header-anchor" href="#简易饼图" aria-hidden="true">#</a> 简易饼图</h3><blockquote><p>背景知识：👉 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient" target="_blank" rel="noopener noreferrer">gradient</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation" target="_blank" rel="noopener noreferrer">animation</a>, <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial" target="_blank" rel="noopener noreferrer">SVG</a></p></blockquote>',2),z=t('<h3 id="提示气泡"><a class="header-anchor" href="#提示气泡" aria-hidden="true">#</a> 提示气泡</h3><h3 id="其他多边形"><a class="header-anchor" href="#其他多边形" aria-hidden="true">#</a> 其他多边形</h3><h2 id="视觉效果"><a class="header-anchor" href="#视觉效果" aria-hidden="true">#</a> 视觉效果</h2><h3 id="常见投影"><a class="header-anchor" href="#常见投影" aria-hidden="true">#</a> 常见投影</h3><h3 id="不规则投影"><a class="header-anchor" href="#不规则投影" aria-hidden="true">#</a> 不规则投影</h3><h3 id="毛玻璃投影"><a class="header-anchor" href="#毛玻璃投影" aria-hidden="true">#</a> 毛玻璃投影</h3><h3 id="斑马条纹"><a class="header-anchor" href="#斑马条纹" aria-hidden="true">#</a> 斑马条纹</h3><h3 id="文字特效"><a class="header-anchor" href="#文字特效" aria-hidden="true">#</a> 文字特效</h3><h3 id="文本截断"><a class="header-anchor" href="#文本截断" aria-hidden="true">#</a> 文本截断</h3><h3 id="环形文字"><a class="header-anchor" href="#环形文字" aria-hidden="true">#</a> 环形文字</h3><h3 id="插入换行"><a class="header-anchor" href="#插入换行" aria-hidden="true">#</a> 插入换行</h3><h3 id="图片对比控件"><a class="header-anchor" href="#图片对比控件" aria-hidden="true">#</a> 图片对比控件</h3><h2 id="用户体验"><a class="header-anchor" href="#用户体验" aria-hidden="true">#</a> 用户体验</h2><h3 id="选择合适的鼠标光标"><a class="header-anchor" href="#选择合适的鼠标光标" aria-hidden="true">#</a> 选择合适的鼠标光标</h3><h3 id="扩大可点击区域"><a class="header-anchor" href="#扩大可点击区域" aria-hidden="true">#</a> 扩大可点击区域</h3><h3 id="自定义复选框"><a class="header-anchor" href="#自定义复选框" aria-hidden="true">#</a> 自定义复选框</h3><h3 id="自定义单选框"><a class="header-anchor" href="#自定义单选框" aria-hidden="true">#</a> 自定义单选框</h3><h3 id="自定义开关选择器"><a class="header-anchor" href="#自定义开关选择器" aria-hidden="true">#</a> 自定义开关选择器</h3><h3 id="输入框完美居中"><a class="header-anchor" href="#输入框完美居中" aria-hidden="true">#</a> 输入框完美居中</h3><h3 id="通过阴影弱化背景"><a class="header-anchor" href="#通过阴影弱化背景" aria-hidden="true">#</a> 通过阴影弱化背景</h3><h3 id="通过模糊弱化背景"><a class="header-anchor" href="#通过模糊弱化背景" aria-hidden="true">#</a> 通过模糊弱化背景</h3><h3 id="自定义文字下划线"><a class="header-anchor" href="#自定义文字下划线" aria-hidden="true">#</a> 自定义文字下划线</h3><h3 id="自定义scroll滚动条"><a class="header-anchor" href="#自定义scroll滚动条" aria-hidden="true">#</a> 自定义scroll滚动条</h3><h2 id="结构布局"><a class="header-anchor" href="#结构布局" aria-hidden="true">#</a> 结构布局</h2><h3 id="全背景等宽内容居中"><a class="header-anchor" href="#全背景等宽内容居中" aria-hidden="true">#</a> 全背景等宽内容居中</h3><h3 id="绝对底部"><a class="header-anchor" href="#绝对底部" aria-hidden="true">#</a> 绝对底部</h3><h3 id="水平垂直居中"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3><h3 id="圣杯布局"><a class="header-anchor" href="#圣杯布局" aria-hidden="true">#</a> 圣杯布局</h3><h3 id="双飞翼布局"><a class="header-anchor" href="#双飞翼布局" aria-hidden="true">#</a> 双飞翼布局</h3><h3 id="类订单布局"><a class="header-anchor" href="#类订单布局" aria-hidden="true">#</a> 类订单布局</h3><h3 id="flex布局"><a class="header-anchor" href="#flex布局" aria-hidden="true">#</a> Flex布局</h3><h2 id="动画过渡"><a class="header-anchor" href="#动画过渡" aria-hidden="true">#</a> 动画过渡</h2><h3 id="弹跳效果"><a class="header-anchor" href="#弹跳效果" aria-hidden="true">#</a> 弹跳效果</h3><h3 id="弹性过渡"><a class="header-anchor" href="#弹性过渡" aria-hidden="true">#</a> 弹性过渡</h3><h3 id="闪烁效果"><a class="header-anchor" href="#闪烁效果" aria-hidden="true">#</a> 闪烁效果</h3><h3 id="打字效果"><a class="header-anchor" href="#打字效果" aria-hidden="true">#</a> 打字效果</h3><h3 id="抖动效果"><a class="header-anchor" href="#抖动效果" aria-hidden="true">#</a> 抖动效果</h3><h3 id="无缝平滑效果"><a class="header-anchor" href="#无缝平滑效果" aria-hidden="true">#</a> 无缝平滑效果</h3><h3 id="延轨迹平滑效果"><a class="header-anchor" href="#延轨迹平滑效果" aria-hidden="true">#</a> 延轨迹平滑效果</h3><h2 id="其他"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="常用片段"><a class="header-anchor" href="#常用片段" aria-hidden="true">#</a> 常用片段</h3><h3 id="自定义变量"><a class="header-anchor" href="#自定义变量" aria-hidden="true">#</a> 自定义变量</h3><h3 id="有趣的项目"><a class="header-anchor" href="#有趣的项目" aria-hidden="true">#</a> 有趣的项目</h3>',43),x='{"title":"CSS揭秘","description":"CSS揭秘","frontmatter":{"title":"CSS揭秘","head":[["meta",{"name":"description","content":"CSS揭秘"}],["meta",{"name":"keywords","content":"CSS揭秘 css-secrets"}]]},"headers":[{"level":2,"title":"前置知识","slug":"前置知识"},{"level":3,"title":"css 3d坐标轴空间","slug":"css-3d坐标轴空间"},{"level":3,"title":"css 2d坐标轴空间","slug":"css-2d坐标轴空间"},{"level":2,"title":"边框与背景","slug":"边框与背景"},{"level":3,"title":"半透明边框","slug":"半透明边框"},{"level":3,"title":"多重边框","slug":"多重边框"},{"level":3,"title":"边框内圆角","slug":"边框内圆角"},{"level":3,"title":"背景定位","slug":"背景定位"},{"level":3,"title":"条纹背景","slug":"条纹背景"},{"level":3,"title":"1px 线/边","slug":"_1px-线-边"},{"level":2,"title":"常见形状","slug":"常见形状"},{"level":3,"title":"圆与椭圆","slug":"圆与椭圆"},{"level":3,"title":"parallel四边形","slug":"parallel四边形"},{"level":3,"title":"切角效果","slug":"切角效果"},{"level":3,"title":"简易饼图","slug":"简易饼图"},{"level":3,"title":"提示气泡","slug":"提示气泡"},{"level":3,"title":"其他多边形","slug":"其他多边形"},{"level":2,"title":"视觉效果","slug":"视觉效果"},{"level":3,"title":"常见投影","slug":"常见投影"},{"level":3,"title":"不规则投影","slug":"不规则投影"},{"level":3,"title":"毛玻璃投影","slug":"毛玻璃投影"},{"level":3,"title":"斑马条纹","slug":"斑马条纹"},{"level":3,"title":"文字特效","slug":"文字特效"},{"level":3,"title":"文本截断","slug":"文本截断"},{"level":3,"title":"环形文字","slug":"环形文字"},{"level":3,"title":"插入换行","slug":"插入换行"},{"level":3,"title":"图片对比控件","slug":"图片对比控件"},{"level":2,"title":"用户体验","slug":"用户体验"},{"level":3,"title":"选择合适的鼠标光标","slug":"选择合适的鼠标光标"},{"level":3,"title":"扩大可点击区域","slug":"扩大可点击区域"},{"level":3,"title":"自定义复选框","slug":"自定义复选框"},{"level":3,"title":"自定义单选框","slug":"自定义单选框"},{"level":3,"title":"自定义开关选择器","slug":"自定义开关选择器"},{"level":3,"title":"输入框完美居中","slug":"输入框完美居中"},{"level":3,"title":"通过阴影弱化背景","slug":"通过阴影弱化背景"},{"level":3,"title":"通过模糊弱化背景","slug":"通过模糊弱化背景"},{"level":3,"title":"自定义文字下划线","slug":"自定义文字下划线"},{"level":3,"title":"自定义scroll滚动条","slug":"自定义scroll滚动条"},{"level":2,"title":"结构布局","slug":"结构布局"},{"level":3,"title":"全背景等宽内容居中","slug":"全背景等宽内容居中"},{"level":3,"title":"绝对底部","slug":"绝对底部"},{"level":3,"title":"水平垂直居中","slug":"水平垂直居中"},{"level":3,"title":"圣杯布局","slug":"圣杯布局"},{"level":3,"title":"双飞翼布局","slug":"双飞翼布局"},{"level":3,"title":"类订单布局","slug":"类订单布局"},{"level":3,"title":"Flex布局","slug":"flex布局"},{"level":2,"title":"动画过渡","slug":"动画过渡"},{"level":3,"title":"弹跳效果","slug":"弹跳效果"},{"level":3,"title":"弹性过渡","slug":"弹性过渡"},{"level":3,"title":"闪烁效果","slug":"闪烁效果"},{"level":3,"title":"打字效果","slug":"打字效果"},{"level":3,"title":"抖动效果","slug":"抖动效果"},{"level":3,"title":"无缝平滑效果","slug":"无缝平滑效果"},{"level":3,"title":"延轨迹平滑效果","slug":"延轨迹平滑效果"},{"level":2,"title":"其他","slug":"其他"},{"level":3,"title":"常用片段","slug":"常用片段"},{"level":3,"title":"自定义变量","slug":"自定义变量"},{"level":3,"title":"有趣的项目","slug":"有趣的项目"}],"relativePath":"books/css-secrets.md","lastUpdated":1628782996845}',N={};const P=Object.assign(N,{setup:function(t){return(t,o)=>{const h=a("CodePen");return e(),r("div",null,[i,l(h,{title:"translucent-borders",slug:"QWvzYGx",tab:"js,result",editable:!0,preview:!0,height:350}),l(s,{cssProperty:"mdn-css__properties__background-clip"}),n,l(h,{title:"multiple-borders",slug:"WNjLmoq",tab:"js,result",editable:!0,preview:!0,height:370}),l(s,{cssProperty:"mdn-css__properties__box-shadow"}),c,l(h,{title:"inner-rounding",slug:"NWjoNbX",tab:"js,result",editable:!0,preview:!0,height:370}),l(s,{cssProperty:"mdn-css__properties__outline"}),u,l(h,{title:"extended-bg-position",slug:"MWmLvzQ",tab:"js,result",editable:!0,preview:!0,height:370}),l(s,{cssProperty:"mdn-css__properties__background-origin"}),l(s,{cssProperty:"calc"}),p,l(h,{title:"stripes-background-linear",slug:"OJmdOaG",tab:"js,result",editable:!0,preview:!0,height:370}),g,l(h,{title:"stripes-background-radial",slug:"NWjoOgX",tab:"js,result",editable:!0,preview:!0,height:370}),_,l(s,{cssProperty:"css-gradients"}),b,l(h,{title:"one-pixel-line",slug:"NWjoOgX",tab:"js,result",editable:!0,preview:!0,height:370}),f,l(h,{title:"one-pixel-line-border",slug:"wvdNQWY",tab:"js,result",editable:!0,preview:!0,height:370}),l(s,{cssProperty:"mdn-css__types__resolution"}),l(s,{cssProperty:"mdn-css__properties__transform"}),v,l(h,{title:"ellipse",slug:"vYmbQWR",tab:"js,result",editable:!0,preview:!0,height:370}),l(s,{cssProperty:"mdn-css__properties__border-radius"}),S,C,l(h,{title:"parallelogram",slug:"ExmMaxv",tab:"js,result",editable:!0,preview:!0,height:480}),l(s,{cssProperty:"mdn-css__properties__clip-path"}),m,k,l(h,{title:"bevel-corners",slug:"MWmxKaj",tab:"js,result",editable:!0,preview:!0,height:480}),T,l(h,{title:"pie-chart",slug:"yLbwOBp",tab:"js,result",editable:!0,preview:!0,height:480}),l(s,{cssProperty:"mdn-css__properties__animation"}),l(s,{cssProperty:"svg"}),z])}}});export{x as __pageData,P as default};
