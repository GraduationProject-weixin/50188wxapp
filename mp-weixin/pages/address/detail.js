(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/detail"],{"01e1":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement;e._self._c},s=[]},"0208":function(e,t,a){"use strict";a.r(t);var n=a("01e1"),r=a("3101");for(var s in r)"default"!==s&&function(e){a.d(t,e,(function(){return r[e]}))}(s);a("5ee1");var i,u=a("f0c5"),d=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);t["default"]=d.exports},3101:function(e,t,a){"use strict";a.r(t);var n=a("3104"),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},3104:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a,n,r,s,i){try{var u=e[s](i),d=u.value}catch(c){return void a(c)}u.done?t(d):Promise.resolve(d).then(n,r)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function u(e){s(i,n,r,u,d,"next",e)}function d(e){s(i,n,r,u,d,"throw",e)}u(void 0)}))}}var u={data:function(){return{addressData:{addressName:"",addressPhone:"",addressDizhi:"在地图选择",yonghuId:""},id:""}},onLoad:function(t){var a=this;return i(n.default.mark((function r(){var s,i;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s="新增收货地址",!t.id){n.next=10;break}return s="编辑收货地址",a.id=t.id,n.next=6,a.$api.info("address",a.id);case 6:i=n.sent,a.addressData=i.data,a.addressData.addressDizhi=i.data.addressDizhi,2==a.addressData.isdefaultTypes&&(a.addressData.default=!0);case 10:e.setNavigationBarTitle({title:s});case 11:case"end":return n.stop()}}),r)})))()},methods:{switchChange:function(e){e.detail?this.addressData.isdefaultTypes=2:this.addressData.isdefaultTypes=1},chooseLocation:function(){var t=this;e.chooseLocation({success:function(e){t.addressData.addressDizhi=e.address+e.name}})},confirm:function(){var t=this;return i(n.default.mark((function a(){var r;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.addressData,r.yonghuId=e.getStorageSync("userid"),r.addressName){a.next=5;break}return t.$utils.msg("请填写收货人姓名"),a.abrupt("return");case 5:if(t.$validate.isMobile(r.addressPhone)){a.next=8;break}return t.$utils.msg("请输入正确的手机号码"),a.abrupt("return");case 8:if(r.addressDizhi){a.next=11;break}return t.$utils.msg("请在地图选择所在位置"),a.abrupt("return");case 11:if(!t.id){a.next=16;break}return a.next=14,t.$api.update("address",r);case 14:a.next=18;break;case 16:return a.next=18,t.$api.save("address",r);case 18:t.$utils.msgBack("操作成功");case 19:case"end":return a.stop()}}),a)})))()}}};t.default=u}).call(this,a("543d")["default"])},"5ee1":function(e,t,a){"use strict";var n=a("eedd"),r=a.n(n);r.a},eedd:function(e,t,a){},f9a8:function(e,t,a){"use strict";(function(e){a("0f28");n(a("66fd"));var t=n(a("0208"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])}},[["f9a8","common/runtime","common/vendor"]]]);