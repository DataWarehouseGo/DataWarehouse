import{ak as a,ai as u,V as i}from"./index.536c7d72.js";function o(r,...e){if(Array.isArray(r))r.forEach(n=>o(n,...e));else return r(...e)}function t(r){return r.some(e=>a(e)?!(e.type===u||e.type===i&&!t(e.children)):!0)?r:null}function l(r,e){return r&&t(r())||e()}function s(r,e,n){return r&&t(r(e))||n(e)}function c(r,e){const n=r&&t(r());return e(n||null)}function m(r){return!(r&&t(r()))}export{l as a,s as b,o as c,m as i,c as r};