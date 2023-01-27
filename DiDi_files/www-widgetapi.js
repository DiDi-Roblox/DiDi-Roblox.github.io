(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(ca(this))}})}return a});
function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}}
function ka(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function v(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.pa=b.prototype}
function ta(){this.H=!1;this.m=null;this.i=void 0;this.h=1;this.v=this.s=0;this.X=this.j=null}
function wa(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.N=function(a){this.i=a};
function xa(a,b){a.j={fc:b,qc:!0};a.h=a.s||a.v}
ta.prototype.return=function(a){this.j={return:a};this.h=this.v};
function x(a,b,c){a.h=c;return{value:b}}
ta.prototype.D=function(a){this.h=a};
function za(a,b,c){a.s=b;void 0!=c&&(a.v=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.fc;a.j=null;return b}
function Ca(a){a.X=[a.j];a.s=0;a.v=0}
function Da(a){var b=a.X.splice(0)[0];(b=a.j=a.j||b)?b.qc?a.h=a.s||a.v:void 0!=b.D&&a.v<b.D?(a.h=b.D,a.j=null):a.h=a.v:a.h=0}
function Ea(a){this.h=new ta;this.i=a}
function Fa(a,b){wa(a.h);var c=a.h.m;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.m=null,xa(a.h,g),Ha(a)}a.h.m=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.qc)throw b.fc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){wa(a.h);a.h.m?b=Ga(a,a.h.m.next,b,a.h.N):(a.h.N(b),b=Ha(a));return b};
this.throw=function(b){wa(a.h);a.h.m?b=Ga(a,a.h.m["throw"],b,a.h.N):(xa(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function y(a){return Ka(new Ja(new Ea(a)))}
function La(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.h=null};
c.prototype.m=function(g){this.j(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Ib),reject:g(this.v)}};
b.prototype.Ib=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Hc(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Hb(g):this.s(g)}};
b.prototype.Hb=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.Ic(h,g):this.s(g)};
b.prototype.v=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Jb();this.X()};
b.prototype.Jb=function(){var g=this;e(function(){if(g.Ga()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.Ga=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.X=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Hc=function(g){var h=this.m();g.ub(h.resolve,h.reject)};
b.prototype.Ic=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(w){try{l(r(w))}catch(A){m(A)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.ub(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ub=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ub(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(A){r[w]=A;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).ub(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ja(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
t("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Oa(a){return a?a:Array.prototype.fill}
t("Int8Array.prototype.fill",Oa);t("Uint8Array.prototype.fill",Oa);t("Uint8ClampedArray.prototype.fill",Oa);t("Int16Array.prototype.fill",Oa);t("Uint16Array.prototype.fill",Oa);t("Int32Array.prototype.fill",Oa);t("Uint32Array.prototype.fill",Oa);t("Float32Array.prototype.fill",Oa);t("Float64Array.prototype.fill",Oa);t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Za=Va:Za=Ya;return Za.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.pa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Md=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ib(a){return Array.prototype.concat.apply([],arguments)}
function jb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=qb(a[c]);return b}
var rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rb.length;f++)c=rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var tb;function ub(){}
function vb(a){return new ub(wb,a)}
var wb={};vb("");var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a,b){this.h=b===Gb?a:""}
Fb.prototype.toString=function(){return this.h.toString()};
var Gb={},Hb=new Fb("about:invalid#zClosurez",Gb);function Nb(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
function F(a){return-1!=Nb().indexOf(a)}
;function Ob(){return(F("Chrome")||F("CriOS"))&&!F("Edge")||F("Silk")}
;var Pb={};function Qb(a){this.h=Pb===Pb?a:""}
Qb.prototype.toString=function(){return this.h.toString()};var Rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sb(a){return a?decodeURI(a):a}
function Tb(a){return Sb(a.match(Rb)[3]||null)}
function Ub(a){var b=a.match(Rb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
var Xb=/#|$/;function Yb(a,b){var c=a.search(Xb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function Zb(a){z.setTimeout(function(){throw a;},0)}
;function $b(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function ac(a){ac[" "](a);return a}
ac[" "]=function(){};var bc=F("Opera"),cc=F("Trident")||F("MSIE"),dc=F("Edge"),ec=F("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),fc=-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge");function gc(){var a=z.document;return a?a.documentMode:void 0}
var hc;a:{var ic="",jc=function(){var a=Nb();if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(dc)return/Edge\/([\d\.]+)/.exec(a);if(cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jc&&(ic=jc?jc[1]:"");if(cc){var kc=gc();if(null!=kc&&kc>parseFloat(ic)){hc=String(kc);break a}}hc=ic}var pc=hc,qc;if(z.document&&cc){var rc=gc();qc=rc?rc:parseInt(pc,10)||void 0}else qc=void 0;var sc=qc;var tc=$b()||F("iPod"),uc=F("iPad");!F("Android")||Ob();Ob();var vc=F("Safari")&&!(Ob()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!($b()||F("iPad")||F("iPod"));var wc={},xc=null;function yc(a,b){Qa(a);void 0===b&&(b=0);zc();b=wc[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ac(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Bc(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Bc(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=xc[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
zc();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function zc(){if(!xc){xc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));wc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===xc[f]&&(xc[f]=e)}}}}
;var Cc="undefined"!==typeof Uint8Array,Dc={};var Ec;function Fc(){if(Dc!==Dc)throw Error("illegal external caller");}
function Gc(a){Fc();this.ob=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Gc.prototype.Ab=function(){return null==this.ob};
Gc.prototype.sizeBytes=function(){Fc();var a=this.ob;null==a||Cc&&null!=a&&a instanceof Uint8Array||("string"===typeof a?a=Ac(a):(Pa(a),a=null));return(a=null==a?a:this.ob=a)?a.length:0};var Hc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Ic(a,b){if(Hc)return a[Hc]|=b;if(void 0!==a.ma)return a.ma|=b;Object.defineProperties(a,{ma:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Jc(a,b){Hc?a[Hc]&&(a[Hc]&=~b):void 0!==a.ma&&(a.ma&=~b)}
function G(a){var b;Hc?b=a[Hc]:b=a.ma;return null==b?0:b}
function Kc(a,b){Hc?a[Hc]=b:void 0!==a.ma?a.ma=b:Object.defineProperties(a,{ma:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Lc(a){Ic(a,1);return a}
function Mc(a){return!!(G(a)&2)}
function Nc(a,b){Kc(b,(a|0)&-51)}
function Oc(a,b){Kc(b,(a|18)&-41)}
;var Pc={};function Rc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Sc,Tc,Uc=[];Kc(Uc,23);Tc=Object.freeze(Uc);function Vc(a){if(Mc(a.J))throw Error("Cannot mutate an immutable Message");}
function Wc(a){var b=a.length;(b=b?a[b-1]:void 0)&&Rc(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Xc(a){return a.displayName||a.name||"unknown type name"}
function Yc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Xc(b)+" but got "+(a&&Xc(a.constructor)));return a}
;function Zc(a){var b=a.h+a.Ia;return a.ha||(a.ha=a.J[b]={})}
function $c(a,b,c){return-1===b?null:b>=a.h?a.ha?a.ha[b]:void 0:c&&a.ha&&(c=a.ha[b],null!=c)?c:a.J[b+a.Ia]}
function H(a,b,c,d){Vc(a);return ad(a,b,c,d)}
function ad(a,b,c,d){a.i&&(a.i=void 0);if(b>=a.h||d)return Zc(a)[b]=c,a;a.J[b+a.Ia]=c;(c=a.ha)&&b in c&&delete c[b];return a}
function bd(a,b){a&&Mc(b.J)&&Mc(a.J);return a}
function cd(a,b,c,d){var e=$c(a,b,d);Array.isArray(e)||(e=Tc);var f=G(e);f&1||Lc(e);var g=!(c&2),h=f&2;c&1||!h?g&&f&16&&!h&&Jc(e,16):(e=Lc(Array.prototype.slice.call(e)),ad(a,b,e,d));return e}
function dd(a,b,c,d){Vc(a);(c=ed(a,c))&&c!==b&&null!=d&&ad(a,c,void 0,!1);ad(a,b,d)}
function ed(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=$c(a,e)&&(0!==c&&ad(a,c,void 0,!1),c=e)}return c}
function fd(a,b,c){var d=void 0===d?!1:d;var e=$c(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.Rb!==Pc?f?new b(e):void 0:e;g!==e&&null!=g&&(ad(a,c,g,d),Ic(g.J,G(a.J)&18));b=bd(g,a);if(null==b)return b;Mc(a.J)||(e=b,Mc(e.J)&&(g=gd(e,!1),g.i=e,e=g),e!==b&&(b=e,ad(a,c,b,d)));return bd(b,a)}
function J(a,b,c,d){Vc(a);null!=d?Yc(d,b):d=void 0;return ad(a,c,d)}
function hd(a,b,c,d,e){Vc(a);null!=e?Yc(e,b):e=void 0;dd(a,c,d,e)}
function id(a,b,c,d,e){Vc(a);var f=null==d?Tc:Lc([]);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Yc(k,b);g=g&&!Mc(k.J);f[h]=k.J}b=f;g=(g?8:0)|1;f=G(b);(f&g)!==g&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Kc(b,f|g));f=b;a.ca||(a.ca={});a.ca[c]=d}else a.ca&&(a.ca[c]=void 0);return ad(a,c,f,e)}
function md(a,b,c,d){Vc(a);a.ca||(a.ca={});var e=a.ca[b];var f=cd(a,b,3);if(e)Object.isFrozen(e)&&(e=Array.prototype.slice.call(e),a.ca[b]=e);else{var g=f;e=[];var h=!!(G(a.J)&16),k=Mc(g);f=g;k&&(g=Array.prototype.slice.call(g));for(var l=k,m=0;m<g.length;m++){var n=g[m];var r=c,p=!1;p=void 0===p?!1:p;n=Array.isArray(n)?new r(n):p?new r:void 0;if(void 0!==n){r=n.J;var w=p=G(r);k&&(w|=2);h&&(w|=16);w!=p&&Kc(r,w);r=w;l||(l=!!(2&r));e.push(n)}}a.ca[b]=e;k=!l;l=G(g);h=l|33;h=k?h|8:h&-9;l!=h&&(Object.isFrozen(g)&&
(g=Array.prototype.slice.call(g)),Kc(g,h));f!==g&&ad(a,b,g)}c=null!=d?Yc(d,c):new c;a=cd(a,b,2);e.push(c);a.push(c.J);Mc(c.J)&&Jc(a,8)}
function nd(a,b){a=$c(a,b);return null==a?"":a}
function od(a,b){var c=ed(a,pd)===b;return $c(a,c?b:-1)}
;var qd;function rd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(G(a)&128))return a=Array.prototype.slice.call(a),Wc(a),a}else{if(Cc&&null!=a&&a instanceof Uint8Array)return yc(a);if(a instanceof Gc){var b=a.ob;return null==b?"":"string"===typeof b?b:a.ob=yc(b)}}}return a}
;function sd(a,b,c,d){if(null!=a){if(Array.isArray(a))a=td(a,b,c,void 0!==d);else if(Rc(a)){var e={},f;for(f in a)e[f]=sd(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function td(a,b,c,d){var e=G(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=sd(a[f],b,c,d);c(e,a);return a}
function ud(a){return a.Rb===Pc?a.toJSON():rd(a)}
function vd(a,b){a&128&&Wc(b)}
;function wd(a,b,c){c=void 0===c?Oc:c;if(null!=a){if(Cc&&a instanceof Uint8Array)return a.length?new Gc(new Uint8Array(a)):Ec||(Ec=new Gc(null));if(Array.isArray(a)){var d=G(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Kc(a,d|2),a;a=td(a,wd,d&4?Oc:c,!0);b=G(a);b&4&&b&2&&Object.freeze(a);return a}return a.Rb===Pc?xd(a):a}}
function yd(a,b,c,d,e,f,g){(a=a.ca&&a.ca[c])?(d=0<a.length?a[0].constructor:void 0,f=G(a),f&2||(a=fb(a,xd),Oc(f,a),Object.freeze(a)),id(b,d,c,a,e)):H(b,c,wd(d,f,g),e)}
function xd(a){if(Mc(a.J))return a;a=gd(a,!0);Ic(a.J,2);return a}
function gd(a,b){var c=a.J,d=[];Ic(d,16);var e=a.constructor.h;e&&d.push(e);e=a.ha;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(G(c)&128)&&Wc(d);b=b||Mc(a.J)?Oc:Nc;var g=a.constructor;G(d);qd=d;d=new g(d);qd=void 0;a.pc&&(d.pc=a.pc.slice());g=!!(G(c)&16);for(var h=e?c.length-1:c.length,k=0;k<h;k++)yd(a,d,k-a.Ia,c[k],!1,g,b);if(e)for(var l in e)c=e[l],h=+l,Number.isNaN(h)?f[h]=c:yd(a,d,h,c,!0,g,b);return d}
;function K(a,b,c){null==a&&(a=qd);qd=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=48;var k=!0;e&&(d=0,h|=128);Kc(a,h)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var l=h=Ic(a,0);if(k=0!==(16&l))(g=0!==(32&l))||(l|=32);if(e)if(128&l)d=0;else{if(0<a.length){var m=a[a.length-1];if(Rc(m)&&"g"in m){d=0;l|=128;delete m.g;var n=!0,r;for(r in m){n=!1;break}n&&a.pop()}}}else if(128&l)throw Error();h!==l&&Kc(a,l)}this.Ia=(f?0:-1)-d;
this.ca=void 0;this.J=a;a:{f=this.J.length;d=f-1;if(f&&(f=this.J[d],Rc(f))){this.ha=f;this.h=d-this.Ia;break a}void 0!==b&&-1<b?(this.h=Math.max(b,d+1-this.Ia),this.ha=void 0):this.h=Number.MAX_VALUE}if(!e&&this.ha&&"g"in this.ha)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=k&&!g&&!0;e=this.h;var p;for(k=0;k<c.length;k++)g=c[k],g<e?(g+=this.Ia,(d=a[g])?zd(d,b):a[g]=Tc):(p||(p=Zc(this)),(d=p[g])?zd(d,b):p[g]=Tc)}}
K.prototype.toJSON=function(){var a=this.J,b;Sc?b=a:b=td(a,ud,vd);return b};
function Ad(a){Sc=!0;try{return JSON.stringify(a.toJSON(),Bd)}finally{Sc=!1}}
K.prototype.clone=function(){return gd(this,!1)};
function zd(a,b){if(Array.isArray(a)){var c=G(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Kc(a,c|d)}}
K.prototype.Rb=Pc;K.prototype.toString=function(){return this.J.toString()};
function Bd(a,b){return rd(b)}
;var Cd=window;vb("csi.gstatic.com");vb("googleads.g.doubleclick.net");vb("partner.googleadservices.com");vb("pubads.g.doubleclick.net");vb("securepubads.g.doubleclick.net");vb("tpc.googlesyndication.com");function Dd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
q=Dd.prototype;q.clone=function(){return new Dd(this.x,this.y)};
q.equals=function(a){return a instanceof Dd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
q.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
q.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
q.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ed(a,b){this.width=a;this.height=b}
q=Ed.prototype;q.clone=function(){return new Ed(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.Ab=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Gd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Hd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Id(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Jd[c])c=Jd[c];else{c=String(c);if(!Jd[c]){var f=/function\s+([^\(]+)/m.exec(c);Jd[c]=f?f[1]:"[Anonymous]"}c=Jd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Id(a,b){b||(b={});b[Kd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Kd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Id(a,b));return c}
function Kd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Jd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ld;try{new URL("s://g"),Ld=!0}catch(a){Ld=!1}var Md=Ld;function Nd(a,b){a.removeAttribute("srcdoc");if(b instanceof Fb)b instanceof Fb&&b.constructor===Fb?b=b.h:(Pa(b),b="type_error:SafeUrl");else{b:if(Md){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Od(a){this.dd=a}
function Pd(a){return new Od(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Qd=[Pd("data"),Pd("http"),Pd("https"),Pd("mailto"),Pd("ftp"),new Od(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Rd(a,b){b=void 0===b?Qd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Od&&d.dd(a))return new Fb(a,Gb)}}
function Sd(a){var b=void 0===b?Qd:b;return Rd(a,b)||Hb}
;function Td(a){var b=Ud;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Vd(){var a=[];Td(function(b){a.push(b)});
return a}
var Ud={td:"allow-forms",ud:"allow-modals",vd:"allow-orientation-lock",wd:"allow-pointer-lock",xd:"allow-popups",yd:"allow-popups-to-escape-sandbox",zd:"allow-presentation",Ad:"allow-same-origin",Bd:"allow-scripts",Cd:"allow-top-navigation",Dd:"allow-top-navigation-by-user-activation"},Wd=db(function(){return Vd()});
function Xd(){var a=Yd(),b={};E(Wd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Yd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Zd=(new Date).getTime();function $d(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ae="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ka(ae);function be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],A=e[2],I=e[3],M=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var S=I^w&(A^I);var O=1518500249}else S=w^A^I,O=1859775393;else 60>p?(S=w&A|I&(w|A),O=2400959708):(S=w^A^I,O=3395469782);S=((n<<5|n>>>27)&4294967295)+S+M+O+r[p]&4294967295;M=I;I=A;A=(w<<30|w>>>2)&4294967295;w=n;n=S}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+I&4294967295;e[4]=e[4]+M&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],w=0,A=n.length;w<A;++w)p.push(n.charCodeAt(w));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var w=24;0<=w;w-=8)n[r++]=e[p]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Nc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function ce(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,de($d(d),a,c||null)].join(" "):null}
function de(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),ee(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=ee(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ee(a){var b=be();b.update(a);return b.Nc().toLowerCase()}
;var fe={};function ge(a){this.h=a||{cookie:""}}
q=ge.prototype;q.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(!this.Ab())return!0;this.set("TESTCOOKIESENABLED","1",{Ob:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ud;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ob}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ob:0,path:b,domain:c});return d};
q.Ab=function(){return!this.h.cookie};
q.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var he=new ge("undefined"==typeof document?null:document);function ie(a){return!!fe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function je(a,b,c,d){(a=z[a])||(a=(new ge(document)).get(b));return a?ce(a,c,d):null}
function ke(a){var b=void 0===b?!1:b;var c=$d(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;ie(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new ge(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");ie(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new ge(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?ce(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ie(b)&&((b=je("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=je("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var le="undefined"!==typeof TextEncoder?new TextEncoder:null,me=le?function(a){return le.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ne(){this.j=this.j;this.v=this.v}
ne.prototype.j=!1;ne.prototype.dispose=function(){this.j||(this.j=!0,this.Sa())};
ne.prototype.Sa=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function oe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
oe.prototype.stopPropagation=function(){this.j=!0};
oe.prototype.preventDefault=function(){this.defaultPrevented=!0};var pe=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",function(){},b),z.removeEventListener("test",function(){},b)}catch(c){}return a}();function qe(a,b){oe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(qe,oe);var re={2:"touch",3:"pen",4:"mouse"};
qe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(ec){a:{try{ac(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:re[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&qe.pa.preventDefault.call(this)};
qe.prototype.stopPropagation=function(){qe.pa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
qe.prototype.preventDefault=function(){qe.pa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var se="closure_listenable_"+(1E6*Math.random()|0);var te=0;function we(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.yb=e;this.key=++te;this.lb=this.tb=!1}
function xe(a){a.lb=!0;a.listener=null;a.proxy=null;a.src=null;a.yb=null}
;function ye(a){this.src=a;this.listeners={};this.h=0}
ye.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ze(a,b,d,e);-1<g?(b=a[g],c||(b.tb=!1)):(b=new we(b,this.src,f,!!d,e),b.tb=c,a.push(b));return b};
ye.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ze(e,b,c,d);return-1<b?(xe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ae(a,b){var c=b.type;c in a.listeners&&hb(a.listeners[c],b)&&(xe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ze(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.lb&&f.listener==b&&f.capture==!!c&&f.yb==d)return e}return-1}
;var Be="closure_lm_"+(1E6*Math.random()|0),Ce={},De=0;function Ee(a,b,c,d,e){if(d&&d.once)Fe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ee(a,b[f],c,d,e);else c=Ge(c),a&&a[se]?a.Ka(b,c,Ra(d)?!!d.capture:!!d,e):He(a,b,c,!1,d,e)}
function He(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Ie(a);h||(a[Be]=h=new ye(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Je();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)pe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ke(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");De++}}
function Je(){function a(c){return b.call(a.src,a.listener,c)}
var b=Le;return a}
function Fe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Fe(a,b[f],c,d,e);else c=Ge(c),a&&a[se]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):He(a,b,c,!0,d,e)}
function Me(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Me(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Ge(c),a&&a[se])?a.h.remove(String(b),c,d,e):a&&(a=Ie(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ze(b,c,d,e)),(c=-1<a?b[a]:null)&&Ne(c))}
function Ne(a){if("number"!==typeof a&&a&&!a.lb){var b=a.src;if(b&&b[se])Ae(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ke(c),d):b.addListener&&b.removeListener&&b.removeListener(d);De--;(c=Ie(b))?(Ae(c,a),0==c.h&&(c.src=null,b[Be]=null)):xe(a)}}}
function Ke(a){return a in Ce?Ce[a]:Ce[a]="on"+a}
function Le(a,b){if(a.lb)a=!0;else{b=new qe(b,this);var c=a.listener,d=a.yb||a.src;a.tb&&Ne(a);a=c.call(d,b)}return a}
function Ie(a){a=a[Be];return a instanceof ye?a:null}
var Oe="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ge(a){if("function"===typeof a)return a;a[Oe]||(a[Oe]=function(b){return a.handleEvent(b)});
return a[Oe]}
;function Pe(){ne.call(this);this.h=new ye(this);this.Ga=this;this.N=null}
D(Pe,ne);Pe.prototype[se]=!0;Pe.prototype.addEventListener=function(a,b,c,d){Ee(this,a,b,c,d)};
Pe.prototype.removeEventListener=function(a,b,c,d){Me(this,a,b,c,d)};
function Qe(a,b){var c=a.N;if(c){var d=[];for(var e=1;c;c=c.N)d.push(c),++e}a=a.Ga;c=b.type||b;"string"===typeof b?b=new oe(b,a):b instanceof oe?b.target=b.target||a:(e=b,b=new oe(c,a),sb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Re(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Re(g,c,!0,b)&&e,b.j||(e=Re(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Re(g,c,!1,b)&&e}
Pe.prototype.Sa=function(){Pe.pa.Sa.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,xe(d[e]);delete a.listeners[c];a.h--}}this.N=null};
Pe.prototype.Ka=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Re(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.lb&&g.capture==c){var h=g.listener,k=g.yb||g.src;g.tb&&Ae(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Se(a){Pe.call(this);var b=this;this.X=this.m=0;this.ia=null!=a?a:{ka:function(e,f){return setTimeout(e,f)},
Qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.s=function(){return y(function(e){return x(e,Te(b),0)})};
window.addEventListener("offline",this.s);window.addEventListener("online",this.s);this.X||Ue(this)}
v(Se,Pe);function Ve(){var a=We;Se.h||(Se.h=new Se(a));return Se.h}
Se.prototype.dispose=function(){window.removeEventListener("offline",this.s);window.removeEventListener("online",this.s);this.ia.Qa(this.X);delete Se.h};
Se.prototype.da=function(){return this.i};
function Ue(a){a.X=a.ia.ka(function(){var b;return y(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.D(3):x(c,Te(a),3):x(c,Te(a),3);Ue(a);c.h=0})},3E4)}
function Te(a,b){return a.H?a.H:a.H=new Promise(function(c){var d,e,f,g;return y(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.m=a.ia.ka(function(){d.abort()},b||2E4)),x(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.H=void 0;a.m&&(a.ia.Qa(a.m),a.m=0);g!==a.i&&(a.i=g,a.i?Qe(a,"networkstatus-online"):Qe(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.D(3)}})})}
;function Xe(){this.data_=[];this.h=-1}
Xe.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Xe.prototype.get=function(a){return!!this.data_[a]};
function Ye(a){-1===a.h&&(a.h=gb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ze(a){K.call(this,a,-1,$e)}
v(Ze,K);function af(a,b){return H(a,2,b)}
function bf(a,b){return H(a,3,b)}
function cf(a,b){return H(a,4,b)}
function df(a,b){return H(a,5,b)}
function ef(a,b){return H(a,9,b)}
function ff(a,b){return id(a,gf,10,b)}
function hf(a,b){return H(a,11,b)}
function jf(a,b){return H(a,1,b)}
function kf(a,b){return H(a,7,b)}
function gf(a){K.call(this,a)}
v(gf,K);var $e=[10,6];var lf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function mf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function nf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function of(){var a=window;if(!nf(a))return null;var b=mf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(lf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function pf(a){var b;return hf(ff(df(af(jf(cf(kf(ef(bf(new Ze,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new gf;d=H(d,1,c.brand);return H(d,2,c.version)}))||[]),a.wow64||!1)}
function qf(){var a,b;return null!=(b=null==(a=of())?void 0:a.then(function(c){return pf(c)}))?b:null}
;function rf(a,b){this.j=a;this.m=b;this.i=0;this.h=null}
rf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function sf(a,b){a.m(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var tf;function uf(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Fd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cc;c.cc=null;e()}};
return function(e){d.next={cc:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function vf(){this.i=this.h=null}
vf.prototype.add=function(a,b){var c=wf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
vf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var wf=new rf(function(){return new xf},function(a){return a.reset()});
function xf(){this.next=this.scope=this.h=null}
xf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
xf.prototype.reset=function(){this.next=this.scope=this.h=null};var yf,zf=!1,Af=new vf;function Bf(a,b){yf||Cf();zf||(yf(),zf=!0);Af.add(a,b)}
function Cf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);yf=function(){a.then(Df)}}else yf=function(){var b=Df;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!F("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(tf||(tf=uf()),tf(b)):z.setImmediate(b)}}
function Df(){for(var a;a=Af.remove();){try{a.h.call(a.scope)}catch(b){Zb(b)}sf(wf,a)}zf=!1}
;function Ef(a,b){this.h=a[z.Symbol.iterator]();this.i=b}
Ef.prototype[Symbol.iterator]=function(){return this};
Ef.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ff(a,b){return new Ef(a,b)}
;function Gf(){this.blockSize=-1}
;function Hf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.m=this.i=0;this.reset()}
D(Hf,Gf);Hf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.i=0};
function If(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Hf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)If(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){If(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){If(this,e);f=0;break}}this.i=f;this.m+=b}};
Hf.prototype.digest=function(){var a=[],b=8*this.m;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;If(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Jf(){}
Jf.prototype.next=function(){return Kf};
var Kf={done:!0,value:void 0};function Lf(a){return{value:a,done:!1}}
Jf.prototype.ja=function(){return this};function Mf(a){if(a instanceof Nf||a instanceof Of||a instanceof Pf)return a;if("function"==typeof a.next)return new Nf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Nf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ja)return new Nf(function(){return a.ja()});
throw Error("Not an iterator or iterable.");}
function Nf(a){this.i=a}
Nf.prototype.ja=function(){return new Of(this.i())};
Nf.prototype[Symbol.iterator]=function(){return new Pf(this.i())};
Nf.prototype.h=function(){return new Pf(this.i())};
function Of(a){this.i=a}
v(Of,Jf);Of.prototype.next=function(){return this.i.next()};
Of.prototype[Symbol.iterator]=function(){return new Pf(this.i)};
Of.prototype.h=function(){return new Pf(this.i)};
function Pf(a){Nf.call(this,function(){return a});
this.j=a}
v(Pf,Nf);Pf.prototype.next=function(){return this.j.next()};function Qf(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Qf)for(c=Rf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Rf(a){Sf(a);return a.h.concat()}
q=Qf.prototype;q.has=function(a){return Tf(this.i,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Uf;Sf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Uf(a,b){return a===b}
q.Ab=function(){return 0==this.size};
q.clear=function(){this.i={};this.j=this.size=this.h.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Tf(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Sf(this),!0):!1};
function Sf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Tf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Tf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
q.get=function(a,b){return Tf(this.i,a)?this.i[a]:b};
q.set=function(a,b){Tf(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
q.forEach=function(a,b){for(var c=Rf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Qf(this)};
q.keys=function(){return Mf(this.ja(!0)).h()};
q.values=function(){return Mf(this.ja(!1)).h()};
q.entries=function(){var a=this;return Ff(this.keys(),function(b){return[b,a.get(b)]})};
q.ja=function(a){Sf(this);var b=0,c=this.j,d=this,e=new Jf;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Kf;var f=d.h[b++];return Lf(a?f:d.i[f])};
return e};
function Tf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Vf=z.JSON.stringify;function Wf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Xf(a){this.h=0;this.H=void 0;this.m=this.i=this.j=null;this.v=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){Yf(b,2,c)},function(c){Yf(b,3,c)})}catch(c){Yf(this,3,c)}}
function Zf(){this.next=this.context=this.i=this.j=this.h=null;this.m=!1}
Zf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.m=!1};
var $f=new rf(function(){return new Zf},function(a){a.reset()});
function ag(a,b,c){var d=$f.get();d.j=a;d.i=b;d.context=c;return d}
Xf.prototype.then=function(a,b,c){return bg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Xf.prototype.$goog_Thenable=!0;Xf.prototype.cancel=function(a){if(0==this.h){var b=new cg(a);Bf(function(){dg(this,b)},this)}};
function dg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.m||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?dg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):eg(c),fg(c,e,3,b)))}a.j=null}else Yf(a,3,b)}
function gg(a,b){a.i||2!=a.h&&3!=a.h||hg(a);a.m?a.m.next=b:a.i=b;a.m=b}
function bg(a,b,c,d){var e=ag(null,null,null);e.h=new Xf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof cg?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;gg(a,e);return e.h}
Xf.prototype.X=function(a){this.h=0;Yf(this,2,a)};
Xf.prototype.Ga=function(a){this.h=0;Yf(this,3,a)};
function Yf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.X,f=a.Ga;if(d instanceof Xf){gg(d,ag(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){ig(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,hg(a),3!=b||c instanceof cg||jg(a,c))}}
function ig(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function hg(a){a.s||(a.s=!0,Bf(a.N,a))}
function eg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.m=null);return b}
Xf.prototype.N=function(){for(var a;a=eg(this);)fg(this,a,this.h,this.H);this.s=!1};
function fg(a,b,c,d){if(3==c&&b.i&&!b.m)for(;a&&a.v;a=a.j)a.v=!1;if(b.h)b.h.j=null,kg(b,c,d);else try{b.m?b.j.call(b.context):kg(b,c,d)}catch(e){lg.call(null,e)}sf($f,b)}
function kg(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function jg(a,b){a.v=!0;Bf(function(){a.v&&lg.call(null,b)})}
var lg=Zb;function cg(a){ab.call(this,a)}
D(cg,ab);cg.prototype.name="cancel";function L(a){ne.call(this);this.H=1;this.m=[];this.s=0;this.h=[];this.i={};this.N=!!a}
D(L,ne);q=L.prototype;q.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.H;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.H=e+3;d.push(e);return e};
function mg(a,b,c){var d=ng;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.nb(a)}}
q.nb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.s?(this.m.push(a),this.h[a+1]=function(){}):(c&&hb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.ab=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.N)for(e=0;e<c.length;e++){var g=c[e];og(this.h[g+1],this.h[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.s--,0<this.m.length&&0==this.s)for(;c=this.m.pop();)this.nb(c)}}return 0!=e}return!1};
function og(a,b,c){Bf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.nb,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.Sa=function(){L.pa.Sa.call(this);this.clear();this.m.length=0};function pg(a){this.h=a}
pg.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Vf(b))};
pg.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
pg.prototype.remove=function(a){this.h.remove(a)};function qg(a){this.h=a}
D(qg,pg);function rg(a){this.data=a}
function sg(a){return void 0===a||a instanceof rg?a:new rg(a)}
qg.prototype.set=function(a,b){qg.pa.set.call(this,a,sg(b))};
qg.prototype.i=function(a){a=qg.pa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function tg(a){this.h=a}
D(tg,qg);tg.prototype.set=function(a,b,c){if(b=sg(b)){if(c){if(c<Date.now()){tg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}tg.pa.set.call(this,a,b)};
tg.prototype.i=function(a){var b=tg.pa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())tg.prototype.remove.call(this,a);else return b}};function ug(){}
;function vg(){}
D(vg,ug);vg.prototype[Symbol.iterator]=function(){return Mf(this.ja(!0)).h()};
vg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function wg(a){this.h=a}
D(wg,vg);q=wg.prototype;q.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeItem(a)};
q.ja=function(a){var b=0,c=this.h,d=new Jf;d.next=function(){if(b>=c.length)return Kf;var e=c.key(b++);if(a)return Lf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Lf(e)};
return d};
q.clear=function(){this.h.clear()};
q.key=function(a){return this.h.key(a)};function xg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(xg,wg);function yg(a,b){this.i=a;this.h=null;var c;if(c=cc)c=!(9<=Number(sc));if(c){zg||(zg=new Qf);this.h=zg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),zg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(yg,vg);var Ag={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},zg=null;function Bg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ag[b]})}
q=yg.prototype;q.set=function(a,b){this.h.setAttribute(Bg(a),b);Cg(this)};
q.get=function(a){a=this.h.getAttribute(Bg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.h.removeAttribute(Bg(a));Cg(this)};
q.ja=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Jf;d.next=function(){if(b>=c.length)return Kf;var e=c[b++];if(a)return Lf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Lf(e)};
return d};
q.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Cg(this)};
function Cg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Dg(a,b){this.i=a;this.h=b+"::"}
D(Dg,vg);Dg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Dg.prototype.get=function(a){return this.i.get(this.h+a)};
Dg.prototype.remove=function(a){this.i.remove(this.h+a)};
Dg.prototype.ja=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Jf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Lf(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Eg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Vb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Fg={Pa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Gg={Pa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hc:function(a){return[].concat.apply([],a)}};
N.nd=function(){Eg?(N.Ha=Uint8Array,N.qa=Uint16Array,N.Gc=Int32Array,N.assign(N,Fg)):(N.Ha=Array,N.qa=Array,N.Gc=Array,N.assign(N,Gg))};
N.nd();var Hg=!0;try{new Uint8Array(1)}catch(a){Hg=!1}for(var Ig=new N.Ha(256),Jg=0;256>Jg;Jg++)Ig[Jg]=252<=Jg?6:248<=Jg?5:240<=Jg?4:224<=Jg?3:192<=Jg?2:1;Ig[254]=Ig[254]=1;
function Kg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Ha(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var hh={};hh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ih={},jh,kh=[],lh=0;256>lh;lh++){jh=lh;for(var mh=0;8>mh;mh++)jh=jh&1?3988292384^jh>>>1:jh>>>1;kh[lh]=jh}ih=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^kh[(a^b[d])&255];return a^-1};var nh={};nh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function oh(a){for(var b=a.length;0<=--b;)a[b]=0}
var ph=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],qh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],rh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],sh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],th=Array(576);oh(th);var uh=Array(60);oh(uh);var vh=Array(512);oh(vh);var wh=Array(256);oh(wh);var xh=Array(29);oh(xh);var yh=Array(30);oh(yh);function zh(a,b,c,d,e){this.Bc=a;this.Sc=b;this.Rc=c;this.Oc=d;this.hd=e;this.kc=a&&a.length}
var Ah,Bh,Ch;function Dh(a,b){this.ec=a;this.Xa=0;this.Ca=b}
function Eh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function P(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,Eh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Fh(a,b,c){P(a,c[2*b],c[2*b+1])}
function Gh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Hh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Gh(d[e]++,e))}
function Ih(a){var b;for(b=0;286>b;b++)a.Y[2*b]=0;for(b=0;30>b;b++)a.Ja[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.Y[512]=1;a.wa=a.bb=0;a.ea=a.matches=0}
function Jh(a){8<a.P?Eh(a,a.V):0<a.P&&(a.K[a.pending++]=a.V);a.V=0;a.P=0}
function Kh(a,b,c){Jh(a);Eh(a,c);Eh(a,~c);N.Pa(a.K,a.window,b,c,a.pending);a.pending+=c}
function Lh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Mh(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.va;){e<a.va&&Lh(b,a.M[e+1],a.M[e],a.depth)&&e++;if(Lh(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function Nh(a,b,c){var d=0;if(0!==a.ea){do{var e=a.K[a.fb+2*d]<<8|a.K[a.fb+2*d+1];var f=a.K[a.Nb+d];d++;if(0===e)Fh(a,f,b);else{var g=wh[f];Fh(a,g+256+1,b);var h=ph[g];0!==h&&(f-=xh[g],P(a,f,h));e--;g=256>e?vh[e]:vh[256+(e>>>7)];Fh(a,g,c);h=qh[g];0!==h&&(e-=yh[g],P(a,e,h))}}while(d<a.ea)}Fh(a,256,b)}
function Oh(a,b){var c=b.ec,d=b.Ca.Bc,e=b.Ca.kc,f=b.Ca.Oc,g,h=-1;a.va=0;a.Ua=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.va]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.va;){var k=a.M[++a.va]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.wa--;e&&(a.bb-=d[2*k+1])}b.Xa=h;for(g=a.va>>1;1<=g;g--)Mh(a,c,g);k=f;do g=a.M[1],a.M[1]=a.M[a.va--],Mh(a,c,1),d=a.M[1],a.M[--a.Ua]=g,a.M[--a.Ua]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.M[1]=k++,Mh(a,c,1);while(2<=a.va);a.M[--a.Ua]=
a.M[1];g=b.ec;k=b.Xa;d=b.Ca.Bc;e=b.Ca.kc;f=b.Ca.Sc;var l=b.Ca.Rc,m=b.Ca.hd,n,r=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.M[a.Ua]+1]=0;for(b=a.Ua+1;573>b;b++){var p=a.M[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var w=0;p>=l&&(w=f[p-l]);var A=g[2*p];a.wa+=A*(n+w);e&&(a.bb+=A*(d[2*p+1]+w))}}if(0!==r){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.M[--b],d>k||(g[2*d+1]!==n&&(a.wa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Hh(c,h,a.ra)}
function Ph(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.S[2*l]+=g:0!==l?(l!==e&&a.S[2*l]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Qh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Fh(a,l,a.S);while(0!==--g)}else 0!==l?(l!==e&&(Fh(a,l,a.S),g--),Fh(a,16,a.S),P(a,g-3,2)):10>=g?(Fh(a,17,a.S),P(a,g-3,3)):(Fh(a,18,a.S),P(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Rh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.Y[2*c])return 0;if(0!==a.Y[18]||0!==a.Y[20]||0!==a.Y[26])return 1;for(c=32;256>c;c++)if(0!==a.Y[2*c])return 1;return 0}
var Sh=!1;function Th(a,b,c){a.K[a.fb+2*a.ea]=b>>>8&255;a.K[a.fb+2*a.ea+1]=b&255;a.K[a.Nb+a.ea]=c&255;a.ea++;0===b?a.Y[2*c]++:(a.matches++,b--,a.Y[2*(wh[c]+256+1)]++,a.Ja[2*(256>b?vh[b]:vh[256+(b>>>7)])]++);return a.ea===a.ib-1}
;function Uh(a,b){a.msg=nh[b];return b}
function Vh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Wh(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Pa(a.jb,b.K,b.kb,c,a.Ya),a.Ya+=c,b.kb+=c,a.Wb+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.kb=0))}
function Q(a,b){var c=0<=a.aa?a.aa:-1,d=a.l-a.aa,e=0;if(0<a.level){2===a.B.Kb&&(a.B.Kb=Rh(a));Oh(a,a.Bb);Oh(a,a.wb);Ph(a,a.Y,a.Bb.Xa);Ph(a,a.Ja,a.wb.Xa);Oh(a,a.Zb);for(e=18;3<=e&&0===a.S[2*sh[e]+1];e--);a.wa+=3*(e+1)+14;var f=a.wa+3+7>>>3;var g=a.bb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)P(a,b?1:0,3),Kh(a,c,d);else if(4===a.strategy||g===f)P(a,2+(b?1:0),3),Nh(a,th,uh);else{P(a,4+(b?1:0),3);c=a.Bb.Xa+1;d=a.wb.Xa+1;e+=1;P(a,c-257,5);P(a,d-1,5);P(a,e-4,4);for(f=0;f<e;f++)P(a,a.S[2*sh[f]+
1],3);Qh(a,a.Y,c-1);Qh(a,a.Ja,d-1);Nh(a,a.Y,a.Ja)}Ih(a);b&&Jh(a);a.aa=a.l;Wh(a.B)}
function T(a,b){a.K[a.pending++]=b}
function Xh(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function Yh(a,b){var c=a.sc,d=a.l,e=a.ba,f=a.uc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Da,l=a.oa,m=a.l+258,n=h[d+e-1],r=h[d+e];a.ba>=a.jc&&(c>>=2);f>a.o&&(f=a.o);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Wa=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.o?e:a.o}
function Zh(a){var b=a.T,c;do{var d=a.Ec-a.o-a.l;if(a.l>=b+(b-262)){N.Pa(a.window,a.window,b,b,0);a.Wa-=b;a.l-=b;a.aa-=b;var e=c=a.zb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.oa[--e],a.oa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.B.U)break;e=a.B;c=a.window;f=a.l+a.o;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Pa(c,e.input,e.Na,g,f),1===e.state.wrap?e.A=hh(e.A,c,g,f):2===e.state.wrap&&(e.A=ih(e.A,c,g,f)),e.Na+=g,e.Oa+=g,c=g);a.o+=c;if(3<=a.o+a.Z)for(d=a.l-a.Z,a.C=a.window[d],a.C=
(a.C<<a.ta^a.window[d+1])&a.sa;a.Z&&!(a.C=(a.C<<a.ta^a.window[d+3-1])&a.sa,a.oa[d&a.Da]=a.head[a.C],a.head[a.C]=d,d++,a.Z--,3>a.o+a.Z););}while(262>a.o&&0!==a.B.U)}
function $h(a,b){for(var c;;){if(262>a.o){Zh(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,c=a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=Yh(a,c));if(3<=a.G)if(c=Th(a,a.l-a.Wa,a.G-3),a.o-=a.G,a.G<=a.Pb&&3<=a.o){a.G--;do a.l++,a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.C=a.window[a.l],a.C=(a.C<<a.ta^a.window[a.l+1])&a.sa;else c=Th(a,0,a.window[a.l]),
a.o--,a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function ai(a,b){for(var c,d;;){if(262>a.o){Zh(a);if(262>a.o&&0===b)return 1;if(0===a.o)break}c=0;3<=a.o&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,c=a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);a.ba=a.G;a.wc=a.Wa;a.G=2;0!==c&&a.ba<a.Pb&&a.l-c<=a.T-262&&(a.G=Yh(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Wa)&&(a.G=2));if(3<=a.ba&&a.G<=a.ba){d=a.l+a.o-3;c=Th(a,a.l-1-a.wc,a.ba-3);a.o-=a.ba-1;a.ba-=2;do++a.l<=d&&(a.C=(a.C<<a.ta^a.window[a.l+3-1])&a.sa,a.oa[a.l&a.Da]=a.head[a.C],a.head[a.C]=a.l);while(0!==
--a.ba);a.La=0;a.G=2;a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}else if(a.La){if((c=Th(a,0,a.window[a.l-1]))&&Q(a,!1),a.l++,a.o--,0===a.B.F)return 1}else a.La=1,a.l++,a.o--}a.La&&(Th(a,0,a.window[a.l-1]),a.La=0);a.Z=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function bi(a,b){for(var c,d,e,f=a.window;;){if(258>=a.o){Zh(a);if(258>=a.o&&0===b)return 1;if(0===a.o)break}a.G=0;if(3<=a.o&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.o&&(a.G=a.o)}3<=a.G?(c=Th(a,1,a.G-3),a.o-=a.G,a.l+=a.G,a.G=0):(c=Th(a,0,a.window[a.l]),a.o--,a.l++);if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&
(Q(a,!1),0===a.B.F)?1:2}
function ci(a,b){for(var c;;){if(0===a.o&&(Zh(a),0===a.o)){if(0===b)return 1;break}a.G=0;c=Th(a,0,a.window[a.l]);a.o--;a.l++;if(c&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;return 4===b?(Q(a,!0),0===a.B.F?3:4):a.ea&&(Q(a,!1),0===a.B.F)?1:2}
function di(a,b,c,d,e){this.Vc=a;this.gd=b;this.kd=c;this.fd=d;this.Tc=e}
var ei;ei=[new di(0,0,0,0,function(a,b){var c=65535;for(c>a.fa-5&&(c=a.fa-5);;){if(1>=a.o){Zh(a);if(0===a.o&&0===b)return 1;if(0===a.o)break}a.l+=a.o;a.o=0;var d=a.aa+c;if(0===a.l||a.l>=d)if(a.o=a.l-d,a.l=d,Q(a,!1),0===a.B.F)return 1;if(a.l-a.aa>=a.T-262&&(Q(a,!1),0===a.B.F))return 1}a.Z=0;if(4===b)return Q(a,!0),0===a.B.F?3:4;a.l>a.aa&&Q(a,!1);return 1}),
new di(4,4,8,4,$h),new di(4,5,16,8,$h),new di(4,6,32,32,$h),new di(4,4,16,16,ai),new di(8,16,32,32,ai),new di(8,16,128,128,ai),new di(8,32,128,256,ai),new di(32,128,258,1024,ai),new di(32,258,258,4096,ai)];
function fi(){this.B=null;this.status=0;this.K=null;this.wrap=this.pending=this.kb=this.fa=0;this.u=null;this.ga=0;this.method=8;this.Va=-1;this.Da=this.Xb=this.T=0;this.window=null;this.Ec=0;this.head=this.oa=null;this.uc=this.jc=this.strategy=this.level=this.Pb=this.sc=this.ba=this.o=this.Wa=this.l=this.La=this.wc=this.G=this.aa=this.ta=this.sa=this.Lb=this.zb=this.C=0;this.Y=new N.qa(1146);this.Ja=new N.qa(122);this.S=new N.qa(78);Vh(this.Y);Vh(this.Ja);Vh(this.S);this.Zb=this.wb=this.Bb=null;
this.ra=new N.qa(16);this.M=new N.qa(573);Vh(this.M);this.Ua=this.va=0;this.depth=new N.qa(573);Vh(this.depth);this.P=this.V=this.Z=this.matches=this.bb=this.wa=this.fb=this.ea=this.ib=this.Nb=0}
function gi(a,b){if(!a||!a.state||5<b||0>b)return a?Uh(a,-2):-2;var c=a.state;if(!a.jb||!a.input&&0!==a.U||666===c.status&&4!==b)return Uh(a,0===a.F?-5:-2);c.B=a;var d=c.Va;c.Va=b;if(42===c.status)if(2===c.wrap)a.A=0,T(c,31),T(c,139),T(c,8),c.u?(T(c,(c.u.text?1:0)+(c.u.Aa?2:0)+(c.u.za?4:0)+(c.u.name?8:0)+(c.u.comment?16:0)),T(c,c.u.time&255),T(c,c.u.time>>8&255),T(c,c.u.time>>16&255),T(c,c.u.time>>24&255),T(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),T(c,c.u.Sd&255),c.u.za&&c.u.za.length&&(T(c,
c.u.za.length&255),T(c,c.u.za.length>>8&255)),c.u.Aa&&(a.A=ih(a.A,c.K,c.pending,0)),c.ga=0,c.status=69):(T(c,0),T(c,0),T(c,0),T(c,0),T(c,0),T(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),T(c,3),c.status=113);else{var e=8+(c.Xb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;Xh(c,e+(31-e%31));0!==c.l&&(Xh(c,a.A>>>16),Xh(c,a.A&65535));a.A=1}if(69===c.status)if(c.u.za){for(e=c.pending;c.ga<(c.u.za.length&65535)&&(c.pending!==c.fa||(c.u.Aa&&c.pending>
e&&(a.A=ih(a.A,c.K,c.pending-e,e)),Wh(a),e=c.pending,c.pending!==c.fa));)T(c,c.u.za[c.ga]&255),c.ga++;c.u.Aa&&c.pending>e&&(a.A=ih(a.A,c.K,c.pending-e,e));c.ga===c.u.za.length&&(c.ga=0,c.status=73)}else c.status=73;if(73===c.status)if(c.u.name){e=c.pending;do{if(c.pending===c.fa&&(c.u.Aa&&c.pending>e&&(a.A=ih(a.A,c.K,c.pending-e,e)),Wh(a),e=c.pending,c.pending===c.fa)){var f=1;break}f=c.ga<c.u.name.length?c.u.name.charCodeAt(c.ga++)&255:0;T(c,f)}while(0!==f);c.u.Aa&&c.pending>e&&(a.A=ih(a.A,c.K,c.pending-
e,e));0===f&&(c.ga=0,c.status=91)}else c.status=91;if(91===c.status)if(c.u.comment){e=c.pending;do{if(c.pending===c.fa&&(c.u.Aa&&c.pending>e&&(a.A=ih(a.A,c.K,c.pending-e,e)),Wh(a),e=c.pending,c.pending===c.fa)){f=1;break}f=c.ga<c.u.comment.length?c.u.comment.charCodeAt(c.ga++)&255:0;T(c,f)}while(0!==f);c.u.Aa&&c.pending>e&&(a.A=ih(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.u.Aa?(c.pending+2>c.fa&&Wh(a),c.pending+2<=c.fa&&(T(c,a.A&255),T(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Wh(a),0===a.F)return c.Va=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Uh(a,-5);if(666===c.status&&0!==a.U)return Uh(a,-5);if(0!==a.U||0!==c.o||0!==b&&666!==c.status){d=2===c.strategy?ci(c,b):3===c.strategy?bi(c,b):ei[c.level].Tc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Va=-1),0;if(2===d&&(1===b?(P(c,2,3),Fh(c,256,th),16===c.P?(Eh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.K[c.pending++]=c.V&255,c.V>>=8,c.P-=
8)):5!==b&&(P(c,0,3),Kh(c,0,0),3===b&&(Vh(c.head),0===c.o&&(c.l=0,c.aa=0,c.Z=0))),Wh(a),0===a.F))return c.Va=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(T(c,a.A&255),T(c,a.A>>8&255),T(c,a.A>>16&255),T(c,a.A>>24&255),T(c,a.Oa&255),T(c,a.Oa>>8&255),T(c,a.Oa>>16&255),T(c,a.Oa>>24&255)):(Xh(c,a.A>>>16),Xh(c,a.A&65535));Wh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var hi={};hi=function(){this.input=null;this.Oa=this.U=this.Na=0;this.jb=null;this.Wb=this.F=this.Ya=0;this.msg="";this.state=null;this.Kb=2;this.A=0};var ii=Object.prototype.toString;
function ji(a){if(!(this instanceof ji))return new ji(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Ea:15,jd:8,strategy:0,Dc:""},a||{});a.raw&&0<a.Ea?a.Ea=-a.Ea:a.Wc&&0<a.Ea&&16>a.Ea&&(a.Ea+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.B=new hi;this.B.F=0;var b=this.B;var c=a.level,d=a.method,e=a.Ea,f=a.jd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Uh(b,-2);else{8===e&&(e=9);var k=new fi;
b.state=k;k.B=b;k.wrap=h;k.u=null;k.Xb=e;k.T=1<<k.Xb;k.Da=k.T-1;k.Lb=f+7;k.zb=1<<k.Lb;k.sa=k.zb-1;k.ta=~~((k.Lb+3-1)/3);k.window=new N.Ha(2*k.T);k.head=new N.qa(k.zb);k.oa=new N.qa(k.T);k.ib=1<<f+6;k.fa=4*k.ib;k.K=new N.Ha(k.fa);k.fb=1*k.ib;k.Nb=3*k.ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Oa=b.Wb=0;b.Kb=2;c=b.state;c.pending=0;c.kb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Va=0;if(!Sh){d=Array(16);for(f=g=0;28>f;f++)for(xh[f]=g,e=0;e<1<<ph[f];e++)wh[g++]=
f;wh[g-1]=f;for(f=g=0;16>f;f++)for(yh[f]=g,e=0;e<1<<qh[f];e++)vh[g++]=f;for(g>>=7;30>f;f++)for(yh[f]=g<<7,e=0;e<1<<qh[f]-7;e++)vh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)th[2*e+1]=8,e++,d[8]++;for(;255>=e;)th[2*e+1]=9,e++,d[9]++;for(;279>=e;)th[2*e+1]=7,e++,d[7]++;for(;287>=e;)th[2*e+1]=8,e++,d[8]++;Hh(th,287,d);for(e=0;30>e;e++)uh[2*e+1]=5,uh[2*e]=Gh(e,5);Ah=new zh(th,ph,257,286,15);Bh=new zh(uh,qh,0,30,15);Ch=new zh([],rh,0,19,7);Sh=!0}c.Bb=new Dh(c.Y,Ah);c.wb=new Dh(c.Ja,Bh);c.Zb=new Dh(c.S,
Ch);c.V=0;c.P=0;Ih(c);c=0}else c=Uh(b,-2);0===c&&(b=b.state,b.Ec=2*b.T,Vh(b.head),b.Pb=ei[b.level].gd,b.jc=ei[b.level].Vc,b.uc=ei[b.level].kd,b.sc=ei[b.level].fd,b.l=0,b.aa=0,b.o=0,b.Z=0,b.G=b.ba=2,b.La=0,b.C=0);b=c}}else b=-2;if(0!==b)throw Error(nh[b]);a.header&&(b=this.B)&&b.state&&2===b.state.wrap&&(b.state.u=a.header);if(a.gb){var l;"string"===typeof a.gb?l=Kg(a.gb):"[object ArrayBuffer]"===ii.call(a.gb)?l=new Uint8Array(a.gb):l=a.gb;a=this.B;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.o)b=-2;else{1===b&&(a.A=hh(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(Vh(l.head),l.l=0,l.aa=0,l.Z=0),c=new N.Ha(l.T),N.Pa(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Na;e=a.input;a.U=g;a.Na=0;a.input=f;for(Zh(l);3<=l.o;){f=l.l;g=l.o-2;do l.C=(l.C<<l.ta^l.window[f+3-1])&l.sa,l.oa[f&l.Da]=l.head[l.C],l.head[l.C]=f,f++;while(--g);l.l=f;l.o=2;Zh(l)}l.l+=l.o;l.aa=l.l;l.Z=l.o;l.o=0;l.G=l.ba=2;l.La=0;a.Na=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(nh[b]);this.Jd=!0}}
ji.prototype.push=function(a,b){var c=this.B,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Kg(a):"[object ArrayBuffer]"===ii.call(a)?c.input=new Uint8Array(a):c.input=a;c.Na=0;c.U=c.input.length;do{0===c.F&&(c.jb=new N.Ha(d),c.Ya=0,c.F=d);a=gi(c,e);if(1!==a&&0!==a)return ki(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Dc){var f=N.Vb(c.jb,c.Ya);b=f;f=f.length;if(65537>f&&(b.subarray&&Hg||!b.subarray))b=
String.fromCharCode.apply(null,N.Vb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Vb(c.jb,c.Ya),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.B)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Uh(c,-2):(c.state=null,a=113===d?Uh(c,-3):0)):a=-2,ki(this,a),this.ended=!0,0===a;2===e&&(ki(this,0),c.F=0);return!0};
function ki(a,b){0===b&&(a.result="string"===a.options.Dc?a.chunks.join(""):N.hc(a.chunks));a.chunks=[];a.err=b;a.msg=a.B.msg}
;function li(a){this.name=a}
;var mi=new li("rawColdConfigGroup");var ni=new li("rawHotConfigGroup");function oi(a){K.call(this,a)}
v(oi,K);oi.prototype.getKey=function(){return nd(this,1)};
oi.prototype.la=function(){return nd(this,2===ed(this,pi)?2:-1)};
var pi=[2,3,4,5,6];function qi(a){K.call(this,a)}
v(qi,K);function ri(a){K.call(this,a)}
v(ri,K);function si(a){K.call(this,a,-1,ti)}
v(si,K);var ti=[2];function ui(a){K.call(this,a,-1,vi)}
v(ui,K);ui.prototype.getPlayerType=function(){return $c(this,36)};
ui.prototype.setHomeGroupInfo=function(a){return J(this,si,81,a)};
var vi=[9,66,24,32,86,100,101];function wi(a){K.call(this,a,-1,xi)}
v(wi,K);var xi=[15,26,28];function yi(a){K.call(this,a,-1,zi)}
v(yi,K);var zi=[5];function Ai(a){K.call(this,a)}
v(Ai,K);function Bi(a){K.call(this,a,-1,Ci)}
v(Bi,K);Bi.prototype.setSafetyMode=function(a){return H(this,5,a)};
var Ci=[12];function Di(a){K.call(this,a,-1,Ei)}
v(Di,K);var Ei=[12];var Fi={Id:"WEB_DISPLAY_MODE_UNKNOWN",Ed:"WEB_DISPLAY_MODE_BROWSER",Gd:"WEB_DISPLAY_MODE_MINIMAL_UI",Hd:"WEB_DISPLAY_MODE_STANDALONE",Fd:"WEB_DISPLAY_MODE_FULLSCREEN"};function Gi(a){K.call(this,a,-1,Hi)}
v(Gi,K);function Ii(a){K.call(this,a)}
v(Ii,K);Ii.prototype.getKey=function(){return nd(this,1)};
Ii.prototype.la=function(){return nd(this,2)};
var Hi=[4,5];function Ji(a){K.call(this,a)}
v(Ji,K);function Ki(a){K.call(this,a)}
v(Ki,K);var Li=[2,3,4];function Mi(a){K.call(this,a)}
v(Mi,K);function Ni(a){K.call(this,a)}
v(Ni,K);function Oi(a){K.call(this,a)}
v(Oi,K);function Pi(a){K.call(this,a,-1,Qi)}
v(Pi,K);var Qi=[10,17];function Ri(a){K.call(this,a)}
v(Ri,K);function Si(a){K.call(this,a)}
v(Si,K);function Ti(a){K.call(this,a)}
v(Ti,K);function Ui(a){K.call(this,a,459)}
v(Ui,K);
var Vi=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,458,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,
351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];function Wi(a){K.call(this,a)}
v(Wi,K);function Xi(a){K.call(this,a)}
v(Xi,K);Xi.prototype.getPlaylistId=function(){return od(this,2)};
var pd=[1,2];function Yi(a){K.call(this,a,-1,Zi)}
v(Yi,K);var Zi=[3];var $i=z.window,aj,bj,cj=(null==$i?void 0:null==(aj=$i.yt)?void 0:aj.config_)||(null==$i?void 0:null==(bj=$i.ytcfg)?void 0:bj.data_)||{};B("yt.config_",cj);function dj(){var a=arguments;1<a.length?cj[a[0]]=a[1]:1===a.length&&Object.assign(cj,a[0])}
function V(a,b){return a in cj?cj[a]:b}
function ej(){return V("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function fj(){var a=cj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var gj=[];function hj(a){gj.forEach(function(b){return b(a)})}
function ij(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){jj(b)}}:a}
function jj(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=V("ERRORS",[]),e.push([a,"ERROR",b,c,d]),dj("ERRORS",e));hj(a)}
function kj(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=V("ERRORS",[]),e.push([a,"WARNING",b,c,d]),dj("ERRORS",e))}
;function W(a){a=lj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function mj(a,b){a=lj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function lj(a){var b=V("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:V("EXPERIMENT_FLAGS",{})[a]}
function nj(){for(var a=[],b=V("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=V("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var oj=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++oj});var pj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function qj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in pj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function rj(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
qj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
qj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
qj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",ob);var sj=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",sj);
function tj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&pb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function uj(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?vj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
var vj=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function wj(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=tj(a,b,c,d);if(e)return e;e=++sj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new qj(h);if(!Gd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new qj(h);
h.currentTarget=a;return c.call(a,h)};
g=ij(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
;function xj(a,b){"function"===typeof a&&(a=ij(a));return window.setTimeout(a,b)}
function yj(a,b){"function"===typeof a&&(a=ij(a));return window.setInterval(a,b)}
;var zj=/^[\w.]*$/,Aj={q:!0,search_query:!0};function Bj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Cj(f[0]||""),h=Cj(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(Bj);k.args=[{key:l,value:f[1],query:a,method:Dj==m?"unchanged":m}];Aj.hasOwnProperty(l)||kj(k)}}return c}
var Dj=String(Bj);function Ej(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Fj(a){"?"==a.charAt(0)&&(a=a.substr(1));return Bj(a,"&")}
function Gj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Fj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Wb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Hj(a){if(!b)var b=window.location.href;var c=a.match(Rb)[1]||null,d=Tb(a);c&&d?(a=a.match(Rb),b=b.match(Rb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Tb(b)==d&&(Number(b.match(Rb)[4]||null)||null)==(Number(a.match(Rb)[4]||null)||null):!0;return a}
function Cj(a){return a&&a.match(zj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Ij(a){var b=Jj;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(aa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Cd:g;try{var h=g.history.length}catch(aa){h=0}e.u_his=h;var k;e.u_h=null==(k=Cd.screen)?void 0:k.height;var l;e.u_w=null==(l=Cd.screen)?void 0:l.width;var m;e.u_ah=null==(m=Cd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Cd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=Cd.screen)?void 0:r.colorDepth}catch(aa){}h=b.h;try{var p=h.screenX;var w=h.screenY}catch(aa){}try{var A=h.outerWidth;var I=h.outerHeight}catch(aa){}try{var M=h.innerWidth;var S=h.innerHeight}catch(aa){}try{var O=h.screenLeft;var ua=h.screenTop}catch(aa){}try{M=h.innerWidth,S=h.innerHeight}catch(aa){}try{var Qc=h.screen.availWidth;var Ia=h.screen.availTop}catch(aa){}p=[O,ua,p,w,Qc,Ia,A,I,M,S];w=b.h.top;try{var va=(w||window).document,ba=
"CSS1Compat"==va.compatMode?va.documentElement:va.body;var ha=(new Ed(ba.clientWidth,ba.clientHeight)).round()}catch(aa){ha=new Ed(-12245933,-12245933)}va=ha;ha={};var ia=void 0===ia?z:ia;ba=new Xe;ia.SVGElement&&ia.document.createElementNS&&ba.set(0);w=Xd();w["allow-top-navigation-by-user-activation"]&&ba.set(1);w["allow-popups-to-escape-sandbox"]&&ba.set(2);ia.crypto&&ia.crypto.subtle&&ba.set(3);ia.TextDecoder&&ia.TextEncoder&&ba.set(4);ia=Ye(ba);ha.bc=ia;ha.bih=va.height;ha.biw=va.width;ha.brdim=
p.join();b=b.i;b=(ha.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ha.wgl=!!Cd.WebGLRenderingContext,ha);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Jj=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return Ej(Ij(a))});Date.now();var Kj="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Lj(){if(!Kj)return null;var a=Kj();return"open"in a?a:null}
;var Mj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Nj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(ae)),Oj=!1;
function Pj(a,b){b=void 0===b?{}:b;var c=Hj(a),d=W("web_ajax_ignore_global_headers_if_set"),e;for(e in Mj){var f=V(Mj[e]);"X-Goog-Visitor-Id"!==e||f||(f=V("VISITOR_DATA"));!f||!c&&Tb(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Tb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Tb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&Tb(a)||(b["X-YouTube-Ad-Signals"]=Ej(Ij()));return b}
function Qj(a){var b=window.location.search,c=Tb(a);W("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Hj(a)&&(c=document.location.hostname);var d=Sb(a.match(Rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Fj(b),f={};E(Nj,function(g){e[g]&&(f[g]=e[g])});
return Gj(a,f||{},!1)}
function Rj(a,b){var c=b.format||"JSON";a=Sj(a,b);var d=Tj(a,b),e=!1,f=Uj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Vj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=xj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}return f}
function Sj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=V("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Gj(a,b||{},!0);return a}
function Tj(a,b){var c=V("XSRF_FIELD_NAME"),d=V("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=V("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Tb(a)&&!b.withCredentials&&Tb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(W("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Fj(e),sb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Wb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Oj&&a&&"POST"!=b.method&&(Oj=!0,jj(Error("AJAX request with postData should use POST")));return e}
function Vj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,kj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Wj(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Xj(g)})}d&&Yj(e);
return e}
function Yj(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===tb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(g){z.console&&z.console.error(g.message)}tb=e}else tb=e}d=(e=tb)?e.createHTML(d):d;a[c]=new Qb(d)}else Yj(a[b])}}
function Wj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Xj(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Zj(a,b){b.method="POST";b.postParams||(b.postParams={});return Rj(a,b)}
function Uj(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ij(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Lj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;W("debug_forward_web_query_parameters")&&(a=Qj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Pj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ak=tc||uc;var bk=[{Qb:function(a){return"Cannot read property '"+a.key+"'"},
Cb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Qb:function(a){return"Cannot call '"+a.key+"'"},
Cb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Qb:function(a){return a.key+" is not defined"},
Cb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var dk={Ba:[],ya:[{Lc:ck,weight:500}]};function ck(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ek(){this.ya=[];this.Ba=[]}
var fk;function gk(){if(!fk){var a=fk=new ek;a.Ba.length=0;a.ya.length=0;dk.Ba&&a.Ba.push.apply(a.Ba,dk.Ba);dk.ya&&a.ya.push.apply(a.ya,dk.ya)}return fk}
;var hk=new L;function ik(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=jk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=jk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=jk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function jk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function kk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=lk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=ik(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?lk(e+".ve",f,g,h):0;d+=g;d+=lk(e,a[e],b,c);if(500<d)break}}else c[b]=mk(a),d+=c[b].length;else c[b]=mk(a),d+=c[b].length;return d}
function lk(a,b,c,d){c+="."+a;a=mk(b);d[c]=a;return c.length+a.length}
function mk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function nk(){}
;function ok(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var pk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},qk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},rk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},sk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function tk(){var a=z.navigator;return a?a.connection:void 0}
;function uk(){}
function vk(a,b){return wk(a,0,b)}
uk.prototype.ka=function(a,b){return wk(a,1,b)};function xk(){uk.apply(this,arguments)}
v(xk,uk);function yk(){xk.h||(xk.h=new xk);return xk.h}
function wk(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):xj(a,c||0)}
xk.prototype.Qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
xk.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var We=yk();function zk(a){var b=La.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
v(zk,Error);function Ak(){try{return Bk(),!0}catch(a){return!1}}
function Bk(){if(void 0!==V("DATASYNC_ID"))return V("DATASYNC_ID");throw new zk("Datasync ID not set","unknown");}
;function Ck(a){var b=new xg;if(b.h)try{b.h.setItem("__sak","1");b.h.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Dg(b,a):b:null)||(a=new yg(a||"UserDataSharedStore"),b=a.h?a:null);this.h=(a=b)?new tg(a):null;this.i=document.domain||window.location.hostname}
Ck.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Vf(b))}catch(f){return}else e=escape(b);b=this.i;he.set(""+a,e,{Ob:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Ck.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=he.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ck.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;he.remove(""+a,"/",void 0===b?"youtube.com":b)};var Dk=function(){var a;return function(){a||(a=new Ck("ytidb"));return a}}();
function Ek(){var a;return null==(a=Dk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Fk=[],Gk=!1;function Hk(a){Gk||(Fk.push({type:"ERROR",payload:a}),10<Fk.length&&Fk.shift())}
function Ik(a,b){Gk||(Fk.push({type:"EVENT",eventType:a,payload:b}),10<Fk.length&&Fk.shift())}
;function Jk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Kk(a){return a.substr(0,a.indexOf(":"))||a}
;var Lk={},Mk=(Lk.AUTH_INVALID="No user identifier specified.",Lk.EXPLICIT_ABORT="Transaction was explicitly aborted.",Lk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Lk.MISSING_INDEX="Index not created.",Lk.MISSING_OBJECT_STORES="Object stores not created.",Lk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Lk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Lk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Lk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Lk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Lk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Lk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Lk),Nk={},Ok=(Nk.AUTH_INVALID="ERROR",Nk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Nk.EXPLICIT_ABORT="IGNORED",Nk.IDB_NOT_SUPPORTED="ERROR",Nk.MISSING_INDEX=
"WARNING",Nk.MISSING_OBJECT_STORES="ERROR",Nk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Nk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Nk.QUOTA_EXCEEDED="WARNING",Nk.QUOTA_MAYBE_EXCEEDED="WARNING",Nk.UNKNOWN_ABORT="WARNING",Nk.INCOMPATIBLE_DB_VERSION="WARNING",Nk),Pk={},Qk=(Pk.AUTH_INVALID=!1,Pk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Pk.EXPLICIT_ABORT=!1,Pk.IDB_NOT_SUPPORTED=!1,Pk.MISSING_INDEX=!1,Pk.MISSING_OBJECT_STORES=!1,Pk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Pk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Pk.QUOTA_EXCEEDED=!1,Pk.QUOTA_MAYBE_EXCEEDED=!0,Pk.UNKNOWN_ABORT=!0,Pk.INCOMPATIBLE_DB_VERSION=!1,Pk);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Mk[a]:c;d=void 0===d?Ok[a]:d;e=void 0===e?Qk[a]:e;zk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,X.prototype)}
v(X,zk);function Rk(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Mk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Rk.prototype)}
v(Rk,X);function Sk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Sk.prototype)}
v(Sk,Error);var Tk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Uk(a,b,c,d){b=Kk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(vc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Sk)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Tk.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Rd:e.name})];e.level="WARNING";return e}
function Vk(a,b,c){var d=Ek();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Wk(a){if(!a)throw Error();throw a;}
function Xk(a){return a}
function Yk(a){this.h=a}
function Zk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Zk.resolve=function(a){return new Zk(new Yk(function(b,c){a instanceof Zk?a.then(b,c):b(a)}))};
Zk.reject=function(a){return new Zk(new Yk(function(b,c){c(a)}))};
Zk.prototype.then=function(a,b){var c=this,d=null!=a?a:Xk,e=null!=b?b:Wk;return new Zk(new Yk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){$k(c,c,d,f,g)}),c.i.push(function(){al(c,c,e,f,g)})):"FULFILLED"===c.state.status?$k(c,c,d,f,g):"REJECTED"===c.state.status&&al(c,c,e,f,g)}))};
function bl(a,b){a.then(void 0,b)}
function $k(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Zk?cl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function al(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Zk?cl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function cl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Zk?cl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function dl(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function el(a){return new Promise(function(b,c){dl(a,b,c)})}
function Tl(a){return new Zk(new Yk(function(b,c){dl(a,b,c)}))}
;function Ul(a,b){return new Zk(new Yk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Vl=window,Y=Vl.ytcsi&&Vl.ytcsi.now?Vl.ytcsi.now:Vl.performance&&Vl.performance.timing&&Vl.performance.now&&Vl.performance.timing.navigationStart?function(){return Vl.performance.timing.navigationStart+Vl.performance.now()}:function(){return(new Date).getTime()};function Wl(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Y());this.i=!1}
q=Wl.prototype;q.add=function(a,b,c){return Xl(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return Xl(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Yl(a,b,c){a=a.h.createObjectStore(b,c);return new Zl(a)}
q.delete=function(a,b){return Xl(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return Xl(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function $l(a,b,c){return Xl(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Tl(d.h.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Xl(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,w,A;return y(function(I){switch(I.h){case 1:var M={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){I.D(3);break}g++;k=Math.round(Y());za(I,4);l=a.h.transaction(b,e.mode);M=new am(l);M=bm(M,d);return x(I,M,6);case 6:return m=I.i,n=Math.round(Y()),cm(a,k,n,g,void 0,b.join(),e),I.return(m);case 4:r=Ba(I);p=Math.round(Y());w=Uk(r,a.h.name,b.join(),a.h.version);
if((A=w instanceof X&&!w.h)||g>=f)cm(a,k,p,g,w,b.join(),e),h=w;I.D(2);break;case 3:return I.return(Promise.reject(h))}})}
function cm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Ik("QUOTA_EXCEEDED",{dbName:Kk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Ik("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),dm(a,!1,d,f,b,g.tag),Hk(e)):dm(a,!0,d,f,b,g.tag)}
function dm(a,b,c,d,e,f){Ik("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.h.name};
function Zl(a){this.h=a}
q=Zl.prototype;q.add=function(a,b){return Tl(this.h.add(a,b))};
q.autoIncrement=function(){return this.h.autoIncrement};
q.clear=function(){return Tl(this.h.clear()).then(function(){})};
function em(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function fm(a,b){return gm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?fm(this,a):Tl(this.h.delete(a))};
q.get=function(a){return Tl(this.h.get(a))};
q.index=function(a){try{return new hm(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Sk(a,this.h.name);throw b;}};
q.getName=function(){return this.h.name};
q.keyPath=function(){return this.h.keyPath};
function gm(a,b,c){a=a.h.openCursor(b.query,b.direction);return im(a).then(function(d){return Ul(d,c)})}
function am(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=X;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function bm(a,b){var c=new Promise(function(d,e){try{bl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
am.prototype.abort=function(){this.h.abort();this.i=!0;throw new X("EXPLICIT_ABORT");};
am.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Zl(a),this.j.set(a,b));return b};
function hm(a){this.h=a}
q=hm.prototype;q.delete=function(a){return jm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Tl(this.h.get(a))};
q.getKey=function(a){return Tl(this.h.getKey(a))};
q.keyPath=function(){return this.h.keyPath};
q.unique=function(){return this.h.unique};
function jm(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return im(a).then(function(d){return Ul(d,c)})}
function km(a,b){this.request=a;this.cursor=b}
function im(a){return Tl(a).then(function(b){return b?new km(a,b):null})}
q=km.prototype;q.advance=function(a){this.cursor.advance(a);return im(this.request)};
q.continue=function(a){this.cursor.continue(a);return im(this.request)};
q.delete=function(){return Tl(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.la=function(){return this.cursor.value};
q.update=function(a){return Tl(this.cursor.update(a))};function lm(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Wl(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Jc,k=c.Kc,l=c.od,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Ik("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Kk(a)});var w=f(),A=new am(g.transaction);m&&
m(w,function(I){return p.oldVersion<I&&p.newVersion>=I},A);
A.done.catch(function(I){e(I)})}catch(I){e(I)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Ik("IDB_UNEXPECTEDLY_CLOSED",{dbName:Kk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function mm(a,b,c){c=void 0===c?{}:c;return lm(a,b,c)}
function nm(a,b){b=void 0===b?{}:b;var c,d,e,f;return y(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Jc)&&c.addEventListener("blocked",function(){e()}),x(g,el(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Uk(f,a,"",-1);})}
;function om(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.m=0}
om.prototype.i=function(a,b,c){c=void 0===c?{}:c;return mm(a,b,c)};
om.prototype.delete=function(a){a=void 0===a?{}:a;return nm(this.name,a)};
function pm(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function qm(a,b){if(!b)throw Vk("openWithToken",Kk(a.name));return rm(a)}
function rm(a){function b(){var f,g,h,k,l,m,n,r,p,w;return y(function(A){switch(A.h){case 1:return g=null!=(f=Error().stack)?f:"",za(A,2),x(A,a.i(a.name,a.options.version,d),4);case 4:h=A.i;for(var I=a.options,M=[],S=u(Object.keys(I.Za)),O=S.next();!O.done;O=S.next()){O=O.value;var ua=I.Za[O],Qc=void 0===ua.md?Number.MAX_VALUE:ua.md;!(h.h.version>=ua.eb)||h.h.version>=Qc||h.h.objectStoreNames.contains(O)||M.push(O)}k=M;if(0===k.length){A.D(5);break}l=Object.keys(a.options.Za);m=h.objectStoreNames();
if(a.v<mj("ytidb_reopen_db_retries",0))return a.v++,h.close(),Hk(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.m<mj("ytidb_remake_db_retries",1))){A.D(6);break}a.m++;return x(A,a.delete(),7);case 7:return Hk(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());case 6:throw new Rk(m,l);case 5:return A.return(h);case 2:n=Ba(A);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){A.D(8);break}return x(A,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=A.i;p=r.h.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.j=!1,pm(a,p);return A.return(r);case 8:throw c(),n instanceof Error&&!W("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Uk(n,a.name,"",null!=(w=a.options.version)?w:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw pm(a);if(a.h)return a.h;var d={Kc:function(f){f.close()},
closed:c,od:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var sm=new om("YtIdbMeta",{Za:{databases:{eb:1}},upgrade:function(a,b){b(1)&&Yl(a,"databases",{keyPath:"actualName"})}});
function tm(a,b){var c;return y(function(d){if(1==d.h)return x(d,qm(sm,b),2);c=d.i;return d.return(Xl(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Tl(f.h.put(a,void 0)).then(function(){})})}))})}
function um(a,b){var c;return y(function(d){if(1==d.h)return a?x(d,qm(sm,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function vm(a,b){var c,d;return y(function(e){return 1==e.h?(c=[],x(e,qm(sm,b),2)):3!=e.h?(d=e.i,x(e,Xl(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return gm(f.objectStore("databases"),{},function(g){a(g.la())&&c.push(g.la());return g.continue()})}),3)):e.return(c)})}
function wm(a){return vm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var xm,ym=new function(){}(new function(){});
function zm(){var a,b,c,d;return y(function(e){switch(e.h){case 1:a=Ek();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ak)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||dc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(e,tm(d,ym),4);case 4:return x(e,um("yt-idb-test-do-not-use",ym),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Am(){if(void 0!==xm)return xm;Gk=!0;return xm=zm().then(function(a){Gk=!1;var b;if(null!=(b=Dk())&&b.h){var c;b={hasSucceededOnce:(null==(c=Ek())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Dk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Bm(){return C("ytglobal.idbToken_")||void 0}
function Cm(){var a=Bm();return a?Promise.resolve(a):Am().then(function(b){(b=b?ym:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Wf;function Dm(a){if(!Ak())throw a=new X("AUTH_INVALID",{dbName:a}),Hk(a),a;var b=Bk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Em(a,b,c,d){var e,f,g,h,k,l;return y(function(m){switch(m.h){case 1:return f=null!=(e=Error().stack)?e:"",x(m,Cm(),2);case 2:g=m.i;if(!g)throw h=Vk("openDbImpl",a,b),W("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Hk(h),h;Jk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Dm(a);za(m,3);return x(m,tm(k,g),5);case 5:return x(m,mm(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),za(m,7),x(m,um(k.actualName,g),9);case 9:Aa(m,
8);break;case 7:Ba(m);case 8:throw l;}})}
function Fm(a,b,c){c=void 0===c?{}:c;return Em(a,b,!1,c)}
function Gm(a,b,c){c=void 0===c?{}:c;return Em(a,b,!0,c)}
function Hm(a,b){b=void 0===b?{}:b;var c,d;return y(function(e){if(1==e.h)return x(e,Cm(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Jk(a);d=Dm(a);return x(e,nm(d.actualName,b),3)}return x(e,um(d.actualName,c),0)})}
function Im(a,b,c){a=a.map(function(d){return y(function(e){return 1==e.h?x(e,nm(d.actualName,b),2):x(e,um(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Jm(){var a=void 0===a?{}:a;var b,c;return y(function(d){if(1==d.h)return x(d,Cm(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Jk("LogsDatabaseV2");return x(d,wm(b),3)}c=d.i;return x(d,Im(c,a,b),0)})}
function Km(a,b){b=void 0===b?{}:b;var c;return y(function(d){if(1==d.h)return x(d,Cm(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Jk(a);return x(d,nm(a,b),3)}return x(d,um(a,c),0)})}
;function Lm(a,b){om.call(this,a,b);this.options=b;Jk(a)}
v(Lm,om);function Mm(a,b){var c;return function(){c||(c=new Lm(a,b));return c}}
Lm.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Gb?Gm:Fm)(a,b,Object.assign({},c))};
Lm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Gb?Km:Hm)(this.name,a)};
function Nm(a,b){return Mm(a,b)}
;var Om={},Pm=Nm("ytGcfConfig",{Za:(Om.coldConfigStore={eb:1},Om.hotConfigStore={eb:1},Om),Gb:!1,upgrade:function(a,b){b(1)&&(em(Yl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),em(Yl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Qm(a){return qm(Pm(),a)}
function Rm(a,b,c){var d,e,f;return y(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:Y()},x(g,Qm(c),2);case 2:return e=g.i,x(g,e.clear("hotConfigStore"),3);case 3:return x(g,$l(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Sm(a,b,c,d){var e,f,g;return y(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},x(h,Qm(d),2);case 2:return f=h.i,x(h,f.clear("coldConfigStore"),3);case 3:return x(h,$l(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Tm(a){var b,c;return y(function(d){return 1==d.h?x(d,Qm(a),2):3!=d.h?(b=d.i,c=void 0,x(d,Xl(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return jm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.la()})}),3)):d.return(c)})}
function Um(a){var b,c;return y(function(d){return 1==d.h?x(d,Qm(a),2):3!=d.h?(b=d.i,c=void 0,x(d,Xl(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return jm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.la()})}),3)):d.return(c)})}
;function Vm(){this.h=0}
function Wm(a,b,c){var d,e,f;return y(function(g){if(1==g.h){if(!W("update_log_event_config"))return g.D(0);c&&(a.i=c,B("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;B("yt.gcf.config.hotHashData",a.hotHashData);return(d=Bm())?c?g.D(4):x(g,Um(d),5):g.D(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return x(g,Rm(c,b,d),0)})}
function Xm(a,b,c){var d,e,f,g;return y(function(h){if(1==h.h){if(!W("update_log_event_config"))return h.D(0);a.coldHashData=b;B("yt.gcf.config.coldHashData",a.coldHashData);return(d=Bm())?c?h.D(4):x(h,Tm(d),5):h.D(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.D(0);g=c.configData;return x(h,Sm(c,b,g,d),0)})}
;function Ym(){return"INNERTUBE_API_KEY"in cj&&"INNERTUBE_API_VERSION"in cj}
function Zm(){return{Xc:V("INNERTUBE_API_KEY"),Yc:V("INNERTUBE_API_VERSION"),Mb:V("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),lc:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Zc:V("INNERTUBE_CONTEXT_CLIENT_NAME",1),mc:V("INNERTUBE_CONTEXT_CLIENT_VERSION"),oc:V("INNERTUBE_CONTEXT_HL"),nc:V("INNERTUBE_CONTEXT_GL"),ad:V("INNERTUBE_HOST_OVERRIDE")||"",cd:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),bd:!!V("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:V("SERIALIZED_CLIENT_CONFIG_DATA")}}
function $m(a){var b={client:{hl:a.oc,gl:a.nc,clientName:a.lc,clientVersion:a.mc,configInfo:a.Mb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=V("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=nj();0<c.length&&(b.request={internalExperimentFlags:c});an(a,void 0,b);W("enable_third_party_info")&&bn(void 0,b);cn(void 0,b);dn(a,void 0,b);en(void 0,b);W("start_sending_config_hash")&&fn(void 0,
b);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(b.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(Fj(V("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function gn(a){var b=new Di,c=new ui;H(c,1,a.oc);H(c,2,a.nc);H(c,16,a.Zc);H(c,17,a.mc);if(a.Mb){var d=a.Mb,e=new qi;d.coldConfigData&&H(e,1,d.coldConfigData);d.appInstallData&&H(e,6,d.appInstallData);d.coldHashData&&H(e,3,d.coldHashData);d.hotHashData&&H(e,5,d.hotHashData);J(c,qi,62,e)}if((d=z.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);H(c,65,d)}d=V("EXPERIMENTS_TOKEN","");""!==d&&H(c,
54,d);d=nj();if(0<d.length){e=new wi;for(var f=0;f<d.length;f++){var g=new oi;H(g,1,d[f].key);dd(g,2,pi,d[f].value);md(e,15,oi,g)}J(b,wi,5,e)}an(a,c);W("enable_third_party_info")&&bn(b);cn(c);dn(a,c);en(c);W("start_sending_config_hash")&&fn(c);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(a=new Bi,H(a,3,V("DELEGATED_SESSION_ID")));a=u(Object.entries(Fj(V("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?H(c,12,e):"cmodel"===d?H(c,
13,e):"cbr"===d?H(c,87,e):"cbrver"===d?H(c,88,e):"cos"===d?H(c,18,e):"cosver"===d?H(c,19,e):"cplatform"===d&&H(c,42,e);J(b,ui,1,c);return b}
function an(a,b,c){a=a.lc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=fd(b,ri,96)||new ri;var d=ok();d=Object.keys(Fi).indexOf(d);d=-1===d?null:d;null!==d&&H(c,3,d);J(b,ri,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=ok())}
function bn(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=fd(a,yi,7)||new yi,H(b,4,c),J(a,yi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function cn(a,b){var c;if(W("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?H(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function dn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=fd(b,qi,62))?d:new qi;H(c,6,a.appInstallData);J(b,qi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function en(a,b){a:{var c=tk();if(c){var d=pk[c.type||"unknown"]||"CONN_UNKNOWN";c=pk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?H(a,61,qk[d]):b&&(b.client.connectionType=d));W("web_log_effective_connection_type")&&(d=tk(),d=null!=d&&d.effectiveType?sk.hasOwnProperty(d.effectiveType)?sk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?H(a,94,rk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function hn(a,b,c){c=void 0===c?{}:c;var d={};V("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":V("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Ld||V("AUTHORIZATION");if(!b)if(a)b="Bearer "+C("gapi.auth.getToken")().Kd;else{nk.h||(nk.h=new nk);a={};if(c=ke([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(V("SESSION_INDEX",0)),c=isNaN(c)?0:c),W("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in cj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in cj&&(a["X-Goog-PageId"]=V("DELEGATED_SESSION_ID"));W("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function fn(a,b){Vm.h||(Vm.h=new Vm);var c=Vm.h;var d=Y()-c.h;0!==c.h&&d<mj("send_config_hash_timer")?c=void 0:(c.h=Y(),c={coldConfigData:C("yt.gcf.config.coldConfigData"),hotHashData:C("yt.gcf.config.hotHashData"),coldHashData:C("yt.gcf.config.coldHashData")});var e=c;if(e&&(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e))if(a){var f;b=null!=(f=fd(a,qi,62))?f:new qi;H(b,1,c);H(b,3,d);H(b,5,e);J(a,qi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=
c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function jn(a,b,c,d){try{var e=me(b);var f=f||{};f.Wc=!0;var g=new ji(f);g.push(e,!0);if(g.err)throw g.msg||nh[g.err];var h=g.result;c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0;d(a,c)}catch(k){kj(k),d(a,c)}}
;function kn(a){a=Object.assign({},a);delete a.Authorization;var b=ke();if(b){var c=new Hf;c.update(V("INNERTUBE_API_KEY"));c.update(b);a.hash=yc(c.digest(),3)}return a}
;var ln;function mn(){ln||(ln=new Ck("yt.innertube"));return ln}
function nn(a,b,c,d){if(d)return null;d=mn().get("nextId",!0)||1;var e=mn().get("requests",!0)||{};e[d]={method:a,request:b,authState:kn(c),requestTime:Math.round(Y())};mn().set("nextId",d+1,86400,!0);mn().set("requests",e,86400,!0);return d}
function on(a){var b=mn().get("requests",!0)||{};delete b[a];mn().set("requests",b,86400,!0)}
function pn(a){var b=mn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=kn(hn(!1));pb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),qn(a,d.method,e,{}));delete b[c]}}mn().set("requests",b,86400,!0)}}
;function rn(a){this.sb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Ta=function(){};
this.now=Date.now;this.hb=!1;var b;this.Cc=null!=(b=a.Cc)?b:100;var c;this.Ac=null!=(c=a.Ac)?c:1;var d;this.yc=null!=(d=a.yc)?d:2592E6;var e;this.xc=null!=(e=a.xc)?e:12E4;var f;this.zc=null!=(f=a.zc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.xb=!!a.xb;var h;this.vb=null!=(h=a.vb)?h:.1;var k;this.Db=null!=(k=a.Db)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ta&&(this.Ta=a.Ta);a.hb&&(this.hb=a.hb);a.sb&&(this.sb=a.sb);this.L=a.L;this.ia=a.ia;this.O=a.O;this.R=a.R;this.xa=a.xa;this.Tb=
a.Tb;this.Sb=a.Sb;sn(this)&&(!this.L||this.L("networkless_logging"))&&tn(this)}
function tn(a){sn(a)&&!a.hb&&(a.h=!0,a.xb&&Math.random()<=a.vb&&a.O.Mc(a.I),un(a),a.R.da()&&a.mb(),a.R.Ka(a.Tb,a.mb.bind(a)),a.R.Ka(a.Sb,a.ac.bind(a)))}
q=rn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(sn(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.I).then(function(e){d.id=e;c.R.da()&&vn(c,d)}).catch(function(e){vn(c,d);
wn(c,e)})}else this.xa(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(sn(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.L&&this.L("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.da()||this.L&&this.L("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return y(function(k){if(1==k.h)return x(k,d.O.set(e,d.I).catch(function(l){wn(d,l)}),2);
f(g,h);k.h=0})}}this.xa(a,b,e.skipRetry)}else this.O.set(e,this.I).catch(function(g){d.xa(a,b,e.skipRetry);
wn(d,g)})}else this.xa(a,b,this.L&&this.L("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(sn(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.Ra(d.id,c.I):e=!0;c.R.Ma&&c.L&&c.L("vss_network_hint")&&c.R.Ma(!0);f(g,h)};
this.xa(d.url,d.options);this.O.set(d,this.I).then(function(g){d.id=g;e&&c.O.Ra(d.id,c.I)}).catch(function(g){wn(c,g)})}else this.xa(a,b)};
q.mb=function(){var a=this;if(!sn(this))throw Vk("throttleSend");this.i||(this.i=this.ia.ka(function(){var b;return y(function(c){if(1==c.h)return x(c,a.O.ic("NEW",a.I),2);if(3!=c.h)return b=c.i,b?x(c,vn(a,b),3):(a.ac(),c.return());a.i&&(a.i=0,a.mb());c.h=0})},this.Cc))};
q.ac=function(){this.ia.Qa(this.i);this.i=0};
function vn(a,b){var c,d;return y(function(e){switch(e.h){case 1:if(!sn(a))throw c=Vk("immediateSend"),c;if(void 0===b.id){e.D(2);break}return x(e,a.O.ed(b.id,a.I),3);case 3:(d=e.i)||a.Ta(Error("The request cannot be found in the database."));case 2:if(xn(a,b,a.yc)){e.D(4);break}a.Ta(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.D(5);break}return x(e,a.O.Ra(b.id,a.I),5);case 5:return e.return();case 4:b.skipRetry||(b=yn(a,b));if(!b){e.D(0);break}if(!b.skipRetry||
void 0===b.id){e.D(8);break}return x(e,a.O.Ra(b.id,a.I),8);case 8:a.xa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function yn(a,b){if(!sn(a))throw Vk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return y(function(m){switch(m.h){case 1:g=zn(f);h=An(f);if(!(a.L&&a.L("nwl_consider_error_code")&&g||a.L&&!a.L("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Db)){m.D(2);break}if(!a.R.Fb){m.D(3);break}return x(m,a.R.Fb(),3);case 3:if(a.R.da()){m.D(2);break}c(e,f);if(!a.L||!a.L("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.D(6);break}return x(m,a.O.Ub(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.L&&a.L("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Db)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.D(8);break}return b.sendCount<a.Ac?x(m,a.O.Ub(b.id,a.I,!0,h?!1:void 0),12):x(m,a.O.Ra(b.id,a.I),8);case 12:a.ia.ka(function(){a.R.da()&&a.mb()},a.zc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.D(2):x(h,a.O.Ra(b.id,a.I),2);a.R.Ma&&a.L&&a.L("vss_network_hint")&&a.R.Ma(!0);d(e,f);h.h=0})};
return b}
function xn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function un(a){if(!sn(a))throw Vk("retryQueuedRequests");a.O.ic("QUEUED",a.I).then(function(b){b&&!xn(a,b,a.xc)?a.ia.ka(function(){return y(function(c){if(1==c.h)return void 0===b.id?c.D(2):x(c,a.O.Ub(b.id,a.I),2);un(a);c.h=0})}):a.R.da()&&a.mb()})}
function wn(a,b){a.Fc&&!a.R.da()?a.Fc(b):a.handleError(b)}
function sn(a){return!!a.I||a.sb}
function zn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function An(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Bn=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.nb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;B("ytPubsub2Pubsub2Instance",Bn);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);var Cn;
function Dn(){if(Cn)return Cn();var a={};Cn=Nm("LogsDatabaseV2",{Za:(a.LogsRequestsStore={eb:2},a),Gb:!1,upgrade:function(b,c,d){c(2)&&Yl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),em(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Cn()}
;function En(a){return qm(Dn(),a)}
function Fn(a,b){var c,d,e,f;return y(function(g){if(1==g.h)return c={startTime:Y(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},x(g,En(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:V("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),x(g,$l(d,"LogsRequestsStore",e),3);f=g.i;c.pd=Y();Gn(c);return g.return(f)})}
function Hn(a,b){var c,d,e,f,g,h,k;return y(function(l){if(1==l.h)return c={startTime:Y(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},x(l,En(b),2);if(3!=l.h)return d=l.i,e=V("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,x(l,Xl(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return jm(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.la()&&(k=n.la(),"NEW"===a&&(k.status="QUEUED",n.update(k)))})}),
3);
c.pd=Y();Gn(c);return l.return(k)})}
function In(a,b){var c;return y(function(d){if(1==d.h)return x(d,En(b),2);c=d.i;return d.return(Xl(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Tl(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Jn(a,b,c,d){c=void 0===c?!0:c;var e;return y(function(f){if(1==f.h)return x(f,En(b),2);e=f.i;return f.return(Xl(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Tl(h.h.put(k,void 0)).then(function(){return k})):Zk.resolve(void 0)})}))})}
function Kn(a,b){var c;return y(function(d){if(1==d.h)return x(d,En(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Ln(a){var b,c;return y(function(d){if(1==d.h)return x(d,En(a),2);b=d.i;c=Y()-2592E6;return x(d,Xl(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return gm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.la().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Mn(){y(function(a){return x(a,Jm(),0)})}
function Gn(a){if(!W("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Nn={},On=Nm("ServiceWorkerLogsDatabase",{Za:(Nn.SWHealthLog={eb:1},Nn),Gb:!0,upgrade:function(a,b){b(1)&&em(Yl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Pn(a){return qm(On(),a)}
function Qn(a){var b,c;y(function(d){if(1==d.h)return x(d,Pn(a),2);b=d.i;c=Y()-2592E6;return x(d,Xl(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return gm(e.objectStore("SWHealthLog"),{},function(f){if(f.la().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Rn(a){var b;return y(function(c){if(1==c.h)return x(c,Pn(a),2);b=c.i;return x(c,b.clear("SWHealthLog"),0)})}
;var Sn={},Tn=0;function Un(a){var b=new Image,c=""+Tn++;Sn[c]=b;b.onload=b.onerror=function(){delete Sn[c]};
b.src=a}
;function Vn(){this.h=new Map;this.i=!1}
function Wn(){if(!Vn.h){var a=C("yt.networkRequestMonitor.instance")||new Vn;B("yt.networkRequestMonitor.instance",a);Vn.h=a}return Vn.h}
Vn.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Vn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Vn.prototype.removeParams=function(a){return a.split("?")[0]};
Vn.prototype.removeParams=Vn.prototype.removeParams;Vn.prototype.isEndpointCFR=Vn.prototype.isEndpointCFR;Vn.prototype.requestComplete=Vn.prototype.requestComplete;Vn.getInstance=Wn;var Xn;function Yn(){Xn||(Xn=new Ck("yt.offline"));return Xn}
function Zn(a){if(W("offline_error_handling")){var b=Yn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Yn().set("errors",b,2592E3,!0)}}
;function Z(){Pe.call(this);var a=this;this.m=!1;this.i=Ve();this.i.Ka("networkstatus-online",function(){if(a.m&&W("offline_error_handling")){var b=Yn().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new zk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;jj(d)}Yn().set("errors",{},2592E3,!0)}}})}
v(Z,Pe);function $n(){if(!Z.h){var a=C("yt.networkStatusManager.instance")||new Z;B("yt.networkStatusManager.instance",a);Z.h=a}return Z.h}
q=Z.prototype;q.da=function(){return this.i.da()};
q.Ma=function(a){this.i.i=a};
q.Uc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Pc=function(){this.m=!0};
q.Ka=function(a,b){return this.i.Ka(a,b)};
q.Fb=function(a){a=Te(this.i,a);a.then(function(b){W("use_cfr_monitor")&&Wn().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Fb;Z.prototype.listen=Z.prototype.Ka;Z.prototype.enableErrorFlushing=Z.prototype.Pc;Z.prototype.getWindowStatus=Z.prototype.Uc;Z.prototype.networkStatusHint=Z.prototype.Ma;Z.prototype.isNetworkAvailable=Z.prototype.da;Z.getInstance=$n;function ao(a){a=void 0===a?{}:a;Pe.call(this);var b=this;this.i=this.H=0;this.m=$n();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.Eb?(this.Eb=a.Eb,c("networkstatus-online",function(){bo(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bo(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Qe(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Qe(b,"publicytnetworkstatus-offline")})))}
v(ao,Pe);ao.prototype.da=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
ao.prototype.Ma=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
ao.prototype.Fb=function(a){var b=this,c;return y(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return W("skip_network_check_if_cfr")&&Wn().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ma((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.da())})):c?d.return(c(a)):d.return(!0)})};
function bo(a,b){a.Eb?a.i?(We.Qa(a.H),a.H=We.ka(function(){a.s!==b&&(Qe(a,b),a.s=b,a.i=Y())},a.Eb-(Y()-a.i))):(Qe(a,b),a.s=b,a.i=Y()):Qe(a,b)}
;var co;function eo(){var a=rn.call;co||(co=new ao({Pd:!0,Od:!0}));a.call(rn,this,{O:{Mc:Ln,Ra:Kn,ic:Hn,ed:In,Ub:Jn,set:Fn},R:co,handleError:jj,Ta:kj,xa:fo,now:Y,Fc:Zn,ia:yk(),Tb:"publicytnetworkstatus-online",Sb:"publicytnetworkstatus-offline",xb:!0,vb:.1,Db:mj("potential_esf_error_limit",10),L:W,hb:!(Ak()&&"www.youtube-nocookie.com"!==Tb(document.location.toString()))});this.j=new Wf;W("networkless_immediately_drop_all_requests")&&Mn();Km("LogsDatabaseV2")}
v(eo,rn);function go(){var a=C("yt.networklessRequestController.instance");a||(a=new eo,B("yt.networklessRequestController.instance",a),W("networkless_logging")&&Cm().then(function(b){a.I=b;tn(a);a.j.resolve();a.xb&&Math.random()<=a.vb&&a.I&&Qn(a.I);W("networkless_immediately_drop_sw_health_store")&&ho(a)}));
return a}
eo.prototype.writeThenSend=function(a,b){b||(b={});Ak()||(this.h=!1);rn.prototype.writeThenSend.call(this,a,b)};
eo.prototype.sendThenWrite=function(a,b,c){b||(b={});Ak()||(this.h=!1);rn.prototype.sendThenWrite.call(this,a,b,c)};
eo.prototype.sendAndWrite=function(a,b){b||(b={});Ak()||(this.h=!1);rn.prototype.sendAndWrite.call(this,a,b)};
eo.prototype.awaitInitialization=function(){return this.j.promise};
function ho(a){var b;y(function(c){if(!a.I)throw b=Vk("clearSWHealthLogsDb"),b;return c.return(Rn(a.I).catch(function(d){a.handleError(d)}))})}
function fo(a,b,c){W("use_cfr_monitor")&&io(a,b);if(W("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Uj(a,void 0,"POST",e);else if(V("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Uj(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new bb({url:a});if(g.j&&g.i||
g.m){var h=Sb(a.match(Rb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==Yb(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Un(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),jn(a,b.postBody,b,Rj)):jn(a,JSON.stringify(b.postParams),b,Zj):Rj(a,b)}
function io(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Wn().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Wn().requestComplete(a,!0);d(e,f)}}
;var jo=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",jo);function ko(a){var b=this;this.config_=null;a?this.config_=a:Ym()&&(this.config_=Zm());vk(function(){pn(b)},5E3)}
ko.prototype.isReady=function(){!this.config_&&Ym()&&(this.config_=Zm());return!!this.config_};
function qn(a,b,c,d){function e(w){w=void 0===w?!1:w;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(w||W("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=nn(b,c,l,k)),A)){var I=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(O,ua){on(A);I(O,ua)};
c.onFetchSuccess=function(O,ua){on(A);M(O,ua)}}try{if(w&&d.retry&&!d.tc.bypassNetworkless)g.method="POST",d.tc.writeThenSend?go().writeThenSend(p,g):go().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var S=g.postBody;"string"!==typeof S&&(S=JSON.stringify(g.postBody));jn(p,S,g,Rj)}else jn(p,JSON.stringify(g.postParams),g,Zj);else W("web_all_payloads_via_jspb")?Rj(p,g):Zj(p,g)}catch(O){if("InvalidAccessError"==O.name)A&&(on(A),A=0),kj(Error("An extension is blocking network request."));else throw O;}A&&vk(function(){pn(a)},5E3)}
!V("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&kj(new zk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new zk("innertube xhrclient not ready",b,c,d);jj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,A){if(d.onError)d.onError(A)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ad)&&(h=f);var k=a.config_.cd||!1,l=hn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Yc+"/"+b,n={alt:"json"},r=a.config_.bd&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Xc);var p=Gj(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&
jo.isNwlInitialized?Am().then(function(w){e(w)}):e(!1)}
;function lo(a){this.X=a;this.h=null;this.s=0;this.N=null;this.H=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.m=0;this.Hb=wj(window,"mousemove",Za(this.Ib,this));this.Jb=yj(Za(this.Ga,this),25)}
D(lo,ne);lo.prototype.Ib=function(a){void 0===a.h&&rj(a);var b=a.h;void 0===a.i&&rj(a);this.h=new Dd(b,a.i)};
lo.prototype.Ga=function(){if(this.h){var a=Y();if(0!=this.s){var b=this.N,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.s);this.i[this.m]=.5<Math.abs((d-this.H)/this.H)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.X();this.H=d}this.s=a;this.N=this.h;this.m=(this.m+1)%4}};
lo.prototype.Sa=function(){window.clearInterval(this.Jb);uj(this.Hb)};var mo={};
function no(){var a={},b=void 0===a.ld?!1:a.ld;a=void 0===a.Qc?!0:a.Qc;if(null==C("_lact",window)){var c=parseInt(V("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&oo();wj(document,"keydown",oo);wj(document,"keyup",oo);wj(document,"mousedown",oo);wj(document,"mouseup",oo);b?wj(window,"touchmove",function(){po("touchmove",200)},{passive:!0}):(wj(window,"resize",function(){po("resize",200)}),a&&wj(window,"scroll",function(){po("scroll",200)}));
new lo(function(){po("mouse",100)});
wj(document,"touchstart",oo,{passive:!0});wj(document,"touchend",oo,{passive:!0})}}
function po(a,b){mo[a]||(mo[a]=!0,We.ka(function(){oo();mo[a]=!1},b))}
function oo(){null==C("_lact",window)&&no();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function qo(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var ro=z.ytPubsubPubsubInstance||new L,so=z.ytPubsubPubsubSubscribedKeys||{},to=z.ytPubsubPubsubTopicToKeys||{},uo=z.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.nb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;B("ytPubsubPubsubInstance",ro);B("ytPubsubPubsubTopicToKeys",to);B("ytPubsubPubsubIsSynchronous",uo);B("ytPubsubPubsubSubscribedKeys",so);var vo=Symbol("injectionDeps");function wo(){this.i=new Map;this.h=new Map}
wo.prototype.resolve=function(a){return xo(this,a,[])};
function xo(a,b,c){var d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.sd)var e=d.sd;else if(d.rd)e=d[vo]?yo(a,d[vo],c):[],e=d.rd.apply(d,ka(e));else if(d.qd){e=d.qd;var f=e[vo]?yo(a,e[vo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Vd||a.h.set(b,e);return e}
function yo(a,b,c){return b?b.map(function(d){return xo(a,d,c)}):[]}
;var zo;function Ao(){this.store={};this.h={}}
Ao.prototype.storePayload=function(a,b){a=Bo(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Ao.prototype.extractMatchingEntries=function(a){a=Co(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
Ao.prototype.getSequenceCount=function(a){a=Co(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Co(a,b){var c=Bo(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Bo(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Do(b.auth,g[0])){var h=b.isJspb;Do(void 0===h?"undefined":h?"true":"false",g[1])&&Do(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function Do(a,b){return void 0===a||"undefined"===a?!0:a===b}
Ao.prototype.getSequenceCount=Ao.prototype.getSequenceCount;Ao.prototype.extractMatchingEntries=Ao.prototype.extractMatchingEntries;Ao.prototype.storePayload=Ao.prototype.storePayload;function Bo(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;var Eo=mj("initial_gel_batch_timeout",2E3),Fo=mj("gel_queue_timeout_max_ms",6E4),Go=Math.pow(2,16)-1,Ho=void 0;function Io(){this.j=this.h=this.i=0}
var Jo=new Io,Ko=new Io,Lo,Mo=!0,No=z.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",No);var Oo=z.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Oo);var Po=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Po);var Qo=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Qo);var Ro={};function So(){var a=C("yt.logging.ims");a||(a=new Ao,B("yt.logging.ims",a));return a}
function To(a,b){W("web_all_payloads_via_jspb")&&kj(new zk("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Uo(a);var c=Vo(a);if(W("use_new_in_memory_storage")){Ro[c]=!0;var d={cttAuthInfo:c,isJspb:!1};So().storePayload(d,a.payload);Wo(b,[],c,!1,d)}else d=No.get(c)||[],No.set(c,d),d.push(a.payload),Wo(b,d,c)}}
function Xo(a,b){if("log_event"===a.endpoint){Uo(void 0,a);var c=Vo(a,!0);if(W("use_new_in_memory_storage")){Ro[c]=!0;var d={cttAuthInfo:c,isJspb:!0};So().storePayload(d,a.payload.toJSON());Wo(b,[],c,!0,d)}else d=Oo.get(c)||[],Oo.set(c,d),a=a.payload.toJSON(),d.push(a),Wo(b,d,c,!0)}}
function Wo(a,b,c,d,e){d=void 0===d?!1:d;a&&(Ho=new a);a=mj("tvhtml5_logging_max_batch_ads_fork")||mj("tvhtml5_logging_max_batch")||mj("web_logging_max_batch")||100;var f=Y(),g=d?Ko.j:Jo.j;b=b.length;e&&(b=So().getSequenceCount(e));b>=a?Lo||(Lo=Yo(function(){Zo({writeThenSend:!0},W("flush_only_full_queue")?c:void 0,d);Lo=void 0},0)):10<=f-g&&($o(d),d?Ko.j=f:Jo.j=f)}
function ap(a,b){W("web_all_payloads_via_jspb")&&kj(new zk("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Uo(a);var c=Vo(a),d=new Map;d.set(c,[a.payload]);b&&(Ho=new b);return new Xf(function(e,f){Ho&&Ho.isReady()?bp(d,Ho,e,f,{bypassNetworkless:!0},!0):e()})}}
function cp(a,b){if("log_event"===a.endpoint){Uo(void 0,a);var c=Vo(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Ho=new b);return new Xf(function(e){Ho&&Ho.isReady()?dp(d,Ho,e,{bypassNetworkless:!0},!0):e()})}}
function Vo(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Xi;c.videoId?dd(d,1,pd,c.videoId):c.playlistId&&dd(d,2,pd,c.playlistId);Qo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Po[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Zo(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&W("web_all_payloads_via_jspb")&&kj(new zk("transport.flushLogs called for JSON in JSPB only experiment"));new Xf(function(d,e){c?(ep(Ko.i),ep(Ko.h),Ko.h=0):(ep(Jo.i),ep(Jo.h),Jo.h=0);if(Ho&&Ho.isReady())if(W("use_new_in_memory_storage")){var f=a,g=c,h=Ho;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=So().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),dp(k,h,d,f)):(k=So().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),l.set(b,k),bp(l,h,d,e,f));else if(g){e=u(Object.keys(Ro));for(g=e.next();!g.done;g=e.next())l=g.value,g=So().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Ro[l];dp(k,h,d,f)}else{k=u(Object.keys(Ro));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=So().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Ro[g]}bp(l,h,d,e,f)}}else f=a,k=c,h=Ho,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Oo.get(b)||[],e.set(b,
k),dp(e,h,d,f),Oo.delete(b)):(k=new Map,l=No.get(b)||[],k.set(b,l),bp(k,h,d,e,f),No.delete(b)):k?(dp(Oo,h,d,f),Oo.clear()):(bp(No,h,d,e,f),No.clear());else $o(c),d()})}
function $o(a){a=void 0===a?!1:a;if(W("web_gel_timeout_cap")&&(!a&&!Jo.h||a&&!Ko.h)){var b=Yo(function(){Zo({writeThenSend:!0},void 0,a)},Fo);
a?Ko.h=b:Jo.h=b}ep(a?Ko.i:Jo.i);b=V("LOGGING_BATCH_TIMEOUT",mj("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&Mo&&(b=Eo);b=Yo(function(){Zo({writeThenSend:!0},void 0,a)},b);
a?Ko.i=b:Jo.i=b}
function bp(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Y()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={pb:k.pb,Fa:k.Fa,cb:k.cb,rb:k.rb,qb:k.qb},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Fa=qb({context:$m(b.config_||Zm())});if(!Qa(m)&&!W("throw_err_when_logevent_malformed_killswitch")){d();break}k.Fa.events=m;(m=Po[l])&&fp(k.Fa,l,m);delete Po[l];k.cb="visitorOnlyApprovedKey"===l;gp(k.Fa,g,k.cb);hp(e);k.rb=function(n){W("update_log_event_config")&&We.ka(function(){return y(function(r){return x(r,
ip(n),0)})});
h--;h||c()};
k.pb=0;k.qb=function(n){return function(){n.pb++;if(e.bypassNetworkless&&1===n.pb)try{qn(b,"log_event",n.Fa,jp({writeThenSend:!0},n.cb,n.rb,n.qb,f)),Mo=!1}catch(r){jj(r),d()}h--;h||c()}}(k);
try{qn(b,"log_event",k.Fa,jp(e,k.cb,k.rb,k.qb,f)),Mo=!1}catch(n){jj(n),d()}}}
function dp(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Y()),g=a.size,h=new Map([].concat(ka(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Yi;var n=gn(b.config_||Zm());J(k,Di,1,n);m=m?kp(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())md(k,3,Ui,n.value);(m=Qo[l])&&lp(k,l,m);delete Qo[l];l="visitorOnlyApprovedKey"===l;mp(k,f,l);hp(d);k=Ad(k);l=jp(d,l,function(r){W("update_log_event_config")&&We.ka(function(){return y(function(p){return x(p,ip(r),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;qn(b,"log_event","",l);Mo=!1}}
function hp(a){W("always_send_and_write")&&(a.writeThenSend=!1)}
function jp(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,tc:a,dangerousLogToVisitorSession:b,Nd:!!e,headers:{},postBodyFormat:"",postBody:"",compress:W("compress_gel")};np()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function gp(a,b,c){np()||(a.requestTimeMs=String(b));W("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=V("EVENT_ID"))&&(c=op(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function mp(a,b,c){np()||H(a,2,b);if(!c&&(b=V("EVENT_ID"))){c=op();var d=new Wi;H(d,1,b);H(d,2,c);J(a,Wi,5,d)}}
function op(){var a=V("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Go/2));a++;a>Go&&(a=1);dj("BATCH_CLIENT_COUNTER",a);return a}
function fp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function lp(a,b,c){if(od(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,Xi,4,c);a=fd(a,Di,1)||new Di;c=fd(a,Bi,3)||new Bi;var e=new Ai;H(e,2,b);H(e,1,d);md(c,12,Ai,e);J(a,Bi,3,c)}
function kp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Ui(a[c]))}catch(d){jj(new zk("Transport failed to deserialize "+String(a[c])))}return b}
function Uo(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function np(){return W("use_request_time_ms_header")||W("lr_use_request_time_ms_header")}
function Yo(a,b){return W("transport_use_scheduler")?vk(a,b):xj(a,b)}
function ep(a){W("transport_use_scheduler")?We.Qa(a):window.clearTimeout(a)}
function ip(a){var b,c,d,e,f,g,h,k,l,m;return y(function(n){if(1==n.h){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[ni.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[mi.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;zo||(zo=new wo);m=zo.resolve(Vm);return g?e?x(n,Wm(m,g,e),2):x(n,Wm(m,g),2):n.D(2)}return l?h?x(n,Xm(m,l,h),0):x(n,Xm(m,l),0):n.D(0)})}
;var pp=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",pp);function qp(a){Zo(void 0,void 0,void 0===a?!1:a)}
function rp(a){pp[a]=a in pp?pp[a]+1:0;return pp[a]}
;var sp=[];
function tp(a,b){var c=void 0===c?{}:c;var d=ko;V("ytLoggingEventsDefaultDisabled",!1)&&ko===ko&&(d=null);if(W("web_all_payloads_via_jspb"))sp.push({Td:a,payload:b,options:c});else{c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;W("enable_unknown_lact_fix_on_html5")&&no();a=qo();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};W("log_sequence_info_on_gel_web")&&c.sequenceGroup&&(a=e.context,b=c.sequenceGroup,b={index:rp(b),
groupKey:b},a.sequence=b,c.endOfSequence&&delete pp[c.sequenceGroup]);(c.sendIsolatedPayload?ap:To)({endpoint:"log_event",payload:e,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}}
;var up=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",up);function vp(a){var b=void 0;b=void 0===b?{}:b;var c=!1;V("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:ko;b=void 0===b?{}:b;var d=Math.round(b.timestamp||Y());H(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=qo();d=new Ti;H(d,1,b.timestamp||!isFinite(e)?-1:e);if(W("log_sequence_info_on_gel_web")&&b.sequenceGroup){e=b.sequenceGroup;var f=rp(e),g=new Si;H(g,2,f);H(g,1,e);J(d,Si,3,g);b.endOfSequence&&delete up[b.sequenceGroup]}J(a,Ti,33,d);(b.sendIsolatedPayload?cp:Xo)({endpoint:"log_event",payload:a,
cttAuthInfo:b.cttAuthInfo,dangerousLogToVisitorSession:b.dangerousLogToVisitorSession},c)}
;var wp=new Set,xp=0,yp=0,zp=0,Ap=[],Bp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Cp(){for(var a=u(Bp),b=a.next();!b.done;b=a.next()){var c=Nb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Dp(){var a;return y(function(b){return(a=qf())?b.return(a.then(function(c){c=Ad(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return yc(d,3)})):b.return(Promise.resolve(null))})}
;var Ep={};function Fp(a){return Ep[a]||(Ep[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Gp={},Hp=[],ng=new L,Ip={};function Jp(){for(var a=u(Hp),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Kp(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Fp(b)]:a.getAttribute("data-"+b):null;return c}
function Lp(a){ng.ab.apply(ng,arguments)}
;function Mp(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Np(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Op(a,b,c){Pp||(Pp={},wj(window,"message",function(d){a:{if(d.origin===Np(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Pp[e.id])d.H=!0,d.H&&(E(d.s,d.sendMessage,d),d.s.length=0),d.Yb(e)}e=void 0}return e}));
Pp[c]=b}
var Pp=null;var Qp=window;
function Rp(a,b,c){this.v=this.h=this.i=null;this.j=0;this.H=!1;this.s=[];this.m=null;this.X={};if(!a)throw Error("YouTube player element ID required.");this.id=Sa(this);this.N=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Ub(a.src):"https://www.youtube.com"),this.i=new Mp(b),c||(b=Sp(this,a),this.v=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Sa(this.h)),Gp[this.h.id]=this,window.postMessage){this.m=
new L;Tp(this);b=Np(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Ip)Ip.hasOwnProperty(e)&&Up(this,e)}}
q=Rp.prototype;q.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
q.getIframe=function(){return this.h};
q.Yb=function(a){Vp(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);Wp(this,a);return this};
function Up(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.N===b[0]&&Wp(a,c)}}
q.destroy=function(){this.h&&this.h.id&&(Gp[this.h.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.v){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.v,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Pp&&(Pp[this.id]=null);this.i=null;a=this.h;for(var c in ob)ob[c][0]==a&&uj(c);this.v=this.h=null};
q.dc=function(){return{}};
function Xp(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.s.push(b)}
function Vp(a,b,c){a.m.j||(c={target:a,data:c},a.m.ab(b,c),Lp(a.N+"."+b,c))}
function Sp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Np(a.i,"title"));(b=Np(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Np(a.i,"height"))&&
c.setAttribute("height",b.toString());var g=a.dc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=Yb(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Np(a.i,"host")+("/embed/"+Np(a.i,"videoId"))+"?"+Wb(g);Qp.yt_embedsEnableUaChProbe?Dp().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Rd(l.href).toString();Nd(c,Sd(k));return k}):Qp.yt_embedsEnableIframeSrcWithIntent?Nd(c,Sd(h)):c.src=h;
return c}
q.vc=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Tp(a){Op(a.i,a,a.id);a.j=yj(a.vc.bind(a),250);wj(a.h,"load",function(){window.clearInterval(a.j);a.j=yj(a.vc.bind(a),250)})}
function Wp(a,b){a.X[b]||(a.X[b]=!0,Xp(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Ub(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(lc){if(lc.name&&"SyntaxError"===lc.name){if(!(lc.message&&0<lc.message.indexOf("target origin ''"))){var e=void 0,f=lc;e=void 0===e?{}:e;e.name=V("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=V("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(W("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=xp)){var m=void 0,n=void 0,r=f,p=g,w=Hd(r),A=w.message||"Unknown Error",I=w.name||"UnknownError",
M=w.stack||r.i||"Not available";if(M.startsWith(I+": "+A)){var S=M.split("\n");S.shift();M=S.join("\n")}var O=w.lineNumber||"Not available",ua=w.fileName||"Not available",Qc=M,Ia=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var va=0;va<r.args.length&&!(Ia=kk(r.args[va],"params."+va,p,Ia),500<=Ia);va++);else if(r.hasOwnProperty("params")&&r.params){var ba=r.params;if("object"===typeof r.params)for(n in ba){if(ba[n]){var ha="params."+n,ia=mk(ba[n]);p[ha]=ia;Ia+=ha.length+ia.length;if(500<
Ia)break}}else p.params=mk(ba)}if(Ap.length)for(var aa=0;aa<Ap.length&&!(Ia=kk(Ap[aa],"params.context."+aa,p,Ia),500<=Ia);aa++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var U={message:A,name:I,lineNumber:O,fileName:ua,stack:Qc,params:p,sampleWeight:1},fl=Number(r.columnNumber);isNaN(fl)||(U.lineNumber=U.lineNumber+":"+fl);if("IGNORED"===r.level)m=0;else a:{for(var gl=gk(),hl=u(gl.Ba),Lg=hl.next();!Lg.done;Lg=hl.next()){var il=Lg.value;if(U.message&&U.message.match(il.Qd)){m=
il.weight;break a}}for(var jl=u(gl.ya),Mg=jl.next();!Mg.done;Mg=jl.next()){var kl=Mg.value;if(kl.Lc(U)){m=kl.weight;break a}}m=1}U.sampleWeight=m;for(var ll=u(bk),Ng=ll.next();!Ng.done;Ng=ll.next()){var Og=Ng.value;if(Og.Cb[U.name])for(var ml=u(Og.Cb[U.name]),Pg=ml.next();!Pg.done;Pg=ml.next()){var nl=Pg.value,ue=U.message.match(nl.regexp);if(ue){U.params["params.error.original"]=ue[0];for(var Qg=nl.groups,ol={},mc=0;mc<Qg.length;mc++)ol[Qg[mc]]=ue[mc+1],U.params["params.error."+Qg[mc]]=ue[mc+1];
U.message=Og.Qb(ol);break}}}U.params||(U.params={});var pl=gk();U.params["params.errorServiceSignature"]="msg="+pl.Ba.length+"&cb="+pl.ya.length;U.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(U.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));vb("sample").constructor!==ub&&(U.params["params.fconst"]="true");var ya=U;window.yterr&&"function"===typeof window.yterr&&window.yterr(ya);if(0!==ya.sampleWeight&&!wp.has(ya.message)){if("ERROR"===
h){hk.ab("handleError",ya);if(W("record_app_crashed_web")&&0===zp&&1===ya.sampleWeight)if(zp++,W("errors_via_jspb")){var Rg=new Ri;H(Rg,1,1);if(!W("report_client_error_with_app_crash_ks")){var ql=new Mi;H(ql,1,ya.message);var rl=new Ni;J(rl,Mi,3,ql);var sl=new Oi;J(sl,Ni,5,rl);var tl=new Pi;J(tl,Oi,9,sl);J(Rg,Pi,4,tl)}var cq=Rg,ul=new Ui;hd(ul,Ri,20,Vi,cq);vp(ul)}else{var vl={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};W("report_client_error_with_app_crash_ks")||(vl.systemHealth={crashData:{clientError:{logMessage:{message:ya.message}}}});
tp("appCrashed",vl)}yp++}else"WARNING"===h&&hk.ab("handleWarning",ya);if(W("kevlar_gel_error_routing"))a:{var Sg=void 0,Tg=void 0,jd=h,R=ya;if(W("errors_via_jspb")){if(Cp())Tg=void 0;else{var nc=new Ji;H(nc,1,R.stack);R.fileName&&H(nc,4,R.fileName);var Wa=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Wa.length&&(1!==Wa.length||isNaN(Number(Wa[0]))?2!==Wa.length||isNaN(Number(Wa[0]))||isNaN(Number(Wa[1]))||(H(nc,2,Number(Wa[0])),H(nc,3,Number(Wa[1]))):H(nc,2,Number(Wa[0])));var Ib=
new Mi;H(Ib,1,R.message);H(Ib,3,R.name);H(Ib,6,R.sampleWeight);"ERROR"===jd?H(Ib,2,2):"WARNING"===jd?H(Ib,2,1):H(Ib,2,0);var Ug=new Ki;H(Ug,1,!0);hd(Ug,Ji,3,Li,nc);var Jb=new Gi;H(Jb,3,window.location.href);for(var wl=V("FEXP_EXPERIMENTS",[]),Vg=0;Vg<wl.length;Vg++){var xl=Jb,dq=wl[Vg];Vc(xl);cd(xl,5,2,!1).push(dq)}var Wg=ej();if(!fj()&&Wg)for(var yl=u(Object.keys(Wg)),Kb=yl.next();!Kb.done;Kb=yl.next()){var zl=Kb.value,Xg=new Ii;H(Xg,1,zl);H(Xg,2,String(Wg[zl]));md(Jb,4,Ii,Xg)}var Yg=R.params;if(Yg){var Al=
u(Object.keys(Yg));for(Kb=Al.next();!Kb.done;Kb=Al.next()){var Bl=Kb.value,Zg=new Ii;H(Zg,1,"client."+Bl);H(Zg,2,String(Yg[Bl]));md(Jb,4,Ii,Zg)}}var Cl=V("SERVER_NAME"),Dl=V("SERVER_VERSION");if(Cl&&Dl){var $g=new Ii;H($g,1,"server.name");H($g,2,Cl);md(Jb,4,Ii,$g);var ah=new Ii;H(ah,1,"server.version");H(ah,2,Dl);md(Jb,4,Ii,ah)}var ve=new Ni;J(ve,Gi,1,Jb);J(ve,Ki,2,Ug);J(ve,Mi,3,Ib);Tg=ve}var El=Tg;if(!El)break a;var Fl=new Ui;hd(Fl,Ni,163,Vi,El);vp(Fl)}else{if(Cp())Sg=void 0;else{var kd={stackTrace:R.stack};
R.fileName&&(kd.filename=R.fileName);var Xa=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Xa.length&&(1!==Xa.length||isNaN(Number(Xa[0]))?2!==Xa.length||isNaN(Number(Xa[0]))||isNaN(Number(Xa[1]))||(kd.lineNumber=Number(Xa[0]),kd.columnNumber=Number(Xa[1])):kd.lineNumber=Number(Xa[0]));var bh={level:"ERROR_LEVEL_UNKNOWN",message:R.message,errorClassName:R.name,sampleWeight:R.sampleWeight};"ERROR"===jd?bh.level="ERROR_LEVEL_ERROR":"WARNING"===jd&&(bh.level="ERROR_LEVEL_WARNNING");
var eq={isObfuscated:!0,browserStackInfo:kd},oc={pageUrl:window.location.href,kvPairs:[]};V("FEXP_EXPERIMENTS")&&(oc.experimentIds=V("FEXP_EXPERIMENTS"));var ch=ej();if(!fj()&&ch)for(var Gl=u(Object.keys(ch)),Lb=Gl.next();!Lb.done;Lb=Gl.next()){var Hl=Lb.value;oc.kvPairs.push({key:Hl,value:String(ch[Hl])})}var dh=R.params;if(dh){var Il=u(Object.keys(dh));for(Lb=Il.next();!Lb.done;Lb=Il.next()){var Jl=Lb.value;oc.kvPairs.push({key:"client."+Jl,value:String(dh[Jl])})}}var Kl=V("SERVER_NAME"),Ll=V("SERVER_VERSION");
Kl&&Ll&&(oc.kvPairs.push({key:"server.name",value:Kl}),oc.kvPairs.push({key:"server.version",value:Ll}));Sg={errorMetadata:oc,stackTrace:eq,logMessage:bh}}var Ml=Sg;if(!Ml)break a;tp("clientError",Ml)}if("ERROR"===jd||W("errors_flush_gel_always_killswitch"))b:{if(W("web_fp_via_jspb")&&(qp(!0),!W("web_fp_via_jspb_and_json")))break b;qp()}}if(!W("suppress_error_204_logging")){var Mb=ya,ld=Mb.params||{},mb={urlParams:{a:"logerror",t:"jserror",type:Mb.name,msg:Mb.message.substr(0,250),line:Mb.lineNumber,
level:h,"client.name":ld.name},postParams:{url:V("PAGE_NAME",window.location.href),file:Mb.fileName},method:"POST"};ld.version&&(mb["client.version"]=ld.version);if(mb.postParams){Mb.stack&&(mb.postParams.stack=Mb.stack);for(var Nl=u(Object.keys(ld)),eh=Nl.next();!eh.done;eh=Nl.next()){var Ol=eh.value;mb.postParams["client."+Ol]=ld[Ol]}var fh=ej();if(fh)for(var Pl=u(Object.keys(fh)),gh=Pl.next();!gh.done;gh=Pl.next()){var Ql=gh.value;mb.postParams[Ql]=fh[Ql]}var Rl=V("SERVER_NAME"),Sl=V("SERVER_VERSION");
Rl&&Sl&&(mb.postParams["server.name"]=Rl,mb.postParams["server.version"]=Sl)}Rj(V("ECATCHER_REPORT_HOST","")+"/error_204",mb)}try{wp.add(ya.message)}catch(jq){}xp++}}}}}else throw lc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Yp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Zp(a){return 0===a.search("get")||0===a.search("is")}
;function $p(a,b){Rp.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.na={};this.playerInfo={};this.videoTitle=""}
v($p,Rp);q=$p.prototype;q.dc=function(){var a=Np(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Np(this.i,"embedConfig")){if(Ra(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Yb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ra(a))for(var c in a)a.hasOwnProperty(c)&&(this.na[c]=a[c]);break;case "infoDelivery":aq(this,a);break;case "initialDelivery":Ra(a)&&(window.clearInterval(this.j),this.playerInfo={},this.na={},bq(this,a.apiInterface),aq(this,a));break;default:Vp(this,b,a)}};
function aq(a,b){if(Ra(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.h.setAttribute("title",b))):(a.videoTitle="",a.h.setAttribute("title","YouTube "+Np(a.i,"title"))))}}
function bq(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Yp(c)?this[c]=function(){this.playerInfo={};
this.na={};Xp(this,c,arguments);return this}:Zp(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Xp(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Np(this.i,"host")+("/embed/"+Np(this.i,"videoId")),b=Number(Np(this.i,"width")),c=Number(Np(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Eb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Cb,
"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.na.namespaces?a?this.na[a]?this.na[a].options||[]:[]:this.na.namespaces||[]:[]};
q.getOption=function(a,b){if(this.na.namespaces&&a&&b&&this.na[a])return this.na[a][b]};
function fq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Kp(a,"videoid");b&&(b={videoId:b,width:Kp(a,"width"),height:Kp(a,"height")},new $p(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Gp[a]});
B("YT.scan",Jp);B("YT.subscribe",function(a,b,c){ng.subscribe(a,b,c);Ip[a]=!0;for(var d in Gp)Gp.hasOwnProperty(d)&&Up(Gp[d],a)});
B("YT.unsubscribe",function(a,b,c){mg(a,b,c)});
B("YT.Player",$p);Rp.prototype.destroy=Rp.prototype.destroy;Rp.prototype.setSize=Rp.prototype.setSize;Rp.prototype.getIframe=Rp.prototype.getIframe;Rp.prototype.addEventListener=Rp.prototype.addEventListener;$p.prototype.getVideoEmbedCode=$p.prototype.getVideoEmbedCode;$p.prototype.getOptions=$p.prototype.getOptions;$p.prototype.getOption=$p.prototype.getOption;
Hp.push(function(a){var b=a;b||(b=document);a=jb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=eb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=jb(b);E(ib(a,b),fq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Jp();var gq=z.onYTReady;gq&&gq();var hq=z.onYouTubeIframeAPIReady;hq&&hq();var iq=z.onYouTubePlayerAPIReady;iq&&iq();}).call(this);
