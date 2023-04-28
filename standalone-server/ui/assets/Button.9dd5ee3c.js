import{A as te,B as Pe,n as S,b as ne,y as ie,g as j,d as ae,a8 as ke,z as Re,a as k,J as Fe,t as m,f,a9 as He,aa as se,i as y,h as c,Q as Z,a1 as Ie,l as le,Z as Ee,m as Ne,s as Oe,ab as je,X as De,Y as _e,ac as Ke,q as r,ad as N}from"./index.536c7d72.js";import{i as Me}from"./is-browser.f4bc45cf.js";import{u as Ve}from"./use-rtl.b3456902.js";import{r as ee,i as Ge,c as We}from"./resolve-slot.12a336d2.js";function oe(e){return e.replace(/#|\(|\)|,|\s/g,"_")}const re=ie("n-form-item");function qe(e,{defaultSize:h="medium",mergedSize:v,mergedDisabled:d}={}){const n=te(re,null);Pe(re,null);const D=S(v?()=>v(n):()=>{const{size:p}=e;if(p)return p;if(n){const{mergedSize:F}=n;if(F.value!==void 0)return F.value}return h}),P=S(d?()=>d(n):()=>{const{disabled:p}=e;return p!==void 0?p:n?n.disabled.value:!1}),R=S(()=>{const{status:p}=e;return p||(n==null?void 0:n.mergedValidationStatus.value)});return ne(()=>{n&&n.restoreValidation()}),{mergedSizeRef:D,mergedDisabledRef:P,mergedStatusRef:R,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const Qe=j("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Xe=ae({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ke("-base-wave",Qe,Re(e,"clsPrefix"));const h=k(null),v=k(!1);let d=null;return ne(()=>{d!==null&&window.clearTimeout(d)}),{active:v,selfRef:h,play(){d!==null&&(window.clearTimeout(d),v.value=!1,d=null),Fe(()=>{var n;(n=h.value)===null||n===void 0||n.offsetHeight,v.value=!0,d=window.setTimeout(()=>{v.value=!1,d=null},1e3)})}}},render(){const{clsPrefix:e}=this;return m("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:w}=He;function Ye({duration:e=".2s",delay:h=".1s"}={}){return[f("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),f("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),f("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w},
 max-width ${e} ${w} ${h},
 margin-left ${e} ${w} ${h},
 margin-right ${e} ${w} ${h};
 `),f("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w} ${h},
 max-width ${e} ${w},
 margin-left ${e} ${w},
 margin-right ${e} ${w};
 `)]}function B(e){return se(e,[255,255,255,.16])}function O(e){return se(e,[0,0,0,.12])}const Ae=ie("n-button-group"),Le=f([j("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("color",[c("border",{borderColor:"var(--n-border-color)"}),y("disabled",[c("border",{borderColor:"var(--n-border-color-disabled)"})]),Z("disabled",[f("&:focus",[c("state-border",{borderColor:"var(--n-border-color-focus)"})]),f("&:hover",[c("state-border",{borderColor:"var(--n-border-color-hover)"})]),f("&:active",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})]),y("pressed",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),y("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[c("border",{border:"var(--n-border-disabled)"})]),Z("disabled",[f("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[c("state-border",{border:"var(--n-border-focus)"})]),f("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[c("state-border",{border:"var(--n-border-hover)"})]),f("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})]),y("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})])]),y("loading","cursor: wait;"),j("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[y("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Me&&"MozBoxSizing"in document.createElement("div").style?f("&::moz-focus-inner",{border:0}):null,c("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),c("border",{border:"var(--n-border)"}),c("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),c("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[j("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ie({top:"50%",originalTransform:"translateY(-50%)"})]),Ye()]),c("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[f("~",[c("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),y("block",`
 display: flex;
 width: 100%;
 `),y("dashed",[c("border, state-border",{borderStyle:"dashed !important"})]),y("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),f("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),f("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Je=Object.assign(Object.assign({},le.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:Boolean}),de=ae({name:"Button",props:Je,setup(e){const h=k(null),v=k(null),d=k(!1),n=Ee(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),D=te(Ae,{}),{mergedSizeRef:P}=qe({},{defaultSize:"medium",mergedSize:t=>{const{size:u}=e;if(u)return u;const{size:x}=D;if(x)return x;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),R=S(()=>e.focusable&&!e.disabled),p=t=>{var u;e.nativeFocusBehavior||(t.preventDefault(),!e.disabled&&R.value&&((u=h.value)===null||u===void 0||u.focus({preventScroll:!0})))},F=t=>{var u;if(!e.disabled&&!e.loading){const{onClick:x}=e;x&&We(x,t),e.text||(u=v.value)===null||u===void 0||u.play()}},ce=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;d.value=!1}},ue=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}d.value=!0}},be=()=>{d.value=!1},{inlineThemeDisabled:Y,mergedClsPrefixRef:_,mergedRtlRef:fe}=Ne(e),he=le("Button","-button",Le,Ke,e,_),ve=Ve("Button",fe,_),A=S(()=>{const t=he.value,{common:{cubicBezierEaseInOut:u,cubicBezierEaseOut:x},self:o}=t,{rippleDuration:K,opacityDisabled:H,fontWeight:M,fontWeightStrong:V}=o,g=P.value,{dashed:G,type:z,ghost:W,text:C,color:a,round:L,circle:q,textColor:$,secondary:me,tertiary:J,quaternary:pe,strong:ge}=e,ye={"font-weight":ge?V:M};let s={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const I=z==="tertiary",U=z==="default",i=I?"default":z;if(C){const l=$||a,b=l||o[r("textColorText",i)];s={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":b,"--n-text-color-hover":l?B(l):o[r("textColorTextHover",i)],"--n-text-color-pressed":l?O(l):o[r("textColorTextPressed",i)],"--n-text-color-focus":l?B(l):o[r("textColorTextHover",i)],"--n-text-color-disabled":l||o[r("textColorTextDisabled",i)]}}else if(W||G){const l=$||a;s={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":a||o[r("rippleColor",i)],"--n-text-color":l||o[r("textColorGhost",i)],"--n-text-color-hover":l?B(l):o[r("textColorGhostHover",i)],"--n-text-color-pressed":l?O(l):o[r("textColorGhostPressed",i)],"--n-text-color-focus":l?B(l):o[r("textColorGhostHover",i)],"--n-text-color-disabled":l||o[r("textColorGhostDisabled",i)]}}else if(me){const l=U?o.textColor:I?o.textColorTertiary:o[r("color",i)],b=a||l,E=z!=="default"&&z!=="tertiary";s={"--n-color":E?N(b,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":E?N(b,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":E?N(b,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":E?N(b,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":b,"--n-text-color-hover":b,"--n-text-color-pressed":b,"--n-text-color-focus":b,"--n-text-color-disabled":b}}else if(J||pe){const l=U?o.textColor:I?o.textColorTertiary:o[r("color",i)],b=a||l;J?(s["--n-color"]=o.colorTertiary,s["--n-color-hover"]=o.colorTertiaryHover,s["--n-color-pressed"]=o.colorTertiaryPressed,s["--n-color-focus"]=o.colorSecondaryHover,s["--n-color-disabled"]=o.colorTertiary):(s["--n-color"]=o.colorQuaternary,s["--n-color-hover"]=o.colorQuaternaryHover,s["--n-color-pressed"]=o.colorQuaternaryPressed,s["--n-color-focus"]=o.colorQuaternaryHover,s["--n-color-disabled"]=o.colorQuaternary),s["--n-ripple-color"]="#0000",s["--n-text-color"]=b,s["--n-text-color-hover"]=b,s["--n-text-color-pressed"]=b,s["--n-text-color-focus"]=b,s["--n-text-color-disabled"]=b}else s={"--n-color":a||o[r("color",i)],"--n-color-hover":a?B(a):o[r("colorHover",i)],"--n-color-pressed":a?O(a):o[r("colorPressed",i)],"--n-color-focus":a?B(a):o[r("colorFocus",i)],"--n-color-disabled":a||o[r("colorDisabled",i)],"--n-ripple-color":a||o[r("rippleColor",i)],"--n-text-color":$||(a?o.textColorPrimary:I?o.textColorTertiary:o[r("textColor",i)]),"--n-text-color-hover":$||(a?o.textColorHoverPrimary:o[r("textColorHover",i)]),"--n-text-color-pressed":$||(a?o.textColorPressedPrimary:o[r("textColorPressed",i)]),"--n-text-color-focus":$||(a?o.textColorFocusPrimary:o[r("textColorFocus",i)]),"--n-text-color-disabled":$||(a?o.textColorDisabledPrimary:o[r("textColorDisabled",i)])};let Q={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?Q={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Q={"--n-border":o[r("border",i)],"--n-border-hover":o[r("borderHover",i)],"--n-border-pressed":o[r("borderPressed",i)],"--n-border-focus":o[r("borderFocus",i)],"--n-border-disabled":o[r("borderDisabled",i)]};const{[r("height",g)]:X,[r("fontSize",g)]:xe,[r("padding",g)]:Ce,[r("paddingRound",g)]:we,[r("iconSize",g)]:ze,[r("borderRadius",g)]:$e,[r("iconMargin",g)]:Be,waveOpacity:Se}=o,Te={"--n-width":q&&!C?X:"initial","--n-height":C?"initial":X,"--n-font-size":xe,"--n-padding":q||C?"initial":L?we:Ce,"--n-icon-size":ze,"--n-icon-margin":Be,"--n-border-radius":C?"initial":q||L?X:$e};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":u,"--n-bezier-ease-out":x,"--n-ripple-duration":K,"--n-opacity-disabled":H,"--n-wave-opacity":Se},ye),s),Q),Te)}),T=Y?Oe("button",S(()=>{let t="";const{dashed:u,type:x,ghost:o,text:K,color:H,round:M,circle:V,textColor:g,secondary:G,tertiary:z,quaternary:W,strong:C}=e;u&&(t+="a"),o&&(t+="b"),K&&(t+="c"),M&&(t+="d"),V&&(t+="e"),G&&(t+="f"),z&&(t+="g"),W&&(t+="h"),C&&(t+="i"),H&&(t+="j"+oe(H)),g&&(t+="k"+oe(g));const{value:a}=P;return t+="l"+a[0],t+="m"+x[0],t}),A,e):void 0;return{selfElRef:h,waveElRef:v,mergedClsPrefix:_,mergedFocusable:R,mergedSize:P,showBorder:n,enterPressed:d,rtlEnabled:ve,handleMousedown:p,handleKeydown:ue,handleBlur:be,handleKeyup:ce,handleClick:F,customColorCssVars:S(()=>{const{color:t}=e;if(!t)return null;const u=B(t);return{"--n-border-color":t,"--n-border-color-hover":u,"--n-border-color-pressed":O(t),"--n-border-color-focus":u,"--n-border-color-disabled":t}}),cssVars:Y?void 0:A,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:h,onRender:v}=this;v==null||v();const d=ee(this.$slots.default,n=>n&&m("span",{class:`${e}-button__content`},n));return m(h,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&d,m(je,{width:!0},{default:()=>ee(this.$slots.icon,n=>(this.loading||n)&&m("span",{class:`${e}-button__icon`,style:{margin:Ge(this.$slots.default)?"0":""}},m(De,null,{default:()=>this.loading?m(_e,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):m("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},n)})))}),this.iconPlacement==="left"&&d,this.text?null:m(Xe,{ref:"waveElRef",clsPrefix:e}),this.showBorder?m("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?m("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),ro=de,to=de;export{ro as N,to as X,Ae as b,oe as c,re as f,qe as u};
