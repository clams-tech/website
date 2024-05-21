import{F as mt,G as St,B as V,S as yt,i as Tt,s as bt,X as Et,P as jt,Y as rt,k,l as w,m as A,h as g,Z as ct,J as ut,b as O,L as ot,Q as kt,R as wt,T as At,_ as Dt,f as x,t as Y,D as xt,$ as dt,U as Z,a0 as Yt,o as vt,a1 as Mt,a2 as qt,a3 as Nt,a4 as Vt,q as N,a as $,w as B,r as R,c as C,x as G,n as nt,K as S,y as W,z as K,p as b}from"../../../chunks/index-b03908d8.js";import{g as Xt}from"../../../chunks/navigation-b587decf.js";import{w as it,d as zt}from"../../../chunks/index-0f2c68a6.js";import{c as Bt,q as Gt}from"../../../chunks/index-060af8bc.js";function Ot(e){return Object.prototype.toString.call(e)==="[object Date]"}function ht(e,t,s,o){if(typeof s=="number"||Ot(s)){const l=o-s,a=(s-t)/(e.dt||1/60),i=e.opts.stiffness*l,c=e.opts.damping*a,p=(i-c)*e.inv_mass,r=(a+p)*e.dt;return Math.abs(r)<e.opts.precision&&Math.abs(l)<e.opts.precision?o:(e.settled=!1,Ot(s)?new Date(s.getTime()+r):s+r)}else{if(Array.isArray(s))return s.map((l,a)=>ht(e,t[a],s[a],o[a]));if(typeof s=="object"){const l={};for(const a in s)l[a]=ht(e,t[a],s[a],o[a]);return l}else throw new Error(`Cannot spring ${typeof s} values`)}}function gt(e,t={}){const s=it(e),{stiffness:o=.15,damping:l=.8,precision:a=.01}=t;let i,c,p,r=e,u=e,m=1,E=0,_=!1;function d(L,n={}){u=L;const f=p={};return e==null||n.hard||y.stiffness>=1&&y.damping>=1?(_=!0,i=mt(),r=L,s.set(e=u),Promise.resolve()):(n.soft&&(E=1/((n.soft===!0?.5:+n.soft)*60),m=0),c||(i=mt(),_=!1,c=St(v=>{if(_)return _=!1,c=null,!1;m=Math.min(m+E,1);const P={inv_mass:m,opts:y,settled:!0,dt:(v-i)*60/1e3},D=ht(P,r,e,u);return i=v,r=e,s.set(e=D),P.settled&&(c=null),!P.settled})),new Promise(v=>{c.promise.then(()=>{f===p&&v()})}))}const y={set:d,update:(L,n)=>d(L(u,e),n),subscribe:s.subscribe,stiffness:o,damping:l,precision:a};return y}function Wt(e=new Set){const t=it(e),s=o=>(...l)=>{let a;return t.update(i=>(a=i[o](...l),i)),a};return{...t,add:s("add"),delete:s("delete")}}const Rt={},_t=(e,t,s)=>e<t?t:e>s?s:e;let Ft=!1;try{let e=Object.defineProperty({},"passive",{get:function(){Ft=!0}});window.addEventListener("test",null,e)}catch{}const q={$(e){return typeof e=="string"?document.querySelector(e):e},extend(...e){return Object.assign(...e)},addListeners(e,t,s,o={passive:!1}){t instanceof Array||(t=[t]);for(let l=0;l<t.length;l++)e.addEventListener(t[l],s,Ft?o:!1)},removeListeners(e,t,s){t instanceof Array||(t=[t]);for(let o=0;o<t.length;o++)e.removeEventListener(t[o],s)},cumulativeOffset(e){let t=0,s=0;do t+=e.offsetTop||0,s+=e.offsetLeft||0,e=e.offsetParent;while(e);return{top:t,left:s}},directScroll(e){return e&&e!==document&&e!==document.body},scrollTop(e,t){let s=t!==void 0;return this.directScroll(e)?s?e.scrollTop=t:e.scrollTop:s?document.documentElement.scrollTop=document.body.scrollTop=t:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(e,t){let s=t!==void 0;return this.directScroll(e)?s?e.scrollLeft=t:e.scrollLeft:s?document.documentElement.scrollLeft=document.body.scrollLeft=t:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},Kt={container:"body",duration:500,delay:0,offset:0,easing:Bt,onStart:V,onDone:V,onAborting:V,scrollX:!1,scrollY:!0},Lt=["mousedown","wheel","DOMMouseScroll","mousewheel","keydown","touchmove"],Jt=e=>{let{offset:t,duration:s,delay:o,easing:l,x:a=0,y:i=0,scrollX:c,scrollY:p,onStart:r,onDone:u,container:m,onAborting:E,element:_}=e;typeof t=="function"&&(t=t());const d=q.cumulativeOffset(m),y=_?q.cumulativeOffset(_):{top:i,left:a},L=q.scrollLeft(m),n=q.scrollTop(m),f=y.left-d.left+t,v=y.top-d.top+t,P=f-L,D=v-n;let T=!0,I=!1,j=mt()+o,F=j+s;function H(M,et,st){c&&q.scrollLeft(M,st),p&&q.scrollTop(M,et)}function tt(M){M||(I=!0,r(_,{x:a,y:i})),q.addListeners(m,Lt,U,{passive:!0})}function X(M){H(m,n+D*M,L+P*M)}function U(){T=!1,q.removeListeners(m,Lt,U)}return St(M=>{if(!I&&M>=j&&tt(!1),I&&M>=F)return X(1),U(),u(_,{x:a,y:i}),!1;if(!T)return E(_,{x:a,y:i}),!1;if(I){const et=M-j,st=0+1*l(et/s);X(st)}return!0}),tt(o),X(0),U},Qt=e=>{let t=q.extend({},Kt,e);return t.container=q.$(t.container),t.element=q.$(t.element),t},Zt=e=>Jt(Qt(e));(function(){if(!(typeof window>"u"||typeof document>"u"||typeof HTMLElement>"u")){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",function(a){a.preventDefault(),a.stopPropagation()},!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&typeof navigator.userAgent<"u"&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return e=!1;e=!0}}))}catch{}if(HTMLElement.prototype.nativeFocus===void 0&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var s=function(a){for(var i=a.parentNode,c=[],p=document.scrollingElement||document.documentElement;i&&i!==p;)(i.offsetHeight<i.scrollHeight||i.offsetWidth<i.scrollWidth)&&c.push([i,i.scrollTop,i.scrollLeft]),i=i.parentNode;return i=p,c.push([i,i.scrollTop,i.scrollLeft]),c},o=function(a){for(var i=0;i<a.length;i++)a[i][0].scrollTop=a[i][1],a[i][0].scrollLeft=a[i][2];a=[]},l=function(a){if(a&&a.preventScroll){var i=s(this);if(typeof setTimeout=="function"){var c=this;setTimeout(function(){c.nativeFocus(),o(i)},0)}else this.nativeFocus(),o(i)}else this.nativeFocus()};HTMLElement.prototype.focus=l}}})();const{scrollTo:te,setTimeout:Pt,window:lt}=qt;function ee(e){let t=!1,s=()=>{t=!1},o,l,a,i,c,p,r;Et(e[26]),Et(e[27]);const u=e[24].default,m=jt(u,e,e[23],null);let E=[e[12],{class:a="parallax-container "+(e[12].class?e[12].class:"")},{style:i="height: "+e[1]*e[0]+"px; "+(e[12].style?e[12].style:"")+";"}],_={};for(let d=0;d<E.length;d+=1)_=rt(_,E[d]);return{c(){l=k("div"),m&&m.c(),this.h()},l(d){l=w(d,"DIV",{class:!0,style:!0});var y=A(l);m&&m.l(y),y.forEach(g),this.h()},h(){ct(l,_),ut(l,"svelte-15ph2c6",!0)},m(d,y){O(d,l,y),m&&m.m(l,null),e[28](l),c=!0,p||(r=[ot(lt,"resize",e[25]),ot(lt,"scroll",()=>{t=!0,clearTimeout(o),o=Pt(s,100),e[26]()}),ot(lt,"resize",e[27])],p=!0)},p(d,[y]){y&16&&!t&&(t=!0,clearTimeout(o),te(lt.pageXOffset,d[4]),o=Pt(s,100)),m&&m.p&&(!c||y&8388608)&&kt(m,u,d,d[23],c?At(u,d[23],y,null):wt(d[23]),null),ct(l,_=Dt(E,[y&4096&&d[12],(!c||y&4096&&a!==(a="parallax-container "+(d[12].class?d[12].class:"")))&&{class:a},(!c||y&4099&&i!==(i="height: "+d[1]*d[0]+"px; "+(d[12].style?d[12].style:"")+";"))&&{style:i}])),ut(l,"svelte-15ph2c6",!0)},i(d){c||(x(m,d),c=!0)},o(d){Y(m,d),c=!1},d(d){d&&g(l),m&&m.d(d),e[28](null),p=!1,xt(r)}}}function se(e,t,s){const o=["sections","sectionHeight","config","threshold","onProgress","onScroll","disabled","scrollTo"];let l=dt(t,o),a,i,c,p,r,u,{$$slots:m={},$$scope:E}=t,_,d,{sections:y=1}=t,{sectionHeight:L=void 0}=t,{config:n={stiffness:.017,damping:.26}}=t,{threshold:f={top:1,bottom:1}}=t,{onProgress:v=void 0}=t,{onScroll:P=void 0}=t,{disabled:D=!1}=t;const T=it(0);Z(e,T,h=>s(4,u=h));const I=it(0);Z(e,I,h=>s(29,i=h));const j=it(0);Z(e,j,h=>s(1,a=h));const F=gt(void 0,{...n,precision:.001});Z(e,F,h=>s(22,r=h));const H=zt([T,I,j],([h,z,J],pt)=>{const at=h-z,ft=0-J+J*f.top,Ct=J*y-J*f.bottom,Ut=_t(at,ft,Ct);pt(Ut)});Z(e,H,h=>s(20,c=h));const tt=(h,z)=>{if(z===0){F.set(0);return}const J=z*y-z;F.set(_t(h/J,0,1))},X=Wt(new Set);Z(e,X,h=>s(21,p=h)),Yt(Rt,{config:n,addLayer:h=>{X.add(h)},removeLayer:h=>{X.delete(h)}}),vt(()=>{U()});const U=()=>{j.set(L||d),I.set(_.getBoundingClientRect().top+window.pageYOffset)};function M(h,{selector:z="",duration:J=500,easing:pt=Gt}={}){const at=i+a*(h-1),ft=()=>{document.querySelector(z).focus({preventScroll:!0})};if(D){window.scrollTo({top:at}),z&&ft();return}Zt({y:at,duration:J,easing:pt,onDone:z?ft:()=>{}})}const et=()=>setTimeout(U,0);function st(){T.set(u=lt.pageYOffset)}function Ht(){s(3,d=lt.innerHeight)}function $t(h){Nt[h?"unshift":"push"](()=>{_=h,s(2,_)})}return e.$$set=h=>{t=rt(rt({},t),Mt(h)),s(12,l=dt(t,o)),"sections"in h&&s(0,y=h.sections),"sectionHeight"in h&&s(13,L=h.sectionHeight),"config"in h&&s(14,n=h.config),"threshold"in h&&s(15,f=h.threshold),"onProgress"in h&&s(16,v=h.onProgress),"onScroll"in h&&s(17,P=h.onScroll),"disabled"in h&&s(18,D=h.disabled),"$$scope"in h&&s(23,E=h.$$scope)},e.$$.update=()=>{e.$$.dirty&1179648&&P&&P(c),e.$$.dirty&1114114&&v&&tt(c,a),e.$$.dirty&4259840&&v&&v(r!=null?r:0),e.$$.dirty&2097154&&p.forEach(h=>{h.setHeight(a)}),e.$$.dirty&3407874&&p.forEach(h=>{h.setPosition(c,a,D)}),e.$$.dirty&8194&&a!==0&&U()},[y,a,_,d,u,T,I,j,F,H,X,U,l,L,n,f,v,P,D,M,c,p,r,E,m,et,st,Ht,$t]}class le extends yt{constructor(t){super(),Tt(this,t,se,ee,bt,{sections:0,sectionHeight:13,config:14,threshold:15,onProgress:16,onScroll:17,disabled:18,scrollTo:19})}get scrollTo(){return this.$$.ctx[19]}}const oe=e=>({progress:e&1}),It=e=>({progress:e[0]});function ne(e){let t,s,o,l;const a=e[12].default,i=jt(a,e,e[11],It);let c=[e[5],{class:s="parallax-layer "+(e[5].class?e[5].class:"")},{style:o=""+(e[5].style?e[5].style:"")+"; height: "+e[1]+"px; -ms-transform: "+e[2]+"; -webkit-transform: "+e[2]+"; transform: "+e[2]+";"}],p={};for(let r=0;r<c.length;r+=1)p=rt(p,c[r]);return{c(){t=k("div"),i&&i.c(),this.h()},l(r){t=w(r,"DIV",{class:!0,style:!0});var u=A(t);i&&i.l(u),u.forEach(g),this.h()},h(){ct(t,p),ut(t,"svelte-qcp0z5",!0)},m(r,u){O(r,t,u),i&&i.m(t,null),l=!0},p(r,[u]){i&&i.p&&(!l||u&2049)&&kt(i,a,r,r[11],l?At(a,r[11],u,oe):wt(r[11]),It),ct(t,p=Dt(c,[u&32&&r[5],(!l||u&32&&s!==(s="parallax-layer "+(r[5].class?r[5].class:"")))&&{class:s},(!l||u&38&&o!==(o=""+(r[5].style?r[5].style:"")+"; height: "+r[1]+"px; -ms-transform: "+r[2]+"; -webkit-transform: "+r[2]+"; transform: "+r[2]+";"))&&{style:o}])),ut(t,"svelte-qcp0z5",!0)},i(r){l||(x(i,r),l=!0)},o(r){Y(i,r),l=!1},d(r){r&&g(t),i&&i.d(r)}}}function re(e,t,s){let o;const l=["rate","offset","span","onProgress"];let a=dt(t,l),i,c,{$$slots:p={},$$scope:r}=t,{rate:u=.5}=t,{offset:m=0}=t,{span:E=1}=t,{onProgress:_=void 0}=t;const{config:d,addLayer:y,removeLayer:L}=Vt(Rt),n=gt(void 0,d);Z(e,n,T=>s(10,c=T));const f=gt(void 0,{...d,precision:.001});Z(e,f,T=>s(0,i=T));let v;const P={setPosition:(T,I,j)=>{if(j){n.set(m*I,{hard:!0});return}const F=Math.floor(m)*I,H=m*I+F*u;n.set(-(T*u)+H),f.set(D(T,u,H,I))},setHeight:T=>{s(1,v=E*T)}},D=(T,I,j,F)=>{const H=I+1,tt=j/H,X=I>=0?1:-1,U=F/H*X,M=tt-U,et=tt+U*E,st=(T-M)/(et-M);return _t(st,0,1)};return vt(()=>(y(P),()=>{L(P)})),e.$$set=T=>{t=rt(rt({},t),Mt(T)),s(5,a=dt(t,l)),"rate"in T&&s(6,u=T.rate),"offset"in T&&s(7,m=T.offset),"span"in T&&s(8,E=T.span),"onProgress"in T&&s(9,_=T.onProgress),"$$scope"in T&&s(11,r=T.$$scope)},e.$$.update=()=>{e.$$.dirty&1024&&s(2,o=`translate3d(0px, ${c}px, 0px);`),e.$$.dirty&513&&_&&_(i!=null?i:0)},[i,v,o,n,f,a,u,m,E,_,c,r,p]}class Q extends yt{constructor(t){super(),Tt(this,t,re,ne,bt,{rate:6,offset:7,span:8,onProgress:9})}}function ie(e){let t,s,o,l,a,i,c,p,r,u,m,E,_,d,y,L,n;return{c(){t=k("h1"),s=N("TOP"),o=$(),l=k("ul"),a=k("li"),i=N("Clams Logo"),c=$(),p=k("li"),r=N("Tagline"),u=$(),m=k("li"),E=N("Ethos"),_=$(),d=k("button"),y=N("Scroll to bottom"),this.h()},l(f){t=w(f,"H1",{class:!0});var v=A(t);s=R(v,"TOP"),v.forEach(g),o=C(f),l=w(f,"UL",{class:!0});var P=A(l);a=w(P,"LI",{});var D=A(a);i=R(D,"Clams Logo"),D.forEach(g),c=C(P),p=w(P,"LI",{});var T=A(p);r=R(T,"Tagline"),T.forEach(g),u=C(P),m=w(P,"LI",{});var I=A(m);E=R(I,"Ethos"),I.forEach(g),P.forEach(g),_=C(f),d=w(f,"BUTTON",{class:!0});var j=A(d);y=R(j,"Scroll to bottom"),j.forEach(g),this.h()},h(){nt(t,"class","svelte-jajdri"),nt(l,"class","text-2xl list-disc list-inside"),nt(d,"class","bottom-btn svelte-jajdri")},m(f,v){O(f,t,v),S(t,s),O(f,o,v),O(f,l,v),S(l,a),S(a,i),S(l,c),S(l,p),S(p,r),S(l,u),S(l,m),S(m,E),O(f,_,v),O(f,d,v),S(d,y),L||(n=ot(d,"click",e[3]),L=!0)},p:V,d(f){f&&g(t),f&&g(o),f&&g(l),f&&g(_),f&&g(d),L=!1,n()}}}function ae(e){let t,s;return{c(){t=k("div"),s=N("FEATURE 1 DESCRIPTION"),this.h()},l(o){t=w(o,"DIV",{style:!0});var l=A(t);s=R(l,"FEATURE 1 DESCRIPTION"),l.forEach(g),this.h()},h(){b(t,"background-color","orange"),b(t,"display","flex"),b(t,"justify-content","center"),b(t,"align-items","center"),b(t,"width","50%"),b(t,"height","100%")},m(o,l){O(o,t,l),S(t,s)},p:V,d(o){o&&g(t)}}}function fe(e){let t,s;return{c(){t=k("div"),s=N("FEATURE 1 ICON"),this.h()},l(o){t=w(o,"DIV",{style:!0});var l=A(t);s=R(l,"FEATURE 1 ICON"),l.forEach(g),this.h()},h(){b(t,"background-color","lightblue"),b(t,"display","flex"),b(t,"justify-content","center"),b(t,"align-items","center"),b(t,"width","50%"),b(t,"height","100%")},m(o,l){O(o,t,l),S(t,s)},p:V,d(o){o&&g(t)}}}function ce(e){let t,s;return{c(){t=k("div"),s=N("INFORMATION 1"),this.h()},l(o){t=w(o,"DIV",{style:!0});var l=A(t);s=R(l,"INFORMATION 1"),l.forEach(g),this.h()},h(){b(t,"border","1px solid red"),b(t,"display","flex"),b(t,"justify-content","center"),b(t,"align-items","center"),b(t,"width","100%"),b(t,"height","100%")},m(o,l){O(o,t,l),S(t,s)},p:V,d(o){o&&g(t)}}}function ue(e){let t,s;return{c(){t=k("div"),s=N("FEATURE 2 DESCRIPTION"),this.h()},l(o){t=w(o,"DIV",{style:!0});var l=A(t);s=R(l,"FEATURE 2 DESCRIPTION"),l.forEach(g),this.h()},h(){b(t,"background-color","orange"),b(t,"display","flex"),b(t,"justify-content","center"),b(t,"align-items","center"),b(t,"width","50%"),b(t,"height","100%")},m(o,l){O(o,t,l),S(t,s)},p:V,d(o){o&&g(t)}}}function de(e){let t,s;return{c(){t=k("div"),s=N("FEATURE 2 IMAGE"),this.h()},l(o){t=w(o,"DIV",{style:!0});var l=A(t);s=R(l,"FEATURE 2 IMAGE"),l.forEach(g),this.h()},h(){b(t,"background-color","lightblue"),b(t,"display","flex"),b(t,"justify-content","center"),b(t,"align-items","center"),b(t,"width","50%"),b(t,"height","100%")},m(o,l){O(o,t,l),S(t,s)},p:V,d(o){o&&g(t)}}}function pe(e){let t,s;return{c(){t=k("div"),s=N("INFORMATION 2"),this.h()},l(o){t=w(o,"DIV",{style:!0});var l=A(t);s=R(l,"INFORMATION 2"),l.forEach(g),this.h()},h(){b(t,"border","1px solid red"),b(t,"display","flex"),b(t,"justify-content","center"),b(t,"align-items","center"),b(t,"width","100%"),b(t,"height","100%")},m(o,l){O(o,t,l),S(t,s)},p:V,d(o){o&&g(t)}}}function me(e){let t,s,o,l,a,i,c;return{c(){t=k("h1"),s=N("BOTTOM"),o=$(),l=k("button"),a=N("scroll to top"),this.h()},l(p){t=w(p,"H1",{class:!0});var r=A(t);s=R(r,"BOTTOM"),r.forEach(g),o=C(p),l=w(p,"BUTTON",{class:!0});var u=A(l);a=R(u,"scroll to top"),u.forEach(g),this.h()},h(){nt(t,"class","svelte-jajdri"),nt(l,"class","top-btn svelte-jajdri")},m(p,r){O(p,t,r),S(t,s),O(p,o,r),O(p,l,r),S(l,a),i||(c=ot(l,"click",e[4]),i=!0)},p:V,d(p){p&&g(t),p&&g(o),p&&g(l),i=!1,c()}}}function he(e){let t,s,o,l,a,i,c,p,r,u,m,E,_,d,y,L;return t=new Q({props:{offset:0,rate:1,style:`
		background-color: pink; 
		display: flex; 
		justify-content: center; 
		align-items: center; 
		flex-direction: column;
	`,$$slots:{default:[ie]},$$scope:{ctx:e}}}),o=new Q({props:{offset:1,rate:2.5,style:"display: flex; justify-content: flex-start;",$$slots:{default:[ae]},$$scope:{ctx:e}}}),a=new Q({props:{offset:1,rate:-2.5,style:"display: flex; justify-content: flex-end;",$$slots:{default:[fe]},$$scope:{ctx:e}}}),c=new Q({props:{offset:2,rate:0,style:"display: flex; justify-content: flex-end;",$$slots:{default:[ce]},$$scope:{ctx:e}}}),r=new Q({props:{offset:3,rate:2.5,style:"display: flex; justify-content: flex-start;",$$slots:{default:[ue]},$$scope:{ctx:e}}}),m=new Q({props:{offset:3,rate:-2.5,style:"display: flex; justify-content: flex-end;",$$slots:{default:[de]},$$scope:{ctx:e}}}),_=new Q({props:{offset:4,rate:0,style:"display: flex; justify-content: flex-end;",$$slots:{default:[pe]},$$scope:{ctx:e}}}),y=new Q({props:{offset:5,rate:2,style:`
		  background-color: pink; 
			display: flex; 
			justify-content: center; 
			align-items: center; 
			flex-direction: column;
		`,$$slots:{default:[me]},$$scope:{ctx:e}}}),{c(){B(t.$$.fragment),s=$(),B(o.$$.fragment),l=$(),B(a.$$.fragment),i=$(),B(c.$$.fragment),p=$(),B(r.$$.fragment),u=$(),B(m.$$.fragment),E=$(),B(_.$$.fragment),d=$(),B(y.$$.fragment)},l(n){G(t.$$.fragment,n),s=C(n),G(o.$$.fragment,n),l=C(n),G(a.$$.fragment,n),i=C(n),G(c.$$.fragment,n),p=C(n),G(r.$$.fragment,n),u=C(n),G(m.$$.fragment,n),E=C(n),G(_.$$.fragment,n),d=C(n),G(y.$$.fragment,n)},m(n,f){W(t,n,f),O(n,s,f),W(o,n,f),O(n,l,f),W(a,n,f),O(n,i,f),W(c,n,f),O(n,p,f),W(r,n,f),O(n,u,f),W(m,n,f),O(n,E,f),W(_,n,f),O(n,d,f),W(y,n,f),L=!0},p(n,f){const v={};f&65&&(v.$$scope={dirty:f,ctx:n}),t.$set(v);const P={};f&64&&(P.$$scope={dirty:f,ctx:n}),o.$set(P);const D={};f&64&&(D.$$scope={dirty:f,ctx:n}),a.$set(D);const T={};f&64&&(T.$$scope={dirty:f,ctx:n}),c.$set(T);const I={};f&64&&(I.$$scope={dirty:f,ctx:n}),r.$set(I);const j={};f&64&&(j.$$scope={dirty:f,ctx:n}),m.$set(j);const F={};f&64&&(F.$$scope={dirty:f,ctx:n}),_.$set(F);const H={};f&65&&(H.$$scope={dirty:f,ctx:n}),y.$set(H)},i(n){L||(x(t.$$.fragment,n),x(o.$$.fragment,n),x(a.$$.fragment,n),x(c.$$.fragment,n),x(r.$$.fragment,n),x(m.$$.fragment,n),x(_.$$.fragment,n),x(y.$$.fragment,n),L=!0)},o(n){Y(t.$$.fragment,n),Y(o.$$.fragment,n),Y(a.$$.fragment,n),Y(c.$$.fragment,n),Y(r.$$.fragment,n),Y(m.$$.fragment,n),Y(_.$$.fragment,n),Y(y.$$.fragment,n),L=!1},d(n){K(t,n),n&&g(s),K(o,n),n&&g(l),K(a,n),n&&g(i),K(c,n),n&&g(p),K(r,n),n&&g(u),K(m,n),n&&g(E),K(_,n),n&&g(d),K(y,n)}}}function ge(e){let t,s,o,l,a,i,c,p={sections:6,disabled:e[1],$$slots:{default:[he]},$$scope:{ctx:e}};return l=new le({props:p}),e[5](l),{c(){t=k("button"),s=N("disable"),o=$(),B(l.$$.fragment),this.h()},l(r){t=w(r,"BUTTON",{class:!0});var u=A(t);s=R(u,"disable"),u.forEach(g),o=C(r),G(l.$$.fragment,r),this.h()},h(){nt(t,"class","disable svelte-jajdri")},m(r,u){O(r,t,u),S(t,s),O(r,o,u),W(l,r,u),a=!0,i||(c=ot(t,"click",e[2]),i=!0)},p(r,[u]){const m={};u&2&&(m.disabled=r[1]),u&65&&(m.$$scope={dirty:u,ctx:r}),l.$set(m)},i(r){a||(x(l.$$.fragment,r),a=!0)},o(r){Y(l.$$.fragment,r),a=!1},d(r){r&&g(t),r&&g(o),e[5](null),K(l,r),i=!1,c()}}}function _e(e,t,s){let o,l=!1;vt(()=>{Xt("/")});const a=()=>s(1,l=!l),i=()=>o.scrollTo(6,{selector:".top-btn",duration:4e3}),c=()=>o.scrollTo(1,{selector:".bottom-btn",duration:1e3});function p(r){Nt[r?"unshift":"push"](()=>{o=r,s(0,o)})}return[o,l,a,i,c,p]}class Ee extends yt{constructor(t){super(),Tt(this,t,_e,ge,bt,{})}}export{Ee as default};
