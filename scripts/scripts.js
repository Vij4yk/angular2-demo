!function(a,b){var c=function(b,c){var h=1===b.nodeType?b:document.querySelector(b),i=[].filter.call(h.children,function(a){return"SCRIPT"!==a.nodeName}),j=i[0],k={},l=function(a,b){i[a]&&(q("deactivate",r(j,b)),j=i[a],i.map(m),q("activate",r(j,b)),f(j,"active"),g(j,"inactive"))},m=function(a,b){var c=b-i.indexOf(j),d=c>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(g.bind(null,a)),a!==j&&["inactive",d,d+"-"+Math.abs(c)].map(f.bind(null,a))},n=function(a,b){return arguments.length?void(q("slide",r(i[a],b))&&l(a,b)):i.indexOf(j)},o=function(a,b){var c=i.indexOf(j)+a;q(a>0?"next":"prev",r(j,b))&&l(c,b)},p=function(a,b){return(k[a]||(k[a]=[])).push(b),function(){k[a]=k[a].filter(function(a){return a!==b})}},q=function(a,b){return(k[a]||[]).reduce(function(a,c){return a&&c(b)!==!1},!0)},r=function(a,b){return b=b||{},b.index=i.indexOf(a),b.slide=a,b},s={on:p,fire:q,slide:n,next:o.bind(null,1),prev:o.bind(null,-1),parent:h,slides:i};f(h,"parent"),i.map(function(a){f(a,"slide")});for(var t in c){if(!e[t])throw Error("Missing plugin: "+a+"-"+t);c[t]!==!1&&e[t](s,c[t])}return l(0),d.push(s),s},d=[],e={},f=function(b,c){b.classList.add(a+"-"+c)},g=function(b,c){b.className=b.className.replace(RegExp(a+"-"+c+"(\\s|$)","g")," ").trim()},h=function(a){return function(){var b=arguments;d.map(function(c){c[a].apply(null,b)})}};b[a]={from:c,slide:h("slide"),next:h("next"),prev:h("prev"),plugins:e}}("bespoke",window),bespoke.plugins.keys=function(a,b){var c=b===!0||"horizontal"==b;document.addEventListener("keydown",function(b){(34==b.which||32==b.which||c&&39==b.which||!c&&40==b.which)&&a.next(),(33==b.which||c&&37==b.which||!c&&38==b.which)&&a.prev()})},bespoke.plugins.touch=function(a,b){var c,d,e=b===!0||"horizontal"==b?"X":"Y";a.parent.addEventListener("touchstart",function(a){1==a.touches.length&&(c=a.touches[0]["page"+e],d=0)}),a.parent.addEventListener("touchmove",function(a){1==a.touches.length&&(a.preventDefault(),d=a.touches[0]["page"+e]-c)}),a.parent.addEventListener("touchend",function(){Math.abs(d)>50&&(d>0?a.prev():a.next())})},function(a){a.plugins.bullets=function(a,b){var c,d,e=a.slides.map(function(a){return[].slice.call(a.querySelectorAll("string"==typeof b?b:"[data-bespoke-bullet]"),0)}),f=function(){var a=c+1;return i(1)?(h(c,d+1),!1):void(e[a]&&h(a,0))},g=function(){var a=c-1;return i(-1)?(h(c,d-1),!1):void(e[a]&&h(a,e[a].length-1))},h=function(a,b){c=a,d=b,e.forEach(function(c,d){c.forEach(function(c,e){c.classList.add("bespoke-bullet"),a>d||d===a&&b>=e?(c.classList.add("bespoke-bullet-active"),c.classList.remove("bespoke-bullet-inactive")):(c.classList.add("bespoke-bullet-inactive"),c.classList.remove("bespoke-bullet-active"))})})},i=function(a){return void 0!==e[c][d+a]};a.on("next",f),a.on("prev",g),a.on("slide",function(a){h(a.index,0)}),h(0,0)}}(bespoke),!function(a){a.plugins.scale=function(a,b){var c=a.parent,d=a.slides[0],e=d.offsetHeight,f=d.offsetWidth,g="zoom"===b||"zoom"in c.style&&"transform"!==b,h=function(a){var b=document.createElement("div");return b.className="bespoke-scale-parent",c.insertBefore(b,a),b.appendChild(a),b},i=g?a.slides:a.slides.map(h),j=function(a){var b="Moz Webkit O ms".split(" ");return b.reduce(function(b,d){return d+a in c.style?d+a:b},a.toLowerCase())}("Transform"),k=g?function(a,b){b.style.zoom=a}:function(a,b){b.style[j]="scale("+a+")"},l=function(){var a=c.offsetWidth/f,b=c.offsetHeight/e;i.forEach(k.bind(null,Math.min(a,b)))};window.addEventListener("resize",l),l()}}(bespoke),function(a){a.plugins.hash=function(a){var b,c=function(){var b=window.location.hash.slice(1),c=parseInt(b,10);b&&(c?d(c-1):a.slides.forEach(function(a,c){a.getAttribute("data-bespoke-hash")===b&&d(c)}))},d=function(c){c!==b&&a.slide(c)};setTimeout(function(){c(),a.on("activate",function(a){var c=a.slide.getAttribute("data-bespoke-hash");window.location.hash=c||a.index+1,b=a.index}),window.addEventListener("hashchange",c)},0)}}(bespoke),!function(a){a.plugins.progress=function(a,b){var c=document.createElement("div"),d=document.createElement("div"),e="vertical"===b?"height":["horizontal",!0].indexOf(b)+1?"width":void 0;e&&(c.className="bespoke-progress-parent",d.className="bespoke-progress-bar",c.appendChild(d),a.parent.appendChild(c),a.on("activate",function(b){d.style[e]=100*b.index/(a.slides.length-1)+"%"}))}}(bespoke),function(a){a.plugins.state=function(a){var b=function(b,c){var d=c.slide.getAttribute("data-bespoke-state");d&&d.split(" ").forEach(function(c){c&&a.parent.classList[b](c)})};a.on("activate",b.bind(null,"add")),a.on("deactivate",b.bind(null,"remove"))}}(bespoke);var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var a=/\blang(?:uage)?-(\w+)\b/i,b=0,c=_self.Prism={util:{encode:function(a){return a instanceof d?new d(a.type,c.util.encode(a.content),a.alias):"Array"===c.util.type(a)?a.map(c.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++b}),a.__id},clone:function(a){var b=c.util.type(a);switch(b){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=c.util.clone(a[e]));return d;case"Array":return a.map&&a.map(function(a){return c.util.clone(a)})}return a}},languages:{extend:function(a,b){var d=c.util.clone(c.languages[a]);for(var e in b)d[e]=b[e];return d},insertBefore:function(a,b,d,e){e=e||c.languages;var f=e[a];if(2==arguments.length){d=arguments[1];for(var g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);return f}var h={};for(var i in f)if(f.hasOwnProperty(i)){if(i==b)for(var g in d)d.hasOwnProperty(g)&&(h[g]=d[g]);h[i]=f[i]}return c.languages.DFS(c.languages,function(b,c){c===e[a]&&b!=a&&(this[b]=h)}),e[a]=h},DFS:function(a,b,d,e){e=e||{};for(var f in a)a.hasOwnProperty(f)&&(b.call(a,f,a[f],d||f),"Object"!==c.util.type(a[f])||e[c.util.objId(a[f])]?"Array"!==c.util.type(a[f])||e[c.util.objId(a[f])]||(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,f,e)):(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,null,e)))}},plugins:{},highlightAll:function(a,b){var d={callback:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",d);for(var e,f=d.elements||document.querySelectorAll(d.selector),g=0;e=f[g++];)c.highlightElement(e,a===!0,d.callback)},highlightElement:function(b,d,e){for(var f,g,h=b;h&&!a.test(h.className);)h=h.parentNode;h&&(f=(h.className.match(a)||[,""])[1].toLowerCase(),g=c.languages[f]),b.className=b.className.replace(a,"").replace(/\s+/g," ")+" language-"+f,h=b.parentNode,/pre/i.test(h.nodeName)&&(h.className=h.className.replace(a,"").replace(/\s+/g," ")+" language-"+f);var i=b.textContent,j={element:b,language:f,grammar:g,code:i};if(c.hooks.run("before-sanity-check",j),!j.code||!j.grammar)return void c.hooks.run("complete",j);if(c.hooks.run("before-highlight",j),d&&_self.Worker){var k=new Worker(c.filename);k.onmessage=function(a){j.highlightedCode=a.data,c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(j.element),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},k.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else j.highlightedCode=c.highlight(j.code,j.grammar,j.language),c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(b),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},highlight:function(a,b,e){var f=c.tokenize(a,b);return d.stringify(c.util.encode(f),e)},tokenize:function(a,b,d){var e=c.Token,f=[a],g=b.rest;if(g){for(var h in g)b[h]=g[h];delete b.rest}a:for(var h in b)if(b.hasOwnProperty(h)&&b[h]){var i=b[h];i="Array"===c.util.type(i)?i:[i];for(var j=0;j<i.length;++j){var k=i[j],l=k.inside,m=!!k.lookbehind,n=!!k.greedy,o=0,p=k.alias;if(n&&!k.pattern.global){var q=k.pattern.toString().match(/[imuy]*$/)[0];k.pattern=RegExp(k.pattern.source,q+"g")}k=k.pattern||k;for(var r=0,s=0;r<f.length;s+=(f[r].matchedStr||f[r]).length,++r){var t=f[r];if(f.length>a.length)break a;if(!(t instanceof e)){k.lastIndex=0;var u=k.exec(t),v=1;if(!u&&n&&r!=f.length-1){if(k.lastIndex=s,u=k.exec(a),!u)break;for(var w=u.index+(m?u[1].length:0),x=u.index+u[0].length,y=r,z=s,A=f.length;A>y&&x>z;++y)z+=(f[y].matchedStr||f[y]).length,w>=z&&(++r,s=z);if(f[r]instanceof e||f[y-1].greedy)continue;v=y-r,t=a.slice(s,z),u.index-=s}if(u){m&&(o=u[1].length);var w=u.index+o,u=u[0].slice(o),x=w+u.length,B=t.slice(0,w),C=t.slice(x),D=[r,v];B&&D.push(B);var E=new e(h,l?c.tokenize(u,l):u,p,u,n);D.push(E),C&&D.push(C),Array.prototype.splice.apply(f,D)}}}}}return f},hooks:{all:{},add:function(a,b){var d=c.hooks.all;d[a]=d[a]||[],d[a].push(b)},run:function(a,b){var d=c.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(b)}}},d=c.Token=function(a,b,c,d,e){this.type=a,this.content=b,this.alias=c,this.matchedStr=d||null,this.greedy=!!e};if(d.stringify=function(a,b,e){if("string"==typeof a)return a;if("Array"===c.util.type(a))return a.map(function(c){return d.stringify(c,b,a)}).join("");var f={type:a.type,content:d.stringify(a.content,b,e),tag:"span",classes:["token",a.type],attributes:{},language:b,parent:e};if("comment"==f.type&&(f.attributes.spellcheck="true"),a.alias){var g="Array"===c.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(f.classes,g)}c.hooks.run("wrap",f);var h="";for(var i in f.attributes)h+=(h?" ":"")+i+'="'+(f.attributes[i]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+h+">"+f.content+"</"+f.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(a){var b=JSON.parse(a.data),d=b.language,e=b.code,f=b.immediateClose;_self.postMessage(c.highlight(e,c.languages[d],d)),f&&_self.close()},!1),_self.Prism):_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(c.filename=e.src,document.addEventListener&&!e.hasAttribute("data-manual")&&("loading"!==document.readyState?requestAnimationFrame(c.highlightAll,0):document.addEventListener("DOMContentLoaded",c.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(b){for(var c,d=b.getAttribute("data-src"),e=b,f=/\blang(?:uage)?-(?!\*)(\w+)\b/i;e&&!f.test(e.className);)e=e.parentNode;if(e&&(c=(b.className.match(f)||[,""])[1]),!c){var g=(d.match(/\.(\w+)$/)||[,""])[1];c=a[g]||g}var h=document.createElement("code");h.className="language-"+c,b.textContent="",h.textContent="Loading…",b.appendChild(h);var i=new XMLHttpRequest;i.open("GET",d,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(h.textContent=i.responseText,Prism.highlightElement(h)):i.status>=400?h.textContent="✖ Error "+i.status+" while fetching file: "+i.statusText:h.textContent="✖ Error: File does not exist or is empty")},i.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}(),bespoke.from("article",{keys:!0,touch:!0,bullets:"li, .bullet",scale:!0,hash:!0,progress:!0,state:!0}),function(){var a,b,c=function(a,b){[].slice.call(a,0).forEach(b)};c(document.styleSheets,function(d){c(d.rules,function(c){c.style&&c.style.backgroundImage&&(a=c.style.backgroundImage.match(/url\((.*)\)/),a&&(b=new Image,b.src=a[1]))})})}();