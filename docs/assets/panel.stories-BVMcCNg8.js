import{S as N,i as O,s as z,k as G,x as U,u as H,l as J,o as K,t as d,b as g,v as C,e as j,j as Q,c as _,a as $,m as P,d as v}from"./index-NJt023ZH.js";import{e as B,f as R,g as V,d as c,m as T,r as q,h as y,i as h,j as L,s as b,c as k,t as D,a as E,b as W}from"./lifecycle-BlJB78Bc.js";import{g as X,a as Y}from"./spread-CgU5AtxT.js";import{c as M}from"./index-DUolvyrz.js";import{p as Z,T as x,S as A}from"./collect-stories-CfamzWmd.js";import{B as ee}from"./button-C0RPSIv6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./progress-ring-CHSOnvpd.js";const te=["top","bottom","right","left"];function se(p){let e,s,o,i;const m=p[6].default,l=G(m,p,p[5],null);return{c(){e=B("div"),s=B("div"),l&&l.c(),this.h()},l(n){e=R(n,"DIV",{class:!0});var a=V(e);s=R(a,"DIV",{class:!0});var r=V(s);l&&l.l(r),r.forEach(c),a.forEach(c),this.h()},h(){T(s,"class","internal-wrapper svelte-1h21dae"),T(e,"class",o=U(M("panel",p[0],p[4].class))+" svelte-1h21dae"),q(e,"open",p[3]),y(e,"--width",["right","left"].includes(p[0])?p[1]:"100%"),y(e,"--height",["top","bottom"].includes(p[0])?p[2]:"100%")},m(n,a){h(n,e,a),L(e,s),l&&l.m(s,null),i=!0},p(n,[a]){l&&l.p&&(!i||a&32)&&H(l,m,n,n[5],i?K(m,n[5],a,null):J(n[5]),null),(!i||a&17&&o!==(o=U(M("panel",n[0],n[4].class))+" svelte-1h21dae"))&&T(e,"class",o),(!i||a&25)&&q(e,"open",n[3]),a&3&&y(e,"--width",["right","left"].includes(n[0])?n[1]:"100%"),a&5&&y(e,"--height",["top","bottom"].includes(n[0])?n[2]:"100%")},i(n){i||(d(l,n),i=!0)},o(n){g(l,n),i=!1},d(n){n&&c(e),l&&l.d(n)}}}function ae(p,e,s){const o=["placement","width","height","open"];let i=C(e,o),{$$slots:m={},$$scope:l}=e,{placement:n="right"}=e,{width:a="41%"}=e,{height:r="41%"}=e,{open:u=!1}=e;return p.$$set=t=>{e=j(j({},e),Q(t)),s(4,i=C(e,o)),"placement"in t&&s(0,n=t.placement),"width"in t&&s(1,a=t.width),"height"in t&&s(2,r=t.height),"open"in t&&s(3,u=t.open),"$$scope"in t&&s(5,l=t.$$scope)},[n,a,r,u,i,l,m]}class I extends N{constructor(e){super(),O(this,e,ae,se,z,{placement:0,width:1,height:2,open:3})}}I.__docgen={version:3,name:"panel.svelte",data:[{visibility:"public",description:null,keywords:[],name:"placement",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"right"},{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"41%"},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"41%"},{visibility:"public",description:null,keywords:[],name:"open",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ne(p){let e;return{c(){e=D("Toggle Panel")},l(s){e=E(s,"Toggle Panel")},m(s,o){h(s,e,o)},d(s){s&&c(e)}}}function le(p){let e,s=p[2].placement.charAt(0).toUpperCase()+p[2].placement.slice(1)+"",o,i;return{c(){e=B("div"),o=D(s),i=D(" Aura Panel"),this.h()},l(m){e=R(m,"DIV",{class:!0});var l=V(e);o=E(l,s),i=E(l," Aura Panel"),l.forEach(c),this.h()},h(){T(e,"class","panel-content svelte-fke7p")},m(m,l){h(m,e,l),L(e,o),L(e,i)},p(m,l){l&4&&s!==(s=m[2].placement.charAt(0).toUpperCase()+m[2].placement.slice(1)+"")&&W(o,s)},d(m){m&&c(e)}}}function oe(p){let e,s,o,i,m;s=new ee({props:{class:`${p[2].placement}-button`,$$slots:{default:[ne]},$$scope:{ctx:p}}}),s.$on("click",p[1]);const l=[p[2],{open:p[0]}];let n={$$slots:{default:[le]},$$scope:{ctx:p}};for(let a=0;a<l.length;a+=1)n=j(n,l[a]);return i=new I({props:n}),{c(){e=B("div"),_(s.$$.fragment),o=b(),_(i.$$.fragment),this.h()},l(a){e=R(a,"DIV",{style:!0});var r=V(e);$(s.$$.fragment,r),o=k(r),$(i.$$.fragment,r),r.forEach(c),this.h()},h(){y(e,"height","100%"),y(e,"min-height","250px"),y(e,"width","100%")},m(a,r){h(a,e,r),P(s,e,null),L(e,o),P(i,e,null),m=!0},p(a,r){const u={};r&4&&(u.class=`${a[2].placement}-button`),r&8&&(u.$$scope={dirty:r,ctx:a}),s.$set(u);const t=r&5?X(l,[r&4&&Y(a[2]),r&1&&{open:a[0]}]):{};r&12&&(t.$$scope={dirty:r,ctx:a}),i.$set(t)},i(a){m||(d(s.$$.fragment,a),d(i.$$.fragment,a),m=!0)},o(a){g(s.$$.fragment,a),g(i.$$.fragment,a),m=!1},d(a){a&&c(e),v(s),v(i)}}}function ie(p){let e,s,o,i,m,l,n,a,r,u;return e=new x({props:{$$slots:{default:[oe,({args:t})=>({2:t}),({args:t})=>t?4:0]},$$scope:{ctx:p}}}),o=new A({props:{name:"Right Panel",args:{placement:"right"}}}),m=new A({props:{name:"Left Panel",args:{placement:"left"}}}),n=new A({props:{name:"Top Panel",args:{placement:"top"}}}),r=new A({props:{name:"Bottom Panel",args:{placement:"bottom"}}}),{c(){_(e.$$.fragment),s=b(),_(o.$$.fragment),i=b(),_(m.$$.fragment),l=b(),_(n.$$.fragment),a=b(),_(r.$$.fragment)},l(t){$(e.$$.fragment,t),s=k(t),$(o.$$.fragment,t),i=k(t),$(m.$$.fragment,t),l=k(t),$(n.$$.fragment,t),a=k(t),$(r.$$.fragment,t)},m(t,f){P(e,t,f),h(t,s,f),P(o,t,f),h(t,i,f),P(m,t,f),h(t,l,f),P(n,t,f),h(t,a,f),P(r,t,f),u=!0},p(t,[f]){const S={};f&13&&(S.$$scope={dirty:f,ctx:t}),e.$set(S)},i(t){u||(d(e.$$.fragment,t),d(o.$$.fragment,t),d(m.$$.fragment,t),d(n.$$.fragment,t),d(r.$$.fragment,t),u=!0)},o(t){g(e.$$.fragment,t),g(o.$$.fragment,t),g(m.$$.fragment,t),g(n.$$.fragment,t),g(r.$$.fragment,t),u=!1},d(t){t&&(c(s),c(i),c(l),c(a)),v(e,t),v(o,t),v(m,t),v(n,t),v(r,t)}}}const re={title:"AURA/Panel",component:I,tags:["autodocs"],argTypes:{placement:{control:"select",options:te}}};function pe(p,e,s){let o;const i=()=>{s(0,o=!o)};return s(0,o=!0),[o,i]}class F extends N{constructor(e){super(),O(this,e,pe,ie,z,{})}}F.__docgen={version:3,name:"panel.stories.svelte",data:[{visibility:"public",description:null,keywords:[],name:"meta",kind:"const",static:!0,readonly:!0,type:{kind:"type",text:"object",type:"object"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const w=Z(F,{meta:{title:"AURA/Panel",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:`<div style="height: 100%; min-height: 250px; width: 100%;">
 <Button on:click={() => { open = !open}} class={\`\${args.placement}-button\`}>Toggle Panel</Button>
 <Panel {...args} {open}>
	<div class="panel-content">
		{args.placement.charAt(0).toUpperCase() + args.placement.slice(1)} Aura Panel
	</div>
</Panel>
 </div>`,hasArgs:!0},RightPanel:{name:"Right Panel",template:!1,source:"",hasArgs:!1},LeftPanel:{name:"Left Panel",template:!1,source:"",hasArgs:!1},TopPanel:{name:"Top Panel",template:!1,source:"",hasArgs:!1},BottomPanel:{name:"Bottom Panel",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template","Button"]},re),$e=w.meta,Pe=["RightPanel","LeftPanel","TopPanel","BottomPanel"],ve=w.stories.RightPanel,ye=w.stories.LeftPanel,be=w.stories.TopPanel,ke=w.stories.BottomPanel;export{ke as BottomPanel,ye as LeftPanel,ve as RightPanel,be as TopPanel,Pe as __namedExportsOrder,$e as default};
