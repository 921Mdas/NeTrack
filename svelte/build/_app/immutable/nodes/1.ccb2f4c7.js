import{S,i as q,s as x,k as _,q as f,a as P,l as d,m as g,r as h,h as u,c as k,b as m,E as v,u as E,O as $,P as y}from"../chunks/index.10087578.js";import{s as C}from"../chunks/singletons.d3471126.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},O={subscribe(s){return H().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=P(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=k(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:$,o:$,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function w(s,t,r){let o;return y(s,O,n=>r(0,o=n)),[o]}let B=class extends S{constructor(t){super(),q(this,t,w,j,x,{})}};export{B as component};
