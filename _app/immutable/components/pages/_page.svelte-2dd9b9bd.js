import{S as ne,i as ie,s as ae,k as m,a as $,q as H,l as x,m as v,h as i,c as V,r as k,n as u,b as N,F as t,B as M,f as B,g as Ze,d as Ue,t as P,H as Fe,w as K,x as ee,y as te,z as re,N as Oe,O as qe,P as ze,Q as Je,R as Re,G as Xe,T as Ye}from"../../chunks/index-071863ef.js";import{C as Qe,N as De}from"../../chunks/translations-b5ee5982.js";import"../../chunks/StickyLayer.svelte_svelte_type_style_lang-bad6b39b.js";import{B as Ke}from"../../chunks/Button-5652dbd2.js";import{R as et}from"../../chunks/remote-eb268987.js";import{C as tt}from"../../chunks/check-edfac9a6.js";import{c as rt}from"../../chunks/index-00e5c70a.js";function lt(a){let e,r,n,y,c,f,C,p,h;return{c(){e=m("section"),r=m("div"),n=m("div"),y=$(),c=m("h1"),f=H("Building for a "),C=m("span"),p=H("Bitcoin"),h=H(" Standard."),this.h()},l(l){e=x(l,"SECTION",{class:!0});var s=v(e);r=x(s,"DIV",{class:!0});var o=v(r);n=x(o,"DIV",{class:!0});var d=v(n);d.forEach(i),y=V(o),c=x(o,"H1",{class:!0});var _=v(c);f=k(_,"Building for a "),C=x(_,"SPAN",{class:!0});var g=v(C);p=k(g,"Bitcoin"),g.forEach(i),h=k(_," Standard."),_.forEach(i),o.forEach(i),s.forEach(i),this.h()},h(){u(n,"class","w-80"),u(C,"class","text-light-orange"),u(c,"class","text-6xl font-bold"),u(r,"class","flex flex-col gap-8 items-center w-full text-center max-w-[600px] mt-28 md:mt-0"),u(e,"class","flex flex-col items-center justify-center w-full md:h-screen")},m(l,s){N(l,e,s),t(e,r),t(r,n),n.innerHTML=Qe,t(r,y),t(r,c),t(c,f),t(c,C),t(C,p),t(c,h)},p:M,i:M,o:M,d(l){l&&i(e)}}}class ot extends ne{constructor(e){super(),ie(this,e,null,lt,ae,{})}}const st=`
<svg width="100%" height="auto" viewBox="0 0 362 340" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 26C4 20.4772 8.47715 16 14 16H348C353.523 16 358 20.4772 358 26V314C358 319.523 353.523 324 348 324H14C8.47716 324 4 319.523 4 314V26ZM28 50C28 44.4772 32.4772 40 38 40H324C329.523 40 334 44.4772 334 50V121H28V50ZM334 145H28V290C28 295.523 32.4772 300 38 300H324C329.523 300 334 295.523 334 290V145Z" fill="currentColor"/>
<rect x="72" y="40" width="11" height="81" fill="currentColor"/>
<rect x="141" y="40" width="11" height="81" fill="currentColor"/>
<rect x="140" y="141" width="11" height="160" fill="currentColor"/>
<rect x="209" y="141" width="11" height="160" fill="currentColor"/>
<rect x="277" y="141" width="11" height="160" fill="currentColor"/>
<rect x="277" y="40" width="11" height="81" fill="currentColor"/>
<rect x="209" y="40" width="11" height="81" fill="currentColor"/>
<rect x="72" y="141" width="11" height="160" fill="currentColor"/>
<ellipse cx="78" cy="205" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="78" cy="232" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="78" cy="259" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="78" cy="286" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="146" cy="205" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="146" cy="232" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="146" cy="259" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="146" cy="286" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="215" cy="205" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="215" cy="232" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="215" cy="259" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="215" cy="286" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="283" cy="205" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="283" cy="232" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="283" cy="259" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="283" cy="286" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="78" cy="80" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="78" cy="107" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="146" cy="80" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="146" cy="107" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="215" cy="80" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="215" cy="107" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="283" cy="80" rx="21" ry="13" fill="currentColor"/>
<ellipse cx="283" cy="107" rx="21" ry="13" fill="currentColor"/>
</svg>

`;function Be(a,e,r){const n=a.slice();return n[1]=e[r].icon,n[2]=e[r].title,n[3]=e[r].description,n[4]=e[r].href,n}function je(a){let e,r,n=a[1]+"",y,c,f=a[2]+"",C,p,h,l=a[3]+"",s,o,d,_,g,E;return _=new Ke({props:{text:a[4]?"Learn More":"Coming soon",disabled:!a[4]}}),{c(){e=m("div"),r=m("div"),y=$(),c=m("h2"),C=H(f),p=$(),h=m("h2"),s=H(l),o=$(),d=m("a"),K(_.$$.fragment),g=$(),this.h()},l(w){e=x(w,"DIV",{class:!0});var b=v(e);r=x(b,"DIV",{class:!0});var S=v(r);S.forEach(i),y=V(b),c=x(b,"H2",{class:!0});var A=v(c);C=k(A,f),A.forEach(i),p=V(b),h=x(b,"H2",{class:!0});var T=v(h);s=k(T,l),T.forEach(i),o=V(b),d=x(b,"A",{class:!0,href:!0});var L=v(d);ee(_.$$.fragment,L),L.forEach(i),g=V(b),b.forEach(i),this.h()},h(){u(r,"class","max-w-[150px] m-auto"),u(c,"class","text-3xl font-bold text-light-orange"),u(h,"class","text-2xl"),u(d,"class","w-[145px] m-auto mt-5"),u(d,"href",a[4]),u(e,"class","m-auto grid gap-5 w-full max-w-[400px] py-10 px-6 rounded-2xl border border-slate-300 dark:border-dark-border hover:shadow-lg hover:dark:shadow-slate-900")},m(w,b){N(w,e,b),t(e,r),r.innerHTML=n,t(e,y),t(e,c),t(c,C),t(e,p),t(e,h),t(h,s),t(e,o),t(e,d),te(_,d,null),t(e,g),E=!0},p:M,i(w){E||(B(_.$$.fragment,w),E=!0)},o(w){P(_.$$.fragment,w),E=!1},d(w){w&&i(e),re(_)}}}function nt(a){let e,r,n,y,c=a[0],f=[];for(let p=0;p<c.length;p+=1)f[p]=je(Be(a,c,p));const C=p=>P(f[p],1,1,()=>{f[p]=null});return{c(){e=m("section"),r=m("div"),n=m("div");for(let p=0;p<f.length;p+=1)f[p].c();this.h()},l(p){e=x(p,"SECTION",{class:!0});var h=v(e);r=x(h,"DIV",{class:!0});var l=v(r);n=x(l,"DIV",{class:!0});var s=v(n);for(let o=0;o<f.length;o+=1)f[o].l(s);s.forEach(i),l.forEach(i),h.forEach(i),this.h()},h(){u(n,"class","flex flex-wrap justify-between gap-10"),u(r,"class","flex flex-col justify-between w-full gap-10 text-center max-w-[900px]"),u(e,"class","px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full")},m(p,h){N(p,e,h),t(e,r),t(r,n);for(let l=0;l<f.length;l+=1)f[l].m(n,null);y=!0},p(p,[h]){if(h&1){c=p[0];let l;for(l=0;l<c.length;l+=1){const s=Be(p,c,l);f[l]?(f[l].p(s,h),B(f[l],1)):(f[l]=je(s),f[l].c(),B(f[l],1),f[l].m(n,null))}for(Ze(),l=c.length;l<f.length;l+=1)C(l);Ue()}},i(p){if(!y){for(let h=0;h<c.length;h+=1)B(f[h]);y=!0}},o(p){f=f.filter(Boolean);for(let h=0;h<f.length;h+=1)P(f[h]);y=!1},d(p){p&&i(e),Fe(f,p)}}}function it(a){return[[{icon:et,title:"REMOTE",description:"The essential interface for your Core Lightning node.",href:"/remote"},{icon:st,title:"ABACUS",description:"The accountancy suite for Bitcoin financial management.",href:null}]]}class at extends ne{constructor(e){super(),ie(this,e,it,nt,ae,{})}}function Ge(a,e,r){const n=a.slice();return n[1]=e[r].title,n[2]=e[r].description,n}function Ne(a){let e,r,n,y,c,f,C,p=a[1]+"",h,l,s,o=a[2]+"",d,_,g;return n=new tt({}),{c(){e=m("div"),r=m("div"),K(n.$$.fragment),y=$(),c=m("div"),f=m("div"),C=m("h3"),h=H(p),l=$(),s=m("p"),d=H(o),_=$(),this.h()},l(E){e=x(E,"DIV",{class:!0});var w=v(e);r=x(w,"DIV",{class:!0});var b=v(r);ee(n.$$.fragment,b),b.forEach(i),y=V(w),c=x(w,"DIV",{class:!0});var S=v(c);f=x(S,"DIV",{class:!0});var A=v(f);C=x(A,"H3",{class:!0});var T=v(C);h=k(T,p),T.forEach(i),A.forEach(i),l=V(S),s=x(S,"P",{});var L=v(s);d=k(L,o),L.forEach(i),S.forEach(i),_=V(w),w.forEach(i),this.h()},h(){u(r,"class","w-8 mr-1"),u(C,"class","text-[18px] font-bold"),u(f,"class","flex items-center"),u(c,"class","flex flex-col gap-1 md:max-w-[280px]"),u(e,"class","flex")},m(E,w){N(E,e,w),t(e,r),te(n,r,null),t(e,y),t(e,c),t(c,f),t(f,C),t(C,h),t(c,l),t(c,s),t(s,d),t(e,_),g=!0},p:M,i(E){g||(B(n.$$.fragment,E),g=!0)},o(E){P(n.$$.fragment,E),g=!1},d(E){E&&i(e),re(n)}}}function ct(a){let e,r,n,y,c,f,C,p,h,l=a[0],s=[];for(let d=0;d<l.length;d+=1)s[d]=Ne(Ge(a,l,d));const o=d=>P(s[d],1,1,()=>{s[d]=null});return{c(){e=m("section"),r=m("div"),n=m("h1"),y=H("Guiding "),c=m("span"),f=H("Principles"),C=$(),p=m("div");for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l(d){e=x(d,"SECTION",{class:!0});var _=v(e);r=x(_,"DIV",{class:!0});var g=v(r);n=x(g,"H1",{class:!0});var E=v(n);y=k(E,"Guiding "),c=x(E,"SPAN",{class:!0});var w=v(c);f=k(w,"Principles"),w.forEach(i),E.forEach(i),C=V(g),p=x(g,"DIV",{class:!0});var b=v(p);for(let S=0;S<s.length;S+=1)s[S].l(b);b.forEach(i),g.forEach(i),_.forEach(i),this.h()},h(){u(c,"class","text-light-orange"),u(n,"class","text-[40px] text-center font-bold"),u(p,"class","grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[640px]"),u(r,"class","flex flex-col items-center w-full gap-10"),u(e,"class","px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]")},m(d,_){N(d,e,_),t(e,r),t(r,n),t(n,y),t(n,c),t(c,f),t(r,C),t(r,p);for(let g=0;g<s.length;g+=1)s[g].m(p,null);h=!0},p(d,[_]){if(_&1){l=d[0];let g;for(g=0;g<l.length;g+=1){const E=Ge(d,l,g);s[g]?(s[g].p(E,_),B(s[g],1)):(s[g]=Ne(E),s[g].c(),B(s[g],1),s[g].m(p,null))}for(Ze(),g=l.length;g<s.length;g+=1)o(g);Ue()}},i(d){if(!h){for(let _=0;_<l.length;_+=1)B(s[_]);h=!0}},o(d){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)P(s[_]);h=!1},d(d){d&&i(e),Fe(s,d)}}}function ft(a){return[[{title:"Non-custodial",description:"We build technology to improve your Bitcoin experience while you keep full control of your sats."},{title:"Bitcoin Only",description:"Built by Bitcoiners who are passionate about improving the usability of Bitcoin."},{title:"Privacy-Focused",description:"Privacy is a priority, with no logging, tracking, or Google scripts utilized anywhere in our tech stack."},{title:"Local Data Storage",description:"All transaction data is stored locally on your device and never leaves unless you want it to."},{title:"Fully Open-Source",description:"All client-side application code is public. Anyone can verify it and we welcome feedback."},{title:"Flexible Access",description:"Native desktop apps for your home devices and browser-based app for when you're on the move."}]]}class ut extends ne{constructor(e){super(),ie(this,e,ft,ct,ae,{})}}function dt(a){let e,r,n,y,c,f,C,p,h,l,s,o,d,_,g,E,w,b,S,A,T,L,O,j,X,D,R,Z,U,I,W,F,be,ve,q,ge,le,_e,Y,oe,Q,$e,ye,z,Ce,se;return{c(){e=m("section"),r=m("div"),n=m("h1"),y=H("A "),c=m("span"),f=H("Note"),C=H(" from Us"),p=$(),h=m("div"),l=m("div"),s=m("h2"),o=H("Hey!"),d=$(),_=m("h2"),g=H(`We're Aaron and John, a couple of musicians turned software engineers who took the orange
					pill, and like so many others, we couldn't think of anything else. Thanks to Bitcoin,
					we're not just excited about the future \u2013 we're on a mission to shape it.`),E=$(),w=m("h2"),b=H(`Inspired by the optimism and talent found in this community, we decided to use our skills
					to build Clams. Why stop at having the best money? We also need the best tools to help
					Bitcoiners manage their finances in a self-sovereign way.`),S=$(),A=m("h2"),T=H(`We are committed to keeping the app accessible to as many people as possible, which is why
					our core features will always be free. To ensure the long-term sustainability and
					continuous improvement of Clams, we're exploring options for paid add-on services. By
					choosing these premium offerings, you'll not only support the project but also unlock even
					more powerful tools to bring you closer to life on a Bitcoin Standard. More details on
					that soon.`),L=$(),O=m("h2"),j=H("We are our first customers, and we hope you will join us."),X=$(),D=m("h2"),R=H("Cheers, Aaron & John"),Z=$(),U=m("div"),I=m("div"),W=m("div"),F=m("img"),ve=$(),q=m("a"),ge=H(`AARON
						`),le=m("div"),_e=$(),Y=m("div"),oe=m("div"),Q=m("img"),ye=$(),z=m("a"),Ce=H(`JOHN
						`),se=m("div"),this.h()},l(ce){e=x(ce,"SECTION",{class:!0});var fe=v(e);r=x(fe,"DIV",{class:!0});var ue=v(r);n=x(ue,"H1",{class:!0});var de=v(n);y=k(de,"A "),c=x(de,"SPAN",{class:!0});var Ve=v(c);f=k(Ve,"Note"),Ve.forEach(i),C=k(de," from Us"),de.forEach(i),p=V(ue),h=x(ue,"DIV",{class:!0});var pe=v(h);l=x(pe,"DIV",{class:!0});var G=v(l);s=x(G,"H2",{class:!0});var He=v(s);o=k(He,"Hey!"),He.forEach(i),d=V(G),_=x(G,"H2",{class:!0});var ke=v(_);g=k(ke,`We're Aaron and John, a couple of musicians turned software engineers who took the orange
					pill, and like so many others, we couldn't think of anything else. Thanks to Bitcoin,
					we're not just excited about the future \u2013 we're on a mission to shape it.`),ke.forEach(i),E=V(G),w=x(G,"H2",{class:!0});var Ae=v(w);b=k(Ae,`Inspired by the optimism and talent found in this community, we decided to use our skills
					to build Clams. Why stop at having the best money? We also need the best tools to help
					Bitcoiners manage their finances in a self-sovereign way.`),Ae.forEach(i),S=V(G),A=x(G,"H2",{class:!0});var Ie=v(A);T=k(Ie,`We are committed to keeping the app accessible to as many people as possible, which is why
					our core features will always be free. To ensure the long-term sustainability and
					continuous improvement of Clams, we're exploring options for paid add-on services. By
					choosing these premium offerings, you'll not only support the project but also unlock even
					more powerful tools to bring you closer to life on a Bitcoin Standard. More details on
					that soon.`),Ie.forEach(i),L=V(G),O=x(G,"H2",{class:!0});var Se=v(O);j=k(Se,"We are our first customers, and we hope you will join us."),Se.forEach(i),X=V(G),D=x(G,"H2",{class:!0});var Te=v(D);R=k(Te,"Cheers, Aaron & John"),Te.forEach(i),G.forEach(i),Z=V(pe),U=x(pe,"DIV",{class:!0});var he=v(U);I=x(he,"DIV",{class:!0});var me=v(I);W=x(me,"DIV",{class:!0});var Le=v(W);F=x(Le,"IMG",{class:!0,src:!0,alt:!0}),Le.forEach(i),ve=V(me),q=x(me,"A",{class:!0,href:!0,target:!0,rel:!0});var we=v(q);ge=k(we,`AARON
						`),le=x(we,"DIV",{class:!0});var Pe=v(le);Pe.forEach(i),we.forEach(i),me.forEach(i),_e=V(he),Y=x(he,"DIV",{class:!0});var xe=v(Y);oe=x(xe,"DIV",{class:!0});var Me=v(oe);Q=x(Me,"IMG",{class:!0,src:!0,alt:!0}),Me.forEach(i),ye=V(xe),z=x(xe,"A",{class:!0,href:!0,target:!0,rel:!0});var Ee=v(z);Ce=k(Ee,`JOHN
						`),se=x(Ee,"DIV",{class:!0});var We=v(se);We.forEach(i),Ee.forEach(i),xe.forEach(i),he.forEach(i),pe.forEach(i),ue.forEach(i),fe.forEach(i),this.h()},h(){u(c,"class","text-light-orange"),u(n,"class","text-[40px] text-center font-bold"),u(s,"class",""),u(_,"class",""),u(w,"class",""),u(A,"class",""),u(O,"class",""),u(D,"class",""),u(l,"class","flex flex-col gap-5"),u(F,"class","w-full h-full object-cover"),Oe(F.src,be="https://avatars.githubusercontent.com/u/29873495?v=4")||u(F,"src",be),u(F,"alt","john"),u(W,"class","md:w-[200px] md:h-[200px] rounded-full overflow-hidden"),u(le,"class","w-6 mx-2"),u(q,"class","font-bold text-[14px] text-light-purple dark:text-dark-purple flex items-center"),u(q,"href","https://njump.me/nprofile1qqstz6qhucarrd9dhf04klcp3ewfesr2a2h05jaz5j7gc9kps2x7m6scpu9hy"),u(q,"target","_blank"),u(q,"rel","noopener noreferrer"),u(I,"class","flex flex-col items-center gap-3"),u(Q,"class","w-full h-full object-cover"),Oe(Q.src,$e="https://avatars.githubusercontent.com/u/30157175?v=4")||u(Q,"src",$e),u(Q,"alt","john"),u(oe,"class","md:w-[200px] md:h-[200px] rounded-full overflow-hidden"),u(se,"class","w-6 mx-2"),u(z,"class","font-bold text-[14px] text-light-purple dark:text-dark-purple flex items-center"),u(z,"href","https://njump.me/nprofile1qqs9zfzdczszd6amf8d8lnxq92kpqx8hulucfwtmfxmyg7ma4dv422stjxth3"),u(z,"target","_blank"),u(z,"rel","noopener noreferrer"),u(Y,"class","flex flex-col items-center gap-3"),u(U,"class","flex md:flex-col justify-around gap-5 w-full"),u(h,"class","flex flex-wrap md:flex-nowrap gap-10"),u(r,"class","flex flex-col justify-between w-full gap-5 max-w-3xl"),u(e,"class","px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full")},m(ce,fe){N(ce,e,fe),t(e,r),t(r,n),t(n,y),t(n,c),t(c,f),t(n,C),t(r,p),t(r,h),t(h,l),t(l,s),t(s,o),t(l,d),t(l,_),t(_,g),t(l,E),t(l,w),t(w,b),t(l,S),t(l,A),t(A,T),t(l,L),t(l,O),t(O,j),t(l,X),t(l,D),t(D,R),t(h,Z),t(h,U),t(U,I),t(I,W),t(W,F),t(I,ve),t(I,q),t(q,ge),t(q,le),le.innerHTML=De,t(U,_e),t(U,Y),t(Y,oe),t(oe,Q),t(Y,ye),t(Y,z),t(z,Ce),t(z,se),se.innerHTML=De},p:M,i:M,o:M,d(ce){ce&&i(e)}}}class pt extends ne{constructor(e){super(),ie(this,e,null,dt,ae,{})}}const J={$(a){return typeof a=="string"?document.querySelector(a):a},extend(...a){return Object.assign(...a)},cumulativeOffset(a){let e=0,r=0;do e+=a.offsetTop||0,r+=a.offsetLeft||0,a=a.offsetParent;while(a);return{top:e,left:r}},directScroll(a){return a&&a!==document&&a!==document.body},scrollTop(a,e){let r=e!==void 0;return this.directScroll(a)?r?a.scrollTop=e:a.scrollTop:r?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(a,e){let r=e!==void 0;return this.directScroll(a)?r?a.scrollLeft=e:a.scrollLeft:r?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},ht={container:"body",duration:500,delay:0,offset:0,easing:rt,onStart:M,onDone:M,onAborting:M,scrollX:!1,scrollY:!0},mt=a=>{let{offset:e,duration:r,delay:n,easing:y,x:c=0,y:f=0,scrollX:C,scrollY:p,onStart:h,onDone:l,container:s,onAborting:o,element:d}=a;typeof e=="function"&&(e=e());var _=J.cumulativeOffset(s),g=d?J.cumulativeOffset(d):{top:f,left:c},E=J.scrollLeft(s),w=J.scrollTop(s),b=g.left-_.left+e,S=g.top-_.top+e,A=b-E,T=S-w;let L=!0,O=!1,j=qe()+n,X=j+r;function D(I,W,F){C&&J.scrollLeft(I,F),p&&J.scrollTop(I,W)}function R(I){I||(O=!0,h(d,{x:c,y:f}))}function Z(I){D(s,w+T*I,E+A*I)}function U(){L=!1}return ze(I=>{if(!O&&I>=j&&R(!1),O&&I>=X&&(Z(1),U(),l(d,{x:c,y:f})),!L)return o(d,{x:c,y:f}),!1;if(O){const W=I-j,F=0+1*y(W/r);Z(F)}return!0}),R(n),Z(0),U},xt=a=>{let e=J.extend({},ht,a);return e.container=J.$(e.container),e.element=J.$(e.element),e},vt=a=>(a=xt(a),mt(J.extend(a,{element:null,y:0}))),gt=`<svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g id="Group">
		<path
			id="Vector"
			d="M79.0724 72.9069H76.7113V13.2234H79.0724C82.614 13.2234 85.3687 10.3376 85.3687 6.92713C85.3687 3.51664 82.4829 0.630859 79.0724 0.630859C75.6619 0.630859 72.7761 3.51664 72.7761 6.92713V9.28822H13.0926V6.92713C13.0926 3.38547 10.2068 0.630859 6.79627 0.630859C3.38578 0.630859 0.5 3.51664 0.5 6.92713C0.5 10.3376 3.38578 13.2234 6.79627 13.2234H9.15738V72.9069H6.79627C3.25461 72.9069 0.5 75.7928 0.5 79.2033C0.5 82.6138 3.38578 85.4995 6.79627 85.4995C10.2068 85.4995 13.0926 82.6138 13.0926 79.2033V76.8421H72.7761V79.2033C72.7761 82.7449 75.6619 85.4995 79.0724 85.4995C82.4829 85.4995 85.3687 82.6138 85.3687 79.2033C85.3687 75.7928 82.614 72.9069 79.0724 72.9069ZM6.79627 4.56604C8.108 4.56604 9.15738 5.6154 9.15738 6.92713V9.28822H6.79627C5.48454 9.28822 4.43518 8.23885 4.43518 6.92713C4.43518 5.6154 5.48454 4.56604 6.79627 4.56604ZM9.28856 79.2033C9.28856 80.515 8.23918 81.5644 6.92745 81.5644C5.61572 81.5644 4.56634 80.515 4.56634 79.2033C4.56634 77.8916 5.61572 76.8421 6.92745 76.8421H9.28856V79.2033ZM72.7761 13.2234V27.5212C69.628 21.3561 64.5122 16.3715 58.4783 13.2234H72.7761ZM72.7761 58.6092V72.9069H58.4783C64.5122 69.7588 69.628 64.6431 72.7761 58.6092ZM13.2237 27.6524V13.3546H27.5215C21.3564 16.5028 16.3719 21.4873 13.2237 27.6524ZM72.6449 43.1308C72.6449 59.5274 59.3965 72.7758 42.9999 72.7758C26.6033 72.7758 13.3549 59.5274 13.3549 43.1308C13.3549 26.7342 26.6033 13.4858 42.9999 13.4858C59.3965 13.4858 72.6449 26.7342 72.6449 43.1308ZM27.5215 72.9069H13.2237V58.6092C16.3719 64.6431 21.3564 69.7588 27.5215 72.9069ZM79.0724 81.6955C77.7607 81.6955 76.7113 80.6461 76.7113 79.3344V76.9733H79.0724C80.3841 76.9733 81.4335 78.0227 81.4335 79.3344C81.4335 80.6461 80.5153 81.6955 79.0724 81.6955ZM76.7113 6.92713C76.7113 5.6154 77.7607 4.56604 79.0724 4.56604C80.3841 4.56604 81.4335 5.6154 81.4335 6.92713C81.4335 8.23885 80.3841 9.28822 79.0724 9.28822H76.7113V6.92713Z"
			fill="url(#paint0_linear_113_6678)"
		/>
		<path
			id="Vector_2"
			d="M83.533 21.3564C82.4836 21.3564 81.5654 22.2747 81.5654 23.324V62.5447C81.5654 63.5941 82.4836 64.5123 83.533 64.5123C84.5824 64.5123 85.5006 63.5941 85.5006 62.5447V23.324C85.5006 22.2747 84.5824 21.3564 83.533 21.3564Z"
			fill="url(#paint1_linear_113_6678)"
		/>
		<path
			id="Vector_3"
			d="M4.43518 62.6759V23.4554C4.43518 22.406 3.51697 21.4878 2.46759 21.4878C1.41821 21.4878 0.5 22.406 0.5 23.4554V62.6759C0.5 63.7253 1.41821 64.6435 2.46759 64.6435C3.51697 64.6435 4.43518 63.7253 4.43518 62.6759Z"
			fill="url(#paint2_linear_113_6678)"
		/>
		<path
			id="Vector_4"
			d="M62.6765 81.564H23.4559C22.4065 81.564 21.4883 82.4822 21.4883 83.5316C21.4883 84.5809 22.4065 85.4991 23.4559 85.4991H62.6765C63.7259 85.4991 64.6441 84.5809 64.6441 83.5316C64.6441 82.4822 63.7259 81.564 62.6765 81.564Z"
			fill="url(#paint3_linear_113_6678)"
		/>
		<path
			id="Vector_5"
			d="M23.324 4.43518H62.5446C63.594 4.43518 64.5122 3.51697 64.5122 2.46759C64.5122 1.41821 63.594 0.5 62.5446 0.5H23.324C22.2747 0.5 21.3564 1.41821 21.3564 2.46759C21.3564 3.51697 22.2747 4.43518 23.324 4.43518Z"
			fill="url(#paint4_linear_113_6678)"
		/>
		<path
			id="Vector_6"
			d="M23.3232 37.6216C22.6673 39.8515 22.5361 41.8191 22.5361 43.1308C22.5361 45.6231 22.9297 47.5906 23.3232 48.64C23.5855 49.5582 25.4219 55.8545 31.5871 59.9209C32.2429 60.3144 32.7676 60.7079 33.1611 60.8391V25.1602C32.6364 25.4225 31.9806 25.816 31.0624 26.4719C25.4219 30.6694 23.5855 36.5722 23.3232 37.6216Z"
			fill="url(#paint5_linear_113_6678)"
		/>
		<path
			id="Vector_7"
			d="M51.001 53.1003C50.2139 53.8873 50.2139 55.0679 51.001 55.8549L51.9192 56.7731C49.2957 58.6095 46.2787 59.3966 42.8682 59.3966C42.2124 59.3966 41.5565 59.3966 40.9006 59.2654V26.7346C41.5565 26.6035 42.2124 26.6034 42.8682 26.6034C46.2787 26.6034 49.2957 27.5216 51.9192 29.2269L50.8698 30.2762C50.0827 31.0633 50.0827 32.2439 50.8698 33.0309C51.6568 33.818 52.8374 33.818 53.6244 33.0309L57.6907 28.9645C57.1661 28.4398 56.5102 27.784 55.7232 27.1282C53.4932 25.2917 51.3945 24.3735 50.7386 24.1112C48.3775 23.0618 45.6229 22.5371 42.8682 22.5371C40.7695 22.5371 38.8019 22.7995 36.9655 23.4553V62.4135H36.7031C38.6707 63.0694 40.6383 63.3318 42.8682 63.3318C45.6229 63.3318 48.2463 62.8071 50.7386 61.8889C51.5256 61.6265 53.4932 60.7084 55.7232 58.8719C56.6414 58.2161 57.2972 57.5602 57.6907 57.0355L53.6244 52.9692C52.9685 52.3133 51.788 52.3133 51.001 53.1003Z"
			fill="url(#paint6_linear_113_6678)"
		/>
	</g>
	<defs>
		<linearGradient
			id="paint0_linear_113_6678"
			x1="-10.3261"
			y1="86.4279"
			x2="82.7786"
			y2="10.7385"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#E378AE" />
			<stop offset="1" stop-color="#946EAF" />
		</linearGradient>
		<linearGradient
			id="paint1_linear_113_6678"
			x1="5.7318"
			y1="106.18"
			x2="98.8365"
			y2="30.4905"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#E378AE" />
			<stop offset="1" stop-color="#946EAF" />
		</linearGradient>
		<linearGradient
			id="paint2_linear_113_6678"
			x1="-26.441"
			y1="66.6055"
			x2="66.6635"
			y2="-9.08388"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#E378AE" />
			<stop offset="1" stop-color="#946EAF" />
		</linearGradient>
		<linearGradient
			id="paint3_linear_113_6678"
			x1="9.50658"
			y1="110.823"
			x2="102.611"
			y2="35.1332"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#E378AE" />
			<stop offset="1" stop-color="#946EAF" />
		</linearGradient>
		<linearGradient
			id="paint4_linear_113_6678"
			x1="-30.216"
			y1="61.9618"
			x2="62.8887"
			y2="-13.7276"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#E378AE" />
			<stop offset="1" stop-color="#946EAF" />
		</linearGradient>
		<linearGradient
			id="paint5_linear_113_6678"
			x1="-14.3275"
			y1="81.5069"
			x2="78.7772"
			y2="5.81754"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#E378AE" />
			<stop offset="1" stop-color="#946EAF" />
		</linearGradient>
		<linearGradient
			id="paint6_linear_113_6678"
			x1="-9.83324"
			y1="87.0352"
			x2="83.2713"
			y2="11.3457"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#E378AE" />
			<stop offset="1" stop-color="#946EAF" />
		</linearGradient>
	</defs>
</svg>`,_t=`<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.77695 0.800423L0.134766 4.20009L1.34608 5.32809L3.77695 3.06442L3.77695 16H5.49514L5.49514 3.05973L7.92735 5.32465L9.14228 4.19328L5.49747 0.799163L5.49514 0.801335V0.799999L4.63605 0L3.77695 0.799999V0.800423Z" fill="currentColor"/>
</svg>`;function yt(a){let e,r,n,y,c,f,C,p,h,l,s,o,d,_,g,E,w,b,S;return{c(){e=m("section"),r=m("div"),n=m("div"),y=$(),c=m("div"),f=m("h2"),C=H("Want to contribute or have ideas on how to improve our apps?"),p=$(),h=m("p"),l=H("Join us in our "),s=m("a"),o=H("Discord"),d=H(" server"),_=$(),g=m("span"),E=H("Scroll to top "),w=new Je(!1),this.h()},l(A){e=x(A,"SECTION",{class:!0});var T=v(e);r=x(T,"DIV",{class:!0});var L=v(r);n=x(L,"DIV",{class:!0});var O=v(n);O.forEach(i),y=V(L),c=x(L,"DIV",{class:!0});var j=v(c);f=x(j,"H2",{class:!0});var X=v(f);C=k(X,"Want to contribute or have ideas on how to improve our apps?"),X.forEach(i),p=V(j),h=x(j,"P",{});var D=v(h);l=k(D,"Join us in our "),s=x(D,"A",{class:!0,href:!0});var R=v(s);o=k(R,"Discord"),R.forEach(i),d=k(D," server"),D.forEach(i),j.forEach(i),L.forEach(i),_=V(T),g=x(T,"SPAN",{class:!0});var Z=v(g);E=k(Z,"Scroll to top "),w=Re(Z,!1),Z.forEach(i),T.forEach(i),this.h()},h(){u(n,"class",""),u(f,"class","text-2xl text-[20px]"),u(s,"class","text-light-purple dark:text-bitcoin font-bold underline"),u(s,"href","/"),u(c,"class","flex flex-col gap-2"),u(r,"class","flex items-center gap-6 w-full max-w-3xl"),w.a=null,u(g,"class","text-bold flex items-center gap-2 cursor-pointer"),u(e,"class","px-6 py-[72px] md:py-[96px] flex flex-col items-center gap-20 bg-[#F4F6F8] dark:bg-[#1e1e1e]")},m(A,T){N(A,e,T),t(e,r),t(r,n),n.innerHTML=gt,t(r,y),t(r,c),t(c,f),t(f,C),t(c,p),t(c,h),t(h,l),t(h,s),t(s,o),t(h,d),t(e,_),t(e,g),t(g,E),w.m(_t,g),b||(S=Xe(g,"click",a[0]),b=!0)},p:M,i:M,o:M,d(A){A&&i(e),b=!1,S()}}}function Ct(a){return[()=>vt()]}class wt extends ne{constructor(e){super(),ie(this,e,Ct,yt,ae,{})}}function Et(a){let e,r,n,y,c,f,C,p,h,l,s;return r=new ot({}),y=new at({}),f=new ut({}),p=new pt({}),l=new wt({}),{c(){e=$(),K(r.$$.fragment),n=$(),K(y.$$.fragment),c=$(),K(f.$$.fragment),C=$(),K(p.$$.fragment),h=$(),K(l.$$.fragment),this.h()},l(o){Ye("svelte-1t2elq2",document.head).forEach(i),e=V(o),ee(r.$$.fragment,o),n=V(o),ee(y.$$.fragment,o),c=V(o),ee(f.$$.fragment,o),C=V(o),ee(p.$$.fragment,o),h=V(o),ee(l.$$.fragment,o),this.h()},h(){document.title="Clams"},m(o,d){N(o,e,d),te(r,o,d),N(o,n,d),te(y,o,d),N(o,c,d),te(f,o,d),N(o,C,d),te(p,o,d),N(o,h,d),te(l,o,d),s=!0},p:M,i(o){s||(B(r.$$.fragment,o),B(y.$$.fragment,o),B(f.$$.fragment,o),B(p.$$.fragment,o),B(l.$$.fragment,o),s=!0)},o(o){P(r.$$.fragment,o),P(y.$$.fragment,o),P(f.$$.fragment,o),P(p.$$.fragment,o),P(l.$$.fragment,o),s=!1},d(o){o&&i(e),re(r,o),o&&i(n),re(y,o),o&&i(c),re(f,o),o&&i(C),re(p,o),o&&i(h),re(l,o)}}}class St extends ne{constructor(e){super(),ie(this,e,null,Et,ae,{})}}export{St as default};
