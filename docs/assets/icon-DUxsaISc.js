import{S,i as V,s as D,k as E,v as b,u as L,l as M,o as j,t as q,b as N,w as y,e as v,j as P}from"./index-BHAyaIoL.js";import{e as C,f as z,g as I,d as m,m as d,r as f,i as _,v as h,h as k}from"./lifecycle-D41BJhRp.js";function g(a){let e;return{c(){e=C("div"),this.h()},l(l){e=z(l,"DIV",{class:!0}),I(e).forEach(m),this.h()},h(){d(e,"class","icon svelte-o7bcpa"),f(e,"color",a[2]),k(e,"--icon-url",`url('../icons/${a[1]}-${a[0]}.svg')`)},m(l,s){_(l,e,s)},p(l,s){s&4&&f(e,"color",l[2]),s&3&&k(e,"--icon-url",`url('../icons/${l[1]}-${l[0]}.svg')`)},d(l){l&&m(e)}}}function A(a){let e,l=a[1]&&g(a);return{c(){l&&l.c(),e=h()},l(s){l&&l.l(s),e=h()},m(s,n){l&&l.m(s,n),_(s,e,n)},p(s,n){s[1]?l?l.p(s,n):(l=g(s),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(s){s&&m(e),l&&l.d(s)}}}function B(a){let e,l,s;const n=a[6].default,c=E(n,a,a[5],null),o=c||A(a);return{c(){e=C("div"),o&&o.c(),this.h()},l(i){e=z(i,"DIV",{class:!0});var t=I(e);o&&o.l(t),t.forEach(m),this.h()},h(){d(e,"class",l=b(`aura-icon ${a[3].class??""}`)+" svelte-o7bcpa"),f(e,"isLarge",a[0]==="large"),f(e,"isMedium",a[0]==="medium"),f(e,"isSmall",a[0]==="small")},m(i,t){_(i,e,t),o&&o.m(e,null),s=!0},p(i,[t]){c?c.p&&(!s||t&32)&&L(c,n,i,i[5],s?j(n,i[5],t,null):M(i[5]),null):o&&o.p&&(!s||t&7)&&o.p(i,s?t:-1),(!s||t&8&&l!==(l=b(`aura-icon ${i[3].class??""}`)+" svelte-o7bcpa"))&&d(e,"class",l),(!s||t&9)&&f(e,"isLarge",i[0]==="large"),(!s||t&9)&&f(e,"isMedium",i[0]==="medium"),(!s||t&9)&&f(e,"isSmall",i[0]==="small")},i(i){s||(q(o,i),s=!0)},o(i){N(o,i),s=!1},d(i){i&&m(e),o&&o.d(i)}}}function F(a,e,l){let s;const n=["forceColor","size","name"];let c=y(e,n),{$$slots:o={},$$scope:i}=e,{forceColor:t=!1}=e,{size:p="medium"}=e,{name:u=void 0}=e;return a.$$set=r=>{e=v(v({},e),P(r)),l(3,c=y(e,n)),"forceColor"in r&&l(4,t=r.forceColor),"size"in r&&l(0,p=r.size),"name"in r&&l(1,u=r.name),"$$scope"in r&&l(5,i=r.$$scope)},a.$$.update=()=>{a.$$.dirty&18&&l(2,s=(u==null?void 0:u.includes("-color"))||t)},[p,u,s,c,t,i,o]}class G extends S{constructor(e){super(),V(this,e,F,B,D,{forceColor:4,size:0,name:1})}}G.__docgen={version:3,name:"icon.svelte",data:[{visibility:"public",description:null,keywords:[],name:"forceColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{G as I};