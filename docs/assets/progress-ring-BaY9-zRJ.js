import{S as o,i as l,s as c,n}from"./index-BHAyaIoL.js";import{e as d,f as v,k as y,m,r as a,i as u,d as p}from"./lifecycle-D41BJhRp.js";function g(t){let e,i='<svg viewBox="0 0 48 48" class="svelte-z4uqo6"><circle class="aura-progress-ring__arc svelte-z4uqo6"></circle><circle class="aura-progress-ring__circle svelte-z4uqo6"></circle></svg>';return{c(){e=d("div"),e.innerHTML=i,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-d176wy"&&(e.innerHTML=i),this.h()},h(){m(e,"class","aura-progress-ring svelte-z4uqo6"),a(e,"isPrimary",t[0]==="primary"),a(e,"isSecondary",t[0]==="secondary"),a(e,"isTertiary",t[0]==="tertiary")},m(s,r){u(s,e,r)},p(s,[r]){r&1&&a(e,"isPrimary",s[0]==="primary"),r&1&&a(e,"isSecondary",s[0]==="secondary"),r&1&&a(e,"isTertiary",s[0]==="tertiary")},i:n,o:n,d(s){s&&p(e)}}}function f(t,e,i){let{variant:s}=e;return t.$$set=r=>{"variant"in r&&i(0,s=r.variant)},[s]}class _ extends o{constructor(e){super(),l(this,e,f,g,c,{variant:0})}}_.__docgen={version:3,name:"progress-ring.svelte",data:[{visibility:"public",description:null,keywords:[],name:"variant",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{_ as P};