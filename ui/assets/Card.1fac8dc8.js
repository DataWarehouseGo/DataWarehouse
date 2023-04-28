import{u as J}from"./use-rtl.b3456902.js";import{f as t,g as b,i as d,h as n,j as Q,a2 as U,k as X,d as Y,m as Z,l as u,n as h,s as ee,t as s,x as oe,a6 as re,q as p}from"./index.536c7d72.js";import{r as g,c as te}from"./resolve-slot.12a336d2.js";import{g as ne}from"./index.7a579f81.js";import{k as ae}from"./keysOf.10525521.js";const de=t([b("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[d("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),d("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),d("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),d("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),d("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[b("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),b("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),d("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),d("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),Q(b("card",{background:"var(--n-color-modal)"})),U(b("card",{background:"var(--n-color-popover)"})),b("card",[X({background:"var(--n-color-modal)"})])]),x={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},fe=ae(x),se=Object.assign(Object.assign({},u.props),x),ve=Y({name:"Card",props:se,setup(e){const v=()=>{const{onClose:c}=e;c&&te(c)},{inlineThemeDisabled:f,mergedClsPrefixRef:o,mergedRtlRef:m}=Z(e),l=u("Card","-card",de,re,e,o),i=J("Card",m,o),r=h(()=>{const{size:c}=e,{self:{color:z,colorModal:C,colorTarget:y,textColor:S,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:T,borderRadius:B,lineHeight:R,closeIconColor:_,closeIconColorHover:P,closeIconColorPressed:O,closeColorHover:j,closeColorPressed:E,closeBorderRadius:I,closeIconSize:M,closeSize:F,boxShadow:H,colorPopover:N,colorEmbedded:V,[p("padding",c)]:K,[p("fontSize",c)]:L,[p("titleFontSize",c)]:W},common:{cubicBezierEaseInOut:q}}=l.value,{top:A,left:D,bottom:G}=ne(K);return{"--n-bezier":q,"--n-border-radius":B,"--n-color":e.embedded?V:z,"--n-color-modal":C,"--n-color-popover":N,"--n-color-target":y,"--n-text-color":S,"--n-line-height":R,"--n-action-color":T,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":_,"--n-close-icon-color-hover":P,"--n-close-icon-color-pressed":O,"--n-close-color-hover":j,"--n-close-color-pressed":E,"--n-border-color":w,"--n-box-shadow":H,"--n-padding-top":A,"--n-padding-bottom":G,"--n-padding-left":D,"--n-font-size":L,"--n-title-font-size":W,"--n-close-size":F,"--n-close-icon-size":M,"--n-close-border-radius":I}}),a=f?ee("card",h(()=>e.size[0]),r,e):void 0;return{rtlEnabled:i,mergedClsPrefix:o,mergedTheme:l,handleCloseClick:v,cssVars:f?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:e,bordered:v,hoverable:f,mergedClsPrefix:o,rtlEnabled:m,onRender:l,$slots:i}=this;return l==null||l(),s("div",{class:[`${o}-card`,this.themeClass,{[`${o}-card--rtl`]:m,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:v,[`${o}-card--hoverable`]:f}],style:this.cssVars,role:this.role},g(i.cover,r=>r&&s("div",{class:`${o}-card-cover`,role:"none"},r)),g(i.header,r=>r||this.title||this.closable?s("div",{class:`${o}-card-header`,style:this.headerStyle},s("div",{class:`${o}-card-header__main`,role:"heading"},r||[this.title]),g(i["header-extra"],a=>a&&s("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},a)),this.closable?s(oe,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),g(i.default,r=>r&&s("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),g(i.footer,r=>r&&[s("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),g(i.action,r=>r&&s("div",{class:`${o}-card__action`,role:"none"},r)))}});export{ve as N,fe as a,x as c};
