import{u as C,bJ as W,b5 as V,a as m,t as o,d as L,at as x,e as q,w as B,ba as z,c as s,ak as A}from"./index.536c7d72.js";import{u as F}from"./index.990798b2.js";import{B as H}from"./index.eb38a2cf.js";import{d as $,q as G}from"./index.d67d1729.js";import{D as J,C as n,c as K}from"./column-width-config.7df9c412.js";import{E as X}from"./EditOutlined.57b65af3.js";import{E as Y}from"./ExclamationCircleOutlined.61140060.js";import{D as Q}from"./DeleteOutlined.0c0bc8fc.js";import{N as Z}from"./Ellipsis.b0d6a040.js";import{d as D}from"./Selection.2ed26059.js";import{N as y}from"./Tooltip.2dc588a0.js";import{N}from"./Button.9dd5ee3c.js";import{N as T}from"./Icon.36d6d904.js";import{N as ee}from"./Popconfirm.f3bbced5.js";import{N as d}from"./Space.8c5cfc39.js";import{u as te}from"./use-task.9f9336a3.js";import{T as ae}from"./task-type.8f811883.js";import{C as R}from"./index.67b00418.js";import oe from"./version-modal.2d58bc42.js";import{N as re}from"./detail-modal.1cea2091.js";import{S as se}from"./SearchOutlined.b0711796.js";import{N as _}from"./Input.4b8b409e.js";import{a as ie}from"./Select.eddb521d.js";import{N as le,a as ne}from"./DataTable.4d10e01f.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./VResizeObserver.0aad584a.js";import"./Popover.374e8a7f.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./utils.ba7f47bf.js";import"./format-length.a0cbed4d.js";import"./resolve-slot.12a336d2.js";import"./use-compitable.7f10f89e.js";import"./next-frame-once.e5ee25e8.js";import"./index.7a579f81.js";import"./use-locale.31127f4e.js";import"./use-rtl.b3456902.js";import"./Suffix.4fa63b0d.js";import"./is-browser.f4bc45cf.js";import"./keysOf.10525521.js";import"./get-slot.7f666ba0.js";import"./Card.1fac8dc8.js";import"./index.4d9d5980.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./detail.6585e533.js";import"./get-elements-by-json.eedeb8ee.js";import"./Form.b918a62f.js";import"./FormItem.67716b88.js";import"./Grid.f7dd02c2.js";import"./Spin.5bd91cff.js";import"./Radio.8f1c774c.js";import"./RadioGroup.5a44255f.js";import"./index.ebf19dc1.js";import"./Switch.57a995f1.js";import"./InputNumber.1f688029.js";import"./Add.4fb6bf29.js";import"./Checkbox.9b98fe51.js";import"./TreeSelect.c15d3653.js";import"./ArrowUpOutlined.6047a6cd.js";import"./index.5b6233e7.js";import"./index.5342f370.js";import"./index.b34b4239.js";import"./task-node.c5365e5f.js";import"./index.22428b53.js";import"./index.ea5b005f.js";import"./index.ef1910ce.js";import"./index.393f36dd.js";import"./index.40581ef3.js";import"./common.cc1e0c6c.js";import"./SettingOutlined.06d5d07d.js";import"./PauseCircleOutlined.a11f5c7d.js";import"./CloseCircleOutlined.14b6a996.js";import"./CheckCircleOutlined.4f0aee70.js";import"./index.9c0cbe29.js";import"./index.2c10ded7.js";import"./index.5b11598a.js";import"./index.c7ac6f91.js";import"./ProfileOutlined.57e6de9b.js";import"./ArrowDown.e4a7e0d5.js";import"./Dropdown.8c20a4f5.js";import"./ChevronRight.ffdb37b1.js";import"./use-keyboard.3c40c702.js";import"./Forward.5223a2c3.js";function pe(l){const{t}=C(),h=W(),c=Number(h.params.projectCode),u=e=>{e.columns=[{title:"#",key:"index",render:(a,p)=>p+1,...n.index},{title:t("project.task.task_name"),key:"taskName",...n.linkName,render:a=>o(H,{onClick:()=>void l(a,!0)},{default:()=>o(Z,n.linkEllipsis,()=>a.taskName)})},{title:t("project.task.workflow_name"),key:"processDefinitionName",...n.name},{title:t("project.task.workflow_state"),key:"processReleaseState",render:a=>{if(a.processReleaseState==="OFFLINE")return o(D,{type:"error",size:"small"},()=>t("project.task.offline"));if(a.processReleaseState==="ONLINE")return o(D,{type:"info",size:"small"},()=>t("project.task.online"))},width:130},{title:t("project.task.task_type"),key:"taskType",...n.type},{title:t("project.task.version"),key:"taskVersion",render:a=>o("span",null,"v"+a.taskVersion),...n.version},{title:t("project.task.upstream_tasks"),key:"upstreamTaskMap",render:a=>a.upstreamTaskMap.map((p,i)=>o("p",null,{default:()=>`[${i+1}] ${p}`})),...n.name},{title:t("project.task.create_time"),key:"taskCreateTime",...n.time},{title:t("project.task.update_time"),key:"taskUpdateTime",...n.time},{title:t("project.task.operation"),key:"operation",...n.operation(3),render(a){return o(d,null,{default:()=>[o(y,{},{trigger:()=>o(N,{circle:!0,type:"info",size:"small",disabled:["CONDITIONS","SWITCH"].includes(a.taskType)||!!a.processDefinitionCode&&a.processReleaseState==="ONLINE",onClick:()=>{l(a,!1)}},{icon:()=>o(T,null,{default:()=>o(X)})}),default:()=>t("project.task.edit")}),o(y,{},{trigger:()=>o(N,{circle:!0,type:"info",size:"small",onClick:()=>{e.showVersionModalRef=!0,e.row=a}},{icon:()=>o(T,null,{default:()=>o(Y)})}),default:()=>t("project.task.version")}),o(ee,{onPositiveClick:()=>{g(a)}},{trigger:()=>o(y,{},{trigger:()=>o(N,{circle:!0,type:"error",size:"small",disabled:!!a.processDefinitionCode&&a.processReleaseState==="ONLINE"},{icon:()=>o(T,null,{default:()=>o(Q)})}),default:()=>t("project.task.delete")}),default:()=>t("project.task.delete_confirm")})]})}}],e.tableWidth&&(e.tableWidth=K(e.columns))},r=V({columns:[],tableWidth:J,tableData:[],page:m(1),pageSize:m(10),searchTaskName:m(null),searchWorkflowName:m(null),totalPage:m(1),taskType:m(null),showVersionModalRef:m(!1),row:{},loadingRef:m(!1)}),g=e=>{$({code:e.taskCode},{projectCode:c}).then(()=>{k({pageSize:r.pageSize,pageNo:r.tableData.length===1&&r.page>1?r.page-1:r.page,searchTaskName:r.searchTaskName,searchWorkflowName:r.searchWorkflowName,taskType:r.taskType})})},k=e=>{if(r.loadingRef)return;r.loadingRef=!0;const{state:a}=F(G({...e},{projectCode:c}).then(p=>{r.tableData=p.totalList.map((i,S)=>(Object.keys(i.upstreamTaskMap).length>0?i.upstreamTaskMap=Object.keys(i.upstreamTaskMap).map(f=>i.upstreamTaskMap[f]):i.upstreamTaskMap=[],{...i})),r.totalPage=p.totalPage,r.loadingRef=!1}),{});return a};return{variables:r,getTableData:k,createColumns:u}}function me(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!A(l)}const Ft=L({name:"batch-task-definition",setup(){var w;const l=W(),t=Number(l.params.projectCode),{t:h}=C(),{task:c,onToggleShow:u,onTaskSave:r,onEditTask:g,onInitTask:k}=te(t),{variables:e,getTableData:a,createColumns:p}=pe(g),i=()=>{a({pageSize:e.pageSize,pageNo:e.page,searchTaskName:e.searchTaskName,searchWorkflowName:e.searchWorkflowName,taskType:e.taskType})},S=()=>{e.page=1,i()},f=()=>{e.page=1,i()},M=()=>{e.searchTaskName=null,f()},O=()=>{e.searchWorkflowName=null,f()},v=()=>{e.taskType=null,f()},b=()=>{e.showVersionModalRef=!1,i()},I=()=>{u(!0)},j=()=>{u(!1),k()},P=async U=>{await r(U.data)&&(j(),b())},E=(w=x())==null?void 0:w.appContext.config.globalProperties.trim;return q(()=>{p(e),i()}),B(C().locale,()=>{p(e)}),{t:h,...z(e),...z(c),onSearch:f,onClearSearchTaskName:M,onClearSearchWorkflowName:O,onClearSearchTaskType:v,requestData:i,onUpdatePageSize:S,onRefresh:b,onCreate:I,onTaskSubmit:P,onTaskCancel:j,projectCode:t,trim:E}},render(){let l;const{t,onSearch:h,requestData:c,onUpdatePageSize:u,onRefresh:r,onCreate:g,loadingRef:k}=this;return s(d,{vertical:!0},{default:()=>[s(R,null,{default:()=>[s(d,{justify:"space-between"},{default:()=>[s(N,{size:"small",type:"primary",onClick:g},me(l=t("project.task.create_task"))?l:{default:()=>[l]}),s(d,null,{default:()=>[s(_,{allowInput:this.trim,size:"small",clearable:!0,value:this.searchTaskName,"onUpdate:value":e=>this.searchTaskName=e,placeholder:t("project.task.task_name"),onClear:this.onClearSearchTaskName},null),s(_,{allowInput:this.trim,size:"small",clearable:!0,value:this.searchWorkflowName,"onUpdate:value":e=>this.searchWorkflowName=e,placeholder:t("project.task.workflow_name"),onClear:this.onClearSearchWorkflowName},null),s(ie,{value:this.taskType,"onUpdate:value":e=>this.taskType=e,size:"small",options:Object.keys(ae).map(e=>({value:e,label:e})),placeholder:t("project.task.task_type"),style:{width:"180px"},clearable:!0,onClear:this.onClearSearchTaskType},null),s(N,{size:"small",type:"primary",onClick:h},{default:()=>[s(T,null,{default:()=>[s(se,null,null)]})]})]})]})]}),s(R,{title:t("project.task.batch_task")},{default:()=>[s(d,{vertical:!0},{default:()=>[s(le,{loading:k,columns:this.columns,data:this.tableData,scrollX:this.tableWidth},null),s(d,{justify:"center"},{default:()=>[s(ne,{page:this.page,"onUpdate:page":e=>this.page=e,"page-size":this.pageSize,"onUpdate:page-size":e=>this.pageSize=e,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:c,onUpdatePageSize:u},null)]})]})]}),s(oe,{show:this.showVersionModalRef,row:this.row,onConfirm:()=>this.showVersionModalRef=!1,onRefresh:r},null),s(re,{show:this.taskShow,data:this.taskData,onSubmit:this.onTaskSubmit,onCancel:this.onTaskCancel,projectCode:this.projectCode,from:1,readonly:this.taskReadonly,saving:this.taskSaving},null)]})}});export{Ft as default};
