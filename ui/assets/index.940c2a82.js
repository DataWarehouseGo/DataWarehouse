import{s as Z}from"./service.4ca56d82.js";import{A as K,n as S,ae as ee,ap as U,f as k,g as N,i as oe,d as B,m as Y,a as E,e as I,w as O,z as H,l as q,s as J,t as d,bx as ne,as as te,Y as le,y as re,h as se,B as ie,T as ae,J as _,C as W,u as ce,b5 as ue,_ as de,ba as fe,c as V}from"./index.536c7d72.js";import{M as he}from"./index.4d9d5980.js";import{D as ge}from"./DownloadOutlined.e576ca2a.js";import{S as me}from"./SyncOutlined.60307d76.js";import{F as be,a as pe}from"./FullscreenOutlined.764420ff.js";import{u as ve}from"./use-locale.31127f4e.js";import{f as we}from"./fade-in-scale-up.cssr.1167eea7.js";import{t as je}from"./throttle.25c0ae05.js";import{N as xe}from"./Scrollbar.7c2bcabe.js";import{N as Re}from"./Icon.36d6d904.js";function G(e,o){const n=K(ee,null);return S(()=>e.hljs||(n==null?void 0:n.mergedHljsRef.value))}const $e=e=>{const{textColor2:o,fontSize:n,fontWeightStrong:t}=e;return{textColor:o,fontSize:n,fontWeightStrong:t,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401"}},Ce={name:"Code",common:U,self:$e},Q=Ce,ye=k([N("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[oe("word-wrap",[k("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),k("pre",`
 margin: 0;
 font-family: inherit;
 `),k("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const o=`${e.bPrefix}code`;return[`${o} .hljs-comment,
 ${o} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${o} .hljs-doctag,
 ${o} .hljs-keyword,
 ${o} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${o} .hljs-section,
 ${o} .hljs-name,
 ${o} .hljs-selector-tag,
 ${o} .hljs-deletion,
 ${o} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${o} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${o} .hljs-string,
 ${o} .hljs-regexp,
 ${o} .hljs-addition,
 ${o} .hljs-attribute,
 ${o} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${o} .hljs-built_in,
 ${o} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${o} .hljs-attr,
 ${o} .hljs-variable,
 ${o} .hljs-template-variable,
 ${o} .hljs-type,
 ${o} .hljs-selector-class,
 ${o} .hljs-selector-attr,
 ${o} .hljs-selector-pseudo,
 ${o} .hljs-number {
 color: var(--n-hue-6);
 }`,`${o} .hljs-symbol,
 ${o} .hljs-bullet,
 ${o} .hljs-link,
 ${o} .hljs-meta,
 ${o} .hljs-selector-id,
 ${o} .hljs-title {
 color: var(--n-hue-2);
 }`,`${o} .hljs-emphasis {
 font-style: italic;
 }`,`${o} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${o} .hljs-link {
 text-decoration: underline;
 }`]}]),Fe=Object.assign(Object.assign({},q.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Le=B({name:"Code",props:Fe,setup(e,{slots:o}){const{internalNoHighlight:n}=e,{mergedClsPrefixRef:t,inlineThemeDisabled:l}=Y(),r=E(null),h=n?{value:void 0}:G(e),g=(s,y,j)=>{const{value:b}=h;return!b||!(s&&b.getLanguage(s))?null:b.highlight(j?y.trim():y,{language:s}).value},m=()=>{if(o.default)return;const{value:s}=r;if(!s)return;const{language:y}=e,j=e.uri?window.decodeURIComponent(e.code):e.code;if(y){const p=g(y,j,e.trim);if(p!==null){s.innerHTML=e.inline?p:`<pre>${p}</pre>`;return}}if(e.inline){s.textContent=j;return}const b=s.children[0];if(b&&b.tagName==="PRE")b.textContent=j;else{const p=document.createElement("pre");p.textContent=j,s.innerHTML="",s.appendChild(p)}};I(m),O(H(e,"language"),m),O(H(e,"code"),m),n||O(h,m);const $=q("Code","-code",ye,Q,e,t),C=S(()=>{const{common:{cubicBezierEaseInOut:s,fontFamilyMono:y},self:{textColor:j,fontSize:b,fontWeightStrong:p,"mono-3":L,"hue-1":i,"hue-2":a,"hue-3":x,"hue-4":R,"hue-5":c,"hue-5-2":T,"hue-6":z,"hue-6-2":M}}=$.value,{internalFontSize:v}=e;return{"--n-font-size":v?`${v}px`:b,"--n-font-family":y,"--n-font-weight-strong":p,"--n-bezier":s,"--n-text-color":j,"--n-mono-3":L,"--n-hue-1":i,"--n-hue-2":a,"--n-hue-3":x,"--n-hue-4":R,"--n-hue-5":c,"--n-hue-5-2":T,"--n-hue-6":z,"--n-hue-6-2":M}}),f=l?J("code",S(()=>`${e.internalFontSize||"a"}`),C,e):void 0;return{mergedClsPrefix:t,codeRef:r,cssVars:l?void 0:C,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{mergedClsPrefix:e,wordWrap:o,onRender:n}=this;return n==null||n(),d("code",{class:[`${e}-code`,this.themeClass,o&&`${e}-code--word-wrap`],style:this.cssVars,ref:"codeRef"},this.$slots)}}),Se=e=>{const{textColor2:o,modalColor:n,borderColor:t,fontSize:l,primaryColor:r}=e;return{loaderFontSize:l,loaderTextColor:o,loaderColor:n,loaderBorder:`1px solid ${t}`,loadingColor:r}},Te=ne({name:"Log",common:U,peers:{Scrollbar:te,Code:Q},self:Se}),ze=Te,Me=B({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:ve("Log").localeRef}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-log-loader`},d(le,{clsPrefix:e,strokeWidth:24,scale:.85}),d("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),X=re("n-log"),ke=B({props:{line:{type:String,default:""}},setup(e){const{trimRef:o,highlightRef:n,languageRef:t,mergedHljsRef:l}=K(X),r=E(null),h=S(()=>o.value?e.line.trim():e.line);function g(){r.value&&(r.value.innerHTML=m(t.value,h.value))}function m($,C){const{value:f}=l;return f&&$&&f.getLanguage($)?f.highlight(C,{language:$}).value:C}return I(()=>{n.value&&g()}),O(H(e,"line"),()=>{n.value&&g()}),{highlight:n,selfRef:r,maybeTrimmedLines:h}},render(){const{highlight:e,maybeTrimmedLines:o}=this;return d("pre",{ref:"selfRef"},e?null:o)}}),Ee=N("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[k("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),N("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[we(),se("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),N("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),He=Object.assign(Object.assign({},q.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),Be=B({name:"Log",props:He,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=Y(e),t=E(!1),l=S(()=>e.language!==void 0),r=S(()=>`calc(${Math.round(e.rows*e.lineHeight*e.fontSize)}px)`),h=S(()=>{const{log:i}=e;return i?i.split(`
`):e.lines}),g=E(null),m=q("Log","-log",Ee,ze,e,o);function $(i){const a=i.target,x=a.firstElementChild;if(t.value){_(()=>{t.value=!1});return}const R=a.offsetHeight,c=a.scrollTop,T=x.offsetHeight,z=c,M=T-c-R;if(z<=e.offsetTop){const{onReachTop:v,onRequireMore:w}=e;w&&w("top"),v&&v()}if(M<=e.offsetBottom){const{onReachBottom:v,onRequireMore:w}=e;w&&w("bottom"),v&&v()}}const C=je(f,300);function f(i){if(t.value){_(()=>{t.value=!1});return}if(g.value){const{containerRef:a,contentRef:x}=g.value;if(a&&x){const R=a.offsetHeight,c=a.scrollTop,T=x.offsetHeight,z=c,M=T-c-R,v=i.deltaY;if(z===0&&v<0){const{onRequireMore:w}=e;w&&w("top")}if(M<=0&&v>0){const{onRequireMore:w}=e;w&&w("bottom")}}}}function s(i){const{value:a}=g;if(!a)return;const{slient:x,top:R,position:c}=i;x&&(t.value=!0),R!==void 0?a.scrollTo({left:0,top:R}):(c==="bottom"||c==="top")&&a.scrollTo({position:c})}function y(i=!1){W("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),s({position:"top",slient:i})}function j(i=!1){W("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),s({position:"bottom",slient:i})}ie(X,{languageRef:H(e,"language"),mergedHljsRef:G(e),trimRef:H(e,"trim"),highlightRef:l});const b={scrollTo:s},p=S(()=>{const{self:{loaderFontSize:i,loaderTextColor:a,loaderColor:x,loaderBorder:R,loadingColor:c},common:{cubicBezierEaseInOut:T}}=m.value;return{"--n-bezier":T,"--n-loader-font-size":i,"--n-loader-border":R,"--n-loader-color":x,"--n-loader-text-color":a,"--n-loading-color":c}}),L=n?J("log",void 0,p,e):void 0;return Object.assign(Object.assign({},b),{mergedClsPrefix:o,scrollbarRef:g,mergedTheme:m,styleHeight:r,mergedLines:h,scrollToTop:y,scrollToBottom:j,handleWheel:C,handleScroll:$,cssVars:n?void 0:p,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender})},render(){const{mergedClsPrefix:e,mergedTheme:o,onRender:n}=this;return n==null||n(),d("div",{class:[`${e}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[d(xe,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>d(Le,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:o.peers.Code,themeOverrides:o.peerOverrides.Code},{default:()=>this.mergedLines.map((t,l)=>d(ke,{key:l,line:t}))})}),d(ae,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?d(Me,{clsPrefix:e}):null})])}});function Ye(e){return Z({url:"/log/detail",method:"get",params:e})}const D=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],F=(()=>{if(typeof document>"u")return!1;const e=D[0],o={};for(const n of D)if((n==null?void 0:n[1])in document){for(const[l,r]of n.entries())o[e[l]]=r;return o}return!1})(),A={change:F.fullscreenchange,error:F.fullscreenerror};let u={request(e=document.documentElement,o){return new Promise((n,t)=>{const l=()=>{u.off("change",l),n()};u.on("change",l);const r=e[F.requestFullscreen](o);r instanceof Promise&&r.then(l).catch(t)})},exit(){return new Promise((e,o)=>{if(!u.isFullscreen){e();return}const n=()=>{u.off("change",n),e()};u.on("change",n);const t=document[F.exitFullscreen]();t instanceof Promise&&t.then(n).catch(o)})},toggle(e,o){return u.isFullscreen?u.exit():u.request(e,o)},onchange(e){u.on("change",e)},onerror(e){u.on("error",e)},on(e,o){const n=A[e];n&&document.addEventListener(n,o,!1)},off(e,o){const n=A[e];n&&document.removeEventListener(n,o,!1)},raw:F};Object.defineProperties(u,{isFullscreen:{get:()=>Boolean(document[F.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return(e=document[F.fullscreenElement])!=null?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[F.fullscreenEnabled])}});F||(u={isEnabled:!1});const P=u,Pe={showModalRef:{type:Boolean,default:!1},logRef:{type:String,default:""},logLoadingRef:{type:Boolean,default:!1},row:{type:Object,default:{}},showDownloadLog:{type:Boolean,default:!1}},Je=B({name:"log-modal",props:Pe,emits:["confirmModal","refreshLogs","downloadLogs"],setup(e,o){const{t:n}=ce(),t=ue({isFullscreen:!1}),l=()=>{t.isFullscreen=P.isFullscreen},r=C=>()=>d(Re,null,{default:()=>d(C)}),h=()=>{t.isFullscreen=!1,o.emit("confirmModal",e.showModalRef)},g=()=>{o.emit("refreshLogs",e.row)},m=()=>{P.toggle(document.querySelectorAll(".logModalRef")[0])},$=()=>{o.emit("downloadLogs",e.row)};return I(()=>{P.on("change",l)}),de(()=>{P.on("change",l)}),{t:n,renderIcon:r,confirmModal:h,refreshLogs:g,downloadLogs:$,handleFullScreen:m,...fe(t)}},render(){const{t:e,renderIcon:o,refreshLogs:n,downloadLogs:t,isFullscreen:l,handleFullScreen:r,showDownloadLog:h}=this;return V(he,{class:"logModalRef",title:e("project.task.view_log"),show:this.showModalRef,cancelShow:!1,onConfirm:this.confirmModal,style:{width:"60%"},headerLinks:E([{text:e("project.workflow.download_log"),show:h,action:t,icon:o(ge)},{text:e("project.task.refresh"),show:!0,action:n,icon:o(me)},{text:e(l?"project.task.cancel_full_screen":"project.task.enter_full_screen"),show:!0,action:r,icon:o(l?be:pe)}])},{default:()=>[V(Be,{rows:30,log:this.logRef,loading:this.logLoadingRef,style:{height:l?"calc(100vh - 140px)":"525px"}},null)]})}});export{Je as L,Ye as q};
