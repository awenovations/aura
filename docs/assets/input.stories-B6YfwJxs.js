import{S as ne,i as le,s as ae,p as H,q as J,c as k,a as v,m as $,r as K,t as c,j as oe,b as m,k as ue,d as w,l as Q,v as ke,e as C,o as ve,f as V,u as z,g as S,h as N,w as $e,n as fe}from"./index-BOnQ51mL.js";import{a as q,r as F,c as T,i as D,d as y,n as we,e as A,b as P,f as L,l as X,t as Y,k as U,j as M,m as b,u as Ie}from"./lifecycle-_gBYeKgc.js";import{g as pe,a as De}from"./spread-CgU5AtxT.js";import{B as Ee}from"./button-QDGQQurq.js";import{F as qe}from"./form-item-CUup1znc.js";import{I as Te}from"./icon-3iGp3mBU.js";/* empty css            */import{p as Ae,T as Pe,S as R}from"./collect-stories-6uUJsKuo.js";import"./progress-ring-DVcAr80U.js";const Ve=n=>({}),Z=n=>({}),ze=n=>({}),x=n=>({}),Se=n=>({}),ee=n=>({slot:"left-icon"}),Ne=n=>({}),te=n=>({slot:"right-icon"}),je=n=>({}),se=n=>({slot:"label"});function Ce(n){let e,i,t,s,r,u,_,g,l=[n[15],{class:t=`aura-input ${n[15].class}`},{disabled:n[2]},{type:n[3]},{value:n[0]}],a={};for(let f=0;f<l.length;f+=1)a=C(a,l[f]);const o=n[16].extra,p=V(o,n,n[21],x);return{c(){e=A("div"),i=A("input"),s=q(),r=A("div"),p&&p.c(),this.h()},l(f){e=P(f,"DIV",{class:!0});var h=L(e);i=P(h,"INPUT",{class:!0,type:!0}),s=T(h),r=P(h,"DIV",{class:!0});var E=L(r);p&&p.l(E),E.forEach(y),h.forEach(y),this.h()},h(){X(i,a),Y(i,"svelte-dd551c",!0),U(r,"class","extra svelte-dd551c"),U(e,"class","input-container svelte-dd551c")},m(f,h){D(f,e,h),M(e,i),"value"in a&&(i.value=a.value),i.autofocus&&i.focus(),n[18](i),M(e,s),M(e,r),p&&p.m(r,null),u=!0,_||(g=[b(i,"change",n[11]),b(i,"input",n[13]),b(i,"input",n[11]),b(i,"focus",n[11]),b(i,"blur",n[11]),b(i,"keydown",n[11]),b(i,"keypress",n[11]),b(i,"keyup",n[11]),b(i,"focusin",n[11]),b(i,"focusout",n[11])],_=!0)},p(f,h){X(i,a=pe(l,[h&32768&&f[15],(!u||h&32768&&t!==(t=`aura-input ${f[15].class}`))&&{class:t},(!u||h&4)&&{disabled:f[2]},(!u||h&8)&&{type:f[3]},(!u||h&1&&i.value!==f[0])&&{value:f[0]}])),"value"in a&&(i.value=a.value),Y(i,"svelte-dd551c",!0),p&&p.p&&(!u||h&2097152)&&z(p,o,f,f[21],u?N(o,f[21],h,ze):S(f[21]),x)},i(f){u||(c(p,f),u=!0)},o(f){m(p,f),u=!1},d(f){f&&y(e),n[18](null),p&&p.d(f),_=!1,$e(g)}}}function Fe(n){let e;const i=n[16]["left-icon"],t=V(i,n,n[21],ee);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&2097152)&&z(t,i,s,s[21],e?N(i,s[21],r,Se):S(s[21]),ee)},i(s){e||(c(t,s),e=!0)},o(s){m(t,s),e=!1},d(s){t&&t.d(s)}}}function ie(n){let e,i;return e=new Ee({props:{kind:"plain-faint",$$slots:{default:[Ue]},$$scope:{ctx:n}}}),e.$on("click",n[17]),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){$(e,t,s),i=!0},p(t,s){const r={};s&2097160&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){i||(c(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function Ue(n){let e,i;return e=new Te({props:{name:n[12][n[3]]}}),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){$(e,t,s),i=!0},p(t,s){const r={};s&8&&(r.name=t[12][t[3]]),e.$set(r)},i(t){i||(c(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function We(n){let e,i,t=n[12][n[3]]&&ie(n);return{c(){t&&t.c(),e=F()},l(s){t&&t.l(s),e=F()},m(s,r){t&&t.m(s,r),D(s,e,r),i=!0},p(s,r){s[12][s[3]]?t?(t.p(s,r),r&8&&c(t,1)):(t=ie(s),t.c(),c(t,1),t.m(e.parentNode,e)):t&&(oe(),m(t,1,1,()=>{t=null}),ue())},i(s){i||(c(t),i=!0)},o(s){m(t),i=!1},d(s){s&&y(e),t&&t.d(s)}}}function Be(n){let e;const i=n[16]["right-icon"],t=V(i,n,n[21],te),s=t||We(n);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,u){s&&s.m(r,u),e=!0},p(r,u){t?t.p&&(!e||u&2097152)&&z(t,i,r,r[21],e?N(i,r[21],u,Ne):S(r[21]),te):s&&s.p&&(!e||u&520)&&s.p(r,e?u:-1)},i(r){e||(c(s,r),e=!0)},o(r){m(s,r),e=!1},d(r){s&&s.d(r)}}}function Me(n){let e;const i=n[16].default,t=V(i,n,n[21],se);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&2097152)&&z(t,i,s,s[21],e?N(i,s[21],r,je):S(s[21]),se)},i(s){e||(c(t,s),e=!0)},o(s){m(t,s),e=!1},d(s){t&&t.d(s)}}}function re(n){let e,i;const t=n[16].errors,s=V(t,n,n[21],Z);return{c(){e=A("div"),s&&s.c(),this.h()},l(r){e=P(r,"DIV",{class:!0});var u=L(e);s&&s.l(u),u.forEach(y),this.h()},h(){U(e,"class","errors-text svelte-dd551c")},m(r,u){D(r,e,u),s&&s.m(e,null),i=!0},p(r,u){s&&s.p&&(!i||u&2097152)&&z(s,t,r,r[21],i?N(t,r[21],u,Ve):S(r[21]),Z)},i(r){i||(c(s,r),i=!0)},o(r){m(s,r),i=!1},d(r){r&&y(e),s&&s.d(r)}}}function Re(n){let e,i,t,s,r,u;function _(o){n[19](o)}function g(o){n[20](o)}let l={width:n[7],height:n[8],size:n[4],mode:n[6],error:(n[14].errors||n[10])&&n[5],$$slots:{label:[Me],"right-icon":[Be],"left-icon":[Fe],default:[Ce]},$$scope:{ctx:n}};n[1]!==void 0&&(l.required=n[1]),n[2]!==void 0&&(l.disabled=n[2]),e=new qe({props:l}),H.push(()=>J(e,"required",_)),H.push(()=>J(e,"disabled",g));let a=n[5]&&re(n);return{c(){k(e.$$.fragment),s=q(),a&&a.c(),r=F()},l(o){v(e.$$.fragment,o),s=T(o),a&&a.l(o),r=F()},m(o,p){$(e,o,p),D(o,s,p),a&&a.m(o,p),D(o,r,p),u=!0},p(o,[p]){const f={};p&128&&(f.width=o[7]),p&256&&(f.height=o[8]),p&16&&(f.size=o[4]),p&64&&(f.mode=o[6]),p&17440&&(f.error=(o[14].errors||o[10])&&o[5]),p&2130445&&(f.$$scope={dirty:p,ctx:o}),!i&&p&2&&(i=!0,f.required=o[1],K(()=>i=!1)),!t&&p&4&&(t=!0,f.disabled=o[2],K(()=>t=!1)),e.$set(f),o[5]?a?(a.p(o,p),p&32&&c(a,1)):(a=re(o),a.c(),c(a,1),a.m(r.parentNode,r)):a&&(oe(),m(a,1,1,()=>{a=null}),ue())},i(o){u||(c(e.$$.fragment,o),c(a),u=!0)},o(o){m(e.$$.fragment,o),m(a),u=!1},d(o){o&&(y(s),y(r)),w(e,o),a&&a.d(o)}}}function He(n,e,i){const t=["type","value","required","disabled","size","showErrors","mode","width","height"];let s=Q(e,t),{$$slots:r={},$$scope:u}=e;const _=ke(r);let{type:g="text"}=e,{value:l=""}=e,{required:a=!1}=e,{disabled:o=!1}=e,{size:p="normal"}=e,{showErrors:f=!1}=e,{mode:h=void 0}=e,{width:E=void 0}=e,{height:O=void 0}=e;const de=we();function ce(d){const B=d;de(d.type,{value:l,valueAsDate:B.target.valueAsDate,valueAsNumber:B.target.valueAsNumber,innerEvent:B})}const me={date:"calendar",time:"clock"};let I,G=!1;function _e(d){i(0,l=d.currentTarget.value),i(10,G=a&&!l||!(I!=null&&I.checkValidity()))}const he=()=>I==null?void 0:I.showPicker();function ge(d){H[d?"unshift":"push"](()=>{I=d,i(9,I)})}function ye(d){a=d,i(1,a)}function be(d){o=d,i(2,o)}return n.$$set=d=>{e=C(C({},e),ve(d)),i(15,s=Q(e,t)),"type"in d&&i(3,g=d.type),"value"in d&&i(0,l=d.value),"required"in d&&i(1,a=d.required),"disabled"in d&&i(2,o=d.disabled),"size"in d&&i(4,p=d.size),"showErrors"in d&&i(5,f=d.showErrors),"mode"in d&&i(6,h=d.mode),"width"in d&&i(7,E=d.width),"height"in d&&i(8,O=d.height),"$$scope"in d&&i(21,u=d.$$scope)},[l,a,o,g,p,f,h,E,O,I,G,ce,me,_e,_,s,r,he,ge,ye,be,u]}class j extends ne{constructor(e){super(),le(this,e,He,Re,ae,{type:3,value:0,required:1,disabled:2,size:4,showErrors:5,mode:6,width:7,height:8})}}j.__docgen={version:3,name:"input.svelte",data:[{keywords:[],visibility:"public",description:`The type of input to render. The Input component just supports a subset of
those supported by the HTML Input element.`,name:"type",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"text"},{keywords:[],visibility:"public",description:"The value of the input control.",name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:`Whether the value is required. In addition to showing a required indicator,
this performs some basic validation (i.e. is value truthy), and if it fails
(and showErrors is true), the component will be rendered in its error
state.`,name:"required",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1,bind:[{source:"FormItem",property:"required"}]},{keywords:[],visibility:"public",description:"Whether the component is disabled.",name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1,bind:[{source:"FormItem",property:"disabled"}]},{keywords:[],visibility:"public",description:"The size of the input.",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{keywords:[],visibility:"public",description:"Whether any errors the component has should be shown.",name:"showErrors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"The mode of the input.",name:"mode",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"The width of the input",name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"The height of the input",name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[]}],slots:[{keywords:[],visibility:"public",description:"",name:"left-icon",params:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"",name:"extra"},{keywords:[],visibility:"public",description:"",name:"right-icon",params:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"",name:"default",params:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"",name:"errors"}],refs:[]};function Le(n){let e,i;const t=[n[0],{placeholder:"Placeholder..."}];let s={};for(let r=0;r<t.length;r+=1)s=C(s,t[r]);return e=new j({props:s}),{c(){k(e.$$.fragment)},l(r){v(e.$$.fragment,r)},m(r,u){$(e,r,u),i=!0},p(r,u){const _=u&1?pe(t,[De(r[0]),t[1]]):{};e.$set(_)},i(r){i||(c(e.$$.fragment,r),i=!0)},o(r){m(e.$$.fragment,r),i=!1},d(r){w(e,r)}}}function Oe(n){let e,i;return e=new j({props:{disabled:!0,placeholder:"Placeholder..."}}),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){$(e,t,s),i=!0},p:fe,i(t){i||(c(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function Ge(n){let e,i="Something went wrong here!";return{c(){e=A("span"),e.textContent=i,this.h()},l(t){e=P(t,"SPAN",{slot:!0,"data-svelte-h":!0}),Ie(e)!=="svelte-1u23qjy"&&(e.textContent=i),this.h()},h(){U(e,"slot","errors")},m(t,s){D(t,e,s)},p:fe,d(t){t&&y(e)}}}function Je(n){let e,i;return e=new j({props:{placeholder:"Placeholder...",showErrors:!0,$$slots:{errors:[Ge]},$$scope:{ctx:n}}}),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){$(e,t,s),i=!0},p(t,s){const r={};s&2&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){i||(c(e.$$.fragment,t),i=!0)},o(t){m(e.$$.fragment,t),i=!1},d(t){w(e,t)}}}function Ke(n){let e,i,t,s,r,u,_,g;return e=new Pe({props:{$$slots:{default:[Le,({args:l})=>({0:l}),({args:l})=>l?1:0]},$$scope:{ctx:n}}}),t=new R({props:{name:"Default input"}}),r=new R({props:{name:"Disabled input",$$slots:{default:[Oe]},$$scope:{ctx:n}}}),_=new R({props:{name:"Error'd input",$$slots:{default:[Je]},$$scope:{ctx:n}}}),{c(){k(e.$$.fragment),i=q(),k(t.$$.fragment),s=q(),k(r.$$.fragment),u=q(),k(_.$$.fragment)},l(l){v(e.$$.fragment,l),i=T(l),v(t.$$.fragment,l),s=T(l),v(r.$$.fragment,l),u=T(l),v(_.$$.fragment,l)},m(l,a){$(e,l,a),D(l,i,a),$(t,l,a),D(l,s,a),$(r,l,a),D(l,u,a),$(_,l,a),g=!0},p(l,[a]){const o={};a&3&&(o.$$scope={dirty:a,ctx:l}),e.$set(o);const p={};a&2&&(p.$$scope={dirty:a,ctx:l}),r.$set(p);const f={};a&2&&(f.$$scope={dirty:a,ctx:l}),_.$set(f)},i(l){g||(c(e.$$.fragment,l),c(t.$$.fragment,l),c(r.$$.fragment,l),c(_.$$.fragment,l),g=!0)},o(l){m(e.$$.fragment,l),m(t.$$.fragment,l),m(r.$$.fragment,l),m(_.$$.fragment,l),g=!1},d(l){l&&(y(i),y(s),y(u)),w(e,l),w(t,l),w(r,l),w(_,l)}}}const Qe={title:"AURA/Input",component:j,tags:["autodocs"],argTypes:{}};class Xe extends ne{constructor(e){super(),le(this,e,null,Ke,ae,{})}}const W=Ae(Xe,{meta:{title:"AURA/Input",tags:["autodocs"]},stories:{"tpl:default":{name:"default",template:!0,source:'<Input {...args} placeholder="Placeholder..." />',hasArgs:!0},DefaultInput:{name:"Default input",template:!1,source:"",hasArgs:!1},DisabledInput:{name:"Disabled input",template:!1,source:'<Input disabled={true} placeholder="Placeholder..." />',hasArgs:!1},ErrorDInput:{name:"Error'd input",template:!1,source:`<Input placeholder="Placeholder..." showErrors
	><span slot="errors">Something went wrong here!</span></Input
>`,hasArgs:!1}},allocatedIds:["default","Story","Template"]},Qe),lt=W.meta,at=["DefaultInput","DisabledInput","ErrorDInput"],ot=W.stories.DefaultInput,ut=W.stories.DisabledInput,ft=W.stories.ErrorDInput;export{ot as DefaultInput,ut as DisabledInput,ft as ErrorDInput,at as __namedExportsOrder,lt as default};
