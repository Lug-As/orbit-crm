(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"crm"},[e("div",{staticClass:"crm__row"},[t._m(0),e("form",{staticClass:"crm__form"},[e("div",{staticClass:"login__row-form-body"},[e("div",{staticClass:"login__row-form-item crm__row-item"},[t._m(1),e("div",{staticClass:"login__row-form-item-input"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],attrs:{type:"text",id:"log",required:""},domProps:{value:t.email},on:{input:function(r){r.target.composing||(t.email=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})])]),e("div",{staticClass:"login__row-form-item crm__row-item"},[t._m(2),e("div",{staticClass:"login__row-form-item-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"crmlogpass",required:""},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value)}}})])])]),e("div",{staticClass:"login__row-form-button crm__row-button"},[e("button",{staticClass:"button-grand-black big",attrs:{type:"submit"},on:{click:function(r){return r.preventDefault(),t.login(r)}}},[t._v(" ВОЙТИ ")])])]),t.loading?e("preloader",{staticClass:"auth-loader",attrs:{height:"100vh"}}):t._e()],1)])},o=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"crm__row-title"},[e("h2",{staticClass:"crm__row-title-h2"},[t._v(" Вход в CRM-систему администратора ")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"login__row-form-item-label"},[e("label",{attrs:{for:"log"}},[t._v(" Логин ")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"login__row-form-item-label"},[e("label",{attrs:{for:"crmlogpass"}},[t._v(" Пароль ")])])}],i=(e("d3b7"),e("498a"),e("d1f4")),s=e("1da1"),n=(e("96cf"),e("bc3a")),l=e.n(n),c=function(t){return l.a.post("login",t)},m={login:function(t){return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,c(t);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}},u=e("f152"),d={name:"Login",title:"Вход администратора",components:{Preloader:u["a"]},data:function(){return{email:"",password:"",loading:!1}},methods:{login:function(){var t=this;this.loading=!0;var r={email:this.email,password:this.password};m.login(r).then((function(t){if(!t.data.token)throw new Error;var r=String(t.data.token).trim();i["a"].setToken(r),location.reload()})).catch((function(r){var e=!0;if(r.response&&r.response.data&&r.response.data.errors&&r.response.data.errors.email&&Array.isArray(r.response.data.errors.email)){var a=r.response.data.errors.email[0];"These credentials do not match our records."===a&&(alert("Данные введены неверно."),e=!1)}e&&(alert("Произошла ошибка отправки формы. Повторите позже."),t.showLogin=!1)})).finally((function(){t.loading=!1}))}}},p=d,_=e("2877"),f=Object(_["a"])(p,a,o,!1,null,null,null);r["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d2086b7-legacy.9eae59e6.js.map