import{S as De,i as we,s as Ie,H as fe,I as he,m as g,h as v,n as _,b as P,K as c,B as ue,k as p,q as T,a as L,l as E,r as A,c as B,u as Z,f as F,g as Y,d as y,t as $,N as ee,w as te,x as le,y as re,z as se}from"./index-b03908d8.js";import{D as de,F as ve}from"./constants-13a21fed.js";import{B as Fe}from"./Button-c202dd88.js";import{d as Ve}from"./stores-acd02a40.js";function Oe(h){let e,t,l;return{c(){e=fe("svg"),t=fe("path"),this.h()},l(a){e=he(a,"svg",{viewBox:!0,fill:!0,xmlns:!0});var s=g(e);t=he(s,"path",{d:!0,fill:!0}),g(t).forEach(v),s.forEach(v),this.h()},h(){_(t,"d","M9.55012 17.5749C9.41679 17.5749 9.29179 17.5539 9.17512 17.5119C9.05846 17.4706 8.95012 17.3999 8.85012 17.2999L4.55012 12.9999C4.36679 12.8166 4.27912 12.5789 4.28712 12.2869C4.29579 11.9956 4.39179 11.7582 4.57512 11.5749C4.75846 11.3916 4.99179 11.2999 5.27512 11.2999C5.55846 11.2999 5.79179 11.3916 5.97512 11.5749L9.55012 15.1499L18.0251 6.6749C18.2085 6.49157 18.4461 6.3999 18.7381 6.3999C19.0295 6.3999 19.2668 6.49157 19.4501 6.6749C19.6335 6.85824 19.7251 7.09557 19.7251 7.3869C19.7251 7.6789 19.6335 7.91657 19.4501 8.0999L10.2501 17.2999C10.1501 17.3999 10.0418 17.4706 9.92512 17.5119C9.80846 17.5539 9.68346 17.5749 9.55012 17.5749Z"),_(t,"fill",l=h[0]?"#B182F8":"#6305F0"),_(e,"viewBox","0 0 24 24"),_(e,"fill","none"),_(e,"xmlns","http://www.w3.org/2000/svg")},m(a,s){P(a,e,s),c(e,t)},p(a,[s]){s&1&&l!==(l=a[0]?"#B182F8":"#6305F0")&&_(t,"fill",l)},i:ue,o:ue,d(a){a&&v(e)}}}function He(h,e,t){let l=!0;return Ve.subscribe(a=>{t(0,l=a)}),[l]}class Ce extends De{constructor(e){super(),we(this,e,He,Oe,Ie,{})}}function _e(h,e,t){const l=h.slice();return l[7]=e[t].title,l}function me(h,e,t){const l=h.slice();return l[7]=e[t].title,l[10]=e[t].description,l}function ge(h,e,t){const l=h.slice();return l[13]=e[t],l}function pe(h){let e,t=h[13]+"",l;return{c(){e=p("p"),l=T(t),this.h()},l(a){e=E(a,"P",{class:!0});var s=g(e);l=A(s,t),s.forEach(v),this.h()},h(){_(e,"class","text-[18px]")},m(a,s){P(a,e,s),c(e,l)},p(a,s){s&2&&t!==(t=a[13]+"")&&Z(l,t)},d(a){a&&v(e)}}}function Ee(h){let e,t,l,a,s,u,d,r=h[7]+"",w,o,m,i=h[10]+"",x,O,H;return l=new Ce({}),{c(){e=p("div"),t=p("div"),te(l.$$.fragment),a=L(),s=p("div"),u=p("div"),d=p("h3"),w=T(r),o=L(),m=p("p"),x=T(i),O=L(),this.h()},l(C){e=E(C,"DIV",{class:!0});var D=g(e);t=E(D,"DIV",{class:!0});var R=g(t);le(l.$$.fragment,R),R.forEach(v),a=B(D),s=E(D,"DIV",{class:!0});var U=g(s);u=E(U,"DIV",{class:!0});var W=g(u);d=E(W,"H3",{class:!0});var M=g(d);w=A(M,r),M.forEach(v),W.forEach(v),o=B(U),m=E(U,"P",{});var j=g(m);x=A(j,i),j.forEach(v),U.forEach(v),O=B(D),D.forEach(v),this.h()},h(){_(t,"class","w-8 mr-1"),_(d,"class","text-[18px] font-bold"),_(u,"class","flex items-center"),_(s,"class","flex flex-col gap-1 "),_(e,"class","flex")},m(C,D){P(C,e,D),c(e,t),re(l,t,null),c(e,a),c(e,s),c(s,u),c(u,d),c(d,w),c(s,o),c(s,m),c(m,x),c(e,O),H=!0},p(C,D){(!H||D&4)&&r!==(r=C[7]+"")&&Z(w,r),(!H||D&4)&&i!==(i=C[10]+"")&&Z(x,i)},i(C){H||(F(l.$$.fragment,C),H=!0)},o(C){$(l.$$.fragment,C),H=!1},d(C){C&&v(e),se(l)}}}function xe(h){let e,t,l,a,s,u,d=h[3],r=[];for(let o=0;o<d.length;o+=1)r[o]=be(_e(h,d,o));const w=o=>$(r[o],1,1,()=>{r[o]=null});return{c(){e=p("div"),t=p("h2"),l=T("COMING SOON!"),a=L(),s=p("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=E(o,"DIV",{class:!0});var m=g(e);t=E(m,"H2",{class:!0});var i=g(t);l=A(i,"COMING SOON!"),i.forEach(v),a=B(m),s=E(m,"DIV",{class:!0});var x=g(s);for(let O=0;O<r.length;O+=1)r[O].l(x);x.forEach(v),m.forEach(v),this.h()},h(){_(t,"class","text-2xl font-bold text-light-purple dark:text-dark-purple"),_(s,"class","mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6"),_(e,"class","mt-12 grid gap-3")},m(o,m){P(o,e,m),c(e,t),c(t,l),c(e,a),c(e,s);for(let i=0;i<r.length;i+=1)r[i].m(s,null);u=!0},p(o,m){if(m&8){d=o[3];let i;for(i=0;i<d.length;i+=1){const x=_e(o,d,i);r[i]?(r[i].p(x,m),F(r[i],1)):(r[i]=be(x),r[i].c(),F(r[i],1),r[i].m(s,null))}for(Y(),i=d.length;i<r.length;i+=1)w(i);y()}},i(o){if(!u){for(let m=0;m<d.length;m+=1)F(r[m]);u=!0}},o(o){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)$(r[m]);u=!1},d(o){o&&v(e),ee(r,o)}}}function be(h){let e,t,l,a,s,u,d,r=h[7]+"",w,o,m;return l=new Ce({}),{c(){e=p("div"),t=p("div"),te(l.$$.fragment),a=L(),s=p("div"),u=p("div"),d=p("h3"),w=T(r),o=L(),this.h()},l(i){e=E(i,"DIV",{class:!0});var x=g(e);t=E(x,"DIV",{class:!0});var O=g(t);le(l.$$.fragment,O),O.forEach(v),a=B(x),s=E(x,"DIV",{class:!0});var H=g(s);u=E(H,"DIV",{class:!0});var C=g(u);d=E(C,"H3",{class:!0});var D=g(d);w=A(D,r),D.forEach(v),C.forEach(v),H.forEach(v),o=B(x),x.forEach(v),this.h()},h(){_(t,"class","w-8 mr-1"),_(d,"class","text-[18px] font-bold"),_(u,"class","flex items-center"),_(s,"class","flex flex-col gap-1 md:max-w-[280px]"),_(e,"class","flex")},m(i,x){P(i,e,x),c(e,t),re(l,t,null),c(e,a),c(e,s),c(s,u),c(u,d),c(d,w),c(e,o),m=!0},p(i,x){(!m||x&8)&&r!==(r=i[7]+"")&&Z(w,r)},i(i){m||(F(l.$$.fragment,i),m=!0)},o(i){$(l.$$.fragment,i),m=!1},d(i){i&&v(e),se(l)}}}function ke(h){let e,t,l,a,s;return l=new Fe({props:{primary:!0,text:`Dive deeper into ${h[0].title}`,$$slots:{iconLeft:[Le]},$$scope:{ctx:h}}}),{c(){e=p("div"),t=p("a"),te(l.$$.fragment),this.h()},l(u){e=E(u,"DIV",{class:!0});var d=g(e);t=E(d,"A",{href:!0,target:!0,rel:!0});var r=g(t);le(l.$$.fragment,r),r.forEach(v),d.forEach(v),this.h()},h(){_(t,"href",a=`${de}${h[4]}`),_(t,"target","_blank"),_(t,"rel","noopener noreferrer"),_(e,"class","mt-[48px] flex justify-center")},m(u,d){P(u,e,d),c(e,t),re(l,t,null),s=!0},p(u,d){const r={};d&1&&(r.text=`Dive deeper into ${u[0].title}`),d&65569&&(r.$$scope={dirty:d,ctx:u}),l.$set(r),(!s||d&16&&a!==(a=`${de}${u[4]}`))&&_(t,"href",a)},i(u){s||(F(l.$$.fragment,u),s=!0)},o(u){$(l.$$.fragment,u),s=!1},d(u){u&&v(e),se(l)}}}function Le(h){let e,t=`<div style="stroke: ${h[5]}">${ve[h[0].title]}</div>`;return{c(){e=p("div"),this.h()},l(l){e=E(l,"DIV",{slot:!0,class:!0});var a=g(e);a.forEach(v),this.h()},h(){_(e,"slot","iconLeft"),_(e,"class","w-10 xs:w-12")},m(l,a){P(l,e,a),e.innerHTML=t},p(l,a){a&33&&t!==(t=`<div style="stroke: ${l[5]}">${ve[l[0].title]}</div>`)&&(e.innerHTML=t)},d(l){l&&v(e)}}}function Be(h){let e,t,l,a,s=h[0].title+"",u,d,r,w=h[0].subtitle+"",o,m,i,x,O,H,C,D,R,U,W,M,j,J,z,K=h[1],S=[];for(let f=0;f<K.length;f+=1)S[f]=pe(ge(h,K,f));let q=h[2],b=[];for(let f=0;f<q.length;f+=1)b[f]=Ee(me(h,q,f));const Se=f=>$(b[f],1,1,()=>{b[f]=null});let I=h[3]&&xe(h),V=h[4]&&ke(h);return{c(){e=p("section"),t=p("div"),l=p("div"),a=p("h1"),u=T(s),d=L(),r=p("h2"),o=T(w),m=L(),i=p("div"),x=p("h2"),O=T("OVERVIEW"),H=L();for(let f=0;f<S.length;f+=1)S[f].c();C=L(),D=p("div"),R=p("h2"),U=T("FEATURES"),W=L(),M=p("div");for(let f=0;f<b.length;f+=1)b[f].c();j=L(),I&&I.c(),J=L(),V&&V.c(),this.h()},l(f){e=E(f,"SECTION",{class:!0});var k=g(e);t=E(k,"DIV",{class:!0});var n=g(t);l=E(n,"DIV",{class:!0});var N=g(l);a=E(N,"H1",{class:!0});var ae=g(a);u=A(ae,s),ae.forEach(v),d=B(N),r=E(N,"H2",{class:!0});var ie=g(r);o=A(ie,w),ie.forEach(v),N.forEach(v),m=B(n),i=E(n,"DIV",{class:!0});var Q=g(i);x=E(Q,"H2",{class:!0});var oe=g(x);O=A(oe,"OVERVIEW"),oe.forEach(v),H=B(Q);for(let G=0;G<S.length;G+=1)S[G].l(Q);Q.forEach(v),C=B(n),D=E(n,"DIV",{class:!0});var X=g(D);R=E(X,"H2",{class:!0});var ne=g(R);U=A(ne,"FEATURES"),ne.forEach(v),W=B(X),M=E(X,"DIV",{class:!0});var ce=g(M);for(let G=0;G<b.length;G+=1)b[G].l(ce);ce.forEach(v),X.forEach(v),j=B(n),I&&I.l(n),J=B(n),V&&V.l(n),n.forEach(v),k.forEach(v),this.h()},h(){_(a,"class","text-[64px] font-bold"),_(r,"class","text-[24px] mt-2"),_(l,"class","text-center max-w-[630px] m-auto"),_(x,"class","text-[20px] font-bold text-light-purple dark:text-dark-purple"),_(i,"class","mt-12 grid gap-3"),_(R,"class","text-[20px] font-bold text-light-purple dark:text-dark-purple"),_(M,"class","mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6"),_(D,"class","mt-12 grid gap-3"),_(t,"class","w-full max-w-4xl"),_(e,"class","flex flex-col items-center px-6 pt-28 pb-20")},m(f,k){P(f,e,k),c(e,t),c(t,l),c(l,a),c(a,u),c(l,d),c(l,r),c(r,o),c(t,m),c(t,i),c(i,x),c(x,O),c(i,H);for(let n=0;n<S.length;n+=1)S[n].m(i,null);c(t,C),c(t,D),c(D,R),c(R,U),c(D,W),c(D,M);for(let n=0;n<b.length;n+=1)b[n].m(M,null);c(t,j),I&&I.m(t,null),c(t,J),V&&V.m(t,null),z=!0},p(f,[k]){if((!z||k&1)&&s!==(s=f[0].title+"")&&Z(u,s),(!z||k&1)&&w!==(w=f[0].subtitle+"")&&Z(o,w),k&2){K=f[1];let n;for(n=0;n<K.length;n+=1){const N=ge(f,K,n);S[n]?S[n].p(N,k):(S[n]=pe(N),S[n].c(),S[n].m(i,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=K.length}if(k&4){q=f[2];let n;for(n=0;n<q.length;n+=1){const N=me(f,q,n);b[n]?(b[n].p(N,k),F(b[n],1)):(b[n]=Ee(N),b[n].c(),F(b[n],1),b[n].m(M,null))}for(Y(),n=q.length;n<b.length;n+=1)Se(n);y()}f[3]?I?(I.p(f,k),k&8&&F(I,1)):(I=xe(f),I.c(),F(I,1),I.m(t,J)):I&&(Y(),$(I,1,1,()=>{I=null}),y()),f[4]?V?(V.p(f,k),k&16&&F(V,1)):(V=ke(f),V.c(),F(V,1),V.m(t,null)):V&&(Y(),$(V,1,1,()=>{V=null}),y())},i(f){if(!z){for(let k=0;k<q.length;k+=1)F(b[k]);F(I),F(V),z=!0}},o(f){b=b.filter(Boolean);for(let k=0;k<b.length;k+=1)$(b[k]);$(I),$(V),z=!1},d(f){f&&v(e),ee(S,f),ee(b,f),I&&I.d(),V&&V.d()}}}function $e(h,e,t){let{header:l}=e,{overview:a=[]}=e,{features:s=[]}=e,{comingSoon:u}=e,{deepDive:d=""}=e,r=!0;Ve.subscribe(o=>{t(6,r=o)});let w;return h.$$set=o=>{"header"in o&&t(0,l=o.header),"overview"in o&&t(1,a=o.overview),"features"in o&&t(2,s=o.features),"comingSoon"in o&&t(3,u=o.comingSoon),"deepDive"in o&&t(4,d=o.deepDive)},h.$$.update=()=>{h.$$.dirty&64&&(r?t(5,w="#6305F0"):t(5,w="white"))},[l,a,s,u,d,w,r]}class Ae extends De{constructor(e){super(),we(this,e,$e,Be,Ie,{header:0,overview:1,features:2,comingSoon:3,deepDive:4})}}export{Ae as F};
