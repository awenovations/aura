let _=!1;function P(){_=!0}function j(){_=!1}function b(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function v(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let o=0;o<t.length;o++){const u=t[o];u.claim_order!==void 0&&c.push(u)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let c=0;c<t.length;c++){const o=t[c].claim_order,u=(r>0&&t[n[r]].claim_order<=o?r+1:b(1,r,x=>t[n[x]].claim_order,o))-1;i[c]=n[u]+1;const h=u+1;n[h]=c,r=Math.max(h,r)}const a=[],l=[];let s=t.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(t[c-1]);s>=c;s--)l.push(t[s]);s--}for(;s>=0;s--)l.push(t[s]);a.reverse(),l.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<l.length;c++){for(;o<a.length&&l[c].claim_order>=a[o].claim_order;)o++;const u=o<a.length?a[o]:null;e.insertBefore(l[c],u)}}function g(e,t){if(_){for(v(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function B(e,t,n){_&&!n?g(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function D(e){e.parentNode&&e.parentNode.removeChild(e)}function L(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function S(){return d(" ")}function T(){return d("")}function k(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function O(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const N=["width","height"];function q(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&N.indexOf(i)===-1?e[i]=t[i]:p(e,i,t[i])}function z(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:p(e,t,n)}function H(e){return e.dataset.svelteH}function I(e){return Array.from(e.childNodes)}function A(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function y(e,t,n,i,r=!1){A(e);const a=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const s=e[l];if(t(s)){const c=n(s);return c===void 0?e.splice(l,1):e[l]=c,r||(e.claim_info.last_index=l),s}}for(let l=e.claim_info.last_index-1;l>=0;l--){const s=e[l];if(t(s)){const c=n(s);return c===void 0?e.splice(l,1):e[l]=c,r?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,s}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function E(e,t,n,i){return y(e,r=>r.nodeName===t,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];n[s.name]||a.push(s.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(t))}function M(e,t,n){return E(e,t,n,w)}function $(e,t){return y(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>d(t),!0)}function F(e){return $(e," ")}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}function G(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function J(e,t,n){e.classList.toggle(t,!!n)}function C(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function K(e,t){return new e(t)}let m;function Q(e){m=e}function f(){if(!m)throw new Error("Function called outside component initialization");return m}function R(e){f().$$.on_mount.push(e)}function U(){const e=f();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const a=C(t,n,{cancelable:i});return r.slice().forEach(l=>{l.call(e,a)}),!a.defaultPrevented}return!0}}function V(e,t){return f().$$.context.set(e,t),t}function X(e){return f().$$.context.get(e)}function Y(e){return f().$$.context.has(e)}export{P as A,j as B,O as C,Y as D,K as E,M as a,I as b,F as c,D as d,w as e,G as f,g,H as h,B as i,z as j,p as k,$ as l,V as m,X as n,R as o,T as p,U as q,q as r,S as s,d as t,J as u,k as v,L as w,W as x,Q as y,m as z};
