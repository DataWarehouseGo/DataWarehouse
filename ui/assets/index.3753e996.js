import{b5 as p,d as c,u,e as l,w as f,ba as d,c as n,bJ as k}from"./index.536c7d72.js";import{C as h}from"./index.67b00418.js";import w from"./gantt-chart.8823b382.js";import{u as D}from"./index.990798b2.js";import{c as b}from"./index.c7ac6f91.js";import"./Card.1fac8dc8.js";import"./use-rtl.b3456902.js";import"./resolve-slot.12a336d2.js";import"./index.7a579f81.js";import"./keysOf.10525521.js";import"./lodash.bce5b897.js";import"./index.d67ddc9d.js";import"./common.cc1e0c6c.js";import"./SettingOutlined.06d5d07d.js";import"./PauseCircleOutlined.a11f5c7d.js";import"./CloseCircleOutlined.14b6a996.js";import"./CheckCircleOutlined.4f0aee70.js";import"./EditOutlined.57b65af3.js";import"./index.9c0cbe29.js";import"./service.4ca56d82.js";function G(){const t=p({seriesData:[],taskList:[]}),o=s=>{t.seriesData=[],t.taskList=[],t.seriesData=s.tasks.map(a=>(t.taskList.push(a.taskName),{name:a.taskName,...a}))};return{variables:t,getGantt:(s,a)=>{const{state:e}=D(b(s,a).then(r=>{o(r)}),{});return e}}}const E=c({name:"workflow-relation",setup(){const{t,locale:o}=u(),i=k(),{variables:s,getGantt:a}=G(),e=Number(i.params.id),r=Number(i.params.projectCode),m=()=>{s.seriesData=[],s.taskList=[],a(e,r)};return l(()=>{a(e,r)}),f(()=>[o.value],()=>{m()}),{t,...d(s)}},render(){const{t}=this;return n(h,{title:t("project.workflow.gantt")},{default:()=>this.seriesData.length>0&&n(w,{seriesData:this.seriesData,taskList:this.taskList},null)})}});export{E as default};
