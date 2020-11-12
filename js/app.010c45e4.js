!function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(u&&u(e);p.length;)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),r()}({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9");r.n(n).a},"12fb":function(t,e,r){"use strict";var n=r("8186");r.n(n).a},"20f2":function(t,e,r){},"30f0":function(t,e,r){"use strict";var n=r("6407");r.n(n).a},"4c39":function(t,e,r){"use strict";var n=r("519b");r.n(n).a},"519b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=r("0284"),s=r.n(a),o=r("ecee"),i=r("f2d1"),c=r("c074"),l=r("ad3d"),u=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("img",{staticClass:"profile",attrs:{alt:"Pablo Andrés Dorado Suárez",src:r("d7bd")}})])}],f=r("5118"),p={data:()=>({artist:void 0,title:void 0}),mounted(){Object(f.setInterval)(()=>{this.refresh()},15e3),this.refresh()},methods:{async refresh(){const t=await fetch("/api/lastfm/latest"),{data:e}=await t.json();Object.assign(this,e)}},computed:{playingClass(){return this.playing?"playing":"paused"}}},d=(r("6a34"),r("2877")),m={components:{ListeningTo:Object(d.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"music-player",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[void 0!==t.playing?r("span",{staticClass:"controls",class:t.playingClass},[r("font-awesome-icon",{attrs:{icon:"compact-disc"}})],1):t._e(),r("div",{staticClass:"info"},[r("p",{staticClass:"artist"},[t._v(t._s(t.title))]),r("p",{staticClass:"title"},[t._v(t._s(t.artist))])])])}),[],!1,null,"649495ba",null).exports},data:()=>({scrollPosition:null}),mounted(){window.addEventListener("scroll",this.updateScroll)},destroy(){window.removeEventListener("scroll",this.updateScroll)},methods:{updateScroll(){this.scrollPosition=window.scrollY}},computed:{navClass(){return[this.scrollPosition>=.12*window.innerHeight?"floating":"",this.scrollPosition>=.87*window.innerHeight?"full-floating":""].filter(t=>""!==t).join(" ")}}},h={components:{Navigation:(r("e698"),Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{class:t.navClass},[t._m(0),r("ListeningTo"),r("div",{staticClass:"links"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("span",[t._v("|")]),r("a",{attrs:{href:"/blog"}},[t._v("Blog")])],1)],1)}),u,!1,null,"3d969c5d",null)).exports}},b=(r("034f"),Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("fragment",[e("navigation"),e("router-view")],1)}),[],!1,null,null,null)).exports,g=r("8c4f"),v=[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",{staticClass:"profile"},[e("source",{attrs:{srcset:r("74d7"),type:"image/webp"}}),e("source",{attrs:{srcset:r("707c"),type:"image/jpeg"}}),e("img",{attrs:{alt:"Pablo Andrés Dorado Suárez"}})])}];window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function w(t=0,e=2e3,r="easeOutSine"){const n=void 0!==window.scrollY?window.scrollY:document.documentElement.scrollTop;!function e(a,s=0){const o=(s+=1/60)/a,i=class{static easeOutSine(t){return Math.sin(t*(Math.PI/2))}static easeInOutSine(t){return-.5*(Math.cos(Math.PI*t)-1)}static easeInOutQuint(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}}[r](o);o<1?(window.requestAnimationFrame(()=>e(a,s)),window.scrollTo(0,n+(t-n)*i)):window.scrollTo(0,t)}(Math.max(.1,Math.min(Math.abs(n-t)/e,.8)))}var _={methods:{scrollToContent(){w(window.innerHeight)}}},y=(r("12fb"),Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"info"},[t._m(0),n("h1",[t._v("Pablo Andrés Dorado Suárez")]),n("h2",[t._v("Development Researcher")]),n("nav",{staticClass:"social"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com/pandres95"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook-square"]}})],1),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/pandres95"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter-square"]}})],1),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/pandres95"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/pandres95"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/pandres95"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://gitlab.com/pandres95"}},[n("font-awesome-icon",{attrs:{icon:["fab","gitlab"]}})],1),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://twitch.tv/pandres95"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitch"]}})],1)])]),n("img",{staticClass:"scroll",attrs:{src:r("8609")},on:{click:t.scrollToContent}})])}),v,!1,null,"56a6029a",null)).exports,k={props:{columns:{type:Number,value:3}}},j=(r("7bc0"),Object(d.a)(k,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{class:"grid columns-"+t.columns},[t._t("default")],2)}),[],!1,null,"33019c41",null)).exports,C={props:{href:{type:String,default:()=>"#"},background:{type:String}}},x={data:()=>({posts:[]}),components:{Card:(r("30f0"),Object(d.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("img",{staticClass:"background",attrs:{src:t.background,alt:"Card"}}),r("div",{staticClass:"headings"},[r("a",{staticClass:"headings-title",attrs:{href:t.href}},[t._t("title")],2),r("div",{staticClass:"headings-description"},[t._t("description")],2)])])}),[],!1,null,"08d32a2b",null)).exports},mounted(){this.fetchTalks()},methods:{async fetchTalks(){const t=new URL("/blog/ghost/api/v2/content/posts",document.baseURI);t.searchParams.append("key","624142b2a43a89a02603ee1f55"),t.searchParams.append("filter","tag:talks"),t.searchParams.append("fields","id,title,custom_excerpt,feature_image,url"),t.searchParams.append("limit","2");const e=await fetch(t.toString()),{posts:r=[]}=await e.json();this.posts=r},renderDescription:(t="")=>t.replace("\n","<br />")}},O=(r("4c39"),Object(d.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list"},t._l(t.posts,(function(e){return r("card",{key:e.id,attrs:{href:e.url,background:e.feature_image},scopedSlots:t._u([{key:"title",fn:function(){return[r("h3",[t._v(t._s(e.title))])]},proxy:!0},{key:"description",fn:function(){return[r("p",{domProps:{innerHTML:t._s(t.renderDescription(e.custom_excerpt))}})]},proxy:!0}],null,!0)})})),1)}),[],!1,null,"519124c2",null)).exports,P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"host"},[n("span",[t._v("Proudly hosted by")]),n("img",{staticClass:"host-logo",attrs:{src:r("b5f4")}})])}],S=(r("c084"),{}),T={name:"home",components:{Hero:y,Grid:j,LatestTalks:O,Footer:Object(d.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("p",{staticClass:"copy"},[t._v("© "+t._s((new Date).getFullYear())+" Pablo Andrés Dorado Suárez")]),t._m(0)])}),P,!1,null,"07bb84e2",null).exports}},E=(r("bb1b"),Object(d.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("hero"),n("main",[n("section",[n("div",{staticClass:"column talks"},[n("h2",[t._v("Latest Talks")]),n("LatestTalks")],1),n("div",{staticClass:"column projects"},[n("h2",[t._v("Projects I'm currently working on")]),n("grid",{attrs:{columns:2}},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://bool.js.org/"}},[n("img",{staticClass:"project",attrs:{alt:"BoolJS",src:"https://bool.js.org/img/booljs.svg"}})]),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://podcastless.com/"}},[n("img",{staticClass:"project",attrs:{alt:"Podcastless",src:r("deda")}})])]),n("h2",[t._v("Projects I've previously worked with")]),n("grid",{attrs:{columns:4}},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://theowly.io/"}},[n("img",{staticClass:"project",attrs:{alt:"Agent Owl",src:r("da38")}})]),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://lastfood.co/"}},[n("img",{staticClass:"project",attrs:{alt:"LastFood",src:r("63d5")}})]),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://valiu.com/"}},[n("img",{staticClass:"project",attrs:{alt:"Valiu",src:r("f423")}})]),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://poetri.io/"}},[n("img",{staticClass:"project",attrs:{alt:"Poetri",src:r("ef5a")}})])])],1)])]),n("Footer")],1)}),[],!1,null,"64e0be58",null)).exports;n.a.use(g.a);var M=new g.a({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E}]}),$=r("2f62");n.a.use($.a);var A=new $.a.Store({state:{},mutations:{},actions:{}}),L=r("9483");Object(L.a)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(t){}}),o.c.add(c.a,i.a,i.g,i.d,i.e,i.b,i.c,i.f),n.a.component("font-awesome-icon",l.a),n.a.use(s.a,{id:"UA-106396384-2",checkDuplicatedScript:!0,router:M}),n.a.config.productionTip=!1,new n.a({router:M,store:A,render:function(t){return t(b)}}).$mount("#app")},"5b17":function(t,e,r){},"63d5":function(t,e,r){t.exports=r.p+"img/lastfood.99a1f30e.svg"},6407:function(t,e,r){},"64a9":function(t,e,r){},"6a34":function(t,e,r){"use strict";var n=r("d04d");r.n(n).a},"707c":function(t,e,r){t.exports=r.p+"img/profile.ade9ef3c.jpg"},"74d7":function(t,e,r){t.exports=r.p+"img/profile.9534a214.webp"},"7bc0":function(t,e,r){"use strict";var n=r("5b17");r.n(n).a},8186:function(t,e,r){},8609:function(t,e,r){t.exports=r.p+"img/btn-scroll_down.6eae999e.svg"},a8cc:function(t,e,r){},b5f4:function(t,e,r){t.exports=r.p+"img/host.341b42ea.svg"},bb1b:function(t,e,r){"use strict";var n=r("df53");r.n(n).a},c084:function(t,e,r){"use strict";var n=r("a8cc");r.n(n).a},d04d:function(t,e,r){},d7bd:function(t,e,r){t.exports=r.p+"img/sign.233a0d4d.svg"},da38:function(t,e,r){t.exports=r.p+"img/owl.f19ac562.svg"},deda:function(t,e,r){t.exports=r.p+"img/podcastless.0cdb64be.svg"},df53:function(t,e,r){},e698:function(t,e,r){"use strict";var n=r("20f2");r.n(n).a},ef5a:function(t,e,r){t.exports=r.p+"img/poetri.7fb1ba06.svg"},f423:function(t,e,r){t.exports=r.p+"img/valiu.58b34860.svg"}});