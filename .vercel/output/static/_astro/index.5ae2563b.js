import{d as b,e as E,F as h,p as m,o as v,b as L,f as j,x as w,q as x,r as P}from"./web.56bfa28a.js";function S(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var a=e=>typeof e=="function"&&!e.length?e():e,d=e=>Array.isArray(e)?e:[e];function p(e,...t){return typeof e=="function"?e(...t):e}var O=Object.entries,A=Object.keys,C=e=>m()?v(e):e;function M(e){const t={...e},o={},r=new Map,i=n=>{const s=r.get(n);if(s)return s[0]();const c=b(t[n],{name:typeof n=="string"?n:void 0});return r.set(n,c),delete t[n],c[0]()},f=(n,s)=>{const c=r.get(n);if(c)return c[1](s);n in t&&(t[n]=p(s,[t[n]]))};for(const n of A(e))o[n]=void 0,Object.defineProperty(o,n,{get:i.bind(void 0,n)});return[o,(n,s)=>(S(n)?E(()=>{h(()=>{for(const[c,y]of O(p(n,o)))f(c,()=>y)})}):f(n,s),o)]}function V(e,t,o,r){return e.addEventListener(t,o,r),C(e.removeEventListener.bind(e,t,o,r))}function W(e,t,o,r){const i=()=>{d(a(e)).forEach(f=>{f&&d(a(t)).forEach(l=>V(f,l,o,r))})};typeof e=="function"?L(i):j(i)}function u(e){return e?e instanceof Window?{x:e.scrollX,y:e.scrollY}:{x:e.scrollLeft,y:e.scrollTop}:{x:null,y:null}}function R(e=window){const[t,o]=M(u(a(e))),r=()=>o(u(a(e)));return typeof e=="function"&&(w(x(e,i=>o(u(i)),{defer:!0})),P(r)),W(e,"scroll",r),t}export{R as c};
