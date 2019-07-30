!function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],f=0,d=[];f<i.length;f++)o=i[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(u&&u(e);d.length;)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()}({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9");n.n(r).a},"20f2":function(t,e,n){},"30f0":function(t,e,n){"use strict";var r=n("6407");n.n(r).a},"352c":function(t,e,n){"use strict";var r=n("f73c");n.n(r).a},"4c39":function(t,e,n){"use strict";var r=n("519b");n.n(r).a},"519b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=n("0284"),s=n.n(a),o=n("ecee"),i=n("f2d1"),c=n("c074"),l=n("ad3d"),u=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("img",{staticClass:"profile",attrs:{alt:"Pablo Andrés Dorado Suárez",src:n("d7bd")}})])}],f=n("5118"),d={data:()=>({artist:void 0,title:void 0}),mounted(){Object(f.setInterval)(()=>{this.refresh()},15e3),this.refresh()},methods:{async refresh(){const t=await fetch("/api/lastfm/latest"),{data:e}=await t.json();Object.assign(this,e)}},computed:{playingClass(){return this.playing?"playing":"paused"}}},p=(n("6a34"),n("2877")),m={components:{ListeningTo:Object(p.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"music-player",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[void 0!==t.playing?n("span",{staticClass:"controls",class:t.playingClass},[n("font-awesome-icon",{attrs:{icon:"compact-disc"}})],1):t._e(),n("div",{staticClass:"info"},[n("p",{staticClass:"artist"},[t._v(t._s(t.title))]),n("p",{staticClass:"title"},[t._v(t._s(t.artist))])])])},[],!1,null,"649495ba",null).exports},data:()=>({scrollPosition:null}),mounted(){window.addEventListener("scroll",this.updateScroll)},destroy(){window.removeEventListener("scroll",this.updateScroll)},methods:{updateScroll(){this.scrollPosition=window.scrollY}},computed:{navClass(){return[this.scrollPosition>=.12*window.innerHeight?"floating":"",this.scrollPosition>=.87*window.innerHeight?"full-floating":""].filter(t=>""!==t).join(" ")}}},h={components:{Navigation:(n("e698"),Object(p.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:t.navClass},[t._m(0),n("ListeningTo"),n("div",{staticClass:"links"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("span",[t._v("|")]),n("a",{attrs:{href:"/blog"}},[t._v("Blog")])],1)],1)},u,!1,null,"3d969c5d",null)).exports}},b=(n("034f"),Object(p.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("fragment",[e("navigation"),e("router-view")],1)},[],!1,null,null,null)).exports,v=n("8c4f");window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};class g{static easeOutSine(t){return Math.sin(t*(Math.PI/2))}static easeInOutSine(t){return-.5*(Math.cos(Math.PI*t)-1)}static easeInOutQuint(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}}var w={methods:{scrollToContent(){!function(t=0,e=2e3,n="easeOutSine"){const r=void 0!==window.scrollY?window.scrollY:document.documentElement.scrollTop;!function e(a,s=0){const o=(s+=1/60)/a,i=g[n](o);o<1?(window.requestAnimationFrame(()=>e(a,s)),window.scrollTo(0,r+(t-r)*i)):window.scrollTo(0,t)}(Math.max(.1,Math.min(Math.abs(r-t)/e,.8)))}(window.innerHeight)}}},_=(n("e4d7"),Object(p.a)(w,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"info"},[r("img",{staticClass:"profile",attrs:{alt:"Pablo Andrés Dorado Suárez",src:n("707c")}}),r("h1",[t._v("Pablo Andrés Dorado Suárez")]),r("h2",[t._v("Development Researcher")]),r("nav",{staticClass:"social"},[r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com/pandres95"}},[r("font-awesome-icon",{attrs:{icon:["fab","facebook-square"]}})],1),r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/pandres95"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter-square"]}})],1),r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/pandres95"}},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/pandres95"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1),r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/pandres95"}},[r("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://gitlab.com/pandres95"}},[r("font-awesome-icon",{attrs:{icon:["fab","gitlab"]}})],1)])]),r("img",{staticClass:"scroll",attrs:{src:n("8609")},on:{click:t.scrollToContent}})])},[],!1,null,"285f7e88",null)).exports,y={props:{columns:{type:Number,value:3}}},k=(n("7bc0"),Object(p.a)(y,function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{class:"grid columns-"+t.columns},[t._t("default")],2)},[],!1,null,"33019c41",null)).exports,C={props:{href:{type:String,default:()=>"#"},background:{type:String}}},j={data:()=>({posts:[]}),components:{Card:(n("30f0"),Object(p.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("img",{staticClass:"background",attrs:{src:t.background,alt:"Card"}}),n("div",{staticClass:"headings"},[n("a",{staticClass:"headings-title",attrs:{href:t.href}},[t._t("title")],2),n("div",{staticClass:"headings-description"},[t._t("description")],2)])])},[],!1,null,"08d32a2b",null)).exports},mounted(){this.fetchTalks()},methods:{async fetchTalks(){const t=new URL("/blog/ghost/api/v2/content/posts",document.baseURI);t.searchParams.append("key","624142b2a43a89a02603ee1f55"),t.searchParams.append("filter","tag:talks"),t.searchParams.append("fields","id,title,custom_excerpt,feature_image,url"),t.searchParams.append("limit","2");const e=await fetch(t.toString()),{posts:n=[]}=await e.json();this.posts=n},renderDescription:(t="")=>t.replace("\n","<br />")}},O=(n("4c39"),Object(p.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},t._l(t.posts,function(e){return n("card",{key:e.id,attrs:{href:e.url,background:e.feature_image},scopedSlots:t._u([{key:"title",fn:function(){return[n("h3",[t._v(t._s(e.title))])]},proxy:!0},{key:"description",fn:function(){return[n("p",{domProps:{innerHTML:t._s(t.renderDescription(e.custom_excerpt))}})]},proxy:!0}],null,!0)})}),1)},[],!1,null,"519124c2",null)).exports,x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"host"},[r("span",[t._v("Proudly hosted by")]),r("img",{staticClass:"host-logo",attrs:{src:n("b5f4")}})])}],P=(n("c084"),{}),S={name:"home",components:{Hero:_,Grid:k,LatestTalks:O,Footer:Object(p.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",{staticClass:"copy"},[t._v("© "+t._s((new Date).getFullYear())+" Pablo Andrés Dorado Suárez")]),t._m(0)])},x,!1,null,"07bb84e2",null).exports}},T=(n("352c"),Object(p.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("hero"),n("main",[n("section",[n("div",{staticClass:"column talks"},[n("h2",[t._v("Latest Talks")]),n("LatestTalks")],1),n("div",{staticClass:"column projects"},[n("h2",[t._v("Projects I'm currently working on")]),n("grid",{attrs:{columns:1}},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://bool.js.org/"}},[n("img",{staticClass:"project",attrs:{src:"https://bool.js.org/img/booljs.svg"}})])])],1)])]),n("Footer")],1)},[],!1,null,"2e0e7bc6",null)).exports;r.a.use(v.a);var E=new v.a({mode:"history",base:"/",routes:[{path:"/",name:"home",component:T}]}),M=n("2f62");r.a.use(M.a);var $=new M.a.Store({state:{},mutations:{},actions:{}}),A=n("9483");Object(A.a)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(t){}}),o.c.add(c.a,i.a,i.f,i.d,i.e,i.b,i.c),r.a.component("font-awesome-icon",l.a),r.a.use(s.a,{id:"UA-106396384-2",checkDuplicatedScript:!0,router:E}),r.a.config.productionTip=!1,new r.a({router:E,store:$,render:function(t){return t(b)}}).$mount("#app")},"5b17":function(t,e,n){},6407:function(t,e,n){},"64a9":function(t,e,n){},"6a34":function(t,e,n){"use strict";var r=n("d04d");n.n(r).a},"707c":function(t,e,n){t.exports=n.p+"img/profile.ef91eebd.jpg"},"7bc0":function(t,e,n){"use strict";var r=n("5b17");n.n(r).a},8609:function(t,e,n){t.exports=n.p+"img/btn-scroll_down.6eae999e.svg"},"8a93":function(t,e,n){},a8cc:function(t,e,n){},b5f4:function(t,e,n){t.exports=n.p+"img/host.341b42ea.svg"},c084:function(t,e,n){"use strict";var r=n("a8cc");n.n(r).a},d04d:function(t,e,n){},d7bd:function(t,e,n){t.exports=n.p+"img/sign.233a0d4d.svg"},e4d7:function(t,e,n){"use strict";var r=n("8a93");n.n(r).a},e698:function(t,e,n){"use strict";var r=n("20f2");n.n(r).a},f73c:function(t,e,n){}});