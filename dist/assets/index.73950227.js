var Dd=Object.defineProperty;var Id=(s,e,t)=>e in s?Dd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Xe=(s,e,t)=>(Id(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Ml(s,e){const t=Object.create(null),n=s.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Sl(s){if(Fe(s)){const e={};for(let t=0;t<s.length;t++){const n=s[t],i=Et(n)?Ud(n):Sl(n);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Et(s))return s;if(ft(s))return s}}const Nd=/;(?![^(]*\))/g,Od=/:([^]+)/,Fd=/\/\*.*?\*\//gs;function Ud(s){const e={};return s.replace(Fd,"").split(Nd).forEach(t=>{if(t){const n=t.split(Od);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function wl(s){let e="";if(Et(s))e=s;else if(Fe(s))for(let t=0;t<s.length;t++){const n=wl(s[t]);n&&(e+=n+" ")}else if(ft(s))for(const t in s)s[t]&&(e+=t+" ");return e.trim()}const zd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kd=Ml(zd);function Wh(s){return!!s||s===""}const st={},ps=[],yn=()=>{},Bd=()=>!1,Hd=/^on[^a-z]/,Co=s=>Hd.test(s),Tl=s=>s.startsWith("onUpdate:"),Dt=Object.assign,El=(s,e)=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)},Vd=Object.prototype.hasOwnProperty,qe=(s,e)=>Vd.call(s,e),Fe=Array.isArray,Qs=s=>Po(s)==="[object Map]",Gd=s=>Po(s)==="[object Set]",He=s=>typeof s=="function",Et=s=>typeof s=="string",Al=s=>typeof s=="symbol",ft=s=>s!==null&&typeof s=="object",jh=s=>ft(s)&&He(s.then)&&He(s.catch),Wd=Object.prototype.toString,Po=s=>Wd.call(s),jd=s=>Po(s).slice(8,-1),Xd=s=>Po(s)==="[object Object]",Cl=s=>Et(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,ho=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=s=>{const e=Object.create(null);return t=>e[t]||(e[t]=s(t))},qd=/-(\w)/g,ys=Lo(s=>s.replace(qd,(e,t)=>t?t.toUpperCase():"")),$d=/\B([A-Z])/g,Rs=Lo(s=>s.replace($d,"-$1").toLowerCase()),Xh=Lo(s=>s.charAt(0).toUpperCase()+s.slice(1)),$o=Lo(s=>s?`on${Xh(s)}`:""),_o=(s,e)=>!Object.is(s,e),Yo=(s,e)=>{for(let t=0;t<s.length;t++)s[t](e)},yo=(s,e,t)=>{Object.defineProperty(s,e,{configurable:!0,enumerable:!1,value:t})},qh=s=>{const e=parseFloat(s);return isNaN(e)?s:e};let yc;const Yd=()=>yc||(yc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Mn;class Kd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Mn,!e&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Mn;try{return Mn=this,e()}finally{Mn=t}}}on(){Mn=this}off(){Mn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Zd(s,e=Mn){e&&e.active&&e.effects.push(s)}const Pl=s=>{const e=new Set(s);return e.w=0,e.n=0,e},$h=s=>(s.w&fi)>0,Yh=s=>(s.n&fi)>0,Jd=({deps:s})=>{if(s.length)for(let e=0;e<s.length;e++)s[e].w|=fi},Qd=s=>{const{deps:e}=s;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];$h(i)&&!Yh(i)?i.delete(s):e[t++]=i,i.w&=~fi,i.n&=~fi}e.length=t}},ja=new WeakMap;let Ks=0,fi=1;const Xa=30;let pn;const Ii=Symbol(""),qa=Symbol("");class Ll{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Zd(this,n)}run(){if(!this.active)return this.fn();let e=pn,t=ui;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pn,pn=this,ui=!0,fi=1<<++Ks,Ks<=Xa?Jd(this):bc(this),this.fn()}finally{Ks<=Xa&&Qd(this),fi=1<<--Ks,pn=this.parent,ui=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pn===this?this.deferStop=!0:this.active&&(bc(this),this.onStop&&this.onStop(),this.active=!1)}}function bc(s){const{deps:e}=s;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(s);e.length=0}}let ui=!0;const Kh=[];function Ds(){Kh.push(ui),ui=!1}function Is(){const s=Kh.pop();ui=s===void 0?!0:s}function Kt(s,e,t){if(ui&&pn){let n=ja.get(s);n||ja.set(s,n=new Map);let i=n.get(t);i||n.set(t,i=Pl()),Zh(i)}}function Zh(s,e){let t=!1;Ks<=Xa?Yh(s)||(s.n|=fi,t=!$h(s)):t=!s.has(pn),t&&(s.add(pn),pn.deps.push(s))}function qn(s,e,t,n,i,r){const o=ja.get(s);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(s)){const l=qh(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(s)?Cl(t)&&a.push(o.get("length")):(a.push(o.get(Ii)),Qs(s)&&a.push(o.get(qa)));break;case"delete":Fe(s)||(a.push(o.get(Ii)),Qs(s)&&a.push(o.get(qa)));break;case"set":Qs(s)&&a.push(o.get(Ii));break}if(a.length===1)a[0]&&$a(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);$a(Pl(l))}}function $a(s,e){const t=Fe(s)?s:[...s];for(const n of t)n.computed&&Mc(n);for(const n of t)n.computed||Mc(n)}function Mc(s,e){(s!==pn||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const ep=Ml("__proto__,__v_isRef,__isVue"),Jh=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Al)),tp=Rl(),np=Rl(!1,!0),ip=Rl(!0),Sc=sp();function sp(){const s={};return["includes","indexOf","lastIndexOf"].forEach(e=>{s[e]=function(...t){const n=Je(this);for(let r=0,o=this.length;r<o;r++)Kt(n,"get",r+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(Je)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{s[e]=function(...t){Ds();const n=Je(this)[e].apply(this,t);return Is(),n}}),s}function Rl(s=!1,e=!1){return function(n,i,r){if(i==="__v_isReactive")return!s;if(i==="__v_isReadonly")return s;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(s?e?yp:sf:e?nf:tf).get(n))return n;const o=Fe(n);if(!s&&o&&qe(Sc,i))return Reflect.get(Sc,i,r);const a=Reflect.get(n,i,r);return(Al(i)?Jh.has(i):ep(i))||(s||Kt(n,"get",i),e)?a:kt(a)?o&&Cl(i)?a:a.value:ft(a)?s?rf(a):Nl(a):a}}const rp=Qh(),op=Qh(!0);function Qh(s=!1){return function(t,n,i,r){let o=t[n];if(ar(o)&&kt(o)&&!kt(i))return!1;if(!s&&(!Ya(i)&&!ar(i)&&(o=Je(o),i=Je(i)),!Fe(t)&&kt(o)&&!kt(i)))return o.value=i,!0;const a=Fe(t)&&Cl(n)?Number(n)<t.length:qe(t,n),l=Reflect.set(t,n,i,r);return t===Je(r)&&(a?_o(i,o)&&qn(t,"set",n,i):qn(t,"add",n,i)),l}}function ap(s,e){const t=qe(s,e);s[e];const n=Reflect.deleteProperty(s,e);return n&&t&&qn(s,"delete",e,void 0),n}function lp(s,e){const t=Reflect.has(s,e);return(!Al(e)||!Jh.has(e))&&Kt(s,"has",e),t}function cp(s){return Kt(s,"iterate",Fe(s)?"length":Ii),Reflect.ownKeys(s)}const ef={get:tp,set:rp,deleteProperty:ap,has:lp,ownKeys:cp},up={get:ip,set(s,e){return!0},deleteProperty(s,e){return!0}},hp=Dt({},ef,{get:np,set:op}),Dl=s=>s,Ro=s=>Reflect.getPrototypeOf(s);function Cr(s,e,t=!1,n=!1){s=s.__v_raw;const i=Je(s),r=Je(e);t||(e!==r&&Kt(i,"get",e),Kt(i,"get",r));const{has:o}=Ro(i),a=n?Dl:t?Ul:Fl;if(o.call(i,e))return a(s.get(e));if(o.call(i,r))return a(s.get(r));s!==i&&s.get(e)}function Pr(s,e=!1){const t=this.__v_raw,n=Je(t),i=Je(s);return e||(s!==i&&Kt(n,"has",s),Kt(n,"has",i)),s===i?t.has(s):t.has(s)||t.has(i)}function Lr(s,e=!1){return s=s.__v_raw,!e&&Kt(Je(s),"iterate",Ii),Reflect.get(s,"size",s)}function wc(s){s=Je(s);const e=Je(this);return Ro(e).has.call(e,s)||(e.add(s),qn(e,"add",s,s)),this}function Tc(s,e){e=Je(e);const t=Je(this),{has:n,get:i}=Ro(t);let r=n.call(t,s);r||(s=Je(s),r=n.call(t,s));const o=i.call(t,s);return t.set(s,e),r?_o(e,o)&&qn(t,"set",s,e):qn(t,"add",s,e),this}function Ec(s){const e=Je(this),{has:t,get:n}=Ro(e);let i=t.call(e,s);i||(s=Je(s),i=t.call(e,s)),n&&n.call(e,s);const r=e.delete(s);return i&&qn(e,"delete",s,void 0),r}function Ac(){const s=Je(this),e=s.size!==0,t=s.clear();return e&&qn(s,"clear",void 0,void 0),t}function Rr(s,e){return function(n,i){const r=this,o=r.__v_raw,a=Je(o),l=e?Dl:s?Ul:Fl;return!s&&Kt(a,"iterate",Ii),o.forEach((c,u)=>n.call(i,l(c),l(u),r))}}function Dr(s,e,t){return function(...n){const i=this.__v_raw,r=Je(i),o=Qs(r),a=s==="entries"||s===Symbol.iterator&&o,l=s==="keys"&&o,c=i[s](...n),u=t?Dl:e?Ul:Fl;return!e&&Kt(r,"iterate",l?qa:Ii),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Yn(s){return function(...e){return s==="delete"?!1:this}}function fp(){const s={get(r){return Cr(this,r)},get size(){return Lr(this)},has:Pr,add:wc,set:Tc,delete:Ec,clear:Ac,forEach:Rr(!1,!1)},e={get(r){return Cr(this,r,!1,!0)},get size(){return Lr(this)},has:Pr,add:wc,set:Tc,delete:Ec,clear:Ac,forEach:Rr(!1,!0)},t={get(r){return Cr(this,r,!0)},get size(){return Lr(this,!0)},has(r){return Pr.call(this,r,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:Rr(!0,!1)},n={get(r){return Cr(this,r,!0,!0)},get size(){return Lr(this,!0)},has(r){return Pr.call(this,r,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=Dr(r,!1,!1),t[r]=Dr(r,!0,!1),e[r]=Dr(r,!1,!0),n[r]=Dr(r,!0,!0)}),[s,t,e,n]}const[dp,pp,mp,gp]=fp();function Il(s,e){const t=e?s?gp:mp:s?pp:dp;return(n,i,r)=>i==="__v_isReactive"?!s:i==="__v_isReadonly"?s:i==="__v_raw"?n:Reflect.get(qe(t,i)&&i in n?t:n,i,r)}const vp={get:Il(!1,!1)},xp={get:Il(!1,!0)},_p={get:Il(!0,!1)},tf=new WeakMap,nf=new WeakMap,sf=new WeakMap,yp=new WeakMap;function bp(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mp(s){return s.__v_skip||!Object.isExtensible(s)?0:bp(jd(s))}function Nl(s){return ar(s)?s:Ol(s,!1,ef,vp,tf)}function Sp(s){return Ol(s,!1,hp,xp,nf)}function rf(s){return Ol(s,!0,up,_p,sf)}function Ol(s,e,t,n,i){if(!ft(s)||s.__v_raw&&!(e&&s.__v_isReactive))return s;const r=i.get(s);if(r)return r;const o=Mp(s);if(o===0)return s;const a=new Proxy(s,o===2?n:t);return i.set(s,a),a}function ms(s){return ar(s)?ms(s.__v_raw):!!(s&&s.__v_isReactive)}function ar(s){return!!(s&&s.__v_isReadonly)}function Ya(s){return!!(s&&s.__v_isShallow)}function of(s){return ms(s)||ar(s)}function Je(s){const e=s&&s.__v_raw;return e?Je(e):s}function af(s){return yo(s,"__v_skip",!0),s}const Fl=s=>ft(s)?Nl(s):s,Ul=s=>ft(s)?rf(s):s;function wp(s){ui&&pn&&(s=Je(s),Zh(s.dep||(s.dep=Pl())))}function Tp(s,e){s=Je(s),s.dep&&$a(s.dep)}function kt(s){return!!(s&&s.__v_isRef===!0)}function Ep(s){return kt(s)?s.value:s}const Ap={get:(s,e,t)=>Ep(Reflect.get(s,e,t)),set:(s,e,t,n)=>{const i=s[e];return kt(i)&&!kt(t)?(i.value=t,!0):Reflect.set(s,e,t,n)}};function lf(s){return ms(s)?s:new Proxy(s,Ap)}var cf;class Cp{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[cf]=!1,this._dirty=!0,this.effect=new Ll(e,()=>{this._dirty||(this._dirty=!0,Tp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=Je(this);return wp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}cf="__v_isReadonly";function Pp(s,e,t=!1){let n,i;const r=He(s);return r?(n=s,i=yn):(n=s.get,i=s.set),new Cp(n,i,r||!i,t)}function hi(s,e,t,n){let i;try{i=n?s(...n):s()}catch(r){Do(r,e,t)}return i}function sn(s,e,t,n){if(He(s)){const r=hi(s,e,t,n);return r&&jh(r)&&r.catch(o=>{Do(o,e,t)}),r}const i=[];for(let r=0;r<s.length;r++)i.push(sn(s[r],e,t,n));return i}function Do(s,e,t,n=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](s,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){hi(l,null,10,[s,o,a]);return}}Lp(s,t,i,n)}function Lp(s,e,t,n=!0){console.error(s)}let lr=!1,Ka=!1;const Rt=[];let En=0;const gs=[];let kn=null,Ci=0;const uf=Promise.resolve();let zl=null;function Rp(s){const e=zl||uf;return s?e.then(this?s.bind(this):s):e}function Dp(s){let e=En+1,t=Rt.length;for(;e<t;){const n=e+t>>>1;cr(Rt[n])<s?e=n+1:t=n}return e}function kl(s){(!Rt.length||!Rt.includes(s,lr&&s.allowRecurse?En+1:En))&&(s.id==null?Rt.push(s):Rt.splice(Dp(s.id),0,s),hf())}function hf(){!lr&&!Ka&&(Ka=!0,zl=uf.then(df))}function Ip(s){const e=Rt.indexOf(s);e>En&&Rt.splice(e,1)}function Np(s){Fe(s)?gs.push(...s):(!kn||!kn.includes(s,s.allowRecurse?Ci+1:Ci))&&gs.push(s),hf()}function Cc(s,e=lr?En+1:0){for(;e<Rt.length;e++){const t=Rt[e];t&&t.pre&&(Rt.splice(e,1),e--,t())}}function ff(s){if(gs.length){const e=[...new Set(gs)];if(gs.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((t,n)=>cr(t)-cr(n)),Ci=0;Ci<kn.length;Ci++)kn[Ci]();kn=null,Ci=0}}const cr=s=>s.id==null?1/0:s.id,Op=(s,e)=>{const t=cr(s)-cr(e);if(t===0){if(s.pre&&!e.pre)return-1;if(e.pre&&!s.pre)return 1}return t};function df(s){Ka=!1,lr=!0,Rt.sort(Op);const e=yn;try{for(En=0;En<Rt.length;En++){const t=Rt[En];t&&t.active!==!1&&hi(t,null,14)}}finally{En=0,Rt.length=0,ff(),lr=!1,zl=null,(Rt.length||gs.length)&&df()}}function Fp(s,e,...t){if(s.isUnmounted)return;const n=s.vnode.props||st;let i=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||st;f&&(i=t.map(p=>Et(p)?p.trim():p)),h&&(i=t.map(qh))}let a,l=n[a=$o(e)]||n[a=$o(ys(e))];!l&&r&&(l=n[a=$o(Rs(e))]),l&&sn(l,s,6,i);const c=n[a+"Once"];if(c){if(!s.emitted)s.emitted={};else if(s.emitted[a])return;s.emitted[a]=!0,sn(c,s,6,i)}}function pf(s,e,t=!1){const n=e.emitsCache,i=n.get(s);if(i!==void 0)return i;const r=s.emits;let o={},a=!1;if(!He(s)){const l=c=>{const u=pf(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!r&&!a?(ft(s)&&n.set(s,null),null):(Fe(r)?r.forEach(l=>o[l]=null):Dt(o,r),ft(s)&&n.set(s,o),o)}function Io(s,e){return!s||!Co(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(s,e[0].toLowerCase()+e.slice(1))||qe(s,Rs(e))||qe(s,e))}let gn=null,No=null;function bo(s){const e=gn;return gn=s,No=s&&s.type.__scopeId||null,e}function Up(s){No=s}function zp(){No=null}function kp(s,e=gn,t){if(!e||s._n)return s;const n=(...i)=>{n._d&&Uc(-1);const r=bo(e);let o;try{o=s(...i)}finally{bo(r),n._d&&Uc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ko(s){const{type:e,vnode:t,proxy:n,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=s;let d,v;const S=bo(s);try{if(t.shapeFlag&4){const y=i||n;d=wn(u.call(y,y,h,r,p,f,g)),v=l}else{const y=e;d=wn(y.length>1?y(r,{attrs:l,slots:a,emit:c}):y(r,null)),v=e.props?l:Bp(l)}}catch(y){tr.length=0,Do(y,s,1),d=Ni(Wn)}let _=d;if(v&&m!==!1){const y=Object.keys(v),{shapeFlag:M}=_;y.length&&M&7&&(o&&y.some(Tl)&&(v=Hp(v,o)),_=di(_,v))}return t.dirs&&(_=di(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),d=_,bo(S),d}const Bp=s=>{let e;for(const t in s)(t==="class"||t==="style"||Co(t))&&((e||(e={}))[t]=s[t]);return e},Hp=(s,e)=>{const t={};for(const n in s)(!Tl(n)||!(n.slice(9)in e))&&(t[n]=s[n]);return t};function Vp(s,e,t){const{props:n,children:i,component:r}=s,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Pc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Io(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Pc(n,o,c):!0:!!o;return!1}function Pc(s,e,t){const n=Object.keys(e);if(n.length!==Object.keys(s).length)return!0;for(let i=0;i<n.length;i++){const r=n[i];if(e[r]!==s[r]&&!Io(t,r))return!0}return!1}function Gp({vnode:s,parent:e},t){for(;e&&e.subTree===s;)(s=e.vnode).el=t,e=e.parent}const Wp=s=>s.__isSuspense;function jp(s,e){e&&e.pendingBranch?Fe(s)?e.effects.push(...s):e.effects.push(s):Np(s)}function Xp(s,e){if(St){let t=St.provides;const n=St.parent&&St.parent.provides;n===t&&(t=St.provides=Object.create(n)),t[s]=e}}function fo(s,e,t=!1){const n=St||gn;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&s in i)return i[s];if(arguments.length>1)return t&&He(e)?e.call(n.proxy):e}}const Ir={};function Zo(s,e,t){return mf(s,e,t)}function mf(s,e,{immediate:t,deep:n,flush:i,onTrack:r,onTrigger:o}=st){const a=St;let l,c=!1,u=!1;if(kt(s)?(l=()=>s.value,c=Ya(s)):ms(s)?(l=()=>s,n=!0):Fe(s)?(u=!0,c=s.some(_=>ms(_)||Ya(_)),l=()=>s.map(_=>{if(kt(_))return _.value;if(ms(_))return us(_);if(He(_))return hi(_,a,2)})):He(s)?e?l=()=>hi(s,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),sn(s,a,3,[f])}:l=yn,e&&n){const _=l;l=()=>us(_())}let h,f=_=>{h=v.onStop=()=>{hi(_,a,4)}},p;if(hr)if(f=yn,e?t&&sn(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const _=jm();p=_.__watcherHandles||(_.__watcherHandles=[])}else return yn;let g=u?new Array(s.length).fill(Ir):Ir;const m=()=>{if(!!v.active)if(e){const _=v.run();(n||c||(u?_.some((y,M)=>_o(y,g[M])):_o(_,g)))&&(h&&h(),sn(e,a,3,[_,g===Ir?void 0:u&&g[0]===Ir?[]:g,f]),g=_)}else v.run()};m.allowRecurse=!!e;let d;i==="sync"?d=m:i==="post"?d=()=>Vt(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),d=()=>kl(m));const v=new Ll(l,d);e?t?m():g=v.run():i==="post"?Vt(v.run.bind(v),a&&a.suspense):v.run();const S=()=>{v.stop(),a&&a.scope&&El(a.scope.effects,v)};return p&&p.push(S),S}function qp(s,e,t){const n=this.proxy,i=Et(s)?s.includes(".")?gf(n,s):()=>n[s]:s.bind(n,n);let r;He(e)?r=e:(r=e.handler,t=e);const o=St;bs(this);const a=mf(i,r.bind(n),t);return o?bs(o):Oi(),a}function gf(s,e){const t=e.split(".");return()=>{let n=s;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function us(s,e){if(!ft(s)||s.__v_skip||(e=e||new Set,e.has(s)))return s;if(e.add(s),kt(s))us(s.value,e);else if(Fe(s))for(let t=0;t<s.length;t++)us(s[t],e);else if(Gd(s)||Qs(s))s.forEach(t=>{us(t,e)});else if(Xd(s))for(const t in s)us(s[t],e);return s}function $p(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bl(()=>{s.isMounted=!0}),yf(()=>{s.isUnmounting=!0}),s}const Jt=[Function,Array],Yp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},setup(s,{slots:e}){const t=Um(),n=$p();let i;return()=>{const r=e.default&&xf(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==Wn){o=m;break}}const a=Je(s),{mode:l}=a;if(n.isLeaving)return Jo(o);const c=Lc(o);if(!c)return Jo(o);const u=Za(c,a,n,t);Ja(c,u);const h=t.subTree,f=h&&Lc(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();i===void 0?i=m:m!==i&&(i=m,p=!0)}if(f&&f.type!==Wn&&(!Pi(c,f)||p)){const m=Za(f,a,n,t);if(Ja(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Jo(o);l==="in-out"&&c.type!==Wn&&(m.delayLeave=(d,v,S)=>{const _=vf(n,f);_[String(f.key)]=f,d._leaveCb=()=>{v(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Kp=Yp;function vf(s,e){const{leavingVNodes:t}=s;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Za(s,e,t,n){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:v,onAppearCancelled:S}=e,_=String(s.key),y=vf(t,s),M=(x,C)=>{x&&sn(x,n,9,C)},L=(x,C)=>{const R=C[1];M(x,C),Fe(x)?x.every(V=>V.length<=1)&&R():x.length<=1&&R()},I={mode:r,persisted:o,beforeEnter(x){let C=a;if(!t.isMounted)if(i)C=m||a;else return;x._leaveCb&&x._leaveCb(!0);const R=y[_];R&&Pi(s,R)&&R.el._leaveCb&&R.el._leaveCb(),M(C,[x])},enter(x){let C=l,R=c,V=u;if(!t.isMounted)if(i)C=d||l,R=v||c,V=S||u;else return;let ae=!1;const B=x._enterCb=O=>{ae||(ae=!0,O?M(V,[x]):M(R,[x]),I.delayedLeave&&I.delayedLeave(),x._enterCb=void 0)};C?L(C,[x,B]):B()},leave(x,C){const R=String(s.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return C();M(h,[x]);let V=!1;const ae=x._leaveCb=B=>{V||(V=!0,C(),B?M(g,[x]):M(p,[x]),x._leaveCb=void 0,y[R]===s&&delete y[R])};y[R]=s,f?L(f,[x,ae]):ae()},clone(x){return Za(x,e,t,n)}};return I}function Jo(s){if(Oo(s))return s=di(s),s.children=null,s}function Lc(s){return Oo(s)?s.children?s.children[0]:void 0:s}function Ja(s,e){s.shapeFlag&6&&s.component?Ja(s.component.subTree,e):s.shapeFlag&128?(s.ssContent.transition=e.clone(s.ssContent),s.ssFallback.transition=e.clone(s.ssFallback)):s.transition=e}function xf(s,e=!1,t){let n=[],i=0;for(let r=0;r<s.length;r++){let o=s[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===fn?(o.patchFlag&128&&i++,n=n.concat(xf(o.children,e,a))):(e||o.type!==Wn)&&n.push(a!=null?di(o,{key:a}):o)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}const po=s=>!!s.type.__asyncLoader,Oo=s=>s.type.__isKeepAlive;function Zp(s,e){_f(s,"a",e)}function Jp(s,e){_f(s,"da",e)}function _f(s,e,t=St){const n=s.__wdc||(s.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return s()});if(Fo(e,n,t),t){let i=t.parent;for(;i&&i.parent;)Oo(i.parent.vnode)&&Qp(n,e,t,i),i=i.parent}}function Qp(s,e,t,n){const i=Fo(e,s,n,!0);bf(()=>{El(n[e],i)},t)}function Fo(s,e,t=St,n=!1){if(t){const i=t[s]||(t[s]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ds(),bs(t);const a=sn(e,t,s,o);return Oi(),Is(),a});return n?i.unshift(r):i.push(r),r}}const $n=s=>(e,t=St)=>(!hr||s==="sp")&&Fo(s,(...n)=>e(...n),t),em=$n("bm"),Bl=$n("m"),tm=$n("bu"),nm=$n("u"),yf=$n("bum"),bf=$n("um"),im=$n("sp"),sm=$n("rtg"),rm=$n("rtc");function om(s,e=St){Fo("ec",s,e)}function yi(s,e,t,n){const i=s.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Ds(),sn(l,t,8,[s.el,a,s,e]),Is())}}const am=Symbol(),Qa=s=>s?Rf(s)?Wl(s)||s.proxy:Qa(s.parent):null,er=Dt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Qa(s.parent),$root:s=>Qa(s.root),$emit:s=>s.emit,$options:s=>Hl(s),$forceUpdate:s=>s.f||(s.f=()=>kl(s.update)),$nextTick:s=>s.n||(s.n=Rp.bind(s.proxy)),$watch:s=>qp.bind(s)}),Qo=(s,e)=>s!==st&&!s.__isScriptSetup&&qe(s,e),lm={get({_:s},e){const{ctx:t,setupState:n,data:i,props:r,accessCache:o,type:a,appContext:l}=s;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(Qo(n,e))return o[e]=1,n[e];if(i!==st&&qe(i,e))return o[e]=2,i[e];if((c=s.propsOptions[0])&&qe(c,e))return o[e]=3,r[e];if(t!==st&&qe(t,e))return o[e]=4,t[e];el&&(o[e]=0)}}const u=er[e];let h,f;if(u)return e==="$attrs"&&Kt(s,"get",e),u(s);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==st&&qe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,qe(f,e))return f[e]},set({_:s},e,t){const{data:n,setupState:i,ctx:r}=s;return Qo(i,e)?(i[e]=t,!0):n!==st&&qe(n,e)?(n[e]=t,!0):qe(s.props,e)||e[0]==="$"&&e.slice(1)in s?!1:(r[e]=t,!0)},has({_:{data:s,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:r}},o){let a;return!!t[o]||s!==st&&qe(s,o)||Qo(e,o)||(a=r[0])&&qe(a,o)||qe(n,o)||qe(er,o)||qe(i.config.globalProperties,o)},defineProperty(s,e,t){return t.get!=null?s._.accessCache[e]=0:qe(t,"value")&&this.set(s,e,t.value,null),Reflect.defineProperty(s,e,t)}};let el=!0;function cm(s){const e=Hl(s),t=s.proxy,n=s.ctx;el=!1,e.beforeCreate&&Rc(e.beforeCreate,s,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:v,beforeUnmount:S,destroyed:_,unmounted:y,render:M,renderTracked:L,renderTriggered:I,errorCaptured:x,serverPrefetch:C,expose:R,inheritAttrs:V,components:ae,directives:B,filters:O}=e;if(c&&um(c,n,null,s.appContext.config.unwrapInjectedRef),o)for(const ne in o){const j=o[ne];He(j)&&(n[ne]=j.bind(t))}if(i){const ne=i.call(t,t);ft(ne)&&(s.data=Nl(ne))}if(el=!0,r)for(const ne in r){const j=r[ne],Z=He(j)?j.bind(t,t):He(j.get)?j.get.bind(t,t):yn,fe=!He(j)&&He(j.set)?j.set.bind(t):yn,X=Gm({get:Z,set:fe});Object.defineProperty(n,ne,{enumerable:!0,configurable:!0,get:()=>X.value,set:K=>X.value=K})}if(a)for(const ne in a)Mf(a[ne],n,t,ne);if(l){const ne=He(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(j=>{Xp(j,ne[j])})}u&&Rc(u,s,"c");function ee(ne,j){Fe(j)?j.forEach(Z=>ne(Z.bind(t))):j&&ne(j.bind(t))}if(ee(em,h),ee(Bl,f),ee(tm,p),ee(nm,g),ee(Zp,m),ee(Jp,d),ee(om,x),ee(rm,L),ee(sm,I),ee(yf,S),ee(bf,y),ee(im,C),Fe(R))if(R.length){const ne=s.exposed||(s.exposed={});R.forEach(j=>{Object.defineProperty(ne,j,{get:()=>t[j],set:Z=>t[j]=Z})})}else s.exposed||(s.exposed={});M&&s.render===yn&&(s.render=M),V!=null&&(s.inheritAttrs=V),ae&&(s.components=ae),B&&(s.directives=B)}function um(s,e,t=yn,n=!1){Fe(s)&&(s=tl(s));for(const i in s){const r=s[i];let o;ft(r)?"default"in r?o=fo(r.from||i,r.default,!0):o=fo(r.from||i):o=fo(r),kt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Rc(s,e,t){sn(Fe(s)?s.map(n=>n.bind(e.proxy)):s.bind(e.proxy),e,t)}function Mf(s,e,t,n){const i=n.includes(".")?gf(t,n):()=>t[n];if(Et(s)){const r=e[s];He(r)&&Zo(i,r)}else if(He(s))Zo(i,s.bind(t));else if(ft(s))if(Fe(s))s.forEach(r=>Mf(r,e,t,n));else{const r=He(s.handler)?s.handler.bind(t):e[s.handler];He(r)&&Zo(i,r,s)}}function Hl(s){const e=s.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=s.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Mo(l,c,o,!0)),Mo(l,e,o)),ft(e)&&r.set(e,l),l}function Mo(s,e,t,n=!1){const{mixins:i,extends:r}=e;r&&Mo(s,r,t,!0),i&&i.forEach(o=>Mo(s,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=hm[o]||t&&t[o];s[o]=a?a(s[o],e[o]):e[o]}return s}const hm={data:Dc,props:Ti,emits:Ti,methods:Ti,computed:Ti,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Ti,directives:Ti,watch:dm,provide:Dc,inject:fm};function Dc(s,e){return e?s?function(){return Dt(He(s)?s.call(this,this):s,He(e)?e.call(this,this):e)}:e:s}function fm(s,e){return Ti(tl(s),tl(e))}function tl(s){if(Fe(s)){const e={};for(let t=0;t<s.length;t++)e[s[t]]=s[t];return e}return s}function Ft(s,e){return s?[...new Set([].concat(s,e))]:e}function Ti(s,e){return s?Dt(Dt(Object.create(null),s),e):e}function dm(s,e){if(!s)return e;if(!e)return s;const t=Dt(Object.create(null),s);for(const n in e)t[n]=Ft(s[n],e[n]);return t}function pm(s,e,t,n=!1){const i={},r={};yo(r,zo,1),s.propsDefaults=Object.create(null),Sf(s,e,i,r);for(const o in s.propsOptions[0])o in i||(i[o]=void 0);t?s.props=n?i:Sp(i):s.type.props?s.props=i:s.props=r,s.attrs=r}function mm(s,e,t,n){const{props:i,attrs:r,vnode:{patchFlag:o}}=s,a=Je(i),[l]=s.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=s.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Io(s.emitsOptions,f))continue;const p=e[f];if(l)if(qe(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=ys(f);i[g]=nl(l,a,g,p,s,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Sf(s,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!qe(e,h)&&((u=Rs(h))===h||!qe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=nl(l,a,h,void 0,s,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!qe(e,h)&&!0)&&(delete r[h],c=!0)}c&&qn(s,"set","$attrs")}function Sf(s,e,t,n){const[i,r]=s.propsOptions;let o=!1,a;if(e)for(let l in e){if(ho(l))continue;const c=e[l];let u;i&&qe(i,u=ys(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Io(s.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Je(t),c=a||st;for(let u=0;u<r.length;u++){const h=r[u];t[h]=nl(i,l,h,c[h],s,!qe(c,h))}}return o}function nl(s,e,t,n,i,r){const o=s[t];if(o!=null){const a=qe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&He(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(bs(i),n=c[t]=l.call(null,e),Oi())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Rs(t))&&(n=!0))}return n}function wf(s,e,t=!1){const n=e.propsCache,i=n.get(s);if(i)return i;const r=s.props,o={},a=[];let l=!1;if(!He(s)){const u=h=>{l=!0;const[f,p]=wf(h,e,!0);Dt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),s.extends&&u(s.extends),s.mixins&&s.mixins.forEach(u)}if(!r&&!l)return ft(s)&&n.set(s,ps),ps;if(Fe(r))for(let u=0;u<r.length;u++){const h=ys(r[u]);Ic(h)&&(o[h]=st)}else if(r)for(const u in r){const h=ys(u);if(Ic(h)){const f=r[u],p=o[h]=Fe(f)||He(f)?{type:f}:Object.assign({},f);if(p){const g=Fc(Boolean,p.type),m=Fc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||qe(p,"default"))&&a.push(h)}}}const c=[o,a];return ft(s)&&n.set(s,c),c}function Ic(s){return s[0]!=="$"}function Nc(s){const e=s&&s.toString().match(/^\s*function (\w+)/);return e?e[1]:s===null?"null":""}function Oc(s,e){return Nc(s)===Nc(e)}function Fc(s,e){return Fe(e)?e.findIndex(t=>Oc(t,s)):He(e)&&Oc(e,s)?0:-1}const Tf=s=>s[0]==="_"||s==="$stable",Vl=s=>Fe(s)?s.map(wn):[wn(s)],gm=(s,e,t)=>{if(e._n)return e;const n=kp((...i)=>Vl(e(...i)),t);return n._c=!1,n},Ef=(s,e,t)=>{const n=s._ctx;for(const i in s){if(Tf(i))continue;const r=s[i];if(He(r))e[i]=gm(i,r,n);else if(r!=null){const o=Vl(r);e[i]=()=>o}}},Af=(s,e)=>{const t=Vl(e);s.slots.default=()=>t},vm=(s,e)=>{if(s.vnode.shapeFlag&32){const t=e._;t?(s.slots=Je(e),yo(e,"_",t)):Ef(e,s.slots={})}else s.slots={},e&&Af(s,e);yo(s.slots,zo,1)},xm=(s,e,t)=>{const{vnode:n,slots:i}=s;let r=!0,o=st;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Dt(i,e),!t&&a===1&&delete i._):(r=!e.$stable,Ef(e,i)),o=e}else e&&(Af(s,e),o={default:1});if(r)for(const a in i)!Tf(a)&&!(a in o)&&delete i[a]};function Cf(){return{app:null,config:{isNativeTag:Bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _m=0;function ym(s,e){return function(n,i=null){He(n)||(n=Object.assign({},n)),i!=null&&!ft(i)&&(i=null);const r=Cf(),o=new Set;let a=!1;const l=r.app={_uid:_m++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:Xm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Ni(n,i);return f.appContext=r,u&&e?e(f,c):s(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Wl(f.component)||f.component.proxy}},unmount(){a&&(s(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function il(s,e,t,n,i=!1){if(Fe(s)){s.forEach((f,p)=>il(f,e&&(Fe(e)?e[p]:e),t,n,i));return}if(po(n)&&!i)return;const r=n.shapeFlag&4?Wl(n.component)||n.component.proxy:n.el,o=i?null:r,{i:a,r:l}=s,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Et(c)?(u[c]=null,qe(h,c)&&(h[c]=null)):kt(c)&&(c.value=null)),He(l))hi(l,a,12,[o,u]);else{const f=Et(l),p=kt(l);if(f||p){const g=()=>{if(s.f){const m=f?qe(h,l)?h[l]:u[l]:l.value;i?Fe(m)&&El(m,r):Fe(m)?m.includes(r)||m.push(r):f?(u[l]=[r],qe(h,l)&&(h[l]=u[l])):(l.value=[r],s.k&&(u[s.k]=l.value))}else f?(u[l]=o,qe(h,l)&&(h[l]=o)):p&&(l.value=o,s.k&&(u[s.k]=o))};o?(g.id=-1,Vt(g,t)):g()}}}const Vt=jp;function bm(s){return Mm(s)}function Mm(s,e){const t=Yd();t.__VUE__=!0;const{insert:n,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=yn,insertStaticContent:g}=s,m=(w,E,N,H=null,z=null,Q=null,ie=!1,q=null,ce=!!E.dynamicChildren)=>{if(w===E)return;w&&!Pi(w,E)&&(H=Le(w),K(w,z,Q,!0),w=null),E.patchFlag===-2&&(ce=!1,E.dynamicChildren=null);const{type:te,ref:T,shapeFlag:b}=E;switch(te){case Uo:d(w,E,N,H);break;case Wn:v(w,E,N,H);break;case ea:w==null&&S(E,N,H,ie);break;case fn:ae(w,E,N,H,z,Q,ie,q,ce);break;default:b&1?M(w,E,N,H,z,Q,ie,q,ce):b&6?B(w,E,N,H,z,Q,ie,q,ce):(b&64||b&128)&&te.process(w,E,N,H,z,Q,ie,q,ce,Ae)}T!=null&&z&&il(T,w&&w.ref,Q,E||w,!E)},d=(w,E,N,H)=>{if(w==null)n(E.el=a(E.children),N,H);else{const z=E.el=w.el;E.children!==w.children&&c(z,E.children)}},v=(w,E,N,H)=>{w==null?n(E.el=l(E.children||""),N,H):E.el=w.el},S=(w,E,N,H)=>{[w.el,w.anchor]=g(w.children,E,N,H,w.el,w.anchor)},_=({el:w,anchor:E},N,H)=>{let z;for(;w&&w!==E;)z=f(w),n(w,N,H),w=z;n(E,N,H)},y=({el:w,anchor:E})=>{let N;for(;w&&w!==E;)N=f(w),i(w),w=N;i(E)},M=(w,E,N,H,z,Q,ie,q,ce)=>{ie=ie||E.type==="svg",w==null?L(E,N,H,z,Q,ie,q,ce):C(w,E,z,Q,ie,q,ce)},L=(w,E,N,H,z,Q,ie,q)=>{let ce,te;const{type:T,props:b,shapeFlag:F,transition:Y,dirs:se}=w;if(ce=w.el=o(w.type,Q,b&&b.is,b),F&8?u(ce,w.children):F&16&&x(w.children,ce,null,H,z,Q&&T!=="foreignObject",ie,q),se&&yi(w,null,H,"created"),b){for(const xe in b)xe!=="value"&&!ho(xe)&&r(ce,xe,null,b[xe],Q,w.children,H,z,J);"value"in b&&r(ce,"value",null,b.value),(te=b.onVnodeBeforeMount)&&bn(te,H,w)}I(ce,w,w.scopeId,ie,H),se&&yi(w,null,H,"beforeMount");const de=(!z||z&&!z.pendingBranch)&&Y&&!Y.persisted;de&&Y.beforeEnter(ce),n(ce,E,N),((te=b&&b.onVnodeMounted)||de||se)&&Vt(()=>{te&&bn(te,H,w),de&&Y.enter(ce),se&&yi(w,null,H,"mounted")},z)},I=(w,E,N,H,z)=>{if(N&&p(w,N),H)for(let Q=0;Q<H.length;Q++)p(w,H[Q]);if(z){let Q=z.subTree;if(E===Q){const ie=z.vnode;I(w,ie,ie.scopeId,ie.slotScopeIds,z.parent)}}},x=(w,E,N,H,z,Q,ie,q,ce=0)=>{for(let te=ce;te<w.length;te++){const T=w[te]=q?oi(w[te]):wn(w[te]);m(null,T,E,N,H,z,Q,ie,q)}},C=(w,E,N,H,z,Q,ie)=>{const q=E.el=w.el;let{patchFlag:ce,dynamicChildren:te,dirs:T}=E;ce|=w.patchFlag&16;const b=w.props||st,F=E.props||st;let Y;N&&bi(N,!1),(Y=F.onVnodeBeforeUpdate)&&bn(Y,N,E,w),T&&yi(E,w,N,"beforeUpdate"),N&&bi(N,!0);const se=z&&E.type!=="foreignObject";if(te?R(w.dynamicChildren,te,q,N,H,se,Q):ie||j(w,E,q,null,N,H,se,Q,!1),ce>0){if(ce&16)V(q,E,b,F,N,H,z);else if(ce&2&&b.class!==F.class&&r(q,"class",null,F.class,z),ce&4&&r(q,"style",b.style,F.style,z),ce&8){const de=E.dynamicProps;for(let xe=0;xe<de.length;xe++){const P=de[xe],k=b[P],_e=F[P];(_e!==k||P==="value")&&r(q,P,k,_e,z,w.children,N,H,J)}}ce&1&&w.children!==E.children&&u(q,E.children)}else!ie&&te==null&&V(q,E,b,F,N,H,z);((Y=F.onVnodeUpdated)||T)&&Vt(()=>{Y&&bn(Y,N,E,w),T&&yi(E,w,N,"updated")},H)},R=(w,E,N,H,z,Q,ie)=>{for(let q=0;q<E.length;q++){const ce=w[q],te=E[q],T=ce.el&&(ce.type===fn||!Pi(ce,te)||ce.shapeFlag&70)?h(ce.el):N;m(ce,te,T,null,H,z,Q,ie,!0)}},V=(w,E,N,H,z,Q,ie)=>{if(N!==H){if(N!==st)for(const q in N)!ho(q)&&!(q in H)&&r(w,q,N[q],null,ie,E.children,z,Q,J);for(const q in H){if(ho(q))continue;const ce=H[q],te=N[q];ce!==te&&q!=="value"&&r(w,q,te,ce,ie,E.children,z,Q,J)}"value"in H&&r(w,"value",N.value,H.value)}},ae=(w,E,N,H,z,Q,ie,q,ce)=>{const te=E.el=w?w.el:a(""),T=E.anchor=w?w.anchor:a("");let{patchFlag:b,dynamicChildren:F,slotScopeIds:Y}=E;Y&&(q=q?q.concat(Y):Y),w==null?(n(te,N,H),n(T,N,H),x(E.children,N,T,z,Q,ie,q,ce)):b>0&&b&64&&F&&w.dynamicChildren?(R(w.dynamicChildren,F,N,z,Q,ie,q),(E.key!=null||z&&E===z.subTree)&&Pf(w,E,!0)):j(w,E,N,T,z,Q,ie,q,ce)},B=(w,E,N,H,z,Q,ie,q,ce)=>{E.slotScopeIds=q,w==null?E.shapeFlag&512?z.ctx.activate(E,N,H,ie,ce):O(E,N,H,z,Q,ie,ce):$(w,E,ce)},O=(w,E,N,H,z,Q,ie)=>{const q=w.component=Fm(w,H,z);if(Oo(w)&&(q.ctx.renderer=Ae),zm(q),q.asyncDep){if(z&&z.registerDep(q,ee),!w.el){const ce=q.subTree=Ni(Wn);v(null,ce,E,N)}return}ee(q,w,E,N,z,Q,ie)},$=(w,E,N)=>{const H=E.component=w.component;if(Vp(w,E,N))if(H.asyncDep&&!H.asyncResolved){ne(H,E,N);return}else H.next=E,Ip(H.update),H.update();else E.el=w.el,H.vnode=E},ee=(w,E,N,H,z,Q,ie)=>{const q=()=>{if(w.isMounted){let{next:T,bu:b,u:F,parent:Y,vnode:se}=w,de=T,xe;bi(w,!1),T?(T.el=se.el,ne(w,T,ie)):T=se,b&&Yo(b),(xe=T.props&&T.props.onVnodeBeforeUpdate)&&bn(xe,Y,T,se),bi(w,!0);const P=Ko(w),k=w.subTree;w.subTree=P,m(k,P,h(k.el),Le(k),w,z,Q),T.el=P.el,de===null&&Gp(w,P.el),F&&Vt(F,z),(xe=T.props&&T.props.onVnodeUpdated)&&Vt(()=>bn(xe,Y,T,se),z)}else{let T;const{el:b,props:F}=E,{bm:Y,m:se,parent:de}=w,xe=po(E);if(bi(w,!1),Y&&Yo(Y),!xe&&(T=F&&F.onVnodeBeforeMount)&&bn(T,de,E),bi(w,!0),b&&Ie){const P=()=>{w.subTree=Ko(w),Ie(b,w.subTree,w,z,null)};xe?E.type.__asyncLoader().then(()=>!w.isUnmounted&&P()):P()}else{const P=w.subTree=Ko(w);m(null,P,N,H,w,z,Q),E.el=P.el}if(se&&Vt(se,z),!xe&&(T=F&&F.onVnodeMounted)){const P=E;Vt(()=>bn(T,de,P),z)}(E.shapeFlag&256||de&&po(de.vnode)&&de.vnode.shapeFlag&256)&&w.a&&Vt(w.a,z),w.isMounted=!0,E=N=H=null}},ce=w.effect=new Ll(q,()=>kl(te),w.scope),te=w.update=()=>ce.run();te.id=w.uid,bi(w,!0),te()},ne=(w,E,N)=>{E.component=w;const H=w.vnode.props;w.vnode=E,w.next=null,mm(w,E.props,H,N),xm(w,E.children,N),Ds(),Cc(),Is()},j=(w,E,N,H,z,Q,ie,q,ce=!1)=>{const te=w&&w.children,T=w?w.shapeFlag:0,b=E.children,{patchFlag:F,shapeFlag:Y}=E;if(F>0){if(F&128){fe(te,b,N,H,z,Q,ie,q,ce);return}else if(F&256){Z(te,b,N,H,z,Q,ie,q,ce);return}}Y&8?(T&16&&J(te,z,Q),b!==te&&u(N,b)):T&16?Y&16?fe(te,b,N,H,z,Q,ie,q,ce):J(te,z,Q,!0):(T&8&&u(N,""),Y&16&&x(b,N,H,z,Q,ie,q,ce))},Z=(w,E,N,H,z,Q,ie,q,ce)=>{w=w||ps,E=E||ps;const te=w.length,T=E.length,b=Math.min(te,T);let F;for(F=0;F<b;F++){const Y=E[F]=ce?oi(E[F]):wn(E[F]);m(w[F],Y,N,null,z,Q,ie,q,ce)}te>T?J(w,z,Q,!0,!1,b):x(E,N,H,z,Q,ie,q,ce,b)},fe=(w,E,N,H,z,Q,ie,q,ce)=>{let te=0;const T=E.length;let b=w.length-1,F=T-1;for(;te<=b&&te<=F;){const Y=w[te],se=E[te]=ce?oi(E[te]):wn(E[te]);if(Pi(Y,se))m(Y,se,N,null,z,Q,ie,q,ce);else break;te++}for(;te<=b&&te<=F;){const Y=w[b],se=E[F]=ce?oi(E[F]):wn(E[F]);if(Pi(Y,se))m(Y,se,N,null,z,Q,ie,q,ce);else break;b--,F--}if(te>b){if(te<=F){const Y=F+1,se=Y<T?E[Y].el:H;for(;te<=F;)m(null,E[te]=ce?oi(E[te]):wn(E[te]),N,se,z,Q,ie,q,ce),te++}}else if(te>F)for(;te<=b;)K(w[te],z,Q,!0),te++;else{const Y=te,se=te,de=new Map;for(te=se;te<=F;te++){const Me=E[te]=ce?oi(E[te]):wn(E[te]);Me.key!=null&&de.set(Me.key,te)}let xe,P=0;const k=F-se+1;let _e=!1,Se=0;const be=new Array(k);for(te=0;te<k;te++)be[te]=0;for(te=Y;te<=b;te++){const Me=w[te];if(P>=k){K(Me,z,Q,!0);continue}let De;if(Me.key!=null)De=de.get(Me.key);else for(xe=se;xe<=F;xe++)if(be[xe-se]===0&&Pi(Me,E[xe])){De=xe;break}De===void 0?K(Me,z,Q,!0):(be[De-se]=te+1,De>=Se?Se=De:_e=!0,m(Me,E[De],N,null,z,Q,ie,q,ce),P++)}const Ee=_e?Sm(be):ps;for(xe=Ee.length-1,te=k-1;te>=0;te--){const Me=se+te,De=E[Me],ke=Me+1<T?E[Me+1].el:H;be[te]===0?m(null,De,N,ke,z,Q,ie,q,ce):_e&&(xe<0||te!==Ee[xe]?X(De,N,ke,2):xe--)}}},X=(w,E,N,H,z=null)=>{const{el:Q,type:ie,transition:q,children:ce,shapeFlag:te}=w;if(te&6){X(w.component.subTree,E,N,H);return}if(te&128){w.suspense.move(E,N,H);return}if(te&64){ie.move(w,E,N,Ae);return}if(ie===fn){n(Q,E,N);for(let b=0;b<ce.length;b++)X(ce[b],E,N,H);n(w.anchor,E,N);return}if(ie===ea){_(w,E,N);return}if(H!==2&&te&1&&q)if(H===0)q.beforeEnter(Q),n(Q,E,N),Vt(()=>q.enter(Q),z);else{const{leave:b,delayLeave:F,afterLeave:Y}=q,se=()=>n(Q,E,N),de=()=>{b(Q,()=>{se(),Y&&Y()})};F?F(Q,se,de):de()}else n(Q,E,N)},K=(w,E,N,H=!1,z=!1)=>{const{type:Q,props:ie,ref:q,children:ce,dynamicChildren:te,shapeFlag:T,patchFlag:b,dirs:F}=w;if(q!=null&&il(q,null,N,w,!0),T&256){E.ctx.deactivate(w);return}const Y=T&1&&F,se=!po(w);let de;if(se&&(de=ie&&ie.onVnodeBeforeUnmount)&&bn(de,E,w),T&6)ue(w.component,N,H);else{if(T&128){w.suspense.unmount(N,H);return}Y&&yi(w,null,E,"beforeUnmount"),T&64?w.type.remove(w,E,N,z,Ae,H):te&&(Q!==fn||b>0&&b&64)?J(te,E,N,!1,!0):(Q===fn&&b&384||!z&&T&16)&&J(ce,E,N),H&&pe(w)}(se&&(de=ie&&ie.onVnodeUnmounted)||Y)&&Vt(()=>{de&&bn(de,E,w),Y&&yi(w,null,E,"unmounted")},N)},pe=w=>{const{type:E,el:N,anchor:H,transition:z}=w;if(E===fn){ge(N,H);return}if(E===ea){y(w);return}const Q=()=>{i(N),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(w.shapeFlag&1&&z&&!z.persisted){const{leave:ie,delayLeave:q}=z,ce=()=>ie(N,Q);q?q(w.el,Q,ce):ce()}else Q()},ge=(w,E)=>{let N;for(;w!==E;)N=f(w),i(w),w=N;i(E)},ue=(w,E,N)=>{const{bum:H,scope:z,update:Q,subTree:ie,um:q}=w;H&&Yo(H),z.stop(),Q&&(Q.active=!1,K(ie,w,E,N)),q&&Vt(q,E),Vt(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},J=(w,E,N,H=!1,z=!1,Q=0)=>{for(let ie=Q;ie<w.length;ie++)K(w[ie],E,N,H,z)},Le=w=>w.shapeFlag&6?Le(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el),we=(w,E,N)=>{w==null?E._vnode&&K(E._vnode,null,null,!0):m(E._vnode||null,w,E,null,null,null,N),Cc(),ff(),E._vnode=w},Ae={p:m,um:K,m:X,r:pe,mt:O,mc:x,pc:j,pbc:R,n:Le,o:s};let ye,Ie;return e&&([ye,Ie]=e(Ae)),{render:we,hydrate:ye,createApp:ym(we,ye)}}function bi({effect:s,update:e},t){s.allowRecurse=e.allowRecurse=t}function Pf(s,e,t=!1){const n=s.children,i=e.children;if(Fe(n)&&Fe(i))for(let r=0;r<n.length;r++){const o=n[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=oi(i[r]),a.el=o.el),t||Pf(o,a)),a.type===Uo&&(a.el=o.el)}}function Sm(s){const e=s.slice(),t=[0];let n,i,r,o,a;const l=s.length;for(n=0;n<l;n++){const c=s[n];if(c!==0){if(i=t[t.length-1],s[i]<c){e[n]=i,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,s[t[a]]<c?r=a+1:o=a;c<s[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const wm=s=>s.__isTeleport,fn=Symbol(void 0),Uo=Symbol(void 0),Wn=Symbol(void 0),ea=Symbol(void 0),tr=[];let vn=null;function Tm(s=!1){tr.push(vn=s?null:[])}function Em(){tr.pop(),vn=tr[tr.length-1]||null}let ur=1;function Uc(s){ur+=s}function Am(s){return s.dynamicChildren=ur>0?vn||ps:null,Em(),ur>0&&vn&&vn.push(s),s}function Cm(s,e,t,n,i,r){return Am(Sr(s,e,t,n,i,r,!0))}function Pm(s){return s?s.__v_isVNode===!0:!1}function Pi(s,e){return s.type===e.type&&s.key===e.key}const zo="__vInternal",Lf=({key:s})=>s!=null?s:null,mo=({ref:s,ref_key:e,ref_for:t})=>s!=null?Et(s)||kt(s)||He(s)?{i:gn,r:s,k:e,f:!!t}:s:null;function Sr(s,e=null,t=null,n=0,i=null,r=s===fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:e,key:e&&Lf(e),ref:e&&mo(e),scopeId:No,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:gn};return a?(Gl(l,t),r&128&&s.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),ur>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const Ni=Lm;function Lm(s,e=null,t=null,n=0,i=null,r=!1){if((!s||s===am)&&(s=Wn),Pm(s)){const a=di(s,e,!0);return t&&Gl(a,t),ur>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(s)]=a:vn.push(a)),a.patchFlag|=-2,a}if(Vm(s)&&(s=s.__vccOpts),e){e=Rm(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=wl(a)),ft(l)&&(of(l)&&!Fe(l)&&(l=Dt({},l)),e.style=Sl(l))}const o=Et(s)?1:Wp(s)?128:wm(s)?64:ft(s)?4:He(s)?2:0;return Sr(s,e,t,n,i,o,r,!0)}function Rm(s){return s?of(s)||zo in s?Dt({},s):s:null}function di(s,e,t=!1){const{props:n,ref:i,patchFlag:r,children:o}=s,a=e?Im(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:a,key:a&&Lf(a),ref:e&&e.ref?t&&i?Fe(i)?i.concat(mo(e)):[i,mo(e)]:mo(e):i,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:o,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:e&&s.type!==fn?r===-1?16:r|16:r,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&di(s.ssContent),ssFallback:s.ssFallback&&di(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx}}function Dm(s=" ",e=0){return Ni(Uo,null,s,e)}function wn(s){return s==null||typeof s=="boolean"?Ni(Wn):Fe(s)?Ni(fn,null,s.slice()):typeof s=="object"?oi(s):Ni(Uo,null,String(s))}function oi(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:di(s)}function Gl(s,e){let t=0;const{shapeFlag:n}=s;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Gl(s,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(zo in e)?e._ctx=gn:i===3&&gn&&(gn.slots._===1?e._=1:(e._=2,s.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),n&64?(t=16,e=[Dm(e)]):t=8);s.children=e,s.shapeFlag|=t}function Im(...s){const e={};for(let t=0;t<s.length;t++){const n=s[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=wl([e.class,n.class]));else if(i==="style")e.style=Sl([e.style,n.style]);else if(Co(i)){const r=e[i],o=n[i];o&&r!==o&&!(Fe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=n[i])}return e}function bn(s,e,t,n=null){sn(s,e,7,[t,n])}const Nm=Cf();let Om=0;function Fm(s,e,t){const n=s.type,i=(e?e.appContext:s.appContext)||Nm,r={uid:Om++,vnode:s,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wf(n,i),emitsOptions:pf(n,i),emit:null,emitted:null,propsDefaults:st,inheritAttrs:n.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Fp.bind(null,r),s.ce&&s.ce(r),r}let St=null;const Um=()=>St||gn,bs=s=>{St=s,s.scope.on()},Oi=()=>{St&&St.scope.off(),St=null};function Rf(s){return s.vnode.shapeFlag&4}let hr=!1;function zm(s,e=!1){hr=e;const{props:t,children:n}=s.vnode,i=Rf(s);pm(s,t,i,e),vm(s,n);const r=i?km(s,e):void 0;return hr=!1,r}function km(s,e){const t=s.type;s.accessCache=Object.create(null),s.proxy=af(new Proxy(s.ctx,lm));const{setup:n}=t;if(n){const i=s.setupContext=n.length>1?Hm(s):null;bs(s),Ds();const r=hi(n,s,0,[s.props,i]);if(Is(),Oi(),jh(r)){if(r.then(Oi,Oi),e)return r.then(o=>{zc(s,o,e)}).catch(o=>{Do(o,s,0)});s.asyncDep=r}else zc(s,r,e)}else Df(s,e)}function zc(s,e,t){He(e)?s.type.__ssrInlineRender?s.ssrRender=e:s.render=e:ft(e)&&(s.setupState=lf(e)),Df(s,t)}let kc;function Df(s,e,t){const n=s.type;if(!s.render){if(!e&&kc&&!n.render){const i=n.template||Hl(s).template;if(i){const{isCustomElement:r,compilerOptions:o}=s.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Dt(Dt({isCustomElement:r,delimiters:a},o),l);n.render=kc(i,c)}}s.render=n.render||yn}bs(s),Ds(),cm(s),Is(),Oi()}function Bm(s){return new Proxy(s.attrs,{get(e,t){return Kt(s,"get","$attrs"),e[t]}})}function Hm(s){const e=n=>{s.exposed=n||{}};let t;return{get attrs(){return t||(t=Bm(s))},slots:s.slots,emit:s.emit,expose:e}}function Wl(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(lf(af(s.exposed)),{get(e,t){if(t in e)return e[t];if(t in er)return er[t](s)},has(e,t){return t in e||t in er}}))}function Vm(s){return He(s)&&"__vccOpts"in s}const Gm=(s,e)=>Pp(s,e,hr),Wm=Symbol(""),jm=()=>fo(Wm),Xm="3.2.45",qm="http://www.w3.org/2000/svg",Li=typeof document<"u"?document:null,Bc=Li&&Li.createElement("template"),$m={insert:(s,e,t)=>{e.insertBefore(s,t||null)},remove:s=>{const e=s.parentNode;e&&e.removeChild(s)},createElement:(s,e,t,n)=>{const i=e?Li.createElementNS(qm,s):Li.createElement(s,t?{is:t}:void 0);return s==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:s=>Li.createTextNode(s),createComment:s=>Li.createComment(s),setText:(s,e)=>{s.nodeValue=e},setElementText:(s,e)=>{s.textContent=e},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Li.querySelector(s),setScopeId(s,e){s.setAttribute(e,"")},insertStaticContent(s,e,t,n,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{Bc.innerHTML=n?`<svg>${s}</svg>`:s;const a=Bc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ym(s,e,t){const n=s._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?s.removeAttribute("class"):t?s.setAttribute("class",e):s.className=e}function Km(s,e,t){const n=s.style,i=Et(t);if(t&&!i){for(const r in t)sl(n,r,t[r]);if(e&&!Et(e))for(const r in e)t[r]==null&&sl(n,r,"")}else{const r=n.display;i?e!==t&&(n.cssText=t):e&&s.removeAttribute("style"),"_vod"in s&&(n.display=r)}}const Hc=/\s*!important$/;function sl(s,e,t){if(Fe(t))t.forEach(n=>sl(s,e,n));else if(t==null&&(t=""),e.startsWith("--"))s.setProperty(e,t);else{const n=Zm(s,e);Hc.test(t)?s.setProperty(Rs(n),t.replace(Hc,""),"important"):s[n]=t}}const Vc=["Webkit","Moz","ms"],ta={};function Zm(s,e){const t=ta[e];if(t)return t;let n=ys(e);if(n!=="filter"&&n in s)return ta[e]=n;n=Xh(n);for(let i=0;i<Vc.length;i++){const r=Vc[i]+n;if(r in s)return ta[e]=r}return e}const Gc="http://www.w3.org/1999/xlink";function Jm(s,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?s.removeAttributeNS(Gc,e.slice(6,e.length)):s.setAttributeNS(Gc,e,t);else{const r=kd(e);t==null||r&&!Wh(t)?s.removeAttribute(e):s.setAttribute(e,r?"":t)}}function Qm(s,e,t,n,i,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,r),s[e]=t==null?"":t;return}if(e==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=t;const l=t==null?"":t;(s.value!==l||s.tagName==="OPTION")&&(s.value=l),t==null&&s.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof s[e];l==="boolean"?t=Wh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{s[e]=t}catch{}a&&s.removeAttribute(e)}function eg(s,e,t,n){s.addEventListener(e,t,n)}function tg(s,e,t,n){s.removeEventListener(e,t,n)}function ng(s,e,t,n,i=null){const r=s._vei||(s._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=ig(e);if(n){const c=r[e]=og(n,i);eg(s,a,c,l)}else o&&(tg(s,a,o,l),r[e]=void 0)}}const Wc=/(?:Once|Passive|Capture)$/;function ig(s){let e;if(Wc.test(s)){e={};let n;for(;n=s.match(Wc);)s=s.slice(0,s.length-n[0].length),e[n[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):Rs(s.slice(2)),e]}let na=0;const sg=Promise.resolve(),rg=()=>na||(sg.then(()=>na=0),na=Date.now());function og(s,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;sn(ag(n,t.value),e,5,[n])};return t.value=s,t.attached=rg(),t}function ag(s,e){if(Fe(e)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const jc=/^on[a-z]/,lg=(s,e,t,n,i=!1,r,o,a,l)=>{e==="class"?Ym(s,n,i):e==="style"?Km(s,t,n):Co(e)?Tl(e)||ng(s,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cg(s,e,n,i))?Qm(s,e,n,r,o,a,l):(e==="true-value"?s._trueValue=n:e==="false-value"&&(s._falseValue=n),Jm(s,e,n,i))};function cg(s,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in s&&jc.test(e)&&He(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&s.tagName==="INPUT"||e==="type"&&s.tagName==="TEXTAREA"||jc.test(e)&&Et(t)?!1:e in s}const ug={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Kp.props;const hg=Dt({patchProp:lg},$m);let Xc;function fg(){return Xc||(Xc=bm(hg))}const dg=(...s)=>{const e=fg().createApp(...s),{mount:t}=e;return e.mount=n=>{const i=pg(n);if(!i)return;const r=e._component;!He(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function pg(s){return Et(s)?document.querySelector(s):s}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="147",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mg=0,qc=1,gg=2,If=1,vg=2,Zs=3,ki=0,rn=1,xn=2,pt=0,jn=1,$c=2,Yc=3,Kc=4,xg=5,li=100,_g=101,yg=102,Zc=103,Jc=104,bg=200,Mg=201,Sg=202,wg=203,So=204,wo=205,Tg=206,Eg=207,Ag=208,Cg=209,Pg=210,Lg=0,Rg=1,Dg=2,rl=3,Ig=4,Ng=5,Og=6,Fg=7,Xl=0,Ug=1,zg=2,Xn=0,kg=1,Bg=2,Hg=3,Vg=4,Gg=5,Nf=300,Ms=301,Ss=302,ol=303,al=304,ko=306,ws=1e3,tn=1001,To=1002,Ve=1003,ll=1004,cl=1005,Gt=1006,Of=1007,Ns=1008,Bi=1009,Wg=1010,jg=1011,ql=1012,Xg=1013,Di=1014,ci=1015,Ts=1016,qg=1017,$g=1018,vs=1020,Yg=1021,Kg=1022,nn=1023,Zg=1024,Jg=1025,Fi=1026,Es=1027,Qg=1028,e0=1029,t0=1030,n0=1031,i0=1033,ia=33776,sa=33777,ra=33778,oa=33779,Qc=35840,eu=35841,tu=35842,nu=35843,s0=36196,iu=37492,su=37496,ru=37808,ou=37809,au=37810,lu=37811,cu=37812,uu=37813,hu=37814,fu=37815,du=37816,pu=37817,mu=37818,gu=37819,vu=37820,xu=37821,_u=36492,fr=2300,As=2301,aa=2302,yu=2400,bu=2401,Mu=2402,r0=2500,o0=1,Ff=2,Hi=3e3,et=3001,a0=3200,l0=3201,Bo=0,c0=1,Sn="srgb",dr="srgb-linear",la=7680,u0=519,ul=35044,Su="300 es",hl=1035;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wu=1234567;const nr=Math.PI/180,pr=180/Math.PI;function on(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function $l(s,e){return(s%e+e)%e}function h0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function f0(s,e,t){return s!==e?(t-s)/(e-s):0}function ir(s,e,t){return(1-t)*s+t*e}function d0(s,e,t,n){return ir(s,e,1-Math.exp(-t*n))}function p0(s,e=1){return e-Math.abs($l(s,e*2)-e)}function m0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function g0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function v0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function x0(s,e){return s+Math.random()*(e-s)}function _0(s){return s*(.5-Math.random())}function y0(s){s!==void 0&&(wu=s);let e=wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b0(s){return s*nr}function M0(s){return s*pr}function fl(s){return(s&s-1)===0&&s!==0}function Uf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Eo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function S0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var w0=Object.freeze({__proto__:null,DEG2RAD:nr,RAD2DEG:pr,generateUUID:on,clamp:bt,euclideanModulo:$l,mapLinear:h0,inverseLerp:f0,lerp:ir,damp:d0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:v0,randFloat:x0,randFloatSpread:_0,seededRandom:y0,degToRad:b0,radToDeg:M0,isPowerOfTwo:fl,ceilPowerOfTwo:Uf,floorPowerOfTwo:Eo,setQuaternionFromProperEuler:S0,normalize:nt,denormalize:Hn});class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=i[0],d=i[3],v=i[6],S=i[1],_=i[4],y=i[7],M=i[2],L=i[5],I=i[8];return r[0]=o*m+a*S+l*M,r[3]=o*d+a*_+l*L,r[6]=o*v+a*y+l*I,r[1]=c*m+u*S+h*M,r[4]=c*d+u*_+h*L,r[7]=c*v+u*y+h*I,r[2]=f*m+p*S+g*M,r[5]=f*d+p*_+g*L,r[8]=f*v+p*y+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Yt;function zf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ua={[Sn]:{[dr]:Ui},[dr]:{[Sn]:go}},Nt={legacyMode:!0,get workingColorSpace(){return dr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(ua[e]&&ua[e][t]!==void 0){const n=ua[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},ln={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function ha(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Or(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nt.workingColorSpace){if(e=$l(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ha(o,r,e+1/3),this.g=ha(o,r,e),this.b=ha(o,r,e-1/3)}return Nt.toWorkingColorSpace(this,i),this}setStyle(e,t=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Nt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Nt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Sn){const n=kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Nt.fromWorkingColorSpace(Or(this,dt),e),bt(dt.r*255,0,255)<<16^bt(dt.g*255,0,255)<<8^bt(dt.b*255,0,255)<<0}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Or(this,dt),t);const n=dt.r,i=dt.g,r=dt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Or(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Sn){return Nt.fromWorkingColorSpace(Or(this,dt),e),e!==Sn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Nr);const n=ir(ln.h,Nr.h,t),i=ir(ln.s,Nr.s,t),r=ir(ln.l,Nr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=kf;let Yi;class Bf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=mr("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Hf{constructor(e=null){this.isSource=!0,this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fa(i[o].image)):r.push(fa(i[o]))}else r=fa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T0=0;class Tt extends Wi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=tn,i=tn,r=Gt,o=Ns,a=nn,l=Bi,c=Tt.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=on(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Nf;Tt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(p+1)/2,M=(v+1)/2,L=(u+f)/4,I=(h+m)/4,x=(g+d)/4;return _>y&&_>M?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=L/n,r=I/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=L/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=I/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(h-m)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wt extends Wi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vf extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E0 extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const v=l*f+c*p+u*g+h*m,S=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const M=Math.sqrt(_),L=Math.atan2(M,v*S);d=Math.sin(d*L)/M,a=Math.sin(a*L)/M}const y=a*S;if(l=l*d+f*y,c=c*d+p*y,u=u*d+g*y,h=h*d+m*y,d===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new D,Tu=new Cn;class pi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Mi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox),pa.applyMatrix4(e.matrixWorld),this.union(pa);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Fr.subVectors(this.max,Vs),Ki.subVectors(e.a,Vs),Zi.subVectors(e.b,Vs),Ji.subVectors(e.c,Vs),Kn.subVectors(Zi,Ki),Zn.subVectors(Ji,Zi),Si.subVectors(Ki,Ji);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-Si.z,Si.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,Si.z,0,-Si.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-Si.y,Si.x,0];return!ma(t,Ki,Zi,Ji,Fr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,Ki,Zi,Ji,Fr))?!1:(Ur.crossVectors(Kn,Zn),t=[Ur.x,Ur.y,Ur.z],ma(t,Ki,Zi,Ji,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Mi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new D,new D,new D,new D,new D,new D,new D,new D],Mi=new D,pa=new pi,Ki=new D,Zi=new D,Ji=new D,Kn=new D,Zn=new D,Si=new D,Vs=new D,Fr=new D,Ur=new D,wi=new D;function ma(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const A0=new pi,Gs=new D,ga=new D;class ji{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):A0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(ga)),this.expandByPoint(Gs.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new D,va=new D,zr=new D,Jn=new D,xa=new D,kr=new D,_a=new D;class Yl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.direction).multiplyScalar(t).add(this.origin),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){va.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zr),a=Jn.dot(this.direction),l=-Jn.dot(zr),c=Jn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(zr).multiplyScalar(f).add(va),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,r){xa.subVectors(t,e),kr.subVectors(n,e),_a.crossVectors(xa,kr);let o=this.direction.dot(_a),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(kr.crossVectors(Jn,kr));if(l<0)return null;const c=a*this.direction.dot(xa.cross(Jn));if(c<0||l+c>o)return null;const u=-a*Jn.dot(_a);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,u,h,f,p,g,m,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=p,v[7]=g,v[11]=m,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Qn.crossVectors(n,qt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Qn.crossVectors(n,qt)),Qn.normalize(),Br.crossVectors(qt,Qn),i[0]=Qn.x,i[4]=Br.x,i[8]=qt.x,i[1]=Qn.y,i[5]=Br.y,i[9]=qt.y,i[2]=Qn.z,i[6]=Br.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],v=n[14],S=n[3],_=n[7],y=n[11],M=n[15],L=i[0],I=i[4],x=i[8],C=i[12],R=i[1],V=i[5],ae=i[9],B=i[13],O=i[2],$=i[6],ee=i[10],ne=i[14],j=i[3],Z=i[7],fe=i[11],X=i[15];return r[0]=o*L+a*R+l*O+c*j,r[4]=o*I+a*V+l*$+c*Z,r[8]=o*x+a*ae+l*ee+c*fe,r[12]=o*C+a*B+l*ne+c*X,r[1]=u*L+h*R+f*O+p*j,r[5]=u*I+h*V+f*$+p*Z,r[9]=u*x+h*ae+f*ee+p*fe,r[13]=u*C+h*B+f*ne+p*X,r[2]=g*L+m*R+d*O+v*j,r[6]=g*I+m*V+d*$+v*Z,r[10]=g*x+m*ae+d*ee+v*fe,r[14]=g*C+m*B+d*ne+v*X,r[3]=S*L+_*R+y*O+M*j,r[7]=S*I+_*V+y*$+M*Z,r[11]=S*x+_*ae+y*ee+M*fe,r[15]=S*C+_*B+y*ne+M*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],v=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*p-n*l*p)+m*(+t*l*p-t*c*f+r*o*f-i*o*p+i*c*u-r*l*u)+d*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+v*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],v=e[15],S=h*d*c-m*f*c+m*l*p-a*d*p-h*l*v+a*f*v,_=g*f*c-u*d*c-g*l*p+o*d*p+u*l*v-o*f*v,y=u*m*c-g*h*c+g*a*p-o*m*p-u*a*v+o*h*v,M=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,L=t*S+n*_+i*y+r*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=S*I,e[1]=(m*f*r-h*d*r-m*i*p+n*d*p+h*i*v-n*f*v)*I,e[2]=(a*d*r-m*l*r+m*i*c-n*d*c-a*i*v+n*l*v)*I,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*p-n*l*p)*I,e[4]=_*I,e[5]=(u*d*r-g*f*r+g*i*p-t*d*p-u*i*v+t*f*v)*I,e[6]=(g*l*r-o*d*r-g*i*c+t*d*c+o*i*v-t*l*v)*I,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*p+t*l*p)*I,e[8]=y*I,e[9]=(g*h*r-u*m*r-g*n*p+t*m*p+u*n*v-t*h*v)*I,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*v+t*a*v)*I,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*I,e[12]=M*I,e[13]=(u*m*i-g*h*i+g*n*f-t*m*f-u*n*d+t*h*d)*I,e[14]=(g*a*i-o*m*i-g*n*l+t*m*l+o*n*d-t*a*d)*I,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,m=o*u,d=o*h,v=a*h,S=l*c,_=l*u,y=l*h,M=n.x,L=n.y,I=n.z;return i[0]=(1-(m+v))*M,i[1]=(p+y)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(p-y)*L,i[5]=(1-(f+v))*L,i[6]=(d+S)*L,i[7]=0,i[8]=(g+_)*I,i[9]=(d-S)*I,i[10]=(1-(f+m))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Qi.set(i[0],i[1],i[2]).length();const o=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/r,u=1/o,h=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new D,cn=new Ue,C0=new D(0,0,0),P0=new D(1,1,1),Qn=new D,Br=new D,qt=new D,Eu=new Ue,Au=new Cn;class wr{constructor(e=0,t=0,n=0,i=wr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Au.setFromEuler(this),this.setFromQuaternion(Au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}wr.DefaultOrder="XYZ";wr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L0=0;const Cu=new D,es=new Cn,On=new Ue,Hr=new D,Ws=new D,R0=new D,D0=new Cn,Pu=new D(1,0,0),Lu=new D(0,1,0),Ru=new D(0,0,1),I0={type:"added"},Du={type:"removed"};class rt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DefaultUp.clone();const e=new D,t=new wr,n=new Cn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Yt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DefaultMatrixWorldAutoUpdate,this.layers=new Gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ws,Hr,this.up):On.lookAt(Hr,Ws,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),es.setFromRotationMatrix(On),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(I0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Du)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Du)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DefaultUp=new D(0,1,0);rt.DefaultMatrixAutoUpdate=!0;rt.DefaultMatrixWorldAutoUpdate=!0;const un=new D,Fn=new D,ya=new D,Un=new D,ts=new D,ns=new D,Iu=new D,ba=new D,Ma=new D,Sa=new D;class Bn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),Fn.subVectors(n,t),ya.subVectors(e,t);const o=un.dot(un),a=un.dot(Fn),l=un.dot(ya),c=Fn.dot(Fn),u=Fn.dot(ya),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un),Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Un),l.set(0,0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Fn.subVectors(e,t),un.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),un.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Bn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(r,n),ba.subVectors(e,n);const l=ts.dot(ba),c=ns.dot(ba);if(l<=0&&c<=0)return t.copy(n);Ma.subVectors(e,i);const u=ts.dot(Ma),h=ns.dot(Ma);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ts,o);Sa.subVectors(e,r);const p=ts.dot(Sa),g=ns.dot(Sa);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ns,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return Iu.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Iu,a);const v=1/(d+m+f);return o=m*v,a=f*v,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let N0=0;class an extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=on(),this.name="",this.type="Material",this.blending=jn,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=So,this.blendDst=wo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=la,this.stencilZFail=la,this.stencilZPass=la,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _n extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new D,Vr=new he;class Bt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ul,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wf extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jf extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let O0=0;const Qt=new Ue,wa=new rt,is=new D,$t=new pi,js=new pi,yt=new D;class Ct extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?jf:Wf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors($t.min,js.min),$t.expandByPoint(yt),yt.addVectors($t.max,js.max),$t.expandByPoint(yt)):($t.expandByPoint(js.min),$t.expandByPoint(js.max))}$t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),yt.add(is)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new D,u[R]=new D;const h=new D,f=new D,p=new D,g=new he,m=new he,d=new he,v=new D,S=new D;function _(R,V,ae){h.fromArray(i,R*3),f.fromArray(i,V*3),p.fromArray(i,ae*3),g.fromArray(o,R*2),m.fromArray(o,V*2),d.fromArray(o,ae*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const B=1/(m.x*d.y-d.x*m.y);!isFinite(B)||(v.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(B),S.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(B),c[R].add(v),c[V].add(v),c[ae].add(v),u[R].add(S),u[V].add(S),u[ae].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,V=y.length;R<V;++R){const ae=y[R],B=ae.start,O=ae.count;for(let $=B,ee=B+O;$<ee;$+=3)_(n[$+0],n[$+1],n[$+2])}const M=new D,L=new D,I=new D,x=new D;function C(R){I.fromArray(r,R*3),x.copy(I);const V=c[R];M.copy(V),M.sub(I.multiplyScalar(I.dot(V))).normalize(),L.crossVectors(x,V);const B=L.dot(u[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=B}for(let R=0,V=y.length;R<V;++R){const ae=y[R],B=ae.start,O=ae.count;for(let $=B,ee=B+O;$<ee;$+=3)C(n[$+0]),C(n[$+1]),C(n[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let v=0;v<u;v++)f[g++]=c[p++]}return new Bt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new Ue,ss=new Yl,Ta=new ji,ei=new D,ti=new D,ni=new D,Ea=new D,Aa=new D,Ca=new D,Gr=new D,Wr=new D,jr=new D,Xr=new he,qr=new he,$r=new he,Pa=new D,Yr=new D;class mt extends rt{constructor(e=new Ct,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),e.ray.intersectsSphere(Ta)===!1)||(Nu.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Nu),n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const v=p[m],S=i[v.materialIndex],_=Math.max(v.start,g.start),y=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=_,L=y;M<L;M+=3){const I=a.getX(M),x=a.getX(M+1),C=a.getX(M+2);o=Kr(this,S,e,ss,l,c,u,h,f,I,x,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let v=m,S=d;v<S;v+=3){const _=a.getX(v),y=a.getX(v+1),M=a.getX(v+2);o=Kr(this,i,e,ss,l,c,u,h,f,_,y,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const v=p[m],S=i[v.materialIndex],_=Math.max(v.start,g.start),y=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=_,L=y;M<L;M+=3){const I=M,x=M+1,C=M+2;o=Kr(this,S,e,ss,l,c,u,h,f,I,x,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let v=m,S=d;v<S;v+=3){const _=v,y=v+1,M=v+2;o=Kr(this,i,e,ss,l,c,u,h,f,_,y,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function F0(s,e,t,n,i,r,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==xn,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:s}}function Kr(s,e,t,n,i,r,o,a,l,c,u,h){ei.fromBufferAttribute(i,c),ti.fromBufferAttribute(i,u),ni.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){Gr.set(0,0,0),Wr.set(0,0,0),jr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],v=r[g];d!==0&&(Ea.fromBufferAttribute(v,c),Aa.fromBufferAttribute(v,u),Ca.fromBufferAttribute(v,h),o?(Gr.addScaledVector(Ea,d),Wr.addScaledVector(Aa,d),jr.addScaledVector(Ca,d)):(Gr.addScaledVector(Ea.sub(ei),d),Wr.addScaledVector(Aa.sub(ti),d),jr.addScaledVector(Ca.sub(ni),d)))}ei.add(Gr),ti.add(Wr),ni.add(jr)}s.isSkinnedMesh&&(s.boneTransform(c,ei),s.boneTransform(u,ti),s.boneTransform(h,ni));const p=F0(s,e,t,n,ei,ti,ni,Pa);if(p){a&&(Xr.fromBufferAttribute(a,c),qr.fromBufferAttribute(a,u),$r.fromBufferAttribute(a,h),p.uv=Bn.getUV(Pa,ei,ti,ni,Xr,qr,$r,new he)),l&&(Xr.fromBufferAttribute(l,c),qr.fromBufferAttribute(l,u),$r.fromBufferAttribute(l,h),p.uv2=Bn.getUV(Pa,ei,ti,ni,Xr,qr,$r,new he));const g={a:c,b:u,c:h,normal:new D,materialIndex:0};Bn.getNormal(ei,ti,ni,g.normal),p.face=g}return p}class Os extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function g(m,d,v,S,_,y,M,L,I,x,C){const R=y/I,V=M/x,ae=y/2,B=M/2,O=L/2,$=I+1,ee=x+1;let ne=0,j=0;const Z=new D;for(let fe=0;fe<ee;fe++){const X=fe*V-B;for(let K=0;K<$;K++){const pe=K*R-ae;Z[m]=pe*S,Z[d]=X*_,Z[v]=O,c.push(Z.x,Z.y,Z.z),Z[m]=0,Z[d]=0,Z[v]=L>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(K/I),h.push(1-fe/x),ne+=1}}for(let fe=0;fe<x;fe++)for(let X=0;X<I;X++){const K=f+X+$*fe,pe=f+X+$*(fe+1),ge=f+(X+1)+$*(fe+1),ue=f+(X+1)+$*fe;l.push(K,pe,ue),l.push(pe,ge,ue),j+=6}a.addGroup(p,j,C),p+=j,f+=ne}}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){const e={};for(let t=0;t<s.length;t++){const n=Cs(s[t]);for(const i in n)e[i]=n[i]}return e}function U0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xf(s){return s.getRenderTarget()===null&&s.outputEncoding===et?Sn:dr}const mn={clone:Cs,merge:Ut};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qf extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends qf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class B0 extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new zt(rs,os,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new zt(rs,os,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new zt(rs,os,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new zt(rs,os,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new zt(rs,os,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new zt(rs,os,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Xn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class $f extends Tt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H0 extends wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $f(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Os(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:pt});r.uniforms.tEquirect.value=t;const o=new mt(i,r),a=t.minFilter;return t.minFilter===Ns&&(t.minFilter=Gt),new B0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const La=new D,V0=new D,G0=new Yt;class Ei{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=La.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||G0.getNormalMatrix(e),i=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new ji,Zr=new D;class Kl{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],v=n[13],S=n[14],_=n[15];return t[0].setComponents(a-i,h-l,m-f,_-d).normalize(),t[1].setComponents(a+i,h+l,m+f,_+d).normalize(),t[2].setComponents(a+r,h+c,m+p,_+v).normalize(),t[3].setComponents(a-r,h-c,m-p,_-v).normalize(),t[4].setComponents(a-o,h-u,m-g,_-S).normalize(),t[5].setComponents(a+o,h+u,m+g,_+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zr.x=i.normal.x>0?e.max.x:e.min.x,Zr.y=i.normal.y>0?e.max.y:e.min.y,Zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function W0(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Zl extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let v=0;v<u;v++){const S=v*f-o;for(let _=0;_<c;_++){const y=_*h-r;g.push(y,-S,0),m.push(0,0,1),d.push(_/a),d.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<a;S++){const _=S+c*v,y=S+c*(v+1),M=S+1+c*(v+1),L=S+1+c*v;p.push(_,y,L),p.push(y,M,L)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(m,3)),this.setAttribute("uv",new ot(d,2))}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0="vec3 transformed = vec3( position );",J0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ev=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Bv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,rx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ox=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Fx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ux=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,__=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,b_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:j0,alphamap_pars_fragment:X0,alphatest_fragment:q0,alphatest_pars_fragment:$0,aomap_fragment:Y0,aomap_pars_fragment:K0,begin_vertex:Z0,beginnormal_vertex:J0,bsdfs:Q0,iridescence_fragment:ev,bumpmap_pars_fragment:tv,clipping_planes_fragment:nv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:rv,color_fragment:ov,color_pars_fragment:av,color_pars_vertex:lv,color_vertex:cv,common:uv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:fv,displacementmap_pars_vertex:dv,displacementmap_vertex:pv,emissivemap_fragment:mv,emissivemap_pars_fragment:gv,encodings_fragment:vv,encodings_pars_fragment:xv,envmap_fragment:_v,envmap_common_pars_fragment:yv,envmap_pars_fragment:bv,envmap_pars_vertex:Mv,envmap_physical_pars_fragment:Nv,envmap_vertex:Sv,fog_vertex:wv,fog_pars_vertex:Tv,fog_fragment:Ev,fog_pars_fragment:Av,gradientmap_pars_fragment:Cv,lightmap_fragment:Pv,lightmap_pars_fragment:Lv,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Dv,lights_pars_begin:Iv,lights_toon_fragment:Ov,lights_toon_pars_fragment:Fv,lights_phong_fragment:Uv,lights_phong_pars_fragment:zv,lights_physical_fragment:kv,lights_physical_pars_fragment:Bv,lights_fragment_begin:Hv,lights_fragment_maps:Vv,lights_fragment_end:Gv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:qv,map_fragment:$v,map_pars_fragment:Yv,map_particle_fragment:Kv,map_particle_pars_fragment:Zv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:Qv,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:sx,normal_fragment_maps:rx,normal_pars_fragment:ox,normal_pars_vertex:ax,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:dx,output_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:vx,dithering_fragment:xx,dithering_pars_fragment:_x,roughnessmap_fragment:yx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:Sx,shadowmap_vertex:wx,shadowmask_pars_fragment:Tx,skinbase_vertex:Ex,skinning_pars_vertex:Ax,skinning_vertex:Cx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Rx,tonemapping_fragment:Dx,tonemapping_pars_fragment:Ix,transmission_fragment:Nx,transmission_pars_fragment:Ox,uv_pars_fragment:Fx,uv_pars_vertex:Ux,uv_vertex:zx,uv2_pars_fragment:kx,uv2_pars_vertex:Bx,uv2_vertex:Hx,worldpos_vertex:Vx,background_vert:Gx,background_frag:Wx,backgroundCube_vert:jx,backgroundCube_frag:Xx,cube_vert:qx,cube_frag:$x,depth_vert:Yx,depth_frag:Kx,distanceRGBA_vert:Zx,distanceRGBA_frag:Jx,equirect_vert:Qx,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:u_,meshphong_vert:h_,meshphong_frag:f_,meshphysical_vert:d_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:v_,points_frag:x_,shadow_vert:__,shadow_frag:y_,sprite_vert:b_,sprite_frag:M_},ve={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Yt},uv2Transform:{value:new Yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}}},Wt={basic:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ut([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ut([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Re(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ut([ve.points,ve.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ut([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ut([ve.common,ve.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ut([ve.sprite,ve.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ut([ve.common,ve.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ut([ve.lights,ve.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Wt.physical={uniforms:Ut([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new he(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Jr={r:0,b:0,g:0};function S_(s,e,t,n,i,r,o){const a=new Re(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(d,v){let S=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const y=s.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?m(a,l):_&&_.isColor&&(m(_,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ko)?(u===void 0&&(u=new mt(new Os(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Cs(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,(h!==_||f!==_.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new mt(new Zl(2,2),new Mt({name:"BackgroundMaterial",uniforms:Cs(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,v){d.getRGB(Jr,Xf(s)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(d,v=1){a.set(d),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:g}}function w_(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(O,$,ee,ne,j){let Z=!1;if(o){const fe=m(ne,ee,$);c!==fe&&(c=fe,p(c.object)),Z=v(O,ne,ee,j),Z&&S(O,ne,ee,j)}else{const fe=$.wireframe===!0;(c.geometry!==ne.id||c.program!==ee.id||c.wireframe!==fe)&&(c.geometry=ne.id,c.program=ee.id,c.wireframe=fe,Z=!0)}j!==null&&t.update(j,34963),(Z||u)&&(u=!1,x(O,$,ee,ne),j!==null&&s.bindBuffer(34963,t.get(j).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,$,ee){const ne=ee.wireframe===!0;let j=a[O.id];j===void 0&&(j={},a[O.id]=j);let Z=j[$.id];Z===void 0&&(Z={},j[$.id]=Z);let fe=Z[ne];return fe===void 0&&(fe=d(f()),Z[ne]=fe),fe}function d(O){const $=[],ee=[],ne=[];for(let j=0;j<i;j++)$[j]=0,ee[j]=0,ne[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ee,attributeDivisors:ne,object:O,attributes:{},index:null}}function v(O,$,ee,ne){const j=c.attributes,Z=$.attributes;let fe=0;const X=ee.getAttributes();for(const K in X)if(X[K].location>=0){const ge=j[K];let ue=Z[K];if(ue===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ge===void 0||ge.attribute!==ue||ue&&ge.data!==ue.data)return!0;fe++}return c.attributesNum!==fe||c.index!==ne}function S(O,$,ee,ne){const j={},Z=$.attributes;let fe=0;const X=ee.getAttributes();for(const K in X)if(X[K].location>=0){let ge=Z[K];ge===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(ge=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(ge=O.instanceColor));const ue={};ue.attribute=ge,ge&&ge.data&&(ue.data=ge.data),j[K]=ue,fe++}c.attributes=j,c.attributesNum=fe,c.index=ne}function _(){const O=c.newAttributes;for(let $=0,ee=O.length;$<ee;$++)O[$]=0}function y(O){M(O,0)}function M(O,$){const ee=c.newAttributes,ne=c.enabledAttributes,j=c.attributeDivisors;ee[O]=1,ne[O]===0&&(s.enableVertexAttribArray(O),ne[O]=1),j[O]!==$&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,$),j[O]=$)}function L(){const O=c.newAttributes,$=c.enabledAttributes;for(let ee=0,ne=$.length;ee<ne;ee++)$[ee]!==O[ee]&&(s.disableVertexAttribArray(ee),$[ee]=0)}function I(O,$,ee,ne,j,Z){n.isWebGL2===!0&&(ee===5124||ee===5125)?s.vertexAttribIPointer(O,$,ee,j,Z):s.vertexAttribPointer(O,$,ee,ne,j,Z)}function x(O,$,ee,ne){if(n.isWebGL2===!1&&(O.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const j=ne.attributes,Z=ee.getAttributes(),fe=$.defaultAttributeValues;for(const X in Z){const K=Z[X];if(K.location>=0){let pe=j[X];if(pe===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),pe!==void 0){const ge=pe.normalized,ue=pe.itemSize,J=t.get(pe);if(J===void 0)continue;const Le=J.buffer,we=J.type,Ae=J.bytesPerElement;if(pe.isInterleavedBufferAttribute){const ye=pe.data,Ie=ye.stride,w=pe.offset;if(ye.isInstancedInterleavedBuffer){for(let E=0;E<K.locationSize;E++)M(K.location+E,ye.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let E=0;E<K.locationSize;E++)y(K.location+E);s.bindBuffer(34962,Le);for(let E=0;E<K.locationSize;E++)I(K.location+E,ue/K.locationSize,we,ge,Ie*Ae,(w+ue/K.locationSize*E)*Ae)}else{if(pe.isInstancedBufferAttribute){for(let ye=0;ye<K.locationSize;ye++)M(K.location+ye,pe.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ye=0;ye<K.locationSize;ye++)y(K.location+ye);s.bindBuffer(34962,Le);for(let ye=0;ye<K.locationSize;ye++)I(K.location+ye,ue/K.locationSize,we,ge,ue*Ae,ue/K.locationSize*ye*Ae)}}else if(fe!==void 0){const ge=fe[X];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(K.location,ge);break;case 3:s.vertexAttrib3fv(K.location,ge);break;case 4:s.vertexAttrib4fv(K.location,ge);break;default:s.vertexAttrib1fv(K.location,ge)}}}}L()}function C(){ae();for(const O in a){const $=a[O];for(const ee in $){const ne=$[ee];for(const j in ne)g(ne[j].object),delete ne[j];delete $[ee]}delete a[O]}}function R(O){if(a[O.id]===void 0)return;const $=a[O.id];for(const ee in $){const ne=$[ee];for(const j in ne)g(ne[j].object),delete ne[j];delete $[ee]}delete a[O.id]}function V(O){for(const $ in a){const ee=a[$];if(ee[O.id]===void 0)continue;const ne=ee[O.id];for(const j in ne)g(ne[j].object),delete ne[j];delete ee[O.id]}}function ae(){B(),u=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:y,disableUnusedAttributes:L}}function T_(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function E_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),d=s.getParameter(36347),v=s.getParameter(36348),S=s.getParameter(36349),_=f>0,y=o||e.has("OES_texture_float"),M=_&&y,L=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:L}}function A_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ei,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,v=s.get(h);if(!i||g===null||g.length===0||r&&!d)r?u(null):c();else{const S=r?0:n,_=S*4;let y=v.clippingState||null;l.value=y,y=u(g,f,_,p);for(let M=0;M!==_;++M)y[M]=t[M];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const v=p+m*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<v)&&(d=new Float32Array(v));for(let _=0,y=p;_!==m;++_,y+=4)o.copy(h[_]).applyMatrix4(S,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function C_(s){let e=new WeakMap;function t(o,a){return a===ol?o.mapping=Ms:a===al&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ol||a===al)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new H0(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tr extends qf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hs=4,Ou=[.125,.215,.35,.446,.526,.582],Ri=20,Ra=new Tr,Fu=new Re;let Da=null;const Ai=(1+Math.sqrt(5))/2,ls=1/Ai,Uu=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ai,ls),new D(0,Ai,-ls),new D(ls,0,Ai),new D(-ls,0,Ai),new D(Ai,ls,0),new D(-Ai,ls,0)];class zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Da=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da),e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Ts,format:nn,encoding:Hi,depthBuffer:!1},i=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(r)),this._blurMaterial=L_(r,e,t)}return i}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,i){const a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fu),u.toneMapping=Xn,u.autoClear=!1;const p=new _n({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new mt(new Os,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Fu),m=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):S===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;Qr(i,S*_,v>2?_:0,_,_),u.setRenderTarget(i),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ms||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Uu[(i-1)%Uu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):Ri;d>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ri}`);const v=[];let S=0;for(let I=0;I<Ri;++I){const x=I/m,C=Math.exp(-x*x/2);v.push(C),I===0?S+=C:I<d&&(S+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[i],M=3*y*(i>_-hs?i-_+hs:0),L=4*(this._cubeSize-y);Qr(t,M,L,3*y,2*y),l.setRenderTarget(t),l.render(h,Ra)}}function P_(s){const e=[],t=[],n=[];let i=s;const r=s-hs+1+Ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-hs?l=Ou[o-s+hs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,v=1,S=new Float32Array(m*g*p),_=new Float32Array(d*g*p),y=new Float32Array(v*g*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,x=L>2?0:-1,C=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];S.set(C,m*g*L),_.set(f,d*g*L);const R=[L,L,L,L,L,L];y.set(R,v*g*L)}const M=new Ct;M.setAttribute("position",new Bt(S,m)),M.setAttribute("uv",new Bt(_,d)),M.setAttribute("faceIndex",new Bt(y,v)),e.push(M),i>hs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ku(s,e,t){const n=new wt(s,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function L_(s,e,t){const n=new Float32Array(Ri),i=new D(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pt,depthTest:!1,depthWrite:!1})}function Bu(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pt,depthTest:!1,depthWrite:!1})}function Hu(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pt,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ol||l===al,u=l===Ms||l===Ss;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new zu(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new zu(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function D_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I_(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,v=m.length;d<v;d++)e.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const S=p.array;m=p.version;for(let _=0,y=S.length;_<y;_+=3){const M=S[_+0],L=S[_+1],I=S[_+2];f.push(M,L,L,I,I,M)}}else{const S=g.array;m=g.version;for(let _=0,y=S.length/3-1;_<y;_+=3){const M=_+0,L=_+1,I=_+2;f.push(M,L,L,I,I,M)}}const d=new(zf(f)?jf:Wf)(f,1);d.version=m;const v=r.get(h);v&&e.remove(v),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function N_(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){s.drawElements(r,p,a,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,f*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function O_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function F_(s,e){return s[0]-e[0]}function U_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function z_(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==d){let ee=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",ee)};var g=ee;v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),M===!0&&(R=2),L===!0&&(R=3);let V=u.attributes.position.count*R,ae=1;V>e.maxTextureSize&&(ae=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const B=new Float32Array(V*ae*4*d),O=new Vf(B,V,ae,d);O.type=ci,O.needsUpdate=!0;const $=R*4;for(let ne=0;ne<d;ne++){const j=I[ne],Z=x[ne],fe=C[ne],X=V*ae*4*ne;for(let K=0;K<j.count;K++){const pe=K*$;y===!0&&(o.fromBufferAttribute(j,K),B[X+pe+0]=o.x,B[X+pe+1]=o.y,B[X+pe+2]=o.z,B[X+pe+3]=0),M===!0&&(o.fromBufferAttribute(Z,K),B[X+pe+4]=o.x,B[X+pe+5]=o.y,B[X+pe+6]=o.z,B[X+pe+7]=0),L===!0&&(o.fromBufferAttribute(fe,K),B[X+pe+8]=o.x,B[X+pe+9]=o.y,B[X+pe+10]=o.z,B[X+pe+11]=fe.itemSize===4?o.w:1)}}v={count:d,texture:O,size:new he(V,ae)},r.set(u,v),u.addEventListener("dispose",ee)}let S=0;for(let y=0;y<p.length;y++)S+=p[y];const _=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let M=0;M<m;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<m;M++){const L=d[M];L[0]=M,L[1]=p[M]}d.sort(U_);for(let M=0;M<8;M++)M<m&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(F_);const v=u.morphAttributes.position,S=u.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const L=a[M],I=L[0],x=L[1];I!==Number.MAX_SAFE_INTEGER&&x?(v&&u.getAttribute("morphTarget"+M)!==v[I]&&u.setAttribute("morphTarget"+M,v[I]),S&&u.getAttribute("morphNormal"+M)!==S[I]&&u.setAttribute("morphNormal"+M,S[I]),i[M]=x,_+=x):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),S&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const y=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function k_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Kf=new Tt,Zf=new Vf,Jf=new E0,Qf=new $f,Vu=[],Gu=[],Wu=new Float32Array(16),ju=new Float32Array(9),Xu=new Float32Array(4);function Fs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Vu[i];if(r===void 0&&(r=new Float32Array(i),Vu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ho(s,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function B_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function W_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Xu.set(n),s.uniformMatrix2fv(this.addr,!1,Xu),vt(t,n)}}function j_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;ju.set(n),s.uniformMatrix3fv(this.addr,!1,ju),vt(t,n)}}function X_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Wu.set(n),s.uniformMatrix4fv(this.addr,!1,Wu),vt(t,n)}}function q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function Y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function Z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function J_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function Q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function ty(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Kf,i)}function ny(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jf,i)}function iy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qf,i)}function sy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zf,i)}function ry(s){switch(s){case 5126:return B_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return j_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return $_;case 35668:case 35672:return Y_;case 35669:case 35673:return K_;case 5125:return Z_;case 36294:return J_;case 36295:return Q_;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}function oy(s,e){s.uniform1fv(this.addr,e)}function ay(s,e){const t=Fs(e,this.size,2);s.uniform2fv(this.addr,t)}function ly(s,e){const t=Fs(e,this.size,3);s.uniform3fv(this.addr,t)}function cy(s,e){const t=Fs(e,this.size,4);s.uniform4fv(this.addr,t)}function uy(s,e){const t=Fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function hy(s,e){const t=Fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fy(s,e){const t=Fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function dy(s,e){s.uniform1iv(this.addr,e)}function py(s,e){s.uniform2iv(this.addr,e)}function my(s,e){s.uniform3iv(this.addr,e)}function gy(s,e){s.uniform4iv(this.addr,e)}function vy(s,e){s.uniform1uiv(this.addr,e)}function xy(s,e){s.uniform2uiv(this.addr,e)}function _y(s,e){s.uniform3uiv(this.addr,e)}function yy(s,e){s.uniform4uiv(this.addr,e)}function by(s,e,t){const n=this.cache,i=e.length,r=Ho(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Kf,r[o])}function My(s,e,t){const n=this.cache,i=e.length,r=Ho(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jf,r[o])}function Sy(s,e,t){const n=this.cache,i=e.length,r=Ho(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qf,r[o])}function wy(s,e,t){const n=this.cache,i=e.length,r=Ho(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zf,r[o])}function Ty(s){switch(s){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return cy;case 35674:return uy;case 35675:return hy;case 35676:return fy;case 5124:case 35670:return dy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return xy;case 36295:return _y;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return wy}}class Ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ry(t.type)}}class Ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ty(t.type)}}class Cy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function qu(s,e){s.seq.push(e),s.map[e.id]=e}function Py(s,e,t){const n=s.name,i=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),o=Ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qu(t,c===void 0?new Ey(a,s,e):new Ay(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Cy(a),qu(t,h)),t=h}}}class vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Py(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function $u(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Ly=0;function Ry(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Dy(s){switch(s){case Hi:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Yu(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ry(s.getShaderSource(e),o)}else return i}function Iy(s,e){const t=Dy(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ny(s,e){let t;switch(e){case kg:t="Linear";break;case Bg:t="Reinhard";break;case Hg:t="OptimizedCineon";break;case Vg:t="ACESFilmic";break;case Gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Oy(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function Fy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Uy(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Js(s){return s!==""}function Ku(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(s){return s.replace(zy,ky)}function ky(s,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return dl(t)}const By=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(s){return s.replace(By,Hy)}function Hy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===If?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zs&&(e="SHADOWMAP_TYPE_VSM"),e}function Gy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function jy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ug:e="ENVMAP_BLENDING_MIX";break;case zg:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qy(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Vy(t),c=Gy(t),u=Wy(t),h=jy(t),f=Xy(t),p=t.isWebGL2?"":Oy(t),g=Fy(r),m=i.createProgram();let d,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Js).join(`
`),d.length>0&&(d+=`
`),v=[p,g].filter(Js).join(`
`),v.length>0&&(v+=`
`)):(d=[Qu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),v=[p,Qu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Iy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=dl(o),o=Ku(o,t),o=Zu(o,t),a=dl(a),a=Ku(a,t),a=Zu(a,t),o=Ju(o),a=Ju(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=S+d+o,y=S+v+a,M=$u(i,35633,_),L=$u(i,35632,y);if(i.attachShader(m,M),i.attachShader(m,L),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(M).trim(),V=i.getShaderInfoLog(L).trim();let ae=!0,B=!0;if(i.getProgramParameter(m,35714)===!1){ae=!1;const O=Yu(i,M,"vertex"),$=Yu(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+O+`
`+$)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||V==="")&&(B=!1);B&&(this.diagnostics={runnable:ae,programLog:C,vertexShader:{log:R,prefix:d},fragmentShader:{log:V,prefix:v}})}i.deleteShader(M),i.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new vo(i,m)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=Uy(i,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=L,this}let $y=0;class Yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ky(e),t.set(e,n)),n}}class Ky{constructor(e){this.id=$y++,this.code=e,this.usedTimes=0}}function Zy(s,e,t,n,i,r,o){const a=new Gf,l=new Yy,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,C,R,V,ae){const B=V.fog,O=ae.geometry,$=x.isMeshStandardMaterial?V.environment:null,ee=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),ne=!!ee&&ee.mapping===ko?ee.image.height:null,j=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=Z!==void 0?Z.length:0;let X=0;O.morphAttributes.position!==void 0&&(X=1),O.morphAttributes.normal!==void 0&&(X=2),O.morphAttributes.color!==void 0&&(X=3);let K,pe,ge,ue;if(j){const Ie=Wt[j];K=Ie.vertexShader,pe=Ie.fragmentShader}else K=x.vertexShader,pe=x.fragmentShader,l.update(x),ge=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const J=s.getRenderTarget(),Le=x.alphaTest>0,we=x.clearcoat>0,Ae=x.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:x.type,vertexShader:K,fragmentShader:pe,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:f,outputEncoding:J===null?s.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:Hi,map:!!x.map,matcap:!!x.matcap,envMap:!!ee,envMapMode:ee&&ee.mapping,envMapCubeUVHeight:ne,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===c0,tangentSpaceNormalMap:x.normalMapType===Bo,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===et,clearcoat:we,clearcoatMap:we&&!!x.clearcoatMap,clearcoatRoughnessMap:we&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!x.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!x.iridescenceMap,iridescenceThicknessMap:Ae&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===jn,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!O.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!B,useFog:x.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ae.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:X,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Xn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===rn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)C.push(R),C.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(v(C,x),S(C,x),C.push(s.outputEncoding)),C.push(x.customProgramCacheKey),C.join()}function v(x,C){x.push(C.precision),x.push(C.outputEncoding),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.combine),x.push(C.vertexUvs),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function S(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),x.push(a.mask)}function _(x){const C=g[x.type];let R;if(C){const V=Wt[C];R=mn.clone(V.uniforms)}else R=x.uniforms;return R}function y(x,C){let R;for(let V=0,ae=c.length;V<ae;V++){const B=c[V];if(B.cacheKey===C){R=B,++R.usedTimes;break}}return R===void 0&&(R=new qy(s,C,x,r),c.push(R)),R}function M(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:L,programs:c,dispose:I}}function Jy(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function eh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function th(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,g,m,d){let v=s[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},s[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=d),e++,v}function a(h,f,p,g,m,d){const v=o(h,f,p,g,m,d);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function l(h,f,p,g,m,d){const v=o(h,f,p,g,m,d);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||Qy),n.length>1&&n.sort(f||eh),i.length>1&&i.sort(f||eh)}function u(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function eb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new th,s.set(n,[o])):i>=r.length?(o=new th,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function tb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function nb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ib=0;function sb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rb(s,e){const t=new tb,n=nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,o=new Ue,a=new Ue;function l(u,h){let f=0,p=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,d=0,v=0,S=0,_=0,y=0,M=0,L=0,I=0,x=0;u.sort(sb);const C=h!==!0?Math.PI:1;for(let V=0,ae=u.length;V<ae;V++){const B=u[V],O=B.color,$=B.intensity,ee=B.distance,ne=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=O.r*$*C,p+=O.g*$*C,g+=O.b*$*C;else if(B.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(B.sh.coefficients[j],$);else if(B.isDirectionalLight){const j=t.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const Z=B.shadow,fe=n.get(B);fe.shadowBias=Z.bias,fe.shadowNormalBias=Z.normalBias,fe.shadowRadius=Z.radius,fe.shadowMapSize=Z.mapSize,i.directionalShadow[m]=fe,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=B.shadow.matrix,y++}i.directional[m]=j,m++}else if(B.isSpotLight){const j=t.get(B);j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy(O).multiplyScalar($*C),j.distance=ee,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,i.spot[v]=j;const Z=B.shadow;if(B.map&&(i.spotLightMap[I]=B.map,I++,Z.updateMatrices(B),B.castShadow&&x++),i.spotLightMatrix[v]=Z.matrix,B.castShadow){const fe=n.get(B);fe.shadowBias=Z.bias,fe.shadowNormalBias=Z.normalBias,fe.shadowRadius=Z.radius,fe.shadowMapSize=Z.mapSize,i.spotShadow[v]=fe,i.spotShadowMap[v]=ne,L++}v++}else if(B.isRectAreaLight){const j=t.get(B);j.color.copy(O).multiplyScalar($),j.halfWidth.set(B.width*.5,0,0),j.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=j,S++}else if(B.isPointLight){const j=t.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*C),j.distance=B.distance,j.decay=B.decay,B.castShadow){const Z=B.shadow,fe=n.get(B);fe.shadowBias=Z.bias,fe.shadowNormalBias=Z.normalBias,fe.shadowRadius=Z.radius,fe.shadowMapSize=Z.mapSize,fe.shadowCameraNear=Z.camera.near,fe.shadowCameraFar=Z.camera.far,i.pointShadow[d]=fe,i.pointShadowMap[d]=ne,i.pointShadowMatrix[d]=B.shadow.matrix,M++}i.point[d]=j,d++}else if(B.isHemisphereLight){const j=t.get(B);j.skyColor.copy(B.color).multiplyScalar($*C),j.groundColor.copy(B.groundColor).multiplyScalar($*C),i.hemi[_]=j,_++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==m||R.pointLength!==d||R.spotLength!==v||R.rectAreaLength!==S||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==L||R.numSpotMaps!==I)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=d,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=L+I-x,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=x,R.directionalLength=m,R.pointLength=d,R.spotLength=v,R.rectAreaLength=S,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=L,R.numSpotMaps=I,i.version=ib++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const v=h.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const y=u[S];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(y.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(v),d++}}}return{setup:l,setupView:c,state:i}}function nh(s,e){const t=new rb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ob(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new nh(s,e),t.set(r,[l])):o>=a.length?(l=new nh(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ab extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lb extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hb(s,e,t){let n=new Kl;const i=new he,r=new he,o=new tt,a=new ab({depthPacking:l0}),l=new lb,c={},u=t.maxTextureSize,h={0:rn,1:ki,2:xn},f=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:cb,fragmentShader:ub}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new mt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If,this.render=function(y,M,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const I=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),R=s.state;R.setBlending(pt),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let V=0,ae=y.length;V<ae;V++){const B=y[V],O=B.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const $=O.getFrameExtents();if(i.multiply($),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/$.x),i.x=r.x*$.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/$.y),i.y=r.y*$.y,O.mapSize.y=r.y)),O.map===null){const ne=this.type!==Zs?{minFilter:Ve,magFilter:Ve}:{};O.map=new wt(i.x,i.y,ne),O.map.texture.name=B.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const ee=O.getViewportCount();for(let ne=0;ne<ee;ne++){const j=O.getViewport(ne);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),R.viewport(o),O.updateMatrices(B,ne),n=O.getFrustum(),_(M,L,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===Zs&&v(O,L),O.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(I,x,C)};function v(y,M){const L=e.update(m);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wt(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(M,null,L,f,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(M,null,L,p,m,null)}function S(y,M,L,I,x,C){let R=null;const V=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(V!==void 0?R=V:R=L.isPointLight===!0?l:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const ae=R.uuid,B=M.uuid;let O=c[ae];O===void 0&&(O={},c[ae]=O);let $=O[B];$===void 0&&($=R.clone(),O[B]=$),R=$}return R.visible=M.visible,R.wireframe=M.wireframe,C===Zs?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:h[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,L.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(L.matrixWorld),R.nearDistance=I,R.farDistance=x),R}function _(y,M,L,I,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===Zs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const V=e.update(y),ae=y.material;if(Array.isArray(ae)){const B=V.groups;for(let O=0,$=B.length;O<$;O++){const ee=B[O],ne=ae[ee.materialIndex];if(ne&&ne.visible){const j=S(y,ne,I,L.near,L.far,x);s.renderBufferDirect(L,null,V,j,y,ee)}}}else if(ae.visible){const B=S(y,ae,I,L.near,L.far,x);s.renderBufferDirect(L,null,V,B,y,null)}}const R=y.children;for(let V=0,ae=R.length;V<ae;V++)_(R[V],M,L,I,x)}}function fb(s,e,t){const n=t.isWebGL2;function i(){let U=!1;const oe=new tt;let me=null;const Te=new tt(0,0,0,0);return{setMask:function(Ce){me!==Ce&&!U&&(s.colorMask(Ce,Ce,Ce,Ce),me=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,Ke,xt,Pt,gi){gi===!0&&(Ce*=Pt,Ke*=Pt,xt*=Pt),oe.set(Ce,Ke,xt,Pt),Te.equals(oe)===!1&&(s.clearColor(Ce,Ke,xt,Pt),Te.copy(oe))},reset:function(){U=!1,me=null,Te.set(-1,0,0,0)}}}function r(){let U=!1,oe=null,me=null,Te=null;return{setTest:function(Ce){Ce?Le(2929):we(2929)},setMask:function(Ce){oe!==Ce&&!U&&(s.depthMask(Ce),oe=Ce)},setFunc:function(Ce){if(me!==Ce){switch(Ce){case Lg:s.depthFunc(512);break;case Rg:s.depthFunc(519);break;case Dg:s.depthFunc(513);break;case rl:s.depthFunc(515);break;case Ig:s.depthFunc(514);break;case Ng:s.depthFunc(518);break;case Og:s.depthFunc(516);break;case Fg:s.depthFunc(517);break;default:s.depthFunc(515)}me=Ce}},setLocked:function(Ce){U=Ce},setClear:function(Ce){Te!==Ce&&(s.clearDepth(Ce),Te=Ce)},reset:function(){U=!1,oe=null,me=null,Te=null}}}function o(){let U=!1,oe=null,me=null,Te=null,Ce=null,Ke=null,xt=null,Pt=null,gi=null;return{setTest:function(it){U||(it?Le(2960):we(2960))},setMask:function(it){oe!==it&&!U&&(s.stencilMask(it),oe=it)},setFunc:function(it,Rn,Zt){(me!==it||Te!==Rn||Ce!==Zt)&&(s.stencilFunc(it,Rn,Zt),me=it,Te=Rn,Ce=Zt)},setOp:function(it,Rn,Zt){(Ke!==it||xt!==Rn||Pt!==Zt)&&(s.stencilOp(it,Rn,Zt),Ke=it,xt=Rn,Pt=Zt)},setLocked:function(it){U=it},setClear:function(it){gi!==it&&(s.clearStencil(it),gi=it)},reset:function(){U=!1,oe=null,me=null,Te=null,Ce=null,Ke=null,xt=null,Pt=null,gi=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,v=!1,S=null,_=null,y=null,M=null,L=null,I=null,x=null,C=!1,R=null,V=null,ae=null,B=null,O=null;const $=s.getParameter(35661);let ee=!1,ne=0;const j=s.getParameter(7938);j.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(j)[1]),ee=ne>=1):j.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ee=ne>=2);let Z=null,fe={};const X=s.getParameter(3088),K=s.getParameter(2978),pe=new tt().fromArray(X),ge=new tt().fromArray(K);function ue(U,oe,me){const Te=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(U,Ce),s.texParameteri(U,10241,9728),s.texParameteri(U,10240,9728);for(let Ke=0;Ke<me;Ke++)s.texImage2D(oe+Ke,0,6408,1,1,0,6408,5121,Te);return Ce}const J={};J[3553]=ue(3553,3553,1),J[34067]=ue(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(2929),l.setFunc(rl),z(!1),Q(qc),Le(2884),N(pt);function Le(U){f[U]!==!0&&(s.enable(U),f[U]=!0)}function we(U){f[U]!==!1&&(s.disable(U),f[U]=!1)}function Ae(U,oe){return p[U]!==oe?(s.bindFramebuffer(U,oe),p[U]=oe,n&&(U===36009&&(p[36160]=oe),U===36160&&(p[36009]=oe)),!0):!1}function ye(U,oe){let me=m,Te=!1;if(U)if(me=g.get(oe),me===void 0&&(me=[],g.set(oe,me)),U.isWebGLMultipleRenderTargets){const Ce=U.texture;if(me.length!==Ce.length||me[0]!==36064){for(let Ke=0,xt=Ce.length;Ke<xt;Ke++)me[Ke]=36064+Ke;me.length=Ce.length,Te=!0}}else me[0]!==36064&&(me[0]=36064,Te=!0);else me[0]!==1029&&(me[0]=1029,Te=!0);Te&&(t.isWebGL2?s.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Ie(U){return d!==U?(s.useProgram(U),d=U,!0):!1}const w={[li]:32774,[_g]:32778,[yg]:32779};if(n)w[Zc]=32775,w[Jc]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(w[Zc]=U.MIN_EXT,w[Jc]=U.MAX_EXT)}const E={[bg]:0,[Mg]:1,[Sg]:768,[So]:770,[Pg]:776,[Ag]:774,[Tg]:772,[wg]:769,[wo]:771,[Cg]:775,[Eg]:773};function N(U,oe,me,Te,Ce,Ke,xt,Pt){if(U===pt){v===!0&&(we(3042),v=!1);return}if(v===!1&&(Le(3042),v=!0),U!==xg){if(U!==S||Pt!==C){if((_!==li||L!==li)&&(s.blendEquation(32774),_=li,L=li),Pt)switch(U){case jn:s.blendFuncSeparate(1,771,1,771);break;case $c:s.blendFunc(1,1);break;case Yc:s.blendFuncSeparate(0,769,0,1);break;case Kc:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case jn:s.blendFuncSeparate(770,771,1,771);break;case $c:s.blendFunc(770,1);break;case Yc:s.blendFuncSeparate(0,769,0,1);break;case Kc:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,I=null,x=null,S=U,C=Pt}return}Ce=Ce||oe,Ke=Ke||me,xt=xt||Te,(oe!==_||Ce!==L)&&(s.blendEquationSeparate(w[oe],w[Ce]),_=oe,L=Ce),(me!==y||Te!==M||Ke!==I||xt!==x)&&(s.blendFuncSeparate(E[me],E[Te],E[Ke],E[xt]),y=me,M=Te,I=Ke,x=xt),S=U,C=!1}function H(U,oe){U.side===xn?we(2884):Le(2884);let me=U.side===rn;oe&&(me=!me),z(me),U.blending===jn&&U.transparent===!1?N(pt):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Te=U.stencilWrite;c.setTest(Te),Te&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),q(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Le(32926):we(32926)}function z(U){R!==U&&(U?s.frontFace(2304):s.frontFace(2305),R=U)}function Q(U){U!==mg?(Le(2884),U!==V&&(U===qc?s.cullFace(1029):U===gg?s.cullFace(1028):s.cullFace(1032))):we(2884),V=U}function ie(U){U!==ae&&(ee&&s.lineWidth(U),ae=U)}function q(U,oe,me){U?(Le(32823),(B!==oe||O!==me)&&(s.polygonOffset(oe,me),B=oe,O=me)):we(32823)}function ce(U){U?Le(3089):we(3089)}function te(U){U===void 0&&(U=33984+$-1),Z!==U&&(s.activeTexture(U),Z=U)}function T(U,oe,me){me===void 0&&(Z===null?me=33984+$-1:me=Z);let Te=fe[me];Te===void 0&&(Te={type:void 0,texture:void 0},fe[me]=Te),(Te.type!==U||Te.texture!==oe)&&(Z!==me&&(s.activeTexture(me),Z=me),s.bindTexture(U,oe||J[U]),Te.type=U,Te.texture=oe)}function b(){const U=fe[Z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function F(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function P(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(U){pe.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function Me(U){ge.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ge.copy(U))}function De(U,oe){let me=h.get(oe);me===void 0&&(me=new WeakMap,h.set(oe,me));let Te=me.get(U);Te===void 0&&(Te=s.getUniformBlockIndex(oe,U.name),me.set(U,Te))}function ke(U,oe){const Te=h.get(oe).get(U);u.get(U)!==Te&&(s.uniformBlockBinding(oe,Te,U.__bindingPointIndex),u.set(U,Te))}function Qe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Z=null,fe={},p={},g=new WeakMap,m=[],d=null,v=!1,S=null,_=null,y=null,M=null,L=null,I=null,x=null,C=!1,R=null,V=null,ae=null,B=null,O=null,pe.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:we,bindFramebuffer:Ae,drawBuffers:ye,useProgram:Ie,setBlending:N,setMaterial:H,setFlipSided:z,setCullFace:Q,setLineWidth:ie,setPolygonOffset:q,setScissorTest:ce,activeTexture:te,bindTexture:T,unbindTexture:b,compressedTexImage2D:F,compressedTexImage3D:Y,texImage2D:Se,texImage3D:be,updateUBOMapping:De,uniformBlockBinding:ke,texStorage2D:k,texStorage3D:_e,texSubImage2D:se,texSubImage3D:de,compressedTexSubImage2D:xe,compressedTexSubImage3D:P,scissor:Ee,viewport:Me,reset:Qe}}function db(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,b){return v?new OffscreenCanvas(T,b):mr("canvas")}function _(T,b,F,Y){let se=1;if((T.width>Y||T.height>Y)&&(se=Y/Math.max(T.width,T.height)),se<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const de=b?Eo:Math.floor,xe=de(se*T.width),P=de(se*T.height);m===void 0&&(m=S(xe,P));const k=F?S(xe,P):m;return k.width=xe,k.height=P,k.getContext("2d").drawImage(T,0,0,xe,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+P+")."),k}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return fl(T.width)&&fl(T.height)}function M(T){return a?!1:T.wrapS!==tn||T.wrapT!==tn||T.minFilter!==Ve&&T.minFilter!==Gt}function L(T,b){return T.generateMipmaps&&b&&T.minFilter!==Ve&&T.minFilter!==Gt}function I(T){s.generateMipmap(T)}function x(T,b,F,Y,se=!1){if(a===!1)return b;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de=b;return b===6403&&(F===5126&&(de=33326),F===5131&&(de=33325),F===5121&&(de=33321)),b===33319&&(F===5126&&(de=33328),F===5131&&(de=33327),F===5121&&(de=33323)),b===6408&&(F===5126&&(de=34836),F===5131&&(de=34842),F===5121&&(de=Y===et&&se===!1?35907:32856),F===32819&&(de=32854),F===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function C(T,b,F){return L(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Ve&&T.minFilter!==Gt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function R(T){return T===Ve||T===ll||T===cl?9728:9729}function V(T){const b=T.target;b.removeEventListener("dispose",V),B(b),b.isVideoTexture&&g.delete(b)}function ae(T){const b=T.target;b.removeEventListener("dispose",ae),$(b)}function B(T){const b=n.get(T);if(b.__webglInit===void 0)return;const F=T.source,Y=d.get(F);if(Y){const se=Y[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(T),Object.keys(Y).length===0&&d.delete(F)}n.remove(T)}function O(T){const b=n.get(T);s.deleteTexture(b.__webglTexture);const F=T.source,Y=d.get(F);delete Y[b.__cacheKey],o.memory.textures--}function $(T){const b=T.texture,F=n.get(T),Y=n.get(b);if(Y.__webglTexture!==void 0&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(F.__webglFramebuffer[se]),F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let se=0;se<F.__webglColorRenderbuffer.length;se++)F.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[se]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,de=b.length;se<de;se++){const xe=n.get(b[se]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(b[se])}n.remove(b),n.remove(T)}let ee=0;function ne(){ee=0}function j(){const T=ee;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),ee+=1,T}function Z(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.encoding),b.join()}function fe(T,b){const F=n.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(F,T,b);return}}t.bindTexture(3553,F.__webglTexture,33984+b)}function X(T,b){const F=n.get(T);if(T.version>0&&F.__version!==T.version){we(F,T,b);return}t.bindTexture(35866,F.__webglTexture,33984+b)}function K(T,b){const F=n.get(T);if(T.version>0&&F.__version!==T.version){we(F,T,b);return}t.bindTexture(32879,F.__webglTexture,33984+b)}function pe(T,b){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Ae(F,T,b);return}t.bindTexture(34067,F.__webglTexture,33984+b)}const ge={[ws]:10497,[tn]:33071,[To]:33648},ue={[Ve]:9728,[ll]:9984,[cl]:9986,[Gt]:9729,[Of]:9985,[Ns]:9987};function J(T,b,F){if(F?(s.texParameteri(T,10242,ge[b.wrapS]),s.texParameteri(T,10243,ge[b.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,ge[b.wrapR]),s.texParameteri(T,10240,ue[b.magFilter]),s.texParameteri(T,10241,ue[b.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(b.wrapS!==tn||b.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,R(b.magFilter)),s.texParameteri(T,10241,R(b.minFilter)),b.minFilter!==Ve&&b.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(b.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ts&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Le(T,b){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",V));const Y=b.source;let se=d.get(Y);se===void 0&&(se={},d.set(Y,se));const de=Z(b);if(de!==T.__cacheKey){se[de]===void 0&&(se[de]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),se[de].usedTimes++;const xe=se[T.__cacheKey];xe!==void 0&&(se[T.__cacheKey].usedTimes--,xe.usedTimes===0&&O(b)),T.__cacheKey=de,T.__webglTexture=se[de].texture}return F}function we(T,b,F){let Y=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=35866),b.isData3DTexture&&(Y=32879);const se=Le(T,b),de=b.source;t.bindTexture(Y,T.__webglTexture,33984+F);const xe=n.get(de);if(de.version!==xe.__version||se===!0){t.activeTexture(33984+F),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const P=M(b)&&y(b.image)===!1;let k=_(b.image,P,!1,u);k=te(b,k);const _e=y(k)||a,Se=r.convert(b.format,b.encoding);let be=r.convert(b.type),Ee=x(b.internalFormat,Se,be,b.encoding,b.isVideoTexture);J(Y,b,_e);let Me;const De=b.mipmaps,ke=a&&b.isVideoTexture!==!0,Qe=xe.__version===void 0||se===!0,U=C(b,k,_e);if(b.isDepthTexture)Ee=6402,a?b.type===ci?Ee=36012:b.type===Di?Ee=33190:b.type===vs?Ee=35056:Ee=33189:b.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Fi&&Ee===6402&&b.type!==ql&&b.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Di,be=r.convert(b.type)),b.format===Es&&Ee===6402&&(Ee=34041,b.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=vs,be=r.convert(b.type))),Qe&&(ke?t.texStorage2D(3553,1,Ee,k.width,k.height):t.texImage2D(3553,0,Ee,k.width,k.height,0,Se,be,null));else if(b.isDataTexture)if(De.length>0&&_e){ke&&Qe&&t.texStorage2D(3553,U,Ee,De[0].width,De[0].height);for(let oe=0,me=De.length;oe<me;oe++)Me=De[oe],ke?t.texSubImage2D(3553,oe,0,0,Me.width,Me.height,Se,be,Me.data):t.texImage2D(3553,oe,Ee,Me.width,Me.height,0,Se,be,Me.data);b.generateMipmaps=!1}else ke?(Qe&&t.texStorage2D(3553,U,Ee,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,Se,be,k.data)):t.texImage2D(3553,0,Ee,k.width,k.height,0,Se,be,k.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ke&&Qe&&t.texStorage3D(35866,U,Ee,De[0].width,De[0].height,k.depth);for(let oe=0,me=De.length;oe<me;oe++)Me=De[oe],b.format!==nn?Se!==null?ke?t.compressedTexSubImage3D(35866,oe,0,0,0,Me.width,Me.height,k.depth,Se,Me.data,0,0):t.compressedTexImage3D(35866,oe,Ee,Me.width,Me.height,k.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(35866,oe,0,0,0,Me.width,Me.height,k.depth,Se,be,Me.data):t.texImage3D(35866,oe,Ee,Me.width,Me.height,k.depth,0,Se,be,Me.data)}else{ke&&Qe&&t.texStorage2D(3553,U,Ee,De[0].width,De[0].height);for(let oe=0,me=De.length;oe<me;oe++)Me=De[oe],b.format!==nn?Se!==null?ke?t.compressedTexSubImage2D(3553,oe,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(3553,oe,Ee,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(3553,oe,0,0,Me.width,Me.height,Se,be,Me.data):t.texImage2D(3553,oe,Ee,Me.width,Me.height,0,Se,be,Me.data)}else if(b.isDataArrayTexture)ke?(Qe&&t.texStorage3D(35866,U,Ee,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,Se,be,k.data)):t.texImage3D(35866,0,Ee,k.width,k.height,k.depth,0,Se,be,k.data);else if(b.isData3DTexture)ke?(Qe&&t.texStorage3D(32879,U,Ee,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,Se,be,k.data)):t.texImage3D(32879,0,Ee,k.width,k.height,k.depth,0,Se,be,k.data);else if(b.isFramebufferTexture){if(Qe)if(ke)t.texStorage2D(3553,U,Ee,k.width,k.height);else{let oe=k.width,me=k.height;for(let Te=0;Te<U;Te++)t.texImage2D(3553,Te,Ee,oe,me,0,Se,be,null),oe>>=1,me>>=1}}else if(De.length>0&&_e){ke&&Qe&&t.texStorage2D(3553,U,Ee,De[0].width,De[0].height);for(let oe=0,me=De.length;oe<me;oe++)Me=De[oe],ke?t.texSubImage2D(3553,oe,0,0,Se,be,Me):t.texImage2D(3553,oe,Ee,Se,be,Me);b.generateMipmaps=!1}else ke?(Qe&&t.texStorage2D(3553,U,Ee,k.width,k.height),t.texSubImage2D(3553,0,0,0,Se,be,k)):t.texImage2D(3553,0,Ee,Se,be,k);L(b,_e)&&I(Y),xe.__version=de.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Ae(T,b,F){if(b.image.length!==6)return;const Y=Le(T,b),se=b.source;t.bindTexture(34067,T.__webglTexture,33984+F);const de=n.get(se);if(se.version!==de.__version||Y===!0){t.activeTexture(33984+F),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const xe=b.isCompressedTexture||b.image[0].isCompressedTexture,P=b.image[0]&&b.image[0].isDataTexture,k=[];for(let oe=0;oe<6;oe++)!xe&&!P?k[oe]=_(b.image[oe],!1,!0,c):k[oe]=P?b.image[oe].image:b.image[oe],k[oe]=te(b,k[oe]);const _e=k[0],Se=y(_e)||a,be=r.convert(b.format,b.encoding),Ee=r.convert(b.type),Me=x(b.internalFormat,be,Ee,b.encoding),De=a&&b.isVideoTexture!==!0,ke=de.__version===void 0||Y===!0;let Qe=C(b,_e,Se);J(34067,b,Se);let U;if(xe){De&&ke&&t.texStorage2D(34067,Qe,Me,_e.width,_e.height);for(let oe=0;oe<6;oe++){U=k[oe].mipmaps;for(let me=0;me<U.length;me++){const Te=U[me];b.format!==nn?be!==null?De?t.compressedTexSubImage2D(34069+oe,me,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(34069+oe,me,Me,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+oe,me,0,0,Te.width,Te.height,be,Ee,Te.data):t.texImage2D(34069+oe,me,Me,Te.width,Te.height,0,be,Ee,Te.data)}}}else{U=b.mipmaps,De&&ke&&(U.length>0&&Qe++,t.texStorage2D(34067,Qe,Me,k[0].width,k[0].height));for(let oe=0;oe<6;oe++)if(P){De?t.texSubImage2D(34069+oe,0,0,0,k[oe].width,k[oe].height,be,Ee,k[oe].data):t.texImage2D(34069+oe,0,Me,k[oe].width,k[oe].height,0,be,Ee,k[oe].data);for(let me=0;me<U.length;me++){const Ce=U[me].image[oe].image;De?t.texSubImage2D(34069+oe,me+1,0,0,Ce.width,Ce.height,be,Ee,Ce.data):t.texImage2D(34069+oe,me+1,Me,Ce.width,Ce.height,0,be,Ee,Ce.data)}}else{De?t.texSubImage2D(34069+oe,0,0,0,be,Ee,k[oe]):t.texImage2D(34069+oe,0,Me,be,Ee,k[oe]);for(let me=0;me<U.length;me++){const Te=U[me];De?t.texSubImage2D(34069+oe,me+1,0,0,be,Ee,Te.image[oe]):t.texImage2D(34069+oe,me+1,Me,be,Ee,Te.image[oe])}}}L(b,Se)&&I(34067),de.__version=se.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ye(T,b,F,Y,se){const de=r.convert(F.format,F.encoding),xe=r.convert(F.type),P=x(F.internalFormat,de,xe,F.encoding);n.get(b).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,P,b.width,b.height,b.depth,0,de,xe,null):t.texImage2D(se,0,P,b.width,b.height,0,de,xe,null)),t.bindFramebuffer(36160,T),q(b)?f.framebufferTexture2DMultisampleEXT(36160,Y,se,n.get(F).__webglTexture,0,ie(b)):(se===3553||se>=34069&&se<=34074)&&s.framebufferTexture2D(36160,Y,se,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(T,b,F){if(s.bindRenderbuffer(36161,T),b.depthBuffer&&!b.stencilBuffer){let Y=33189;if(F||q(b)){const se=b.depthTexture;se&&se.isDepthTexture&&(se.type===ci?Y=36012:se.type===Di&&(Y=33190));const de=ie(b);q(b)?f.renderbufferStorageMultisampleEXT(36161,de,Y,b.width,b.height):s.renderbufferStorageMultisample(36161,de,Y,b.width,b.height)}else s.renderbufferStorage(36161,Y,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(b.depthBuffer&&b.stencilBuffer){const Y=ie(b);F&&q(b)===!1?s.renderbufferStorageMultisample(36161,Y,35056,b.width,b.height):q(b)?f.renderbufferStorageMultisampleEXT(36161,Y,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const Y=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0;se<Y.length;se++){const de=Y[se],xe=r.convert(de.format,de.encoding),P=r.convert(de.type),k=x(de.internalFormat,xe,P,de.encoding),_e=ie(b);F&&q(b)===!1?s.renderbufferStorageMultisample(36161,_e,k,b.width,b.height):q(b)?f.renderbufferStorageMultisampleEXT(36161,_e,k,b.width,b.height):s.renderbufferStorage(36161,k,b.width,b.height)}}s.bindRenderbuffer(36161,null)}function w(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);const Y=n.get(b.depthTexture).__webglTexture,se=ie(b);if(b.depthTexture.format===Fi)q(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,se):s.framebufferTexture2D(36160,36096,3553,Y,0);else if(b.depthTexture.format===Es)q(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,se):s.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function E(T){const b=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");w(b.__webglFramebuffer,T)}else if(F){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ie(b.__webglDepthbuffer[Y],T,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Ie(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function N(T,b,F){const Y=n.get(T);b!==void 0&&ye(Y.__webglFramebuffer,T,T.texture,36064,3553),F!==void 0&&E(T)}function H(T){const b=T.texture,F=n.get(T),Y=n.get(b);T.addEventListener("dispose",ae),T.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=b.version,o.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultipleRenderTargets===!0,xe=y(T)||a;if(se){F.__webglFramebuffer=[];for(let P=0;P<6;P++)F.__webglFramebuffer[P]=s.createFramebuffer()}else{if(F.__webglFramebuffer=s.createFramebuffer(),de)if(i.drawBuffers){const P=T.texture;for(let k=0,_e=P.length;k<_e;k++){const Se=n.get(P[k]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&q(T)===!1){const P=de?b:[b];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let k=0;k<P.length;k++){const _e=P[k];F.__webglColorRenderbuffer[k]=s.createRenderbuffer(),s.bindRenderbuffer(36161,F.__webglColorRenderbuffer[k]);const Se=r.convert(_e.format,_e.encoding),be=r.convert(_e.type),Ee=x(_e.internalFormat,Se,be,_e.encoding,T.isXRRenderTarget===!0),Me=ie(T);s.renderbufferStorageMultisample(36161,Me,Ee,T.width,T.height),s.framebufferRenderbuffer(36160,36064+k,36161,F.__webglColorRenderbuffer[k])}s.bindRenderbuffer(36161,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,Y.__webglTexture),J(34067,b,xe);for(let P=0;P<6;P++)ye(F.__webglFramebuffer[P],T,b,36064,34069+P);L(b,xe)&&I(34067),t.unbindTexture()}else if(de){const P=T.texture;for(let k=0,_e=P.length;k<_e;k++){const Se=P[k],be=n.get(Se);t.bindTexture(3553,be.__webglTexture),J(3553,Se,xe),ye(F.__webglFramebuffer,T,Se,36064+k,3553),L(Se,xe)&&I(3553)}t.unbindTexture()}else{let P=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?P=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,Y.__webglTexture),J(P,b,xe),ye(F.__webglFramebuffer,T,b,36064,P),L(b,xe)&&I(P),t.unbindTexture()}T.depthBuffer&&E(T)}function z(T){const b=y(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Y=0,se=F.length;Y<se;Y++){const de=F[Y];if(L(de,b)){const xe=T.isWebGLCubeRenderTarget?34067:3553,P=n.get(de).__webglTexture;t.bindTexture(xe,P),I(xe),t.unbindTexture()}}}function Q(T){if(a&&T.samples>0&&q(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,Y=T.height;let se=16384;const de=[],xe=T.stencilBuffer?33306:36096,P=n.get(T),k=T.isWebGLMultipleRenderTargets===!0;if(k)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),s.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){de.push(36064+_e),T.depthBuffer&&de.push(xe);const Se=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(Se===!1&&(T.depthBuffer&&(se|=256),T.stencilBuffer&&(se|=1024)),k&&s.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[_e]),Se===!0&&(s.invalidateFramebuffer(36008,[xe]),s.invalidateFramebuffer(36009,[xe])),k){const be=n.get(b[_e]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,be,0)}s.blitFramebuffer(0,0,F,Y,0,0,F,Y,se,9728),p&&s.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+_e,36161,P.__webglColorRenderbuffer[_e]);const Se=n.get(b[_e]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),s.framebufferTexture2D(36009,36064+_e,3553,Se,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function ie(T){return Math.min(h,T.samples)}function q(T){const b=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(T){const b=o.render.frame;g.get(T)!==b&&(g.set(T,b),T.update())}function te(T,b){const F=T.encoding,Y=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===hl||F!==Hi&&(F===et?a===!1?e.has("EXT_sRGB")===!0&&Y===nn?(T.format=hl,T.minFilter=Gt,T.generateMipmaps=!1):b=Bf.sRGBToLinear(b):(Y!==nn||se!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),b}this.allocateTextureUnit=j,this.resetTextureUnits=ne,this.setTexture2D=fe,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=pe,this.rebindTextures=N,this.setupRenderTarget=H,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=q}function pb(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Bi)return 5121;if(r===qg)return 32819;if(r===$g)return 32820;if(r===Wg)return 5120;if(r===jg)return 5122;if(r===ql)return 5123;if(r===Xg)return 5124;if(r===Di)return 5125;if(r===ci)return 5126;if(r===Ts)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Yg)return 6406;if(r===nn)return 6408;if(r===Zg)return 6409;if(r===Jg)return 6410;if(r===Fi)return 6402;if(r===Es)return 34041;if(r===Kg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===hl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Qg)return 6403;if(r===e0)return 36244;if(r===t0)return 33319;if(r===n0)return 33320;if(r===i0)return 36249;if(r===ia||r===sa||r===ra||r===oa)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ra)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qc||r===eu||r===tu||r===nu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Qc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===s0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===iu||r===su)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===iu)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===su)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ru||r===ou||r===au||r===lu||r===cu||r===uu||r===hu||r===fu||r===du||r===pu||r===mu||r===gu||r===vu||r===xu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ru)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ou)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===au)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===du)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_u)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===_u)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===vs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class mb extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vn extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n),v=this._getHandJoint(c,m);d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ql extends Tt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Fi,u!==Fi&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fi&&(n=Di),n===void 0&&u===Es&&(n=vs),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1}}class vb extends Wi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const v=[],S=[],_=new Set,y=new Map,M=new zt;M.layers.enable(1),M.viewport=new tt;const L=new zt;L.layers.enable(2),L.viewport=new tt;const I=[M,L],x=new mb;x.layers.enable(1),x.layers.enable(2);let C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=v[X];return K===void 0&&(K=new Na,v[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=v[X];return K===void 0&&(K=new Na,v[X]=K),K.getGripSpace()},this.getHand=function(X){let K=v[X];return K===void 0&&(K=new Na,v[X]=K),K.getHandSpace()};function V(X){const K=S.indexOf(X.inputSource);if(K===-1)return;const pe=v[K];pe!==void 0&&pe.dispatchEvent({type:X.type,data:X.inputSource})}function ae(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",ae),i.removeEventListener("inputsourceschange",B);for(let X=0;X<v.length;X++){const K=S[X];K!==null&&(S[X]=null,v[X].disconnect(K))}C=null,R=null,e.setRenderTarget(m),f=null,h=null,u=null,i=null,d=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",ae),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),d=new wt(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Bi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let K=null,pe=null,ge=null;g.depth&&(ge=g.stencil?35056:33190,K=g.stencil?Es:Fi,pe=g.stencil?vs:Di);const ue={colorFormat:32856,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ue),i.updateRenderState({layers:[h]}),d=new wt(h.textureWidth,h.textureHeight,{format:nn,type:Bi,depthTexture:new Ql(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const J=e.properties.get(d);J.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(X){for(let K=0;K<X.removed.length;K++){const pe=X.removed[K],ge=S.indexOf(pe);ge>=0&&(S[ge]=null,v[ge].disconnect(pe))}for(let K=0;K<X.added.length;K++){const pe=X.added[K];let ge=S.indexOf(pe);if(ge===-1){for(let J=0;J<v.length;J++)if(J>=S.length){S.push(pe),ge=J;break}else if(S[J]===null){S[J]=pe,ge=J;break}if(ge===-1)break}const ue=v[ge];ue&&ue.connect(pe)}}const O=new D,$=new D;function ee(X,K,pe){O.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const ge=O.distanceTo($),ue=K.projectionMatrix.elements,J=pe.projectionMatrix.elements,Le=ue[14]/(ue[10]-1),we=ue[14]/(ue[10]+1),Ae=(ue[9]+1)/ue[5],ye=(ue[9]-1)/ue[5],Ie=(ue[8]-1)/ue[0],w=(J[8]+1)/J[0],E=Le*Ie,N=Le*w,H=ge/(-Ie+w),z=H*-Ie;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(z),X.translateZ(H),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const Q=Le+H,ie=we+H,q=E-z,ce=N+(ge-z),te=Ae*we/ie*Q,T=ye*we/ie*Q;X.projectionMatrix.makePerspective(q,ce,te,T,Q,ie)}function ne(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;x.near=L.near=M.near=X.near,x.far=L.far=M.far=X.far,(C!==x.near||R!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,R=x.far);const K=X.parent,pe=x.cameras;ne(x,K);for(let ue=0;ue<pe.length;ue++)ne(pe[ue],K);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),X.matrix.copy(x.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const ge=X.children;for(let ue=0,J=ge.length;ue<J;ue++)ge[ue].updateMatrixWorld(!0);pe.length===2?ee(x,M,L):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.getPlanes=function(){return _};let j=null;function Z(X,K){if(c=K.getViewerPose(l||o),p=K,c!==null){const pe=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let ge=!1;pe.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let ue=0;ue<pe.length;ue++){const J=pe[ue];let Le=null;if(f!==null)Le=f.getViewport(J);else{const Ae=u.getViewSubImage(h,J);Le=Ae.viewport,ue===0&&(e.setRenderTargetTextures(d,Ae.colorTexture,h.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(d))}let we=I[ue];we===void 0&&(we=new zt,we.layers.enable(ue),we.viewport=new tt,I[ue]=we),we.matrix.fromArray(J.transform.matrix),we.projectionMatrix.fromArray(J.projectionMatrix),we.viewport.set(Le.x,Le.y,Le.width,Le.height),ue===0&&x.matrix.copy(we.matrix),ge===!0&&x.cameras.push(we)}}for(let pe=0;pe<v.length;pe++){const ge=S[pe],ue=v[pe];ge!==null&&ue!==void 0&&ue.update(ge,K,l||o)}if(j&&j(X,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let pe=null;for(const ge of _)K.detectedPlanes.has(ge)||(pe===null&&(pe=[]),pe.push(ge));if(pe!==null)for(const ge of pe)_.delete(ge),y.delete(ge),n.dispatchEvent({type:"planeremoved",data:ge});for(const ge of K.detectedPlanes)if(!_.has(ge))_.add(ge),y.set(ge,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ge});else{const ue=y.get(ge);ge.lastChangedTime>ue&&(y.set(ge,ge.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ge}))}}p=null}const fe=new Yf;fe.setAnimationLoop(Z),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}function xb(s,e){function t(m,d){d.color.getRGB(m.fogColor.value,Xf(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,v,S,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),u(m,d)):d.isMeshPhongMaterial?(i(m,d),c(m,d)):d.isMeshStandardMaterial?(i(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,_)):d.isMeshMatcapMaterial?(i(m,d),p(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),g(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,v,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,v,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=S*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===rn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function _b(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(S,_){const y=_.program;n.uniformBlockBinding(S,y)}function c(S,_){let y=i[S.id];y===void 0&&(g(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",d));const M=_.program;n.updateUBOMapping(S,M);const L=e.render.frame;r[S.id]!==L&&(f(S),r[S.id]=L)}function u(S){const _=h();S.__bindingPointIndex=_;const y=s.createBuffer(),M=S.__size,L=S.usage;return s.bindBuffer(35345,y),s.bufferData(35345,M,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,_,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=i[S.id],y=S.uniforms,M=S.__cache;s.bindBuffer(35345,_);for(let L=0,I=y.length;L<I;L++){const x=y[L];if(p(x,L,M)===!0){const C=x.value,R=x.__offset;typeof C=="number"?(x.__data[0]=C,s.bufferSubData(35345,R,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):C.toArray(x.__data),s.bufferSubData(35345,R,x.__data))}}s.bindBuffer(35345,null)}function p(S,_,y){const M=S.value;if(y[_]===void 0)return typeof M=="number"?y[_]=M:y[_]=M.clone(),!0;if(typeof M=="number"){if(y[_]!==M)return y[_]=M,!0}else{const L=y[_];if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(S){const _=S.uniforms;let y=0;const M=16;let L=0;for(let I=0,x=_.length;I<x;I++){const C=_[I],R=m(C);if(C.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,I>0){L=y%M;const V=M-L;L!==0&&V-R.boundary<0&&(y+=M-L,C.__offset=y)}y+=R.storage}return L=y%M,L>0&&(y+=M-L),S.__size=y,S.__cache={},this}function m(S){const _=S.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function d(S){const _=S.target;_.removeEventListener("dispose",d);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function v(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:v}}function yb(){const s=mr("canvas");return s.style.display="block",s}function ed(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:yb(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hi,this.physicallyCorrectLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const m=this;let d=!1,v=0,S=0,_=null,y=-1,M=null;const L=new tt,I=new tt;let x=null,C=e.width,R=e.height,V=1,ae=null,B=null;const O=new tt(0,0,C,R),$=new tt(0,0,C,R);let ee=!1;const ne=new Kl;let j=!1,Z=!1,fe=null;const X=new Ue,K=new he,pe=new D,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return _===null?V:1}let J=t;function Le(A,W){for(let re=0;re<A.length;re++){const G=A[re],le=e.getContext(G,W);if(le!==null)return le}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",De,!1),J===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),J=Le(W,A),J===null)throw Le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let we,Ae,ye,Ie,w,E,N,H,z,Q,ie,q,ce,te,T,b,F,Y,se,de,xe,P,k,_e;function Se(){we=new D_(J),Ae=new E_(J,we,s),we.init(Ae),P=new pb(J,we,Ae),ye=new fb(J,we,Ae),Ie=new O_,w=new Jy,E=new db(J,we,ye,w,Ae,P,Ie),N=new C_(m),H=new R_(m),z=new W0(J,Ae),k=new w_(J,we,z,Ae),Q=new I_(J,z,Ie,k),ie=new k_(J,Q,z,Ie),se=new z_(J,Ae,E),b=new A_(w),q=new Zy(m,N,H,we,Ae,k,b),ce=new xb(m,w),te=new eb,T=new ob(we,Ae),Y=new S_(m,N,H,ye,ie,u,o),F=new hb(m,ie,Ae),_e=new _b(J,Ie,Ae,ye),de=new T_(J,we,Ie,Ae),xe=new N_(J,we,Ie,Ae),Ie.programs=q.programs,m.capabilities=Ae,m.extensions=we,m.properties=w,m.renderLists=te,m.shadowMap=F,m.state=ye,m.info=Ie}Se();const be=new vb(m,J);this.xr=be,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(C,R,!1))},this.getSize=function(A){return A.set(C,R)},this.setSize=function(A,W,re){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,R=W,e.width=Math.floor(A*V),e.height=Math.floor(W*V),re!==!1&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(C*V,R*V).floor()},this.setDrawingBufferSize=function(A,W,re){C=A,R=W,V=re,e.width=Math.floor(A*re),e.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,W,re,G){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,W,re,G),ye.viewport(L.copy(O).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,W,re,G){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,re,G),ye.scissor(I.copy($).multiplyScalar(V).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){ye.setScissorTest(ee=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(A=!0,W=!0,re=!0){let G=0;A&&(G|=16384),W&&(G|=256),re&&(G|=1024),J.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",De,!1),te.dispose(),T.dispose(),w.dispose(),N.dispose(),H.dispose(),ie.dispose(),k.dispose(),_e.dispose(),q.dispose(),be.dispose(),be.removeEventListener("sessionstart",Te),be.removeEventListener("sessionend",Ce),fe&&(fe.dispose(),fe=null),Ke.stop()};function Ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const A=Ie.autoReset,W=F.enabled,re=F.autoUpdate,G=F.needsUpdate,le=F.type;Se(),Ie.autoReset=A,F.enabled=W,F.autoUpdate=re,F.needsUpdate=G,F.type=le}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const W=A.target;W.removeEventListener("dispose",ke),Qe(W)}function Qe(A){U(A),w.remove(A)}function U(A){const W=w.get(A).programs;W!==void 0&&(W.forEach(function(re){q.releaseProgram(re)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,G,le,Pe){W===null&&(W=ge);const Ne=le.isMesh&&le.matrixWorld.determinant()<0,ze=Cd(A,W,re,G,le);ye.setMaterial(G,Ne);let Be=re.index,Ye=1;G.wireframe===!0&&(Be=Q.getWireframeAttribute(re),Ye=2);const Ge=re.drawRange,We=re.attributes.position;let ct=Ge.start*Ye,jt=(Ge.start+Ge.count)*Ye;Pe!==null&&(ct=Math.max(ct,Pe.start*Ye),jt=Math.min(jt,(Pe.start+Pe.count)*Ye)),Be!==null?(ct=Math.max(ct,0),jt=Math.min(jt,Be.count)):We!=null&&(ct=Math.max(ct,0),jt=Math.min(jt,We.count));const Dn=jt-ct;if(Dn<0||Dn===1/0)return;k.setup(le,G,ze,re,Be);let vi,ut=de;if(Be!==null&&(vi=z.get(Be),ut=xe,ut.setIndex(vi)),le.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*ue()),ut.setMode(1)):ut.setMode(4);else if(le.isLine){let je=G.linewidth;je===void 0&&(je=1),ye.setLineWidth(je*ue()),le.isLineSegments?ut.setMode(1):le.isLineLoop?ut.setMode(2):ut.setMode(3)}else le.isPoints?ut.setMode(0):le.isSprite&&ut.setMode(4);if(le.isInstancedMesh)ut.renderInstances(ct,Dn,le.count);else if(re.isInstancedBufferGeometry){const je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wo=Math.min(re.instanceCount,je);ut.renderInstances(ct,Dn,Wo)}else ut.render(ct,Dn)},this.compile=function(A,W){function re(G,le,Pe){G.transparent===!0&&G.side===xn?(G.side=rn,G.needsUpdate=!0,Zt(G,le,Pe),G.side=ki,G.needsUpdate=!0,Zt(G,le,Pe),G.side=xn):Zt(G,le,Pe)}f=T.get(A),f.init(),g.push(f),A.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(m.physicallyCorrectLights),A.traverse(function(G){const le=G.material;if(le)if(Array.isArray(le))for(let Pe=0;Pe<le.length;Pe++){const Ne=le[Pe];re(Ne,A,G)}else re(le,A,G)}),g.pop(),f=null};let oe=null;function me(A){oe&&oe(A)}function Te(){Ke.stop()}function Ce(){Ke.start()}const Ke=new Yf;Ke.setAnimationLoop(me),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(A){oe=A,be.setAnimationLoop(A),A===null?Ke.stop():Ke.start()},be.addEventListener("sessionstart",Te),be.addEventListener("sessionend",Ce),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(W),W=be.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,W,_),f=T.get(A,g.length),f.init(),g.push(f),X.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ne.setFromProjectionMatrix(X),Z=this.localClippingEnabled,j=b.init(this.clippingPlanes,Z,W),h=te.get(A,p.length),h.init(),p.push(h),xt(A,W,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(ae,B),j===!0&&b.beginShadows();const re=f.state.shadowsArray;if(F.render(re,A,W),j===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(h,A),f.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const G=W.cameras;for(let le=0,Pe=G.length;le<Pe;le++){const Ne=G[le];Pt(h,A,Ne,Ne.viewport)}}else Pt(h,A,W);_!==null&&(E.updateMultisampleRenderTarget(_),E.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(m,A,W),k.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function xt(A,W,re,G){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){G&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);const Ne=ie.update(A),ze=A.material;ze.visible&&h.push(A,Ne,ze,re,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ie.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ie.render.frame),!A.frustumCulled||ne.intersectsObject(A))){G&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);const Ne=ie.update(A),ze=A.material;if(Array.isArray(ze)){const Be=Ne.groups;for(let Ye=0,Ge=Be.length;Ye<Ge;Ye++){const We=Be[Ye],ct=ze[We.materialIndex];ct&&ct.visible&&h.push(A,Ne,ct,re,pe.z,We)}}else ze.visible&&h.push(A,Ne,ze,re,pe.z,null)}}const Pe=A.children;for(let Ne=0,ze=Pe.length;Ne<ze;Ne++)xt(Pe[Ne],W,re,G)}function Pt(A,W,re,G){const le=A.opaque,Pe=A.transmissive,Ne=A.transparent;f.setupLightsView(re),Pe.length>0&&gi(le,W,re),G&&ye.viewport(L.copy(G)),le.length>0&&it(le,W,re),Pe.length>0&&it(Pe,W,re),Ne.length>0&&it(Ne,W,re),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function gi(A,W,re){const G=Ae.isWebGL2;fe===null&&(fe=new wt(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Ts:Bi,minFilter:Ns,samples:G&&r===!0?4:0})),m.getDrawingBufferSize(K),G?fe.setSize(K.x,K.y):fe.setSize(Eo(K.x),Eo(K.y));const le=m.getRenderTarget();m.setRenderTarget(fe),m.clear();const Pe=m.toneMapping;m.toneMapping=Xn,it(A,W,re),m.toneMapping=Pe,E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe),m.setRenderTarget(le)}function it(A,W,re){const G=W.isScene===!0?W.overrideMaterial:null;for(let le=0,Pe=A.length;le<Pe;le++){const Ne=A[le],ze=Ne.object,Be=Ne.geometry,Ye=G===null?Ne.material:G,Ge=Ne.group;ze.layers.test(re.layers)&&Rn(ze,W,re,Be,Ye,Ge)}}function Rn(A,W,re,G,le,Pe){A.onBeforeRender(m,W,re,G,le,Pe),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),le.onBeforeRender(m,W,re,G,A,Pe),le.transparent===!0&&le.side===xn?(le.side=rn,le.needsUpdate=!0,m.renderBufferDirect(re,W,G,le,A,Pe),le.side=ki,le.needsUpdate=!0,m.renderBufferDirect(re,W,G,le,A,Pe),le.side=xn):m.renderBufferDirect(re,W,G,le,A,Pe),A.onAfterRender(m,W,re,G,le,Pe)}function Zt(A,W,re){W.isScene!==!0&&(W=ge);const G=w.get(A),le=f.state.lights,Pe=f.state.shadowsArray,Ne=le.state.version,ze=q.getParameters(A,le.state,Pe,W,re),Be=q.getProgramCacheKey(ze);let Ye=G.programs;G.environment=A.isMeshStandardMaterial?W.environment:null,G.fog=W.fog,G.envMap=(A.isMeshStandardMaterial?H:N).get(A.envMap||G.environment),Ye===void 0&&(A.addEventListener("dispose",ke),Ye=new Map,G.programs=Ye);let Ge=Ye.get(Be);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===Ne)return vc(A,ze),Ge}else ze.uniforms=q.getUniforms(A),A.onBuild(re,ze,m),A.onBeforeCompile(ze,m),Ge=q.acquireProgram(ze,Be),Ye.set(Be,Ge),G.uniforms=ze.uniforms;const We=G.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=b.uniform),vc(A,ze),G.needsLights=Ld(A),G.lightsStateVersion=Ne,G.needsLights&&(We.ambientLightColor.value=le.state.ambient,We.lightProbe.value=le.state.probe,We.directionalLights.value=le.state.directional,We.directionalLightShadows.value=le.state.directionalShadow,We.spotLights.value=le.state.spot,We.spotLightShadows.value=le.state.spotShadow,We.rectAreaLights.value=le.state.rectArea,We.ltc_1.value=le.state.rectAreaLTC1,We.ltc_2.value=le.state.rectAreaLTC2,We.pointLights.value=le.state.point,We.pointLightShadows.value=le.state.pointShadow,We.hemisphereLights.value=le.state.hemi,We.directionalShadowMap.value=le.state.directionalShadowMap,We.directionalShadowMatrix.value=le.state.directionalShadowMatrix,We.spotShadowMap.value=le.state.spotShadowMap,We.spotLightMatrix.value=le.state.spotLightMatrix,We.spotLightMap.value=le.state.spotLightMap,We.pointShadowMap.value=le.state.pointShadowMap,We.pointShadowMatrix.value=le.state.pointShadowMatrix);const ct=Ge.getUniforms(),jt=vo.seqWithValue(ct.seq,We);return G.currentProgram=Ge,G.uniformsList=jt,Ge}function vc(A,W){const re=w.get(A);re.outputEncoding=W.outputEncoding,re.instancing=W.instancing,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Cd(A,W,re,G,le){W.isScene!==!0&&(W=ge),E.resetTextureUnits();const Pe=W.fog,Ne=G.isMeshStandardMaterial?W.environment:null,ze=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Hi,Be=(G.isMeshStandardMaterial?H:N).get(G.envMap||Ne),Ye=G.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ge=!!G.normalMap&&!!re.attributes.tangent,We=!!re.morphAttributes.position,ct=!!re.morphAttributes.normal,jt=!!re.morphAttributes.color,Dn=G.toneMapped?m.toneMapping:Xn,vi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ut=vi!==void 0?vi.length:0,je=w.get(G),Wo=f.state.lights;if(j===!0&&(Z===!0||A!==M)){const Xt=A===M&&G.id===y;b.setState(G,A,Xt)}let _t=!1;G.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Wo.state.version||je.outputEncoding!==ze||le.isInstancedMesh&&je.instancing===!1||!le.isInstancedMesh&&je.instancing===!0||le.isSkinnedMesh&&je.skinning===!1||!le.isSkinnedMesh&&je.skinning===!0||je.envMap!==Be||G.fog===!0&&je.fog!==Pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==b.numPlanes||je.numIntersection!==b.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==Ge||je.morphTargets!==We||je.morphNormals!==ct||je.morphColors!==jt||je.toneMapping!==Dn||Ae.isWebGL2===!0&&je.morphTargetsCount!==ut)&&(_t=!0):(_t=!0,je.__version=G.version);let xi=je.currentProgram;_t===!0&&(xi=Zt(G,W,le));let xc=!1,Hs=!1,jo=!1;const It=xi.getUniforms(),_i=je.uniforms;if(ye.useProgram(xi.program)&&(xc=!0,Hs=!0,jo=!0),G.id!==y&&(y=G.id,Hs=!0),xc||M!==A){if(It.setValue(J,"projectionMatrix",A.projectionMatrix),Ae.logarithmicDepthBuffer&&It.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Hs=!0,jo=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Xt=It.map.cameraPosition;Xt!==void 0&&Xt.setValue(J,pe.setFromMatrixPosition(A.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&It.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||le.isSkinnedMesh)&&It.setValue(J,"viewMatrix",A.matrixWorldInverse)}if(le.isSkinnedMesh){It.setOptional(J,le,"bindMatrix"),It.setOptional(J,le,"bindMatrixInverse");const Xt=le.skeleton;Xt&&(Ae.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),It.setValue(J,"boneTexture",Xt.boneTexture,E),It.setValue(J,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xo=re.morphAttributes;if((Xo.position!==void 0||Xo.normal!==void 0||Xo.color!==void 0&&Ae.isWebGL2===!0)&&se.update(le,re,G,xi),(Hs||je.receiveShadow!==le.receiveShadow)&&(je.receiveShadow=le.receiveShadow,It.setValue(J,"receiveShadow",le.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_i.envMap.value=Be,_i.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Hs&&(It.setValue(J,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&Pd(_i,jo),Pe&&G.fog===!0&&ce.refreshFogUniforms(_i,Pe),ce.refreshMaterialUniforms(_i,G,V,R,fe),vo.upload(J,je.uniformsList,_i,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vo.upload(J,je.uniformsList,_i,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&It.setValue(J,"center",le.center),It.setValue(J,"modelViewMatrix",le.modelViewMatrix),It.setValue(J,"normalMatrix",le.normalMatrix),It.setValue(J,"modelMatrix",le.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xt=G.uniformsGroups;for(let qo=0,Rd=Xt.length;qo<Rd;qo++)if(Ae.isWebGL2){const _c=Xt[qo];_e.update(_c,xi),_e.bind(_c,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function Pd(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Ld(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,W,re){w.get(A.texture).__webglTexture=W,w.get(A.depthTexture).__webglTexture=re;const G=w.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=re===void 0,G.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const re=w.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,re=0){_=A,v=W,S=re;let G=!0,le=null,Pe=!1,Ne=!1;if(A){const Be=w.get(A);Be.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),G=!1):Be.__webglFramebuffer===void 0?E.setupRenderTarget(A):Be.__hasExternalTextures&&E.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ne=!0);const Ge=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(le=Ge[W],Pe=!0):Ae.isWebGL2&&A.samples>0&&E.useMultisampledRTT(A)===!1?le=w.get(A).__webglMultisampledFramebuffer:le=Ge,L.copy(A.viewport),I.copy(A.scissor),x=A.scissorTest}else L.copy(O).multiplyScalar(V).floor(),I.copy($).multiplyScalar(V).floor(),x=ee;if(ye.bindFramebuffer(36160,le)&&Ae.drawBuffers&&G&&ye.drawBuffers(A,le),ye.viewport(L),ye.scissor(I),ye.setScissorTest(x),Pe){const Be=w.get(A.texture);J.framebufferTexture2D(36160,36064,34069+W,Be.__webglTexture,re)}else if(Ne){const Be=w.get(A.texture),Ye=W||0;J.framebufferTextureLayer(36160,36064,Be.__webglTexture,re||0,Ye)}y=-1},this.readRenderTargetPixels=function(A,W,re,G,le,Pe,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){ye.bindFramebuffer(36160,ze);try{const Be=A.texture,Ye=Be.format,Ge=Be.type;if(Ye!==nn&&P.convert(Ye)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===Ts&&(we.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ge!==Bi&&P.convert(Ge)!==J.getParameter(35738)&&!(Ge===ci&&(Ae.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-G&&re>=0&&re<=A.height-le&&J.readPixels(W,re,G,le,P.convert(Ye),P.convert(Ge),Pe)}finally{const Be=_!==null?w.get(_).__webglFramebuffer:null;ye.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(A,W,re=0){const G=Math.pow(2,-re),le=Math.floor(W.image.width*G),Pe=Math.floor(W.image.height*G);E.setTexture2D(W,0),J.copyTexSubImage2D(3553,re,0,0,A.x,A.y,le,Pe),ye.unbindTexture()},this.copyTextureToTexture=function(A,W,re,G=0){const le=W.image.width,Pe=W.image.height,Ne=P.convert(re.format),ze=P.convert(re.type);E.setTexture2D(re,0),J.pixelStorei(37440,re.flipY),J.pixelStorei(37441,re.premultiplyAlpha),J.pixelStorei(3317,re.unpackAlignment),W.isDataTexture?J.texSubImage2D(3553,G,A.x,A.y,le,Pe,Ne,ze,W.image.data):W.isCompressedTexture?J.compressedTexSubImage2D(3553,G,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Ne,W.mipmaps[0].data):J.texSubImage2D(3553,G,A.x,A.y,Ne,ze,W.image),G===0&&re.generateMipmaps&&J.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,W,re,G,le=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=A.max.x-A.min.x+1,Ne=A.max.y-A.min.y+1,ze=A.max.z-A.min.z+1,Be=P.convert(G.format),Ye=P.convert(G.type);let Ge;if(G.isData3DTexture)E.setTexture3D(G,0),Ge=32879;else if(G.isDataArrayTexture)E.setTexture2DArray(G,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,G.flipY),J.pixelStorei(37441,G.premultiplyAlpha),J.pixelStorei(3317,G.unpackAlignment);const We=J.getParameter(3314),ct=J.getParameter(32878),jt=J.getParameter(3316),Dn=J.getParameter(3315),vi=J.getParameter(32877),ut=re.isCompressedTexture?re.mipmaps[0]:re.image;J.pixelStorei(3314,ut.width),J.pixelStorei(32878,ut.height),J.pixelStorei(3316,A.min.x),J.pixelStorei(3315,A.min.y),J.pixelStorei(32877,A.min.z),re.isDataTexture||re.isData3DTexture?J.texSubImage3D(Ge,le,W.x,W.y,W.z,Pe,Ne,ze,Be,Ye,ut.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Ge,le,W.x,W.y,W.z,Pe,Ne,ze,Be,ut.data)):J.texSubImage3D(Ge,le,W.x,W.y,W.z,Pe,Ne,ze,Be,Ye,ut),J.pixelStorei(3314,We),J.pixelStorei(32878,ct),J.pixelStorei(3316,jt),J.pixelStorei(3315,Dn),J.pixelStorei(32877,vi),le===0&&G.generateMipmaps&&J.generateMipmap(Ge),ye.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){v=0,S=0,_=null,ye.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class bb extends ed{}bb.prototype.isWebGL1Renderer=!0;class ec{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Mb extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class td{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ul,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new D;class Gn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ih=new D,sh=new tt,rh=new tt,Sb=new D,oh=new Ue;class wb extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;sh.fromBufferAttribute(i.attributes.skinIndex,e),rh.fromBufferAttribute(i.attributes.skinWeight,e),ih.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=rh.getComponent(r);if(o!==0){const a=sh.getComponent(r);oh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Sb.copy(ih).applyMatrix4(oh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nd extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tb extends Tt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ve,u=Ve,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new Ue,Eb=new Ue;class tc{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Eb;ah.multiplyMatrices(a,t[r]),ah.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Uf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tb(t,e,e,nn,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new nd),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class lh extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ch=new Ue,uh=new Ue,eo=[],Ab=new Ue,Xs=new mt;class Cb extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Ab)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,ch),uh.multiplyMatrices(n,ch),Xs.matrixWorld=uh,Xs.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const l=eo[o];l.instanceId=r,l.object=this,t.push(l)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class id extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hh=new D,fh=new D,dh=new Ue,Oa=new Yl,to=new ji;class nc extends rt{constructor(e=new Ct,t=new id){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hh.fromBufferAttribute(t,i-1),fh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hh.distanceTo(fh);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;dh.copy(i).invert(),Oa.copy(e.ray).applyMatrix4(dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let _=v,y=S-1;_<y;_+=p){const M=g.getX(_),L=g.getX(_+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,L),Oa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let _=v,y=S-1;_<y;_+=p){if(c.fromBufferAttribute(d,_),u.fromBufferAttribute(d,_+1),Oa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ph=new D,mh=new D;class Pb extends nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ph.fromBufferAttribute(t,i),mh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ph.distanceTo(mh);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lb extends nc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sd extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gh=new Ue,pl=new Yl,no=new ji,io=new D;class Rb extends rt{constructor(e=new Ct,t=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;gh.copy(i).invert(),pl.copy(e.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);io.fromBufferAttribute(h,d),vh(io,d,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)io.fromBufferAttribute(h,g),vh(io,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vh(s,e,t,n,i,r,o){const a=pl.distanceSqToPoint(s);if(a<t){const l=new D;pl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,p=(o-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new he:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],r=[],o=[],a=new D,l=new Ue;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(bt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ic extends Pn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new he,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Db extends ic{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const so=new D,Fa=new sc,Ua=new sc,za=new sc;class Ib extends Pn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(so.subVectors(i[0],i[1]).add(i[0]),c=so);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(so.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=so),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),Fa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,d),Ua.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,d),za.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ua.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),za.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Fa.calc(l),Ua.calc(l),za.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Nb(s,e){const t=1-s;return t*t*e}function Ob(s,e){return 2*(1-s)*s*e}function Fb(s,e){return s*s*e}function sr(s,e,t,n){return Nb(s,e)+Ob(s,t)+Fb(s,n)}function Ub(s,e){const t=1-s;return t*t*t*e}function zb(s,e){const t=1-s;return 3*t*t*s*e}function kb(s,e){return 3*(1-s)*s*s*e}function Bb(s,e){return s*s*s*e}function rr(s,e,t,n,i){return Ub(s,e)+zb(s,t)+kb(s,n)+Bb(s,i)}class rd extends Pn{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(e,i.x,r.x,o.x,a.x),rr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hb extends Pn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(e,i.x,r.x,o.x,a.x),rr(e,i.y,r.y,o.y,a.y),rr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rc extends Pn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new he;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vb extends Pn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class od extends Pn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(sr(e,i.x,r.x,o.x),sr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gb extends Pn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(sr(e,i.x,r.x,o.x),sr(e,i.y,r.y,o.y),sr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ad extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(xh(a,l.x,c.x,u.x,h.x),xh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var ld=Object.freeze({__proto__:null,ArcCurve:Db,CatmullRomCurve3:Ib,CubicBezierCurve:rd,CubicBezierCurve3:Hb,EllipseCurve:ic,LineCurve:rc,LineCurve3:Vb,QuadraticBezierCurve:od,QuadraticBezierCurve3:Gb,SplineCurve:ad});class Wb extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new rc(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ld[i.type]().fromJSON(i))}return this}}class ml extends Wb{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new rc(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new od(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new rd(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ad(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new ic(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vo extends Ct{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const m=[],d=n/2;let v=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function S(){const y=new D,M=new D;let L=0;const I=(t-e)/n;for(let x=0;x<=r;x++){const C=[],R=x/r,V=R*(t-e)+e;for(let ae=0;ae<=i;ae++){const B=ae/i,O=B*l+a,$=Math.sin(O),ee=Math.cos(O);M.x=V*$,M.y=-R*n+d,M.z=V*ee,h.push(M.x,M.y,M.z),y.set($,I,ee).normalize(),f.push(y.x,y.y,y.z),p.push(B,1-R),C.push(g++)}m.push(C)}for(let x=0;x<i;x++)for(let C=0;C<r;C++){const R=m[C][x],V=m[C+1][x],ae=m[C+1][x+1],B=m[C][x+1];u.push(R,V,B),u.push(V,ae,B),L+=6}c.addGroup(v,L,0),v+=L}function _(y){const M=g,L=new he,I=new D;let x=0;const C=y===!0?e:t,R=y===!0?1:-1;for(let ae=1;ae<=i;ae++)h.push(0,d*R,0),f.push(0,R,0),p.push(.5,.5),g++;const V=g;for(let ae=0;ae<=i;ae++){const O=ae/i*l+a,$=Math.cos(O),ee=Math.sin(O);I.x=C*ee,I.y=d*R,I.z=C*$,h.push(I.x,I.y,I.z),f.push(0,R,0),L.x=$*.5+.5,L.y=ee*.5*R+.5,p.push(L.x,L.y),g++}for(let ae=0;ae<i;ae++){const B=M+ae,O=V+ae;y===!0?u.push(O,O+1,B):u.push(O+1,O,B),x+=3}c.addGroup(v,x,y===!0?1:2),v+=x}}static fromJSON(e){return new Vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Us extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const _=new D,y=new D,M=new D;for(let L=0;L<t.length;L+=3)p(t[L+0],_),p(t[L+1],y),p(t[L+2],M),l(_,y,M,S)}function l(S,_,y,M){const L=M+1,I=[];for(let x=0;x<=L;x++){I[x]=[];const C=S.clone().lerp(y,x/L),R=_.clone().lerp(y,x/L),V=L-x;for(let ae=0;ae<=V;ae++)ae===0&&x===L?I[x][ae]=C:I[x][ae]=C.clone().lerp(R,ae/V)}for(let x=0;x<L;x++)for(let C=0;C<2*(L-x)-1;C++){const R=Math.floor(C/2);C%2===0?(f(I[x][R+1]),f(I[x+1][R]),f(I[x][R])):(f(I[x][R+1]),f(I[x+1][R+1]),f(I[x+1][R]))}}function c(S){const _=new D;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(S),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){const S=new D;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];const y=d(S)/2/Math.PI+.5,M=v(S)/Math.PI+.5;o.push(y,1-M)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const _=o[S+0],y=o[S+2],M=o[S+4],L=Math.max(_,y,M),I=Math.min(_,y,M);L>.9&&I<.1&&(_<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,_){const y=S*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){const S=new D,_=new D,y=new D,M=new D,L=new he,I=new he,x=new he;for(let C=0,R=0;C<r.length;C+=9,R+=6){S.set(r[C+0],r[C+1],r[C+2]),_.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),L.set(o[R+0],o[R+1]),I.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),M.copy(S).add(_).add(y).divideScalar(3);const V=d(M);m(L,R+0,S,V),m(I,R+2,_,V),m(x,R+4,y,V)}}function m(S,_,y,M){M<0&&S.x===1&&(o[_]=S.x-1),y.x===0&&y.z===0&&(o[_]=M/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function v(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}static fromJSON(e){return new Us(e.vertices,e.indices,e.radius,e.details)}}class oc extends Us{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oc(e.radius,e.detail)}}class xo extends ml{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ml().fromJSON(i))}return this}}const jb={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=cd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(n&&(r=Kb(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return gr(r,o,t,a,l,p,0),o}};function cd(s,e,t,n,i){let r,o;if(i===aM(s,e,t,n)>0)for(r=e;r<t;r+=n)o=_h(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=_h(r,s[r],s[r+1],o);return o&&Go(o,o.next)&&(xr(o),o=o.next),o}function Vi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Go(t,t.next)||at(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&tM(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qb(s,n,i,r):Xb(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),xr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=$b(Vi(s),e,t),gr(s,e,t,n,i,r,2)):o===2&&Yb(s,e,t,n,i,r):gr(Vi(s),e,t,n,i,r,1);break}}}function Xb(s){const e=s.prev,t=s,n=s.next;if(at(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&fs(i,a,r,l,o,c,g.x,g.y)&&at(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qb(s,e,t,n){const i=s.prev,r=s,o=s.next;if(at(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,v=gl(p,g,e,t,n),S=gl(m,d,e,t,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=v&&y&&y.z<=S;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=d&&_!==i&&_!==o&&fs(a,u,l,h,c,f,_.x,_.y)&&at(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=m&&y.y>=g&&y.y<=d&&y!==i&&y!==o&&fs(a,u,l,h,c,f,y.x,y.y)&&at(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=v;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=d&&_!==i&&_!==o&&fs(a,u,l,h,c,f,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=m&&y.y>=g&&y.y<=d&&y!==i&&y!==o&&fs(a,u,l,h,c,f,y.x,y.y)&&at(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $b(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Go(i,r)&&ud(i,n,n.next,r)&&vr(i,r)&&vr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xr(n),xr(n.next),n=s=r),n=n.next}while(n!==s);return Vi(n)}function Yb(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sM(o,a)){let l=hd(o,a);o=Vi(o,o.next),l=Vi(l,l.next),gr(o,e,t,n,i,r,0),gr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Kb(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=cd(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(iM(c));for(i.sort(Zb),r=0;r<i.length;r++)t=Jb(i[r],t);return t}function Zb(s,e){return s.x-e.x}function Jb(s,e){const t=Qb(s,e);if(!t)return e;const n=hd(t,s);return Vi(n,n.next),Vi(t,t.next)}function Qb(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&fs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),vr(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&eM(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function eM(s,e){return at(s.prev,s,e.prev)<0&&at(e.next,s,s.next)<0}function tM(s,e,t,n){let i=s;do i.z===0&&(i.z=gl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,nM(i)}function nM(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function gl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function iM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function fs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function sM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!rM(s,e)&&(vr(s,e)&&vr(e,s)&&oM(s,e)&&(at(s.prev,s,e.prev)||at(s,e.prev,e))||Go(s,e)&&at(s.prev,s,s.next)>0&&at(e.prev,e,e.next)>0)}function at(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Go(s,e){return s.x===e.x&&s.y===e.y}function ud(s,e,t,n){const i=oo(at(s,e,t)),r=oo(at(s,e,n)),o=oo(at(t,n,s)),a=oo(at(t,n,e));return!!(i!==r&&o!==a||i===0&&ro(s,t,e)||r===0&&ro(s,n,e)||o===0&&ro(t,s,n)||a===0&&ro(t,e,n))}function ro(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function oo(s){return s>0?1:s<0?-1:0}function rM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ud(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function vr(s,e){return at(s.prev,s,s.next)<0?at(s,e,s.next)>=0&&at(s,s.prev,e)>=0:at(s,e,s.prev)<0||at(s,s.next,e)<0}function oM(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function hd(s,e){const t=new vl(s.i,s.x,s.y),n=new vl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _h(s,e,t,n){const i=new vl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aM(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class xs{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return xs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];yh(e),bh(n,e);let o=e.length;t.forEach(yh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,bh(n,t[l]);const a=jb.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function yh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function bh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ac extends Ct{constructor(e=new xo([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ot(i,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:lM;let _,y=!1,M,L,I,x;v&&(_=v.getSpacedPoints(u),y=!0,f=!1,M=v.computeFrenetFrames(u,!1),L=new D,I=new D,x=new D),f||(d=0,p=0,g=0,m=0);const C=a.extractPoints(c);let R=C.shape;const V=C.holes;if(!xs.isClockWise(R)){R=R.reverse();for(let w=0,E=V.length;w<E;w++){const N=V[w];xs.isClockWise(N)&&(V[w]=N.reverse())}}const B=xs.triangulateShape(R,V),O=R;for(let w=0,E=V.length;w<E;w++){const N=V[w];R=R.concat(N)}function $(w,E,N){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().multiplyScalar(N).add(w)}const ee=R.length,ne=B.length;function j(w,E,N){let H,z,Q;const ie=w.x-E.x,q=w.y-E.y,ce=N.x-w.x,te=N.y-w.y,T=ie*ie+q*q,b=ie*te-q*ce;if(Math.abs(b)>Number.EPSILON){const F=Math.sqrt(T),Y=Math.sqrt(ce*ce+te*te),se=E.x-q/F,de=E.y+ie/F,xe=N.x-te/Y,P=N.y+ce/Y,k=((xe-se)*te-(P-de)*ce)/(ie*te-q*ce);H=se+ie*k-w.x,z=de+q*k-w.y;const _e=H*H+z*z;if(_e<=2)return new he(H,z);Q=Math.sqrt(_e/2)}else{let F=!1;ie>Number.EPSILON?ce>Number.EPSILON&&(F=!0):ie<-Number.EPSILON?ce<-Number.EPSILON&&(F=!0):Math.sign(q)===Math.sign(te)&&(F=!0),F?(H=-q,z=ie,Q=Math.sqrt(T)):(H=ie,z=q,Q=Math.sqrt(T/2))}return new he(H/Q,z/Q)}const Z=[];for(let w=0,E=O.length,N=E-1,H=w+1;w<E;w++,N++,H++)N===E&&(N=0),H===E&&(H=0),Z[w]=j(O[w],O[N],O[H]);const fe=[];let X,K=Z.concat();for(let w=0,E=V.length;w<E;w++){const N=V[w];X=[];for(let H=0,z=N.length,Q=z-1,ie=H+1;H<z;H++,Q++,ie++)Q===z&&(Q=0),ie===z&&(ie=0),X[H]=j(N[H],N[Q],N[ie]);fe.push(X),K=K.concat(X)}for(let w=0;w<d;w++){const E=w/d,N=p*Math.cos(E*Math.PI/2),H=g*Math.sin(E*Math.PI/2)+m;for(let z=0,Q=O.length;z<Q;z++){const ie=$(O[z],Z[z],H);Le(ie.x,ie.y,-N)}for(let z=0,Q=V.length;z<Q;z++){const ie=V[z];X=fe[z];for(let q=0,ce=ie.length;q<ce;q++){const te=$(ie[q],X[q],H);Le(te.x,te.y,-N)}}}const pe=g+m;for(let w=0;w<ee;w++){const E=f?$(R[w],K[w],pe):R[w];y?(I.copy(M.normals[0]).multiplyScalar(E.x),L.copy(M.binormals[0]).multiplyScalar(E.y),x.copy(_[0]).add(I).add(L),Le(x.x,x.y,x.z)):Le(E.x,E.y,0)}for(let w=1;w<=u;w++)for(let E=0;E<ee;E++){const N=f?$(R[E],K[E],pe):R[E];y?(I.copy(M.normals[w]).multiplyScalar(N.x),L.copy(M.binormals[w]).multiplyScalar(N.y),x.copy(_[w]).add(I).add(L),Le(x.x,x.y,x.z)):Le(N.x,N.y,h/u*w)}for(let w=d-1;w>=0;w--){const E=w/d,N=p*Math.cos(E*Math.PI/2),H=g*Math.sin(E*Math.PI/2)+m;for(let z=0,Q=O.length;z<Q;z++){const ie=$(O[z],Z[z],H);Le(ie.x,ie.y,h+N)}for(let z=0,Q=V.length;z<Q;z++){const ie=V[z];X=fe[z];for(let q=0,ce=ie.length;q<ce;q++){const te=$(ie[q],X[q],H);y?Le(te.x,te.y+_[u-1].y,_[u-1].x+N):Le(te.x,te.y,h+N)}}}ge(),ue();function ge(){const w=i.length/3;if(f){let E=0,N=ee*E;for(let H=0;H<ne;H++){const z=B[H];we(z[2]+N,z[1]+N,z[0]+N)}E=u+d*2,N=ee*E;for(let H=0;H<ne;H++){const z=B[H];we(z[0]+N,z[1]+N,z[2]+N)}}else{for(let E=0;E<ne;E++){const N=B[E];we(N[2],N[1],N[0])}for(let E=0;E<ne;E++){const N=B[E];we(N[0]+ee*u,N[1]+ee*u,N[2]+ee*u)}}n.addGroup(w,i.length/3-w,0)}function ue(){const w=i.length/3;let E=0;J(O,E),E+=O.length;for(let N=0,H=V.length;N<H;N++){const z=V[N];J(z,E),E+=z.length}n.addGroup(w,i.length/3-w,1)}function J(w,E){let N=w.length;for(;--N>=0;){const H=N;let z=N-1;z<0&&(z=w.length-1);for(let Q=0,ie=u+d*2;Q<ie;Q++){const q=ee*Q,ce=ee*(Q+1),te=E+H+q,T=E+z+q,b=E+z+ce,F=E+H+ce;Ae(te,T,b,F)}}}function Le(w,E,N){l.push(w),l.push(E),l.push(N)}function we(w,E,N){ye(w),ye(E),ye(N);const H=i.length/3,z=S.generateTopUV(n,i,H-3,H-2,H-1);Ie(z[0]),Ie(z[1]),Ie(z[2])}function Ae(w,E,N,H){ye(w),ye(E),ye(H),ye(E),ye(N),ye(H);const z=i.length/3,Q=S.generateSideWallUV(n,i,z-6,z-3,z-2,z-1);Ie(Q[0]),Ie(Q[1]),Ie(Q[3]),Ie(Q[1]),Ie(Q[2]),Ie(Q[3])}function ye(w){i.push(l[w*3+0]),i.push(l[w*3+1]),i.push(l[w*3+2])}function Ie(w){r.push(w.x),r.push(w.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ld[i.type]().fromJSON(i)),new ac(n,e.options)}}const lM={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(r,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],m=e[r*3],d=e[r*3+1],v=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(f,1-g),new he(m,1-v)]:[new he(a,1-l),new he(u,1-h),new he(p,1-g),new he(d,1-v)]}};function cM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class _r extends Us{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _r(e.radius,e.detail)}}class Ao extends Us{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ao(e.radius,e.detail)}}class ds extends Us{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ds(e.radius,e.detail)}}class fd extends Ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,p=h.count;for(let g=f,m=f+p;g<m;g+=3)for(let d=0;d<3;d++){const v=a.getX(g+d),S=a.getX(g+(d+1)%3);i.fromBufferAttribute(o,v),r.fromBufferAttribute(o,S),Mh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Mh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ot(t,3))}}}function Mh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class lc extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xi extends lc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dn extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dd extends an{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function ii(s,e,t){return pd(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function ao(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function pd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function uM(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Sh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function md(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Er{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hM extends Er{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bu:r=e,a=2*t-n;break;case Mu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bu:o=e,l=2*n-t;break;case Mu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,d=m*g,v=-f*d+2*f*m-f*g,S=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,_=(-1-p)*d+(1.5+p)*m+.5*g,y=p*d-p*m;for(let M=0;M!==a;++M)r[M]=v*o[u+M]+S*o[c+M]+_*o[l+M]+y*o[h+M];return r}}class fM extends Er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class dM extends Er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ii(n,r,o),this.values=ii(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&pd(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ii(this.times),t=ii(this.values),n=this.getValueSize(),i=this.getInterpolation()===aa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ii(e,0,o),this.values=ii(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ii(this.times,0),t=ii(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=As;class zs extends Ln{}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=fr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class gd extends Ln{}gd.prototype.ValueTypeName="color";class yr extends Ln{}yr.prototype.ValueTypeName="number";class pM extends Er{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Gi extends Ln{InterpolantFactoryMethodLinear(e){return new pM(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=As;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Ln{}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=fr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class br extends Ln{}br.prototype.ValueTypeName="vector";class mM{constructor(e,t=-1,n,i=r0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vM(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=uM(l);l=Sh(l,1,u),c=Sh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new yr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,m){if(p.length!==0){const d=[],v=[];md(p,d,v,g),d.length!==0&&m.push(new h(f,d,v))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const d=[],v=[];for(let S=0;S!==f[g].morphTargets.length;++S){const _=f[g];d.push(_.time),v.push(_.morphTarget===m?1:0)}i.push(new yr(".morphTargetInfluence["+m+"]",d,v))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(br,p+".position",f,"pos",i),n(Gi,p+".quaternion",f,"rot",i),n(br,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function gM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yr;case"vector":case"vector2":case"vector3":case"vector4":return br;case"color":return gd;case"quaternion":return Gi;case"bool":case"boolean":return zs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gM(s.type);if(s.times===void 0){const t=[],n=[];md(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ps={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class xM{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const _M=new xM;class Bs{constructor(e){this.manager=e!==void 0?e:_M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const zn={};class yM extends Error{constructor(e,t){super(e),this.response=t}}class cc extends Bs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ps.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:i});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(v){S();function S(){h.read().then(({done:_,value:y})=>{if(_)v.close();else{m+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let L=0,I=u.length;L<I;L++){const x=u[L];x.onProgress&&x.onProgress(M)}v.enqueue(y),S()}})}}});return new Response(d)}else throw new yM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ps.add(e,c);const u=zn[e];delete zn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bM extends Bs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ps.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=mr("img");function l(){u(),Ps.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class MM extends Bs{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,o=new bM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ar extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class SM extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ka=new Ue,wh=new D,Th=new D;class uc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(wh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wM extends uc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=pr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class TM extends Ar{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Eh=new Ue,qs=new D,Ba=new D;class EM extends uc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),i.makeTranslation(-qs.x,-qs.y,-qs.z),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh)}}class vd extends Ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new EM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class AM extends uc{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xd extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.target=new rt,this.shadow=new AM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CM extends Ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PM extends Ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class LM extends Bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ps.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ps.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class _d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ah();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ah(){return(typeof performance>"u"?Date:performance).now()}const hc="\\[\\]\\.:\\/",RM=new RegExp("["+hc+"]","g"),fc="[^"+hc+"]",DM="[^"+hc.replace("\\.","")+"]",IM=/((?:WC+[\/:])*)/.source.replace("WC",fc),NM=/(WCOD+)?/.source.replace("WCOD",DM),OM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),FM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),UM=new RegExp("^"+IM+NM+OM+FM+"$"),zM=["material","materials","bones","map"];class kM{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(RM,"")}static parseTrackName(e){const t=UM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=kM;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xl extends td{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ch{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class BM{constructor(){this.type="ShapePath",this.color=new Re,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ml,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const S=[];for(let _=0,y=v.length;_<y;_++){const M=v[_],L=new xo;L.curves=M.curves,S.push(L)}return S}function n(v,S){const _=S.length;let y=!1;for(let M=_-1,L=0;L<_;M=L++){let I=S[M],x=S[L],C=x.x-I.x,R=x.y-I.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(I=S[L],C=-C,x=S[M],R=-R),v.y<I.y||v.y>x.y)continue;if(v.y===I.y){if(v.x===I.x)return!0}else{const V=R*(v.x-I.x)-C*(v.y-I.y);if(V===0)return!0;if(V<0)continue;y=!y}}else{if(v.y!==I.y)continue;if(x.x<=v.x&&v.x<=I.x||I.x<=v.x&&v.x<=x.x)return!0}}return y}const i=xs.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new xo,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,m;f[g]=void 0,p[g]=[];for(let v=0,S=r.length;v<S;v++)a=r[v],m=a.getPoints(),o=i(m),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new xo,p:m},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:m[0]});if(!f[0])return t(r);if(f.length>1){let v=!1,S=0;for(let _=0,y=f.length;_<y;_++)h[_]=[];for(let _=0,y=f.length;_<y;_++){const M=p[_];for(let L=0;L<M.length;L++){const I=M[L];let x=!0;for(let C=0;C<f.length;C++)n(I.p,f[C].p)&&(_!==C&&S++,x?(x=!1,h[C].push(I)):v=!0);x&&h[_].push(I)}}S>0&&v===!1&&(p=h)}let d;for(let v=0,S=f.length;v<S;v++){l=f[v].s,c.push(l),d=p[v];for(let _=0,y=d.length;_<y;_++)l.holes.push(d[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class An{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),An.nextNameID=An.nextNameID||0,this.$name.id="lil-gui-name-"+ ++An.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class HM extends An{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function _l(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const VM={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:_l,toHexString:_l},Mr={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},GM={isPrimitive:!1,match:Array.isArray,fromHexString(s,e,t=1){const n=Mr.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([s,e,t],n=1)=>Mr.toHexString(s*(n=255/n)<<16^e*n<<8^t*n<<0)},WM={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Mr.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:s,g:e,b:t},n=1)=>Mr.toHexString(s*(n=255/n)<<16^e*n<<8^t*n<<0)},jM=[VM,Mr,GM,WM];class XM extends An{constructor(e,t,n,i){var r;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,jM.find(o=>o.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=_l(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ha extends An{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class qM extends An{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let t,n,i,r,o,a=!1;const l=u=>{if(a){const h=u.clientX-t,f=u.clientY-n;Math.abs(f)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&c()}if(!a){const h=u.clientY-i;o-=h*this._step*this._arrowKeyMultiplier(u),r+o>this._max?o=this._max-r:r+o<this._min&&(o=this._min-r),this._snapClampSetValue(r+o)}i=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{const u=parseFloat(this.$input.value);isNaN(u)||this.setValue(this._clamp(u))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,n=i=u.clientY,a=!0,r=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=f=>{const p=this.$slider.getBoundingClientRect();let g=(m=f,d=p.left,v=p.right,S=this._min,_=this._max,(m-d)/(v-d)*(_-S)+S);var m,d,v,S,_;this._snapClampSetValue(g)},t=f=>{e(f.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let i,r,o=!1;const a=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),o=!1},l=f=>{if(o){const p=f.touches[0].clientX-i,g=f.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?a(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else f.preventDefault(),e(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(i=f.touches[0].clientX,r=f.touches[0].clientY,o=!0):a(f),window.addEventListener("touchmove",l),window.addEventListener("touchend",c))}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const p=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class $M extends An{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class YM extends An{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Ph=!1;class dc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Ph&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Ph=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new $M(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new qM(this,e,t,n,i,r);case"boolean":return new HM(this,e,t);case"string":return new YM(this,e,t);case"function":return new Ha(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new XM(this,e,t,n)}addFolder(e){return new dc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ha||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ha)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Lh={type:"change"},Va={type:"start"},Rh={type:"end"};class KM extends Wi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",te),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Lh),n.update(),r=i.NONE},this.update=function(){const P=new D,k=new Cn().setFromUnitVectors(e.up,new D(0,1,0)),_e=k.clone().invert(),Se=new D,be=new Cn,Ee=2*Math.PI;return function(){const De=n.object.position;P.copy(De).sub(n.target),P.applyQuaternion(k),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&C(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ke=n.minAzimuthAngle,Qe=n.maxAzimuthAngle;return isFinite(ke)&&isFinite(Qe)&&(ke<-Math.PI?ke+=Ee:ke>Math.PI&&(ke-=Ee),Qe<-Math.PI?Qe+=Ee:Qe>Math.PI&&(Qe-=Ee),ke<=Qe?a.theta=Math.max(ke,Math.min(Qe,a.theta)):a.theta=a.theta>(ke+Qe)/2?Math.max(ke,a.theta):Math.min(Qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(a),P.applyQuaternion(_e),De.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Se.distanceToSquared(n.object.position)>o||8*(1-be.dot(n.object.quaternion))>o?(n.dispatchEvent(Lh),Se.copy(n.object.position),be.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",Q),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",te)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Ch,l=new Ch;let c=1;const u=new D;let h=!1;const f=new he,p=new he,g=new he,m=new he,d=new he,v=new he,S=new he,_=new he,y=new he,M=[],L={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function C(P){l.theta-=P}function R(P){l.phi-=P}const V=function(){const P=new D;return function(_e,Se){P.setFromMatrixColumn(Se,0),P.multiplyScalar(-_e),u.add(P)}}(),ae=function(){const P=new D;return function(_e,Se){n.screenSpacePanning===!0?P.setFromMatrixColumn(Se,1):(P.setFromMatrixColumn(Se,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(_e),u.add(P)}}(),B=function(){const P=new D;return function(_e,Se){const be=n.domElement;if(n.object.isPerspectiveCamera){const Ee=n.object.position;P.copy(Ee).sub(n.target);let Me=P.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),V(2*_e*Me/be.clientHeight,n.object.matrix),ae(2*Se*Me/be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(_e*(n.object.right-n.object.left)/n.object.zoom/be.clientWidth,n.object.matrix),ae(Se*(n.object.top-n.object.bottom)/n.object.zoom/be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(P){f.set(P.clientX,P.clientY)}function ne(P){S.set(P.clientX,P.clientY)}function j(P){m.set(P.clientX,P.clientY)}function Z(P){p.set(P.clientX,P.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;C(2*Math.PI*g.x/k.clientHeight),R(2*Math.PI*g.y/k.clientHeight),f.copy(p),n.update()}function fe(P){_.set(P.clientX,P.clientY),y.subVectors(_,S),y.y>0?O(x()):y.y<0&&$(x()),S.copy(_),n.update()}function X(P){d.set(P.clientX,P.clientY),v.subVectors(d,m).multiplyScalar(n.panSpeed),B(v.x,v.y),m.copy(d),n.update()}function K(P){P.deltaY<0?$(x()):P.deltaY>0&&O(x()),n.update()}function pe(P){let k=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),k=!0;break}k&&(P.preventDefault(),n.update())}function ge(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const P=.5*(M[0].pageX+M[1].pageX),k=.5*(M[0].pageY+M[1].pageY);f.set(P,k)}}function ue(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const P=.5*(M[0].pageX+M[1].pageX),k=.5*(M[0].pageY+M[1].pageY);m.set(P,k)}}function J(){const P=M[0].pageX-M[1].pageX,k=M[0].pageY-M[1].pageY,_e=Math.sqrt(P*P+k*k);S.set(0,_e)}function Le(){n.enableZoom&&J(),n.enablePan&&ue()}function we(){n.enableZoom&&J(),n.enableRotate&&ge()}function Ae(P){if(M.length==1)p.set(P.pageX,P.pageY);else{const _e=xe(P),Se=.5*(P.pageX+_e.x),be=.5*(P.pageY+_e.y);p.set(Se,be)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;C(2*Math.PI*g.x/k.clientHeight),R(2*Math.PI*g.y/k.clientHeight),f.copy(p)}function ye(P){if(M.length===1)d.set(P.pageX,P.pageY);else{const k=xe(P),_e=.5*(P.pageX+k.x),Se=.5*(P.pageY+k.y);d.set(_e,Se)}v.subVectors(d,m).multiplyScalar(n.panSpeed),B(v.x,v.y),m.copy(d)}function Ie(P){const k=xe(P),_e=P.pageX-k.x,Se=P.pageY-k.y,be=Math.sqrt(_e*_e+Se*Se);_.set(0,be),y.set(0,Math.pow(_.y/S.y,n.zoomSpeed)),O(y.y),S.copy(_)}function w(P){n.enableZoom&&Ie(P),n.enablePan&&ye(P)}function E(P){n.enableZoom&&Ie(P),n.enableRotate&&Ae(P)}function N(P){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",z)),Y(P),P.pointerType==="touch"?T(P):ie(P))}function H(P){n.enabled!==!1&&(P.pointerType==="touch"?b(P):q(P))}function z(P){se(P),M.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(Rh),r=i.NONE}function Q(P){se(P)}function ie(P){let k;switch(P.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case qi.DOLLY:if(n.enableZoom===!1)return;ne(P),r=i.DOLLY;break;case qi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;j(P),r=i.PAN}else{if(n.enableRotate===!1)return;ee(P),r=i.ROTATE}break;case qi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ee(P),r=i.ROTATE}else{if(n.enablePan===!1)return;j(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Va)}function q(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Z(P);break;case i.DOLLY:if(n.enableZoom===!1)return;fe(P);break;case i.PAN:if(n.enablePan===!1)return;X(P);break}}function ce(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(Va),K(P),n.dispatchEvent(Rh))}function te(P){n.enabled===!1||n.enablePan===!1||pe(P)}function T(P){switch(de(P),M.length){case 1:switch(n.touches.ONE){case $i.ROTATE:if(n.enableRotate===!1)return;ge(),r=i.TOUCH_ROTATE;break;case $i.PAN:if(n.enablePan===!1)return;ue(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case $i.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),r=i.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Va)}function b(P){switch(de(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ye(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;E(P),n.update();break;default:r=i.NONE}}function F(P){n.enabled!==!1&&P.preventDefault()}function Y(P){M.push(P)}function se(P){delete L[P.pointerId];for(let k=0;k<M.length;k++)if(M[k].pointerId==P.pointerId){M.splice(k,1);return}}function de(P){let k=L[P.pointerId];k===void 0&&(k=new he,L[P.pointerId]=k),k.set(P.pageX,P.pageY)}function xe(P){const k=P.pointerId===M[0].pointerId?M[1]:M[0];return L[k.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",ce,{passive:!1}),this.update()}}function Dh(s){let e=document.getElementById("three-canvas");const t=new Mb,n=new ed({antialias:!0,alpha:!0}),i=new zt(45,window.innerWidth/window.innerHeight,1);i.position.z=5,i.position.y=.5;const r=new KM(i,e);r.enableDamping=!0,r.rotateSpeed=.2,n.setSize(window.innerWidth,window.innerHeight);let o=e.lastElementChild;for(;o;)e.removeChild(o),o=e.lastElementChild;return e.appendChild(n.domElement),t.fog=new ec(742292,5,180),{scene:t,camera:i,renderer:n,control:r}}class lt{constructor(e,t){Xe(this,"scene");this.lights=[];let n=this;this.scene=e,this.gui=t.addFolder("Lights").close(),this.addEnable=!0,this.addSelection={selection:lt.TYPE.None,add:i},this.addMenu();function i(){n.addLight(n.addSelection.selection),n.lights.length>=3&&n.addEnable.disable()}e.add(new CM(10066329))}addShadow(e){e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=500,e.shadow.radius=4,e.shadow.blurSamples=8,e.shadow.camera.right=15,e.shadow.camera.left=-15,e.shadow.camera.top=15,e.shadow.camera.bottom=-15,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.bias=-5e-4}addMenu(){const e=this.gui.addFolder("Add Light");e.add(this.addSelection,"selection",{None:lt.TYPE.None,Point:lt.TYPE.Point,Directional:lt.TYPE.Directional,Hemisphere:lt.TYPE.Hemisphere}).name("Light Type"),this.addEnable=e.add(this.addSelection,"add").name("Add")}addLight(e,t){switch(e){case lt.TYPE.None:break;case lt.TYPE.Point:this.initPointLight(t||lt.PointLIGHT);break;case lt.TYPE.Directional:this.initDirLight(t||lt.DirLIGHT);break;case lt.TYPE.Hemisphere:this.initHemiLight(t||lt.HemiLIGHT);break}}removeLight(e,t){this.scene.remove(e),e.dispose(),t.destroy()}initPointLight(e){let t=new vd(e.color,e.intensity,e.distance);t.position.set(3,3,3),this.addShadow(t),this.scene.add(t),this.lights.push(e);let n=this.lights.length-1;return this.pointLightGUI(n,t),t}initDirLight(e){let t=new xd(e.color),n=e.rotate.r*Math.cos(e.rotate.a*Math.PI/180),i=e.rotate.r*Math.sin(e.rotate.a*Math.PI/180);t.position.set(n,e.rotate.h,i),t.intensity=e.intensity,this.addShadow(t),this.scene.add(t),this.lights.push(e);let r=this.lights.length-1;return this.dirLightGUI(r,t),t}initHemiLight(e){let t=new SM(e.color,e.groundColor);this.scene.add(t),this.lights.push(e);let n=this.lights.length-1;return this.hemiLightGUI(n,t),t}pointLightGUI(e,t){let n=this,i="#"+e+" PointLight";const r=this.gui.addFolder(i);r.add(this.lights[e],"intensity",0,100).name("Intensity").onChange(function(l){t.intensity=l}),r.add(this.lights[e],"distance",0,500).name("Distance").onChange(function(l){t.distance=l}),r.addColor(t,"color").name("Color").onChange(function(){n.lights[e].color=t.color}),r.add(this.lights[e].position,"x",-20,20).onChange(function(l){t.position.x=l}),r.add(this.lights[e].position,"y",-20,20).onChange(function(l){t.position.y=l}),r.add(this.lights[e].position,"z",-20,20).onChange(function(l){t.position.z=l}),r.add(this.lights[e],"decay",1,5).name("Decay").onChange(function(l){t.decay=l}),r.add(this.lights[e],"power",1,1e3).name("Power").onChange(function(l){t.power=l}),r.add(this.lights[e].shadow,"radius",0,10).name("Shadow Radius").onChange(function(l){t.shadow.radius=l}),r.add(this.lights[e].shadow,"blurSamples",1,10,1).name("Blur Samples").onChange(function(l){t.shadow.blurSamples=l});let o={Enable:!0,Remove:a};r.add(o,"Enable").onChange(function(){o.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function a(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(o,"Remove")}dirLightGUI(e,t){let n=this,i="#"+e+" Directional Light";const r=this.gui.addFolder(i);r.add(this.lights[e],"intensity",0,20).name("Intensity").onChange(function(l){t.intensity=l}),r.addColor(t,"color").name("Color").onChange(function(){n.lights[e].color=t.color}),r.add(this.lights[e].rotate,"r",0,50).onChange(function(l){let c=l*Math.cos(n.lights[e].rotate.a*Math.PI/180),u=l*Math.sin(n.lights[e].rotate.a*Math.PI/180);t.position.set(c,n.lights[e].rotate.h,u)}).name("Rotate Radius"),r.add(this.lights[e].rotate,"a",-360,360).onChange(function(l){let c=n.lights[e].rotate.r*Math.cos(l*Math.PI/180),u=n.lights[e].rotate.r*Math.sin(l*Math.PI/180);t.position.set(c,n.lights[e].rotate.h,u)}).name("Rotate Angle"),r.add(this.lights[e].rotate,"h",1,20).onChange(function(l){t.position.y=l}).name("Light Height"),r.add(this.lights[e].shadow,"radius",0,10).name("Shadow Radius").onChange(function(l){t.shadow.radius=l}),r.add(this.lights[e].shadow,"blurSamples",1,10,1).name("Blur Samples").onChange(function(l){t.shadow.blurSamples=l});let o={Enable:!0,Remove:a};r.add(o,"Enable").onChange(function(){o.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function a(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(o,"Remove")}hemiLightGUI(e,t){let n=this,i="#"+e+" Hemisphere Light";const r=this.gui.addFolder(i);r.add(this.lights[e],"intensity",0,20).name("Intensity").onChange(function(l){t.intensity=l}),r.addColor(t,"color").name("Sky Color").onChange(function(){n.lights[e].color=t.color}),r.addColor(t,"groundColor").name("Ground Color").onChange(function(){n.lights[e].groundColor=t.groundColor});let o={Enable:!0,Remove:a};r.add(o,"Enable").onChange(function(){o.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function a(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(o,"Remove")}}lt.TYPE={None:0,Point:1,Directional:2,Hemisphere:3,Spot:4};lt.PointLIGHT={type:lt.TYPE.Point,intensity:40,distance:100,color:16776960,position:{x:3,y:3,z:3},decay:1,power:500,shadow:{radius:4,blurSamples:8},enable:!0};lt.DirLIGHT={type:lt.TYPE.Directional,intensity:1,color:65535,rotate:{r:20,a:90,h:15},shadow:{radius:4,blurSamples:8},enable:!0};lt.HemiLIGHT={type:lt.TYPE.Hemisphere,intensity:1,color:16777215,groundColor:1184307,enable:!0};class yd extends Bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new hS(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=zi.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new cc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(zi.decodeText(new Uint8Array(e,0,4))===bd){try{o[$e.KHR_BINARY_GLTF]=new fS(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(zi.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new wS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new QM;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new dS(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new pS;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new mS;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ZM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class JM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Re(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vd(u),c.distance=h;break;case"spot":c=new TM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class QM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return _n}extendParams(e,t,n){const i=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,et))}return Promise.all(i)}}class eS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class tS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(a,a)}return Promise.all(r)}}class nS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class iS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class sS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class rS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re(a[0],a[1],a[2]),Promise.all(r)}}class oS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class aS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,et)),Promise.all(r)}}class lS{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class cS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uS{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class hS{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const m=new Ue,d=new D,v=new Cn,S=new D(1,1,1),_=new Cb(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&d.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,m.compose(d,v,S));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);rt.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const bd="glTF",$s=12,Ih={JSON:1313821514,BIN:5130562};class fS{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$s);if(this.header={magic:zi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-$s,i=new DataView(e,$s);let r=0;for(;r<n;){const o=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===Ih.JSON){const l=new Uint8Array(e,$s+r,o);this.content=zi.decodeText(l)}else if(a===Ih.BIN){const l=$s+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=yl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=yl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=_s[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(f)},a,c)})})}}class pS{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mS{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Md extends Er{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,m=g-c,d=-2*p+3*f,v=p-f,S=1-d,_=v-f+h;for(let y=0;y!==a;y++){const M=o[m+y+a],L=o[m+y+l]*u,I=o[g+y+a],x=o[g+y]*u;r[y]=S*M+_*L+d*I+v*x}return r}}const gS=new Cn;class vS extends Md{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return gS.fromArray(r).normalize().toArray(r),r}}const en={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nh={9728:Ve,9729:Gt,9984:ll,9985:Of,9986:cl,9987:Ns},Oh={33071:tn,33648:To,10497:ws},Ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xS={CUBICSPLINE:void 0,LINEAR:As,STEP:fr},Wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _S(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new lc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),s.DefaultMaterial}function Ys(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function bS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MS(s){const e=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Fh(e.attributes):t=s.indices+":"+Fh(s.attributes)+":"+s.mode,t}function Fh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function bl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class wS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ZM,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new MM(this.options.manager):this.textureLoader=new LM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Ys(r,a,i),ai(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(zi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ga[i.type],a=_s[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Bt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ga[i.type],c=_s[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,d;if(p&&p!==h){const v=Math.floor(f/p),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let _=t.cache.get(S);_||(m=new c(a,v*p,i.count*p/u),_=new td(m,p/u),t.cache.add(S,_)),d=new Gn(_,l,f%p/u,g)}else a===null?m=new c(i.count*l):m=new c(a,f,i.count*l),d=new Bt(m,l,g);if(i.sparse!==void 0){const v=Ga.SCALAR,S=_s[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new S(o[1],_,i.sparse.count*v),L=new c(o[2],y,i.sparse.count*l);a!==null&&(d=new Bt(d.array.slice(),d.itemSize,d.normalized));for(let I=0,x=M.length;I<x;I++){const C=M[I];if(d.setX(C,L[I*l]),l>=2&&d.setY(C,L[I*l+1]),l>=3&&d.setZ(C,L[I*l+2]),l>=4&&d.setW(C,L[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Nh[f.magFilter]||Gt,u.minFilter=Nh[f.minFilter]||Ns,u.wrapS=Oh[f.wrapS]||ws,u.wrapT=Oh[f.wrapT]||ws,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const d=new Tt(m);d.needsUpdate=!0,f(d)}),t.load(zi.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||SS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sd,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new id,an.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return lc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=i[$e.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=xn);const u=r.alphaMode||Wa.OPAQUE;if(u===Wa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==_n&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==_n&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==_n&&(a.emissive=new Re().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==_n&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,et)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ai(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ys(i,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Uh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=MS(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Uh(new Ct,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?_S(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],d=o[p];let v;const S=c[p];if(d.mode===en.TRIANGLES||d.mode===en.TRIANGLE_STRIP||d.mode===en.TRIANGLE_FAN||d.mode===void 0)v=r.isSkinnedMesh===!0?new wb(m,S):new mt(m,S),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),d.mode===en.TRIANGLE_STRIP?v.geometry=zh(v.geometry,o0):d.mode===en.TRIANGLE_FAN&&(v.geometry=zh(v.geometry,Ff));else if(d.mode===en.LINES)v=new Pb(m,S);else if(d.mode===en.LINE_STRIP)v=new nc(m,S);else if(d.mode===en.LINE_LOOP)v=new Lb(m,S);else if(d.mode===en.POINTS)v=new Rb(m,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(v.geometry.morphAttributes).length>0&&bS(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),ai(v,r),d.extensions&&Ys(i,v,d),t.assignFinalMaterial(v),h.push(v)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const f=new Vn;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(w0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Tr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ue;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tc(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],p=h.target,g=p.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,d=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),a.push(f),l.push(p)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],p=c[3],g=c[4],m=[];for(let v=0,S=u.length;v<S;v++){const _=u[v],y=h[v],M=f[v],L=p[v],I=g[v];if(_===void 0)continue;_.updateMatrix();let x;switch(si[I.path]){case si.weights:x=yr;break;case si.rotation:x=Gi;break;case si.position:case si.scale:default:x=br;break}const C=_.name?_.name:_.uuid,R=L.interpolation!==void 0?xS[L.interpolation]:As,V=[];si[I.path]===si.weights?_.traverse(function(B){B.morphTargetInfluences&&V.push(B.name?B.name:B.uuid)}):V.push(C);let ae=M.array;if(M.normalized){const B=bl(ae.constructor),O=new Float32Array(ae.length);for(let $=0,ee=ae.length;$<ee;$++)O[$]=ae[$]*B;ae=O}for(let B=0,O=V.length;B<O;B++){const $=new x(V[B]+"."+si[I.path],y.array,ae,R);L.interpolation==="CUBICSPLINE"&&($.createInterpolant=function(ne){const j=this instanceof Gi?vS:Md;return new j(this.times,this.values,this.getValueSize()/3,ne)},$.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push($)}}const d=n.name?n.name:"animation_"+e;return new mM(d,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new nd:a.length>1?l=new Vn:a.length===1?l=a[0]:l=new rt,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),ai(l,r),r.extensions&&Ys(n,l,r),r.matrix!==void 0){const c=new Ue;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,o=new Vn;i.name&&(o.name=r.createUniqueName(i.name)),ai(o,i),i.extensions&&Ys(n,o,i);const a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(Sd(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,p]of r.associations)(f instanceof an||f instanceof Tt)&&h.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(o),o})}}function Sd(s,e,t,n){const i=t.nodes[s];return n.getDependency("node",s).then(function(r){return i.skin===void 0?r:n.getDependency("skin",i.skin).then(function(o){return r.traverse(function(a){!a.isSkinnedMesh||a.bind(o,a.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(Sd(u,r,t,n))}}return Promise.all(o)})}function TS(s,e,t){const n=e.attributes,i=new pi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=bl(_s[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const m=bl(_s[f.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ji;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Uh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=yl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ai(s,e),TS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yS(s,e.targets,t):s})}function zh(s,e){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ff)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}const or={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class mi{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ES=new Tr(-1,1,1,-1,0,1),pc=new Ct;pc.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3));pc.setAttribute("uv",new ot([0,2,0,0,2,0],2));class Ls{constructor(e){this._mesh=new mt(pc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ES)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class At extends mi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mn.clone(e.uniforms),this.material=new Mt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ls(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class kh extends mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class AS extends mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class CS{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new he);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new wt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],or===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),At===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new At(or),this.clock=new _d}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kh!==void 0&&(o instanceof kh?n=!0:o instanceof AS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Tr(-1,1,1,-1,0,1);const wd=new Ct;wd.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3));wd.setAttribute("uv",new ot([0,2,0,0,2,0],2));class PS extends mi{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const LS={uniforms:{tDiffuse:{value:10},tSize:{value:new he(64,64)},center:{value:new he(0,0)},angle:{value:1.57},scale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ) ;
			float c = cos( angle ) ;

			vec2 tex = vUv * tSize - center;
			
			vec2 point = vec2( c * tex.x , c * tex.y ) * scale;

			return step( sin( point.x ) * sin( point.y ), 0.6 );

		}

		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

			float average = ( color.r + color.g + color.b ) / 3.0;
			
			float fr, fg, fb, fa;
			
			if (pattern() == 0.0) {
			    fr = (color.r) + 0.2;
			    fg = (color.g) + 0.2;
			    fb = (color.b) + 0.2;
			    fa = color.a;
			} else {
			    fr = 0.0;
			    fg = 0.0;
			    fb = 0.0;
			    fa = 0.0;
			}
			
			

			gl_FragColor = vec4( vec3( fr, fg, fb ), fa );

		}`};function Ht(s){let e=s*(1-s);return(e*(1+-1.4168*e)+s)**2}class RS{constructor(e,t){Xe(this,"time",0);this.composer=e,this.size=3,this.max=t;const n=new At(LS);n.uniforms.scale.value=3,n.uniforms.angle.value=0,this.pass=n}add(e){const t=document.createElement("audio");t.hidden=!0,t.src="./sound/aCrash.wav",t.volume=.5,t.play(),this.time=0,this.size=Math.random()*2+2,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<10){let t=Ht(this.time/10);this.pass.uniforms.scale.value=this.size+1-t}else this.time==10&&(this.pass.uniforms.scale.value=this.size);this.time+=1}}}const Td={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`};class DS{constructor(e,t,n,i){Xe(this,"time",0);this.composer=e,this.max=t,this.amount=n,this.fadeTP=i;const r=new At(Td);r.uniforms.amount.value=n,this.pass=r}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aHiHat.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<=this.fadeTP){let t=Ht(this.time/this.fadeTP)*(this.amount-.005);this.pass.uniforms.amount.value=t+.005}else this.time==this.fadeTP+1&&(this.pass.uniforms.amount.value=this.amount);this.time+=1}}}const hn={defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new he},cameraProjectionMatrix:{value:new Ue},cameraInverseProjectionMatrix:{value:new Ue},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`
		// precision highp float;
		precision highp sampler2D;
		varying vec2 vUv;
		uniform sampler2D tDepth;
		uniform sampler2D tNormal;
		uniform sampler2D tMetalness;
		uniform sampler2D tDiffuse;
		uniform float cameraRange;
		uniform vec2 resolution;
		uniform float opacity;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform float maxDistance;
		uniform float thickness;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;
		#include <packing>
		float pointToLineDistance(vec3 x0, vec3 x1, vec3 x2) {
			//x0: point, x1: linePointA, x2: linePointB
			//https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html
			return length(cross(x0-x1,x0-x2))/length(x2-x1);
		}
		float pointPlaneDistance(vec3 point,vec3 planePoint,vec3 planeNormal){
			// https://mathworld.wolfram.com/Point-PlaneDistance.html
			//// https://en.wikipedia.org/wiki/Plane_(geometry)
			//// http://paulbourke.net/geometry/pointlineplane/
			float a=planeNormal.x,b=planeNormal.y,c=planeNormal.z;
			float x0=point.x,y0=point.y,z0=point.z;
			float x=planePoint.x,y=planePoint.y,z=planePoint.z;
			float d=-(a*x+b*y+c*z);
			float distance=(a*x0+b*y0+c*z0+d)/sqrt(a*a+b*b+c*c);
			return distance;
		}
		float getDepth( const in vec2 uv ) {
			return texture2D( tDepth, uv ).x;
		}
		float getViewZ( const in float depth ) {
			#ifdef PERSPECTIVE_CAMERA
				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}
		vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
			vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
			clipPosition *= clipW; //clip
			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;//view
		}
		vec3 getViewNormal( const in vec2 uv ) {
			return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );
		}
		vec2 viewPositionToXY(vec3 viewPosition){
			vec2 xy;
			vec4 clip=cameraProjectionMatrix*vec4(viewPosition,1);
			xy=clip.xy;//clip
			float clipW=clip.w;
			xy/=clipW;//NDC
			xy=(xy+1.)/2.;//uv
			xy*=resolution;//screen
			return xy;
		}
		void main(){
			#ifdef SELECTIVE
				float metalness=texture2D(tMetalness,vUv).r;
				if(metalness==0.) return;
			#endif

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );
			if(-viewZ>=cameraFar) return;

			float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];
			vec3 viewPosition=getViewPosition( vUv, depth, clipW );

			vec2 d0=gl_FragCoord.xy;
			vec2 d1;

			vec3 viewNormal=getViewNormal( vUv );

			#ifdef PERSPECTIVE_CAMERA
				vec3 viewIncidentDir=normalize(viewPosition);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#else
				vec3 viewIncidentDir=vec3(0,0,-1);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#endif

			float maxReflectRayLen=maxDistance/dot(-viewIncidentDir,viewNormal);
			// dot(a,b)==length(a)*length(b)*cos(theta) // https://www.mathsisfun.com/algebra/vectors-dot-product.html
			// if(a.isNormalized&&b.isNormalized) dot(a,b)==cos(theta)
			// maxDistance/maxReflectRayLen=cos(theta)
			// maxDistance/maxReflectRayLen==dot(a,b)
			// maxReflectRayLen==maxDistance/dot(a,b)

			vec3 d1viewPosition=viewPosition+viewReflectDir*maxReflectRayLen;
			#ifdef PERSPECTIVE_CAMERA
				if(d1viewPosition.z>-cameraNear){
					//https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx
					float t=(-cameraNear-viewPosition.z)/viewReflectDir.z;
					d1viewPosition=viewPosition+viewReflectDir*t;
				}
			#endif
			d1=viewPositionToXY(d1viewPosition);

			float totalLen=length(d1-d0);
			float xLen=d1.x-d0.x;
			float yLen=d1.y-d0.y;
			float totalStep=max(abs(xLen),abs(yLen));
			float xSpan=xLen/totalStep;
			float ySpan=yLen/totalStep;
			for(float i=0.;i<float(MAX_STEP);i++){
				if(i>=totalStep) break;
				vec2 xy=vec2(d0.x+i*xSpan,d0.y+i*ySpan);
				if(xy.x<0.||xy.x>resolution.x||xy.y<0.||xy.y>resolution.y) break;
				float s=length(xy-d0)/totalLen;
				vec2 uv=xy/resolution;

				float d = getDepth(uv);
				float vZ = getViewZ( d );
				if(-vZ>=cameraFar) continue;
				float cW = cameraProjectionMatrix[2][3] * vZ+cameraProjectionMatrix[3][3];
				vec3 vP=getViewPosition( uv, d, cW );

				#ifdef PERSPECTIVE_CAMERA
					// https://comp.nus.edu.sg/~lowkl/publications/lowk_persp_interp_techrep.pdf
					float recipVPZ=1./viewPosition.z;
					float viewReflectRayZ=1./(recipVPZ+s*(1./d1viewPosition.z-recipVPZ));
				#else
					float viewReflectRayZ=viewPosition.z+s*(d1viewPosition.z-viewPosition.z);
				#endif

				// if(viewReflectRayZ>vZ) continue; // will cause "npm run make-screenshot webgl_postprocessing_ssr" high probability hang.
				// https://github.com/mrdoob/three.js/pull/21539#issuecomment-821061164
				if(viewReflectRayZ<=vZ){

					bool hit;
					#ifdef INFINITE_THICK
						hit=true;
					#else
						float away=pointToLineDistance(vP,viewPosition,d1viewPosition);

						float minThickness;
						vec2 xyNeighbor=xy;
						xyNeighbor.x+=1.;
						vec2 uvNeighbor=xyNeighbor/resolution;
						vec3 vPNeighbor=getViewPosition(uvNeighbor,d,cW);
						minThickness=vPNeighbor.x-vP.x;
						minThickness*=3.;
						float tk=max(minThickness,thickness);

						hit=away<=tk;
					#endif

					if(hit){
						vec3 vN=getViewNormal( uv );
						if(dot(viewReflectDir,vN)>=0.) continue;
						float distance=pointPlaneDistance(vP,viewPosition,viewNormal);
						if(distance>maxDistance) break;
						float op=opacity;
						#ifdef DISTANCE_ATTENUATION
							float ratio=1.-(distance/maxDistance);
							float attenuation=ratio*ratio;
							op=opacity*attenuation;
						#endif
						#ifdef FRESNEL
							float fresnelCoe=(dot(viewIncidentDir,viewReflectDir)+1.)/2.;
							op*=fresnelCoe;
						#endif
						vec4 reflectColor=texture2D(tDiffuse,uv);
						gl_FragColor.xyz=reflectColor.xyz;
						gl_FragColor.a=op;
						break;
					}
				}
			}
		}
	`},lo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 uv ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, uv ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, uv ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			float d = 1.0 - depth;
			// d=(d-.999)*1000.;
			gl_FragColor = vec4( vec3( d ), 1.0 );

		}

	`},ri={uniforms:{tDiffuse:{value:null},resolution:{value:new he},opacity:{value:.5}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;
		void main() {
			//reverse engineering from PhotoShop blur filter, then change coefficient

			vec2 texelSize = ( 1.0 / resolution );

			vec4 c=texture2D(tDiffuse,vUv);

			vec2 offset;

			offset=(vec2(-1,0))*texelSize;
			vec4 cl=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(1,0))*texelSize;
			vec4 cr=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,-1))*texelSize;
			vec4 cb=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,1))*texelSize;
			vec4 ct=texture2D(tDiffuse,vUv+offset);

			// float coeCenter=.5;
			// float coeSide=.125;
			float coeCenter=.2;
			float coeSide=.2;
			float a=c.a*coeCenter+cl.a*coeSide+cr.a*coeSide+cb.a*coeSide+ct.a*coeSide;
			vec3 rgb=(c.rgb*c.a*coeCenter+cl.rgb*cl.a*coeSide+cr.rgb*cr.a*coeSide+cb.rgb*cb.a*coeSide+ct.rgb*ct.a*coeSide)/a;
			gl_FragColor=vec4(rgb,a);

		}
	`};class Tn extends mi{constructor({renderer:e,scene:t,camera:n,width:i,height:r,selects:o,bouncing:a=!1,groundReflector:l}){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.renderer=e,this.scene=t,this.camera=n,this.groundReflector=l,this.opacity=hn.uniforms.opacity.value,this.output=0,this.maxDistance=hn.uniforms.maxDistance.value,this.thickness=hn.uniforms.thickness.value,this.tempColor=new Re,this._selects=o,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(u){this._selects!==u&&(this._selects=u,Array.isArray(u)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=a,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(u){this._bouncing!==u&&(this._bouncing=u,u?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=hn.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(u){this._distanceAttenuation!==u&&(this._distanceAttenuation=u,this.ssrMaterial.defines.DISTANCE_ATTENUATION=u,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=hn.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(u){this._fresnel!==u&&(this._fresnel=u,this.ssrMaterial.defines.FRESNEL=u,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=hn.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(u){this._infiniteThick!==u&&(this._infiniteThick=u,this.ssrMaterial.defines.INFINITE_THICK=u,this.ssrMaterial.needsUpdate=!0)}});const c=new Ql;c.type=ql,c.minFilter=Ve,c.magFilter=Ve,this.beautyRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve}),this.normalRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve,type:Ts}),this.metalnessRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve}),this.ssrRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),hn===void 0&&console.error("THREE.SSRPass: The pass relies on SSRShader."),this.ssrMaterial=new Mt({defines:Object.assign({},hn.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:mn.clone(hn.uniforms),vertexShader:hn.vertexShader,fragmentShader:hn.fragmentShader,blending:pt}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new dd,this.normalMaterial.blending=pt,this.metalnessOnMaterial=new _n({color:"white"}),this.metalnessOffMaterial=new _n({color:"black"}),this.blurMaterial=new Mt({defines:Object.assign({},ri.defines),uniforms:mn.clone(ri.uniforms),vertexShader:ri.vertexShader,fragmentShader:ri.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new Mt({defines:Object.assign({},ri.defines),uniforms:mn.clone(ri.uniforms),vertexShader:ri.vertexShader,fragmentShader:ri.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Mt({defines:Object.assign({},lo.defines),uniforms:mn.clone(lo.uniforms),vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader,blending:pt}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Mt({uniforms:mn.clone(or.uniforms),vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:So,blendDst:wo,blendEquation:li,blendSrcAlpha:So,blendDstAlpha:wo,blendEquationAlpha:li}),this.fsQuad=new Ls(null),this.originalClearColor=new Re}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this.renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case Tn.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=pt,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=jn,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=jn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case Tn.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=pt,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=jn,this.renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case Tn.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Tn.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Tn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Tn.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=pt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}renderPass(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderMetalness(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.traverseVisible(l=>{l._SSRPassBackupMaterial=l.material,this._selects.includes(l)?l.material=this.metalnessOnMaterial:l.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(l=>{l.material=l._SSRPassBackupMaterial}),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+t*t),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.prevRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.blurRenderTarget2.setSize(e,t),this.ssrMaterial.uniforms.resolution.value.set(e,t),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t),this.blurMaterial2.uniforms.resolution.value.set(e,t)}}Tn.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};const IS={uniforms:{height:{value:0},width:{value:0},random:{value:140},time:{value:50},tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
        varying vec2 vUv;
        uniform float height;
		uniform float width;
        uniform float random;
        uniform float time;
        
        float loopRad = 10.0;
        
        float RGB2Luminosity(in vec3 color) {
            return 0.3*color.r + 0.59*color.g + 0.11*color.b;
        }

        vec2 Gradient(in sampler2D u_tex, in vec2 st, in vec2 stepSize) {
            float Gx = 0.0;
            Gx += RGB2Luminosity(texture(u_tex, st - vec2(stepSize.x, -stepSize.y)).rbg);
            Gx += 2.0 * RGB2Luminosity(texture(u_tex, st - vec2(stepSize.x, 0.0)).rbg);
            Gx += RGB2Luminosity(texture(u_tex, st - vec2(stepSize.x, stepSize.y)).rbg);

            Gx -= RGB2Luminosity(texture(u_tex, st + vec2(stepSize.x, -stepSize.y)).rbg);
            Gx -= 2.0 * RGB2Luminosity(texture(u_tex, st + vec2(stepSize.x, 0.0)).rbg);
            Gx -= RGB2Luminosity(texture(u_tex, st + vec2(stepSize.x, stepSize.y)).rbg);

            float Gy = 0.0;
            Gy -= RGB2Luminosity(texture(u_tex, st - vec2(-stepSize.x, stepSize.y)).rbg);
            Gy -= 2.0 * RGB2Luminosity(texture(u_tex, st - vec2(stepSize.x, stepSize.y)).rbg);
            Gy -= RGB2Luminosity(texture(u_tex, st - vec2(stepSize.x, stepSize.y)).rbg);

            Gy += RGB2Luminosity(texture(u_tex, st + vec2(-stepSize.x, stepSize.y)).rbg);
            Gy += 2.0 * RGB2Luminosity(texture(u_tex, st + vec2(stepSize.x, stepSize.y)).rbg);
            Gy += RGB2Luminosity(texture(u_tex, st + vec2(stepSize.x, stepSize.y)).rbg);
            return vec2(Gx, Gy);
        }


        void main() {
        
            vec2 uv = vUv;
            vec2 kernelStepSize = 1.0 / vec2(width, height);
    

            vec2 grad = Gradient(tDiffuse, uv, kernelStepSize);

            loopRad = 5.0 * random;

            vec2 grad_tan = vec2(-grad.y, grad.x);

            vec2 loopedSample = uv + loopRad * kernelStepSize * grad * 2.0* sin(2.0 * time) + 2.0*loopRad * kernelStepSize *grad_tan * cos(2.0* time);
     
            gl_FragColor = texture2D( tDiffuse, loopedSample);
        
            // vec4 tex = texture2D(tDiffuse, vUv);
            // vec3 col = pow(tex.xyz, vec3(factor));
            // float c = mod(float(vUv.x * height + vUv.y * width), size);
            // vec3 color = clamp(col * size - c, vec3(0.0), vec3(1.0));
            // gl_FragColor = vec4(pow(color, vec3(1.0/factor)), tex.a);
               
        }
    `},NS={uniforms:{height:{value:0},width:{value:0},tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
        varying vec2 vUv;
        uniform float height;
		uniform float width;
        
        const float bands = 6.0;
        
        float rand(vec2 co) {
		    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}

        vec3 getWaterColor(vec3 color) {
            vec3 col = round(color * bands) / bands;
            color = mix(color, length(col) * normalize(color), 0.7);
            return color;
        }

        void main() {
        
            vec2 uv = vUv;
            vec3 col = vec3(0);
            
            vec4 tex = texture2D(tDiffuse, vUv);
            
            vec2 nuv = clamp(uv + (vec2(rand(uv), rand(uv + vec2(131.61, -215.35))) * 2.0 - 1.0) / vec2(width, height) * 2., vec2(0), vec2(1));
            // mixing between grainy and smooth texture
            vec3 t = mix(textureLod(tDiffuse, nuv, 2.0).rgb, textureLod(tDiffuse, uv, 2.0).rgb, 0.5);
            col = getWaterColor(t);

            gl_FragColor = vec4(col, tex.a);
               
        }
    `};class OS{constructor(e,t,n,i,r){Xe(this,"time",0);this.composer=e,this.max=t,this.renderer=n,this.water=new At(IS),this.paint=new At(NS),this.water.uniforms.width.value=innerWidth,this.paint.uniforms.width.value=innerWidth,this.water.uniforms.height.value=innerHeight,this.paint.uniforms.height.value=innerHeight,this.water.uniforms.random.value=Math.random()*200;let o=new Tn({renderer:n,scene:i,camera:r,width:innerWidth,height:innerHeight});o.output=Tn.OUTPUT.Normal,o.opacity=1,this.pass=o}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aK0.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass),this.composer.addPass(this.water),this.composer.addPass(this.paint)}end(){this.composer.removePass(this.pass),this.composer.removePass(this.water),this.composer.removePass(this.paint)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.time+=1,this.water.uniforms.time.value=this.time/this.max)}}const FS={uniforms:{ring1:{value:6},ring2:{value:10},push1:{value:1},push2:{value:1},rand1:{value:.7},rand2:{value:.2},diminish:{value:.05},tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float ring1;
		uniform float ring2;
		uniform float push1;
		uniform float push2;
		uniform float rand1;
		uniform float rand2;
		uniform float diminish;
		
		uniform sampler2D tDiffuse;
		
		varying vec2 vUv;
		
		float rand(vec2 co) {
		    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}
		
		void main() {
		
	        float r1 = rand( floor( vUv.yy * ring1 ) / ring1 * rand1 );
	        float r2 = rand( floor( vUv.yy * ring2 ) / ring2 * rand2 );
	        // float r1 = rand1;
	        // float r2 = rand2;

            r1 = -1.0 + 2.0 * r1;
            r2 = -1.0 + 2.0 * r2;

            r1 *= push1;
            r2 *= push2;

            r1 += r2;
            r1 *= diminish;

            vec4 tex = texture2D(tDiffuse, vUv + vec2(r1,0.0));
            if(vUv.x+r1 > 1.0 || vUv.x + r1 <= 0.0){
                gl_FragColor = vec4(vec3(0.0),0.0);
            } else {
                gl_FragColor = tex;
            }

        }`};class US{constructor(e,t,n){Xe(this,"time",0);this.composer=e,this.max=t,this.fadeTP=n;const i=new At(FS);i.uniforms.push1.value=0,i.uniforms.push2.value=0,i.uniforms.rand1.value=Math.random(),i.uniforms.rand2.value=Math.random(),this.pass=i}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/dClap.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<=this.fadeTP){let t=Ht(this.time/this.fadeTP);this.pass.uniforms.push1.value=t*2,this.pass.uniforms.push2.value=t}else this.time==this.fadeTP+1&&(this.pass.uniforms.push1.value=2,this.pass.uniforms.push2.value=1);this.time+=1}}}const zS={uniforms:{time:{value:0},tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

        #define PI 3.1415926

		uniform float time;
		
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		
		void main() {
		
	        vec2 p = -1.0 + 2.0 * vUv;

            float len = length(p);
            vec2 tex = vUv + (p / len) * cos(len * 12.0 - time * 4.0) * 0.03;
            vec4 col = texture2D(tDiffuse, tex);
            gl_FragColor = col;

        }`};class kS{constructor(e,t){Xe(this,"time",0);this.composer=e,this.max=t;const n=new At(zS);this.pass=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/sPerc.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.pass.uniforms.time.value=2*this.time/this.max,this.time+=1)}}const BS={uniforms:{time:{value:0},height:{value:0},width:{value:0},tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
    
        #define PI 3.1415926

		uniform float height;
		uniform float width;
		uniform float time;
		
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		
		void main() {
		
	        vec2 uv = vUv / 0.5 - 1.0;
	        uv.x *= width / height;
	        
	        float f = 1.0 / length(uv);
	        f += atan(uv.x, uv.y) / acos(0.0);
	        f -= time;
	        f = clamp(sin( f * PI ) * dot(uv, uv) * height / 5.0 + 0.5, 0.0, 1.0);
	        f *= sin(length(uv) + 1.0);
	        // f = step(f, 0.5);
	        
	        vec4 tex = texture2D( tDiffuse, vUv );
	        float alpha = tex.a;
	        
	        
	        gl_FragColor = vec4( f*tex.r, f*tex.g, f*tex.b, alpha*f );
	        
        }`};class HS{constructor(e,t,n,i){Xe(this,"time",0);this.composer=e,this.max=t;const r=new At(BS);r.uniforms.width.value=n,r.uniforms.height.value=i,this.pass=r}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aTom.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.pass.uniforms.time.value=this.time/this.max,this.time+=1)}}const VS={uniforms:{height:{value:0},width:{value:0},kernelX:{value:[3,0,-3,10,0,-10,3,0,-3]},kernelY:{value:[-3,-10,-3,0,0,0,3,10,3]},amount:{value:.1},tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		
		uniform sampler2D tDiffuse;
        varying vec2 vUv;
        uniform float width;
        uniform float height;
        uniform float kernelX[9];
        uniform float kernelY[9];
        uniform float amount;

        void main(){
            float step_w = 1.0/width;
            float step_h = 1.0/height;
            vec2 offset[9];
            float alpha = 0.0;
            offset[0] = vec2(-step_w, -step_h);
            offset[1] = vec2(0.0, -step_h);
            offset[2] = vec2(step_w, -step_h);
            offset[3] = vec2(-step_w, 0.0);
            offset[4] = vec2(0.0, 0.0);
            offset[5] = vec2(step_w, 0.0);
            offset[6] = vec2(-step_w, step_h);
            offset[7] = vec2(0.0, step_h);
            offset[8] = vec2(step_w, step_h);
            vec3 x = vec3(0.0);
            vec3 y = vec3(0.0);
            for (int i = 0; i < 9; i++) {
                x += texture2D(tDiffuse, vUv + offset[i]).rgb * kernelX[i];
                y += texture2D(tDiffuse, vUv + offset[i]).rgb * kernelY[i];
            }
            vec4 tex = texture2D(tDiffuse, vUv);
            vec3 color = sqrt((x*x)+(y*y));
            float r = color.r + tex.r * amount;
            float g = color.g + tex.g * amount;
            float b = color.b + tex.b * amount;
            alpha = tex.a;
            gl_FragColor = vec4(vec3(r, g, b), alpha);
        }
    `};class GS{constructor(e,t,n,i,r){Xe(this,"time",0);this.composer=e,this.max=t,this.fadeTP=r;const o=new At(VS);o.uniforms.width.value=n,o.uniforms.height.value=i,this.pass=o}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aRide.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<=this.fadeTP){let t=Ht(this.time/this.fadeTP);this.pass.uniforms.amount.value=1-t}else this.time==this.fadeTP+1&&(this.pass.uniforms.amount.value=0);this.time+=1}}}const WS={uniforms:{height:{value:0},width:{value:0},size:{value:20},tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
        varying vec2 vUv;
        uniform float height;
		uniform float width;
        uniform float size;
        
        const float factor = 1.2;

        void main() {
            vec4 tex = texture2D(tDiffuse, vUv);
            vec3 col = pow(tex.xyz, vec3(factor));
            float c = mod(float(vUv.x * height + vUv.y * width), size);
            vec3 color = clamp(col * size - c, vec3(0.0), vec3(1.0));
            gl_FragColor = vec4(pow(color, vec3(1.0/factor)), tex.a);
               
        }
    `};class jS{constructor(e,t,n,i){Xe(this,"time",0);this.composer=e,this.max=t,this.size=15;const r=new At(WS);r.uniforms.width.value=n,r.uniforms.height.value=i,this.pass=r}add(e){const t=document.createElement("audio");t.hidden=!0,t.src="./sound/aS2.wav",t.volume=.5,t.play(),this.time=0,this.size=Math.random()*10+10,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<20){let t=Ht(this.time/20);this.pass.uniforms.size.value=this.size+3-t*3}else this.time==10&&(this.pass.uniforms.size.value=this.size);this.time+=1}}}const co={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;

		void main() {

			vUV = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			float dist = radius * 0.66;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height );
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				r = blendColour( r, colour.r, blending );
				g = blendColour( g, colour.g, blending );
				b = blendColour( b, colour.b, blending );

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				gl_FragColor = vec4( r, g, b, 1.0 );

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`};class XS extends mi{constructor(e,t,n){super(),co===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=mn.clone(co.uniforms),this.material=new Mt({uniforms:this.uniforms,fragmentShader:co.fragmentShader,vertexShader:co.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=t;for(const i in n)n.hasOwnProperty(i)&&this.uniforms.hasOwnProperty(i)&&(this.uniforms[i].value=n[i]);this.fsQuad=new Ls(this.material)}render(e,t,n){this.material.uniforms.tDiffuse.value=n.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const mc={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
        varying vec2 vUv;

        void main() {
            vec4 tex = texture2D(tDiffuse, vUv);
            if (tex.r <= 0.1 && tex.g <= 0.1 && tex.b <= 0.1) {
                gl_FragColor = vec4(tex.xyz, 0.0);
            } else {
                gl_FragColor = tex;
            }   
        }
    `};class qS{constructor(e,t,n,i){Xe(this,"time",0);this.composer=e,this.max=t;const r={shape:1,radius:4,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:0,blending:1,blendingMode:1,greyscale:!1,disable:!1};this.mask=new At(mc),this.pass=new XS(n,i,r),this.fadeTP1=20,this.fadeTP2=30}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aPerc.wav",e.volume=.5,e.play(),this.time=0,this.size=Math.random()*10+15,this.composer.addPass(this.pass),this.composer.addPass(this.mask),this.pass.uniforms.shape.value=Math.round(Math.random()*3)+1}end(){this.composer.removePass(this.pass),this.composer.removePass(this.mask)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<=this.fadeTP1){let t=Ht(this.time/this.fadeTP1);this.pass.uniforms.blending.value=t}else this.time==this.fadeTP1+1&&(this.pass.uniforms.blending.value=1);if(this.time<=this.fadeTP2){let t=Ht(this.time/this.fadeTP2)*(this.size-6);this.pass.uniforms.radius.value=t+6}else this.time==this.fadeTP1+1&&(this.pass.uniforms.radius.value=this.size);this.time+=1}}}const $S={uniforms:{tDiffuse:{value:null},tSize:{value:new he(256,256)},center:{value:new he(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}

		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

			float average = ( color.r + color.g + color.b ) / 3.0;

			gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );

		}`};class YS{constructor(e,t,n){Xe(this,"time",0);this.composer=e,this.max=t,this.size=4,this.fadeTP=n;const i=new At($S);i.uniforms.scale.value=this.size,this.p1=i;const r=new At(Td);r.uniforms.amount.value=.0015,this.p2=r}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/sF6.wav",e.volume=.5,e.play(),this.time=0,this.size=2+Math.random(),this.composer.addPass(this.p1),this.composer.addPass(this.p2)}end(){this.composer.removePass(this.p1),this.composer.removePass(this.p2)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<this.fadeTP){let t=Ht(this.time/this.fadeTP);this.p1.uniforms.scale.value=this.size+1-t}else this.time==this.fadeTP&&(this.p1.uniforms.scale.value=this.size);this.time+=1}}}class KS extends mi{constructor(e,t,n,i={}){super(),this.pixelSize=e,this.resolution=new he,this.renderResolution=new he,this.pixelatedMaterial=this.createPixelatedMaterial(),this.normalMaterial=new dd,this.fsQuad=new Ls(this.pixelatedMaterial),this.scene=t,this.camera=n,this.normalEdgeStrength=i.normalEdgeStrength||.3,this.depthEdgeStrength=i.depthEdgeStrength||.4,this.beautyRenderTarget=new wt,this.beautyRenderTarget.texture.minFilter=Ve,this.beautyRenderTarget.texture.magFilter=Ve,this.beautyRenderTarget.depthTexture=new Ql,this.normalRenderTarget=new wt,this.normalRenderTarget.texture.minFilter=Ve,this.normalRenderTarget.texture.magFilter=Ve}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this.normalMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.resolution.set(e,t),this.renderResolution.set(e/this.pixelSize|0,t/this.pixelSize|0);const{x:n,y:i}=this.renderResolution;this.beautyRenderTarget.setSize(n,i),this.normalRenderTarget.setSize(n,i),this.fsQuad.material.uniforms.resolution.value.set(n,i,1/n,1/i)}setPixelSize(e){this.pixelSize=e,this.setSize(this.resolution.x,this.resolution.y)}render(e,t){const n=this.fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera);const i=this.scene.overrideMaterial;e.setRenderTarget(this.normalRenderTarget),this.scene.overrideMaterial=this.normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=i,n.tDiffuse.value=this.beautyRenderTarget.texture,n.tDepth.value=this.beautyRenderTarget.depthTexture,n.tNormal.value=this.normalRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this.fsQuad.render(e)}createPixelatedMaterial(){return new Mt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new tt(this.renderResolution.x,this.renderResolution.y,1/this.renderResolution.x,1/this.renderResolution.y)},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}}class ZS{constructor(e,t,n,i,r){Xe(this,"time",0);this.composer=e,this.max=t,this.pass=new KS(32,n,i),this.fadeTP=r}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/cCrash.wav",e.volume=.5,e.play(),this.time=0,this.size=Math.random()*16+32,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<this.fadeTP){let t=Ht(this.time/this.fadeTP)*this.fadeTP;this.pass.pixelSize=Math.floor(t)}else this.time==this.fadeTP&&(this.pass.pixelSize=this.size);this.time+=1}}}const Bh={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class JS extends mi{constructor(e=.96){super(),Bh===void 0&&console.error("THREE.AfterimagePass relies on AfterimageShader"),this.shader=Bh,this.uniforms=mn.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new wt(window.innerWidth,window.innerHeight,{magFilter:Ve}),this.textureOld=new wt(window.innerWidth,window.innerHeight,{magFilter:Ve}),this.compFsMaterial=new Mt({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Ls(this.compFsMaterial),this.copyFsMaterial=new _n,this.copyFsQuad=new Ls(this.copyFsMaterial)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}class QS{constructor(e,t){Xe(this,"time",0);this.composer=e,this.max=t,this.mask=new At(mc),this.pass=new JS}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aT1.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass),this.composer.addPass(this.mask)}end(){this.composer.removePass(this.pass),this.composer.removePass(this.mask)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):this.time+=1}}const ew={uniforms:{amount:{value:.3},speed:{value:.005},iTime:{value:0},tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

        uniform float amount;
        uniform float speed;
        uniform float iTime;

		uniform sampler2D tDiffuse;
        varying vec2 vUv;

        //2D (returns 0 - 1)
        float random2d(vec2 n) { 
            return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float randomRange (in vec2 seed, in float min, in float max) {
            return min + random2d(seed) * (max - min);
        }

        // return 1 if v inside 1d range
        float insideRange(float v, float bottom, float top) {
           return step(bottom, v) - step(top, v);
        }

        //inputs
        // float AMT = 0.2; //0 - 1 glitch amount
        // float SPEED = 0.6; //0 - 1 speed


        void main() {
            float time = floor(iTime * speed * 60.0);    
            vec2 uv = vUv;
        
            //copy orig
            vec3 outCol = texture(tDiffuse, uv).rgb;
        
            //randomly offset slices horizontally
            float maxOffset = amount/2.0;
            for (float i = 0.0; i < 10.0 * amount; i += 1.0) {
                float sliceY = random2d(vec2(time , 2345.0 + float(i)));
                float sliceH = random2d(vec2(time , 9035.0 + float(i))) * 0.25;
                float hOffset = randomRange(vec2(time , 9625.0 + float(i)), -maxOffset, maxOffset);
                vec2 uvOff = uv;
                uvOff.x += hOffset;
                if (insideRange(uv.y, sliceY, fract(sliceY+sliceH)) == 1.0 ){
                    outCol = texture(tDiffuse, uvOff).rgb;
                }
            }
        
            //do slight offset on one entire channel
            float maxColOffset = amount/6.0;
            float rnd = random2d(vec2(time , 9545.0));
            vec2 colOffset = vec2(randomRange(vec2(time , 9545.0),-maxColOffset,maxColOffset), 
                               randomRange(vec2(time , 7205.0),-maxColOffset,maxColOffset));
            if (rnd < 0.33) {
                outCol.r = texture(tDiffuse, uv + colOffset).r;
            } else if (rnd < 0.66) {
                outCol.g = texture(tDiffuse, uv + colOffset).g;
            } else{
                outCol.b = texture(tDiffuse, uv + colOffset).b;  
            }
           
            gl_FragColor = vec4(outCol,1.0);

        }
    `};class tw{constructor(e,t){Xe(this,"time",0);this.composer=e,this.max=t,this.pass=new At(ew),this.mask=new At(mc)}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/dF5.wav",e.volume=.5,e.play(),this.time=0,this.pass.uniforms.amount.value=Math.random()*.1+.2,this.composer.addPass(this.pass),this.composer.addPass(this.mask)}end(){this.composer.removePass(this.pass),this.composer.removePass(this.mask)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.pass.uniforms.iTime.value=this.time,this.time+=1)}}class nw{constructor(e,t,n){Xe(this,"time",0);Xe(this,"mesh");Xe(this,"start");Xe(this,"direction");this.max=t,this.scene=e,this.color=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/cRide.wav",e.volume=.5,e.play();let t=Math.random()*.5+1.4,n=new Vo(t,t,Math.random()*.1+.1,Math.floor(Math.random()*5)+4,1,!0,0,Math.PI*2),i=new dn({color:this.color[Math.floor(Math.random()*this.color.length)],emissive:468276,side:xn,flatShading:!0});this.direction=this.getFactor(Math.floor(Math.random()*4)),this.start=Math.random()*20-10,console.log(this.direction),this.mesh=new mt(n,i),this.mesh.rotation.x=(90+this.start*this.direction.x)*Math.PI/180,this.mesh.rotation.y=Math.random()*180*Math.PI/180,this.mesh.rotation.z=this.start*this.direction.z*Math.PI/180,this.scene.add(this.mesh)}end(){this.scene.remove(this.mesh)}getFactor(e){switch(e){case 0:return{x:-1,z:0};case 1:return{x:1,z:0};case 2:return{x:0,z:-1};case 3:return{x:0,z:1}}}setColor(e){this.color=e}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{let t=Ht(this.time/this.max),n=this.start+t*180;this.mesh.rotation.x=(90+n*this.direction.x)*Math.PI/180,this.mesh.rotation.z=n*this.direction.z*Math.PI/180,this.time+=1}}}class iw{constructor(e,t,n){Xe(this,"time",0);Xe(this,"start",-3.2);Xe(this,"group",new Vn);this.max=t,this.scene=e,this.color=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/sF7.wav",e.volume=.5,e.play(),this.group=new Vn;let t=this.start,n=Math.random()*.7+1.6;for(let i=0;i<Math.random()*10+10;i++)t-=.3,this.group.add(this.newRing(t,n,i%3==0));console.log(this.group),this.scene.add(this.group)}newRing(e,t,n){let i=Math.floor(Math.random()*6)+5,r,o;n?(r=0,o=Math.PI*2):(r=Math.random()*Math.PI,o=r+Math.random()*Math.PI);let a=new Vo(t,t,Math.random()*.3+.1,i,1,!0,r,o),l=new dn({color:this.color[Math.floor(Math.random()*this.color.length)],emissive:468276,side:xn,flatShading:!0}),c=new mt(a,l);return c.position.y=e,c.rotation.y=Math.random()*180*Math.PI/180,c}end(){this.scene.remove(this.group)}setColor(e){this.color=e}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.group.position.setY(Ht(this.time/this.max)*(6.4+this.group.children.length*.3)),this.time+=1)}}const Hh=new pi,uo=new D;class Ed extends PM{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ot(e,3)),this.setAttribute("uv",new ot(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new xl(t,6,1);return this.setAttribute("instanceStart",new Gn(n,3,0)),this.setAttribute("instanceEnd",new Gn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new xl(t,6,1);return this.setAttribute("instanceColorStart",new Gn(n,3,0)),this.setAttribute("instanceColorEnd",new Gn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new fd(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Hh.setFromBufferAttribute(t),this.boundingBox.union(Hh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)uo.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(uo)),uo.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(uo));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class sw extends Ed{constructor(e){super(),this.isWireframeGeometry2=!0,this.type="WireframeGeometry2",this.fromWireframeGeometry(new fd(e))}}ve.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new he(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Wt.line={uniforms:mn.merge([ve.common,ve.fog,ve.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ad extends Mt{constructor(e){super({type:"LineMaterial",uniforms:mn.clone(Wt.line.uniforms),vertexShader:Wt.line.vertexShader,fragmentShader:Wt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Vh=new D,Gh=new D;class rw extends mt{constructor(e=new Ed,t=new Ad({color:Math.random()*16777215})){super(e,t),this.isWireframe=!0,this.type="Wireframe"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Vh.fromBufferAttribute(t,o),Gh.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Vh.distanceTo(Gh);const r=new xl(i,2,1);return e.setAttribute("instanceDistanceStart",new Gn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Gn(r,1,1)),this}}class ow{constructor(e,t,n){Xe(this,"time",0);Xe(this,"mesh");Xe(this,"start");Xe(this,"direction");this.max=t,this.scene=e,this.color=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aT3.wav",e.volume=.5,e.play();let t=Math.random()*.7+1.3,n=this.choosePolyhedron(t),i=new sw(n),r=new Ad({color:this.color[Math.floor(Math.random()*this.color.length)],linewidth:Math.random()*.003+.001,dashed:!1});this.mesh=new rw(i,r),console.log(this.mesh),this.mesh.computeLineDistances(),this.mesh.scale.set(1,1,1),this.direction=this.getFactor(Math.floor(Math.random()*4)),this.start=Math.random()*20-10,this.mesh.rotation.x=(90+this.start*this.direction.x)*Math.PI/180,this.mesh.rotation.y=Math.random()*180*Math.PI/180,this.mesh.rotation.z=this.start*this.direction.z*Math.PI/180,this.scene.add(this.mesh)}choosePolyhedron(e){switch(Math.floor(Math.random()*9)){case 0:return new Ao(e,0);case 1:return new Ao(e,1);case 2:return new _r(e,0);case 3:return new _r(e,1);case 4:return new oc(e,0);case 5:return new ds(e,0);case 6:return new ds(e,1);case 7:return new ds(e,2);case 8:return new ds(e,3)}}getFactor(e){switch(e){case 0:return{x:-1,z:0};case 1:return{x:1,z:0};case 2:return{x:0,z:-1};case 3:return{x:0,z:1}}}end(){this.scene.remove(this.mesh)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{let t=Ht(this.time/this.max),n=this.start+t*90;this.mesh.rotation.x=(90+n*this.direction.x)*Math.PI/180,this.mesh.rotation.z=n*this.direction.z*Math.PI/180,this.time+=1}}}class aw{constructor(e,t,n){Xe(this,"time",0);Xe(this,"cubes",[]);this.max=t,this.scene=e,this.color=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aRimshot.wav",e.volume=.5,e.play();for(let t=0;t<Math.random()*2+4;t++){let n=this.newSquare(Math.random()*.8);this.cubes.push(n),this.scene.add(n)}}newSquare(e){let t=new Os(e,e,e),n=[new dn({color:16777215}),new dn({color:16746806}),new dn({color:16777215}),new dn({color:15778361}),new dn({color:15778361}),new dn({color:16777215})],i=new mt(t,n);return i.position.set((Math.random()+.7)*(Math.random()<.5?-1:1),(Math.random()+.7)*(Math.random()<.5?-1:1),Math.random()*2-1),i.rotation.x=Math.random()*360*Math.PI/180,i.rotation.y=Math.random()*360*Math.PI/180,i.rotation.z=0,i}end(){for(let e=0;e<this.cubes.length;e++)this.scene.remove(this.cubes[e]);this.cubes=[]}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{let t=Ht(this.time/this.max)*45;for(let n=0;n<this.cubes.length;n++)this.cubes[n].rotation.z=t*Math.PI/180;this.time+=1}}}class lw extends ac{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class cw extends Bs{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new cc(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new uw(e)}}class uw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=hw(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function hw(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=fw(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function fw(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new BM;let a,l,c,u,h,f,p,g;if(r.o){const m=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,v=m.length;d<v;)switch(m[d++]){case"m":a=m[d++]*e+t,l=m[d++]*e+n,o.moveTo(a,l);break;case"l":a=m[d++]*e+t,l=m[d++]*e+n,o.lineTo(a,l);break;case"q":c=m[d++]*e+t,u=m[d++]*e+n,h=m[d++]*e+t,f=m[d++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=m[d++]*e+t,u=m[d++]*e+n,h=m[d++]*e+t,f=m[d++]*e+n,p=m[d++]*e+t,g=m[d++]*e+n,o.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:r.ha*e,path:o}}class dw{constructor(e,t,n){Xe(this,"font");Xe(this,"time",0);Xe(this,"chars",[]);this.max=t,this.scene=e,this.color=n,this.characters="\u30A2\u30A1\u30AB\u30B5\u30BF\u30CA\u30CF\u30DE\u30E4\u30E3\u30E9\u30EF\u30AC\u30B6\u30C0\u30D0\u30D1\u30A4\u30A3\u30AD\u30B7\u30C1\u30CB\u30D2\u30DF\u30EA\u30F0\u30AE\u30B8\u30C2\u30D3\u30D4\u30A6\u30A5\u30AF\u30B9\u30C4\u30CC\u30D5\u30E0\u30E6\u30E5\u30EB\u30B0\u30BA\u30D6\u30C5\u30D7\u30A8\u30A7\u30B1\u30BB\u30C6\u30CD\u30D8\u30E1\u30EC\u30F1\u30B2\u30BC\u30C7\u30D9\u30DA\u30AA\u30A9\u30B3\u30BD\u30C8\u30CE\u30DB\u30E2\u30E8\u30E7\u30ED\u30F2\u30B4\u30BE\u30C9\u30DC\u30DD\u30F4\u30C3\u30F3",this.characters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";const i=new cw;let r=this;i.load("./sk.json",function(o){r.font=o})}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/hPerc.wav",e.volume=.5,e.play();let t=2,n=Math.random()*3+2,i=4/(n+1);for(let r=0;r<n;r++){t-=i;let o=Math.random()*.1+.3,a=Math.random()*2-1,l=t;l+=Math.random()-.5;let u=(Math.random()*3+1)*(o+.01),h=Math.random()*(4-u)-2;for(let f=0;f<Math.random()*3+1;f++){let p=this.characters.charAt(Math.floor(Math.random()*this.characters.length)),g=this.newCharacter(p,o,h,l,a);this.chars.push(g),this.scene.add(g),h+=o+.01}}}newCharacter(e,t,n,i,r){let o=new lw(e,{font:this.font,size:t,height:t/5});o.computeBoundingBox();let a=[new dn({color:16777215}),new dn({color:1401481}),new dn({color:15778361})],l=new mt(o,a);return l.position.set(n,i,r),l.rotation.z=0,l}end(){for(let e=0;e<this.chars.length;e++)this.scene.remove(this.chars[e]);this.chars=[]}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{let t=Ht(this.time/this.max)*45;for(let n=0;n<this.chars.length;n++)this.chars[n].position.z=t*Math.PI/180;this.time+=1}}}function cs(s,e){let t;new yd().load(s,function(i){t=i.scene.children[0],t.position.y=-1,e(t)})}class pw{constructor(e,t,n,i,r){Xe(this,"time",0);Xe(this,"max",200);this.scene=e,this.model=t,this.models=n,this.bg=i,this.bgc=r}change(){const e=document.createElement("audio");return e.hidden=!0,e.src="./sound/fFlute.wav",e.volume=.5,e.play(),this.old=this.model,this.new=this.select(),this.new.position.y=-4,this.scene.add(this.new),this.new}select(){let e=this.models[Math.floor(Math.random()*this.models.length)];return e==this.model?this.select():e}animate(e){if(this.time==this.max){this.scene.remove(this.old),this.time=0;let t=this.models.indexOf(this.new);this.bg.style.backgroundColor=this.bgc[t],e()}else{let t=Ht(this.time/this.max)*4;this.old.position.y=t,this.new.position.y=t-5,this.time+=1}}}const mw=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t},gc=s=>(Up("data-v-35c308fb"),s=s(),zp(),s),gw=gc(()=>Sr("div",{id:"background",style:{"background-color":"#1a1a1a"}},null,-1)),vw=gc(()=>Sr("div",{id:"three-canvas"},null,-1)),xw=gc(()=>Sr("audio",{controls:"controls",id:"beats",hidden:"",src:"./flip.mp3",loop:""},null,-1)),_w={__name:"App",setup(s){let e,t,n,i,r,o,a=[],l,c=!1,u=[],h=[];function f(){let g=document.getElementById("background");console.log(g),Dh();let m=Dh();e=m.scene,t=m.camera,n=m.renderer,i=new dc,r=new CS(n),r.addPass(new PS(e,t));const d=new RS(r,50),v=new DS(r,50,.025,30),S=new OS(r,50,n,e,t),_=new US(r,50,15),y=new kS(r,100),M=new HS(r,100,innerWidth,innerHeight),L=new GS(r,100,innerWidth,innerHeight,30),I=new jS(r,100,innerWidth,innerHeight),x=new qS(r,100,innerWidth,innerHeight,Math.random()*6+6),C=new YS(r,50,20),R=new ZS(r,100,e,t,50),V=new QS(r,100),ae=new tw(r,100);let B=[1401481,13229346,15554358,15908421,12643287];const O=new nw(e,100,B),$=new iw(e,150,B),ee=new ow(e,100,B),ne=new aw(e,100,B),j=new dw(e,100,B);function Z(ue){ue.end(),ue.add(),u.push(ue)}let fe=document.getElementById("beats");document.onclick=function(ue){c?(fe.pause(),c=!1):(fe.play(),c=!0)},document.onkeypress=function(ue){switch(console.log(ue.keyCode),ue.keyCode){case 81:Z(d);break;case 113:Z(d);break;case 87:Z(v);break;case 119:Z(v);break;case 69:Z(_);break;case 101:Z(_);break;case 82:Z(L);break;case 114:Z(L);break;case 84:Z(S);break;case 116:Z(S);break;case 65:Z(I);break;case 97:Z(I);break;case 83:Z(x);break;case 115:Z(x);break;case 68:Z(R);break;case 100:Z(R);break;case 70:Z(V);break;case 102:Z(V);break;case 90:Z(ae);break;case 122:Z(ae);break;case 88:Z(y);break;case 120:Z(y);break;case 67:Z(M);break;case 99:Z(M);break;case 86:Z(C);break;case 118:Z(C);break;case 80:Z(O);break;case 112:Z(O);break;case 79:Z($);break;case 111:Z($);break;case 76:Z(ee);break;case 108:Z(ee);break;case 73:Z(ne);break;case 105:Z(ne);break;case 75:Z(j);break;case 107:Z(j);break;case 32:let J=new pw(e,o,a,g,h);o=J.change(),console.log(o),u.push(J);break}};let X={Log:K};i.add(X,"Log");function K(){console.log(t)}new _d,new lt(e,i),new mt(new _r(.5,8),new _n({color:"cyan"})).position.set(1.2,0,1),new yd().load("./eevee.gltf",function(ue){l=ue.scene.children[2],l.position.y=-1,o=l,a.push(l),h.push("#1a1a1a"),console.log(o),e.add(o),p()},function(ue){console.log(ue.loaded/ue.total*100+"% loaded")},function(ue){console.log("An error happened")}),cs("./vaporeon.gltf",function(ue){a.push(ue),h.push("#2b3c74")}),cs("./charmander.gltf",function(ue){a.push(ue),h.push("#2c110b")}),cs("./pickachu.gltf",function(ue){a.push(ue),h.push("#a78e44")}),cs("./squirtle.gltf",function(ue){a.push(ue),h.push("#54a296")}),cs("./meowth.gltf",function(ue){a.push(ue),h.push("#818fa9")}),cs("./vulpix.gltf",function(ue){a.push(ue),h.push("#a98175")})}function p(){const g=Date.now();o.position.y=Math.cos(g/120)*.1-1,o.rotation.z+=.01;for(let m=0;m<u.length;m++)u[m].animate(function(){u=u.filter(function(d){return d!=u[m]})});r.render(),requestAnimationFrame(p)}return Bl(()=>{f(),window.onresize=function(){location.reload()}}),(g,m)=>(Tm(),Cm(fn,null,[gw,vw,xw],64))}},yw=mw(_w,[["__scopeId","data-v-35c308fb"]]);dg(yw).mount("#app");
