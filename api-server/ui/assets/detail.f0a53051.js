import{u as T,b5 as U,a as O,bu as L,d as H,at as D,w as V,ba as A,c as t,G as m,ak as k,H as h}from"./index.536c7d72.js";import{M as K}from"./index.4d9d5980.js";import{g as q,q as x,c as B,v as M,u as Q,a as j}from"./index.ef1910ce.js";import{N as $}from"./Spin.5bd91cff.js";import{N as G}from"./Form.b918a62f.js";import{N as i}from"./FormItem.67716b88.js";import{N as Y}from"./InputNumber.1f688029.js";import{N as J}from"./RadioGroup.5a44255f.js";import{N as I}from"./Radio.8f1c774c.js";import{a as z}from"./Select.eddb521d.js";import{N as u}from"./Input.4b8b409e.js";import{N as W}from"./Space.8c5cfc39.js";import{N as X}from"./Button.9dd5ee3c.js";import"./index.eb38a2cf.js";import"./keysOf.10525521.js";import"./Card.1fac8dc8.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./index.7a579f81.js";import"./index.8209174c.js";import"./flatten.f4456e1c.js";import"./Scrollbar.7c2bcabe.js";import"./fade-in.cssr.ef9eaee7.js";import"./VResizeObserver.0aad584a.js";import"./fade-in-scale-up.cssr.1167eea7.js";import"./utils.ba7f47bf.js";import"./is-browser.f4bc45cf.js";import"./service.4ca56d82.js";import"./lodash.bce5b897.js";import"./use-compitable.7f10f89e.js";import"./format-length.a0cbed4d.js";import"./use-locale.31127f4e.js";import"./Add.4fb6bf29.js";import"./get-slot.7f666ba0.js";import"./Selection.2ed26059.js";import"./Popover.374e8a7f.js";import"./next-frame-once.e5ee25e8.js";import"./Suffix.4fa63b0d.js";function Z(s){const{t:l}=T(),a={type:"MYSQL",name:"",note:"",host:"",port:_.MYSQL.defaultPort,principal:"",javaSecurityKrb5Conf:"",loginUserKeytabUsername:"",loginUserKeytabPath:"",userName:"",password:"",database:"",connectType:"",other:""},e=U({detailFormRef:O(),detailForm:{...a},requiredDataBase:!0,showHost:!0,showPort:!0,showAwsRegion:!1,showConnectType:!1,showPrincipal:!1,rules:{name:{trigger:["input"],validator(){if(!e.detailForm.name)return new Error(l("datasource.datasource_name_tips"))}},host:{trigger:["input"],validator(){if(!e.detailForm.host&&e.showHost)return new Error(l("datasource.ip_tips"))}},port:{trigger:["input"],validator(){if(!e.detailForm.port&&e.showPort)return new Error(l("datasource.port_tips"))}},principal:{trigger:["input"],validator(){if(!e.detailForm.principal&&e.showPrincipal)return new Error(l("datasource.principal_tips"))}},userName:{trigger:["input"],validator(){if(!e.detailForm.userName)return new Error(l("datasource.user_name_tips"))}},awsRegion:{trigger:["input"],validator(){if(!e.detailForm.awsRegion&&e.showAwsRegion)return new Error(l("datasource.aws_region_tips"))}},database:{trigger:["input"],validator(){if(!e.detailForm.database&&e.requiredDataBase)return new Error(l("datasource.database_name_tips"))}},connectType:{trigger:["update"],validator(){if(!e.detailForm.connectType&&e.showConnectType)return new Error(l("datasource.oracle_connect_type_tips"))}},other:{trigger:["input","blur"],validator(){if(e.detailForm.other&&!L.isJson(e.detailForm.other))return new Error(l("datasource.jdbc_format_tips"))}}}});return{state:e,changeType:async(o,c)=>{e.detailForm.port=c.previousPort||c.defaultPort,e.detailForm.type=o,e.requiredDataBase=o!=="POSTGRESQL"&&o!=="ATHENA",e.showHost=o!=="ATHENA",e.showPort=o!=="ATHENA",e.showAwsRegion=o==="ATHENA",o==="ORACLE"&&!s&&(e.detailForm.connectType="ORACLE_SERVICE_NAME"),e.showConnectType=o==="ORACLE",o==="HIVE"||o==="SPARK"?e.showPrincipal=await q():e.showPrincipal=!1},changePort:async()=>{if(!e.detailForm.type)return;const o=_[e.detailForm.type];o.previousPort=e.detailForm.port},resetFieldsValue:()=>{e.detailForm={...a}},setFieldsValue:o=>{e.detailForm={...e.detailForm,...o,other:o.other?JSON.stringify(o.other):o.other}},getFieldsValue:()=>e.detailForm}}const _={MYSQL:{value:"MYSQL",label:"MYSQL",defaultPort:3306},POSTGRESQL:{value:"POSTGRESQL",label:"POSTGRESQL",defaultPort:5432},HIVE:{value:"HIVE",label:"HIVE/IMPALA",defaultPort:1e4},SPARK:{value:"SPARK",label:"SPARK",defaultPort:10015},CLICKHOUSE:{value:"CLICKHOUSE",label:"CLICKHOUSE",defaultPort:8123},ORACLE:{value:"ORACLE",label:"ORACLE",defaultPort:1521},SQLSERVER:{value:"SQLSERVER",label:"SQLSERVER",defaultPort:1433},DB2:{value:"DB2",label:"DB2",defaultPort:5e4},PRESTO:{value:"PRESTO",label:"PRESTO",defaultPort:8080},REDSHIFT:{value:"REDSHIFT",label:"REDSHIFT",defaultPort:5439},ATHENA:{value:"ATHENA",label:"ATHENA",defaultPort:0}},ee=Object.values(_).map(s=>(s.class="options-datasource-type",s));function ae(s){const{t:l}=T(),a=U({saving:!1,testing:!1,loading:!1});let e;const d=()=>{const n=s();return{...n,other:n.other?JSON.parse(n.other):null}};return{status:a,queryById:async n=>{if(a.loading)return{};a.loading=!0;const o=await x(n);return a.loading=!1,e=o.name,o},testConnect:async()=>{if(!a.testing){a.testing=!0;try{const n=await B(d());window.$message.success(n?n.msg:`${l("datasource.test_connect")} ${l("datasource.success")}`),a.testing=!1}catch{a.testing=!1}}},createOrUpdate:async n=>{const o=s();if(a.saving||!o.name)return!1;a.saving=!0;try{return e!==o.name&&await M({name:o.name}),n?await Q(d(),n):await j(d()),a.saving=!1,!0}catch{return a.saving=!1,!1}}}}function C(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!k(s)}const te={show:{type:Boolean,default:!1},id:{type:Number}},xe=H({name:"DetailModal",props:te,emits:["cancel","update"],setup(s,l){var p;const{t:a}=T(),{state:e,changeType:d,changePort:f,resetFieldsValue:w,setFieldsValue:g,getFieldsValue:n}=Z(s.id),{status:o,queryById:c,testConnect:b,createOrUpdate:S}=ae(n),y=()=>{w(),l.emit("cancel")},E=async()=>{await e.detailFormRef.validate(),await S(s.id)&&(y(),l.emit("update"))},P=async()=>{await e.detailFormRef.validate(),b()},R=d,N=f,F=(p=D())==null?void 0:p.appContext.config.globalProperties.trim;return V(()=>s.show,async()=>{s.show&&e.detailForm.type&&await d(e.detailForm.type,_[e.detailForm.type]),s.show&&s.id&&g(await c(s.id))}),{t:a,...A(e),...A(o),onChangeType:R,onChangePort:N,onSubmit:E,onTest:P,onCancel:y,trim:F}},render(){const{show:s,id:l,t:a,detailForm:e,rules:d,requiredDataBase:f,showHost:w,showPort:g,showAwsRegion:n,showConnectType:o,showPrincipal:c,loading:b,saving:S,testing:y,onChangeType:E,onChangePort:P,onCancel:R,onTest:N,onSubmit:F}=this;return t(K,{class:"dialog-create-data-source",show:s,title:`${a(l?"datasource.edit":"datasource.create")}${a("datasource.datasource")}`,onConfirm:F,confirmLoading:S||b,onCancel:R,confirmClassName:"btn-submit",cancelClassName:"btn-cancel"},{default:()=>{let p,v;return t($,{show:b},{default:()=>[t(G,{rules:d,ref:"detailFormRef","require-mark-placement":"left","label-align":"left"},{default:()=>[t(i,{label:a("datasource.datasource"),path:"type","show-require-mark":!0},{default:()=>[t(z,{class:"btn-data-source-type-drop-down",value:e.type,"onUpdate:value":r=>e.type=r,options:ee,disabled:!!l,"on-update:value":E},null)]}),t(i,{label:a("datasource.datasource_name"),path:"name","show-require-mark":!0},{default:()=>[t(u,{allowInput:this.trim,class:"input-data-source-name",value:e.name,"onUpdate:value":r=>e.name=r,maxlength:60,placeholder:a("datasource.datasource_name_tips")},null)]}),t(i,{label:a("datasource.description"),path:"note"},{default:()=>[t(u,{allowInput:this.trim,class:"input-data-source-description",value:e.note,"onUpdate:value":r=>e.note=r,type:"textarea",placeholder:a("datasource.description_tips")},null)]}),m(t(i,{label:a("datasource.ip"),path:"host","show-require-mark":!0},{default:()=>[t(u,{allowInput:this.trim,class:"input-ip",value:e.host,"onUpdate:value":r=>e.host=r,type:"text",maxlength:255,placeholder:a("datasource.ip_tips")},null)]}),[[h,w]]),m(t(i,{label:a("datasource.port"),path:"port","show-require-mark":!0},{default:()=>[t(Y,{class:"input-port",value:e.port,"onUpdate:value":r=>e.port=r,"show-button":!1,placeholder:a("datasource.port_tips"),"on-blur":P,style:{width:"100%"}},null)]}),[[h,g]]),m(t(i,{label:"Principal",path:"principal","show-require-mark":!0},{default:()=>[t(u,{allowInput:this.trim,value:e.principal,"onUpdate:value":r=>e.principal=r,type:"text",placeholder:a("datasource.principal_tips")},null)]}),[[h,c]]),m(t(i,{label:"krb5.conf",path:"javaSecurityKrb5Conf"},{default:()=>[t(u,{allowInput:this.trim,value:e.javaSecurityKrb5Conf,"onUpdate:value":r=>e.javaSecurityKrb5Conf=r,type:"text",placeholder:a("datasource.krb5_conf_tips")},null)]}),[[h,c]]),m(t(i,{label:"keytab.username",path:"loginUserKeytabUsername"},{default:()=>[t(u,{allowInput:this.trim,value:e.loginUserKeytabUsername,"onUpdate:value":r=>e.loginUserKeytabUsername=r,type:"text",placeholder:a("datasource.keytab_username_tips")},null)]}),[[h,c]]),m(t(i,{label:"keytab.path",path:"loginUserKeytabPath"},{default:()=>[t(u,{allowInput:this.trim,value:e.loginUserKeytabPath,"onUpdate:value":r=>e.loginUserKeytabPath=r,type:"text",placeholder:a("datasource.keytab_path_tips")},null)]}),[[h,c]]),t(i,{label:a("datasource.user_name"),path:"userName","show-require-mark":!0},{default:()=>[t(u,{allowInput:this.trim,class:"input-username",value:e.userName,"onUpdate:value":r=>e.userName=r,type:"text",maxlength:60,placeholder:a("datasource.user_name_tips")},null)]}),t(i,{label:a("datasource.user_password"),path:"password"},{default:()=>[t(u,{allowInput:this.trim,class:"input-password",value:e.password,"onUpdate:value":r=>e.password=r,type:"password",placeholder:a("datasource.user_password_tips")},null)]}),m(t(i,{label:a("datasource.aws_region"),path:"awsRegion","show-require-mark":!0},{default:()=>[t(u,{allowInput:this.trim,value:e.awsRegion,"onUpdate:value":r=>e.awsRegion=r,type:"text",maxlength:60,placeholder:a("datasource.aws_region_tips")},null)]}),[[h,n]]),t(i,{label:a("datasource.database_name"),path:"database","show-require-mark":f},{default:()=>[t(u,{allowInput:this.trim,class:"input-data-base",value:e.database,"onUpdate:value":r=>e.database=r,type:"text",maxlength:60,placeholder:a("datasource.database_name_tips")},null)]}),m(t(i,{label:a("datasource.oracle_connect_type"),path:"connectType","show-require-mark":!0},{default:()=>[t(J,{value:e.connectType,"onUpdate:value":r=>e.connectType=r},{default:()=>[t(W,null,{default:()=>[t(I,{value:"ORACLE_SERVICE_NAME"},C(p=a("datasource.oracle_service_name"))?p:{default:()=>[p]}),t(I,{value:"ORACLE_SID"},C(v=a("datasource.oracle_sid"))?v:{default:()=>[v]})]})]})]}),[[h,o]]),t(i,{label:a("datasource.jdbc_connect_parameters"),path:"other"},{default:()=>[t(u,{allowInput:this.trim,class:"input-jdbc-params",value:e.other,"onUpdate:value":r=>e.other=r,type:"textarea",autosize:{minRows:2},placeholder:`${a("datasource.format_tips")} {"key1":"value1","key2":"value2"...} ${a("datasource.connection_parameter")}`},null)]})]})]})},"btn-middle":()=>{let p;return t(X,{class:"btn-test-connection",type:"primary",size:"small",onClick:N,loading:y||b},C(p=a("datasource.test_connect"))?p:{default:()=>[p]})}})}});export{xe as default};
