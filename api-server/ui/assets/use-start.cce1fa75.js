import{h as u}from"./index.d67d1729.js";import{_ as o}from"./lodash.bce5b897.js";import{u as p,b5 as l,a as c,bJ as f}from"./index.536c7d72.js";import{a as v}from"./index.22428b53.js";import{q as g}from"./index.5b6233e7.js";import{q as S}from"./index.5342f370.js";import{l as d}from"./index.393f36dd.js";import"./service.4ca56d82.js";const E=n=>{const{t:i}=p(),m=f(),t=l({startFormRef:c(),startForm:{version:1,warningType:"NONE",warningGroupId:null,workerGroup:"default",environmentCode:null,startParams:null,dryRun:0},startState:{projectCode:Number(m.params.projectCode),workerGroups:[],alertGroups:[],environmentList:[],startParamsList:[]},saving:!1}),s={};return{variables:t,getWorkerGroups:()=>{g().then(a=>{t.startState.workerGroups=a.map(r=>({label:r,value:r}))})},getEnvironmentList:()=>{S().then(a=>{t.startState.environmentList=a.map(r=>({label:r.name,value:r.code,workerGroups:r.workerGroups}))})},getAlertGroups:()=>{d().then(a=>{t.startState.alertGroups=a.map(r=>({label:r.groupName,value:r.id}))})},getStartParamsList:a=>{if(s[a]){t.startState.startParamsList=o.cloneDeep(s[a]);return}v(a,t.startState.projectCode).then(r=>{t.startState.startParamsList=r.processDefinition.globalParamList,s[a]=o.cloneDeep(t.startState.startParamsList)})},handleStartDefinition:async a=>{if(await t.startFormRef.validate(),!t.saving){t.saving=!0;try{const r={};for(const e of t.startState.startParamsList)e.value!==""&&(r[e.prop]=e.value);t.startForm.startParams=o.isEmpty(r)?"":JSON.stringify(r),await u(t.startState.projectCode,a,{...t.startForm}),window.$message.success(i("project.task.success")),t.saving=!1,n.emit("updateList"),n.emit("update:show")}catch{t.saving=!1}}}}};export{E as useStart};
