import{S as x,i as b,s as q,f as T,u as k,g as U,h as V,t as p,b as d,c as h,a as E,m as S,d as y,n as R}from"./index-Bybr0Vum.js";import{e as f,a as w,b as m,f as $,d as i,c as C,k as g,i as _,j as v,p as j,q as z,u as M}from"./lifecycle-Cjz4tQIi.js";import{p as O,T as B,S as F}from"./collect-stories-Cq2yDDbb.js";function G(l){let e,a,r,s,t;const c=l[1].default,o=T(c,l,l[0],null);return{c(){e=f("div"),a=f("div"),r=w(),s=f("div"),o&&o.c(),this.h()},l(n){e=m(n,"DIV",{class:!0});var u=$(e);a=m(u,"DIV",{class:!0}),$(a).forEach(i),r=C(u),s=m(u,"DIV",{class:!0});var A=$(s);o&&o.l(A),A.forEach(i),u.forEach(i),this.h()},h(){g(a,"class","error-state-graphic svelte-s89qra"),g(s,"class","error-state-message svelte-s89qra"),g(e,"class","aura-error-state svelte-s89qra")},m(n,u){_(n,e,u),v(e,a),v(e,r),v(e,s),o&&o.m(s,null),t=!0},p(n,[u]){o&&o.p&&(!t||u&1)&&k(o,c,n,n[0],t?V(c,n[0],u,null):U(n[0]),null)},i(n){t||(p(o,n),t=!0)},o(n){d(o,n),t=!1},d(n){n&&i(e),o&&o.d(n)}}}function H(l,e,a){let{$$slots:r={},$$scope:s}=e;return l.$$set=t=>{"$$scope"in t&&a(0,s=t.$$scope)},[s,r]}class D extends x{constructor(e){super(),b(this,e,H,G,q,{})}}D.__docgen={version:3,name:"error-state.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function J(l){let e,a,r="try again?";return{c(){e=j("An unexpected error occurred, "),a=f("u"),a.textContent=r},l(s){e=z(s,"An unexpected error occurred, "),a=m(s,"U",{"data-svelte-h":!0}),M(a)!=="svelte-zf15n6"&&(a.textContent=r)},m(s,t){_(s,e,t),_(s,a,t)},p:R,d(s){s&&(i(e),i(a))}}}function K(l){let e,a;return e=new D({props:{$$slots:{default:[J]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(r){E(e.$$.fragment,r)},m(r,s){S(e,r,s),a=!0},p(r,s){const t={};s&1&&(t.$$scope={dirty:s,ctx:r}),e.$set(t)},i(r){a||(p(e.$$.fragment,r),a=!0)},o(r){d(e.$$.fragment,r),a=!1},d(r){y(e,r)}}}function L(l){let e,a,r,s;return e=new B({props:{$$slots:{default:[K]},$$scope:{ctx:l}}}),r=new F({props:{name:"Default Error State"}}),{c(){h(e.$$.fragment),a=w(),h(r.$$.fragment)},l(t){E(e.$$.fragment,t),a=C(t),E(r.$$.fragment,t)},m(t,c){S(e,t,c),_(t,a,c),S(r,t,c),s=!0},p(t,[c]){const o={};c&1&&(o.$$scope={dirty:c,ctx:t}),e.$set(o)},i(t){s||(p(e.$$.fragment,t),p(r.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),d(r.$$.fragment,t),s=!1},d(t){t&&i(a),y(e,t),y(r,t)}}}const N={title:"AURA/Error State",component:D,tags:["autodocs"],argTypes:{}};class P extends x{constructor(e){super(),b(this,e,null,L,q,{})}}const I=O(P,{meta:{title:"AURA/Error State",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:"<ErrorState>An unexpected error occurred, <u>try again?</u></ErrorState>",hasArgs:!1},DefaultErrorState:{name:"Default Error State",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template"]},N),Y=I.meta,Z=["DefaultErrorState"],ee=I.stories.DefaultErrorState;export{ee as DefaultErrorState,Z as __namedExportsOrder,Y as default};
