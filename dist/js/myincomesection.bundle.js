!function(n){var s={};function e(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=s,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(i,t){if(1&t&&(i=e(i)),8&t)return i;if(4&t&&"object"==typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var s in i)e.d(n,s,function(t){return i[t]}.bind(null,s));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=232)}({0:function(t,i){t.exports=Vue},148:function(t,i,n){"use strict";var s=n(64);n.n(s).a},2:function(t,i,n){"use strict";function s(t,i,n,s,e,a,o,r){var c,u="function"==typeof t?t.options:t;if(i&&(u.render=i,u.staticRenderFns=n,u._compiled=!0),s&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):e&&(c=r?function(){e.call(this,this.$root.$options.shadowRoot)}:e),c)if(u.functional){u._injectStyles=c;var m=u.render;u.render=function(t,i){return c.call(i),m(t,i)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(i,"a",function(){return s})},232:function(t,i,n){"use strict";n.r(i);function s(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",[s("div",{staticClass:"mitem one",attrs:{id:"tou"}},[s("span",[n._v(n._s(n.years)+"年"+n._s(n.month)+"月")]),n._v(" "),s("div",{staticClass:"mitem two",style:n.showsai?"color:#F72133":"",on:{click:n.showsais}},[s("span",[n._v("筛选")]),n._v(" "),s("i",{staticClass:"iconfont icon-triangle-bottom",class:n.showsai?"xuanzuan":""})])]),n._v(" "),s("div",[n.showsai?s("div",{staticClass:"zhezhao",style:{top:n.touheight+"px"},on:{click:n.showsais}}):n._e(),n._v(" "),s("div",{staticClass:"mitem shaixuan",style:{top:n.xiahuag+"px"}},[s("div",{staticClass:"xuanul",on:{click:function(t){return n.xuanze(0)}}},[s("div",{staticClass:"xuanli",class:0==n.commisiontype?"xuactive":""},[n._v("全部")])]),n._v(" "),n._l(n.typeData,function(i){return s("div",{key:i.commisiontype,staticClass:"xuanul",on:{click:function(t){return n.xuanze(i.commisiontype)}}},[s("div",{staticClass:"xuanli",class:n.commisiontype==i.commisiontype?"xuactive":""},[n._v(n._s(i.commisiontypename))])])})],2)]),n._v(" "),n._l(n.msgdata,function(t){return n.msgdata&&0<n.msgdata.length?s("div",{key:t.commisionid,staticClass:"waibox"},[s("div",{staticClass:"mitem xiangqing"},[s("span",[n._v("奖励金额")]),n._v(" "),s("span",[n._v("¥"+n._s(t.commision))])]),n._v(" "),s("div",{staticClass:"mitem xiangqing"},[s("span",[n._v("奖励类型")]),n._v(" "),s("span",[n._v(n._s(t.commisiontypename))])]),n._v(" "),s("div",{staticClass:"mitem xiangqing"},[s("span",[n._v("奖励状态")]),n._v(" "),1==t.status?s("span",[n._v("即将到账")]):n._e(),n._v(" "),2==t.status?s("span",[n._v("已到账")]):n._e(),n._v(" "),3==t.status?s("span",[n._v("已失效")]):n._e()]),n._v(" "),5!=t.commisiontype&&7!=t.commisiontype&&8!=t.commisiontype&&10!=t.commisiontype&&14!=t.commisiontype&&13!=t.commisiontype?s("div",[null!=t.orderid?s("div",{staticClass:"mitem xiangqing"},[s("span",[n._v("订单编号")]),n._v(" "),s("span",[n._v(n._s(t.orderid))])]):n._e(),n._v(" "),s("div",{staticClass:"mitem xiangqing"},[s("span",[n._v("订单金额")]),n._v(" "),s("span",[n._v("¥"+n._s(t.orderamount))])]),n._v(" "),s("div",{staticClass:"mitem xiangqing"},[s("span",[n._v("订单时间")]),n._v(" "),s("span",[n._v(n._s(t.ordertime))])])]):s("div",[""!=t.commisionactivitytype?s("div",{staticClass:"mitem xiangqing"},[s("span",[n._v("奖励来源")]),n._v(" "),s("span",[n._v(n._s(t.commisionactivitytype))])]):n._e()]),n._v(" "),2==t.status?s("div",{staticClass:"mitem xiangqing"},[s("span",[n._v("到账时间")]),n._v(" "),s("span",[n._v(n._s(t.successtime))])]):n._e()]):n._e()}),n._v(" "),0==n.msgdata.length?s("div",{staticClass:"nodata"},[s("img",{attrs:{src:"http://source.weigouyi.cn/WShopping/Image/noactivitys.png"}}),n._v(" "),s("div",[n._v("亲,目前没有数据")])]):n._e()],2)}var e=n(0),a=n.n(e);s._withStripped=!0;var o={components:{},props:{},data:function(){return{typeData:"",commisiontype:0,msgdata:[],years:"",month:"",showsai:!1,touheight:0,xiahuag:-600,currentPage:1,stops:!1}},watch:{},computed:{},methods:{bindData:function(){var n=this;https({url:siteUrl+"Main/Member/CommissionDetail",data:{uid:getname(),currentPage:this.currentPage,pageSize:8,type:0,commisiontype:this.commisiontype,year:this.years,month:this.month,devicetype:7},headers:1,successBack:function(t){var i=n;t.success?(n.typeData=t.typeData,1==n.currentPage?n.msgdata=t.Data:1==t.status?n.msgdata=i.msgdata.concat(t.Data):2==t.status&&(n.stops=!0)):promptMsg(t.err)}})},xuanze:function(t){this.currentPage=1,this.commisiontype=t,this.bindData(),this.showsais()},showsais:function(){var t="";t=this.showsai?-600:this.touheight,this.showsai=!this.showsai,this.xiahuag=t}},created:function(){var n=this;this.years=pageParam("years"),this.month=pageParam("month"),window.api&&api.addEventListener({name:"scrolltobottom"},function(t,i){n.stops||(n.currentPage+=1,n.bindData())})},mounted:function(){this.touheight=$api.byId("tou").offsetHeight,this.bindData()}},r=(n(148),n(2)),c=Object(r.a)(o,s,[],!1,null,null,null);c.options.__file="src/page/myincomesection/myincomesection.vue";var u=c.exports;openapp?window.apiready=function(){new a.a({render:function(t){return t(u)}}).$mount("#app")}:new a.a({render:function(t){return t(u)}}).$mount("#app")},64:function(t,i,n){}});