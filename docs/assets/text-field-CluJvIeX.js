import{S as ce,i as pe,s as me,f as F,g as U,c as B,a as S,m as C,h as G,t as p,j as ee,b as _,k as te,d as H,l as J,o as _e,e as P,p as he,q,u as E,r as I,v as T,w as ye}from"./index-DugT0KW2.js";import{s as ie,p as D,c as se,i as w,d as b,q as be,e as V,a as z,b as W,r as K,u as O,k as j,g as A,v as h}from"./lifecycle-WtsT-gpG.js";import{g as ge}from"./spread-CgU5AtxT.js";import{B as ke,I as ve}from"./button-BvPF4zSk.js";import{F as we}from"./form-item-Dt_f2P7t.js";const qe=l=>({}),Q=l=>({}),Ee=l=>({}),R=l=>({}),Ie=l=>({}),X=l=>({slot:"left-icon"}),Te=l=>({}),Y=l=>({slot:"right-icon"}),Ve=l=>({}),Z=l=>({slot:"label"});function ze(l){let e,s,t,i,n,f,g,k,m=[l[15],{class:t=`aura-input ${l[15].class}`},{disabled:l[2]},{type:l[3]},{value:l[0]}],a={};for(let r=0;r<m.length;r+=1)a=P(a,m[r]);const o=l[16].extra,u=q(o,l,l[21],R);return{c(){e=V("div"),s=V("input"),i=ie(),n=V("div"),u&&u.c(),this.h()},l(r){e=z(r,"DIV",{class:!0});var c=W(e);s=z(c,"INPUT",{class:!0,type:!0}),i=se(c),n=z(c,"DIV",{class:!0});var v=W(n);u&&u.l(v),v.forEach(b),c.forEach(b),this.h()},h(){K(s,a),O(s,"svelte-dd551c",!0),j(n,"class","extra svelte-dd551c"),j(e,"class","input-container svelte-dd551c")},m(r,c){w(r,e,c),A(e,s),"value"in a&&(s.value=a.value),s.autofocus&&s.focus(),l[18](s),A(e,i),A(e,n),u&&u.m(n,null),f=!0,g||(k=[h(s,"change",l[11]),h(s,"input",l[13]),h(s,"input",l[11]),h(s,"focus",l[11]),h(s,"blur",l[11]),h(s,"keydown",l[11]),h(s,"keypress",l[11]),h(s,"keyup",l[11]),h(s,"focusin",l[11]),h(s,"focusout",l[11])],g=!0)},p(r,c){K(s,a=ge(m,[c&32768&&r[15],(!f||c&32768&&t!==(t=`aura-input ${r[15].class}`))&&{class:t},(!f||c&4)&&{disabled:r[2]},(!f||c&8)&&{type:r[3]},(!f||c&1&&s.value!==r[0])&&{value:r[0]}])),"value"in a&&(s.value=a.value),O(s,"svelte-dd551c",!0),u&&u.p&&(!f||c&2097152)&&E(u,o,r,r[21],f?T(o,r[21],c,Ee):I(r[21]),R)},i(r){f||(p(u,r),f=!0)},o(r){_(u,r),f=!1},d(r){r&&b(e),l[18](null),u&&u.d(r),g=!1,ye(k)}}}function De(l){let e;const s=l[16]["left-icon"],t=q(s,l,l[21],X);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,n){t&&t.m(i,n),e=!0},p(i,n){t&&t.p&&(!e||n&2097152)&&E(t,s,i,i[21],e?T(s,i[21],n,Ie):I(i[21]),X)},i(i){e||(p(t,i),e=!0)},o(i){_(t,i),e=!1},d(i){t&&t.d(i)}}}function $(l){let e,s;return e=new ke({props:{kind:"plain-faint",$$slots:{default:[Ne]},$$scope:{ctx:l}}}),e.$on("click",l[17]),{c(){B(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,i){C(e,t,i),s=!0},p(t,i){const n={};i&2097160&&(n.$$scope={dirty:i,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function Ne(l){let e,s;return e=new ve({props:{name:l[12][l[3]]}}),{c(){B(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,i){C(e,t,i),s=!0},p(t,i){const n={};i&8&&(n.name=t[12][t[3]]),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function Ae(l){let e,s,t=l[12][l[3]]&&$(l);return{c(){t&&t.c(),e=D()},l(i){t&&t.l(i),e=D()},m(i,n){t&&t.m(i,n),w(i,e,n),s=!0},p(i,n){i[12][i[3]]?t?(t.p(i,n),n&8&&p(t,1)):(t=$(i),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(ee(),_(t,1,1,()=>{t=null}),te())},i(i){s||(p(t),s=!0)},o(i){_(t),s=!1},d(i){i&&b(e),t&&t.d(i)}}}function Fe(l){let e;const s=l[16]["right-icon"],t=q(s,l,l[21],Y),i=t||Ae(l);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,f){i&&i.m(n,f),e=!0},p(n,f){t?t.p&&(!e||f&2097152)&&E(t,s,n,n[21],e?T(s,n[21],f,Te):I(n[21]),Y):i&&i.p&&(!e||f&520)&&i.p(n,e?f:-1)},i(n){e||(p(i,n),e=!0)},o(n){_(i,n),e=!1},d(n){i&&i.d(n)}}}function Pe(l){let e;const s=l[16].default,t=q(s,l,l[21],Z);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,n){t&&t.m(i,n),e=!0},p(i,n){t&&t.p&&(!e||n&2097152)&&E(t,s,i,i[21],e?T(s,i[21],n,Ve):I(i[21]),Z)},i(i){e||(p(t,i),e=!0)},o(i){_(t,i),e=!1},d(i){t&&t.d(i)}}}function x(l){let e,s;const t=l[16].errors,i=q(t,l,l[21],Q);return{c(){e=V("div"),i&&i.c(),this.h()},l(n){e=z(n,"DIV",{class:!0});var f=W(e);i&&i.l(f),f.forEach(b),this.h()},h(){j(e,"class","errors-text svelte-dd551c")},m(n,f){w(n,e,f),i&&i.m(e,null),s=!0},p(n,f){i&&i.p&&(!s||f&2097152)&&E(i,t,n,n[21],s?T(t,n[21],f,qe):I(n[21]),Q)},i(n){s||(p(i,n),s=!0)},o(n){_(i,n),s=!1},d(n){n&&b(e),i&&i.d(n)}}}function We(l){let e,s,t,i,n,f;function g(o){l[19](o)}function k(o){l[20](o)}let m={width:l[7],height:l[8],size:l[4],mode:l[6],error:(l[14].errors||l[10])&&l[5],$$slots:{label:[Pe],"right-icon":[Fe],"left-icon":[De],default:[ze]},$$scope:{ctx:l}};l[1]!==void 0&&(m.required=l[1]),l[2]!==void 0&&(m.disabled=l[2]),e=new we({props:m}),F.push(()=>U(e,"required",g)),F.push(()=>U(e,"disabled",k));let a=l[5]&&x(l);return{c(){B(e.$$.fragment),i=ie(),a&&a.c(),n=D()},l(o){S(e.$$.fragment,o),i=se(o),a&&a.l(o),n=D()},m(o,u){C(e,o,u),w(o,i,u),a&&a.m(o,u),w(o,n,u),f=!0},p(o,[u]){const r={};u&128&&(r.width=o[7]),u&256&&(r.height=o[8]),u&16&&(r.size=o[4]),u&64&&(r.mode=o[6]),u&17440&&(r.error=(o[14].errors||o[10])&&o[5]),u&2130445&&(r.$$scope={dirty:u,ctx:o}),!s&&u&2&&(s=!0,r.required=o[1],G(()=>s=!1)),!t&&u&4&&(t=!0,r.disabled=o[2],G(()=>t=!1)),e.$set(r),o[5]?a?(a.p(o,u),u&32&&p(a,1)):(a=x(o),a.c(),p(a,1),a.m(n.parentNode,n)):a&&(ee(),_(a,1,1,()=>{a=null}),te())},i(o){f||(p(e.$$.fragment,o),p(a),f=!0)},o(o){_(e.$$.fragment,o),_(a),f=!1},d(o){o&&(b(i),b(n)),H(e,o),a&&a.d(o)}}}function je(l,e,s){const t=["type","value","required","disabled","size","showErrors","mode","width","height"];let i=J(e,t),{$$slots:n={},$$scope:f}=e;const g=_e(n);let{type:k="text"}=e,{value:m=""}=e,{required:a=!1}=e,{disabled:o=!1}=e,{size:u="normal"}=e,{showErrors:r=!1}=e,{mode:c=void 0}=e,{width:v=void 0}=e,{height:L=void 0}=e;const le=be();function ne(d){const N=d;le(d.type,{value:m,valueAsDate:N.target.valueAsDate,valueAsNumber:N.target.valueAsNumber,innerEvent:N})}const oe={date:"calendar",time:"clock"};let y,M=!1;function re(d){s(0,m=d.currentTarget.value),s(10,M=a&&!m||!(y!=null&&y.checkValidity()))}const ae=()=>y==null?void 0:y.showPicker();function fe(d){F[d?"unshift":"push"](()=>{y=d,s(9,y)})}function ue(d){a=d,s(1,a)}function de(d){o=d,s(2,o)}return l.$$set=d=>{e=P(P({},e),he(d)),s(15,i=J(e,t)),"type"in d&&s(3,k=d.type),"value"in d&&s(0,m=d.value),"required"in d&&s(1,a=d.required),"disabled"in d&&s(2,o=d.disabled),"size"in d&&s(4,u=d.size),"showErrors"in d&&s(5,r=d.showErrors),"mode"in d&&s(6,c=d.mode),"width"in d&&s(7,v=d.width),"height"in d&&s(8,L=d.height),"$$scope"in d&&s(21,f=d.$$scope)},[m,a,o,k,u,r,c,v,L,y,M,ne,oe,re,g,i,n,ae,fe,ue,de,f]}class Be extends ce{constructor(e){super(),pe(this,e,je,We,me,{type:3,value:0,required:1,disabled:2,size:4,showErrors:5,mode:6,width:7,height:8})}}Be.__docgen={version:3,name:"text-field.svelte",data:[{keywords:[],visibility:"public",description:`The type of input to render. The Input component just supports a subset of
those supported by the HTML Input element.`,name:"type",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"text"},{keywords:[],visibility:"public",description:"The value of the input control.",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:`Whether the value is required. In addition to showing a required indicator,
this performs some basic validation (i.e. is value truthy), and if it fails
(and showErrors is true), the component will be rendered in its error
state.`,name:"required",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1,bind:[{source:"FormItem",property:"required"}]},{keywords:[],visibility:"public",description:"Whether the component is disabled.",name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1,bind:[{source:"FormItem",property:"disabled"}]},{keywords:[],visibility:"public",description:"The size of the input.",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[],visibility:"public",description:"Whether any errors the component has should be shown.",name:"showErrors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"The mode of the input.",name:"mode",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"The width of the input",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"The height of the input",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[]}],slots:[{keywords:[],visibility:"public",description:"",name:"left-icon",params:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"",name:"extra"},{keywords:[],visibility:"public",description:"",name:"right-icon",params:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"",name:"default",params:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"",name:"errors"}],refs:[]};export{Be as T};