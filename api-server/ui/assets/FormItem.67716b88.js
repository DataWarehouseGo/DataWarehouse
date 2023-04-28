import{A as ne,at as Le,w as Ae,b as Te,y as Se,n as _,a as G,f as Q,a9 as Ne,g as N,h as be,i as Z,d as Ce,z as se,m as We,a4 as ye,l as Ee,B as Be,e as De,s as He,t as $,T as Ye,C as we,bw as Ke,q as C}from"./index.536c7d72.js";import{f as Ue}from"./Button.9dd5ee3c.js";import{f as ue}from"./format-length.a0cbed4d.js";import{g as $e}from"./fade-in.cssr.ef9eaee7.js";import{r as Je}from"./resolve-slot.12a336d2.js";import{k as Ze}from"./keysOf.10525521.js";function Ge(t,e,r){var n;const i=ne(t,null);if(i===null)return;const s=(n=Le())===null||n===void 0?void 0:n.proxy;Ae(r,a),a(r.value),Te(()=>{a(void 0,r.value)});function a(c,l){const g=i[e];l!==void 0&&o(g,l),c!==void 0&&f(g,c)}function o(c,l){c[l]||(c[l]=[]),c[l].splice(c[l].findIndex(g=>g===s),1)}function f(c,l){c[l]||(c[l]=[]),~c[l].findIndex(g=>g===s)||c[l].push(s)}}const de=Se("n-form"),Qe=Se("n-form-item-insts");function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},D.apply(this,arguments)}function Xe(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,re(t,e)}function me(t){return me=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},me(t)}function re(t,e){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},re(t,e)}function er(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fe(t,e,r){return er()?fe=Reflect.construct.bind():fe=function(i,s,a){var o=[null];o.push.apply(o,s);var f=Function.bind.apply(i,o),c=new f;return a&&re(c,a.prototype),c},fe.apply(null,arguments)}function rr(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function ge(t){var e=typeof Map=="function"?new Map:void 0;return ge=function(n){if(n===null||!rr(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return fe(n,arguments,me(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),re(i,n)},ge(t)}var nr=/%[sdj%]/g,tr=function(){};typeof process<"u"&&process.env;function he(t){if(!t||!t.length)return null;var e={};return t.forEach(function(r){var n=r.field;e[n]=e[n]||[],e[n].push(r)}),e}function j(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=0,s=r.length;if(typeof t=="function")return t.apply(null,r);if(typeof t=="string"){var a=t.replace(nr,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(r[i++]);case"%d":return Number(r[i++]);case"%j":try{return JSON.stringify(r[i++])}catch{return"[Circular]"}break;default:return o}});return a}return t}function ir(t){return t==="string"||t==="url"||t==="hex"||t==="email"||t==="date"||t==="pattern"}function F(t,e){return!!(t==null||e==="array"&&Array.isArray(t)&&!t.length||ir(e)&&typeof t=="string"&&!t)}function ar(t,e,r){var n=[],i=0,s=t.length;function a(o){n.push.apply(n,o||[]),i++,i===s&&r(n)}t.forEach(function(o){e(o,a)})}function xe(t,e,r){var n=0,i=t.length;function s(a){if(a&&a.length){r(a);return}var o=n;n=n+1,o<i?e(t[o],s):r([])}s([])}function sr(t){var e=[];return Object.keys(t).forEach(function(r){e.push.apply(e,t[r]||[])}),e}var qe=function(t){Xe(e,t);function e(r,n){var i;return i=t.call(this,"Async Validation Error")||this,i.errors=r,i.fields=n,i}return e}(ge(Error));function or(t,e,r,n,i){if(e.first){var s=new Promise(function(d,k){var A=function(u){return n(u),u.length?k(new qe(u,he(u))):d(i)},m=sr(t);xe(m,r,A)});return s.catch(function(d){return d}),s}var a=e.firstFields===!0?Object.keys(t):e.firstFields||[],o=Object.keys(t),f=o.length,c=0,l=[],g=new Promise(function(d,k){var A=function(v){if(l.push.apply(l,v),c++,c===f)return n(l),l.length?k(new qe(l,he(l))):d(i)};o.length||(n(l),d(i)),o.forEach(function(m){var v=t[m];a.indexOf(m)!==-1?xe(v,r,A):ar(v,r,A)})});return g.catch(function(d){return d}),g}function fr(t){return!!(t&&t.message!==void 0)}function dr(t,e){for(var r=t,n=0;n<e.length;n++){if(r==null)return r;r=r[e[n]]}return r}function Re(t,e){return function(r){var n;return t.fullFields?n=dr(e,t.fullFields):n=e[r.field||t.fullField],fr(r)?(r.field=r.field||t.fullField,r.fieldValue=n,r):{message:typeof r=="function"?r():r,fieldValue:n,field:r.field||t.fullField}}}function Fe(t,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];typeof n=="object"&&typeof t[r]=="object"?t[r]=D({},t[r],n):t[r]=n}}return t}var je=function(e,r,n,i,s,a){e.required&&(!n.hasOwnProperty(e.field)||F(r,a||e.type))&&i.push(j(s.messages.required,e.fullField))},lr=function(e,r,n,i,s){(/^\s+$/.test(r)||r==="")&&i.push(j(s.messages.whitespace,e.fullField))},oe,ur=function(){if(oe)return oe;var t="[a-fA-F\\d:]",e=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+t+")|(?<="+t+")(?=\\s|$))":""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+r+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+r+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+r+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+r+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+r+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+r+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+r+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+r+"$)|(?:^"+i+"$)"),a=new RegExp("^"+r+"$"),o=new RegExp("^"+i+"$"),f=function(b){return b&&b.exact?s:new RegExp("(?:"+e(b)+r+e(b)+")|(?:"+e(b)+i+e(b)+")","g")};f.v4=function(h){return h&&h.exact?a:new RegExp(""+e(h)+r+e(h),"g")},f.v6=function(h){return h&&h.exact?o:new RegExp(""+e(h)+i+e(h),"g")};var c="(?:(?:[a-z]+:)?//)",l="(?:\\S+(?::\\S*)?@)?",g=f.v4().source,d=f.v6().source,k="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",A="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",m="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",v="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',M="(?:"+c+"|www\\.)"+l+"(?:localhost|"+g+"|"+d+"|"+k+A+m+")"+v+u;return oe=new RegExp("(?:^"+M+"$)","i"),oe},ke={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},X={integer:function(e){return X.number(e)&&parseInt(e,10)===e},float:function(e){return X.number(e)&&!X.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!X.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(ke.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(ur())},hex:function(e){return typeof e=="string"&&!!e.match(ke.hex)}},cr=function(e,r,n,i,s){if(e.required&&r===void 0){je(e,r,n,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?X[o](r)||i.push(j(s.messages.types[o],e.fullField,e.type)):o&&typeof r!==e.type&&i.push(j(s.messages.types[o],e.fullField,e.type))},mr=function(e,r,n,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",f=typeof e.max=="number",c=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=r,g=null,d=typeof r=="number",k=typeof r=="string",A=Array.isArray(r);if(d?g="number":k?g="string":A&&(g="array"),!g)return!1;A&&(l=r.length),k&&(l=r.replace(c,"_").length),a?l!==e.len&&i.push(j(s.messages[g].len,e.fullField,e.len)):o&&!f&&l<e.min?i.push(j(s.messages[g].min,e.fullField,e.min)):f&&!o&&l>e.max?i.push(j(s.messages[g].max,e.fullField,e.max)):o&&f&&(l<e.min||l>e.max)&&i.push(j(s.messages[g].range,e.fullField,e.min,e.max))},J="enum",gr=function(e,r,n,i,s){e[J]=Array.isArray(e[J])?e[J]:[],e[J].indexOf(r)===-1&&i.push(j(s.messages[J],e.fullField,e[J].join(", ")))},hr=function(e,r,n,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||i.push(j(s.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(r)||i.push(j(s.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},p={required:je,whitespace:lr,type:cr,range:mr,enum:gr,pattern:hr},pr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r,"string")&&!e.required)return n();p.required(e,r,i,a,s,"string"),F(r,"string")||(p.type(e,r,i,a,s),p.range(e,r,i,a,s),p.pattern(e,r,i,a,s),e.whitespace===!0&&p.whitespace(e,r,i,a,s))}n(a)},vr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r)&&!e.required)return n();p.required(e,r,i,a,s),r!==void 0&&p.type(e,r,i,a,s)}n(a)},br=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(r===""&&(r=void 0),F(r)&&!e.required)return n();p.required(e,r,i,a,s),r!==void 0&&(p.type(e,r,i,a,s),p.range(e,r,i,a,s))}n(a)},yr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r)&&!e.required)return n();p.required(e,r,i,a,s),r!==void 0&&p.type(e,r,i,a,s)}n(a)},wr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r)&&!e.required)return n();p.required(e,r,i,a,s),F(r)||p.type(e,r,i,a,s)}n(a)},xr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r)&&!e.required)return n();p.required(e,r,i,a,s),r!==void 0&&(p.type(e,r,i,a,s),p.range(e,r,i,a,s))}n(a)},qr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r)&&!e.required)return n();p.required(e,r,i,a,s),r!==void 0&&(p.type(e,r,i,a,s),p.range(e,r,i,a,s))}n(a)},Rr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(r==null&&!e.required)return n();p.required(e,r,i,a,s,"array"),r!=null&&(p.type(e,r,i,a,s),p.range(e,r,i,a,s))}n(a)},Fr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r)&&!e.required)return n();p.required(e,r,i,a,s),r!==void 0&&p.type(e,r,i,a,s)}n(a)},kr="enum",Or=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r)&&!e.required)return n();p.required(e,r,i,a,s),r!==void 0&&p[kr](e,r,i,a,s)}n(a)},Pr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r,"string")&&!e.required)return n();p.required(e,r,i,a,s),F(r,"string")||p.pattern(e,r,i,a,s)}n(a)},_r=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r,"date")&&!e.required)return n();if(p.required(e,r,i,a,s),!F(r,"date")){var f;r instanceof Date?f=r:f=new Date(r),p.type(e,f,i,a,s),f&&p.range(e,f.getTime(),i,a,s)}}n(a)},Ar=function(e,r,n,i,s){var a=[],o=Array.isArray(r)?"array":typeof r;p.required(e,r,i,a,s,o),n(a)},ce=function(e,r,n,i,s){var a=e.type,o=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(F(r,a)&&!e.required)return n();p.required(e,r,i,o,s,a),F(r,a)||p.type(e,r,i,o,s)}n(o)},Sr=function(e,r,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(F(r)&&!e.required)return n();p.required(e,r,i,a,s)}n(a)},ee={string:pr,method:vr,number:br,boolean:yr,regexp:wr,integer:xr,float:qr,array:Rr,object:Fr,enum:Or,pattern:Pr,date:_r,url:ce,hex:ce,email:ce,required:Ar,any:Sr};function pe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var ve=pe(),te=function(){function t(r){this.rules=null,this._messages=ve,this.define(r)}var e=t.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Fe(pe(),n)),this._messages},e.validate=function(n,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=n,f=i,c=s;if(typeof f=="function"&&(c=f,f={}),!this.rules||Object.keys(this.rules).length===0)return c&&c(null,o),Promise.resolve(o);function l(m){var v=[],u={};function M(b){if(Array.isArray(b)){var O;v=(O=v).concat.apply(O,b)}else v.push(b)}for(var h=0;h<m.length;h++)M(m[h]);v.length?(u=he(v),c(v,u)):c(null,o)}if(f.messages){var g=this.messages();g===ve&&(g=pe()),Fe(g,f.messages),f.messages=g}else f.messages=this.messages();var d={},k=f.keys||Object.keys(this.rules);k.forEach(function(m){var v=a.rules[m],u=o[m];v.forEach(function(M){var h=M;typeof h.transform=="function"&&(o===n&&(o=D({},o)),u=o[m]=h.transform(u)),typeof h=="function"?h={validator:h}:h=D({},h),h.validator=a.getValidationMethod(h),h.validator&&(h.field=m,h.fullField=h.fullField||m,h.type=a.getType(h),d[m]=d[m]||[],d[m].push({rule:h,value:u,source:o,field:m}))})});var A={};return or(d,f,function(m,v){var u=m.rule,M=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");M=M&&(u.required||!u.required&&m.value),u.field=m.field;function h(x,I){return D({},I,{fullField:u.fullField+"."+x,fullFields:u.fullFields?[].concat(u.fullFields,[x]):[x]})}function b(x){x===void 0&&(x=[]);var I=Array.isArray(x)?x:[x];!f.suppressWarning&&I.length&&t.warning("async-validator:",I),I.length&&u.message!==void 0&&(I=[].concat(u.message));var E=I.map(Re(u,o));if(f.first&&E.length)return A[u.field]=1,v(E);if(!M)v(E);else{if(u.required&&!m.value)return u.message!==void 0?E=[].concat(u.message).map(Re(u,o)):f.error&&(E=[f.error(u,j(f.messages.required,u.field))]),v(E);var T={};u.defaultField&&Object.keys(m.value).map(function(R){T[R]=u.defaultField}),T=D({},T,m.rule.fields);var L={};Object.keys(T).forEach(function(R){var y=T[R],P=Array.isArray(y)?y:[y];L[R]=P.map(h.bind(null,R))});var w=new t(L);w.messages(f.messages),m.rule.options&&(m.rule.options.messages=f.messages,m.rule.options.error=f.error),w.validate(m.value,m.rule.options||f,function(R){var y=[];E&&E.length&&y.push.apply(y,E),R&&R.length&&y.push.apply(y,R),v(y.length?y:null)})}}var O;if(u.asyncValidator)O=u.asyncValidator(u,m.value,b,m.source,f);else if(u.validator){try{O=u.validator(u,m.value,b,m.source,f)}catch(x){console.error==null||console.error(x),f.suppressValidatorError||setTimeout(function(){throw x},0),b(x.message)}O===!0?b():O===!1?b(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):O instanceof Array?b(O):O instanceof Error&&b(O.message)}O&&O.then&&O.then(function(){return b()},function(x){return b(x)})},function(m){l(m)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!ee.hasOwnProperty(n.type))throw new Error(j("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?ee.required:ee[this.getType(n)]||void 0},t}();te.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");ee[e]=r};te.warning=tr;te.messages=ve;te.validators=ee;function Er(t){const e=ne(de,null);return{mergedSize:_(()=>t.size!==void 0?t.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function $r(t){const e=ne(de,null),r=_(()=>{if(n.value==="top")return;const{labelWidth:d}=t;if(d!==void 0&&d!=="auto")return ue(d);if(d==="auto"||(e==null?void 0:e.props.labelWidth)==="auto"){const k=e==null?void 0:e.maxChildLabelWidthRef.value;return k!==void 0?ue(k):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return ue(e.props.labelWidth)}),n=_(()=>{const{labelPlacement:d}=t;return d!==void 0?d:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),i=_(()=>{const{labelAlign:d}=t;if(d)return d;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),s=_(()=>{var d;return[(d=t.labelProps)===null||d===void 0?void 0:d.style,t.labelStyle,{width:r.value}]}),a=_(()=>{const{showRequireMark:d}=t;return d!==void 0?d:e==null?void 0:e.props.showRequireMark}),o=_(()=>{const{requireMarkPlacement:d}=t;return d!==void 0?d:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),f=G(!1),c=_(()=>{const{validationStatus:d}=t;if(d!==void 0)return d;if(f.value)return"error"}),l=_(()=>{const{showFeedback:d}=t;return d!==void 0?d:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),g=_(()=>{const{showLabel:d}=t;return d!==void 0?d:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:f,mergedLabelStyle:s,mergedLabelPlacement:n,mergedLabelAlign:i,mergedShowRequireMark:a,mergedRequireMarkPlacement:o,mergedValidationStatus:c,mergedShowFeedback:l,mergedShowLabel:g}}function jr(t){const e=ne(de,null),r=_(()=>{const{rulePath:a}=t;if(a!==void 0)return a;const{path:o}=t;if(o!==void 0)return o}),n=_(()=>{const a=[],{rule:o}=t;if(o!==void 0&&(Array.isArray(o)?a.push(...o):a.push(o)),e){const{rules:f}=e.props,{value:c}=r;if(f!==void 0&&c!==void 0){const l=$e(f,c);l!==void 0&&(Array.isArray(l)?a.push(...l):a.push(l))}}return a}),i=_(()=>n.value.some(a=>a.required)),s=_(()=>i.value||t.required);return{mergedRules:n,mergedRequired:s}}const{cubicBezierEaseInOut:Oe}=Ne;function Mr({name:t="fade-down",fromOffset:e="-4px",enterDuration:r=".3s",leaveDuration:n=".3s",enterCubicBezier:i=Oe,leaveCubicBezier:s=Oe}={}){return[Q(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),Q(`&.${t}-transition-enter-to, &.${t}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),Q(`&.${t}-transition-leave-active`,{transition:`opacity ${n} ${s}, transform ${n} ${s}`}),Q(`&.${t}-transition-enter-active`,{transition:`opacity ${r} ${i}, transform ${r} ${i}`})]}const zr=N("form-item",{display:"grid",lineHeight:"var(--n-line-height)"},[N("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 `,[be("asterisk",`
 user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),be("asterisk-placeholder",`
 user-select: none;
 visibility: hidden; 
 `)]),N("form-item-blank",{gridArea:"blank",minHeight:"var(--n-blank-height)"}),Z("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 `,[N("form-item-label",`
 height: var(--n-blank-height);
 line-height: var(--n-blank-height);
 box-sizing: border-box;
 white-space: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `)]),Z("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: var(--n-label-height) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[Z("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),N("form-item-label",{display:"flex",alignItems:"flex-end",justifyContent:"var(--n-label-text-align)"})]),N("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),N("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[Q("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),N("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[Z("warning",{color:"var(--n-feedback-text-color-warning)"}),Z("error",{color:"var(--n-feedback-text-color-error)"}),Mr({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var Pe=globalThis&&globalThis.__awaiter||function(t,e,r,n){function i(s){return s instanceof r?s:new r(function(a){a(s)})}return new(r||(r=Promise))(function(s,a){function o(l){try{c(n.next(l))}catch(g){a(g)}}function f(l){try{c(n.throw(l))}catch(g){a(g)}}function c(l){l.done?s(l.value):i(l.value).then(o,f)}c((n=n.apply(t,e||[])).next())})};const Me=Object.assign(Object.assign({},Ee.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object}),Br=Ze(Me);function _e(t,e){return(...r)=>{try{const n=t(...r);return!e&&(typeof n=="boolean"||n instanceof Error||Array.isArray(n))||(n==null?void 0:n.then)?n:(n===void 0||we("form-item/validate",`You return a ${typeof n} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(n){we("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(n);return}}}const Dr=Ce({name:"FormItem",props:Me,setup(t){Ge(Qe,"formItems",se(t,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=We(t),n=ne(de,null),i=Er(t),s=$r(t),{validationErrored:a}=s,{mergedRequired:o,mergedRules:f}=jr(t),{mergedSize:c}=i,{mergedLabelPlacement:l,mergedLabelAlign:g}=s,d=G([]),k=G(ye()),A=n?se(n.props,"disabled"):G(!1),m=Ee("Form","-form-item",zr,Ke,t,e);Ae(se(t,"path"),()=>{t.ignorePathChange||v()});function v(){d.value=[],a.value=!1,t.feedback&&(k.value=ye())}function u(){x("blur")}function M(){x("change")}function h(){x("focus")}function b(){x("input")}function O(w,R){return Pe(this,void 0,void 0,function*(){let y,P,W,H;return typeof w=="string"?(y=w,P=R):w!==null&&typeof w=="object"&&(y=w.trigger,P=w.callback,W=w.shouldRuleBeApplied,H=w.options),yield new Promise((Y,K)=>{x(y,W,H).then(({valid:U,errors:B})=>{U?(P&&P(),Y()):(P&&P(B),K(B))})})})}const x=(w=null,R=()=>!0,y={suppressWarning:!0})=>Pe(this,void 0,void 0,function*(){const{path:P}=t;y?y.first||(y.first=t.first):y={};const{value:W}=f,H=n?$e(n.props.model,P||""):void 0,Y={},K={},U=(w?W.filter(z=>Array.isArray(z.trigger)?z.trigger.includes(w):z.trigger===w):W).filter(R).map((z,V)=>{const q=Object.assign({},z);if(q.validator&&(q.validator=_e(q.validator,!1)),q.asyncValidator&&(q.asyncValidator=_e(q.asyncValidator,!0)),q.renderMessage){const S=`__renderMessage__${V}`;K[S]=q.message,q.message=S,Y[S]=q.renderMessage}return q});if(!U.length)return{valid:!0};const B=P!=null?P:"__n_no_path__",ie=new te({[B]:U}),{validateMessages:ae}=(n==null?void 0:n.props)||{};return ae&&ie.messages(ae),yield new Promise(z=>{ie.validate({[B]:H},y,V=>{V!=null&&V.length?(d.value=V.map(q=>{const S=(q==null?void 0:q.message)||"";return{key:S,render:()=>S.startsWith("__renderMessage__")?Y[S]():S}}),V.forEach(q=>{var S;!((S=q.message)===null||S===void 0)&&S.startsWith("__renderMessage__")&&(q.message=K[q.message])}),a.value=!0,z({valid:!1,errors:V})):(v(),z({valid:!0}))})})});Be(Ue,{path:se(t,"path"),disabled:A,mergedSize:i.mergedSize,mergedValidationStatus:s.mergedValidationStatus,restoreValidation:v,handleContentBlur:u,handleContentChange:M,handleContentFocus:h,handleContentInput:b});const I={validate:O,restoreValidation:v,internalValidate:x},E=G(null);De(()=>{E.value!==null&&(n==null||n.deriveMaxChildLabelWidth(Number(getComputedStyle(E.value).width.slice(0,-2))))});const T=_(()=>{var w;const{value:R}=c,{value:y}=l,P=y==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:W},self:{labelTextColor:H,asteriskColor:Y,lineHeight:K,feedbackTextColor:U,feedbackTextColorWarning:B,feedbackTextColorError:ie,feedbackPadding:ae,[C("labelHeight",R)]:z,[C("blankHeight",R)]:V,[C("feedbackFontSize",R)]:q,[C("feedbackHeight",R)]:S,[C("labelPadding",P)]:ze,[C("labelTextAlign",P)]:Ve,[C(C("labelFontSize",y),R)]:Ie}}=m.value;let le=(w=g.value)!==null&&w!==void 0?w:Ve;return y==="top"&&(le=le==="right"?"flex-end":"flex-start"),{"--n-bezier":W,"--n-line-height":K,"--n-blank-height":V,"--n-label-font-size":Ie,"--n-label-text-align":le,"--n-label-height":z,"--n-label-padding":ze,"--n-asterisk-color":Y,"--n-label-text-color":H,"--n-feedback-padding":ae,"--n-feedback-font-size":q,"--n-feedback-height":S,"--n-feedback-text-color":U,"--n-feedback-text-color-warning":B,"--n-feedback-text-color-error":ie}}),L=He("form-item",_(()=>{var w;return`${c.value[0]}${l.value[0]}${((w=g.value)===null||w===void 0?void 0:w[0])||""}`}),T,t);return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:E,mergedClsPrefix:e,mergedRequired:o,feedbackId:k,renderExplains:d},s),i),I),{cssVars:r?void 0:T,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender})},render(){var t;const{$slots:e,mergedClsPrefix:r,mergedShowLabel:n,mergedShowRequireMark:i,mergedRequireMarkPlacement:s,onRender:a}=this,o=i!==void 0?i:this.mergedRequired;return a==null||a(),$("div",{class:[`${r}-form-item`,this.themeClass,`${r}-form-item--${this.mergedSize}-size`,`${r}-form-item--${this.mergedLabelPlacement}-labelled`,!n&&`${r}-form-item--no-label`],style:this.cssVars},n&&(this.label||e.label)?$("label",Object.assign({},this.labelProps,{class:[(t=this.labelProps)===null||t===void 0?void 0:t.class,`${r}-form-item-label`],style:this.mergedLabelStyle,ref:"labelElementRef"}),s!=="left"?e.label?e.label():this.label:null,o?$("span",{class:`${r}-form-item-label__asterisk`},s!=="left"?"\xA0*":"*\xA0"):s==="right-hanging"&&$("span",{class:`${r}-form-item-label__asterisk-placeholder`},"\xA0*"),s==="left"?e.label?e.label():this.label:null):null,$("div",{class:[`${r}-form-item-blank`,this.mergedValidationStatus&&`${r}-form-item-blank--${this.mergedValidationStatus}`]},e),this.mergedShowFeedback?$("div",{key:this.feedbackId,class:`${r}-form-item-feedback-wrapper`},$(Ye,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:f}=this;return Je(e.feedback,c=>{var l;const{feedback:g}=this,d=c||g?$("div",{key:"__feedback__",class:`${r}-form-item-feedback__line`},c||g):this.renderExplains.length?(l=this.renderExplains)===null||l===void 0?void 0:l.map(({key:k,render:A})=>$("div",{key:k,class:`${r}-form-item-feedback__line`},A())):null;return d?f==="warning"?$("div",{key:"controlled-warning",class:`${r}-form-item-feedback ${r}-form-item-feedback--warning`},d):f==="error"?$("div",{key:"controlled-error",class:`${r}-form-item-feedback ${r}-form-item-feedback--error`},d):f==="success"?$("div",{key:"controlled-success",class:`${r}-form-item-feedback ${r}-form-item-feedback--success`},d):$("div",{key:"controlled-default",class:`${r}-form-item-feedback`},d):null})}})):null)}});export{Dr as N,Qe as a,Me as b,Br as c,de as f};