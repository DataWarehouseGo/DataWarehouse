import{u as f,b5 as w,a as u,t as d,d as _,at as C,e as M,w as N,ba as R,c as a,ak as z}from"./index.536c7d72.js";import{u as S}from"./index.990798b2.js";import{a as k}from"./index.d84b4881.js";import{E as P}from"./EditOutlined.57b65af3.js";import{N as g}from"./Button.9dd5ee3c.js";import{N as q}from"./Icon.36d6d904.js";import{N as D}from"./Tooltip.2dc588a0.js";import v from"./yarn-queue-modal.aac60d52.js";import{C as y}from"./index.67b00418.js";import{S as T}from"./SearchOutlined.b0711796.js";import{N as c}from"./Space.8c5cfc39.js";import{N as U}from"./Input.4b8b409e.js";import{N as V,a as j}from"./DataTable.4d10e01f.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./format-length.a0cbed4d.js";import"./Popover.374e8a7f.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./utils.ba7f47bf.js";import"./use-compitable.7f10f89e.js";import"./next-frame-once.e5ee25e8.js";import"./index.4d9d5980.js";import"./index.eb38a2cf.js";import"./keysOf.10525521.js";import"./Card.1fac8dc8.js";import"./index.7a579f81.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./Form.b918a62f.js";import"./FormItem.67716b88.js";import"./get-slot.7f666ba0.js";import"./use-locale.31127f4e.js";import"./Suffix.4fa63b0d.js";import"./ArrowDown.e4a7e0d5.js";import"./Checkbox.9b98fe51.js";import"./RadioGroup.5a44255f.js";import"./Radio.8f1c774c.js";import"./Dropdown.8c20a4f5.js";import"./ChevronRight.ffdb37b1.js";import"./Selection.2ed26059.js";import"./use-keyboard.3c40c702.js";import"./Ellipsis.b0d6a040.js";import"./Select.eddb521d.js";import"./Forward.5223a2c3.js";function I(){const{t}=f(),e=r=>{o.showModalRef=!0,o.statusRef=1,o.row=r},p=r=>{r.columns=[{title:"#",key:"index",render:(s,l)=>l+1},{title:t("security.yarn_queue.queue_name"),key:"queueName",className:"queue-name"},{title:t("security.yarn_queue.queue_value"),key:"queue"},{title:t("security.yarn_queue.create_time"),key:"createTime"},{title:t("security.yarn_queue.update_time"),key:"updateTime"},{title:t("security.yarn_queue.operation"),key:"operation",render(s){return d(D,{},{trigger:()=>d(g,{circle:!0,type:"info",size:"small",class:"edit",onClick:()=>{e(s)}},{icon:()=>d(q,null,{default:()=>d(P)})}),default:()=>t("security.yarn_queue.edit")})}}]},o=w({columns:[],tableData:[],page:u(1),pageSize:u(10),searchVal:u(null),totalPage:u(1),showModalRef:u(!1),statusRef:u(0),row:{},loadingRef:u(!1)});return{variables:o,getTableData:r=>{if(o.loadingRef)return;o.loadingRef=!0;const{state:s}=S(k({...r}).then(l=>{o.tableData=l.totalList.map((m,n)=>({...m})),o.totalPage=l.totalPage,o.loadingRef=!1}),{});return s},createColumns:p}}function O(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!z(t)}const Ve=_({name:"yarn-queue-manage",setup(){var h;const{t}=f(),{variables:e,getTableData:p,createColumns:o}=I(),i=()=>{p({pageSize:e.pageSize,pageNo:e.page,searchVal:e.searchVal})},r=()=>{e.page=1,i()},s=()=>{e.page=1,i()},l=()=>{e.showModalRef=!0,e.statusRef=0},m=()=>{e.showModalRef=!1},n=()=>{e.showModalRef=!1,i()},b=(h=C())==null?void 0:h.appContext.config.globalProperties.trim;return M(()=>{o(e),i()}),N(f().locale,()=>{o(e)}),{t,...R(e),requestData:i,onCancelModal:m,onConfirmModal:n,onUpdatePageSize:r,handleModalChange:l,onSearch:s,trim:b}},render(){let t;const{t:e,requestData:p,onUpdatePageSize:o,onCancelModal:i,onConfirmModal:r,handleModalChange:s,onSearch:l,loadingRef:m}=this;return a(c,{vertical:!0},{default:()=>[a(y,null,{default:()=>[a(c,{justify:"space-between"},{default:()=>[a(g,{size:"small",type:"primary",onClick:s,class:"btn-create-queue"},O(t=e("security.yarn_queue.create_queue"))?t:{default:()=>[t]}),a(c,null,{default:()=>[a(U,{allowInput:this.trim,size:"small",clearable:!0,value:this.searchVal,"onUpdate:value":n=>this.searchVal=n,placeholder:e("security.yarn_queue.search_tips")},null),a(g,{size:"small",type:"primary",onClick:l},{default:()=>[a(q,null,{default:()=>[a(T,null,null)]})]})]})]})]}),a(y,{title:e("menu.yarn_queue_manage")},{default:()=>[a(c,{vertical:!0},{default:()=>[a(V,{loading:m,"row-class-name":"items",columns:this.columns,data:this.tableData},null),a(c,{justify:"center"},{default:()=>[a(j,{page:this.page,"onUpdate:page":n=>this.page=n,"page-size":this.pageSize,"onUpdate:page-size":n=>this.pageSize=n,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:p,onUpdatePageSize:o},null)]})]})]}),a(v,{showModalRef:this.showModalRef,statusRef:this.statusRef,row:this.row,onCancelModal:i,onConfirmModal:r},null)]})}});export{Ve as default};