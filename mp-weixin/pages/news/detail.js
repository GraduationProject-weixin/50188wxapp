(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/detail"],{"03ee":function(t,e,n){"use strict";n.r(e);var r=n("9457"),a=n("f1c0");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ac4a");var u,c=n("f0c5"),i=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=i.exports},"0b98":function(t,e,n){},"0cfd":function(t,e,n){"use strict";(function(t){n("0f28");r(n("66fd"));var e=r(n("03ee"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},9457:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},ac4a:function(t,e,n){"use strict";var r=n("0b98"),a=n.n(r);a.a},d28d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,a,o,u){try{var c=t[o](u),i=c.value}catch(s){return void n(s)}c.done?e(i):Promise.resolve(i).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function c(t){o(u,r,a,c,i,"next",t)}function i(t){o(u,r,a,c,i,"throw",t)}c(void 0)}))}}var c={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return u(r.default.mark((function e(){var a,o,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),a=t.getStorageSync("nowTable"),e.next=4,n.$api.session(a);case 4:o=e.sent,n.user=o.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),u=t.getStorageSync("pingluenStateState"),u&&(t.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},init:function(){var t=this;return u(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("news",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.newsPhoto?t.detail.newsPhoto.split(","):[];case 5:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return u(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.mescroll.endByPage(e.mescroll.num,10);case 1:case"end":return t.stop()}}),t)})))()}}};e.default=c}).call(this,n("543d")["default"])},f1c0:function(t,e,n){"use strict";n.r(e);var r=n("d28d"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a}},[["0cfd","common/runtime","common/vendor"]]]);