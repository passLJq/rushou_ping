!function(n){var s={};function i(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=222)}({0:function(t,e){t.exports=Vue},109:function(t,e,n){t.exports=n.p+"img/noaddress.png"},110:function(t,e,n){t.exports=n.p+"img/CombinedShape.png"},111:function(t,e,n){"use strict";var s=n(45);n.n(s).a},2:function(t,e,n){"use strict";function s(t,e,n,s,i,r,a,o){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),s&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return s})},222:function(t,e,i){"use strict";i.r(e);function n(){var n=this,t=n.$createElement,s=n._self._c||t;return s("section",[n._l(n.data,function(e,t){return s("div",{key:e.addressid,staticClass:"listbox",on:{click:function(t){return n.orderin(e.addressid)}}},[s("div",{staticClass:"head"},[s("p",[n._v(n._s(e.name))]),n._v(" "),s("p",[n._v(n._s(e.phone))]),n._v(" "),0==t?s("p",{staticClass:"moren"},[n._v("默认")]):n._e()]),n._v(" "),s("p",{staticClass:"main"},[n._v(n._s(e.listdis)+n._s(e.address))]),n._v(" "),s("div",{staticClass:"foot"},[s("p",{on:{click:function(t){return n.bianji(e.addressid)}}},[n._v("编辑")]),n._v(" "),s("p",{on:{click:function(t){return n.DleRess(e.addressid)}}},[n._v("删除")])])])}),n._v(" "),n.data.length<1?s("div",{staticClass:"nodata"},[s("img",{attrs:{src:i(109),alt:""}}),n._v(" "),s("p",[n._v("您还没有收货地址~")])]):n._e(),n._v(" "),s("div",{staticClass:"btnbox",on:{click:function(t){return n.bianji()}}},[n._m(0)])],2)}var s=i(0),r=i.n(s),a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btns"},[e("img",{attrs:{src:i(110)}}),this._v("新增一个地址\n    ")])}];n._withStripped=!0;var o={components:{},props:{},data:function(){return{data:[]}},watch:{},computed:{},methods:{listdata:function(){var e=this;https({url:siteUrl+"Main/Member/GetAddressList?devicetype=7",data:{uid:getname()},headers:1,successBack:function(t){t.success&&1==t.status?t.Data&&(e.data=t.Data):t.success&&2==t.status||promptMsg(t.err)}})},getCitys:function(){if(!api.readFile({sync:!0,path:"fs://cityes.json"})){showLoading();var n=this;https({url:siteUrl+"Main/Main/GetDistrict",data:{uid:getname()},headers:1,successBack:function(t){if(t.success){var e=n.refull(t.Data);api.writeFile({path:"fs://cityes.json",data:$api.jsonToStr(e)},function(t,e){t.status})}hideLoading()}})}},refull:function(t){for(var e=[],n=[],s=[],i=0;i<t.length;i++)n.push(t[i].name);for(var r=0;r<n.length;r++)-1==e.indexOf(n[r])&&(e.push(n[r]),t[r].sub&&(t[r].sub=this.refull(t[r].sub)),s.push(t[r]));return s},bianji:function(t){openWin({name:"addressdesc",url:"./addressdesc.html",pageParam:{title:"编辑地址",addressid:t||""}},1)},DleRess:function(t){comfirmDialogBox("您确定要删除吗?",this.addressCallBack,t)},addressCallBack:function(t){var e=this;https({url:siteUrl+"Main/Member/DeleteAddress?uid="+getname(),method:"post",data:{addressid:t},headers:1,successBack:function(t){t.success&&1==t.status?(promptMsg("删除成功！"),e.listdata()):promptMsg("删除失败！")}})},orderin:function(t){pageParam("way")&&(api.execScript({name:pageParam("frame_name"),frameName:pageParam("frame_name"),script:"BindAdress('".concat(t,"')")}),setTimeout(function(){api.closeWin()},1e3))}},created:function(){},mounted:function(){this.listdata(),window.api&&this.getCitys();var t=this;window.onshow=function(){t.listdata()}}},c=(i(111),i(2)),u=Object(c.a)(o,n,a,!1,null,null,null);u.options.__file="src/page/addressList/addressList.vue";var d=u.exports;openapp?window.apiready=function(){new r.a({render:function(t){return t(d)}}).$mount("#app")}:new r.a({render:function(t){return t(d)}}).$mount("#app")},45:function(t,e,n){}});