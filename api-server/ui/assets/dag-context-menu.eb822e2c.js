import{g as I}from"./index.d67d1729.js";import{d as T,A as $,a as D,e as L,u as V,c as o,V as x,ak as B,bJ as O}from"./index.536c7d72.js";import{u as E}from"./common.cc1e0c6c.js";import{N as m}from"./Button.9dd5ee3c.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./SettingOutlined.06d5d07d.js";import"./PauseCircleOutlined.a11f5c7d.js";import"./CloseCircleOutlined.14b6a996.js";import"./CheckCircleOutlined.4f0aee70.js";import"./EditOutlined.57b65af3.js";import"./index.9c0cbe29.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";const s={"dag-context-menu":"_dag-context-menu_e40aw_17","menu-item":"_menu-item_e40aw_25"};function d(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!B(e)}const R={startDisplay:{type:Boolean,default:!1},menuDisplay:{type:Boolean,default:!1},taskInstance:{type:Object,require:!0},cell:{type:Object,require:!0},visible:{type:Boolean,default:!0},left:{type:Number,default:0},top:{type:Number,default:0}},Y=T({name:"dag-context-menu",props:R,emits:["hide","start","edit","viewLog","copyTask","removeTasks"],setup(e,t){const i=$("graph",D()),l=O(),c=Number(l.params.projectCode),n=()=>{t.emit("hide",!1)},y=()=>{var a;t.emit("start",Number((a=e.cell)==null?void 0:a.id))},g=()=>{var a;t.emit("edit",Number((a=e.cell)==null?void 0:a.id))},k=()=>{e.taskInstance&&t.emit("viewLog",e.taskInstance.id,e.taskInstance.taskType)},b=()=>{var r,p,f,h;const u=(r=e.cell)==null?void 0:r.data.taskType,_=E(((p=e.cell)==null?void 0:p.data.taskName)+"_"),C=Number((f=e.cell)==null?void 0:f.id),j=(h=e.cell)==null?void 0:h.data.flag;I(1,c).then(v=>{const[w]=v;t.emit("copyTask",_,w,C,u,j,{x:e.left+100,y:e.top+100})})},N=()=>{var a,u;(a=i.value)==null||a.removeCell(e.cell),t.emit("removeTasks",[Number((u=e.cell)==null?void 0:u.id)])};return L(()=>{document.addEventListener("click",()=>{n()})}),{startRunning:y,handleEdit:g,handleCopy:b,handleDelete:N,handleViewLog:k}},render(){let e,t,i,l,c;const{t:n}=V();return this.visible&&o("div",{class:s["dag-context-menu"],style:{left:`${this.left}px`,top:`${this.top}px`}},[this.startDisplay&&o(m,{class:`${s["menu-item"]}`,onClick:this.startRunning},d(e=n("project.node.start"))?e:{default:()=>[e]}),this.menuDisplay&&o(x,null,[o(m,{class:`${s["menu-item"]}`,onClick:this.handleEdit},d(t=n("project.node.edit"))?t:{default:()=>[t]}),o(m,{class:`${s["menu-item"]}`,onClick:this.handleCopy},d(i=n("project.node.copy"))?i:{default:()=>[i]}),o(m,{class:`${s["menu-item"]}`,onClick:this.handleDelete},d(l=n("project.node.delete"))?l:{default:()=>[l]})]),this.taskInstance&&o(m,{class:`${s["menu-item"]}`,onClick:this.handleViewLog},d(c=n("project.node.view_log"))?c:{default:()=>[c]})])}});export{Y as default};
