!function(n){var s={};function r(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=254)}({0:function(e,t){e.exports=Vue},125:function(e,t,n){"use strict";var s=n(54);n.n(s).a},2:function(e,t,n){"use strict";function s(e,t,n,s,r,i,a,o){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}n.d(t,"a",function(){return s})},254:function(e,t,n){"use strict";n.r(t);function s(){var n=this,e=n.$createElement,s=n._self._c||e;return s("div",[s("div",{staticClass:"logistics_top_container tops padding24"},[s("p",[s("span",{staticClass:"logistics_left_container color_999"},[n._v("订单编号")]),n._v(" "),s("span",[n._v(n._s(n.orderid))])]),n._v(" "),s("p",[s("span",{staticClass:"logistics_left_container color_999"},[n._v("国内承运人")]),n._v(" "),s("span",[n._v(n._s(n.deliverydata.companyname))])])]),n._v(" "),s("div",{staticClass:"logistics_top_container padding24"},[s("div",{staticClass:"overflow_boxsizing",staticStyle:{"border-bottom":"1px solid #F8F8FB"}},[s("span",{staticClass:"logistics_left_container color_999"},[n._v("物流跟踪")]),n._v(" "),s("span",[n._v(n._s(n.deliverydata.trackno))])])]),n._v(" "),n._l(n.expressjson.result.list,function(e,t){return n.expressjson&&n.expressjson.result&&0<n.expressjson.result.list.length?s("div",{key:t,staticClass:" overflow_boxsizing pd"},[s("div",{staticClass:"flex flex_pack_justify_between list_container"},[s("div",{staticClass:"flex flex_v"},[s("div",{staticClass:"arc_container flex flex_align_center flex_pack_center",class:{isNOFirst:0!=t}},[s("span",{staticClass:"arc_icon"})]),n._v(" "),n._m(0,!0)]),n._v(" "),s("div",{staticClass:"flex_1 flex flex_v flex_pack_justify_between"},[s("span",{style:{color:0!=t?"#999":"#333"}},[n._v(n._s(e.status))]),n._v(" "),s("span",{staticClass:"color_999 font_12 mt10"},[n._v(n._s(e.time))])])])]):n._e()})],2)}var r=n(0),i=n.n(r);s._withStripped=!0;var a={components:{},props:{},data:function(){return{orderid:"",deliverydata:"",expressjson:""}},watch:{},computed:{},methods:{},created:function(){var t=this;this.orderid=pageParam("orderid"),https({url:siteUrl+"Main/Member/GetOrderListJson",data:{currpage:1,pagesize:1,uid:getname(),orderid:pageParam("orderid")},headers:1,successBack:function(e){e&&e.success&&1==e.status&&(t.deliverydata=e.Data[0].deliverydata,t.expressjson=e.Data[0].deliverydata&&e.Data[0].deliverydata.expressjson?JSON.parse(e.Data[0].deliverydata.expressjson):"")}})},mounted:function(){}},o=(n(125),n(2)),c=Object(o.a)(a,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex flex_pack_center flex_1 ff"},[t("span",{staticStyle:{height:"100%",width:"1px","background-color":"#F7F7FA"}})])}],!1,null,null,null);c.options.__file="src/page/logisticsdetail/logisticsdetail.vue";var l=c.exports;openapp?window.apiready=function(){new i.a({render:function(e){return e(l)}}).$mount("#app")}:new i.a({render:function(e){return e(l)}}).$mount("#app")},54:function(e,t,n){}});