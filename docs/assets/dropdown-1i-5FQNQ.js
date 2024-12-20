import{S as he,i as ye,s as ke,e as D,c as K,a as L,m as M,y as ge,t as b,g as P,b as g,f as N,z as we,d as R,w as re,v as J,h as ve,j as Q,k as B,u as j,l as z,o as H,p as X,n as Y}from"./index-NJt023ZH.js";import{e as S,s as U,v as Z,f as V,g as q,c as T,d as w,q as $,r as x,i as O,j as ne,w as F,y as C,x as Oe,m as E,h as ee,t as ie,a as ae,b as Ae}from"./lifecycle-BlJB78Bc.js";import{g as Ee}from"./spread-CgU5AtxT.js";import{I as Fe}from"./icon-DDtBIZCk.js";import{F as Se}from"./float-DrEaqgkl.js";import{F as Ve}from"./form-item-BIc6HSZn.js";function qe(s,e){let t;const o=r=>{t&&document.removeEventListener("click",t),t=l=>{l.composedPath().includes(s)||r&&r(l)},document.addEventListener("click",t)};return o(e),{destroy(){document.removeEventListener("click",t)},update(r){o(r)}}}function Ie(s){return new Promise(e=>{if(document.querySelector(s))return e(document.querySelector(s));const t=new MutationObserver(()=>{document.querySelector(s)&&(t.disconnect(),e(document.querySelector(s)))});t.observe(document.body,{childList:!0,subtree:!0})})}const De=s=>({}),te=s=>({}),Pe=s=>({}),se=s=>({});function Ne(s){let e;const t=s[15].placeholder,o=B(t,s,s[18],se),r=o||Te();return{c(){r&&r.c()},l(l){r&&r.l(l)},m(l,a){r&&r.m(l,a),e=!0},p(l,a){o&&o.p&&(!e||a&262144)&&j(o,t,l,l[18],e?H(t,l[18],a,Pe):z(l[18]),se)},i(l){e||(b(r,l),e=!0)},o(l){g(r,l),e=!1},d(l){r&&r.d(l)}}}function Ue(s){let e;return{c(){e=ie(s[1])},l(t){e=ae(t,s[1])},m(t,o){O(t,e,o)},p(t,o){o&2&&Ae(e,t[1])},i:Y,o:Y,d(t){t&&w(e)}}}function Te(s){let e;return{c(){e=ie("select...")},l(t){e=ae(t,"select...")},m(t,o){O(t,e,o)},d(t){t&&w(e)}}}function Ce(s){let e,t,o,r,l,a,f,m;const v=[Ue,Ne],h=[];function c(p,_){return p[1]?0:1}return t=c(s),o=h[t]=v[t](s),l=new Fe({props:{name:"caret-down",size:"small"}}),{c(){e=S("button"),o.c(),r=U(),K(l.$$.fragment),this.h()},l(p){e=V(p,"BUTTON",{class:!0});var _=q(e);o.l(_),r=T(_),L(l.$$.fragment,_),_.forEach(w),this.h()},h(){E(e,"class","trigger svelte-abx6ep")},m(p,_){O(p,e,_),h[t].m(e,null),ne(e,r),M(l,e,null),a=!0,f||(m=F(e,"focus",s[9]),f=!0)},p(p,_){let d=t;t=c(p),t===d?h[t].p(p,_):(P(),g(h[d],1,1,()=>{h[d]=null}),N(),o=h[t],o?o.p(p,_):(o=h[t]=v[t](p),o.c()),b(o,1),o.m(e,r))},i(p){a||(b(o),b(l.$$.fragment,p),a=!0)},o(p){g(o),g(l.$$.fragment,p),a=!1},d(p){p&&w(e),h[t].d(),R(l),f=!1,m()}}}function le(s){let e,t;return e=new Se({props:{target:s[4],$$slots:{default:[Ke]},$$scope:{ctx:s}}}),{c(){K(e.$$.fragment)},l(o){L(e.$$.fragment,o)},m(o,r){M(e,o,r),t=!0},p(o,r){const l={};r&16&&(l.target=o[4]),r&262240&&(l.$$scope={dirty:r,ctx:o}),e.$set(l)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){R(e,o)}}}function Ke(s){let e,t,o,r;const l=s[15].default,a=B(l,s,s[18],null);return{c(){e=S("div"),a&&a.c(),this.h()},l(f){e=V(f,"DIV",{role:!0,tabindex:!0,class:!0});var m=q(e);a&&a.l(m),m.forEach(w),this.h()},h(){E(e,"role","menu"),E(e,"tabindex","-1"),E(e,"class","aura-menu svelte-abx6ep"),ee(e,"--aura-menu-control-width",`${s[6]}px`)},m(f,m){O(f,e,m),a&&a.m(e,null),s[16](e),t=!0,o||(r=[F(e,"keypress",s[10]),F(e,"click",C(s[11]))],o=!0)},p(f,m){a&&a.p&&(!t||m&262144)&&j(a,l,f,f[18],t?H(l,f[18],m,null):z(f[18]),null),m&64&&ee(e,"--aura-menu-control-width",`${f[6]}px`)},i(f){t||(b(a,f),t=!0)},o(f){g(a,f),t=!1},d(f){f&&w(e),a&&a.d(f),s[16](null),o=!1,re(r)}}}function oe(s){let e,t;const o=s[15].errors,r=B(o,s,s[18],te);return{c(){e=S("div"),r&&r.c(),this.h()},l(l){e=V(l,"DIV",{class:!0});var a=q(e);r&&r.l(a),a.forEach(w),this.h()},h(){E(e,"class","errors-text svelte-abx6ep")},m(l,a){O(l,e,a),r&&r.m(e,null),t=!0},p(l,a){r&&r.p&&(!t||a&262144)&&j(r,o,l,l[18],t?H(o,l[18],a,De):z(l[18]),te)},i(l){t||(b(r,l),t=!0)},o(l){g(r,l),t=!1},d(l){l&&w(e),r&&r.d(l)}}}function Le(s){let e,t,o,r,l,a,f,m,v,h;t=new Ve({props:{showFocusOutline:s[0]||s[2],error:s[13].errors&&s[3],$$slots:{default:[Ce]},$$scope:{ctx:s}}});let c=s[0]&&le(s),p=[s[12],{class:r=`aura-dropdown ${s[12].class}`},{tabindex:"-1"},{role:"button"}],_={};for(let i=0;i<p.length;i+=1)_=D(_,p[i]);let d=s[3]&&oe(s);return{c(){e=S("div"),K(t.$$.fragment),o=U(),c&&c.c(),a=U(),d&&d.c(),f=Z(),this.h()},l(i){e=V(i,"DIV",{class:!0,tabindex:!0,role:!0});var u=q(e);L(t.$$.fragment,u),o=T(u),c&&c.l(u),u.forEach(w),a=T(i),d&&d.l(i),f=Z(),this.h()},h(){$(e,_),x(e,"svelte-abx6ep",!0)},m(i,u){O(i,e,u),M(t,e,null),ne(e,o),c&&c.m(e,null),s[17](e),O(i,a,u),d&&d.m(i,u),O(i,f,u),m=!0,v||(h=[ge(l=qe.call(null,e,(s[0]||s[2])&&s[8])),F(e,"keydown",C(s[10])),F(e,"click",C(s[7]))],v=!0)},p(i,[u]){const A={};u&5&&(A.showFocusOutline=i[0]||i[2]),u&8200&&(A.error=i[13].errors&&i[3]),u&262146&&(A.$$scope={dirty:u,ctx:i}),t.$set(A),i[0]?c?(c.p(i,u),u&1&&b(c,1)):(c=le(i),c.c(),b(c,1),c.m(e,null)):c&&(P(),g(c,1,1,()=>{c=null}),N()),$(e,_=Ee(p,[u&4096&&i[12],(!m||u&4096&&r!==(r=`aura-dropdown ${i[12].class}`))&&{class:r},{tabindex:"-1"},{role:"button"}])),l&&we(l.update)&&u&5&&l.update.call(null,(i[0]||i[2])&&i[8]),x(e,"svelte-abx6ep",!0),i[3]?d?(d.p(i,u),u&8&&b(d,1)):(d=oe(i),d.c(),b(d,1),d.m(f.parentNode,f)):d&&(P(),g(d,1,1,()=>{d=null}),N())},i(i){m||(b(t.$$.fragment,i),b(c),b(d),m=!0)},o(i){g(t.$$.fragment,i),g(c),g(d),m=!1},d(i){i&&(w(e),w(a),w(f)),R(t),c&&c.d(),s[17](null),d&&d.d(i),v=!1,re(h)}}}function Me(s,e,t){let o,r;const l=["isOpen","isFocused","showErrors","currentValue"];let a=J(e,l),{$$slots:f={},$$scope:m}=e;const v=ve(f),h=Oe();let{isOpen:c=!1}=e,{isFocused:p=!1}=e,{showErrors:_=!1}=e,{currentValue:d}=e,i,u;const A=()=>{t(0,c=!c)},I=()=>{t(0,c=!1),t(2,p=!1)},ue=()=>{t(2,p=!0)},W=n=>n.getAttribute("value")??n.value??n.textContent,ce=n=>{const y=r.find(k=>n.composedPath().includes(k));if(y.tagName==="AURA-OPTION"){const k=W(y);e.currentValue||t(1,d=k),h("change",{value:k})}},fe=async n=>{t(0,c=!0),await Ie(".aura-menu"),G(n)},de=n=>{n.preventDefault();let y=u.querySelector("aura-option[aria-selected] + aura-option");y||(y=u.querySelector("aura-option:first-of-type")),y.click()},pe=n=>{n.preventDefault();let y=u.querySelector("aura-option:has( + aura-option[aria-selected])");y||(y=u.querySelector("aura-option:last-of-type")),y.click()},G=async n=>{n.code==="Escape"||n.code==="Tab"?I():!c&&(n.code==="ArrowDown"||n.code==="ArrowUp")?await fe(n):n.code==="ArrowDown"?de(n):n.code==="ArrowUp"&&pe(n)},me=n=>{ce(n),n.pointerId!==-1&&I()};function _e(n){X[n?"unshift":"push"](()=>{u=n,t(5,u)})}function be(n){X[n?"unshift":"push"](()=>{i=n,t(4,i)})}return s.$$set=n=>{t(25,e=D(D({},e),Q(n))),t(12,a=J(e,l)),"isOpen"in n&&t(0,c=n.isOpen),"isFocused"in n&&t(2,p=n.isFocused),"showErrors"in n&&t(3,_=n.showErrors),"currentValue"in n&&t(1,d=n.currentValue),"$$scope"in n&&t(18,m=n.$$scope)},s.$$.update=()=>{var n,y;if(s.$$.dirty&17&&t(6,o=c!==void 0&&(i==null?void 0:i.getBoundingClientRect().width)||0),s.$$.dirty&32&&t(14,r=Array.from(((y=(n=u==null?void 0:u.querySelector(".aura-menu slot"))==null?void 0:n.assignedElements())==null?void 0:y.filter(k=>["AURA-OPTION"].includes(k.tagName)))??(u==null?void 0:u.querySelectorAll(".aura-menu > :is(aura-option)"))??[])),s.$$.dirty&16386)for(const k of r)k.setAttribute("tabindex","0"),k.tagName==="AURA-OPTION"&&(k.setAttribute("role","option"),d===W(k)?k.setAttribute("aria-selected",""):k.removeAttribute("aria-selected"))},e=Q(e),[c,d,p,_,i,u,o,A,I,ue,G,me,a,v,r,f,_e,be,m]}class Re extends he{constructor(e){super(),ye(this,e,Me,Le,ke,{isOpen:0,isFocused:2,showErrors:3,currentValue:1})}}Re.__docgen={version:3,name:"dropdown.svelte",data:[{visibility:"public",description:null,keywords:[],name:"isOpen",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"isFocused",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"showErrors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"currentValue",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[{keywords:[],visibility:"public",description:"",name:"placeholder"},{keywords:[],visibility:"public",description:"",name:"default"},{keywords:[],visibility:"public",description:"",name:"errors"}],refs:[]};export{Re as D};
