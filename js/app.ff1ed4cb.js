(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],m=0,p=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/axonconsumerapp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"#41B883",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("router-link",{staticStyle:{color:"#fff","text-decoration":"none"},attrs:{to:"/"}},[r("h1",[e._v("Sample Consuming App")])])],1),r("div",{staticStyle:{"margin-left":"50px"}},[r("router-link",{staticStyle:{color:"#fff","text-decoration":"none"},attrs:{to:"/dashboard"}},[e._v(" DASHBOARD ")])],1),r("v-spacer"),r("router-link",{attrs:{to:"login"}},[r("v-btn",{attrs:{color:"blue"}},[e._v(" LOGIN ")])],1),r("v-btn",{staticStyle:{"margin-left":"10px"},attrs:{color:"black"},on:{click:e.logout}},[e._v(" LOGOUT ")])],1),r("v-main",[r("router-view")],1)],1)},o=[],s={name:"App",data:function(){return{}},methods:{logout:function(){localStorage.removeItem("AccessToken"),"/"!=window.location.pathname&&this.$router.push("/")}}},i=s,l=r("2877"),c=r("6544"),u=r.n(c),m=r("7496"),p=r("40dc"),f=r("8336"),v=r("f6c4"),d=r("2fa4"),h=Object(l["a"])(i,a,o,!1,null,null,null),b=h.exports;u()(h,{VApp:m["a"],VAppBar:p["a"],VBtn:f["a"],VMain:v["a"],VSpacer:d["a"]});var g=r("f309");n["a"].use(g["a"]);var x=new g["a"]({}),y=r("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-col",{staticClass:"text-center"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"2"}},[n("v-img",{staticClass:"my-3",attrs:{src:r("cf05"),contain:"",height:"200"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-img",{staticClass:"my-3",attrs:{src:"https://media.glassdoor.com/sqll/10088/alcon-squarelogo-1554791826681.png",contain:"",height:"200"}})],1)],1),n("v-row",[n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" AXON Sample Consuming App ")])])],1),n("br"),n("br"),n("h2",[n("router-link",{attrs:{to:"Register"}},[e._v("Create an account")]),e._v(" or "),n("router-link",{attrs:{to:"Login"}},[e._v("Login")]),e._v(" to get started! ")],1)],1)],1)},_=[],w={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},R=w,j=r("62ad"),O=r("a523"),I=r("adda"),A=r("0fd9"),S=Object(l["a"])(R,k,_,!1,null,null,null),V=S.exports;u()(S,{VCol:j["a"],VContainer:O["a"],VImg:I["a"],VRow:A["a"]});var $=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("div",{attrs:{id:"widget-container"}}),r("br"),r("v-col",{staticClass:"text-center"},[r("h2",[r("router-link",{attrs:{to:"reset_password"}},[e._v("Forgot Password")])],1)])],1)},C=[],E=(r("96cf"),r("1da1")),T=r("4d6a"),D=r.n(T),P=(r("65ab"),"https://alcon-axon.okta.com"),q="https://alcon-axon.okta.com/oauth2/aus46ae4eDx1JQ6ik5d6",L="0oa5vm6bnFPIKf9Os5d6",M={data:function(){return{signIn:null}},mounted:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("AccessToken"),!t){e.next=4;break}return this.$router.push("Dashboard"),e.abrupt("return");case 4:return this.signIn=new D.a({baseUrl:P,el:"#widget-container",clientId:L,redirectUri:"http://localhost:8080",authParams:{issuer:q}}),e.prev=5,e.next=8,this.signIn.showSignInToGetTokens();case 8:r=e.sent,localStorage.setItem("AccessToken",r.accessToken.value),this.$router.push("Dashboard"),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](5),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[5,13]])})));function t(){return e.apply(this,arguments)}return t}(),destroyed:function(){this.signIn&&this.signIn.remove()}},N=M,F=Object(l["a"])(N,$,C,!1,null,null,null),z=F.exports;u()(F,{VCol:j["a"],VContainer:O["a"]});var B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[e.accessToken?r("div",[e.profile?r("div",[r("h1",[e._v("PROFILE")]),r("br"),r("p",[r("strong",[e._v("NAME")])]),r("p",[e._v(e._s(e.profile.first_name)+" "+e._s(e.profile.last_name))]),r("br"),r("p",[r("strong",[e._v("EMAIL")])]),r("p",[e._v(e._s(e.profile.email_id))])]):r("div",[r("h1",[e._v("Sorry, your session has expired, please login again")])])]):r("div",[r("h1",[e._v("You need to login to see your dashboard")])])])],1)},G=[],J=(r("99af"),r("bc3a")),U=r.n(J),H="https://k6ykpr0151.execute-api.us-east-1.amazonaws.com/api",Q={data:function(){return{profile:null,accessToken:null}},created:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.accessToken=localStorage.getItem("AccessToken"),!this.accessToken){e.next=13;break}return e.prev=2,e.next=5,U.a.get("".concat(H,"/userGet?access_token=").concat(this.accessToken));case 5:t=e.sent,this.profile=t.data.profile,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0),this.profile=null;case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));function t(){return e.apply(this,arguments)}return t}()},W=Q,Y=Object(l["a"])(W,B,G,!1,null,null,null),Z=Y.exports;u()(Y,{VContainer:O["a"]});var K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.fnameRules,label:"First Name",required:""},model:{value:e.first,callback:function(t){e.first=t},expression:"first"}}),r("v-text-field",{attrs:{rules:e.lnameRules,label:"Last Name",required:""},model:{value:e.last,callback:function(t){e.last=t},expression:"last"}}),r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{rules:e.nicknameRules,label:"Nickname"},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}),r("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone Number"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),r("v-text-field",{attrs:{label:"Alcon ID",rules:e.AlconIDrules},model:{value:e.AlconID,callback:function(t){e.AlconID=t},expression:"AlconID"}}),r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.register}},[e._v(" REGISTER ")])],1)],1)],1)],1)},X=[],ee="https://k6ykpr0151.execute-api.us-east-1.amazonaws.com/api",te={data:function(){return{valid:!0,first:"",last:"",email:"",phone:"",AlconID:"",username:"",nickname:"",fnameRules:[function(e){return!!e||"First name is required"}],lnameRules:[function(e){return!!e||"Last name is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],phoneRules:[function(e){return/^[0-9]{0,15}$|^$/.test(e)||"Phone number must be 15 or fewer numeric characters"}],AlconIDrules:[function(e){return/(^[0-9]{1,9}$)|^$/.test(e)||"AlconID must be a number no more than 10 digits long"}],usernameRules:[function(e){return e.length<=50||"Username must be 50 characters or less"},function(e){return/^[0-9A-Za-z_@.-]*$|^$/.test(e)||"Valid username characters are limited to 0-9A-Za-z@_.-"}],nicknameRules:[function(e){return e.length<=50||"Nickname must be 50 characters or less"}]}},methods:{register:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return localStorage.removeItem("AccessToken"),r={first_name:e.first,last_name:e.last,email_id:e.email,user_name:e.username,nick_name:e.nickname,mobile_phone:e.phone,alcon_id:e.AlconID},t.prev=2,t.next=5,U.a.post("".concat(ee,"/userCreate"),r);case 5:n=e.username?e.username:e.email,localStorage.setItem("user_name",JSON.stringify(n)),e.$router.push("Verify"),t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0),e.$alert("Sorry, there was a problem creating your account"),e.$router.push("/");case 15:case"end":return t.stop()}}),t,null,[[2,10]])})))()}},mounted:function(){this.$refs.form.validate()}},re=te,ne=r("4bd4"),ae=r("8654"),oe=Object(l["a"])(re,K,X,!1,null,null,null),se=oe.exports;u()(oe,{VBtn:f["a"],VCol:j["a"],VContainer:O["a"],VForm:ne["a"],VRow:A["a"],VTextField:ae["a"]});var ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("h1",[e._v("You're almost done!")]),r("br"),r("h2",[e._v("We just need to verify your identity:")]),r("br"),r("v-btn",{staticClass:"mr-4",attrs:{color:"blue"},on:{click:e.send_email}},[e._v("E-Mail Me")]),r("v-btn",{staticClass:"mr-4",attrs:{color:"blue"},on:{click:e.send_sms}},[e._v("Text Me")])],1)],1)},le=[],ce="https://k6ykpr0151.execute-api.us-east-1.amazonaws.com/api",ue={data:function(){return{username:null}},methods:{send_email:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.a.post("".concat(ce,"/userActivate"),{activation_method:"email",user_name:e.username});case 3:e.$alert("Activation E-mail sent to ".concat(e.username,"!")),e.$router.push("Login"),t.next=12;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0),e.$alert("Sorry, there was a problem activating your account"),e.$router.push("/");case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()},send_sms:function(){return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},created:function(){this.username=JSON.parse(localStorage.getItem("user_name")),this.username?localStorage.removeItem("user_name"):this.$router.push("/")}},me=ue,pe=Object(l["a"])(me,ie,le,!1,null,null,null),fe=pe.exports;u()(pe,{VBtn:f["a"],VContainer:O["a"]});var ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("h2",[e._v("Enter the email you created your account with so we can send you a recovery e-mail:")])]),r("v-row",[r("v-col",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.recover}},[e._v(" Go ")])],1)],1)],1)],1)},de=[],he="https://k6ykpr0151.execute-api.us-east-1.amazonaws.com/api",be={data:function(){return{valid:!0,email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},methods:{recover:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.a.get("".concat(he,"/userResetPswd?user_name=").concat(e.email));case 3:e.$alert("Recovery E-mail has been sent to ".concat(e.email,"!")),e.$router.push("login"),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0),e.$alert("Sorry, there is no account with that E-mail");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},mounted:function(){this.$refs.form.validate()}},ge=be,xe=Object(l["a"])(ge,ve,de,!1,null,null,null),ye=xe.exports;u()(xe,{VBtn:f["a"],VCol:j["a"],VContainer:O["a"],VForm:ne["a"],VRow:A["a"],VTextField:ae["a"]}),n["a"].use(y["a"]);var ke=new y["a"]({mode:"history",routes:[{path:"/",name:"Index",component:V},{path:"/login",name:"Login",component:z},{path:"/dashboard",name:"Dashboard",component:Z},{path:"/register",name:"Register",component:se},{path:"/verify",name:"Verify",component:fe},{path:"/reset_password",name:"ResetPassword",component:ye}]}),_e=r("683f");n["a"].config.productionTip=!1,n["a"].use(_e["a"]),new n["a"]({vuetify:x,router:ke,render:function(e){return e(b)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ff1ed4cb.js.map