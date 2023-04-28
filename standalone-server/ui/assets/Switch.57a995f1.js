import{ap as le,bG as se,ad as de,g as P,h as t,a1 as L,f as T,i as l,Q as M,d as ce,m as ue,l as O,a as N,z as he,n as _,s as be,t as a,X as fe,Y as ge,q as g}from"./index.536c7d72.js";import{u as ve}from"./Button.9dd5ee3c.js";import{u as me}from"./Scrollbar.7c2bcabe.js";import{i as D,r as v,c as W}from"./resolve-slot.12a336d2.js";import{p as j,d as s}from"./index.7a579f81.js";const we=e=>{const{primaryColor:d,opacityDisabled:h,borderRadius:n,textColor3:r}=e,m="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},se),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:h,railColor:m,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${de(d,{alpha:.2})}`})},pe={name:"Switch",common:le,self:we},ye=pe,xe=P("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),P("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[L({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),T("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),M("disabled",[M("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[T("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[T("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[L()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ke=Object.assign(Object.assign({},O.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),_e=ce({name:"Switch",props:ke,setup(e){const{mergedClsPrefixRef:d,inlineThemeDisabled:h}=ue(e),n=O("Switch","-switch",xe,ye,e,d),r=ve(e),{mergedSizeRef:m,mergedDisabledRef:b}=r,y=N(e.defaultValue),C=he(e,"value"),f=me(C,y),x=_(()=>f.value===e.checkedValue),w=N(!1),i=N(!1),c=_(()=>{const{railStyle:o}=e;if(!!o)return o({focused:i.value,checked:x.value})});function u(o){const{"onUpdate:value":R,onChange:S,onUpdateValue:V}=e,{nTriggerFormInput:$,nTriggerFormChange:z}=r;R&&W(R,o),V&&W(V,o),S&&W(S,o),y.value=o,$(),z()}function U(){const{nTriggerFormFocus:o}=r;o()}function A(){const{nTriggerFormBlur:o}=r;o()}function H(){e.loading||b.value||(f.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function I(){i.value=!0,U()}function E(){i.value=!1,A(),w.value=!1}function X(o){e.loading||b.value||o.key===" "&&(f.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),w.value=!1)}function Y(o){e.loading||b.value||o.key===" "&&(o.preventDefault(),w.value=!0)}const K=_(()=>{const{value:o}=m,{self:{opacityDisabled:R,railColor:S,railColorActive:V,buttonBoxShadow:$,buttonColor:z,boxShadowFocus:q,loadingColor:G,textColor:Q,iconColor:J,[g("buttonHeight",o)]:k,[g("buttonWidth",o)]:Z,[g("buttonWidthPressed",o)]:ee,[g("railHeight",o)]:B,[g("railWidth",o)]:F,[g("railBorderRadius",o)]:te,[g("buttonBorderRadius",o)]:oe},common:{cubicBezierEaseInOut:ie}}=n.value,ae=j((s(B)-s(k))/2),ne=j(Math.max(s(B),s(k))),re=s(B)>s(k)?F:j(s(F)+s(k)-s(B));return{"--n-bezier":ie,"--n-button-border-radius":oe,"--n-button-box-shadow":$,"--n-button-color":z,"--n-button-width":Z,"--n-button-width-pressed":ee,"--n-button-height":k,"--n-height":ne,"--n-offset":ae,"--n-opacity-disabled":R,"--n-rail-border-radius":te,"--n-rail-color":S,"--n-rail-color-active":V,"--n-rail-height":B,"--n-rail-width":F,"--n-width":re,"--n-box-shadow-focus":q,"--n-loading-color":G,"--n-text-color":Q,"--n-icon-color":J}}),p=h?be("switch",_(()=>m.value[0]),K,e):void 0;return{handleClick:H,handleBlur:E,handleFocus:I,handleKeyup:X,handleKeydown:Y,mergedRailStyle:c,pressed:w,mergedClsPrefix:d,mergedValue:f,checked:x,mergedDisabled:b,cssVars:h?void 0:K,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:h,mergedRailStyle:n,onRender:r,$slots:m}=this;r==null||r();const{checked:b,unchecked:y,icon:C,"checked-icon":f,"unchecked-icon":x}=m,w=!(D(C)&&D(f)&&D(x));return a("div",{role:"switch","aria-checked":h,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,h&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},v(b,i=>v(y,c=>i||c?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),i),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),c)):null)),a("div",{class:`${e}-switch__button`},v(C,i=>v(f,c=>v(x,u=>a(fe,null,{default:()=>this.loading?a(ge,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||i)?a("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||i):!this.checked&&(u||i)?a("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||i):null})))),v(b,i=>i&&a("div",{key:"checked",class:`${e}-switch__checked`},i)),v(y,i=>i&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{_e as N};
