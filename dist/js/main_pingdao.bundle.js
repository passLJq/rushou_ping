!function(n){var i={};function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=247)}({0:function(t,e){t.exports=Vue},1:function(t,e,n){"use strict";var i=n(0),r=n.n(i),o="--";function s(t,e,n){return e?t+n+e:t}function a(n){return function(t,e){return t&&"string"!=typeof t&&(e=t,t=""),t=s(n,t,"__"),e?[t,function e(n,i){if("string"==typeof i)return s(n,i,o);if(Array.isArray(i))return i.map(function(t){return e(n,t)});var r={};return i&&Object.keys(i).forEach(function(t){r[n+o+t]=i[t]}),r}(t,e)]:t}}Object.prototype.hasOwnProperty;var u=r.a.prototype,c=r.a.util.defineReactive;c(u,"$vantLang","zh-CN"),c(u,"$vantMessages",{"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",confirmDelete:"确定要删除么",telInvalid:"请填写正确的电话",vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{valid:"有效期",unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"使用优惠",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠",enable:"可使用优惠券",disabled:"不可使用优惠券",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}}});var l=function(){return u.$vantMessages[u.$vantLang]},d={methods:{slots:function(t,e){void 0===t&&(t="default");var n=this.$slots,i=this.$scopedSlots;return i[t]?i[t](e):n[t]}}},h={type:Array,default:function(){return[]}},f={type:Number,default:0};function p(t){var e=this.name;t.component(e,this),t.component(E("-"+e),this)}function v(n){return{functional:!0,props:n.props,model:n.model,render:function(t,e){return n(t,e.props,function(t){var e=t.scopedSlots||t.data.scopedSlots||{},n=t.slots();return Object.keys(n).forEach(function(t){e[t]||(e[t]=function(){return n[t]})}),e}(e),e)}}}function g(e){return function(t){return"function"==typeof t&&(t=v(t)),t.functional||(t.mixins=t.mixins||[],t.mixins.push(d)),t.props&&function(e){Object.keys(e).forEach(function(t){e[t]===Array?e[t]=h:e[t]===Number&&(e[t]=f)})}(t.props),t.name=e,t.install=p,t}}function m(t){return[g(t="van-"+t),a(t),function(t){var o=E(t)+".";return function(t){for(var e=_(l(),o+t)||_(l(),t),n=arguments.length,i=new Array(1<n?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,i):e}}(t)]}n.d(e,"e",function(){return b}),n.d(e,"c",function(){return y}),n.d(e,"d",function(){return w}),n.d(e,"b",function(){return _}),n.d(e,"a",function(){return E}),n.d(e,"f",function(){return m});var b=r.a.prototype.$isServer;function y(t){return null!=t}function w(t){var e=typeof t;return null!==t&&("object"==e||"function"==e)}function _(t,e){var n=e.split("."),i=t;return n.forEach(function(t){i=y(i[t])?i[t]:""}),i}var L=/-(\w)/g;function E(t){return t.replace(L,function(t,e){return e.toUpperCase()})}},136:function(t,e,n){"use strict";var i=n(58);n.n(i).a},16:function(t,e,n){"use strict";var i=n(1),r=n(3),o=n(7),s=Object(i.f)("swipe"),a=s[0],u=s[1];e.a=a({mixins:[o.a],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,initialSwipe:Number,indicatorColor:String,loop:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},mounted:function(){this.initialize(),this.$isServer||Object(r.b)(window,"resize",this.onResize,!0)},activated:function(){this.rendered&&this.initialize(),this.rendered=!0},destroyed:function(){this.clear(),this.$isServer||Object(r.a)(window,"resize",this.onResize,!0)},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",n=this.vertical?"width":"height";return(t={})[e]=this.trackSize+"px",t[n]=this[n]?this[n]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var e=this.$el.getBoundingClientRect();this.computedWidth=this.width||e.width,this.computedHeight=this.height||e.height}this.swiping=!0,this.active=t,this.offset=1<this.count?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(t.preventDefault(),t.stopPropagation(),this.move({offset:Math.min(Math.max(this.delta,-this.size),this.size)})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:0<t?0<this.delta?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},move:function(t){var e=t.pace,n=void 0===e?0:e,i=t.offset,r=void 0===i?0:i,o=t.emitChange,s=this.delta,a=this.active,u=this.count,c=this.swipes,l=this.trackSize,d=0===a,h=a===u-1;!this.loop&&(d&&(0<r||n<0)||h&&(r<0||0<n))||u<=1||(c[0]&&(c[0].offset=h&&(s<0||0<n)?l:0),c[u-1]&&(c[u-1].offset=d&&(0<s||n<0)?-l:0),n&&-1<=a+n&&a+n<=u&&(this.active+=n,o&&this.$emit("change",this.activeIndicator)),this.offset=Math.round(r-this.active*this.size))},swipeTo:function(t){var e=this;this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),setTimeout(function(){e.swiping=!1,e.move({pace:t%e.count-e.active,emitChange:!0})},30)},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e&&1<this.count&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),setTimeout(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()},30)},e))}},render:function(n){var i=this,t=this.count,r=this.activeIndicator,e=this.slots("indicator")||this.showIndicators&&1<t&&n("div",{class:u("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(t)).map(function(t,e){return n("i",{class:u("indicator",{active:e===r}),style:e===r?i.indicatorStyle:null})})]);return n("div",{class:u()},[n("div",{ref:"track",style:this.trackStyle,class:u("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),e])}})},17:function(t,e,n){"use strict";var s=n(8),i=n(1),r=Object(i.f)("swipe-item"),o=r[0],a=r[1];e.a=o({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var e=this.$parent,n=e.vertical,i=e.computedWidth,r=e.computedHeight,o={width:i+"px",height:n?r+"px":"100%",transform:"translate"+(n?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:a(),style:o,on:Object(s.a)({},this.$listeners)},[this.slots()])}})},2:function(t,e,n){"use strict";function i(t,e,n,i,r,o,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},22:function(t,e,n){t.exports=n.p+"img/nodata.png"},23:function(t,e,n){"use strict";n(5),n(24)},24:function(t,e,n){},247:function(t,e,r){"use strict";r.r(e);r(23);function n(){var n=this,t=n.$createElement,i=n._self._c||t;return i("section",[i("van-swipe",{attrs:{autoplay:5e3},on:{change:n.onChange}},[n._l(n.urldata,function(e){return i("van-swipe-item",{key:e.soure},[i("img",{attrs:{src:e.soure},on:{click:function(t){return n.gogoundpro(e.gbid,e.pid)}}})])}),n._v(" "),i("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[i("div",{staticClass:"dianitem"},n._l(n.urldata,function(t,e){return i("div",{key:t.soure,staticClass:"writedian",style:n.current==e?"background-color:rgba(255,85,65,0.5); border-radius: 4px;width:16px":""})}),0)])],2),n._v(" "),i("div",{staticClass:"bigtitle"},[i("p",[n._v(n._s(n.titles))]),n._v(" "),i("p",[n._v("呼朋唤友一起拼")])]),n._v(" "),n._l(n.data,function(e,t){return i("div",{key:t,staticClass:"probox",on:{click:function(t){return n.gogoundpro(e.gbid,e.pid)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.propic,expression:"item.propic"}],staticClass:"proimg",attrs:{alt:""}}),n._v(" "),i("div",{staticClass:"pro_right"},[i("p",{staticClass:"pro_title"},[i("span",{staticClass:"ping"},[n._v(n._s(e.gbuynum)+"人拼团")]),n._v("\r\n            "+n._s(e.title)+"\r\n            ")]),n._v(" "),i("div",{staticClass:"pro_main"},[i("p",{staticClass:"proshou"},[n._v("已售"+n._s(e.count)+"件")])]),n._v(" "),i("div",{staticClass:"pro_price"},[i("p",{staticClass:"pro_pricetile"},[i("span",[n._v("¥"+n._s(e.gbprice))]),n._v("原价"+n._s(e.proprice))]),n._v(" "),i("p",{staticClass:"goping"},[n._v("去拼团")])])])])}),n._v(" "),0==n.data.length?i("div",{staticClass:"nodata"},[i("img",{attrs:{src:r(22),alt:""}}),n._v(" "),i("p",[n._v("暂时没有数据")])]):n._e()],2)}var i=r(16),o=(r(25),r(17)),s=r(0),a=r.n(s);n._withStripped=!0;var u={components:{},props:{},data:function(){return{data:[],urldata:[],currpage:1,current:0,stopload:!1,titles:""}},watch:{},computed:{},methods:{binddata:function(){var e=this;https({url:siteUrl+"Main/Main/GetAllGBListJson",data:{currpage:e.currpage,pagesize:5,gbclassid:pageParam("classid")},successBack:function(t){t.success&&1==t.status?1==e.currpage?(e.stopload=!1,e.data=t.Data):e.data=e.data.concat(t.Data):t.success&&0==t.status?(e.stopload=!0,1==e.currpage&&(e.data=t.Data)):promptMsg(t.err),refreshDone()}})},urlist:function(){var e=this;https({url:siteUrl+"Marketing/Groupbuy/GetGroupbuyBoot",successBack:function(t){t.success&&1==t.status?0<t.Data.length?e.urldata=t.Data:e.urldata=[{soure:"https://images.rushouvip.cn/IMG/tuan_banner.png",gbid:"",pid:""}]:promptMsg(t.err)}})},onChange:function(t){this.current=t},gogoundpro:function(t,e){openWin({name:"new_lndianaDetail"+t,url:"./new_lndianaDetail.html",pageParam:{gbid:t,pid:e,title:"拼团详情"}},1)}},created:function(){this.titles=pageParam("name")},mounted:function(){if(this.urlist(),this.binddata(),window.api){var n=this;api.addEventListener({name:"scrolltobottom"},function(t,e){n.stopload||(n.currpage=n.currpage+1,n.binddata())}),api.setCustomRefreshHeaderInfo({bgColor:"#fff",images:["widget://image/suaxin1.png","widget://image/suaxin2.png","widget://image/suaxin3.png","widget://image/suaxin4.png","widget://image/suaxin5.png","widget://image/suaxin6.png","widget://image/suaxin7.png"],tips:{pull:"下拉刷新",threshold:"松开立即刷新",load:"正在刷新"}},function(){setTimeout(function(){n.currpage=1,n.binddata()},1e3)})}}},c=(r(136),r(2)),l=Object(c.a)(u,n,[],!1,null,null,null);l.options.__file="src/page/main_pingdao/index.vue";var d=l.exports,h=r(6),f=r.n(h);a.a.use(f.a,{throttleWait:200,loading:"./image/bkg_cover.jpg",error:"./image/bkg_cover.jpg"}),a.a.use(i.a).use(o.a);openapp?window.apiready=function(){new a.a({render:function(t){return t(d)}}).$mount("#app")}:new a.a({render:function(t){return t(d)}}).$mount("#app")},25:function(t,e,n){"use strict";n(5),n(26)},26:function(t,e,n){},3:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return a});var r=n(1),o=!1;if(!r.e)try{var i={};Object.defineProperty(i,"passive",{get:function(){o=!0}}),window.addEventListener("test-passive",null,i)}catch(t){}function s(t,e,n,i){void 0===i&&(i=!1),r.e||t.addEventListener(e,n,!!o&&{capture:!1,passive:i})}function a(t,e,n){r.e||t.removeEventListener(e,n)}},5:function(t,e,n){},58:function(t,e,n){},6:function(t,e,n){
/*!
 * Vue-Lazyload.js v1.2.6
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
t.exports=function(){"use strict";function s(t){t=t||{};var e=arguments.length,n=0;if(1===e)return t;for(;++n<e;){var i=arguments[n];h(t)&&(t=i),a(i)&&r(t,i)}return t}function r(t,e){for(var n in f(t,e),e)if("__proto__"!==n&&(r=e,o=n,Object.prototype.hasOwnProperty.call(r,o))){var i=e[n];a(i)?("undefined"===p(t[n])&&"function"===p(i)&&(t[n]=i),t[n]=s(t[n]||{},i)):t[n]=i}var r,o;return t}function a(t){return"object"===p(t)||"function"===p(t)}function o(t,e){if(t.length){var n=t.indexOf(e);return-1<n?t.splice(n,1):void 0}}function d(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var n=t.getAttribute("data-srcset"),i=[],r=t.parentNode,o=r.offsetWidth*e,s=void 0,a=void 0,u=void 0;(n=n.trim().split(",")).map(function(t){t=t.trim(),s=t.lastIndexOf(" "),u=-1===s?(a=t,999998):(a=t.substr(0,s),parseInt(t.substr(s+1,t.length-s-2),10)),i.push([u,a])}),i.sort(function(t,e){if(t[0]<e[0])return-1;if(t[0]>e[0])return 1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0});for(var c="",l=void 0,d=i.length,h=0;h<d;h++)if((l=i[h])[0]>=o){c=l[1];break}return c}}function u(t,e){for(var n=void 0,i=0,r=t.length;i<r;i++)if(e(t[i])){n=t[i];break}return n}function l(){}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),h=function(t){return null==t||"function"!=typeof t&&"object"!==(void 0===t?"undefined":c(t))},f=function(t,e){if(null==t)throw new TypeError("expected first argument to be an object.");if(void 0===e||"undefined"==typeof Symbol)return t;if("function"!=typeof Object.getOwnPropertySymbols)return t;for(var n=Object.prototype.propertyIsEnumerable,i=Object(t),r=arguments.length,o=0;++o<r;)for(var s=Object(arguments[o]),a=Object.getOwnPropertySymbols(s),u=0;u<a.length;u++){var c=a[u];n.call(s,c)&&(i[c]=s[c])}return i},n=Object.prototype.toString,p=function(t){var e=void 0===t?"undefined":c(t);return"undefined"===e?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":"[object RegExp]"===(e=n.call(t))?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":"[object Promise]"===e?"promise":function(t){return t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}(t)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Map Iterator]"===e?"mapiterator":"[object Set Iterator]"===e?"setiterator":"[object String Iterator]"===e?"stringiterator":"[object Array Iterator]"===e?"arrayiterator":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object"},v=s,b="undefined"!=typeof window,i=b&&"IntersectionObserver"in window,y={event:"event",observer:"observer"},w=function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}if(b)return"function"==typeof window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t)}(),g=function(){if(b){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}}(),_={on:function(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]&&arguments[3];g?t.addEventListener(e,n,{capture:i,passive:!0}):t.addEventListener(e,n,i)},off:function(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,n,i)}},L=function(t,e,n){var i=new Image;i.src=t.src,i.onload=function(){e({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src})},i.onerror=function(t){n(t)}},E=function(t,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},k={},C=function(){function c(t){var e=t.el,n=t.src,i=t.error,r=t.loading,o=t.bindType,s=t.$parent,a=t.options,u=t.elRenderer;m(this,c),this.el=e,this.src=n,this.error=i,this.loading=r,this.bindType=o,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=a,this.rect=null,this.$parent=s,this.elRenderer=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return t(c,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(t){this.performanceData[t]=Date.now()}},{key:"update",value:function(t){var e=t.src,n=t.loading,i=t.error,r=this.src;this.src=e,this.loading=n,this.error=i,this.filter(),r!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&0<this.rect.right}},{key:"filter",value:function(){var e=this;(function(t){if(!(t instanceof Object))return[];if(Object.keys)return Object.keys(t);var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e})(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var n=this;L({src:this.loading},function(t){n.render("loading",!1),e()},function(){e(),n.options.silent})}},{key:"load",value:function(){var e=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent,void n()):this.state.loaded||k[this.src]?(this.state.loaded=!0,n(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),L({src:e.src},function(t){e.naturalHeight=t.naturalHeight,e.naturalWidth=t.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),k[e.src]=1,n()},function(t){e.options.silent,e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(t,e){this.elRenderer(this,t,e)}},{key:"performance",value:function(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),c}(),S="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",j=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],z={rootMargin:"0px",threshold:0},x=function(l){return function(){function g(t){var e=t.preLoad,n=t.error,i=t.throttleWait,r=t.preLoadTop,o=t.dispatchEvent,s=t.loading,a=t.attempt,u=t.silent,c=void 0===u||u,l=t.scale,d=t.listenEvents,h=(t.hasbind,t.filter),f=t.adapter,p=t.observer,v=t.observerOptions;m(this,g),this.version="1.2.6",this.mode=y.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:c,dispatchEvent:!!o,throttleWait:i||200,preLoad:e||1.3,preLoadTop:r||0,error:n||S,loading:s||S,attempt:a||3,scale:l||function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;return b&&window.devicePixelRatio||t}(l),ListenEvents:d||j,hasbind:!1,supportWebp:function(){if(!b)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}(),filter:h||{},adapter:f||{},observer:!!p,observerOptions:v||z},this._initEvent(),this.lazyLoadHandler=function(r,o){var s=null,a=0;return function(){if(!s){var t=Date.now()-a,e=this,n=arguments,i=function(){a=Date.now(),s=!1,r.apply(e,n)};o<=t?i():s=setTimeout(i,o)}}}(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?y.observer:y.event)}return t(g,[{key:"config",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};v(this.options,t)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),b&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}},{key:"add",value:function(i,r,o){var s=this;if(function(t,e){for(var n=!1,i=0,r=t.length;i<r;i++)if(e(t[i])){n=!0;break}return n}(this.ListenerQueue,function(t){return t.el===i}))return this.update(i,r),l.nextTick(this.lazyLoadHandler);var t=this._valueFormatter(r.value),a=t.src,u=t.loading,c=t.error;l.nextTick(function(){a=d(i,s.options.scale)||a,s._observer&&s._observer.observe(i);var t=Object.keys(r.modifiers)[0],e=void 0;t&&(e=(e=o.context.$refs[t])?e.$el||e:document.getElementById(t)),e||(e=function(t){if(b){if(!(t instanceof HTMLElement))return window;for(var e=t;e&&e!==document.body&&e!==document.documentElement&&e.parentNode;){if(/(scroll|auto)/.test(E(n=e,"overflow")+E(n,"overflow-y")+E(n,"overflow-x")))return e;e=e.parentNode}return window}var n}(i));var n=new C({bindType:r.arg,$parent:e,el:i,loading:u,error:c,src:a,elRenderer:s._elRenderer.bind(s),options:s.options});s.ListenerQueue.push(n),b&&(s._addListenerTarget(window),s._addListenerTarget(e)),s.lazyLoadHandler(),l.nextTick(function(){return s.lazyLoadHandler()})})}},{key:"update",value:function(e,t){var n=this,i=this._valueFormatter(t.value),r=i.src,o=i.loading,s=i.error;r=d(e,this.options.scale)||r;var a=u(this.ListenerQueue,function(t){return t.el===e});a&&a.update({src:r,loading:o,error:s}),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),this.lazyLoadHandler(),l.nextTick(function(){return n.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(t){t&&(o(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(t){var e=this;i||t!==y.observer||(t=y.event),(this.mode=t)===y.event?(this._observer&&(this.ListenerQueue.forEach(function(t){e._observer.unobserve(t.el)}),this._observer=null),this.TargetQueue.forEach(function(t){e._initListen(t.el,!0)})):(this.TargetQueue.forEach(function(t){e._initListen(t.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===y.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(n){var i=this;this.TargetQueue.forEach(function(t,e){t.el===n&&(--t.childrenCount||(i._initListen(t.el,!1),i.TargetQueue.splice(e,1),t=null))})}},{key:"_initListen",value:function(e,n){var i=this;this.options.ListenEvents.forEach(function(t){return _[n?"on":"off"](e,t,i.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var r=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,e){r.Event.listeners[t]||(r.Event.listeners[t]=[]),r.Event.listeners[t].push(e)},this.$once=function(e,n){var i=r;r.$on(e,function t(){i.$off(e,t),n.apply(i,arguments)})},this.$off=function(t,e){if(e)o(r.Event.listeners[t],e);else{if(!r.Event.listeners[t])return;r.Event.listeners[t].length=0}},this.$emit=function(t,e,n){r.Event.listeners[t]&&r.Event.listeners[t].forEach(function(t){return t(e,n)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,n=[];this.ListenerQueue.forEach(function(t,e){if(!t.state.error&&t.state.loaded)return n.push(t);t.checkInView()&&t.load()}),n.forEach(function(t){return o(e.ListenerQueue,t)})}},{key:"_initIntersectionObserver",value:function(){var e=this;i&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(t,e){var n=this;t.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(t,e,n){if(t.el){var i=t.el,r=t.bindType,o=void 0;switch(e){case"loading":o=t.loading;break;case"error":o=t.error;break;default:o=t.src}if(r?i.style[r]='url("'+o+'")':i.getAttribute("src")!==o&&i.setAttribute("src",o),i.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var s=new w(e,{detail:t});i.dispatchEvent(s)}}}},{key:"_valueFormatter",value:function(t){var e=t,n=this.options.loading,i=this.options.error;return function(t){return null!==t&&"object"===(void 0===t?"undefined":c(t))}(t)&&(t.src||this.options.silent,e=t.src,n=t.loading||this.options.loading,i=t.error||this.options.error),{src:e,loading:n,error:i}}}]),g}()},A=function(){function n(t){var e=t.lazy;m(this,n),((this.lazy=e).lazyContainerMananger=this)._queue=[]}return t(n,[{key:"bind",value:function(t,e,n){var i=new O({el:t,binding:e,vnode:n,lazy:this.lazy});this._queue.push(i)}},{key:"update",value:function(e,t,n){var i=u(this._queue,function(t){return t.el===e});i&&i.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var i=u(this._queue,function(t){return t.el===e});i&&(i.clear(),o(this._queue,i))}}]),n}(),T={selector:"img"},O=function(){function o(t){var e=t.el,n=t.binding,i=t.vnode,r=t.lazy;m(this,o),this.el=null,this.vnode=i,this.binding=n,this.options={},this.lazy=r,this._queue=[],this.update({el:e,binding:n})}return t(o,[{key:"update",value:function(t){var e=this,n=t.el,i=t.binding;this.el=n,this.options=v({},T,i.value),this.getImgs().forEach(function(t){e.lazy.add(t,v({},e.binding,{value:{src:"dataset"in t?t.dataset.src:t.getAttribute("data-src"),error:"dataset"in t?t.dataset.error:t.getAttribute("data-error"),loading:"dataset"in t?t.dataset.loading:t.getAttribute("data-loading")}}),e.vnode)})}},{key:"getImgs",value:function(){return function(t){for(var e=t.length,n=[],i=0;i<e;i++)n.push(t[i]);return n}(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),o}();return{install:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=x(t),i=new n(e),r=new A({lazy:i}),o="2"===t.version.split(".")[0];t.prototype.$Lazyload=i,e.lazyComponent&&t.component("lazy-component",function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return!1===this.show?t(this.tag):t(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){t.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),b&&this.rect.top<window.innerHeight*t.options.preLoad&&0<this.rect.bottom&&this.rect.left<window.innerWidth*t.options.preLoad&&0<this.rect.right},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}}(i)),e.lazyImage&&t.component("lazy-image",function(r){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:r.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src:function(){this.init(),r.addLazyBox(this),r.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,r.addLazyBox(this),r.lazyLoadHandler()},beforeDestroy:function(){r.removeComponent(this)},methods:{init:function(){var t=r._valueFormatter(this.src),e=t.src,n=t.loading,i=t.error;this.state.loaded=!1,this.options.src=e,this.options.error=i,this.options.loading=n,this.renderSrc=this.options.loading},getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),b&&this.rect.top<window.innerHeight*r.options.preLoad&&0<this.rect.bottom&&this.rect.left<window.innerWidth*r.options.preLoad&&0<this.rect.right},load:function(){var n=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l;if(this.state.attempt>this.options.attempt-1&&this.state.error)return r.options.silent,void t();var e=this.options.src;L({src:e},function(t){var e=t.src;n.renderSrc=e,n.state.loaded=!0},function(t){n.state.attempt++,n.renderSrc=n.options.error,n.state.error=!0})}}}}(i)),o?(t.directive("lazy",{bind:i.add.bind(i),update:i.update.bind(i),componentUpdated:i.lazyLoadHandler.bind(i),unbind:i.remove.bind(i)}),t.directive("lazy-container",{bind:r.bind.bind(r),update:r.update.bind(r),unbind:r.unbind.bind(r)})):(t.directive("lazy",{bind:i.lazyLoadHandler.bind(i),update:function(t,e){v(this.vm.$refs,this.vm.$els),i.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){i.remove(this.el)}}),t.directive("lazy-container",{update:function(t,e){r.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){r.unbind(this.el)}}))}}}()},7:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||function(t,e){return e<t&&10<t?"horizontal":t<e&&10<e?"vertical":""}(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}}},8:function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}n.d(e,"a",function(){return i})}});