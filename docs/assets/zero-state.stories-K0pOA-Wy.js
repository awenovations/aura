import{S as x,i as D,s as z,n as Z,c as p,a as $,m as _,t as g,b as h,d as v}from"./index-C5DZbSfd.js";import{e as c,s as A,t as E,f,g as u,d as i,c as w,a as I,m as d,i as b,j as m,b as T}from"./lifecycle-D41BJhRp.js";import{p as V,T as N,S as R}from"./collect-stories-CK8_dNu1.js";function U(l){let e,a,t,r,s;return{c(){e=c("div"),a=c("div"),t=A(),r=c("div"),s=E(l[0]),this.h()},l(o){e=f(o,"DIV",{class:!0});var n=u(e);a=f(n,"DIV",{class:!0}),u(a).forEach(i),t=w(n),r=f(n,"DIV",{class:!0});var y=u(r);s=I(y,l[0]),y.forEach(i),n.forEach(i),this.h()},h(){d(a,"class","zero-state-graphic svelte-1hx3oe2"),d(r,"class","zero-state-message svelte-1hx3oe2"),d(e,"class","aura-zero-state svelte-1hx3oe2")},m(o,n){b(o,e,n),m(e,a),m(e,t),m(e,r),m(r,s)},p(o,[n]){n&1&&T(s,o[0])},i:Z,o:Z,d(o){o&&i(e)}}}function j(l,e,a){let{message:t="No results"}=e;return l.$$set=r=>{"message"in r&&a(0,t=r.message)},[t]}class S extends x{constructor(e){super(),D(this,e,j,U,z,{message:0})}}S.__docgen={version:3,name:"zero-state.svelte",data:[{visibility:"public",description:null,keywords:[],name:"message",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"No results"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function q(l){let e,a;return e=new S({}),{c(){p(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,r){_(e,t,r),a=!0},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){v(e,t)}}}function C(l){let e,a,t,r;return e=new N({props:{$$slots:{default:[q]},$$scope:{ctx:l}}}),t=new R({props:{name:"Default ZeroState"}}),{c(){p(e.$$.fragment),a=A(),p(t.$$.fragment)},l(s){$(e.$$.fragment,s),a=w(s),$(t.$$.fragment,s)},m(s,o){_(e,s,o),b(s,a,o),_(t,s,o),r=!0},p(s,[o]){const n={};o&1&&(n.$$scope={dirty:o,ctx:s}),e.$set(n)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){h(e.$$.fragment,s),h(t.$$.fragment,s),r=!1},d(s){s&&i(a),v(e,s),v(t,s)}}}const M={title:"AURA/Zero State",component:S,tags:["autodocs"],argTypes:{}};class O extends x{constructor(e){super(),D(this,e,null,C,z,{})}}const k=V(O,{meta:{title:"AURA/Zero State",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:"<ZeroState />",hasArgs:!1},DefaultZeroState:{name:"Default ZeroState",template:!1,source:"",hasArgs:!1}},allocatedIds:["default","Story","Template"]},M),H=k.meta,J=["DefaultZeroState"],K=k.stories.DefaultZeroState;export{K as DefaultZeroState,J as __namedExportsOrder,H as default};