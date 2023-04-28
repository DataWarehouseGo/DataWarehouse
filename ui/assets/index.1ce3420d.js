import{u as d,b5 as g,a as F,bd as b,bq as N,d as R,at as _,ba as w,c as a,ak as U}from"./index.536c7d72.js";import{M as C}from"./index.4d9d5980.js";import{u as y}from"./file.1c109dec.js";import{g as I}from"./index.ea5b005f.js";import{N as q}from"./Form.b918a62f.js";import{N as m}from"./FormItem.67716b88.js";import{N as h}from"./Input.4b8b409e.js";import{N as D}from"./Upload.ebcdcc1c.js";import{N as M}from"./Button.9dd5ee3c.js";import"./index.eb38a2cf.js";import"./keysOf.10525521.js";import"./Card.1fac8dc8.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./index.7a579f81.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./utils.ba7f47bf.js";import"./is-browser.f4bc45cf.js";import"./Space.8c5cfc39.js";import"./get-slot.7f666ba0.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./format-length.a0cbed4d.js";import"./use-locale.31127f4e.js";import"./Suffix.4fa63b0d.js";import"./Add.4fb6bf29.js";import"./Image.54674f30.js";import"./Tooltip.2dc588a0.js";import"./Popover.374e8a7f.js";import"./use-compitable.7f10f89e.js";import"./next-frame-once.e5ee25e8.js";const v=()=>({name:"",file:"",description:"",pid:-1,currentDir:"/"});function S(){const{t:o}=d(),r=()=>{e.uploadForm=Object.assign(b(e.uploadForm),v())},e=g({uploadFormRef:F(),uploadFormNameRef:F(),uploadForm:v(),saving:!1,rules:{name:{required:!0,trigger:["input","blur"],validator(){if(e.uploadForm.name==="")return new Error(o("resource.file.enter_name_tips"))}},file:{required:!0,trigger:["input","blur"],validator(){if(e.uploadForm.file==="")return new Error(o("resource.file.enter_content_tips"))}}}});return{state:e,resetForm:r}}function j(o){const{t:r}=d(),e=N(),i=y();return{handleUploadFile:async(l,n,p)=>{if(await o.uploadFormRef.validate(),!o.saving){o.saving=!0;try{const s=e.currentRoute.value.params.id||-1,u=i.getCurrentDir||"/",t=new FormData;t.append("file",o.uploadForm.file),t.append("type","FILE"),t.append("name",o.uploadForm.name),t.append("pid",String(s)),t.append("currentDir",u),t.append("description",o.uploadForm.description),await I(t),window.$message.success(r("resource.file.success")),o.saving=!1,l("updateList"),n(),p()}catch{o.saving=!1}}}}}function L(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!U(o)}const x={show:{type:Boolean,default:!1}},ve=R({name:"ResourceFileUpload",props:x,emits:["updateList","update:show"],setup(o,r){var t;const{state:e,resetForm:i}=S(),{handleUploadFile:c}=j(e),l=()=>{i(),r.emit("update:show")},n=({file:f})=>{e.uploadForm.name=f.name,e.uploadForm.file=f.file,e.uploadFormRef.validate()},p=()=>{c(r.emit,l,i)},s=()=>{e.uploadForm.name="",e.uploadForm.file=""},u=(t=_())==null?void 0:t.appContext.config.globalProperties.trim;return{hideModal:l,customRequest:n,handleFile:p,removeFile:s,...w(e),trim:u}},render(){let o;const{t:r}=d();return a(C,{show:this.$props.show,title:r("resource.file.upload_files"),onCancel:this.hideModal,onConfirm:this.handleFile,confirmClassName:"btn-submit",cancelClassName:"btn-cancel",confirmLoading:this.saving},{default:()=>[a(q,{rules:this.rules,ref:"uploadFormRef"},{default:()=>[a(m,{label:r("resource.file.file_name"),path:"name",ref:"uploadFormNameRef"},{default:()=>[a(h,{allowInput:this.trim,value:this.uploadForm.name,"onUpdate:value":e=>this.uploadForm.name=e,placeholder:r("resource.file.enter_name_tips"),class:"input-file-name"},null)]}),a(m,{label:r("resource.file.description"),path:"description"},{default:()=>[a(h,{allowInput:this.trim,type:"textarea",value:this.uploadForm.description,"onUpdate:value":e=>this.uploadForm.description=e,placeholder:r("resource.file.enter_description_tips"),class:"input-description"},null)]}),a(m,{label:r("resource.file.upload_files"),path:"file"},{default:()=>[a(D,{value:this.uploadForm.file,"onUpdate:value":e=>this.uploadForm.file=e,customRequest:this.customRequest,class:"btn-upload",max:1,onRemove:this.removeFile},{default:()=>[a(M,null,L(o=r("resource.file.upload_files"))?o:{default:()=>[o]})]})]})]})]})}});export{ve as default};