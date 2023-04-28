import{t,d as _,m as K,a as F,n as I,B as te,z as P,y as se,f as b,g as r,h as y,i as T,a1 as ue,j as be,a2 as fe,A as he,Z as ke,l as j,s as ve,a4 as me,X as xe,aB as ge,q as N}from"./index.536c7d72.js";import{u as E}from"./Button.9dd5ee3c.js";import{u as H,o as pe}from"./Scrollbar.7c2bcabe.js";import{c}from"./resolve-slot.12a336d2.js";import{u as Ce}from"./use-rtl.b3456902.js";const ye=t("svg",{viewBox:"0 0 64 64",class:"check-icon"},t("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Re=t("svg",{viewBox:"0 0 100 100",class:"line-icon"},t("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),G=se("n-checkbox-group"),ze={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:{type:[Function,Array],validator:()=>!0,default:void 0}},Me=_({name:"CheckboxGroup",props:ze,setup(o){const{mergedClsPrefixRef:x}=K(o),g=E(o),{mergedSizeRef:R,mergedDisabledRef:S}=g,s=F(o.defaultValue),z=I(()=>o.value),u=H(z,s),a=I(()=>{var f;return((f=u.value)===null||f===void 0?void 0:f.length)||0}),n=I(()=>Array.isArray(u.value)?new Set(u.value):new Set);function $(f,l){const{nTriggerFormInput:p,nTriggerFormChange:C}=g,{onChange:h,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(u.value)){const d=Array.from(u.value),M=d.findIndex(V=>V===l);f?~M||(d.push(l),v&&c(v,d),k&&c(k,d),p(),C(),s.value=d,h&&c(h,d)):~M&&(d.splice(M,1),v&&c(v,d),k&&c(k,d),h&&c(h,d),s.value=d,p(),C())}else f?(v&&c(v,[l]),k&&c(k,[l]),h&&c(h,[l]),s.value=[l],p(),C()):(v&&c(v,[]),k&&c(k,[]),h&&c(h,[]),s.value=[],p(),C())}return te(G,{checkedCountRef:a,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:n,disabledRef:S,mergedSizeRef:R,toggleCheckbox:$}),{mergedClsPrefix:x}},render(){return t("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),we=b([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[b("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),T("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),T("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("indeterminate",[r("checkbox-box",[r("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("checked, indeterminate",[b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),T("disabled",{cursor:"not-allowed"},[T("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ue({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 padding: var(--n-label-padding);
 `,[b("&:empty",{display:"none"})])]),be(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Se=Object.assign(Object.assign({},j.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ie=_({name:"Checkbox",props:Se,setup(o){const x=F(null),{mergedClsPrefixRef:g,inlineThemeDisabled:R,mergedRtlRef:S}=K(o),s=E(o,{mergedSize(e){const{size:m}=o;if(m!==void 0)return m;if(a){const{value:i}=a.mergedSizeRef;if(i!==void 0)return i}if(e){const{mergedSize:i}=e;if(i!==void 0)return i.value}return"medium"},mergedDisabled(e){const{disabled:m}=o;if(m!==void 0)return m;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:i},checkedCountRef:w}=a;if(i!==void 0&&w.value>=i&&!l.value)return!0;const{minRef:{value:A}}=a;if(A!==void 0&&w.value<=A&&l.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:z,mergedSizeRef:u}=s,a=he(G,null),n=F(o.defaultChecked),$=P(o,"checked"),f=H($,n),l=ke(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return f.value===o.checkedValue}),p=j("Checkbox","-checkbox",we,ge,o,g);function C(e){if(a&&o.value!==void 0)a.toggleCheckbox(!l.value,o.value);else{const{onChange:m,"onUpdate:checked":i,onUpdateChecked:w}=o,{nTriggerFormInput:A,nTriggerFormChange:U}=s,B=l.value?o.uncheckedValue:o.checkedValue;i&&c(i,B,e),w&&c(w,B,e),m&&c(m,B,e),A(),U(),n.value=B}}function h(e){z.value||C(e)}function k(e){if(!z.value)switch(e.key){case" ":case"Enter":C(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const d={focus:()=>{var e;(e=x.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=x.value)===null||e===void 0||e.blur()}},M=Ce("Checkbox",S,g),V=I(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:m},self:{borderRadius:i,color:w,colorChecked:A,colorDisabled:U,colorTableHeader:B,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:q,checkMarkColorDisabled:X,border:Y,borderFocus:Z,borderDisabled:J,borderChecked:Q,boxShadowFocus:W,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ne,borderDisabledChecked:ae,labelPadding:ce,labelLineHeight:le,[N("fontSize",e)]:de,[N("size",e)]:ie}}=p.value;return{"--n-label-line-height":le,"--n-size":ie,"--n-bezier":m,"--n-border-radius":i,"--n-border":Y,"--n-border-checked":Q,"--n-border-focus":Z,"--n-border-disabled":J,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":W,"--n-color":w,"--n-color-checked":A,"--n-color-table":B,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":U,"--n-color-disabled-checked":ne,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":q,"--n-check-mark-color-disabled":X,"--n-check-mark-color-disabled-checked":re,"--n-font-size":de,"--n-label-padding":ce}}),D=R?ve("checkbox",I(()=>u.value[0]),V,o):void 0;return Object.assign(s,d,{rtlEnabled:M,selfRef:x,mergedClsPrefix:g,mergedDisabled:z,renderedChecked:l,mergedTheme:p,labelId:me(),handleClick:h,handleKeyUp:k,handleKeyDown:v,cssVars:R?void 0:V,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender})},render(){var o;const{$slots:x,renderedChecked:g,mergedDisabled:R,indeterminate:S,privateInsideTable:s,cssVars:z,labelId:u,label:a,mergedClsPrefix:n,focusable:$,handleKeyUp:f,handleKeyDown:l,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),t("div",{ref:"selfRef",class:[`${n}-checkbox`,this.themeClass,this.rtlEnabled&&`${n}-checkbox--rtl`,g&&`${n}-checkbox--checked`,R&&`${n}-checkbox--disabled`,S&&`${n}-checkbox--indeterminate`,s&&`${n}-checkbox--inside-table`],tabindex:R||!$?void 0:0,role:"checkbox","aria-checked":S?"mixed":g,"aria-labelledby":u,style:z,onKeyup:f,onKeydown:l,onClick:p,onMousedown:()=>{pe("selectstart",window,C=>{C.preventDefault()},{once:!0})}},t("div",{class:`${n}-checkbox-box-wrapper`},"\xA0",t("div",{class:`${n}-checkbox-box`},t(xe,null,{default:()=>this.indeterminate?t("div",{key:"indeterminate",class:`${n}-checkbox-icon`},Re):t("div",{key:"check",class:`${n}-checkbox-icon`},ye)}),t("div",{class:`${n}-checkbox-box__border`}))),a!==null||x.default?t("span",{class:`${n}-checkbox__label`,id:u},x.default?x.default():a):null)}});export{Me as N,Ie as a};
