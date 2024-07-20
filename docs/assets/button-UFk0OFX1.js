import{S as H,i as J,s as K,q as B,u as E,r as I,v as P,t as g,b as z,e as T,j as Q,k as R,l as w,p as X,c as Y,a as Z,m as x,d as $}from"./index-DugT0KW2.js";import{e as C,a as W,b as q,d as k,k as O,u as n,i as V,p as A,f as F,s as L,c as M,r as N,g as D,v as ee,q as le,t as ie,l as te}from"./lifecycle-WtsT-gpG.js";import{g as se}from"./spread-CgU5AtxT.js";import{P as ae}from"./progress-ring-BRrKBndJ.js";function j(i){let e;return{c(){e=C("div"),this.h()},l(l){e=W(l,"DIV",{class:!0}),q(e).forEach(k),this.h()},h(){O(e,"class","icon svelte-o7bcpa"),n(e,"color",i[2]),F(e,"--icon-url",`url('../icons/${i[1]}-${i[0]}.svg')`)},m(l,t){V(l,e,t)},p(l,t){t&4&&n(e,"color",l[2]),t&3&&F(e,"--icon-url",`url('../icons/${l[1]}-${l[0]}.svg')`)},d(l){l&&k(e)}}}function ne(i){let e,l=i[1]&&j(i);return{c(){l&&l.c(),e=A()},l(t){l&&l.l(t),e=A()},m(t,f){l&&l.m(t,f),V(t,e,f)},p(t,f){t[1]?l?l.p(t,f):(l=j(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){t&&k(e),l&&l.d(t)}}}function oe(i){let e,l;const t=i[5].default,f=B(t,i,i[4],null),o=f||ne(i);return{c(){e=C("div"),o&&o.c(),this.h()},l(a){e=W(a,"DIV",{class:!0});var r=q(e);o&&o.l(r),r.forEach(k),this.h()},h(){O(e,"class","aura-icon svelte-o7bcpa"),n(e,"isLarge",i[0]==="large"),n(e,"isMedium",i[0]==="medium"),n(e,"isSmall",i[0]==="small")},m(a,r){V(a,e,r),o&&o.m(e,null),l=!0},p(a,[r]){f?f.p&&(!l||r&16)&&E(f,t,a,a[4],l?P(t,a[4],r,null):I(a[4]),null):o&&o.p&&(!l||r&7)&&o.p(a,l?r:-1),(!l||r&1)&&n(e,"isLarge",a[0]==="large"),(!l||r&1)&&n(e,"isMedium",a[0]==="medium"),(!l||r&1)&&n(e,"isSmall",a[0]==="small")},i(a){l||(g(o,a),l=!0)},o(a){z(o,a),l=!1},d(a){a&&k(e),o&&o.d(a)}}}function fe(i,e,l){let t,{$$slots:f={},$$scope:o}=e,{forceColor:a=!1}=e,{size:r="medium"}=e,{name:b=void 0}=e;return i.$$set=m=>{"forceColor"in m&&l(3,a=m.forceColor),"size"in m&&l(0,r=m.size),"name"in m&&l(1,b=m.name),"$$scope"in m&&l(4,o=m.$$scope)},i.$$.update=()=>{i.$$.dirty&10&&l(2,t=(b==null?void 0:b.includes("-color"))||a)},[r,b,t,a,o,f]}class re extends H{constructor(e){super(),J(this,e,fe,oe,K,{forceColor:3,size:0,name:1})}}re.__docgen={version:3,name:"icon.svelte",data:[{visibility:"public",description:null,keywords:[],name:"forceColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const ue=i=>({}),U=i=>({});function de(i){let e;return{c(){e=ie("Aura Button")},l(l){e=te(l,"Aura Button")},m(l,t){V(l,e,t)},d(l){l&&k(e)}}}function G(i){let e,l;return e=new ae({props:{variant:i[1]}}),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,f){x(e,t,f),l=!0},p(t,f){const o={};f&2&&(o.variant=t[1]),e.$set(o)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){$(e,t)}}}function ce(i){let e,l,t,f,o,a,r,b;const m=i[9]["icon-before"],c=B(m,i,i[8],U),v=i[9].default,p=B(v,i,i[8],null),_=p||de();let u=i[4]&&G(i),d=[i[7],{class:o=`aura-button ${i[7].class}`}],S={};for(let s=0;s<d.length;s+=1)S=T(S,d[s]);return{c(){e=C("button"),l=C("div"),c&&c.c(),t=L(),_&&_.c(),f=L(),u&&u.c(),this.h()},l(s){e=W(s,"BUTTON",{class:!0});var y=q(e);l=W(y,"DIV",{class:!0});var h=q(l);c&&c.l(h),t=M(h),_&&_.l(h),f=M(h),u&&u.l(h),h.forEach(k),y.forEach(k),this.h()},h(){O(l,"class","content svelte-1kgqi99"),N(e,S),n(e,"loading",i[4]),n(e,"isFilled",i[0]==="filled"),n(e,"isOutlined",i[0]==="outlined"),n(e,"isPrimary",i[1]==="primary"),n(e,"isSecondary",i[1]==="secondary"),n(e,"isTertiary",i[1]==="tertiary"),n(e,"isDefaultSize",i[2]==="default"),n(e,"isSmall",i[2]==="small"),n(e,"fullWidth",i[3]),n(e,"left",i[5]),n(e,"svelte-1kgqi99",!0)},m(s,y){V(s,e,y),D(e,l),c&&c.m(l,null),D(l,t),_&&_.m(l,null),D(l,f),u&&u.m(l,null),e.autofocus&&e.focus(),a=!0,r||(b=ee(e,"click",i[6]),r=!0)},p(s,[y]){c&&c.p&&(!a||y&256)&&E(c,m,s,s[8],a?P(m,s[8],y,ue):I(s[8]),U),p&&p.p&&(!a||y&256)&&E(p,v,s,s[8],a?P(v,s[8],y,null):I(s[8]),null),s[4]?u?(u.p(s,y),y&16&&g(u,1)):(u=G(s),u.c(),g(u,1),u.m(l,null)):u&&(Q(),z(u,1,1,()=>{u=null}),R()),N(e,S=se(d,[y&128&&s[7],(!a||y&128&&o!==(o=`aura-button ${s[7].class}`))&&{class:o}])),n(e,"loading",s[4]),n(e,"isFilled",s[0]==="filled"),n(e,"isOutlined",s[0]==="outlined"),n(e,"isPrimary",s[1]==="primary"),n(e,"isSecondary",s[1]==="secondary"),n(e,"isTertiary",s[1]==="tertiary"),n(e,"isDefaultSize",s[2]==="default"),n(e,"isSmall",s[2]==="small"),n(e,"fullWidth",s[3]),n(e,"left",s[5]),n(e,"svelte-1kgqi99",!0)},i(s){a||(g(c,s),g(_,s),g(u),a=!0)},o(s){z(c,s),z(_,s),z(u),a=!1},d(s){s&&k(e),c&&c.d(s),_&&_.d(s),u&&u.d(),r=!1,b()}}}function me(i,e,l){const t=["kind","variant","size","fullWidth","loading","left"];let f=w(e,t),{$$slots:o={},$$scope:a}=e,{kind:r="filled"}=e,{variant:b="primary"}=e,{size:m="default"}=e,{fullWidth:c=!1}=e,{loading:v=!1}=e,{left:p=!1}=e;const _=le();function u(d){_("click",d)}return i.$$set=d=>{e=T(T({},e),X(d)),l(7,f=w(e,t)),"kind"in d&&l(0,r=d.kind),"variant"in d&&l(1,b=d.variant),"size"in d&&l(2,m=d.size),"fullWidth"in d&&l(3,c=d.fullWidth),"loading"in d&&l(4,v=d.loading),"left"in d&&l(5,p=d.left),"$$scope"in d&&l(8,a=d.$$scope)},[r,b,m,c,v,p,u,f,a,o]}class ye extends H{constructor(e){super(),J(this,e,me,ce,K,{kind:0,variant:1,size:2,fullWidth:3,loading:4,left:5})}}ye.__docgen={version:3,name:"button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"kind",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"filled"},{visibility:"public",description:null,keywords:[],name:"variant",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"primary"},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"default"},{visibility:"public",description:null,keywords:[],name:"fullWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"loading",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"left",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"click"}],slots:[{keywords:[],visibility:"public",description:"",name:"icon-before"},{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};export{ye as B,re as I};