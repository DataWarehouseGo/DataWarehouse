import{u as _,b5 as N,a as b,bD as h,bq as v,bo as S,d as y,bB as F,at as C,ba as I,c as o,bE as g,ak as L}from"./index.536c7d72.js";import{a as c,s as P}from"./service.4ca56d82.js";import{g as k}from"./index.fe30cd62.js";import{u as R,a as T}from"./timezone.00779d2b.js";import{u as U}from"./use-message.243250a9.js";import{N as z}from"./Switch.57a995f1.js";import{N as j}from"./Form.b918a62f.js";import{N as d}from"./FormItem.67716b88.js";import{N as p}from"./Input.4b8b409e.js";import{N as x}from"./Button.9dd5ee3c.js";import"./lodash.bce5b897.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./resolve-slot.12a336d2.js";import"./index.7a579f81.js";import"./keysOf.10525521.js";import"./format-length.a0cbed4d.js";import"./use-rtl.b3456902.js";import"./use-locale.31127f4e.js";import"./Suffix.4fa63b0d.js";import"./is-browser.f4bc45cf.js";const E="_container_2iues_17",K="_logo_2iues_37",n={container:E,"language-switch":"_language-switch_2iues_25","login-model":"_login-model_2iues_30",logo:K,"logo-img":"_logo-img_2iues_43","form-model":"_form-model_2iues_49"};function V(){const{t:e,locale:t}=_(),s=N({loginFormRef:b(),loginForm:{userName:"",userPassword:""},rules:{userName:{trigger:["input","blur"],validator(){if(s.loginForm.userName==="")return new Error(e("login.userName_tips"))}},userPassword:{trigger:["input","blur"],validator(){if(s.loginForm.userPassword==="")return new Error(e("login.userPassword_tips"))}}}});return{state:s,t:e,locale:t}}function B(e){const t=h();return{handleChange:r=>{e.value=r,t.setLocales(r),c.set("language",e.value,{path:"/"})}}}function D(e){return P({url:"/login",method:"post",data:e})}function O(e){const t=v(),s=S(),r=R(),u=T();return{handleLogin:()=>{e.loginFormRef.validate(async l=>{if(!l){const i=await D({...e.loginForm});await s.setSessionId(i.sessionId),await s.setSecurityConfigType(i.securityConfigType),c.set("sessionId",i.sessionId,{path:"/"});const a=await k();await s.setUserInfo(a);const f=a.timeZone?a.timeZone:"UTC";await u.setTimezone(f);const w=r.lastRoute;t.push({path:w||"home"})}})}}}function Z(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!L(e)}const ce=y({name:"login",setup(){var a;window.$message=U();const{state:e,t,locale:s}=V(),{handleChange:r}=B(s),{handleLogin:u}=O(e),m=h(),l=F();l.getTheme&&l.setDarkTheme();const i=(a=C())==null?void 0:a.appContext.config.globalProperties.trim;return c.set("language",m.getLocales,{path:"/"}),{t,handleChange:r,handleLogin:u,...I(e),localesStore:m,trim:i}},render(){let e;return o("div",{class:n.container},[o("div",{class:n["language-switch"]},[o(z,{onUpdateValue:this.handleChange,"default-value":this.localesStore.getLocales,"checked-value":"en_US","unchecked-value":"zh_CN"},{checked:()=>"en_US",unchecked:()=>"zh_CN"})]),o("div",{class:n["login-model"]},[o("div",{class:n.logo},[o("div",{class:n["logo-img"]},null)]),o("div",{class:n["form-model"]},[o(j,{rules:this.rules,ref:"loginFormRef"},{default:()=>[o(d,{label:this.t("login.userName"),"label-style":{color:"black"},path:"userName"},{default:()=>[o(p,{allowInput:this.trim,class:"input-user-name",type:"text",size:"large",value:this.loginForm.userName,"onUpdate:value":t=>this.loginForm.userName=t,placeholder:this.t("login.userName_tips"),autofocus:!0,onKeydown:g(this.handleLogin,["enter"])},null)]}),o(d,{label:this.t("login.userPassword"),"label-style":{color:"black"},path:"userPassword"},{default:()=>[o(p,{allowInput:this.trim,class:"input-password",type:"password",size:"large",value:this.loginForm.userPassword,"onUpdate:value":t=>this.loginForm.userPassword=t,placeholder:this.t("login.userPassword_tips"),onKeydown:g(this.handleLogin,["enter"])},null)]})]}),o(x,{class:"btn-login",round:!0,type:"info",disabled:!this.loginForm.userName||!this.loginForm.userPassword,style:{width:"100%"},onClick:this.handleLogin},Z(e=this.t("login.login"))?e:{default:()=>[e]})])])])}});export{ce as default};