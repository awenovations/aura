import{S as v,i as g,s as C,k as w,u as z,l as I,o as S,t as V,b as q}from"./index-Z7pl1jYh.js";import{e as b,a as y,b as k,d as c,k as h,q as r,i as d,v as m,f as _}from"./lifecycle-zH-0-4js.js";function p(t){let l;return{c(){l=b("div"),this.h()},l(e){l=y(e,"DIV",{class:!0}),k(l).forEach(c),this.h()},h(){h(l,"class","icon svelte-o7bcpa"),r(l,"color",t[2]),_(l,"--icon-url",`url('../icons/${t[1]}-${t[0]}.svg')`)},m(e,i){d(e,l,i)},p(e,i){i&4&&r(l,"color",e[2]),i&3&&_(l,"--icon-url",`url('../icons/${e[1]}-${e[0]}.svg')`)},d(e){e&&c(l)}}}function D(t){let l,e=t[1]&&p(t);return{c(){e&&e.c(),l=m()},l(i){e&&e.l(i),l=m()},m(i,n){e&&e.m(i,n),d(i,l,n)},p(i,n){i[1]?e?e.p(i,n):(e=p(i),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(i){i&&c(l),e&&e.d(i)}}}function E(t){let l,e;const i=t[5].default,n=w(i,t,t[4],null),o=n||D(t);return{c(){l=b("div"),o&&o.c(),this.h()},l(s){l=y(s,"DIV",{class:!0});var a=k(l);o&&o.l(a),a.forEach(c),this.h()},h(){h(l,"class","aura-icon svelte-o7bcpa"),r(l,"isLarge",t[0]==="large"),r(l,"isMedium",t[0]==="medium"),r(l,"isSmall",t[0]==="small")},m(s,a){d(s,l,a),o&&o.m(l,null),e=!0},p(s,[a]){n?n.p&&(!e||a&16)&&z(n,i,s,s[4],e?S(i,s[4],a,null):I(s[4]),null):o&&o.p&&(!e||a&7)&&o.p(s,e?a:-1),(!e||a&1)&&r(l,"isLarge",s[0]==="large"),(!e||a&1)&&r(l,"isMedium",s[0]==="medium"),(!e||a&1)&&r(l,"isSmall",s[0]==="small")},i(s){e||(V(o,s),e=!0)},o(s){q(o,s),e=!1},d(s){s&&c(l),o&&o.d(s)}}}function L(t,l,e){let i,{$$slots:n={},$$scope:o}=l,{forceColor:s=!1}=l,{size:a="medium"}=l,{name:u=void 0}=l;return t.$$set=f=>{"forceColor"in f&&e(3,s=f.forceColor),"size"in f&&e(0,a=f.size),"name"in f&&e(1,u=f.name),"$$scope"in f&&e(4,o=f.$$scope)},t.$$.update=()=>{t.$$.dirty&10&&e(2,i=(u==null?void 0:u.includes("-color"))||s)},[a,u,i,s,o,n]}class M extends v{constructor(l){super(),g(this,l,L,E,C,{forceColor:3,size:0,name:1})}}M.__docgen={version:3,name:"icon.svelte",data:[{visibility:"public",description:null,keywords:[],name:"forceColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{M as I};
