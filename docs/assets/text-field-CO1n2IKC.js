import{S as _e,i as me,s as pe,p as A,q as K,c as he,a as ye,x as S,m as be,t as v,g as M,b as w,f as O,r as Q,d as ge,v as Y,h as ve,e as T,j as ke,k as j,u as L,l as C,o as P,w as se}from"./index-NJt023ZH.js";import{e as I,s as X,f as D,g as U,c as G,d as g,m as q,i as z,j as R,x as we,q as F,r as N,w as y}from"./lifecycle-BlJB78Bc.js";import{g as ae}from"./spread-CgU5AtxT.js";import{c as V}from"./index-DUolvyrz.js";import{F as qe}from"./form-item-BIc6HSZn.js";var b=[];for(var H=0;H<256;++H)b.push((H+256).toString(16).slice(1));function Ee(t,e=0){return(b[t[e+0]]+b[t[e+1]]+b[t[e+2]]+b[t[e+3]]+"-"+b[t[e+4]]+b[t[e+5]]+"-"+b[t[e+6]]+b[t[e+7]]+"-"+b[t[e+8]]+b[t[e+9]]+"-"+b[t[e+10]]+b[t[e+11]]+b[t[e+12]]+b[t[e+13]]+b[t[e+14]]+b[t[e+15]]).toLowerCase()}var W,Ve=new Uint8Array(16);function Ie(){if(!W&&(W=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!W))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return W(Ve)}var De=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Z={randomUUID:De};function Ue(t,e,s){if(Z.randomUUID&&!e&&!t)return Z.randomUUID();t=t||{};var a=t.random||(t.rng||Ie)();return a[6]=a[6]&15|64,a[8]=a[8]&63|128,Ee(a)}const ze=t=>({}),x=t=>({}),We=t=>({}),$=t=>({}),Ae=t=>({}),ee=t=>({slot:"left-icon"}),Se=t=>({}),te=t=>({});function le(t){let e,s;const a=t[15].label,l=j(a,t,t[20],te);return{c(){e=I("label"),l&&l.c(),this.h()},l(i){e=D(i,"LABEL",{for:!0,class:!0});var r=U(e);l&&l.l(r),r.forEach(g),this.h()},h(){q(e,"for",t[8]),q(e,"class","label svelte-zuddgy")},m(i,r){z(i,e,r),l&&l.m(e,null),s=!0},p(i,r){l&&l.p&&(!s||r&1048576)&&L(l,a,i,i[20],s?P(a,i[20],r,Se):C(i[20]),te),(!s||r&256)&&q(e,"for",i[8])},i(i){s||(v(l,i),s=!0)},o(i){w(l,i),s=!1},d(i){i&&g(e),l&&l.d(i)}}}function Te(t){let e,s,a,l,i=[t[14],{class:s=V("aura-text-field",t[14].class)},{disabled:t[2]},{type:t[4]},{value:t[0]},{id:t[8]},{required:t[1]}],r={};for(let n=0;n<i.length;n+=1)r=T(r,i[n]);return{c(){e=I("input"),this.h()},l(n){e=D(n,"INPUT",{class:!0,type:!0,id:!0}),this.h()},h(){F(e,r),N(e,"svelte-zuddgy",!0)},m(n,o){z(n,e,o),"value"in r&&(e.value=r.value),e.autofocus&&e.focus(),t[17](e),a||(l=[y(e,"change",t[11]),y(e,"input",t[12]),y(e,"input",t[11]),y(e,"focus",t[11]),y(e,"blur",t[11]),y(e,"keydown",t[11]),y(e,"keypress",t[11]),y(e,"keyup",t[11]),y(e,"focusin",t[11]),y(e,"focusout",t[11])],a=!0)},p(n,o){F(e,r=ae(i,[o&16384&&n[14],o&16384&&s!==(s=V("aura-text-field",n[14].class))&&{class:s},o&4&&{disabled:n[2]},o&16&&{type:n[4]},o&1&&e.value!==n[0]&&{value:n[0]},o&256&&{id:n[8]},o&2&&{required:n[1]}])),"value"in r&&(e.value=r.value),N(e,"svelte-zuddgy",!0)},d(n){n&&g(e),t[17](null),a=!1,se(l)}}}function Re(t){let e,s,a,l,i=[t[14],{class:s=V("aura-text-field",t[14].class)},{disabled:t[2]},{id:t[8]},{required:t[1]},{style:"height: 100%;"},{value:t[0]}],r={};for(let n=0;n<i.length;n+=1)r=T(r,i[n]);return{c(){e=I("textarea"),this.h()},l(n){e=D(n,"TEXTAREA",{class:!0,id:!0,style:!0}),U(e).forEach(g),this.h()},h(){F(e,r),N(e,"svelte-zuddgy",!0)},m(n,o){z(n,e,o),e.autofocus&&e.focus(),t[16](e),a||(l=[y(e,"change",t[11]),y(e,"input",t[12]),y(e,"input",t[11]),y(e,"focus",t[11]),y(e,"blur",t[11]),y(e,"keydown",t[11]),y(e,"keypress",t[11]),y(e,"keyup",t[11]),y(e,"focusin",t[11]),y(e,"focusout",t[11])],a=!0)},p(n,o){F(e,r=ae(i,[o&16384&&n[14],o&16384&&s!==(s=V("aura-text-field",n[14].class))&&{class:s},o&4&&{disabled:n[2]},o&256&&{id:n[8]},o&2&&{required:n[1]},{style:"height: 100%;"},o&1&&{value:n[0]}])),N(e,"svelte-zuddgy",!0)},d(n){n&&g(e),t[16](null),a=!1,se(l)}}}function Fe(t){let e,s,a,l,i;function r(f,h){return f[4]==="multi"?Re:Te}let n=r(t),o=n(t);const c=t[15].extra,p=j(c,t,t[20],$);return{c(){e=I("div"),o.c(),s=X(),a=I("div"),p&&p.c(),this.h()},l(f){e=D(f,"DIV",{class:!0});var h=U(e);o.l(h),s=G(h),a=D(h,"DIV",{class:!0});var _=U(a);p&&p.l(_),_.forEach(g),h.forEach(g),this.h()},h(){q(a,"class","extra svelte-zuddgy"),q(e,"class",l=S(V("text-field-container",{multi:t[4]==="multi"}))+" svelte-zuddgy")},m(f,h){z(f,e,h),o.m(e,null),R(e,s),R(e,a),p&&p.m(a,null),i=!0},p(f,h){n===(n=r(f))&&o?o.p(f,h):(o.d(1),o=n(f),o&&(o.c(),o.m(e,s))),p&&p.p&&(!i||h&1048576)&&L(p,c,f,f[20],i?P(c,f[20],h,We):C(f[20]),$),(!i||h&16&&l!==(l=S(V("text-field-container",{multi:f[4]==="multi"}))+" svelte-zuddgy"))&&q(e,"class",l)},i(f){i||(v(p,f),i=!0)},o(f){w(p,f),i=!1},d(f){f&&g(e),o.d(),p&&p.d(f)}}}function Ne(t){let e;const s=t[15]["left-icon"],a=j(s,t,t[20],ee);return{c(){a&&a.c()},l(l){a&&a.l(l)},m(l,i){a&&a.m(l,i),e=!0},p(l,i){a&&a.p&&(!e||i&1048576)&&L(a,s,l,l[20],e?P(s,l[20],i,Ae):C(l[20]),ee)},i(l){e||(v(a,l),e=!0)},o(l){w(a,l),e=!1},d(l){a&&a.d(l)}}}function ie(t){let e,s;const a=t[15].errors,l=j(a,t,t[20],x);return{c(){e=I("div"),l&&l.c(),this.h()},l(i){e=D(i,"DIV",{class:!0});var r=U(e);l&&l.l(r),r.forEach(g),this.h()},h(){q(e,"class","errors-text svelte-zuddgy")},m(i,r){z(i,e,r),l&&l.m(e,null),s=!0},p(i,r){l&&l.p&&(!s||r&1048576)&&L(l,a,i,i[20],s?P(a,i[20],r,ze):C(i[20]),x)},i(i){s||(v(l,i),s=!0)},o(i){w(l,i),s=!1},d(i){i&&g(e),l&&l.d(i)}}}function je(t){let e,s,a,l,i,r,n,o,c=t[13].label&&le(t);function p(d){t[18](d)}function f(d){t[19](d)}let h={width:t[6],height:t[7],error:(t[13].errors||t[10])&&t[5],$$slots:{"left-icon":[Ne],default:[Fe]},$$scope:{ctx:t}};t[1]!==void 0&&(h.required=t[1]),t[2]!==void 0&&(h.disabled=t[2]),a=new qe({props:h}),A.push(()=>K(a,"required",p)),A.push(()=>K(a,"disabled",f));let _=t[5]&&ie(t);return{c(){e=I("div"),c&&c.c(),s=X(),he(a.$$.fragment),r=X(),_&&_.c(),this.h()},l(d){e=D(d,"DIV",{class:!0});var m=U(e);c&&c.l(m),s=G(m),ye(a.$$.fragment,m),r=G(m),_&&_.l(m),m.forEach(g),this.h()},h(){q(e,"class",n=S(V("aura-text-field-wrapper",{fullWidth:t[3],userSetWidth:!!t[6]}))+" svelte-zuddgy")},m(d,m){z(d,e,m),c&&c.m(e,null),R(e,s),be(a,e,null),R(e,r),_&&_.m(e,null),o=!0},p(d,[m]){d[13].label?c?(c.p(d,m),m&8192&&v(c,1)):(c=le(d),c.c(),v(c,1),c.m(e,s)):c&&(M(),w(c,1,1,()=>{c=null}),O());const k={};m&64&&(k.width=d[6]),m&128&&(k.height=d[7]),m&9248&&(k.error=(d[13].errors||d[10])&&d[5]),m&1065751&&(k.$$scope={dirty:m,ctx:d}),!l&&m&2&&(l=!0,k.required=d[1],Q(()=>l=!1)),!i&&m&4&&(i=!0,k.disabled=d[2],Q(()=>i=!1)),a.$set(k),d[5]?_?(_.p(d,m),m&32&&v(_,1)):(_=ie(d),_.c(),v(_,1),_.m(e,null)):_&&(M(),w(_,1,1,()=>{_=null}),O()),(!o||m&72&&n!==(n=S(V("aura-text-field-wrapper",{fullWidth:d[3],userSetWidth:!!d[6]}))+" svelte-zuddgy"))&&q(e,"class",n)},i(d){o||(v(c),v(a.$$.fragment,d),v(_),o=!0)},o(d){w(c),w(a.$$.fragment,d),w(_),o=!1},d(d){d&&g(e),c&&c.d(),ge(a),_&&_.d()}}}function Le(t,e,s){const a=["fullWidth","type","value","required","disabled","showErrors","width","height","id"];let l=Y(e,a),{$$slots:i={},$$scope:r}=e;const n=ve(i);let{fullWidth:o=!1}=e,{type:c="text"}=e,{value:p=""}=e,{required:f=!1}=e,{disabled:h=!1}=e,{showErrors:_=!1}=e,{width:d=void 0}=e,{height:m=void 0}=e,{id:k=Ue()}=e;const ne=we();function re(u){const B=u;ne(u.type,{value:p,valueAsDate:B.target.valueAsDate,valueAsNumber:B.target.valueAsNumber,innerEvent:B})}let E,J=!1;function oe(u){s(0,p=u.currentTarget.value),s(10,J=f&&!p||!(E!=null&&E.checkValidity()))}function ue(u){A[u?"unshift":"push"](()=>{E=u,s(9,E)})}function de(u){A[u?"unshift":"push"](()=>{E=u,s(9,E)})}function fe(u){f=u,s(1,f)}function ce(u){h=u,s(2,h)}return t.$$set=u=>{e=T(T({},e),ke(u)),s(14,l=Y(e,a)),"fullWidth"in u&&s(3,o=u.fullWidth),"type"in u&&s(4,c=u.type),"value"in u&&s(0,p=u.value),"required"in u&&s(1,f=u.required),"disabled"in u&&s(2,h=u.disabled),"showErrors"in u&&s(5,_=u.showErrors),"width"in u&&s(6,d=u.width),"height"in u&&s(7,m=u.height),"id"in u&&s(8,k=u.id),"$$scope"in u&&s(20,r=u.$$scope)},[p,f,h,o,c,_,d,m,k,E,J,re,oe,n,l,i,ue,de,fe,ce,r]}class Ce extends _e{constructor(e){super(),me(this,e,Le,je,pe,{fullWidth:3,type:4,value:0,required:1,disabled:2,showErrors:5,width:6,height:7,id:8})}}Ce.__docgen={version:3,name:"text-field.svelte",data:[{visibility:"public",description:null,keywords:[],name:"fullWidth",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"type",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"text"},{visibility:"public",description:null,keywords:[],name:"value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"required",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1,bind:[{source:"FormItem",property:"required"}]},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1,bind:[{source:"FormItem",property:"disabled"}]},{visibility:"public",description:null,keywords:[],name:"showErrors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[]}],slots:[{keywords:[],visibility:"public",description:"",name:"label"},{keywords:[],visibility:"public",description:"",name:"left-icon",params:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"slot",type:{kind:"type",text:"*",type:"any"}}]},{keywords:[],visibility:"public",description:"",name:"extra"},{keywords:[],visibility:"public",description:"",name:"errors"}],refs:[]};export{Ce as T,Ue as v};
