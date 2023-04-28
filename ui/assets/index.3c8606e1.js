import{C as y}from"./index.67b00418.js";import{u as N,t as M,b5 as T,a as u,d as U,at as O,e as G,ba as H,c as a,ak as W}from"./index.536c7d72.js";import{b as q}from"./index.b34b4239.js";import{e as x}from"./index.40581ef3.js";import L from"./table-action.aafe34fe.js";import{_ as A}from"./lodash.bce5b897.js";import{p as b}from"./common.cc1e0c6c.js";import{C as d,c as F,D as V}from"./column-width-config.7df9c412.js";import{f as z}from"./index.9c0cbe29.js";import B from"./form-modal.f1f1c493.js";import{S as X}from"./SearchOutlined.b0711796.js";import{N as h}from"./Space.8c5cfc39.js";import{N as S}from"./Button.9dd5ee3c.js";import{N as E}from"./Input.4b8b409e.js";import{N as J}from"./Icon.36d6d904.js";import{N as K,a as Q}from"./DataTable.4d10e01f.js";import"./Card.1fac8dc8.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./index.7a579f81.js";import"./keysOf.10525521.js";import"./service.4ca56d82.js";import"./EditOutlined.57b65af3.js";import"./Tooltip.2dc588a0.js";import"./Popover.374e8a7f.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./utils.ba7f47bf.js";import"./format-length.a0cbed4d.js";import"./use-compitable.7f10f89e.js";import"./next-frame-once.e5ee25e8.js";import"./Switch.57a995f1.js";import"./is-browser.f4bc45cf.js";import"./get-slot.7f666ba0.js";import"./SettingOutlined.06d5d07d.js";import"./PauseCircleOutlined.a11f5c7d.js";import"./CloseCircleOutlined.14b6a996.js";import"./CheckCircleOutlined.4f0aee70.js";import"./index.4d9d5980.js";import"./index.eb38a2cf.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./Form.b918a62f.js";import"./FormItem.67716b88.js";import"./Select.eddb521d.js";import"./use-locale.31127f4e.js";import"./Selection.2ed26059.js";import"./Suffix.4fa63b0d.js";import"./InputNumber.1f688029.js";import"./Add.4fb6bf29.js";import"./ArrowDown.e4a7e0d5.js";import"./Checkbox.9b98fe51.js";import"./RadioGroup.5a44255f.js";import"./Radio.8f1c774c.js";import"./Dropdown.8c20a4f5.js";import"./ChevronRight.ffdb37b1.js";import"./use-keyboard.3c40c702.js";import"./Ellipsis.b0d6a040.js";import"./Forward.5223a2c3.js";function C(s=(o,n,e,g,i,p)=>{},r=()=>{}){const{t:o}=N(),n=[{title:"#",key:"index",render:(i,p)=>p+1,...d.index},{title:o("resource.task_group_option.name"),key:"name",...d.name},{title:o("resource.task_group_option.project_name"),key:"projectName",...d.name},{title:o("resource.task_group_option.resource_pool_size"),key:"groupSize",width:160},{title:o("resource.task_group_option.resource_used_pool_size"),key:"useSize",width:140},{title:o("resource.task_group_option.desc"),key:"description",...d.note},{title:o("resource.task_group_option.create_time"),key:"createTime",...d.time},{title:o("resource.task_group_option.update_time"),key:"updateTime",...d.time},{title:o("resource.task_group_option.actions"),key:"actions",...d.operation(3),render:i=>M(L,{row:i,onResetTableData:()=>{e.page>1&&e.tableData.length===1&&(e.page-=1),r()},onUpdateItem:(p,t,f,m,l,_)=>{s(p,t,f,m,l,_)}})}],e=T({tableData:[],tableWidth:F(n)||V,page:u(1),pageSize:u(10),name:u(null),totalPage:u(1),loadingRef:u(!1)});return{getTableData:i=>{e.loadingRef||(e.loadingRef=!0,Promise.all([q(i),x()]).then(p=>{e.totalPage=p[0].totalPage,e.tableData=p[0].totalList.map((t,f)=>{let m="";if(p[1]){const l=A.find(p[1],{code:t.projectCode});l&&(m=l.name)}return t.projectName=m,t.createTime=z(b(t.createTime),"yyyy-MM-dd HH:mm:ss"),t.updateTime=z(b(t.updateTime),"yyyy-MM-dd HH:mm:ss"),{...t}}),e.loadingRef=!1}))},variables:e,columns:n}}function Y(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!W(s)}const it=U({name:"taskGroupOption",setup(){var k;const{t:s}=N(),{variables:r,getTableData:o}=C(),n=u(!1),e=u(0),g=u(),i=T({id:0,name:"",projectCode:0,groupSize:0,status:1,description:""}),p=()=>{o({pageSize:r.pageSize,pageNo:r.page,name:r.name})},t=()=>{o({pageSize:r.pageSize,pageNo:r.page,name:r.name})},f=()=>{n.value=!1},m=()=>{n.value=!1,t()},l=()=>{r.page=1,t()},_=(P,I,R,w,v)=>{e.value=1,n.value=!0,i.id=P,i.name=I,i.projectCode=R,i.groupSize=w,i.description=v},c=()=>{t()},D=()=>{e.value=0,n.value=!0},j=(k=O())==null?void 0:k.appContext.config.globalProperties.trim;return G(()=>{p()}),{...H(r),t:s,onCreate:D,onSearch:c,searchParamRef:g,resetTableData:t,onUpdatePageSize:l,updateItem:_,showModalRef:n,modelStatusRef:e,onCancel:f,onConfirm:m,updateItemData:i,trim:j}},render(){let s;const{t:r,showModalRef:o,modelStatusRef:n,onCancel:e,onConfirm:g,updateItemData:i,resetTableData:p,onUpdatePageSize:t,updateItem:f,onSearch:m,loadingRef:l}=this,{columns:_}=C(f,p);return a(h,{vertical:!0},{default:()=>[a(y,null,{default:()=>[a(h,{justify:"space-between"},{default:()=>[a(S,{size:"small",type:"primary",onClick:()=>this.onCreate()},Y(s=r("resource.task_group_option.create"))?s:{default:()=>[s]}),a(h,null,{default:()=>[a(E,{allowInput:this.trim,size:"small",value:this.name,"onUpdate:value":c=>this.name=c,placeholder:r("resource.task_group_option.please_enter_keywords")},null),a(S,{size:"small",type:"primary",onClick:m},{default:()=>[a(J,null,{default:()=>[a(X,null,null)]})]})]})]})]}),a(y,{title:r("resource.task_group_option.option")},{default:()=>[a(h,{vertical:!0},{default:()=>[a(K,{loading:l,columns:_,size:"small",data:this.tableData,striped:!0,scrollX:this.tableWidth},null),a(h,{justify:"center"},{default:()=>[a(Q,{page:this.page,"onUpdate:page":c=>this.page=c,"page-size":this.pageSize,"onUpdate:page-size":c=>this.pageSize=c,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:p,onUpdatePageSize:t},null)]})]})]}),o&&a(B,{show:o,onCancel:e,onConfirm:g,data:i,status:n},null)]})}});export{it as default};
