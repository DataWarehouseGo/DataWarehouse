import{s as r}from"./service.4ca56d82.js";import{bu as o}from"./index.536c7d72.js";function c(e){return r({url:"/resources",method:"get",params:e})}function d(e,u){return r({url:`/resources/${u}`,method:"get",params:e})}function a(e){return r({url:`/resources/${e}/query`,method:"get"})}function i(e){return r({url:"/resources",method:"post",data:e})}function f(e){return r({url:"/resources/authed-file",method:"get",params:e})}function l(e){return r({url:"/resources/authed-resource-tree",method:"get",params:e})}function h(e){return r({url:"/resources/authed-udf-func",method:"get",params:e})}function m(e){return r({url:"/resources/directory",method:"post",data:e})}function g(e){return r({url:"/resources/list",method:"get",params:e})}function p(e){return r({url:"/resources/online-create",method:"post",data:e})}function y(e){return r({url:"/resources/query-by-type",method:"get",params:e})}function R(e){return r({url:"/resources/udf-func",method:"get",params:e})}function F(e){return r({url:"/resources/udf-func/list",method:"get",params:e})}function $(e){return r({url:`/resources/udf-func/${e}`,method:"delete"})}function q(e){return r({url:"/resources/unauth-udf-func",method:"get",params:e})}function U(e,u){return r({url:`/resources/${u}`,method:"put",data:e})}function w(e){return r({url:`/resources/${e}`,method:"delete"})}function v(e){o.downloadFile(`resources/${e}/download`)}function L(e,u){return r({url:`/resources/${u}/update-content`,method:"put",data:e})}function b(e,u){return r({url:`/resources/${u}/view`,method:"get",params:e})}function B(e,u){return r({url:`/resources/${u}/udf-func`,method:"post",data:e})}function C(e,u,t){return r({url:`/resources/${u}/udf-func/${t}`,method:"put",data:e})}export{g as a,F as b,m as c,c as d,a as e,d as f,i as g,U as h,w as i,v as j,B as k,C as l,R as m,$ as n,p as o,h as p,y as q,q as r,l as s,f as t,L as u,b as v};
