var N=Object.defineProperty;var P=(t,n,e)=>n in t?N(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var m=(t,n,e)=>P(t,typeof n!="symbol"?n+"":n,e);import{y as h,z,b as R,d as q,A,B as L}from"./lifecycle-WtsT-gpG.js";function g(){}function U(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function I(){return Object.create(null)}function y(t){t.forEach(B)}function E(t){return typeof t=="function"}function nt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function D(t){return Object.keys(t).length===0}function F(t,...n){if(t==null){for(const r of n)r(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function et(t,n,e){t.$$.on_destroy.push(F(n,e))}function rt(t,n,e,r){if(t){const s=C(t,n,e,r);return t[0](s)}}function C(t,n,e,r){return t[1]&&r?U(e.ctx.slice(),t[1](r(n))):e.ctx}function st(t,n,e,r){if(t[2]&&r){const s=t[2](r(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const u=[],a=Math.max(n.dirty.length,s.length);for(let f=0;f<a;f+=1)u[f]=n.dirty[f]|s[f];return u}return n.dirty|s}return n.dirty}function ot(t,n,e,r,s,u){if(s){const a=C(n,e,r,u);t.p(a,s)}}function ut(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function it(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function ft(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function ct(t){const n={};for(const e in t)n[e]=!0;return n}function at(t){return t&&E(t.destroy)?t.destroy:g}const l=[],V=[];let _=[];const b=[],G=Promise.resolve();let w=!1;function H(){w||(w=!0,G.then(M))}function v(t){_.push(t)}function dt(t){b.push(t)}const x=new Set;let d=0;function M(){if(d!==0)return;const t=z;do{try{for(;d<l.length;){const n=l[d];d++,h(n),J(n.$$)}}catch(n){throw l.length=0,d=0,n}for(h(null),l.length=0,d=0;V.length;)V.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];x.has(e)||(x.add(e),e())}_.length=0}while(l.length);for(;b.length;)b.pop()();w=!1,x.clear(),h(t)}function J(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function K(t){const n=[],e=[];_.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),_=n}const $=new Set;let c;function lt(){c={r:0,c:[],p:c}}function _t(){c.r||y(c.c),c=c.p}function Q(t,n){t&&t.i&&($.delete(t),t.i(n))}function ht(t,n,e,r){if(t&&t.o){if($.has(t))return;$.add(t),c.c.push(()=>{$.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}else r&&r()}function gt(t,n,e){const r=t.$$.props[n];r!==void 0&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function yt(t){t&&t.c()}function pt(t,n){t&&t.l(n)}function T(t,n,e){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),v(()=>{const u=t.$$.on_mount.map(B).filter(E);t.$$.on_destroy?t.$$.on_destroy.push(...u):y(u),t.$$.on_mount=[]}),s.forEach(v)}function W(t,n){const e=t.$$;e.fragment!==null&&(K(e.after_update),y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function X(t,n){t.$$.dirty[0]===-1&&(l.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function $t(t,n,e,r,s,u,a=null,f=[-1]){const p=z;h(t);const o=t.$$={fragment:null,ctx:[],props:u,update:g,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:I(),dirty:f,skip_bound:!1,root:n.target||p.$$.root};a&&a(o.root);let S=!1;if(o.ctx=e?e(t,n.props||{},(i,j,...k)=>{const O=k.length?k[0]:j;return o.ctx&&s(o.ctx[i],o.ctx[i]=O)&&(!o.skip_bound&&o.bound[i]&&o.bound[i](O),S&&X(t,i)),j}):[],o.update(),S=!0,y(o.before_update),o.fragment=r?r(o.ctx):!1,n.target){if(n.hydrate){A();const i=R(n.target);o.fragment&&o.fragment.l(i),i.forEach(q)}else o.fragment&&o.fragment.c();n.intro&&Q(t.$$.fragment),T(t,n.target,n.anchor),L(),M()}h(p)}class mt{constructor(){m(this,"$$");m(this,"$$set")}$destroy(){W(this,1),this.$destroy=g}$on(n,e){if(!E(e))return g;const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(n){this.$$set&&!D(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const xt="4.2.18",Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{mt as S,xt as V,pt as a,ht as b,yt as c,W as d,U as e,V as f,gt as g,dt as h,$t as i,lt as j,_t as k,ft as l,T as m,g as n,ct as o,it as p,rt as q,ut as r,nt as s,Q as t,ot as u,st as v,y as w,at as x,E as y,et as z};
