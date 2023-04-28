import{u as C,b5 as f,a as w,bq as I,bJ as L}from"./index.536c7d72.js";import{l as v,_ as j}from"./lodash.bce5b897.js";import{i as b,f as M,a as k}from"./index.22428b53.js";import{q as G}from"./index.5b6233e7.js";import{q as R}from"./index.5342f370.js";import{l as N}from"./index.393f36dd.js";import{s as $}from"./index.67996f97.js";import{s as m}from"./service.4ca56d82.js";import{p as S}from"./common.cc1e0c6c.js";import{f as d}from"./index.9c0cbe29.js";const re=()=>{const{t:e}=C(),t=new Date,i=t.getFullYear(),s=t.getMonth(),c=t.getDate(),n=f({importFormRef:w(),importForm:{name:"",file:""},saving:!1,importRules:{file:{required:!0,trigger:["input","blur"],validator(){if(n.importForm.name==="")return new Error(e("project.workflow.enter_name_tips"))}}}}),p=f({startFormRef:w(),startForm:{processDefinitionCode:-1,startEndTime:[new Date(i,s,c),new Date(i,s,c)],scheduleTime:"",dataDateType:1,failureStrategy:"CONTINUE",warningType:"NONE",warningGroupId:null,execType:"START_PROCESS",startNodeList:"",taskDependType:"TASK_POST",complementDependentMode:"OFF_MODE",runMode:"RUN_MODE_SERIAL",processInstancePriority:"MEDIUM",workerGroup:"default",environmentCode:null,startParams:null,expectedParallelismNumber:"",dryRun:0},saving:!1,rules:{scheduleTime:{trigger:["input","blur"],validator(F,l){if(!l)return;if(!/(((19|20)[0-9]{2})-((0[1-9])|(1[0-2]))-((0[1-9])|((1|2)[0-9])|(3[0-1]))([ ])([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))(,(((19|20)[0-9]{2})-((0[1-9])|(1[0-2]))-((0[1-9])|((1|2)[0-9])|(3[0-1]))([ ])([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])))*$/.test(l))return new Error(e("project.workflow.schedule_date_tips"));if(l.split(",").length>100)return new Error(e("project.workflow.schedule_date_limit"))}}}}),y=f({timingFormRef:w(),timingForm:{startEndTime:[new Date(i,s,c),new Date(i+100,s,c)],crontab:"0 0 * * * ? *",timezoneId:Intl.DateTimeFormat().resolvedOptions().timeZone,failureStrategy:"CONTINUE",warningType:"NONE",processInstancePriority:"MEDIUM",warningGroupId:null,workerGroup:"default",environmentCode:null},saving:!1}),g=f({copyFormRef:w(),copyForm:{projectCode:null},saving:!1,copyRules:{projectCode:{required:!0,trigger:["input","blur"],validator(){if(g.copyForm.projectCode==="")return new Error(e("project.workflow.project_name_required"))}}}});return{importState:n,startState:p,timingState:y,copyState:g}};function te(e,t){return m({url:`/projects/${t}/schedules`,method:"get",params:e})}function O(e,t){return m({url:`/projects/${t}/schedules`,method:"post",data:e})}function _(e,t){return m({url:`/projects/${t}/schedules/preview`,method:"post",data:e})}function H(e,t,i){return m({url:`/projects/${t}/schedules/${i}`,method:"put",data:e})}function oe(e,t){return m({url:`/projects/${t}/schedules/${e}`,method:"delete",params:{scheduleId:e}})}function ne(e,t){return m({url:`/projects/${e}/schedules/${t}/offline`,method:"post"})}function ie(e,t){return m({url:`/projects/${e}/schedules/${t}/online`,method:"post"})}function se(e,t){const{t:i}=C(),s=I(),c=L(),n=f({projectCode:Number(c.params.projectCode),workerGroups:[],alertGroups:[],environmentList:[],startParamsList:[],schedulePreviewList:[]}),p={},y=()=>{e.importForm.name="",e.importForm.file=""},g=async()=>{if(await e.importFormRef.validate(),!e.saving){e.saving=!0;try{const o=new FormData;o.append("file",e.importForm.file);const r=Number(s.currentRoute.value.params.projectCode);await b(o,r),window.$message.success(i("project.workflow.success")),e.saving=!1,t.emit("updateList"),t.emit("update:show"),y()}catch{e.saving=!1}}},F=async o=>{if(await e.startFormRef.validate(),!e.saving){e.saving=!0;try{e.startForm.processDefinitionCode=o;const r=v.exports.omit(e.startForm,["startEndTime","scheduleTime","dataDateType"]);if(e.startForm.dataDateType===1){const a=d(new Date(e.startForm.startEndTime[0]),"yyyy-MM-dd HH:mm:ss"),h=d(new Date(e.startForm.startEndTime[1]),"yyyy-MM-dd HH:mm:ss");r.scheduleTime=JSON.stringify({complementStartDate:a,complementEndDate:h})}else r.scheduleTime=JSON.stringify({complementScheduleDateList:e.startForm.scheduleTime});const u={};for(const a of n.startParamsList)a.value!==""&&(u[a.prop]=a.value);r.startParams=j.isEmpty(u)?"":JSON.stringify(u),await $(r,n.projectCode),window.$message.success(i("project.workflow.success")),e.saving=!1,t.emit("updateList"),t.emit("update:show")}catch{e.saving=!1}}},l=async o=>{if(await e.timingFormRef.validate(),!e.saving){e.saving=!0;try{const r=D();r.processDefinitionCode=o,await O(r,n.projectCode),window.$message.success(i("project.workflow.success")),e.saving=!1,t.emit("updateList"),t.emit("update:show")}catch{e.saving=!1}}},T=async o=>{if(await e.timingFormRef.validate(),!e.saving){e.saving=!0;try{const r=D();r.id=o,await H(r,n.projectCode,o),window.$message.success(i("project.workflow.success")),e.saving=!1,t.emit("updateList"),t.emit("update:show")}catch{e.saving=!1}}},E=async o=>{if(await e.copyFormRef.validate(),!e.saving){e.saving=!0;try{const r={codes:j.join(o,","),targetProjectCode:e.copyForm.projectCode};await M(r,n.projectCode),window.$message.success(i("project.workflow.success")),e.saving=!1,t.emit("updateList"),t.emit("update:show"),e.copyForm.projectCode=""}catch{e.saving=!1}}},D=()=>{const o=d(S(e.timingForm.startEndTime[0]),"yyyy-MM-dd HH:mm:ss"),r=d(S(e.timingForm.startEndTime[1]),"yyyy-MM-dd HH:mm:ss");return{schedule:JSON.stringify({startTime:o,endTime:r,crontab:e.timingForm.crontab,timezoneId:e.timingForm.timezoneId}),failureStrategy:e.timingForm.failureStrategy,warningType:e.timingForm.warningType,processInstancePriority:e.timingForm.processInstancePriority,warningGroupId:e.timingForm.warningGroupId?e.timingForm.warningGroupId:0,workerGroup:e.timingForm.workerGroup,environmentCode:e.timingForm.environmentCode}};return{variables:n,handleImportDefinition:g,handleStartDefinition:F,handleCreateTiming:l,handleUpdateTiming:T,handleBatchCopyDefinition:E,getWorkerGroups:()=>{G().then(o=>{n.workerGroups=o.map(r=>({label:r,value:r}))})},getAlertGroups:()=>{N().then(o=>{n.alertGroups=o.map(r=>({label:r.groupName,value:r.id}))})},getEnvironmentList:()=>{R().then(o=>{n.environmentList=o.map(r=>({label:r.name,value:r.code,workerGroups:r.workerGroups}))})},getStartParamsList:o=>{if(p[o]){n.startParamsList=v.exports.cloneDeep(p[o]);return}k(o,n.projectCode).then(r=>{n.startParamsList=r.processDefinition.globalParamList,p[o]=v.exports.cloneDeep(n.startParamsList)})},getPreviewSchedule:()=>{e.timingFormRef.validate(async o=>{if(!o){const r=Number(s.currentRoute.value.params.projectCode),u=d(new Date(e.timingForm.startEndTime[0]),"yyyy-MM-dd HH:mm:ss"),a=d(new Date(e.timingForm.startEndTime[1]),"yyyy-MM-dd HH:mm:ss"),h=JSON.stringify({startTime:u,endTime:a,crontab:e.timingForm.crontab,timezoneId:e.timingForm.timezoneId});_({schedule:h},r).then(P=>{n.schedulePreviewList=P})}})}}}export{se as a,ne as b,oe as d,ie as o,te as q,re as u};