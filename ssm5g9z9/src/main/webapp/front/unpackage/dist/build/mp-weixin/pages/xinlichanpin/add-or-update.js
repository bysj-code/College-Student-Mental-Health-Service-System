(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xinlichanpin/add-or-update"],{"33fa":function(n,e,t){"use strict";t.r(e);var i=t("d154"),a=t("90c4");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("b0c2");var c,u=t("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6c872b29",null,!1,i["a"],c);e["default"]=o.exports},"75aa":function(n,e,t){},"90c4":function(n,e,t){"use strict";t.r(e);var i=t("bdc2"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},b0c2:function(n,e,t){"use strict";var i=t("75aa"),a=t.n(i);a.a},b505:function(n,e,t){"use strict";(function(n){t("0125");i(t("66fd"));var e=i(t("33fa"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},bdc2:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,c){try{var u=n[r](c),o=u.value}catch(s){return void t(s)}u.done?e(o):Promise.resolve(o).then(i,a)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var c=n.apply(e,t);function u(n){r(c,i,a,u,o,"next",n)}function o(n){r(c,i,a,u,o,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("2fb1"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{ruleForm:{chanpinmingcheng:"",chanpinfenlei:"",chanpintupian:"",chanpinxiangqing:"",price:""},chanpinfenleiOptions:[],chanpinfenleiIndex:0,user:{},ro:{chanpinmingcheng:!1,chanpinfenlei:!1,chanpintupian:!1,chanpinxiangqing:!1,price:!1}}},components:{wPicker:u},computed:{},onLoad:function(e){var t=this;return c(i.default.mark((function a(){var r,c,u,o;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=n.getStorageSync("nowTable"),a.next=3,t.$api.session(r);case 3:return c=a.sent,t.user=c.data,a.next=7,t.$api.option("chanpinfenlei","chanpinfenlei",{});case 7:if(c=a.sent,t.chanpinfenleiOptions=c.data,t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){a.next=17;break}return t.ruleForm.id=e.id,a.next=15,t.$api.info("xinlichanpin",t.ruleForm.id);case 15:c=a.sent,t.ruleForm=c.data;case 17:if(!e.cross){a.next=44;break}u=n.getStorageSync("crossObj"),a.t0=i.default.keys(u);case 20:if((a.t1=a.t0()).done){a.next=44;break}if(o=a.t1.value,"chanpinmingcheng"!=o){a.next=26;break}return t.ruleForm.chanpinmingcheng=u[o],t.ro.chanpinmingcheng=!0,a.abrupt("continue",20);case 26:if("chanpinfenlei"!=o){a.next=30;break}return t.ruleForm.chanpinfenlei=u[o],t.ro.chanpinfenlei=!0,a.abrupt("continue",20);case 30:if("chanpintupian"!=o){a.next=34;break}return t.ruleForm.chanpintupian=u[o],t.ro.chanpintupian=!0,a.abrupt("continue",20);case 34:if("chanpinxiangqing"!=o){a.next=38;break}return t.ruleForm.chanpinxiangqing=u[o],t.ro.chanpinxiangqing=!0,a.abrupt("continue",20);case 38:if("price"!=o){a.next=42;break}return t.ruleForm.price=u[o],t.ro.price=!0,a.abrupt("continue",20);case 42:a.next=20;break;case 44:t.styleChange();case 45:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},chanpinfenleiChange:function(n){this.chanpinfenleiIndex=n.target.value,this.ruleForm.chanpinfenlei=this.chanpinfenleiOptions[this.chanpinfenleiIndex]},chanpintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.chanpintupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return c(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.price){e.next=3;break}return n.$utils.msg("价格不能为空"),e.abrupt("return");case 3:if(!n.ruleForm.price||n.$validate.isNumber(n.ruleForm.price)){e.next=6;break}return n.$utils.msg("价格应输入数字"),e.abrupt("return");case 6:if(!n.ruleForm.id){e.next=11;break}return e.next=9,n.$api.update("xinlichanpin",n.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,n.$api.add("xinlichanpin",n.ruleForm);case 13:n.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,t("543d")["default"])},d154:function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}));var a=function(){var n=this,e=n.$createElement;n._self._c},r=[]}},[["b505","common/runtime","common/vendor"]]]);