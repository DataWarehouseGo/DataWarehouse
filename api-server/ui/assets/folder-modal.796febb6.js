import{d as c,at as f,w as h,n as w,ba as F,u as C,c as o,cm as N}from"./index.536c7d72.js";import{M as b}from"./index.4d9d5980.js";import{u as R,a as _}from"./use-modal.0dbe8533.js";import{N as I}from"./Form.b918a62f.js";import{N as a}from"./FormItem.67716b88.js";import{N as s}from"./Input.4b8b409e.js";import"./index.eb38a2cf.js";import"./Button.9dd5ee3c.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./keysOf.10525521.js";import"./Card.1fac8dc8.js";import"./index.7a579f81.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./utils.ba7f47bf.js";import"./Space.8c5cfc39.js";import"./get-slot.7f666ba0.js";import"./file.1c109dec.js";import"./index.ea5b005f.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./format-length.a0cbed4d.js";import"./use-locale.31127f4e.js";import"./Suffix.4fa63b0d.js";const M={row:{type:Object,default:{}},show:{type:Boolean,default:!1}},oe=c({name:"ResourceFileFolder",props:M,emits:["update:show","updateList"],setup(e,t){var i;const{folderState:r}=R(),{handleCreateResource:m,handleRenameResource:n}=_(r,t),d=()=>{t.emit("update:show")},l=()=>{m()},p=()=>{n(e.row.id)},u=(i=f())==null?void 0:i.appContext.config.globalProperties.trim;return h(()=>e.row,()=>{r.folderForm.name=e.row.alias,r.folderForm.description=e.row.description}),{fileEdit:w(()=>e.row.id&&!e.row.directory),hideModal:d,handleCreate:l,handleRename:p,...F(r),trim:u}},render(){const{t:e}=C();return o(b,{show:this.$props.show,title:this.row.id?e("resource.udf.edit"):e("resource.udf.create_folder"),onCancel:this.hideModal,onConfirm:this.row.id?this.handleRename:this.handleCreate,confirmClassName:"btn-submit",cancelClassName:"btn-cancel",confirmLoading:this.saving},{default:()=>[o(I,{rules:this.rules,ref:"folderFormRef"},{default:()=>[o(a,{label:this.fileEdit?e("resource.udf.file_name"):e("resource.udf.folder_name"),path:"name"},{default:()=>[o(s,{allowInput:this.fileEdit?this.trim:N,value:this.folderForm.name,"onUpdate:value":t=>this.folderForm.name=t,placeholder:e("resource.udf.enter_name_tips"),class:"input-directory-name"},null)]}),o(a,{label:e("resource.udf.description"),path:"description"},{default:()=>[o(s,{allowInput:this.trim,type:"textarea",value:this.folderForm.description,"onUpdate:value":t=>this.folderForm.description=t,placeholder:e("resource.udf.enter_description_tips"),class:"input-description"},null)]})]})]})}});export{oe as default};