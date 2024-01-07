import{O as pt,P as kt,B as z,S as yt,i as bt,s as Tt,Y as Ot,I as St,Z as rt,k as D,l as A,m as R,h as _,_ as ct,$ as ut,b as I,G as ot,J as Dt,K as At,L as Rt,a0 as Lt,f as V,t as Y,D as Ht,a1 as dt,a2 as Q,a3 as Vt,o as Et,a4 as Nt,a5 as Yt,V as wt,a6 as qt,q as w,a as F,w as X,r as M,c as U,x as G,n as nt,F as k,y as K,z as J,p as T}from"../../../chunks/index-071863ef.js";import{g as zt}from"../../../chunks/navigation-b98fa899.js";import{w as at,d as Bt}from"../../../chunks/index-7ae11b53.js";import{c as xt,q as Xt}from"../../../chunks/index-00e5c70a.js";import{_ as q}from"../../../chunks/StickyLayer.svelte_svelte_type_style_lang-bad6b39b.js";function It(e){return Object.prototype.toString.call(e)==="[object Date]"}function ht(e,t,l,n){if(typeof l=="number"||It(l)){const s=n-l,a=(l-t)/(e.dt||1/60),f=e.opts.stiffness*s,d=e.opts.damping*a,p=(f-d)*e.inv_mass,r=(a+p)*e.dt;return Math.abs(r)<e.opts.precision&&Math.abs(s)<e.opts.precision?n:(e.settled=!1,It(l)?new Date(l.getTime()+r):l+r)}else{if(Array.isArray(l))return l.map((s,a)=>ht(e,t[a],l[a],n[a]));if(typeof l=="object"){const s={};for(const a in l)s[a]=ht(e,t[a],l[a],n[a]);return s}else throw new Error(`Cannot spring ${typeof l} values`)}}function _t(e,t={}){const l=at(e),{stiffness:n=.15,damping:s=.8,precision:a=.01}=t;let f,d,p,r=e,c=e,m=1,O=0,g=!1;function u(v,o={}){c=v;const i=p={};return e==null||o.hard||y.stiffness>=1&&y.damping>=1?(g=!0,f=pt(),r=v,l.set(e=c),Promise.resolve()):(o.soft&&(O=1/((o.soft===!0?.5:+o.soft)*60),m=0),d||(f=pt(),g=!1,d=kt(E=>{if(g)return g=!1,d=null,!1;m=Math.min(m+O,1);const P={inv_mass:m,opts:y,settled:!0,dt:(E-f)*60/1e3},L=ht(P,r,e,c);return f=E,r=e,l.set(e=L),P.settled&&(d=null),!P.settled})),new Promise(E=>{d.promise.then(()=>{i===p&&E()})}))}const y={set:u,update:(v,o)=>u(v(c,e),o),subscribe:l.subscribe,stiffness:n,damping:s,precision:a};return y}function Gt(e=new Set){const t=at(e),l=n=>(...s)=>{let a;return t.update(f=>(a=f[n](...s),f)),a};return{...t,add:l("add"),delete:l("delete")}}const Mt={},gt=(e,t,l)=>e<t?t:e>l?l:e,Kt={container:"body",duration:500,delay:0,offset:0,easing:xt,onStart:z,onDone:z,onAborting:z,scrollX:!1,scrollY:!0},vt=["mousedown","wheel","DOMMouseScroll","mousewheel","keydown","touchmove"],Jt=e=>{let{offset:t,duration:l,delay:n,easing:s,x:a=0,y:f=0,scrollX:d,scrollY:p,onStart:r,onDone:c,container:m,onAborting:O,element:g}=e;typeof t=="function"&&(t=t());const u=q.cumulativeOffset(m),y=g?q.cumulativeOffset(g):{top:f,left:a},v=q.scrollLeft(m),o=q.scrollTop(m),i=y.left-u.left+t,E=y.top-u.top+t,P=i-v,L=E-o;let b=!0,j=!1,S=pt()+n,C=S+l;function $(N,et,st){d&&q.scrollLeft(N,st),p&&q.scrollTop(N,et)}function tt(N){N||(j=!0,r(g,{x:a,y:f})),q.addListeners(m,vt,H,{passive:!0})}function B(N){$(m,o+L*N,v+P*N)}function H(){b=!1,q.removeListeners(m,vt,H)}return kt(N=>{if(!j&&N>=S&&tt(!1),j&&N>=C)return B(1),H(),c(g,{x:a,y:f}),!1;if(!b)return O(g,{x:a,y:f}),!1;if(j){const et=N-S,st=0+1*s(et/l);B(st)}return!0}),tt(n),B(0),H},Wt=e=>{let t=q.extend({},Kt,e);return t.container=q.$(t.container),t.element=q.$(t.element),t},Zt=e=>Jt(Wt(e)),{scrollTo:Qt,setTimeout:Pt,window:lt}=Yt;function te(e){let t=!1,l=()=>{t=!1},n,s,a,f,d,p,r;Ot(e[26]),Ot(e[27]);const c=e[24].default,m=St(c,e,e[23],null);let O=[e[12],{class:a="parallax-container "+(e[12].class?e[12].class:"")},{style:f="height: "+e[1]*e[0]+"px; "+(e[12].style?e[12].style:"")+";"}],g={};for(let u=0;u<O.length;u+=1)g=rt(g,O[u]);return{c(){s=D("div"),m&&m.c(),this.h()},l(u){s=A(u,"DIV",{class:!0,style:!0});var y=R(s);m&&m.l(y),y.forEach(_),this.h()},h(){ct(s,g),ut(s,"svelte-15ph2c6",!0)},m(u,y){I(u,s,y),m&&m.m(s,null),e[28](s),d=!0,p||(r=[ot(lt,"resize",e[25]),ot(lt,"scroll",()=>{t=!0,clearTimeout(n),n=Pt(l,100),e[26]()}),ot(lt,"resize",e[27])],p=!0)},p(u,[y]){y&16&&!t&&(t=!0,clearTimeout(n),Qt(lt.pageXOffset,u[4]),n=Pt(l,100)),m&&m.p&&(!d||y&8388608)&&Dt(m,c,u,u[23],d?Rt(c,u[23],y,null):At(u[23]),null),ct(s,g=Lt(O,[y&4096&&u[12],(!d||y&4096&&a!==(a="parallax-container "+(u[12].class?u[12].class:"")))&&{class:a},(!d||y&4099&&f!==(f="height: "+u[1]*u[0]+"px; "+(u[12].style?u[12].style:"")+";"))&&{style:f}])),ut(s,"svelte-15ph2c6",!0)},i(u){d||(V(m,u),d=!0)},o(u){Y(m,u),d=!1},d(u){u&&_(s),m&&m.d(u),e[28](null),p=!1,Ht(r)}}}function ee(e,t,l){const n=["sections","sectionHeight","config","threshold","onProgress","onScroll","disabled","scrollTo"];let s=dt(t,n),a,f,d,p,r,c,{$$slots:m={},$$scope:O}=t,g,u,{sections:y=1}=t,{sectionHeight:v=void 0}=t,{config:o={stiffness:.017,damping:.26}}=t,{threshold:i={top:1,bottom:1}}=t,{onProgress:E=void 0}=t,{onScroll:P=void 0}=t,{disabled:L=!1}=t;const b=at(0);Q(e,b,h=>l(4,c=h));const j=at(0);Q(e,j,h=>l(29,f=h));const S=at(0);Q(e,S,h=>l(1,a=h));const C=_t(void 0,{...o,precision:.001});Q(e,C,h=>l(22,r=h));const $=Bt([b,j,S],([h,x,W],mt)=>{const it=h-x,ft=0-W+W*i.top,Ft=W*y-W*i.bottom,Ut=gt(it,ft,Ft);mt(Ut)});Q(e,$,h=>l(20,d=h));const tt=(h,x)=>{if(x===0){C.set(0);return}const W=x*y-x;C.set(gt(h/W,0,1))},B=Gt(new Set);Q(e,B,h=>l(21,p=h)),Vt(Mt,{config:o,addLayer:h=>{B.add(h)},removeLayer:h=>{B.delete(h)}}),Et(()=>{H()});const H=()=>{S.set(v||u),j.set(g.getBoundingClientRect().top+window.pageYOffset)};function N(h,{selector:x="",duration:W=500,easing:mt=Xt}={}){const it=f+a*(h-1),ft=()=>{document.querySelector(x).focus({preventScroll:!0})};if(L){window.scrollTo({top:it}),x&&ft();return}Zt({y:it,duration:W,easing:mt,onDone:x?ft:()=>{}})}const et=()=>setTimeout(H,0);function st(){b.set(c=lt.pageYOffset)}function Ct(){l(3,u=lt.innerHeight)}function $t(h){wt[h?"unshift":"push"](()=>{g=h,l(2,g)})}return e.$$set=h=>{t=rt(rt({},t),Nt(h)),l(12,s=dt(t,n)),"sections"in h&&l(0,y=h.sections),"sectionHeight"in h&&l(13,v=h.sectionHeight),"config"in h&&l(14,o=h.config),"threshold"in h&&l(15,i=h.threshold),"onProgress"in h&&l(16,E=h.onProgress),"onScroll"in h&&l(17,P=h.onScroll),"disabled"in h&&l(18,L=h.disabled),"$$scope"in h&&l(23,O=h.$$scope)},e.$$.update=()=>{e.$$.dirty&1179648&&P&&P(d),e.$$.dirty&1114114&&E&&tt(d,a),e.$$.dirty&4259840&&E&&E(r!=null?r:0),e.$$.dirty&2097154&&p.forEach(h=>{h.setHeight(a)}),e.$$.dirty&3407874&&p.forEach(h=>{h.setPosition(d,a,L)}),e.$$.dirty&8194&&a!==0&&H()},[y,a,g,u,c,b,j,S,C,$,B,H,s,v,o,i,E,P,L,N,d,p,r,O,m,et,st,Ct,$t]}class se extends yt{constructor(t){super(),bt(this,t,ee,te,Tt,{sections:0,sectionHeight:13,config:14,threshold:15,onProgress:16,onScroll:17,disabled:18,scrollTo:19})}get scrollTo(){return this.$$.ctx[19]}}const le=e=>({progress:e&1}),jt=e=>({progress:e[0]});function oe(e){let t,l,n,s;const a=e[12].default,f=St(a,e,e[11],jt);let d=[e[5],{class:l="parallax-layer "+(e[5].class?e[5].class:"")},{style:n=""+(e[5].style?e[5].style:"")+"; height: "+e[1]+"px; -ms-transform: "+e[2]+"; -webkit-transform: "+e[2]+"; transform: "+e[2]+";"}],p={};for(let r=0;r<d.length;r+=1)p=rt(p,d[r]);return{c(){t=D("div"),f&&f.c(),this.h()},l(r){t=A(r,"DIV",{class:!0,style:!0});var c=R(t);f&&f.l(c),c.forEach(_),this.h()},h(){ct(t,p),ut(t,"svelte-qcp0z5",!0)},m(r,c){I(r,t,c),f&&f.m(t,null),s=!0},p(r,[c]){f&&f.p&&(!s||c&2049)&&Dt(f,a,r,r[11],s?Rt(a,r[11],c,le):At(r[11]),jt),ct(t,p=Lt(d,[c&32&&r[5],(!s||c&32&&l!==(l="parallax-layer "+(r[5].class?r[5].class:"")))&&{class:l},(!s||c&38&&n!==(n=""+(r[5].style?r[5].style:"")+"; height: "+r[1]+"px; -ms-transform: "+r[2]+"; -webkit-transform: "+r[2]+"; transform: "+r[2]+";"))&&{style:n}])),ut(t,"svelte-qcp0z5",!0)},i(r){s||(V(f,r),s=!0)},o(r){Y(f,r),s=!1},d(r){r&&_(t),f&&f.d(r)}}}function ne(e,t,l){let n;const s=["rate","offset","span","onProgress"];let a=dt(t,s),f,d,{$$slots:p={},$$scope:r}=t,{rate:c=.5}=t,{offset:m=0}=t,{span:O=1}=t,{onProgress:g=void 0}=t;const{config:u,addLayer:y,removeLayer:v}=qt(Mt),o=_t(void 0,u);Q(e,o,b=>l(10,d=b));const i=_t(void 0,{...u,precision:.001});Q(e,i,b=>l(0,f=b));let E;const P={setPosition:(b,j,S)=>{if(S){o.set(m*j,{hard:!0});return}const C=Math.floor(m)*j,$=m*j+C*c;o.set(-(b*c)+$),i.set(L(b,c,$,j))},setHeight:b=>{l(1,E=O*b)}},L=(b,j,S,C)=>{const $=j+1,tt=S/$,B=j>=0?1:-1,H=C/$*B,N=tt-H,et=tt+H*O,st=(b-N)/(et-N);return gt(st,0,1)};return Et(()=>(y(P),()=>{v(P)})),e.$$set=b=>{t=rt(rt({},t),Nt(b)),l(5,a=dt(t,s)),"rate"in b&&l(6,c=b.rate),"offset"in b&&l(7,m=b.offset),"span"in b&&l(8,O=b.span),"onProgress"in b&&l(9,g=b.onProgress),"$$scope"in b&&l(11,r=b.$$scope)},e.$$.update=()=>{e.$$.dirty&1024&&l(2,n=`translate3d(0px, ${d}px, 0px);`),e.$$.dirty&513&&g&&g(f!=null?f:0)},[f,E,n,o,i,a,c,m,O,g,d,r,p]}class Z extends yt{constructor(t){super(),bt(this,t,ne,oe,Tt,{rate:6,offset:7,span:8,onProgress:9})}}function re(e){let t,l,n,s,a,f,d,p,r,c,m,O,g,u,y,v,o;return{c(){t=D("h1"),l=w("TOP"),n=F(),s=D("ul"),a=D("li"),f=w("Clams Logo"),d=F(),p=D("li"),r=w("Tagline"),c=F(),m=D("li"),O=w("Ethos"),g=F(),u=D("button"),y=w("Scroll to bottom"),this.h()},l(i){t=A(i,"H1",{class:!0});var E=R(t);l=M(E,"TOP"),E.forEach(_),n=U(i),s=A(i,"UL",{class:!0});var P=R(s);a=A(P,"LI",{});var L=R(a);f=M(L,"Clams Logo"),L.forEach(_),d=U(P),p=A(P,"LI",{});var b=R(p);r=M(b,"Tagline"),b.forEach(_),c=U(P),m=A(P,"LI",{});var j=R(m);O=M(j,"Ethos"),j.forEach(_),P.forEach(_),g=U(i),u=A(i,"BUTTON",{class:!0});var S=R(u);y=M(S,"Scroll to bottom"),S.forEach(_),this.h()},h(){nt(t,"class","svelte-jajdri"),nt(s,"class","text-2xl list-disc list-inside"),nt(u,"class","bottom-btn svelte-jajdri")},m(i,E){I(i,t,E),k(t,l),I(i,n,E),I(i,s,E),k(s,a),k(a,f),k(s,d),k(s,p),k(p,r),k(s,c),k(s,m),k(m,O),I(i,g,E),I(i,u,E),k(u,y),v||(o=ot(u,"click",e[3]),v=!0)},p:z,d(i){i&&_(t),i&&_(n),i&&_(s),i&&_(g),i&&_(u),v=!1,o()}}}function ae(e){let t,l;return{c(){t=D("div"),l=w("FEATURE 1 DESCRIPTION"),this.h()},l(n){t=A(n,"DIV",{style:!0});var s=R(t);l=M(s,"FEATURE 1 DESCRIPTION"),s.forEach(_),this.h()},h(){T(t,"background-color","orange"),T(t,"display","flex"),T(t,"justify-content","center"),T(t,"align-items","center"),T(t,"width","50%"),T(t,"height","100%")},m(n,s){I(n,t,s),k(t,l)},p:z,d(n){n&&_(t)}}}function ie(e){let t,l;return{c(){t=D("div"),l=w("FEATURE 1 ICON"),this.h()},l(n){t=A(n,"DIV",{style:!0});var s=R(t);l=M(s,"FEATURE 1 ICON"),s.forEach(_),this.h()},h(){T(t,"background-color","lightblue"),T(t,"display","flex"),T(t,"justify-content","center"),T(t,"align-items","center"),T(t,"width","50%"),T(t,"height","100%")},m(n,s){I(n,t,s),k(t,l)},p:z,d(n){n&&_(t)}}}function fe(e){let t,l;return{c(){t=D("div"),l=w("INFORMATION 1"),this.h()},l(n){t=A(n,"DIV",{style:!0});var s=R(t);l=M(s,"INFORMATION 1"),s.forEach(_),this.h()},h(){T(t,"border","1px solid red"),T(t,"display","flex"),T(t,"justify-content","center"),T(t,"align-items","center"),T(t,"width","100%"),T(t,"height","100%")},m(n,s){I(n,t,s),k(t,l)},p:z,d(n){n&&_(t)}}}function ce(e){let t,l;return{c(){t=D("div"),l=w("FEATURE 2 DESCRIPTION"),this.h()},l(n){t=A(n,"DIV",{style:!0});var s=R(t);l=M(s,"FEATURE 2 DESCRIPTION"),s.forEach(_),this.h()},h(){T(t,"background-color","orange"),T(t,"display","flex"),T(t,"justify-content","center"),T(t,"align-items","center"),T(t,"width","50%"),T(t,"height","100%")},m(n,s){I(n,t,s),k(t,l)},p:z,d(n){n&&_(t)}}}function ue(e){let t,l;return{c(){t=D("div"),l=w("FEATURE 2 IMAGE"),this.h()},l(n){t=A(n,"DIV",{style:!0});var s=R(t);l=M(s,"FEATURE 2 IMAGE"),s.forEach(_),this.h()},h(){T(t,"background-color","lightblue"),T(t,"display","flex"),T(t,"justify-content","center"),T(t,"align-items","center"),T(t,"width","50%"),T(t,"height","100%")},m(n,s){I(n,t,s),k(t,l)},p:z,d(n){n&&_(t)}}}function de(e){let t,l;return{c(){t=D("div"),l=w("INFORMATION 2"),this.h()},l(n){t=A(n,"DIV",{style:!0});var s=R(t);l=M(s,"INFORMATION 2"),s.forEach(_),this.h()},h(){T(t,"border","1px solid red"),T(t,"display","flex"),T(t,"justify-content","center"),T(t,"align-items","center"),T(t,"width","100%"),T(t,"height","100%")},m(n,s){I(n,t,s),k(t,l)},p:z,d(n){n&&_(t)}}}function me(e){let t,l,n,s,a,f,d;return{c(){t=D("h1"),l=w("BOTTOM"),n=F(),s=D("button"),a=w("scroll to top"),this.h()},l(p){t=A(p,"H1",{class:!0});var r=R(t);l=M(r,"BOTTOM"),r.forEach(_),n=U(p),s=A(p,"BUTTON",{class:!0});var c=R(s);a=M(c,"scroll to top"),c.forEach(_),this.h()},h(){nt(t,"class","svelte-jajdri"),nt(s,"class","top-btn svelte-jajdri")},m(p,r){I(p,t,r),k(t,l),I(p,n,r),I(p,s,r),k(s,a),f||(d=ot(s,"click",e[4]),f=!0)},p:z,d(p){p&&_(t),p&&_(n),p&&_(s),f=!1,d()}}}function pe(e){let t,l,n,s,a,f,d,p,r,c,m,O,g,u,y,v;return t=new Z({props:{offset:0,rate:1,style:`
		background-color: pink; 
		display: flex; 
		justify-content: center; 
		align-items: center; 
		flex-direction: column;
	`,$$slots:{default:[re]},$$scope:{ctx:e}}}),n=new Z({props:{offset:1,rate:2.5,style:"display: flex; justify-content: flex-start;",$$slots:{default:[ae]},$$scope:{ctx:e}}}),a=new Z({props:{offset:1,rate:-2.5,style:"display: flex; justify-content: flex-end;",$$slots:{default:[ie]},$$scope:{ctx:e}}}),d=new Z({props:{offset:2,rate:0,style:"display: flex; justify-content: flex-end;",$$slots:{default:[fe]},$$scope:{ctx:e}}}),r=new Z({props:{offset:3,rate:2.5,style:"display: flex; justify-content: flex-start;",$$slots:{default:[ce]},$$scope:{ctx:e}}}),m=new Z({props:{offset:3,rate:-2.5,style:"display: flex; justify-content: flex-end;",$$slots:{default:[ue]},$$scope:{ctx:e}}}),g=new Z({props:{offset:4,rate:0,style:"display: flex; justify-content: flex-end;",$$slots:{default:[de]},$$scope:{ctx:e}}}),y=new Z({props:{offset:5,rate:2,style:`
		  background-color: pink; 
			display: flex; 
			justify-content: center; 
			align-items: center; 
			flex-direction: column;
		`,$$slots:{default:[me]},$$scope:{ctx:e}}}),{c(){X(t.$$.fragment),l=F(),X(n.$$.fragment),s=F(),X(a.$$.fragment),f=F(),X(d.$$.fragment),p=F(),X(r.$$.fragment),c=F(),X(m.$$.fragment),O=F(),X(g.$$.fragment),u=F(),X(y.$$.fragment)},l(o){G(t.$$.fragment,o),l=U(o),G(n.$$.fragment,o),s=U(o),G(a.$$.fragment,o),f=U(o),G(d.$$.fragment,o),p=U(o),G(r.$$.fragment,o),c=U(o),G(m.$$.fragment,o),O=U(o),G(g.$$.fragment,o),u=U(o),G(y.$$.fragment,o)},m(o,i){K(t,o,i),I(o,l,i),K(n,o,i),I(o,s,i),K(a,o,i),I(o,f,i),K(d,o,i),I(o,p,i),K(r,o,i),I(o,c,i),K(m,o,i),I(o,O,i),K(g,o,i),I(o,u,i),K(y,o,i),v=!0},p(o,i){const E={};i&65&&(E.$$scope={dirty:i,ctx:o}),t.$set(E);const P={};i&64&&(P.$$scope={dirty:i,ctx:o}),n.$set(P);const L={};i&64&&(L.$$scope={dirty:i,ctx:o}),a.$set(L);const b={};i&64&&(b.$$scope={dirty:i,ctx:o}),d.$set(b);const j={};i&64&&(j.$$scope={dirty:i,ctx:o}),r.$set(j);const S={};i&64&&(S.$$scope={dirty:i,ctx:o}),m.$set(S);const C={};i&64&&(C.$$scope={dirty:i,ctx:o}),g.$set(C);const $={};i&65&&($.$$scope={dirty:i,ctx:o}),y.$set($)},i(o){v||(V(t.$$.fragment,o),V(n.$$.fragment,o),V(a.$$.fragment,o),V(d.$$.fragment,o),V(r.$$.fragment,o),V(m.$$.fragment,o),V(g.$$.fragment,o),V(y.$$.fragment,o),v=!0)},o(o){Y(t.$$.fragment,o),Y(n.$$.fragment,o),Y(a.$$.fragment,o),Y(d.$$.fragment,o),Y(r.$$.fragment,o),Y(m.$$.fragment,o),Y(g.$$.fragment,o),Y(y.$$.fragment,o),v=!1},d(o){J(t,o),o&&_(l),J(n,o),o&&_(s),J(a,o),o&&_(f),J(d,o),o&&_(p),J(r,o),o&&_(c),J(m,o),o&&_(O),J(g,o),o&&_(u),J(y,o)}}}function he(e){let t,l,n,s,a,f,d,p={sections:6,disabled:e[1],$$slots:{default:[pe]},$$scope:{ctx:e}};return s=new se({props:p}),e[5](s),{c(){t=D("button"),l=w("disable"),n=F(),X(s.$$.fragment),this.h()},l(r){t=A(r,"BUTTON",{class:!0});var c=R(t);l=M(c,"disable"),c.forEach(_),n=U(r),G(s.$$.fragment,r),this.h()},h(){nt(t,"class","disable svelte-jajdri")},m(r,c){I(r,t,c),k(t,l),I(r,n,c),K(s,r,c),a=!0,f||(d=ot(t,"click",e[2]),f=!0)},p(r,[c]){const m={};c&2&&(m.disabled=r[1]),c&65&&(m.$$scope={dirty:c,ctx:r}),s.$set(m)},i(r){a||(V(s.$$.fragment,r),a=!0)},o(r){Y(s.$$.fragment,r),a=!1},d(r){r&&_(t),r&&_(n),e[5](null),J(s,r),f=!1,d()}}}function _e(e,t,l){let n,s=!1;Et(()=>{zt("/")});const a=()=>l(1,s=!s),f=()=>n.scrollTo(6,{selector:".top-btn",duration:4e3}),d=()=>n.scrollTo(1,{selector:".bottom-btn",duration:1e3});function p(r){wt[r?"unshift":"push"](()=>{n=r,l(0,n)})}return[n,s,a,f,d,p]}class Oe extends yt{constructor(t){super(),bt(this,t,_e,he,Tt,{})}}export{Oe as default};
