!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=239)}({0:function(t,e){t.exports=Vue},191:function(t,e,n){"use strict";var r=n(79);n.n(r).a},2:function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,a){var c,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,e){return c.call(e),f(t,e)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:s}}n.d(e,"a",function(){return r})},239:function(t,e,n){"use strict";n.r(e);function r(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.tit))]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"cont"},[n("p",{domProps:{innerHTML:t._s(t.content)}})])])}var o=n(0),i=n.n(o);r._withStripped=!0;var u={components:{},props:{},data:function(){return{tit:"",content:""}},watch:{},computed:{},methods:{},created:function(){this.tit=pageParam("tit"),this.content="　　"+pageParam("content")},mounted:function(){}},a=(n(191),n(2)),c=Object(a.a)(u,r,[],!1,null,null,null);c.options.__file="src/page/problemSolution/index.vue";var s=c.exports;openapp?window.apiready=function(){new i.a({render:function(t){return t(s)}}).$mount("#app")}:new i.a({render:function(t){return t(s)}}).$mount("#app")},79:function(t,e,n){}});