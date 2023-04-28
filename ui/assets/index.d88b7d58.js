import{u as m,bq as b,b5 as _,a as x,bd as N,d as y,at as g,ba as C,c as r,ak as w}from"./index.536c7d72.js";import{C as R}from"./index.67b00418.js";import{M as I}from"./index.ebf19dc1.js";import{u as S}from"./file.1c109dec.js";import{o as E}from"./index.ea5b005f.js";import{f as O}from"./common.cc1e0c6c.js";import{s as u}from"./index.module.b13963ba.js";import{N as j}from"./Form.b918a62f.js";import{N as a}from"./FormItem.67716b88.js";import{N as c}from"./Input.4b8b409e.js";import{a as k}from"./Select.eddb521d.js";import{N as d}from"./Button.9dd5ee3c.js";import"./Card.1fac8dc8.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./index.7a579f81.js";import"./keysOf.10525521.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./SettingOutlined.06d5d07d.js";import"./PauseCircleOutlined.a11f5c7d.js";import"./CloseCircleOutlined.14b6a996.js";import"./CheckCircleOutlined.4f0aee70.js";import"./EditOutlined.57b65af3.js";import"./index.9c0cbe29.js";import"./format-length.a0cbed4d.js";import"./fade-in.cssr.ef9eaee7.js";import"./use-locale.31127f4e.js";import"./Scrollbar.7c2bcabe.js";import"./VResizeObserver.0aad584a.js";import"./Suffix.4fa63b0d.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./use-compitable.7f10f89e.js";import"./Selection.2ed26059.js";import"./Popover.374e8a7f.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./utils.ba7f47bf.js";import"./next-frame-once.e5ee25e8.js";import"./is-browser.f4bc45cf.js";function q(t){const{t:o}=m(),e=b(),i=S();return{handleCreateFile:()=>{const l=e.currentRoute.value.params.id||-1,f=i.getCurrentDir||"/";t.fileFormRef.validate(async n=>{if(!n){await E({...t.fileForm,pid:l,currentDir:f}),window.$message.success(o("resource.file.success"));const s=l?"resource-file-subdirectory":"file";e.push({name:s,params:{id:l}})}})}}}const h=()=>({pid:-1,type:"FILE",suffix:"sh",fileName:"",description:"",content:"",currentDir:"/"});function U(){const{t}=m(),o=()=>{e.fileForm=Object.assign(N(e.fileForm),h())},e=_({fileFormRef:x(),fileForm:h(),rules:{fileName:{required:!0,trigger:["input","blur"],validator(){if(e.fileForm.fileName==="")return new Error(t("resource.file.enter_name_tips"));if(e.fileForm.fileName.endsWith(`.${e.fileForm.suffix}`))return new Error(t("resource.file.duplicate_suffix_tips"))}},suffix:{required:!0,trigger:["input","blur"],validator(){if(e.fileForm.suffix==="")return new Error(t("resource.file.enter_suffix_tips"))}},content:{required:!0,trigger:["input","blur"],validator(){if(e.fileForm.content==="")return new Error(t("resource.file.enter_content_tips"))}}}});return{state:e,resetForm:o}}function F(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!w(t)}const Ne=y({name:"ResourceFileCreate",setup(){var n;const t=b(),{state:o}=U(),{handleCreateFile:e}=q(o),i=O.map(s=>({key:s,label:s,value:s})),p=()=>{e()},l=()=>{const{id:s}=t.currentRoute.value.params,v=s?"resource-file-subdirectory":"file";t.push({name:v,params:{id:s}})},f=(n=g())==null?void 0:n.appContext.config.globalProperties.trim;return{fileSuffixOptions:i,handleFile:p,handleReturn:l,...C(o),trim:f}},render(){let t,o;const{t:e}=m();return r(R,{title:e("resource.file.file_details")},{default:()=>[r(j,{rules:this.rules,ref:"fileFormRef",class:u["form-content"]},{default:()=>[r(a,{label:e("resource.file.file_name"),path:"fileName"},{default:()=>[r(c,{allowInput:this.trim,value:this.fileForm.fileName,"onUpdate:value":i=>this.fileForm.fileName=i,placeholder:e("resource.file.enter_name_tips"),style:{width:"300px"},class:"input-file-name"},null)]}),r(a,{label:e("resource.file.file_format"),path:"suffix"},{default:()=>[r(k,{defaultValue:[this.fileForm.suffix],value:this.fileForm.suffix,"onUpdate:value":i=>this.fileForm.suffix=i,options:this.fileSuffixOptions,style:{width:"100px"},class:"select-file-format"},null)]}),r(a,{label:e("resource.file.description"),path:"description"},{default:()=>[r(c,{allowInput:this.trim,type:"textarea",value:this.fileForm.description,"onUpdate:value":i=>this.fileForm.description=i,placeholder:e("resource.file.enter_description_tips"),style:{width:"430px"},class:"input-description"},null)]}),r(a,{label:e("resource.file.file_content"),path:"content"},{default:()=>[r("div",{style:{width:"90%"}},[r(I,{value:this.fileForm.content,"onUpdate:value":i=>this.fileForm.content=i},null)])]}),r("div",{class:u["file-edit-content"]},[r("div",{class:u.submit},[r(d,{type:"info",size:"small",round:!0,onClick:this.handleFile,class:"btn-submit"},F(t=e("resource.file.save"))?t:{default:()=>[t]}),r(d,{type:"info",size:"small",text:!0,style:{marginLeft:"15px"},onClick:this.handleReturn,class:"btn-cancel"},F(o=e("resource.file.return"))?o:{default:()=>[o]})])])]})]})}});export{Ne as default};