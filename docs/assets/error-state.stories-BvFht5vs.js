import{S as x,i as b,s as q,q as T,u as k,r as U,v as V,t as p,b as d,c as h,a as E,m as S,d as y,n as R}from"./index-DugT0KW2.js";import{e as f,s as w,a as m,b as $,d as i,c as C,k as g,i as _,g as v,t as z,l as M,h as O}from"./lifecycle-WtsT-gpG.js";import{p as j,T as B,S as F}from"./collect-stories-DjElEmSn.js";function G(l){let t,a,r,s,e;const c=l[1].default,o=T(c,l,l[0],null);return{c(){t=f("div"),a=f("div"),r=w(),s=f("div"),o&&o.c(),this.h()},l(n){t=m(n,"DIV",{class:!0});var u=$(t);a=m(u,"DIV",{class:!0}),$(a).forEach(i),r=C(u),s=m(u,"DIV",{class:!0});var A=$(s);o&&o.l(A),A.forEach(i),u.forEach(i),this.h()},h(){g(a,"class","error-state-graphic svelte-s89qra"),g(s,"class","error-state-message svelte-s89qra"),g(t,"class","aura-error-state svelte-s89qra")},m(n,u){_(n,t,u),v(t,a),v(t,r),v(t,s),o&&o.m(s,null),e=!0},p(n,[u]){o&&o.p&&(!e||u&1)&&k(o,c,n,n[0],e?V(c,n[0],u,null):U(n[0]),null)},i(n){e||(p(o,n),e=!0)},o(n){d(o,n),e=!1},d(n){n&&i(t),o&&o.d(n)}}}function H(l,t,a){let{$$slots:r={},$$scope:s}=t;return l.$$set=e=>{"$$scope"in e&&a(0,s=e.$$scope)},[s,r]}class D extends x{constructor(t){super(),b(this,t,H,G,q,{})}}D.__docgen={version:3,name:"error-state.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function J(l){let t,a,r="try again?";return{c(){t=z("An unexpected error occurred, "),a=f("u"),a.textContent=r},l(s){t=M(s,"An unexpected error occurred, "),a=m(s,"U",{"data-svelte-h":!0}),O(a)!=="svelte-zf15n6"&&(a.textContent=r)},m(s,e){_(s,t,e),_(s,a,e)},p:R,d(s){s&&(i(t),i(a))}}}function K(l){let t,a;return t=new D({props:{$$slots:{default:[J]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},l(r){E(t.$$.fragment,r)},m(r,s){S(t,r,s),a=!0},p(r,s){const e={};s&1&&(e.$$scope={dirty:s,ctx:r}),t.$set(e)},i(r){a||(p(t.$$.fragment,r),a=!0)},o(r){d(t.$$.fragment,r),a=!1},d(r){y(t,r)}}}function L(l){let t,a,r,s;return t=new B({props:{$$slots:{default:[K]},$$scope:{ctx:l}}}),r=new F({props:{name:"Default Error State"}}),{c(){h(t.$$.fragment),a=w(),h(r.$$.fragment)},l(e){E(t.$$.fragment,e),a=C(e),E(r.$$.fragment,e)},m(e,c){S(t,e,c),_(e,a,c),S(r,e,c),s=!0},p(e,[c]){const o={};c&1&&(o.$$scope={dirty:c,ctx:e}),t.$set(o)},i(e){s||(p(t.$$.fragment,e),p(r.$$.fragment,e),s=!0)},o(e){d(t.$$.fragment,e),d(r.$$.fragment,e),s=!1},d(e){e&&i(a),y(t,e),y(r,e)}}}const N={title:"AURA/Error State",component:D,tags:["autodocs"],argTypes:{}};class P extends x{constructor(t){super(),b(this,t,null,L,q,{})}}const I=j(P,{meta:{title:"AURA/Error State",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:"<ErrorState>An unexpected error occurred, <u>try again?</u></ErrorState>",hasArgs:!1},DefaultErrorState:{name:"Default Error State",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template"]},N),Y=I.meta,Z=["DefaultErrorState"],tt=I.stories.DefaultErrorState;export{tt as DefaultErrorState,Z as __namedExportsOrder,Y as default};
