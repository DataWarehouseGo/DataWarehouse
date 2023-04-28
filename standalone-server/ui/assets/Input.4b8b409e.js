import{u as er}from"./use-rtl.b3456902.js";import{d as G,t as i,y as or,a as b,w as ce,A as rr,n as F,g,h as s,f as y,i as A,Q as H,m as tr,l as ze,z as nr,Z as pe,e as ar,at as ir,R as ge,B as lr,s as sr,V as ur,J as be,N as me,au as cr,q as se}from"./index.536c7d72.js";import{b as dr,r as Q,a as ue,c as x}from"./resolve-slot.12a336d2.js";import{u as hr}from"./use-locale.31127f4e.js";import{u as fr,N as vr,o as xe,a as we}from"./Scrollbar.7c2bcabe.js";import{u as pr}from"./Button.9dd5ee3c.js";import{V as gr}from"./VResizeObserver.0aad584a.js";import{a as ye,N as br}from"./Suffix.4fa63b0d.js";import{g as mr}from"./index.7a579f81.js";const xr=G({name:"Eye",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),i("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),wr=G({name:"EyeOff",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),i("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),i("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),i("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),i("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Ae=or("n-input");function yr(r){let v=0;for(const a of r)v++;return v}function Z(r){return r===""||r==null}function Cr(r){const v=b(null);function a(){const{value:p}=r;if(!p||!p.focus){R();return}const{selectionStart:l,selectionEnd:t,value:u}=p;if(l==null||t==null){R();return}v.value={start:l,end:t,beforeText:u.slice(0,l),afterText:u.slice(t)}}function S(){var p;const{value:l}=v,{value:t}=r;if(!l||!t)return;const{value:u}=t,{start:m,beforeText:d,afterText:C}=l;let w=u.length;if(u.endsWith(C))w=u.length-C.length;else if(u.startsWith(d))w=d.length;else{const j=d[m-1],z=u.indexOf(j,m-1);z!==-1&&(w=z+1)}(p=t.setSelectionRange)===null||p===void 0||p.call(t,w,w)}function R(){v.value=null}return ce(r,R),{recordCursor:a,restoreCursor:S}}const Ce=G({name:"InputWordCount",setup(r,{slots:v}){const{mergedValueRef:a,maxlengthRef:S,mergedClsPrefixRef:R}=rr(Ae),p=F(()=>{const{value:l}=a;return l===null||Array.isArray(l)?0:yr(l)});return()=>{const{value:l}=S,{value:t}=a;return i("span",{class:`${R.value}-input-word-count`},dr(v.default,{value:t===null||Array.isArray(t)?"":t},()=>[l===void 0?p.value:`${p.value} / ${l}`]))}}}),zr=g("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[s("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),s("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),s("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[y("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),y("&::placeholder","color: #0000;"),y("&:-webkit-autofill ~",[s("placeholder","display: none;")])]),A("round",[H("textarea","border-radius: calc(var(--n-height) / 2);")]),s("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[y("span",`
 width: 100%;
 display: inline-block;
 `)]),A("textarea",[s("placeholder","overflow: visible;")]),H("autosize","width: 100%;"),A("autosize",[s("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),g("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),s("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),s("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[y("+",[s("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),H("textarea",[s("placeholder","white-space: nowrap;")]),s("eye",`
 transition: color .3s var(--n-bezier);
 `),A("textarea","width: 100%;",[g("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),A("resizable",[g("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),s("textarea",`
 position: static;
 `),s("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),s("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),A("pair",[s("input-el, placeholder","text-align: center;"),s("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[g("icon",`
 color: var(--n-icon-color);
 `),g("base-icon",`
 color: var(--n-icon-color);
 `)])]),A("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[s("border","border: var(--n-border-disabled);"),s("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),s("placeholder","color: var(--n-placeholder-color-disabled);"),s("separator","color: var(--n-text-color-disabled);",[g("icon",`
 color: var(--n-icon-color-disabled);
 `),g("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),s("suffix, prefix","color: var(--n-text-color-disabled);",[g("icon",`
 color: var(--n-icon-color-disabled);
 `),g("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),H("disabled",[s("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[y("&:hover",`
 color: var(--n-icon-color-hover);
 `),y("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),y("&:hover",[s("state-border","border: var(--n-border-hover);")]),A("focus","background-color: var(--n-color-focus);",[s("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),s("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),s("state-border",`
 border-color: #0000;
 z-index: 1;
 `),s("prefix","margin-right: 4px;"),s("suffix",`
 margin-left: 4px;
 `),s("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[g("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),g("base-clear",`
 font-size: var(--n-icon-size);
 `,[s("placeholder",[g("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),y(">",[g("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),g("base-icon",`
 font-size: var(--n-icon-size);
 `)]),g("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>A(`${r}-status`,[H("disabled",[g("base-loading",`
 color: var(--n-loading-color-${r})
 `),s("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),s("state-border",`
 border: var(--n-border-${r});
 `),y("&:hover",[s("state-border",`
 border: var(--n-border-hover-${r});
 `)]),y("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),A("focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),Ar=Object.assign(Object.assign({},ze.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Tr=G({name:"Input",props:Ar,setup(r){const{mergedClsPrefixRef:v,mergedBorderedRef:a,inlineThemeDisabled:S,mergedRtlRef:R}=tr(r),p=ze("Input","-input",zr,cr,r,v),l=b(null),t=b(null),u=b(null),m=b(null),d=b(null),C=b(null),w=b(null),j=Cr(w),z=b(null),{localeRef:Se}=hr("Input"),U=b(r.defaultValue),Re=nr(r,"value"),_=fr(Re,U),M=pr(r),{mergedSizeRef:ee,mergedDisabledRef:I,mergedStatusRef:_e}=M,T=b(!1),V=b(!1),B=b(!1),W=b(!1);let oe=null;const re=F(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[Se.value.placeholder]:[e]}),Fe=F(()=>{const{value:e}=B,{value:o}=_,{value:n}=re;return!e&&(Z(o)||Array.isArray(o)&&Z(o[0]))&&n[0]}),Be=F(()=>{const{value:e}=B,{value:o}=_,{value:n}=re;return!e&&n[1]&&(Z(o)||Array.isArray(o)&&Z(o[1]))}),te=pe(()=>r.internalForceFocus||T.value),Pe=pe(()=>{if(I.value||r.readonly||!r.clearable||!te.value&&!V.value)return!1;const{value:e}=_,{value:o}=te;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(V.value||o):!!e&&(V.value||o)}),ne=F(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),D=b(!1),$e=F(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),de=b(void 0),Ee=()=>{var e,o;if(r.type==="textarea"){const{autosize:n}=r;if(n&&(de.value=(o=(e=z.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!t.value||typeof n=="boolean")return;const{paddingTop:c,paddingBottom:h,lineHeight:f}=window.getComputedStyle(t.value),P=Number(c.slice(0,-2)),$=Number(h.slice(0,-2)),E=Number(f.slice(0,-2)),{value:O}=u;if(!O)return;if(n.minRows){const N=Math.max(n.minRows,1),le=`${P+$+E*N}px`;O.style.minHeight=le}if(n.maxRows){const N=`${P+$+E*n.maxRows}px`;O.style.maxHeight=N}}},Ie=F(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});ar(()=>{const{value:e}=_;Array.isArray(e)||ie(e)});const Te=ir().proxy;function K(e){const{onUpdateValue:o,"onUpdate:value":n,onInput:c}=r,{nTriggerFormInput:h}=M;o&&x(o,e),n&&x(n,e),c&&x(c,e),U.value=e,h()}function L(e){const{onChange:o}=r,{nTriggerFormChange:n}=M;o&&x(o,e),U.value=e,n()}function ke(e){const{onBlur:o}=r,{nTriggerFormBlur:n}=M;o&&x(o,e),n()}function Me(e){const{onFocus:o}=r,{nTriggerFormFocus:n}=M;o&&x(o,e),n()}function Ve(e){const{onClear:o}=r;o&&x(o,e)}function We(e){const{onInputBlur:o}=r;o&&x(o,e)}function De(e){const{onInputFocus:o}=r;o&&x(o,e)}function Oe(){const{onDeactivate:e}=r;e&&x(e)}function Ne(){const{onActivate:e}=r;e&&x(e)}function He(e){const{onClick:o}=r;o&&x(o,e)}function je(e){const{onWrapperFocus:o}=r;o&&x(o,e)}function Ue(e){const{onWrapperBlur:o}=r;o&&x(o,e)}function Ke(){B.value=!0}function Le(e){B.value=!1,e.target===C.value?Y(e,1):Y(e,0)}function Y(e,o=0,n="input"){const c=e.target.value;if(ie(c),r.type==="textarea"){const{value:f}=z;f&&f.syncUnifiedContainer()}if(oe=c,B.value)return;j.recordCursor();const h=Ye(c);if(h)if(!r.pair)n==="input"?K(c):L(c);else{let{value:f}=_;Array.isArray(f)?f=[f[0],f[1]]:f=["",""],f[o]=c,n==="input"?K(f):L(f)}Te.$forceUpdate(),h||be(j.restoreCursor)}function Ye(e){const{allowInput:o}=r;return typeof o=="function"?o(e):!0}function Xe(e){We(e),e.relatedTarget===l.value&&Oe(),e.relatedTarget!==null&&(e.relatedTarget===d.value||e.relatedTarget===C.value||e.relatedTarget===t.value)||(W.value=!1),X(e,"blur"),w.value=null}function qe(e,o){De(e),T.value=!0,W.value=!0,Ne(),X(e,"focus"),o===0?w.value=d.value:o===1?w.value=C.value:o===2&&(w.value=t.value)}function Je(e){r.passivelyActivated&&(Ue(e),X(e,"blur"))}function Qe(e){r.passivelyActivated&&(T.value=!0,je(e),X(e,"focus"))}function X(e,o){e.relatedTarget!==null&&(e.relatedTarget===d.value||e.relatedTarget===C.value||e.relatedTarget===t.value||e.relatedTarget===l.value)||(o==="focus"?(Me(e),T.value=!0):o==="blur"&&(ke(e),T.value=!1))}function Ze(e,o){Y(e,o,"change")}function Ge(e){He(e)}function eo(e){Ve(e),r.pair?(K(["",""]),L(["",""])):(K(""),L(""))}function oo(e){const{onMousedown:o}=r;o&&o(e);const{tagName:n}=e.target;if(n!=="INPUT"&&n!=="TEXTAREA"){if(r.resizable){const{value:c}=l;if(c){const{left:h,top:f,width:P,height:$}=c.getBoundingClientRect(),E=14;if(h+P-E<e.clientX&&e.clientY<h+P&&f+$-E<e.clientY&&e.clientY<f+$)return}}e.preventDefault(),T.value||he()}}function ro(){var e;V.value=!0,r.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseEnterWrapper())}function to(){var e;V.value=!1,r.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function no(){I.value||ne.value==="click"&&(D.value=!D.value)}function ao(e){if(I.value)return;e.preventDefault();const o=c=>{c.preventDefault(),we("mouseup",document,o)};if(xe("mouseup",document,o),ne.value!=="mousedown")return;D.value=!0;const n=()=>{D.value=!1,we("mouseup",document,n)};xe("mouseup",document,n)}function io(e){var o;switch((o=r.onKeydown)===null||o===void 0||o.call(r,e),e.key){case"Escape":ae();break;case"Enter":lo(e);break}}function lo(e){var o,n;if(r.passivelyActivated){const{value:c}=W;if(c){r.internalDeactivateOnEnter&&ae();return}e.preventDefault(),r.type==="textarea"?(o=t.value)===null||o===void 0||o.focus():(n=d.value)===null||n===void 0||n.focus()}}function ae(){r.passivelyActivated&&(W.value=!1,be(()=>{var e;(e=l.value)===null||e===void 0||e.focus()}))}function he(){var e,o,n;I.value||(r.passivelyActivated?(e=l.value)===null||e===void 0||e.focus():((o=t.value)===null||o===void 0||o.focus(),(n=d.value)===null||n===void 0||n.focus()))}function so(){var e;!((e=l.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function uo(){var e,o;(e=t.value)===null||e===void 0||e.select(),(o=d.value)===null||o===void 0||o.select()}function co(){I.value||(t.value?t.value.focus():d.value&&d.value.focus())}function ho(){const{value:e}=l;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&ae()}function ie(e){const{type:o,pair:n,autosize:c}=r;if(!n&&c)if(o==="textarea"){const{value:h}=u;h&&(h.textContent=(e!=null?e:"")+`\r
`)}else{const{value:h}=m;h&&(e?h.textContent=e:h.innerHTML="&nbsp;")}}function fo(){Ee()}const fe=b({top:"0"});function vo(e){var o;const{scrollTop:n}=e.target;fe.value.top=`${-n}px`,(o=z.value)===null||o===void 0||o.syncUnifiedContainer()}let q=null;ge(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?q=ce(_,n=>{!Array.isArray(n)&&n!==oe&&ie(n)}):q==null||q()});let J=null;ge(()=>{r.type==="textarea"?J=ce(_,e=>{var o;!Array.isArray(e)&&e!==oe&&((o=z.value)===null||o===void 0||o.syncUnifiedContainer())}):J==null||J()}),lr(Ae,{mergedValueRef:_,maxlengthRef:Ie,mergedClsPrefixRef:v});const po={wrapperElRef:l,inputElRef:d,textareaElRef:t,isCompositing:B,focus:he,blur:so,select:uo,deactivate:ho,activate:co},go=er("Input",R,v),ve=F(()=>{const{value:e}=ee,{common:{cubicBezierEaseInOut:o},self:{color:n,borderRadius:c,textColor:h,caretColor:f,caretColorError:P,caretColorWarning:$,textDecorationColor:E,border:O,borderDisabled:N,borderHover:le,borderFocus:bo,placeholderColor:mo,placeholderColorDisabled:xo,lineHeightTextarea:wo,colorDisabled:yo,colorFocus:Co,textColorDisabled:zo,boxShadowFocus:Ao,iconSize:So,colorFocusWarning:Ro,boxShadowFocusWarning:_o,borderWarning:Fo,borderFocusWarning:Bo,borderHoverWarning:Po,colorFocusError:$o,boxShadowFocusError:Eo,borderError:Io,borderFocusError:To,borderHoverError:ko,clearSize:Mo,clearColor:Vo,clearColorHover:Wo,clearColorPressed:Do,iconColor:Oo,iconColorDisabled:No,suffixTextColor:Ho,countTextColor:jo,iconColorHover:Uo,iconColorPressed:Ko,loadingColor:Lo,loadingColorError:Yo,loadingColorWarning:Xo,[se("padding",e)]:qo,[se("fontSize",e)]:Jo,[se("height",e)]:Qo}}=p.value,{left:Zo,right:Go}=mr(qo);return{"--n-bezier":o,"--n-count-text-color":jo,"--n-color":n,"--n-font-size":Jo,"--n-border-radius":c,"--n-height":Qo,"--n-padding-left":Zo,"--n-padding-right":Go,"--n-text-color":h,"--n-caret-color":f,"--n-text-decoration-color":E,"--n-border":O,"--n-border-disabled":N,"--n-border-hover":le,"--n-border-focus":bo,"--n-placeholder-color":mo,"--n-placeholder-color-disabled":xo,"--n-icon-size":So,"--n-line-height-textarea":wo,"--n-color-disabled":yo,"--n-color-focus":Co,"--n-text-color-disabled":zo,"--n-box-shadow-focus":Ao,"--n-loading-color":Lo,"--n-caret-color-warning":$,"--n-color-focus-warning":Ro,"--n-box-shadow-focus-warning":_o,"--n-border-warning":Fo,"--n-border-focus-warning":Bo,"--n-border-hover-warning":Po,"--n-loading-color-warning":Xo,"--n-caret-color-error":P,"--n-color-focus-error":$o,"--n-box-shadow-focus-error":Eo,"--n-border-error":Io,"--n-border-focus-error":To,"--n-border-hover-error":ko,"--n-loading-color-error":Yo,"--n-clear-color":Vo,"--n-clear-size":Mo,"--n-clear-color-hover":Wo,"--n-clear-color-pressed":Do,"--n-icon-color":Oo,"--n-icon-color-hover":Uo,"--n-icon-color-pressed":Ko,"--n-icon-color-disabled":No,"--n-suffix-text-color":Ho}}),k=S?sr("input",F(()=>{const{value:e}=ee;return e[0]}),ve,r):void 0;return Object.assign(Object.assign({},po),{wrapperElRef:l,inputElRef:d,inputMirrorElRef:m,inputEl2Ref:C,textareaElRef:t,textareaMirrorElRef:u,textareaScrollbarInstRef:z,rtlEnabled:go,uncontrolledValue:U,mergedValue:_,passwordVisible:D,mergedPlaceholder:re,showPlaceholder1:Fe,showPlaceholder2:Be,mergedFocus:te,isComposing:B,activated:W,showClearButton:Pe,mergedSize:ee,mergedDisabled:I,textDecorationStyle:$e,mergedClsPrefix:v,mergedBordered:a,mergedShowPasswordOn:ne,placeholderStyle:fe,mergedStatus:_e,textAreaScrollContainerWidth:de,handleTextAreaScroll:vo,handleCompositionStart:Ke,handleCompositionEnd:Le,handleInput:Y,handleInputBlur:Xe,handleInputFocus:qe,handleWrapperBlur:Je,handleWrapperFocus:Qe,handleMouseEnter:ro,handleMouseLeave:to,handleMouseDown:oo,handleChange:Ze,handleClick:Ge,handleClear:eo,handlePasswordToggleClick:no,handlePasswordToggleMousedown:ao,handleWrapperKeydown:io,handleTextAreaMirrorResize:fo,getTextareaScrollContainer:()=>t.value,mergedTheme:p,cssVars:S?void 0:ve,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender})},render(){var r,v;const{mergedClsPrefix:a,mergedStatus:S,themeClass:R,onRender:p}=this,l=this.$slots;return p==null||p(),i("div",{ref:"wrapperElRef",class:[`${a}-input`,R,S&&`${a}-input--${S}-status`,{[`${a}-input--rtl`]:this.rtlEnabled,[`${a}-input--disabled`]:this.mergedDisabled,[`${a}-input--textarea`]:this.type==="textarea",[`${a}-input--resizable`]:this.resizable&&!this.autosize,[`${a}-input--autosize`]:this.autosize,[`${a}-input--round`]:this.round&&this.type!=="textarea",[`${a}-input--pair`]:this.pair,[`${a}-input--focus`]:this.mergedFocus,[`${a}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},i("div",{class:`${a}-input-wrapper`},Q(l.prefix,t=>t&&i("div",{class:`${a}-input__prefix`},t)),this.type==="textarea"?i(vr,{ref:"textareaScrollbarInstRef",class:`${a}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{var t,u;const{textAreaScrollContainerWidth:m}=this,d={width:this.autosize&&m&&`${m}px`};return i(ur,null,i("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${a}-input__textarea-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(u=this.inputProps)===null||u===void 0?void 0:u.style,d],onBlur:this.handleInputBlur,onFocus:C=>this.handleInputFocus(C,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?i("div",{class:`${a}-input__placeholder`,style:[this.placeholderStyle,d],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?i(gr,{onResize:this.handleTextAreaMirrorResize},{default:()=>i("div",{ref:"textareaMirrorElRef",class:`${a}-input__textarea-mirror`,key:"mirror"})}):null)}}):i("div",{class:`${a}-input__input`},i("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:[`${a}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(v=this.inputProps)===null||v===void 0?void 0:v.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:t=>this.handleInputFocus(t,0),onInput:t=>this.handleInput(t,0),onChange:t=>this.handleChange(t,0)})),this.showPlaceholder1?i("div",{class:`${a}-input__placeholder`},i("span",null,this.mergedPlaceholder[0])):null,this.autosize?i("div",{class:`${a}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Q(l.suffix,t=>t||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?i("div",{class:`${a}-input__suffix`},[Q(l["clear-icon-placeholder"],u=>(this.clearable||u)&&i(ye,{clsPrefix:a,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>u,icon:()=>{var m,d;return(d=(m=this.$slots)["clear-icon"])===null||d===void 0?void 0:d.call(m)}})),this.internalLoadingBeforeSuffix?null:t,this.loading!==void 0?i(br,{clsPrefix:a,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?t:null,this.showCount&&this.type!=="textarea"?i(Ce,null,{default:u=>{var m;return(m=l.count)===null||m===void 0?void 0:m.call(l,u)}}):null,this.mergedShowPasswordOn&&this.type==="password"?i("div",{class:`${a}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ue(l["password-visible-icon"],()=>[i(me,{clsPrefix:a},{default:()=>i(xr,null)})]):ue(l["password-invisible-icon"],()=>[i(me,{clsPrefix:a},{default:()=>i(wr,null)})])):null]):null)),this.pair?i("span",{class:`${a}-input__separator`},ue(l.separator,()=>[this.separator])):null,this.pair?i("div",{class:`${a}-input-wrapper`},i("div",{class:`${a}-input__input`},i("input",{ref:"inputEl2Ref",type:this.type,class:`${a}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:t=>this.handleInputFocus(t,1),onInput:t=>this.handleInput(t,1),onChange:t=>this.handleChange(t,1)}),this.showPlaceholder2?i("div",{class:`${a}-input__placeholder`},i("span",null,this.mergedPlaceholder[1])):null),Q(l.suffix,t=>(this.clearable||t)&&i("div",{class:`${a}-input__suffix`},[this.clearable&&i(ye,{clsPrefix:a,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var u;return(u=l["clear-icon"])===null||u===void 0?void 0:u.call(l)},placeholder:()=>{var u;return(u=l["clear-icon-placeholder"])===null||u===void 0?void 0:u.call(l)}}),t]))):null,this.mergedBordered?i("div",{class:`${a}-input__border`}):null,this.mergedBordered?i("div",{class:`${a}-input__state-border`}):null,this.showCount&&this.type==="textarea"?i(Ce,null,{default:t=>{var u;return(u=l.count)===null||u===void 0?void 0:u.call(l,t)}}):null)}});export{xr as E,Tr as N};
