function $C(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function BC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fy={exports:{}},Pu={},py={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),VC=Symbol.for("react.portal"),zC=Symbol.for("react.fragment"),WC=Symbol.for("react.strict_mode"),HC=Symbol.for("react.profiler"),GC=Symbol.for("react.provider"),KC=Symbol.for("react.context"),YC=Symbol.for("react.forward_ref"),qC=Symbol.for("react.suspense"),QC=Symbol.for("react.memo"),JC=Symbol.for("react.lazy"),Xg=Symbol.iterator;function XC(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},my=Object.assign,vy={};function gs(t,e,n){this.props=t,this.context=e,this.refs=vy,this.updater=n||gy}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yy(){}yy.prototype=gs.prototype;function Cf(t,e,n){this.props=t,this.context=e,this.refs=vy,this.updater=n||gy}var Sf=Cf.prototype=new yy;Sf.constructor=Cf;my(Sf,gs.prototype);Sf.isPureReactComponent=!0;var Zg=Array.isArray,_y=Object.prototype.hasOwnProperty,If={current:null},wy={key:!0,ref:!0,__self:!0,__source:!0};function Ey(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_y.call(e,r)&&!wy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:sl,type:t,key:s,ref:o,props:i,_owner:If.current}}function ZC(t,e){return{$$typeof:sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===sl}function eS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var em=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eS(""+t.key):e.toString(36)}function sa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sl:case VC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oc(o,0):r,Zg(i)?(n="",t!=null&&(n=t.replace(em,"$&/")+"/"),sa(i,e,n,"",function(u){return u})):i!=null&&(Tf(i)&&(i=ZC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(em,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Zg(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Oc(s,l);o+=sa(s,e,n,a,i)}else if(a=XC(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Oc(s,l++),o+=sa(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(t,e,n){if(t==null)return t;var r=[],i=0;return sa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function tS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},oa={transition:null},nS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:oa,ReactCurrentOwner:If};X.Children={map:Ml,forEach:function(t,e,n){Ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!Tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=gs;X.Fragment=zC;X.Profiler=HC;X.PureComponent=Cf;X.StrictMode=WC;X.Suspense=qC;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nS;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=my({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=If.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)_y.call(e,a)&&!wy.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:sl,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:KC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:GC,_context:t},t.Consumer=t};X.createElement=Ey;X.createFactory=function(t){var e=Ey.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:YC,render:t}};X.isValidElement=Tf;X.lazy=function(t){return{$$typeof:JC,_payload:{_status:-1,_result:t},_init:tS}};X.memo=function(t,e){return{$$typeof:QC,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=oa.transition;oa.transition={};try{t()}finally{oa.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return ht.current.useCallback(t,e)};X.useContext=function(t){return ht.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};X.useEffect=function(t,e){return ht.current.useEffect(t,e)};X.useId=function(){return ht.current.useId()};X.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return ht.current.useMemo(t,e)};X.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};X.useRef=function(t){return ht.current.useRef(t)};X.useState=function(t){return ht.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return ht.current.useTransition()};X.version="18.2.0";py.exports=X;var T=py.exports;const Zt=BC(T),rS=$C({__proto__:null,default:Zt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iS=T,sS=Symbol.for("react.element"),oS=Symbol.for("react.fragment"),lS=Object.prototype.hasOwnProperty,aS=iS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uS={key:!0,ref:!0,__self:!0,__source:!0};function Cy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lS.call(e,r)&&!uS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:sS,type:t,key:s,ref:o,props:i,_owner:aS.current}}Pu.Fragment=oS;Pu.jsx=Cy;Pu.jsxs=Cy;fy.exports=Pu;var g=fy.exports,Uh={},Sy={exports:{}},Ot={},Iy={exports:{}},Ty={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,V){var G=P.length;P.push(V);e:for(;0<G;){var ge=G-1>>>1,ke=P[ge];if(0<i(ke,V))P[ge]=V,P[G]=ke,G=ge;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var V=P[0],G=P.pop();if(G!==V){P[0]=G;e:for(var ge=0,ke=P.length,_i=ke>>>1;ge<_i;){var Yt=2*(ge+1)-1,Lr=P[Yt],cn=Yt+1,wi=P[cn];if(0>i(Lr,G))cn<ke&&0>i(wi,Lr)?(P[ge]=wi,P[cn]=G,ge=cn):(P[ge]=Lr,P[Yt]=G,ge=Yt);else if(cn<ke&&0>i(wi,G))P[ge]=wi,P[cn]=G,ge=cn;else break e}}return V}function i(P,V){var G=P.sortIndex-V.sortIndex;return G!==0?G:P.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,c=null,d=3,p=!1,v=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=P)r(u),V.sortIndex=V.expirationTime,e(a,V);else break;V=n(u)}}function E(P){if(w=!1,y(P),!v)if(n(a)!==null)v=!0,Qe(N);else{var V=n(u);V!==null&&Tn(E,V.startTime-P)}}function N(P,V){v=!1,w&&(w=!1,m(b),b=-1),p=!0;var G=d;try{for(y(V),c=n(a);c!==null&&(!(c.expirationTime>V)||P&&!B());){var ge=c.callback;if(typeof ge=="function"){c.callback=null,d=c.priorityLevel;var ke=ge(c.expirationTime<=V);V=t.unstable_now(),typeof ke=="function"?c.callback=ke:c===n(a)&&r(a),y(V)}else r(a);c=n(a)}if(c!==null)var _i=!0;else{var Yt=n(u);Yt!==null&&Tn(E,Yt.startTime-V),_i=!1}return _i}finally{c=null,d=G,p=!1}}var L=!1,D=null,b=-1,q=5,H=-1;function B(){return!(t.unstable_now()-H<q)}function J(){if(D!==null){var P=t.unstable_now();H=P;var V=!0;try{V=D(!0,P)}finally{V?ue():(L=!1,D=null)}}else L=!1}var ue;if(typeof f=="function")ue=function(){f(J)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Ct=Ne.port2;Ne.port1.onmessage=J,ue=function(){Ct.postMessage(null)}}else ue=function(){I(J,0)};function Qe(P){D=P,L||(L=!0,ue())}function Tn(P,V){b=I(function(){P(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Qe(N))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var G=d;d=V;try{return P()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=d;d=P;try{return V()}finally{d=G}},t.unstable_scheduleCallback=function(P,V,G){var ge=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ge+G:ge):G=ge,P){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=G+ke,P={id:h++,callback:V,priorityLevel:P,startTime:G,expirationTime:ke,sortIndex:-1},G>ge?(P.sortIndex=G,e(u,P),n(a)===null&&P===n(u)&&(w?(m(b),b=-1):w=!0,Tn(E,G-ge))):(P.sortIndex=ke,e(a,P),v||p||(v=!0,Qe(N))),P},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(P){var V=d;return function(){var G=d;d=V;try{return P.apply(this,arguments)}finally{d=G}}}})(Ty);Iy.exports=Ty;var cS=Iy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=T,Pt=cS;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ay=new Set,vo={};function di(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(vo[t]=e,t=0;t<e.length;t++)Ay.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,hS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tm={},nm={};function dS(t){return $h.call(nm,t)?!0:$h.call(tm,t)?!1:hS.test(t)?nm[t]=!0:(tm[t]=!0,!1)}function fS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pS(t,e,n,r){if(e===null||typeof e>"u"||fS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var kf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kf,Af);Ge[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kf,Af);Ge[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kf,Af);Ge[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rf(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pS(e,n,i,r)&&(n=null),r||i===null?dS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bl=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),Ry=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),Vh=Symbol.for("react.suspense"),zh=Symbol.for("react.suspense_list"),Pf=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),xy=Symbol.for("react.offscreen"),rm=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Dc;function Hs(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Lc=!1;function Mc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function gS(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Wh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ki:return"Fragment";case Ti:return"Portal";case Bh:return"Profiler";case Nf:return"StrictMode";case Vh:return"Suspense";case zh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ny:return(t.displayName||"Context")+".Consumer";case Ry:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pf:return e=t.displayName||null,e!==null?e:Wh(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return Wh(t(e))}catch{}}return null}function mS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wh(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Py(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vS(t){var e=Py(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=vS(t))}function Oy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Py(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hh(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function im(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dy(t,e){e=e.checked,e!=null&&Rf(t,"checked",e,!1)}function Gh(t,e){Dy(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kh(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kh(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Gs(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function Ly(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function My(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?My(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jl,by=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yS=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){yS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function Fy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _S=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qh(t,e){if(e){if(_S[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Jh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xh=null;function Of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zh=null,zi=null,Wi=null;function am(t){if(t=al(t)){if(typeof Zh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=bu(e),Zh(t.stateNode,t.type,e))}}function Uy(t){zi?Wi?Wi.push(t):Wi=[t]:zi=t}function $y(){if(zi){var t=zi,e=Wi;if(Wi=zi=null,am(t),e)for(t=0;t<e.length;t++)am(e[t])}}function By(t,e){return t(e)}function Vy(){}var bc=!1;function zy(t,e,n){if(bc)return t(e,n);bc=!0;try{return By(t,e,n)}finally{bc=!1,(zi!==null||Wi!==null)&&(Vy(),$y())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var r=bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var ed=!1;if(jn)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){ed=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{ed=!1}function wS(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var to=!1,Sa=null,Ia=!1,td=null,ES={onError:function(t){to=!0,Sa=t}};function CS(t,e,n,r,i,s,o,l,a){to=!1,Sa=null,wS.apply(ES,arguments)}function SS(t,e,n,r,i,s,o,l,a){if(CS.apply(this,arguments),to){if(to){var u=Sa;to=!1,Sa=null}else throw Error(k(198));Ia||(Ia=!0,td=u)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function um(t){if(fi(t)!==t)throw Error(k(188))}function IS(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return um(i),t;if(s===r)return um(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Hy(t){return t=IS(t),t!==null?Gy(t):null}function Gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gy(t);if(e!==null)return e;t=t.sibling}return null}var Ky=Pt.unstable_scheduleCallback,cm=Pt.unstable_cancelCallback,TS=Pt.unstable_shouldYield,kS=Pt.unstable_requestPaint,Se=Pt.unstable_now,AS=Pt.unstable_getCurrentPriorityLevel,Df=Pt.unstable_ImmediatePriority,Yy=Pt.unstable_UserBlockingPriority,Ta=Pt.unstable_NormalPriority,RS=Pt.unstable_LowPriority,qy=Pt.unstable_IdlePriority,Ou=null,yn=null;function NS(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Ou,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:OS,xS=Math.log,PS=Math.LN2;function OS(t){return t>>>=0,t===0?32:31-(xS(t)/PS|0)|0}var Ul=64,$l=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ks(l):(s&=o,s!==0&&(r=Ks(s)))}else o=n&~i,o!==0?r=Ks(o):s!==0&&(r=Ks(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function DS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=DS(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qy(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function MS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Jy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xy,Mf,Zy,e_,t_,rd=!1,Bl=[],or=null,lr=null,ar=null,wo=new Map,Eo=new Map,Jn=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hm(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=al(e),e!==null&&Mf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function FS(t,e,n,r,i){switch(e){case"focusin":return or=Ps(or,t,e,n,r,i),!0;case"dragenter":return lr=Ps(lr,t,e,n,r,i),!0;case"mouseover":return ar=Ps(ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return wo.set(s,Ps(wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Eo.set(s,Ps(Eo.get(s)||null,t,e,n,r,i)),!0}return!1}function n_(t){var e=$r(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=Wy(n),e!==null){t.blockedOn=e,t_(t.priority,function(){Zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function la(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xh=r,n.target.dispatchEvent(r),Xh=null}else return e=al(n),e!==null&&Mf(e),t.blockedOn=n,!1;e.shift()}return!0}function dm(t,e,n){la(t)&&n.delete(e)}function jS(){rd=!1,or!==null&&la(or)&&(or=null),lr!==null&&la(lr)&&(lr=null),ar!==null&&la(ar)&&(ar=null),wo.forEach(dm),Eo.forEach(dm)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,jS)))}function Co(t){function e(i){return Os(i,t)}if(0<Bl.length){Os(Bl[0],t);for(var n=1;n<Bl.length;n++){var r=Bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Os(or,t),lr!==null&&Os(lr,t),ar!==null&&Os(ar,t),wo.forEach(e),Eo.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)n_(n),n.blockedOn===null&&Jn.shift()}var Hi=Hn.ReactCurrentBatchConfig,Aa=!0;function US(t,e,n,r){var i=re,s=Hi.transition;Hi.transition=null;try{re=1,bf(t,e,n,r)}finally{re=i,Hi.transition=s}}function $S(t,e,n,r){var i=re,s=Hi.transition;Hi.transition=null;try{re=4,bf(t,e,n,r)}finally{re=i,Hi.transition=s}}function bf(t,e,n,r){if(Aa){var i=id(t,e,n,r);if(i===null)Kc(t,e,r,Ra,n),hm(t,r);else if(FS(i,t,e,n,r))r.stopPropagation();else if(hm(t,r),e&4&&-1<bS.indexOf(t)){for(;i!==null;){var s=al(i);if(s!==null&&Xy(s),s=id(t,e,n,r),s===null&&Kc(t,e,r,Ra,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var Ra=null;function id(t,e,n,r){if(Ra=null,t=Of(r),t=$r(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ra=t,null}function r_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AS()){case Df:return 1;case Yy:return 4;case Ta:case RS:return 16;case qy:return 536870912;default:return 16}default:return 16}}var nr=null,Ff=null,aa=null;function i_(){if(aa)return aa;var t,e=Ff,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return aa=i.slice(t,1<r?1-r:void 0)}function ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function fm(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vl:fm,this.isPropagationStopped=fm,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=Dt(ms),ll=ye({},ms,{view:0,detail:0}),BS=Dt(ll),jc,Uc,Ds,Du=ye({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(jc=t.screenX-Ds.screenX,Uc=t.screenY-Ds.screenY):Uc=jc=0,Ds=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),pm=Dt(Du),VS=ye({},Du,{dataTransfer:0}),zS=Dt(VS),WS=ye({},ll,{relatedTarget:0}),$c=Dt(WS),HS=ye({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),GS=Dt(HS),KS=ye({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YS=Dt(KS),qS=ye({},ms,{data:0}),gm=Dt(qS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XS[t])?!!e[t]:!1}function Uf(){return ZS}var eI=ye({},ll,{key:function(t){if(t.key){var e=QS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tI=Dt(eI),nI=ye({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=Dt(nI),rI=ye({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),iI=Dt(rI),sI=ye({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),oI=Dt(sI),lI=ye({},Du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aI=Dt(lI),uI=[9,13,27,32],$f=jn&&"CompositionEvent"in window,no=null;jn&&"documentMode"in document&&(no=document.documentMode);var cI=jn&&"TextEvent"in window&&!no,s_=jn&&(!$f||no&&8<no&&11>=no),vm=" ",ym=!1;function o_(t,e){switch(t){case"keyup":return uI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function hI(t,e){switch(t){case"compositionend":return l_(e);case"keypress":return e.which!==32?null:(ym=!0,vm);case"textInput":return t=e.data,t===vm&&ym?null:t;default:return null}}function dI(t,e){if(Ai)return t==="compositionend"||!$f&&o_(t,e)?(t=i_(),aa=Ff=nr=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s_&&e.locale!=="ko"?null:e.data;default:return null}}var fI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fI[t.type]:e==="textarea"}function a_(t,e,n,r){Uy(r),e=Na(e,"onChange"),0<e.length&&(n=new jf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ro=null,So=null;function pI(t){__(t,0)}function Lu(t){var e=xi(t);if(Oy(e))return t}function gI(t,e){if(t==="change")return e}var u_=!1;if(jn){var Bc;if(jn){var Vc="oninput"in document;if(!Vc){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),Vc=typeof wm.oninput=="function"}Bc=Vc}else Bc=!1;u_=Bc&&(!document.documentMode||9<document.documentMode)}function Em(){ro&&(ro.detachEvent("onpropertychange",c_),So=ro=null)}function c_(t){if(t.propertyName==="value"&&Lu(So)){var e=[];a_(e,So,t,Of(t)),zy(pI,e)}}function mI(t,e,n){t==="focusin"?(Em(),ro=e,So=n,ro.attachEvent("onpropertychange",c_)):t==="focusout"&&Em()}function vI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lu(So)}function yI(t,e){if(t==="click")return Lu(e)}function _I(t,e){if(t==="input"||t==="change")return Lu(e)}function wI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:wI;function Io(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$h.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,e){var n=Cm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cm(n)}}function h_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function d_(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EI(t){var e=d_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h_(n.ownerDocument.documentElement,n)){if(r!==null&&Bf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sm(n,s);var o=Sm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CI=jn&&"documentMode"in document&&11>=document.documentMode,Ri=null,sd=null,io=null,od=!1;function Im(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||Ri==null||Ri!==Ca(r)||(r=Ri,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&Io(io,r)||(io=r,r=Na(sd,"onSelect"),0<r.length&&(e=new jf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ri)))}function zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ni={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},zc={},f_={};jn&&(f_=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function Mu(t){if(zc[t])return zc[t];if(!Ni[t])return t;var e=Ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f_)return zc[t]=e[n];return t}var p_=Mu("animationend"),g_=Mu("animationiteration"),m_=Mu("animationstart"),v_=Mu("transitionend"),y_=new Map,Tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){y_.set(t,e),di(e,[t])}for(var Wc=0;Wc<Tm.length;Wc++){var Hc=Tm[Wc],SI=Hc.toLowerCase(),II=Hc[0].toUpperCase()+Hc.slice(1);Tr(SI,"on"+II)}Tr(p_,"onAnimationEnd");Tr(g_,"onAnimationIteration");Tr(m_,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(v_,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function km(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SS(r,e,void 0,t),t.currentTarget=null}function __(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;km(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;km(i,l,u),s=a}}}if(Ia)throw t=td,Ia=!1,td=null,t}function ce(t,e){var n=e[hd];n===void 0&&(n=e[hd]=new Set);var r=t+"__bubble";n.has(r)||(w_(e,t,2,!1),n.add(r))}function Gc(t,e,n){var r=0;e&&(r|=4),w_(n,t,r,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[Wl]){t[Wl]=!0,Ay.forEach(function(n){n!=="selectionchange"&&(TI.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,Gc("selectionchange",!1,e))}}function w_(t,e,n,r){switch(r_(e)){case 1:var i=US;break;case 4:i=$S;break;default:i=bf}n=i.bind(null,e,n,t),i=void 0,!ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=$r(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}zy(function(){var u=s,h=Of(n),c=[];e:{var d=y_.get(t);if(d!==void 0){var p=jf,v=t;switch(t){case"keypress":if(ua(n)===0)break e;case"keydown":case"keyup":p=tI;break;case"focusin":v="focus",p=$c;break;case"focusout":v="blur",p=$c;break;case"beforeblur":case"afterblur":p=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iI;break;case p_:case g_:case m_:p=GS;break;case v_:p=oI;break;case"scroll":p=BS;break;case"wheel":p=aI;break;case"copy":case"cut":case"paste":p=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=mm}var w=(e&4)!==0,I=!w&&t==="scroll",m=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=_o(f,m),E!=null&&w.push(ko(f,E,y)))),I)break;f=f.return}0<w.length&&(d=new p(d,v,null,n,h),c.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Xh&&(v=n.relatedTarget||n.fromElement)&&($r(v)||v[Un]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?$r(v):null,v!==null&&(I=fi(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(w=pm,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=mm,E="onPointerLeave",m="onPointerEnter",f="pointer"),I=p==null?d:xi(p),y=v==null?d:xi(v),d=new w(E,f+"leave",p,n,h),d.target=I,d.relatedTarget=y,E=null,$r(h)===u&&(w=new w(m,f+"enter",v,n,h),w.target=y,w.relatedTarget=I,E=w),I=E,p&&v)t:{for(w=p,m=v,f=0,y=w;y;y=Ei(y))f++;for(y=0,E=m;E;E=Ei(E))y++;for(;0<f-y;)w=Ei(w),f--;for(;0<y-f;)m=Ei(m),y--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Ei(w),m=Ei(m)}w=null}else w=null;p!==null&&Am(c,d,p,w,!1),v!==null&&I!==null&&Am(c,I,v,w,!0)}}e:{if(d=u?xi(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var N=gI;else if(_m(d))if(u_)N=_I;else{N=vI;var L=mI}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=yI);if(N&&(N=N(t,u))){a_(c,N,n,h);break e}L&&L(t,d,u),t==="focusout"&&(L=d._wrapperState)&&L.controlled&&d.type==="number"&&Kh(d,"number",d.value)}switch(L=u?xi(u):window,t){case"focusin":(_m(L)||L.contentEditable==="true")&&(Ri=L,sd=u,io=null);break;case"focusout":io=sd=Ri=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,Im(c,n,h);break;case"selectionchange":if(CI)break;case"keydown":case"keyup":Im(c,n,h)}var D;if($f)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ai?o_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(s_&&n.locale!=="ko"&&(Ai||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ai&&(D=i_()):(nr=h,Ff="value"in nr?nr.value:nr.textContent,Ai=!0)),L=Na(u,b),0<L.length&&(b=new gm(b,t,null,n,h),c.push({event:b,listeners:L}),D?b.data=D:(D=l_(n),D!==null&&(b.data=D)))),(D=cI?hI(t,n):dI(t,n))&&(u=Na(u,"onBeforeInput"),0<u.length&&(h=new gm("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=D))}__(c,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Na(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_o(t,n),s!=null&&r.unshift(ko(t,s,i)),s=_o(t,e),s!=null&&r.push(ko(t,s,i))),t=t.return}return r}function Ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Am(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=_o(n,s),a!=null&&o.unshift(ko(n,a,l))):i||(a=_o(n,s),a!=null&&o.push(ko(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kI=/\r\n?/g,AI=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(kI,`
`).replace(AI,"")}function Hl(t,e,n){if(e=Rm(e),Rm(t)!==e&&n)throw Error(k(425))}function xa(){}var ld=null,ad=null;function ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,RI=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,NI=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(xI)}:cd;function xI(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Co(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),fn="__reactFiber$"+vs,Ao="__reactProps$"+vs,Un="__reactContainer$"+vs,hd="__reactEvents$"+vs,PI="__reactListeners$"+vs,OI="__reactHandles$"+vs;function $r(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xm(t);t!==null;){if(n=t[fn])return n;t=xm(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[fn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function bu(t){return t[Ao]||null}var dd=[],Pi=-1;function kr(t){return{current:t}}function de(t){0>Pi||(t.current=dd[Pi],dd[Pi]=null,Pi--)}function ae(t,e){Pi++,dd[Pi]=t.current,t.current=e}var Er={},nt=kr(Er),vt=kr(!1),Zr=Er;function ns(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function Pa(){de(vt),de(nt)}function Pm(t,e,n){if(nt.current!==Er)throw Error(k(168));ae(nt,e),ae(vt,n)}function E_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,mS(t)||"Unknown",i));return ye({},n,r)}function Oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Zr=nt.current,ae(nt,t),ae(vt,vt.current),!0}function Om(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=E_(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,de(vt),de(nt),ae(nt,t)):de(vt),ae(vt,n)}var Rn=null,Fu=!1,qc=!1;function C_(t){Rn===null?Rn=[t]:Rn.push(t)}function DI(t){Fu=!0,C_(t)}function Ar(){if(!qc&&Rn!==null){qc=!0;var t=0,e=re;try{var n=Rn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Fu=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),Ky(Df,Ar),i}finally{re=e,qc=!1}}return null}var Oi=[],Di=0,Da=null,La=0,Mt=[],bt=0,ei=null,xn=1,Pn="";function Mr(t,e){Oi[Di++]=La,Oi[Di++]=Da,Da=t,La=e}function S_(t,e,n){Mt[bt++]=xn,Mt[bt++]=Pn,Mt[bt++]=ei,ei=t;var r=xn;t=Pn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-rn(e)+i|n<<i|r,Pn=s+t}else xn=1<<s|n<<i|r,Pn=t}function Vf(t){t.return!==null&&(Mr(t,1),S_(t,1,0))}function zf(t){for(;t===Da;)Da=Oi[--Di],Oi[Di]=null,La=Oi[--Di],Oi[Di]=null;for(;t===ei;)ei=Mt[--bt],Mt[bt]=null,Pn=Mt[--bt],Mt[bt]=null,xn=Mt[--bt],Mt[bt]=null}var Nt=null,At=null,pe=!1,Xt=null;function I_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,At=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:xn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,At=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pd(t){if(pe){var e=At;if(e){var n=e;if(!Dm(t,e)){if(fd(t))throw Error(k(418));e=ur(n.nextSibling);var r=Nt;e&&Dm(t,e)?I_(r,n):(t.flags=t.flags&-4097|2,pe=!1,Nt=t)}}else{if(fd(t))throw Error(k(418));t.flags=t.flags&-4097|2,pe=!1,Nt=t}}}function Lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Gl(t){if(t!==Nt)return!1;if(!pe)return Lm(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ud(t.type,t.memoizedProps)),e&&(e=At)){if(fd(t))throw T_(),Error(k(418));for(;e;)I_(t,e),e=ur(e.nextSibling)}if(Lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Nt?ur(t.stateNode.nextSibling):null;return!0}function T_(){for(var t=At;t;)t=ur(t.nextSibling)}function rs(){At=Nt=null,pe=!1}function Wf(t){Xt===null?Xt=[t]:Xt.push(t)}var LI=Hn.ReactCurrentBatchConfig;function Qt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ma=kr(null),ba=null,Li=null,Hf=null;function Gf(){Hf=Li=ba=null}function Kf(t){var e=Ma.current;de(Ma),t._currentValue=e}function gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){ba=t,Hf=Li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Hf!==t)if(t={context:t,memoizedValue:e,next:null},Li===null){if(ba===null)throw Error(k(308));Li=t,ba.dependencies={lanes:0,firstContext:t}}else Li=Li.next=t;return e}var Br=null;function Yf(t){Br===null?Br=[t]:Br.push(t)}function k_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yf(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,Yf(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lf(t,n)}}function Mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fa(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,h=u=a=null,l=s;do{var d=l.lane,p=l.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(d=e,p=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(p,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(p,c,d):v,d==null)break e;c=ye({},c,d);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else p={eventTime:p,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=p,a=c):h=h.next=p,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=c}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var R_=new ky.Component().refs;function md(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ju={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=dr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(sn(e,t,i,r),ca(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=dr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(sn(e,t,i,r),ca(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=dr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(sn(e,t,r,n),ca(e,t,r))}};function Fm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,r)||!Io(i,s):!0}function N_(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=yt(e)?Zr:nt.current,r=e.contextTypes,s=(r=r!=null)?ns(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ju.enqueueReplaceState(e,e.state,null)}function vd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=R_,qf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=yt(e)?Zr:nt.current,i.context=ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ju.enqueueReplaceState(i,i.state,null),Fa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===R_&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Kl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Um(t){var e=t._init;return e(t._payload)}function x_(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=fr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,y,E){return f===null||f.tag!==6?(f=nh(y,m.mode,E),f.return=m,f):(f=i(f,y),f.return=m,f)}function a(m,f,y,E){var N=y.type;return N===ki?h(m,f,y.props.children,E,y.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qn&&Um(N)===f.type)?(E=i(f,y.props),E.ref=Ls(m,f,y),E.return=m,E):(E=ma(y.type,y.key,y.props,null,m.mode,E),E.ref=Ls(m,f,y),E.return=m,E)}function u(m,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=rh(y,m.mode,E),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function h(m,f,y,E,N){return f===null||f.tag!==7?(f=qr(y,m.mode,E,N),f.return=m,f):(f=i(f,y),f.return=m,f)}function c(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=nh(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bl:return y=ma(f.type,f.key,f.props,null,m.mode,y),y.ref=Ls(m,null,f),y.return=m,y;case Ti:return f=rh(f,m.mode,y),f.return=m,f;case qn:var E=f._init;return c(m,E(f._payload),y)}if(Gs(f)||Ns(f))return f=qr(f,m.mode,y,null),f.return=m,f;Kl(m,f)}return null}function d(m,f,y,E){var N=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:l(m,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bl:return y.key===N?a(m,f,y,E):null;case Ti:return y.key===N?u(m,f,y,E):null;case qn:return N=y._init,d(m,f,N(y._payload),E)}if(Gs(y)||Ns(y))return N!==null?null:h(m,f,y,E,null);Kl(m,y)}return null}function p(m,f,y,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,l(f,m,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case bl:return m=m.get(E.key===null?y:E.key)||null,a(f,m,E,N);case Ti:return m=m.get(E.key===null?y:E.key)||null,u(f,m,E,N);case qn:var L=E._init;return p(m,f,y,L(E._payload),N)}if(Gs(E)||Ns(E))return m=m.get(y)||null,h(f,m,E,N,null);Kl(f,E)}return null}function v(m,f,y,E){for(var N=null,L=null,D=f,b=f=0,q=null;D!==null&&b<y.length;b++){D.index>b?(q=D,D=null):q=D.sibling;var H=d(m,D,y[b],E);if(H===null){D===null&&(D=q);break}t&&D&&H.alternate===null&&e(m,D),f=s(H,f,b),L===null?N=H:L.sibling=H,L=H,D=q}if(b===y.length)return n(m,D),pe&&Mr(m,b),N;if(D===null){for(;b<y.length;b++)D=c(m,y[b],E),D!==null&&(f=s(D,f,b),L===null?N=D:L.sibling=D,L=D);return pe&&Mr(m,b),N}for(D=r(m,D);b<y.length;b++)q=p(D,m,b,y[b],E),q!==null&&(t&&q.alternate!==null&&D.delete(q.key===null?b:q.key),f=s(q,f,b),L===null?N=q:L.sibling=q,L=q);return t&&D.forEach(function(B){return e(m,B)}),pe&&Mr(m,b),N}function w(m,f,y,E){var N=Ns(y);if(typeof N!="function")throw Error(k(150));if(y=N.call(y),y==null)throw Error(k(151));for(var L=N=null,D=f,b=f=0,q=null,H=y.next();D!==null&&!H.done;b++,H=y.next()){D.index>b?(q=D,D=null):q=D.sibling;var B=d(m,D,H.value,E);if(B===null){D===null&&(D=q);break}t&&D&&B.alternate===null&&e(m,D),f=s(B,f,b),L===null?N=B:L.sibling=B,L=B,D=q}if(H.done)return n(m,D),pe&&Mr(m,b),N;if(D===null){for(;!H.done;b++,H=y.next())H=c(m,H.value,E),H!==null&&(f=s(H,f,b),L===null?N=H:L.sibling=H,L=H);return pe&&Mr(m,b),N}for(D=r(m,D);!H.done;b++,H=y.next())H=p(D,m,b,H.value,E),H!==null&&(t&&H.alternate!==null&&D.delete(H.key===null?b:H.key),f=s(H,f,b),L===null?N=H:L.sibling=H,L=H);return t&&D.forEach(function(J){return e(m,J)}),pe&&Mr(m,b),N}function I(m,f,y,E){if(typeof y=="object"&&y!==null&&y.type===ki&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case bl:e:{for(var N=y.key,L=f;L!==null;){if(L.key===N){if(N=y.type,N===ki){if(L.tag===7){n(m,L.sibling),f=i(L,y.props.children),f.return=m,m=f;break e}}else if(L.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qn&&Um(N)===L.type){n(m,L.sibling),f=i(L,y.props),f.ref=Ls(m,L,y),f.return=m,m=f;break e}n(m,L);break}else e(m,L);L=L.sibling}y.type===ki?(f=qr(y.props.children,m.mode,E,y.key),f.return=m,m=f):(E=ma(y.type,y.key,y.props,null,m.mode,E),E.ref=Ls(m,f,y),E.return=m,m=E)}return o(m);case Ti:e:{for(L=y.key;f!==null;){if(f.key===L)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=rh(y,m.mode,E),f.return=m,m=f}return o(m);case qn:return L=y._init,I(m,f,L(y._payload),E)}if(Gs(y))return v(m,f,y,E);if(Ns(y))return w(m,f,y,E);Kl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=nh(y,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return I}var is=x_(!0),P_=x_(!1),ul={},_n=kr(ul),Ro=kr(ul),No=kr(ul);function Vr(t){if(t===ul)throw Error(k(174));return t}function Qf(t,e){switch(ae(No,e),ae(Ro,t),ae(_n,ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qh(e,t)}de(_n),ae(_n,e)}function ss(){de(_n),de(Ro),de(No)}function O_(t){Vr(No.current);var e=Vr(_n.current),n=qh(e,t.type);e!==n&&(ae(Ro,t),ae(_n,n))}function Jf(t){Ro.current===t&&(de(_n),de(Ro))}var me=kr(0);function ja(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function Xf(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var ha=Hn.ReactCurrentDispatcher,Jc=Hn.ReactCurrentBatchConfig,ti=0,ve=null,xe=null,Me=null,Ua=!1,so=!1,xo=0,MI=0;function Je(){throw Error(k(321))}function Zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function ep(t,e,n,r,i,s){if(ti=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ha.current=t===null||t.memoizedState===null?UI:$I,t=n(r,i),so){s=0;do{if(so=!1,xo=0,25<=s)throw Error(k(301));s+=1,Me=xe=null,e.updateQueue=null,ha.current=BI,t=n(r,i)}while(so)}if(ha.current=$a,e=xe!==null&&xe.next!==null,ti=0,Me=xe=ve=null,Ua=!1,e)throw Error(k(300));return t}function tp(){var t=xo!==0;return xo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=t:Me=Me.next=t,Me}function Vt(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Me===null?ve.memoizedState:Me.next;if(e!==null)Me=e,xe=t;else{if(t===null)throw Error(k(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Me===null?ve.memoizedState=Me=t:Me=Me.next=t}return Me}function Po(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((ti&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ve.lanes|=h,ni|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ln(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function D_(){}function L_(t,e){var n=ve,r=Vt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,np(F_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Oo(9,b_.bind(null,n,r,i,e),void 0,null),je===null)throw Error(k(349));ti&30||M_(n,e,i)}return i}function M_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b_(t,e,n,r){e.value=n,e.getSnapshot=r,j_(e)&&U_(t)}function F_(t,e,n){return n(function(){j_(e)&&U_(t)})}function j_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function U_(t){var e=$n(t,1);e!==null&&sn(e,t,1,-1)}function $m(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=jI.bind(null,ve,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $_(){return Vt().memoizedState}function da(t,e,n,r){var i=dn();ve.flags|=t,i.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function Uu(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Zf(r,o.deps)){i.memoizedState=Oo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Oo(1|e,n,s,r)}function Bm(t,e){return da(8390656,8,t,e)}function np(t,e){return Uu(2048,8,t,e)}function B_(t,e){return Uu(4,2,t,e)}function V_(t,e){return Uu(4,4,t,e)}function z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W_(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,z_.bind(null,e,t),n)}function rp(){}function H_(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G_(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return ti&21?(ln(n,e)||(n=Qy(),ve.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function bI(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Jc.transition;Jc.transition={};try{t(!1),e()}finally{re=n,Jc.transition=r}}function Y_(){return Vt().memoizedState}function FI(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},q_(t))Q_(e,n);else if(n=k_(t,e,n,r),n!==null){var i=ut();sn(n,t,r,i),J_(n,e,r)}}function jI(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(q_(t))Q_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,o)){var a=e.interleaved;a===null?(i.next=i,Yf(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=k_(t,e,i,r),n!==null&&(i=ut(),sn(n,t,r,i),J_(n,e,r))}}function q_(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Q_(t,e){so=Ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lf(t,n)}}var $a={readContext:Bt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},UI={readContext:Bt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,da(4194308,4,z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return da(4194308,4,t,e)},useInsertionEffect:function(t,e){return da(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FI.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:$m,useDebugValue:rp,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=$m(!1),e=t[0];return t=bI.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=dn();if(pe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),je===null)throw Error(k(349));ti&30||M_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bm(F_.bind(null,r,s,t),[t]),r.flags|=2048,Oo(9,b_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=je.identifierPrefix;if(pe){var n=Pn,r=xn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=MI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$I={readContext:Bt,useCallback:H_,useContext:Bt,useEffect:np,useImperativeHandle:W_,useInsertionEffect:B_,useLayoutEffect:V_,useMemo:G_,useReducer:Xc,useRef:$_,useState:function(){return Xc(Po)},useDebugValue:rp,useDeferredValue:function(t){var e=Vt();return K_(e,xe.memoizedState,t)},useTransition:function(){var t=Xc(Po)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:L_,useId:Y_,unstable_isNewReconciler:!1},BI={readContext:Bt,useCallback:H_,useContext:Bt,useEffect:np,useImperativeHandle:W_,useInsertionEffect:B_,useLayoutEffect:V_,useMemo:G_,useReducer:Zc,useRef:$_,useState:function(){return Zc(Po)},useDebugValue:rp,useDeferredValue:function(t){var e=Vt();return xe===null?e.memoizedState=t:K_(e,xe.memoizedState,t)},useTransition:function(){var t=Zc(Po)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:L_,useId:Y_,unstable_isNewReconciler:!1};function os(t,e){try{var n="",r=e;do n+=gS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VI=typeof WeakMap=="function"?WeakMap:Map;function X_(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Va||(Va=!0,Rd=r),yd(t,e)},n}function Z_(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yd(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new VI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nT.bind(null,t,e,n),e.then(t,t))}function zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var zI=Hn.ReactCurrentOwner,gt=!1;function st(t,e,n,r){e.child=t===null?P_(e,null,n,r):is(e,t.child,n,r)}function Hm(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=ep(t,e,n,r,s,i),n=tp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(pe&&n&&Vf(e),e.flags|=1,st(t,e,r,i),e.child)}function Gm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e1(t,e,s,r,i)):(t=ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function e1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Io(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return _d(t,e,n,r,i)}function t1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(bi,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(bi,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(bi,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(bi,It),It|=r;return st(t,e,i,n),e.child}function n1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,r,i){var s=yt(n)?Zr:nt.current;return s=ns(e,s),Gi(e,i),n=ep(t,e,n,r,s,i),r=tp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(pe&&r&&Vf(e),e.flags|=1,st(t,e,n,i),e.child)}function Km(t,e,n,r,i){if(yt(n)){var s=!0;Oa(e)}else s=!1;if(Gi(e,i),e.stateNode===null)fa(t,e),N_(e,n,r),vd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bt(u):(u=yt(n)?Zr:nt.current,u=ns(e,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&jm(e,o,r,u),Qn=!1;var d=e.memoizedState;o.state=d,Fa(e,r,o,i),a=e.memoizedState,l!==r||d!==a||vt.current||Qn?(typeof h=="function"&&(md(e,n,h,r),a=e.memoizedState),(l=Qn||Fm(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,A_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Qt(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Bt(a):(a=yt(n)?Zr:nt.current,a=ns(e,a));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&jm(e,o,r,a),Qn=!1,d=e.memoizedState,o.state=d,Fa(e,r,o,i);var v=e.memoizedState;l!==c||d!==v||vt.current||Qn?(typeof p=="function"&&(md(e,n,p,r),v=e.memoizedState),(u=Qn||Fm(e,n,u,r,d,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return wd(t,e,n,r,s,i)}function wd(t,e,n,r,i,s){n1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Om(e,n,!1),Bn(t,e,s);r=e.stateNode,zI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=is(e,t.child,null,s),e.child=is(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Om(e,n,!0),e.child}function r1(t){var e=t.stateNode;e.pendingContext?Pm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pm(t,e.context,!1),Qf(t,e.containerInfo)}function Ym(t,e,n,r,i){return rs(),Wf(i),e.flags|=256,st(t,e,n,r),e.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function i1(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(me,i&1),t===null)return pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vu(o,r,0,null),t=qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cd(n),e.memoizedState=Ed,t):ip(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return WI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=fr(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ed,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ip(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yl(t,e,n,r){return r!==null&&Wf(r),is(e,t.child,null,n),t=ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(k(422))),Yl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Vu({mode:"visible",children:r.children},i,0,null),s=qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&is(e,t.child,null,o),e.child.memoizedState=Cd(o),e.memoizedState=Ed,s);if(!(e.mode&1))return Yl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=eh(s,r,void 0),Yl(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),sn(r,t,i,-1))}return cp(),r=eh(Error(k(421))),Yl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=ur(i.nextSibling),Nt=e,pe=!0,Xt=null,t!==null&&(Mt[bt++]=xn,Mt[bt++]=Pn,Mt[bt++]=ei,xn=t.id,Pn=t.overflow,ei=e),e=ip(e,r.children),e.flags|=4096,e)}function qm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gd(t.return,e,n)}function th(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function s1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,n,e);else if(t.tag===19)qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ja(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),th(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ja(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}th(e,!0,n,null,s);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HI(t,e,n){switch(e.tag){case 3:r1(e),rs();break;case 5:O_(e);break;case 1:yt(e.type)&&Oa(e);break;case 4:Qf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(Ma,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?i1(t,e,n):(ae(me,me.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return s1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,t1(t,e,n)}return Bn(t,e,n)}var o1,Sd,l1,a1;o1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};l1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vr(_n.current);var s=null;switch(n){case"input":i=Hh(t,i),r=Hh(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Yh(t,i),r=Yh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xa)}Qh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ce("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};a1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GI(t,e,n){var r=e.pendingProps;switch(zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return yt(e.type)&&Pa(),Xe(e),null;case 3:return r=e.stateNode,ss(),de(vt),de(nt),Xf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Pd(Xt),Xt=null))),Sd(t,e),Xe(e),null;case 5:Jf(e);var i=Vr(No.current);if(n=e.type,t!==null&&e.stateNode!=null)l1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Xe(e),null}if(t=Vr(_n.current),Gl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Ys.length;i++)ce(Ys[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":im(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":om(r,s),ce("invalid",r)}Qh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,l,t),i=["children",""+l]):vo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Fl(r),sm(r,s,!0);break;case"textarea":Fl(r),lm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=My(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Ao]=r,o1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jh(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ys.length;i++)ce(Ys[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":im(t,r),i=Hh(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ce("invalid",t);break;case"textarea":om(t,r),i=Yh(t,r),ce("invalid",t);break;default:i=r}Qh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?jy(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&by(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&yo(t,a):typeof a=="number"&&yo(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ce("scroll",t):a!=null&&Rf(t,s,a,o))}switch(n){case"input":Fl(t),sm(t,r,!1);break;case"textarea":Fl(t),lm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)a1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Vr(No.current),Vr(_n.current),Gl(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return Xe(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&At!==null&&e.mode&1&&!(e.flags&128))T_(),rs(),e.flags|=98560,s=!1;else if(s=Gl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[fn]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Xt!==null&&(Pd(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?De===0&&(De=3):cp())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return ss(),Sd(t,e),t===null&&To(e.stateNode.containerInfo),Xe(e),null;case 10:return Kf(e.type._context),Xe(e),null;case 17:return yt(e.type)&&Pa(),Xe(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ja(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>ls&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=ja(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Xe(e),null}else 2*Se()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function KI(t,e){switch(zf(e),e.tag){case 1:return yt(e.type)&&Pa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),de(vt),de(nt),Xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return ss(),null;case 10:return Kf(e.type._context),null;case 22:case 23:return up(),null;case 24:return null;default:return null}}var ql=!1,Ze=!1,YI=typeof WeakSet=="function"?WeakSet:Set,M=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Id(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Qm=!1;function qI(t,e){if(ld=Aa,t=d_(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,c=t,d=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)d=c,c=p;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++h===r&&(a=o),(p=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},Aa=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,I=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Qt(e.type,w),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){_e(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Qm,Qm=!1,v}function oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Id(e,n,s)}i=i.next}while(i!==r)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u1(t){var e=t.alternate;e!==null&&(t.alternate=null,u1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Ao],delete e[hd],delete e[PI],delete e[OI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c1(t){return t.tag===5||t.tag===3||t.tag===4}function Jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xa));else if(r!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Be=null,Jt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)h1(t,e,n),n=n.sibling}function h1(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Ou,n)}catch{}switch(n.tag){case 5:Ze||Mi(n,e);case 6:var r=Be,i=Jt;Be=null,Kn(t,e,n),Be=r,Jt=i,Be!==null&&(Jt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Jt?(t=Be,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),Co(t)):Yc(Be,n.stateNode));break;case 4:r=Be,i=Jt,Be=n.stateNode.containerInfo,Jt=!0,Kn(t,e,n),Be=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Id(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!Ze&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Kn(t,e,n),Ze=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YI),e.forEach(function(r){var i=iT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Jt=!1;break e;case 3:Be=l.stateNode.containerInfo,Jt=!0;break e;case 4:Be=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(Be===null)throw Error(k(160));h1(s,o,i),Be=null,Jt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){_e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d1(e,t),e=e.sibling}function d1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),hn(t),r&4){try{oo(3,t,t.return),$u(3,t)}catch(w){_e(t,t.return,w)}try{oo(5,t,t.return)}catch(w){_e(t,t.return,w)}}break;case 1:qt(e,t),hn(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(qt(e,t),hn(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{yo(i,"")}catch(w){_e(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dy(i,s),Jh(l,o);var u=Jh(l,s);for(o=0;o<a.length;o+=2){var h=a[o],c=a[o+1];h==="style"?jy(i,c):h==="dangerouslySetInnerHTML"?by(i,c):h==="children"?yo(i,c):Rf(i,h,c,u)}switch(l){case"input":Gh(i,s);break;case"textarea":Ly(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vi(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ao]=s}catch(w){_e(t,t.return,w)}}break;case 6:if(qt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){_e(t,t.return,w)}}break;case 3:if(qt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(w){_e(t,t.return,w)}break;case 4:qt(e,t),hn(t);break;case 13:qt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lp=Se())),r&4&&Xm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(u=Ze)||h,qt(e,t),Ze=u):qt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(M=t,h=t.child;h!==null;){for(c=M=h;M!==null;){switch(d=M,p=d.child,d.tag){case 0:case 11:case 14:case 15:oo(4,d,d.return);break;case 1:Mi(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){_e(r,n,w)}}break;case 5:Mi(d,d.return);break;case 22:if(d.memoizedState!==null){e0(c);continue}}p!==null?(p.return=d,M=p):e0(c)}h=h.sibling}e:for(h=null,c=t;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Fy("display",o))}catch(w){_e(t,t.return,w)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){_e(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:qt(e,t),hn(t),r&4&&Xm(t);break;case 21:break;default:qt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yo(i,""),r.flags&=-33);var s=Jm(t);Ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Jm(t);kd(t,l,o);break;default:throw Error(k(161))}}catch(a){_e(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QI(t,e,n){M=t,f1(t)}function f1(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ql;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ze;l=ql;var u=Ze;if(ql=o,(Ze=a)&&!u)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?t0(i):a!==null?(a.return=o,M=a):t0(i);for(;s!==null;)M=s,f1(s),s=s.sibling;M=i,ql=l,Ze=u}Zm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Zm(t)}}function Zm(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||$u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&Co(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ze||e.flags&512&&Td(e)}catch(d){_e(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function e0(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function t0(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(a){_e(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){_e(e,i,a)}}var s=e.return;try{Td(e)}catch(a){_e(e,s,a)}break;case 5:var o=e.return;try{Td(e)}catch(a){_e(e,o,a)}}}catch(a){_e(e,e.return,a)}if(e===t){M=null;break}var l=e.sibling;if(l!==null){l.return=e.return,M=l;break}M=e.return}}var JI=Math.ceil,Ba=Hn.ReactCurrentDispatcher,sp=Hn.ReactCurrentOwner,$t=Hn.ReactCurrentBatchConfig,ee=0,je=null,Re=null,We=0,It=0,bi=kr(0),De=0,Do=null,ni=0,Bu=0,op=0,lo=null,pt=null,lp=0,ls=1/0,An=null,Va=!1,Rd=null,hr=null,Ql=!1,rr=null,za=0,ao=0,Nd=null,pa=-1,ga=0;function ut(){return ee&6?Se():pa!==-1?pa:pa=Se()}function dr(t){return t.mode&1?ee&2&&We!==0?We&-We:LI.transition!==null?(ga===0&&(ga=Qy()),ga):(t=re,t!==0||(t=window.event,t=t===void 0?16:r_(t.type)),t):1}function sn(t,e,n,r){if(50<ao)throw ao=0,Nd=null,Error(k(185));ol(t,n,r),(!(ee&2)||t!==je)&&(t===je&&(!(ee&2)&&(Bu|=n),De===4&&Xn(t,We)),_t(t,r),n===1&&ee===0&&!(e.mode&1)&&(ls=Se()+500,Fu&&Ar()))}function _t(t,e){var n=t.callbackNode;LS(t,e);var r=ka(t,t===je?We:0);if(r===0)n!==null&&cm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cm(n),e===1)t.tag===0?DI(n0.bind(null,t)):C_(n0.bind(null,t)),NI(function(){!(ee&6)&&Ar()}),n=null;else{switch(Jy(r)){case 1:n=Df;break;case 4:n=Yy;break;case 16:n=Ta;break;case 536870912:n=qy;break;default:n=Ta}n=E1(n,p1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p1(t,e){if(pa=-1,ga=0,ee&6)throw Error(k(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=ka(t,t===je?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wa(t,r);else{e=r;var i=ee;ee|=2;var s=m1();(je!==t||We!==e)&&(An=null,ls=Se()+500,Yr(t,e));do try{eT();break}catch(l){g1(t,l)}while(!0);Gf(),Ba.current=s,ee=i,Re!==null?e=0:(je=null,We=0,e=De)}if(e!==0){if(e===2&&(i=nd(t),i!==0&&(r=i,e=xd(t,i))),e===1)throw n=Do,Yr(t,0),Xn(t,r),_t(t,Se()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!XI(i)&&(e=Wa(t,r),e===2&&(s=nd(t),s!==0&&(r=s,e=xd(t,s))),e===1))throw n=Do,Yr(t,0),Xn(t,r),_t(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:br(t,pt,An);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=lp+500-Se(),10<e)){if(ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cd(br.bind(null,t,pt,An),e);break}br(t,pt,An);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JI(r/1960))-r,10<r){t.timeoutHandle=cd(br.bind(null,t,pt,An),r);break}br(t,pt,An);break;case 5:br(t,pt,An);break;default:throw Error(k(329))}}}return _t(t,Se()),t.callbackNode===n?p1.bind(null,t):null}function xd(t,e){var n=lo;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Wa(t,e),t!==2&&(e=pt,pt=n,e!==null&&Pd(e)),t}function Pd(t){pt===null?pt=t:pt.push.apply(pt,t)}function XI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~op,e&=~Bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function n0(t){if(ee&6)throw Error(k(327));Ki();var e=ka(t,0);if(!(e&1))return _t(t,Se()),null;var n=Wa(t,e);if(t.tag!==0&&n===2){var r=nd(t);r!==0&&(e=r,n=xd(t,r))}if(n===1)throw n=Do,Yr(t,0),Xn(t,e),_t(t,Se()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,pt,An),_t(t,Se()),null}function ap(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(ls=Se()+500,Fu&&Ar())}}function ri(t){rr!==null&&rr.tag===0&&!(ee&6)&&Ki();var e=ee;ee|=1;var n=$t.transition,r=re;try{if($t.transition=null,re=1,t)return t()}finally{re=r,$t.transition=n,ee=e,!(ee&6)&&Ar()}}function up(){It=bi.current,de(bi)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RI(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pa();break;case 3:ss(),de(vt),de(nt),Xf();break;case 5:Jf(r);break;case 4:ss();break;case 13:de(me);break;case 19:de(me);break;case 10:Kf(r.type._context);break;case 22:case 23:up()}n=n.return}if(je=t,Re=t=fr(t.current,null),We=It=e,De=0,Do=null,op=Bu=ni=0,pt=lo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function g1(t,e){do{var n=Re;try{if(Gf(),ha.current=$a,Ua){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ua=!1}if(ti=0,Me=xe=ve=null,so=!1,xo=0,sp.current=null,n===null||n.return===null){De=1,Do=e,Re=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=We,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=zm(o);if(p!==null){p.flags&=-257,Wm(p,o,l,s,e),p.mode&1&&Vm(s,u,e),e=p,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Vm(s,u,e),cp();break e}a=Error(k(426))}}else if(pe&&l.mode&1){var I=zm(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Wm(I,o,l,s,e),Wf(os(a,l));break e}}s=a=os(a,l),De!==4&&(De=2),lo===null?lo=[s]:lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=X_(s,a,e);Mm(s,m);break e;case 1:l=a;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(hr===null||!hr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Z_(s,l,e);Mm(s,E);break e}}s=s.return}while(s!==null)}y1(n)}catch(N){e=N,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function m1(){var t=Ba.current;return Ba.current=$a,t===null?$a:t}function cp(){(De===0||De===3||De===2)&&(De=4),je===null||!(ni&268435455)&&!(Bu&268435455)||Xn(je,We)}function Wa(t,e){var n=ee;ee|=2;var r=m1();(je!==t||We!==e)&&(An=null,Yr(t,e));do try{ZI();break}catch(i){g1(t,i)}while(!0);if(Gf(),ee=n,Ba.current=r,Re!==null)throw Error(k(261));return je=null,We=0,De}function ZI(){for(;Re!==null;)v1(Re)}function eT(){for(;Re!==null&&!TS();)v1(Re)}function v1(t){var e=w1(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?y1(t):Re=e,sp.current=null}function y1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KI(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Re=null;return}}else if(n=GI(n,e,It),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);De===0&&(De=5)}function br(t,e,n){var r=re,i=$t.transition;try{$t.transition=null,re=1,tT(t,e,n,r)}finally{$t.transition=i,re=r}return null}function tT(t,e,n,r){do Ki();while(rr!==null);if(ee&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(MS(t,s),t===je&&(Re=je=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,E1(Ta,function(){return Ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=re;re=1;var l=ee;ee|=4,sp.current=null,qI(t,n),d1(n,t),EI(ad),Aa=!!ld,ad=ld=null,t.current=n,QI(n),kS(),ee=l,re=o,$t.transition=s}else t.current=n;if(Ql&&(Ql=!1,rr=t,za=i),s=t.pendingLanes,s===0&&(hr=null),NS(n.stateNode),_t(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Va)throw Va=!1,t=Rd,Rd=null,t;return za&1&&t.tag!==0&&Ki(),s=t.pendingLanes,s&1?t===Nd?ao++:(ao=0,Nd=t):ao=0,Ar(),null}function Ki(){if(rr!==null){var t=Jy(za),e=$t.transition,n=re;try{if($t.transition=null,re=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,za=0,ee&6)throw Error(k(331));var i=ee;for(ee|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(M=u;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:oo(8,h,s)}var c=h.child;if(c!==null)c.return=h,M=c;else for(;M!==null;){h=M;var d=h.sibling,p=h.return;if(u1(h),h===u){M=null;break}if(d!==null){d.return=p,M=d;break}M=p}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$u(9,l)}}catch(N){_e(l,l.return,N)}if(l===o){M=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,M=E;break e}M=l.return}}if(ee=i,Ar(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Ou,t)}catch{}r=!0}return r}finally{re=n,$t.transition=e}}return!1}function r0(t,e,n){e=os(n,e),e=X_(t,e,1),t=cr(t,e,1),e=ut(),t!==null&&(ol(t,1,e),_t(t,e))}function _e(t,e,n){if(t.tag===3)r0(t,t,n);else for(;e!==null;){if(e.tag===3){r0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=os(n,t),t=Z_(e,t,1),e=cr(e,t,1),t=ut(),e!==null&&(ol(e,1,t),_t(e,t));break}}e=e.return}}function nT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(We&n)===n&&(De===4||De===3&&(We&130023424)===We&&500>Se()-lp?Yr(t,0):op|=n),_t(t,e)}function _1(t,e){e===0&&(t.mode&1?(e=$l,$l<<=1,!($l&130023424)&&($l=4194304)):e=1);var n=ut();t=$n(t,e),t!==null&&(ol(t,e,n),_t(t,n))}function rT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_1(t,n)}function iT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),_1(t,n)}var w1;w1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,HI(t,e,n);gt=!!(t.flags&131072)}else gt=!1,pe&&e.flags&1048576&&S_(e,La,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fa(t,e),t=e.pendingProps;var i=ns(e,nt.current);Gi(e,n),i=ep(null,e,r,t,i,n);var s=tp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Oa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qf(e),i.updater=ju,e.stateNode=i,i._reactInternals=e,vd(e,r,t,n),e=wd(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Vf(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=oT(r),t=Qt(r,t),i){case 0:e=_d(null,e,r,t,n);break e;case 1:e=Km(null,e,r,t,n);break e;case 11:e=Hm(null,e,r,t,n);break e;case 14:e=Gm(null,e,r,Qt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),_d(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Km(t,e,r,i,n);case 3:e:{if(r1(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,A_(t,e),Fa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=os(Error(k(423)),e),e=Ym(t,e,r,n,i);break e}else if(r!==i){i=os(Error(k(424)),e),e=Ym(t,e,r,n,i);break e}else for(At=ur(e.stateNode.containerInfo.firstChild),Nt=e,pe=!0,Xt=null,n=P_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){e=Bn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return O_(e),t===null&&pd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ud(r,i)?o=null:s!==null&&ud(r,s)&&(e.flags|=32),n1(t,e),st(t,e,o,n),e.child;case 6:return t===null&&pd(e),null;case 13:return i1(t,e,n);case 4:return Qf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=is(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Hm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(Ma,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!vt.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=bn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gd(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=Bt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),Gm(t,e,r,i,n);case 15:return e1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),fa(t,e),e.tag=1,yt(r)?(t=!0,Oa(e)):t=!1,Gi(e,n),N_(e,r,i),vd(e,r,i,n),wd(null,e,r,!0,t,n);case 19:return s1(t,e,n);case 22:return t1(t,e,n)}throw Error(k(156,e.tag))};function E1(t,e){return Ky(t,e)}function sT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new sT(t,e,n,r)}function hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oT(t){if(typeof t=="function")return hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===Pf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ma(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ki:return qr(n.children,i,s,e);case Nf:o=8,i|=8;break;case Bh:return t=jt(12,n,e,i|2),t.elementType=Bh,t.lanes=s,t;case Vh:return t=jt(13,n,e,i),t.elementType=Vh,t.lanes=s,t;case zh:return t=jt(19,n,e,i),t.elementType=zh,t.lanes=s,t;case xy:return Vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ry:o=10;break e;case Ny:o=9;break e;case xf:o=11;break e;case Pf:o=14;break e;case qn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Vu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=xy,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dp(t,e,n,r,i,s,o,l,a){return t=new lT(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(s),t}function aT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function C1(t){if(!t)return Er;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(yt(n))return E_(t,n,e)}return e}function S1(t,e,n,r,i,s,o,l,a){return t=dp(n,r,!0,t,i,s,o,l,a),t.context=C1(null),n=t.current,r=ut(),i=dr(n),s=bn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,ol(t,i,r),_t(t,r),t}function zu(t,e,n,r){var i=e.current,s=ut(),o=dr(i);return n=C1(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(sn(t,i,o,s),ca(t,i,o)),o}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function i0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fp(t,e){i0(t,e),(t=t.alternate)&&i0(t,e)}function uT(){return null}var I1=typeof reportError=="function"?reportError:function(t){console.error(t)};function pp(t){this._internalRoot=t}Wu.prototype.render=pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));zu(t,e,null,null)};Wu.prototype.unmount=pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){zu(null,t,null,null)}),e[Un]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=e_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&n_(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function s0(){}function cT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ha(o);s.call(u)}}var o=S1(e,r,t,0,null,!1,!1,"",s0);return t._reactRootContainer=o,t[Un]=o.current,To(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ha(a);l.call(u)}}var a=dp(t,0,!1,null,null,!1,!1,"",s0);return t._reactRootContainer=a,t[Un]=a.current,To(t.nodeType===8?t.parentNode:t),ri(function(){zu(e,a,n,r)}),a}function Gu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ha(o);l.call(a)}}zu(e,o,t,i)}else o=cT(n,e,t,i,r);return Ha(o)}Xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(Lf(e,n|1),_t(e,Se()),!(ee&6)&&(ls=Se()+500,Ar()))}break;case 13:ri(function(){var r=$n(t,1);if(r!==null){var i=ut();sn(r,t,1,i)}}),fp(t,1)}};Mf=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=ut();sn(e,t,134217728,n)}fp(t,134217728)}};Zy=function(t){if(t.tag===13){var e=dr(t),n=$n(t,e);if(n!==null){var r=ut();sn(n,t,e,r)}fp(t,e)}};e_=function(){return re};t_=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Zh=function(t,e,n){switch(e){case"input":if(Gh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bu(r);if(!i)throw Error(k(90));Oy(r),Gh(r,i)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};By=ap;Vy=ri;var hT={usingClientEntryPoint:!1,Events:[al,xi,bu,Uy,$y,ap]},bs={findFiberByHostInstance:$r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dT={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hy(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||uT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{Ou=Jl.inject(dT),yn=Jl}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hT;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error(k(200));return aT(t,e,null,n)};Ot.createRoot=function(t,e){if(!gp(t))throw Error(k(299));var n=!1,r="",i=I1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,To(t.nodeType===8?t.parentNode:t),new pp(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Hy(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return ri(t)};Ot.hydrate=function(t,e,n){if(!Hu(e))throw Error(k(200));return Gu(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!gp(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=I1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S1(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,To(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wu(e)};Ot.render=function(t,e,n){if(!Hu(e))throw Error(k(200));return Gu(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(k(40));return t._reactRootContainer?(ri(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Ot.unstable_batchedUpdates=ap;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hu(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Gu(t,e,n,!1,r)};Ot.version="18.2.0-next-9e3b772b8-20220608";function T1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T1)}catch(t){console.error(t)}}T1(),Sy.exports=Ot;var fT=Sy.exports,o0=fT;Uh.createRoot=o0.createRoot,Uh.hydrateRoot=o0.hydrateRoot;const k1="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-5.5%200%2026%2026'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23000000'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3echevron-right%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-474.000000,%20-1196.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M488.404,1207.36%20L477.637,1197.6%20C476.806,1196.76%20475.459,1196.76%20474.629,1197.6%20C473.798,1198.43%20473.798,1199.77%20474.629,1200.6%20L483.885,1209%20L474.629,1217.4%20C473.798,1218.23%20473.798,1219.57%20474.629,1220.4%20C475.459,1221.24%20476.806,1221.24%20477.637,1220.4%20L488.404,1210.64%20C488.854,1210.19%20489.052,1209.59%20489.015,1209%20C489.052,1208.41%20488.854,1207.81%20488.404,1207.36'%20id='chevron-right'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",A1="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-5.5%200%2026%2026'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3e%3ctitle%3echevron-right%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-474.000000,%20-1196.000000)'%20fill='%23000000'%3e%3cpath%20d='M488.404,1207.36%20L477.637,1197.6%20C476.806,1196.76%20475.459,1196.76%20474.629,1197.6%20C473.798,1198.43%20473.798,1199.77%20474.629,1200.6%20L483.885,1209%20L474.629,1217.4%20C473.798,1218.23%20473.798,1219.57%20474.629,1220.4%20C475.459,1221.24%20476.806,1221.24%20477.637,1220.4%20L488.404,1210.64%20C488.854,1210.19%20489.052,1209.59%20489.015,1209%20C489.052,1208.41%20488.854,1207.81%20488.404,1207.36'%20id='chevron-right'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",pT="data:image/svg+xml,%3csvg%20width='84'%20height='80'%20viewBox='0%200%2084%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='36.0624'%20width='51'%20height='11'%20transform='rotate(-45%200%2036.0624)'%20fill='%2306CBAD'/%3e%3crect%20x='75.4827'%20y='44.2609'%20width='51'%20height='11'%20transform='rotate(-135%2075.4827%2044.2609)'%20fill='%23866BFA'/%3e%3crect%20x='36.0625'%20y='79.8406'%20width='51'%20height='11'%20transform='rotate(-135%2036.0625%2079.8406)'%20fill='%23FD456B'/%3e%3crect%20x='79.8406'%20y='43.7782'%20width='51'%20height='11'%20transform='rotate(135%2079.8406%2043.7782)'%20fill='%23F5CC00'/%3e%3c/svg%3e",R1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZCAYAAABVC4ivAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcaSURBVHgB7Z1pjBRFFMf/KOKB4dogoqLrFQ8UlfVA8YjGKyofjBrFCMQjGq8Y7wOFRPCjkZhoPKLfNJpoEGMiKrpeRMTghTfKrByiAQ/QVVbB5f2p7c0wOzv1qqe6u3qmf8k/fKCmt/ptTdWrV+/VDkDY7Ck6TjRCNEY0UrSTaLPoL9EaUUfPv0tEf6PAynDR+aI5opWibgf9I2oXzRAdjYI+jBY9JloBN8P2p/9Fi0RXiHZAk7O36FGYr393QvpSdLVoAJqQG0S/IznjVup90SFoEvYQLUB6xi3Xv6Lb0eAcIVqFbAxcrkdEu6IBOV60HtkbONKboh3RQJwJs+KHYuBIr4qGIWHSWHEPE82H2Vi48qvodRgP4VOYqYabkIEwPvWBogmicaITRNvBnZdEl4i6kFO4yJXgNro2wYywi0TbQ89eMItaB9xH9CzkmOfg9rIfiU5DfewiukW0weHnciqbiBxyDdxGL0ehz+mrFWbXp+0D4x8jkCPY2bXQvRyDOqcjGQaJnobe0A8iR8yE7qW44zsRyfOUsj/8Ro1CDmBIkqPT9kKdorORHi9AZ+jnkQNuRJgreovoZ9j79YdodwQMA+ol2F9kKdzcM1+cAd0AuAcBQ/dL8xL1umlxoffyIuz9a0fAPAD7C3yIbJkI3QLYgkDhOZvtBaYhez6BvZ9XwhNx9vr9wdjEWEubdaJ5yJ5nFG3GwRO+jWwLHX4Ns3pnjWbK2h+e8GnkkYo2nyEMPofZCNXiYHja5vs08r6KNksQBjw8+NHShnHmIfCATyNrgt+rEA4/Wf5/MExEr258Gnmgos0mhMNvlv8f1KO68WlkzclCSGdqtkFBN24zPODTyH8q2oxGONjiE13wdCTl08i2OY4cgDBg3GQ/SxueJW6AB3wauaRoE0oi4D4w54+1oPcR3EjmyfJ/ljaHwkTqsuZU2OfkL+AJ39PFSksbBvRDOLA8T9FmGQKFGZq2wMuzyJZWmJw4Wz8nIFCYK6EJI3qLC8TgXtj7yFGs8fszgbukjbC/hCYKlgT0KDph798TCJyHoRvN5yB95sHeNya6HInAYX4ajWh7GR5qjkF63AHd0dg7yAk8Vte80GKkkFUpTIK+ZCLNNIW6YCZnt1IMfw5HckyGPi96EXIG8yq0hv4WJkjuE3oHzAHRTF0Ut9AHIWfwpOR76A3NWMHN8BOpY4xEs8iVawZyyjEwW22Xl+UvhiVhcQLmPMh9CO4la5wmcl2Cdi10O6xKcZv+pOhimATvajAswKATR+GCmD9neY3n54r74P7ylVot+hjGxfoAZh7vqvOZrIA9HA3EbNRvaJ9i/nSW2/vEuAthGLiEFA3sM9Rpg7s7ulUhVBnRb2bh5mA0CCySZIFOnEUpaXGevxVhnT06wVWf2+sQiyQr9QtMYVCwmZyVcIv8OMzpdejGrRTduSkI3GeeinjFiiGJ3zwWa6YZIVTBBW0u8jE1aMXT6inwgI+vBZ15zr0+Luyg5/EDTAiUGaAsYOQpOBcoxp8Z32DAh14RU6gYH2FJGOsGW3r6wK38eOiyTG3Q2Nym34kMU8xY6LIO9Y0Ybgp4msKCSW5vfZytMe7RJrpK9Bp0R2K1xCL6JMOx/cJ0f815WTXxc3TrTkI6B5a8QIRBp6+A2IbmopiaoTnFXId4HeWonYWMRkUPJ8OEQV2jg1QHdHnYdXN9jA7y68rKqN0QDixzY6DJ1dDfIeFiyskxOvUyzHFUiDDxkHfHMazq8k5M4UrExeNC4nLFGEc7p5WdET6tML6xi6Ffgack8QhWNq126AAXiTbkC3ok0+Fm6DnwiMtvmYWIIc29rlwKfUiAm69J8MBM6A3cDk8VQxnDZEPt4s5Fva4oHrOBNHdXUHT6G+k+TOYwaxfEuaiD+cof8g1yFCZ0gN6UdkSfixhcpnw4F8SGOO3tBwb1NXYowfFqSiaYaBNTssjOTBNOgdqF/zY4MFX50NloDhgG0Fytw2CZ6lJsOtiaUdyBbGMQaTMNuoE33efDLkdzwcHHGxg1a5Q1n+9dxYPeQ3NeX34KdKc/F9R6SJvyIbHclQaBAXybfWreTnO/4gFL0dycBbuN6FtXDYfyhGKZ4gE3oaAEu53urvbBoxQfZBJII8Qm6kWzQemdMspz4Y6FnYXwVDmfcxhu2Ghpw5vJ+7i4ml3NhSggPFF5G3Z7bd0NRyOZ7pjtil1+6A0UEJZLLFa023pPXmRk/nkgW3CDl/evR0HEW4o2XOd6jawpc12IgnK4abNlFTGvpNfI42GnMPK28DDDtmdgCHhYZGRNoWIotxOGhObikbGRkTUXMK1AQSVrFG1GRUbWXN9VLHp9Wa5oMyQysq1AJfpzFgXbormmrSUysu2Gq7UoqIbGLkMjI9vSjTpRUA3NFDq0fMdXCy93VjYgmsGXh1zA/LMFVZZvx993EP4AAAAASUVORK5CYII=",l0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%203C4.34315%203%203%204.34315%203%206V18C3%2019.6569%204.34315%2021%206%2021H17C17.5523%2021%2018%2020.5523%2018%2020C18%2019.4477%2017.5523%2019%2017%2019H6C5.44772%2019%205%2018.5523%205%2018V6C5%205.44772%205.44772%205%206%205H17C17.5523%205%2018%204.55228%2018%204C18%203.44772%2017.5523%203%2017%203H6ZM15.7071%207.29289C15.3166%206.90237%2014.6834%206.90237%2014.2929%207.29289C13.9024%207.68342%2013.9024%208.31658%2014.2929%208.70711L16.5858%2011H8C7.44772%2011%207%2011.4477%207%2012C7%2012.5523%207.44772%2013%208%2013H16.5858L14.2929%2015.2929C13.9024%2015.6834%2013.9024%2016.3166%2014.2929%2016.7071C14.6834%2017.0976%2015.3166%2017.0976%2015.7071%2016.7071L19.7071%2012.7071C20.0976%2012.3166%2020.0976%2011.6834%2019.7071%2011.2929L15.7071%207.29289Z'%20fill='%23ffff'/%3e%3c/g%3e%3c/svg%3e",a0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%203C4.34315%203%203%204.34315%203%206V18C3%2019.6569%204.34315%2021%206%2021H17C17.5523%2021%2018%2020.5523%2018%2020C18%2019.4477%2017.5523%2019%2017%2019H6C5.44772%2019%205%2018.5523%205%2018V6C5%205.44772%205.44772%205%206%205H17C17.5523%205%2018%204.55228%2018%204C18%203.44772%2017.5523%203%2017%203H6ZM15.7071%207.29289C15.3166%206.90237%2014.6834%206.90237%2014.2929%207.29289C13.9024%207.68342%2013.9024%208.31658%2014.2929%208.70711L16.5858%2011H8C7.44772%2011%207%2011.4477%207%2012C7%2012.5523%207.44772%2013%208%2013H16.5858L14.2929%2015.2929C13.9024%2015.6834%2013.9024%2016.3166%2014.2929%2016.7071C14.6834%2017.0976%2015.3166%2017.0976%2015.7071%2016.7071L19.7071%2012.7071C20.0976%2012.3166%2020.0976%2011.6834%2019.7071%2011.2929L15.7071%207.29289Z'%20fill='%23000000'/%3e%3c/svg%3e",gT={IsMobileScreen:!1,menuClass:null,checked:!1,timeoutId:null,styleTransition:"none",marginBottom:"none"},Ce={IS_MOBILE:"MOBILE_SCREEN",MENU_CLASS:"SIDE_MENU_IS_OPEN",CHECKED:"SIDE_MENU_IS_CLICKED",TIMEOUT_ID:"SET_TIMEOUT",STYLE_TRANSITION:"STYLE_TRANSITION",STYLE_BOTTOM:"STYLE_BOTTOM"};function mT(t,e){switch(e.type){case Ce.IS_MOBILE:return{...t,isMobileScreen:e.payload};case Ce.MENU_CLASS:return{...t,menuClass:e.payload};case Ce.CHECKED:return{...t,checked:e.payload};case Ce.TIMEOUT_ID:return{...t,timeoutId:e.payload};case Ce.STYLE_TRANSITION:return{...t,styleTransition:e.payload};case Ce.STYLE_BOTTOM:return{...t,marginBottom:e.payload};default:console.error("ERROR");break}}/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lo.apply(this,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const u0="popstate";function vT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Od("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ga(i)}return _T(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function N1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yT(){return Math.random().toString(36).substr(2,8)}function c0(t,e){return{usr:t.state,key:t.key,idx:e}}function Od(t,e,n,r){return n===void 0&&(n=null),Lo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ys(e):e,{state:n,key:e&&e.key||r||yT()})}function Ga(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ys(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _T(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ir.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(Lo({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function c(){l=ir.Pop;let I=h(),m=I==null?null:I-u;u=I,a&&a({action:l,location:w.location,delta:m})}function d(I,m){l=ir.Push;let f=Od(w.location,I,m);n&&n(f,I),u=h()+1;let y=c0(f,u),E=w.createHref(f);try{o.pushState(y,"",E)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(E)}s&&a&&a({action:l,location:w.location,delta:1})}function p(I,m){l=ir.Replace;let f=Od(w.location,I,m);n&&n(f,I),u=h();let y=c0(f,u),E=w.createHref(f);o.replaceState(y,"",E),s&&a&&a({action:l,location:w.location,delta:0})}function v(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Ga(I);return f=f.replace(/ $/,"%20"),Ie(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return l},get location(){return t(i,o)},listen(I){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(u0,c),a=I,()=>{i.removeEventListener(u0,c),a=null}},createHref(I){return e(i,I)},createURL:v,encodeLocation(I){let m=v(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(I){return o.go(I)}};return w}var h0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(h0||(h0={}));function wT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ys(e):e,i=mp(r.pathname||"/",n);if(i==null)return null;let s=x1(t);ET(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let a=DT(i);o=xT(s[l],a)}return o}function x1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(Ie(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=pr([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),x1(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:RT(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of P1(s.path))i(s,o,a)}),e}function P1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=P1(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function ET(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const CT=/^:[\w-]+$/,ST=3,IT=2,TT=1,kT=10,AT=-2,d0=t=>t==="*";function RT(t,e){let n=t.split("/"),r=n.length;return n.some(d0)&&(r+=AT),e&&(r+=IT),n.filter(i=>!d0(i)).reduce((i,s)=>i+(CT.test(s)?ST:s===""?TT:kT),r)}function NT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=PT({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!h)return null;Object.assign(r,h.params);let c=l.route;s.push({params:r,pathname:pr([i,h.pathname]),pathnameBase:FT(pr([i,h.pathnameBase])),route:c}),h.pathnameBase!=="/"&&(i=pr([i,h.pathnameBase]))}return s}function PT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,c)=>{let{paramName:d,isOptional:p}=h;if(d==="*"){let w=l[c]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[c];return p&&!v?u[d]=void 0:u[d]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function OT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),N1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return N1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ys(t):t;return{pathname:n?n.startsWith("/")?n:MT(n,e):e,search:jT(r),hash:UT(i)}}function MT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ih(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vp(t,e){let n=bT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ys(t):(i=Lo({},t),Ie(!i.pathname||!i.pathname.includes("?"),ih("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),ih("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),ih("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}l=c>=0?e[c]:"/"}let a=LT(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),FT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,UT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $T(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const O1=["post","put","patch","delete"];new Set(O1);const BT=["get",...O1];new Set(BT);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mo.apply(this,arguments)}const _p=T.createContext(null),VT=T.createContext(null),Rr=T.createContext(null),Ku=T.createContext(null),Nr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),D1=T.createContext(null);function zT(t,e){let{relative:n}=e===void 0?{}:e;_s()||Ie(!1);let{basename:r,navigator:i}=T.useContext(Rr),{hash:s,pathname:o,search:l}=M1(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:pr([r,o])),i.createHref({pathname:a,search:l,hash:s})}function _s(){return T.useContext(Ku)!=null}function cl(){return _s()||Ie(!1),T.useContext(Ku).location}function L1(t){T.useContext(Rr).static||T.useLayoutEffect(t)}function Yu(){let{isDataRoute:t}=T.useContext(Nr);return t?nk():WT()}function WT(){_s()||Ie(!1);let t=T.useContext(_p),{basename:e,future:n,navigator:r}=T.useContext(Rr),{matches:i}=T.useContext(Nr),{pathname:s}=cl(),o=JSON.stringify(vp(i,n.v7_relativeSplatPath)),l=T.useRef(!1);return L1(()=>{l.current=!0}),T.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=yp(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:pr([e,c.pathname])),(h.replace?r.replace:r.push)(c,h.state,h)},[e,r,o,s,t])}function M1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Rr),{matches:i}=T.useContext(Nr),{pathname:s}=cl(),o=JSON.stringify(vp(i,r.v7_relativeSplatPath));return T.useMemo(()=>yp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function HT(t,e){return GT(t,e)}function GT(t,e,n,r){_s()||Ie(!1);let{navigator:i}=T.useContext(Rr),{matches:s}=T.useContext(Nr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=cl(),h;if(e){var c;let I=typeof e=="string"?ys(e):e;a==="/"||(c=I.pathname)!=null&&c.startsWith(a)||Ie(!1),h=I}else h=u;let d=h.pathname||"/",p=d;if(a!=="/"){let I=a.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(I.length).join("/")}let v=wT(t,{pathname:p}),w=JT(v&&v.map(I=>Object.assign({},I,{params:Object.assign({},l,I.params),pathname:pr([a,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?a:pr([a,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return e&&w?T.createElement(Ku.Provider,{value:{location:Mo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ir.Pop}},w):w}function KT(){let t=tk(),e=$T(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const YT=T.createElement(KT,null);class qT extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Nr.Provider,{value:this.props.routeContext},T.createElement(D1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QT(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(_p);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Nr.Provider,{value:e},r)}function JT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));h>=0||Ie(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let c=o[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=h),c.route.id){let{loaderData:d,errors:p}=n,v=c.route.loader&&d[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,c,d)=>{let p,v=!1,w=null,I=null;n&&(p=l&&c.route.id?l[c.route.id]:void 0,w=c.route.errorElement||YT,a&&(u<0&&d===0?(rk("route-fallback",!1),v=!0,I=null):u===d&&(v=!0,I=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,d+1)),f=()=>{let y;return p?y=w:v?y=I:c.route.Component?y=T.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=h,T.createElement(QT,{match:c,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?T.createElement(qT,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var b1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(b1||{}),Ka=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ka||{});function XT(t){let e=T.useContext(_p);return e||Ie(!1),e}function ZT(t){let e=T.useContext(VT);return e||Ie(!1),e}function ek(t){let e=T.useContext(Nr);return e||Ie(!1),e}function F1(t){let e=ek(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function tk(){var t;let e=T.useContext(D1),n=ZT(Ka.UseRouteError),r=F1(Ka.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function nk(){let{router:t}=XT(b1.UseNavigateStable),e=F1(Ka.UseNavigateStable),n=T.useRef(!1);return L1(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Mo({fromRouteId:e},s)))},[t,e])}const f0={};function rk(t,e,n){!e&&!f0[t]&&(f0[t]=!0)}function ik(t){let{to:e,replace:n,state:r,relative:i}=t;_s()||Ie(!1);let{future:s,static:o}=T.useContext(Rr),{matches:l}=T.useContext(Nr),{pathname:a}=cl(),u=Yu(),h=yp(e,vp(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(h);return T.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function qs(t){Ie(!1)}function sk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ir.Pop,navigator:s,static:o=!1,future:l}=t;_s()&&Ie(!1);let a=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:a,navigator:s,static:o,future:Mo({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=ys(r));let{pathname:h="/",search:c="",hash:d="",state:p=null,key:v="default"}=r,w=T.useMemo(()=>{let I=mp(h,a);return I==null?null:{location:{pathname:I,search:c,hash:d,state:p,key:v},navigationType:i}},[a,h,c,d,p,v,i]);return w==null?null:T.createElement(Rr.Provider,{value:u},T.createElement(Ku.Provider,{children:n,value:w}))}function ok(t){let{children:e,location:n}=t;return HT(Dd(e),n)}new Promise(()=>{});function Dd(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Dd(r.props.children,s));return}r.type!==qs&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Dd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ld(){return Ld=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ld.apply(this,arguments)}function lk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ak(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uk(t,e){return t.button===0&&(!e||e==="_self")&&!ak(t)}const ck=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],hk="6";try{window.__reactRouterVersion=hk}catch{}const dk="startTransition",p0=rS[dk];function fk(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=vT({window:i,v5Compat:!0}));let o=s.current,[l,a]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=T.useCallback(c=>{u&&p0?p0(()=>a(c)):a(c)},[a,u]);return T.useLayoutEffect(()=>o.listen(h),[o,h]),T.createElement(sk,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const pk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j1=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h,unstable_viewTransition:c}=e,d=lk(e,ck),{basename:p}=T.useContext(Rr),v,w=!1;if(typeof u=="string"&&gk.test(u)&&(v=u,pk))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),N=mp(E.pathname,p);E.origin===y.origin&&N!=null?u=N+E.search+E.hash:w=!0}catch{}let I=zT(u,{relative:i}),m=mk(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,unstable_viewTransition:c});function f(y){r&&r(y),y.defaultPrevented||m(y)}return T.createElement("a",Ld({},d,{href:v||I,onClick:w||s?r:f,ref:n,target:a}))});var g0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(g0||(g0={}));var m0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m0||(m0={}));function mk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=Yu(),u=cl(),h=M1(t,{relative:o});return T.useCallback(c=>{if(uk(c,n)){c.preventDefault();let d=r!==void 0?r:Ga(u)===Ga(h);a(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,h,r,i,n,t,s,o,l])}var v0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw ws(e)},ws=function(t){return new Error("Firebase Database ("+U1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(d=64)),r.push(n[h],n[c],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new yk;const d=s<<2|l>>4;if(r.push(d),u!==64){const p=l<<4&240|u>>2;if(r.push(p),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B1=function(t){const e=$1(t);return wp.encodeByteArray(e,!0)},Ya=function(t){return B1(t).replace(/\./g,"")},qa=function(t){try{return wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){return V1(void 0,t)}function V1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wk(n)||(t[n]=V1(t[n],e[n]));return t}function wk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=()=>Ek().__FIREBASE_DEFAULTS__,Sk=()=>{if(typeof process>"u"||typeof v0>"u")return;const t=v0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ik=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qa(t[1]);return e&&JSON.parse(e)},Ep=()=>{try{return Ck()||Sk()||Ik()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},z1=t=>{var e,n;return(n=(e=Ep())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tk=t=>{const e=z1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},W1=()=>{var t;return(t=Ep())===null||t===void 0?void 0:t.config},H1=t=>{var e;return(e=Ep())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function G1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function K1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ak(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y1(){return U1.NODE_ADMIN===!0}function q1(){try{return typeof indexedDB=="object"}catch{return!1}}function Q1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Rk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nk,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new un(i,l,r)}}function xk(t,e){return t.replace(Pk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Pk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=bo(qa(s[0])||""),n=bo(qa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Ok=function(t){const e=J1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Dk=function(t){const e=J1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function as(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Md(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Fo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(y0(s)&&y0(o)){if(!Fo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function y0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):c<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const d=(i<<5|i>>>27)+u+a+h+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Mk(t,e){const n=new bk(t,e);return n.subscribe.bind(n)}class bk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sh),i.error===void 0&&(i.error=sh),i.complete===void 0&&(i.complete=sh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sh(){}function qu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=1e3,$k=2,Bk=4*60*60*1e3,Vk=.5;function _0(t,e=Uk,n=$k){const r=e*Math.pow(n,t),i=Math.round(Vk*r*(Math.random()-.5)*2);return Math.min(Bk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hk(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wk(t){return t===Fr?void 0:t}function Hk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Kk={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Yk=ne.INFO,qk={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Qk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dl{constructor(e){this.name=e,this._logLevel=Yk,this._logHandler=Qk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Jk=(t,e)=>e.some(n=>t instanceof n);let w0,E0;function Xk(){return w0||(w0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zk(){return E0||(E0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X1=new WeakMap,bd=new WeakMap,Z1=new WeakMap,oh=new WeakMap,Sp=new WeakMap;function eA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&X1.set(n,t)}).catch(()=>{}),Sp.set(e,t),e}function tA(t){if(bd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bd.set(t,e)}let Fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Z1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nA(t){Fd=t(Fd)}function rA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lh(this),e,...n);return Z1.set(r,e.sort?e.sort():[e]),gr(r)}:Zk().includes(t)?function(...e){return t.apply(lh(this),e),gr(X1.get(this))}:function(...e){return gr(t.apply(lh(this),e))}}function iA(t){return typeof t=="function"?rA(t):(t instanceof IDBTransaction&&tA(t),Jk(t,Xk())?new Proxy(t,Fd):t)}function gr(t){if(t instanceof IDBRequest)return eA(t);if(oh.has(t))return oh.get(t);const e=iA(t);return e!==t&&(oh.set(t,e),Sp.set(e,t)),e}const lh=t=>Sp.get(t);function sA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gr(o.result),a.oldVersion,a.newVersion,gr(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const oA=["get","getKey","getAll","getAllKeys","count"],lA=["put","add","delete","clear"],ah=new Map;function C0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oA.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ah.set(e,s),s}nA(t=>({...t,get:(e,n,r)=>C0(e,n)||t.get(e,n,r),has:(e,n)=>!!C0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jd="@firebase/app",S0="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new dl("@firebase/app"),cA="@firebase/app-compat",hA="@firebase/analytics-compat",dA="@firebase/analytics",fA="@firebase/app-check-compat",pA="@firebase/app-check",gA="@firebase/auth",mA="@firebase/auth-compat",vA="@firebase/database",yA="@firebase/database-compat",_A="@firebase/functions",wA="@firebase/functions-compat",EA="@firebase/installations",CA="@firebase/installations-compat",SA="@firebase/messaging",IA="@firebase/messaging-compat",TA="@firebase/performance",kA="@firebase/performance-compat",AA="@firebase/remote-config",RA="@firebase/remote-config-compat",NA="@firebase/storage",xA="@firebase/storage-compat",PA="@firebase/firestore",OA="@firebase/firestore-compat",DA="firebase",LA="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="[DEFAULT]",MA={[jd]:"fire-core",[cA]:"fire-core-compat",[dA]:"fire-analytics",[hA]:"fire-analytics-compat",[pA]:"fire-app-check",[fA]:"fire-app-check-compat",[gA]:"fire-auth",[mA]:"fire-auth-compat",[vA]:"fire-rtdb",[yA]:"fire-rtdb-compat",[_A]:"fire-fn",[wA]:"fire-fn-compat",[EA]:"fire-iid",[CA]:"fire-iid-compat",[SA]:"fire-fcm",[IA]:"fire-fcm-compat",[TA]:"fire-perf",[kA]:"fire-perf-compat",[AA]:"fire-rc",[RA]:"fire-rc-compat",[NA]:"fire-gcs",[xA]:"fire-gcs-compat",[PA]:"fire-fst",[OA]:"fire-fst-compat","fire-js":"fire-js",[DA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map,$d=new Map;function bA(t,e){try{t.container.addComponent(e)}catch(n){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if($d.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;$d.set(e,t);for(const n of Ja.values())bA(n,t);return!0}function gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mr=new pi("app","Firebase",FA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=LA;function ew(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ud,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=W1()),!n)throw mr.create("no-options");const s=Ja.get(i);if(s){if(Fo(n,s.options)&&Fo(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new Gk(i);for(const a of $d.values())o.addComponent(a);const l=new jA(n,r,o);return Ja.set(i,l),l}function Ip(t=Ud){const e=Ja.get(t);if(!e&&t===Ud&&W1())return ew();if(!e)throw mr.create("no-app",{appName:t});return e}function wt(t,e,n){var r;let i=(r=MA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(l.join(" "));return}an(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="firebase-heartbeat-database",$A=1,jo="firebase-heartbeat-store";let uh=null;function tw(){return uh||(uh=sA(UA,$A,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jo)}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),uh}async function BA(t){try{return await(await tw()).transaction(jo).objectStore(jo).get(nw(t))}catch(e){if(e instanceof un)ii.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(n.message)}}}async function I0(t,e){try{const r=(await tw()).transaction(jo,"readwrite");await r.objectStore(jo).put(e,nw(t)),await r.done}catch(n){if(n instanceof un)ii.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ii.warn(r.message)}}}function nw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=1024,zA=30*24*60*60*1e3;class WA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=T0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=zA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=T0(),{heartbeatsToSend:r,unsentEntries:i}=HA(this._heartbeatsCache.heartbeats),s=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function T0(){return new Date().toISOString().substring(0,10)}function HA(t,e=VA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),k0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),k0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q1()?Q1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function k0(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){an(new zt("platform-logger",e=>new aA(e),"PRIVATE")),an(new zt("heartbeat",e=>new WA(e),"PRIVATE")),wt(jd,S0,t),wt(jd,S0,"esm2017"),wt("fire-js","")}KA("");var YA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Tp=Tp||{},W=YA||self;function Ju(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qA(t){return Object.prototype.hasOwnProperty.call(t,ch)&&t[ch]||(t[ch]=++QA)}var ch="closure_uid_"+(1e9*Math.random()>>>0),QA=0;function JA(t,e,n){return t.call.apply(t.bind,arguments)}function XA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=JA:et=XA,et.apply(null,arguments)}function Xl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(r,o)}}function xr(){this.s=this.s,this.o=this.o}var ZA=0;xr.prototype.s=!1;xr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ZA!=0)&&qA(this)};xr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ju(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var eR=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function Uo(t){return/^[\s\xa0]*$/.test(t)}function Xu(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function pn(t){return Xu().indexOf(t)!=-1}function Ap(t){return Ap[" "](t),t}Ap[" "]=function(){};function tR(t,e){var n=YR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var nR=pn("Opera"),$o=pn("Trident")||pn("MSIE"),iw=pn("Edge"),Bd=iw||$o,sw=pn("Gecko")&&!(Xu().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge"))&&!(pn("Trident")||pn("MSIE"))&&!pn("Edge"),rR=Xu().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge");function ow(){var t=W.document;return t?t.documentMode:void 0}e:{var R0="",hh=function(){var t=Xu();if(sw)return/rv:([^\);]+)(\)|;)/.exec(t);if(iw)return/Edge\/([\d\.]+)/.exec(t);if($o)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rR)return/WebKit\/(\S+)/.exec(t);if(nR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hh&&(R0=hh?hh[1]:""),$o){var N0=ow();if(N0!=null&&N0>parseFloat(R0))break e}}W.document&&$o&&ow();function Bo(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sw){e:{try{Ap(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Bo.$.h.call(this)}}$e(Bo,tt);var iR={2:"touch",3:"pen",4:"mouse"};Bo.prototype.h=function(){Bo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pl="closure_listenable_"+(1e6*Math.random()|0),sR=0;function oR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++sR,this.fa=this.ia=!1}function Zu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Rp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function lR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function lw(t){const e={};for(const n in t)e[n]=t[n];return e}const x0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function aw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<x0.length;s++)n=x0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ec(t){this.src=t,this.g={},this.h=0}ec.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new oR(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Vd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=rw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Zu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Np="closure_lm_"+(1e6*Math.random()|0),dh={};function uw(t,e,n,r,i){if(r&&r.once)return hw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)uw(t,e[s],n,r,i);return null}return n=Op(n),t&&t[pl]?t.O(e,n,fl(r)?!!r.capture:!!r,i):cw(t,e,n,!1,r,i)}function cw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=fl(i)?!!i.capture:!!i,l=Pp(t);if(l||(t[Np]=l=new ec(t)),n=l.add(e,n,r,o,s),n.proxy)return n;if(r=aR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)eR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(fw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aR(){function t(n){return e.call(t.src,t.listener,n)}const e=uR;return t}function hw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)hw(t,e[s],n,r,i);return null}return n=Op(n),t&&t[pl]?t.P(e,n,fl(r)?!!r.capture:!!r,i):cw(t,e,n,!0,r,i)}function dw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)dw(t,e[s],n,r,i);else r=fl(r)?!!r.capture:!!r,n=Op(n),t&&t[pl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zd(s,n,r,i),-1<n&&(Zu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zd(e,n,r,i)),(n=-1<t?e[t]:null)&&xp(n))}function xp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pl])Vd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pp(e))?(Vd(n,t),n.h==0&&(n.src=null,e[Np]=null)):Zu(t)}}}function fw(t){return t in dh?dh[t]:dh[t]="on"+t}function uR(t,e){if(t.fa)t=!0;else{e=new Bo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&xp(t),t=n.call(r,e)}return t}function Pp(t){return t=t[Np],t instanceof ec?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Op(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function Ue(){xr.call(this),this.i=new ec(this),this.S=this,this.J=null}$e(Ue,xr);Ue.prototype[pl]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){dw(this,t,e,n,r)};function He(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var i=e;e=new tt(r,t),aw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Zl(o,r,!0,e)&&i}if(o=e.g=t,i=Zl(o,r,!0,e)&&i,i=Zl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Zl(o,r,!1,e)&&i}Ue.prototype.N=function(){if(Ue.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Zu(n[r]);delete t.g[e],t.h--}}this.J=null};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Zl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Vd(t.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Dp=W.JSON.stringify;class cR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hR(){var t=Lp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dR{constructor(){this.h=this.g=null}add(e,n){const r=pw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pw=new cR(()=>new fR,t=>t.reset());class fR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function gR(t){W.setTimeout(()=>{throw t},0)}let Vo,zo=!1,Lp=new dR,gw=()=>{const t=W.Promise.resolve(void 0);Vo=()=>{t.then(mR)}};var mR=()=>{for(var t;t=hR();){try{t.h.call(t.g)}catch(n){gR(n)}var e=pw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zo=!1};function tc(t,e){Ue.call(this),this.h=t||1,this.g=e||W,this.j=et(this.qb,this),this.l=Date.now()}$e(tc,Ue);x=tc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(Mp(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){tc.$.N.call(this),Mp(this),delete this.g};function bp(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function mw(t){t.g=bp(()=>{t.g=null,t.i&&(t.i=!1,mw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vR extends xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:mw(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(t){xr.call(this),this.h=t,this.g={}}$e(Wo,xr);var P0=[];function vw(t,e,n,r){Array.isArray(n)||(n&&(P0[0]=n.toString()),n=P0);for(var i=0;i<n.length;i++){var s=uw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function yw(t){Rp(t.g,function(e,n){this.g.hasOwnProperty(n)&&xp(e)},t),t.g={}}Wo.prototype.N=function(){Wo.$.N.call(this),yw(this)};Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nc(){this.g=!0}nc.prototype.Ea=function(){this.g=!1};function yR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function _R(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Fi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ER(t,n)+(r?" "+r:"")})}function wR(t,e){t.info(function(){return"TIMEOUT: "+e})}nc.prototype.info=function(){};function ER(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Dp(n)}catch{return e}}var Cs={},O0=null;function Fp(){return O0=O0||new Ue}Cs.Ta="serverreachability";function _w(t){tt.call(this,Cs.Ta,t)}$e(_w,tt);function Ho(t){const e=Fp();He(e,new _w(e))}Cs.STAT_EVENT="statevent";function ww(t,e){tt.call(this,Cs.STAT_EVENT,t),this.stat=e}$e(ww,tt);function lt(t){const e=Fp();He(e,new ww(e,t))}Cs.Ua="timingevent";function Ew(t,e){tt.call(this,Cs.Ua,t),this.size=e}$e(Ew,tt);function gl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var jp={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},CR={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Up(){}Up.prototype.h=null;function D0(t){return t.h||(t.h=t.i())}function SR(){}var ml={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $p(){tt.call(this,"d")}$e($p,tt);function Bp(){tt.call(this,"c")}$e(Bp,tt);var Wd;function rc(){}$e(rc,Up);rc.prototype.g=function(){return new XMLHttpRequest};rc.prototype.i=function(){return{}};Wd=new rc;function vl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Wo(this),this.P=IR,t=Bd?125:void 0,this.V=new tc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Cw}function Cw(){this.i=null,this.g="",this.h=!1}var IR=45e3,Hd={},Xa={};x=vl.prototype;x.setTimeout=function(t){this.P=t};function Gd(t,e,n){t.L=1,t.v=sc(Vn(e)),t.s=n,t.S=!0,Sw(t,null)}function Sw(t,e){t.G=Date.now(),yl(t),t.A=Vn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Pw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Cw,t.g=Xw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new vR(et(t.Pa,t,t.g),t.O)),vw(t.U,t.g,"readystatechange",t.nb),e=t.I?lw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ho(),yR(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&gn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const h=gn(this.g);var e=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||Bd||this.g&&(this.h.h||this.g.ja()||F0(this.g)))){this.J||h!=4||e==7||(e==8||0>=c?Ho(3):Ho(2)),ic(this);var n=this.g.da();this.ca=n;t:if(Iw(this)){var r=F0(this.g);t="";var i=r.length,s=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),uo(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_R(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uo(l)){var u=l;break t}}u=null}if(n=u)Fi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kd(this,n);else{this.i=!1,this.o=3,lt(12),zr(this),uo(this);break e}}this.S?(Tw(this,h,o),Bd&&this.i&&h==3&&(vw(this.U,this.V,"tick",this.mb),this.V.start())):(Fi(this.j,this.m,o,null),Kd(this,o)),h==4&&zr(this),this.i&&!this.J&&(h==4?Yw(this.l,this):(this.i=!1,yl(this)))}else HR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),zr(this),uo(this)}}}catch{}finally{}};function Iw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Tw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=TR(t,n),i==Xa){e==4&&(t.o=4,lt(14),r=!1),Fi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Hd){t.o=4,lt(15),Fi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fi(t.j,t.m,i,null),Kd(t,i);Iw(t)&&i!=Xa&&i!=Hd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kp(e),e.M=!0,lt(11))):(Fi(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),uo(t))}x.mb=function(){if(this.g){var t=gn(this.g),e=this.g.ja();this.C<e.length&&(ic(this),Tw(this,t,e),this.i&&t!=4&&yl(this))}};function TR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Xa:(n=Number(e.substring(n,r)),isNaN(n)?Hd:(r+=1,r+n>e.length?Xa:(e=e.slice(r,r+n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,zr(this)};function yl(t){t.Y=Date.now()+t.P,kw(t,t.P)}function kw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=gl(et(t.lb,t),e)}function ic(t){t.B&&(W.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(wR(this.j,this.A),this.L!=2&&(Ho(),lt(17)),zr(this),this.o=2,uo(this)):kw(this,this.Y-t)};function uo(t){t.l.H==0||t.J||Yw(t.l,t)}function zr(t){ic(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Mp(t.V),yw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Kd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Yd(n.i,t))){if(!t.K&&Yd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)tu(n),uc(n);else break e;Gp(n),lt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=gl(et(n.ib,n),6e3));if(1>=Lw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wr(n,11)}else if((t.K||n.g==t)&&tu(n),!Uo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const c=u[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Vp(s,s.h),s.h=null))}if(r.F){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,he(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Jw(r,r.J?r.pa:null,r.Y),o.K){Mw(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&(ic(l),yl(l)),r.g=o}else Gw(r);0<n.j.length&&cc(n)}else u[0]!="stop"&&u[0]!="close"||Wr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Wr(n,7):Hp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ho(4)}catch{}}function kR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ju(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function AR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ju(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Aw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ju(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AR(t),r=kR(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Rw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qr){this.h=t.h,Za(this,t.j),this.s=t.s,this.g=t.g,eu(this,t.m),this.l=t.l;var e=t.i,n=new Go;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),L0(this,n),this.o=t.o}else t&&(e=String(t).match(Rw))?(this.h=!1,Za(this,e[1]||"",!0),this.s=Xs(e[2]||""),this.g=Xs(e[3]||"",!0),eu(this,e[4]),this.l=Xs(e[5]||"",!0),L0(this,e[6]||"",!0),this.o=Xs(e[7]||"")):(this.h=!1,this.i=new Go(null,this.h))}Qr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zs(e,M0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zs(e,M0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zs(n,n.charAt(0)=="/"?PR:xR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zs(n,DR)),t.join("")};function Vn(t){return new Qr(t)}function Za(t,e,n){t.j=n?Xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function eu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function L0(t,e,n){e instanceof Go?(t.i=e,LR(t.i,t.h)):(n||(e=Zs(e,OR)),t.i=new Go(e,t.h))}function he(t,e,n){t.i.set(e,n)}function sc(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var M0=/[#\/\?@]/g,xR=/[#\?:]/g,PR=/[#\?]/g,OR=/[#\?@]/g,DR=/#/g;function Go(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pr(t){t.g||(t.g=new Map,t.h=0,t.i&&RR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Go.prototype;x.add=function(t,e){Pr(this),this.i=null,t=Ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Nw(t,e){Pr(t),e=Ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xw(t,e){return Pr(t),e=Ss(t,e),t.g.has(e)}x.forEach=function(t,e){Pr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){Pr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){Pr(this);let e=[];if(typeof t=="string")xw(this,t)&&(e=e.concat(this.g.get(Ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Pr(this),this.i=null,t=Ss(this,t),xw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Pw(t,e,n){Nw(t,e),0<n.length&&(t.i=null,t.g.set(Ss(t,e),kp(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function LR(t,e){e&&!t.j&&(Pr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Nw(this,r),Pw(this,i,n))},t)),t.j=e}var MR=class{constructor(t,e){this.g=t,this.map=e}};function Ow(t){this.l=t||bR,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bR=10;function Dw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Lw(t){return t.h?1:t.g?t.g.size:0}function Yd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vp(t,e){t.g?t.g.add(e):t.h=e}function Mw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ow.prototype.cancel=function(){if(this.i=bw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return kp(t.i)}var FR=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function jR(){this.g=new FR}function UR(t,e,n){const r=n||"";try{Aw(t,function(i,s){let o=i;fl(i)&&(o=Dp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function $R(t,e){const n=new nc;if(W.Image){const r=new Image;r.onload=Xl(ea,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xl(ea,n,r,"TestLoadImage: error",!1,e),r.onabort=Xl(ea,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xl(ea,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ea(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function oc(t){this.l=t.ec||null,this.j=t.ob||!1}$e(oc,Up);oc.prototype.g=function(){return new lc(this.l,this.j)};oc.prototype.i=function(t){return function(){return t}}({});function lc(t,e){Ue.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=zp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(lc,Ue);var zp=0;x=lc.prototype;x.open=function(t,e){if(this.readyState!=zp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ko(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_l(this)),this.readyState=zp};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Fw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_l(this):Ko(this),this.readyState==3&&Fw(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,_l(this))};x.Ya=function(t){this.g&&(this.response=t,_l(this))};x.ka=function(){this.g&&_l(this)};function _l(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ko(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(lc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BR=W.JSON.parse;function Te(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jw,this.L=this.M=!1}$e(Te,Ue);var jw="",VR=/^https?$/i,zR=["POST","PUT"];x=Te.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wd.g(),this.C=this.u?D0(this.u):D0(Wd),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){b0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=rw(zR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bw(this),0<this.B&&((this.L=WR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=bp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){b0(this,s)}};function WR(t){return $o&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Tp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function b0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Uw(t),ac(t)}function Uw(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),ac(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ac(this,!0)),Te.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?$w(this):this.kb())};x.kb=function(){$w(this)};function $w(t){if(t.h&&typeof Tp<"u"&&(!t.C[1]||gn(t)!=4||t.da()!=2)){if(t.v&&gn(t)==4)bp(t.La,0,t);else if(He(t,"readystatechange"),gn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Rw)[1]||null;!i&&W.self&&W.self.location&&(i=W.self.location.protocol.slice(0,-1)),r=!VR.test(i?i.toLowerCase():"")}n=r}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var s=2<gn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Uw(t)}}finally{ac(t)}}}}function ac(t,e){if(t.g){Bw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=r}catch{}}}function Bw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function gn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BR(e)}};function F0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function HR(t){const e={};t=(t.g&&2<=gn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Uo(t[r]))continue;var n=pR(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}lR(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vw(t){let e="";return Rp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Vw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Fs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zw(t){this.Ga=0,this.j=[],this.l=new nc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fs("baseRetryDelayMs",5e3,t),this.hb=Fs("retryDelaySeedMs",1e4,t),this.eb=Fs("forwardChannelMaxRetries",2,t),this.xa=Fs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ow(t&&t.concurrentRequestLimit),this.Ja=new jR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=zw.prototype;x.ra=8;x.H=1;function Hp(t){if(Ww(t),t.H==3){var e=t.W++,n=Vn(t.I);if(he(n,"SID",t.K),he(n,"RID",e),he(n,"TYPE","terminate"),wl(t,n),e=new vl(t,t.l,e),e.L=2,e.v=sc(Vn(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),yl(e)}Qw(t)}function uc(t){t.g&&(Kp(t),t.g.cancel(),t.g=null)}function Ww(t){uc(t),t.u&&(W.clearTimeout(t.u),t.u=null),tu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function cc(t){if(!Dw(t.i)&&!t.m){t.m=!0;var e=t.Na;Vo||gw(),zo||(Vo(),zo=!0),Lp.add(e,t),t.C=0}}function GR(t,e){return Lw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=gl(et(t.Na,t,e),qw(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new vl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=lw(s),aw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hw(this,i,e),n=Vn(this.I),he(n,"RID",t),he(n,"CVER",22),this.F&&he(n,"X-HTTP-Session-Id",this.F),wl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Vw(s)))+"&"+e:this.o&&Wp(n,this.o,s)),Vp(this.i,i),this.bb&&he(n,"TYPE","init"),this.P?(he(n,"$req",e),he(n,"SID","null"),i.aa=!0,Gd(i,n,null)):Gd(i,n,e),this.H=2}}else this.H==3&&(t?j0(this,t):this.j.length==0||Dw(this.i)||j0(this))};function j0(t,e){var n;e?n=e.m:n=t.W++;const r=Vn(t.I);he(r,"SID",t.K),he(r,"RID",n),he(r,"AID",t.V),wl(t,r),t.o&&t.s&&Wp(r,t.o,t.s),n=new vl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Hw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Vp(t.i,n),Gd(n,r,e)}function wl(t,e){t.na&&Rp(t.na,function(n,r){he(e,r,n)}),t.h&&Aw({},function(n,r){he(e,r,n)})}function Hw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?et(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const h=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{UR(h,o,"req"+u+"_")}catch{r&&r(h)}}if(l){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Gw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vo||gw(),zo||(Vo(),zo=!0),Lp.add(e,t),t.A=0}}function Gp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=gl(et(t.Ma,t),qw(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,Kw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=gl(et(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),uc(this),Kw(this))};function Kp(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Kw(t){t.g=new vl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Vn(t.wa);he(e,"RID","rpc"),he(e,"SID",t.K),he(e,"AID",t.V),he(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&he(e,"TO",t.qa),he(e,"TYPE","xmlhttp"),wl(t,e),t.o&&t.s&&Wp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=sc(Vn(e)),n.s=null,n.S=!0,Sw(n,t)}x.ib=function(){this.v!=null&&(this.v=null,uc(this),Gp(this),lt(19))};function tu(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Yw(t,e){var n=null;if(t.g==e){tu(t),Kp(t),t.g=null;var r=2}else if(Yd(t.i,e))n=e.F,Mw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Fp(),He(r,new Ew(r,n)),cc(t)}else Gw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&GR(t,e)||r==2&&Gp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Wr(t,5);break;case 4:Wr(t,10);break;case 3:Wr(t,6);break;default:Wr(t,2)}}}function qw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=et(t.pb,t);n||(n=new Qr("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Za(n,"https"),sc(n)),$R(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),Qw(t),Ww(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function Qw(t){if(t.H=0,t.ma=[],t.h){const e=bw(t.i);(e.length!=0||t.j.length!=0)&&(A0(t.ma,e),A0(t.ma,t.j),t.i.i.length=0,kp(t.j),t.j.length=0),t.h.ya()}}function Jw(t,e,n){var r=n instanceof Qr?Vn(n):new Qr(n);if(r.g!="")e&&(r.g=e+"."+r.g),eu(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Qr(null);r&&Za(s,r),e&&(s.g=e),i&&eu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&he(r,n,e),he(r,"VER",t.ra),wl(t,r),r}function Xw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Te(new oc({ob:!0})):new Te(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zw(){}x=Zw.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Wt(t,e){Ue.call(this),this.g=new zw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Uo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Is(this)}$e(Wt,Ue);Wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Jw(t,null,t.Y),cc(t)};Wt.prototype.close=function(){Hp(this.g)};Wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dp(t),t=n);e.j.push(new MR(e.fb++,t)),e.H==3&&cc(e)};Wt.prototype.N=function(){this.g.h=null,delete this.j,Hp(this.g),delete this.g,Wt.$.N.call(this)};function e2(t){$p.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(e2,$p);function t2(){Bp.call(this),this.status=1}$e(t2,Bp);function Is(t){this.g=t}$e(Is,Zw);Is.prototype.Ba=function(){He(this.g,"a")};Is.prototype.Aa=function(t){He(this.g,new e2(t))};Is.prototype.za=function(t){He(this.g,new t2)};Is.prototype.ya=function(){He(this.g,"b")};function KR(){this.blockSize=-1}function Cn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(Cn,KR);Cn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ph(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Cn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ph(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ph(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ph(this,r),i=0;break}}this.h=i,this.i+=e};Cn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var YR={};function Yp(t){return-128<=t&&128>t?tR(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function mn(t){if(isNaN(t)||!isFinite(t))return Yi;if(0>t)return Ve(mn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=qd;return new ie(e,0)}function n2(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ve(n2(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mn(Math.pow(e,8)),r=Yi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=mn(Math.pow(e,s)),r=r.R(s).add(mn(o))):(r=r.R(n),r=r.add(mn(o)))}return r}var qd=4294967296,Yi=Yp(0),Qd=Yp(1),U0=Yp(16777216);x=ie.prototype;x.ea=function(){if(Ft(this))return-Ve(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:qd+r)*e,e*=qd}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(On(this))return"0";if(Ft(this))return"-"+Ve(this).toString(t);for(var e=mn(Math.pow(t,6)),n=this,r="";;){var i=ru(n,e).g;n=nu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,On(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function On(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}x.X=function(t){return t=nu(this,t),Ft(t)?-1:On(t)?0:1};function Ve(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(Qd)}x.abs=function(){return Ft(this)?Ve(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function nu(t,e){return t.add(Ve(e))}x.R=function(t){if(On(this)||On(t))return Yi;if(Ft(this))return Ft(t)?Ve(this).R(Ve(t)):Ve(Ve(this).R(t));if(Ft(t))return Ve(this.R(Ve(t)));if(0>this.X(U0)&&0>t.X(U0))return mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=t.D(i)>>>16,a=t.D(i)&65535;n[2*r+2*i]+=o*a,ta(n,2*r+2*i),n[2*r+2*i+1]+=s*a,ta(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,ta(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,ta(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function ta(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function js(t,e){this.g=t,this.h=e}function ru(t,e){if(On(e))throw Error("division by zero");if(On(t))return new js(Yi,Yi);if(Ft(t))return e=ru(Ve(t),e),new js(Ve(e.g),Ve(e.h));if(Ft(e))return e=ru(t,Ve(e)),new js(Ve(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Qd,r=e;0>=r.X(t);)n=$0(n),r=$0(r);var i=Ci(n,1),s=Ci(r,1);for(r=Ci(r,2),n=Ci(n,2);!On(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ci(r,1),n=Ci(n,1)}return e=nu(t,i.R(e)),new js(i,e)}for(i=Yi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=mn(n),o=s.R(e);Ft(o)||0<o.X(t);)n-=r,s=mn(n),o=s.R(e);On(s)&&(s=Qd),i=i.add(s),t=nu(t,o)}return new js(i,t)}x.gb=function(t){return ru(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function $0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function Ci(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;jp.NO_ERROR=0;jp.TIMEOUT=8;jp.HTTP_ERROR=6;CR.COMPLETE="complete";SR.EventType=ml;ml.OPEN="a";ml.CLOSE="b";ml.ERROR="c";ml.MESSAGE="d";Ue.prototype.listen=Ue.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;Cn.prototype.digest=Cn.prototype.l;Cn.prototype.reset=Cn.prototype.reset;Cn.prototype.update=Cn.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=mn;ie.fromString=n2;var qR=ie;const B0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new dl("@firebase/firestore");function Rt(t,...e){if(iu.logLevel<=ne.DEBUG){const n=e.map(r2);iu.debug(`Firestore (${hc}): ${t}`,...n)}}function qp(t,...e){if(iu.logLevel<=ne.ERROR){const n=e.map(r2);iu.error(`Firestore (${hc}): ${t}`,...n)}}function r2(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t="Unexpected state"){const e=`FIRESTORE (${hc}) INTERNAL ASSERTION FAILED: `+t;throw qp(e),new Error(e)}function Jd(t,e){t||i2()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class kt extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class XR{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new qi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{Rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Jd(typeof r.accessToken=="string"),new QR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Jd(e===null||typeof e=="string"),new ft(e)}}class ZR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Rt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Jd(typeof n.token=="string"),this.R=n.token,new tN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function s2(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,r,i,s,o,l,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class su{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new su("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof su&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V0,Z;(Z=V0||(V0={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new qR([4294967295,4294967295],0);function gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&Rt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Qp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new kt(Tt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lN(t,e){if(qp("AsyncQueue",`${e}: ${t}`),s2(t))return new kt(Tt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=iN.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Rt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Rt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new kt(Tt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lN(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Map;function uN(t,e,n,r){if(e===!0&&r===!0)throw new kt(Tt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new kt(Tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new kt(Tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o2((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new kt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new kt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new kt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cN{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new kt(Tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new kt(Tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JR;switch(r.type){case"firstParty":return new eN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new kt(Tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=z0.get(n);r&&(Rt("ComponentProvider","Removing Datastore"),z0.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new oN(this,"async_queue_retry"),this.iu=()=>{const n=gh();n&&Rt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new qi;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!s2(e))throw e;Rt("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw qp("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Qp.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&i2()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class dN extends cN{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new hN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fN(this),this._firestoreClient.terminate()}}function fN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,a,u,h){return new sN(l,a,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,o2(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new aN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){hc=i})(mi),an(new zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new dN(new XR(r.getProvider("auth-internal")),new nN(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new kt(Tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new su(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),wt(B0,"4.3.2",e),wt(B0,"4.3.2","esm2017")})();function Jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function l2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pN=l2,a2=new pi("auth","Firebase",l2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new dl("@firebase/auth");function gN(t,...e){ou.logLevel<=ne.WARN&&ou.warn(`Auth (${mi}): ${t}`,...e)}function va(t,...e){ou.logLevel<=ne.ERROR&&ou.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Xp(t,...e)}function wn(t,...e){return Xp(t,...e)}function u2(t,e,n){const r=Object.assign(Object.assign({},pN()),{[e]:n});return new pi("auth","Firebase",r).create(e,{appName:t.name})}function c2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ht(t,"argument-error"),u2(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return a2.create(t,...e)}function z(t,e,...n){if(!t)throw Xp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw va(e),new Error(e)}function zn(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mN(){return H0()==="http:"||H0()==="https:"}function H0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mN()||G1()||"connection"in navigator)?navigator.onLine:!0}function yN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=Cp()||K1()}get(){return vN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new El(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dr(t,e,n,r,i={}){return d2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Es(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),h2.fetch()(f2(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function d2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_N),e);try{const i=new CN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw na(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw na(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw na(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw u2(t,h,u);Ht(t,h)}}catch(i){if(i instanceof un)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function Cl(t,e,n,r,i={}){const s=await Dr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function f2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zp(t.config,i):`${t.config.apiScheme}://${i}`}function EN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),wN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}function G0(t){return t!==void 0&&t.enterprise!==void 0}class SN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function IN(t,e){return Dr(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(t,e){return Dr(t,"POST","/v1/accounts:delete",e)}async function kN(t,e){return Dr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AN(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=eg(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:co(mh(i.auth_time)),issuedAtTime:co(mh(i.iat)),expirationTime:co(mh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mh(t){return Number(t)*1e3}function eg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return va("JWT malformed, contained fewer than 3 sections"),null;try{const i=qa(n);return i?JSON.parse(i):(va("Failed to decode base64 JWT payload"),null)}catch(i){return va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function RN(t){const e=eg(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&NN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yo(t,kN(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DN(s.providerUserInfo):[],l=ON(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new p2(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function PN(t){const e=qe(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ON(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DN(t){return t.map(e=>{var{providerId:n}=e,r=Jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e){const n=await d2(t,{},async()=>{const r=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=f2(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",h2.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MN(t,e){return Dr(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qo;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new p2(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Yo(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AN(this,e)}reload(){return PN(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yo(this,TN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:E,isAnonymous:N,providerData:L,stsTokenManager:D}=n;z(y&&D,e,"internal-error");const b=qo.fromJSON(this.name,D);z(typeof y=="string",e,"internal-error"),Yn(c,e.name),Yn(d,e.name),z(typeof E=="boolean",e,"internal-error"),z(typeof N=="boolean",e,"internal-error"),Yn(p,e.name),Yn(v,e.name),Yn(w,e.name),Yn(I,e.name),Yn(m,e.name),Yn(f,e.name);const q=new Jr({uid:y,auth:e,email:d,emailVerified:E,displayName:c,isAnonymous:N,photoURL:v,phoneNumber:p,tenantId:w,stsTokenManager:b,createdAt:m,lastLoginAt:f});return L&&Array.isArray(L)&&(q.providerData=L.map(H=>Object.assign({},H))),I&&(q._redirectEventId=I),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new qo;i.updateFromServerResponse(n);const s=new Jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Map;function Ln(t){zn(t instanceof Function,"Expected a class definition");let e=K0.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,K0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g2.type="NONE";const Y0=g2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qi(Ln(Y0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ln(Y0);const o=ya(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const c=Jr._fromJSON(e,h);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Qi(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w2(e))return"Blackberry";if(E2(e))return"Webos";if(tg(e))return"Safari";if((e.includes("chrome/")||v2(e))&&!e.includes("edge/"))return"Chrome";if(_2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function m2(t=rt()){return/firefox\//i.test(t)}function tg(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v2(t=rt()){return/crios\//i.test(t)}function y2(t=rt()){return/iemobile/i.test(t)}function _2(t=rt()){return/android/i.test(t)}function w2(t=rt()){return/blackberry/i.test(t)}function E2(t=rt()){return/webos/i.test(t)}function dc(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bN(t=rt()){var e;return dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FN(){return Ak()&&document.documentMode===10}function C2(t=rt()){return dc(t)||_2(t)||E2(t)||w2(t)||/windows phone/i.test(t)||y2(t)}function jN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t,e=[]){let n;switch(t){case"Browser":n=q0(rt());break;case"Worker":n=`${q0(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,e={}){return Dr(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=6;class VN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Q0(this),this.idTokenSubscription=new Q0(this),this.beforeStateQueue=new UN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $N(this),n=new VN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gn(t){return qe(t)}class Q0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mk(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function I2(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WN().appendChild(r)})}function HN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const GN="https://www.google.com/recaptcha/enterprise.js?render=",KN="recaptcha-enterprise",YN="NO_RECAPTCHA";class qN{constructor(e){this.type=KN,this.auth=Gn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{IN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new SN(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;G0(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(YN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&G0(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}I2(GN+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function J0(t,e,n,r=!1){const i=new qN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Zd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await J0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await J0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t,e){const n=gi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fo(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function JN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XN(t,e,n){const r=Gn(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=T2(e),{host:o,port:l}=ZN(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||e3()}function T2(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZN(t){const e=T2(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:X0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:X0(o)}}}function X0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function e3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function t3(t,e){return Dr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n3(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r3(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function i3(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends ng{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,n,"signInWithPassword",n3);case"emailLink":return r3(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,r,"signUpPassword",t3);case"emailLink":return i3(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3="http://localhost";class si extends ng{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ji(e,n)}buildRequest(){const e={requestUri:s3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l3(t){const e=Qs(Js(t)).link,n=e?Qs(Js(e)).deep_link_id:null,r=Qs(Js(t)).deep_link_id;return(r?Qs(Js(r)).link:null)||r||n||e||t}class rg{constructor(e){var n,r,i,s,o,l;const a=Qs(Js(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,h=(r=a.oobCode)!==null&&r!==void 0?r:null,c=o3((i=a.mode)!==null&&i!==void 0?i:null);z(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=l3(e);try{return new rg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.providerId=Ts.PROVIDER_ID}static credential(e,n){return Qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rg.parseLink(n);return z(r,"argument-error"),Qo._fromEmailAndCode(e,r.code,r.tenantId)}}Ts.PROVIDER_ID="password";Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Sl{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Sl{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Sl{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a3(t,e){return Cl(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jr._fromIdTokenResponse(e,r,i),o=Z0(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Z0(r);return new oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Z0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends un{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new au(e,n,r,i)}}function k2(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?au._fromErrorAndOperation(t,s,e,r):s})}async function u3(t,e,n=!1){const r=await Yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c3(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Yo(t,k2(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=eg(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(t,e,n=!1){const r="signIn",i=await k2(t,r,e),s=await oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function h3(t,e){return A2(Gn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(t){const e=Gn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function d3(t,e,n){const r=Gn(t),o=await Zd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",a3).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&R2(t),a}),l=await oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function f3(t,e,n){return h3(qe(t),Ts.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&R2(t),r})}function p3(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function g3(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function N2(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function m3(t){return qe(t).signOut()}const uu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uu,"1"),this.storage.removeItem(uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v3(){const t=rt();return tg(t)||dc(t)}const y3=1e3,_3=10;class P2 extends x2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=v3()&&jN(),this.fallbackToPolling=C2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_3):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},y3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P2.type="LOCAL";const w3=P2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2 extends x2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O2.type="SESSION";const D2=O2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E3(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await E3(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=ig("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function S3(t){En().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function I3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function k3(){return L2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="firebaseLocalStorageDb",A3=1,cu="firebaseLocalStorage",b2="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gc(t,e){return t.transaction([cu],e?"readwrite":"readonly").objectStore(cu)}function R3(){const t=indexedDB.deleteDatabase(M2);return new Il(t).toPromise()}function ef(){const t=indexedDB.open(M2,A3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cu,{keyPath:b2})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cu)?e(r):(r.close(),await R3(),e(await ef()))})})}async function ev(t,e,n){const r=gc(t,!0).put({[b2]:e,value:n});return new Il(r).toPromise()}async function N3(t,e){const n=gc(t,!1).get(e),r=await new Il(n).toPromise();return r===void 0?null:r.value}function tv(t,e){const n=gc(t,!0).delete(e);return new Il(n).toPromise()}const x3=800,P3=3;class F2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ef(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>P3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(k3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await I3(),!this.activeServiceWorker)return;this.sender=new C3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ef();return await ev(e,uu,"1"),await tv(e,uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ev(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gc(i,!1).getAll();return new Il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F2.type="LOCAL";const O3=F2;new El(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){return e?Ln(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends ng{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D3(t){return A2(t.auth,new og(t),t.bypassAuthState)}function L3(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),c3(n,new og(t),t.bypassAuthState)}async function M3(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),u3(n,new og(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D3;case"linkViaPopup":case"linkViaRedirect":return M3;case"reauthViaPopup":case"reauthViaRedirect":return L3;default:Ht(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b3=new El(2e3,1e4);async function F3(t,e,n){const r=Gn(t);c2(t,e,fc);const i=sg(r,n);return new Hr(r,"signInViaPopup",e,i).executeNotNull()}class Hr extends j2{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=ig();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b3.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j3="pendingRedirect",_a=new Map;class U3 extends j2{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await $3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $3(t,e){const n=$2(e),r=U2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function B3(t,e){return U2(t)._set($2(e),"true")}function V3(t,e){_a.set(t._key(),e)}function U2(t){return Ln(t._redirectPersistence)}function $2(t){return ya(j3,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z3(t,e,n){return W3(t,e,n)}async function W3(t,e,n){const r=Gn(t);c2(t,e,fc),await r._initializationPromise;const i=sg(r,n);return await B3(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function H3(t,e,n=!1){const r=Gn(t),i=sg(r,e),o=await new U3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G3=10*60*1e3;class K3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B2(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G3&&this.cachedEventUids.clear(),this.cachedEventUids.has(nv(e))}saveEventToCache(e){this.cachedEventUids.add(nv(e)),this.lastProcessedEventTime=Date.now()}}function nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B2(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q3(t,e={}){return Dr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J3=/^https?/;async function X3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await q3(t);for(const n of e)try{if(Z3(n))return}catch{}Ht(t,"unauthorized-domain")}function Z3(t){const e=Xd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!J3.test(n))return!1;if(Q3.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new El(3e4,6e4);function rv(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tx(t){return new Promise((e,n)=>{var r,i,s;function o(){rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rv(),n(wn(t,"network-request-failed"))},timeout:ex.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const l=HN("iframefcb");return En()[l]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},I2(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw wa=null,e})}let wa=null;function nx(t){return wa=wa||tx(t),wa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new El(5e3,15e3),ix="__/auth/iframe",sx="emulator/auth/iframe",ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ax(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zp(e,sx):`https://${t.config.authDomain}/${ix}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=lx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Es(r).slice(1)}`}async function ux(t){const e=await nx(t),n=En().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:ax(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ox,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),l=En().setTimeout(()=>{s(o)},rx.get());function a(){En().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hx=500,dx=600,fx="_blank",px="http://localhost";class iv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gx(t,e,n,r=hx,i=dx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},cx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(l=v2(u)?fx:n),m2(u)&&(e=e||px,a.scrollbars="yes");const h=Object.entries(a).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(bN(u)&&l!=="_self")return mx(e||"",l),new iv(null);const c=window.open(e||"",l,h);z(c,t,"popup-blocked");try{c.focus()}catch{}return new iv(c)}function mx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="__/auth/handler",yx="emulator/auth/handler",_x=encodeURIComponent("fac");async function sv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof fc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Md(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries(s||{}))o[h]=c}if(e instanceof Sl){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${_x}=${encodeURIComponent(a)}`:"";return`${wx(t)}?${Es(l).slice(1)}${u}`}function wx({config:t}){return t.emulator?Zp(t,yx):`https://${t.authDomain}/${vx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="webStorageSupport";class Ex{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D2,this._completeRedirectFn=H3,this._overrideRedirectResult=V3}async _openPopup(e,n,r,i){var s;zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sv(e,n,r,Xd(),i);return gx(e,o,ig())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sv(e,n,r,Xd(),i);return S3(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ux(e),r=new K3(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vh,{type:vh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vh];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=X3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C2()||tg()||dc()}}const Cx=Ex;var ov="@firebase/auth",lv="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tx(t){an(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S2(t)},u=new zN(r,i,s,a);return JN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new zt("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new Sx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(ov,lv,Ix(t)),wt(ov,lv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=5*60,Ax=H1("authIdTokenMaxAge")||kx;let av=null;const Rx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ax)return;const i=n==null?void 0:n.token;av!==i&&(av=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nx(t=Ip()){const e=gi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QN(t,{popupRedirectResolver:Cx,persistence:[O3,w3,D2]}),r=H1("authTokenSyncURL");if(r){const s=Rx(r);g3(n,s,()=>s(n.currentUser)),p3(n,o=>s(o))}const i=z1("auth");return i&&XN(n,`http://${i}`),n}Tx("Browser");var xx="firebase",Px="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(xx,Px,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ox(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(h){try{u(r.next(h))}catch(c){o(c)}}function a(h){try{u(r.throw(h))}catch(c){o(c)}}function u(h){h.done?s(h.value):i(h.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function Dx(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(h){return a([u,h])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(h){u=[6,h],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ji=function(){return ji=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ji.apply(this,arguments)},V2=function(t){return{loading:t==null,value:t}},Lx=function(){return function(t,e){switch(e.type){case"error":return ji(ji({},t),{error:e.error,loading:!1,value:void 0});case"reset":return V2(e.defaultValue);case"value":return ji(ji({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Mx=function(t){var e=t?t():void 0,n=T.useReducer(Lx(),V2(e)),r=n[0],i=n[1],s=T.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=T.useCallback(function(a){i({type:"error",error:a})},[]),l=T.useCallback(function(a){i({type:"value",value:a})},[]);return T.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},bx=function(t,e){var n=Mx(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return T.useEffect(function(){var a=N2(t,function(u){return Ox(void 0,void 0,void 0,function(){var h;return Dx(this,function(c){switch(c.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return c.sent(),[3,4];case 3:return h=c.sent(),s(h),[3,4];case 4:return o(u),[2]}})})},s);return function(){a()}},[t]),[l,i,r]};const Fx=(t,e)=>e.some(n=>t instanceof n);let uv,cv;function jx(){return uv||(uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ux(){return cv||(cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z2=new WeakMap,tf=new WeakMap,W2=new WeakMap,yh=new WeakMap,lg=new WeakMap;function $x(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&z2.set(n,t)}).catch(()=>{}),lg.set(e,t),e}function Bx(t){if(tf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tf.set(t,e)}let nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vx(t){nf=t(nf)}function zx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_h(this),e,...n);return W2.set(r,e.sort?e.sort():[e]),vr(r)}:Ux().includes(t)?function(...e){return t.apply(_h(this),e),vr(z2.get(this))}:function(...e){return vr(t.apply(_h(this),e))}}function Wx(t){return typeof t=="function"?zx(t):(t instanceof IDBTransaction&&Bx(t),Fx(t,jx())?new Proxy(t,nf):t)}function vr(t){if(t instanceof IDBRequest)return $x(t);if(yh.has(t))return yh.get(t);const e=Wx(t);return e!==t&&(yh.set(t,e),lg.set(e,t)),e}const _h=t=>lg.get(t);function Hx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(vr(o.result),a.oldVersion,a.newVersion,vr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Gx=["get","getKey","getAll","getAllKeys","count"],Kx=["put","add","delete","clear"],wh=new Map;function hv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wh.get(e))return wh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Kx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gx.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return wh.set(e,s),s}Vx(t=>({...t,get:(e,n,r)=>hv(e,n)||t.get(e,n,r),has:(e,n)=>!!hv(e,n)||t.has(e,n)}));const H2="@firebase/installations",ag="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=1e4,K2=`w:${ag}`,Y2="FIS_v2",Yx="https://firebaseinstallations.googleapis.com/v1",qx=60*60*1e3,Qx="installations",Jx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},li=new pi(Qx,Jx,Xx);function q2(t){return t instanceof un&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2({projectId:t}){return`${Yx}/projects/${t}/installations`}function J2(t){return{token:t.token,requestStatus:2,expiresIn:eP(t.expiresIn),creationTime:Date.now()}}async function X2(t,e){const r=(await e.json()).error;return li.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Z2({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Zx(t,{refreshToken:e}){const n=Z2(t);return n.append("Authorization",tP(e)),n}async function eE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eP(t){return Number(t.replace("s","000"))}function tP(t){return`${Y2} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Q2(t),i=Z2(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Y2,appId:t.appId,sdkVersion:K2},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await eE(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:J2(u.authToken)}}else throw await X2("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/^[cdef][\w-]{21}$/,rf="";function sP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oP(t);return iP.test(n)?n:rf}catch{return rf}}function oP(t){return rP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new Map;function rE(t,e){const n=mc(t);iE(n,e),lP(n,e)}function iE(t,e){const n=nE.get(t);if(n)for(const r of n)r(e)}function lP(t,e){const n=aP();n&&n.postMessage({key:t,fid:e}),uP()}let Gr=null;function aP(){return!Gr&&"BroadcastChannel"in self&&(Gr=new BroadcastChannel("[Firebase] FID Change"),Gr.onmessage=t=>{iE(t.data.key,t.data.fid)}),Gr}function uP(){nE.size===0&&Gr&&(Gr.close(),Gr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="firebase-installations-database",hP=1,ai="firebase-installations-store";let Eh=null;function ug(){return Eh||(Eh=Hx(cP,hP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ai)}}})),Eh}async function hu(t,e){const n=mc(t),i=(await ug()).transaction(ai,"readwrite"),s=i.objectStore(ai),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&rE(t,e.fid),e}async function sE(t){const e=mc(t),r=(await ug()).transaction(ai,"readwrite");await r.objectStore(ai).delete(e),await r.done}async function vc(t,e){const n=mc(t),i=(await ug()).transaction(ai,"readwrite"),s=i.objectStore(ai),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&rE(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t){let e;const n=await vc(t.appConfig,r=>{const i=dP(r),s=fP(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===rf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dP(t){const e=t||{fid:sP(),registrationStatus:0};return oE(e)}function fP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(li.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gP(t)}:{installationEntry:e}}async function pP(t,e){try{const n=await nP(t,e);return hu(t.appConfig,n)}catch(n){throw q2(n)&&n.customData.serverCode===409?await sE(t.appConfig):await hu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gP(t){let e=await dv(t.appConfig);for(;e.registrationStatus===1;)await tE(100),e=await dv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await cg(t);return r||n}return e}function dv(t){return vc(t,e=>{if(!e)throw li.create("installation-not-found");return oE(e)})}function oE(t){return mP(t)?{fid:t.fid,registrationStatus:0}:t}function mP(t){return t.registrationStatus===1&&t.registrationTime+G2<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP({appConfig:t,heartbeatServiceProvider:e},n){const r=yP(t,n),i=Zx(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:K2,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await eE(()=>fetch(r,l));if(a.ok){const u=await a.json();return J2(u)}else throw await X2("Generate Auth Token",a)}function yP(t,{fid:e}){return`${Q2(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(t,e=!1){let n;const r=await vc(t.appConfig,s=>{if(!lE(s))throw li.create("not-registered");const o=s.authToken;if(!e&&EP(o))return s;if(o.requestStatus===1)return n=_P(t,e),s;{if(!navigator.onLine)throw li.create("app-offline");const l=SP(s);return n=wP(t,l),l}});return n?await n:r.authToken}async function _P(t,e){let n=await fv(t.appConfig);for(;n.authToken.requestStatus===1;)await tE(100),n=await fv(t.appConfig);const r=n.authToken;return r.requestStatus===0?hg(t,e):r}function fv(t){return vc(t,e=>{if(!lE(e))throw li.create("not-registered");const n=e.authToken;return IP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wP(t,e){try{const n=await vP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await hu(t.appConfig,r),n}catch(n){if(q2(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hu(t.appConfig,r)}throw n}}function lE(t){return t!==void 0&&t.registrationStatus===2}function EP(t){return t.requestStatus===2&&!CP(t)}function CP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qx}function SP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function IP(t){return t.requestStatus===1&&t.requestTime+G2<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t){const e=t,{installationEntry:n,registrationPromise:r}=await cg(e);return r?r.catch(console.error):hg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e=!1){const n=t;return await AP(n),(await hg(n,e)).token}async function AP(t){const{registrationPromise:e}=await cg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){if(!t||!t.options)throw Ch("App Configuration");if(!t.name)throw Ch("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ch(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ch(t){return li.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="installations",NP="installations-internal",xP=t=>{const e=t.getProvider("app").getImmediate(),n=RP(e),r=gi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PP=t=>{const e=t.getProvider("app").getImmediate(),n=gi(e,aE).getImmediate();return{getId:()=>TP(n),getToken:i=>kP(n,i)}};function OP(){an(new zt(aE,xP,"PUBLIC")),an(new zt(NP,PP,"PRIVATE"))}OP();wt(H2,ag);wt(H2,ag,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="analytics",DP="firebase_id",LP="origin",MP=60*1e3,bP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new dl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new pi("analytics","Analytics",FP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){if(!t.startsWith(dg)){const e=xt.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function uE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function UP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $P(t,e){const n=UP("firebase-js-sdk-policy",{createScriptURL:jP}),r=document.createElement("script"),i=`${dg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function BP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VP(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await uE(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){Et.error(l)}t("config",i,s)}async function zP(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await uE(n);for(const a of o){const u=l.find(c=>c.measurementId===a),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Et.error(s)}}function WP(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await zP(t,e,n,l,a)}else if(s==="config"){const[l,a]=o;await VP(t,e,n,r,l,a)}else if(s==="consent"){const[l]=o;t("consent","update",l)}else if(s==="get"){const[l,a,u]=o;t("get",l,a,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Et.error(l)}}return i}function HP(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=WP(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function GP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(dg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=30,YP=1e3;class qP{constructor(e={},n=YP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const cE=new qP;function QP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function JP(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:QP(r)},s=bP.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function XP(t,e=cE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new t4;return setTimeout(async()=>{l.abort()},n!==void 0?n:MP),hE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function hE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=cE){var s;const{appId:o,measurementId:l}=t;try{await ZP(r,e)}catch(a){if(l)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await JP(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!e4(u)){if(i.deleteThrottleMetadata(o),l)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?_0(n,i.intervalMillis,KP):_0(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,c),Et.debug(`Calling attemptFetch again in ${h} millis`),hE(t,c,r,i)}}function ZP(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function e4(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class t4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function n4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r4(){if(q1())try{await Q1()}catch(t){return Et.warn(xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function i4(t,e,n,r,i,s,o){var l;const a=XP(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Et.error(p)),e.push(a);const u=r4().then(p=>{if(p)return r.getId()}),[h,c]=await Promise.all([a,u]);GP(s)||$P(s,h.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[LP]="firebase",d.update=!0,c!=null&&(d[DP]=c),i("config",h.measurementId,d),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.app=e}_delete(){return delete ho[this.app.options.appId],Promise.resolve()}}let ho={},pv=[];const gv={};let Sh="dataLayer",o4="gtag",mv,dE,vv=!1;function l4(){const t=[];if(G1()&&t.push("This is a browser extension environment."),Rk()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function a4(t,e,n){l4();const r=t.options.appId;if(!r)throw xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(ho[r]!=null)throw xt.create("already-exists",{id:r});if(!vv){BP(Sh);const{wrappedGtag:s,gtagCore:o}=HP(ho,pv,gv,Sh,o4);dE=s,mv=o,vv=!0}return ho[r]=i4(t,pv,gv,e,mv,Sh,n),new s4(t)}function u4(t=Ip()){t=qe(t);const e=gi(t,du);return e.isInitialized()?e.getImmediate():c4(t)}function c4(t,e={}){const n=gi(t,du);if(n.isInitialized()){const i=n.getImmediate();if(Fo(e,n.getOptions()))return i;throw xt.create("already-initialized")}return n.initialize({options:e})}function h4(t,e,n,r){t=qe(t),n4(dE,ho[t.app.options.appId],e,n,r).catch(i=>Et.error(i))}const yv="@firebase/analytics",_v="0.10.0";function d4(){an(new zt(du,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return a4(r,i,n)},"PUBLIC")),an(new zt("analytics-internal",t,"PRIVATE")),wt(yv,_v),wt(yv,_v,"esm2017");function t(e){try{const n=e.getProvider(du).getImmediate();return{logEvent:(r,i,s)=>h4(n,r,i,s)}}catch(n){throw xt.create("interop-component-reg-failed",{reason:n})}}}d4();var wv={};const Ev="@firebase/database",Cv="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fE="";function f4(t){fE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new p4(e)}}catch{}return new g4},Kr=pE("localStorage"),sf=pE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new dl("@firebase/database"),m4=function(){let t=1;return function(){return t++}}(),gE=function(t){const e=jk(t),n=new Lk;n.update(e);const r=n.digest();return wp.encodeByteArray(r)},Tl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Tl.apply(null,r):typeof r=="object"?e+=Oe(r):e+=r,e+=" "}return e};let Xr=null,Sv=!0;const v4=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xi.logLevel=ne.VERBOSE,Xr=Xi.log.bind(Xi),e&&sf.set("logging_enabled",!0)):typeof t=="function"?Xr=t:(Xr=null,sf.remove("logging_enabled"))},ze=function(...t){if(Sv===!0&&(Sv=!1,Xr===null&&sf.get("logging_enabled")===!0&&v4(!0)),Xr){const e=Tl.apply(null,t);Xr(e)}},kl=function(t){return function(...e){ze(t,...e)}},of=function(...t){const e="FIREBASE INTERNAL ERROR: "+Tl(...t);Xi.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${Tl(...t)}`;throw Xi.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+Tl(...t);Xi.warn(e)},y4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},us="[MIN_NAME]",ui="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===us||e===ui)return-1;if(e===us||t===ui)return 1;{const n=Iv(t),r=Iv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},w4=function(t,e){return t===e?0:t<e?-1:1},Us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},pg=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Oe(e[r]),n+=":",n+=pg(t[e[r]]);return n+="}",n},mE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vE=function(t){R(!fg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},E4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},C4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function S4(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const I4=new RegExp("^-?(0*)\\d{1,10}$"),T4=-2147483648,k4=2147483647,Iv=function(t){if(I4.test(t)){const e=Number(t);if(e>=T4&&e<=k4)return e}return null},ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},A4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class Zi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="5",yE="v",_E="s",wE="r",EE="f",CE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,SE="ls",IE="p",lf="ac",TE="websocket",kE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function x4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function RE(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===TE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);x4(t)&&(n.ns=t.namespace);const i=[];return Ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _k(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih={},Th={};function mg(t){const e=t.toString();return Ih[e]||(Ih[e]=new P4),Ih[e]}function O4(t,e){const n=t.toString();return Th[n]||(Th[n]=e()),Th[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ks(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="start",L4="close",M4="pLPCommand",b4="pRTLPCB",NE="id",xE="pw",PE="ser",F4="cb",j4="seg",U4="ts",$4="d",B4="dframe",OE=1870,DE=30,V4=OE-DE,z4=25e3,W4=3e4;class Ui{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kl(e),this.stats_=mg(n),this.urlFn=a=>(this.appCheckToken&&(a[lf]=this.appCheckToken),RE(n,kE,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new D4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(W4)),_4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vg((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Tv)this.id=l,this.password=a;else if(o===L4)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Tv]="t",r[PE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[F4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[yE]=gg,this.transportSessionId&&(r[_E]=this.transportSessionId),this.lastSessionId&&(r[SE]=this.lastSessionId),this.applicationId&&(r[IE]=this.applicationId),this.appCheckToken&&(r[lf]=this.appCheckToken),typeof location<"u"&&location.hostname&&CE.test(location.hostname)&&(r[wE]=EE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ui.forceAllow_=!0}static forceDisallow(){Ui.forceDisallow_=!0}static isAvailable(){return Ui.forceAllow_?!0:!Ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!E4()&&!C4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=B1(n),i=mE(r,V4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[B4]="t",r[NE]=e,r[xE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=m4(),window[M4+this.uniqueCallbackIdentifier]=e,window[b4+this.uniqueCallbackIdentifier]=n,this.myIFrame=vg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ze("frame writing exception"),l.stack&&ze(l.stack),ze(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[NE]=this.myID,e[xE]=this.myPW,e[PE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DE+r.length<=OE;){const o=this.pendingSegs.shift();r=r+"&"+j4+i+"="+o.seg+"&"+U4+i+"="+o.ts+"&"+$4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(z4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H4=16384,G4=45e3;let fu=null;typeof MozWebSocket<"u"?fu=MozWebSocket:typeof WebSocket<"u"&&(fu=WebSocket);class en{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kl(this.connId),this.stats_=mg(n),this.connURL=en.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[yE]=gg,typeof location<"u"&&location.hostname&&CE.test(location.hostname)&&(o[wE]=EE),n&&(o[_E]=n),r&&(o[SE]=r),i&&(o[lf]=i),s&&(o[IE]=s),RE(e,TE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kr.set("previous_websocket_failure",!0);try{let r;Y1(),this.mySock=new fu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&fu!==null&&!en.forceDisallow_}static previouslyFailed(){return Kr.isInMemoryStorage||Kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=bo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mE(n,H4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(G4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ui,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let r=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const i=this.transports_=[];for(const s of Jo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=6e4,Y4=5e3,q4=10*1024,Q4=100*1024,kh="t",kv="d",J4="s",Av="r",X4="e",Rv="o",Nv="a",xv="n",Pv="p",Z4="h";class e5{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kl("c:"+this.id+":"),this.transportManager_=new Jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Q4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>q4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(kh in e){const n=e[kh];n===Nv?this.upgradeIfSecondaryHealthy_():n===Av?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Us("t",e),r=Us("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Us("t",e),r=Us("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Us(kh,e);if(kv in e){const r=e[kv];if(n===Z4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===xv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===J4?this.onConnectionShutdown_(r):n===Av?this.onReset_(r):n===X4?of("Server Error: "+r):n===Rv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):of("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gg!==r&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(K4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Y4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends ME{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pu}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=32,Dv=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new se("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cr(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function yg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function t5(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function bE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function we(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function at(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return at(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function n5(t,e){const n=Xo(t,0),r=Xo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=vi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function _g(t,e){if(Cr(t)!==Cr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cr(t)>Cr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class r5{constructor(e,n){this.errorPrefix_=n,this.parts_=Xo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Qu(this.parts_[r]);FE(this)}}function i5(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qu(e),FE(t)}function s5(t){const e=t.parts_.pop();t.byteLength_-=Qu(e),t.parts_.length>0&&(t.byteLength_-=1)}function FE(t){if(t.byteLength_>Dv)throw new Error(t.errorPrefix_+"has a key path longer than "+Dv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ov)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ov+") or object contains a cycle "+jr(t))}function jr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends ME{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new wg}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=1e3,o5=60*5*1e3,Lv=30*1e3,l5=1.3,a5=3e4,u5="server_kill",Mv=3;class Fn extends LE{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Fn.nextPersistentConnectionId_++,this.log_=kl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$s,this.maxReconnectDelay_=o5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Y1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Oe(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new hl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Fn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const r=as(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Dk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ok(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):of("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a5&&(this.reconnectDelay_=$s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*l5)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ze("getToken() completed but was canceled"):(ze("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new e5(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{ct(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(u5)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ct(c),a())}}}interrupt(e){ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Md(this.interruptReasons_)&&(this.reconnectDelay_=$s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>pg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mv&&(this.reconnectDelay_=Lv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fE.replace(/\./g,"-")]=1,Cp()?e["framework.cordova"]=1:K1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pu.getInstance().currentlyOnline();return Md(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Y(us,e),i=new Y(us,n);return this.compare(r,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;class jE extends yc{static get __EMPTY_NODE(){return ra}static set __EMPTY_NODE(e){ra=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(ui,ra)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,ra)}toString(){return".key"}}const es=new jE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??mt.EMPTY_NODE,this.right=s??mt.EMPTY_NODE}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class c5{copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ia(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ia(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new c5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h5(t,e){return vi(t.name,e.name)}function Eg(t,e){return vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af;function d5(t){af=t}const UE=function(t){return typeof t=="number"?"number:"+vE(t):"string:"+t},$E=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else R(t===af||t.isEmpty(),"priority of unexpected type.");R(t===af||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bv;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$E(this.priorityNode_)}static set __childrenNodeConstructor(e){bv=e}static get __childrenNodeConstructor(){return bv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:K(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Cr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+UE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vE(this.value_):e+=this.value_,this.lazyHash_=gE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),s=Le.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BE,VE;function f5(t){BE=t}function p5(t){VE=t}class g5 extends yc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(ui,new Le("[PRIORITY-POST]",VE))}makePost(e,n){const r=BE(e);return new Y(n,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new g5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m5=Math.log(2);class v5{constructor(e){const n=s=>parseInt(Math.log(s)/m5,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gu=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let c,d;if(h===0)return null;if(h===1)return c=t[a],d=n?n(c):c,new be(d,c.node,be.BLACK,null,null);{const p=parseInt(h/2,10)+a,v=i(a,p),w=i(p+1,u);return c=t[p],d=n?n(c):c,new be(d,c.node,be.BLACK,v,w)}},s=function(a){let u=null,h=null,c=t.length;const d=function(v,w){const I=c-v,m=c;c-=v;const f=i(I+1,m),y=t[I],E=n?n(y):y;p(new be(E,y.node,w,null,f))},p=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),I=Math.pow(2,a.count-(v+1));w?d(I,be.BLACK):(d(I,be.BLACK),d(I,be.RED))}return h},o=new v5(t.length),l=s(o);return new mt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ah;const Si={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Si&&Ee,"ChildrenNode.ts has not been loaded"),Ah=Ah||new Mn({".priority":Si},{".priority":Ee}),Ah}get(e){const n=as(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==es,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Y.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=gu(r,e.getCompare()):l=Si;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Mn(h,u)}addToIndexes(e,n){const r=Qa(this.indexes_,(i,s)=>{const o=as(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Si)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(Y.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),gu(l,o.getCompare())}else return Si;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new Y(e.name,l))),a.insert(e,e.node)}});return new Mn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Qa(this.indexes_,i=>{if(i===Si)return i;{const s=n.get(e.name);return s?i.remove(new Y(e.name,s)):i}});return new Mn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;class ${constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$E(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bs||(Bs=new $(new mt(Eg),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bs}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bs:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Y(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bs:this.priorityNode_;return new $(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{R(K(e)!==".priority"||Cr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,l)=>{n[o]=l.val(e),r++,s&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+UE(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Y(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Al?-1:0}withIndex(e){if(e===es||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===es||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===es?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class y5 extends ${constructor(){super(new mt(Eg),$.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Al=new y5;Object.defineProperties(Y,{MIN:{value:new Y(us,$.EMPTY_NODE)},MAX:{value:new Y(ui,Al)}});jE.__EMPTY_NODE=$.EMPTY_NODE;Le.__childrenNodeConstructor=$;d5(Al);p5(Al);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5=!0;function Pe(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Pe(e))}if(!(t instanceof Array)&&_5){const n=[];let r=!1;if(Ke(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new Y(o,a)))}}),n.length===0)return $.EMPTY_NODE;const s=gu(n,h5,o=>o.name,Eg);if(r){const o=gu(n,Ee.getCompare());return new $(s,Pe(e),new Mn({".priority":o},{".priority":Ee}))}else return new $(s,Pe(e),Mn.Default)}else{let n=$.EMPTY_NODE;return Ke(t,(r,i)=>{if(Sn(t,r)&&r.substring(0,1)!=="."){const s=Pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Pe(e))}}f5(Pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5 extends yc{constructor(e){super(),this.indexPath_=e,R(!Q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vi(e.name,n.name):s}makePost(e,n){const r=Pe(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,r);return new Y(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Al);return new Y(ui,e)}toString(){return Xo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5 extends yc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const r=Pe(e);return new Y(n,r)}toString(){return".value"}}const C5=new E5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){return{type:"value",snapshotNode:t}}function cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function el(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function S5(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Zo(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(cs(n,r)):o.trackChildChange(el(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Zo(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(el(i,s,o))}else r.trackChildChange(cs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.indexedFilter_=new Cg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tl.getStartPost_(e),this.endPost_=tl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Y(n,r))||(r=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,l)=>{s.matches(new Y(o,l))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new tl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Y(n,r))||(r=$.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,p)=>c(p,d)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new Y(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,a);if(h&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(el(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Zo(n,c));const w=l.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(cs(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return r.isEmpty()?e:h&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Zo(u.name,u.node)),s.trackChildChange(cs(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,$.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:us}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ui}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Sg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function T5(t){return t.loadsAllData()?new Cg(t.getIndex()):t.hasLimit()?new I5(t):new tl(t)}function Fv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===C5?n="$value":t.index_===es?n="$key":(R(t.index_ instanceof w5,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Oe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Oe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Oe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends LE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=kl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=mu.getListenId_(e,r),l={};this.listens_[o]=l;const a=Fv(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),as(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=mu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Fv(e._queryParams),r=e._path.toString(),i=new hl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Es(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=bo(l.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){return{value:null,children:new Map}}function WE(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,vu());const i=t.children.get(r);e=le(e),WE(i,e,n)}}function uf(t,e,n){t.value!==null?n(e,t.value):A5(t,(r,i)=>{const s=new se(e.toString()+"/"+r);uf(i,s,n)})}function A5(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R5{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=10*1e3,N5=30*1e3,x5=5*60*1e3;class P5{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new R5(e);const r=Uv+(N5-Uv)*Math.random();fo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ke(e,(i,s)=>{s>0&&Sn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),fo(this.reportStats_.bind(this),Math.floor(Math.random()*2*x5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function Ig(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=Ig()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new yu(te(),n,this.revert)}}else return R(K(this.path)===e,"operationForChild called for unrelated child."),new yu(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new nl(this.source,te()):new nl(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return Q(this.path)?new ci(this.source,te(),this.snap.getImmediateChild(e)):new ci(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new ci(this.source,te(),n.value):new hs(this.source,te(),n)}else return R(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function D5(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(S5(o.childName,o.snapshotNode))}),Vs(t,i,"child_removed",e,r,n),Vs(t,i,"child_added",e,r,n),Vs(t,i,"child_moved",s,r,n),Vs(t,i,"child_changed",e,r,n),Vs(t,i,"value",e,r,n),i}function Vs(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>M5(t,l,a)),o.forEach(l=>{const a=L5(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function L5(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function M5(t,e,n){if(e.childName==null||n.childName==null)throw ws("Should only compare child_ events.");const r=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e){return{eventCache:t,serverCache:e}}function po(t,e,n,r){return _c(new Sr(e,n,r),t.serverCache)}function HE(t,e,n,r){return _c(t.eventCache,new Sr(e,n,r))}function _u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh;const b5=()=>(Rh||(Rh=new mt(w4)),Rh);class oe{constructor(e,n=b5()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Ke(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Q(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:we(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new oe(null)}}set(e,n){if(Q(e))return new oe(n,this.children);{const r=K(e),s=(this.children.get(r)||new oe(null)).set(le(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(Q(e))return n;{const r=K(e),s=(this.children.get(r)||new oe(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(we(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(le(e),we(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),we(n,i),r):new oe(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(we(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new oe(null))}}function go(t,e,n){if(Q(e))return new on(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=at(i,e);return s=s.updateChild(o,n),new on(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new on(s)}}}function cf(t,e,n){let r=t;return Ke(n,(i,s)=>{r=go(r,we(e,i),s)}),r}function $v(t,e){if(Q(e))return on.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new on(n)}}function hf(t,e){return yi(t,e)!=null}function yi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(at(n.path,e)):null}function Bv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new Y(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Y(r,i.value))}),e}function yr(t,e){if(Q(e))return t;{const n=yi(t,e);return n!=null?new on(new oe(n)):new on(t.writeTree_.subtree(e))}}function df(t){return t.writeTree_.isEmpty()}function ds(t,e){return GE(te(),t.writeTree_,e)}function GE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=GE(we(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(we(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){return QE(e,t)}function F5(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=go(t.visibleWrites,e,n)),t.lastWriteId=r}function j5(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=cf(t.visibleWrites,e,n),t.lastWriteId=r}function U5(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $5(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&B5(l,r.path)?i=!1:Ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return V5(t),!0;if(r.snap)t.visibleWrites=$v(t.visibleWrites,r.path);else{const l=r.children;Ke(l,a=>{t.visibleWrites=$v(t.visibleWrites,we(r.path,a))})}return!0}else return!1}function B5(t,e){if(t.snap)return Ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ut(we(t.path,n),e))return!0;return!1}function V5(t){t.visibleWrites=KE(t.allWrites,z5,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function z5(t){return t.visible}function KE(t,e,n){let r=on.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ut(n,o)?(l=at(n,o),r=go(r,l,s.snap)):Ut(o,n)&&(l=at(o,n),r=go(r,te(),s.snap.getChild(l)));else if(s.children){if(Ut(n,o))l=at(n,o),r=cf(r,l,s.children);else if(Ut(o,n))if(l=at(o,n),Q(l))r=cf(r,te(),s.children);else{const a=as(s.children,K(l));if(a){const u=a.getChild(le(l));r=go(r,te(),u)}}}else throw ws("WriteRecord should have .snap or .children")}}return r}function YE(t,e,n,r,i){if(!r&&!i){const s=yi(t.visibleWrites,e);if(s!=null)return s;{const o=yr(t.visibleWrites,e);if(df(o))return n;if(n==null&&!hf(o,te()))return null;{const l=n||$.EMPTY_NODE;return ds(o,l)}}}else{const s=yr(t.visibleWrites,e);if(!i&&df(s))return n;if(!i&&n==null&&!hf(s,te()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ut(u.path,e)||Ut(e,u.path))},l=KE(t.allWrites,o,e),a=n||$.EMPTY_NODE;return ds(l,a)}}}function W5(t,e,n){let r=$.EMPTY_NODE;const i=yi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yr(t.visibleWrites,e);return n.forEachChild(Ee,(o,l)=>{const a=ds(yr(s,new se(o)),l);r=r.updateImmediateChild(o,a)}),Bv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yr(t.visibleWrites,e);return Bv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function H5(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=we(e,n);if(hf(t.visibleWrites,s))return null;{const o=yr(t.visibleWrites,s);return df(o)?i.getChild(n):ds(o,i.getChild(n))}}function G5(t,e,n,r){const i=we(e,n),s=yi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yr(t.visibleWrites,i);return ds(o,r.getNode().getImmediateChild(n))}else return null}function K5(t,e){return yi(t.visibleWrites,e)}function Y5(t,e,n,r,i,s,o){let l;const a=yr(t.visibleWrites,e),u=yi(a,te());if(u!=null)l=u;else if(n!=null)l=ds(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=d.getNext();for(;p&&h.length<i;)c(p,r)!==0&&h.push(p),p=d.getNext();return h}else return[]}function q5(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function wu(t,e,n,r){return YE(t.writeTree,t.treePath,e,n,r)}function Ag(t,e){return W5(t.writeTree,t.treePath,e)}function Vv(t,e,n,r){return H5(t.writeTree,t.treePath,e,n,r)}function Eu(t,e){return K5(t.writeTree,we(t.treePath,e))}function Q5(t,e,n,r,i,s){return Y5(t.writeTree,t.treePath,e,n,r,i,s)}function Rg(t,e,n){return G5(t.writeTree,t.treePath,e,n)}function qE(t,e){return QE(we(t.treePath,e),t.writeTree)}function QE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J5{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,el(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Zo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,cs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,el(r,e.snapshotNode,i.oldSnap));else throw ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const JE=new X5;class Ng{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Sr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hi(this.viewCache_),s=Q5(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z5(t){return{filter:t}}function eO(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tO(t,e,n,r,i){const s=new J5;let o,l;if(n.type===nn.OVERWRITE){const u=n;u.source.fromUser?o=ff(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=Cu(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===nn.MERGE){const u=n;u.source.fromUser?o=rO(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=pf(t,e,u.path,u.children,r,i,l,s))}else if(n.type===nn.ACK_USER_WRITE){const u=n;u.revert?o=oO(t,e,u.path,r,i,s):o=iO(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=sO(t,e,n.path,r,s);else throw ws("Unknown operation type: "+n.type);const a=s.getChanges();return nO(e,o,a),{viewCache:o,changes:a}}function nO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=_u(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(zE(_u(e)))}}function XE(t,e,n,r,i,s){const o=e.eventCache;if(Eu(r,n)!=null)return e;{let l,a;if(Q(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=hi(e),h=u instanceof $?u:$.EMPTY_NODE,c=Ag(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=wu(r,hi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){R(Cr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const c=Vv(r,n,h,a);c!=null?l=t.filter.updatePriority(h,c):l=o.getNode()}else{const h=le(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Vv(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(h,d):c=o.getNode().getImmediateChild(u)}else c=Rg(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,h,i,s):l=o.getNode()}}return po(e,l,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Cu(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),p,null)}else{const p=K(n);if(!a.isCompleteForPath(n)&&Cr(n)>1)return e;const v=le(n),I=a.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=h.updatePriority(a.getNode(),I):u=h.updateChild(a.getNode(),p,I,v,JE,null)}const c=HE(e,u,a.isFullyInitialized()||Q(n),h.filtersNodes()),d=new Ng(i,c,s);return XE(t,c,n,i,d,l)}function ff(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Ng(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=po(e,u,!0,t.filter.filtersNodes());else{const c=K(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=po(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=le(n),p=l.getNode().getImmediateChild(c);let v;if(Q(d))v=r;else{const w=h.getCompleteChild(c);w!=null?yg(d)===".priority"&&w.getChild(bE(d)).isEmpty()?v=w:v=w.updateChild(d,r):v=$.EMPTY_NODE}if(p.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),c,v,d,h,o);a=po(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function zv(t,e){return t.eventCache.isCompleteForChild(e)}function rO(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=we(n,a);zv(e,K(h))&&(l=ff(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=we(n,a);zv(e,K(h))||(l=ff(t,l,h,u,i,s,o))}),l}function Wv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pf(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;Q(n)?u=r:u=new oe(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(h.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),v=Wv(t,p,d);a=Cu(t,a,new se(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const p=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!h.hasChild(c)&&!p){const v=e.serverCache.getNode().getImmediateChild(c),w=Wv(t,v,d);a=Cu(t,a,new se(c),w,i,s,o,l)}}),a}function iO(t,e,n,r,i,s,o){if(Eu(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(Q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Cu(t,e,n,a.getNode().getChild(n),i,s,l,o);if(Q(n)){let u=new oe(null);return a.getNode().forEachChild(es,(h,c)=>{u=u.set(new se(h),c)}),pf(t,e,n,u,i,s,l,o)}else return e}else{let u=new oe(null);return r.foreach((h,c)=>{const d=we(n,h);a.isCompleteForPath(d)&&(u=u.set(h,a.getNode().getChild(d)))}),pf(t,e,n,u,i,s,l,o)}}function sO(t,e,n,r,i){const s=e.serverCache,o=HE(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return XE(t,o,n,r,JE,i)}function oO(t,e,n,r,i,s){let o;if(Eu(r,n)!=null)return e;{const l=new Ng(r,e,i),a=e.eventCache.getNode();let u;if(Q(n)||K(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=wu(r,hi(e));else{const c=e.serverCache.getNode();R(c instanceof $,"serverChildren would be complete if leaf node"),h=Ag(r,c)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=K(n);let c=Rg(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=a.getImmediateChild(h)),c!=null?u=t.filter.updateChild(a,h,c,le(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,$.EMPTY_NODE,le(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wu(r,hi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Eu(r,te())!=null,po(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Cg(r.getIndex()),s=T5(r);this.processor_=Z5(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode($.EMPTY_NODE,l.getNode(),null),h=new Sr(a,o.isFullyInitialized(),i.filtersNodes()),c=new Sr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=_c(c,h),this.eventGenerator_=new O5(this.query_)}get query(){return this.query_}}function aO(t){return t.viewCache_.serverCache.getNode()}function uO(t){return _u(t.viewCache_)}function cO(t,e){const n=hi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Hv(t){return t.eventRegistrations_.length===0}function hO(t,e){t.eventRegistrations_.push(e)}function Gv(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Kv(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(R(hi(t.viewCache_),"We should always have a full cache before handling merges"),R(_u(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=tO(t.processor_,i,e,n,r);return eO(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ZE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function dO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(cs(s,o))}),n.isFullyInitialized()&&r.push(zE(n.getNode())),ZE(t,r,n.getNode(),e)}function ZE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return D5(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su;class eC{constructor(){this.views=new Map}}function fO(t){R(!Su,"__referenceConstructor has already been defined"),Su=t}function pO(){return R(Su,"Reference.ts has not been loaded"),Su}function gO(t){return t.views.size===0}function xg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Kv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Kv(o,e,n,r));return s}}function tC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=wu(n,i?r:null),a=!1;l?a=!0:r instanceof $?(l=Ag(n,r),a=!1):(l=$.EMPTY_NODE,a=!1);const u=_c(new Sr(l,a,!1),new Sr(r,i,!1));return new lO(e,u)}return o}function mO(t,e,n,r,i,s){const o=tC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hO(o,n),dO(o,n)}function vO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Ir(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Gv(u,n,r)),Hv(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Gv(a,n,r)),Hv(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Ir(t)&&s.push(new(pO())(e._repo,e._path)),{removed:s,events:o}}function nC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _r(t,e){let n=null;for(const r of t.views.values())n=n||cO(r,e);return n}function rC(t,e){if(e._queryParams.loadsAllData())return Ec(t);{const r=e._queryIdentifier;return t.views.get(r)}}function iC(t,e){return rC(t,e)!=null}function Ir(t){return Ec(t)!=null}function Ec(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;function yO(t){R(!Iu,"__referenceConstructor has already been defined"),Iu=t}function _O(){return R(Iu,"Reference.ts has not been loaded"),Iu}let wO=1;class Yv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=q5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sC(t,e,n,r,i){return F5(t.pendingWriteTree_,e,n,r,i),i?As(t,new ci(Ig(),e,n)):[]}function EO(t,e,n,r){j5(t.pendingWriteTree_,e,n,r);const i=oe.fromObject(n);return As(t,new hs(Ig(),e,i))}function sr(t,e,n=!1){const r=U5(t.pendingWriteTree_,e);if($5(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(te(),!0):Ke(r.children,o=>{s=s.set(new se(o),!0)}),As(t,new yu(r.path,s,n))}else return[]}function Rl(t,e,n){return As(t,new ci(Tg(),e,n))}function CO(t,e,n){const r=oe.fromObject(n);return As(t,new hs(Tg(),e,r))}function SO(t,e){return As(t,new nl(Tg(),e))}function IO(t,e,n){const r=Og(t,n);if(r){const i=Dg(r),s=i.path,o=i.queryId,l=at(s,e),a=new nl(kg(o),l);return Lg(t,s,a)}else return[]}function Tu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||iC(o,e))){const a=vO(o,e,n,r);gO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const h=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,p)=>Ir(p));if(h&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=AO(d);for(let v=0;v<p.length;++v){const w=p[v],I=w.query,m=uC(t,w);t.listenProvider_.startListening(mo(I),rl(t,I),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(mo(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(Cc(d));t.listenProvider_.stopListening(mo(d),p)}))}RO(t,u)}return l}function oC(t,e,n,r){const i=Og(t,r);if(i!=null){const s=Dg(i),o=s.path,l=s.queryId,a=at(o,e),u=new ci(kg(l),a,n);return Lg(t,o,u)}else return[]}function TO(t,e,n,r){const i=Og(t,r);if(i){const s=Dg(i),o=s.path,l=s.queryId,a=at(o,e),u=oe.fromObject(n),h=new hs(kg(l),a,u);return Lg(t,o,h)}else return[]}function gf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const v=at(d,i);s=s||_r(p,v),o=o||Ir(p)});let l=t.syncPointTree_.get(i);l?(o=o||Ir(l),s=s||_r(l,te())):(l=new eC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const w=_r(v,te());w&&(s=s.updateImmediateChild(p,w))}));const u=iC(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Cc(e);R(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=NO();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const h=wc(t.pendingWriteTree_,i);let c=mO(l,e,n,h,s,a);if(!u&&!o&&!r){const d=rC(l,e);c=c.concat(xO(t,e,d))}return c}function Pg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=at(o,e),u=_r(l,a);if(u)return u});return YE(i,e,s,n,!0)}function kO(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const c=at(u,n);r=r||_r(h,c)});let i=t.syncPointTree_.get(n);i?r=r||_r(i,te()):(i=new eC,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Sr(r,!0,!1):null,l=wc(t.pendingWriteTree_,e._path),a=tC(i,e,l,s?o.getNode():$.EMPTY_NODE,s);return uO(a)}function As(t,e){return lC(e,t.syncPointTree_,null,wc(t.pendingWriteTree_,te()))}function lC(t,e,n,r){if(Q(t.path))return aC(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=_r(i,te()));let s=[];const o=K(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=qE(r,o);s=s.concat(lC(l,a,u,h))}return i&&(s=s.concat(xg(i,t,r,n))),s}}function aC(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=_r(i,te()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=qE(r,o),h=t.operationForChild(o);h&&(s=s.concat(aC(h,l,a,u)))}),i&&(s=s.concat(xg(i,t,r,n))),s}function uC(t,e){const n=e.query,r=rl(t,n);return{hashFn:()=>(aO(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?IO(t,n._path,r):SO(t,n._path);{const s=S4(i,n);return Tu(t,n,null,s)}}}}function rl(t,e){const n=Cc(e);return t.queryToTagMap.get(n)}function Cc(t){return t._path.toString()+"$"+t._queryIdentifier}function Og(t,e){return t.tagToQueryMap.get(e)}function Dg(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Lg(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=wc(t.pendingWriteTree_,e);return xg(r,n,i,null)}function AO(t){return t.fold((e,n,r)=>{if(n&&Ir(n))return[Ec(n)];{let i=[];return n&&(i=nC(n)),Ke(r,(s,o)=>{i=i.concat(o)}),i}})}function mo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_O())(t._repo,t._path):t}function RO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Cc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function NO(){return wO++}function xO(t,e,n){const r=e._path,i=rl(t,e),s=uC(t,n),o=t.listenProvider_.startListening(mo(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)R(!Ir(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,c)=>{if(!Q(u)&&h&&Ir(h))return[Ec(h).query];{let d=[];return h&&(d=d.concat(nC(h).map(p=>p.query))),Ke(c,(p,v)=>{d=d.concat(v)}),d}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(mo(h),rl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Mg(n)}node(){return this.node_}}class bg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new bg(this.syncTree_,n)}node(){return Pg(this.syncTree_,this.path_)}}const PO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qv=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return OO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DO(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},OO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},DO=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},cC=function(t,e,n,r){return Fg(e,new bg(n,t),r)},hC=function(t,e,n){return Fg(t,new Mg(e),n)};function Fg(t,e,n){const r=t.getPriority().val(),i=qv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=qv(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Le(l,Pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Le(i))),o.forEachChild(Ee,(l,a)=>{const u=Fg(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ug(t,e){let n=e instanceof se?e:new se(e),r=t,i=K(n);for(;i!==null;){const s=as(r.node.children,i)||{children:{},childCount:0};r=new jg(i,r,s),n=le(n),i=K(n)}return r}function Rs(t){return t.node.value}function dC(t,e){t.node.value=e,mf(t)}function fC(t){return t.node.childCount>0}function LO(t){return Rs(t)===void 0&&!fC(t)}function Sc(t,e){Ke(t.node.children,(n,r)=>{e(new jg(n,t,r))})}function pC(t,e,n,r){n&&!r&&e(t),Sc(t,i=>{pC(i,e,!0,r)}),n&&r&&e(t)}function MO(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Nl(t){return new se(t.parent===null?t.name:Nl(t.parent)+"/"+t.name)}function mf(t){t.parent!==null&&bO(t.parent,t.name,t)}function bO(t,e,n){const r=LO(n),i=Sn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,mf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,mf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=/[\[\].#$\/\u0000-\u001F\u007F]/,jO=/[\[\].#$\u0000-\u001F\u007F]/,Nh=10*1024*1024,$g=function(t){return typeof t=="string"&&t.length!==0&&!FO.test(t)},gC=function(t){return typeof t=="string"&&t.length!==0&&!jO.test(t)},UO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gC(t)},$O=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!fg(t)||t&&typeof t=="object"&&Sn(t,".sv")},BO=function(t,e,n,r){r&&e===void 0||Ic(qu(t,"value"),e,n)},Ic=function(t,e,n){const r=n instanceof se?new r5(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jr(r));if(typeof e=="function")throw new Error(t+"contains a function "+jr(r)+" with contents = "+e.toString());if(fg(e))throw new Error(t+"contains "+e.toString()+" "+jr(r));if(typeof e=="string"&&e.length>Nh/3&&Qu(e)>Nh)throw new Error(t+"contains a string greater than "+Nh+" utf8 bytes "+jr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ke(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!$g(o)))throw new Error(t+" contains an invalid key ("+o+") "+jr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);i5(r,o),Ic(t,l,r),s5(r)}),i&&s)throw new Error(t+' contains ".value" child '+jr(r)+" in addition to actual children.")}},VO=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Xo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!$g(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(n5);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ut(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},zO=function(t,e,n,r){if(r&&e===void 0)return;const i=qu(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ke(e,(o,l)=>{const a=new se(o);if(Ic(i,l,we(n,a)),yg(a)===".priority"&&!$O(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),VO(i,s)},mC=function(t,e,n,r){if(!(r&&n===void 0)&&!gC(n))throw new Error(qu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mC(t,e,n,r)},HO=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},GO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$g(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!UO(n))throw new Error(qu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Tc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!_g(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function vC(t,e,n){Tc(t,n),yC(t,r=>_g(r,e))}function Gt(t,e,n){Tc(t,n),yC(t,r=>Ut(r,e)||Ut(e,r))}function yC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(YO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xr&&ze("event: "+n.toString()),ks(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO="repo_interrupt",QO=25;class JO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vu(),this.transactionQueueTree_=new jg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XO(t,e,n){if(t.stats_=mg(t.repoInfo_),t.forceRestClient_||A4())t.server_=new mu(t.repoInfo_,(r,i,s,o)=>{Qv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{Qv(t,r,i,s,o)},r=>{Jv(t,r)},r=>{e9(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=O4(t.repoInfo_,()=>new P5(t.stats_,t.server_)),t.infoData_=new k5,t.infoSyncTree_=new Yv({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Rl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Bg(t,"connected",!1),t.serverSyncTree_=new Yv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Gt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ZO(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kc(t){return PO({timestamp:ZO(t)})}function Qv(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Qa(n,u=>Pe(u));o=TO(t.serverSyncTree_,s,a,i)}else{const a=Pe(n);o=oC(t.serverSyncTree_,s,a,i)}else if(r){const a=Qa(n,u=>Pe(u));o=CO(t.serverSyncTree_,s,a)}else{const a=Pe(n);o=Rl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=fs(t,s)),Gt(t.eventQueue_,l,o)}function Jv(t,e){Bg(t,"connected",e),e===!1&&i9(t)}function e9(t,e){Ke(e,(n,r)=>{Bg(t,n,r)})}function Bg(t,e,n){const r=new se("/.info/"+e),i=Pe(n);t.infoData_.updateSnapshot(r,i);const s=Rl(t.infoSyncTree_,r,i);Gt(t.eventQueue_,r,s)}function Vg(t){return t.nextWriteId_++}function t9(t,e,n){const r=kO(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Pe(i).withIndex(e._queryParams.getIndex());gf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Rl(t.serverSyncTree_,e._path,s);else{const l=rl(t.serverSyncTree_,e);o=oC(t.serverSyncTree_,e._path,s,l)}return Gt(t.eventQueue_,e._path,o),Tu(t.serverSyncTree_,e,n,null,!0),s},i=>(xl(t,"get for query "+Oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function n9(t,e,n,r,i){xl(t,"set",{path:e.toString(),value:n,priority:r});const s=kc(t),o=Pe(n,r),l=Pg(t.serverSyncTree_,e),a=hC(o,l,s),u=Vg(t),h=sC(t.serverSyncTree_,e,a,u,!0);Tc(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const v=d==="ok";v||ct("set at "+e+" failed: "+d);const w=sr(t.serverSyncTree_,u,!v);Gt(t.eventQueue_,e,w),vf(t,i,d,p)});const c=Wg(t,e);fs(t,c),Gt(t.eventQueue_,c,[])}function r9(t,e,n,r){xl(t,"update",{path:e.toString(),value:n});let i=!0;const s=kc(t),o={};if(Ke(n,(l,a)=>{i=!1,o[l]=cC(we(e,l),Pe(a),t.serverSyncTree_,s)}),i)ze("update() called with empty data.  Don't do anything."),vf(t,r,"ok",void 0);else{const l=Vg(t),a=EO(t.serverSyncTree_,e,o,l);Tc(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const c=u==="ok";c||ct("update at "+e+" failed: "+u);const d=sr(t.serverSyncTree_,l,!c),p=d.length>0?fs(t,e):e;Gt(t.eventQueue_,p,d),vf(t,r,u,h)}),Ke(n,u=>{const h=Wg(t,we(e,u));fs(t,h)}),Gt(t.eventQueue_,e,[])}}function i9(t){xl(t,"onDisconnectEvents");const e=kc(t),n=vu();uf(t.onDisconnect_,te(),(i,s)=>{const o=cC(i,s,t.serverSyncTree_,e);WE(n,i,o)});let r=[];uf(n,te(),(i,s)=>{r=r.concat(Rl(t.serverSyncTree_,i,s));const o=Wg(t,i);fs(t,o)}),t.onDisconnect_=vu(),Gt(t.eventQueue_,te(),r)}function s9(t,e,n){let r;K(e._path)===".info"?r=gf(t.infoSyncTree_,e,n):r=gf(t.serverSyncTree_,e,n),vC(t.eventQueue_,e._path,r)}function Xv(t,e,n){let r;K(e._path)===".info"?r=Tu(t.infoSyncTree_,e,n):r=Tu(t.serverSyncTree_,e,n),vC(t.eventQueue_,e._path,r)}function o9(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qO)}function xl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ze(n,...e)}function vf(t,e,n,r){e&&ks(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function _C(t,e,n){return Pg(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function zg(t,e=t.transactionQueueTree_){if(e||Ac(t,e),Rs(e)){const n=EC(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&l9(t,Nl(e),n)}else fC(e)&&Sc(e,n=>{zg(t,n)})}function l9(t,e,n){const r=n.map(u=>u.currentWriteId),i=_C(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];R(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=at(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{xl(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(sr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ac(t,Ug(t.transactionQueueTree_,e)),zg(t,t.transactionQueueTree_),Gt(t.eventQueue_,e,h);for(let d=0;d<c.length;d++)ks(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ct("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}fs(t,e)}},o)}function fs(t,e){const n=wC(t,e),r=Nl(n),i=EC(t,n);return a9(t,i,r),r}function a9(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=at(n,a.path);let h=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,c=a.abortReason,i=i.concat(sr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=QO)h=!0,c="maxretry",i=i.concat(sr(t.serverSyncTree_,a.currentWriteId,!0));else{const d=_C(t,a.path,o);a.currentInputSnapshot=d;const p=e[l].update(d.val());if(p!==void 0){Ic("transaction failed: Data returned ",p,a.path);let v=Pe(p);typeof p=="object"&&p!=null&&Sn(p,".priority")||(v=v.updatePriority(d.getPriority()));const I=a.currentWriteId,m=kc(t),f=hC(v,d,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=Vg(t),o.splice(o.indexOf(I),1),i=i.concat(sC(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(sr(t.serverSyncTree_,I,!0))}else h=!0,c="nodata",i=i.concat(sr(t.serverSyncTree_,a.currentWriteId,!0))}Gt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Ac(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ks(r[l]);zg(t,t.transactionQueueTree_)}function wC(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&Rs(r)===void 0;)r=Ug(r,n),e=le(e),n=K(e);return r}function EC(t,e){const n=[];return CC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function CC(t,e,n){const r=Rs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Sc(e,i=>{CC(t,i,n)})}function Ac(t,e){const n=Rs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,dC(e,n.length>0?n:void 0)}Sc(e,r=>{Ac(t,r)})}function Wg(t,e){const n=Nl(wC(t,e)),r=Ug(t.transactionQueueTree_,e);return MO(r,i=>{xh(t,i)}),xh(t,r),pC(r,i=>{xh(t,i)}),n}function xh(t,e){const n=Rs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(sr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dC(e,void 0):n.length=s+1,Gt(t.eventQueue_,Nl(e),i);for(let o=0;o<r.length;o++)ks(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u9(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function c9(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zv=function(t,e){const n=h9(t),r=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||y4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new AE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},h9=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=u9(t.substring(h,c)));const d=c9(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class IC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:yg(this._path)}get ref(){return new In(this._repo,this._path)}get _queryIdentifier(){const e=jv(this._queryParams),n=pg(e);return n==="{}"?"default":n}get _queryObject(){return jv(this._queryParams)}isEqual(e){if(e=qe(e),!(e instanceof Hg))return!1;const n=this._repo===e._repo,r=_g(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+t5(this._path)}}class In extends Hg{constructor(e,n){super(e,n,new Sg,!1)}get parent(){const e=bE(this._path);return e===null?null:new In(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ps{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=il(this.ref,e);return new ps(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ps(i,il(this.ref,r),Ee)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rc(t,e){return t=qe(t),t._checkNotDeleted("ref"),e!==void 0?il(t._root,e):t._root}function il(t,e){return t=qe(t),K(t._path)===null?WO("child","path",e,!1):mC("child","path",e,!1),new In(t._repo,we(t._path,e))}function d9(t,e){t=qe(t),HO("set",t._path),BO("set",e,t._path,!1);const n=new hl;return n9(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function f9(t,e){zO("update",e,t._path,!1);const n=new hl;return r9(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function p9(t){t=qe(t);const e=new TC(()=>{}),n=new Nc(e);return t9(t._repo,t,n).then(r=>new ps(r,new In(t._repo,t._path),t._queryParams.getIndex()))}class Nc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new SC("value",this,new ps(e.snapshotNode,new In(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new IC(this,e,n):null}matches(e){return e instanceof Nc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Gg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new IC(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const r=il(new In(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new SC(e.type,this,new ps(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Gg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function g9(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(h,c)=>{Xv(t._repo,t,l),a(h,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new TC(n,s||void 0),l=e==="value"?new Nc(o):new Gg(e,o);return s9(t._repo,t,l),()=>Xv(t._repo,t,l)}function m9(t,e,n,r){return g9(t,"value",e,n,r)}fO(In);yO(In);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v9="FIREBASE_DATABASE_EMULATOR_HOST",yf={};let y9=!1;function _9(t,e,n,r){t.repoInfo_=new AE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function w9(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zv(s,i),l=o.repoInfo,a,u;typeof process<"u"&&wv&&(u=wv[v9]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Zv(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new Zi(Zi.OWNER):new N4(t.name,t.options,e);GO("Invalid Firebase Database URL",o),Q(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=C9(l,t,h,new R4(t.name,n));return new S9(c,t)}function E9(t,e){const n=yf[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),o9(t),delete n[t.key]}function C9(t,e,n,r){let i=yf[e.name];i||(i={},yf[e.name]=i);let s=i[t.toURLString()];return s&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new JO(t,y9,n,r),i[t.toURLString()]=s,s}class S9{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new In(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(E9(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}function I9(t=Ip(),e){const n=gi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Tk("database");r&&T9(n,...r)}return n}function T9(t,e,n,r={}){t=qe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zi(Zi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:kk(r.mockUserToken,t.app.options.projectId);s=new Zi(o)}_9(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k9(t){f4(mi),an(new zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return w9(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wt(Ev,Cv,t),wt(Ev,Cv,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};k9();const A9={apiKey:"AIzaSyDZTdRn4Auo-weSPUceWIFinY0rQsVNn3U",authDomain:"jobchaser-26d9a.firebaseapp.com",projectId:"jobchaser-26d9a",storageBucket:"jobchaser-26d9a.appspot.com",messagingSenderId:"871802840073",appId:"1:871802840073:web:3c289fe370ec71235784d8",measurementId:"G-QGYD6EBDJH",databaseURL:"https://jobchaser-26d9a-default-rtdb.europe-west1.firebasedatabase.app"},R9=ew(A9);u4(R9);const xc=I9();function Pl(){const t=Nx(),e=new Nn,[n]=bx(t);return{auth:t,user:n,provider:e,signInWithRedirect:z3,signInWithPopup:F3,signInWithEmailAndPassword:f3,createUserWithEmailAndPassword:d3,onAuthStateChanged:N2,signOut:m3}}function kC(t,e,n,r=null,i=null){d9(Rc(xc,"users/"+t),{userId:t,fullname:n,email:e,password:r,profileImg:i})}function ey(t,e){const n=Rc(xc);return new Promise((r,i)=>{p9(il(n,t+"/"+e)).then(s=>{if(s.exists()){const o=s.val();r(o)}else r(s.exists()),console.log("No data available")}).catch(s=>{console.error(s)})})}function N9(t){return new Promise((e,n)=>{m9(Rc(xc,"SavedJobs/"+t),r=>{e(r.val())})})}function ty(t,e){f9(Rc(xc,"SavedJobs/"+e),{jobs:t})}function x9({toggleMenu:t,menuClass:e,textColorHeader:n,checked:r,color:i}){return g.jsxs("div",{onClick:t,className:"menu",children:[g.jsx("div",{style:{background:e?i:n},className:"bar"}),g.jsx("input",{style:{background:e?i:n},checked:r,type:"checkbox",className:"bar"}),g.jsx("div",{style:{background:e?i:n},className:"bar"}),g.jsx("p",{style:{color:e?i:n},children:"Menu"})]})}function Ph({label:t,className:e,isMobileScreen:n,color:r,textColorHeader:i,isDarkTheme:s}){const[o,l]=T.useState("");return T.useEffect(()=>{t.toLocaleLowerCase()==="hem"&&l("/Jobchaser/"),t.toLocaleLowerCase()==="lediga jobb"&&l("/Jobchaser/Find-job"),t.toLocaleLowerCase()==="logga in"&&l("/Jobchaser/Sign-in")},[]),g.jsxs(j1,{style:{color:n?r:i},to:o,children:[t,n&&g.jsx("img",{className:e,src:s?k1:A1,alt:"chevron icon"})]})}const P9="_toggleContainer_gvt3j_13",O9="_slider_gvt3j_65",Oh={toggleContainer:P9,switch:"_switch_gvt3j_39",slider:O9};function D9({sidemenu:t,color:e,textColorHeader:n}){const{setIsDarkTheme:r,isDarkTheme:i}=T.useContext(Kt);document.getElementById("checkbox");function s(){console.log(i),r(o=>!o)}return g.jsx(g.Fragment,{children:g.jsxs("div",{className:Oh.toggleContainer,children:[g.jsx("p",{style:{color:t?e:n},children:"Dark Mode"}),g.jsxs("label",{className:Oh.switch,children:[g.jsx("input",{onClick:()=>s(),type:"checkbox",id:"checkbox"}),g.jsx("span",{className:Oh.slider})]})]})})}function L9({toggleDarkTheme:t}){const[e,n]=T.useReducer(mT,gT),{isOnline:r,isDarkTheme:i,background:s,color:o,textColorHeader:l}=T.useContext(Kt),{auth:a}=Pl(),u=window.matchMedia("(width < 1249px)"),h=window.matchMedia("(height < 801px)"),c=document.body;c.style.background=i?"linear-gradient(147deg, #4d4855 0%, #000000 74%)":"whitesmoke";function d(v){if(!(!u.matches||v.target.tagName==="BUTTON")){if(e.menuClass){e.timeoutId?(clearTimeout(e.timeoutId),n({type:Ce.TIMEOUT_ID,payload:setTimeout(()=>"none",350)})):n({type:Ce.TIMEOUT_ID,payload:setTimeout(()=>"none",350)}),c.removeAttribute("style"),n({type:Ce.CHECKED,payload:!1}),n({type:Ce.MENU_CLASS,payload:null});return}if(e.menuClass===null){n({type:Ce.STYLE_TRANSITION,payload:"translate 350ms"}),c.style.overflow="hidden",n({type:Ce.CHECKED,payload:!0}),n({type:Ce.MENU_CLASS,payload:"show-menu"});return}}}T.useEffect(()=>{if(document.getElementById("root"),i){c.style.background="linear-gradient(147deg, #4d4855 0%, #000000 74%)";return}if(!i){c.style.background="whitesmoke";return}},[i]),T.useEffect(()=>{u.matches&&n({type:Ce.IS_MOBILE,payload:!0}),u.addEventListener("change",v=>{if(!v.matches){console.log("desktop"),c.removeAttribute("style"),n({type:Ce.IS_MOBILE,payload:!1}),n({type:Ce.CHECKED,payload:!1}),n({type:Ce.MENU_CLASS,payload:null}),n({type:Ce.STYLE_TRANSITION,payload:"none"});return}n({type:Ce.IS_MOBILE,payload:!0})}),h.addEventListener("change",v=>{v.matches&&n({type:Ce.STYLE_BOTTOM,payload:"-120px"}),v.matches||n({type:Ce.STYLE_BOTTOM,payload:"0px"})})},[]);function p(v){if(v)return o?l0:a0;if(!v)return l==="white"?l0:a0}return g.jsx(g.Fragment,{children:g.jsx("header",{children:g.jsxs("div",{className:"header-container",children:[g.jsxs("div",{className:"title-container",style:{color:e.menuClass?o:l},children:[g.jsx("img",{tabIndex:0,src:pT,alt:"Jobchaser logo"}),g.jsx("span",{className:"char-in-logo",style:{color:e.menuClass?o:l},children:"J"}),g.jsx("p",{children:"Jobchaser"}),g.jsx("p",{children:"EST 2023"})]}),g.jsx(x9,{toggleMenu:d,menuClass:e.menuClass,textColorHeader:l,checked:e.checked,color:o}),g.jsxs("nav",{onClick:d,className:`link-options ${e.menuClass}`,style:{transition:e.styleTransition,background:e.isMobileScreen&&s},children:[g.jsx(D9,{color:o,textColorHeader:l,sidemenu:e.menuClass}),g.jsx(Ph,{label:"Hem",className:"chevron",isMobileScreen:e.isMobileScreen,color:o,textColorHeader:l,isDarkTheme:i}),g.jsx(Ph,{label:"Lediga jobb",className:"chevron",isMobileScreen:e.isMobileScreen,color:o,textColorHeader:l,isDarkTheme:i}),r&&g.jsxs(j1,{to:"/Jobchaser/User-profile",style:{color:e.isMobileScreen?o:l},children:[g.jsxs("div",{className:"profile-container",children:[g.jsx("p",{children:"Profil"}),g.jsx("img",{src:r.profileImg?r.profileImg:R1,alt:"user profile picture",style:{border:"2px solid "+(e.menuClass?o:l)}})]}),e.isMobileScreen&&g.jsx("img",{style:{bottom:"30%"},className:"chevron",src:i?k1:A1,alt:"chevron icon"})]}),r?g.jsxs("div",{onClick:()=>a.signOut(),className:"sign-out-cont",children:[g.jsx("button",{className:"sign-out-btn",style:{color:e.isMobileScreen?o:l},children:"Logga ut"}),g.jsx("div",{className:"sign-out-img-container",children:g.jsx("img",{src:p(e.isMobileScreen),alt:"sign out icon"})})]}):g.jsx(Ph,{label:"Logga in",className:"chevron",isMobileScreen:e.isMobileScreen,color:o,textColorHeader:l,isDarkTheme:i})]})]})})})}const M9="/Jobchaser/assets/Search%20SVG%20Vector-BR--GbvO.svg",b9="/Jobchaser/assets/start-page-background-Dm21Msj3.jpg",F9=()=>{const{isOnline:t}=T.useContext(Kt),e=Yu();return g.jsxs("div",{className:"search-opening-text-container",children:[g.jsxs("picture",{children:[g.jsx("source",{type:"image/webp"}),g.jsx("img",{className:"jobb-hero-img",loading:"lazy",src:b9,alt:"hero image of a women laughing"})]}),g.jsxs("div",{children:[g.jsx("article",{className:"search-opening-text",children:g.jsx("h1",{children:"Lediga jobb för hela Sverige!"})}),g.jsx("button",{style:{background:"#f09711",color:"black",position:"relative"},className:"available-jobs-btn",onClick:()=>e(t?"/Jobchaser/User-profile":"/Jobchaser/Sign-in"),children:"Bli medlem"})]})]})},j9="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M45.35%206.1709H19.41C16.8178%206.17618%2014.3333%207.20827%2012.5003%209.04123C10.6674%2010.8742%209.63528%2013.3587%209.62999%2015.9509V52.2709C9.6272%2053.3655%209.92973%2054.4392%2010.5036%2055.3713C11.0775%2056.3034%2011.9%2057.057%2012.8787%2057.5474C13.8573%2058.0377%2014.9533%2058.2454%2016.0435%2058.1471C17.1337%2058.0488%2018.1748%2057.6484%2019.05%2056.9909L31.25%2047.8509C31.5783%2047.6074%2031.9762%2047.4759%2032.385%2047.4759C32.7938%2047.4759%2033.1917%2047.6074%2033.52%2047.8509L45.71%2056.9809C46.5842%2057.6387%2047.6246%2058.0397%2048.7142%2058.1387C49.8038%2058.2378%2050.8994%2058.0311%2051.8779%2057.5418C52.8565%2057.0525%2053.6793%2056.3001%2054.2537%2055.3689C54.8282%2054.4378%2055.1317%2053.365%2055.13%2052.2709V15.9509C55.1247%2013.3587%2054.0926%2010.8742%2052.2597%209.04123C50.4267%207.20827%2047.9422%206.17618%2045.35%206.1709Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",U9="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M45.35%206.1709H19.41C16.8178%206.17618%2014.3333%207.20827%2012.5003%209.04123C10.6674%2010.8742%209.63528%2013.3587%209.62999%2015.9509V52.2709C9.6272%2053.3655%209.92973%2054.4392%2010.5036%2055.3713C11.0775%2056.3034%2011.9%2057.057%2012.8787%2057.5474C13.8573%2058.0377%2014.9533%2058.2454%2016.0435%2058.1471C17.1337%2058.0488%2018.1748%2057.6484%2019.05%2056.9909L31.25%2047.8509C31.5783%2047.6074%2031.9762%2047.4759%2032.385%2047.4759C32.7938%2047.4759%2033.1917%2047.6074%2033.52%2047.8509L45.71%2056.9809C46.5842%2057.6387%2047.6246%2058.0397%2048.7142%2058.1387C49.8038%2058.2378%2050.8994%2058.0311%2051.8779%2057.5418C52.8565%2057.0525%2053.6793%2056.3001%2054.2537%2055.3689C54.8282%2054.4378%2055.1317%2053.365%2055.13%2052.2709V15.9509C55.1247%2013.3587%2054.0926%2010.8742%2052.2597%209.04123C50.4267%207.20827%2047.9422%206.17618%2045.35%206.1709Z'%20fill='%23000000'/%3e%3c/g%3e%3c/svg%3e";function $9({style:t,jobObj:e}){const[n,r]=T.useState(null),[i,s]=T.useState(null),{savedJobAds:o,setSavedJobAds:l,isOnline:a}=T.useContext(Kt);T.useEffect(()=>{const c=o.map(d=>d.id);if(c.includes(e.id)&&n===null){console.log("This ad is already saved: ",e.id,c),s(!0);return}h(n)},[n]);function u(c){if(c.target,i){r(!1),s(null);return}a&&r(d=>!d)}function h(c){if(c===!0)e.saved=!0,o.push(e),ty(o,a.userId);else if(c===!1&&o.length!==0){const d=o.map(p=>{if(p.id===e.id)return null;if(p.id!==e.id)return p});l(d.filter(p=>p!==null)),ty(d,a.userId)}}return g.jsxs("div",{className:t,children:[g.jsx("img",{onClick:u,tabIndex:0,src:n||i?U9:j9,alt:"save to favorite button"}),g.jsx("p",{children:i||n?"Sparad":"Spara"})]})}const B9="/Jobchaser/assets/Jobchaser-log-D2mofJjZ.svg";function AC(t){const{id:e,headline:n,duration:{label:r},employer:{name:i},working_hours_type:{label:s},employment_type:{label:o},occupation:{label:l},workplace_address:{municipality:a},last_publication_date:u,webpage_url:h,logo_url:c}=t;return g.jsxs("li",{className:"card",children:[g.jsx($9,{style:"favorite-btn",jobObj:t}),g.jsx("div",{className:"card-logo-container",children:g.jsx("img",{src:c||B9,alt:`Logo for ${i}`})}),g.jsxs("article",{className:"information-container",children:[g.jsx("div",{className:"card-title-container",children:g.jsx("a",{style:{color:"black"},href:h,children:g.jsx("h2",{children:n})})}),g.jsxs("div",{className:"details-container",children:[g.jsxs("div",{className:"upper-job-details",children:[g.jsx("p",{children:i}),g.jsxs("p",{children:["Position: ",g.jsx("span",{style:{fontWeight:"500"},children:l})]}),g.jsxs("p",{children:["Kommun: ",g.jsx("span",{style:{fontWeight:"500"},children:a})]})]}),g.jsxs("div",{className:"lower-job-details",children:[g.jsxs("p",{children:["Omfattning: ",s]}),g.jsxs("p",{children:["Varaktighet: ",r]}),g.jsxs("p",{children:["Anställningsform: ",o]})]})]})]}),g.jsxs("div",{className:"footer",children:[g.jsx("a",{href:h,children:g.jsx("p",{style:{color:"#3E619F"},children:"Besök webbplatsen"})}),g.jsxs("div",{children:[g.jsx("p",{children:"Sista datum: "}),g.jsx("p",{children:u})]})]})]},e)}const V9=({jobs:t})=>g.jsx("div",{className:"card-container",children:g.jsx("ul",{className:"card-layout",children:t.map(e=>AC(e))})});function z9(){const[t,e]=T.useState(""),[n,r]=T.useState(""),[i,s]=T.useState(null),{setTextColorHeader:o,setSavedJobAds:l,savedJobAds:a,setJobs:u,jobs:h}=T.useContext(Kt);o("black");const c=p=>e(p.target.value),d=p=>{const v=p.target.textContent;e(v),r(v)};return T.useEffect(()=>{fetch("https://jobsearch.api.jobtechdev.se/search?q="+n).then(p=>p.json()).then(p=>{const v=p.hits.map(w=>{const I="Information saknas";return w.duration.label===null&&(w.duration.label=I),w.working_hours_type.label===null&&(w.working_hours_type.label=I),w.employment_type.label===null&&(w.employment_type.label=I),w});u(v)}).catch(p=>{console.log(p),s(p)})},[n]),g.jsxs(g.Fragment,{children:[g.jsx(F9,{}),g.jsxs("form",{tabIndex:0,className:"job-form",onSubmit:p=>{p.preventDefault(),r(t)},children:[g.jsxs("div",{className:"input-container",children:[g.jsxs("div",{className:"label-for-input",children:[g.jsx("p",{children:"Sök på ett eller flera ord"}),g.jsx("p",{children:"Skriv t.ex. utvecklare Stockholm"})]}),g.jsx("button",{type:"submit",className:"search-btn",children:g.jsx("img",{src:M9,alt:"magnifying glass"})}),g.jsx("input",{className:"search-input",value:t,onChange:c,type:"text",placeholder:"Jobbtitel, nyckelord eller stad","aria-label":"Search bar for job ads"})]}),g.jsxs("div",{className:"tag-container",children:[g.jsx("div",{onClick:d,className:"tag",children:"Stockholm"}),g.jsx("div",{onClick:d,className:"tag",children:"Jönköping"}),g.jsx("div",{onClick:d,className:"tag",children:"Göteborg"})]})]}),Array.isArray(h)&&h.length!==0&&g.jsx(V9,{jobs:h}),i&&g.jsx("div",{className:"error-container",children:g.jsx("h1",{children:i})})]})}const W9="/Jobchaser/assets/Female%20pp-Cja9UEM7.png",H9="/Jobchaser/assets/Male%20pp-gAItaz0u.png",G9="/Jobchaser/assets/Female%20pp-1-Dy8qnpCo.png",K9="/Jobchaser/assets/Male%20pp-1-e-OwLf6a.png",Y9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgB3ZS9DcIwEIXfORGigxGyQiREnRQBSrJBsgFMwgiwAfRQpAMBEhmBEVIi8mMsByElGAnK4zXWPX/3JMv2AS3Jc7DED+LAiwZwDCJIRPIwnuGbQCY86c2L10fZ8VDJhXIcZWXKDWEXKblJ9hbGjCd5Gq2VMcUnEVY02MavQIa8gH2PIelqBpRv5fOGx5AX+vpL4RuhXPjt58GRrwdP95YZoT/x60Pm+rMqyQRUhXrVpegZm5nxti5KNY0suDTcpc+2jdxPHBQWGUOZ8Q90bh3S9+OHDQAAAABJRU5ErkJggg==",q9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgB1dQxT8JAFAfw/6OtxqXB6OYgiR9ASYS5mJD4CXR1d3F2Mf0klm/gLEZkIpGElITv0bGloTweBzQtLQlsxxt67d3vLn3X1wO2gv/bdzggdPPx5L3gK7kFB04NhJ5q93kBDT2fXfWCIMj5XJKwrA+5VmFan9gnNPRMJ1XDMHKepBxeQHQr++DIc/ZT/8mwLzvZp/vvr02n7n568YT48ll5IvKZuW+u6RuK4aiJ82RcHDoOLwnKHIwr1Ox6glyUBrvU/PWyPcfkJUnXtm2P0o5hm7cRNbqEHaGrz5QrJEHl1cHDg8dahvvp3ejhunRBjT1xnPowDJVfna7mTBDLz8wtavzUly0YHYTGedmiOvvTm9d6kiQtKdVOFEXKLwBq9QCB/JQuZAAAAABJRU5ErkJggg==",ny="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB1ZRPToQwFMbfo8Swc7gBcwQSY+KOzahLuQHcwDnJHMG5gS5NdMFOoyZyA+cG/FkZp536UXQSLCS6qy8hpV9/PPryvpboR+iXxRX9IVzj27a1eG+Q8GmRkaZMP55d0m824BiPAjMMWdM0A55NstdkRuogoZ1eQYkg1VBT8mXJcVFbP3eMr6pqJoRI8LrCY3hmTqWUZRiGNevn02skuKCpYFrz0V2+34BjPLoHnqZ5orVH/kdOmjfjCaGL7XKgOcYrpXKt9Sjf6Vhf9nZ9OI/IV28WJcWcT26tBK7xsGsEu1o8CpzDrpv+4gneLZ//K92c2Wm9L3JrDitCF8S71Ixm6h2OfuoaT988Fehe2o3dJAgCw/tmSaFiQTEf35df8I2xjBQ8mtI1Hh1DcTGsuec7C0Mz/CcdKSqPumuAJwAAAABJRU5ErkJggg==",Q9=[{id:"DA86E2400000000006174283575328768",userName:"Sofia Lundén",header:"Fantastiskt jobbsökningsplattform!",content:"Jag har testat många jobbsökningsplattformar, men Jobchaser sticker ut för sin effektivitet och effektivitet. Sökfilterna är omfattande, vilket gör att jag snabbt kan begränsa mina alternativ. Dessutom håller notifieringssystemet mig uppdaterad om nya listor som matchar mina kriterier. Tack vare Jobchaser landade jag mitt drömjobb inom veckor efter att ha använt plattformen. Kunde inte vara lyckligare!"},{id:"IO91FPSA2019418445971456",userName:"Douglas Fowler",header:"Effektiv och effektiv.",content:"Jobchaser har varit en absolut spelväxlare för mig i min jobbjakt. Gränssnittet är användarvänligt, vilket gör det enkelt att navigera bland listor och ansöka om relevanta positioner. Jag uppskattar särskilt funktionen för personliga jobbförslag, som har hjälpt mig att upptäcka möjligheter jag annars inte skulle ha hittat. Rekommenderas varmt!"},{id:"SD134UQB6568605363732480",userName:"Catherine Simpson",header:"Ett måste-ha verktyg för jobbsökande!",content:"Jobchaser är ett måste-ha verktyg för alla som är på jobbjakt. Det som skiljer det åt är dess intuitiva design och robusta funktioner. Möjligheten att spara favoritlistor och följa ansökningsstatus har avsevärt effektiviserat min jobbsökningsprocess. Plattformens omfattande databas ser till att jag aldrig tar slut på alternativ. Kudos till Jobchaser-teamet för att ha skapat en sådan värdefull resurs."},{id:"RX85MDYP8606513606164480",userName:"Simon Liamsson",header:"Oersättlig resurs för jobbsökande!",content:"Som nyligen examinerad som går in på arbetsmarknaden har Jobchaser varit en ovärderlig resurs. Inte bara samlar det jobblistor från olika källor, utan det ger också insikter om företagskulturer och intervjuupplevelser delade av andra användare. Den gemenskapliga aspekten lägger till en unik dimension på plattformen, vilket främjar samarbete och stöd bland jobbsökande. Tack vare Jobchaser säkrade jag flera jobberbjudanden på en konkurrensutsatt marknad. Mycket imponerad!"}],J9=()=>{const{isDarkTheme:t,color:e}=T.useContext(Kt),n=[W9,H9,G9,K9],r=[Y9,q9,ny,ny];return g.jsxs("div",{style:{color:e},className:"reviews-container",children:[g.jsx("h3",{style:{color:e},children:"Recensioner"}),g.jsx("ul",{className:"reviews-card-layout",children:Q9.map((i,s)=>g.jsxs("li",{style:{background:t?"black":"white",border:"1px solid whitesmoke"},tabIndex:0,"aria-label":"A review card",className:"review-card",children:[g.jsxs("div",{className:"upper-container",children:[g.jsx("div",{className:"pp-container",children:g.jsx("img",{src:n[s],alt:"Profile pic"})}),g.jsx("div",{className:"ratings-container",children:g.jsx("img",{loading:"lazy",src:r[s],alt:"Ratings, five stars"})})]}),g.jsxs("article",{children:[g.jsxs("h4",{children:[g.jsx("span",{className:"user-highlight",children:i.userName})," har lämnat en recension."]}),g.jsxs("div",{className:"text-container",children:[g.jsx("h5",{children:i.header}),g.jsx("p",{children:i.content})]})]})]},i.id))})]})},X9="/Jobchaser/assets/amazon-white-color-B6Vmuslb.svg",Z9="/Jobchaser/assets/amazon-dark-color-DRi9NAKT.svg",eD="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.0014%2016.3109C30.0014%2015.1598%2029.9061%2014.3198%2029.6998%2013.4487H16.2871V18.6442H24.1601C24.0014%2019.9354%2023.1442%2021.8798%2021.2394%2023.1864L21.2127%2023.3604L25.4536%2026.58L25.7474%2026.6087C28.4458%2024.1665%2030.0014%2020.5731%2030.0014%2016.3109Z'%20fill='%234285F4'/%3e%3cpath%20d='M16.2863%2029.9998C20.1434%2029.9998%2023.3814%2028.7553%2025.7466%2026.6086L21.2386%2023.1863C20.0323%2024.0108%2018.4132%2024.5863%2016.2863%2024.5863C12.5086%2024.5863%209.30225%2022.1441%208.15929%2018.7686L7.99176%2018.7825L3.58208%2022.127L3.52441%2022.2841C5.87359%2026.8574%2010.699%2029.9998%2016.2863%2029.9998Z'%20fill='%2334A853'/%3e%3cpath%20d='M8.15964%2018.769C7.85806%2017.8979%207.68352%2016.9645%207.68352%2016.0001C7.68352%2015.0356%207.85806%2014.1023%208.14377%2013.2312L8.13578%2013.0456L3.67083%209.64746L3.52475%209.71556C2.55654%2011.6134%202.00098%2013.7445%202.00098%2016.0001C2.00098%2018.2556%202.55654%2020.3867%203.52475%2022.2845L8.15964%2018.769Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M16.2864%207.4133C18.9689%207.4133%2020.7784%208.54885%2021.8102%209.4978L25.8419%205.64C23.3658%203.38445%2020.1435%202%2016.2864%202C10.699%202%205.8736%205.1422%203.52441%209.71549L8.14345%2013.2311C9.30229%209.85555%2012.5086%207.4133%2016.2864%207.4133Z'%20fill='%23EB4335'/%3e%3c/svg%3e",tD="/Jobchaser/assets/netflix-icon-C9XciuAf.svg",nD="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-3%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eAndroid-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-304.000000,%20-560.000000)'%20fill='%2395CF00'%3e%3cpath%20d='M330.727009,569.600905%20C329.935377,569.600905%20329.294532,568.977195%20329.294532,568.206729%20C329.294532,567.436264%20329.935377,566.815376%20330.727009,566.815376%20C331.518641,566.815376%20332.159486,567.436264%20332.159486,568.206729%20C332.159486,568.977195%20331.518641,569.600905%20330.727009,569.600905%20L330.727009,569.600905%20Z%20M319.272991,569.600905%20C318.481359,569.600905%20317.840514,568.977195%20317.840514,568.206729%20C317.840514,567.436264%20318.481359,566.815376%20319.272991,566.815376%20C320.064623,566.815376%20320.705468,567.436264%20320.705468,568.206729%20C320.705468,568.977195%20320.064623,569.600905%20319.272991,569.600905%20L319.272991,569.600905%20Z%20M331.573737,564.018558%20L332.107291,563.233981%20L332.640845,562.460694%20L333.829743,560.722208%20C333.97763,560.507719%20333.916736,560.219853%20333.696355,560.078742%20C333.478873,559.934809%20333.180199,559.994075%20333.038111,560.208564%20L331.222867,562.852982%20L330.677713,563.648847%20C328.952361,562.996915%20327.029826,562.632849%20325,562.632849%20C322.973074,562.632849%20321.047639,562.996915%20319.322287,563.648847%20L318.780033,562.852982%20L318.243579,562.071228%20L316.967688,560.208564%20C316.819801,559.994075%20316.524027,559.937631%20316.303645,560.078742%20C316.086164,560.219853%20316.025269,560.507719%20316.170257,560.722208%20L317.359155,562.460694%20L317.892709,563.233981%20L318.429163,564.018558%20C314.37821,565.855822%20311.637945,569.335616%20311.637945,573.317766%20L338.362055,573.317766%20C338.362055,569.335616%20335.62179,565.855822%20331.573737,564.018558%20Z%20M311.843828,575.174785%20L311.637945,575.174785%20L311.637945,595.613286%20C311.637945,597.236061%20312.992129,598.556859%20314.662386,598.556859%20L316.842999,598.556859%20C316.767606,598.802392%20316.727009,599.059214%20316.727009,599.330147%20L316.727009,605.214471%20C316.727009,606.75258%20318.011599,608%20319.591964,608%20C321.172328,608%20322.456918,606.75258%20322.456918,605.214471%20L322.456918,599.330147%20C322.456918,599.059214%20322.413422,598.802392%20322.340928,598.556859%20L327.659072,598.556859%20C327.586578,598.802392%20327.545982,599.059214%20327.545982,599.330147%20L327.545982,605.214471%20C327.545982,606.75258%20328.827672,608%20330.408036,608%20C331.991301,608%20333.275891,606.75258%20333.275891,605.214471%20L333.275891,599.330147%20C333.275891,599.059214%20333.232394,598.802392%20333.157001,598.556859%20L335.340514,598.556859%20C337.010771,598.556859%20338.362055,597.236061%20338.362055,595.613286%20L338.362055,575.174785%20L311.843828,575.174785%20Z%20M306.864954,575.174785%20C305.28169,575.174785%20304,576.422205%20304,577.960314%20L304,589.884184%20C304,591.422293%20305.28169,592.669713%20306.864954,592.669713%20C308.445319,592.669713%20309.727009,591.422293%20309.727009,589.884184%20L309.727009,577.960314%20C309.727009,576.422205%20308.445319,575.174785%20306.864954,575.174785%20Z%20M343.137945,575.174785%20C341.554681,575.174785%20340.272991,576.422205%20340.272991,577.960314%20L340.272991,589.884184%20C340.272991,591.422293%20341.554681,592.669713%20343.137945,592.669713%20C344.71831,592.669713%20346,591.422293%20346,589.884184%20L346,577.960314%20C346,576.422205%20344.71831,575.174785%20343.137945,575.174785%20Z'%20id='Android'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",rD="/Jobchaser/assets/home-page-hero-pic-BpeKQlgR.avif";function iD(){const{isDarkTheme:t,color:e,setTextColorHeader:n,isOnline:r}=T.useContext(Kt);n("white");const i=Yu();return Pl(),T.useEffect(()=>{const s=new IntersectionObserver(l=>{l.forEach(a=>{a.isIntersecting&&a.target.classList.add("show-logo")})});Array.from(document.getElementsByClassName("company-logo-container")).forEach(l=>s.observe(l))},[]),g.jsx(g.Fragment,{children:g.jsxs("div",{className:"home-layout",children:[g.jsxs("div",{className:"hero-container",children:[g.jsxs("picture",{children:[g.jsx("source",{type:"image/webp"}),g.jsx("img",{className:"home-hero-img",loading:"lazy",src:rD,alt:"hero image of a women laughing"})]}),g.jsxs("div",{className:"opening-text-container",children:[g.jsxs("article",{className:"opening-text",children:[g.jsxs("h1",{children:["Vi hjälper dig med ditt ",g.jsx("span",{style:{color:"#f09711"},children:"jobbsökande!"})]}),g.jsx("p",{children:"Välkommen till nästa steg i din karriär - vi tar dig närmare anställningen du strävar efter."})]}),g.jsxs("div",{className:"btn-layout",children:[g.jsx("button",{className:"available-jobs-btn",onClick:()=>i("/Jobchaser/Find-job"),children:"Lediga jobb"}),g.jsx("button",{className:"available-jobs-btn",onClick:()=>i(r?"/Jobchaser/User-profile":"/Jobchaser/Sign-in"),children:r?"Profil":"Registrera dig"})]})]})]}),g.jsxs("div",{className:"middle-container",children:[g.jsx("h2",{style:{color:e},children:"Partnerskap med företag världen över"}),g.jsxs("div",{className:"companies-logo-layout",children:[g.jsx("div",{className:"company-logo-container",children:g.jsx("img",{loading:"lazy",src:t?X9:Z9,alt:"Amazon logo"})}),g.jsx("div",{className:"company-logo-container",children:g.jsx("img",{loading:"lazy",src:eD,alt:"Google logo"})}),g.jsx("div",{className:"company-logo-container",children:g.jsx("img",{loading:"lazy",src:tD,alt:"Netflix logo"})}),g.jsx("div",{className:"company-logo-container",children:g.jsx("img",{loading:"lazy",src:nD,alt:"Android logo"})})]})]}),g.jsx(J9,{})]})})}var Ol=t=>t.type==="checkbox",$i=t=>t instanceof Date,ot=t=>t==null;const RC=t=>typeof t=="object";var Ye=t=>!ot(t)&&!Array.isArray(t)&&RC(t)&&!$i(t),sD=t=>Ye(t)&&t.target?Ol(t.target)?t.target.checked:t.target.value:t,oD=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,lD=(t,e)=>t.has(oD(e)),Dl=t=>Array.isArray(t)?t.filter(Boolean):[],Fe=t=>t===void 0,j=(t,e,n)=>{if(!e||!Ye(t))return n;const r=Dl(e.split(/[,[\].]+?/)).reduce((i,s)=>ot(i)?i:i[s],t);return Fe(r)||r===t?Fe(t[e])?n:t[e]:r};const ry={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},tn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},kn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Zt.createContext(null);var aD=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==tn.all&&(e._proxyFormState[o]=!r||tn.all),n&&(n[o]=!0),t[o]}});return i},Lt=t=>Ye(t)&&!Object.keys(t).length,uD=(t,e,n)=>{const{name:r,...i}=t;return Lt(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(s=>e[s]===(!n||tn.all))},Dh=t=>Array.isArray(t)?t:[t];function cD(t){const e=Zt.useRef(t);e.current=t,Zt.useEffect(()=>{const n=!t.disabled&&e.current.subject.subscribe({next:e.current.callback});return()=>{n&&n.unsubscribe()}},[t.disabled])}var vn=t=>typeof t=="string",hD=(t,e,n,r)=>{const i=Array.isArray(t);return vn(t)?(r&&e.watch.add(t),j(n,t)):i?t.map(s=>(r&&e.watch.add(s),j(n,s))):(r&&(e.watchAll=!0),n)},ku=t=>typeof t=="function",NC=t=>{for(const e in t)if(ku(t[e]))return!0;return!1},dD=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},Kg=t=>/^\w*$/.test(t),xC=t=>Dl(t.replace(/["|']|\]/g,"").split(/\.|\[/));function fe(t,e,n){let r=-1;const i=Kg(e)?[e]:xC(e),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let a=n;if(r!==o){const u=t[l];a=Ye(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[l]=a,t=t[l]}return t}const _f=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=j(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Ye(o)&&_f(o,e)}}};var iy=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),fD=(t,e,n)=>{const r=Dl(j(t,n));return fe(r,"root",e[n]),fe(t,n,r),t},Au=t=>typeof t=="boolean",Yg=t=>t.type==="file",Ea=t=>vn(t)||Zt.isValidElement(t),qg=t=>t.type==="radio",Ru=t=>t instanceof RegExp;const sy={value:!1,isValid:!1},oy={value:!0,isValid:!0};var PC=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Fe(t[0].attributes.value)?Fe(t[0].value)||t[0].value===""?oy:{value:t[0].value,isValid:!0}:oy:sy}return sy};const ly={isValid:!1,value:null};var OC=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,ly):ly;function ay(t,e,n="validate"){if(Ea(t)||Array.isArray(t)&&t.every(Ea)||Au(t)&&!t)return{type:n,message:Ea(t)?t:"",ref:e}}var Ii=t=>Ye(t)&&!Ru(t)?t:{value:t,message:""},uy=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:l,maxLength:a,minLength:u,min:h,max:c,pattern:d,validate:p,name:v,valueAsNumber:w,mount:I,disabled:m}=t._f;if(!I||m)return{};const f=o?o[0]:s,y=B=>{r&&f.reportValidity&&(f.setCustomValidity(Au(B)?"":B||" "),f.reportValidity())},E={},N=qg(s),L=Ol(s),D=N||L,b=(w||Yg(s))&&!s.value||e===""||Array.isArray(e)&&!e.length,q=dD.bind(null,v,n,E),H=(B,J,ue,Ne=kn.maxLength,Ct=kn.minLength)=>{const Qe=B?J:ue;E[v]={type:B?Ne:Ct,message:Qe,ref:s,...q(B?Ne:Ct,Qe)}};if(i?!Array.isArray(e)||!e.length:l&&(!D&&(b||ot(e))||Au(e)&&!e||L&&!PC(o).isValid||N&&!OC(o).isValid)){const{value:B,message:J}=Ea(l)?{value:!!l,message:l}:Ii(l);if(B&&(E[v]={type:kn.required,message:J,ref:f,...q(kn.required,J)},!n))return y(J),E}if(!b&&(!ot(h)||!ot(c))){let B,J;const ue=Ii(c),Ne=Ii(h);if(!ot(e)&&!isNaN(e)){const Ct=s.valueAsNumber||e&&+e;ot(ue.value)||(B=Ct>ue.value),ot(Ne.value)||(J=Ct<Ne.value)}else{const Ct=s.valueAsDate||new Date(e),Qe=V=>new Date(new Date().toDateString()+" "+V),Tn=s.type=="time",P=s.type=="week";vn(ue.value)&&e&&(B=Tn?Qe(e)>Qe(ue.value):P?e>ue.value:Ct>new Date(ue.value)),vn(Ne.value)&&e&&(J=Tn?Qe(e)<Qe(Ne.value):P?e<Ne.value:Ct<new Date(Ne.value))}if((B||J)&&(H(!!B,ue.message,Ne.message,kn.max,kn.min),!n))return y(E[v].message),E}if((a||u)&&!b&&(vn(e)||i&&Array.isArray(e))){const B=Ii(a),J=Ii(u),ue=!ot(B.value)&&e.length>B.value,Ne=!ot(J.value)&&e.length<J.value;if((ue||Ne)&&(H(ue,B.message,J.message),!n))return y(E[v].message),E}if(d&&!b&&vn(e)){const{value:B,message:J}=Ii(d);if(Ru(B)&&!e.match(B)&&(E[v]={type:kn.pattern,message:J,ref:s,...q(kn.pattern,J)},!n))return y(J),E}if(p){if(ku(p)){const B=await p(e),J=ay(B,f);if(J&&(E[v]={...J,...q(kn.validate,J.message)},!n))return y(J.message),E}else if(Ye(p)){let B={};for(const J in p){if(!Lt(B)&&!n)break;const ue=ay(await p[J](e),f,J);ue&&(B={...ue,...q(J,ue.message)},y(ue.message),n&&(E[v]=B))}if(!Lt(B)&&(E[v]={ref:f,...B},!n))return E}}return y(!0),E},pD=t=>{const e=t.constructor&&t.constructor.prototype;return Ye(e)&&e.hasOwnProperty("isPrototypeOf")},wf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ur(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(wf&&(t instanceof Blob||t instanceof FileList))&&(n||Ye(t)))if(e=n?[]:{},!Array.isArray(t)&&!pD(t))e=t;else for(const r in t)e[r]=Ur(t[r]);else return t;return e}var cy=t=>({isOnSubmit:!t||t===tn.onSubmit,isOnBlur:t===tn.onBlur,isOnChange:t===tn.onChange,isOnAll:t===tn.all,isOnTouch:t===tn.onTouched});function gD(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Fe(t)?r++:t[e[r++]];return t}function mD(t){for(const e in t)if(!Fe(t[e]))return!1;return!0}function it(t,e){const n=Kg(e)?[e]:xC(e),r=n.length==1?t:gD(t,n),i=n[n.length-1];let s;r&&delete r[i];for(let o=0;o<n.slice(0,-1).length;o++){let l=-1,a;const u=n.slice(0,-(o+1)),h=u.length-1;for(o>0&&(s=t);++l<u.length;){const c=u[l];a=a?a[c]:t[c],h===l&&(Ye(a)&&Lt(a)||Array.isArray(a)&&mD(a))&&(s?delete s[c]:delete t[c]),s=a}}return t}function Lh(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var Nu=t=>ot(t)||!RC(t);function Bi(t,e){if(Nu(t)||Nu(e))return t===e;if($i(t)&&$i(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if($i(s)&&$i(o)||Ye(s)&&Ye(o)||Array.isArray(s)&&Array.isArray(o)?!Bi(s,o):s!==o)return!1}}return!0}var Ef=t=>{const e=t?t.ownerDocument:0,n=e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement;return t instanceof n},DC=t=>t.type==="select-multiple",vD=t=>qg(t)||Ol(t),Mh=t=>Ef(t)&&t.isConnected;function xu(t,e={}){const n=Array.isArray(t);if(Ye(t)||n)for(const r in t)Array.isArray(t[r])||Ye(t[r])&&!NC(t[r])?(e[r]=Array.isArray(t[r])?[]:{},xu(t[r],e[r])):ot(t[r])||(e[r]=!0);return e}function LC(t,e,n){const r=Array.isArray(t);if(Ye(t)||r)for(const i in t)Array.isArray(t[i])||Ye(t[i])&&!NC(t[i])?Fe(e)||Nu(n[i])?n[i]=Array.isArray(t[i])?xu(t[i],[]):{...xu(t[i])}:LC(t[i],ot(e)?{}:e[i],n[i]):n[i]=!Bi(t[i],e[i]);return n}var bh=(t,e)=>LC(t,e,xu(e)),MC=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Fe(t)?t:e?t===""?NaN:t&&+t:n&&vn(t)?new Date(t):r?r(t):t;function Fh(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Yg(e)?e.files:qg(e)?OC(t.refs).value:DC(e)?[...e.selectedOptions].map(({value:n})=>n):Ol(e)?PC(t.refs).value:MC(Fe(e.value)?t.ref.value:e.value,t)}var yD=(t,e,n,r)=>{const i={};for(const s of t){const o=j(e,s);o&&fe(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},zs=t=>Fe(t)?void 0:Ru(t)?t.source:Ye(t)?Ru(t.value)?t.value.source:t.value:t,_D=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function hy(t,e,n){const r=j(t,n);if(r||Kg(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=j(e,s),l=j(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};i.pop()}return{name:n}}var wD=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,ED=(t,e)=>!Dl(j(t,e)).length&&it(t,e);const CD={mode:tn.onSubmit,reValidateMode:tn.onChange,shouldFocusError:!0};function SD(t={}){let e={...CD,...t},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},i=Ur(e.defaultValues)||{},s=e.shouldUnregister?{}:Ur(i),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},a,u=0,h={};const c={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:Lh(),array:Lh(),state:Lh()},p=cy(e.mode),v=cy(e.reValidateMode),w=e.criteriaMode===tn.all,I=_=>C=>{clearTimeout(u),u=window.setTimeout(_,C)},m=async _=>{let C=!1;return c.isValid&&(C=e.resolver?Lt((await D()).errors):await q(r,!0),!_&&C!==n.isValid&&(n.isValid=C,d.state.next({isValid:C}))),C},f=(_,C=[],S,O,F=!0,A=!0)=>{if(O&&S){if(o.action=!0,A&&Array.isArray(j(r,_))){const U=S(j(r,_),O.argA,O.argB);F&&fe(r,_,U)}if(c.errors&&A&&Array.isArray(j(n.errors,_))){const U=S(j(n.errors,_),O.argA,O.argB);F&&fe(n.errors,_,U),ED(n.errors,_)}if(c.touchedFields&&A&&Array.isArray(j(n.touchedFields,_))){const U=S(j(n.touchedFields,_),O.argA,O.argB);F&&fe(n.touchedFields,_,U)}c.dirtyFields&&(n.dirtyFields=bh(i,s)),d.state.next({isDirty:B(_,C),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else fe(s,_,C)},y=(_,C)=>{fe(n.errors,_,C),d.state.next({errors:n.errors})},E=(_,C,S,O)=>{const F=j(r,_);if(F){const A=j(s,_,Fe(S)?j(i,_):S);Fe(A)||O&&O.defaultChecked||C?fe(s,_,C?A:Fh(F._f)):Ne(_,A),o.mount&&m()}},N=(_,C,S,O,F)=>{let A=!1;const U={name:_},Ae=j(n.touchedFields,_);if(c.isDirty){const St=n.isDirty;n.isDirty=U.isDirty=B(),A=St!==U.isDirty}if(c.dirtyFields&&(!S||O)){const St=j(n.dirtyFields,_);Bi(j(i,_),C)?it(n.dirtyFields,_):fe(n.dirtyFields,_,!0),U.dirtyFields=n.dirtyFields,A=A||St!==j(n.dirtyFields,_)}return S&&!Ae&&(fe(n.touchedFields,_,S),U.touchedFields=n.touchedFields,A=A||c.touchedFields&&Ae!==S),A&&F&&d.state.next(U),A?U:{}},L=async(_,C,S,O)=>{const F=j(n.errors,_),A=c.isValid&&n.isValid!==C;if(t.delayError&&S?(a=I(()=>y(_,S)),a(t.delayError)):(clearTimeout(u),a=null,S?fe(n.errors,_,S):it(n.errors,_)),(S?!Bi(F,S):F)||!Lt(O)||A){const U={...O,...A?{isValid:C}:{},errors:n.errors,name:_};n={...n,...U},d.state.next(U)}h[_]--,c.isValidating&&!Object.values(h).some(U=>U)&&(d.state.next({isValidating:!1}),h={})},D=async _=>e.resolver?await e.resolver({...s},e.context,yD(_||l.mount,r,e.criteriaMode,e.shouldUseNativeValidation)):{},b=async _=>{const{errors:C}=await D();if(_)for(const S of _){const O=j(C,S);O?fe(n.errors,S,O):it(n.errors,S)}else n.errors=C;return C},q=async(_,C,S={valid:!0})=>{for(const O in _){const F=_[O];if(F){const{_f:A,...U}=F;if(A){const Ae=l.array.has(A.name),St=await uy(F,j(s,A.name),w,e.shouldUseNativeValidation,Ae);if(St[A.name]&&(S.valid=!1,C))break;!C&&(j(St,A.name)?Ae?fD(n.errors,St,A.name):fe(n.errors,A.name,St[A.name]):it(n.errors,A.name))}U&&await q(U,C,S)}}return S.valid},H=()=>{for(const _ of l.unMount){const C=j(r,_);C&&(C._f.refs?C._f.refs.every(S=>!Mh(S)):!Mh(C._f.ref))&&Yt(_)}l.unMount=new Set},B=(_,C)=>(_&&C&&fe(s,_,C),!Bi(V(),i)),J=(_,C,S)=>{const O={...o.mount?s:Fe(C)?i:vn(_)?{[_]:C}:C};return hD(_,l,O,S)},ue=_=>Dl(j(o.mount?s:i,_,t.shouldUnregister?j(i,_,[]):[])),Ne=(_,C,S={})=>{const O=j(r,_);let F=C;if(O){const A=O._f;A&&(!A.disabled&&fe(s,_,MC(C,A)),F=wf&&Ef(A.ref)&&ot(C)?"":C,DC(A.ref)?[...A.ref.options].forEach(U=>U.selected=F.includes(U.value)):A.refs?Ol(A.ref)?A.refs.length>1?A.refs.forEach(U=>(!U.defaultChecked||!U.disabled)&&(U.checked=Array.isArray(F)?!!F.find(Ae=>Ae===U.value):F===U.value)):A.refs[0]&&(A.refs[0].checked=!!F):A.refs.forEach(U=>U.checked=U.value===F):Yg(A.ref)?A.ref.value="":(A.ref.value=F,A.ref.type||d.watch.next({name:_})))}(S.shouldDirty||S.shouldTouch)&&N(_,F,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&P(_)},Ct=(_,C,S)=>{for(const O in C){const F=C[O],A=`${_}.${O}`,U=j(r,A);(l.array.has(_)||!Nu(F)||U&&!U._f)&&!$i(F)?Ct(A,F,S):Ne(A,F,S)}},Qe=(_,C,S={})=>{const O=j(r,_),F=l.array.has(_),A=Ur(C);fe(s,_,A),F?(d.array.next({name:_,values:s}),(c.isDirty||c.dirtyFields)&&S.shouldDirty&&(n.dirtyFields=bh(i,s),d.state.next({name:_,dirtyFields:n.dirtyFields,isDirty:B(_,A)}))):O&&!O._f&&!ot(A)?Ct(_,A,S):Ne(_,A,S),iy(_,l)&&d.state.next({}),d.watch.next({name:_})},Tn=async _=>{const C=_.target;let S=C.name;const O=j(r,S);if(O){let F,A;const U=C.type?Fh(O._f):sD(_),Ae=_.type===ry.BLUR||_.type===ry.FOCUS_OUT,St=!_D(O._f)&&!e.resolver&&!j(n.errors,S)&&!O._f.deps||wD(Ae,j(n.touchedFields,S),n.isSubmitted,v,p),Ll=iy(S,l,Ae);fe(s,S,U),Ae?(O._f.onBlur&&O._f.onBlur(_),a&&a(0)):O._f.onChange&&O._f.onChange(_);const Pc=N(S,U,Ae,!1),jC=!Lt(Pc)||Ll;if(!Ae&&d.watch.next({name:S,type:_.type}),St)return jC&&d.state.next({name:S,...Ll?{}:Pc});if(!Ae&&Ll&&d.state.next({}),h[S]=(h[S],1),d.state.next({isValidating:!0}),e.resolver){const{errors:Qg}=await D([S]),UC=hy(n.errors,r,S),Jg=hy(Qg,r,UC.name||S);F=Jg.error,S=Jg.name,A=Lt(Qg)}else F=(await uy(O,j(s,S),w,e.shouldUseNativeValidation))[S],A=await m(!0);O._f.deps&&P(O._f.deps),L(S,A,F,Pc)}},P=async(_,C={})=>{let S,O;const F=Dh(_);if(d.state.next({isValidating:!0}),e.resolver){const A=await b(Fe(_)?_:F);S=Lt(A),O=_?!F.some(U=>j(A,U)):S}else _?(O=(await Promise.all(F.map(async A=>{const U=j(r,A);return await q(U&&U._f?{[A]:U}:U)}))).every(Boolean),!(!O&&!n.isValid)&&m()):O=S=await q(r);return d.state.next({...!vn(_)||c.isValid&&S!==n.isValid?{}:{name:_},...e.resolver||!_?{isValid:S}:{},errors:n.errors,isValidating:!1}),C.shouldFocus&&!O&&_f(r,A=>A&&j(n.errors,A),_?F:l.mount),O},V=_=>{const C={...i,...o.mount?s:{}};return Fe(_)?C:vn(_)?j(C,_):_.map(S=>j(C,S))},G=(_,C)=>({invalid:!!j((C||n).errors,_),isDirty:!!j((C||n).dirtyFields,_),isTouched:!!j((C||n).touchedFields,_),error:j((C||n).errors,_)}),ge=_=>{_?Dh(_).forEach(C=>it(n.errors,C)):n.errors={},d.state.next({errors:n.errors})},ke=(_,C,S)=>{const O=(j(r,_,{_f:{}})._f||{}).ref;fe(n.errors,_,{...C,ref:O}),d.state.next({name:_,errors:n.errors,isValid:!1}),S&&S.shouldFocus&&O&&O.focus&&O.focus()},_i=(_,C)=>ku(_)?d.watch.subscribe({next:S=>_(J(void 0,C),S)}):J(_,C,!0),Yt=(_,C={})=>{for(const S of _?Dh(_):l.mount)l.mount.delete(S),l.array.delete(S),j(r,S)&&(C.keepValue||(it(r,S),it(s,S)),!C.keepError&&it(n.errors,S),!C.keepDirty&&it(n.dirtyFields,S),!C.keepTouched&&it(n.touchedFields,S),!e.shouldUnregister&&!C.keepDefaultValue&&it(i,S));d.watch.next({}),d.state.next({...n,...C.keepDirty?{isDirty:B()}:{}}),!C.keepIsValid&&m()},Lr=(_,C={})=>{let S=j(r,_);const O=Au(C.disabled);return fe(r,_,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:_}},name:_,mount:!0,...C}}),l.mount.add(_),S?O&&fe(s,_,C.disabled?void 0:j(s,_,Fh(S._f))):E(_,!0,C.value),{...O?{disabled:C.disabled}:{},...e.shouldUseNativeValidation?{required:!!C.required,min:zs(C.min),max:zs(C.max),minLength:zs(C.minLength),maxLength:zs(C.maxLength),pattern:zs(C.pattern)}:{},name:_,onChange:Tn,onBlur:Tn,ref:F=>{if(F){Lr(_,C),S=j(r,_);const A=Fe(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,U=vD(A),Ae=S._f.refs||[];if(U?Ae.find(St=>St===A):A===S._f.ref)return;fe(r,_,{_f:{...S._f,...U?{refs:[...Ae.filter(Mh),A,...Array.isArray(j(i,_))?[{}]:[]],ref:{type:A.type,name:_}}:{ref:A}}}),E(_,!1,void 0,A)}else S=j(r,_,{}),S._f&&(S._f.mount=!1),(e.shouldUnregister||C.shouldUnregister)&&!(lD(l.array,_)&&o.action)&&l.unMount.add(_)}}},cn=()=>e.shouldFocusError&&_f(r,_=>_&&j(n.errors,_),l.mount),wi=(_,C)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let O=!0,F=Ur(s);d.state.next({isSubmitting:!0});try{if(e.resolver){const{errors:A,values:U}=await D();n.errors=A,F=U}else await q(r);Lt(n.errors)?(d.state.next({errors:{},isSubmitting:!0}),await _(F,S)):(C&&await C({...n.errors},S),cn())}catch(A){throw O=!1,A}finally{n.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Lt(n.errors)&&O,submitCount:n.submitCount+1,errors:n.errors})}},bC=(_,C={})=>{j(r,_)&&(Fe(C.defaultValue)?Qe(_,j(i,_)):(Qe(_,C.defaultValue),fe(i,_,C.defaultValue)),C.keepTouched||it(n.touchedFields,_),C.keepDirty||(it(n.dirtyFields,_),n.isDirty=C.defaultValue?B(_,j(i,_)):B()),C.keepError||(it(n.errors,_),c.isValid&&m()),d.state.next({...n}))},FC=(_,C={})=>{const S=_||i,O=Ur(S),F=_&&!Lt(_)?O:i;if(C.keepDefaultValues||(i=S),!C.keepValues){if(C.keepDirtyValues)for(const A of l.mount)j(n.dirtyFields,A)?fe(F,A,j(s,A)):Qe(A,j(F,A));else{if(wf&&Fe(_))for(const A of l.mount){const U=j(r,A);if(U&&U._f){const Ae=Array.isArray(U._f.refs)?U._f.refs[0]:U._f.ref;try{if(Ef(Ae)){Ae.closest("form").reset();break}}catch{}}}r={}}s=t.shouldUnregister?C.keepDefaultValues?Ur(i):{}:O,d.array.next({values:F}),d.watch.next({values:F})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!c.isValid||!!C.keepIsValid,o.watch=!!t.shouldUnregister,d.state.next({submitCount:C.keepSubmitCount?n.submitCount:0,isDirty:C.keepDirty||C.keepDirtyValues?n.isDirty:!!(C.keepDefaultValues&&!Bi(_,i)),isSubmitted:C.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:C.keepDirty||C.keepDirtyValues?n.dirtyFields:C.keepDefaultValues&&_?bh(i,_):{},touchedFields:C.keepTouched?n.touchedFields:{},errors:C.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:Lr,unregister:Yt,getFieldState:G,_executeSchema:D,_focusError:cn,_getWatch:J,_getDirty:B,_updateValid:m,_removeUnmounted:H,_updateFieldArray:f,_getFieldArray:ue,_subjects:d,_proxyFormState:c,get _fields(){return r},get _formValues(){return s},get _stateFlags(){return o},set _stateFlags(_){o=_},get _defaultValues(){return i},get _names(){return l},set _names(_){l=_},get _formState(){return n},set _formState(_){n=_},get _options(){return e},set _options(_){e={...e,..._}}},trigger:P,register:Lr,handleSubmit:wi,watch:_i,setValue:Qe,getValues:V,reset:(_,C)=>FC(ku(_)?_(s):_,C),resetField:bC,clearErrors:ge,unregister:Yt,setError:ke,setFocus:(_,C={})=>{const S=j(r,_),O=S&&S._f;if(O){const F=O.refs?O.refs[0]:O.ref;F.focus&&(F.focus(),C.shouldSelect&&F.select())}},getFieldState:G}}function ID(t={}){const e=Zt.useRef(),[n,r]=Zt.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:t.defaultValues});e.current||(e.current={...SD(t),formState:n});const i=e.current.control;return i._options=t,cD({subject:i._subjects.state,callback:Zt.useCallback(s=>{uD(s,i._proxyFormState,!0)&&(i._formState={...i._formState,...s},r({...i._formState}))},[i])}),Zt.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),Zt.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),e.current.formState=aD(n,i),e.current}function jh({input:t,label:e,property:n,type:r,required:i,placeholder:s,errors:o,register:l}){const a=e.charAt(0).toLocaleUpperCase()+e.slice(1),u=d=>{let p,v;return d==="email"&&(p=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,v="Ogiltig e-postadress. Vänligen ange en giltig e-postadress."),d==="password"&&(p=/^(?=.*[A-Z])(?=.*\d)(?!.*<.*>).*.{6,}$/,v="Vänligen ange en sträng som innehåller minst en stor bokstav, en siffra och är minst 6 tecken lång."),d==="userName"&&(p=/^[a-zA-ZåäöÅÄÖ\s]{2,}$/,v="Vänligen ange en giltig sträng med minst två bokstäver."),{pattern:p,errorMessage:v}},{pattern:h,errorMessage:c}=u(n);return g.jsxs("div",{className:"form-control",children:[g.jsx("label",{style:{whiteSpace:"nowrap"},children:a}),t?g.jsx("input",{className:"post-job-data-input",placeholder:s,type:r,...l(n,{required:i,pattern:h})}):g.jsx("textarea",{wrap:"soft",rows:30,cols:10,...l(n,{required:i,pattern:!t&&/^[A-Za-z0-9.,\s]+$/})}),o[n]&&o[n].type==="required"&&g.jsxs("p",{className:"errorMsg",children:[a," är obligatoriskt."]}),o[n]&&o[n].type==="pattern"&&g.jsx("p",{className:"errorMsg",children:c})]})}const TD=()=>{const{handleSubmit:t,register:e,formState:{errors:n}}=ID(),[r,i]=T.useState(!0),{auth:s,user:o,provider:l,signInWithRedirect:a,signInWithPopup:u,signInWithEmailAndPassword:h,createUserWithEmailAndPassword:c}=Pl(),d=()=>{u(s,l).catch(v=>{v.message,alert("Inloggningen misslyckades.")})},p=v=>{const{email:w,password:I,userName:m}=v;r?h(s,w,I).then(f=>{const y=f.user;console.log(y)}).catch(f=>{f.code,f.message,alert("Fel E-post eller lösenord.")}):c(s,w,I).then(f=>{const y=f.user;console.log(f),console.log(y),kC(y.uid,w,m,I)}).catch(f=>{f.code;const y=f.message;console.log(y),alert("Kontot existerar redan. Vänligen logga in eller återställ ditt lösenord om du har glömt det.")})};return g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"google-container",children:[g.jsx("h1",{children:"Kom igång"}),g.jsxs("div",{onClick:d,tabIndex:0,"aria-label":"sign in with google button",className:"google-btn-container",children:[g.jsx("div",{className:"google-img-cont",children:g.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google icon"})}),g.jsx("p",{children:"Logga in med Google"})]})]}),g.jsx("div",{className:"hr"}),g.jsxs("form",{className:"post-job-form",onSubmit:t(p),children:[r?g.jsx("h1",{children:"Logga in"}):g.jsx("h1",{children:"Skapa konto"}),g.jsxs("div",{children:[g.jsxs("div",{children:[!r&&g.jsx(jh,{property:"userName",input:!0,label:"För- och efternamn",type:"text",required:!0,placeholder:"Skriv ditt för- och efternamn",errors:n,register:e}),g.jsx(jh,{property:"email",input:!0,label:"e-post",type:"text",required:!0,placeholder:"Skriv in e-post",errors:n,register:e}),g.jsx(jh,{property:"password",input:!0,label:"lösenord",type:"password",required:!0,placeholder:"Skriv in lösenord",errors:n,register:e})]}),g.jsx("div",{onClick:()=>i(v=>!v),className:"create-account-container",children:r?g.jsx("p",{children:"Skapa konto?"}):g.jsx("p",{children:"Logga in"})})]}),g.jsx("div",{style:{alignSelf:"center"},children:g.jsx("button",{className:"submit-btn",children:r?"Logga in":"Skapa"})})]})]})},dy=()=>{Pl();const{setTextColorHeader:t,isOnline:e}=T.useContext(Kt);return t("white"),g.jsx(g.Fragment,{children:g.jsxs("div",{className:"sign-in-layout",children:[g.jsxs("picture",{children:[g.jsx("source",{type:"image/webp"}),g.jsx("img",{className:"signIn-hero-img",src:"https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"image of people in the office"})]}),g.jsx("div",{className:"side-img-container"}),g.jsx("div",{className:"sign-in-cont",children:g.jsx(TD,{})})]})})},kD="_profileContainer_n4j29_1",AD="_profileImgCont_n4j29_19",RD="_profileImgAvailable_n4j29_57",ND="_anonymous_n4j29_67",xD="_userContactInfo_n4j29_77",Ws={profileContainer:kD,profileImgCont:AD,profileImgAvailable:RD,anonymous:ND,userContactInfo:xD};function PD({user:t}){const{color:e,isOnline:n}=T.useContext(Kt);return g.jsxs("div",{style:{borderColor:e},className:Ws.profileContainer,children:[g.jsx("div",{className:Ws.profileImgCont,style:{borderColor:e},children:g.jsx("img",{className:n.profileImg?Ws.profileImgAvailable:Ws.anonymous,src:n.profileImg?n.profileImg:R1,alt:"user picture"})}),g.jsxs("div",{className:Ws.userContactInfo,children:[g.jsxs("p",{style:{color:e},children:[g.jsx("b",{children:"Name:"})," ",t.fullname]}),g.jsxs("p",{style:{color:e},children:[g.jsx("b",{children:"Email:"})," ",t.email]})]})]})}const OD="_titleForSavedJobs_1yvwz_1",DD={titleForSavedJobs:OD};function LD(){const{savedJobAds:t,setSavedJobAds:e,isOnline:n,color:r}=T.useContext(Kt);return g.jsxs(g.Fragment,{children:[g.jsx("h1",{className:DD.titleForSavedJobs,style:{color:r},children:"Sparade jobbannonser"}),g.jsx("div",{className:"card-container",children:g.jsx("ul",{className:"card-layout",children:t.map(i=>AC(i))})})]})}const MD="_hr_1pzqc_1",bD={hr:MD};function FD(){const{isOnline:t,color:e,setTextColorHeader:n}=T.useContext(Kt);return n(e),g.jsxs(g.Fragment,{children:[g.jsx(PD,{user:t}),g.jsx("div",{style:{background:e},className:bD.hr}),g.jsx(LD,{})]})}const Kt=T.createContext();function jD(){const[t,e]=T.useState(null),[n,r]=T.useState(!1),[i,s]=T.useState(""),[o,l]=T.useState([]),[a,u]=T.useState(null),h={setJobs:u,jobs:a,setIsDarkTheme:r,setSavedJobAds:l,savedJobAds:o,isOnline:t,isDarkTheme:n,textColorHeader:i,setTextColorHeader:s,color:n?"#ffff":"",background:n?"linear-gradient(147deg, #4d4855 0%, #000000 74%)":"whitesmoke"},{auth:c,onAuthStateChanged:d}=Pl();return T.useEffect(()=>{const p=d(c,v=>{if(v){ey("users",v.uid).then(I=>{if(!I){console.log("data is",I),kC(v.uid,v.email,v.displayName,null,v.photoURL),ey("users",v.uid).then(f=>e(f));return}e(I)});return}l([]),e(v),console.log(v)});return()=>p},[]),T.useEffect(()=>{if(!t)return;N9(t.userId).then(v=>{const w=v.jobs;l(w),console.log("saved Jobs:",v.jobs)})},[t]),g.jsx(g.Fragment,{children:g.jsx(fk,{children:g.jsxs(Kt.Provider,{value:h,children:[g.jsx(L9,{toggleDarkTheme:r}),g.jsx("main",{className:"job-form-container",children:g.jsxs(ok,{children:[g.jsx(qs,{path:"/Jobchaser/",element:g.jsx(iD,{})}),g.jsx(qs,{path:"/Jobchaser/Find-job",element:g.jsx(z9,{})}),g.jsx(qs,{path:"/Jobchaser/Sign-in",element:t?g.jsx(ik,{to:"/Jobchaser/User-profile"}):g.jsx(dy,{})}),g.jsx(qs,{path:"/Jobchaser/User-profile",element:t?g.jsx(FD,{}):g.jsx(dy,{})})]})})]})})})}Uh.createRoot(document.getElementById("root")).render(g.jsx(Zt.StrictMode,{children:g.jsx(jD,{})}));
