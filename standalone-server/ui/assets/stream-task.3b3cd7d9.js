import{u as g,bJ as j,b5 as P,t as r,d as W,at as _,e as I,w as x,c as e}from"./index.536c7d72.js";import{B as E}from"./index.eb38a2cf.js";import{q as L}from"./index.d67d1729.js";import{D as M,C as l,c as O}from"./column-width-config.7df9c412.js";import{P as R}from"./PlayCircleOutlined.a491bf9f.js";import{E as q}from"./EditOutlined.57b65af3.js";import{N as B}from"./Ellipsis.b0d6a040.js";import{N as S}from"./Tooltip.2dc588a0.js";import{N}from"./Button.9dd5ee3c.js";import{N as h}from"./Icon.36d6d904.js";import{N as c}from"./Space.8c5cfc39.js";import{u as V}from"./use-task.9f9336a3.js";import A from"./start-modal.d8070437.js";import{C}from"./index.67b00418.js";import{N as F}from"./detail-modal.1cea2091.js";import{S as G}from"./SearchOutlined.b0711796.js";import{N as b}from"./Input.4b8b409e.js";import{N as H,a as J}from"./DataTable.4d10e01f.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./Popover.374e8a7f.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./utils.ba7f47bf.js";import"./format-length.a0cbed4d.js";import"./resolve-slot.12a336d2.js";import"./use-compitable.7f10f89e.js";import"./next-frame-once.e5ee25e8.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.b3456902.js";import"./get-slot.7f666ba0.js";import"./index.7a579f81.js";import"./index.4d9d5980.js";import"./keysOf.10525521.js";import"./Card.1fac8dc8.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./use-start.cce1fa75.js";import"./index.22428b53.js";import"./index.5b6233e7.js";import"./index.5342f370.js";import"./index.393f36dd.js";import"./PlusCircleOutlined.da9dc67f.js";import"./DeleteOutlined.0c0bc8fc.js";import"./Form.b918a62f.js";import"./FormItem.67716b88.js";import"./Select.eddb521d.js";import"./use-locale.31127f4e.js";import"./Selection.2ed26059.js";import"./Suffix.4fa63b0d.js";import"./Switch.57a995f1.js";import"./detail.6585e533.js";import"./get-elements-by-json.eedeb8ee.js";import"./Grid.f7dd02c2.js";import"./Spin.5bd91cff.js";import"./Radio.8f1c774c.js";import"./RadioGroup.5a44255f.js";import"./index.ebf19dc1.js";import"./InputNumber.1f688029.js";import"./Add.4fb6bf29.js";import"./Checkbox.9b98fe51.js";import"./TreeSelect.c15d3653.js";import"./ArrowUpOutlined.6047a6cd.js";import"./index.b34b4239.js";import"./task-node.c5365e5f.js";import"./task-type.8f811883.js";import"./index.ea5b005f.js";import"./index.ef1910ce.js";import"./index.40581ef3.js";import"./common.cc1e0c6c.js";import"./SettingOutlined.06d5d07d.js";import"./PauseCircleOutlined.a11f5c7d.js";import"./CloseCircleOutlined.14b6a996.js";import"./CheckCircleOutlined.4f0aee70.js";import"./index.9c0cbe29.js";import"./index.2c10ded7.js";import"./index.5b11598a.js";import"./index.c7ac6f91.js";import"./ProfileOutlined.57e6de9b.js";import"./ArrowDown.e4a7e0d5.js";import"./Dropdown.8c20a4f5.js";import"./ChevronRight.ffdb37b1.js";import"./use-keyboard.3c40c702.js";import"./Forward.5223a2c3.js";function X(n){const{t:i}=g(),u=j(),d=Number(u.params.projectCode),m=s=>{s.columns=[{title:"#",key:"index",render:(t,p)=>p+1,...l.index},{title:i("project.task.task_name"),key:"taskName",...l.linkName,render:t=>r(E,{onClick:()=>void n(t,!0)},{default:()=>r(B,l.linkEllipsis,()=>t.taskName)})},{title:i("project.task.version"),key:"taskVersion",render:t=>r("span",null,"v"+t.taskVersion),...l.version},{title:i("project.task.workflow_name"),key:"processDefinitionName",...l.name},{title:i("project.task.task_type"),key:"taskType",...l.type},{title:i("project.task.create_time"),key:"taskCreateTime",...l.time},{title:i("project.task.update_time"),key:"taskUpdateTime",...l.time},{title:i("project.task.operation"),key:"operation",...l.operation(2),render(t){return r(c,null,{default:()=>[r(S,{},{trigger:()=>r(N,{circle:!0,type:"info",size:"small",onClick:()=>f(t)},{icon:()=>r(h,null,{default:()=>r(R)})}),default:()=>i("project.task.execute")}),r(S,{},{trigger:()=>r(N,{circle:!0,type:"info",size:"small",onClick:()=>n(t,!1)},{icon:()=>r(h,null,{default:()=>r(q)})}),default:()=>i("project.task.edit")})]})}}],s.tableWidth&&(s.tableWidth=O(s.columns))},a=P({columns:[],tableWidth:M,tableData:[],page:1,pageSize:10,searchTaskName:null,searchWorkflowName:null,totalPage:1,row:{},loading:!1,startShow:!1}),k=()=>{if(a.loading)return;a.loading=!0;const s={pageSize:a.pageSize,pageNo:a.page,searchTaskName:a.searchTaskName,searchWorkflowName:a.searchWorkflowName,taskExecuteType:"STREAM"};L(s,{projectCode:d}).then(t=>{a.tableData=[...t.totalList],a.totalPage=t.totalPage}).finally(()=>{a.loading=!1})},f=s=>{a.row=s,a.startShow=!0};return{variables:a,getTableData:k,createColumns:m}}const Ue=W({name:"stream-task-definition",setup(){var y;const{t:n}=g(),i=j(),u=Number(i.params.projectCode),d=(y=_())==null?void 0:y.appContext.config.globalProperties.trim,{task:m,onToggleShow:a,onEditTask:k,onInitTask:f,onUpdateTask:s}=V(u),{variables:t,getTableData:p,createColumns:w}=X(k),z=()=>{t.page=1,p()},D=()=>{p()},U=()=>{t.page=1,p()},T=()=>{a(!1),f()},v=async o=>{await s(o.data)&&(T(),D())};return I(()=>{w(t),p()}),x(g().locale,()=>{w(t)}),()=>e(c,{vertical:!0},{default:()=>[e(C,null,{default:()=>[e(c,{justify:"end"},{default:()=>[e(b,{allowInput:d,size:"small",clearable:!0,value:t.searchTaskName,"onUpdate:value":o=>t.searchTaskName=o,placeholder:n("project.task.task_name")},null),e(b,{allowInput:d,size:"small",clearable:!0,value:t.searchWorkflowName,"onUpdate:value":o=>t.searchWorkflowName=o,placeholder:n("project.task.workflow_name")},null),e(N,{size:"small",type:"primary",onClick:z},{default:()=>[e(h,null,{default:()=>[e(G,null,null)]})]})]})]}),e(C,null,{default:()=>[e(c,{vertical:!0},{default:()=>[e(H,{loading:t.loading,columns:t.columns,data:t.tableData,scrollX:t.tableWidth},null),e(c,{justify:"center"},{default:()=>[e(J,{page:t.page,"onUpdate:page":o=>t.page=o,"page-size":t.pageSize,"onUpdate:page-size":o=>t.pageSize=o,"page-count":t.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:p,onUpdatePageSize:U},null)]})]})]}),e(F,{show:m.taskShow,data:m.taskData,onSubmit:v,onCancel:T,projectCode:u,from:1,readonly:m.taskReadonly,saving:m.taskSaving},null),e(A,{row:t.row,"onUpdate:row":o=>t.row=o,show:t.startShow,"onUpdate:show":o=>t.startShow=o,onUpdateList:p},null)]})}});export{Ue as default};
