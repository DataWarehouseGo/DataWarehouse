import{s as e}from"./service.4ca56d82.js";function u(t){return e({url:"/cluster/create",method:"post",data:t})}function s(t){return e({url:"/cluster/delete",method:"post",data:t})}function l(t){return e({url:"/cluster/list-paging",method:"get",params:t})}function n(){return e({url:"/cluster/query-cluster-list",method:"get"})}function o(t){return e({url:"/cluster/update",method:"post",data:t})}function c(t){return e({url:"/cluster/verify-cluster",method:"post",data:t})}export{n as a,u as c,s as d,l as q,o as u,c as v};