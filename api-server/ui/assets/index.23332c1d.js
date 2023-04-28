import{u as m,b5 as F,a as h,bd as g,bq as v,d as b,at as w,ba as C,c as t,cm as N}from"./index.536c7d72.js";import{M as _}from"./index.4d9d5980.js";import{u as R}from"./file.1c109dec.js";import{c as y}from"./index.ea5b005f.js";import{N as I}from"./Form.b918a62f.js";import{N as c}from"./FormItem.67716b88.js";import{N as d}from"./Input.4b8b409e.js";import"./index.eb38a2cf.js";import"./Button.9dd5ee3c.js";import"./is-browser.f4bc45cf.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./keysOf.10525521.js";import"./Card.1fac8dc8.js";import"./index.7a579f81.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./utils.ba7f47bf.js";import"./Space.8c5cfc39.js";import"./get-slot.7f666ba0.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./format-length.a0cbed4d.js";import"./use-locale.31127f4e.js";import"./Suffix.4fa63b0d.js";const u=()=>({pid:-1,type:"FILE",name:"",description:"",currentDir:"/"});function M(){const{t:e}=m(),r=()=>{o.folderForm=Object.assign(g(o.folderForm),u())},o=F({folderFormRef:h(),folderForm:u(),saving:!1,rules:{name:{required:!0,trigger:["input","blur"],validator(){if(o.folderForm.name==="")return new Error(e("resource.file.enter_name_tips"))}}}});return{state:o,resetForm:r}}function D(e){const{t:r}=m(),o=v(),a=R();return{handleCreateFolder:async(i,n,l)=>{if(await e.folderFormRef.validate(),!e.saving){e.saving=!0;try{const s=o.currentRoute.value.params.id||-1,f=a.getCurrentDir||"/";await y({...e.folderForm,pid:s,currentDir:f}),window.$message.success(r("resource.file.success")),e.saving=!1,i("updateList"),n(),l()}catch{e.saving=!1}}}}}const L={show:{type:Boolean,default:!1}},ie=b({name:"ResourceFileFolder",props:L,emits:["updateList","update:show"],setup(e,r){var s;const{state:o,resetForm:a}=M(),{handleCreateFolder:p}=D(o),i=()=>{r.emit("update:show")},n=()=>{p(r.emit,i,a)},l=(s=w())==null?void 0:s.appContext.config.globalProperties.trim;return{hideModal:i,handleFolder:n,...C(o),trim:l}},render(){const{t:e}=m();return t(_,{show:this.$props.show,title:e("resource.file.create_folder"),onCancel:this.hideModal,onConfirm:this.handleFolder,confirmClassName:"btn-submit",cancelClassName:"btn-cancel",confirmLoading:this.saving},{default:()=>[t(I,{rules:this.rules,ref:"folderFormRef"},{default:()=>[t(c,{label:e("resource.file.folder_name"),path:"name"},{default:()=>[t(d,{allowInput:N,value:this.folderForm.name,"onUpdate:value":r=>this.folderForm.name=r,placeholder:e("resource.file.enter_name_tips"),class:"input-directory-name"},null)]}),t(c,{label:e("resource.file.description"),path:"description"},{default:()=>[t(d,{allowInput:this.trim,type:"textarea",value:this.folderForm.description,"onUpdate:value":r=>this.folderForm.description=r,placeholder:e("resource.file.enter_description_tips"),class:"input-description"},null)]})]})]})}});export{ie as default};