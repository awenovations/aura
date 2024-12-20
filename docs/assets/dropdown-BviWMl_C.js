import{S as qe,i as Ve,s as Fe,e as W,c as J,a as Q,m as X,y as Ie,t as h,g as C,b as g,f as K,z as Se,d as Y,x as _e,v as $,h as De,j as ee,k as R,u as z,l as j,o as H,p as te,n as le}from"./index-C5DZbSfd.js";import{e as P,s as U,v as se,f as N,g as L,c as T,d as v,q as ie,r as ne,i as V,j as M,w as D,y as G,x as Pe,m as A,z as oe,h as re,t as be,a as he,b as Ne}from"./lifecycle-D41BJhRp.js";import{g as Ue}from"./spread-CgU5AtxT.js";import{I as Te}from"./icon-xVS0pies.js";import{F as Le}from"./float-rz0ZysFA.js";import{F as Be,v as Ce}from"./form-item-D5ZEweZN.js";function Ke(l,e){let t;const n=s=>{t&&document.removeEventListener("click",t),t=i=>{i.composedPath().includes(l)||s&&s(i)},document.addEventListener("click",t)};return n(e),{destroy(){document.removeEventListener("click",t)},update(s){n(s)}}}function Me(l){return new Promise(e=>{if(document.querySelector(l))return e(document.querySelector(l));const t=new MutationObserver(()=>{document.querySelector(l)&&(t.disconnect(),e(document.querySelector(l)))});t.observe(document.body,{childList:!0,subtree:!0})})}const Re=l=>({}),ae=l=>({}),ze=l=>({}),ue=l=>({}),je=l=>({}),fe=l=>({});function ce(l){let e,t;const n=l[19].label,s=R(n,l,l[23],fe);return{c(){e=P("label"),s&&s.c(),this.h()},l(i){e=N(i,"LABEL",{for:!0,class:!0});var r=L(e);s&&s.l(r),r.forEach(v),this.h()},h(){A(e,"for",l[3]),A(e,"class","label")},m(i,r){V(i,e,r),s&&s.m(e,null),t=!0},p(i,r){s&&s.p&&(!t||r&8388608)&&z(s,n,i,i[23],t?H(n,i[23],r,je):j(i[23]),fe),(!t||r&8)&&A(e,"for",i[3])},i(i){t||(h(s,i),t=!0)},o(i){g(s,i),t=!1},d(i){i&&v(e),s&&s.d(i)}}}function de(l){let e,t,n;return{c(){e=P("input"),this.h()},l(s){e=N(s,"INPUT",{name:!0,type:!0}),this.h()},h(){A(e,"name",l[5]),A(e,"type","hidden")},m(s,i){V(s,e,i),oe(e,l[1]),t||(n=D(e,"input",l[20]),t=!0)},p(s,i){i&32&&A(e,"name",s[5]),i&2&&oe(e,s[1])},d(s){s&&v(e),t=!1,n()}}}function He(l){let e;const t=l[19].placeholder,n=R(t,l,l[23],ue),s=n||Ge();return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&8388608)&&z(n,t,i,i[23],e?H(t,i[23],r,ze):j(i[23]),ue)},i(i){e||(h(s,i),e=!0)},o(i){g(s,i),e=!1},d(i){s&&s.d(i)}}}function We(l){let e;return{c(){e=be(l[1])},l(t){e=he(t,l[1])},m(t,n){V(t,e,n)},p(t,n){n&2&&Ne(e,t[1])},i:le,o:le,d(t){t&&v(e)}}}function Ge(l){let e;return{c(){e=be("select...")},l(t){e=he(t,"select...")},m(t,n){V(t,e,n)},d(t){t&&v(e)}}}function Je(l){let e,t,n,s,i,r,d,b;const E=[We,He],y=[];function F(c,u){return c[1]?0:1}return t=F(l),n=y[t]=E[t](l),i=new Te({props:{name:"caret-down",size:"small"}}),{c(){e=P("button"),n.c(),s=U(),J(i.$$.fragment),this.h()},l(c){e=N(c,"BUTTON",{id:!0,class:!0});var u=L(e);n.l(u),s=T(u),Q(i.$$.fragment,u),u.forEach(v),this.h()},h(){A(e,"id",l[3]),A(e,"class","trigger svelte-abx6ep")},m(c,u){V(c,e,u),y[t].m(e,null),M(e,s),X(i,e,null),r=!0,d||(b=D(e,"focus",l[12]),d=!0)},p(c,u){let p=t;t=F(c),t===p?y[t].p(c,u):(C(),g(y[p],1,1,()=>{y[p]=null}),K(),n=y[t],n?n.p(c,u):(n=y[t]=E[t](c),n.c()),h(n,1),n.m(e,s)),(!r||u&8)&&A(e,"id",c[3])},i(c){r||(h(n),h(i.$$.fragment,c),r=!0)},o(c){g(n),g(i.$$.fragment,c),r=!1},d(c){c&&v(e),y[t].d(),Y(i),d=!1,b()}}}function me(l){let e,t;return e=new Le({props:{target:l[6],$$slots:{default:[Qe]},$$scope:{ctx:l}}}),{c(){J(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,s){X(e,n,s),t=!0},p(n,s){const i={};s&64&&(i.target=n[6]),s&8389248&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function Qe(l){let e,t,n,s;const i=l[19].default,r=R(i,l,l[23],null);return{c(){e=P("div"),r&&r.c(),this.h()},l(d){e=N(d,"DIV",{role:!0,tabindex:!0,class:!0});var b=L(e);r&&r.l(b),b.forEach(v),this.h()},h(){A(e,"role","menu"),A(e,"tabindex","-1"),A(e,"class","aura-menu svelte-abx6ep"),re(e,"--aura-menu-control-width",`${l[9]}px`)},m(d,b){V(d,e,b),r&&r.m(e,null),l[21](e),t=!0,n||(s=[D(e,"keypress",l[13]),D(e,"click",G(l[14]))],n=!0)},p(d,b){r&&r.p&&(!t||b&8388608)&&z(r,i,d,d[23],t?H(i,d[23],b,null):j(d[23]),null),b&512&&re(e,"--aura-menu-control-width",`${d[9]}px`)},i(d){t||(h(r,d),t=!0)},o(d){g(r,d),t=!1},d(d){d&&v(e),r&&r.d(d),l[21](null),n=!1,_e(s)}}}function pe(l){let e,t;const n=l[19].errors,s=R(n,l,l[23],ae);return{c(){e=P("div"),s&&s.c(),this.h()},l(i){e=N(i,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(v),this.h()},h(){A(e,"class","errors-text svelte-abx6ep")},m(i,r){V(i,e,r),s&&s.m(e,null),t=!0},p(i,r){s&&s.p&&(!t||r&8388608)&&z(s,n,i,i[23],t?H(n,i[23],r,Re):j(i[23]),ae)},i(i){t||(h(s,i),t=!0)},o(i){g(s,i),t=!1},d(i){i&&v(e),s&&s.d(i)}}}function Xe(l){var k;let e,t,n,s,i,r,d,b,E,y,F,c,u=l[16].label&&ce(l),p=((k=l[5])==null?void 0:k.length)>0&&de(l);s=new Be({props:{showFocusOutline:l[0]||l[2],error:(l[16].errors||l[8])&&l[4],$$slots:{default:[Je]},$$scope:{ctx:l}}});let _=l[0]&&me(l),S=[l[15],{class:r=`aura-dropdown ${l[15].class}`},{tabindex:"-1"},{role:"button"}],q={};for(let a=0;a<S.length;a+=1)q=W(q,S[a]);let m=l[4]&&pe(l);return{c(){e=P("div"),u&&u.c(),t=U(),p&&p.c(),n=U(),J(s.$$.fragment),i=U(),_&&_.c(),b=U(),m&&m.c(),E=se(),this.h()},l(a){e=N(a,"DIV",{class:!0,tabindex:!0,role:!0});var f=L(e);u&&u.l(f),t=T(f),p&&p.l(f),n=T(f),Q(s.$$.fragment,f),i=T(f),_&&_.l(f),f.forEach(v),b=T(a),m&&m.l(a),E=se(),this.h()},h(){ie(e,q),ne(e,"svelte-abx6ep",!0)},m(a,f){V(a,e,f),u&&u.m(e,null),M(e,t),p&&p.m(e,null),M(e,n),X(s,e,null),M(e,i),_&&_.m(e,null),l[22](e),V(a,b,f),m&&m.m(a,f),V(a,E,f),y=!0,F||(c=[Ie(d=Ke.call(null,e,(l[0]||l[2])&&l[11])),D(e,"keydown",G(l[13])),D(e,"click",G(l[10]))],F=!0)},p(a,[f]){var B;a[16].label?u?(u.p(a,f),f&65536&&h(u,1)):(u=ce(a),u.c(),h(u,1),u.m(e,t)):u&&(C(),g(u,1,1,()=>{u=null}),K()),((B=a[5])==null?void 0:B.length)>0?p?p.p(a,f):(p=de(a),p.c(),p.m(e,n)):p&&(p.d(1),p=null);const I={};f&5&&(I.showFocusOutline=a[0]||a[2]),f&65808&&(I.error=(a[16].errors||a[8])&&a[4]),f&8388618&&(I.$$scope={dirty:f,ctx:a}),s.$set(I),a[0]?_?(_.p(a,f),f&1&&h(_,1)):(_=me(a),_.c(),h(_,1),_.m(e,null)):_&&(C(),g(_,1,1,()=>{_=null}),K()),ie(e,q=Ue(S,[f&32768&&a[15],(!y||f&32768&&r!==(r=`aura-dropdown ${a[15].class}`))&&{class:r},{tabindex:"-1"},{role:"button"}])),d&&Se(d.update)&&f&5&&d.update.call(null,(a[0]||a[2])&&a[11]),ne(e,"svelte-abx6ep",!0),a[4]?m?(m.p(a,f),f&16&&h(m,1)):(m=pe(a),m.c(),h(m,1),m.m(E.parentNode,E)):m&&(C(),g(m,1,1,()=>{m=null}),K())},i(a){y||(h(u),h(s.$$.fragment,a),h(_),h(m),y=!0)},o(a){g(u),g(s.$$.fragment,a),g(_),g(m),y=!1},d(a){a&&(v(e),v(b),v(E)),u&&u.d(),p&&p.d(),Y(s),_&&_.d(),l[22](null),m&&m.d(a),F=!1,_e(c)}}}function Ye(l,e,t){let n,s;const i=["id","isOpen","required","isFocused","showErrors","name","currentValue"];let r=$(e,i),{$$slots:d={},$$scope:b}=e;const E=De(d),y=Pe();let{id:F=Ce()}=e,{isOpen:c=!1}=e,{required:u=!1}=e,{isFocused:p=!1}=e,{showErrors:_=!1}=e,{name:S}=e,{currentValue:q}=e,m,k,a=!1;const f=()=>{t(0,c=!c)},I=()=>{t(0,c=!1),t(2,p=!1)},B=()=>{t(2,p=!0)},Z=o=>o.getAttribute("value")??o.value??o.textContent,ye=o=>{const O=s.find(w=>o.composedPath().includes(w));if(O.tagName==="AURA-OPTION"){const w=Z(O);e.currentValue||t(1,q=w),t(8,a=u&&!w),y("change",{value:w})}},ke=async o=>{t(0,c=!0),await Me(".aura-menu"),x(o)},ge=o=>{o.preventDefault();let O=k.querySelector("aura-option[aria-selected] + aura-option");O||(O=k.querySelector("aura-option:first-of-type")),O.click()},ve=o=>{o.preventDefault();let O=k.querySelector("aura-option:has( + aura-option[aria-selected])");O||(O=k.querySelector("aura-option:last-of-type")),O.click()},x=async o=>{o.code==="Escape"||o.code==="Tab"?I():!c&&(o.code==="ArrowDown"||o.code==="ArrowUp")?await ke(o):o.code==="ArrowDown"?ge(o):o.code==="ArrowUp"&&ve(o)},we=o=>{ye(o),o.pointerId!==-1&&I()};function Oe(){q=this.value,t(1,q)}function Ae(o){te[o?"unshift":"push"](()=>{k=o,t(7,k)})}function Ee(o){te[o?"unshift":"push"](()=>{m=o,t(6,m)})}return l.$$set=o=>{t(30,e=W(W({},e),ee(o))),t(15,r=$(e,i)),"id"in o&&t(3,F=o.id),"isOpen"in o&&t(0,c=o.isOpen),"required"in o&&t(17,u=o.required),"isFocused"in o&&t(2,p=o.isFocused),"showErrors"in o&&t(4,_=o.showErrors),"name"in o&&t(5,S=o.name),"currentValue"in o&&t(1,q=o.currentValue),"$$scope"in o&&t(23,b=o.$$scope)},l.$$.update=()=>{var o,O;if(l.$$.dirty&65&&t(9,n=c!==void 0&&(m==null?void 0:m.getBoundingClientRect().width)||0),l.$$.dirty&128&&t(18,s=Array.from(((O=(o=k==null?void 0:k.querySelector(".aura-menu slot"))==null?void 0:o.assignedElements())==null?void 0:O.filter(w=>["AURA-OPTION"].includes(w.tagName)))??(k==null?void 0:k.querySelectorAll(".aura-menu > :is(aura-option)"))??[])),l.$$.dirty&262146)for(const w of s)w.setAttribute("tabindex","0"),w.tagName==="AURA-OPTION"&&(w.setAttribute("role","option"),q===Z(w)?w.setAttribute("aria-selected",""):w.removeAttribute("aria-selected"))},e=ee(e),[c,q,p,F,_,S,m,k,a,n,f,I,B,x,we,r,E,u,s,d,Oe,Ae,Ee,b]}class Ze extends qe{constructor(e){super(),Ve(this,e,Ye,Xe,Fe,{id:3,isOpen:0,required:17,isFocused:2,showErrors:4,name:5,currentValue:1})}}Ze.__docgen={version:3,name:"dropdown.svelte",data:[{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"isOpen",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"required",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"isFocused",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"showErrors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"currentValue",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"},bind:[{source:"input",property:"value"}]}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[{keywords:[],visibility:"public",description:"",name:"label"},{keywords:[],visibility:"public",description:"",name:"placeholder"},{keywords:[],visibility:"public",description:"",name:"default"},{keywords:[],visibility:"public",description:"",name:"errors"}],refs:[]};export{Ze as D};