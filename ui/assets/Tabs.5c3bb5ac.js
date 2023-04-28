import{d as H,a as S,am as tt,t as o,y as at,A as fe,br as nt,n as D,F as rt,V as ot,N as st,v as it,x as lt,P as dt,g as i,i as x,f as w,h as _,Q as ct,m as bt,l as ue,w as V,B as ft,z as L,R as ut,s as vt,bO as pt,J as U,q as B,G as ht,bP as gt,D as mt,H as xt}from"./index.536c7d72.js";import{A as yt}from"./Add.4fb6bf29.js";import{u as oe}from"./use-compitable.7f10f89e.js";import{f as X}from"./flatten.f4456e1c.js";import{u as wt}from"./Scrollbar.7c2bcabe.js";import{t as G}from"./throttle.25c0ae05.js";import{c as Rt,a as se,o as Ct}from"./Popover.374e8a7f.js";import{r as ie,c as O}from"./resolve-slot.12a336d2.js";import{V as le}from"./VResizeObserver.0aad584a.js";const zt=se(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[se("&::-webkit-scrollbar",{width:0,height:0})]),St=H({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=S(null);function n(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const c=tt();return zt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Rt,ssr:c}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...d){var b;(b=e.value)===null||b===void 0||b.scrollTo(...d)}})},render(){return o("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),K=at("n-tabs"),ve={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},It=H({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ve,setup(e){const n=fe(K,null);return n||nt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return o("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Pt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},dt(ve,["displayDirective"])),q=H({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Pt,setup(e){const{mergedClsPrefixRef:n,valueRef:c,typeRef:u,closableRef:d,tabStyleRef:b,tabChangeIdRef:v,onBeforeLeaveRef:g,triggerRef:R,handleAdd:y,activateTab:p,handleClose:h}=fe(K);return{trigger:R,mergedClosable:D(()=>{if(e.internalAddable)return!1;const{closable:f}=e;return f===void 0?d.value:f}),style:b,clsPrefix:n,value:c,type:u,handleClose(f){f.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){y();return}const{name:f}=e,m=++v.id;if(f!==c.value){const{value:C}=g;C?Promise.resolve(C(e.name,c.value)).then(z=>{z&&v.id===m&&p(f)}):p(f)}}}},render(){const{internalAddable:e,clsPrefix:n,name:c,disabled:u,label:d,tab:b,value:v,mergedClosable:g,style:R,trigger:y,$slots:{default:p}}=this,h=d!=null?d:b;return o("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?o("div",{class:`${n}-tabs-tab-pad`}):null,o("div",Object.assign({key:c,"data-name":c,"data-disabled":u?!0:void 0},rt({class:[`${n}-tabs-tab`,v===c&&`${n}-tabs-tab--active`,u&&`${n}-tabs-tab--disabled`,g&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:y==="click"?this.activateTab:void 0,onMouseenter:y==="hover"?this.activateTab:void 0,style:e?void 0:R},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),o("span",{class:`${n}-tabs-tab__label`},e?o(ot,null,o("div",{class:`${n}-tabs-tab__height-placeholder`},"\xA0"),o(st,{clsPrefix:n},{default:()=>o(yt,null)})):p?p():typeof h=="object"?h:it(h!=null?h:c)),g&&this.type==="card"?o(lt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),Tt=i("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[x("segment-type",[i("tabs-rail",[w("&.transition-disabled","color: red;",[i("tabs-tab",`
 transition: none;
 `)])])]),i("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[i("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),x("flex",[i("tabs-nav",{width:"100%"},[i("tabs-wrapper",{width:"100%"},[i("tabs-tab",{marginRight:0})])])]),i("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[_("prefix, suffix",`
 display: flex;
 align-items: center;
 `),_("prefix","padding-right: 16px;"),_("suffix","padding-left: 16px;")]),i("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[x("shadow-before",[w("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),x("shadow-after",[w("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),w("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),w("&::before",`
 left: 0;
 `),w("&::after",`
 right: 0;
 `)]),i("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),i("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),i("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),i("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("disabled",{cursor:"not-allowed"}),_("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),_("label",`
 display: flex;
 align-items: center;
 `)]),i("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("&.transition-disabled",`
 transition: none;
 `),x("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),i("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),i("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),w("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),w("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),w("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),i("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),x("line-type, bar-type",[i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),x("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),x("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),i("tabs-nav",[x("line-type",[_("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),x("card-type",[_("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[x("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[_("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ct("disabled",[w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),x("closable","padding-right: 6px;"),x("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),x("disabled","color: var(--n-tab-text-color-disabled);")]),i("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),$t=Object.assign(Object.assign({},ue.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ot=H({name:"Tabs",props:$t,setup(e,{slots:n}){var c,u,d,b;const{mergedClsPrefixRef:v,inlineThemeDisabled:g}=bt(e),R=ue("Tabs","-tabs",Tt,pt,e,v),y=S(null),p=S(null),h=S(null),f=S(null),m=S(null),C=S(!0),z=S(!0),l=oe(e,["labelSize","size"]),$=oe(e,["activeName","value"]),P=S((u=(c=$.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&u!==void 0?u:n.default?(b=(d=X(n.default())[0])===null||d===void 0?void 0:d.props)===null||b===void 0?void 0:b.name:null),T=wt($,P),J={id:0},pe=D(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});V(T,()=>{J.id=0,k()});function Q(){var t;const{value:a}=T;return a===null?null:(t=y.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function he(t){if(e.type==="card")return;const{value:a}=p;if(!!a&&t){const r=`${v.value}-tabs-bar--disabled`,{barWidth:s}=e;if(t.dataset.disabled==="true"?a.classList.add(r):a.classList.remove(r),typeof s=="number"&&t.offsetWidth>=s){const j=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${j}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}}function k(){if(e.type==="card")return;const t=Q();t&&he(t)}const E=S(null);let N=0,A=null;function ge(t){const a=E.value;if(a){N=t.getBoundingClientRect().height;const r=`${N}px`,s=()=>{a.style.height=r,a.style.maxHeight=r};A?(s(),A(),A=null):A=s}}function me(t){const a=E.value;if(a){const r=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${r}px`,a.style.height=`${Math.max(N,r)}px`};A?(A(),A=null,s()):A=s}}function xe(){const t=E.value;t&&(t.style.maxHeight="",t.style.height="")}const Z={value:[]},ee=S("next");function ye(t){const a=T.value;let r="next";for(const s of Z.value){if(s===a)break;if(s===t){r="prev";break}}ee.value=r,we(t)}function we(t){const{onActiveNameChange:a,onUpdateValue:r,"onUpdate:value":s}=e;a&&O(a,t),r&&O(r,t),s&&O(s,t),P.value=t}function Re(t){const{onClose:a}=e;a&&O(a,t)}function te(){const{value:t}=p;if(!t)return;const a="transition-disabled";t.classList.add(a),k(),t.classList.remove(a)}let ae=0;function Ce(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ae===t.contentRect.width)return;ae=t.contentRect.width;const{type:r}=e;(r==="line"||r==="bar")&&te(),r!=="segment"&&M((a=m.value)===null||a===void 0?void 0:a.$el)}const ze=G(Ce,64);V([()=>e.justifyContent,()=>e.size],()=>{U(()=>{const{type:t}=e;(t==="line"||t==="bar")&&te()})});const F=S(!1);function Se(t){var a;const{target:r,contentRect:{width:s}}=t,j=r.parentElement.offsetWidth;if(!F.value)j<s&&(F.value=!0);else{const{value:I}=f;if(!I)return;j-s>I.$el.offsetWidth&&(F.value=!1)}M((a=m.value)===null||a===void 0?void 0:a.$el)}const Pe=G(Se,64);function Te(){const{onAdd:t}=e;t&&t(),U(()=>{const a=Q(),{value:r}=m;!a||!r||r.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function M(t){if(!t)return;const{scrollLeft:a,scrollWidth:r,offsetWidth:s}=t;C.value=a<=0,z.value=a+s>=r}const $e=G(t=>{M(t.target)},64);ft(K,{triggerRef:L(e,"trigger"),tabStyleRef:L(e,"tabStyle"),paneClassRef:L(e,"paneClass"),paneStyleRef:L(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:L(e,"type"),closableRef:L(e,"closable"),valueRef:T,tabChangeIdRef:J,onBeforeLeaveRef:L(e,"onBeforeLeave"),activateTab:ye,handleClose:Re,handleAdd:Te}),Ct(()=>{k()}),ut(()=>{const{value:t}=h;if(!t)return;const{value:a}=v,r=`${a}-tabs-nav-scroll-wrapper--shadow-before`,s=`${a}-tabs-nav-scroll-wrapper--shadow-after`;C.value?t.classList.remove(r):t.classList.add(r),z.value?t.classList.remove(s):t.classList.add(s)});const ne=S(null);V(T,()=>{if(e.type==="segment"){const t=ne.value;t&&U(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ae={syncBarPosition:()=>{k()}},re=D(()=>{const{value:t}=l,{type:a}=e,r={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${r}`,{self:{barColor:j,closeIconColor:I,closeIconColorHover:_e,closeIconColorPressed:Be,tabColor:Le,tabBorderColor:We,paneTextColor:je,tabFontWeight:ke,tabBorderRadius:Ee,tabFontWeightActive:Fe,colorSegment:Ie,fontWeightStrong:Oe,tabColorSegment:De,closeSize:He,closeIconSize:Ne,closeColorHover:Me,closeColorPressed:Ve,closeBorderRadius:Ue,[B("panePadding",t)]:Xe,[B("tabPadding",s)]:Ge,[B("tabGap",s)]:Ye,[B("tabTextColor",a)]:qe,[B("tabTextColorActive",a)]:Ke,[B("tabTextColorHover",a)]:Je,[B("tabTextColorDisabled",a)]:Qe,[B("tabFontSize",t)]:Ze},common:{cubicBezierEaseInOut:et}}=R.value;return{"--n-bezier":et,"--n-color-segment":Ie,"--n-bar-color":j,"--n-tab-font-size":Ze,"--n-tab-text-color":qe,"--n-tab-text-color-active":Ke,"--n-tab-text-color-disabled":Qe,"--n-tab-text-color-hover":Je,"--n-pane-text-color":je,"--n-tab-border-color":We,"--n-tab-border-radius":Ee,"--n-close-size":He,"--n-close-icon-size":Ne,"--n-close-color-hover":Me,"--n-close-color-pressed":Ve,"--n-close-border-radius":Ue,"--n-close-icon-color":I,"--n-close-icon-color-hover":_e,"--n-close-icon-color-pressed":Be,"--n-tab-color":Le,"--n-tab-font-weight":ke,"--n-tab-font-weight-active":Fe,"--n-tab-padding":Ge,"--n-tab-gap":Ye,"--n-pane-padding":Xe,"--n-font-weight-strong":Oe,"--n-tab-color-segment":De}}),W=g?vt("tabs",D(()=>`${l.value[0]}${e.type[0]}`),re,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:T,renderedNames:new Set,tabsRailElRef:ne,tabsPaneWrapperRef:E,tabsElRef:y,barElRef:p,addTabInstRef:f,xScrollInstRef:m,scrollWrapperElRef:h,addTabFixed:F,tabWrapperStyle:pe,handleNavResize:ze,mergedSize:l,handleScroll:$e,handleTabsResize:Pe,cssVars:g?void 0:re,themeClass:W==null?void 0:W.themeClass,animationDirection:ee,renderNameListRef:Z,onAnimationBeforeLeave:ge,onAnimationEnter:me,onAnimationAfterEnter:xe,onRender:W==null?void 0:W.onRender},Ae)},render(){const{mergedClsPrefix:e,type:n,addTabFixed:c,addable:u,mergedSize:d,renderNameListRef:b,onRender:v,$slots:{default:g,prefix:R,suffix:y}}=this;v==null||v();const p=g?X(g()).filter(l=>l.type.__TAB_PANE__===!0):[],h=g?X(g()).filter(l=>l.type.__TAB__===!0):[],f=!h.length,m=n==="card",C=n==="segment",z=!m&&!C&&this.justifyContent;return b.value=[],o("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${d}-size`,z&&`${e}-tabs--flex`],style:this.cssVars},o("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav`]},ie(R,l=>l&&o("div",{class:`${e}-tabs-nav__prefix`},l)),C?o("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},f?p.map((l,$)=>(b.value.push(l.props.name),o(q,Object.assign({},l.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0}),l.children?{default:l.children.tab}:void 0))):h.map((l,$)=>(b.value.push(l.props.name),$===0?l:be(l)))):o(le,{onResize:this.handleNavResize},{default:()=>o("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},o(St,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const l=o("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),f?p.map((P,T)=>(b.value.push(P.props.name),Y(o(q,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&(!z||z==="center"||z==="start"||z==="end")}),P.children?{default:P.children.tab}:void 0)))):h.map((P,T)=>(b.value.push(P.props.name),Y(T!==0&&!z?be(P):P))),!c&&u&&m?ce(u,(f?p.length:h.length)!==0):null,z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let $=l;return m&&u&&($=o(le,{onResize:this.handleTabsResize},{default:()=>l})),o("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$,m?o("div",{class:`${e}-tabs-pad`}):null,m?null:o("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),c&&u&&m?ce(u,!0):null,ie(y,l=>l&&o("div",{class:`${e}-tabs-nav__suffix`},l))),f&&(this.animated?o("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},de(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):de(p,this.mergedValue,this.renderedNames)))}});function de(e,n,c,u,d,b,v){const g=[];return e.forEach(R=>{const{name:y,displayDirective:p,"display-directive":h}=R.props,f=C=>p===C||h===C,m=n===y;if(R.key!==void 0&&(R.key=y),m||f("show")||f("show:lazy")&&c.has(y)){c.has(y)||c.add(y);const C=!f("if");g.push(C?ht(R,[[xt,m]]):R)}}),v?o(gt,{name:`${v}-transition`,onBeforeLeave:u,onEnter:d,onAfterEnter:b},{default:()=>g}):g}function ce(e,n){return o(q,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function be(e){const n=mt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function Y(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{It as N,Ot as a};
