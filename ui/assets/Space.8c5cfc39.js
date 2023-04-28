import{u as B}from"./use-rtl.b3456902.js";import{i as C}from"./is-browser.f4bc45cf.js";import{a7 as G,d as R,m as j,l as S,n as E,t as x,q as I}from"./index.536c7d72.js";import{f as L}from"./flatten.f4456e1c.js";import{g as M}from"./get-slot.7f666ba0.js";import{a as P,d as v}from"./index.7a579f81.js";const T=()=>G,A={name:"Space",self:T},N=A;let h;const O=()=>{if(!C)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),h=n}return h},W=Object.assign(Object.assign({},S.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),J=R({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:u}=j(e),a=S("Space","-space",void 0,N,e,n),f=B("Space",u,n);return{useGap:O(),rtlEnabled:f,mergedClsPrefix:n,margin:E(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[I("gap",t)]:g}}=a.value,{row:l,col:p}=P(g);return{horizontal:v(p),vertical:v(l)}})}},render(){const{vertical:e,align:n,inline:u,justify:a,itemStyle:f,margin:t,wrap:g,mergedClsPrefix:l,rtlEnabled:p,useGap:i,wrapItem:b,internalUseGap:w}=this,c=L(M(this));if(!c.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,$=`${t.vertical}px`,o=`${t.vertical/2}px`,s=c.length-1,d=a.startsWith("space-");return x("div",{role:"none",class:[`${l}-space`,p&&`${l}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(a)?"flex-"+a:a,flexWrap:!g||e?"nowrap":"wrap",marginTop:i||e?"":`-${o}`,marginBottom:i||e?"":`-${o}`,alignItems:n,gap:i?`${t.vertical}px ${t.horizontal}px`:""}},!b&&(i||w)?c:c.map((z,r)=>x("div",{role:"none",style:[f,{maxWidth:"100%"},i?"":e?{marginBottom:r!==s?$:""}:p?{marginLeft:d?a==="space-between"&&r===s?"":m:r!==s?y:"",marginRight:d?a==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:d?a==="space-between"&&r===s?"":m:r!==s?y:"",marginLeft:d?a==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}]},z)))}});export{J as N};