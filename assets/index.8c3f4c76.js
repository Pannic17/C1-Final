var wd=Object.defineProperty;var Td=(s,e,t)=>e in s?wd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var je=(s,e,t)=>(Td(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ml(s,e){const t=Object.create(null),n=s.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function gl(s){if(Oe(s)){const e={};for(let t=0;t<s.length;t++){const n=s[t],i=Et(n)?Ld(n):gl(n);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Et(s))return s;if(ht(s))return s}}const Ed=/;(?![^(]*\))/g,Ad=/:([^]+)/,Cd=/\/\*.*?\*\//gs;function Ld(s){const e={};return s.replace(Cd,"").split(Ed).forEach(t=>{if(t){const n=t.split(Ad);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function vl(s){let e="";if(Et(s))e=s;else if(Oe(s))for(let t=0;t<s.length;t++){const n=vl(s[t]);n&&(e+=n+" ")}else if(ht(s))for(const t in s)s[t]&&(e+=t+" ");return e.trim()}const Pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rd=ml(Pd);function Fh(s){return!!s||s===""}const it={},Ks=[],xn=()=>{},Dd=()=>!1,Id=/^on[^a-z]/,wo=s=>Id.test(s),xl=s=>s.startsWith("onUpdate:"),Dt=Object.assign,_l=(s,e)=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)},Nd=Object.prototype.hasOwnProperty,Xe=(s,e)=>Nd.call(s,e),Oe=Array.isArray,Js=s=>To(s)==="[object Map]",Fd=s=>To(s)==="[object Set]",ke=s=>typeof s=="function",Et=s=>typeof s=="string",yl=s=>typeof s=="symbol",ht=s=>s!==null&&typeof s=="object",Oh=s=>ht(s)&&ke(s.then)&&ke(s.catch),Od=Object.prototype.toString,To=s=>Od.call(s),Ud=s=>To(s).slice(8,-1),zd=s=>To(s)==="[object Object]",bl=s=>Et(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,oo=ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=s=>{const e=Object.create(null);return t=>e[t]||(e[t]=s(t))},Bd=/-(\w)/g,gs=Eo(s=>s.replace(Bd,(e,t)=>t?t.toUpperCase():"")),kd=/\B([A-Z])/g,As=Eo(s=>s.replace(kd,"-$1").toLowerCase()),Uh=Eo(s=>s.charAt(0).toUpperCase()+s.slice(1)),Go=Eo(s=>s?`on${Uh(s)}`:""),mo=(s,e)=>!Object.is(s,e),Wo=(s,e)=>{for(let t=0;t<s.length;t++)s[t](e)},go=(s,e,t)=>{Object.defineProperty(s,e,{configurable:!0,enumerable:!1,value:t})},zh=s=>{const e=parseFloat(s);return isNaN(e)?s:e};let dc;const Vd=()=>dc||(dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yn;class Hd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=yn,!e&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){yn=this}off(){yn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Gd(s,e=yn){e&&e.active&&e.effects.push(s)}const Ml=s=>{const e=new Set(s);return e.w=0,e.n=0,e},Bh=s=>(s.w&hi)>0,kh=s=>(s.n&hi)>0,Wd=({deps:s})=>{if(s.length)for(let e=0;e<s.length;e++)s[e].w|=hi},jd=s=>{const{deps:e}=s;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Bh(i)&&!kh(i)?i.delete(s):e[t++]=i,i.w&=~hi,i.n&=~hi}e.length=t}},za=new WeakMap;let qs=0,hi=1;const Ba=30;let dn;const Ii=Symbol(""),ka=Symbol("");class Sl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Gd(this,n)}run(){if(!this.active)return this.fn();let e=dn,t=li;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dn,dn=this,li=!0,hi=1<<++qs,qs<=Ba?Wd(this):pc(this),this.fn()}finally{qs<=Ba&&jd(this),hi=1<<--qs,dn=this.parent,li=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dn===this?this.deferStop=!0:this.active&&(pc(this),this.onStop&&this.onStop(),this.active=!1)}}function pc(s){const{deps:e}=s;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(s);e.length=0}}let li=!0;const Vh=[];function Cs(){Vh.push(li),li=!1}function Ls(){const s=Vh.pop();li=s===void 0?!0:s}function Kt(s,e,t){if(li&&dn){let n=za.get(s);n||za.set(s,n=new Map);let i=n.get(t);i||n.set(t,i=Ml()),Hh(i)}}function Hh(s,e){let t=!1;qs<=Ba?kh(s)||(s.n|=hi,t=!Bh(s)):t=!s.has(dn),t&&(s.add(dn),dn.deps.push(s))}function jn(s,e,t,n,i,r){const o=za.get(s);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Oe(s)){const l=zh(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Oe(s)?bl(t)&&a.push(o.get("length")):(a.push(o.get(Ii)),Js(s)&&a.push(o.get(ka)));break;case"delete":Oe(s)||(a.push(o.get(Ii)),Js(s)&&a.push(o.get(ka)));break;case"set":Js(s)&&a.push(o.get(Ii));break}if(a.length===1)a[0]&&Va(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Va(Ml(l))}}function Va(s,e){const t=Oe(s)?s:[...s];for(const n of t)n.computed&&mc(n);for(const n of t)n.computed||mc(n)}function mc(s,e){(s!==dn||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const Xd=ml("__proto__,__v_isRef,__isVue"),Gh=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(yl)),qd=wl(),$d=wl(!1,!0),Yd=wl(!0),gc=Kd();function Kd(){const s={};return["includes","indexOf","lastIndexOf"].forEach(e=>{s[e]=function(...t){const n=Je(this);for(let r=0,o=this.length;r<o;r++)Kt(n,"get",r+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(Je)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{s[e]=function(...t){Cs();const n=Je(this)[e].apply(this,t);return Ls(),n}}),s}function wl(s=!1,e=!1){return function(n,i,r){if(i==="__v_isReactive")return!s;if(i==="__v_isReadonly")return s;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(s?e?fp:$h:e?qh:Xh).get(n))return n;const o=Oe(n);if(!s&&o&&Xe(gc,i))return Reflect.get(gc,i,r);const a=Reflect.get(n,i,r);return(yl(i)?Gh.has(i):Xd(i))||(s||Kt(n,"get",i),e)?a:Bt(a)?o&&bl(i)?a:a.value:ht(a)?s?Yh(a):Al(a):a}}const Jd=Wh(),Zd=Wh(!0);function Wh(s=!1){return function(t,n,i,r){let o=t[n];if(sr(o)&&Bt(o)&&!Bt(i))return!1;if(!s&&(!Ha(i)&&!sr(i)&&(o=Je(o),i=Je(i)),!Oe(t)&&Bt(o)&&!Bt(i)))return o.value=i,!0;const a=Oe(t)&&bl(n)?Number(n)<t.length:Xe(t,n),l=Reflect.set(t,n,i,r);return t===Je(r)&&(a?mo(i,o)&&jn(t,"set",n,i):jn(t,"add",n,i)),l}}function Qd(s,e){const t=Xe(s,e);s[e];const n=Reflect.deleteProperty(s,e);return n&&t&&jn(s,"delete",e,void 0),n}function ep(s,e){const t=Reflect.has(s,e);return(!yl(e)||!Gh.has(e))&&Kt(s,"has",e),t}function tp(s){return Kt(s,"iterate",Oe(s)?"length":Ii),Reflect.ownKeys(s)}const jh={get:qd,set:Jd,deleteProperty:Qd,has:ep,ownKeys:tp},np={get:Yd,set(s,e){return!0},deleteProperty(s,e){return!0}},ip=Dt({},jh,{get:$d,set:Zd}),Tl=s=>s,Ao=s=>Reflect.getPrototypeOf(s);function Sr(s,e,t=!1,n=!1){s=s.__v_raw;const i=Je(s),r=Je(e);t||(e!==r&&Kt(i,"get",e),Kt(i,"get",r));const{has:o}=Ao(i),a=n?Tl:t?Pl:Ll;if(o.call(i,e))return a(s.get(e));if(o.call(i,r))return a(s.get(r));s!==i&&s.get(e)}function wr(s,e=!1){const t=this.__v_raw,n=Je(t),i=Je(s);return e||(s!==i&&Kt(n,"has",s),Kt(n,"has",i)),s===i?t.has(s):t.has(s)||t.has(i)}function Tr(s,e=!1){return s=s.__v_raw,!e&&Kt(Je(s),"iterate",Ii),Reflect.get(s,"size",s)}function vc(s){s=Je(s);const e=Je(this);return Ao(e).has.call(e,s)||(e.add(s),jn(e,"add",s,s)),this}function xc(s,e){e=Je(e);const t=Je(this),{has:n,get:i}=Ao(t);let r=n.call(t,s);r||(s=Je(s),r=n.call(t,s));const o=i.call(t,s);return t.set(s,e),r?mo(e,o)&&jn(t,"set",s,e):jn(t,"add",s,e),this}function _c(s){const e=Je(this),{has:t,get:n}=Ao(e);let i=t.call(e,s);i||(s=Je(s),i=t.call(e,s)),n&&n.call(e,s);const r=e.delete(s);return i&&jn(e,"delete",s,void 0),r}function yc(){const s=Je(this),e=s.size!==0,t=s.clear();return e&&jn(s,"clear",void 0,void 0),t}function Er(s,e){return function(n,i){const r=this,o=r.__v_raw,a=Je(o),l=e?Tl:s?Pl:Ll;return!s&&Kt(a,"iterate",Ii),o.forEach((c,u)=>n.call(i,l(c),l(u),r))}}function Ar(s,e,t){return function(...n){const i=this.__v_raw,r=Je(i),o=Js(r),a=s==="entries"||s===Symbol.iterator&&o,l=s==="keys"&&o,c=i[s](...n),u=t?Tl:e?Pl:Ll;return!e&&Kt(r,"iterate",l?ka:Ii),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function qn(s){return function(...e){return s==="delete"?!1:this}}function sp(){const s={get(r){return Sr(this,r)},get size(){return Tr(this)},has:wr,add:vc,set:xc,delete:_c,clear:yc,forEach:Er(!1,!1)},e={get(r){return Sr(this,r,!1,!0)},get size(){return Tr(this)},has:wr,add:vc,set:xc,delete:_c,clear:yc,forEach:Er(!1,!0)},t={get(r){return Sr(this,r,!0)},get size(){return Tr(this,!0)},has(r){return wr.call(this,r,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:Er(!0,!1)},n={get(r){return Sr(this,r,!0,!0)},get size(){return Tr(this,!0)},has(r){return wr.call(this,r,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=Ar(r,!1,!1),t[r]=Ar(r,!0,!1),e[r]=Ar(r,!1,!0),n[r]=Ar(r,!0,!0)}),[s,t,e,n]}const[rp,op,ap,lp]=sp();function El(s,e){const t=e?s?lp:ap:s?op:rp;return(n,i,r)=>i==="__v_isReactive"?!s:i==="__v_isReadonly"?s:i==="__v_raw"?n:Reflect.get(Xe(t,i)&&i in n?t:n,i,r)}const cp={get:El(!1,!1)},up={get:El(!1,!0)},hp={get:El(!0,!1)},Xh=new WeakMap,qh=new WeakMap,$h=new WeakMap,fp=new WeakMap;function dp(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pp(s){return s.__v_skip||!Object.isExtensible(s)?0:dp(Ud(s))}function Al(s){return sr(s)?s:Cl(s,!1,jh,cp,Xh)}function mp(s){return Cl(s,!1,ip,up,qh)}function Yh(s){return Cl(s,!0,np,hp,$h)}function Cl(s,e,t,n,i){if(!ht(s)||s.__v_raw&&!(e&&s.__v_isReactive))return s;const r=i.get(s);if(r)return r;const o=pp(s);if(o===0)return s;const a=new Proxy(s,o===2?n:t);return i.set(s,a),a}function hs(s){return sr(s)?hs(s.__v_raw):!!(s&&s.__v_isReactive)}function sr(s){return!!(s&&s.__v_isReadonly)}function Ha(s){return!!(s&&s.__v_isShallow)}function Kh(s){return hs(s)||sr(s)}function Je(s){const e=s&&s.__v_raw;return e?Je(e):s}function Jh(s){return go(s,"__v_skip",!0),s}const Ll=s=>ht(s)?Al(s):s,Pl=s=>ht(s)?Yh(s):s;function gp(s){li&&dn&&(s=Je(s),Hh(s.dep||(s.dep=Ml())))}function vp(s,e){s=Je(s),s.dep&&Va(s.dep)}function Bt(s){return!!(s&&s.__v_isRef===!0)}function xp(s){return Bt(s)?s.value:s}const _p={get:(s,e,t)=>xp(Reflect.get(s,e,t)),set:(s,e,t,n)=>{const i=s[e];return Bt(i)&&!Bt(t)?(i.value=t,!0):Reflect.set(s,e,t,n)}};function Zh(s){return hs(s)?s:new Proxy(s,_p)}var Qh;class yp{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Qh]=!1,this._dirty=!0,this.effect=new Sl(e,()=>{this._dirty||(this._dirty=!0,vp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=Je(this);return gp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qh="__v_isReadonly";function bp(s,e,t=!1){let n,i;const r=ke(s);return r?(n=s,i=xn):(n=s.get,i=s.set),new yp(n,i,r||!i,t)}function ci(s,e,t,n){let i;try{i=n?s(...n):s()}catch(r){Co(r,e,t)}return i}function sn(s,e,t,n){if(ke(s)){const r=ci(s,e,t,n);return r&&Oh(r)&&r.catch(o=>{Co(o,e,t)}),r}const i=[];for(let r=0;r<s.length;r++)i.push(sn(s[r],e,t,n));return i}function Co(s,e,t,n=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](s,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ci(l,null,10,[s,o,a]);return}}Mp(s,t,i,n)}function Mp(s,e,t,n=!0){console.error(s)}let rr=!1,Ga=!1;const Rt=[];let Tn=0;const fs=[];let Un=null,Ci=0;const ef=Promise.resolve();let Rl=null;function Sp(s){const e=Rl||ef;return s?e.then(this?s.bind(this):s):e}function wp(s){let e=Tn+1,t=Rt.length;for(;e<t;){const n=e+t>>>1;or(Rt[n])<s?e=n+1:t=n}return e}function Dl(s){(!Rt.length||!Rt.includes(s,rr&&s.allowRecurse?Tn+1:Tn))&&(s.id==null?Rt.push(s):Rt.splice(wp(s.id),0,s),tf())}function tf(){!rr&&!Ga&&(Ga=!0,Rl=ef.then(sf))}function Tp(s){const e=Rt.indexOf(s);e>Tn&&Rt.splice(e,1)}function Ep(s){Oe(s)?fs.push(...s):(!Un||!Un.includes(s,s.allowRecurse?Ci+1:Ci))&&fs.push(s),tf()}function bc(s,e=rr?Tn+1:0){for(;e<Rt.length;e++){const t=Rt[e];t&&t.pre&&(Rt.splice(e,1),e--,t())}}function nf(s){if(fs.length){const e=[...new Set(fs)];if(fs.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((t,n)=>or(t)-or(n)),Ci=0;Ci<Un.length;Ci++)Un[Ci]();Un=null,Ci=0}}const or=s=>s.id==null?1/0:s.id,Ap=(s,e)=>{const t=or(s)-or(e);if(t===0){if(s.pre&&!e.pre)return-1;if(e.pre&&!s.pre)return 1}return t};function sf(s){Ga=!1,rr=!0,Rt.sort(Ap);const e=xn;try{for(Tn=0;Tn<Rt.length;Tn++){const t=Rt[Tn];t&&t.active!==!1&&ci(t,null,14)}}finally{Tn=0,Rt.length=0,nf(),rr=!1,Rl=null,(Rt.length||fs.length)&&sf()}}function Cp(s,e,...t){if(s.isUnmounted)return;const n=s.vnode.props||it;let i=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||it;f&&(i=t.map(p=>Et(p)?p.trim():p)),h&&(i=t.map(zh))}let a,l=n[a=Go(e)]||n[a=Go(gs(e))];!l&&r&&(l=n[a=Go(As(e))]),l&&sn(l,s,6,i);const c=n[a+"Once"];if(c){if(!s.emitted)s.emitted={};else if(s.emitted[a])return;s.emitted[a]=!0,sn(c,s,6,i)}}function rf(s,e,t=!1){const n=e.emitsCache,i=n.get(s);if(i!==void 0)return i;const r=s.emits;let o={},a=!1;if(!ke(s)){const l=c=>{const u=rf(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!r&&!a?(ht(s)&&n.set(s,null),null):(Oe(r)?r.forEach(l=>o[l]=null):Dt(o,r),ht(s)&&n.set(s,o),o)}function Lo(s,e){return!s||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Xe(s,e[0].toLowerCase()+e.slice(1))||Xe(s,As(e))||Xe(s,e))}let mn=null,of=null;function vo(s){const e=mn;return mn=s,of=s&&s.type.__scopeId||null,e}function Lp(s,e=mn,t){if(!e||s._n)return s;const n=(...i)=>{n._d&&Pc(-1);const r=vo(e);let o;try{o=s(...i)}finally{vo(r),n._d&&Pc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function jo(s){const{type:e,vnode:t,proxy:n,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=s;let d,v;const S=vo(s);try{if(t.shapeFlag&4){const y=i||n;d=Sn(u.call(y,y,h,r,p,f,g)),v=l}else{const y=e;d=Sn(y.length>1?y(r,{attrs:l,slots:a,emit:c}):y(r,null)),v=e.props?l:Pp(l)}}catch(y){Co(y,s,1),d=ui(Hn)}let _=d;if(v&&m!==!1){const y=Object.keys(v),{shapeFlag:M}=_;y.length&&M&7&&(o&&y.some(xl)&&(v=Rp(v,o)),_=fi(_,v))}return t.dirs&&(_=fi(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),d=_,vo(S),d}const Pp=s=>{let e;for(const t in s)(t==="class"||t==="style"||wo(t))&&((e||(e={}))[t]=s[t]);return e},Rp=(s,e)=>{const t={};for(const n in s)(!xl(n)||!(n.slice(9)in e))&&(t[n]=s[n]);return t};function Dp(s,e,t){const{props:n,children:i,component:r}=s,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Mc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Lo(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Mc(n,o,c):!0:!!o;return!1}function Mc(s,e,t){const n=Object.keys(e);if(n.length!==Object.keys(s).length)return!0;for(let i=0;i<n.length;i++){const r=n[i];if(e[r]!==s[r]&&!Lo(t,r))return!0}return!1}function Ip({vnode:s,parent:e},t){for(;e&&e.subTree===s;)(s=e.vnode).el=t,e=e.parent}const Np=s=>s.__isSuspense;function Fp(s,e){e&&e.pendingBranch?Oe(s)?e.effects.push(...s):e.effects.push(s):Ep(s)}function Op(s,e){if(St){let t=St.provides;const n=St.parent&&St.parent.provides;n===t&&(t=St.provides=Object.create(n)),t[s]=e}}function ao(s,e,t=!1){const n=St||mn;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&s in i)return i[s];if(arguments.length>1)return t&&ke(e)?e.call(n.proxy):e}}const Cr={};function Xo(s,e,t){return af(s,e,t)}function af(s,e,{immediate:t,deep:n,flush:i,onTrack:r,onTrigger:o}=it){const a=St;let l,c=!1,u=!1;if(Bt(s)?(l=()=>s.value,c=Ha(s)):hs(s)?(l=()=>s,n=!0):Oe(s)?(u=!0,c=s.some(_=>hs(_)||Ha(_)),l=()=>s.map(_=>{if(Bt(_))return _.value;if(hs(_))return os(_);if(ke(_))return ci(_,a,2)})):ke(s)?e?l=()=>ci(s,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),sn(s,a,3,[f])}:l=xn,e&&n){const _=l;l=()=>os(_())}let h,f=_=>{h=v.onStop=()=>{ci(_,a,4)}},p;if(ar)if(f=xn,e?t&&sn(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const _=Im();p=_.__watcherHandles||(_.__watcherHandles=[])}else return xn;let g=u?new Array(s.length).fill(Cr):Cr;const m=()=>{if(!!v.active)if(e){const _=v.run();(n||c||(u?_.some((y,M)=>mo(y,g[M])):mo(_,g)))&&(h&&h(),sn(e,a,3,[_,g===Cr?void 0:u&&g[0]===Cr?[]:g,f]),g=_)}else v.run()};m.allowRecurse=!!e;let d;i==="sync"?d=m:i==="post"?d=()=>Ht(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),d=()=>Dl(m));const v=new Sl(l,d);e?t?m():g=v.run():i==="post"?Ht(v.run.bind(v),a&&a.suspense):v.run();const S=()=>{v.stop(),a&&a.scope&&_l(a.scope.effects,v)};return p&&p.push(S),S}function Up(s,e,t){const n=this.proxy,i=Et(s)?s.includes(".")?lf(n,s):()=>n[s]:s.bind(n,n);let r;ke(e)?r=e:(r=e.handler,t=e);const o=St;vs(this);const a=af(i,r.bind(n),t);return o?vs(o):Ni(),a}function lf(s,e){const t=e.split(".");return()=>{let n=s;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function os(s,e){if(!ht(s)||s.__v_skip||(e=e||new Set,e.has(s)))return s;if(e.add(s),Bt(s))os(s.value,e);else if(Oe(s))for(let t=0;t<s.length;t++)os(s[t],e);else if(Fd(s)||Js(s))s.forEach(t=>{os(t,e)});else if(zd(s))for(const t in s)os(s[t],e);return s}function zp(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Il(()=>{s.isMounted=!0}),ff(()=>{s.isUnmounting=!0}),s}const Zt=[Function,Array],Bp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},setup(s,{slots:e}){const t=Tm(),n=zp();let i;return()=>{const r=e.default&&uf(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==Hn){o=m;break}}const a=Je(s),{mode:l}=a;if(n.isLeaving)return qo(o);const c=Sc(o);if(!c)return qo(o);const u=Wa(c,a,n,t);ja(c,u);const h=t.subTree,f=h&&Sc(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();i===void 0?i=m:m!==i&&(i=m,p=!0)}if(f&&f.type!==Hn&&(!Li(c,f)||p)){const m=Wa(f,a,n,t);if(ja(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},qo(o);l==="in-out"&&c.type!==Hn&&(m.delayLeave=(d,v,S)=>{const _=cf(n,f);_[String(f.key)]=f,d._leaveCb=()=>{v(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},kp=Bp;function cf(s,e){const{leavingVNodes:t}=s;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Wa(s,e,t,n){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:v,onAppearCancelled:S}=e,_=String(s.key),y=cf(t,s),M=(x,C)=>{x&&sn(x,n,9,C)},L=(x,C)=>{const P=C[1];M(x,C),Oe(x)?x.every(H=>H.length<=1)&&P():x.length<=1&&P()},D={mode:r,persisted:o,beforeEnter(x){let C=a;if(!t.isMounted)if(i)C=m||a;else return;x._leaveCb&&x._leaveCb(!0);const P=y[_];P&&Li(s,P)&&P.el._leaveCb&&P.el._leaveCb(),M(C,[x])},enter(x){let C=l,P=c,H=u;if(!t.isMounted)if(i)C=d||l,P=v||c,H=S||u;else return;let ae=!1;const z=x._enterCb=N=>{ae||(ae=!0,N?M(H,[x]):M(P,[x]),D.delayedLeave&&D.delayedLeave(),x._enterCb=void 0)};C?L(C,[x,z]):z()},leave(x,C){const P=String(s.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return C();M(h,[x]);let H=!1;const ae=x._leaveCb=z=>{H||(H=!0,C(),z?M(g,[x]):M(p,[x]),x._leaveCb=void 0,y[P]===s&&delete y[P])};y[P]=s,f?L(f,[x,ae]):ae()},clone(x){return Wa(x,e,t,n)}};return D}function qo(s){if(Po(s))return s=fi(s),s.children=null,s}function Sc(s){return Po(s)?s.children?s.children[0]:void 0:s}function ja(s,e){s.shapeFlag&6&&s.component?ja(s.component.subTree,e):s.shapeFlag&128?(s.ssContent.transition=e.clone(s.ssContent),s.ssFallback.transition=e.clone(s.ssFallback)):s.transition=e}function uf(s,e=!1,t){let n=[],i=0;for(let r=0;r<s.length;r++){let o=s[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Mn?(o.patchFlag&128&&i++,n=n.concat(uf(o.children,e,a))):(e||o.type!==Hn)&&n.push(a!=null?fi(o,{key:a}):o)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}const lo=s=>!!s.type.__asyncLoader,Po=s=>s.type.__isKeepAlive;function Vp(s,e){hf(s,"a",e)}function Hp(s,e){hf(s,"da",e)}function hf(s,e,t=St){const n=s.__wdc||(s.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return s()});if(Ro(e,n,t),t){let i=t.parent;for(;i&&i.parent;)Po(i.parent.vnode)&&Gp(n,e,t,i),i=i.parent}}function Gp(s,e,t,n){const i=Ro(e,s,n,!0);df(()=>{_l(n[e],i)},t)}function Ro(s,e,t=St,n=!1){if(t){const i=t[s]||(t[s]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Cs(),vs(t);const a=sn(e,t,s,o);return Ni(),Ls(),a});return n?i.unshift(r):i.push(r),r}}const Xn=s=>(e,t=St)=>(!ar||s==="sp")&&Ro(s,(...n)=>e(...n),t),Wp=Xn("bm"),Il=Xn("m"),jp=Xn("bu"),Xp=Xn("u"),ff=Xn("bum"),df=Xn("um"),qp=Xn("sp"),$p=Xn("rtg"),Yp=Xn("rtc");function Kp(s,e=St){Ro("ec",s,e)}function yi(s,e,t,n){const i=s.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Cs(),sn(l,t,8,[s.el,a,s,e]),Ls())}}const Jp=Symbol(),Xa=s=>s?Sf(s)?zl(s)||s.proxy:Xa(s.parent):null,Zs=Dt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Xa(s.parent),$root:s=>Xa(s.root),$emit:s=>s.emit,$options:s=>Nl(s),$forceUpdate:s=>s.f||(s.f=()=>Dl(s.update)),$nextTick:s=>s.n||(s.n=Sp.bind(s.proxy)),$watch:s=>Up.bind(s)}),$o=(s,e)=>s!==it&&!s.__isScriptSetup&&Xe(s,e),Zp={get({_:s},e){const{ctx:t,setupState:n,data:i,props:r,accessCache:o,type:a,appContext:l}=s;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if($o(n,e))return o[e]=1,n[e];if(i!==it&&Xe(i,e))return o[e]=2,i[e];if((c=s.propsOptions[0])&&Xe(c,e))return o[e]=3,r[e];if(t!==it&&Xe(t,e))return o[e]=4,t[e];qa&&(o[e]=0)}}const u=Zs[e];let h,f;if(u)return e==="$attrs"&&Kt(s,"get",e),u(s);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==it&&Xe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Xe(f,e))return f[e]},set({_:s},e,t){const{data:n,setupState:i,ctx:r}=s;return $o(i,e)?(i[e]=t,!0):n!==it&&Xe(n,e)?(n[e]=t,!0):Xe(s.props,e)||e[0]==="$"&&e.slice(1)in s?!1:(r[e]=t,!0)},has({_:{data:s,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:r}},o){let a;return!!t[o]||s!==it&&Xe(s,o)||$o(e,o)||(a=r[0])&&Xe(a,o)||Xe(n,o)||Xe(Zs,o)||Xe(i.config.globalProperties,o)},defineProperty(s,e,t){return t.get!=null?s._.accessCache[e]=0:Xe(t,"value")&&this.set(s,e,t.value,null),Reflect.defineProperty(s,e,t)}};let qa=!0;function Qp(s){const e=Nl(s),t=s.proxy,n=s.ctx;qa=!1,e.beforeCreate&&wc(e.beforeCreate,s,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:v,beforeUnmount:S,destroyed:_,unmounted:y,render:M,renderTracked:L,renderTriggered:D,errorCaptured:x,serverPrefetch:C,expose:P,inheritAttrs:H,components:ae,directives:z,filters:N}=e;if(c&&em(c,n,null,s.appContext.config.unwrapInjectedRef),o)for(const te in o){const j=o[te];ke(j)&&(n[te]=j.bind(t))}if(i){const te=i.call(t,t);ht(te)&&(s.data=Al(te))}if(qa=!0,r)for(const te in r){const j=r[te],G=ke(j)?j.bind(t,t):ke(j.get)?j.get.bind(t,t):xn,ue=!ke(j)&&ke(j.set)?j.set.bind(t):xn,X=Rm({get:G,set:ue});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>X.value,set:K=>X.value=K})}if(a)for(const te in a)pf(a[te],n,t,te);if(l){const te=ke(l)?l.call(t):l;Reflect.ownKeys(te).forEach(j=>{Op(j,te[j])})}u&&wc(u,s,"c");function Z(te,j){Oe(j)?j.forEach(G=>te(G.bind(t))):j&&te(j.bind(t))}if(Z(Wp,h),Z(Il,f),Z(jp,p),Z(Xp,g),Z(Vp,m),Z(Hp,d),Z(Kp,x),Z(Yp,L),Z($p,D),Z(ff,S),Z(df,y),Z(qp,C),Oe(P))if(P.length){const te=s.exposed||(s.exposed={});P.forEach(j=>{Object.defineProperty(te,j,{get:()=>t[j],set:G=>t[j]=G})})}else s.exposed||(s.exposed={});M&&s.render===xn&&(s.render=M),H!=null&&(s.inheritAttrs=H),ae&&(s.components=ae),z&&(s.directives=z)}function em(s,e,t=xn,n=!1){Oe(s)&&(s=$a(s));for(const i in s){const r=s[i];let o;ht(r)?"default"in r?o=ao(r.from||i,r.default,!0):o=ao(r.from||i):o=ao(r),Bt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function wc(s,e,t){sn(Oe(s)?s.map(n=>n.bind(e.proxy)):s.bind(e.proxy),e,t)}function pf(s,e,t,n){const i=n.includes(".")?lf(t,n):()=>t[n];if(Et(s)){const r=e[s];ke(r)&&Xo(i,r)}else if(ke(s))Xo(i,s.bind(t));else if(ht(s))if(Oe(s))s.forEach(r=>pf(r,e,t,n));else{const r=ke(s.handler)?s.handler.bind(t):e[s.handler];ke(r)&&Xo(i,r,s)}}function Nl(s){const e=s.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=s.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>xo(l,c,o,!0)),xo(l,e,o)),ht(e)&&r.set(e,l),l}function xo(s,e,t,n=!1){const{mixins:i,extends:r}=e;r&&xo(s,r,t,!0),i&&i.forEach(o=>xo(s,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=tm[o]||t&&t[o];s[o]=a?a(s[o],e[o]):e[o]}return s}const tm={data:Tc,props:Ti,emits:Ti,methods:Ti,computed:Ti,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Ti,directives:Ti,watch:im,provide:Tc,inject:nm};function Tc(s,e){return e?s?function(){return Dt(ke(s)?s.call(this,this):s,ke(e)?e.call(this,this):e)}:e:s}function nm(s,e){return Ti($a(s),$a(e))}function $a(s){if(Oe(s)){const e={};for(let t=0;t<s.length;t++)e[s[t]]=s[t];return e}return s}function Ot(s,e){return s?[...new Set([].concat(s,e))]:e}function Ti(s,e){return s?Dt(Dt(Object.create(null),s),e):e}function im(s,e){if(!s)return e;if(!e)return s;const t=Dt(Object.create(null),s);for(const n in e)t[n]=Ot(s[n],e[n]);return t}function sm(s,e,t,n=!1){const i={},r={};go(r,Io,1),s.propsDefaults=Object.create(null),mf(s,e,i,r);for(const o in s.propsOptions[0])o in i||(i[o]=void 0);t?s.props=n?i:mp(i):s.type.props?s.props=i:s.props=r,s.attrs=r}function rm(s,e,t,n){const{props:i,attrs:r,vnode:{patchFlag:o}}=s,a=Je(i),[l]=s.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=s.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Lo(s.emitsOptions,f))continue;const p=e[f];if(l)if(Xe(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=gs(f);i[g]=Ya(l,a,g,p,s,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{mf(s,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Xe(e,h)&&((u=As(h))===h||!Xe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=Ya(l,a,h,void 0,s,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Xe(e,h)&&!0)&&(delete r[h],c=!0)}c&&jn(s,"set","$attrs")}function mf(s,e,t,n){const[i,r]=s.propsOptions;let o=!1,a;if(e)for(let l in e){if(oo(l))continue;const c=e[l];let u;i&&Xe(i,u=gs(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Lo(s.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Je(t),c=a||it;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ya(i,l,h,c[h],s,!Xe(c,h))}}return o}function Ya(s,e,t,n,i,r){const o=s[t];if(o!=null){const a=Xe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&ke(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(vs(i),n=c[t]=l.call(null,e),Ni())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===As(t))&&(n=!0))}return n}function gf(s,e,t=!1){const n=e.propsCache,i=n.get(s);if(i)return i;const r=s.props,o={},a=[];let l=!1;if(!ke(s)){const u=h=>{l=!0;const[f,p]=gf(h,e,!0);Dt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),s.extends&&u(s.extends),s.mixins&&s.mixins.forEach(u)}if(!r&&!l)return ht(s)&&n.set(s,Ks),Ks;if(Oe(r))for(let u=0;u<r.length;u++){const h=gs(r[u]);Ec(h)&&(o[h]=it)}else if(r)for(const u in r){const h=gs(u);if(Ec(h)){const f=r[u],p=o[h]=Oe(f)||ke(f)?{type:f}:Object.assign({},f);if(p){const g=Lc(Boolean,p.type),m=Lc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Xe(p,"default"))&&a.push(h)}}}const c=[o,a];return ht(s)&&n.set(s,c),c}function Ec(s){return s[0]!=="$"}function Ac(s){const e=s&&s.toString().match(/^\s*function (\w+)/);return e?e[1]:s===null?"null":""}function Cc(s,e){return Ac(s)===Ac(e)}function Lc(s,e){return Oe(e)?e.findIndex(t=>Cc(t,s)):ke(e)&&Cc(e,s)?0:-1}const vf=s=>s[0]==="_"||s==="$stable",Fl=s=>Oe(s)?s.map(Sn):[Sn(s)],om=(s,e,t)=>{if(e._n)return e;const n=Lp((...i)=>Fl(e(...i)),t);return n._c=!1,n},xf=(s,e,t)=>{const n=s._ctx;for(const i in s){if(vf(i))continue;const r=s[i];if(ke(r))e[i]=om(i,r,n);else if(r!=null){const o=Fl(r);e[i]=()=>o}}},_f=(s,e)=>{const t=Fl(e);s.slots.default=()=>t},am=(s,e)=>{if(s.vnode.shapeFlag&32){const t=e._;t?(s.slots=Je(e),go(e,"_",t)):xf(e,s.slots={})}else s.slots={},e&&_f(s,e);go(s.slots,Io,1)},lm=(s,e,t)=>{const{vnode:n,slots:i}=s;let r=!0,o=it;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Dt(i,e),!t&&a===1&&delete i._):(r=!e.$stable,xf(e,i)),o=e}else e&&(_f(s,e),o={default:1});if(r)for(const a in i)!vf(a)&&!(a in o)&&delete i[a]};function yf(){return{app:null,config:{isNativeTag:Dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function um(s,e){return function(n,i=null){ke(n)||(n=Object.assign({},n)),i!=null&&!ht(i)&&(i=null);const r=yf(),o=new Set;let a=!1;const l=r.app={_uid:cm++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:Nm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(l,...u)):ke(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=ui(n,i);return f.appContext=r,u&&e?e(f,c):s(f,c,h),a=!0,l._container=c,c.__vue_app__=l,zl(f.component)||f.component.proxy}},unmount(){a&&(s(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Ka(s,e,t,n,i=!1){if(Oe(s)){s.forEach((f,p)=>Ka(f,e&&(Oe(e)?e[p]:e),t,n,i));return}if(lo(n)&&!i)return;const r=n.shapeFlag&4?zl(n.component)||n.component.proxy:n.el,o=i?null:r,{i:a,r:l}=s,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Et(c)?(u[c]=null,Xe(h,c)&&(h[c]=null)):Bt(c)&&(c.value=null)),ke(l))ci(l,a,12,[o,u]);else{const f=Et(l),p=Bt(l);if(f||p){const g=()=>{if(s.f){const m=f?Xe(h,l)?h[l]:u[l]:l.value;i?Oe(m)&&_l(m,r):Oe(m)?m.includes(r)||m.push(r):f?(u[l]=[r],Xe(h,l)&&(h[l]=u[l])):(l.value=[r],s.k&&(u[s.k]=l.value))}else f?(u[l]=o,Xe(h,l)&&(h[l]=o)):p&&(l.value=o,s.k&&(u[s.k]=o))};o?(g.id=-1,Ht(g,t)):g()}}}const Ht=Fp;function hm(s){return fm(s)}function fm(s,e){const t=Vd();t.__VUE__=!0;const{insert:n,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=xn,insertStaticContent:g}=s,m=(w,E,I,k=null,U=null,J=null,ne=!1,q=null,le=!!E.dynamicChildren)=>{if(w===E)return;w&&!Li(w,E)&&(k=Ee(w),K(w,U,J,!0),w=null),E.patchFlag===-2&&(le=!1,E.dynamicChildren=null);const{type:ee,ref:T,shapeFlag:b}=E;switch(ee){case Do:d(w,E,I,k);break;case Hn:v(w,E,I,k);break;case co:w==null&&S(E,I,k,ne);break;case Mn:ae(w,E,I,k,U,J,ne,q,le);break;default:b&1?M(w,E,I,k,U,J,ne,q,le):b&6?z(w,E,I,k,U,J,ne,q,le):(b&64||b&128)&&ee.process(w,E,I,k,U,J,ne,q,le,we)}T!=null&&U&&Ka(T,w&&w.ref,J,E||w,!E)},d=(w,E,I,k)=>{if(w==null)n(E.el=a(E.children),I,k);else{const U=E.el=w.el;E.children!==w.children&&c(U,E.children)}},v=(w,E,I,k)=>{w==null?n(E.el=l(E.children||""),I,k):E.el=w.el},S=(w,E,I,k)=>{[w.el,w.anchor]=g(w.children,E,I,k,w.el,w.anchor)},_=({el:w,anchor:E},I,k)=>{let U;for(;w&&w!==E;)U=f(w),n(w,I,k),w=U;n(E,I,k)},y=({el:w,anchor:E})=>{let I;for(;w&&w!==E;)I=f(w),i(w),w=I;i(E)},M=(w,E,I,k,U,J,ne,q,le)=>{ne=ne||E.type==="svg",w==null?L(E,I,k,U,J,ne,q,le):C(w,E,U,J,ne,q,le)},L=(w,E,I,k,U,J,ne,q)=>{let le,ee;const{type:T,props:b,shapeFlag:F,transition:Y,dirs:se}=w;if(le=w.el=o(w.type,J,b&&b.is,b),F&8?u(le,w.children):F&16&&x(w.children,le,null,k,U,J&&T!=="foreignObject",ne,q),se&&yi(w,null,k,"created"),b){for(const ye in b)ye!=="value"&&!oo(ye)&&r(le,ye,null,b[ye],J,w.children,k,U,B);"value"in b&&r(le,"value",null,b.value),(ee=b.onVnodeBeforeMount)&&_n(ee,k,w)}D(le,w,w.scopeId,ne,k),se&&yi(w,null,k,"beforeMount");const he=(!U||U&&!U.pendingBranch)&&Y&&!Y.persisted;he&&Y.beforeEnter(le),n(le,E,I),((ee=b&&b.onVnodeMounted)||he||se)&&Ht(()=>{ee&&_n(ee,k,w),he&&Y.enter(le),se&&yi(w,null,k,"mounted")},U)},D=(w,E,I,k,U)=>{if(I&&p(w,I),k)for(let J=0;J<k.length;J++)p(w,k[J]);if(U){let J=U.subTree;if(E===J){const ne=U.vnode;D(w,ne,ne.scopeId,ne.slotScopeIds,U.parent)}}},x=(w,E,I,k,U,J,ne,q,le=0)=>{for(let ee=le;ee<w.length;ee++){const T=w[ee]=q?si(w[ee]):Sn(w[ee]);m(null,T,E,I,k,U,J,ne,q)}},C=(w,E,I,k,U,J,ne)=>{const q=E.el=w.el;let{patchFlag:le,dynamicChildren:ee,dirs:T}=E;le|=w.patchFlag&16;const b=w.props||it,F=E.props||it;let Y;I&&bi(I,!1),(Y=F.onVnodeBeforeUpdate)&&_n(Y,I,E,w),T&&yi(E,w,I,"beforeUpdate"),I&&bi(I,!0);const se=U&&E.type!=="foreignObject";if(ee?P(w.dynamicChildren,ee,q,I,k,se,J):ne||j(w,E,q,null,I,k,se,J,!1),le>0){if(le&16)H(q,E,b,F,I,k,U);else if(le&2&&b.class!==F.class&&r(q,"class",null,F.class,U),le&4&&r(q,"style",b.style,F.style,U),le&8){const he=E.dynamicProps;for(let ye=0;ye<he.length;ye++){const me=he[ye],Q=b[me],Te=F[me];(Te!==Q||me==="value")&&r(q,me,Q,Te,U,w.children,I,k,B)}}le&1&&w.children!==E.children&&u(q,E.children)}else!ne&&ee==null&&H(q,E,b,F,I,k,U);((Y=F.onVnodeUpdated)||T)&&Ht(()=>{Y&&_n(Y,I,E,w),T&&yi(E,w,I,"updated")},k)},P=(w,E,I,k,U,J,ne)=>{for(let q=0;q<E.length;q++){const le=w[q],ee=E[q],T=le.el&&(le.type===Mn||!Li(le,ee)||le.shapeFlag&70)?h(le.el):I;m(le,ee,T,null,k,U,J,ne,!0)}},H=(w,E,I,k,U,J,ne)=>{if(I!==k){if(I!==it)for(const q in I)!oo(q)&&!(q in k)&&r(w,q,I[q],null,ne,E.children,U,J,B);for(const q in k){if(oo(q))continue;const le=k[q],ee=I[q];le!==ee&&q!=="value"&&r(w,q,ee,le,ne,E.children,U,J,B)}"value"in k&&r(w,"value",I.value,k.value)}},ae=(w,E,I,k,U,J,ne,q,le)=>{const ee=E.el=w?w.el:a(""),T=E.anchor=w?w.anchor:a("");let{patchFlag:b,dynamicChildren:F,slotScopeIds:Y}=E;Y&&(q=q?q.concat(Y):Y),w==null?(n(ee,I,k),n(T,I,k),x(E.children,I,T,U,J,ne,q,le)):b>0&&b&64&&F&&w.dynamicChildren?(P(w.dynamicChildren,F,I,U,J,ne,q),(E.key!=null||U&&E===U.subTree)&&bf(w,E,!0)):j(w,E,I,T,U,J,ne,q,le)},z=(w,E,I,k,U,J,ne,q,le)=>{E.slotScopeIds=q,w==null?E.shapeFlag&512?U.ctx.activate(E,I,k,ne,le):N(E,I,k,U,J,ne,le):$(w,E,le)},N=(w,E,I,k,U,J,ne)=>{const q=w.component=wm(w,k,U);if(Po(w)&&(q.ctx.renderer=we),Em(q),q.asyncDep){if(U&&U.registerDep(q,Z),!w.el){const le=q.subTree=ui(Hn);v(null,le,E,I)}return}Z(q,w,E,I,U,J,ne)},$=(w,E,I)=>{const k=E.component=w.component;if(Dp(w,E,I))if(k.asyncDep&&!k.asyncResolved){te(k,E,I);return}else k.next=E,Tp(k.update),k.update();else E.el=w.el,k.vnode=E},Z=(w,E,I,k,U,J,ne)=>{const q=()=>{if(w.isMounted){let{next:T,bu:b,u:F,parent:Y,vnode:se}=w,he=T,ye;bi(w,!1),T?(T.el=se.el,te(w,T,ne)):T=se,b&&Wo(b),(ye=T.props&&T.props.onVnodeBeforeUpdate)&&_n(ye,Y,T,se),bi(w,!0);const me=jo(w),Q=w.subTree;w.subTree=me,m(Q,me,h(Q.el),Ee(Q),w,U,J),T.el=me.el,he===null&&Ip(w,me.el),F&&Ht(F,U),(ye=T.props&&T.props.onVnodeUpdated)&&Ht(()=>_n(ye,Y,T,se),U)}else{let T;const{el:b,props:F}=E,{bm:Y,m:se,parent:he}=w,ye=lo(E);if(bi(w,!1),Y&&Wo(Y),!ye&&(T=F&&F.onVnodeBeforeMount)&&_n(T,he,E),bi(w,!0),b&&Ne){const me=()=>{w.subTree=jo(w),Ne(b,w.subTree,w,U,null)};ye?E.type.__asyncLoader().then(()=>!w.isUnmounted&&me()):me()}else{const me=w.subTree=jo(w);m(null,me,I,k,w,U,J),E.el=me.el}if(se&&Ht(se,U),!ye&&(T=F&&F.onVnodeMounted)){const me=E;Ht(()=>_n(T,he,me),U)}(E.shapeFlag&256||he&&lo(he.vnode)&&he.vnode.shapeFlag&256)&&w.a&&Ht(w.a,U),w.isMounted=!0,E=I=k=null}},le=w.effect=new Sl(q,()=>Dl(ee),w.scope),ee=w.update=()=>le.run();ee.id=w.uid,bi(w,!0),ee()},te=(w,E,I)=>{E.component=w;const k=w.vnode.props;w.vnode=E,w.next=null,rm(w,E.props,k,I),lm(w,E.children,I),Cs(),bc(),Ls()},j=(w,E,I,k,U,J,ne,q,le=!1)=>{const ee=w&&w.children,T=w?w.shapeFlag:0,b=E.children,{patchFlag:F,shapeFlag:Y}=E;if(F>0){if(F&128){ue(ee,b,I,k,U,J,ne,q,le);return}else if(F&256){G(ee,b,I,k,U,J,ne,q,le);return}}Y&8?(T&16&&B(ee,U,J),b!==ee&&u(I,b)):T&16?Y&16?ue(ee,b,I,k,U,J,ne,q,le):B(ee,U,J,!0):(T&8&&u(I,""),Y&16&&x(b,I,k,U,J,ne,q,le))},G=(w,E,I,k,U,J,ne,q,le)=>{w=w||Ks,E=E||Ks;const ee=w.length,T=E.length,b=Math.min(ee,T);let F;for(F=0;F<b;F++){const Y=E[F]=le?si(E[F]):Sn(E[F]);m(w[F],Y,I,null,U,J,ne,q,le)}ee>T?B(w,U,J,!0,!1,b):x(E,I,k,U,J,ne,q,le,b)},ue=(w,E,I,k,U,J,ne,q,le)=>{let ee=0;const T=E.length;let b=w.length-1,F=T-1;for(;ee<=b&&ee<=F;){const Y=w[ee],se=E[ee]=le?si(E[ee]):Sn(E[ee]);if(Li(Y,se))m(Y,se,I,null,U,J,ne,q,le);else break;ee++}for(;ee<=b&&ee<=F;){const Y=w[b],se=E[F]=le?si(E[F]):Sn(E[F]);if(Li(Y,se))m(Y,se,I,null,U,J,ne,q,le);else break;b--,F--}if(ee>b){if(ee<=F){const Y=F+1,se=Y<T?E[Y].el:k;for(;ee<=F;)m(null,E[ee]=le?si(E[ee]):Sn(E[ee]),I,se,U,J,ne,q,le),ee++}}else if(ee>F)for(;ee<=b;)K(w[ee],U,J,!0),ee++;else{const Y=ee,se=ee,he=new Map;for(ee=se;ee<=F;ee++){const be=E[ee]=le?si(E[ee]):Sn(E[ee]);be.key!=null&&he.set(be.key,ee)}let ye,me=0;const Q=F-se+1;let Te=!1,Pe=0;const Se=new Array(Q);for(ee=0;ee<Q;ee++)Se[ee]=0;for(ee=Y;ee<=b;ee++){const be=w[ee];if(me>=Q){K(be,U,J,!0);continue}let De;if(be.key!=null)De=he.get(be.key);else for(ye=se;ye<=F;ye++)if(Se[ye-se]===0&&Li(be,E[ye])){De=ye;break}De===void 0?K(be,U,J,!0):(Se[De-se]=ee+1,De>=Pe?Pe=De:Te=!0,m(be,E[De],I,null,U,J,ne,q,le),me++)}const Ce=Te?dm(Se):Ks;for(ye=Ce.length-1,ee=Q-1;ee>=0;ee--){const be=se+ee,De=E[be],et=be+1<T?E[be+1].el:k;Se[ee]===0?m(null,De,I,et,U,J,ne,q,le):Te&&(ye<0||ee!==Ce[ye]?X(De,I,et,2):ye--)}}},X=(w,E,I,k,U=null)=>{const{el:J,type:ne,transition:q,children:le,shapeFlag:ee}=w;if(ee&6){X(w.component.subTree,E,I,k);return}if(ee&128){w.suspense.move(E,I,k);return}if(ee&64){ne.move(w,E,I,we);return}if(ne===Mn){n(J,E,I);for(let b=0;b<le.length;b++)X(le[b],E,I,k);n(w.anchor,E,I);return}if(ne===co){_(w,E,I);return}if(k!==2&&ee&1&&q)if(k===0)q.beforeEnter(J),n(J,E,I),Ht(()=>q.enter(J),U);else{const{leave:b,delayLeave:F,afterLeave:Y}=q,se=()=>n(J,E,I),he=()=>{b(J,()=>{se(),Y&&Y()})};F?F(J,se,he):he()}else n(J,E,I)},K=(w,E,I,k=!1,U=!1)=>{const{type:J,props:ne,ref:q,children:le,dynamicChildren:ee,shapeFlag:T,patchFlag:b,dirs:F}=w;if(q!=null&&Ka(q,null,I,w,!0),T&256){E.ctx.deactivate(w);return}const Y=T&1&&F,se=!lo(w);let he;if(se&&(he=ne&&ne.onVnodeBeforeUnmount)&&_n(he,E,w),T&6)ce(w.component,I,k);else{if(T&128){w.suspense.unmount(I,k);return}Y&&yi(w,null,E,"beforeUnmount"),T&64?w.type.remove(w,E,I,U,we,k):ee&&(J!==Mn||b>0&&b&64)?B(ee,E,I,!1,!0):(J===Mn&&b&384||!U&&T&16)&&B(le,E,I),k&&fe(w)}(se&&(he=ne&&ne.onVnodeUnmounted)||Y)&&Ht(()=>{he&&_n(he,E,w),Y&&yi(w,null,E,"unmounted")},I)},fe=w=>{const{type:E,el:I,anchor:k,transition:U}=w;if(E===Mn){ve(I,k);return}if(E===co){y(w);return}const J=()=>{i(I),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(w.shapeFlag&1&&U&&!U.persisted){const{leave:ne,delayLeave:q}=U,le=()=>ne(I,J);q?q(w.el,J,le):le()}else J()},ve=(w,E)=>{let I;for(;w!==E;)I=f(w),i(w),w=I;i(E)},ce=(w,E,I)=>{const{bum:k,scope:U,update:J,subTree:ne,um:q}=w;k&&Wo(k),U.stop(),J&&(J.active=!1,K(ne,w,E,I)),q&&Ht(q,E),Ht(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},B=(w,E,I,k=!1,U=!1,J=0)=>{for(let ne=J;ne<w.length;ne++)K(w[ne],E,I,k,U)},Ee=w=>w.shapeFlag&6?Ee(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el),de=(w,E,I)=>{w==null?E._vnode&&K(E._vnode,null,null,!0):m(E._vnode||null,w,E,null,null,null,I),bc(),nf(),E._vnode=w},we={p:m,um:K,m:X,r:fe,mt:N,mc:x,pc:j,pbc:P,n:Ee,o:s};let _e,Ne;return e&&([_e,Ne]=e(we)),{render:de,hydrate:_e,createApp:um(de,_e)}}function bi({effect:s,update:e},t){s.allowRecurse=e.allowRecurse=t}function bf(s,e,t=!1){const n=s.children,i=e.children;if(Oe(n)&&Oe(i))for(let r=0;r<n.length;r++){const o=n[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=si(i[r]),a.el=o.el),t||bf(o,a)),a.type===Do&&(a.el=o.el)}}function dm(s){const e=s.slice(),t=[0];let n,i,r,o,a;const l=s.length;for(n=0;n<l;n++){const c=s[n];if(c!==0){if(i=t[t.length-1],s[i]<c){e[n]=i,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,s[t[a]]<c?r=a+1:o=a;c<s[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const pm=s=>s.__isTeleport,Mn=Symbol(void 0),Do=Symbol(void 0),Hn=Symbol(void 0),co=Symbol(void 0);let as=null,Ol=1;function Pc(s){Ol+=s}function mm(s){return s?s.__v_isVNode===!0:!1}function Li(s,e){return s.type===e.type&&s.key===e.key}const Io="__vInternal",Mf=({key:s})=>s!=null?s:null,uo=({ref:s,ref_key:e,ref_for:t})=>s!=null?Et(s)||Bt(s)||ke(s)?{i:mn,r:s,k:e,f:!!t}:s:null;function gm(s,e=null,t=null,n=0,i=null,r=s===Mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:e,key:e&&Mf(e),ref:e&&uo(e),scopeId:of,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mn};return a?(Ul(l,t),r&128&&s.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),Ol>0&&!o&&as&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&as.push(l),l}const ui=vm;function vm(s,e=null,t=null,n=0,i=null,r=!1){if((!s||s===Jp)&&(s=Hn),mm(s)){const a=fi(s,e,!0);return t&&Ul(a,t),Ol>0&&!r&&as&&(a.shapeFlag&6?as[as.indexOf(s)]=a:as.push(a)),a.patchFlag|=-2,a}if(Pm(s)&&(s=s.__vccOpts),e){e=xm(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=vl(a)),ht(l)&&(Kh(l)&&!Oe(l)&&(l=Dt({},l)),e.style=gl(l))}const o=Et(s)?1:Np(s)?128:pm(s)?64:ht(s)?4:ke(s)?2:0;return gm(s,e,t,n,i,o,r,!0)}function xm(s){return s?Kh(s)||Io in s?Dt({},s):s:null}function fi(s,e,t=!1){const{props:n,ref:i,patchFlag:r,children:o}=s,a=e?bm(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:a,key:a&&Mf(a),ref:e&&e.ref?t&&i?Oe(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:o,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:e&&s.type!==Mn?r===-1?16:r|16:r,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&fi(s.ssContent),ssFallback:s.ssFallback&&fi(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx}}function _m(s=" ",e=0){return ui(Do,null,s,e)}function ym(s,e){const t=ui(co,null,s);return t.staticCount=e,t}function Sn(s){return s==null||typeof s=="boolean"?ui(Hn):Oe(s)?ui(Mn,null,s.slice()):typeof s=="object"?si(s):ui(Do,null,String(s))}function si(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:fi(s)}function Ul(s,e){let t=0;const{shapeFlag:n}=s;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Ul(s,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Io in e)?e._ctx=mn:i===3&&mn&&(mn.slots._===1?e._=1:(e._=2,s.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:mn},t=32):(e=String(e),n&64?(t=16,e=[_m(e)]):t=8);s.children=e,s.shapeFlag|=t}function bm(...s){const e={};for(let t=0;t<s.length;t++){const n=s[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=vl([e.class,n.class]));else if(i==="style")e.style=gl([e.style,n.style]);else if(wo(i)){const r=e[i],o=n[i];o&&r!==o&&!(Oe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=n[i])}return e}function _n(s,e,t,n=null){sn(s,e,7,[t,n])}const Mm=yf();let Sm=0;function wm(s,e,t){const n=s.type,i=(e?e.appContext:s.appContext)||Mm,r={uid:Sm++,vnode:s,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gf(n,i),emitsOptions:rf(n,i),emit:null,emitted:null,propsDefaults:it,inheritAttrs:n.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Cp.bind(null,r),s.ce&&s.ce(r),r}let St=null;const Tm=()=>St||mn,vs=s=>{St=s,s.scope.on()},Ni=()=>{St&&St.scope.off(),St=null};function Sf(s){return s.vnode.shapeFlag&4}let ar=!1;function Em(s,e=!1){ar=e;const{props:t,children:n}=s.vnode,i=Sf(s);sm(s,t,i,e),am(s,n);const r=i?Am(s,e):void 0;return ar=!1,r}function Am(s,e){const t=s.type;s.accessCache=Object.create(null),s.proxy=Jh(new Proxy(s.ctx,Zp));const{setup:n}=t;if(n){const i=s.setupContext=n.length>1?Lm(s):null;vs(s),Cs();const r=ci(n,s,0,[s.props,i]);if(Ls(),Ni(),Oh(r)){if(r.then(Ni,Ni),e)return r.then(o=>{Rc(s,o,e)}).catch(o=>{Co(o,s,0)});s.asyncDep=r}else Rc(s,r,e)}else wf(s,e)}function Rc(s,e,t){ke(e)?s.type.__ssrInlineRender?s.ssrRender=e:s.render=e:ht(e)&&(s.setupState=Zh(e)),wf(s,t)}let Dc;function wf(s,e,t){const n=s.type;if(!s.render){if(!e&&Dc&&!n.render){const i=n.template||Nl(s).template;if(i){const{isCustomElement:r,compilerOptions:o}=s.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Dt(Dt({isCustomElement:r,delimiters:a},o),l);n.render=Dc(i,c)}}s.render=n.render||xn}vs(s),Cs(),Qp(s),Ls(),Ni()}function Cm(s){return new Proxy(s.attrs,{get(e,t){return Kt(s,"get","$attrs"),e[t]}})}function Lm(s){const e=n=>{s.exposed=n||{}};let t;return{get attrs(){return t||(t=Cm(s))},slots:s.slots,emit:s.emit,expose:e}}function zl(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Zh(Jh(s.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zs)return Zs[t](s)},has(e,t){return t in e||t in Zs}}))}function Pm(s){return ke(s)&&"__vccOpts"in s}const Rm=(s,e)=>bp(s,e,ar),Dm=Symbol(""),Im=()=>ao(Dm),Nm="3.2.45",Fm="http://www.w3.org/2000/svg",Pi=typeof document<"u"?document:null,Ic=Pi&&Pi.createElement("template"),Om={insert:(s,e,t)=>{e.insertBefore(s,t||null)},remove:s=>{const e=s.parentNode;e&&e.removeChild(s)},createElement:(s,e,t,n)=>{const i=e?Pi.createElementNS(Fm,s):Pi.createElement(s,t?{is:t}:void 0);return s==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:s=>Pi.createTextNode(s),createComment:s=>Pi.createComment(s),setText:(s,e)=>{s.nodeValue=e},setElementText:(s,e)=>{s.textContent=e},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Pi.querySelector(s),setScopeId(s,e){s.setAttribute(e,"")},insertStaticContent(s,e,t,n,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{Ic.innerHTML=n?`<svg>${s}</svg>`:s;const a=Ic.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Um(s,e,t){const n=s._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?s.removeAttribute("class"):t?s.setAttribute("class",e):s.className=e}function zm(s,e,t){const n=s.style,i=Et(t);if(t&&!i){for(const r in t)Ja(n,r,t[r]);if(e&&!Et(e))for(const r in e)t[r]==null&&Ja(n,r,"")}else{const r=n.display;i?e!==t&&(n.cssText=t):e&&s.removeAttribute("style"),"_vod"in s&&(n.display=r)}}const Nc=/\s*!important$/;function Ja(s,e,t){if(Oe(t))t.forEach(n=>Ja(s,e,n));else if(t==null&&(t=""),e.startsWith("--"))s.setProperty(e,t);else{const n=Bm(s,e);Nc.test(t)?s.setProperty(As(n),t.replace(Nc,""),"important"):s[n]=t}}const Fc=["Webkit","Moz","ms"],Yo={};function Bm(s,e){const t=Yo[e];if(t)return t;let n=gs(e);if(n!=="filter"&&n in s)return Yo[e]=n;n=Uh(n);for(let i=0;i<Fc.length;i++){const r=Fc[i]+n;if(r in s)return Yo[e]=r}return e}const Oc="http://www.w3.org/1999/xlink";function km(s,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?s.removeAttributeNS(Oc,e.slice(6,e.length)):s.setAttributeNS(Oc,e,t);else{const r=Rd(e);t==null||r&&!Fh(t)?s.removeAttribute(e):s.setAttribute(e,r?"":t)}}function Vm(s,e,t,n,i,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,r),s[e]=t==null?"":t;return}if(e==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=t;const l=t==null?"":t;(s.value!==l||s.tagName==="OPTION")&&(s.value=l),t==null&&s.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof s[e];l==="boolean"?t=Fh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{s[e]=t}catch{}a&&s.removeAttribute(e)}function Hm(s,e,t,n){s.addEventListener(e,t,n)}function Gm(s,e,t,n){s.removeEventListener(e,t,n)}function Wm(s,e,t,n,i=null){const r=s._vei||(s._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=jm(e);if(n){const c=r[e]=$m(n,i);Hm(s,a,c,l)}else o&&(Gm(s,a,o,l),r[e]=void 0)}}const Uc=/(?:Once|Passive|Capture)$/;function jm(s){let e;if(Uc.test(s)){e={};let n;for(;n=s.match(Uc);)s=s.slice(0,s.length-n[0].length),e[n[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):As(s.slice(2)),e]}let Ko=0;const Xm=Promise.resolve(),qm=()=>Ko||(Xm.then(()=>Ko=0),Ko=Date.now());function $m(s,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;sn(Ym(n,t.value),e,5,[n])};return t.value=s,t.attached=qm(),t}function Ym(s,e){if(Oe(e)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const zc=/^on[a-z]/,Km=(s,e,t,n,i=!1,r,o,a,l)=>{e==="class"?Um(s,n,i):e==="style"?zm(s,t,n):wo(e)?xl(e)||Wm(s,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jm(s,e,n,i))?Vm(s,e,n,r,o,a,l):(e==="true-value"?s._trueValue=n:e==="false-value"&&(s._falseValue=n),km(s,e,n,i))};function Jm(s,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in s&&zc.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&s.tagName==="INPUT"||e==="type"&&s.tagName==="TEXTAREA"||zc.test(e)&&Et(t)?!1:e in s}const Zm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};kp.props;const Qm=Dt({patchProp:Km},Om);let Bc;function eg(){return Bc||(Bc=hm(Qm))}const tg=(...s)=>{const e=eg().createApp(...s),{mount:t}=e;return e.mount=n=>{const i=ng(n);if(!i)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ng(s){return Et(s)?document.querySelector(s):s}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="147",ig=0,kc=1,sg=2,Tf=1,rg=2,$s=3,zi=0,rn=1,gn=2,dt=0,Gn=1,Vc=2,Hc=3,Gc=4,og=5,oi=100,ag=101,lg=102,Wc=103,jc=104,cg=200,ug=201,hg=202,fg=203,_o=204,yo=205,dg=206,pg=207,mg=208,gg=209,vg=210,xg=0,_g=1,yg=2,Za=3,bg=4,Mg=5,Sg=6,wg=7,kl=0,Tg=1,Eg=2,Wn=0,Ag=1,Cg=2,Lg=3,Pg=4,Rg=5,Ef=300,xs=301,_s=302,Qa=303,el=304,No=306,ys=1e3,tn=1001,bo=1002,Ve=1003,tl=1004,nl=1005,Gt=1006,Af=1007,Ps=1008,Bi=1009,Dg=1010,Ig=1011,Vl=1012,Ng=1013,Di=1014,ai=1015,bs=1016,Fg=1017,Og=1018,ds=1020,Ug=1021,zg=1022,nn=1023,Bg=1024,kg=1025,Fi=1026,Ms=1027,Vg=1028,Hg=1029,Gg=1030,Wg=1031,jg=1033,Jo=33776,Zo=33777,Qo=33778,ea=33779,Xc=35840,qc=35841,$c=35842,Yc=35843,Xg=36196,Kc=37492,Jc=37496,Zc=37808,Qc=37809,eu=37810,tu=37811,nu=37812,iu=37813,su=37814,ru=37815,ou=37816,au=37817,lu=37818,cu=37819,uu=37820,hu=37821,fu=36492,lr=2300,Ss=2301,ta=2302,du=2400,pu=2401,mu=2402,qg=2500,$g=1,Cf=2,ki=3e3,Ze=3001,Yg=3200,Kg=3201,Fo=0,Jg=1,bn="srgb",cr="srgb-linear",na=7680,Zg=519,il=35044,gu="300 es",sl=1035;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vu=1234567;const Qs=Math.PI/180,ur=180/Math.PI;function on(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function Hl(s,e){return(s%e+e)%e}function Qg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ev(s,e,t){return s!==e?(t-s)/(e-s):0}function er(s,e,t){return(1-t)*s+t*e}function tv(s,e,t,n){return er(s,e,1-Math.exp(-t*n))}function nv(s,e=1){return e-Math.abs(Hl(s,e*2)-e)}function iv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ov(s,e){return s+Math.random()*(e-s)}function av(s){return s*(.5-Math.random())}function lv(s){s!==void 0&&(vu=s);let e=vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cv(s){return s*Qs}function uv(s){return s*ur}function rl(s){return(s&s-1)===0&&s!==0}function Lf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hv(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var fv=Object.freeze({__proto__:null,DEG2RAD:Qs,RAD2DEG:ur,generateUUID:on,clamp:Mt,euclideanModulo:Hl,mapLinear:Qg,inverseLerp:ev,lerp:er,damp:tv,pingpong:nv,smoothstep:iv,smootherstep:sv,randInt:rv,randFloat:ov,randFloatSpread:av,seededRandom:lv,degToRad:cv,radToDeg:uv,isPowerOfTwo:rl,ceilPowerOfTwo:Lf,floorPowerOfTwo:Mo,setQuaternionFromProperEuler:hv,normalize:tt,denormalize:Bn});class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=i[0],d=i[3],v=i[6],S=i[1],_=i[4],y=i[7],M=i[2],L=i[5],D=i[8];return r[0]=o*m+a*S+l*M,r[3]=o*d+a*_+l*L,r[6]=o*v+a*y+l*D,r[1]=c*m+u*S+h*M,r[4]=c*d+u*_+h*L,r[7]=c*v+u*y+h*D,r[2]=f*m+p*S+g*M,r[5]=f*d+p*_+g*L,r[8]=f*v+p*y+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new Yt;function Pf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ho(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const sa={[bn]:{[cr]:Oi},[cr]:{[bn]:ho}},Nt={legacyMode:!0,get workingColorSpace(){return cr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(sa[e]&&sa[e][t]!==void 0){const n=sa[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},ln={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Pr(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nt.workingColorSpace){if(e=Hl(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ra(o,r,e+1/3),this.g=ra(o,r,e),this.b=ra(o,r,e-1/3)}return Nt.toWorkingColorSpace(this,i),this}setStyle(e,t=bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Nt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Nt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=bn){const n=Rf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Nt.fromWorkingColorSpace(Pr(this,ft),e),Mt(ft.r*255,0,255)<<16^Mt(ft.g*255,0,255)<<8^Mt(ft.b*255,0,255)<<0}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Pr(this,ft),t);const n=ft.r,i=ft.g,r=ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Pr(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=bn){return Nt.fromWorkingColorSpace(Pr(this,ft),e),e!==bn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Lr);const n=er(ln.h,Lr.h,t),i=er(ln.s,Lr.s,t),r=er(ln.l,Lr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=Rf;let ji;class Df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=hr("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class If{constructor(e=null){this.isSource=!0,this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(oa(i[o].image)):r.push(oa(i[o]))}else r=oa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Df.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dv=0;class Tt extends Rs{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=tn,i=tn,r=Gt,o=Ps,a=nn,l=Bi,c=Tt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=on(),this.name="",this.source=new If(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Ef;Tt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(p+1)/2,M=(v+1)/2,L=(u+f)/4,D=(h+m)/4,x=(g+d)/4;return _>y&&_>M?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=L/n,r=D/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=L/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=D/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(h-m)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wt extends Rs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new If(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nf extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pv extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-a;const v=l*f+c*p+u*g+h*m,S=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const M=Math.sqrt(_),L=Math.atan2(M,v*S);d=Math.sin(d*L)/M,a=Math.sin(a*L)/M}const y=a*S;if(l=l*d+f*y,c=c*d+p*y,u=u*d+g*y,h=h*d+m*y,d===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new R,xu=new di;class pi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Mi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox),la.applyMatrix4(e.matrixWorld),this.union(la);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Rr.subVectors(this.max,Bs),Xi.subVectors(e.a,Bs),qi.subVectors(e.b,Bs),$i.subVectors(e.c,Bs),$n.subVectors(qi,Xi),Yn.subVectors($i,qi),Si.subVectors(Xi,$i);let t=[0,-$n.z,$n.y,0,-Yn.z,Yn.y,0,-Si.z,Si.y,$n.z,0,-$n.x,Yn.z,0,-Yn.x,Si.z,0,-Si.x,-$n.y,$n.x,0,-Yn.y,Yn.x,0,-Si.y,Si.x,0];return!ca(t,Xi,qi,$i,Rr)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,Xi,qi,$i,Rr))?!1:(Dr.crossVectors($n,Yn),t=[Dr.x,Dr.y,Dr.z],ca(t,Xi,qi,$i,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Mi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new R,new R,new R,new R,new R,new R,new R,new R],Mi=new R,la=new pi,Xi=new R,qi=new R,$i=new R,$n=new R,Yn=new R,Si=new R,Bs=new R,Rr=new R,Dr=new R,wi=new R;function ca(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mv=new pi,ks=new R,ua=new R;class Gi{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ua)),this.expandByPoint(ks.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new R,ha=new R,Ir=new R,Kn=new R,fa=new R,Nr=new R,da=new R;class Gl{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.direction).multiplyScalar(t).add(this.origin),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ha.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ha);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=Kn.dot(this.direction),l=-Kn.dot(Ir),c=Kn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ir).multiplyScalar(f).add(ha),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,r){fa.subVectors(t,e),Nr.subVectors(n,e),da.crossVectors(fa,Nr);let o=this.direction.dot(da),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(Nr.crossVectors(Kn,Nr));if(l<0)return null;const c=a*this.direction.dot(fa.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(da);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,u,h,f,p,g,m,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=p,v[7]=g,v[11]=m,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gv,e,vv)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Jn.crossVectors(n,qt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Jn.crossVectors(n,qt)),Jn.normalize(),Fr.crossVectors(qt,Jn),i[0]=Jn.x,i[4]=Fr.x,i[8]=qt.x,i[1]=Jn.y,i[5]=Fr.y,i[9]=qt.y,i[2]=Jn.z,i[6]=Fr.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],v=n[14],S=n[3],_=n[7],y=n[11],M=n[15],L=i[0],D=i[4],x=i[8],C=i[12],P=i[1],H=i[5],ae=i[9],z=i[13],N=i[2],$=i[6],Z=i[10],te=i[14],j=i[3],G=i[7],ue=i[11],X=i[15];return r[0]=o*L+a*P+l*N+c*j,r[4]=o*D+a*H+l*$+c*G,r[8]=o*x+a*ae+l*Z+c*ue,r[12]=o*C+a*z+l*te+c*X,r[1]=u*L+h*P+f*N+p*j,r[5]=u*D+h*H+f*$+p*G,r[9]=u*x+h*ae+f*Z+p*ue,r[13]=u*C+h*z+f*te+p*X,r[2]=g*L+m*P+d*N+v*j,r[6]=g*D+m*H+d*$+v*G,r[10]=g*x+m*ae+d*Z+v*ue,r[14]=g*C+m*z+d*te+v*X,r[3]=S*L+_*P+y*N+M*j,r[7]=S*D+_*H+y*$+M*G,r[11]=S*x+_*ae+y*Z+M*ue,r[15]=S*C+_*z+y*te+M*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],v=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*p-n*l*p)+m*(+t*l*p-t*c*f+r*o*f-i*o*p+i*c*u-r*l*u)+d*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+v*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],v=e[15],S=h*d*c-m*f*c+m*l*p-a*d*p-h*l*v+a*f*v,_=g*f*c-u*d*c-g*l*p+o*d*p+u*l*v-o*f*v,y=u*m*c-g*h*c+g*a*p-o*m*p-u*a*v+o*h*v,M=g*h*l-u*m*l-g*a*f+o*m*f+u*a*d-o*h*d,L=t*S+n*_+i*y+r*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=S*D,e[1]=(m*f*r-h*d*r-m*i*p+n*d*p+h*i*v-n*f*v)*D,e[2]=(a*d*r-m*l*r+m*i*c-n*d*c-a*i*v+n*l*v)*D,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*p-n*l*p)*D,e[4]=_*D,e[5]=(u*d*r-g*f*r+g*i*p-t*d*p-u*i*v+t*f*v)*D,e[6]=(g*l*r-o*d*r-g*i*c+t*d*c+o*i*v-t*l*v)*D,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*p+t*l*p)*D,e[8]=y*D,e[9]=(g*h*r-u*m*r-g*n*p+t*m*p+u*n*v-t*h*v)*D,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*v+t*a*v)*D,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*D,e[12]=M*D,e[13]=(u*m*i-g*h*i+g*n*f-t*m*f-u*n*d+t*h*d)*D,e[14]=(g*a*i-o*m*i-g*n*l+t*m*l+o*n*d-t*a*d)*D,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,m=o*u,d=o*h,v=a*h,S=l*c,_=l*u,y=l*h,M=n.x,L=n.y,D=n.z;return i[0]=(1-(m+v))*M,i[1]=(p+y)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(p-y)*L,i[5]=(1-(f+v))*L,i[6]=(d+S)*L,i[7]=0,i[8]=(g+_)*D,i[9]=(d-S)*D,i[10]=(1-(f+m))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Yi.set(i[0],i[1],i[2]).length();const o=Yi.set(i[4],i[5],i[6]).length(),a=Yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/r,u=1/o,h=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new R,cn=new Ue,gv=new R(0,0,0),vv=new R(1,1,1),Jn=new R,Fr=new R,qt=new R,_u=new Ue,yu=new di;class _r{constructor(e=0,t=0,n=0,i=_r.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yu.setFromEuler(this),this.setFromQuaternion(yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}_r.DefaultOrder="XYZ";_r.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xv=0;const bu=new R,Ki=new di,In=new Ue,Or=new R,Vs=new R,_v=new R,yv=new di,Mu=new R(1,0,0),Su=new R(0,1,0),wu=new R(0,0,1),bv={type:"added"},Tu={type:"removed"};class st extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DefaultUp.clone();const e=new R,t=new _r,n=new di,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Yt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=st.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DefaultMatrixWorldAutoUpdate,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Vs,Or,this.up):In.lookAt(Or,Vs,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(In),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,_v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,yv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DefaultUp=new R(0,1,0);st.DefaultMatrixAutoUpdate=!0;st.DefaultMatrixWorldAutoUpdate=!0;const un=new R,Nn=new R,pa=new R,Fn=new R,Ji=new R,Zi=new R,Eu=new R,ma=new R,ga=new R,va=new R;class zn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),Nn.subVectors(n,t),pa.subVectors(e,t);const o=un.dot(un),a=un.dot(Nn),l=un.dot(pa),c=Nn.dot(Nn),u=Nn.dot(pa),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Fn),l.set(0,0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Nn.subVectors(e,t),un.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return zn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ji.subVectors(i,n),Zi.subVectors(r,n),ma.subVectors(e,n);const l=Ji.dot(ma),c=Zi.dot(ma);if(l<=0&&c<=0)return t.copy(n);ga.subVectors(e,i);const u=Ji.dot(ga),h=Zi.dot(ga);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ji,o);va.subVectors(e,r);const p=Ji.dot(va),g=Zi.dot(va);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zi,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return Eu.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Eu,a);const v=1/(d+m+f);return o=m*v,a=f*v,t.copy(n).addScaledVector(Ji,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Mv=0;class an extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Gn,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_o,this.blendDst=yo,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gn&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vn extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new R,Ur=new pe;class kt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=il,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Of extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uf extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Sv=0;const Qt=new Ue,xa=new st,Qi=new R,$t=new pi,Hs=new pi,yt=new R;class Ct extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?Uf:Of)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors($t.min,Hs.min),$t.expandByPoint(yt),yt.addVectors($t.max,Hs.max),$t.expandByPoint(yt)):($t.expandByPoint(Hs.min),$t.expandByPoint(Hs.max))}$t.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),yt.add(Qi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new R,u[P]=new R;const h=new R,f=new R,p=new R,g=new pe,m=new pe,d=new pe,v=new R,S=new R;function _(P,H,ae){h.fromArray(i,P*3),f.fromArray(i,H*3),p.fromArray(i,ae*3),g.fromArray(o,P*2),m.fromArray(o,H*2),d.fromArray(o,ae*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const z=1/(m.x*d.y-d.x*m.y);!isFinite(z)||(v.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(z),S.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(z),c[P].add(v),c[H].add(v),c[ae].add(v),u[P].add(S),u[H].add(S),u[ae].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,H=y.length;P<H;++P){const ae=y[P],z=ae.start,N=ae.count;for(let $=z,Z=z+N;$<Z;$+=3)_(n[$+0],n[$+1],n[$+2])}const M=new R,L=new R,D=new R,x=new R;function C(P){D.fromArray(r,P*3),x.copy(D);const H=c[P];M.copy(H),M.sub(D.multiplyScalar(D.dot(H))).normalize(),L.crossVectors(x,H);const z=L.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=z}for(let P=0,H=y.length;P<H;++P){const ae=y[P],z=ae.start,N=ae.count;for(let $=z,Z=z+N;$<Z;$+=3)C(n[$+0]),C(n[$+1]),C(n[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let v=0;v<u;v++)f[g++]=c[p++]}return new kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new Ue,es=new Gl,_a=new Gi,Zn=new R,Qn=new R,ei=new R,ya=new R,ba=new R,Ma=new R,zr=new R,Br=new R,kr=new R,Vr=new pe,Hr=new pe,Gr=new pe,Sa=new R,Wr=new R;class pt extends st{constructor(e=new Ct,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),e.ray.intersectsSphere(_a)===!1)||(Au.copy(r).invert(),es.copy(e.ray).applyMatrix4(Au),n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const v=p[m],S=i[v.materialIndex],_=Math.max(v.start,g.start),y=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=_,L=y;M<L;M+=3){const D=a.getX(M),x=a.getX(M+1),C=a.getX(M+2);o=jr(this,S,e,es,l,c,u,h,f,D,x,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let v=m,S=d;v<S;v+=3){const _=a.getX(v),y=a.getX(v+1),M=a.getX(v+2);o=jr(this,i,e,es,l,c,u,h,f,_,y,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){const v=p[m],S=i[v.materialIndex],_=Math.max(v.start,g.start),y=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=_,L=y;M<L;M+=3){const D=M,x=M+1,C=M+2;o=jr(this,S,e,es,l,c,u,h,f,D,x,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let v=m,S=d;v<S;v+=3){const _=v,y=v+1,M=v+2;o=jr(this,i,e,es,l,c,u,h,f,_,y,M),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function wv(s,e,t,n,i,r,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==gn,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:s}}function jr(s,e,t,n,i,r,o,a,l,c,u,h){Zn.fromBufferAttribute(i,c),Qn.fromBufferAttribute(i,u),ei.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){zr.set(0,0,0),Br.set(0,0,0),kr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],v=r[g];d!==0&&(ya.fromBufferAttribute(v,c),ba.fromBufferAttribute(v,u),Ma.fromBufferAttribute(v,h),o?(zr.addScaledVector(ya,d),Br.addScaledVector(ba,d),kr.addScaledVector(Ma,d)):(zr.addScaledVector(ya.sub(Zn),d),Br.addScaledVector(ba.sub(Qn),d),kr.addScaledVector(Ma.sub(ei),d)))}Zn.add(zr),Qn.add(Br),ei.add(kr)}s.isSkinnedMesh&&(s.boneTransform(c,Zn),s.boneTransform(u,Qn),s.boneTransform(h,ei));const p=wv(s,e,t,n,Zn,Qn,ei,Sa);if(p){a&&(Vr.fromBufferAttribute(a,c),Hr.fromBufferAttribute(a,u),Gr.fromBufferAttribute(a,h),p.uv=zn.getUV(Sa,Zn,Qn,ei,Vr,Hr,Gr,new pe)),l&&(Vr.fromBufferAttribute(l,c),Hr.fromBufferAttribute(l,u),Gr.fromBufferAttribute(l,h),p.uv2=zn.getUV(Sa,Zn,Qn,ei,Vr,Hr,Gr,new pe));const g={a:c,b:u,c:h,normal:new R,materialIndex:0};zn.getNormal(Zn,Qn,ei,g.normal),p.face=g}return p}class Ds extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(h,2));function g(m,d,v,S,_,y,M,L,D,x,C){const P=y/D,H=M/x,ae=y/2,z=M/2,N=L/2,$=D+1,Z=x+1;let te=0,j=0;const G=new R;for(let ue=0;ue<Z;ue++){const X=ue*H-z;for(let K=0;K<$;K++){const fe=K*P-ae;G[m]=fe*S,G[d]=X*_,G[v]=N,c.push(G.x,G.y,G.z),G[m]=0,G[d]=0,G[v]=L>0?1:-1,u.push(G.x,G.y,G.z),h.push(K/D),h.push(1-ue/x),te+=1}}for(let ue=0;ue<x;ue++)for(let X=0;X<D;X++){const K=f+X+$*ue,fe=f+X+$*(ue+1),ve=f+(X+1)+$*(ue+1),ce=f+(X+1)+$*ue;l.push(K,fe,ce),l.push(fe,ve,ce),j+=6}a.addGroup(p,j,C),p+=j,f+=te}}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){const e={};for(let t=0;t<s.length;t++){const n=ws(s[t]);for(const i in n)e[i]=n[i]}return e}function Tv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zf(s){return s.getRenderTarget()===null&&s.outputEncoding===Ze?bn:cr}const pn={clone:ws,merge:Ut};var Ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ev,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bf extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Bf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class Cv extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new zt(ts,ns,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new zt(ts,ns,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new zt(ts,ns,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new zt(ts,ns,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new zt(ts,ns,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new zt(ts,ns,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Wn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class kf extends Tt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xs,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lv extends wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new kf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ds(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:dt});r.uniforms.tEquirect.value=t;const o=new pt(i,r),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=Gt),new Cv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const wa=new R,Pv=new R,Rv=new Yt;class Ei{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wa.subVectors(n,t).cross(Pv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rv.getNormalMatrix(e),i=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Gi,Xr=new R;class Wl{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],v=n[13],S=n[14],_=n[15];return t[0].setComponents(a-i,h-l,m-f,_-d).normalize(),t[1].setComponents(a+i,h+l,m+f,_+d).normalize(),t[2].setComponents(a+r,h+c,m+p,_+v).normalize(),t[3].setComponents(a-r,h-c,m-p,_-v).normalize(),t[4].setComponents(a-o,h-u,m-g,_-S).normalize(),t[5].setComponents(a+o,h+u,m+g,_+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xr.x=i.normal.x>0?e.max.x:e.min.x,Xr.y=i.normal.y>0?e.max.y:e.min.y,Xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Dv(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class jl extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],m=[],d=[];for(let v=0;v<u;v++){const S=v*f-o;for(let _=0;_<c;_++){const y=_*h-r;g.push(y,-S,0),m.push(0,0,1),d.push(_/a),d.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<a;S++){const _=S+c*v,y=S+c*(v+1),M=S+1+c*(v+1),L=S+1+c*v;p.push(_,y,L),p.push(y,M,L)}this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(m,3)),this.setAttribute("uv",new rt(d,2))}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv="vec3 transformed = vec3( position );",kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Hv=`#ifdef USE_IRIDESCENCE
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
#endif`,Gv=`#ifdef USE_BUMPMAP
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
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zv=`#define PI 3.141592653589793
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
}`,Qv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
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
}`,v0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
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
#endif`,M0=`#if defined( USE_ENVMAP )
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
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
#endif`,C0=`struct PhysicalMaterial {
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
}`,L0=`
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,q0=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dx=`float getShadowMask() {
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
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mx=`#ifdef USE_SKINNING
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
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,wx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Tx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ex=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ax=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Cx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Lx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ux=`#include <common>
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
}`,zx=`#if DEPTH_PACKING == 3200
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
}`,Bx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
}`,Yx=`#define MATCAP
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
}`,Kx=`#define MATCAP
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
}`,Jx=`#define NORMAL
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
}`,Zx=`#define NORMAL
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
}`,Qx=`#define PHONG
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
}`,e_=`#define PHONG
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
}`,t_=`#define STANDARD
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
}`,n_=`#define STANDARD
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
}`,i_=`#define TOON
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
}`,s_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,c_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,Fe={alphamap_fragment:Iv,alphamap_pars_fragment:Nv,alphatest_fragment:Fv,alphatest_pars_fragment:Ov,aomap_fragment:Uv,aomap_pars_fragment:zv,begin_vertex:Bv,beginnormal_vertex:kv,bsdfs:Vv,iridescence_fragment:Hv,bumpmap_pars_fragment:Gv,clipping_planes_fragment:Wv,clipping_planes_pars_fragment:jv,clipping_planes_pars_vertex:Xv,clipping_planes_vertex:qv,color_fragment:$v,color_pars_fragment:Yv,color_pars_vertex:Kv,color_vertex:Jv,common:Zv,cube_uv_reflection_fragment:Qv,defaultnormal_vertex:e0,displacementmap_pars_vertex:t0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,encodings_fragment:r0,encodings_pars_fragment:o0,envmap_fragment:a0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:M0,envmap_vertex:h0,fog_vertex:f0,fog_pars_vertex:d0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:y0,lights_pars_begin:b0,lights_toon_fragment:S0,lights_toon_pars_fragment:w0,lights_phong_fragment:T0,lights_phong_pars_fragment:E0,lights_physical_fragment:A0,lights_physical_pars_fragment:C0,lights_fragment_begin:L0,lights_fragment_maps:P0,lights_fragment_end:R0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:F0,map_fragment:O0,map_pars_fragment:U0,map_particle_fragment:z0,map_particle_pars_fragment:B0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:V0,morphcolor_vertex:H0,morphnormal_vertex:G0,morphtarget_pars_vertex:W0,morphtarget_vertex:j0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:$0,normal_pars_vertex:Y0,normal_vertex:K0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:ex,iridescence_pars_fragment:tx,output_fragment:nx,packing:ix,premultiplied_alpha_fragment:sx,project_vertex:rx,dithering_fragment:ox,dithering_pars_fragment:ax,roughnessmap_fragment:lx,roughnessmap_pars_fragment:cx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:hx,shadowmap_vertex:fx,shadowmask_pars_fragment:dx,skinbase_vertex:px,skinning_pars_vertex:mx,skinning_vertex:gx,skinnormal_vertex:vx,specularmap_fragment:xx,specularmap_pars_fragment:_x,tonemapping_fragment:yx,tonemapping_pars_fragment:bx,transmission_fragment:Mx,transmission_pars_fragment:Sx,uv_pars_fragment:wx,uv_pars_vertex:Tx,uv_vertex:Ex,uv2_pars_fragment:Ax,uv2_pars_vertex:Cx,uv2_vertex:Lx,worldpos_vertex:Px,background_vert:Rx,background_frag:Dx,backgroundCube_vert:Ix,backgroundCube_frag:Nx,cube_vert:Fx,cube_frag:Ox,depth_vert:Ux,depth_frag:zx,distanceRGBA_vert:Bx,distanceRGBA_frag:kx,equirect_vert:Vx,equirect_frag:Hx,linedashed_vert:Gx,linedashed_frag:Wx,meshbasic_vert:jx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:$x,meshmatcap_vert:Yx,meshmatcap_frag:Kx,meshnormal_vert:Jx,meshnormal_frag:Zx,meshphong_vert:Qx,meshphong_frag:e_,meshphysical_vert:t_,meshphysical_frag:n_,meshtoon_vert:i_,meshtoon_frag:s_,points_vert:r_,points_frag:o_,shadow_vert:a_,shadow_frag:l_,sprite_vert:c_,sprite_frag:u_},xe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Yt},uv2Transform:{value:new Yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}}},Wt={basic:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ut([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ut([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ut([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ut([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ut([xe.points,xe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ut([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ut([xe.common,xe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ut([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ut([xe.sprite,xe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ut([xe.common,xe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ut([xe.lights,xe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Wt.physical={uniforms:Ut([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const qr={r:0,b:0,g:0};function h_(s,e,t,n,i,r,o){const a=new Re(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(d,v){let S=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const y=s.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?m(a,l):_&&_.isColor&&(m(_,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===No)?(u===void 0&&(u=new pt(new Ds(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:ws(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,(h!==_||f!==_.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new pt(new jl(2,2),new bt({name:"BackgroundMaterial",uniforms:ws(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,v){d.getRGB(qr,zf(s)),n.buffers.color.setClear(qr.r,qr.g,qr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(d,v=1){a.set(d),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:g}}function f_(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function h(N,$,Z,te,j){let G=!1;if(o){const ue=m(te,Z,$);c!==ue&&(c=ue,p(c.object)),G=v(N,te,Z,j),G&&S(N,te,Z,j)}else{const ue=$.wireframe===!0;(c.geometry!==te.id||c.program!==Z.id||c.wireframe!==ue)&&(c.geometry=te.id,c.program=Z.id,c.wireframe=ue,G=!0)}j!==null&&t.update(j,34963),(G||u)&&(u=!1,x(N,$,Z,te),j!==null&&s.bindBuffer(34963,t.get(j).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function m(N,$,Z){const te=Z.wireframe===!0;let j=a[N.id];j===void 0&&(j={},a[N.id]=j);let G=j[$.id];G===void 0&&(G={},j[$.id]=G);let ue=G[te];return ue===void 0&&(ue=d(f()),G[te]=ue),ue}function d(N){const $=[],Z=[],te=[];for(let j=0;j<i;j++)$[j]=0,Z[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Z,attributeDivisors:te,object:N,attributes:{},index:null}}function v(N,$,Z,te){const j=c.attributes,G=$.attributes;let ue=0;const X=Z.getAttributes();for(const K in X)if(X[K].location>=0){const ve=j[K];let ce=G[K];if(ce===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),ve===void 0||ve.attribute!==ce||ce&&ve.data!==ce.data)return!0;ue++}return c.attributesNum!==ue||c.index!==te}function S(N,$,Z,te){const j={},G=$.attributes;let ue=0;const X=Z.getAttributes();for(const K in X)if(X[K].location>=0){let ve=G[K];ve===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));const ce={};ce.attribute=ve,ve&&ve.data&&(ce.data=ve.data),j[K]=ce,ue++}c.attributes=j,c.attributesNum=ue,c.index=te}function _(){const N=c.newAttributes;for(let $=0,Z=N.length;$<Z;$++)N[$]=0}function y(N){M(N,0)}function M(N,$){const Z=c.newAttributes,te=c.enabledAttributes,j=c.attributeDivisors;Z[N]=1,te[N]===0&&(s.enableVertexAttribArray(N),te[N]=1),j[N]!==$&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,$),j[N]=$)}function L(){const N=c.newAttributes,$=c.enabledAttributes;for(let Z=0,te=$.length;Z<te;Z++)$[Z]!==N[Z]&&(s.disableVertexAttribArray(Z),$[Z]=0)}function D(N,$,Z,te,j,G){n.isWebGL2===!0&&(Z===5124||Z===5125)?s.vertexAttribIPointer(N,$,Z,j,G):s.vertexAttribPointer(N,$,Z,te,j,G)}function x(N,$,Z,te){if(n.isWebGL2===!1&&(N.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const j=te.attributes,G=Z.getAttributes(),ue=$.defaultAttributeValues;for(const X in G){const K=G[X];if(K.location>=0){let fe=j[X];if(fe===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),fe!==void 0){const ve=fe.normalized,ce=fe.itemSize,B=t.get(fe);if(B===void 0)continue;const Ee=B.buffer,de=B.type,we=B.bytesPerElement;if(fe.isInterleavedBufferAttribute){const _e=fe.data,Ne=_e.stride,w=fe.offset;if(_e.isInstancedInterleavedBuffer){for(let E=0;E<K.locationSize;E++)M(K.location+E,_e.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let E=0;E<K.locationSize;E++)y(K.location+E);s.bindBuffer(34962,Ee);for(let E=0;E<K.locationSize;E++)D(K.location+E,ce/K.locationSize,de,ve,Ne*we,(w+ce/K.locationSize*E)*we)}else{if(fe.isInstancedBufferAttribute){for(let _e=0;_e<K.locationSize;_e++)M(K.location+_e,fe.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let _e=0;_e<K.locationSize;_e++)y(K.location+_e);s.bindBuffer(34962,Ee);for(let _e=0;_e<K.locationSize;_e++)D(K.location+_e,ce/K.locationSize,de,ve,ce*we,ce/K.locationSize*_e*we)}}else if(ue!==void 0){const ve=ue[X];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(K.location,ve);break;case 3:s.vertexAttrib3fv(K.location,ve);break;case 4:s.vertexAttrib4fv(K.location,ve);break;default:s.vertexAttrib1fv(K.location,ve)}}}}L()}function C(){ae();for(const N in a){const $=a[N];for(const Z in $){const te=$[Z];for(const j in te)g(te[j].object),delete te[j];delete $[Z]}delete a[N]}}function P(N){if(a[N.id]===void 0)return;const $=a[N.id];for(const Z in $){const te=$[Z];for(const j in te)g(te[j].object),delete te[j];delete $[Z]}delete a[N.id]}function H(N){for(const $ in a){const Z=a[$];if(Z[N.id]===void 0)continue;const te=Z[N.id];for(const j in te)g(te[j].object),delete te[j];delete Z[N.id]}}function ae(){z(),u=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:H,initAttributes:_,enableAttribute:y,disableUnusedAttributes:L}}function d_(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function p_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),d=s.getParameter(36347),v=s.getParameter(36348),S=s.getParameter(36349),_=f>0,y=o||e.has("OES_texture_float"),M=_&&y,L=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:L}}function m_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ei,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,v=s.get(h);if(!i||g===null||g.length===0||r&&!d)r?u(null):c();else{const S=r?0:n,_=S*4;let y=v.clippingState||null;l.value=y,y=u(g,f,_,p);for(let M=0;M!==_;++M)y[M]=t[M];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const v=p+m*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<v)&&(d=new Float32Array(v));for(let _=0,y=p;_!==m;++_,y+=4)o.copy(h[_]).applyMatrix4(S,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function g_(s){let e=new WeakMap;function t(o,a){return a===Qa?o.mapping=xs:a===el&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qa||a===el)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lv(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class yr extends Bf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ls=4,Cu=[.125,.215,.35,.446,.526,.582],Ri=20,Ta=new yr,Lu=new Re;let Ea=null;const Ai=(1+Math.sqrt(5))/2,ss=1/Ai,Pu=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ai,ss),new R(0,Ai,-ss),new R(ss,0,Ai),new R(-ss,0,Ai),new R(Ai,ss,0),new R(-Ai,ss,0)];class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ea=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:bs,format:nn,encoding:ki,depthBuffer:!1},i=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(r)),this._blurMaterial=x_(r,e,t)}return i}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,i){const a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Lu),u.toneMapping=Wn,u.autoClear=!1;const p=new vn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new pt(new Ds,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Lu),m=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):S===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;$r(i,S*_,v>2?_:0,_,_),u.setRenderTarget(i),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xs||e.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Pu[(i-1)%Pu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):Ri;d>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ri}`);const v=[];let S=0;for(let D=0;D<Ri;++D){const x=D/m,C=Math.exp(-x*x/2);v.push(C),D===0?S+=C:D<d&&(S+=2*C)}for(let D=0;D<v.length;D++)v[D]=v[D]/S;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[i],M=3*y*(i>_-ls?i-_+ls:0),L=4*(this._cubeSize-y);$r(t,M,L,3*y,2*y),l.setRenderTarget(t),l.render(h,Ta)}}function v_(s){const e=[],t=[],n=[];let i=s;const r=s-ls+1+Cu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ls?l=Cu[o-s+ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,v=1,S=new Float32Array(m*g*p),_=new Float32Array(d*g*p),y=new Float32Array(v*g*p);for(let L=0;L<p;L++){const D=L%3*2/3-1,x=L>2?0:-1,C=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];S.set(C,m*g*L),_.set(f,d*g*L);const P=[L,L,L,L,L,L];y.set(P,v*g*L)}const M=new Ct;M.setAttribute("position",new kt(S,m)),M.setAttribute("uv",new kt(_,d)),M.setAttribute("faceIndex",new kt(y,v)),e.push(M),i>ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Du(s,e,t){const n=new wt(s,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function x_(s,e,t){const n=new Float32Array(Ri),i=new R(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:dt,depthTest:!1,depthWrite:!1})}function Iu(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:dt,depthTest:!1,depthWrite:!1})}function Nu(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dt,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function __(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qa||l===el,u=l===xs||l===_s;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ru(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ru(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function y_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function b_(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,v=m.length;d<v;d++)e.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const S=p.array;m=p.version;for(let _=0,y=S.length;_<y;_+=3){const M=S[_+0],L=S[_+1],D=S[_+2];f.push(M,L,L,D,D,M)}}else{const S=g.array;m=g.version;for(let _=0,y=S.length/3-1;_<y;_+=3){const M=_+0,L=_+1,D=_+2;f.push(M,L,L,D,D,M)}}const d=new(Pf(f)?Uf:Of)(f,1);d.version=m;const v=r.get(h);v&&e.remove(v),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function M_(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){s.drawElements(r,p,a,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,f*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function S_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w_(s,e){return s[0]-e[0]}function T_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function E_(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==d){let Z=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",Z)};var g=Z;v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let P=0;y===!0&&(P=1),M===!0&&(P=2),L===!0&&(P=3);let H=u.attributes.position.count*P,ae=1;H>e.maxTextureSize&&(ae=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*ae*4*d),N=new Nf(z,H,ae,d);N.type=ai,N.needsUpdate=!0;const $=P*4;for(let te=0;te<d;te++){const j=D[te],G=x[te],ue=C[te],X=H*ae*4*te;for(let K=0;K<j.count;K++){const fe=K*$;y===!0&&(o.fromBufferAttribute(j,K),z[X+fe+0]=o.x,z[X+fe+1]=o.y,z[X+fe+2]=o.z,z[X+fe+3]=0),M===!0&&(o.fromBufferAttribute(G,K),z[X+fe+4]=o.x,z[X+fe+5]=o.y,z[X+fe+6]=o.z,z[X+fe+7]=0),L===!0&&(o.fromBufferAttribute(ue,K),z[X+fe+8]=o.x,z[X+fe+9]=o.y,z[X+fe+10]=o.z,z[X+fe+11]=ue.itemSize===4?o.w:1)}}v={count:d,texture:N,size:new pe(H,ae)},r.set(u,v),u.addEventListener("dispose",Z)}let S=0;for(let y=0;y<p.length;y++)S+=p[y];const _=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let M=0;M<m;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<m;M++){const L=d[M];L[0]=M,L[1]=p[M]}d.sort(T_);for(let M=0;M<8;M++)M<m&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(w_);const v=u.morphAttributes.position,S=u.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const L=a[M],D=L[0],x=L[1];D!==Number.MAX_SAFE_INTEGER&&x?(v&&u.getAttribute("morphTarget"+M)!==v[D]&&u.setAttribute("morphTarget"+M,v[D]),S&&u.getAttribute("morphNormal"+M)!==S[D]&&u.setAttribute("morphNormal"+M,S[D]),i[M]=x,_+=x):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),S&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const y=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function A_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Hf=new Tt,Gf=new Nf,Wf=new pv,jf=new kf,Fu=[],Ou=[],Uu=new Float32Array(16),zu=new Float32Array(9),Bu=new Float32Array(4);function Is(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Fu[i];if(r===void 0&&(r=new Float32Array(i),Fu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Oo(s,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function C_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function L_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),gt(t,e)}}function P_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),gt(t,e)}}function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),gt(t,e)}}function D_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Bu.set(n),s.uniformMatrix2fv(this.addr,!1,Bu),gt(t,n)}}function I_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;zu.set(n),s.uniformMatrix3fv(this.addr,!1,zu),gt(t,n)}}function N_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Uu.set(n),s.uniformMatrix4fv(this.addr,!1,Uu),gt(t,n)}}function F_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function O_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),gt(t,e)}}function U_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),gt(t,e)}}function z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),gt(t,e)}}function B_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),gt(t,e)}}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),gt(t,e)}}function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),gt(t,e)}}function G_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Hf,i)}function W_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wf,i)}function j_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jf,i)}function X_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gf,i)}function q_(s){switch(s){case 5126:return C_;case 35664:return L_;case 35665:return P_;case 35666:return R_;case 35674:return D_;case 35675:return I_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return U_;case 35669:case 35673:return z_;case 5125:return B_;case 36294:return k_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return X_}}function $_(s,e){s.uniform1fv(this.addr,e)}function Y_(s,e){const t=Is(e,this.size,2);s.uniform2fv(this.addr,t)}function K_(s,e){const t=Is(e,this.size,3);s.uniform3fv(this.addr,t)}function J_(s,e){const t=Is(e,this.size,4);s.uniform4fv(this.addr,t)}function Z_(s,e){const t=Is(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Q_(s,e){const t=Is(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ey(s,e){const t=Is(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ty(s,e){s.uniform1iv(this.addr,e)}function ny(s,e){s.uniform2iv(this.addr,e)}function iy(s,e){s.uniform3iv(this.addr,e)}function sy(s,e){s.uniform4iv(this.addr,e)}function ry(s,e){s.uniform1uiv(this.addr,e)}function oy(s,e){s.uniform2uiv(this.addr,e)}function ay(s,e){s.uniform3uiv(this.addr,e)}function ly(s,e){s.uniform4uiv(this.addr,e)}function cy(s,e,t){const n=this.cache,i=e.length,r=Oo(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Hf,r[o])}function uy(s,e,t){const n=this.cache,i=e.length,r=Oo(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Wf,r[o])}function hy(s,e,t){const n=this.cache,i=e.length,r=Oo(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||jf,r[o])}function fy(s,e,t){const n=this.cache,i=e.length,r=Oo(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gf,r[o])}function dy(s){switch(s){case 5126:return $_;case 35664:return Y_;case 35665:return K_;case 35666:return J_;case 35674:return Z_;case 35675:return Q_;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return oy;case 36295:return ay;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return fy}}class py{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=q_(t.type)}}class my{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=dy(t.type)}}class gy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function ku(s,e){s.seq.push(e),s.map[e.id]=e}function vy(s,e,t){const n=s.name,i=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),o=Aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ku(t,c===void 0?new py(a,s,e):new my(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new gy(a),ku(t,h)),t=h}}}class fo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);vy(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Vu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let xy=0;function _y(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function yy(s){switch(s){case ki:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Hu(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+_y(s.getShaderSource(e),o)}else return i}function by(s,e){const t=yy(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function My(s,e){let t;switch(e){case Ag:t="Linear";break;case Cg:t="Reinhard";break;case Lg:t="OptimizedCineon";break;case Pg:t="ACESFilmic";break;case Rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sy(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function wy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ty(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ys(s){return s!==""}function Gu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(s){return s.replace(Ey,Ay)}function Ay(s,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ol(t)}const Cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(s){return s.replace(Cy,Ly)}function Ly(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Py(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$s&&(e="SHADOWMAP_TYPE_VSM"),e}function Ry(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xs:case _s:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function Iy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Tg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function Ny(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fy(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Py(t),c=Ry(t),u=Dy(t),h=Iy(t),f=Ny(t),p=t.isWebGL2?"":Sy(t),g=wy(r),m=i.createProgram();let d,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Ys).join(`
`),d.length>0&&(d+=`
`),v=[p,g].filter(Ys).join(`
`),v.length>0&&(v+=`
`)):(d=[Xu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),v=[p,Xu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?My("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,by("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=ol(o),o=Gu(o,t),o=Wu(o,t),a=ol(a),a=Gu(a,t),a=Wu(a,t),o=ju(o),a=ju(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=S+d+o,y=S+v+a,M=Vu(i,35633,_),L=Vu(i,35632,y);if(i.attachShader(m,M),i.attachShader(m,L),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(M).trim(),H=i.getShaderInfoLog(L).trim();let ae=!0,z=!0;if(i.getProgramParameter(m,35714)===!1){ae=!1;const N=Hu(i,M,"vertex"),$=Hu(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+N+`
`+$)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||H==="")&&(z=!1);z&&(this.diagnostics={runnable:ae,programLog:C,vertexShader:{log:P,prefix:d},fragmentShader:{log:H,prefix:v}})}i.deleteShader(M),i.deleteShader(L);let D;this.getUniforms=function(){return D===void 0&&(D=new fo(i,m)),D};let x;return this.getAttributes=function(){return x===void 0&&(x=Ty(i,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=xy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=L,this}let Oy=0;class Uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zy(e),t.set(e,n)),n}}class zy{constructor(e){this.id=Oy++,this.code=e,this.usedTimes=0}}function By(s,e,t,n,i,r,o){const a=new Ff,l=new Uy,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,C,P,H,ae){const z=H.fog,N=ae.geometry,$=x.isMeshStandardMaterial?H.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),te=!!Z&&Z.mapping===No?Z.image.height:null,j=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ue=G!==void 0?G.length:0;let X=0;N.morphAttributes.position!==void 0&&(X=1),N.morphAttributes.normal!==void 0&&(X=2),N.morphAttributes.color!==void 0&&(X=3);let K,fe,ve,ce;if(j){const Ne=Wt[j];K=Ne.vertexShader,fe=Ne.fragmentShader}else K=x.vertexShader,fe=x.fragmentShader,l.update(x),ve=l.getVertexShaderID(x),ce=l.getFragmentShaderID(x);const B=s.getRenderTarget(),Ee=x.alphaTest>0,de=x.clearcoat>0,we=x.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:x.type,vertexShader:K,fragmentShader:fe,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?s.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:ki,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:te,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Jg,tangentSpaceNormalMap:x.normalMapType===Fo,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ze,clearcoat:de,clearcoatMap:de&&!!x.clearcoatMap,clearcoatRoughnessMap:de&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!x.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!x.iridescenceMap,iridescenceThicknessMap:we&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Gn,alphaMap:!!x.alphaMap,alphaTest:Ee,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!N.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ae.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:X,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Wn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gn,flipSided:x.side===rn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)C.push(P),C.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(C,x),S(C,x),C.push(s.outputEncoding)),C.push(x.customProgramCacheKey),C.join()}function v(x,C){x.push(C.precision),x.push(C.outputEncoding),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.combine),x.push(C.vertexUvs),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function S(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),x.push(a.mask)}function _(x){const C=g[x.type];let P;if(C){const H=Wt[C];P=pn.clone(H.uniforms)}else P=x.uniforms;return P}function y(x,C){let P;for(let H=0,ae=c.length;H<ae;H++){const z=c[H];if(z.cacheKey===C){P=z,++P.usedTimes;break}}return P===void 0&&(P=new Fy(s,C,x,r),c.push(P)),P}function M(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:L,programs:c,dispose:D}}function ky(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Vy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $u(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,g,m,d){let v=s[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},s[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=d),e++,v}function a(h,f,p,g,m,d){const v=o(h,f,p,g,m,d);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function l(h,f,p,g,m,d){const v=o(h,f,p,g,m,d);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||Vy),n.length>1&&n.sort(f||qu),i.length>1&&i.sort(f||qu)}function u(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Hy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new $u,s.set(n,[o])):i>=r.length?(o=new $u,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Wy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jy=0;function Xy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qy(s,e){const t=new Gy,n=Wy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new R);const r=new R,o=new Ue,a=new Ue;function l(u,h){let f=0,p=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,d=0,v=0,S=0,_=0,y=0,M=0,L=0,D=0,x=0;u.sort(Xy);const C=h!==!0?Math.PI:1;for(let H=0,ae=u.length;H<ae;H++){const z=u[H],N=z.color,$=z.intensity,Z=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=N.r*$*C,p+=N.g*$*C,g+=N.b*$*C;else if(z.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(z.sh.coefficients[j],$);else if(z.isDirectionalLight){const j=t.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*C),z.castShadow){const G=z.shadow,ue=n.get(z);ue.shadowBias=G.bias,ue.shadowNormalBias=G.normalBias,ue.shadowRadius=G.radius,ue.shadowMapSize=G.mapSize,i.directionalShadow[m]=ue,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=z.shadow.matrix,y++}i.directional[m]=j,m++}else if(z.isSpotLight){const j=t.get(z);j.position.setFromMatrixPosition(z.matrixWorld),j.color.copy(N).multiplyScalar($*C),j.distance=Z,j.coneCos=Math.cos(z.angle),j.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),j.decay=z.decay,i.spot[v]=j;const G=z.shadow;if(z.map&&(i.spotLightMap[D]=z.map,D++,G.updateMatrices(z),z.castShadow&&x++),i.spotLightMatrix[v]=G.matrix,z.castShadow){const ue=n.get(z);ue.shadowBias=G.bias,ue.shadowNormalBias=G.normalBias,ue.shadowRadius=G.radius,ue.shadowMapSize=G.mapSize,i.spotShadow[v]=ue,i.spotShadowMap[v]=te,L++}v++}else if(z.isRectAreaLight){const j=t.get(z);j.color.copy(N).multiplyScalar($),j.halfWidth.set(z.width*.5,0,0),j.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=j,S++}else if(z.isPointLight){const j=t.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*C),j.distance=z.distance,j.decay=z.decay,z.castShadow){const G=z.shadow,ue=n.get(z);ue.shadowBias=G.bias,ue.shadowNormalBias=G.normalBias,ue.shadowRadius=G.radius,ue.shadowMapSize=G.mapSize,ue.shadowCameraNear=G.camera.near,ue.shadowCameraFar=G.camera.far,i.pointShadow[d]=ue,i.pointShadowMap[d]=te,i.pointShadowMatrix[d]=z.shadow.matrix,M++}i.point[d]=j,d++}else if(z.isHemisphereLight){const j=t.get(z);j.skyColor.copy(z.color).multiplyScalar($*C),j.groundColor.copy(z.groundColor).multiplyScalar($*C),i.hemi[_]=j,_++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==m||P.pointLength!==d||P.spotLength!==v||P.rectAreaLength!==S||P.hemiLength!==_||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==L||P.numSpotMaps!==D)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=d,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=L+D-x,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=x,P.directionalLength=m,P.pointLength=d,P.spotLength=v,P.rectAreaLength=S,P.hemiLength=_,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=L,P.numSpotMaps=D,i.version=jy++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const v=h.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const y=u[S];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(y.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(v),d++}}}return{setup:l,setupView:c,state:i}}function Yu(s,e){const t=new qy(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $y(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Yu(s,e),t.set(r,[l])):o>=a.length?(l=new Yu(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Yy extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ky extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zy=`uniform sampler2D shadow_pass;
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
}`;function Qy(s,e,t){let n=new Wl;const i=new pe,r=new pe,o=new Qe,a=new Yy({depthPacking:Kg}),l=new Ky,c={},u=t.maxTextureSize,h={0:rn,1:zi,2:gn},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Jy,fragmentShader:Zy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new pt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf,this.render=function(y,M,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const D=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(dt),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let H=0,ae=y.length;H<ae;H++){const z=y[H],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const $=N.getFrameExtents();if(i.multiply($),r.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/$.x),i.x=r.x*$.x,N.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/$.y),i.y=r.y*$.y,N.mapSize.y=r.y)),N.map===null){const te=this.type!==$s?{minFilter:Ve,magFilter:Ve}:{};N.map=new wt(i.x,i.y,te),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const Z=N.getViewportCount();for(let te=0;te<Z;te++){const j=N.getViewport(te);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),P.viewport(o),N.updateMatrices(z,te),n=N.getFrustum(),_(M,L,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===$s&&v(N,L),N.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(D,x,C)};function v(y,M){const L=e.update(m);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wt(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(M,null,L,f,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(M,null,L,p,m,null)}function S(y,M,L,D,x,C){let P=null;const H=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(H!==void 0?P=H:P=L.isPointLight===!0?l:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const ae=P.uuid,z=M.uuid;let N=c[ae];N===void 0&&(N={},c[ae]=N);let $=N[z];$===void 0&&($=P.clone(),N[z]=$),P=$}return P.visible=M.visible,P.wireframe=M.wireframe,C===$s?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:h[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(L.matrixWorld),P.nearDistance=D,P.farDistance=x),P}function _(y,M,L,D,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===$s)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const H=e.update(y),ae=y.material;if(Array.isArray(ae)){const z=H.groups;for(let N=0,$=z.length;N<$;N++){const Z=z[N],te=ae[Z.materialIndex];if(te&&te.visible){const j=S(y,te,D,L.near,L.far,x);s.renderBufferDirect(L,null,H,j,y,Z)}}}else if(ae.visible){const z=S(y,ae,D,L.near,L.far,x);s.renderBufferDirect(L,null,H,z,y,null)}}const P=y.children;for(let H=0,ae=P.length;H<ae;H++)_(P[H],M,L,D,x)}}function eb(s,e,t){const n=t.isWebGL2;function i(){let O=!1;const re=new Qe;let ge=null;const Me=new Qe(0,0,0,0);return{setMask:function(Ae){ge!==Ae&&!O&&(s.colorMask(Ae,Ae,Ae,Ae),ge=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,Ye,xt,Lt,gi){gi===!0&&(Ae*=Lt,Ye*=Lt,xt*=Lt),re.set(Ae,Ye,xt,Lt),Me.equals(re)===!1&&(s.clearColor(Ae,Ye,xt,Lt),Me.copy(re))},reset:function(){O=!1,ge=null,Me.set(-1,0,0,0)}}}function r(){let O=!1,re=null,ge=null,Me=null;return{setTest:function(Ae){Ae?Ee(2929):de(2929)},setMask:function(Ae){re!==Ae&&!O&&(s.depthMask(Ae),re=Ae)},setFunc:function(Ae){if(ge!==Ae){switch(Ae){case xg:s.depthFunc(512);break;case _g:s.depthFunc(519);break;case yg:s.depthFunc(513);break;case Za:s.depthFunc(515);break;case bg:s.depthFunc(514);break;case Mg:s.depthFunc(518);break;case Sg:s.depthFunc(516);break;case wg:s.depthFunc(517);break;default:s.depthFunc(515)}ge=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){Me!==Ae&&(s.clearDepth(Ae),Me=Ae)},reset:function(){O=!1,re=null,ge=null,Me=null}}}function o(){let O=!1,re=null,ge=null,Me=null,Ae=null,Ye=null,xt=null,Lt=null,gi=null;return{setTest:function(nt){O||(nt?Ee(2960):de(2960))},setMask:function(nt){re!==nt&&!O&&(s.stencilMask(nt),re=nt)},setFunc:function(nt,Ln,Jt){(ge!==nt||Me!==Ln||Ae!==Jt)&&(s.stencilFunc(nt,Ln,Jt),ge=nt,Me=Ln,Ae=Jt)},setOp:function(nt,Ln,Jt){(Ye!==nt||xt!==Ln||Lt!==Jt)&&(s.stencilOp(nt,Ln,Jt),Ye=nt,xt=Ln,Lt=Jt)},setLocked:function(nt){O=nt},setClear:function(nt){gi!==nt&&(s.clearStencil(nt),gi=nt)},reset:function(){O=!1,re=null,ge=null,Me=null,Ae=null,Ye=null,xt=null,Lt=null,gi=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,v=!1,S=null,_=null,y=null,M=null,L=null,D=null,x=null,C=!1,P=null,H=null,ae=null,z=null,N=null;const $=s.getParameter(35661);let Z=!1,te=0;const j=s.getParameter(7938);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=te>=2);let G=null,ue={};const X=s.getParameter(3088),K=s.getParameter(2978),fe=new Qe().fromArray(X),ve=new Qe().fromArray(K);function ce(O,re,ge){const Me=new Uint8Array(4),Ae=s.createTexture();s.bindTexture(O,Ae),s.texParameteri(O,10241,9728),s.texParameteri(O,10240,9728);for(let Ye=0;Ye<ge;Ye++)s.texImage2D(re+Ye,0,6408,1,1,0,6408,5121,Me);return Ae}const B={};B[3553]=ce(3553,3553,1),B[34067]=ce(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(2929),l.setFunc(Za),U(!1),J(kc),Ee(2884),I(dt);function Ee(O){f[O]!==!0&&(s.enable(O),f[O]=!0)}function de(O){f[O]!==!1&&(s.disable(O),f[O]=!1)}function we(O,re){return p[O]!==re?(s.bindFramebuffer(O,re),p[O]=re,n&&(O===36009&&(p[36160]=re),O===36160&&(p[36009]=re)),!0):!1}function _e(O,re){let ge=m,Me=!1;if(O)if(ge=g.get(re),ge===void 0&&(ge=[],g.set(re,ge)),O.isWebGLMultipleRenderTargets){const Ae=O.texture;if(ge.length!==Ae.length||ge[0]!==36064){for(let Ye=0,xt=Ae.length;Ye<xt;Ye++)ge[Ye]=36064+Ye;ge.length=Ae.length,Me=!0}}else ge[0]!==36064&&(ge[0]=36064,Me=!0);else ge[0]!==1029&&(ge[0]=1029,Me=!0);Me&&(t.isWebGL2?s.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ne(O){return d!==O?(s.useProgram(O),d=O,!0):!1}const w={[oi]:32774,[ag]:32778,[lg]:32779};if(n)w[Wc]=32775,w[jc]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(w[Wc]=O.MIN_EXT,w[jc]=O.MAX_EXT)}const E={[cg]:0,[ug]:1,[hg]:768,[_o]:770,[vg]:776,[mg]:774,[dg]:772,[fg]:769,[yo]:771,[gg]:775,[pg]:773};function I(O,re,ge,Me,Ae,Ye,xt,Lt){if(O===dt){v===!0&&(de(3042),v=!1);return}if(v===!1&&(Ee(3042),v=!0),O!==og){if(O!==S||Lt!==C){if((_!==oi||L!==oi)&&(s.blendEquation(32774),_=oi,L=oi),Lt)switch(O){case Gn:s.blendFuncSeparate(1,771,1,771);break;case Vc:s.blendFunc(1,1);break;case Hc:s.blendFuncSeparate(0,769,0,1);break;case Gc:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gn:s.blendFuncSeparate(770,771,1,771);break;case Vc:s.blendFunc(770,1);break;case Hc:s.blendFuncSeparate(0,769,0,1);break;case Gc:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,M=null,D=null,x=null,S=O,C=Lt}return}Ae=Ae||re,Ye=Ye||ge,xt=xt||Me,(re!==_||Ae!==L)&&(s.blendEquationSeparate(w[re],w[Ae]),_=re,L=Ae),(ge!==y||Me!==M||Ye!==D||xt!==x)&&(s.blendFuncSeparate(E[ge],E[Me],E[Ye],E[xt]),y=ge,M=Me,D=Ye,x=xt),S=O,C=!1}function k(O,re){O.side===gn?de(2884):Ee(2884);let ge=O.side===rn;re&&(ge=!ge),U(ge),O.blending===Gn&&O.transparent===!1?I(dt):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Me=O.stencilWrite;c.setTest(Me),Me&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ee(32926):de(32926)}function U(O){P!==O&&(O?s.frontFace(2304):s.frontFace(2305),P=O)}function J(O){O!==ig?(Ee(2884),O!==H&&(O===kc?s.cullFace(1029):O===sg?s.cullFace(1028):s.cullFace(1032))):de(2884),H=O}function ne(O){O!==ae&&(Z&&s.lineWidth(O),ae=O)}function q(O,re,ge){O?(Ee(32823),(z!==re||N!==ge)&&(s.polygonOffset(re,ge),z=re,N=ge)):de(32823)}function le(O){O?Ee(3089):de(3089)}function ee(O){O===void 0&&(O=33984+$-1),G!==O&&(s.activeTexture(O),G=O)}function T(O,re,ge){ge===void 0&&(G===null?ge=33984+$-1:ge=G);let Me=ue[ge];Me===void 0&&(Me={type:void 0,texture:void 0},ue[ge]=Me),(Me.type!==O||Me.texture!==re)&&(G!==ge&&(s.activeTexture(ge),G=ge),s.bindTexture(O,re||B[O]),Me.type=O,Me.texture=re)}function b(){const O=ue[G];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function F(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(O){fe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),fe.copy(O))}function be(O){ve.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ve.copy(O))}function De(O,re){let ge=h.get(re);ge===void 0&&(ge=new WeakMap,h.set(re,ge));let Me=ge.get(O);Me===void 0&&(Me=s.getUniformBlockIndex(re,O.name),ge.set(O,Me))}function et(O,re){const Me=h.get(re).get(O);u.get(O)!==Me&&(s.uniformBlockBinding(re,Me,O.__bindingPointIndex),u.set(O,Me))}function vt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},G=null,ue={},p={},g=new WeakMap,m=[],d=null,v=!1,S=null,_=null,y=null,M=null,L=null,D=null,x=null,C=!1,P=null,H=null,ae=null,z=null,N=null,fe.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ee,disable:de,bindFramebuffer:we,drawBuffers:_e,useProgram:Ne,setBlending:I,setMaterial:k,setFlipSided:U,setCullFace:J,setLineWidth:ne,setPolygonOffset:q,setScissorTest:le,activeTexture:ee,bindTexture:T,unbindTexture:b,compressedTexImage2D:F,compressedTexImage3D:Y,texImage2D:Pe,texImage3D:Se,updateUBOMapping:De,uniformBlockBinding:et,texStorage2D:Q,texStorage3D:Te,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:ye,compressedTexSubImage3D:me,scissor:Ce,viewport:be,reset:vt}}function tb(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,b){return v?new OffscreenCanvas(T,b):hr("canvas")}function _(T,b,F,Y){let se=1;if((T.width>Y||T.height>Y)&&(se=Y/Math.max(T.width,T.height)),se<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const he=b?Mo:Math.floor,ye=he(se*T.width),me=he(se*T.height);m===void 0&&(m=S(ye,me));const Q=F?S(ye,me):m;return Q.width=ye,Q.height=me,Q.getContext("2d").drawImage(T,0,0,ye,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+me+")."),Q}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return rl(T.width)&&rl(T.height)}function M(T){return a?!1:T.wrapS!==tn||T.wrapT!==tn||T.minFilter!==Ve&&T.minFilter!==Gt}function L(T,b){return T.generateMipmaps&&b&&T.minFilter!==Ve&&T.minFilter!==Gt}function D(T){s.generateMipmap(T)}function x(T,b,F,Y,se=!1){if(a===!1)return b;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he=b;return b===6403&&(F===5126&&(he=33326),F===5131&&(he=33325),F===5121&&(he=33321)),b===33319&&(F===5126&&(he=33328),F===5131&&(he=33327),F===5121&&(he=33323)),b===6408&&(F===5126&&(he=34836),F===5131&&(he=34842),F===5121&&(he=Y===Ze&&se===!1?35907:32856),F===32819&&(he=32854),F===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function C(T,b,F){return L(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Ve&&T.minFilter!==Gt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function P(T){return T===Ve||T===tl||T===nl?9728:9729}function H(T){const b=T.target;b.removeEventListener("dispose",H),z(b),b.isVideoTexture&&g.delete(b)}function ae(T){const b=T.target;b.removeEventListener("dispose",ae),$(b)}function z(T){const b=n.get(T);if(b.__webglInit===void 0)return;const F=T.source,Y=d.get(F);if(Y){const se=Y[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&N(T),Object.keys(Y).length===0&&d.delete(F)}n.remove(T)}function N(T){const b=n.get(T);s.deleteTexture(b.__webglTexture);const F=T.source,Y=d.get(F);delete Y[b.__cacheKey],o.memory.textures--}function $(T){const b=T.texture,F=n.get(T),Y=n.get(b);if(Y.__webglTexture!==void 0&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(F.__webglFramebuffer[se]),F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let se=0;se<F.__webglColorRenderbuffer.length;se++)F.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[se]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,he=b.length;se<he;se++){const ye=n.get(b[se]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(b[se])}n.remove(b),n.remove(T)}let Z=0;function te(){Z=0}function j(){const T=Z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Z+=1,T}function G(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.encoding),b.join()}function ue(T,b){const F=n.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,T,b);return}}t.bindTexture(3553,F.__webglTexture,33984+b)}function X(T,b){const F=n.get(T);if(T.version>0&&F.__version!==T.version){de(F,T,b);return}t.bindTexture(35866,F.__webglTexture,33984+b)}function K(T,b){const F=n.get(T);if(T.version>0&&F.__version!==T.version){de(F,T,b);return}t.bindTexture(32879,F.__webglTexture,33984+b)}function fe(T,b){const F=n.get(T);if(T.version>0&&F.__version!==T.version){we(F,T,b);return}t.bindTexture(34067,F.__webglTexture,33984+b)}const ve={[ys]:10497,[tn]:33071,[bo]:33648},ce={[Ve]:9728,[tl]:9984,[nl]:9986,[Gt]:9729,[Af]:9985,[Ps]:9987};function B(T,b,F){if(F?(s.texParameteri(T,10242,ve[b.wrapS]),s.texParameteri(T,10243,ve[b.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,ve[b.wrapR]),s.texParameteri(T,10240,ce[b.magFilter]),s.texParameteri(T,10241,ce[b.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(b.wrapS!==tn||b.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,P(b.magFilter)),s.texParameteri(T,10241,P(b.minFilter)),b.minFilter!==Ve&&b.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(b.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===bs&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Ee(T,b){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",H));const Y=b.source;let se=d.get(Y);se===void 0&&(se={},d.set(Y,se));const he=G(b);if(he!==T.__cacheKey){se[he]===void 0&&(se[he]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),se[he].usedTimes++;const ye=se[T.__cacheKey];ye!==void 0&&(se[T.__cacheKey].usedTimes--,ye.usedTimes===0&&N(b)),T.__cacheKey=he,T.__webglTexture=se[he].texture}return F}function de(T,b,F){let Y=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=35866),b.isData3DTexture&&(Y=32879);const se=Ee(T,b),he=b.source;t.bindTexture(Y,T.__webglTexture,33984+F);const ye=n.get(he);if(he.version!==ye.__version||se===!0){t.activeTexture(33984+F),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const me=M(b)&&y(b.image)===!1;let Q=_(b.image,me,!1,u);Q=ee(b,Q);const Te=y(Q)||a,Pe=r.convert(b.format,b.encoding);let Se=r.convert(b.type),Ce=x(b.internalFormat,Pe,Se,b.encoding,b.isVideoTexture);B(Y,b,Te);let be;const De=b.mipmaps,et=a&&b.isVideoTexture!==!0,vt=ye.__version===void 0||se===!0,O=C(b,Q,Te);if(b.isDepthTexture)Ce=6402,a?b.type===ai?Ce=36012:b.type===Di?Ce=33190:b.type===ds?Ce=35056:Ce=33189:b.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Fi&&Ce===6402&&b.type!==Vl&&b.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Di,Se=r.convert(b.type)),b.format===Ms&&Ce===6402&&(Ce=34041,b.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ds,Se=r.convert(b.type))),vt&&(et?t.texStorage2D(3553,1,Ce,Q.width,Q.height):t.texImage2D(3553,0,Ce,Q.width,Q.height,0,Pe,Se,null));else if(b.isDataTexture)if(De.length>0&&Te){et&&vt&&t.texStorage2D(3553,O,Ce,De[0].width,De[0].height);for(let re=0,ge=De.length;re<ge;re++)be=De[re],et?t.texSubImage2D(3553,re,0,0,be.width,be.height,Pe,Se,be.data):t.texImage2D(3553,re,Ce,be.width,be.height,0,Pe,Se,be.data);b.generateMipmaps=!1}else et?(vt&&t.texStorage2D(3553,O,Ce,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,Pe,Se,Q.data)):t.texImage2D(3553,0,Ce,Q.width,Q.height,0,Pe,Se,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){et&&vt&&t.texStorage3D(35866,O,Ce,De[0].width,De[0].height,Q.depth);for(let re=0,ge=De.length;re<ge;re++)be=De[re],b.format!==nn?Pe!==null?et?t.compressedTexSubImage3D(35866,re,0,0,0,be.width,be.height,Q.depth,Pe,be.data,0,0):t.compressedTexImage3D(35866,re,Ce,be.width,be.height,Q.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(35866,re,0,0,0,be.width,be.height,Q.depth,Pe,Se,be.data):t.texImage3D(35866,re,Ce,be.width,be.height,Q.depth,0,Pe,Se,be.data)}else{et&&vt&&t.texStorage2D(3553,O,Ce,De[0].width,De[0].height);for(let re=0,ge=De.length;re<ge;re++)be=De[re],b.format!==nn?Pe!==null?et?t.compressedTexSubImage2D(3553,re,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(3553,re,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,re,0,0,be.width,be.height,Pe,Se,be.data):t.texImage2D(3553,re,Ce,be.width,be.height,0,Pe,Se,be.data)}else if(b.isDataArrayTexture)et?(vt&&t.texStorage3D(35866,O,Ce,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,Pe,Se,Q.data)):t.texImage3D(35866,0,Ce,Q.width,Q.height,Q.depth,0,Pe,Se,Q.data);else if(b.isData3DTexture)et?(vt&&t.texStorage3D(32879,O,Ce,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,Pe,Se,Q.data)):t.texImage3D(32879,0,Ce,Q.width,Q.height,Q.depth,0,Pe,Se,Q.data);else if(b.isFramebufferTexture){if(vt)if(et)t.texStorage2D(3553,O,Ce,Q.width,Q.height);else{let re=Q.width,ge=Q.height;for(let Me=0;Me<O;Me++)t.texImage2D(3553,Me,Ce,re,ge,0,Pe,Se,null),re>>=1,ge>>=1}}else if(De.length>0&&Te){et&&vt&&t.texStorage2D(3553,O,Ce,De[0].width,De[0].height);for(let re=0,ge=De.length;re<ge;re++)be=De[re],et?t.texSubImage2D(3553,re,0,0,Pe,Se,be):t.texImage2D(3553,re,Ce,Pe,Se,be);b.generateMipmaps=!1}else et?(vt&&t.texStorage2D(3553,O,Ce,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Pe,Se,Q)):t.texImage2D(3553,0,Ce,Pe,Se,Q);L(b,Te)&&D(Y),ye.__version=he.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function we(T,b,F){if(b.image.length!==6)return;const Y=Ee(T,b),se=b.source;t.bindTexture(34067,T.__webglTexture,33984+F);const he=n.get(se);if(se.version!==he.__version||Y===!0){t.activeTexture(33984+F),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!ye&&!me?Q[re]=_(b.image[re],!1,!0,c):Q[re]=me?b.image[re].image:b.image[re],Q[re]=ee(b,Q[re]);const Te=Q[0],Pe=y(Te)||a,Se=r.convert(b.format,b.encoding),Ce=r.convert(b.type),be=x(b.internalFormat,Se,Ce,b.encoding),De=a&&b.isVideoTexture!==!0,et=he.__version===void 0||Y===!0;let vt=C(b,Te,Pe);B(34067,b,Pe);let O;if(ye){De&&et&&t.texStorage2D(34067,vt,be,Te.width,Te.height);for(let re=0;re<6;re++){O=Q[re].mipmaps;for(let ge=0;ge<O.length;ge++){const Me=O[ge];b.format!==nn?Se!==null?De?t.compressedTexSubImage2D(34069+re,ge,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(34069+re,ge,be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+re,ge,0,0,Me.width,Me.height,Se,Ce,Me.data):t.texImage2D(34069+re,ge,be,Me.width,Me.height,0,Se,Ce,Me.data)}}}else{O=b.mipmaps,De&&et&&(O.length>0&&vt++,t.texStorage2D(34067,vt,be,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(me){De?t.texSubImage2D(34069+re,0,0,0,Q[re].width,Q[re].height,Se,Ce,Q[re].data):t.texImage2D(34069+re,0,be,Q[re].width,Q[re].height,0,Se,Ce,Q[re].data);for(let ge=0;ge<O.length;ge++){const Ae=O[ge].image[re].image;De?t.texSubImage2D(34069+re,ge+1,0,0,Ae.width,Ae.height,Se,Ce,Ae.data):t.texImage2D(34069+re,ge+1,be,Ae.width,Ae.height,0,Se,Ce,Ae.data)}}else{De?t.texSubImage2D(34069+re,0,0,0,Se,Ce,Q[re]):t.texImage2D(34069+re,0,be,Se,Ce,Q[re]);for(let ge=0;ge<O.length;ge++){const Me=O[ge];De?t.texSubImage2D(34069+re,ge+1,0,0,Se,Ce,Me.image[re]):t.texImage2D(34069+re,ge+1,be,Se,Ce,Me.image[re])}}}L(b,Pe)&&D(34067),he.__version=se.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function _e(T,b,F,Y,se){const he=r.convert(F.format,F.encoding),ye=r.convert(F.type),me=x(F.internalFormat,he,ye,F.encoding);n.get(b).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,me,b.width,b.height,b.depth,0,he,ye,null):t.texImage2D(se,0,me,b.width,b.height,0,he,ye,null)),t.bindFramebuffer(36160,T),q(b)?f.framebufferTexture2DMultisampleEXT(36160,Y,se,n.get(F).__webglTexture,0,ne(b)):(se===3553||se>=34069&&se<=34074)&&s.framebufferTexture2D(36160,Y,se,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(T,b,F){if(s.bindRenderbuffer(36161,T),b.depthBuffer&&!b.stencilBuffer){let Y=33189;if(F||q(b)){const se=b.depthTexture;se&&se.isDepthTexture&&(se.type===ai?Y=36012:se.type===Di&&(Y=33190));const he=ne(b);q(b)?f.renderbufferStorageMultisampleEXT(36161,he,Y,b.width,b.height):s.renderbufferStorageMultisample(36161,he,Y,b.width,b.height)}else s.renderbufferStorage(36161,Y,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(b.depthBuffer&&b.stencilBuffer){const Y=ne(b);F&&q(b)===!1?s.renderbufferStorageMultisample(36161,Y,35056,b.width,b.height):q(b)?f.renderbufferStorageMultisampleEXT(36161,Y,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const Y=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0;se<Y.length;se++){const he=Y[se],ye=r.convert(he.format,he.encoding),me=r.convert(he.type),Q=x(he.internalFormat,ye,me,he.encoding),Te=ne(b);F&&q(b)===!1?s.renderbufferStorageMultisample(36161,Te,Q,b.width,b.height):q(b)?f.renderbufferStorageMultisampleEXT(36161,Te,Q,b.width,b.height):s.renderbufferStorage(36161,Q,b.width,b.height)}}s.bindRenderbuffer(36161,null)}function w(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ue(b.depthTexture,0);const Y=n.get(b.depthTexture).__webglTexture,se=ne(b);if(b.depthTexture.format===Fi)q(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,se):s.framebufferTexture2D(36160,36096,3553,Y,0);else if(b.depthTexture.format===Ms)q(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,se):s.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function E(T){const b=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");w(b.__webglFramebuffer,T)}else if(F){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ne(b.__webglDepthbuffer[Y],T,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Ne(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function I(T,b,F){const Y=n.get(T);b!==void 0&&_e(Y.__webglFramebuffer,T,T.texture,36064,3553),F!==void 0&&E(T)}function k(T){const b=T.texture,F=n.get(T),Y=n.get(b);T.addEventListener("dispose",ae),T.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=b.version,o.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,he=T.isWebGLMultipleRenderTargets===!0,ye=y(T)||a;if(se){F.__webglFramebuffer=[];for(let me=0;me<6;me++)F.__webglFramebuffer[me]=s.createFramebuffer()}else{if(F.__webglFramebuffer=s.createFramebuffer(),he)if(i.drawBuffers){const me=T.texture;for(let Q=0,Te=me.length;Q<Te;Q++){const Pe=n.get(me[Q]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&q(T)===!1){const me=he?b:[b];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let Q=0;Q<me.length;Q++){const Te=me[Q];F.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(36161,F.__webglColorRenderbuffer[Q]);const Pe=r.convert(Te.format,Te.encoding),Se=r.convert(Te.type),Ce=x(Te.internalFormat,Pe,Se,Te.encoding,T.isXRRenderTarget===!0),be=ne(T);s.renderbufferStorageMultisample(36161,be,Ce,T.width,T.height),s.framebufferRenderbuffer(36160,36064+Q,36161,F.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(36161,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,Y.__webglTexture),B(34067,b,ye);for(let me=0;me<6;me++)_e(F.__webglFramebuffer[me],T,b,36064,34069+me);L(b,ye)&&D(34067),t.unbindTexture()}else if(he){const me=T.texture;for(let Q=0,Te=me.length;Q<Te;Q++){const Pe=me[Q],Se=n.get(Pe);t.bindTexture(3553,Se.__webglTexture),B(3553,Pe,ye),_e(F.__webglFramebuffer,T,Pe,36064+Q,3553),L(Pe,ye)&&D(3553)}t.unbindTexture()}else{let me=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?me=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,Y.__webglTexture),B(me,b,ye),_e(F.__webglFramebuffer,T,b,36064,me),L(b,ye)&&D(me),t.unbindTexture()}T.depthBuffer&&E(T)}function U(T){const b=y(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Y=0,se=F.length;Y<se;Y++){const he=F[Y];if(L(he,b)){const ye=T.isWebGLCubeRenderTarget?34067:3553,me=n.get(he).__webglTexture;t.bindTexture(ye,me),D(ye),t.unbindTexture()}}}function J(T){if(a&&T.samples>0&&q(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,Y=T.height;let se=16384;const he=[],ye=T.stencilBuffer?33306:36096,me=n.get(T),Q=T.isWebGLMultipleRenderTargets===!0;if(Q)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,me.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,me.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){he.push(36064+Te),T.depthBuffer&&he.push(ye);const Pe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Pe===!1&&(T.depthBuffer&&(se|=256),T.stencilBuffer&&(se|=1024)),Q&&s.framebufferRenderbuffer(36008,36064,36161,me.__webglColorRenderbuffer[Te]),Pe===!0&&(s.invalidateFramebuffer(36008,[ye]),s.invalidateFramebuffer(36009,[ye])),Q){const Se=n.get(b[Te]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Se,0)}s.blitFramebuffer(0,0,F,Y,0,0,F,Y,se,9728),p&&s.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Q)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Te,36161,me.__webglColorRenderbuffer[Te]);const Pe=n.get(b[Te]).__webglTexture;t.bindFramebuffer(36160,me.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Te,3553,Pe,0)}t.bindFramebuffer(36009,me.__webglMultisampledFramebuffer)}}function ne(T){return Math.min(h,T.samples)}function q(T){const b=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(T){const b=o.render.frame;g.get(T)!==b&&(g.set(T,b),T.update())}function ee(T,b){const F=T.encoding,Y=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===sl||F!==ki&&(F===Ze?a===!1?e.has("EXT_sRGB")===!0&&Y===nn?(T.format=sl,T.minFilter=Gt,T.generateMipmaps=!1):b=Df.sRGBToLinear(b):(Y!==nn||se!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),b}this.allocateTextureUnit=j,this.resetTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=fe,this.rebindTextures=I,this.setupRenderTarget=k,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=q}function nb(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Bi)return 5121;if(r===Fg)return 32819;if(r===Og)return 32820;if(r===Dg)return 5120;if(r===Ig)return 5122;if(r===Vl)return 5123;if(r===Ng)return 5124;if(r===Di)return 5125;if(r===ai)return 5126;if(r===bs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ug)return 6406;if(r===nn)return 6408;if(r===Bg)return 6409;if(r===kg)return 6410;if(r===Fi)return 6402;if(r===Ms)return 34041;if(r===zg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===sl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Vg)return 6403;if(r===Hg)return 36244;if(r===Gg)return 33319;if(r===Wg)return 33320;if(r===jg)return 36249;if(r===Jo||r===Zo||r===Qo||r===ea)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Jo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Jo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ea)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xc||r===qc||r===$c||r===Yc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$c)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kc||r===Jc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Kc)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Jc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zc||r===Qc||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===lu||r===cu||r===uu||r===hu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qc)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===iu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===su)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ru)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ou)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===au)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hu)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fu)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ds?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class ib extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sb={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n),v=this._getHandJoint(c,m);d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ql extends Tt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Fi,u!==Fi&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fi&&(n=Di),n===void 0&&u===Ms&&(n=ds),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1}}class rb extends Rs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const v=[],S=[],_=new Set,y=new Map,M=new zt;M.layers.enable(1),M.viewport=new Qe;const L=new zt;L.layers.enable(2),L.viewport=new Qe;const D=[M,L],x=new ib;x.layers.enable(1),x.layers.enable(2);let C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=v[X];return K===void 0&&(K=new Ca,v[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=v[X];return K===void 0&&(K=new Ca,v[X]=K),K.getGripSpace()},this.getHand=function(X){let K=v[X];return K===void 0&&(K=new Ca,v[X]=K),K.getHandSpace()};function H(X){const K=S.indexOf(X.inputSource);if(K===-1)return;const fe=v[K];fe!==void 0&&fe.dispatchEvent({type:X.type,data:X.inputSource})}function ae(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",ae),i.removeEventListener("inputsourceschange",z);for(let X=0;X<v.length;X++){const K=S[X];K!==null&&(S[X]=null,v[X].disconnect(K))}C=null,P=null,e.setRenderTarget(m),f=null,h=null,u=null,i=null,d=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",ae),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),d=new wt(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Bi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let K=null,fe=null,ve=null;g.depth&&(ve=g.stencil?35056:33190,K=g.stencil?Ms:Fi,fe=g.stencil?ds:Di);const ce={colorFormat:32856,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ce),i.updateRenderState({layers:[h]}),d=new wt(h.textureWidth,h.textureHeight,{format:nn,type:Bi,depthTexture:new ql(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const B=e.properties.get(d);B.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(X){for(let K=0;K<X.removed.length;K++){const fe=X.removed[K],ve=S.indexOf(fe);ve>=0&&(S[ve]=null,v[ve].disconnect(fe))}for(let K=0;K<X.added.length;K++){const fe=X.added[K];let ve=S.indexOf(fe);if(ve===-1){for(let B=0;B<v.length;B++)if(B>=S.length){S.push(fe),ve=B;break}else if(S[B]===null){S[B]=fe,ve=B;break}if(ve===-1)break}const ce=v[ve];ce&&ce.connect(fe)}}const N=new R,$=new R;function Z(X,K,fe){N.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);const ve=N.distanceTo($),ce=K.projectionMatrix.elements,B=fe.projectionMatrix.elements,Ee=ce[14]/(ce[10]-1),de=ce[14]/(ce[10]+1),we=(ce[9]+1)/ce[5],_e=(ce[9]-1)/ce[5],Ne=(ce[8]-1)/ce[0],w=(B[8]+1)/B[0],E=Ee*Ne,I=Ee*w,k=ve/(-Ne+w),U=k*-Ne;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(U),X.translateZ(k),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const J=Ee+k,ne=de+k,q=E-U,le=I+(ve-U),ee=we*de/ne*J,T=_e*de/ne*J;X.projectionMatrix.makePerspective(q,le,ee,T,J,ne)}function te(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;x.near=L.near=M.near=X.near,x.far=L.far=M.far=X.far,(C!==x.near||P!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,P=x.far);const K=X.parent,fe=x.cameras;te(x,K);for(let ce=0;ce<fe.length;ce++)te(fe[ce],K);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),X.matrix.copy(x.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const ve=X.children;for(let ce=0,B=ve.length;ce<B;ce++)ve[ce].updateMatrixWorld(!0);fe.length===2?Z(x,M,L):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.getPlanes=function(){return _};let j=null;function G(X,K){if(c=K.getViewerPose(l||o),p=K,c!==null){const fe=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let ve=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let ce=0;ce<fe.length;ce++){const B=fe[ce];let Ee=null;if(f!==null)Ee=f.getViewport(B);else{const we=u.getViewSubImage(h,B);Ee=we.viewport,ce===0&&(e.setRenderTargetTextures(d,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(d))}let de=D[ce];de===void 0&&(de=new zt,de.layers.enable(ce),de.viewport=new Qe,D[ce]=de),de.matrix.fromArray(B.transform.matrix),de.projectionMatrix.fromArray(B.projectionMatrix),de.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ce===0&&x.matrix.copy(de.matrix),ve===!0&&x.cameras.push(de)}}for(let fe=0;fe<v.length;fe++){const ve=S[fe],ce=v[fe];ve!==null&&ce!==void 0&&ce.update(ve,K,l||o)}if(j&&j(X,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let fe=null;for(const ve of _)K.detectedPlanes.has(ve)||(fe===null&&(fe=[]),fe.push(ve));if(fe!==null)for(const ve of fe)_.delete(ve),y.delete(ve),n.dispatchEvent({type:"planeremoved",data:ve});for(const ve of K.detectedPlanes)if(!_.has(ve))_.add(ve),y.set(ve,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ve});else{const ce=y.get(ve);ve.lastChangedTime>ce&&(y.set(ve,ve.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ve}))}}p=null}const ue=new Vf;ue.setAnimationLoop(G),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}function ob(s,e){function t(m,d){d.color.getRGB(m.fogColor.value,zf(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,v,S,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),u(m,d)):d.isMeshPhongMaterial?(i(m,d),c(m,d)):d.isMeshStandardMaterial?(i(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,_)):d.isMeshMatcapMaterial?(i(m,d),p(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),g(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,v,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,v,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=S*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===rn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ab(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(S,_){const y=_.program;n.uniformBlockBinding(S,y)}function c(S,_){let y=i[S.id];y===void 0&&(g(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",d));const M=_.program;n.updateUBOMapping(S,M);const L=e.render.frame;r[S.id]!==L&&(f(S),r[S.id]=L)}function u(S){const _=h();S.__bindingPointIndex=_;const y=s.createBuffer(),M=S.__size,L=S.usage;return s.bindBuffer(35345,y),s.bufferData(35345,M,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,_,y),y}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=i[S.id],y=S.uniforms,M=S.__cache;s.bindBuffer(35345,_);for(let L=0,D=y.length;L<D;L++){const x=y[L];if(p(x,L,M)===!0){const C=x.value,P=x.__offset;typeof C=="number"?(x.__data[0]=C,s.bufferSubData(35345,P,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):C.toArray(x.__data),s.bufferSubData(35345,P,x.__data))}}s.bindBuffer(35345,null)}function p(S,_,y){const M=S.value;if(y[_]===void 0)return typeof M=="number"?y[_]=M:y[_]=M.clone(),!0;if(typeof M=="number"){if(y[_]!==M)return y[_]=M,!0}else{const L=y[_];if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(S){const _=S.uniforms;let y=0;const M=16;let L=0;for(let D=0,x=_.length;D<x;D++){const C=_[D],P=m(C);if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,D>0){L=y%M;const H=M-L;L!==0&&H-P.boundary<0&&(y+=M-L,C.__offset=y)}y+=P.storage}return L=y%M,L>0&&(y+=M-L),S.__size=y,S.__cache={},this}function m(S){const _=S.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function d(S){const _=S.target;_.removeEventListener("dispose",d);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function v(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:v}}function lb(){const s=hr("canvas");return s.style.display="block",s}function Xf(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:lb(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ki,this.physicallyCorrectLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const m=this;let d=!1,v=0,S=0,_=null,y=-1,M=null;const L=new Qe,D=new Qe;let x=null,C=e.width,P=e.height,H=1,ae=null,z=null;const N=new Qe(0,0,C,P),$=new Qe(0,0,C,P);let Z=!1;const te=new Wl;let j=!1,G=!1,ue=null;const X=new Ue,K=new pe,fe=new R,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return _===null?H:1}let B=t;function Ee(A,W){for(let ie=0;ie<A.length;ie++){const V=A[ie],oe=e.getContext(V,W);if(oe!==null)return oe}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",De,!1),B===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),B=Ee(W,A),B===null)throw Ee(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let de,we,_e,Ne,w,E,I,k,U,J,ne,q,le,ee,T,b,F,Y,se,he,ye,me,Q,Te;function Pe(){de=new y_(B),we=new p_(B,de,s),de.init(we),me=new nb(B,de,we),_e=new eb(B,de,we),Ne=new S_,w=new ky,E=new tb(B,de,_e,w,we,me,Ne),I=new g_(m),k=new __(m),U=new Dv(B,we),Q=new f_(B,de,U,we),J=new b_(B,U,Ne,Q),ne=new A_(B,J,U,Ne),se=new E_(B,we,E),b=new m_(w),q=new By(m,I,k,de,we,Q,b),le=new ob(m,w),ee=new Hy,T=new $y(de,we),Y=new h_(m,I,k,_e,ne,u,o),F=new Qy(m,ne,we),Te=new ab(B,Ne,we,_e),he=new d_(B,de,Ne,we),ye=new M_(B,de,Ne,we),Ne.programs=q.programs,m.capabilities=we,m.extensions=de,m.properties=w,m.renderLists=ee,m.shadowMap=F,m.state=_e,m.info=Ne}Pe();const Se=new rb(m,B);this.xr=Se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(C,P,!1))},this.getSize=function(A){return A.set(C,P)},this.setSize=function(A,W,ie){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,P=W,e.width=Math.floor(A*H),e.height=Math.floor(W*H),ie!==!1&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(C*H,P*H).floor()},this.setDrawingBufferSize=function(A,W,ie){C=A,P=W,H=ie,e.width=Math.floor(A*ie),e.height=Math.floor(W*ie),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,W,ie,V){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,W,ie,V),_e.viewport(L.copy(N).multiplyScalar(H).floor())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,W,ie,V){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,ie,V),_e.scissor(D.copy($).multiplyScalar(H).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){_e.setScissorTest(Z=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(A=!0,W=!0,ie=!0){let V=0;A&&(V|=16384),W&&(V|=256),ie&&(V|=1024),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",De,!1),ee.dispose(),T.dispose(),w.dispose(),I.dispose(),k.dispose(),ne.dispose(),Q.dispose(),Te.dispose(),q.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Me),Se.removeEventListener("sessionend",Ae),ue&&(ue.dispose(),ue=null),Ye.stop()};function Ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const A=Ne.autoReset,W=F.enabled,ie=F.autoUpdate,V=F.needsUpdate,oe=F.type;Pe(),Ne.autoReset=A,F.enabled=W,F.autoUpdate=ie,F.needsUpdate=V,F.type=oe}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const W=A.target;W.removeEventListener("dispose",et),vt(W)}function vt(A){O(A),w.remove(A)}function O(A){const W=w.get(A).programs;W!==void 0&&(W.forEach(function(ie){q.releaseProgram(ie)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ie,V,oe,Le){W===null&&(W=ve);const Ie=oe.isMesh&&oe.matrixWorld.determinant()<0,ze=yd(A,W,ie,V,oe);_e.setMaterial(V,Ie);let Be=ie.index,$e=1;V.wireframe===!0&&(Be=J.getWireframeAttribute(ie),$e=2);const He=ie.drawRange,Ge=ie.attributes.position;let lt=He.start*$e,jt=(He.start+He.count)*$e;Le!==null&&(lt=Math.max(lt,Le.start*$e),jt=Math.min(jt,(Le.start+Le.count)*$e)),Be!==null?(lt=Math.max(lt,0),jt=Math.min(jt,Be.count)):Ge!=null&&(lt=Math.max(lt,0),jt=Math.min(jt,Ge.count));const Pn=jt-lt;if(Pn<0||Pn===1/0)return;Q.setup(oe,V,ze,ie,Be);let vi,ct=he;if(Be!==null&&(vi=U.get(Be),ct=ye,ct.setIndex(vi)),oe.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*ce()),ct.setMode(1)):ct.setMode(4);else if(oe.isLine){let We=V.linewidth;We===void 0&&(We=1),_e.setLineWidth(We*ce()),oe.isLineSegments?ct.setMode(1):oe.isLineLoop?ct.setMode(2):ct.setMode(3)}else oe.isPoints?ct.setMode(0):oe.isSprite&&ct.setMode(4);if(oe.isInstancedMesh)ct.renderInstances(lt,Pn,oe.count);else if(ie.isInstancedBufferGeometry){const We=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Bo=Math.min(ie.instanceCount,We);ct.renderInstances(lt,Pn,Bo)}else ct.render(lt,Pn)},this.compile=function(A,W){function ie(V,oe,Le){V.transparent===!0&&V.side===gn?(V.side=rn,V.needsUpdate=!0,Jt(V,oe,Le),V.side=zi,V.needsUpdate=!0,Jt(V,oe,Le),V.side=gn):Jt(V,oe,Le)}f=T.get(A),f.init(),g.push(f),A.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights(m.physicallyCorrectLights),A.traverse(function(V){const oe=V.material;if(oe)if(Array.isArray(oe))for(let Le=0;Le<oe.length;Le++){const Ie=oe[Le];ie(Ie,A,V)}else ie(oe,A,V)}),g.pop(),f=null};let re=null;function ge(A){re&&re(A)}function Me(){Ye.stop()}function Ae(){Ye.start()}const Ye=new Vf;Ye.setAnimationLoop(ge),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){re=A,Se.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},Se.addEventListener("sessionstart",Me),Se.addEventListener("sessionend",Ae),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(W),W=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,W,_),f=T.get(A,g.length),f.init(),g.push(f),X.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(X),G=this.localClippingEnabled,j=b.init(this.clippingPlanes,G,W),h=ee.get(A,p.length),h.init(),p.push(h),xt(A,W,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(ae,z),j===!0&&b.beginShadows();const ie=f.state.shadowsArray;if(F.render(ie,A,W),j===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(h,A),f.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const V=W.cameras;for(let oe=0,Le=V.length;oe<Le;oe++){const Ie=V[oe];Lt(h,A,Ie,Ie.viewport)}}else Lt(h,A,W);_!==null&&(E.updateMultisampleRenderTarget(_),E.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(m,A,W),Q.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function xt(A,W,ie,V){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){V&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);const Ie=ne.update(A),ze=A.material;ze.visible&&h.push(A,Ie,ze,ie,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ne.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ne.render.frame),!A.frustumCulled||te.intersectsObject(A))){V&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);const Ie=ne.update(A),ze=A.material;if(Array.isArray(ze)){const Be=Ie.groups;for(let $e=0,He=Be.length;$e<He;$e++){const Ge=Be[$e],lt=ze[Ge.materialIndex];lt&&lt.visible&&h.push(A,Ie,lt,ie,fe.z,Ge)}}else ze.visible&&h.push(A,Ie,ze,ie,fe.z,null)}}const Le=A.children;for(let Ie=0,ze=Le.length;Ie<ze;Ie++)xt(Le[Ie],W,ie,V)}function Lt(A,W,ie,V){const oe=A.opaque,Le=A.transmissive,Ie=A.transparent;f.setupLightsView(ie),Le.length>0&&gi(oe,W,ie),V&&_e.viewport(L.copy(V)),oe.length>0&&nt(oe,W,ie),Le.length>0&&nt(Le,W,ie),Ie.length>0&&nt(Ie,W,ie),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function gi(A,W,ie){const V=we.isWebGL2;ue===null&&(ue=new wt(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?bs:Bi,minFilter:Ps,samples:V&&r===!0?4:0})),m.getDrawingBufferSize(K),V?ue.setSize(K.x,K.y):ue.setSize(Mo(K.x),Mo(K.y));const oe=m.getRenderTarget();m.setRenderTarget(ue),m.clear();const Le=m.toneMapping;m.toneMapping=Wn,nt(A,W,ie),m.toneMapping=Le,E.updateMultisampleRenderTarget(ue),E.updateRenderTargetMipmap(ue),m.setRenderTarget(oe)}function nt(A,W,ie){const V=W.isScene===!0?W.overrideMaterial:null;for(let oe=0,Le=A.length;oe<Le;oe++){const Ie=A[oe],ze=Ie.object,Be=Ie.geometry,$e=V===null?Ie.material:V,He=Ie.group;ze.layers.test(ie.layers)&&Ln(ze,W,ie,Be,$e,He)}}function Ln(A,W,ie,V,oe,Le){A.onBeforeRender(m,W,ie,V,oe,Le),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(m,W,ie,V,A,Le),oe.transparent===!0&&oe.side===gn?(oe.side=rn,oe.needsUpdate=!0,m.renderBufferDirect(ie,W,V,oe,A,Le),oe.side=zi,oe.needsUpdate=!0,m.renderBufferDirect(ie,W,V,oe,A,Le),oe.side=gn):m.renderBufferDirect(ie,W,V,oe,A,Le),A.onAfterRender(m,W,ie,V,oe,Le)}function Jt(A,W,ie){W.isScene!==!0&&(W=ve);const V=w.get(A),oe=f.state.lights,Le=f.state.shadowsArray,Ie=oe.state.version,ze=q.getParameters(A,oe.state,Le,W,ie),Be=q.getProgramCacheKey(ze);let $e=V.programs;V.environment=A.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(A.isMeshStandardMaterial?k:I).get(A.envMap||V.environment),$e===void 0&&(A.addEventListener("dispose",et),$e=new Map,V.programs=$e);let He=$e.get(Be);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===Ie)return uc(A,ze),He}else ze.uniforms=q.getUniforms(A),A.onBuild(ie,ze,m),A.onBeforeCompile(ze,m),He=q.acquireProgram(ze,Be),$e.set(Be,He),V.uniforms=ze.uniforms;const Ge=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=b.uniform),uc(A,ze),V.needsLights=Md(A),V.lightsStateVersion=Ie,V.needsLights&&(Ge.ambientLightColor.value=oe.state.ambient,Ge.lightProbe.value=oe.state.probe,Ge.directionalLights.value=oe.state.directional,Ge.directionalLightShadows.value=oe.state.directionalShadow,Ge.spotLights.value=oe.state.spot,Ge.spotLightShadows.value=oe.state.spotShadow,Ge.rectAreaLights.value=oe.state.rectArea,Ge.ltc_1.value=oe.state.rectAreaLTC1,Ge.ltc_2.value=oe.state.rectAreaLTC2,Ge.pointLights.value=oe.state.point,Ge.pointLightShadows.value=oe.state.pointShadow,Ge.hemisphereLights.value=oe.state.hemi,Ge.directionalShadowMap.value=oe.state.directionalShadowMap,Ge.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ge.spotShadowMap.value=oe.state.spotShadowMap,Ge.spotLightMatrix.value=oe.state.spotLightMatrix,Ge.spotLightMap.value=oe.state.spotLightMap,Ge.pointShadowMap.value=oe.state.pointShadowMap,Ge.pointShadowMatrix.value=oe.state.pointShadowMatrix);const lt=He.getUniforms(),jt=fo.seqWithValue(lt.seq,Ge);return V.currentProgram=He,V.uniformsList=jt,He}function uc(A,W){const ie=w.get(A);ie.outputEncoding=W.outputEncoding,ie.instancing=W.instancing,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function yd(A,W,ie,V,oe){W.isScene!==!0&&(W=ve),E.resetTextureUnits();const Le=W.fog,Ie=V.isMeshStandardMaterial?W.environment:null,ze=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:ki,Be=(V.isMeshStandardMaterial?k:I).get(V.envMap||Ie),$e=V.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,He=!!V.normalMap&&!!ie.attributes.tangent,Ge=!!ie.morphAttributes.position,lt=!!ie.morphAttributes.normal,jt=!!ie.morphAttributes.color,Pn=V.toneMapped?m.toneMapping:Wn,vi=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ct=vi!==void 0?vi.length:0,We=w.get(V),Bo=f.state.lights;if(j===!0&&(G===!0||A!==M)){const Xt=A===M&&V.id===y;b.setState(V,A,Xt)}let _t=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Bo.state.version||We.outputEncoding!==ze||oe.isInstancedMesh&&We.instancing===!1||!oe.isInstancedMesh&&We.instancing===!0||oe.isSkinnedMesh&&We.skinning===!1||!oe.isSkinnedMesh&&We.skinning===!0||We.envMap!==Be||V.fog===!0&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==b.numPlanes||We.numIntersection!==b.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==He||We.morphTargets!==Ge||We.morphNormals!==lt||We.morphColors!==jt||We.toneMapping!==Pn||we.isWebGL2===!0&&We.morphTargetsCount!==ct)&&(_t=!0):(_t=!0,We.__version=V.version);let xi=We.currentProgram;_t===!0&&(xi=Jt(V,W,oe));let hc=!1,zs=!1,ko=!1;const It=xi.getUniforms(),_i=We.uniforms;if(_e.useProgram(xi.program)&&(hc=!0,zs=!0,ko=!0),V.id!==y&&(y=V.id,zs=!0),hc||M!==A){if(It.setValue(B,"projectionMatrix",A.projectionMatrix),we.logarithmicDepthBuffer&&It.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,zs=!0,ko=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Xt=It.map.cameraPosition;Xt!==void 0&&Xt.setValue(B,fe.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&It.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||oe.isSkinnedMesh)&&It.setValue(B,"viewMatrix",A.matrixWorldInverse)}if(oe.isSkinnedMesh){It.setOptional(B,oe,"bindMatrix"),It.setOptional(B,oe,"bindMatrixInverse");const Xt=oe.skeleton;Xt&&(we.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),It.setValue(B,"boneTexture",Xt.boneTexture,E),It.setValue(B,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vo=ie.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0&&we.isWebGL2===!0)&&se.update(oe,ie,V,xi),(zs||We.receiveShadow!==oe.receiveShadow)&&(We.receiveShadow=oe.receiveShadow,It.setValue(B,"receiveShadow",oe.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_i.envMap.value=Be,_i.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),zs&&(It.setValue(B,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&bd(_i,ko),Le&&V.fog===!0&&le.refreshFogUniforms(_i,Le),le.refreshMaterialUniforms(_i,V,H,P,ue),fo.upload(B,We.uniformsList,_i,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fo.upload(B,We.uniformsList,_i,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&It.setValue(B,"center",oe.center),It.setValue(B,"modelViewMatrix",oe.modelViewMatrix),It.setValue(B,"normalMatrix",oe.normalMatrix),It.setValue(B,"modelMatrix",oe.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Xt=V.uniformsGroups;for(let Ho=0,Sd=Xt.length;Ho<Sd;Ho++)if(we.isWebGL2){const fc=Xt[Ho];Te.update(fc,xi),Te.bind(fc,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function bd(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Md(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,W,ie){w.get(A.texture).__webglTexture=W,w.get(A.depthTexture).__webglTexture=ie;const V=w.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=ie===void 0,V.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const ie=w.get(A);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ie=0){_=A,v=W,S=ie;let V=!0,oe=null,Le=!1,Ie=!1;if(A){const Be=w.get(A);Be.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),V=!1):Be.__webglFramebuffer===void 0?E.setupRenderTarget(A):Be.__hasExternalTextures&&E.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);const He=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(oe=He[W],Le=!0):we.isWebGL2&&A.samples>0&&E.useMultisampledRTT(A)===!1?oe=w.get(A).__webglMultisampledFramebuffer:oe=He,L.copy(A.viewport),D.copy(A.scissor),x=A.scissorTest}else L.copy(N).multiplyScalar(H).floor(),D.copy($).multiplyScalar(H).floor(),x=Z;if(_e.bindFramebuffer(36160,oe)&&we.drawBuffers&&V&&_e.drawBuffers(A,oe),_e.viewport(L),_e.scissor(D),_e.setScissorTest(x),Le){const Be=w.get(A.texture);B.framebufferTexture2D(36160,36064,34069+W,Be.__webglTexture,ie)}else if(Ie){const Be=w.get(A.texture),$e=W||0;B.framebufferTextureLayer(36160,36064,Be.__webglTexture,ie||0,$e)}y=-1},this.readRenderTargetPixels=function(A,W,ie,V,oe,Le,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){_e.bindFramebuffer(36160,ze);try{const Be=A.texture,$e=Be.format,He=Be.type;if($e!==nn&&me.convert($e)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=He===bs&&(de.has("EXT_color_buffer_half_float")||we.isWebGL2&&de.has("EXT_color_buffer_float"));if(He!==Bi&&me.convert(He)!==B.getParameter(35738)&&!(He===ai&&(we.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-V&&ie>=0&&ie<=A.height-oe&&B.readPixels(W,ie,V,oe,me.convert($e),me.convert(He),Le)}finally{const Be=_!==null?w.get(_).__webglFramebuffer:null;_e.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(A,W,ie=0){const V=Math.pow(2,-ie),oe=Math.floor(W.image.width*V),Le=Math.floor(W.image.height*V);E.setTexture2D(W,0),B.copyTexSubImage2D(3553,ie,0,0,A.x,A.y,oe,Le),_e.unbindTexture()},this.copyTextureToTexture=function(A,W,ie,V=0){const oe=W.image.width,Le=W.image.height,Ie=me.convert(ie.format),ze=me.convert(ie.type);E.setTexture2D(ie,0),B.pixelStorei(37440,ie.flipY),B.pixelStorei(37441,ie.premultiplyAlpha),B.pixelStorei(3317,ie.unpackAlignment),W.isDataTexture?B.texSubImage2D(3553,V,A.x,A.y,oe,Le,Ie,ze,W.image.data):W.isCompressedTexture?B.compressedTexSubImage2D(3553,V,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Ie,W.mipmaps[0].data):B.texSubImage2D(3553,V,A.x,A.y,Ie,ze,W.image),V===0&&ie.generateMipmaps&&B.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ie,V,oe=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,ze=A.max.z-A.min.z+1,Be=me.convert(V.format),$e=me.convert(V.type);let He;if(V.isData3DTexture)E.setTexture3D(V,0),He=32879;else if(V.isDataArrayTexture)E.setTexture2DArray(V,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,V.flipY),B.pixelStorei(37441,V.premultiplyAlpha),B.pixelStorei(3317,V.unpackAlignment);const Ge=B.getParameter(3314),lt=B.getParameter(32878),jt=B.getParameter(3316),Pn=B.getParameter(3315),vi=B.getParameter(32877),ct=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;B.pixelStorei(3314,ct.width),B.pixelStorei(32878,ct.height),B.pixelStorei(3316,A.min.x),B.pixelStorei(3315,A.min.y),B.pixelStorei(32877,A.min.z),ie.isDataTexture||ie.isData3DTexture?B.texSubImage3D(He,oe,W.x,W.y,W.z,Le,Ie,ze,Be,$e,ct.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(He,oe,W.x,W.y,W.z,Le,Ie,ze,Be,ct.data)):B.texSubImage3D(He,oe,W.x,W.y,W.z,Le,Ie,ze,Be,$e,ct),B.pixelStorei(3314,Ge),B.pixelStorei(32878,lt),B.pixelStorei(3316,jt),B.pixelStorei(3315,Pn),B.pixelStorei(32877,vi),oe===0&&V.generateMipmaps&&B.generateMipmap(He),_e.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){v=0,S=0,_=null,_e.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class cb extends Xf{}cb.prototype.isWebGL1Renderer=!0;class $l{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new $l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class ub extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class qf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=il,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new R;class Vn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ku=new R,Ju=new Qe,Zu=new Qe,hb=new R,Qu=new Ue;class fb extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Ju.fromBufferAttribute(i.attributes.skinIndex,e),Zu.fromBufferAttribute(i.attributes.skinWeight,e),Ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Zu.getComponent(r);if(o!==0){const a=Ju.getComponent(r);Qu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(hb.copy(Ku).applyMatrix4(Qu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $f extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class db extends Tt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ve,u=Ve,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new Ue,pb=new Ue;class Yl{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:pb;eh.multiplyMatrices(a,t[r]),eh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Yl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Lf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new db(t,e,e,nn,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $f),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class th extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const nh=new Ue,ih=new Ue,Yr=[],mb=new Ue,Gs=new pt;class gb extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new th(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,mb)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,nh),ih.multiplyMatrices(n,nh),Gs.matrixWorld=ih,Gs.raycast(e,Yr);for(let o=0,a=Yr.length;o<a;o++){const l=Yr[o];l.instanceId=r,l.object=this,t.push(l)}Yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new th(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Yf extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sh=new R,rh=new R,oh=new Ue,La=new Gl,Kr=new Gi;class Kl extends st{constructor(e=new Ct,t=new Yf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)sh.fromBufferAttribute(t,i-1),rh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sh.distanceTo(rh);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;oh.copy(i).invert(),La.copy(e.ray).applyMatrix4(oh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,u=new R,h=new R,f=new R,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let _=v,y=S-1;_<y;_+=p){const M=g.getX(_),L=g.getX(_+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,L),La.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let _=v,y=S-1;_<y;_+=p){if(c.fromBufferAttribute(d,_),u.fromBufferAttribute(d,_+1),La.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ah=new R,lh=new R;class vb extends Kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ah.fromBufferAttribute(t,i),lh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ah.distanceTo(lh);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xb extends Kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kf extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ch=new Ue,al=new Gl,Jr=new Gi,Zr=new R;class _b extends st{constructor(e=new Ct,t=new Kf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;ch.copy(i).invert(),al.copy(e.ray).applyMatrix4(ch);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);Zr.fromBufferAttribute(h,d),uh(Zr,d,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)Zr.fromBufferAttribute(h,g),uh(Zr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uh(s,e,t,n,i,r,o){const a=al.distanceSqToPoint(s);if(a<t){const l=new R;al.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,p=(o-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new pe:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],o=[],a=new R,l=new Ue;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Mt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Mt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jl extends An{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new pe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yb extends Jl{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Qr=new R,Pa=new Zl,Ra=new Zl,Da=new Zl;class bb extends An{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Qr.subVectors(i[0],i[1]).add(i[0]),c=Qr);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Qr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),Pa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,d),Ra.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,d),Da.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(Pa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ra.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Da.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Pa.calc(l),Ra.calc(l),Da.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Mb(s,e){const t=1-s;return t*t*e}function Sb(s,e){return 2*(1-s)*s*e}function wb(s,e){return s*s*e}function tr(s,e,t,n){return Mb(s,e)+Sb(s,t)+wb(s,n)}function Tb(s,e){const t=1-s;return t*t*t*e}function Eb(s,e){const t=1-s;return 3*t*t*s*e}function Ab(s,e){return 3*(1-s)*s*s*e}function Cb(s,e){return s*s*s*e}function nr(s,e,t,n,i){return Tb(s,e)+Eb(s,t)+Ab(s,n)+Cb(s,i)}class Jf extends An{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(e,i.x,r.x,o.x,a.x),nr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lb extends An{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(e,i.x,r.x,o.x,a.x),nr(e,i.y,r.y,o.y,a.y),nr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ql extends An{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new pe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pb extends An{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zf extends An{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(tr(e,i.x,r.x,o.x),tr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rb extends An{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(tr(e,i.x,r.x,o.x),tr(e,i.y,r.y,o.y),tr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qf extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(hh(a,l.x,c.x,u.x,h.x),hh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var ed=Object.freeze({__proto__:null,ArcCurve:yb,CatmullRomCurve3:bb,CubicBezierCurve:Jf,CubicBezierCurve3:Lb,EllipseCurve:Jl,LineCurve:Ql,LineCurve3:Pb,QuadraticBezierCurve:Zf,QuadraticBezierCurve3:Rb,SplineCurve:Qf});class Db extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ql(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ed[i.type]().fromJSON(i))}return this}}class ll extends Db{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ql(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Zf(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Jf(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Jl(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uo extends Ct{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const m=[],d=n/2;let v=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(p,2));function S(){const y=new R,M=new R;let L=0;const D=(t-e)/n;for(let x=0;x<=r;x++){const C=[],P=x/r,H=P*(t-e)+e;for(let ae=0;ae<=i;ae++){const z=ae/i,N=z*l+a,$=Math.sin(N),Z=Math.cos(N);M.x=H*$,M.y=-P*n+d,M.z=H*Z,h.push(M.x,M.y,M.z),y.set($,D,Z).normalize(),f.push(y.x,y.y,y.z),p.push(z,1-P),C.push(g++)}m.push(C)}for(let x=0;x<i;x++)for(let C=0;C<r;C++){const P=m[C][x],H=m[C+1][x],ae=m[C+1][x+1],z=m[C][x+1];u.push(P,H,z),u.push(H,ae,z),L+=6}c.addGroup(v,L,0),v+=L}function _(y){const M=g,L=new pe,D=new R;let x=0;const C=y===!0?e:t,P=y===!0?1:-1;for(let ae=1;ae<=i;ae++)h.push(0,d*P,0),f.push(0,P,0),p.push(.5,.5),g++;const H=g;for(let ae=0;ae<=i;ae++){const N=ae/i*l+a,$=Math.cos(N),Z=Math.sin(N);D.x=C*Z,D.y=d*P,D.z=C*$,h.push(D.x,D.y,D.z),f.push(0,P,0),L.x=$*.5+.5,L.y=Z*.5*P+.5,p.push(L.x,L.y),g++}for(let ae=0;ae<i;ae++){const z=M+ae,N=H+ae;y===!0?u.push(N,N+1,z):u.push(N+1,N,z),x+=3}c.addGroup(v,x,y===!0?1:2),v+=x}}static fromJSON(e){return new Uo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const _=new R,y=new R,M=new R;for(let L=0;L<t.length;L+=3)p(t[L+0],_),p(t[L+1],y),p(t[L+2],M),l(_,y,M,S)}function l(S,_,y,M){const L=M+1,D=[];for(let x=0;x<=L;x++){D[x]=[];const C=S.clone().lerp(y,x/L),P=_.clone().lerp(y,x/L),H=L-x;for(let ae=0;ae<=H;ae++)ae===0&&x===L?D[x][ae]=C:D[x][ae]=C.clone().lerp(P,ae/H)}for(let x=0;x<L;x++)for(let C=0;C<2*(L-x)-1;C++){const P=Math.floor(C/2);C%2===0?(f(D[x][P+1]),f(D[x+1][P]),f(D[x][P])):(f(D[x][P+1]),f(D[x+1][P+1]),f(D[x+1][P]))}}function c(S){const _=new R;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(S),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){const S=new R;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];const y=d(S)/2/Math.PI+.5,M=v(S)/Math.PI+.5;o.push(y,1-M)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const _=o[S+0],y=o[S+2],M=o[S+4],L=Math.max(_,y,M),D=Math.min(_,y,M);L>.9&&D<.1&&(_<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function p(S,_){const y=S*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){const S=new R,_=new R,y=new R,M=new R,L=new pe,D=new pe,x=new pe;for(let C=0,P=0;C<r.length;C+=9,P+=6){S.set(r[C+0],r[C+1],r[C+2]),_.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),L.set(o[P+0],o[P+1]),D.set(o[P+2],o[P+3]),x.set(o[P+4],o[P+5]),M.copy(S).add(_).add(y).divideScalar(3);const H=d(M);m(L,P+0,S,H),m(D,P+2,_,H),m(x,P+4,y,H)}}function m(S,_,y,M){M<0&&S.x===1&&(o[_]=S.x-1),y.x===0&&y.z===0&&(o[_]=M/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function v(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}static fromJSON(e){return new Ns(e.vertices,e.indices,e.radius,e.details)}}class ec extends Ns{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ec(e.radius,e.detail)}}class po extends ll{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ll().fromJSON(i))}return this}}const Ib={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=td(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,p;if(n&&(r=zb(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return fr(r,o,t,a,l,p,0),o}};function td(s,e,t,n,i){let r,o;if(i===Yb(s,e,t,n)>0)for(r=e;r<t;r+=n)o=fh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=fh(r,s[r],s[r+1],o);return o&&zo(o,o.next)&&(pr(o),o=o.next),o}function Vi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(zo(t,t.next)||ot(t.prev,t,t.next)===0)){if(pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Gb(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Fb(s,n,i,r):Nb(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),pr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Ob(Vi(s),e,t),fr(s,e,t,n,i,r,2)):o===2&&Ub(s,e,t,n,i,r):fr(Vi(s),e,t,n,i,r,1);break}}}function Nb(s){const e=s.prev,t=s,n=s.next;if(ot(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&cs(i,a,r,l,o,c,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fb(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ot(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,m=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,v=cl(p,g,e,t,n),S=cl(m,d,e,t,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=v&&y&&y.z<=S;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=d&&_!==i&&_!==o&&cs(a,u,l,h,c,f,_.x,_.y)&&ot(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=m&&y.y>=g&&y.y<=d&&y!==i&&y!==o&&cs(a,u,l,h,c,f,y.x,y.y)&&ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=v;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=d&&_!==i&&_!==o&&cs(a,u,l,h,c,f,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=m&&y.y>=g&&y.y<=d&&y!==i&&y!==o&&cs(a,u,l,h,c,f,y.x,y.y)&&ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ob(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!zo(i,r)&&nd(i,n,n.next,r)&&dr(i,r)&&dr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),pr(n),pr(n.next),n=s=r),n=n.next}while(n!==s);return Vi(n)}function Ub(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xb(o,a)){let l=id(o,a);o=Vi(o,o.next),l=Vi(l,l.next),fr(o,e,t,n,i,r,0),fr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function zb(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=td(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(jb(c));for(i.sort(Bb),r=0;r<i.length;r++)t=kb(i[r],t);return t}function Bb(s,e){return s.x-e.x}function kb(s,e){const t=Vb(s,e);if(!t)return e;const n=id(t,s);return Vi(n,n.next),Vi(t,t.next)}function Vb(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&cs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),dr(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Hb(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function Hb(s,e){return ot(s.prev,s,e.prev)<0&&ot(e.next,s,s.next)<0}function Gb(s,e,t,n){let i=s;do i.z===0&&(i.z=cl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Wb(i)}function Wb(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function cl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function jb(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Xb(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!qb(s,e)&&(dr(s,e)&&dr(e,s)&&$b(s,e)&&(ot(s.prev,s,e.prev)||ot(s,e.prev,e))||zo(s,e)&&ot(s.prev,s,s.next)>0&&ot(e.prev,e,e.next)>0)}function ot(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function zo(s,e){return s.x===e.x&&s.y===e.y}function nd(s,e,t,n){const i=to(ot(s,e,t)),r=to(ot(s,e,n)),o=to(ot(t,n,s)),a=to(ot(t,n,e));return!!(i!==r&&o!==a||i===0&&eo(s,t,e)||r===0&&eo(s,n,e)||o===0&&eo(t,s,n)||a===0&&eo(t,e,n))}function eo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function to(s){return s>0?1:s<0?-1:0}function qb(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&nd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function dr(s,e){return ot(s.prev,s,s.next)<0?ot(s,e,s.next)>=0&&ot(s,s.prev,e)>=0:ot(s,e,s.prev)<0||ot(s,s.next,e)<0}function $b(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function id(s,e){const t=new ul(s.i,s.x,s.y),n=new ul(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fh(s,e,t,n){const i=new ul(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ul(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yb(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ps{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ps.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];dh(e),ph(n,e);let o=e.length;t.forEach(dh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,ph(n,t[l]);const a=Ib.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function dh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ph(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class tc extends Ct{constructor(e=new po([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new rt(i,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Kb;let _,y=!1,M,L,D,x;v&&(_=v.getSpacedPoints(u),y=!0,f=!1,M=v.computeFrenetFrames(u,!1),L=new R,D=new R,x=new R),f||(d=0,p=0,g=0,m=0);const C=a.extractPoints(c);let P=C.shape;const H=C.holes;if(!ps.isClockWise(P)){P=P.reverse();for(let w=0,E=H.length;w<E;w++){const I=H[w];ps.isClockWise(I)&&(H[w]=I.reverse())}}const z=ps.triangulateShape(P,H),N=P;for(let w=0,E=H.length;w<E;w++){const I=H[w];P=P.concat(I)}function $(w,E,I){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),E.clone().multiplyScalar(I).add(w)}const Z=P.length,te=z.length;function j(w,E,I){let k,U,J;const ne=w.x-E.x,q=w.y-E.y,le=I.x-w.x,ee=I.y-w.y,T=ne*ne+q*q,b=ne*ee-q*le;if(Math.abs(b)>Number.EPSILON){const F=Math.sqrt(T),Y=Math.sqrt(le*le+ee*ee),se=E.x-q/F,he=E.y+ne/F,ye=I.x-ee/Y,me=I.y+le/Y,Q=((ye-se)*ee-(me-he)*le)/(ne*ee-q*le);k=se+ne*Q-w.x,U=he+q*Q-w.y;const Te=k*k+U*U;if(Te<=2)return new pe(k,U);J=Math.sqrt(Te/2)}else{let F=!1;ne>Number.EPSILON?le>Number.EPSILON&&(F=!0):ne<-Number.EPSILON?le<-Number.EPSILON&&(F=!0):Math.sign(q)===Math.sign(ee)&&(F=!0),F?(k=-q,U=ne,J=Math.sqrt(T)):(k=ne,U=q,J=Math.sqrt(T/2))}return new pe(k/J,U/J)}const G=[];for(let w=0,E=N.length,I=E-1,k=w+1;w<E;w++,I++,k++)I===E&&(I=0),k===E&&(k=0),G[w]=j(N[w],N[I],N[k]);const ue=[];let X,K=G.concat();for(let w=0,E=H.length;w<E;w++){const I=H[w];X=[];for(let k=0,U=I.length,J=U-1,ne=k+1;k<U;k++,J++,ne++)J===U&&(J=0),ne===U&&(ne=0),X[k]=j(I[k],I[J],I[ne]);ue.push(X),K=K.concat(X)}for(let w=0;w<d;w++){const E=w/d,I=p*Math.cos(E*Math.PI/2),k=g*Math.sin(E*Math.PI/2)+m;for(let U=0,J=N.length;U<J;U++){const ne=$(N[U],G[U],k);Ee(ne.x,ne.y,-I)}for(let U=0,J=H.length;U<J;U++){const ne=H[U];X=ue[U];for(let q=0,le=ne.length;q<le;q++){const ee=$(ne[q],X[q],k);Ee(ee.x,ee.y,-I)}}}const fe=g+m;for(let w=0;w<Z;w++){const E=f?$(P[w],K[w],fe):P[w];y?(D.copy(M.normals[0]).multiplyScalar(E.x),L.copy(M.binormals[0]).multiplyScalar(E.y),x.copy(_[0]).add(D).add(L),Ee(x.x,x.y,x.z)):Ee(E.x,E.y,0)}for(let w=1;w<=u;w++)for(let E=0;E<Z;E++){const I=f?$(P[E],K[E],fe):P[E];y?(D.copy(M.normals[w]).multiplyScalar(I.x),L.copy(M.binormals[w]).multiplyScalar(I.y),x.copy(_[w]).add(D).add(L),Ee(x.x,x.y,x.z)):Ee(I.x,I.y,h/u*w)}for(let w=d-1;w>=0;w--){const E=w/d,I=p*Math.cos(E*Math.PI/2),k=g*Math.sin(E*Math.PI/2)+m;for(let U=0,J=N.length;U<J;U++){const ne=$(N[U],G[U],k);Ee(ne.x,ne.y,h+I)}for(let U=0,J=H.length;U<J;U++){const ne=H[U];X=ue[U];for(let q=0,le=ne.length;q<le;q++){const ee=$(ne[q],X[q],k);y?Ee(ee.x,ee.y+_[u-1].y,_[u-1].x+I):Ee(ee.x,ee.y,h+I)}}}ve(),ce();function ve(){const w=i.length/3;if(f){let E=0,I=Z*E;for(let k=0;k<te;k++){const U=z[k];de(U[2]+I,U[1]+I,U[0]+I)}E=u+d*2,I=Z*E;for(let k=0;k<te;k++){const U=z[k];de(U[0]+I,U[1]+I,U[2]+I)}}else{for(let E=0;E<te;E++){const I=z[E];de(I[2],I[1],I[0])}for(let E=0;E<te;E++){const I=z[E];de(I[0]+Z*u,I[1]+Z*u,I[2]+Z*u)}}n.addGroup(w,i.length/3-w,0)}function ce(){const w=i.length/3;let E=0;B(N,E),E+=N.length;for(let I=0,k=H.length;I<k;I++){const U=H[I];B(U,E),E+=U.length}n.addGroup(w,i.length/3-w,1)}function B(w,E){let I=w.length;for(;--I>=0;){const k=I;let U=I-1;U<0&&(U=w.length-1);for(let J=0,ne=u+d*2;J<ne;J++){const q=Z*J,le=Z*(J+1),ee=E+k+q,T=E+U+q,b=E+U+le,F=E+k+le;we(ee,T,b,F)}}}function Ee(w,E,I){l.push(w),l.push(E),l.push(I)}function de(w,E,I){_e(w),_e(E),_e(I);const k=i.length/3,U=S.generateTopUV(n,i,k-3,k-2,k-1);Ne(U[0]),Ne(U[1]),Ne(U[2])}function we(w,E,I,k){_e(w),_e(E),_e(k),_e(E),_e(I),_e(k);const U=i.length/3,J=S.generateSideWallUV(n,i,U-6,U-3,U-2,U-1);Ne(J[0]),Ne(J[1]),Ne(J[3]),Ne(J[1]),Ne(J[2]),Ne(J[3])}function _e(w){i.push(l[w*3+0]),i.push(l[w*3+1]),i.push(l[w*3+2])}function Ne(w){r.push(w.x),r.push(w.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Jb(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ed[i.type]().fromJSON(i)),new tc(n,e.options)}}const Kb={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new pe(r,o),new pe(a,l),new pe(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],m=e[r*3],d=e[r*3+1],v=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-h),new pe(f,1-g),new pe(m,1-v)]:[new pe(a,1-l),new pe(u,1-h),new pe(p,1-g),new pe(d,1-v)]}};function Jb(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mr extends Ns{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mr(e.radius,e.detail)}}class So extends Ns{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new So(e.radius,e.detail)}}class us extends Ns{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new us(e.radius,e.detail)}}class sd extends Ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new R,r=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,p=h.count;for(let g=f,m=f+p;g<m;g+=3)for(let d=0;d<3;d++){const v=a.getX(g+d),S=a.getX(g+(d+1)%3);i.fromBufferAttribute(o,v),r.fromBufferAttribute(o,S),mh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),mh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new rt(t,3))}}}function mh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class nc extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends nc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fn extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rd extends an{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function ti(s,e,t){return od(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function no(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function od(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zb(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ad(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class br{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Qb extends br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case pu:r=e,a=2*t-n;break;case mu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pu:o=e,l=2*n-t;break;case mu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,d=m*g,v=-f*d+2*f*m-f*g,S=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,_=(-1-p)*d+(1.5+p)*m+.5*g,y=p*d-p*m;for(let M=0;M!==a;++M)r[M]=v*o[u+M]+S*o[c+M]+_*o[l+M]+y*o[h+M];return r}}class eM extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class tM extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ti(n,r,o),this.values=ti(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&od(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ti(this.times),t=ti(this.values),n=this.getValueSize(),i=this.getInterpolation()===ta,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ti(e,0,o),this.values=ti(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ti(this.times,0),t=ti(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ss;class Fs extends Cn{}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=lr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class ld extends Cn{}ld.prototype.ValueTypeName="color";class gr extends Cn{}gr.prototype.ValueTypeName="number";class nM extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)di.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Hi extends Cn{InterpolantFactoryMethodLinear(e){return new nM(this.times,this.values,this.getValueSize(),e)}}Hi.prototype.ValueTypeName="quaternion";Hi.prototype.DefaultInterpolation=Ss;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Cn{}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=lr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends Cn{}vr.prototype.ValueTypeName="vector";class iM{constructor(e,t=-1,n,i=qg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rM(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Zb(l);l=gh(l,1,u),c=gh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new gr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,m){if(p.length!==0){const d=[],v=[];ad(p,d,v,g),d.length!==0&&m.push(new h(f,d,v))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(const m in p){const d=[],v=[];for(let S=0;S!==f[g].morphTargets.length;++S){const _=f[g];d.push(_.time),v.push(_.morphTarget===m?1:0)}i.push(new gr(".morphTargetInfluence["+m+"]",d,v))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(vr,p+".position",f,"pos",i),n(Hi,p+".quaternion",f,"rot",i),n(vr,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gr;case"vector":case"vector2":case"vector3":case"vector4":return vr;case"color":return ld;case"quaternion":return Hi;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function rM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sM(s.type);if(s.times===void 0){const t=[],n=[];ad(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ts={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class oM{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const aM=new oM;class Us{constructor(e){this.manager=e!==void 0?e:aM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const On={};class lM extends Error{constructor(e,t){super(e),this.response=t}}class ic extends Us{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:i});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=On[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let m=0;const d=new ReadableStream({start(v){S();function S(){h.read().then(({done:_,value:y})=>{if(_)v.close();else{m+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let L=0,D=u.length;L<D;L++){const x=u[L];x.onProgress&&x.onProgress(M)}v.enqueue(y),S()}})}}});return new Response(d)}else throw new lM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ts.add(e,c);const u=On[e];delete On[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=On[e];if(u===void 0)throw this.manager.itemError(e),c;delete On[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cM extends Us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=hr("img");function l(){u(),Ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class uM extends Us{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,o=new cM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Mr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class hM extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ia=new Ue,vh=new R,xh=new R;class sc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(vh),xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xh),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fM extends sc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dM extends Mr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _h=new Ue,Ws=new R,Na=new R;class pM extends sc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),Na.copy(n.position),Na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Na),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class cd extends Mr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mM extends sc{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.shadow=new mM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gM extends Mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ui{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vM extends Ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class xM extends Us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ts.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class hd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yh(){return(typeof performance>"u"?Date:performance).now()}const rc="\\[\\]\\.:\\/",_M=new RegExp("["+rc+"]","g"),oc="[^"+rc+"]",yM="[^"+rc.replace("\\.","")+"]",bM=/((?:WC+[\/:])*)/.source.replace("WC",oc),MM=/(WCOD+)?/.source.replace("WCOD",yM),SM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),wM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),TM=new RegExp("^"+bM+MM+SM+wM+"$"),EM=["material","materials","bones","map"];class AM{constructor(e,t,n){const i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_M,"")}static parseTrackName(e){const t=TM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);EM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=AM;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hl extends qf{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class CM{constructor(){this.type="ShapePath",this.color=new Re,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ll,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const S=[];for(let _=0,y=v.length;_<y;_++){const M=v[_],L=new po;L.curves=M.curves,S.push(L)}return S}function n(v,S){const _=S.length;let y=!1;for(let M=_-1,L=0;L<_;M=L++){let D=S[M],x=S[L],C=x.x-D.x,P=x.y-D.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(D=S[L],C=-C,x=S[M],P=-P),v.y<D.y||v.y>x.y)continue;if(v.y===D.y){if(v.x===D.x)return!0}else{const H=P*(v.x-D.x)-C*(v.y-D.y);if(H===0)return!0;if(H<0)continue;y=!y}}else{if(v.y!==D.y)continue;if(x.x<=v.x&&v.x<=D.x||D.x<=v.x&&v.x<=x.x)return!0}}return y}const i=ps.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new po,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,m;f[g]=void 0,p[g]=[];for(let v=0,S=r.length;v<S;v++)a=r[v],m=a.getPoints(),o=i(m),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new po,p:m},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:m[0]});if(!f[0])return t(r);if(f.length>1){let v=!1,S=0;for(let _=0,y=f.length;_<y;_++)h[_]=[];for(let _=0,y=f.length;_<y;_++){const M=p[_];for(let L=0;L<M.length;L++){const D=M[L];let x=!0;for(let C=0;C<f.length;C++)n(D.p,f[C].p)&&(_!==C&&S++,x?(x=!1,h[C].push(D)):v=!0);x&&h[_].push(D)}}S>0&&v===!1&&(p=h)}let d;for(let v=0,S=f.length;v<S;v++){l=f[v].s,c.push(l),d=p[v];for(let _=0,y=d.length;_<y;_++)l.holes.push(d[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class En{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),En.nextNameID=En.nextNameID||0,this.$name.id="lil-gui-name-"+ ++En.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class LM extends En{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function fl(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const PM={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:fl,toHexString:fl},xr={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},RM={isPrimitive:!1,match:Array.isArray,fromHexString(s,e,t=1){const n=xr.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([s,e,t],n=1)=>xr.toHexString(s*(n=255/n)<<16^e*n<<8^t*n<<0)},DM={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=xr.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:s,g:e,b:t},n=1)=>xr.toHexString(s*(n=255/n)<<16^e*n<<8^t*n<<0)},IM=[PM,xr,RM,DM];class NM extends En{constructor(e,t,n,i){var r;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,IM.find(o=>o.match(r))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=fl(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Fa extends En{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class FM extends En{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let t,n,i,r,o,a=!1;const l=u=>{if(a){const h=u.clientX-t,f=u.clientY-n;Math.abs(f)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&c()}if(!a){const h=u.clientY-i;o-=h*this._step*this._arrowKeyMultiplier(u),r+o>this._max?o=this._max-r:r+o<this._min&&(o=this._min-r),this._snapClampSetValue(r+o)}i=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{const u=parseFloat(this.$input.value);isNaN(u)||this.setValue(this._clamp(u))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,n=i=u.clientY,a=!0,r=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=f=>{const p=this.$slider.getBoundingClientRect();let g=(m=f,d=p.left,v=p.right,S=this._min,_=this._max,(m-d)/(v-d)*(_-S)+S);var m,d,v,S,_;this._snapClampSetValue(g)},t=f=>{e(f.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let i,r,o=!1;const a=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),o=!1},l=f=>{if(o){const p=f.touches[0].clientX-i,g=f.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?a(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else f.preventDefault(),e(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(i=f.touches[0].clientX,r=f.touches[0].clientY,o=!0):a(f),window.addEventListener("touchmove",l),window.addEventListener("touchend",c))}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const p=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class OM extends En{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class UM extends En{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let bh=!1;class ac{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!bh&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),bh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new OM(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new FM(this,e,t,n,i,r);case"boolean":return new LM(this,e,t);case"string":return new UM(this,e,t);case"function":return new Fa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new NM(this,e,t,n)}addFolder(e){return new ac({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Fa||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Fa)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function Mh(s){let e=document.getElementById("three-canvas");const t=new ub,n=new Xf({antialias:!0,alpha:!0}),i=new zt(45,window.innerWidth/window.innerHeight,1);i.position.z=5,i.position.y=0,n.setSize(window.innerWidth,window.innerHeight);let r=e.lastElementChild;for(;r;)e.removeChild(r),r=e.lastElementChild;return e.appendChild(n.domElement),t.fog=new $l(742292,5,180),{scene:t,camera:i,renderer:n}}class at{constructor(e,t){je(this,"scene");this.lights=[];let n=this;this.scene=e,this.gui=t.addFolder("Lights").close(),this.addEnable=!0,this.addSelection={selection:at.TYPE.None,add:i},this.addMenu();function i(){n.addLight(n.addSelection.selection),n.lights.length>=3&&n.addEnable.disable()}e.add(new gM(10066329))}addShadow(e){e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=500,e.shadow.radius=4,e.shadow.blurSamples=8,e.shadow.camera.right=15,e.shadow.camera.left=-15,e.shadow.camera.top=15,e.shadow.camera.bottom=-15,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.bias=-5e-4}addMenu(){const e=this.gui.addFolder("Add Light");e.add(this.addSelection,"selection",{None:at.TYPE.None,Point:at.TYPE.Point,Directional:at.TYPE.Directional,Hemisphere:at.TYPE.Hemisphere}).name("Light Type"),this.addEnable=e.add(this.addSelection,"add").name("Add")}addLight(e,t){switch(e){case at.TYPE.None:break;case at.TYPE.Point:this.initPointLight(t||at.PointLIGHT);break;case at.TYPE.Directional:this.initDirLight(t||at.DirLIGHT);break;case at.TYPE.Hemisphere:this.initHemiLight(t||at.HemiLIGHT);break}}removeLight(e,t){this.scene.remove(e),e.dispose(),t.destroy()}initPointLight(e){let t=new cd(e.color,e.intensity,e.distance);t.position.set(3,3,3),this.addShadow(t),this.scene.add(t),this.lights.push(e);let n=this.lights.length-1;return this.pointLightGUI(n,t),t}initDirLight(e){let t=new ud(e.color),n=e.rotate.r*Math.cos(e.rotate.a*Math.PI/180),i=e.rotate.r*Math.sin(e.rotate.a*Math.PI/180);t.position.set(n,e.rotate.h,i),t.intensity=e.intensity,this.addShadow(t),this.scene.add(t),this.lights.push(e);let r=this.lights.length-1;return this.dirLightGUI(r,t),t}initHemiLight(e){let t=new hM(e.color,e.groundColor);this.scene.add(t),this.lights.push(e);let n=this.lights.length-1;return this.hemiLightGUI(n,t),t}pointLightGUI(e,t){let n=this,i="#"+e+" PointLight";const r=this.gui.addFolder(i);r.add(this.lights[e],"intensity",0,100).name("Intensity").onChange(function(l){t.intensity=l}),r.add(this.lights[e],"distance",0,500).name("Distance").onChange(function(l){t.distance=l}),r.addColor(t,"color").name("Color").onChange(function(){n.lights[e].color=t.color}),r.add(this.lights[e].position,"x",-20,20).onChange(function(l){t.position.x=l}),r.add(this.lights[e].position,"y",-20,20).onChange(function(l){t.position.y=l}),r.add(this.lights[e].position,"z",-20,20).onChange(function(l){t.position.z=l}),r.add(this.lights[e],"decay",1,5).name("Decay").onChange(function(l){t.decay=l}),r.add(this.lights[e],"power",1,1e3).name("Power").onChange(function(l){t.power=l}),r.add(this.lights[e].shadow,"radius",0,10).name("Shadow Radius").onChange(function(l){t.shadow.radius=l}),r.add(this.lights[e].shadow,"blurSamples",1,10,1).name("Blur Samples").onChange(function(l){t.shadow.blurSamples=l});let o={Enable:!0,Remove:a};r.add(o,"Enable").onChange(function(){o.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function a(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(o,"Remove")}dirLightGUI(e,t){let n=this,i="#"+e+" Directional Light";const r=this.gui.addFolder(i);r.add(this.lights[e],"intensity",0,20).name("Intensity").onChange(function(l){t.intensity=l}),r.addColor(t,"color").name("Color").onChange(function(){n.lights[e].color=t.color}),r.add(this.lights[e].rotate,"r",0,50).onChange(function(l){let c=l*Math.cos(n.lights[e].rotate.a*Math.PI/180),u=l*Math.sin(n.lights[e].rotate.a*Math.PI/180);t.position.set(c,n.lights[e].rotate.h,u)}).name("Rotate Radius"),r.add(this.lights[e].rotate,"a",-360,360).onChange(function(l){let c=n.lights[e].rotate.r*Math.cos(l*Math.PI/180),u=n.lights[e].rotate.r*Math.sin(l*Math.PI/180);t.position.set(c,n.lights[e].rotate.h,u)}).name("Rotate Angle"),r.add(this.lights[e].rotate,"h",1,20).onChange(function(l){t.position.y=l}).name("Light Height"),r.add(this.lights[e].shadow,"radius",0,10).name("Shadow Radius").onChange(function(l){t.shadow.radius=l}),r.add(this.lights[e].shadow,"blurSamples",1,10,1).name("Blur Samples").onChange(function(l){t.shadow.blurSamples=l});let o={Enable:!0,Remove:a};r.add(o,"Enable").onChange(function(){o.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function a(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(o,"Remove")}hemiLightGUI(e,t){let n=this,i="#"+e+" Hemisphere Light";const r=this.gui.addFolder(i);r.add(this.lights[e],"intensity",0,20).name("Intensity").onChange(function(l){t.intensity=l}),r.addColor(t,"color").name("Sky Color").onChange(function(){n.lights[e].color=t.color}),r.addColor(t,"groundColor").name("Ground Color").onChange(function(){n.lights[e].groundColor=t.groundColor});let o={Enable:!0,Remove:a};r.add(o,"Enable").onChange(function(){o.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function a(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(o,"Remove")}}at.TYPE={None:0,Point:1,Directional:2,Hemisphere:3,Spot:4};at.PointLIGHT={type:at.TYPE.Point,intensity:40,distance:100,color:16776960,position:{x:3,y:3,z:3},decay:1,power:500,shadow:{radius:4,blurSamples:8},enable:!0};at.DirLIGHT={type:at.TYPE.Directional,intensity:1,color:65535,rotate:{r:20,a:90,h:15},shadow:{radius:4,blurSamples:8},enable:!0};at.HemiLIGHT={type:at.TYPE.Hemisphere,intensity:1,color:16777215,groundColor:1184307,enable:!0};class fd extends Us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new HM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new VM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new ZM(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ui.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ic(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Ui.decodeText(new Uint8Array(e,0,4))===dd){try{o[qe.KHR_BINARY_GLTF]=new QM(e)}catch(u){i&&i(u);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(Ui.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new hS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:o[u]=new kM;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new eS(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[u]=new tS;break;case qe.KHR_MESH_QUANTIZATION:o[u]=new nS;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function zM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BM{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Re(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ud(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cd(u),c.distance=h;break;case"spot":c=new dM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class kM{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return vn}extendParams(e,t,n){const i=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ze))}return Promise.all(i)}}class VM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class HM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(r)}}class GM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ze)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class jM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class XM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re(a[0],a[1],a[2]),Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class $M{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ze)),Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class KM{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JM{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class ZM{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const m=new Ue,d=new R,v=new di,S=new R(1,1,1),_=new gb(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&d.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,m.compose(d,v,S));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);st.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const dd="glTF",js=12,Sh={JSON:1313821514,BIN:5130562};class QM{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,js);if(this.header={magic:Ui.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-js,i=new DataView(e,js);let r=0;for(;r<n;){const o=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===Sh.JSON){const l=new Uint8Array(e,js+r,o);this.content=Ui.decodeText(l)}else if(a===Sh.BIN){const l=js+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=dl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=dl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=ms[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(f)},a,c)})})}}class tS{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nS{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class pd extends br{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,m=g-c,d=-2*p+3*f,v=p-f,S=1-d,_=v-f+h;for(let y=0;y!==a;y++){const M=o[m+y+a],L=o[m+y+l]*u,D=o[g+y+a],x=o[g+y]*u;r[y]=S*M+_*L+d*D+v*x}return r}}const iS=new di;class sS extends pd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return iS.fromArray(r).normalize().toArray(r),r}}const en={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wh={9728:Ve,9729:Gt,9984:tl,9985:Af,9986:nl,9987:Ps},Th={33071:tn,33648:bo,10497:ys},Oa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rS={CUBICSPLINE:void 0,LINEAR:Ss,STEP:lr},Ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new nc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),s.DefaultMaterial}function Xs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function lS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cS(s){const e=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Eh(e.attributes):t=s.indices+":"+Eh(s.attributes)+":"+s.mode,t}function Eh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function pl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class hS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zM,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new uM(this.options.manager):this.textureLoader=new xM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ic(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Xs(r,a,i),ri(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ui.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Oa[i.type],a=ms[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new kt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Oa[i.type],c=ms[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,d;if(p&&p!==h){const v=Math.floor(f/p),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let _=t.cache.get(S);_||(m=new c(a,v*p,i.count*p/u),_=new qf(m,p/u),t.cache.add(S,_)),d=new Vn(_,l,f%p/u,g)}else a===null?m=new c(i.count*l):m=new c(a,f,i.count*l),d=new kt(m,l,g);if(i.sparse!==void 0){const v=Oa.SCALAR,S=ms[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new S(o[1],_,i.sparse.count*v),L=new c(o[2],y,i.sparse.count*l);a!==null&&(d=new kt(d.array.slice(),d.itemSize,d.normalized));for(let D=0,x=M.length;D<x;D++){const C=M[D];if(d.setX(C,L[D*l]),l>=2&&d.setY(C,L[D*l+1]),l>=3&&d.setZ(C,L[D*l+2]),l>=4&&d.setW(C,L[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=wh[f.magFilter]||Gt,u.minFilter=wh[f.minFilter]||Ps,u.wrapS=Th[f.wrapS]||ys,u.wrapT=Th[f.wrapT]||ys,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const d=new Tt(m);d.needsUpdate=!0,f(d)}),t.load(Ui.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||uS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Kf,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Yf,an.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return nc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=i[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ze)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gn);const u=r.alphaMode||Ua.OPAQUE;if(u===Ua.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ua.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==vn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vn&&(a.emissive=new Re().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==vn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ze)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&Xs(i,h,r),h})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ah(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=cS(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ah(new Ct,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?oS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],d=o[p];let v;const S=c[p];if(d.mode===en.TRIANGLES||d.mode===en.TRIANGLE_STRIP||d.mode===en.TRIANGLE_FAN||d.mode===void 0)v=r.isSkinnedMesh===!0?new fb(m,S):new pt(m,S),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),d.mode===en.TRIANGLE_STRIP?v.geometry=Ch(v.geometry,$g):d.mode===en.TRIANGLE_FAN&&(v.geometry=Ch(v.geometry,Cf));else if(d.mode===en.LINES)v=new vb(m,S);else if(d.mode===en.LINE_STRIP)v=new Kl(m,S);else if(d.mode===en.LINE_LOOP)v=new xb(m,S);else if(d.mode===en.POINTS)v=new _b(m,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(v.geometry.morphAttributes).length>0&&lS(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),ri(v,r),d.extensions&&Xs(i,v,d),t.assignFinalMaterial(v),h.push(v)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const f=new kn;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(fv.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new yr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ue;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Yl(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],p=h.target,g=p.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,d=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),a.push(f),l.push(p)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],p=c[3],g=c[4],m=[];for(let v=0,S=u.length;v<S;v++){const _=u[v],y=h[v],M=f[v],L=p[v],D=g[v];if(_===void 0)continue;_.updateMatrix();let x;switch(ni[D.path]){case ni.weights:x=gr;break;case ni.rotation:x=Hi;break;case ni.position:case ni.scale:default:x=vr;break}const C=_.name?_.name:_.uuid,P=L.interpolation!==void 0?rS[L.interpolation]:Ss,H=[];ni[D.path]===ni.weights?_.traverse(function(z){z.morphTargetInfluences&&H.push(z.name?z.name:z.uuid)}):H.push(C);let ae=M.array;if(M.normalized){const z=pl(ae.constructor),N=new Float32Array(ae.length);for(let $=0,Z=ae.length;$<Z;$++)N[$]=ae[$]*z;ae=N}for(let z=0,N=H.length;z<N;z++){const $=new x(H[z]+"."+ni[D.path],y.array,ae,P);L.interpolation==="CUBICSPLINE"&&($.createInterpolant=function(te){const j=this instanceof Hi?sS:pd;return new j(this.times,this.values,this.getValueSize()/3,te)},$.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push($)}}const d=n.name?n.name:"animation_"+e;return new iM(d,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new $f:a.length>1?l=new kn:a.length===1?l=a[0]:l=new st,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),ri(l,r),r.extensions&&Xs(n,l,r),r.matrix!==void 0){const c=new Ue;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,o=new kn;i.name&&(o.name=r.createUniqueName(i.name)),ri(o,i),i.extensions&&Xs(n,o,i);const a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(md(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,p]of r.associations)(f instanceof an||f instanceof Tt)&&h.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(o),o})}}function md(s,e,t,n){const i=t.nodes[s];return n.getDependency("node",s).then(function(r){return i.skin===void 0?r:n.getDependency("skin",i.skin).then(function(o){return r.traverse(function(a){!a.isSkinnedMesh||a.bind(o,a.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(md(u,r,t,n))}}return Promise.all(o)})}function fS(s,e,t){const n=e.attributes,i=new pi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){const u=pl(ms[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,l=new R;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const m=pl(ms[f.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Gi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ah(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=dl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ri(s,e),fS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?aS(s,e.targets,t):s})}function Ch(s,e){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Cf)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}const ir={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class mi{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dS=new yr(-1,1,1,-1,0,1),lc=new Ct;lc.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3));lc.setAttribute("uv",new rt([0,2,0,0,2,0],2));class Es{constructor(e){this._mesh=new pt(lc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class At extends mi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pn.clone(e.uniforms),this.material=new bt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Es(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lh extends mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class pS extends mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class mS{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new pe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new wt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ir===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),At===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new At(ir),this.clock=new hd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lh!==void 0&&(o instanceof Lh?n=!0:o instanceof pS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new yr(-1,1,1,-1,0,1);const gd=new Ct;gd.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3));gd.setAttribute("uv",new rt([0,2,0,0,2,0],2));class gS extends mi{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const vS={uniforms:{tDiffuse:{value:10},tSize:{value:new pe(64,64)},center:{value:new pe(0,0)},angle:{value:1.57},scale:{value:1}},vertexShader:`

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

		}`};function Vt(s){let e=s*(1-s);return(e*(1+-1.4168*e)+s)**2}class xS{constructor(e,t){je(this,"time",0);this.composer=e,this.size=3,this.max=t;const n=new At(vS);n.uniforms.scale.value=3,n.uniforms.angle.value=0,this.pass=n}add(e){const t=document.createElement("audio");t.hidden=!0,t.src="./sound/aCrash.wav",t.volume=.5,t.play(),this.time=0,this.size=Math.random()*2+2,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<10){let t=Vt(this.time/10);this.pass.uniforms.scale.value=this.size+1-t}else this.time==10&&(this.pass.uniforms.scale.value=this.size);this.time+=1}}}const vd={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

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

		}`};class _S{constructor(e,t,n,i){je(this,"time",0);this.composer=e,this.max=t,this.amount=n,this.fadeTP=i;const r=new At(vd);r.uniforms.amount.value=n,this.pass=r}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aHiHat.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<=this.fadeTP){let t=Vt(this.time/this.fadeTP)*(this.amount-.005);this.pass.uniforms.amount.value=t+.005}else this.time==this.fadeTP+1&&(this.pass.uniforms.amount.value=this.amount);this.time+=1}}}const hn={defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new pe},cameraProjectionMatrix:{value:new Ue},cameraInverseProjectionMatrix:{value:new Ue},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

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
	`},io={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

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

	`},ii={uniforms:{tDiffuse:{value:null},resolution:{value:new pe},opacity:{value:.5}},vertexShader:`

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
	`};class wn extends mi{constructor({renderer:e,scene:t,camera:n,width:i,height:r,selects:o,bouncing:a=!1,groundReflector:l}){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.renderer=e,this.scene=t,this.camera=n,this.groundReflector=l,this.opacity=hn.uniforms.opacity.value,this.output=0,this.maxDistance=hn.uniforms.maxDistance.value,this.thickness=hn.uniforms.thickness.value,this.tempColor=new Re,this._selects=o,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(u){this._selects!==u&&(this._selects=u,Array.isArray(u)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=a,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(u){this._bouncing!==u&&(this._bouncing=u,u?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=hn.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(u){this._distanceAttenuation!==u&&(this._distanceAttenuation=u,this.ssrMaterial.defines.DISTANCE_ATTENUATION=u,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=hn.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(u){this._fresnel!==u&&(this._fresnel=u,this.ssrMaterial.defines.FRESNEL=u,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=hn.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(u){this._infiniteThick!==u&&(this._infiniteThick=u,this.ssrMaterial.defines.INFINITE_THICK=u,this.ssrMaterial.needsUpdate=!0)}});const c=new ql;c.type=Vl,c.minFilter=Ve,c.magFilter=Ve,this.beautyRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve}),this.normalRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve,type:bs}),this.metalnessRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve}),this.ssrRenderTarget=new wt(this.width,this.height,{minFilter:Ve,magFilter:Ve}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),hn===void 0&&console.error("THREE.SSRPass: The pass relies on SSRShader."),this.ssrMaterial=new bt({defines:Object.assign({},hn.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:pn.clone(hn.uniforms),vertexShader:hn.vertexShader,fragmentShader:hn.fragmentShader,blending:dt}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new rd,this.normalMaterial.blending=dt,this.metalnessOnMaterial=new vn({color:"white"}),this.metalnessOffMaterial=new vn({color:"black"}),this.blurMaterial=new bt({defines:Object.assign({},ii.defines),uniforms:pn.clone(ii.uniforms),vertexShader:ii.vertexShader,fragmentShader:ii.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new bt({defines:Object.assign({},ii.defines),uniforms:pn.clone(ii.uniforms),vertexShader:ii.vertexShader,fragmentShader:ii.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new bt({defines:Object.assign({},io.defines),uniforms:pn.clone(io.uniforms),vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,blending:dt}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bt({uniforms:pn.clone(ir.uniforms),vertexShader:ir.vertexShader,fragmentShader:ir.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:_o,blendDst:yo,blendEquation:oi,blendSrcAlpha:_o,blendDstAlpha:yo,blendEquationAlpha:oi}),this.fsQuad=new Es(null),this.originalClearColor=new Re}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this.renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case wn.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Gn,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Gn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case wn.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Gn,this.renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case wn.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case wn.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case wn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case wn.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}renderPass(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderMetalness(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.traverseVisible(l=>{l._SSRPassBackupMaterial=l.material,this._selects.includes(l)?l.material=this.metalnessOnMaterial:l.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(l=>{l.material=l._SSRPassBackupMaterial}),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+t*t),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.prevRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.blurRenderTarget2.setSize(e,t),this.ssrMaterial.uniforms.resolution.value.set(e,t),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t),this.blurMaterial2.uniforms.resolution.value.set(e,t)}}wn.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};const yS={uniforms:{height:{value:0},width:{value:0},random:{value:140},time:{value:50},tDiffuse:{value:null}},vertexShader:`

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
    `},bS={uniforms:{height:{value:0},width:{value:0},tDiffuse:{value:null}},vertexShader:`

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
    `};class MS{constructor(e,t,n,i,r){je(this,"time",0);this.composer=e,this.max=t,this.renderer=n,this.water=new At(yS),this.paint=new At(bS),this.water.uniforms.width.value=innerWidth,this.paint.uniforms.width.value=innerWidth,this.water.uniforms.height.value=innerHeight,this.paint.uniforms.height.value=innerHeight,this.water.uniforms.random.value=Math.random()*200;let o=new wn({renderer:n,scene:i,camera:r,width:innerWidth,height:innerHeight});o.output=wn.OUTPUT.Normal,o.opacity=1,this.pass=o}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aK0.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass),this.composer.addPass(this.water),this.composer.addPass(this.paint)}end(){this.composer.removePass(this.pass),this.composer.removePass(this.water),this.composer.removePass(this.paint)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.time+=1,this.water.uniforms.time.value=this.time/this.max)}}const SS={uniforms:{ring1:{value:6},ring2:{value:10},push1:{value:1},push2:{value:1},rand1:{value:.7},rand2:{value:.2},diminish:{value:.05},tDiffuse:{value:null}},vertexShader:`

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

        }`};class wS{constructor(e,t,n){je(this,"time",0);this.composer=e,this.max=t,this.fadeTP=n;const i=new At(SS);i.uniforms.push1.value=0,i.uniforms.push2.value=0,i.uniforms.rand1.value=Math.random(),i.uniforms.rand2.value=Math.random(),this.pass=i}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/dClap.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<=this.fadeTP){let t=Vt(this.time/this.fadeTP);this.pass.uniforms.push1.value=t*2,this.pass.uniforms.push2.value=t}else this.time==this.fadeTP+1&&(this.pass.uniforms.push1.value=2,this.pass.uniforms.push2.value=1);this.time+=1}}}const TS={uniforms:{time:{value:0},tDiffuse:{value:null}},vertexShader:`

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

        }`};class ES{constructor(e,t){je(this,"time",0);this.composer=e,this.max=t;const n=new At(TS);this.pass=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/sPerc.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.pass.uniforms.time.value=2*this.time/this.max,this.time+=1)}}const AS={uniforms:{time:{value:0},height:{value:0},width:{value:0},tDiffuse:{value:null}},vertexShader:`

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
	        
        }`};class CS{constructor(e,t,n,i){je(this,"time",0);this.composer=e,this.max=t;const r=new At(AS);r.uniforms.width.value=n,r.uniforms.height.value=i,this.pass=r}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aTom.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.pass.uniforms.time.value=this.time/this.max,this.time+=1)}}const LS={uniforms:{height:{value:0},width:{value:0},kernelX:{value:[3,0,-3,10,0,-10,3,0,-3]},kernelY:{value:[-3,-10,-3,0,0,0,3,10,3]},amount:{value:.1},tDiffuse:{value:null}},vertexShader:`

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
    `};class PS{constructor(e,t,n,i,r){je(this,"time",0);this.composer=e,this.max=t,this.fadeTP=r;const o=new At(LS);o.uniforms.width.value=n,o.uniforms.height.value=i,this.pass=o}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aRide.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<=this.fadeTP){let t=Vt(this.time/this.fadeTP);this.pass.uniforms.amount.value=1-t}else this.time==this.fadeTP+1&&(this.pass.uniforms.amount.value=0);this.time+=1}}}const RS={uniforms:{height:{value:0},width:{value:0},size:{value:20},tDiffuse:{value:null}},vertexShader:`

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
    `};class DS{constructor(e,t,n,i){je(this,"time",0);this.composer=e,this.max=t,this.size=15;const r=new At(RS);r.uniforms.width.value=n,r.uniforms.height.value=i,this.pass=r}add(e){const t=document.createElement("audio");t.hidden=!0,t.src="./sound/aS2.wav",t.volume=.5,t.play(),this.time=0,this.size=Math.random()*10+10,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<20){let t=Vt(this.time/20);this.pass.uniforms.size.value=this.size+3-t*3}else this.time==10&&(this.pass.uniforms.size.value=this.size);this.time+=1}}}const so={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

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

		}`};class IS extends mi{constructor(e,t,n){super(),so===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=pn.clone(so.uniforms),this.material=new bt({uniforms:this.uniforms,fragmentShader:so.fragmentShader,vertexShader:so.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=t;for(const i in n)n.hasOwnProperty(i)&&this.uniforms.hasOwnProperty(i)&&(this.uniforms[i].value=n[i]);this.fsQuad=new Es(this.material)}render(e,t,n){this.material.uniforms.tDiffuse.value=n.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const cc={uniforms:{tDiffuse:{value:null}},vertexShader:`

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
    `};class NS{constructor(e,t,n,i){je(this,"time",0);this.composer=e,this.max=t;const r={shape:1,radius:4,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:0,blending:1,blendingMode:1,greyscale:!1,disable:!1};this.mask=new At(cc),this.pass=new IS(n,i,r),this.fadeTP1=20,this.fadeTP2=30}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aPerc.wav",e.volume=.5,e.play(),this.time=0,this.size=Math.random()*10+15,this.composer.addPass(this.pass),this.composer.addPass(this.mask),this.pass.uniforms.shape.value=Math.round(Math.random()*3)+1}end(){this.composer.removePass(this.pass),this.composer.removePass(this.mask)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<=this.fadeTP1){let t=Vt(this.time/this.fadeTP1);this.pass.uniforms.blending.value=t}else this.time==this.fadeTP1+1&&(this.pass.uniforms.blending.value=1);if(this.time<=this.fadeTP2){let t=Vt(this.time/this.fadeTP2)*(this.size-6);this.pass.uniforms.radius.value=t+6}else this.time==this.fadeTP1+1&&(this.pass.uniforms.radius.value=this.size);this.time+=1}}}const FS={uniforms:{tDiffuse:{value:null},tSize:{value:new pe(256,256)},center:{value:new pe(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

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

		}`};class OS{constructor(e,t,n){je(this,"time",0);this.composer=e,this.max=t,this.size=4,this.fadeTP=n;const i=new At(FS);i.uniforms.scale.value=this.size,this.p1=i;const r=new At(vd);r.uniforms.amount.value=.0015,this.p2=r}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/sF6.wav",e.volume=.5,e.play(),this.time=0,this.size=2+Math.random(),this.composer.addPass(this.p1),this.composer.addPass(this.p2)}end(){this.composer.removePass(this.p1),this.composer.removePass(this.p2)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<this.fadeTP){let t=Vt(this.time/this.fadeTP);this.p1.uniforms.scale.value=this.size+1-t}else this.time==this.fadeTP&&(this.p1.uniforms.scale.value=this.size);this.time+=1}}}class US extends mi{constructor(e,t,n,i={}){super(),this.pixelSize=e,this.resolution=new pe,this.renderResolution=new pe,this.pixelatedMaterial=this.createPixelatedMaterial(),this.normalMaterial=new rd,this.fsQuad=new Es(this.pixelatedMaterial),this.scene=t,this.camera=n,this.normalEdgeStrength=i.normalEdgeStrength||.3,this.depthEdgeStrength=i.depthEdgeStrength||.4,this.beautyRenderTarget=new wt,this.beautyRenderTarget.texture.minFilter=Ve,this.beautyRenderTarget.texture.magFilter=Ve,this.beautyRenderTarget.depthTexture=new ql,this.normalRenderTarget=new wt,this.normalRenderTarget.texture.minFilter=Ve,this.normalRenderTarget.texture.magFilter=Ve}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this.normalMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.resolution.set(e,t),this.renderResolution.set(e/this.pixelSize|0,t/this.pixelSize|0);const{x:n,y:i}=this.renderResolution;this.beautyRenderTarget.setSize(n,i),this.normalRenderTarget.setSize(n,i),this.fsQuad.material.uniforms.resolution.value.set(n,i,1/n,1/i)}setPixelSize(e){this.pixelSize=e,this.setSize(this.resolution.x,this.resolution.y)}render(e,t){const n=this.fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera);const i=this.scene.overrideMaterial;e.setRenderTarget(this.normalRenderTarget),this.scene.overrideMaterial=this.normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=i,n.tDiffuse.value=this.beautyRenderTarget.texture,n.tDepth.value=this.beautyRenderTarget.depthTexture,n.tNormal.value=this.normalRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this.fsQuad.render(e)}createPixelatedMaterial(){return new bt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Qe(this.renderResolution.x,this.renderResolution.y,1/this.renderResolution.x,1/this.renderResolution.y)},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
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
			`})}}class zS{constructor(e,t,n,i,r){je(this,"time",0);this.composer=e,this.max=t,this.pass=new US(32,n,i),this.fadeTP=r}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/cCrash.wav",e.volume=.5,e.play(),this.time=0,this.size=Math.random()*16+32,this.composer.addPass(this.pass)}end(){this.composer.removePass(this.pass)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{if(this.time<this.fadeTP){let t=Vt(this.time/this.fadeTP)*this.fadeTP;this.pass.pixelSize=Math.floor(t)}else this.time==this.fadeTP&&(this.pass.pixelSize=this.size);this.time+=1}}}const Ph={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class BS extends mi{constructor(e=.96){super(),Ph===void 0&&console.error("THREE.AfterimagePass relies on AfterimageShader"),this.shader=Ph,this.uniforms=pn.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new wt(window.innerWidth,window.innerHeight,{magFilter:Ve}),this.textureOld=new wt(window.innerWidth,window.innerHeight,{magFilter:Ve}),this.compFsMaterial=new bt({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Es(this.compFsMaterial),this.copyFsMaterial=new vn,this.copyFsQuad=new Es(this.copyFsMaterial)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}class kS{constructor(e,t){je(this,"time",0);this.composer=e,this.max=t,this.mask=new At(cc),this.pass=new BS}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aT1.wav",e.volume=.5,e.play(),this.time=0,this.composer.addPass(this.pass),this.composer.addPass(this.mask)}end(){this.composer.removePass(this.pass),this.composer.removePass(this.mask)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):this.time+=1}}const VS={uniforms:{amount:{value:.3},speed:{value:.005},iTime:{value:0},tDiffuse:{value:null}},vertexShader:`

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
    `};class HS{constructor(e,t){je(this,"time",0);this.composer=e,this.max=t,this.pass=new At(VS),this.mask=new At(cc)}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/dF5.wav",e.volume=.5,e.play(),this.time=0,this.pass.uniforms.amount.value=Math.random()*.1+.2,this.composer.addPass(this.pass),this.composer.addPass(this.mask)}end(){this.composer.removePass(this.pass),this.composer.removePass(this.mask)}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.pass.uniforms.iTime.value=this.time,this.time+=1)}}class GS{constructor(e,t,n){je(this,"time",0);je(this,"mesh");je(this,"start");je(this,"direction");this.max=t,this.scene=e,this.color=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/cRide.wav",e.volume=.5,e.play();let t=Math.random()*.5+1.4,n=new Uo(t,t,Math.random()*.1+.1,Math.floor(Math.random()*5)+4,1,!0,0,Math.PI*2),i=new fn({color:this.color[Math.floor(Math.random()*this.color.length)],emissive:468276,side:gn,flatShading:!0});this.direction=this.getFactor(Math.floor(Math.random()*4)),this.start=Math.random()*20-10,console.log(this.direction),this.mesh=new pt(n,i),this.mesh.rotation.x=(90+this.start*this.direction.x)*Math.PI/180,this.mesh.rotation.y=Math.random()*180*Math.PI/180,this.mesh.rotation.z=this.start*this.direction.z*Math.PI/180,this.scene.add(this.mesh)}end(){this.scene.remove(this.mesh)}getFactor(e){switch(e){case 0:return{x:-1,z:0};case 1:return{x:1,z:0};case 2:return{x:0,z:-1};case 3:return{x:0,z:1}}}setColor(e){this.color=e}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{let t=Vt(this.time/this.max),n=this.start+t*180;this.mesh.rotation.x=(90+n*this.direction.x)*Math.PI/180,this.mesh.rotation.z=n*this.direction.z*Math.PI/180,this.time+=1}}}class WS{constructor(e,t,n){je(this,"time",0);je(this,"start",-3.2);je(this,"group",new kn);this.max=t,this.scene=e,this.color=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/sF7.wav",e.volume=.5,e.play(),this.group=new kn;let t=this.start,n=Math.random()*.7+1.6;for(let i=0;i<Math.random()*10+10;i++)t-=.3,this.group.add(this.newRing(t,n,i%3==0));console.log(this.group),this.scene.add(this.group)}newRing(e,t,n){let i=Math.floor(Math.random()*6)+5,r,o;n?(r=0,o=Math.PI*2):(r=Math.random()*Math.PI,o=r+Math.random()*Math.PI);let a=new Uo(t,t,Math.random()*.3+.1,i,1,!0,r,o),l=new fn({color:this.color[Math.floor(Math.random()*this.color.length)],emissive:468276,side:gn,flatShading:!0}),c=new pt(a,l);return c.position.y=e,c.rotation.y=Math.random()*180*Math.PI/180,c}end(){this.scene.remove(this.group)}setColor(e){this.color=e}animate(e){this.time==this.max?(this.end(),this.time=0,e()):(this.group.position.setY(Vt(this.time/this.max)*(6.4+this.group.children.length*.3)),this.time+=1)}}const Rh=new pi,ro=new R;class xd extends vM{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new rt(e,3)),this.setAttribute("uv",new rt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new hl(t,6,1);return this.setAttribute("instanceStart",new Vn(n,3,0)),this.setAttribute("instanceEnd",new Vn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new hl(t,6,1);return this.setAttribute("instanceColorStart",new Vn(n,3,0)),this.setAttribute("instanceColorEnd",new Vn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new sd(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Rh.setFromBufferAttribute(t),this.boundingBox.union(Rh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ro.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ro)),ro.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ro));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class jS extends xd{constructor(e){super(),this.isWireframeGeometry2=!0,this.type="WireframeGeometry2",this.fromWireframeGeometry(new sd(e))}}xe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Wt.line={uniforms:pn.merge([xe.common,xe.fog,xe.line]),vertexShader:`
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
		`};class _d extends bt{constructor(e){super({type:"LineMaterial",uniforms:pn.clone(Wt.line.uniforms),vertexShader:Wt.line.vertexShader,fragmentShader:Wt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const Dh=new R,Ih=new R;class XS extends pt{constructor(e=new xd,t=new _d({color:Math.random()*16777215})){super(e,t),this.isWireframe=!0,this.type="Wireframe"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Dh.fromBufferAttribute(t,o),Ih.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Dh.distanceTo(Ih);const r=new hl(i,2,1);return e.setAttribute("instanceDistanceStart",new Vn(r,1,0)),e.setAttribute("instanceDistanceEnd",new Vn(r,1,1)),this}}class qS{constructor(e,t,n){je(this,"time",0);je(this,"mesh");je(this,"start");je(this,"direction");this.max=t,this.scene=e,this.color=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aT3.wav",e.volume=.5,e.play();let t=Math.random()*.7+1.3,n=this.choosePolyhedron(t),i=new jS(n),r=new _d({color:this.color[Math.floor(Math.random()*this.color.length)],linewidth:Math.random()*.003+.001,dashed:!1});this.mesh=new XS(i,r),console.log(this.mesh),this.mesh.computeLineDistances(),this.mesh.scale.set(1,1,1),this.direction=this.getFactor(Math.floor(Math.random()*4)),this.start=Math.random()*20-10,this.mesh.rotation.x=(90+this.start*this.direction.x)*Math.PI/180,this.mesh.rotation.y=Math.random()*180*Math.PI/180,this.mesh.rotation.z=this.start*this.direction.z*Math.PI/180,this.scene.add(this.mesh)}choosePolyhedron(e){switch(Math.floor(Math.random()*9)){case 0:return new So(e,0);case 1:return new So(e,1);case 2:return new mr(e,0);case 3:return new mr(e,1);case 4:return new ec(e,0);case 5:return new us(e,0);case 6:return new us(e,1);case 7:return new us(e,2);case 8:return new us(e,3)}}getFactor(e){switch(e){case 0:return{x:-1,z:0};case 1:return{x:1,z:0};case 2:return{x:0,z:-1};case 3:return{x:0,z:1}}}end(){this.scene.remove(this.mesh)}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{let t=Vt(this.time/this.max),n=this.start+t*90;this.mesh.rotation.x=(90+n*this.direction.x)*Math.PI/180,this.mesh.rotation.z=n*this.direction.z*Math.PI/180,this.time+=1}}}class $S{constructor(e,t,n){je(this,"time",0);je(this,"cubes",[]);this.max=t,this.scene=e,this.color=n}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/aRimshot.wav",e.volume=.5,e.play();for(let t=0;t<Math.random()*2+4;t++){let n=this.newSquare(Math.random()*.8);this.cubes.push(n),this.scene.add(n)}}newSquare(e){let t=new Ds(e,e,e),n=[new fn({color:16777215}),new fn({color:16746806}),new fn({color:16777215}),new fn({color:15778361}),new fn({color:15778361}),new fn({color:16777215})],i=new pt(t,n);return i.position.set((Math.random()+.7)*(Math.random()<.5?-1:1),(Math.random()+.7)*(Math.random()<.5?-1:1),Math.random()*2-1),i.rotation.x=Math.random()*360*Math.PI/180,i.rotation.y=Math.random()*360*Math.PI/180,i.rotation.z=0,i}end(){for(let e=0;e<this.cubes.length;e++)this.scene.remove(this.cubes[e]);this.cubes=[]}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{let t=Vt(this.time/this.max)*45;for(let n=0;n<this.cubes.length;n++)this.cubes[n].rotation.z=t*Math.PI/180;this.time+=1}}}class YS extends tc{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class KS extends Us{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ic(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new JS(e)}}class JS{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=ZS(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function ZS(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=QS(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function QS(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new CM;let a,l,c,u,h,f,p,g;if(r.o){const m=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,v=m.length;d<v;)switch(m[d++]){case"m":a=m[d++]*e+t,l=m[d++]*e+n,o.moveTo(a,l);break;case"l":a=m[d++]*e+t,l=m[d++]*e+n,o.lineTo(a,l);break;case"q":c=m[d++]*e+t,u=m[d++]*e+n,h=m[d++]*e+t,f=m[d++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=m[d++]*e+t,u=m[d++]*e+n,h=m[d++]*e+t,f=m[d++]*e+n,p=m[d++]*e+t,g=m[d++]*e+n,o.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:r.ha*e,path:o}}class ew{constructor(e,t,n){je(this,"font");je(this,"time",0);je(this,"chars",[]);this.max=t,this.scene=e,this.color=n,this.characters="\u30A2\u30A1\u30AB\u30B5\u30BF\u30CA\u30CF\u30DE\u30E4\u30E3\u30E9\u30EF\u30AC\u30B6\u30C0\u30D0\u30D1\u30A4\u30A3\u30AD\u30B7\u30C1\u30CB\u30D2\u30DF\u30EA\u30F0\u30AE\u30B8\u30C2\u30D3\u30D4\u30A6\u30A5\u30AF\u30B9\u30C4\u30CC\u30D5\u30E0\u30E6\u30E5\u30EB\u30B0\u30BA\u30D6\u30C5\u30D7\u30A8\u30A7\u30B1\u30BB\u30C6\u30CD\u30D8\u30E1\u30EC\u30F1\u30B2\u30BC\u30C7\u30D9\u30DA\u30AA\u30A9\u30B3\u30BD\u30C8\u30CE\u30DB\u30E2\u30E8\u30E7\u30ED\u30F2\u30B4\u30BE\u30C9\u30DC\u30DD\u30F4\u30C3\u30F3",this.characters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";const i=new KS;let r=this;i.load("./sk.json",function(o){r.font=o})}add(){const e=document.createElement("audio");e.hidden=!0,e.src="./sound/hPerc.wav",e.volume=.5,e.play();let t=2,n=Math.random()*3+2,i=4/(n+1);for(let r=0;r<n;r++){t-=i;let o=Math.random()*.1+.3,a=Math.random()*2-1,l=t;l+=Math.random()-.5;let u=(Math.random()*3+1)*(o+.01),h=Math.random()*(4-u)-2;for(let f=0;f<Math.random()*3+1;f++){let p=this.characters.charAt(Math.floor(Math.random()*this.characters.length)),g=this.newCharacter(p,o,h,l,a);this.chars.push(g),this.scene.add(g),h+=o+.01}}}newCharacter(e,t,n,i,r){let o=new YS(e,{font:this.font,size:t,height:t/5});o.computeBoundingBox();let a=[new fn({color:16777215}),new fn({color:1401481}),new fn({color:15778361})],l=new pt(o,a);return l.position.set(n,i,r),l.rotation.z=0,l}end(){for(let e=0;e<this.chars.length;e++)this.scene.remove(this.chars[e]);this.chars=[]}animate(e){if(this.time==this.max)this.end(),this.time=0,e();else{let t=Vt(this.time/this.max)*45;for(let n=0;n<this.chars.length;n++)this.chars[n].position.z=t*Math.PI/180;this.time+=1}}}function rs(s,e){let t;new fd().load(s,function(i){t=i.scene.children[0],t.position.y=-1,e(t)})}class Nh{constructor(e,t,n,i,r){je(this,"time",0);je(this,"max",200);this.scene=e,this.model=t,this.models=n,this.bg=i,this.bgc=r}change(){const e=document.createElement("audio");return e.hidden=!0,e.src="./sound/fFlute.wav",e.volume=.5,e.play(),this.old=this.model,this.new=this.select(),this.new.position.y=-4,this.scene.add(this.new),this.new}select(){let e=this.models[Math.floor(Math.random()*this.models.length)];return e==this.model?this.select():e}animate(e){if(this.time==this.max){this.scene.remove(this.old),this.time=0;let t=this.models.indexOf(this.new);this.bg.style.backgroundColor=this.bgc[t],e()}else{let t=Vt(this.time/this.max)*4;this.old.position.y=t,this.new.position.y=t-5,this.time+=1}}}const tw=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t},nw=ym('<div id="background" style="background-color:#1a1a1a;" data-v-a39bb48b></div><div id="three-canvas" data-v-a39bb48b></div><div id="overlay" data-v-a39bb48b><a href="https://github.com/Pannic17/C1-Final" data-v-a39bb48b>Source Code</a><br data-v-a39bb48b> Try Click/Tap Randomly or Press Random Keys!<br data-v-a39bb48b> Double Click to PLAY/PAUSE Music </div><audio controls="controls" id="beats" hidden src="./flip.mp3" loop data-v-a39bb48b></audio>',4),iw={__name:"App",setup(s){let e,t,n,i,r,o,a=[],l,c=!1,u=[],h=[];function f(){let g=document.getElementById("background");console.log(g),Mh();let m=Mh();e=m.scene,t=m.camera,n=m.renderer,i=new ac,r=new mS(n),r.addPass(new gS(e,t));const d=new xS(r,50),v=new _S(r,50,.025,30),S=new MS(r,50,n,e,t),_=new wS(r,50,15),y=new ES(r,100),M=new CS(r,100,innerWidth,innerHeight),L=new PS(r,100,innerWidth,innerHeight,30),D=new DS(r,100,innerWidth,innerHeight),x=new NS(r,100,innerWidth,innerHeight,Math.random()*6+6),C=new OS(r,50,20),P=new zS(r,100,e,t,50),H=new kS(r,100),ae=new HS(r,100);let z=[1401481,13229346,15554358,15908421,12643287];const N=new GS(e,100,z),$=new WS(e,150,z),Z=new qS(e,100,z),te=new $S(e,100,z),j=new ew(e,100,z);function G(ce){ce.end(),ce.add(),u.push(ce)}let ue=document.getElementById("beats");document.ondblclick=function(ce){c?(ue.pause(),c=!1):(ue.play(),c=!0)},document.onclick=function(ce){let B=ce.clientX,Ee=ce.clientY,de=innerWidth/5,we=innerHeight/4;if(console.log("x: "+B+"  y: "+Ee+`
`+de+","+we),0<Ee&&Ee<we)0<B&&B<de?G(d):de<B&&B<de*2?G(v):de*2<B&&B<de*3?G(_):de*3<B&&B<de*4?G(L):G(N);else if(we<Ee&&Ee<we*2)0<B&&B<de?G(D):de<B&&B<de*2?G($):de*2<B&&B<de*3?G(P):de*3<B&&B<de*4?G(te):G(H);else if(we*2<Ee&&Ee<we*3)0<B&&B<de?G(y):de<B&&B<de*2?G(M):de*2<B&&B<de*3?G(j):de*3<B&&B<de*4?G(ae):G(C);else if(0<B&&B<de)G(Z);else if(de<B&&B<de*2)G(x);else if(de*2<B&&B<de*3)G(S);else if(de*3<B&&B<de*4)G(C);else{let _e=new Nh(e,o,a,g,h);o=_e.change(),console.log(o),u.push(_e)}},document.onkeypress=function(ce){switch(console.log(ce.keyCode),ce.keyCode){case 81:G(d);break;case 113:G(d);break;case 87:G(v);break;case 119:G(v);break;case 69:G(_);break;case 101:G(_);break;case 82:G(L);break;case 114:G(L);break;case 84:G(S);break;case 116:G(S);break;case 65:G(D);break;case 97:G(D);break;case 83:G(x);break;case 115:G(x);break;case 68:G(P);break;case 100:G(P);break;case 70:G(H);break;case 102:G(H);break;case 90:G(ae);break;case 122:G(ae);break;case 88:G(y);break;case 120:G(y);break;case 67:G(M);break;case 99:G(M);break;case 86:G(C);break;case 118:G(C);break;case 80:G(N);break;case 112:G(N);break;case 79:G($);break;case 111:G($);break;case 76:G(Z);break;case 108:G(Z);break;case 73:G(te);break;case 105:G(te);break;case 75:G(j);break;case 107:G(j);break;case 32:let B=new Nh(e,o,a,g,h);o=B.change(),console.log(o),u.push(B);break}};let X={Log:K};i.add(X,"Log");function K(){console.log(t)}new hd,new at(e,i);let fe=new pt(new mr(.5,8),new vn({color:"cyan"}));fe.position.set(1.2,0,1),console.log(fe.geometry.attributes),new fd().load("./eevee.gltf",function(ce){l=ce.scene.children[2],l.position.y=-1,o=l,a.push(l),h.push("#1a1a1a"),console.log(o),e.add(o),p()},function(ce){console.log(ce.loaded/ce.total*100+"% loaded")},function(ce){console.log("An error happened")}),rs("./vaporeon.gltf",function(ce){a.push(ce),h.push("#2b3c74")}),rs("./charmander.gltf",function(ce){a.push(ce),h.push("#2c110b")}),rs("./pickachu.gltf",function(ce){a.push(ce),h.push("#a78e44")}),rs("./squirtle.gltf",function(ce){a.push(ce),h.push("#54a296")}),rs("./meowth.gltf",function(ce){a.push(ce),h.push("#818fa9")}),rs("./vulpix.gltf",function(ce){a.push(ce),h.push("#a98175")})}function p(){const g=Date.now();o.position.y=Math.cos(g/120)*.1-1,o.rotation.z+=.01;for(let m=0;m<u.length;m++)u[m].animate(function(){u=u.filter(function(d){return d!=u[m]})});r.render(),requestAnimationFrame(p)}return Il(()=>{f(),window.onresize=function(){location.reload()}}),(g,m)=>nw}},sw=tw(iw,[["__scopeId","data-v-a39bb48b"]]);tg(sw).mount("#app");
