import{s as e}from"./service.4ca56d82.js";function u(t){return e({url:"/data-quality/rule/page",method:"get",params:t})}function r(t){return e({url:"/data-quality/result/page",method:"get",params:t})}function s(){return e({url:"/data-quality/ruleList",method:"get"})}function n(t){return e({url:"/data-quality/getRuleFormCreateJson",method:"get",params:{ruleId:t}})}function o(t){return e({url:"/data-quality/getDatasourceOptionsById",method:"get",params:{datasourceId:t}})}export{r as a,s as b,o as c,n as g,u as q};