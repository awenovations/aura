import{S as z,i as R,s as U,c as $,a as f,m as p,t as i,b as u,d as m,e as k,n as v}from"./index-DcJkAbeO.js";import{s as w,c as D,i as h,d as x,e as F,f as C,k as S,m as E}from"./lifecycle-BlJB78Bc.js";import{g as O,a as B}from"./spread-CgU5AtxT.js";import{T as b}from"./text-field-Bm7iE1bW.js";import{p as G,T as H,S as L}from"./collect-stories-7lN-1jPy.js";import"./index-DUolvyrz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./form-item-BuRv7Cki.js";function J(o){let e,r;const t=[o[0],{placeholder:"Placeholder..."}];let a={};for(let l=0;l<t.length;l+=1)a=k(a,t[l]);return e=new b({props:a}),{c(){$(e.$$.fragment)},l(l){f(e.$$.fragment,l)},m(l,d){p(e,l,d),r=!0},p(l,d){const c=d&1?O(t,[B(l[0]),t[1]]):{};e.$set(c)},i(l){r||(i(e.$$.fragment,l),r=!0)},o(l){u(e.$$.fragment,l),r=!1},d(l){m(e,l)}}}function K(o){let e,r;return e=new b({props:{disabled:!0,placeholder:"Placeholder..."}}),{c(){$(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){p(e,t,a),r=!0},p:v,i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){m(e,t)}}}function Q(o){let e,r="Something went wrong here!";return{c(){e=F("span"),e.textContent=r,this.h()},l(t){e=C(t,"SPAN",{slot:!0,"data-svelte-h":!0}),S(e)!=="svelte-1u23qjy"&&(e.textContent=r),this.h()},h(){E(e,"slot","errors")},m(t,a){h(t,e,a)},p:v,d(t){t&&x(e)}}}function V(o){let e,r;return e=new b({props:{placeholder:"Placeholder...",showErrors:!0,$$slots:{errors:[Q]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){p(e,t,a),r=!0},p(t,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){m(e,t)}}}function W(o){let e,r="Label";return{c(){e=F("span"),e.textContent=r,this.h()},l(t){e=C(t,"SPAN",{slot:!0,"data-svelte-h":!0}),S(e)!=="svelte-j26irz"&&(e.textContent=r),this.h()},h(){E(e,"slot","label")},m(t,a){h(t,e,a)},p:v,d(t){t&&x(e)}}}function X(o){let e,r;return e=new b({props:{placeholder:"Placeholder...",$$slots:{label:[W]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){p(e,t,a),r=!0},p(t,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){m(e,t)}}}function Y(o){let e,r="Label";return{c(){e=F("span"),e.textContent=r,this.h()},l(t){e=C(t,"SPAN",{slot:!0,"data-svelte-h":!0}),S(e)!=="svelte-j26irz"&&(e.textContent=r),this.h()},h(){E(e,"slot","label")},m(t,a){h(t,e,a)},p:v,d(t){t&&x(e)}}}function Z(o){let e,r;return e=new b({props:{height:"100px",value:"Test thing",type:"multi",placeholder:"Placeholder...",$$slots:{label:[Y]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){p(e,t,a),r=!0},p(t,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){r||(i(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){m(e,t)}}}function ee(o){let e,r,t,a,l,d,c,A,g,I,_,P;return e=new H({props:{$$slots:{default:[J,({args:s})=>({0:s}),({args:s})=>s?1:0]},$$scope:{ctx:o}}}),t=new L({props:{name:"Default input"}}),l=new L({props:{name:"Disabled input",$$slots:{default:[K]},$$scope:{ctx:o}}}),c=new L({props:{name:"Error'd input",$$slots:{default:[V]},$$scope:{ctx:o}}}),g=new L({props:{name:"Label",$$slots:{default:[X]},$$scope:{ctx:o}}}),_=new L({props:{name:"Multi Line",$$slots:{default:[Z]},$$scope:{ctx:o}}}),{c(){$(e.$$.fragment),r=w(),$(t.$$.fragment),a=w(),$(l.$$.fragment),d=w(),$(c.$$.fragment),A=w(),$(g.$$.fragment),I=w(),$(_.$$.fragment)},l(s){f(e.$$.fragment,s),r=D(s),f(t.$$.fragment,s),a=D(s),f(l.$$.fragment,s),d=D(s),f(c.$$.fragment,s),A=D(s),f(g.$$.fragment,s),I=D(s),f(_.$$.fragment,s)},m(s,n){p(e,s,n),h(s,r,n),p(t,s,n),h(s,a,n),p(l,s,n),h(s,d,n),p(c,s,n),h(s,A,n),p(g,s,n),h(s,I,n),p(_,s,n),P=!0},p(s,[n]){const M={};n&3&&(M.$$scope={dirty:n,ctx:s}),e.$set(M);const y={};n&2&&(y.$$scope={dirty:n,ctx:s}),l.$set(y);const j={};n&2&&(j.$$scope={dirty:n,ctx:s}),c.$set(j);const N={};n&2&&(N.$$scope={dirty:n,ctx:s}),g.$set(N);const q={};n&2&&(q.$$scope={dirty:n,ctx:s}),_.$set(q)},i(s){P||(i(e.$$.fragment,s),i(t.$$.fragment,s),i(l.$$.fragment,s),i(c.$$.fragment,s),i(g.$$.fragment,s),i(_.$$.fragment,s),P=!0)},o(s){u(e.$$.fragment,s),u(t.$$.fragment,s),u(l.$$.fragment,s),u(c.$$.fragment,s),u(g.$$.fragment,s),u(_.$$.fragment,s),P=!1},d(s){s&&(x(r),x(a),x(d),x(A),x(I)),m(e,s),m(t,s),m(l,s),m(c,s),m(g,s),m(_,s)}}}const te={title:"AURA/Text Field",component:b,tags:["autodocs"],argTypes:{}};class se extends z{constructor(e){super(),R(this,e,null,ee,U,{})}}const T=G(se,{meta:{title:"AURA/Text Field",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:'<TextField {...args} placeholder="Placeholder..." />',hasArgs:!0},DefaultInput:{name:"Default input",template:!1,source:"",hasArgs:!1},DisabledInput:{name:"Disabled input",template:!1,source:'<TextField disabled={true} placeholder="Placeholder..." />',hasArgs:!1},ErrorDInput:{name:"Error'd input",template:!1,source:`<TextField placeholder="Placeholder..." showErrors
	><span slot="errors">Something went wrong here!</span></TextField
>`,hasArgs:!1},Label:{name:"Label",template:!1,source:`<TextField placeholder="Placeholder...">
  <span slot="label">Label</span>
</TextField>`,hasArgs:!1},MultiLine:{name:"Multi Line",template:!1,source:`<TextField height='100px' value="Test thing" type="multi" placeholder="Placeholder...">
  <span slot="label">Label</span>
</TextField>`,hasArgs:!1}},allocatedIds:["default","Story","Template"]},te),ie=T.meta,ue=["DefaultInput","DisabledInput","ErrorDInput","Label","MultiLine"],me=T.stories.DefaultInput,ce=T.stories.DisabledInput,de=T.stories.ErrorDInput,ge=T.stories.Label,_e=T.stories.MultiLine;export{me as DefaultInput,ce as DisabledInput,de as ErrorDInput,ge as Label,_e as MultiLine,ue as __namedExportsOrder,ie as default};