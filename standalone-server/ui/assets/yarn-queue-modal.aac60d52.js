import{M as h}from"./index.4d9d5980.js";import{u as q,b5 as p,a as i,d as y,at as N,w as d,ba as v,c as o}from"./index.536c7d72.js";import{v as w,c as M,u as _}from"./index.d84b4881.js";import{N as b}from"./Form.b918a62f.js";import{N as c}from"./FormItem.67716b88.js";import{N as f}from"./Input.4b8b409e.js";import"./index.eb38a2cf.js";import"./Button.9dd5ee3c.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./keysOf.10525521.js";import"./Card.1fac8dc8.js";import"./index.7a579f81.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./utils.ba7f47bf.js";import"./Space.8c5cfc39.js";import"./get-slot.7f666ba0.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./format-length.a0cbed4d.js";import"./use-locale.31127f4e.js";import"./Suffix.4fa63b0d.js";function g(e,t){const{t:a}=q(),u=p({yarnQueueFormRef:i(),model:{id:i(-1),queue:i(""),queueName:i("")},saving:!1,rules:{queue:{required:!0,trigger:["input","blur"],validator(){if(u.model.queue==="")return new Error(a("security.yarn_queue.queue_value_tips"))}},queueName:{required:!0,trigger:["input","blur"],validator(){if(u.model.queueName==="")return new Error(a("security.yarn_queue.queue_name_tips"))}}}}),l=async r=>{if(await u.yarnQueueFormRef.validate(),!u.saving){u.saving=!0;try{r===0?await m():await n(),u.saving=!1}catch{u.saving=!1}}},m=()=>{w({...u.model}).then(()=>{M({...u.model}).then(()=>{u.model.queue="",u.model.queueName="",t.emit("confirmModal",e.showModalRef)})})},n=()=>{_({...u.model},{id:u.model.id}).then(r=>{t.emit("confirmModal",e.showModalRef)})};return{variables:u,handleValidate:l}}const $=y({name:"YarnQueueModal",props:{showModalRef:{type:Boolean,default:!1},statusRef:{type:Number,default:0},row:{type:Object,default:{}}},emits:["cancelModal","confirmModal"],setup(e,t){var s;const{variables:a,handleValidate:u}=g(e,t),{t:l}=q(),m=()=>{e.statusRef===0&&(a.model.queue="",a.model.queueName=""),t.emit("cancelModal",e.showModalRef)},n=()=>{u(e.statusRef)},r=(s=N())==null?void 0:s.appContext.config.globalProperties.trim;return d(()=>e.statusRef,()=>{e.statusRef===0?(a.model.queue="",a.model.queueName=""):(a.model.id=e.row.id,a.model.queue=e.row.queue,a.model.queueName=e.row.queueName)}),d(()=>e.row,()=>{a.model.id=e.row.id,a.model.queue=e.row.queue,a.model.queueName=e.row.queueName}),{t:l,...v(a),cancelModal:m,confirmModal:n,trim:r}},render(){const{t:e}=this;return o("div",null,[o(h,{title:this.statusRef===0?e("security.yarn_queue.create_queue"):e("security.yarn_queue.edit_queue"),show:this.showModalRef,onCancel:this.cancelModal,onConfirm:this.confirmModal,confirmDisabled:!this.model.queueName||!this.model.queue,confirmClassName:"btn-submit",cancelClassName:"btn-cancel",confirmLoading:this.saving},{default:()=>o(b,{model:this.model,rules:this.rules,ref:"yarnQueueFormRef"},{default:()=>[o(c,{label:e("security.yarn_queue.queue_name"),path:"queueName"},{default:()=>[o(f,{allowInput:this.trim,class:"input-queue-name",placeholder:e("security.yarn_queue.queue_name_tips"),value:this.model.queueName,"onUpdate:value":t=>this.model.queueName=t},null)]}),o(c,{label:e("security.yarn_queue.queue_value"),path:"queue"},{default:()=>[o(f,{allowInput:this.trim,class:"input-queue-value",placeholder:e("security.yarn_queue.queue_value_tips"),value:this.model.queue,"onUpdate:value":t=>this.model.queue=t},null)]})]})})])}});export{$ as default};
