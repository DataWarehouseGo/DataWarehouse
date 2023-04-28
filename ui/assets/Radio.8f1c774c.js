import{s as h}from"./RadioGroup.5a44255f.js";import{g as c,h as o,f as t,i as l,Q as P,d as j,l as u,n as f,m as A,s as F,t as n,b4 as H,q as v}from"./index.536c7d72.js";import{u as T}from"./use-rtl.b3456902.js";import{r as V}from"./resolve-slot.12a336d2.js";const L=c("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[o("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),c("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),o("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[t("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),l("checked",{boxShadow:"var(--n-box-shadow-active)"},[t("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),o("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),P("disabled",`
 cursor: pointer;
 `,[t("&:hover",[o("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),l("focus",[t("&:not(:active)",[o("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),l("disabled",`
 cursor: not-allowed;
 `,[o("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[t("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),l("checked",`
 opacity: 1;
 `)]),o("label",{color:"var(--n-text-color-disabled)"}),c("radio-input",`
 cursor: not-allowed;
 `)])]),W=j({name:"Radio",props:Object.assign(Object.assign({},u.props),h.props),setup(a){const e=h(a),i=u("Radio","-radio",L,H,a,e.mergedClsPrefix),s=f(()=>{const{mergedSize:{value:b}}=e,{common:{cubicBezierEaseInOut:g},self:{boxShadow:w,boxShadowActive:z,boxShadowDisabled:C,boxShadowFocus:R,boxShadowHover:S,color:k,colorDisabled:y,textColor:$,textColorDisabled:_,dotColorActive:D,dotColorDisabled:E,labelPadding:B,labelLineHeight:I,[v("fontSize",b)]:N,[v("radioSize",b)]:O}}=i.value;return{"--n-bezier":g,"--n-label-line-height":I,"--n-box-shadow":w,"--n-box-shadow-active":z,"--n-box-shadow-disabled":C,"--n-box-shadow-focus":R,"--n-box-shadow-hover":S,"--n-color":k,"--n-color-disabled":y,"--n-dot-color-active":D,"--n-dot-color-disabled":E,"--n-font-size":N,"--n-radio-size":O,"--n-text-color":$,"--n-text-color-disabled":_,"--n-label-padding":B}}),{inlineThemeDisabled:d,mergedClsPrefixRef:p,mergedRtlRef:x}=A(a),m=T("Radio",x,p),r=d?F("radio",f(()=>e.mergedSize.value[0]),s,a):void 0;return Object.assign(e,{rtlEnabled:m,cssVars:d?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender})},render(){const{$slots:a,mergedClsPrefix:e,onRender:i,label:s}=this;return i==null||i(),n("label",{class:[`${e}-radio`,this.themeClass,{[`${e}-radio--rtl`]:this.rtlEnabled,[`${e}-radio--disabled`]:this.mergedDisabled,[`${e}-radio--checked`]:this.renderSafeChecked,[`${e}-radio--focus`]:this.focus}],style:this.cssVars},n("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),n("div",{class:`${e}-radio__dot-wrapper`},"\xA0",n("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]})),V(a.default,d=>!d&&!s?null:n("div",{ref:"labelRef",class:`${e}-radio__label`},d||s)))}});export{W as N};
