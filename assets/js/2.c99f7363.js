(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{247:function(t,e,n){"use strict";var i=n(10),r=n(66)(3);i(i.P+i.F*!n(47)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},249:function(t,e,n){},250:function(t,e,n){},251:function(t,e,n){},252:function(t,e,n){},253:function(t,e,n){},254:function(t,e,n){},255:function(t,e,n){},256:function(t,e,n){},257:function(t,e,n){},258:function(t,e,n){},259:function(t,e,n){},260:function(t,e,n){},261:function(t,e,n){},263:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},264:function(t,e,n){"use strict";var i=n(14),r=n(33),s=n(265),a=n(266);n(267)("match",1,function(t,e,n,o){return[function(n){var i=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var l=i(t),u=String(this);if(!l.global)return a(l,u);var c=l.unicode;l.lastIndex=0;for(var h,f=[],p=0;null!==(h=a(l,u));){var d=String(h[0]);f[p]=d,""===d&&(l.lastIndex=s(u,r(l.lastIndex),c)),p++}return 0===p?null:f}]})},265:function(t,e,n){"use strict";var i=n(143)(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},266:function(t,e,n){"use strict";var i=n(98),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var s=n.call(t,e);if("object"!=typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},267:function(t,e,n){"use strict";n(281);var i=n(32),r=n(22),s=n(30),a=n(31),o=n(3),l=n(268),u=o("species"),c=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=o(t),p=!s(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=p?!s(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e}):void 0;if(!p||!d||"replace"===t&&!c||"split"===t&&!h){var v=/./[f],g=n(a,f,""[t],function(t,e,n,i,r){return e.exec===l?p&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=g[0],b=g[1];i(String.prototype,t,m),r(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},268:function(t,e,n){"use strict";var i,r,s=n(269),a=RegExp.prototype.exec,o=String.prototype.replace,l=a,u=(i=/a/,r=/b*/g,a.call(i,"a"),a.call(r,"a"),0!==i.lastIndex||0!==r.lastIndex),c=void 0!==/()??/.exec("")[1];(u||c)&&(l=function(t){var e,n,i,r,l=this;return c&&(n=new RegExp("^"+l.source+"$(?!\\s)",s.call(l))),u&&(e=l.lastIndex),i=a.call(l,t),u&&i&&(l.lastIndex=l.global?i.index+i[0].length:e),c&&i&&i.length>1&&o.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i}),t.exports=l},269:function(t,e,n){"use strict";var i=n(14);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},270:function(t,e,n){"use strict";var i=n(14),r=n(65),s=n(33),a=n(64),o=n(265),l=n(266),u=Math.max,c=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(267)("replace",2,function(t,e,n,d){return[function(i,r){var s=t(this),a=null==i?void 0:i[e];return void 0!==a?a.call(i,s,r):n.call(String(s),i,r)},function(t,e){var r=d(n,t,this,e);if(r.done)return r.value;var h=i(t),f=String(this),p="function"==typeof e;p||(e=String(e));var g=h.global;if(g){var m=h.unicode;h.lastIndex=0}for(var b=[];;){var _=l(h,f);if(null===_)break;if(b.push(_),!g)break;""===String(_[0])&&(h.lastIndex=o(f,s(h.lastIndex),m))}for(var x,k="",$=0,C=0;C<b.length;C++){_=b[C];for(var w=String(_[0]),S=u(c(a(_.index),f.length),0),y=[],L=1;L<_.length;L++)y.push(void 0===(x=_[L])?x:String(x));var I=_.groups;if(p){var E=[w].concat(y,S,f);void 0!==I&&E.push(I);var O=String(e.apply(void 0,E))}else O=v(w,f,S,y,I,e);S>=$&&(k+=f.slice($,S)+O,$=S+w.length)}return k+f.slice($)}];function v(t,e,i,s,a,o){var l=i+t.length,u=s.length,c=p;return void 0!==a&&(a=r(a),c=f),n.call(o,c,function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(l);case"<":o=a[r.slice(1,-1)];break;default:var c=+r;if(0===c)return n;if(c>u){var f=h(c/10);return 0===f?n:f<=u?void 0===s[f-1]?r.charAt(1):s[f-1]+r.charAt(1):n}o=s[c-1]}return void 0===o?"":o})}})},272:function(t,e,n){"use strict";n(273)("link",function(t){return function(e){return t(this,"a","href",e)}})},273:function(t,e,n){var i=n(10),r=n(30),s=n(31),a=/"/g,o=function(t,e,n,i){var r=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},274:function(t,e,n){"use strict";var i=n(249);n.n(i).a},275:function(t,e,n){t.exports=n(276)},276:function(t,e,n){n(277),t.exports=n(0).parseInt},277:function(t,e,n){var i=n(1),r=n(278);i(i.G+i.F*(parseInt!=r),{parseInt:r})},278:function(t,e,n){var i=n(2).parseInt,r=n(279).trim,s=n(263),a=/^[-+]?0[xX]/;t.exports=8!==i(s+"08")||22!==i(s+"0x16")?function(t,e){var n=r(String(t),3);return i(n,e>>>0||(a.test(n)?16:10))}:i},279:function(t,e,n){var i=n(1),r=n(68),s=n(17),a=n(263),o="["+a+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var r={},o=s(function(){return!!a[t]()||"​"!="​"[t]()}),l=r[t]=o?e(h):a[t];n&&(r[n]=l),i(i.P+i.F*o,"String",r)},h=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},280:function(t,e,n){"use strict";var i=n(250);n.n(i).a},281:function(t,e,n){"use strict";var i=n(268);n(10)({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},282:function(t,e,n){"use strict";var i=n(10),r=n(140)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(a||!n(47)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},283:function(t,e,n){"use strict";n(146)("trim",function(t){return function(){return t(this,3)}})},284:function(t,e,n){"use strict";var i=n(251);n.n(i).a},285:function(t,e,n){var i=n(5),r=n(144),s=n(23).f,a=n(145).f,o=n(142),l=n(269),u=i.RegExp,c=u,h=u.prototype,f=/a/g,p=/a/g,d=new u(f)!==f;if(n(15)&&(!d||n(30)(function(){return p[n(3)("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")}))){u=function(t,e){var n=this instanceof u,i=o(t),s=void 0===e;return!n&&i&&t.constructor===u&&s?t:r(d?new c(i&&!s?t.source:t,e):c((i=t instanceof u)?t.source:t,i&&s?l.call(t):e),n?this:h,u)};for(var v=function(t){t in u||s(u,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},g=a(c),m=0;g.length>m;)v(g[m++]);h.constructor=u,u.prototype=h,n(32)(i,"RegExp",u)}n(141)("RegExp")},286:function(t,e,n){"use strict";var i=n(252);n.n(i).a},287:function(t,e,n){"use strict";var i=n(253);n.n(i).a},288:function(t,e,n){"use strict";var i=n(254);n.n(i).a},289:function(t,e,n){"use strict";var i=n(255);n.n(i).a},290:function(t,e,n){"use strict";var i=n(256);n.n(i).a},291:function(t,e,n){"use strict";var i=n(257);n.n(i).a},292:function(t,e,n){"use strict";var i=n(258);n.n(i).a},293:function(t,e,n){"use strict";var i=n(259);n.n(i).a},294:function(t,e,n){"use strict";var i=n(260);n.n(i).a},295:function(t,e,n){"use strict";var i=n(261);n.n(i).a},297:function(t,e,n){"use strict";n.r(e);var i=n(44),r=n.n(i);n(247),n(272);const s=/#.*$/,a=/\.(md|html)$/,o=/\/$/,l=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(s,"").replace(a,"")}function c(t){return l.test(t)}function h(t){if(c(t))return t;const e=t.match(s),n=e?e[0]:"",i=u(t);return o.test(i)?t:i+".html"+n}function f(t,e){const n=t.hash,i=function(t){const e=t.match(s);if(e)return e[0]}(e);return(!i||n===i)&&u(t.path)===u(e)}function p(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=u(e);for(let e=0;e<t.length;e++)if(u(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:r,themeConfig:s}=n,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(i))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,i,r){if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function v(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var m={props:{item:{required:!0}},computed:{link:function(){return h(this.item.link)},exact:function(){var t=this;return this.$site.locales?r()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:c,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},b=n(21),_=Object(b.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);_.options.__file="NavLink.vue";var x=_.exports,k={components:{NavLink:x},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},$=(n(274),Object(b.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));$.options.__file="Home.vue";var C=$.exports,w=n(275),S=n.n(w),y=(n(280),Object(b.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));y.options.__file="SidebarButton.vue";var L=y.exports,I=(n(264),n(99),n(119)),E=n.n(I),O=n(29),T=n.n(O),N=(n(282),n(283),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],s=0;s<e.length&&!(r.length>=5);s++){var a=e[s];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(i(a))r.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(r.length>=5);o++){var l=a.headers[o];i(l)&&r.push(T()({},a,{path:a.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=E()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),j=(n(284),Object(b.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null));j.options.__file="SearchBox.vue";var P=j.exports,R=(n(285),n(58)),A=(n(270),n(63),{name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}}),D=(n(286),Object(b.a)(A,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));D.options.__file="DropdownTransition.vue";var U=D.exports,M={components:{NavLink:x,DropdownTransition:U},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},H=(n(287),Object(b.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null));H.options.__file="DropdownLink.vue";var G={components:{NavLink:x,DropdownLink:H.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&r()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:r()(e).map(function(r){var a,o=e[r],l=s[r]&&s[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),i.some(function(t){return t.path===a})||(a=r)),{text:l,link:a}})};return[].concat(Object(R.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return T()(g(t),{items:(t.items||[]).map(g)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},W=(n(288),Object(b.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));W.options.__file="NavLinks.vue";var B=W.exports;function q(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var F={components:{SidebarButton:L,NavLinks:B,SearchBox:P,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=S()(q(this.$el,"paddingLeft"))+S()(q(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},z=(n(289),Object(b.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));z.options.__file="Navbar.vue";var V=z.exports;n(48),n(67);function X(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(R.a)(t.children||[])):i.push(t)});for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var J={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?p(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,X(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?p(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,X(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,a=void 0===s?"master":s,l=t.docsRepo,c=void 0===l?e:l,h=u(this.$page.path);return o.test(h)?h+="README.md":h+=".md",c&&n?this.createEditLink(e,c,r,a,h):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){return/bitbucket.org/.test(t)?(l.test(e)?e:t).replace(o,"")+"/".concat(i)+(n?"/"+n.replace(o,""):"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(l.test(e)?e:"https://github.com/".concat(e)).replace(o,"")+"/edit/".concat(i)+(n?"/"+n.replace(o,""):"")+r}}},Y=(n(290),Object(b.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));Y.options.__file="Page.vue";var K=Y.exports;function Q(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function Z(t,e,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var a=f(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[Q(t,n+"#"+e.slug,e.title,a),Z(t,e.children,n,i,r,s+1)])}))}var tt={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,r=n.$site,a=n.$route,o=e.props.item,l=f(a,o.path),u="auto"===o.type?l||o.children.some(function(t){return f(a,o.basePath+"#"+t.slug)}):l,c=Q(t,o.path,o.title||o.path,u),h=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:r.themeConfig.sidebarDepth,p=null==h?1:h,d=!!r.themeConfig.displayAllHeaders;return"auto"===o.type?[c,Z(t,o.children,o.basePath,a,p)]:(u||d)&&o.headers&&!s.test(o.path)?[c,Z(t,v(o.headers),o.path,a,p)]:c}},et=(n(291),Object(b.a)(tt,void 0,void 0,!1,null,null,null));et.options.__file="SidebarLink.vue";var nt=et.exports,it={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:nt,DropdownTransition:U}},rt=(n(292),Object(b.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null));rt.options.__file="SidebarGroup.vue";var st={components:{SidebarGroup:rt.exports,SidebarLink:nt,NavLinks:B},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return f(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return f(this.$route,t.regularPath)}}},at=(n(293),Object(b.a)(st,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));at.options.__file="Sidebar.vue";var ot={components:{Home:C,Page:K,Sidebar:at.exports,Navbar:V},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return d(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},lt=(n(294),n(295),Object(b.a)(ot,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));lt.options.__file="Layout.vue";e.default=lt.exports}}]);