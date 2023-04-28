import{u as f}from"./use-rtl.b3456902.js";import{b as p}from"./Button.9dd5ee3c.js";import{g as s,Q as d,f as o,i as e,h as a,d as b,m as g,a8 as m,B as h,t as $}from"./index.536c7d72.js";const t="0!important",u="-1px!important";function i(r){return e(r+"-type",[o("& +",[s("button",{},[e(r+"-type",[a("border",{borderLeftWidth:t}),a("state-border",{left:u})])])])])}function n(r){return e(r+"-type",[o("& +",[s("button",[e(r+"-type",[a("border",{borderTopWidth:t}),a("state-border",{top:u})])])])])}const y=s("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[d("vertical",{flexDirection:"row"},[d("rtl",[s("button",[o("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),i("default"),e("ghost",[i("primary"),i("info"),i("success"),i("warning"),i("error")])])])]),e("vertical",{flexDirection:"column"},[s("button",[o("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),n("default"),e("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]),x={size:{type:String,default:void 0},vertical:Boolean},C=b({name:"ButtonGroup",props:x,setup(r){const{mergedClsPrefixRef:l,mergedRtlRef:c}=g(r);return m("-button-group",y,l),h(p,r),{rtlEnabled:f("ButtonGroup",c,l),mergedClsPrefix:l}},render(){const{mergedClsPrefix:r}=this;return $("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});export{C as N};
