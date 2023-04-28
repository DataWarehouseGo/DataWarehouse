import{g as p,i,d as $,m as B,l as u,n as c,s as T,t as l,bA as z,q as R}from"./index.536c7d72.js";import{u as S}from"./use-compitable.7f10f89e.js";const V=p("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),P=Object.assign(Object.assign({},u.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),D=$({name:"Text",props:P,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=B(e),o=u("Typography","-text",V,z,e,r),s=c(()=>{const{depth:a,type:d}=e,h=d==="default"?a===void 0?"textColor":`textColor${a}Depth`:R("textColor",d),{common:{fontWeightStrong:m,fontFamilyMono:g,cubicBezierEaseInOut:f},self:{codeTextColor:x,codeBorderRadius:b,codeColor:v,codeBorder:y,[h]:C}}=o.value;return{"--n-bezier":f,"--n-text-color":C,"--n-font-weight-strong":m,"--n-font-famliy-mono":g,"--n-code-border-radius":b,"--n-code-text-color":x,"--n-code-color":v,"--n-code-border":y}}),t=n?T("text",c(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:r,compitableTag:S(e,["as","tag"]),cssVars:n?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,r,n;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r);return this.code?l("code",{class:s,style:this.cssVars},this.delete?l("del",null,t):t):this.delete?l("del",{class:s,style:this.cssVars},t):l(this.compitableTag||"span",{class:s,style:this.cssVars},t)}});export{D as N};
