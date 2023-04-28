import{d as Q,am as We,e as de,an as Ht,a3 as Wt,n as D,a as M,Z as Kt,t as p,F as Dt,J as Ke,M as jt,b as Vt,g as O,h as T,f as Y,m as De,l as oe,A as Gt,s as ze,N as Ut,ao as Zt,ae as qt,q as j,ap as Yt,aq as Xt,ad as $,i as G,Q as te,B as Jt,z as se,x as Qt,y as eo,ar as to,w as Ee,R as oo,V as no,v as re}from"./index.536c7d72.js";import{V as $e,r as Fe}from"./VResizeObserver.0aad584a.js";import{c as je,a as ae,N as ro}from"./Popover.374e8a7f.js";import{d as _e,p as le}from"./index.7a579f81.js";import{b as lo}from"./next-frame-once.e5ee25e8.js";import{u as io}from"./use-locale.31127f4e.js";import{W as so}from"./Scrollbar.7c2bcabe.js";import{u as ao}from"./use-rtl.b3456902.js";import{r as Oe,c as co}from"./resolve-slot.12a336d2.js";import{c as Be}from"./Button.9dd5ee3c.js";import{N as uo}from"./Suffix.4fa63b0d.js";function dn(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1}function ho(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Me(e){return e&-e}class fo{constructor(o,t){this.l=o,this.min=t;const n=new Array(o+1);for(let r=0;r<o+1;++r)n[r]=0;this.ft=n}add(o,t){if(t===0)return;const{l:n,ft:r}=this;for(o+=1;o<=n;)r[o]+=t,o+=Me(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:t,min:n,l:r}=this;if(o>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=o*n;for(;o>0;)s+=t[o],o-=Me(o);return s}getBound(o){let t=0,n=this.l;for(;n>t;){const r=Math.floor((t+n)/2),s=this.sum(r);if(s>o){n=r;continue}else if(s<o){if(t===r)return this.sum(t+1)<=o?t+1:r;t=r}else return r}return t}}let ie;function vo(){return ie===void 0&&("matchMedia"in window?ie=window.matchMedia("(pointer:coarse)").matches:ie=!1),ie}let ye;function Ae(){return ye===void 0&&(ye="chrome"in window?window.devicePixelRatio:1),ye}const bo=ae(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[ae("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[ae("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),un=Q({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=We();bo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:je,ssr:o}),de(()=>{const{defaultScrollIndex:f,defaultScrollKey:v}=e;f!=null?C({index:f}):v!=null&&C({key:v})});let t=!1,n=!1;Ht(()=>{if(t=!1,!n){n=!0;return}C({top:d.value,left:h})}),Wt(()=>{t=!0,n||(n=!0)});const r=D(()=>{const f=new Map,{keyField:v}=e;return e.items.forEach((P,A)=>{f.set(P[v],A)}),f}),s=M(null),i=M(void 0),l=new Map,u=D(()=>{const{items:f,itemSize:v,keyField:P}=e,A=new fo(f.length,v);return f.forEach((N,H)=>{const _=N[P],W=l.get(_);W!==void 0&&A.add(H,W)}),A}),c=M(0);let h=0;const d=M(0),w=Kt(()=>Math.max(u.value.getBound(d.value-_e(e.paddingTop))-1,0)),y=D(()=>{const{value:f}=i;if(f===void 0)return[];const{items:v,itemSize:P}=e,A=w.value,N=Math.min(A+Math.ceil(f/P+1),v.length-1),H=[];for(let _=A;_<=N;++_)H.push(v[_]);return H}),C=(f,v)=>{if(typeof f=="number"){z(f,v,"auto");return}const{left:P,top:A,index:N,key:H,position:_,behavior:W,debounce:V=!0}=f;if(P!==void 0||A!==void 0)z(P,A,W);else if(N!==void 0)x(N,W,V);else if(H!==void 0){const Z=r.value.get(H);Z!==void 0&&x(Z,W,V)}else _==="bottom"?z(0,Number.MAX_SAFE_INTEGER,W):_==="top"&&z(0,0,W)};let k,S=null;function x(f,v,P){const{value:A}=u,N=A.sum(f)+_e(e.paddingTop);if(!P)s.value.scrollTo({left:0,top:N,behavior:v});else{k=f,S!==null&&window.clearTimeout(S),S=window.setTimeout(()=>{k=void 0,S=null},16);const{scrollTop:H,offsetHeight:_}=s.value;if(N>H){const W=A.get(f);N+W<=H+_||s.value.scrollTo({left:0,top:N+W-_,behavior:v})}else s.value.scrollTo({left:0,top:N,behavior:v})}}function z(f,v,P){s.value.scrollTo({left:f,top:v,behavior:P})}function E(f,v){var P,A,N;if(t||e.ignoreItemResize||R(v.target))return;const{value:H}=u,_=r.value.get(f),W=H.get(_),V=(N=(A=(P=v.borderBoxSize)===null||P===void 0?void 0:P[0])===null||A===void 0?void 0:A.blockSize)!==null&&N!==void 0?N:v.contentRect.height;if(V===W)return;V-e.itemSize===0?l.delete(f):l.set(f,V-e.itemSize);const q=V-W;if(q===0)return;H.add(_,q);const U=s.value;if(U!=null){if(k===void 0){const X=H.sum(_);U.scrollTop>X&&U.scrollBy(0,q)}else if(_<k)U.scrollBy(0,q);else if(_===k){const X=H.sum(_);V+X>U.scrollTop+U.offsetHeight&&U.scrollBy(0,q)}L()}c.value++}const b=!vo();let m=!1;function I(f){var v;(v=e.onScroll)===null||v===void 0||v.call(e,f),(!b||!m)&&L()}function B(f){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,f),b){const P=s.value;if(P!=null){if(f.deltaX===0&&(P.scrollTop===0&&f.deltaY<=0||P.scrollTop+P.offsetHeight>=P.scrollHeight&&f.deltaY>=0))return;f.preventDefault(),P.scrollTop+=f.deltaY/Ae(),P.scrollLeft+=f.deltaX/Ae(),L(),m=!0,lo(()=>{m=!1})}}}function F(f){if(t||R(f.target)||f.contentRect.height===i.value)return;i.value=f.contentRect.height;const{onResize:v}=e;v!==void 0&&v(f)}function L(){const{value:f}=s;f!=null&&(d.value=f.scrollTop,h=f.scrollLeft)}function R(f){let v=f;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:D(()=>{const{itemResizable:f}=e,v=le(u.value.sum());return c.value,[e.itemsStyle,{boxSizing:"content-box",height:f?"":v,minHeight:f?v:"",paddingTop:le(e.paddingTop),paddingBottom:le(e.paddingBottom)}]}),visibleItemsStyle:D(()=>(c.value,{transform:`translateY(${le(u.value.sum(w.value))})`})),viewportItems:y,listElRef:s,itemsElRef:M(null),scrollTo:C,handleListResize:F,handleListScroll:I,handleListWheel:B,handleItemResize:E}},render(){const{itemResizable:e,keyField:o,keyToIndex:t,visibleItemsTag:n}=this;return p($e,{onResize:this.handleListResize},{default:()=>{var r,s;return p("div",Dt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?p("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[p(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(i=>{const l=i[o],u=t.get(l),c=this.$slots.default({item:i,index:u})[0];return e?p($e,{key:l,onResize:h=>this.handleItemResize(l,h)},{default:()=>c}):(c.key=l,c)})})]):(s=(r=this.$slots).empty)===null||s===void 0?void 0:s.call(r)])}})}}),J="v-hidden",go=ae("[v-hidden]",{display:"none!important"}),Le=Q({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=M(null),n=M(null);function r(){const{value:i}=t,{getCounter:l,getTail:u}=e;let c;if(l!==void 0?c=l():c=n.value,!i||!c)return;c.hasAttribute(J)&&c.removeAttribute(J);const{children:h}=i,d=i.offsetWidth,w=[],y=o.tail?u==null?void 0:u():null;let C=y?y.offsetWidth:0,k=!1;const S=i.children.length-(o.tail?1:0);for(let z=0;z<S-1;++z){if(z<0)continue;const E=h[z];if(k){E.hasAttribute(J)||E.setAttribute(J,"");continue}else E.hasAttribute(J)&&E.removeAttribute(J);const b=E.offsetWidth;if(C+=b,w[z]=b,C>d){const{updateCounter:m}=e;for(let I=z;I>=0;--I){const B=S-1-I;m!==void 0?m(B):c.textContent=`${B}`;const F=c.offsetWidth;if(C-=w[I],C+F<=d||I===0){k=!0,z=I-1,y&&(z===-1?(y.style.maxWidth=`${d-F}px`,y.style.boxSizing="border-box"):y.style.maxWidth="");break}}}}const{onUpdateOverflow:x}=e;k?x!==void 0&&x(!0):(x!==void 0&&x(!1),c.setAttribute(J,""))}const s=We();return go.mount({id:"vueuc/overflow",head:!0,anchorMetaName:je,ssr:s}),de(r),{selfRef:t,counterRef:n,sync:r}},render(){const{$slots:e}=this;return Ke(this.sync),p("div",{class:"v-overflow",ref:"selfRef"},[jt(e,"default"),e.counter?e.counter():p("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function po(e,o){o&&(de(()=>{const{value:t}=e;t&&Fe.registerHandler(t,o)}),Vt(()=>{const{value:t}=e;t&&Fe.unregisterHandler(t)}))}const mo=Q({name:"Empty",render(){return p("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),p("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),hn=Q({props:{onFocus:Function,onBlur:Function},setup(e){return()=>p("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ne(e){return Array.isArray(e)?e:[e]}const Ie={STOP:"STOP"};function Ve(e,o){const t=o(e);e.children!==void 0&&t!==Ie.STOP&&e.children.forEach(n=>Ve(n,o))}function Co(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?i=>{i.isLeaf||(n.push(i.key),s(i.children))}:i=>{i.isLeaf||(i.isGroup||n.push(i.key),s(i.children))};function s(i){i.forEach(r)}return s(e),n}function yo(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function wo(e){return e.children}function xo(e){return e.key}function ko(){return!1}function So(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function Io(e){return e.disabled===!0}function zo(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function we(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function xe(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function Po(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function Ro(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function To(e){return(e==null?void 0:e.type)==="group"}function fn(e){const o=new Map;return e.forEach((t,n)=>{o.set(t.key,n)}),t=>{var n;return(n=o.get(t))!==null&&n!==void 0?n:null}}class Eo extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function $o(e,o,t,n){return ce(o.concat(e),t,n,!1)}function Fo(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let s=r.parent;for(;s!==null&&!(s.disabled||t.has(s.key));)t.add(s.key),s=s.parent}}),t}function _o(e,o,t,n){const r=ce(o,t,n,!1),s=ce(e,t,n,!0),i=Fo(e,t),l=[];return r.forEach(u=>{(s.has(u)||i.has(u))&&l.push(u)}),l.forEach(u=>r.delete(u)),r}function ke(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:s,cascade:i,leafOnly:l,checkStrategy:u,allowNotLoaded:c}=e;if(!i)return n!==void 0?{checkedKeys:Po(t,n),indeterminateKeys:Array.from(s)}:r!==void 0?{checkedKeys:Ro(t,r),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:h}=o;let d;r!==void 0?d=_o(r,t,o,c):n!==void 0?d=$o(n,t,o,c):d=ce(t,o,c,!1);const w=u==="parent",y=u==="child"||l,C=d,k=new Set,S=Math.max.apply(null,Array.from(h.keys()));for(let x=S;x>=0;x-=1){const z=x===0,E=h.get(x);for(const b of E){if(b.isLeaf)continue;const{key:m,shallowLoaded:I}=b;if(y&&I&&b.children.forEach(R=>{!R.disabled&&!R.isLeaf&&R.shallowLoaded&&C.has(R.key)&&C.delete(R.key)}),b.disabled||!I)continue;let B=!0,F=!1,L=!0;for(const R of b.children){const f=R.key;if(!R.disabled){if(L&&(L=!1),C.has(f))F=!0;else if(k.has(f)){F=!0,B=!1;break}else if(B=!1,F)break}}B&&!L?(w&&b.children.forEach(R=>{!R.disabled&&C.has(R.key)&&C.delete(R.key)}),C.add(m)):F&&k.add(m),z&&y&&C.has(m)&&C.delete(m)}}return{checkedKeys:Array.from(C),indeterminateKeys:Array.from(k)}}function ce(e,o,t,n){const{treeNodeMap:r,getChildren:s}=o,i=new Set,l=new Set(e);return e.forEach(u=>{const c=r.get(u);c!==void 0&&Ve(c,h=>{if(h.disabled)return Ie.STOP;const{key:d}=h;if(!i.has(d)&&(i.add(d),l.add(d),zo(h.rawNode,s))){if(n)return Ie.STOP;if(!t)throw new Eo}})}),l}function Oo(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const s=n.treeNodeMap;let i=e==null?null:(r=s.get(e))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return l.treeNode=null,l;for(;i;)!i.ignored&&(o||!i.isGroup)&&l.treeNodePath.push(i),i=i.parent;return l.treeNodePath.reverse(),t||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(u=>u.key),l}function Bo(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function Mo(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function He(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?Ao:Mo,s={reverse:o==="prev"};let i=!1,l=null;function u(c){if(c!==null){if(c===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!c.disabled||n)&&!c.ignored&&!c.isGroup){l=c;return}if(c.isGroup){const h=Pe(c,s);h!==null?l=h:u(r(c,t))}else{const h=r(c,!1);if(h!==null)u(h);else{const d=Lo(c);d!=null&&d.isGroup?u(r(d,t)):t&&u(r(c,!0))}}}}return u(e),l}function Ao(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function Lo(e){return e.parent}function Pe(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,s=t?r-1:0,i=t?-1:r,l=t?-1:1;for(let u=s;u!==i;u+=l){const c=n[u];if(!c.disabled&&!c.ignored)if(c.isGroup){const h=Pe(c,o);if(h!==null)return h}else return c}}return null}const No={getChild(){return this.ignored?null:Pe(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return He(this,"next",e)},getPrev(e={}){return He(this,"prev",e)}};function Ho(e,o){const t=o?new Set(o):void 0,n=[];function r(s){s.forEach(i=>{n.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&r(i.children)})}return r(e),n}function Wo(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function Ge(e,o,t,n,r,s=null,i=0){const l=[];return e.forEach((u,c)=>{var h;const d=Object.create(n);if(d.rawNode=u,d.siblings=l,d.level=i,d.index=c,d.isFirstChild=c===0,d.isLastChild=c+1===e.length,d.parent=s,!d.ignored){const w=r(u);Array.isArray(w)&&(d.children=Ge(w,o,t,n,r,d,i+1))}l.push(d),o.set(d.key,d),t.has(i)||t.set(i,[]),(h=t.get(i))===null||h===void 0||h.push(d)}),l}function vn(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:s=Io,getIgnored:i=ko,getIsGroup:l=To,getKey:u=xo}=o,c=(t=o.getChildren)!==null&&t!==void 0?t:wo,h=o.ignoreEmptyChildren?b=>{const m=c(b);return Array.isArray(m)?m.length?m:null:m}:c,d=Object.assign({get key(){return u(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return yo(this.rawNode,h)},get shallowLoaded(){return So(this.rawNode,h)},get ignored(){return i(this.rawNode)},contains(b){return Wo(this,b)}},No),w=Ge(e,n,r,d,h);function y(b){if(b==null)return null;const m=n.get(b);return m&&!m.isGroup&&!m.ignored?m:null}function C(b){if(b==null)return null;const m=n.get(b);return m&&!m.ignored?m:null}function k(b,m){const I=C(b);return I?I.getPrev(m):null}function S(b,m){const I=C(b);return I?I.getNext(m):null}function x(b){const m=C(b);return m?m.getParent():null}function z(b){const m=C(b);return m?m.getChild():null}const E={treeNodes:w,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:h,getFlattenedNodes(b){return Ho(w,b)},getNode:y,getPrev:k,getNext:S,getParent:x,getChild:z,getFirstAvailableNode(){return Bo(w)},getPath(b,m={}){return Oo(b,m,E)},getCheckedKeys(b,m={}){const{cascade:I=!0,leafOnly:B=!1,checkStrategy:F="all",allowNotLoaded:L=!1}=m;return ke({checkedKeys:we(b),indeterminateKeys:xe(b),cascade:I,leafOnly:B,checkStrategy:F,allowNotLoaded:L},E)},check(b,m,I={}){const{cascade:B=!0,leafOnly:F=!1,checkStrategy:L="all",allowNotLoaded:R=!1}=I;return ke({checkedKeys:we(m),indeterminateKeys:xe(m),keysToCheck:b==null?[]:Ne(b),cascade:B,leafOnly:F,checkStrategy:L,allowNotLoaded:R},E)},uncheck(b,m,I={}){const{cascade:B=!0,leafOnly:F=!1,checkStrategy:L="all",allowNotLoaded:R=!1}=I;return ke({checkedKeys:we(m),indeterminateKeys:xe(m),keysToUncheck:b==null?[]:Ne(b),cascade:B,leafOnly:F,checkStrategy:L,allowNotLoaded:R},E)},getNonLeafKeys(b={}){return Co(w,b)}};return E}const Ko=O("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[T("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Y("+",[T("description",`
 margin-top: 8px;
 `)])]),T("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),T("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Do=Object.assign(Object.assign({},oe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),bn=Q({name:"Empty",props:Do,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=De(e),n=oe("Empty","-empty",Ko,Zt,e,o),{localeRef:r}=io("Empty"),s=Gt(qt,null),i=D(()=>{var h,d,w;return(h=e.description)!==null&&h!==void 0?h:(w=(d=s==null?void 0:s.mergedComponentPropsRef.value)===null||d===void 0?void 0:d.Empty)===null||w===void 0?void 0:w.description}),l=D(()=>{var h,d;return((d=(h=s==null?void 0:s.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||d===void 0?void 0:d.renderIcon)||(()=>p(mo,null))}),u=D(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:d},self:{[j("iconSize",h)]:w,[j("fontSize",h)]:y,textColor:C,iconColor:k,extraTextColor:S}}=n.value;return{"--n-icon-size":w,"--n-font-size":y,"--n-bezier":d,"--n-text-color":C,"--n-icon-color":k,"--n-extra-text-color":S}}),c=t?ze("empty",D(()=>{let h="";const{size:d}=e;return h+=d[0],h}),u,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:l,localizedDescription:D(()=>i.value||r.value.description),cssVars:t?void 0:u,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),p("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?p("div",{class:`${o}-empty__icon`},e.icon?e.icon():p(Ut,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?p("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?p("div",{class:`${o}-empty__extra`},e.extra()):null)}}),jo=e=>{const{textColor2:o,primaryColorHover:t,primaryColorPressed:n,primaryColor:r,infoColor:s,successColor:i,warningColor:l,errorColor:u,baseColor:c,borderColor:h,opacityDisabled:d,tagColor:w,closeIconColor:y,closeIconColorHover:C,closeIconColorPressed:k,borderRadiusSmall:S,fontSizeMini:x,fontSizeTiny:z,fontSizeSmall:E,fontSizeMedium:b,heightMini:m,heightTiny:I,heightSmall:B,heightMedium:F,closeColorHover:L,closeColorPressed:R,buttonColor2Hover:f,buttonColor2Pressed:v,fontWeightStrong:P}=e;return Object.assign(Object.assign({},Xt),{closeBorderRadius:S,heightTiny:m,heightSmall:I,heightMedium:B,heightLarge:F,borderRadius:S,opacityDisabled:d,fontSizeTiny:x,fontSizeSmall:z,fontSizeMedium:E,fontSizeLarge:b,fontWeightStrong:P,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:f,colorPressedCheckable:v,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:n,border:`1px solid ${h}`,textColor:o,color:w,colorBordered:"rgb(250, 250, 252)",closeIconColor:y,closeIconColorHover:C,closeIconColorPressed:k,closeColorHover:L,closeColorPressed:R,borderPrimary:`1px solid ${$(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:$(r,{alpha:.12}),colorBorderedPrimary:$(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:$(r,{alpha:.12}),closeColorPressedPrimary:$(r,{alpha:.18}),borderInfo:`1px solid ${$(s,{alpha:.3})}`,textColorInfo:s,colorInfo:$(s,{alpha:.12}),colorBorderedInfo:$(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:$(s,{alpha:.12}),closeColorPressedInfo:$(s,{alpha:.18}),borderSuccess:`1px solid ${$(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:$(i,{alpha:.12}),colorBorderedSuccess:$(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:$(i,{alpha:.12}),closeColorPressedSuccess:$(i,{alpha:.18}),borderWarning:`1px solid ${$(l,{alpha:.35})}`,textColorWarning:l,colorWarning:$(l,{alpha:.15}),colorBorderedWarning:$(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:$(l,{alpha:.12}),closeColorPressedWarning:$(l,{alpha:.18}),borderError:`1px solid ${$(u,{alpha:.23})}`,textColorError:u,colorError:$(u,{alpha:.1}),colorBorderedError:$(u,{alpha:.08}),closeIconColorError:u,closeIconColorHoverError:u,closeIconColorPressedError:u,closeColorHoverError:$(u,{alpha:.12}),closeColorPressedError:$(u,{alpha:.18})})},Vo={name:"Tag",common:Yt,self:jo},Go=Vo,Uo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Zo=O("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[G("strong",`
 font-weight: var(--n-font-weight-strong);
 `),T("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),T("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),T("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),T("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 cursor: pointer;
 `),G("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[T("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),T("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),G("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),G("icon, avatar",[G("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),G("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),G("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[te("disabled",[Y("&:hover","background-color: var(--n-color-hover-checkable);",[te("checked","color: var(--n-text-color-hover-checkable);")]),Y("&:active","background-color: var(--n-color-pressed-checkable);",[te("checked","color: var(--n-text-color-pressed-checkable);")])]),G("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[te("disabled",[Y("&:hover","background-color: var(--n-color-checked-hover);"),Y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),qo=Object.assign(Object.assign(Object.assign({},oe.props),Uo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),Yo=eo("n-tag"),Se=Q({name:"Tag",props:qo,setup(e){const o=M(null),{mergedBorderedRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:s}=De(e),i=oe("Tag","-tag",Zo,Go,e,n);Jt(Yo,{roundRef:se(e,"round")});function l(y){if(!e.disabled&&e.checkable){const{checked:C,onCheckedChange:k,onUpdateChecked:S,"onUpdate:checked":x}=e;S&&S(!C),x&&x(!C),k&&k(!C)}}function u(y){if(e.internalStopClickPropagation&&y.stopPropagation(),!e.disabled){const{onClose:C}=e;C&&co(C,y)}}const c={setTextContent(y){const{value:C}=o;C&&(C.textContent=y)}},h=ao("Tag",s,n),d=D(()=>{const{type:y,size:C,color:{color:k,textColor:S}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:z,closeMargin:E,closeMarginRtl:b,borderRadius:m,opacityDisabled:I,textColorCheckable:B,textColorHoverCheckable:F,textColorPressedCheckable:L,textColorChecked:R,colorCheckable:f,colorHoverCheckable:v,colorPressedCheckable:P,colorChecked:A,colorCheckedHover:N,colorCheckedPressed:H,closeBorderRadius:_,fontWeightStrong:W,[j("colorBordered",y)]:V,[j("closeSize",C)]:Z,[j("closeIconSize",C)]:q,[j("fontSize",C)]:U,[j("height",C)]:X,[j("color",y)]:ue,[j("textColor",y)]:he,[j("border",y)]:fe,[j("closeIconColor",y)]:ne,[j("closeIconColorHover",y)]:ve,[j("closeIconColorPressed",y)]:be,[j("closeColorHover",y)]:ge,[j("closeColorPressed",y)]:pe}}=i.value;return{"--n-font-weight-strong":W,"--n-avatar-size-override":`calc(${X} - 8px)`,"--n-bezier":x,"--n-border-radius":m,"--n-border":fe,"--n-close-icon-size":q,"--n-close-color-pressed":pe,"--n-close-color-hover":ge,"--n-close-border-radius":_,"--n-close-icon-color":ne,"--n-close-icon-color-hover":ve,"--n-close-icon-color-pressed":be,"--n-close-icon-color-disabled":ne,"--n-close-margin":E,"--n-close-margin-rtl":b,"--n-close-size":Z,"--n-color":k||(t.value?V:ue),"--n-color-checkable":f,"--n-color-checked":A,"--n-color-checked-hover":N,"--n-color-checked-pressed":H,"--n-color-hover-checkable":v,"--n-color-pressed-checkable":P,"--n-font-size":U,"--n-height":X,"--n-opacity-disabled":I,"--n-padding":z,"--n-text-color":S||he,"--n-text-color-checkable":B,"--n-text-color-checked":R,"--n-text-color-hover-checkable":F,"--n-text-color-pressed-checkable":L}}),w=r?ze("tag",D(()=>{let y="";const{type:C,size:k,color:{color:S,textColor:x}={}}=e;return y+=C[0],y+=k[0],S&&(y+=`a${Be(S)}`),x&&(y+=`b${Be(x)}`),t.value&&(y+="c"),y}),d,e):void 0;return Object.assign(Object.assign({},c),{rtlEnabled:h,mergedClsPrefix:n,contentRef:o,mergedBordered:t,handleClick:l,handleCloseClick:u,cssVars:r?void 0:d,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender})},render(){var e,o;const{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:s}={},round:i,onRender:l,$slots:u}=this;l==null||l();const c=Oe(u.avatar,d=>d&&p("div",{class:`${t}-tag__avatar`},d)),h=Oe(u.icon,d=>d&&p("div",{class:`${t}-tag__icon`},d));return p("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:i,[`${t}-tag--avatar`]:c,[`${t}-tag--icon`]:h,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||c,p("span",{class:`${t}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&r?p(Qt,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,absolute:!0}):null,!this.checkable&&this.mergedBordered?p("div",{class:`${t}-tag__border`,style:{borderColor:s}}):null)}}),Xo=Y([O("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[O("base-loading",`
 color: var(--n-loading-color);
 `),O("base-selection-tags","min-height: var(--n-height);"),T("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),T("state-border",`
 z-index: 1;
 border-color: #0000;
 `),O("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[T("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),O("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[T("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),O("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),O("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),O("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[O("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[T("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),T("render-label",`
 color: var(--n-text-color);
 `)]),te("disabled",[Y("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),G("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),G("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),O("base-selection-label","background-color: var(--n-color-active);"),O("base-selection-tags","background-color: var(--n-color-active);")])]),G("disabled","cursor: not-allowed;",[T("arrow",`
 color: var(--n-arrow-color-disabled);
 `),O("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[O("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),T("render-label",`
 color: var(--n-text-color-disabled);
 `)]),O("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),O("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),O("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[T("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),T("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>G(`${e}-status`,[T("state-border",`border: var(--n-border-${e});`),te("disabled",[Y("&:hover",[T("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),G("active",[T("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),O("base-selection-label",`background-color: var(--n-color-active-${e});`),O("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),G("focus",[T("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),O("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),O("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Y("&:last-child","padding-right: 0;"),O("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[T("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),gn=Q({name:"InternalSelection",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(e){const o=M(null),t=M(null),n=M(null),r=M(null),s=M(null),i=M(null),l=M(null),u=M(null),c=M(null),h=M(null),d=M(!1),w=M(!1),y=M(!1),C=oe("InternalSelection","-internal-selection",Xo,to,e,se(e,"clsPrefix")),k=D(()=>e.clearable&&!e.disabled&&(y.value||e.active)),S=D(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),x=D(()=>{const a=e.selectedOption;if(!!a)return a[e.labelField]}),z=D(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function E(){var a;const{value:g}=o;if(g){const{value:K}=t;K&&(K.style.width=`${g.offsetWidth}px`,e.maxTagCount!=="responsive"&&((a=c.value)===null||a===void 0||a.sync()))}}function b(){const{value:a}=h;a&&(a.style.display="none")}function m(){const{value:a}=h;a&&(a.style.display="inline-block")}Ee(se(e,"active"),a=>{a||b()}),Ee(se(e,"pattern"),()=>{e.multiple&&Ke(E)});function I(a){const{onFocus:g}=e;g&&g(a)}function B(a){const{onBlur:g}=e;g&&g(a)}function F(a){const{onDeleteOption:g}=e;g&&g(a)}function L(a){const{onClear:g}=e;g&&g(a)}function R(a){const{onPatternInput:g}=e;g&&g(a)}function f(a){var g;(!a.relatedTarget||!(!((g=n.value)===null||g===void 0)&&g.contains(a.relatedTarget)))&&I(a)}function v(a){var g;!((g=n.value)===null||g===void 0)&&g.contains(a.relatedTarget)||B(a)}function P(a){L(a)}function A(){y.value=!0}function N(){y.value=!1}function H(a){!e.active||!e.filterable||a.target!==t.value&&a.preventDefault()}function _(a){F(a)}function W(a){if(a.key==="Backspace"&&!V.value&&!e.pattern.length){const{selectedOptions:g}=e;g!=null&&g.length&&_(g[g.length-1])}}const V=M(!1);let Z=null;function q(a){const{value:g}=o;if(g){const K=a.target.value;g.textContent=K,E()}V.value?Z=a:R(a)}function U(){V.value=!0}function X(){V.value=!1,R(Z),Z=null}function ue(a){var g;w.value=!0,(g=e.onPatternFocus)===null||g===void 0||g.call(e,a)}function he(a){var g;w.value=!1,(g=e.onPatternBlur)===null||g===void 0||g.call(e,a)}function fe(){var a,g;if(e.filterable)w.value=!1,(a=i.value)===null||a===void 0||a.blur(),(g=t.value)===null||g===void 0||g.blur();else if(e.multiple){const{value:K}=r;K==null||K.blur()}else{const{value:K}=s;K==null||K.blur()}}function ne(){var a,g,K;e.filterable?(w.value=!1,(a=i.value)===null||a===void 0||a.focus()):e.multiple?(g=r.value)===null||g===void 0||g.focus():(K=s.value)===null||K===void 0||K.focus()}function ve(){const{value:a}=t;a&&(m(),a.focus())}function be(){const{value:a}=t;a&&a.blur()}function ge(a){const{value:g}=l;g&&g.setTextContent(`+${a}`)}function pe(){const{value:a}=u;return a}function Ue(){return t.value}let me=null;function Ce(){me!==null&&window.clearTimeout(me)}function Ze(){e.disabled||e.active||(Ce(),me=window.setTimeout(()=>{d.value=!0},100))}function qe(){Ce()}function Ye(a){a||(Ce(),d.value=!1)}de(()=>{oo(()=>{const a=i.value;!a||(a.tabIndex=e.disabled||w.value?-1:0)})}),po(n,e.onResize);const{inlineThemeDisabled:Re}=e,Te=D(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:g},self:{borderRadius:K,color:Xe,placeholderColor:Je,textColor:Qe,paddingSingle:et,paddingMultiple:tt,caretColor:ot,colorDisabled:nt,textColorDisabled:rt,placeholderColorDisabled:lt,colorActive:it,boxShadowFocus:st,boxShadowActive:at,boxShadowHover:ct,border:dt,borderFocus:ut,borderHover:ht,borderActive:ft,arrowColor:vt,arrowColorDisabled:bt,loadingColor:gt,colorActiveWarning:pt,boxShadowFocusWarning:mt,boxShadowActiveWarning:Ct,boxShadowHoverWarning:yt,borderWarning:wt,borderFocusWarning:xt,borderHoverWarning:kt,borderActiveWarning:St,colorActiveError:It,boxShadowFocusError:zt,boxShadowActiveError:Pt,boxShadowHoverError:Rt,borderError:Tt,borderFocusError:Et,borderHoverError:$t,borderActiveError:Ft,clearColor:_t,clearColorHover:Ot,clearColorPressed:Bt,clearSize:Mt,arrowSize:At,[j("height",a)]:Lt,[j("fontSize",a)]:Nt}}=C.value;return{"--n-bezier":g,"--n-border":dt,"--n-border-active":ft,"--n-border-focus":ut,"--n-border-hover":ht,"--n-border-radius":K,"--n-box-shadow-active":at,"--n-box-shadow-focus":st,"--n-box-shadow-hover":ct,"--n-caret-color":ot,"--n-color":Xe,"--n-color-active":it,"--n-color-disabled":nt,"--n-font-size":Nt,"--n-height":Lt,"--n-padding-single":et,"--n-padding-multiple":tt,"--n-placeholder-color":Je,"--n-placeholder-color-disabled":lt,"--n-text-color":Qe,"--n-text-color-disabled":rt,"--n-arrow-color":vt,"--n-arrow-color-disabled":bt,"--n-loading-color":gt,"--n-color-active-warning":pt,"--n-box-shadow-focus-warning":mt,"--n-box-shadow-active-warning":Ct,"--n-box-shadow-hover-warning":yt,"--n-border-warning":wt,"--n-border-focus-warning":xt,"--n-border-hover-warning":kt,"--n-border-active-warning":St,"--n-color-active-error":It,"--n-box-shadow-focus-error":zt,"--n-box-shadow-active-error":Pt,"--n-box-shadow-hover-error":Rt,"--n-border-error":Tt,"--n-border-focus-error":Et,"--n-border-hover-error":$t,"--n-border-active-error":Ft,"--n-clear-size":Mt,"--n-clear-color":_t,"--n-clear-color-hover":Ot,"--n-clear-color-pressed":Bt,"--n-arrow-size":At}}),ee=Re?ze("internal-selection",D(()=>e.size[0]),Te,e):void 0;return{mergedTheme:C,mergedClearable:k,patternInputFocused:w,filterablePlaceholder:S,label:x,selected:z,showTagsPanel:d,isCompositing:V,counterRef:l,counterWrapperRef:u,patternInputMirrorRef:o,patternInputRef:t,selfRef:n,multipleElRef:r,singleElRef:s,patternInputWrapperRef:i,overflowRef:c,inputTagElRef:h,handleMouseDown:H,handleFocusin:f,handleClear:P,handleMouseEnter:A,handleMouseLeave:N,handleDeleteOption:_,handlePatternKeyDown:W,handlePatternInputInput:q,handlePatternInputBlur:he,handlePatternInputFocus:ue,handleMouseEnterCounter:Ze,handleMouseLeaveCounter:qe,handleFocusout:v,handleCompositionEnd:X,handleCompositionStart:U,onPopoverUpdateShow:Ye,focus:ne,focusInput:ve,blur:fe,blurInput:be,updateCounter:ge,getCounter:pe,getTail:Ue,renderLabel:e.renderLabel,cssVars:Re?void 0:Te,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:o,size:t,disabled:n,filterable:r,maxTagCount:s,bordered:i,clsPrefix:l,onRender:u,renderTag:c,renderLabel:h}=this;u==null||u();const d=s==="responsive",w=typeof s=="number",y=d||w,C=p(so,null,{default:()=>p(uo,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var S,x;return(x=(S=this.$slots).arrow)===null||x===void 0?void 0:x.call(S)}})});let k;if(o){const{labelField:S}=this,x=v=>p("div",{class:`${l}-base-selection-tag-wrapper`,key:v.value},c?c({option:v,handleClose:()=>this.handleDeleteOption(v)}):p(Se,{size:t,closable:!v.disabled,disabled:n,onClose:()=>this.handleDeleteOption(v),internalCloseFocusable:!1,internalStopClickPropagation:!0},{default:()=>h?h(v,!0):re(v[S],v,!0)})),z=(w?this.selectedOptions.slice(0,s):this.selectedOptions).map(x),E=r?p("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},p("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:n,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),p("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,b=d?()=>p("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},p(Se,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:n})):void 0;let m;if(w){const v=this.selectedOptions.length-s;v>0&&(m=p("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},p(Se,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:n},{default:()=>`+${v}`})))}const I=d?r?p(Le,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>z,counter:b,tail:()=>E}):p(Le,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>z,counter:b}):w?z.concat(m):z,B=y?()=>p("div",{class:`${l}-base-selection-popover`},d?z:this.selectedOptions.map(x)):void 0,F=y?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,R=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?p("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},this.placeholder):null,f=r?p("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},I,d?null:E,C):p("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:n?void 0:0},I,C);k=p(no,null,y?p(ro,Object.assign({},F,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>f,default:B}):f,R)}else if(r){const S=this.pattern||this.isCompositing,x=this.active?!S:!this.selected,z=this.active?!1:this.selected;k=p("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},p("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:n,disabled:n,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),z?p("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},p("div",{class:`${l}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):re(this.label,this.selectedOption,!0))):null,x?p("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},p("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,C)}else k=p("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?p("div",{class:`${l}-base-selection-input`,title:ho(this.label),key:"input"},p("div",{class:`${l}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):re(this.label,this.selectedOption,!0))):p("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},this.placeholder),C);return p("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,i?p("div",{class:`${l}-base-selection__border`}):null,i?p("div",{class:`${l}-base-selection__state-border`}):null)}});export{hn as F,bn as N,un as V,fn as a,gn as b,vn as c,Se as d,Ho as f,ho as g,dn as h,po as u};
