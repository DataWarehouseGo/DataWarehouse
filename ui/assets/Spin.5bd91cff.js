import{f as m,g as l,i as f,d as b,m as z,l as u,n as d,s as S,t as o,Y as C,T as x,bv as k,q as $}from"./index.536c7d72.js";import{f as T}from"./fade-in.cssr.ef9eaee7.js";import{u as w}from"./use-compitable.7f10f89e.js";import{p as R}from"./index.7a579f81.js";const B=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l("spin-container",{position:"relative"},[l("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[T()])]),l("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[f("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),l("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[f("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),N={small:20,medium:18,large:16},P=Object.assign(Object.assign({},u.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),I=b({name:"Spin",props:P,setup(s){const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=z(s),i=u("Spin","-spin",B,k,s,a),c=d(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:r},self:p}=i.value,{opacitySpinning:h,color:v,textColor:y}=p,g=typeof n=="number"?R(n):p[$("size",n)];return{"--n-bezier":r,"--n-opacity-spinning":h,"--n-size":g,"--n-color":v,"--n-text-color":y}}),t=e?S("spin",d(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),c,s):void 0;return{mergedClsPrefix:a,compitableShow:w(s,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:r}=s;return N[typeof r=="number"?"medium":r]}),cssVars:e?void 0:c,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var s,a;const{$slots:e,mergedClsPrefix:i,description:c}=this,t=e.icon&&this.rotate,n=(c||e.description)&&o("div",{class:`${i}-spin-description`},c||((s=e.description)===null||s===void 0?void 0:s.call(e))),r=e.icon?o("div",{class:[`${i}-spin-body`,this.themeClass]},o("div",{class:[`${i}-spin`,t&&`${i}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):o("div",{class:[`${i}-spin-body`,this.themeClass]},o(C,{clsPrefix:i,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),n);return(a=this.onRender)===null||a===void 0||a.call(this),e.default?o("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${i}-spin-content`,this.compitableShow&&`${i}-spin-content--spinning`]},e),o(x,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});export{I as N};
