function OC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function DC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var oy={exports:{}},Nu={},ly={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),LC=Symbol.for("react.portal"),MC=Symbol.for("react.fragment"),bC=Symbol.for("react.strict_mode"),FC=Symbol.for("react.profiler"),UC=Symbol.for("react.provider"),jC=Symbol.for("react.context"),$C=Symbol.for("react.forward_ref"),VC=Symbol.for("react.suspense"),BC=Symbol.for("react.memo"),zC=Symbol.for("react.lazy"),Hg=Symbol.iterator;function HC(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var ay={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uy=Object.assign,cy={};function ps(t,e,n){this.props=t,this.context=e,this.refs=cy,this.updater=n||ay}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hy(){}hy.prototype=ps.prototype;function gf(t,e,n){this.props=t,this.context=e,this.refs=cy,this.updater=n||ay}var mf=gf.prototype=new hy;mf.constructor=gf;uy(mf,ps.prototype);mf.isPureReactComponent=!0;var Wg=Array.isArray,dy=Object.prototype.hasOwnProperty,vf={current:null},fy={key:!0,ref:!0,__self:!0,__source:!0};function py(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dy.call(e,r)&&!fy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:il,type:t,key:s,ref:o,props:i,_owner:vf.current}}function WC(t,e){return{$$typeof:il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===il}function GC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gg=/\/+/g;function Pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GC(""+t.key):e.toString(36)}function ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case il:case LC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pc(o,0):r,Wg(i)?(n="",t!=null&&(n=t.replace(Gg,"$&/")+"/"),ia(i,e,n,"",function(u){return u})):i!=null&&(yf(i)&&(i=WC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wg(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Pc(s,l);o+=ia(s,e,n,a,i)}else if(a=HC(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Pc(s,l++),o+=ia(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ll(t,e,n){if(t==null)return t;var r=[],i=0;return ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},sa={transition:null},qC={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:sa,ReactCurrentOwner:vf};X.Children={map:Ll,forEach:function(t,e,n){Ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ll(t,function(){e++}),e},toArray:function(t){return Ll(t,function(e){return e})||[]},only:function(t){if(!yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=ps;X.Fragment=MC;X.Profiler=FC;X.PureComponent=gf;X.StrictMode=bC;X.Suspense=VC;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qC;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)dy.call(e,a)&&!fy.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:il,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:jC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UC,_context:t},t.Consumer=t};X.createElement=py;X.createFactory=function(t){var e=py.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:$C,render:t}};X.isValidElement=yf;X.lazy=function(t){return{$$typeof:zC,_payload:{_status:-1,_result:t},_init:KC}};X.memo=function(t,e){return{$$typeof:BC,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=sa.transition;sa.transition={};try{t()}finally{sa.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return ht.current.useCallback(t,e)};X.useContext=function(t){return ht.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};X.useEffect=function(t,e){return ht.current.useEffect(t,e)};X.useId=function(){return ht.current.useId()};X.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return ht.current.useMemo(t,e)};X.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};X.useRef=function(t){return ht.current.useRef(t)};X.useState=function(t){return ht.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return ht.current.useTransition()};X.version="18.2.0";ly.exports=X;var T=ly.exports;const Xt=DC(T),YC=OC({__proto__:null,default:Xt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QC=T,JC=Symbol.for("react.element"),XC=Symbol.for("react.fragment"),ZC=Object.prototype.hasOwnProperty,eS=QC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tS={key:!0,ref:!0,__self:!0,__source:!0};function gy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ZC.call(e,r)&&!tS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JC,type:t,key:s,ref:o,props:i,_owner:eS.current}}Nu.Fragment=XC;Nu.jsx=gy;Nu.jsxs=gy;oy.exports=Nu;var y=oy.exports,Lh={},my={exports:{}},Ot={},vy={exports:{}},yy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,B){var G=P.length;P.push(B);e:for(;0<G;){var ge=G-1>>>1,ke=P[ge];if(0<i(ke,B))P[ge]=B,P[G]=ke,G=ge;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],G=P.pop();if(G!==B){P[0]=G;e:for(var ge=0,ke=P.length,yi=ke>>>1;ge<yi;){var Kt=2*(ge+1)-1,Dr=P[Kt],cn=Kt+1,_i=P[cn];if(0>i(Dr,G))cn<ke&&0>i(_i,Dr)?(P[ge]=_i,P[cn]=G,ge=cn):(P[ge]=Dr,P[Kt]=G,ge=Kt);else if(cn<ke&&0>i(_i,G))P[ge]=_i,P[cn]=G,ge=cn;else break e}}return B}function i(P,B){var G=P.sortIndex-B.sortIndex;return G!==0?G:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,c=null,d=3,g=!1,v=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=P)r(u),B.sortIndex=B.expirationTime,e(a,B);else break;B=n(u)}}function E(P){if(w=!1,m(P),!v)if(n(a)!==null)v=!0,Qe(N);else{var B=n(u);B!==null&&Tn(E,B.startTime-P)}}function N(P,B){v=!1,w&&(w=!1,p(b),b=-1),g=!0;var G=d;try{for(m(B),c=n(a);c!==null&&(!(c.expirationTime>B)||P&&!V());){var ge=c.callback;if(typeof ge=="function"){c.callback=null,d=c.priorityLevel;var ke=ge(c.expirationTime<=B);B=t.unstable_now(),typeof ke=="function"?c.callback=ke:c===n(a)&&r(a),m(B)}else r(a);c=n(a)}if(c!==null)var yi=!0;else{var Kt=n(u);Kt!==null&&Tn(E,Kt.startTime-B),yi=!1}return yi}finally{c=null,d=G,g=!1}}var L=!1,D=null,b=-1,Y=5,W=-1;function V(){return!(t.unstable_now()-W<Y)}function J(){if(D!==null){var P=t.unstable_now();W=P;var B=!0;try{B=D(!0,P)}finally{B?ue():(L=!1,D=null)}}else L=!1}var ue;if(typeof f=="function")ue=function(){f(J)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Ct=Ne.port2;Ne.port1.onmessage=J,ue=function(){Ct.postMessage(null)}}else ue=function(){I(J,0)};function Qe(P){D=P,L||(L=!0,ue())}function Tn(P,B){b=I(function(){P(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Qe(N))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var G=d;d=B;try{return P()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=d;d=P;try{return B()}finally{d=G}},t.unstable_scheduleCallback=function(P,B,G){var ge=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ge+G:ge):G=ge,P){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=G+ke,P={id:h++,callback:B,priorityLevel:P,startTime:G,expirationTime:ke,sortIndex:-1},G>ge?(P.sortIndex=G,e(u,P),n(a)===null&&P===n(u)&&(w?(p(b),b=-1):w=!0,Tn(E,G-ge))):(P.sortIndex=ke,e(a,P),v||g||(v=!0,Qe(N))),P},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(P){var B=d;return function(){var G=d;d=B;try{return P.apply(this,arguments)}finally{d=G}}}})(yy);vy.exports=yy;var nS=vy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=T,Pt=nS;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wy=new Set,mo={};function hi(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(mo[t]=e,t=0;t<e.length;t++)wy.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mh=Object.prototype.hasOwnProperty,rS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kg={},qg={};function iS(t){return Mh.call(qg,t)?!0:Mh.call(Kg,t)?!1:rS.test(t)?qg[t]=!0:(Kg[t]=!0,!1)}function sS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oS(t,e,n,r){if(e===null||typeof e>"u"||sS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_f,wf);Ge[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_f,wf);Ge[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_f,wf);Ge[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ef(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oS(e,n,i,r)&&(n=null),r||i===null?iS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),bh=Symbol.for("react.profiler"),Ey=Symbol.for("react.provider"),Cy=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),Fh=Symbol.for("react.suspense"),Uh=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Sy=Symbol.for("react.offscreen"),Yg=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=Yg&&t[Yg]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Oc;function Hs(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Dc=!1;function Lc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function lS(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ii:return"Portal";case bh:return"Profiler";case Cf:return"StrictMode";case Fh:return"Suspense";case Uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cy:return(t.displayName||"Context")+".Consumer";case Ey:return(t._context.displayName||"Context")+".Provider";case Sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case If:return e=t.displayName||null,e!==null?e:jh(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return jh(t(e))}catch{}}return null}function aS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jh(e);case 8:return e===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(t){var e=Iy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=uS(t))}function Ty(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Iy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $h(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ky(t,e){e=e.checked,e!=null&&Ef(t,"checked",e,!1)}function Vh(t,e){ky(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bh(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bh(t,e,n){(e!=="number"||Ea(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Ws(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function Ay(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ry(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ry(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fl,Ny=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){cS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function xy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function Py(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hS=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wh(t,e){if(e){if(hS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Gh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=null;function Tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qh=null,Bi=null,zi=null;function em(t){if(t=ll(t)){if(typeof qh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Lu(e),qh(t.stateNode,t.type,e))}}function Oy(t){Bi?zi?zi.push(t):zi=[t]:Bi=t}function Dy(){if(Bi){var t=Bi,e=zi;if(zi=Bi=null,em(t),e)for(t=0;t<e.length;t++)em(e[t])}}function Ly(t,e){return t(e)}function My(){}var Mc=!1;function by(t,e,n){if(Mc)return t(e,n);Mc=!0;try{return Ly(t,e,n)}finally{Mc=!1,(Bi!==null||zi!==null)&&(My(),Dy())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var r=Lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Yh=!1;if(Un)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){Yh=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Yh=!1}function dS(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var eo=!1,Ca=null,Sa=!1,Qh=null,fS={onError:function(t){eo=!0,Ca=t}};function pS(t,e,n,r,i,s,o,l,a){eo=!1,Ca=null,dS.apply(fS,arguments)}function gS(t,e,n,r,i,s,o,l,a){if(pS.apply(this,arguments),eo){if(eo){var u=Ca;eo=!1,Ca=null}else throw Error(k(198));Sa||(Sa=!0,Qh=u)}}function di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tm(t){if(di(t)!==t)throw Error(k(188))}function mS(t){var e=t.alternate;if(!e){if(e=di(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tm(i),t;if(s===r)return tm(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Uy(t){return t=mS(t),t!==null?jy(t):null}function jy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jy(t);if(e!==null)return e;t=t.sibling}return null}var $y=Pt.unstable_scheduleCallback,nm=Pt.unstable_cancelCallback,vS=Pt.unstable_shouldYield,yS=Pt.unstable_requestPaint,Se=Pt.unstable_now,_S=Pt.unstable_getCurrentPriorityLevel,kf=Pt.unstable_ImmediatePriority,Vy=Pt.unstable_UserBlockingPriority,Ia=Pt.unstable_NormalPriority,wS=Pt.unstable_LowPriority,By=Pt.unstable_IdlePriority,xu=null,yn=null;function ES(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:IS,CS=Math.log,SS=Math.LN2;function IS(t){return t>>>=0,t===0?32:31-(CS(t)/SS|0)|0}var Ul=64,jl=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ta(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Gs(l):(s&=o,s!==0&&(r=Gs(s)))}else o=n&~i,o!==0?r=Gs(o):s!==0&&(r=Gs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function TS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=TS(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zy(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function AS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Hy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wy,Rf,Gy,Ky,qy,Xh=!1,$l=[],or=null,lr=null,ar=null,_o=new Map,wo=new Map,Jn=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rm(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(e.pointerId)}}function xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ll(e),e!==null&&Rf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NS(t,e,n,r,i){switch(e){case"focusin":return or=xs(or,t,e,n,r,i),!0;case"dragenter":return lr=xs(lr,t,e,n,r,i),!0;case"mouseover":return ar=xs(ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return _o.set(s,xs(_o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wo.set(s,xs(wo.get(s)||null,t,e,n,r,i)),!0}return!1}function Yy(t){var e=jr(t.target);if(e!==null){var n=di(e);if(n!==null){if(e=n.tag,e===13){if(e=Fy(n),e!==null){t.blockedOn=e,qy(t.priority,function(){Gy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kh=r,n.target.dispatchEvent(r),Kh=null}else return e=ll(n),e!==null&&Rf(e),t.blockedOn=n,!1;e.shift()}return!0}function im(t,e,n){oa(t)&&n.delete(e)}function xS(){Xh=!1,or!==null&&oa(or)&&(or=null),lr!==null&&oa(lr)&&(lr=null),ar!==null&&oa(ar)&&(ar=null),_o.forEach(im),wo.forEach(im)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Xh||(Xh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,xS)))}function Eo(t){function e(i){return Ps(i,t)}if(0<$l.length){Ps($l[0],t);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Ps(or,t),lr!==null&&Ps(lr,t),ar!==null&&Ps(ar,t),_o.forEach(e),wo.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Yy(n),n.blockedOn===null&&Jn.shift()}var Hi=Wn.ReactCurrentBatchConfig,ka=!0;function PS(t,e,n,r){var i=re,s=Hi.transition;Hi.transition=null;try{re=1,Nf(t,e,n,r)}finally{re=i,Hi.transition=s}}function OS(t,e,n,r){var i=re,s=Hi.transition;Hi.transition=null;try{re=4,Nf(t,e,n,r)}finally{re=i,Hi.transition=s}}function Nf(t,e,n,r){if(ka){var i=Zh(t,e,n,r);if(i===null)Gc(t,e,r,Aa,n),rm(t,r);else if(NS(i,t,e,n,r))r.stopPropagation();else if(rm(t,r),e&4&&-1<RS.indexOf(t)){for(;i!==null;){var s=ll(i);if(s!==null&&Wy(s),s=Zh(t,e,n,r),s===null&&Gc(t,e,r,Aa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}var Aa=null;function Zh(t,e,n,r){if(Aa=null,t=Tf(r),t=jr(t),t!==null)if(e=di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Aa=t,null}function Qy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_S()){case kf:return 1;case Vy:return 4;case Ia:case wS:return 16;case By:return 536870912;default:return 16}default:return 16}}var nr=null,xf=null,la=null;function Jy(){if(la)return la;var t,e=xf,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return la=i.slice(t,1<r?1-r:void 0)}function aa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function sm(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vl:sm,this.isPropagationStopped=sm,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pf=Dt(gs),ol=ye({},gs,{view:0,detail:0}),DS=Dt(ol),Fc,Uc,Os,Pu=ye({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Fc=t.screenX-Os.screenX,Uc=t.screenY-Os.screenY):Uc=Fc=0,Os=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),om=Dt(Pu),LS=ye({},Pu,{dataTransfer:0}),MS=Dt(LS),bS=ye({},ol,{relatedTarget:0}),jc=Dt(bS),FS=ye({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),US=Dt(FS),jS=ye({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$S=Dt(jS),VS=ye({},gs,{data:0}),lm=Dt(VS),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HS[t])?!!e[t]:!1}function Of(){return WS}var GS=ye({},ol,{key:function(t){if(t.key){var e=BS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=aa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(t){return t.type==="keypress"?aa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?aa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KS=Dt(GS),qS=ye({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=Dt(qS),YS=ye({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),QS=Dt(YS),JS=ye({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),XS=Dt(JS),ZS=ye({},Pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eI=Dt(ZS),tI=[9,13,27,32],Df=Un&&"CompositionEvent"in window,to=null;Un&&"documentMode"in document&&(to=document.documentMode);var nI=Un&&"TextEvent"in window&&!to,Xy=Un&&(!Df||to&&8<to&&11>=to),um=" ",cm=!1;function Zy(t,e){switch(t){case"keyup":return tI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ki=!1;function rI(t,e){switch(t){case"compositionend":return e_(e);case"keypress":return e.which!==32?null:(cm=!0,um);case"textInput":return t=e.data,t===um&&cm?null:t;default:return null}}function iI(t,e){if(ki)return t==="compositionend"||!Df&&Zy(t,e)?(t=Jy(),la=xf=nr=null,ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xy&&e.locale!=="ko"?null:e.data;default:return null}}var sI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sI[t.type]:e==="textarea"}function t_(t,e,n,r){Oy(r),e=Ra(e,"onChange"),0<e.length&&(n=new Pf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var no=null,Co=null;function oI(t){d_(t,0)}function Ou(t){var e=Ni(t);if(Ty(e))return t}function lI(t,e){if(t==="change")return e}var n_=!1;if(Un){var $c;if(Un){var Vc="oninput"in document;if(!Vc){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Vc=typeof dm.oninput=="function"}$c=Vc}else $c=!1;n_=$c&&(!document.documentMode||9<document.documentMode)}function fm(){no&&(no.detachEvent("onpropertychange",r_),Co=no=null)}function r_(t){if(t.propertyName==="value"&&Ou(Co)){var e=[];t_(e,Co,t,Tf(t)),by(oI,e)}}function aI(t,e,n){t==="focusin"?(fm(),no=e,Co=n,no.attachEvent("onpropertychange",r_)):t==="focusout"&&fm()}function uI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(Co)}function cI(t,e){if(t==="click")return Ou(e)}function hI(t,e){if(t==="input"||t==="change")return Ou(e)}function dI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:dI;function So(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mh.call(e,i)||!on(t[i],e[i]))return!1}return!0}function pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,e){var n=pm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pm(n)}}function i_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s_(){for(var t=window,e=Ea();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ea(t.document)}return e}function Lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fI(t){var e=s_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&i_(n.ownerDocument.documentElement,n)){if(r!==null&&Lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gm(n,s);var o=gm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pI=Un&&"documentMode"in document&&11>=document.documentMode,Ai=null,ed=null,ro=null,td=!1;function mm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Ai==null||Ai!==Ea(r)||(r=Ai,"selectionStart"in r&&Lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&So(ro,r)||(ro=r,r=Ra(ed,"onSelect"),0<r.length&&(e=new Pf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ri={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},Bc={},o_={};Un&&(o_=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function Du(t){if(Bc[t])return Bc[t];if(!Ri[t])return t;var e=Ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o_)return Bc[t]=e[n];return t}var l_=Du("animationend"),a_=Du("animationiteration"),u_=Du("animationstart"),c_=Du("transitionend"),h_=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){h_.set(t,e),hi(e,[t])}for(var zc=0;zc<vm.length;zc++){var Hc=vm[zc],gI=Hc.toLowerCase(),mI=Hc[0].toUpperCase()+Hc.slice(1);Ir(gI,"on"+mI)}Ir(l_,"onAnimationEnd");Ir(a_,"onAnimationIteration");Ir(u_,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(c_,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function ym(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gS(r,e,void 0,t),t.currentTarget=null}function d_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;ym(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;ym(i,l,u),s=a}}}if(Sa)throw t=Qh,Sa=!1,Qh=null,t}function ce(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var r=t+"__bubble";n.has(r)||(f_(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),f_(n,t,r,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[zl]){t[zl]=!0,wy.forEach(function(n){n!=="selectionchange"&&(vI.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,Wc("selectionchange",!1,e))}}function f_(t,e,n,r){switch(Qy(e)){case 1:var i=PS;break;case 4:i=OS;break;default:i=Nf}n=i.bind(null,e,n,t),i=void 0,!Yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}by(function(){var u=s,h=Tf(n),c=[];e:{var d=h_.get(t);if(d!==void 0){var g=Pf,v=t;switch(t){case"keypress":if(aa(n)===0)break e;case"keydown":case"keyup":g=KS;break;case"focusin":v="focus",g=jc;break;case"focusout":v="blur",g=jc;break;case"beforeblur":case"afterblur":g=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=MS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=QS;break;case l_:case a_:case u_:g=US;break;case c_:g=XS;break;case"scroll":g=DS;break;case"wheel":g=eI;break;case"copy":case"cut":case"paste":g=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=am}var w=(e&4)!==0,I=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=yo(f,p),E!=null&&w.push(To(f,E,m)))),I)break;f=f.return}0<w.length&&(d=new g(d,v,null,n,h),c.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Kh&&(v=n.relatedTarget||n.fromElement)&&(jr(v)||v[jn]))break e;if((g||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?jr(v):null,v!==null&&(I=di(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=om,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=am,E="onPointerLeave",p="onPointerEnter",f="pointer"),I=g==null?d:Ni(g),m=v==null?d:Ni(v),d=new w(E,f+"leave",g,n,h),d.target=I,d.relatedTarget=m,E=null,jr(h)===u&&(w=new w(p,f+"enter",v,n,h),w.target=m,w.relatedTarget=I,E=w),I=E,g&&v)t:{for(w=g,p=v,f=0,m=w;m;m=wi(m))f++;for(m=0,E=p;E;E=wi(E))m++;for(;0<f-m;)w=wi(w),f--;for(;0<m-f;)p=wi(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=wi(w),p=wi(p)}w=null}else w=null;g!==null&&_m(c,d,g,w,!1),v!==null&&I!==null&&_m(c,I,v,w,!0)}}e:{if(d=u?Ni(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var N=lI;else if(hm(d))if(n_)N=hI;else{N=uI;var L=aI}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=cI);if(N&&(N=N(t,u))){t_(c,N,n,h);break e}L&&L(t,d,u),t==="focusout"&&(L=d._wrapperState)&&L.controlled&&d.type==="number"&&Bh(d,"number",d.value)}switch(L=u?Ni(u):window,t){case"focusin":(hm(L)||L.contentEditable==="true")&&(Ai=L,ed=u,ro=null);break;case"focusout":ro=ed=Ai=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,mm(c,n,h);break;case"selectionchange":if(pI)break;case"keydown":case"keyup":mm(c,n,h)}var D;if(Df)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ki?Zy(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Xy&&n.locale!=="ko"&&(ki||b!=="onCompositionStart"?b==="onCompositionEnd"&&ki&&(D=Jy()):(nr=h,xf="value"in nr?nr.value:nr.textContent,ki=!0)),L=Ra(u,b),0<L.length&&(b=new lm(b,t,null,n,h),c.push({event:b,listeners:L}),D?b.data=D:(D=e_(n),D!==null&&(b.data=D)))),(D=nI?rI(t,n):iI(t,n))&&(u=Ra(u,"onBeforeInput"),0<u.length&&(h=new lm("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=D))}d_(c,e)})}function To(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ra(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yo(t,n),s!=null&&r.unshift(To(t,s,i)),s=yo(t,e),s!=null&&r.push(To(t,s,i))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _m(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=yo(n,s),a!=null&&o.unshift(To(n,a,l))):i||(a=yo(n,s),a!=null&&o.push(To(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yI=/\r\n?/g,_I=/\u0000|\uFFFD/g;function wm(t){return(typeof t=="string"?t:""+t).replace(yI,`
`).replace(_I,"")}function Hl(t,e,n){if(e=wm(e),wm(t)!==e&&n)throw Error(k(425))}function Na(){}var nd=null,rd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,wI=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,EI=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(t){return Em.resolve(null).then(t).catch(CI)}:sd;function CI(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Eo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),fn="__reactFiber$"+ms,ko="__reactProps$"+ms,jn="__reactContainer$"+ms,od="__reactEvents$"+ms,SI="__reactListeners$"+ms,II="__reactHandles$"+ms;function jr(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[fn])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function ll(t){return t=t[fn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Lu(t){return t[ko]||null}var ld=[],xi=-1;function Tr(t){return{current:t}}function de(t){0>xi||(t.current=ld[xi],ld[xi]=null,xi--)}function ae(t,e){xi++,ld[xi]=t.current,t.current=e}var wr={},nt=Tr(wr),vt=Tr(!1),Xr=wr;function ts(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function xa(){de(vt),de(nt)}function Sm(t,e,n){if(nt.current!==wr)throw Error(k(168));ae(nt,e),ae(vt,n)}function p_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,aS(t)||"Unknown",i));return ye({},n,r)}function Pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Xr=nt.current,ae(nt,t),ae(vt,vt.current),!0}function Im(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=p_(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,de(vt),de(nt),ae(nt,t)):de(vt),ae(vt,n)}var Rn=null,Mu=!1,qc=!1;function g_(t){Rn===null?Rn=[t]:Rn.push(t)}function TI(t){Mu=!0,g_(t)}function kr(){if(!qc&&Rn!==null){qc=!0;var t=0,e=re;try{var n=Rn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Mu=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),$y(kf,kr),i}finally{re=e,qc=!1}}return null}var Pi=[],Oi=0,Oa=null,Da=0,Mt=[],bt=0,Zr=null,xn=1,Pn="";function Lr(t,e){Pi[Oi++]=Da,Pi[Oi++]=Oa,Oa=t,Da=e}function m_(t,e,n){Mt[bt++]=xn,Mt[bt++]=Pn,Mt[bt++]=Zr,Zr=t;var r=xn;t=Pn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-nn(e)+i|n<<i|r,Pn=s+t}else xn=1<<s|n<<i|r,Pn=t}function Mf(t){t.return!==null&&(Lr(t,1),m_(t,1,0))}function bf(t){for(;t===Oa;)Oa=Pi[--Oi],Pi[Oi]=null,Da=Pi[--Oi],Pi[Oi]=null;for(;t===Zr;)Zr=Mt[--bt],Mt[bt]=null,Pn=Mt[--bt],Mt[bt]=null,xn=Mt[--bt],Mt[bt]=null}var Nt=null,At=null,pe=!1,Jt=null;function v_(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,At=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:xn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,At=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(pe){var e=At;if(e){var n=e;if(!Tm(t,e)){if(ad(t))throw Error(k(418));e=ur(n.nextSibling);var r=Nt;e&&Tm(t,e)?v_(r,n):(t.flags=t.flags&-4097|2,pe=!1,Nt=t)}}else{if(ad(t))throw Error(k(418));t.flags=t.flags&-4097|2,pe=!1,Nt=t}}}function km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Wl(t){if(t!==Nt)return!1;if(!pe)return km(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=At)){if(ad(t))throw y_(),Error(k(418));for(;e;)v_(t,e),e=ur(e.nextSibling)}if(km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Nt?ur(t.stateNode.nextSibling):null;return!0}function y_(){for(var t=At;t;)t=ur(t.nextSibling)}function ns(){At=Nt=null,pe=!1}function Ff(t){Jt===null?Jt=[t]:Jt.push(t)}var kI=Wn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var La=Tr(null),Ma=null,Di=null,Uf=null;function jf(){Uf=Di=Ma=null}function $f(t){var e=La.current;de(La),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wi(t,e){Ma=t,Uf=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Uf!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(Ma===null)throw Error(k(308));Di=t,Ma.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var $r=null;function Vf(t){$r===null?$r=[t]:$r.push(t)}function __(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Vf(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,Vf(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}function Am(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ba(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,h=u=a=null,l=s;do{var d=l.lane,g=l.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(d=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(g,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(g,c,d):v,d==null)break e;c=ye({},c,d);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=g,a=c):h=h.next=g,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ti|=o,t.lanes=o,t.memoizedState=c}}function Rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var E_=new _y.Component().refs;function hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=dr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(rn(e,t,i,r),ua(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=dr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(rn(e,t,i,r),ua(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=dr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(rn(e,t,r,n),ua(e,t,r))}};function Nm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!So(n,r)||!So(i,s):!0}function C_(t,e,n){var r=!1,i=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=yt(e)?Xr:nt.current,r=e.contextTypes,s=(r=r!=null)?ts(t,i):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=E_,Bf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=yt(e)?Xr:nt.current,i.context=ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bu.enqueueReplaceState(i,i.state,null),ba(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===E_&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Gl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pm(t){var e=t._init;return e(t._payload)}function S_(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=fr(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,E){return f===null||f.tag!==6?(f=th(m,p.mode,E),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,E){var N=m.type;return N===Ti?h(p,f,m.props.children,E,m.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Yn&&Pm(N)===f.type)?(E=i(f,m.props),E.ref=Ds(p,f,m),E.return=p,E):(E=ga(m.type,m.key,m.props,null,p.mode,E),E.ref=Ds(p,f,m),E.return=p,E)}function u(p,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=nh(m,p.mode,E),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function h(p,f,m,E,N){return f===null||f.tag!==7?(f=qr(m,p.mode,E,N),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=th(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ml:return m=ga(f.type,f.key,f.props,null,p.mode,m),m.ref=Ds(p,null,f),m.return=p,m;case Ii:return f=nh(f,p.mode,m),f.return=p,f;case Yn:var E=f._init;return c(p,E(f._payload),m)}if(Ws(f)||Rs(f))return f=qr(f,p.mode,m,null),f.return=p,f;Gl(p,f)}return null}function d(p,f,m,E){var N=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:l(p,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ml:return m.key===N?a(p,f,m,E):null;case Ii:return m.key===N?u(p,f,m,E):null;case Yn:return N=m._init,d(p,f,N(m._payload),E)}if(Ws(m)||Rs(m))return N!==null?null:h(p,f,m,E,null);Gl(p,m)}return null}function g(p,f,m,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,l(f,p,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ml:return p=p.get(E.key===null?m:E.key)||null,a(f,p,E,N);case Ii:return p=p.get(E.key===null?m:E.key)||null,u(f,p,E,N);case Yn:var L=E._init;return g(p,f,m,L(E._payload),N)}if(Ws(E)||Rs(E))return p=p.get(m)||null,h(f,p,E,N,null);Gl(f,E)}return null}function v(p,f,m,E){for(var N=null,L=null,D=f,b=f=0,Y=null;D!==null&&b<m.length;b++){D.index>b?(Y=D,D=null):Y=D.sibling;var W=d(p,D,m[b],E);if(W===null){D===null&&(D=Y);break}t&&D&&W.alternate===null&&e(p,D),f=s(W,f,b),L===null?N=W:L.sibling=W,L=W,D=Y}if(b===m.length)return n(p,D),pe&&Lr(p,b),N;if(D===null){for(;b<m.length;b++)D=c(p,m[b],E),D!==null&&(f=s(D,f,b),L===null?N=D:L.sibling=D,L=D);return pe&&Lr(p,b),N}for(D=r(p,D);b<m.length;b++)Y=g(D,p,b,m[b],E),Y!==null&&(t&&Y.alternate!==null&&D.delete(Y.key===null?b:Y.key),f=s(Y,f,b),L===null?N=Y:L.sibling=Y,L=Y);return t&&D.forEach(function(V){return e(p,V)}),pe&&Lr(p,b),N}function w(p,f,m,E){var N=Rs(m);if(typeof N!="function")throw Error(k(150));if(m=N.call(m),m==null)throw Error(k(151));for(var L=N=null,D=f,b=f=0,Y=null,W=m.next();D!==null&&!W.done;b++,W=m.next()){D.index>b?(Y=D,D=null):Y=D.sibling;var V=d(p,D,W.value,E);if(V===null){D===null&&(D=Y);break}t&&D&&V.alternate===null&&e(p,D),f=s(V,f,b),L===null?N=V:L.sibling=V,L=V,D=Y}if(W.done)return n(p,D),pe&&Lr(p,b),N;if(D===null){for(;!W.done;b++,W=m.next())W=c(p,W.value,E),W!==null&&(f=s(W,f,b),L===null?N=W:L.sibling=W,L=W);return pe&&Lr(p,b),N}for(D=r(p,D);!W.done;b++,W=m.next())W=g(D,p,b,W.value,E),W!==null&&(t&&W.alternate!==null&&D.delete(W.key===null?b:W.key),f=s(W,f,b),L===null?N=W:L.sibling=W,L=W);return t&&D.forEach(function(J){return e(p,J)}),pe&&Lr(p,b),N}function I(p,f,m,E){if(typeof m=="object"&&m!==null&&m.type===Ti&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ml:e:{for(var N=m.key,L=f;L!==null;){if(L.key===N){if(N=m.type,N===Ti){if(L.tag===7){n(p,L.sibling),f=i(L,m.props.children),f.return=p,p=f;break e}}else if(L.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Yn&&Pm(N)===L.type){n(p,L.sibling),f=i(L,m.props),f.ref=Ds(p,L,m),f.return=p,p=f;break e}n(p,L);break}else e(p,L);L=L.sibling}m.type===Ti?(f=qr(m.props.children,p.mode,E,m.key),f.return=p,p=f):(E=ga(m.type,m.key,m.props,null,p.mode,E),E.ref=Ds(p,f,m),E.return=p,p=E)}return o(p);case Ii:e:{for(L=m.key;f!==null;){if(f.key===L)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=nh(m,p.mode,E),f.return=p,p=f}return o(p);case Yn:return L=m._init,I(p,f,L(m._payload),E)}if(Ws(m))return v(p,f,m,E);if(Rs(m))return w(p,f,m,E);Gl(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=th(m,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return I}var rs=S_(!0),I_=S_(!1),al={},_n=Tr(al),Ao=Tr(al),Ro=Tr(al);function Vr(t){if(t===al)throw Error(k(174));return t}function zf(t,e){switch(ae(Ro,e),ae(Ao,t),ae(_n,al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hh(e,t)}de(_n),ae(_n,e)}function is(){de(_n),de(Ao),de(Ro)}function T_(t){Vr(Ro.current);var e=Vr(_n.current),n=Hh(e,t.type);e!==n&&(ae(Ao,t),ae(_n,n))}function Hf(t){Ao.current===t&&(de(_n),de(Ao))}var me=Tr(0);function Fa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function Wf(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var ca=Wn.ReactCurrentDispatcher,Qc=Wn.ReactCurrentBatchConfig,ei=0,ve=null,xe=null,Me=null,Ua=!1,io=!1,No=0,AI=0;function Je(){throw Error(k(321))}function Gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function Kf(t,e,n,r,i,s){if(ei=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ca.current=t===null||t.memoizedState===null?PI:OI,t=n(r,i),io){s=0;do{if(io=!1,No=0,25<=s)throw Error(k(301));s+=1,Me=xe=null,e.updateQueue=null,ca.current=DI,t=n(r,i)}while(io)}if(ca.current=ja,e=xe!==null&&xe.next!==null,ei=0,Me=xe=ve=null,Ua=!1,e)throw Error(k(300));return t}function qf(){var t=No!==0;return No=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=t:Me=Me.next=t,Me}function Bt(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Me===null?ve.memoizedState:Me.next;if(e!==null)Me=e,xe=t;else{if(t===null)throw Error(k(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Me===null?ve.memoizedState=Me=t:Me=Me.next=t}return Me}function xo(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((ei&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ve.lanes|=h,ti|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,on(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function k_(){}function A_(t,e){var n=ve,r=Bt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,Yf(x_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Po(9,N_.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(k(349));ei&30||R_(n,e,i)}return i}function R_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function N_(t,e,n,r){e.value=n,e.getSnapshot=r,P_(e)&&O_(t)}function x_(t,e,n){return n(function(){P_(e)&&O_(t)})}function P_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function O_(t){var e=$n(t,1);e!==null&&rn(e,t,1,-1)}function Om(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=xI.bind(null,ve,t),[e.memoizedState,t]}function Po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function D_(){return Bt().memoizedState}function ha(t,e,n,r){var i=dn();ve.flags|=t,i.memoizedState=Po(1|e,n,void 0,r===void 0?null:r)}function Fu(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Gf(r,o.deps)){i.memoizedState=Po(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Po(1|e,n,s,r)}function Dm(t,e){return ha(8390656,8,t,e)}function Yf(t,e){return Fu(2048,8,t,e)}function L_(t,e){return Fu(4,2,t,e)}function M_(t,e){return Fu(4,4,t,e)}function b_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function F_(t,e,n){return n=n!=null?n.concat([t]):null,Fu(4,4,b_.bind(null,e,t),n)}function Qf(){}function U_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function j_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $_(t,e,n){return ei&21?(on(n,e)||(n=zy(),ve.lanes|=n,ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function RI(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Qc.transition;Qc.transition={};try{t(!1),e()}finally{re=n,Qc.transition=r}}function V_(){return Bt().memoizedState}function NI(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},B_(t))z_(e,n);else if(n=__(t,e,n,r),n!==null){var i=ut();rn(n,t,r,i),H_(n,e,r)}}function xI(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(t))z_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,on(l,o)){var a=e.interleaved;a===null?(i.next=i,Vf(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=__(t,e,i,r),n!==null&&(i=ut(),rn(n,t,r,i),H_(n,e,r))}}function B_(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function z_(t,e){io=Ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function H_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Af(t,n)}}var ja={readContext:Vt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},PI={readContext:Vt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:Dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ha(4194308,4,b_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return ha(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NI.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:Om,useDebugValue:Qf,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=Om(!1),e=t[0];return t=RI.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=dn();if(pe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ue===null)throw Error(k(349));ei&30||R_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dm(x_.bind(null,r,s,t),[t]),r.flags|=2048,Po(9,N_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Ue.identifierPrefix;if(pe){var n=Pn,r=xn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OI={readContext:Vt,useCallback:U_,useContext:Vt,useEffect:Yf,useImperativeHandle:F_,useInsertionEffect:L_,useLayoutEffect:M_,useMemo:j_,useReducer:Jc,useRef:D_,useState:function(){return Jc(xo)},useDebugValue:Qf,useDeferredValue:function(t){var e=Bt();return $_(e,xe.memoizedState,t)},useTransition:function(){var t=Jc(xo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:k_,useSyncExternalStore:A_,useId:V_,unstable_isNewReconciler:!1},DI={readContext:Vt,useCallback:U_,useContext:Vt,useEffect:Yf,useImperativeHandle:F_,useInsertionEffect:L_,useLayoutEffect:M_,useMemo:j_,useReducer:Xc,useRef:D_,useState:function(){return Xc(xo)},useDebugValue:Qf,useDeferredValue:function(t){var e=Bt();return xe===null?e.memoizedState=t:$_(e,xe.memoizedState,t)},useTransition:function(){var t=Xc(xo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:k_,useSyncExternalStore:A_,useId:V_,unstable_isNewReconciler:!1};function ss(t,e){try{var n="",r=e;do n+=lS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LI=typeof WeakMap=="function"?WeakMap:Map;function W_(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Va||(Va=!0,Sd=r),fd(t,e)},n}function G_(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qI.bind(null,t,e,n),e.then(t,t))}function Mm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var MI=Wn.ReactCurrentOwner,gt=!1;function st(t,e,n,r){e.child=t===null?I_(e,null,n,r):rs(e,t.child,n,r)}function Fm(t,e,n,r,i){n=n.render;var s=e.ref;return Wi(e,i),r=Kf(t,e,n,r,s,i),n=qf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(pe&&n&&Mf(e),e.flags|=1,st(t,e,r,i),e.child)}function Um(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ip(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K_(t,e,s,r,i)):(t=ga(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function K_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(So(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return pd(t,e,n,r,i)}function q_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Mi,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Mi,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Mi,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Mi,It),It|=r;return st(t,e,i,n),e.child}function Y_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,r,i){var s=yt(n)?Xr:nt.current;return s=ts(e,s),Wi(e,i),n=Kf(t,e,n,r,s,i),r=qf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(pe&&r&&Mf(e),e.flags|=1,st(t,e,n,i),e.child)}function jm(t,e,n,r,i){if(yt(n)){var s=!0;Pa(e)}else s=!1;if(Wi(e,i),e.stateNode===null)da(t,e),C_(e,n,r),dd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=yt(n)?Xr:nt.current,u=ts(e,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&xm(e,o,r,u),Qn=!1;var d=e.memoizedState;o.state=d,ba(e,r,o,i),a=e.memoizedState,l!==r||d!==a||vt.current||Qn?(typeof h=="function"&&(hd(e,n,h,r),a=e.memoizedState),(l=Qn||Nm(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,w_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Yt(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Vt(a):(a=yt(n)?Xr:nt.current,a=ts(e,a));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&xm(e,o,r,a),Qn=!1,d=e.memoizedState,o.state=d,ba(e,r,o,i);var v=e.memoizedState;l!==c||d!==v||vt.current||Qn?(typeof g=="function"&&(hd(e,n,g,r),v=e.memoizedState),(u=Qn||Nm(e,n,u,r,d,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return gd(t,e,n,r,s,i)}function gd(t,e,n,r,i,s){Y_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Im(e,n,!1),Vn(t,e,s);r=e.stateNode,MI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,s),e.child=rs(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Im(e,n,!0),e.child}function Q_(t){var e=t.stateNode;e.pendingContext?Sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sm(t,e.context,!1),zf(t,e.containerInfo)}function $m(t,e,n,r,i){return ns(),Ff(i),e.flags|=256,st(t,e,n,r),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function J_(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(me,i&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$u(o,r,0,null),t=qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=md,t):Jf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=fr(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?vd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=md,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jf(t,e){return e=$u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Kl(t,e,n,r){return r!==null&&Ff(r),rs(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zc(Error(k(422))),Kl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$u({mode:"visible",children:r.children},i,0,null),s=qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=md,s);if(!(e.mode&1))return Kl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=Zc(s,r,void 0),Kl(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),rn(r,t,i,-1))}return rp(),r=Zc(Error(k(421))),Kl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=ur(i.nextSibling),Nt=e,pe=!0,Jt=null,t!==null&&(Mt[bt++]=xn,Mt[bt++]=Pn,Mt[bt++]=Zr,xn=t.id,Pn=t.overflow,Zr=e),e=Jf(e,r.children),e.flags|=4096,e)}function Vm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cd(t.return,e,n)}function eh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function X_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,n,e);else if(t.tag===19)Vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),eh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}eh(e,!0,n,null,s);break;case"together":eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FI(t,e,n){switch(e.tag){case 3:Q_(e),ns();break;case 5:T_(e);break;case 1:yt(e.type)&&Pa(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(La,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?J_(t,e,n):(ae(me,me.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return X_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,q_(t,e,n)}return Vn(t,e,n)}var Z_,yd,e2,t2;Z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};e2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vr(_n.current);var s=null;switch(n){case"input":i=$h(t,i),r=$h(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=zh(t,i),r=zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Na)}Wh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ce("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};t2=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ls(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UI(t,e,n){var r=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return yt(e.type)&&xa(),Xe(e),null;case 3:return r=e.stateNode,is(),de(vt),de(nt),Wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(kd(Jt),Jt=null))),yd(t,e),Xe(e),null;case 5:Hf(e);var i=Vr(Ro.current);if(n=e.type,t!==null&&e.stateNode!=null)e2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Xe(e),null}if(t=Vr(_n.current),Wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[ko]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Ks.length;i++)ce(Ks[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Qg(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Xg(r,s),ce("invalid",r)}Wh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,l,t),i=["children",""+l]):mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":bl(r),Jg(r,s,!0);break;case"textarea":bl(r),Zg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Na)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ry(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[ko]=r,Z_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gh(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ks.length;i++)ce(Ks[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":Qg(t,r),i=$h(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Xg(t,r),i=zh(t,r),ce("invalid",t);break;default:i=r}Wh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Py(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ny(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&vo(t,a):typeof a=="number"&&vo(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mo.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ce("scroll",t):a!=null&&Ef(t,s,a,o))}switch(n){case"input":bl(t),Jg(t,r,!1);break;case"textarea":bl(t),Zg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)t2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Vr(Ro.current),Vr(_n.current),Wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return Xe(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&At!==null&&e.mode&1&&!(e.flags&128))y_(),ns(),e.flags|=98560,s=!1;else if(s=Wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[fn]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Jt!==null&&(kd(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?De===0&&(De=3):rp())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return is(),yd(t,e),t===null&&Io(e.stateNode.containerInfo),Xe(e),null;case 10:return $f(e.type._context),Xe(e),null;case 17:return yt(e.type)&&xa(),Xe(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ls(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fa(t),o!==null){for(e.flags|=128,Ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>os&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Xe(e),null}else 2*Se()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return np(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function jI(t,e){switch(bf(e),e.tag){case 1:return yt(e.type)&&xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),de(vt),de(nt),Wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hf(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return is(),null;case 10:return $f(e.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var ql=!1,Ze=!1,$I=typeof WeakSet=="function"?WeakSet:Set,M=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function _d(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Bm=!1;function VI(t,e){if(nd=ka,t=s_(),Lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,c=t,d=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)d=c,c=g;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++h===r&&(a=o),(g=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},ka=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,I=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:Yt(e.type,w),I);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){_e(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Bm,Bm=!1,v}function so(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_d(e,n,s)}i=i.next}while(i!==r)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n2(t){var e=t.alternate;e!==null&&(t.alternate=null,n2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[ko],delete e[od],delete e[SI],delete e[II])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r2(t){return t.tag===5||t.tag===3||t.tag===4}function zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Na));else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}var Ve=null,Qt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)i2(t,e,n),n=n.sibling}function i2(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:Ze||Li(n,e);case 6:var r=Ve,i=Qt;Ve=null,Kn(t,e,n),Ve=r,Qt=i,Ve!==null&&(Qt?(t=Ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Qt?(t=Ve,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),Eo(t)):Kc(Ve,n.stateNode));break;case 4:r=Ve,i=Qt,Ve=n.stateNode.containerInfo,Qt=!0,Kn(t,e,n),Ve=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_d(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!Ze&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Kn(t,e,n),Ze=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Hm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $I),e.forEach(function(r){var i=QI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ve=l.stateNode,Qt=!1;break e;case 3:Ve=l.stateNode.containerInfo,Qt=!0;break e;case 4:Ve=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Ve===null)throw Error(k(160));i2(s,o,i),Ve=null,Qt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){_e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s2(e,t),e=e.sibling}function s2(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),hn(t),r&4){try{so(3,t,t.return),Uu(3,t)}catch(w){_e(t,t.return,w)}try{so(5,t,t.return)}catch(w){_e(t,t.return,w)}}break;case 1:qt(e,t),hn(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(qt(e,t),hn(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var i=t.stateNode;try{vo(i,"")}catch(w){_e(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ky(i,s),Gh(l,o);var u=Gh(l,s);for(o=0;o<a.length;o+=2){var h=a[o],c=a[o+1];h==="style"?Py(i,c):h==="dangerouslySetInnerHTML"?Ny(i,c):h==="children"?vo(i,c):Ef(i,h,c,u)}switch(l){case"input":Vh(i,s);break;case"textarea":Ay(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Vi(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ko]=s}catch(w){_e(t,t.return,w)}}break;case 6:if(qt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){_e(t,t.return,w)}}break;case 3:if(qt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(w){_e(t,t.return,w)}break;case 4:qt(e,t),hn(t);break;case 13:qt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ep=Se())),r&4&&Hm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(u=Ze)||h,qt(e,t),Ze=u):qt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(M=t,h=t.child;h!==null;){for(c=M=h;M!==null;){switch(d=M,g=d.child,d.tag){case 0:case 11:case 14:case 15:so(4,d,d.return);break;case 1:Li(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){_e(r,n,w)}}break;case 5:Li(d,d.return);break;case 22:if(d.memoizedState!==null){Gm(c);continue}}g!==null?(g.return=d,M=g):Gm(c)}h=h.sibling}e:for(h=null,c=t;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=xy("display",o))}catch(w){_e(t,t.return,w)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){_e(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:qt(e,t),hn(t),r&4&&Hm(t);break;case 21:break;default:qt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r2(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vo(i,""),r.flags&=-33);var s=zm(t);Cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=zm(t);Ed(t,l,o);break;default:throw Error(k(161))}}catch(a){_e(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BI(t,e,n){M=t,o2(t)}function o2(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ql;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ze;l=ql;var u=Ze;if(ql=o,(Ze=a)&&!u)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?Km(i):a!==null?(a.return=o,M=a):Km(i);for(;s!==null;)M=s,o2(s),s=s.sibling;M=i,ql=l,Ze=u}Wm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Wm(t)}}function Wm(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&Eo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Ze||e.flags&512&&wd(e)}catch(d){_e(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Gm(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Km(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(a){_e(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){_e(e,i,a)}}var s=e.return;try{wd(e)}catch(a){_e(e,s,a)}break;case 5:var o=e.return;try{wd(e)}catch(a){_e(e,o,a)}}}catch(a){_e(e,e.return,a)}if(e===t){M=null;break}var l=e.sibling;if(l!==null){l.return=e.return,M=l;break}M=e.return}}var zI=Math.ceil,$a=Wn.ReactCurrentDispatcher,Xf=Wn.ReactCurrentOwner,$t=Wn.ReactCurrentBatchConfig,ee=0,Ue=null,Re=null,He=0,It=0,Mi=Tr(0),De=0,Oo=null,ti=0,ju=0,Zf=0,oo=null,pt=null,ep=0,os=1/0,An=null,Va=!1,Sd=null,hr=null,Yl=!1,rr=null,Ba=0,lo=0,Id=null,fa=-1,pa=0;function ut(){return ee&6?Se():fa!==-1?fa:fa=Se()}function dr(t){return t.mode&1?ee&2&&He!==0?He&-He:kI.transition!==null?(pa===0&&(pa=zy()),pa):(t=re,t!==0||(t=window.event,t=t===void 0?16:Qy(t.type)),t):1}function rn(t,e,n,r){if(50<lo)throw lo=0,Id=null,Error(k(185));sl(t,n,r),(!(ee&2)||t!==Ue)&&(t===Ue&&(!(ee&2)&&(ju|=n),De===4&&Xn(t,He)),_t(t,r),n===1&&ee===0&&!(e.mode&1)&&(os=Se()+500,Mu&&kr()))}function _t(t,e){var n=t.callbackNode;kS(t,e);var r=Ta(t,t===Ue?He:0);if(r===0)n!==null&&nm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nm(n),e===1)t.tag===0?TI(qm.bind(null,t)):g_(qm.bind(null,t)),EI(function(){!(ee&6)&&kr()}),n=null;else{switch(Hy(r)){case 1:n=kf;break;case 4:n=Vy;break;case 16:n=Ia;break;case 536870912:n=By;break;default:n=Ia}n=p2(n,l2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l2(t,e){if(fa=-1,pa=0,ee&6)throw Error(k(327));var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var r=Ta(t,t===Ue?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=za(t,r);else{e=r;var i=ee;ee|=2;var s=u2();(Ue!==t||He!==e)&&(An=null,os=Se()+500,Kr(t,e));do try{GI();break}catch(l){a2(t,l)}while(!0);jf(),$a.current=s,ee=i,Re!==null?e=0:(Ue=null,He=0,e=De)}if(e!==0){if(e===2&&(i=Jh(t),i!==0&&(r=i,e=Td(t,i))),e===1)throw n=Oo,Kr(t,0),Xn(t,r),_t(t,Se()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!HI(i)&&(e=za(t,r),e===2&&(s=Jh(t),s!==0&&(r=s,e=Td(t,s))),e===1))throw n=Oo,Kr(t,0),Xn(t,r),_t(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Mr(t,pt,An);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=ep+500-Se(),10<e)){if(Ta(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sd(Mr.bind(null,t,pt,An),e);break}Mr(t,pt,An);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zI(r/1960))-r,10<r){t.timeoutHandle=sd(Mr.bind(null,t,pt,An),r);break}Mr(t,pt,An);break;case 5:Mr(t,pt,An);break;default:throw Error(k(329))}}}return _t(t,Se()),t.callbackNode===n?l2.bind(null,t):null}function Td(t,e){var n=oo;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=za(t,e),t!==2&&(e=pt,pt=n,e!==null&&kd(e)),t}function kd(t){pt===null?pt=t:pt.push.apply(pt,t)}function HI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~Zf,e&=~ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function qm(t){if(ee&6)throw Error(k(327));Gi();var e=Ta(t,0);if(!(e&1))return _t(t,Se()),null;var n=za(t,e);if(t.tag!==0&&n===2){var r=Jh(t);r!==0&&(e=r,n=Td(t,r))}if(n===1)throw n=Oo,Kr(t,0),Xn(t,e),_t(t,Se()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,pt,An),_t(t,Se()),null}function tp(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(os=Se()+500,Mu&&kr())}}function ni(t){rr!==null&&rr.tag===0&&!(ee&6)&&Gi();var e=ee;ee|=1;var n=$t.transition,r=re;try{if($t.transition=null,re=1,t)return t()}finally{re=r,$t.transition=n,ee=e,!(ee&6)&&kr()}}function np(){It=Mi.current,de(Mi)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wI(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(bf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xa();break;case 3:is(),de(vt),de(nt),Wf();break;case 5:Hf(r);break;case 4:is();break;case 13:de(me);break;case 19:de(me);break;case 10:$f(r.type._context);break;case 22:case 23:np()}n=n.return}if(Ue=t,Re=t=fr(t.current,null),He=It=e,De=0,Oo=null,Zf=ju=ti=0,pt=oo=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function a2(t,e){do{var n=Re;try{if(jf(),ca.current=ja,Ua){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ua=!1}if(ei=0,Me=xe=ve=null,io=!1,No=0,Xf.current=null,n===null||n.return===null){De=1,Oo=e,Re=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=He,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Mm(o);if(g!==null){g.flags&=-257,bm(g,o,l,s,e),g.mode&1&&Lm(s,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Lm(s,u,e),rp();break e}a=Error(k(426))}}else if(pe&&l.mode&1){var I=Mm(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),bm(I,o,l,s,e),Ff(ss(a,l));break e}}s=a=ss(a,l),De!==4&&(De=2),oo===null?oo=[s]:oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=W_(s,a,e);Am(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hr===null||!hr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=G_(s,l,e);Am(s,E);break e}}s=s.return}while(s!==null)}h2(n)}catch(N){e=N,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function u2(){var t=$a.current;return $a.current=ja,t===null?ja:t}function rp(){(De===0||De===3||De===2)&&(De=4),Ue===null||!(ti&268435455)&&!(ju&268435455)||Xn(Ue,He)}function za(t,e){var n=ee;ee|=2;var r=u2();(Ue!==t||He!==e)&&(An=null,Kr(t,e));do try{WI();break}catch(i){a2(t,i)}while(!0);if(jf(),ee=n,$a.current=r,Re!==null)throw Error(k(261));return Ue=null,He=0,De}function WI(){for(;Re!==null;)c2(Re)}function GI(){for(;Re!==null&&!vS();)c2(Re)}function c2(t){var e=f2(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?h2(t):Re=e,Xf.current=null}function h2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jI(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Re=null;return}}else if(n=UI(n,e,It),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);De===0&&(De=5)}function Mr(t,e,n){var r=re,i=$t.transition;try{$t.transition=null,re=1,KI(t,e,n,r)}finally{$t.transition=i,re=r}return null}function KI(t,e,n,r){do Gi();while(rr!==null);if(ee&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AS(t,s),t===Ue&&(Re=Ue=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,p2(Ia,function(){return Gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=re;re=1;var l=ee;ee|=4,Xf.current=null,VI(t,n),s2(n,t),fI(rd),ka=!!nd,rd=nd=null,t.current=n,BI(n),yS(),ee=l,re=o,$t.transition=s}else t.current=n;if(Yl&&(Yl=!1,rr=t,Ba=i),s=t.pendingLanes,s===0&&(hr=null),ES(n.stateNode),_t(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Va)throw Va=!1,t=Sd,Sd=null,t;return Ba&1&&t.tag!==0&&Gi(),s=t.pendingLanes,s&1?t===Id?lo++:(lo=0,Id=t):lo=0,kr(),null}function Gi(){if(rr!==null){var t=Hy(Ba),e=$t.transition,n=re;try{if($t.transition=null,re=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,Ba=0,ee&6)throw Error(k(331));var i=ee;for(ee|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(M=u;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:so(8,h,s)}var c=h.child;if(c!==null)c.return=h,M=c;else for(;M!==null;){h=M;var d=h.sibling,g=h.return;if(n2(h),h===u){M=null;break}if(d!==null){d.return=g,M=d;break}M=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,M=m;else e:for(o=f;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uu(9,l)}}catch(N){_e(l,l.return,N)}if(l===o){M=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,M=E;break e}M=l.return}}if(ee=i,kr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(xu,t)}catch{}r=!0}return r}finally{re=n,$t.transition=e}}return!1}function Ym(t,e,n){e=ss(n,e),e=W_(t,e,1),t=cr(t,e,1),e=ut(),t!==null&&(sl(t,1,e),_t(t,e))}function _e(t,e,n){if(t.tag===3)Ym(t,t,n);else for(;e!==null;){if(e.tag===3){Ym(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=ss(n,t),t=G_(e,t,1),e=cr(e,t,1),t=ut(),e!==null&&(sl(e,1,t),_t(e,t));break}}e=e.return}}function qI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(He&n)===n&&(De===4||De===3&&(He&130023424)===He&&500>Se()-ep?Kr(t,0):Zf|=n),_t(t,e)}function d2(t,e){e===0&&(t.mode&1?(e=jl,jl<<=1,!(jl&130023424)&&(jl=4194304)):e=1);var n=ut();t=$n(t,e),t!==null&&(sl(t,e,n),_t(t,n))}function YI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d2(t,n)}function QI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),d2(t,n)}var f2;f2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,FI(t,e,n);gt=!!(t.flags&131072)}else gt=!1,pe&&e.flags&1048576&&m_(e,Da,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;da(t,e),t=e.pendingProps;var i=ts(e,nt.current);Wi(e,n),i=Kf(null,e,r,t,i,n);var s=qf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Pa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bf(e),i.updater=bu,e.stateNode=i,i._reactInternals=e,dd(e,r,t,n),e=gd(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Mf(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(da(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XI(r),t=Yt(r,t),i){case 0:e=pd(null,e,r,t,n);break e;case 1:e=jm(null,e,r,t,n);break e;case 11:e=Fm(null,e,r,t,n);break e;case 14:e=Um(null,e,r,Yt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),jm(t,e,r,i,n);case 3:e:{if(Q_(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,w_(t,e),ba(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ss(Error(k(423)),e),e=$m(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(k(424)),e),e=$m(t,e,r,n,i);break e}else for(At=ur(e.stateNode.containerInfo.firstChild),Nt=e,pe=!0,Jt=null,n=I_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===i){e=Vn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return T_(e),t===null&&ud(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,id(r,i)?o=null:s!==null&&id(r,s)&&(e.flags|=32),Y_(t,e),st(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return J_(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Fm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(La,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!vt.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=bn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cd(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wi(e,n),i=Vt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Um(t,e,r,i,n);case 15:return K_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),da(t,e),e.tag=1,yt(r)?(t=!0,Pa(e)):t=!1,Wi(e,n),C_(e,r,i),dd(e,r,i,n),gd(null,e,r,!0,t,n);case 19:return X_(t,e,n);case 22:return q_(t,e,n)}throw Error(k(156,e.tag))};function p2(t,e){return $y(t,e)}function JI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new JI(t,e,n,r)}function ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XI(t){if(typeof t=="function")return ip(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sf)return 11;if(t===If)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ga(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ip(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return qr(n.children,i,s,e);case Cf:o=8,i|=8;break;case bh:return t=Ut(12,n,e,i|2),t.elementType=bh,t.lanes=s,t;case Fh:return t=Ut(13,n,e,i),t.elementType=Fh,t.lanes=s,t;case Uh:return t=Ut(19,n,e,i),t.elementType=Uh,t.lanes=s,t;case Sy:return $u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ey:o=10;break e;case Cy:o=9;break e;case Sf:o=11;break e;case If:o=14;break e;case Yn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function $u(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=Sy,t.lanes=n,t.stateNode={isHidden:!1},t}function th(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function nh(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sp(t,e,n,r,i,s,o,l,a){return t=new ZI(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bf(s),t}function eT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function g2(t){if(!t)return wr;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(yt(n))return p_(t,n,e)}return e}function m2(t,e,n,r,i,s,o,l,a){return t=sp(n,r,!0,t,i,s,o,l,a),t.context=g2(null),n=t.current,r=ut(),i=dr(n),s=bn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,sl(t,i,r),_t(t,r),t}function Vu(t,e,n,r){var i=e.current,s=ut(),o=dr(i);return n=g2(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(rn(t,i,o,s),ua(t,i,o)),o}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function op(t,e){Qm(t,e),(t=t.alternate)&&Qm(t,e)}function tT(){return null}var v2=typeof reportError=="function"?reportError:function(t){console.error(t)};function lp(t){this._internalRoot=t}Bu.prototype.render=lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Vu(t,e,null,null)};Bu.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ni(function(){Vu(null,t,null,null)}),e[jn]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ky();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&Yy(t)}};function ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function nT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ha(o);s.call(u)}}var o=m2(e,r,t,0,null,!1,!1,"",Jm);return t._reactRootContainer=o,t[jn]=o.current,Io(t.nodeType===8?t.parentNode:t),ni(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ha(a);l.call(u)}}var a=sp(t,0,!1,null,null,!1,!1,"",Jm);return t._reactRootContainer=a,t[jn]=a.current,Io(t.nodeType===8?t.parentNode:t),ni(function(){Vu(e,a,n,r)}),a}function Hu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ha(o);l.call(a)}}Vu(e,o,t,i)}else o=nT(n,e,t,i,r);return Ha(o)}Wy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(Af(e,n|1),_t(e,Se()),!(ee&6)&&(os=Se()+500,kr()))}break;case 13:ni(function(){var r=$n(t,1);if(r!==null){var i=ut();rn(r,t,1,i)}}),op(t,1)}};Rf=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=ut();rn(e,t,134217728,n)}op(t,134217728)}};Gy=function(t){if(t.tag===13){var e=dr(t),n=$n(t,e);if(n!==null){var r=ut();rn(n,t,e,r)}op(t,e)}};Ky=function(){return re};qy=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};qh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lu(r);if(!i)throw Error(k(90));Ty(r),Vh(r,i)}}}break;case"textarea":Ay(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};Ly=tp;My=ni;var rT={usingClientEntryPoint:!1,Events:[ll,Ni,Lu,Oy,Dy,tp]},Ms={findFiberByHostInstance:jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iT={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance||tT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{xu=Ql.inject(iT),yn=Ql}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error(k(200));return eT(t,e,null,n)};Ot.createRoot=function(t,e){if(!ap(t))throw Error(k(299));var n=!1,r="",i=v2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sp(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,Io(t.nodeType===8?t.parentNode:t),new lp(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Uy(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return ni(t)};Ot.hydrate=function(t,e,n){if(!zu(e))throw Error(k(200));return Hu(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!ap(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=v2;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=m2(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,Io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bu(e)};Ot.render=function(t,e,n){if(!zu(e))throw Error(k(200));return Hu(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!zu(t))throw Error(k(40));return t._reactRootContainer?(ni(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Ot.unstable_batchedUpdates=tp;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zu(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Hu(t,e,n,!1,r)};Ot.version="18.2.0-next-9e3b772b8-20220608";function y2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y2)}catch(t){console.error(t)}}y2(),my.exports=Ot;var sT=my.exports,Xm=sT;Lh.createRoot=Xm.createRoot,Lh.hydrateRoot=Xm.hydrateRoot;const _2="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-5.5%200%2026%2026'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23000000'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3echevron-right%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-474.000000,%20-1196.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M488.404,1207.36%20L477.637,1197.6%20C476.806,1196.76%20475.459,1196.76%20474.629,1197.6%20C473.798,1198.43%20473.798,1199.77%20474.629,1200.6%20L483.885,1209%20L474.629,1217.4%20C473.798,1218.23%20473.798,1219.57%20474.629,1220.4%20C475.459,1221.24%20476.806,1221.24%20477.637,1220.4%20L488.404,1210.64%20C488.854,1210.19%20489.052,1209.59%20489.015,1209%20C489.052,1208.41%20488.854,1207.81%20488.404,1207.36'%20id='chevron-right'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",w2="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-5.5%200%2026%2026'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3e%3ctitle%3echevron-right%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-474.000000,%20-1196.000000)'%20fill='%23000000'%3e%3cpath%20d='M488.404,1207.36%20L477.637,1197.6%20C476.806,1196.76%20475.459,1196.76%20474.629,1197.6%20C473.798,1198.43%20473.798,1199.77%20474.629,1200.6%20L483.885,1209%20L474.629,1217.4%20C473.798,1218.23%20473.798,1219.57%20474.629,1220.4%20C475.459,1221.24%20476.806,1221.24%20477.637,1220.4%20L488.404,1210.64%20C488.854,1210.19%20489.052,1209.59%20489.015,1209%20C489.052,1208.41%20488.854,1207.81%20488.404,1207.36'%20id='chevron-right'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Zm="data:image/svg+xml,%3csvg%20width='84'%20height='81'%20viewBox='0%200%2084%2081'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='36.0624'%20width='51'%20height='11'%20transform='rotate(-45%200%2036.0624)'%20fill='%2306CBAD'%20fill-opacity='0.69'/%3e%3crect%20x='75.4827'%20y='44.2609'%20width='51'%20height='11'%20transform='rotate(-135%2075.4827%2044.2609)'%20fill='%23866BFA'%20fill-opacity='0.69'/%3e%3crect%20x='36.4827'%20y='80.2609'%20width='51'%20height='11'%20transform='rotate(-135%2036.4827%2080.2609)'%20fill='%23FD456B'%20fill-opacity='0.69'/%3e%3crect%20x='83.2609'%20y='44.1985'%20width='51'%20height='11'%20transform='rotate(135%2083.2609%2044.1985)'%20fill='%23F5CC00'%20fill-opacity='0.69'/%3e%3cpath%20d='M41.7083%2045.0363V32.8443H39.2763C38.999%2032.8443%2038.8603%2032.7163%2038.8603%2032.4603V30.8283C38.8603%2030.5723%2038.999%2030.4443%2039.2763%2030.4443H46.9563C47.2336%2030.4443%2047.3723%2030.5723%2047.3723%2030.8283V32.4603C47.3723%2032.7163%2047.2336%2032.8443%2046.9563%2032.8443H44.4923V44.7483C44.4923%2047.8843%2043.7563%2050.1136%2042.2843%2051.4363C40.8123%2052.7589%2038.5083%2053.4203%2035.3723%2053.4203C35.095%2053.4203%2034.9563%2053.2923%2034.9563%2053.0363V51.4043C34.9563%2051.1483%2035.095%2051.0203%2035.3723%2051.0203C37.719%2051.0203%2039.3616%2050.5403%2040.3003%2049.5803C41.239%2048.5989%2041.7083%2047.0843%2041.7083%2045.0363Z'%20fill='black'/%3e%3c/svg%3e",e0="data:image/svg+xml,%3csvg%20width='84'%20height='81'%20viewBox='0%200%2084%2081'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='36.0624'%20width='51'%20height='11'%20transform='rotate(-45%200%2036.0624)'%20fill='%2306CBAD'%20fill-opacity='0.69'/%3e%3crect%20x='75.4827'%20y='44.2609'%20width='51'%20height='11'%20transform='rotate(-135%2075.4827%2044.2609)'%20fill='%23866BFA'%20fill-opacity='0.69'/%3e%3crect%20x='36.4827'%20y='80.2609'%20width='51'%20height='11'%20transform='rotate(-135%2036.4827%2080.2609)'%20fill='%23FD456B'%20fill-opacity='0.69'/%3e%3crect%20x='83.261'%20y='44.1985'%20width='51'%20height='11'%20transform='rotate(135%2083.261%2044.1985)'%20fill='%23F5CC00'%20fill-opacity='0.69'/%3e%3cpath%20d='M41.7084%2045.0363V32.8443H39.2764C38.9991%2032.8443%2038.8604%2032.7163%2038.8604%2032.4603V30.8283C38.8604%2030.5723%2038.9991%2030.4443%2039.2764%2030.4443H46.9564C47.2337%2030.4443%2047.3724%2030.5723%2047.3724%2030.8283V32.4603C47.3724%2032.7163%2047.2337%2032.8443%2046.9564%2032.8443H44.4924V44.7483C44.4924%2047.8843%2043.7564%2050.1136%2042.2844%2051.4363C40.8124%2052.7589%2038.5084%2053.4203%2035.3724%2053.4203C35.0951%2053.4203%2034.9564%2053.2923%2034.9564%2053.0363V51.4043C34.9564%2051.1483%2035.0951%2051.0203%2035.3724%2051.0203C37.7191%2051.0203%2039.3617%2050.5403%2040.3004%2049.5803C41.2391%2048.5989%2041.7084%2047.0843%2041.7084%2045.0363Z'%20fill='white'/%3e%3c/svg%3e",oT="/Jobchaser/assets/anonymous-user-D-NFbeRp.svg",t0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%203C4.34315%203%203%204.34315%203%206V18C3%2019.6569%204.34315%2021%206%2021H17C17.5523%2021%2018%2020.5523%2018%2020C18%2019.4477%2017.5523%2019%2017%2019H6C5.44772%2019%205%2018.5523%205%2018V6C5%205.44772%205.44772%205%206%205H17C17.5523%205%2018%204.55228%2018%204C18%203.44772%2017.5523%203%2017%203H6ZM15.7071%207.29289C15.3166%206.90237%2014.6834%206.90237%2014.2929%207.29289C13.9024%207.68342%2013.9024%208.31658%2014.2929%208.70711L16.5858%2011H8C7.44772%2011%207%2011.4477%207%2012C7%2012.5523%207.44772%2013%208%2013H16.5858L14.2929%2015.2929C13.9024%2015.6834%2013.9024%2016.3166%2014.2929%2016.7071C14.6834%2017.0976%2015.3166%2017.0976%2015.7071%2016.7071L19.7071%2012.7071C20.0976%2012.3166%2020.0976%2011.6834%2019.7071%2011.2929L15.7071%207.29289Z'%20fill='%23ffff'/%3e%3c/g%3e%3c/svg%3e",n0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%203C4.34315%203%203%204.34315%203%206V18C3%2019.6569%204.34315%2021%206%2021H17C17.5523%2021%2018%2020.5523%2018%2020C18%2019.4477%2017.5523%2019%2017%2019H6C5.44772%2019%205%2018.5523%205%2018V6C5%205.44772%205.44772%205%206%205H17C17.5523%205%2018%204.55228%2018%204C18%203.44772%2017.5523%203%2017%203H6ZM15.7071%207.29289C15.3166%206.90237%2014.6834%206.90237%2014.2929%207.29289C13.9024%207.68342%2013.9024%208.31658%2014.2929%208.70711L16.5858%2011H8C7.44772%2011%207%2011.4477%207%2012C7%2012.5523%207.44772%2013%208%2013H16.5858L14.2929%2015.2929C13.9024%2015.6834%2013.9024%2016.3166%2014.2929%2016.7071C14.6834%2017.0976%2015.3166%2017.0976%2015.7071%2016.7071L19.7071%2012.7071C20.0976%2012.3166%2020.0976%2011.6834%2019.7071%2011.2929L15.7071%207.29289Z'%20fill='%23000000'/%3e%3c/svg%3e",lT={IsMobileScreen:!1,menuClass:null,checked:!1,timeoutId:null,styleTransition:"none",marginBottom:"none"},Ce={IS_MOBILE:"MOBILE_SCREEN",MENU_CLASS:"SIDE_MENU_IS_OPEN",CHECKED:"SIDE_MENU_IS_CLICKED",TIMEOUT_ID:"SET_TIMEOUT",STYLE_TRANSITION:"STYLE_TRANSITION",STYLE_BOTTOM:"STYLE_BOTTOM"};function aT(t,e){switch(e.type){case Ce.IS_MOBILE:return{...t,isMobileScreen:e.payload};case Ce.MENU_CLASS:return{...t,menuClass:e.payload};case Ce.CHECKED:return{...t,checked:e.payload};case Ce.TIMEOUT_ID:return{...t,timeoutId:e.payload};case Ce.STYLE_TRANSITION:return{...t,styleTransition:e.payload};case Ce.STYLE_TRANSITION:return{...t,styleTranistion:e.payload};default:console.error("ERROR");break}}/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Do.apply(this,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const r0="popstate";function uT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ad("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wa(i)}return hT(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function E2(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cT(){return Math.random().toString(36).substr(2,8)}function i0(t,e){return{usr:t.state,key:t.key,idx:e}}function Ad(t,e,n,r){return n===void 0&&(n=null),Do({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vs(e):e,{state:n,key:e&&e.key||r||cT()})}function Wa(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function vs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ir.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(Do({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function c(){l=ir.Pop;let I=h(),p=I==null?null:I-u;u=I,a&&a({action:l,location:w.location,delta:p})}function d(I,p){l=ir.Push;let f=Ad(w.location,I,p);n&&n(f,I),u=h()+1;let m=i0(f,u),E=w.createHref(f);try{o.pushState(m,"",E)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(E)}s&&a&&a({action:l,location:w.location,delta:1})}function g(I,p){l=ir.Replace;let f=Ad(w.location,I,p);n&&n(f,I),u=h();let m=i0(f,u),E=w.createHref(f);o.replaceState(m,"",E),s&&a&&a({action:l,location:w.location,delta:0})}function v(I){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Wa(I);return f=f.replace(/ $/,"%20"),Ie(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return l},get location(){return t(i,o)},listen(I){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(r0,c),a=I,()=>{i.removeEventListener(r0,c),a=null}},createHref(I){return e(i,I)},createURL:v,encodeLocation(I){let p=v(I);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(I){return o.go(I)}};return w}var s0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(s0||(s0={}));function dT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?vs(e):e,i=up(r.pathname||"/",n);if(i==null)return null;let s=C2(t);fT(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let a=TT(i);o=CT(s[l],a)}return o}function C2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(Ie(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=pr([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),C2(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:wT(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of S2(s.path))i(s,o,a)}),e}function S2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=S2(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function fT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ET(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pT=/^:[\w-]+$/,gT=3,mT=2,vT=1,yT=10,_T=-2,o0=t=>t==="*";function wT(t,e){let n=t.split("/"),r=n.length;return n.some(o0)&&(r+=_T),e&&(r+=mT),n.filter(i=>!o0(i)).reduce((i,s)=>i+(pT.test(s)?gT:s===""?vT:yT),r)}function ET(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function CT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=ST({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!h)return null;Object.assign(r,h.params);let c=l.route;s.push({params:r,pathname:pr([i,h.pathname]),pathnameBase:NT(pr([i,h.pathnameBase])),route:c}),h.pathnameBase!=="/"&&(i=pr([i,h.pathnameBase]))}return s}function ST(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=IT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,c)=>{let{paramName:d,isOptional:g}=h;if(d==="*"){let w=l[c]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[c];return g&&!v?u[d]=void 0:u[d]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function IT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),E2(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function TT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return E2(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function up(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function kT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vs(t):t;return{pathname:n?n.startsWith("/")?n:AT(n,e):e,search:xT(r),hash:PT(i)}}function AT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cp(t,e){let n=RT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=vs(t):(i=Do({},t),Ie(!i.pathname||!i.pathname.includes("?"),rh("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),rh("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),rh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}l=c>=0?e[c]:"/"}let a=kT(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),NT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,PT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const I2=["post","put","patch","delete"];new Set(I2);const DT=["get",...I2];new Set(DT);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lo.apply(this,arguments)}const dp=T.createContext(null),LT=T.createContext(null),Ar=T.createContext(null),Wu=T.createContext(null),Rr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),T2=T.createContext(null);function MT(t,e){let{relative:n}=e===void 0?{}:e;ys()||Ie(!1);let{basename:r,navigator:i}=T.useContext(Ar),{hash:s,pathname:o,search:l}=A2(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:pr([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ys(){return T.useContext(Wu)!=null}function ul(){return ys()||Ie(!1),T.useContext(Wu).location}function k2(t){T.useContext(Ar).static||T.useLayoutEffect(t)}function Gu(){let{isDataRoute:t}=T.useContext(Rr);return t?qT():bT()}function bT(){ys()||Ie(!1);let t=T.useContext(dp),{basename:e,future:n,navigator:r}=T.useContext(Ar),{matches:i}=T.useContext(Rr),{pathname:s}=ul(),o=JSON.stringify(cp(i,n.v7_relativeSplatPath)),l=T.useRef(!1);return k2(()=>{l.current=!0}),T.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=hp(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:pr([e,c.pathname])),(h.replace?r.replace:r.push)(c,h.state,h)},[e,r,o,s,t])}function A2(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Ar),{matches:i}=T.useContext(Rr),{pathname:s}=ul(),o=JSON.stringify(cp(i,r.v7_relativeSplatPath));return T.useMemo(()=>hp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function FT(t,e){return UT(t,e)}function UT(t,e,n,r){ys()||Ie(!1);let{navigator:i}=T.useContext(Ar),{matches:s}=T.useContext(Rr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=ul(),h;if(e){var c;let I=typeof e=="string"?vs(e):e;a==="/"||(c=I.pathname)!=null&&c.startsWith(a)||Ie(!1),h=I}else h=u;let d=h.pathname||"/",g=d;if(a!=="/"){let I=a.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(I.length).join("/")}let v=dT(t,{pathname:g}),w=zT(v&&v.map(I=>Object.assign({},I,{params:Object.assign({},l,I.params),pathname:pr([a,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?a:pr([a,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return e&&w?T.createElement(Wu.Provider,{value:{location:Lo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ir.Pop}},w):w}function jT(){let t=KT(),e=OT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const $T=T.createElement(jT,null);class VT extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Rr.Provider,{value:this.props.routeContext},T.createElement(T2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BT(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(dp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Rr.Provider,{value:e},r)}function zT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));h>=0||Ie(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let c=o[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=h),c.route.id){let{loaderData:d,errors:g}=n,v=c.route.loader&&d[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||v){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,c,d)=>{let g,v=!1,w=null,I=null;n&&(g=l&&c.route.id?l[c.route.id]:void 0,w=c.route.errorElement||$T,a&&(u<0&&d===0?(YT("route-fallback",!1),v=!0,I=null):u===d&&(v=!0,I=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,d+1)),f=()=>{let m;return g?m=w:v?m=I:c.route.Component?m=T.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=h,T.createElement(BT,{match:c,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?T.createElement(VT,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var R2=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(R2||{}),Ga=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ga||{});function HT(t){let e=T.useContext(dp);return e||Ie(!1),e}function WT(t){let e=T.useContext(LT);return e||Ie(!1),e}function GT(t){let e=T.useContext(Rr);return e||Ie(!1),e}function N2(t){let e=GT(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function KT(){var t;let e=T.useContext(T2),n=WT(Ga.UseRouteError),r=N2(Ga.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function qT(){let{router:t}=HT(R2.UseNavigateStable),e=N2(Ga.UseNavigateStable),n=T.useRef(!1);return k2(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Lo({fromRouteId:e},s)))},[t,e])}const l0={};function YT(t,e,n){!e&&!l0[t]&&(l0[t]=!0)}function QT(t){let{to:e,replace:n,state:r,relative:i}=t;ys()||Ie(!1);let{future:s,static:o}=T.useContext(Ar),{matches:l}=T.useContext(Rr),{pathname:a}=ul(),u=Gu(),h=hp(e,cp(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(h);return T.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function qs(t){Ie(!1)}function JT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ir.Pop,navigator:s,static:o=!1,future:l}=t;ys()&&Ie(!1);let a=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:a,navigator:s,static:o,future:Lo({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=vs(r));let{pathname:h="/",search:c="",hash:d="",state:g=null,key:v="default"}=r,w=T.useMemo(()=>{let I=up(h,a);return I==null?null:{location:{pathname:I,search:c,hash:d,state:g,key:v},navigationType:i}},[a,h,c,d,g,v,i]);return w==null?null:T.createElement(Ar.Provider,{value:u},T.createElement(Wu.Provider,{children:n,value:w}))}function XT(t){let{children:e,location:n}=t;return FT(Rd(e),n)}new Promise(()=>{});function Rd(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Rd(r.props.children,s));return}r.type!==qs&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nd.apply(this,arguments)}function ZT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ek(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tk(t,e){return t.button===0&&(!e||e==="_self")&&!ek(t)}const nk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],rk="6";try{window.__reactRouterVersion=rk}catch{}const ik="startTransition",a0=YC[ik];function sk(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=uT({window:i,v5Compat:!0}));let o=s.current,[l,a]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=T.useCallback(c=>{u&&a0?a0(()=>a(c)):a(c)},[a,u]);return T.useLayoutEffect(()=>o.listen(h),[o,h]),T.createElement(JT,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const ok=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x2=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h,unstable_viewTransition:c}=e,d=ZT(e,nk),{basename:g}=T.useContext(Ar),v,w=!1;if(typeof u=="string"&&lk.test(u)&&(v=u,ok))try{let m=new URL(window.location.href),E=u.startsWith("//")?new URL(m.protocol+u):new URL(u),N=up(E.pathname,g);E.origin===m.origin&&N!=null?u=N+E.search+E.hash:w=!0}catch{}let I=MT(u,{relative:i}),p=ak(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,unstable_viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return T.createElement("a",Nd({},d,{href:v||I,onClick:w||s?r:f,ref:n,target:a}))});var u0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(u0||(u0={}));var c0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(c0||(c0={}));function ak(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=Gu(),u=ul(),h=A2(t,{relative:o});return T.useCallback(c=>{if(tk(c,n)){c.preventDefault();let d=r!==void 0?r:Wa(u)===Wa(h);a(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,h,r,i,n,t,s,o,l])}var h0={};/**
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
 */const P2={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw _s(e)},_s=function(t){return new Error("Firebase Database ("+P2.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const O2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(d=64)),r.push(n[h],n[c],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(O2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new ck;const d=s<<2|l>>4;if(r.push(d),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ck extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D2=function(t){const e=O2(t);return fp.encodeByteArray(e,!0)},Ka=function(t){return D2(t).replace(/\./g,"")},qa=function(t){try{return fp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hk(t){return L2(void 0,t)}function L2(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dk(n)||(t[n]=L2(t[n],e[n]));return t}function dk(t){return t!=="__proto__"}/**
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
 */function fk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pk=()=>fk().__FIREBASE_DEFAULTS__,gk=()=>{if(typeof process>"u"||typeof h0>"u")return;const t=h0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qa(t[1]);return e&&JSON.parse(e)},pp=()=>{try{return pk()||gk()||mk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M2=t=>{var e,n;return(n=(e=pp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vk=t=>{const e=M2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},b2=()=>{var t;return(t=pp())===null||t===void 0?void 0:t.config},F2=t=>{var e;return(e=pp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function yk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ka(JSON.stringify(n)),Ka(JSON.stringify(o)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function U2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _k(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $2(){return P2.NODE_ADMIN===!0}function V2(){try{return typeof indexedDB=="object"}catch{return!1}}function B2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function wk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ek="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ek,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ck(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}}function Ck(t,e){return t.replace(Sk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sk=/\{\$([^}]+)}/g;/**
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
 */function Mo(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
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
 */const z2=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Mo(qa(s[0])||""),n=Mo(qa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Ik=function(t){const e=z2(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tk=function(t){const e=z2(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ls(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ya(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function bo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(d0(s)&&d0(o)){if(!bo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function d0(t){return t!==null&&typeof t=="object"}/**
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
 */function ws(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class kk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):c<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const d=(i<<5|i>>>27)+u+a+h+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ak(t,e){const n=new Rk(t,e);return n.subscribe.bind(n)}class Rk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ih),i.error===void 0&&(i.error=ih),i.complete===void 0&&(i.complete=ih);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}function Ku(t,e){return`${t} failed: ${e} argument `}/**
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
 */const xk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Pk=1e3,Ok=2,Dk=4*60*60*1e3,Lk=.5;function f0(t,e=Pk,n=Ok){const r=e*Math.pow(n,t),i=Math.round(Lk*r*(Math.random()-.5)*2);return Math.min(Dk,r+i)}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const br="[DEFAULT]";/**
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
 */class Mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fk(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bk(t){return t===br?void 0:t}function Fk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Uk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const jk={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},$k=ne.INFO,Vk={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Bk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Vk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=$k,this._logHandler=Bk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const zk=(t,e)=>e.some(n=>t instanceof n);let p0,g0;function Hk(){return p0||(p0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wk(){return g0||(g0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H2=new WeakMap,Pd=new WeakMap,W2=new WeakMap,sh=new WeakMap,mp=new WeakMap;function Gk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&H2.set(n,t)}).catch(()=>{}),mp.set(e,t),e}function Kk(t){if(Pd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pd.set(t,e)}let Od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qk(t){Od=t(Od)}function Yk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return W2.set(r,e.sort?e.sort():[e]),gr(r)}:Wk().includes(t)?function(...e){return t.apply(oh(this),e),gr(H2.get(this))}:function(...e){return gr(t.apply(oh(this),e))}}function Qk(t){return typeof t=="function"?Yk(t):(t instanceof IDBTransaction&&Kk(t),zk(t,Hk())?new Proxy(t,Od):t)}function gr(t){if(t instanceof IDBRequest)return Gk(t);if(sh.has(t))return sh.get(t);const e=Qk(t);return e!==t&&(sh.set(t,e),mp.set(e,t)),e}const oh=t=>mp.get(t);function G2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gr(o.result),a.oldVersion,a.newVersion,gr(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Jk=["get","getKey","getAll","getAllKeys","count"],Xk=["put","add","delete","clear"],lh=new Map;function m0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Xk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jk.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return lh.set(e,s),s}qk(t=>({...t,get:(e,n,r)=>m0(e,n)||t.get(e,n,r),has:(e,n)=>!!m0(e,n)||t.has(e,n)}));/**
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
 */class Zk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(e3(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function e3(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",v0="0.9.29";/**
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
 */const ri=new hl("@firebase/app"),t3="@firebase/app-compat",n3="@firebase/analytics-compat",r3="@firebase/analytics",i3="@firebase/app-check-compat",s3="@firebase/app-check",o3="@firebase/auth",l3="@firebase/auth-compat",a3="@firebase/database",u3="@firebase/database-compat",c3="@firebase/functions",h3="@firebase/functions-compat",d3="@firebase/installations",f3="@firebase/installations-compat",p3="@firebase/messaging",g3="@firebase/messaging-compat",m3="@firebase/performance",v3="@firebase/performance-compat",y3="@firebase/remote-config",_3="@firebase/remote-config-compat",w3="@firebase/storage",E3="@firebase/storage-compat",C3="@firebase/firestore",S3="@firebase/firestore-compat",I3="firebase",T3="10.9.0";/**
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
 */const Ld="[DEFAULT]",k3={[Dd]:"fire-core",[t3]:"fire-core-compat",[r3]:"fire-analytics",[n3]:"fire-analytics-compat",[s3]:"fire-app-check",[i3]:"fire-app-check-compat",[o3]:"fire-auth",[l3]:"fire-auth-compat",[a3]:"fire-rtdb",[u3]:"fire-rtdb-compat",[c3]:"fire-fn",[h3]:"fire-fn-compat",[d3]:"fire-iid",[f3]:"fire-iid-compat",[p3]:"fire-fcm",[g3]:"fire-fcm-compat",[m3]:"fire-perf",[v3]:"fire-perf-compat",[y3]:"fire-rc",[_3]:"fire-rc-compat",[w3]:"fire-gcs",[E3]:"fire-gcs-compat",[C3]:"fire-fst",[S3]:"fire-fst-compat","fire-js":"fire-js",[I3]:"fire-js-all"};/**
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
 */const Qa=new Map,Md=new Map;function A3(t,e){try{t.container.addComponent(e)}catch(n){ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ln(t){const e=t.name;if(Md.has(e))return ri.debug(`There were multiple attempts to register component ${e}.`),!1;Md.set(e,t);for(const n of Qa.values())A3(n,t);return!0}function pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const R3={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mr=new fi("app","Firebase",R3);/**
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
 */class N3{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const gi=T3;function K2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=b2()),!n)throw mr.create("no-options");const s=Qa.get(i);if(s){if(bo(n,s.options)&&bo(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new Uk(i);for(const a of Md.values())o.addComponent(a);const l=new N3(n,r,o);return Qa.set(i,l),l}function vp(t=Ld){const e=Qa.get(t);if(!e&&t===Ld&&b2())return K2();if(!e)throw mr.create("no-app",{appName:t});return e}function wt(t,e,n){var r;let i=(r=k3[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ri.warn(l.join(" "));return}ln(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const x3="firebase-heartbeat-database",P3=1,Fo="firebase-heartbeat-store";let ah=null;function q2(){return ah||(ah=G2(x3,P3,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),ah}async function O3(t){try{const n=(await q2()).transaction(Fo),r=await n.objectStore(Fo).get(Y2(t));return await n.done,r}catch(e){if(e instanceof an)ri.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ri.warn(n.message)}}}async function y0(t,e){try{const r=(await q2()).transaction(Fo,"readwrite");await r.objectStore(Fo).put(e,Y2(t)),await r.done}catch(n){if(n instanceof an)ri.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ri.warn(r.message)}}}function Y2(t){return`${t.name}!${t.options.appId}`}/**
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
 */const D3=1024,L3=30*24*60*60*1e3;class M3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=L3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_0(),{heartbeatsToSend:r,unsentEntries:i}=b3(this._heartbeatsCache.heartbeats),s=Ka(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _0(){return new Date().toISOString().substring(0,10)}function b3(t,e=D3){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),w0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),w0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class F3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return V2()?B2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await O3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return y0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return y0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function w0(t){return Ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function U3(t){ln(new zt("platform-logger",e=>new Zk(e),"PRIVATE")),ln(new zt("heartbeat",e=>new M3(e),"PRIVATE")),wt(Dd,v0,t),wt(Dd,v0,"esm2017"),wt("fire-js","")}U3("");var j3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,yp=yp||{},H=j3||self;function Yu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function dl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $3(t){return Object.prototype.hasOwnProperty.call(t,uh)&&t[uh]||(t[uh]=++V3)}var uh="closure_uid_"+(1e9*Math.random()>>>0),V3=0;function B3(t,e,n){return t.call.apply(t.bind,arguments)}function z3(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=B3:et=z3,et.apply(null,arguments)}function Jl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(r,o)}}function Nr(){this.s=this.s,this.o=this.o}var H3=0;Nr.prototype.s=!1;Nr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),H3!=0)&&$3(this)};Nr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Q2=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _p(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function E0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var W3=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};H.addEventListener("test",n,e),H.removeEventListener("test",n,e)}catch{}return t}();function Uo(t){return/^[\s\xa0]*$/.test(t)}function Qu(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function pn(t){return Qu().indexOf(t)!=-1}function wp(t){return wp[" "](t),t}wp[" "]=function(){};function G3(t,e){var n=jA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var K3=pn("Opera"),jo=pn("Trident")||pn("MSIE"),J2=pn("Edge"),bd=J2||jo,X2=pn("Gecko")&&!(Qu().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge"))&&!(pn("Trident")||pn("MSIE"))&&!pn("Edge"),q3=Qu().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge");function Z2(){var t=H.document;return t?t.documentMode:void 0}e:{var C0="",ch=function(){var t=Qu();if(X2)return/rv:([^\);]+)(\)|;)/.exec(t);if(J2)return/Edge\/([\d\.]+)/.exec(t);if(jo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(q3)return/WebKit\/(\S+)/.exec(t);if(K3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ch&&(C0=ch?ch[1]:""),jo){var S0=Z2();if(S0!=null&&S0>parseFloat(C0))break e}}H.document&&jo&&Z2();function $o(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X2){e:{try{wp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Y3[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$o.$.h.call(this)}}$e($o,tt);var Y3={2:"touch",3:"pen",4:"mouse"};$o.prototype.h=function(){$o.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fl="closure_listenable_"+(1e6*Math.random()|0),Q3=0;function J3(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Q3,this.fa=this.ia=!1}function Ju(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ep(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function X3(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function e1(t){const e={};for(const n in t)e[n]=t[n];return e}const I0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function t1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<I0.length;s++)n=I0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xu(t){this.src=t,this.g={},this.h=0}Xu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ud(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J3(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Fd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Q2(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ju(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ud(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Cp="closure_lm_"+(1e6*Math.random()|0),hh={};function n1(t,e,n,r,i){if(r&&r.once)return i1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)n1(t,e[s],n,r,i);return null}return n=Tp(n),t&&t[fl]?t.O(e,n,dl(r)?!!r.capture:!!r,i):r1(t,e,n,!1,r,i)}function r1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=dl(i)?!!i.capture:!!i,l=Ip(t);if(l||(t[Cp]=l=new Xu(t)),n=l.add(e,n,r,o,s),n.proxy)return n;if(r=Z3(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)W3||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(o1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Z3(){function t(n){return e.call(t.src,t.listener,n)}const e=eA;return t}function i1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)i1(t,e[s],n,r,i);return null}return n=Tp(n),t&&t[fl]?t.P(e,n,dl(r)?!!r.capture:!!r,i):r1(t,e,n,!0,r,i)}function s1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)s1(t,e[s],n,r,i);else r=dl(r)?!!r.capture:!!r,n=Tp(n),t&&t[fl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ud(s,n,r,i),-1<n&&(Ju(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ip(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ud(e,n,r,i)),(n=-1<t?e[t]:null)&&Sp(n))}function Sp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[fl])Fd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(o1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ip(e))?(Fd(n,t),n.h==0&&(n.src=null,e[Cp]=null)):Ju(t)}}}function o1(t){return t in hh?hh[t]:hh[t]="on"+t}function eA(t,e){if(t.fa)t=!0;else{e=new $o(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Sp(t),t=n.call(r,e)}return t}function Ip(t){return t=t[Cp],t instanceof Xu?t:null}var dh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tp(t){return typeof t=="function"?t:(t[dh]||(t[dh]=function(e){return t.handleEvent(e)}),t[dh])}function je(){Nr.call(this),this.i=new Xu(this),this.S=this,this.J=null}$e(je,Nr);je.prototype[fl]=!0;je.prototype.removeEventListener=function(t,e,n,r){s1(this,t,e,n,r)};function We(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var i=e;e=new tt(r,t),t1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Xl(o,r,!0,e)&&i}if(o=e.g=t,i=Xl(o,r,!0,e)&&i,i=Xl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Xl(o,r,!1,e)&&i}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ju(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Xl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Fd(t.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var kp=H.JSON.stringify;class tA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function nA(){var t=Ap;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rA{constructor(){this.h=this.g=null}add(e,n){const r=l1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var l1=new tA(()=>new iA,t=>t.reset());class iA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function oA(t){H.setTimeout(()=>{throw t},0)}let Vo,Bo=!1,Ap=new rA,a1=()=>{const t=H.Promise.resolve(void 0);Vo=()=>{t.then(lA)}};var lA=()=>{for(var t;t=nA();){try{t.h.call(t.g)}catch(n){oA(n)}var e=l1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bo=!1};function Zu(t,e){je.call(this),this.h=t||1,this.g=e||H,this.j=et(this.qb,this),this.l=Date.now()}$e(Zu,je);x=Zu.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(Rp(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Zu.$.N.call(this),Rp(this),delete this.g};function Np(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function u1(t){t.g=Np(()=>{t.g=null,t.i&&(t.i=!1,u1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aA extends Nr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:u1(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zo(t){Nr.call(this),this.h=t,this.g={}}$e(zo,Nr);var T0=[];function c1(t,e,n,r){Array.isArray(n)||(n&&(T0[0]=n.toString()),n=T0);for(var i=0;i<n.length;i++){var s=n1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function h1(t){Ep(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sp(e)},t),t.g={}}zo.prototype.N=function(){zo.$.N.call(this),h1(this)};zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ec(){this.g=!0}ec.prototype.Ea=function(){this.g=!1};function uA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function cA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function bi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dA(t,n)+(r?" "+r:"")})}function hA(t,e){t.info(function(){return"TIMEOUT: "+e})}ec.prototype.info=function(){};function dA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return kp(n)}catch{return e}}var Es={},k0=null;function xp(){return k0=k0||new je}Es.Ta="serverreachability";function d1(t){tt.call(this,Es.Ta,t)}$e(d1,tt);function Ho(t){const e=xp();We(e,new d1(e))}Es.STAT_EVENT="statevent";function f1(t,e){tt.call(this,Es.STAT_EVENT,t),this.stat=e}$e(f1,tt);function lt(t){const e=xp();We(e,new f1(e,t))}Es.Ua="timingevent";function p1(t,e){tt.call(this,Es.Ua,t),this.size=e}$e(p1,tt);function pl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Pp={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Op(){}Op.prototype.h=null;function A0(t){return t.h||(t.h=t.i())}function pA(){}var gl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Dp(){tt.call(this,"d")}$e(Dp,tt);function Lp(){tt.call(this,"c")}$e(Lp,tt);var jd;function tc(){}$e(tc,Op);tc.prototype.g=function(){return new XMLHttpRequest};tc.prototype.i=function(){return{}};jd=new tc;function ml(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new zo(this),this.P=gA,t=bd?125:void 0,this.V=new Zu(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new g1}function g1(){this.i=null,this.g="",this.h=!1}var gA=45e3,m1={},$d={};x=ml.prototype;x.setTimeout=function(t){this.P=t};function Vd(t,e,n){t.L=1,t.A=rc(Bn(e)),t.u=n,t.S=!0,v1(t,null)}function v1(t,e){t.G=Date.now(),vl(t),t.B=Bn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),T1(n.i,"t",r),t.o=0,n=t.l.J,t.h=new g1,t.g=G1(t.l,n?e:null,!t.u),0<t.O&&(t.M=new aA(et(t.Pa,t,t.g),t.O)),c1(t.U,t.g,"readystatechange",t.nb),e=t.I?e1(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ho(),uA(t.j,t.v,t.B,t.m,t.W,t.u)}x.nb=function(t){t=t.target;const e=this.M;e&&gn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const h=gn(this.g);var e=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||bd||this.g&&(this.h.h||this.g.ja()||P0(this.g)))){this.J||h!=4||e==7||(e==8||0>=c?Ho(3):Ho(2)),nc(this);var n=this.g.da();this.ca=n;t:if(y1(this)){var r=P0(this.g);t="";var i=r.length,s=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),ao(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cA(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uo(l)){var u=l;break t}}u=null}if(n=u)bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bd(this,n);else{this.i=!1,this.s=3,lt(12),Br(this),ao(this);break e}}this.S?(_1(this,h,o),bd&&this.i&&h==3&&(c1(this.U,this.V,"tick",this.mb),this.V.start())):(bi(this.j,this.m,o,null),Bd(this,o)),h==4&&Br(this),this.i&&!this.J&&(h==4?B1(this.l,this):(this.i=!1,vl(this)))}else bA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Br(this),ao(this)}}}catch{}finally{}};function y1(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function _1(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=mA(t,n),i==$d){e==4&&(t.s=4,lt(14),r=!1),bi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==m1){t.s=4,lt(15),bi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else bi(t.j,t.m,i,null),Bd(t,i);y1(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$p(e),e.M=!0,lt(11))):(bi(t.j,t.m,n,"[Invalid Chunked Response]"),Br(t),ao(t))}x.mb=function(){if(this.g){var t=gn(this.g),e=this.g.ja();this.o<e.length&&(nc(this),_1(this,t,e),this.i&&t!=4&&vl(this))}};function mA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?$d:(n=Number(e.substring(n,r)),isNaN(n)?m1:(r+=1,r+n>e.length?$d:(e=e.slice(r,r+n),t.o=r+n,e)))}x.cancel=function(){this.J=!0,Br(this)};function vl(t){t.Y=Date.now()+t.P,w1(t,t.P)}function w1(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=pl(et(t.lb,t),e)}function nc(t){t.C&&(H.clearTimeout(t.C),t.C=null)}x.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(hA(this.j,this.B),this.L!=2&&(Ho(),lt(17)),Br(this),this.s=2,ao(this)):w1(this,this.Y-t)};function ao(t){t.l.H==0||t.J||B1(t.l,t)}function Br(t){nc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Rp(t.V),h1(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||zd(n.i,t))){if(!t.K&&zd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Za(n),lc(n);else break e;jp(n),lt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=pl(et(n.ib,n),6e3));if(1>=R1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zr(n,11)}else if((t.K||n.g==t)&&Za(n),!Uo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const c=u[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Mp(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,he(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=W1(r,r.J?r.pa:null,r.Y),o.K){N1(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.C&&(nc(l),vl(l)),r.g=o}else $1(r);0<n.j.length&&ac(n)}else u[0]!="stop"&&u[0]!="close"||zr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zr(n,7):Up(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ho(4)}catch{}}function vA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function yA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function E1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=yA(t),r=vA(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var C1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _A(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Yr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Yr){this.h=t.h,Ja(this,t.j),this.s=t.s,this.g=t.g,Xa(this,t.m),this.l=t.l;var e=t.i,n=new Wo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),R0(this,n),this.o=t.o}else t&&(e=String(t).match(C1))?(this.h=!1,Ja(this,e[1]||"",!0),this.s=Js(e[2]||""),this.g=Js(e[3]||"",!0),Xa(this,e[4]),this.l=Js(e[5]||"",!0),R0(this,e[6]||"",!0),this.o=Js(e[7]||"")):(this.h=!1,this.i=new Wo(null,this.h))}Yr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xs(e,N0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xs(e,N0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xs(n,n.charAt(0)=="/"?CA:EA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xs(n,IA)),t.join("")};function Bn(t){return new Yr(t)}function Ja(t,e,n){t.j=n?Js(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function R0(t,e,n){e instanceof Wo?(t.i=e,TA(t.i,t.h)):(n||(e=Xs(e,SA)),t.i=new Wo(e,t.h))}function he(t,e,n){t.i.set(e,n)}function rc(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Js(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var N0=/[#\/\?@]/g,EA=/[#\?:]/g,CA=/[#\?]/g,SA=/[#\?@]/g,IA=/#/g;function Wo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xr(t){t.g||(t.g=new Map,t.h=0,t.i&&_A(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Wo.prototype;x.add=function(t,e){xr(this),this.i=null,t=Cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function S1(t,e){xr(t),e=Cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function I1(t,e){return xr(t),e=Cs(t,e),t.g.has(e)}x.forEach=function(t,e){xr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){xr(this);let e=[];if(typeof t=="string")I1(this,t)&&(e=e.concat(this.g.get(Cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return xr(this),this.i=null,t=Cs(this,t),I1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function T1(t,e,n){S1(t,e),0<n.length&&(t.i=null,t.g.set(Cs(t,e),_p(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TA(t,e){e&&!t.j&&(xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(S1(this,r),T1(this,i,n))},t)),t.j=e}var kA=class{constructor(t,e){this.g=t,this.map=e}};function k1(t){this.l=t||AA,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AA=10;function A1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function R1(t){return t.h?1:t.g?t.g.size:0}function zd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mp(t,e){t.g?t.g.add(e):t.h=e}function N1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}k1.prototype.cancel=function(){if(this.i=x1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function x1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return _p(t.i)}var RA=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function NA(){this.g=new RA}function xA(t,e,n){const r=n||"";try{E1(t,function(i,s){let o=i;dl(i)&&(o=kp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function PA(t,e){const n=new ec;if(H.Image){const r=new Image;r.onload=Jl(Zl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Jl(Zl,n,r,"TestLoadImage: error",!1,e),r.onabort=Jl(Zl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Jl(Zl,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Zl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ic(t){this.l=t.ec||null,this.j=t.ob||!1}$e(ic,Op);ic.prototype.g=function(){return new sc(this.l,this.j)};ic.prototype.i=function(t){return function(){return t}}({});function sc(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=bp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(sc,je);var bp=0;x=sc.prototype;x.open=function(t,e){if(this.readyState!=bp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Go(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yl(this)),this.readyState=bp};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;P1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function P1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yl(this):Go(this),this.readyState==3&&P1(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,yl(this))};x.Ya=function(t){this.g&&(this.response=t,yl(this))};x.ka=function(){this.g&&yl(this)};function yl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Go(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Go(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OA=H.JSON.parse;function Te(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=O1,this.L=this.M=!1}$e(Te,je);var O1="",DA=/^https?$/i,LA=["POST","PUT"];x=Te.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jd.g(),this.C=this.u?A0(this.u):A0(jd),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){x0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=Q2(LA,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{M1(this),0<this.B&&((this.L=MA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Np(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){x0(this,s)}};function MA(t){return jo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof yp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function x0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,D1(t),oc(t)}function D1(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),oc(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oc(this,!0)),Te.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?L1(this):this.kb())};x.kb=function(){L1(this)};function L1(t){if(t.h&&typeof yp<"u"&&(!t.C[1]||gn(t)!=4||t.da()!=2)){if(t.v&&gn(t)==4)Np(t.La,0,t);else if(We(t,"readystatechange"),gn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(C1)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),r=!DA.test(i?i.toLowerCase():"")}n=r}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var s=2<gn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",D1(t)}}finally{oc(t)}}}}function oc(t,e){if(t.g){M1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=r}catch{}}}function M1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function gn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OA(e)}};function P0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case O1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function bA(t){const e={};t=(t.g&&2<=gn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Uo(t[r]))continue;var n=sA(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}X3(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function b1(t){let e="";return Ep(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Fp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=b1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function F1(t){this.Ga=0,this.j=[],this.l=new ec,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bs("baseRetryDelayMs",5e3,t),this.hb=bs("retryDelaySeedMs",1e4,t),this.eb=bs("forwardChannelMaxRetries",2,t),this.xa=bs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new k1(t&&t.concurrentRequestLimit),this.Ja=new NA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=F1.prototype;x.ra=8;x.H=1;function Up(t){if(U1(t),t.H==3){var e=t.W++,n=Bn(t.I);if(he(n,"SID",t.K),he(n,"RID",e),he(n,"TYPE","terminate"),_l(t,n),e=new ml(t,t.l,e),e.L=2,e.A=rc(Bn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.A,n=!0),n||(e.g=G1(e.l,null),e.g.ha(e.A)),e.G=Date.now(),vl(e)}H1(t)}function lc(t){t.g&&($p(t),t.g.cancel(),t.g=null)}function U1(t){lc(t),t.u&&(H.clearTimeout(t.u),t.u=null),Za(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function ac(t){if(!A1(t.i)&&!t.m){t.m=!0;var e=t.Na;Vo||a1(),Bo||(Vo(),Bo=!0),Ap.add(e,t),t.C=0}}function FA(t,e){return R1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=pl(et(t.Na,t,e),z1(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ml(this,this.l,t);let s=this.s;if(this.U&&(s?(s=e1(s),t1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=j1(this,i,e),n=Bn(this.I),he(n,"RID",t),he(n,"CVER",22),this.F&&he(n,"X-HTTP-Session-Id",this.F),_l(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(b1(s)))+"&"+e:this.o&&Fp(n,this.o,s)),Mp(this.i,i),this.bb&&he(n,"TYPE","init"),this.P?(he(n,"$req",e),he(n,"SID","null"),i.aa=!0,Vd(i,n,null)):Vd(i,n,e),this.H=2}}else this.H==3&&(t?O0(this,t):this.j.length==0||A1(this.i)||O0(this))};function O0(t,e){var n;e?n=e.m:n=t.W++;const r=Bn(t.I);he(r,"SID",t.K),he(r,"RID",n),he(r,"AID",t.V),_l(t,r),t.o&&t.s&&Fp(r,t.o,t.s),n=new ml(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=j1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Mp(t.i,n),Vd(n,r,e)}function _l(t,e){t.na&&Ep(t.na,function(n,r){he(e,r,n)}),t.h&&E1({},function(n,r){he(e,r,n)})}function j1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?et(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const h=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{xA(h,o,"req"+u+"_")}catch{r&&r(h)}}if(l){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vo||a1(),Bo||(Vo(),Bo=!0),Ap.add(e,t),t.A=0}}function jp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=pl(et(t.Ma,t),z1(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,V1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=pl(et(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),lc(this),V1(this))};function $p(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function V1(t){t.g=new ml(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Bn(t.wa);he(e,"RID","rpc"),he(e,"SID",t.K),he(e,"AID",t.V),he(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&he(e,"TO",t.qa),he(e,"TYPE","xmlhttp"),_l(t,e),t.o&&t.s&&Fp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=rc(Bn(e)),n.u=null,n.S=!0,v1(n,t)}x.ib=function(){this.v!=null&&(this.v=null,lc(this),jp(this),lt(19))};function Za(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function B1(t,e){var n=null;if(t.g==e){Za(t),$p(t),t.g=null;var r=2}else if(zd(t.i,e))n=e.F,N1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=xp(),We(r,new p1(r,n)),ac(t)}else $1(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&FA(t,e)||r==2&&jp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zr(t,5);break;case 4:zr(t,10);break;case 3:zr(t,6);break;default:zr(t,2)}}}function z1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=et(t.pb,t);n||(n=new Yr("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Ja(n,"https"),rc(n)),PA(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),H1(t),U1(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function H1(t){if(t.H=0,t.ma=[],t.h){const e=x1(t.i);(e.length!=0||t.j.length!=0)&&(E0(t.ma,e),E0(t.ma,t.j),t.i.i.length=0,_p(t.j),t.j.length=0),t.h.ya()}}function W1(t,e,n){var r=n instanceof Yr?Bn(n):new Yr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Xa(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Yr(null);r&&Ja(s,r),e&&(s.g=e),i&&Xa(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&he(r,n,e),he(r,"VER",t.ra),_l(t,r),r}function G1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Te(new ic({ob:n})):new Te(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function K1(){}x=K1.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Ht(t,e){je.call(this),this.g=new F1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Uo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ss(this)}$e(Ht,je);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=W1(t,null,t.Y),ac(t)};Ht.prototype.close=function(){Up(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kp(t),t=n);e.j.push(new kA(e.fb++,t)),e.H==3&&ac(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,Up(this.g),delete this.g,Ht.$.N.call(this)};function q1(t){Dp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(q1,Dp);function Y1(){Lp.call(this),this.status=1}$e(Y1,Lp);function Ss(t){this.g=t}$e(Ss,K1);Ss.prototype.Ba=function(){We(this.g,"a")};Ss.prototype.Aa=function(t){We(this.g,new q1(t))};Ss.prototype.za=function(t){We(this.g,new Y1)};Ss.prototype.ya=function(){We(this.g,"b")};function UA(){this.blockSize=-1}function Cn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(Cn,UA);Cn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Cn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)fh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){fh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){fh(this,r),i=0;break}}this.h=i,this.i+=e};Cn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var jA={};function Vp(t){return-128<=t&&128>t?G3(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function mn(t){if(isNaN(t)||!isFinite(t))return Ki;if(0>t)return Be(mn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Hd;return new ie(e,0)}function Q1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Be(Q1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mn(Math.pow(e,8)),r=Ki,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=mn(Math.pow(e,s)),r=r.R(s).add(mn(o))):(r=r.R(n),r=r.add(mn(o)))}return r}var Hd=4294967296,Ki=Vp(0),Wd=Vp(1),D0=Vp(16777216);x=ie.prototype;x.ea=function(){if(Ft(this))return-Be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Hd+r)*e,e*=Hd}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(On(this))return"0";if(Ft(this))return"-"+Be(this).toString(t);for(var e=mn(Math.pow(t,6)),n=this,r="";;){var i=tu(n,e).g;n=eu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,On(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function On(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}x.X=function(t){return t=eu(this,t),Ft(t)?-1:On(t)?0:1};function Be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(Wd)}x.abs=function(){return Ft(this)?Be(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function eu(t,e){return t.add(Be(e))}x.R=function(t){if(On(this)||On(t))return Ki;if(Ft(this))return Ft(t)?Be(this).R(Be(t)):Be(Be(this).R(t));if(Ft(t))return Be(this.R(Be(t)));if(0>this.X(D0)&&0>t.X(D0))return mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=t.D(i)>>>16,a=t.D(i)&65535;n[2*r+2*i]+=o*a,ea(n,2*r+2*i),n[2*r+2*i+1]+=s*a,ea(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,ea(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,ea(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function ea(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fs(t,e){this.g=t,this.h=e}function tu(t,e){if(On(e))throw Error("division by zero");if(On(t))return new Fs(Ki,Ki);if(Ft(t))return e=tu(Be(t),e),new Fs(Be(e.g),Be(e.h));if(Ft(e))return e=tu(t,Be(e)),new Fs(Be(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wd,r=e;0>=r.X(t);)n=L0(n),r=L0(r);var i=Ei(n,1),s=Ei(r,1);for(r=Ei(r,2),n=Ei(n,2);!On(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ei(r,1),n=Ei(n,1)}return e=eu(t,i.R(e)),new Fs(i,e)}for(i=Ki;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=mn(n),o=s.R(e);Ft(o)||0<o.X(t);)n-=r,s=mn(n),o=s.R(e);On(s)&&(s=Wd),i=i.add(s),t=eu(t,o)}return new Fs(i,t)}x.gb=function(t){return tu(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function L0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function Ei(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;Pp.NO_ERROR=0;Pp.TIMEOUT=8;Pp.HTTP_ERROR=6;fA.COMPLETE="complete";pA.EventType=gl;gl.OPEN="a";gl.CLOSE="b";gl.ERROR="c";gl.MESSAGE="d";je.prototype.listen=je.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;Cn.prototype.digest=Cn.prototype.l;Cn.prototype.reset=Cn.prototype.reset;Cn.prototype.update=Cn.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=mn;ie.fromString=Q1;var $A=ie;const M0="@firebase/firestore";/**
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
 */let uc="10.9.0";/**
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
 */const nu=new hl("@firebase/firestore");function Rt(t,...e){if(nu.logLevel<=ne.DEBUG){const n=e.map(J1);nu.debug(`Firestore (${uc}): ${t}`,...n)}}function Bp(t,...e){if(nu.logLevel<=ne.ERROR){const n=e.map(J1);nu.error(`Firestore (${uc}): ${t}`,...n)}}function J1(t){if(typeof t=="string")return t;try{/**
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
 */function X1(t="Unexpected state"){const e=`FIRESTORE (${uc}) INTERNAL ASSERTION FAILED: `+t;throw Bp(e),new Error(e)}function Gd(t,e){t||X1()}/**
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
 */const Tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class kt extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class VA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class zA{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new qi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{Rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Gd(typeof r.accessToken=="string"),new VA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Gd(e===null||typeof e=="string"),new ft(e)}}class HA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Rt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Gd(typeof n.token=="string"),this.R=n.token,new GA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function qA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class YA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z1(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class QA{constructor(e,n,r,i,s,o,l,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class ru{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ru("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ru&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var b0,Z;(Z=b0||(b0={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new $A([4294967295,4294967295],0);function ph(){return typeof document<"u"?document:null}/**
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
 */class JA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&Rt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class zp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new zp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new kt(Tt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function XA(t,e){if(Bp("AsyncQueue",`${e}: ${t}`),Z1(t))return new kt(Tt.UNAVAILABLE,`${e}: ${t}`);throw t}var F0,U0;(U0=F0||(F0={})).j_="default",U0.Cache="cache";/**
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
 */class ZA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=YA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Rt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Rt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new kt(Tt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=XA(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function ew(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const j0=new Map;function e4(t,e,n,r){if(e===!0&&r===!0)throw new kt(Tt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class $0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new kt(Tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new kt(Tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}e4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ew((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new kt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new kt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new kt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class t4{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new kt(Tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new kt(Tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BA;switch(r.type){case"firstParty":return new WA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new kt(Tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j0.get(n);r&&(Rt("ComponentProvider","Removing Datastore"),j0.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class n4{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new JA(this,"async_queue_retry"),this.cu=()=>{const n=ph();n&&Rt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=ph();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new qi;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Z1(e))throw e;Rt("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Bp("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=zp.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&X1()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class r4 extends t4{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new n4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||i4(this),this._firestoreClient.terminate()}}function i4(t){var e,n,r;const i=t._freezeSettings(),s=function(l,a,u,h){return new QA(l,a,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ew(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ZA(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){uc=i})(gi),ln(new zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new r4(new zA(r.getProvider("auth-internal")),new KA(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new kt(Tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),wt(M0,"4.5.0",e),wt(M0,"4.5.0","esm2017")})();function Hp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s4=tw,nw=new fi("auth","Firebase",tw());/**
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
 */const iu=new hl("@firebase/auth");function o4(t,...e){iu.logLevel<=ne.WARN&&iu.warn(`Auth (${gi}): ${t}`,...e)}function ma(t,...e){iu.logLevel<=ne.ERROR&&iu.error(`Auth (${gi}): ${t}`,...e)}/**
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
 */function Wt(t,...e){throw Wp(t,...e)}function wn(t,...e){return Wp(t,...e)}function rw(t,e,n){const r=Object.assign(Object.assign({},s4()),{[e]:n});return new fi("auth","Firebase",r).create(e,{appName:t.name})}function iw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Wt(t,"argument-error"),rw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nw.create(t,...e)}function z(t,e,...n){if(!t)throw Wp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ma(e),new Error(e)}function zn(t,e){t||Dn(e)}/**
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
 */function Kd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function l4(){return V0()==="http:"||V0()==="https:"}function V0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function a4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l4()||U2()||"connection"in navigator)?navigator.onLine:!0}function u4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=gp()||j2()}get(){return a4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gp(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const c4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const h4=new wl(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,i={}){return ow(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ws(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),sw.fetch()(lw(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function ow(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},c4),e);try{const i=new f4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ta(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rw(t,h,u);Wt(t,h)}}catch(i){if(i instanceof an)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function El(t,e,n,r,i={}){const s=await Or(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gp(t.config,i):`${t.config.apiScheme}://${i}`}function d4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class f4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),h4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}function B0(t){return t!==void 0&&t.enterprise!==void 0}class p4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return d4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function g4(t,e){return Or(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
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
 */async function m4(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function v4(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y4(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=Kp(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:uo(gh(i.auth_time)),issuedAtTime:uo(gh(i.iat)),expirationTime:uo(gh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gh(t){return Number(t)*1e3}function Kp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=qa(n);return i?JSON.parse(i):(ma("Failed to decode base64 JWT payload"),null)}catch(i){return ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _4(t){const e=Kp(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&w4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function w4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class E4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function su(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ko(t,v4(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?I4(s.providerUserInfo):[],l=S4(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new aw(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function C4(t){const e=Ye(t);await su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function S4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function I4(t){return t.map(e=>{var{providerId:n}=e,r=Hp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function T4(t,e){const n=await ow(t,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",sw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function k4(t,e){return Or(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
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
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await T4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qo;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function qn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return y4(this,e)}reload(){return C4(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ko(this,m4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:m,emailVerified:E,isAnonymous:N,providerData:L,stsTokenManager:D}=n;z(m&&D,e,"internal-error");const b=qo.fromJSON(this.name,D);z(typeof m=="string",e,"internal-error"),qn(c,e.name),qn(d,e.name),z(typeof E=="boolean",e,"internal-error"),z(typeof N=="boolean",e,"internal-error"),qn(g,e.name),qn(v,e.name),qn(w,e.name),qn(I,e.name),qn(p,e.name),qn(f,e.name);const Y=new Qr({uid:m,auth:e,email:d,emailVerified:E,displayName:c,isAnonymous:N,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:b,createdAt:p,lastLoginAt:f});return L&&Array.isArray(L)&&(Y.providerData=L.map(W=>Object.assign({},W))),I&&(Y._redirectEventId=I),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new qo;i.updateFromServerResponse(n);const s=new Qr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await su(s),s}}/**
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
 */const z0=new Map;function Ln(t){zn(t instanceof Function,"Expected a class definition");let e=z0.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,z0.set(t,e),e)}/**
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
 */class uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uw.type="NONE";const H0=uw;/**
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
 */function va(t,e,n){return`firebase:${t}:${e}:${n}`}class Yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=va(this.userKey,i.apiKey,s),this.fullPersistenceKey=va("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yi(Ln(H0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ln(H0);const o=va(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const c=Qr._fromJSON(e,h);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Yi(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Yi(s,e,r))}}/**
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
 */function W0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pw(e))return"Blackberry";if(gw(e))return"Webos";if(qp(e))return"Safari";if((e.includes("chrome/")||hw(e))&&!e.includes("edge/"))return"Chrome";if(fw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cw(t=rt()){return/firefox\//i.test(t)}function qp(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hw(t=rt()){return/crios\//i.test(t)}function dw(t=rt()){return/iemobile/i.test(t)}function fw(t=rt()){return/android/i.test(t)}function pw(t=rt()){return/blackberry/i.test(t)}function gw(t=rt()){return/webos/i.test(t)}function cc(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A4(t=rt()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R4(){return _k()&&document.documentMode===10}function mw(t=rt()){return cc(t)||fw(t)||gw(t)||pw(t)||/windows phone/i.test(t)||dw(t)}function N4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vw(t,e=[]){let n;switch(t){case"Browser":n=W0(rt());break;case"Worker":n=`${W0(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
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
 */class x4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function P4(t,e={}){return Or(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
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
 */const O4=6;class D4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:O4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class L4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G0(this),this.idTokenSubscription=new G0(this),this.beforeStateQueue=new x4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=u4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await P4(this),n=new D4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await k4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&o4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gn(t){return Ye(t)}class G0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ak(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function M4(t){hc=t}function yw(t){return hc.loadJS(t)}function b4(){return hc.recaptchaEnterpriseScript}function F4(){return hc.gapiScript}function U4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const j4="recaptcha-enterprise",$4="NO_RECAPTCHA";class V4{constructor(e){this.type=j4,this.auth=Gn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{g4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new p4(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;B0(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o($4)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&B0(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=b4();a.length!==0&&(a+=l),yw(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function K0(t,e,n,r=!1){const i=new V4(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await K0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await K0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function B4(t,e){const n=pi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(bo(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function z4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function H4(t,e,n){const r=Gn(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_w(e),{host:o,port:l}=W4(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||G4()}function _w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function W4(t){const e=_w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:q0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:q0(o)}}}function q0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function G4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function K4(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function q4(t,e){return El(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
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
 */async function Y4(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function Q4(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
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
 */class Yo extends Yp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qd(e,n,"signInWithPassword",q4);case"emailLink":return Y4(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qd(e,r,"signUpPassword",K4);case"emailLink":return Q4(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qi(t,e){return El(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
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
 */const J4="http://localhost";class ii extends Yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:J4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ws(n)}return e}}/**
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
 */function X4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z4(t){const e=Ys(Qs(t)).link,n=e?Ys(Qs(e)).deep_link_id:null,r=Ys(Qs(t)).deep_link_id;return(r?Ys(Qs(r)).link:null)||r||n||e||t}class Qp{constructor(e){var n,r,i,s,o,l;const a=Ys(Qs(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,h=(r=a.oobCode)!==null&&r!==void 0?r:null,c=X4((i=a.mode)!==null&&i!==void 0?i:null);z(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Z4(e);try{return new Qp(n)}catch{return null}}}/**
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
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return Yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qp.parseLink(n);return z(r,"argument-error"),Yo._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cl extends dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zn extends Cl{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class er extends Cl{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
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
 */class tr extends Cl{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
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
 */async function eR(t,e){return El(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
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
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qr._fromIdTokenResponse(e,r,i),o=Y0(r);return new si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Y0(r);return new si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Y0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ou extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ou.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ou(e,n,r,i)}}function ww(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ou._fromErrorAndOperation(t,s,e,r):s})}async function tR(t,e,n=!1){const r=await Ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",r)}/**
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
 */async function nR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ko(t,ww(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=Kp(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
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
 */async function Ew(t,e,n=!1){const r="signIn",i=await ww(t,r,e),s=await si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rR(t,e){return Ew(Gn(t),e)}/**
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
 */async function Cw(t){const e=Gn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iR(t,e,n){const r=Gn(t),o=await qd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eR).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Cw(t),a}),l=await si._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function sR(t,e,n){return rR(Ye(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cw(t),r})}function oR(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function lR(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function Sw(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function aR(t){return Ye(t).signOut()}const lu="__sak";/**
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
 */class Iw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lu,"1"),this.storage.removeItem(lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uR(){const t=rt();return qp(t)||cc(t)}const cR=1e3,hR=10;class Tw extends Iw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uR()&&N4(),this.fallbackToPolling=mw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);R4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tw.type="LOCAL";const dR=Tw;/**
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
 */class kw extends Iw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kw.type="SESSION";const Aw=kw;/**
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
 */function fR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await fR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
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
 */function Jp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Jp("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function gR(t){En().location.href=t}/**
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
 */function Rw(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function mR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yR(){return Rw()?self:null}/**
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
 */const Nw="firebaseLocalStorageDb",_R=1,au="firebaseLocalStorage",xw="fbase_key";class Sl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pc(t,e){return t.transaction([au],e?"readwrite":"readonly").objectStore(au)}function wR(){const t=indexedDB.deleteDatabase(Nw);return new Sl(t).toPromise()}function Yd(){const t=indexedDB.open(Nw,_R);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(au,{keyPath:xw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(au)?e(r):(r.close(),await wR(),e(await Yd()))})})}async function Q0(t,e,n){const r=pc(t,!0).put({[xw]:e,value:n});return new Sl(r).toPromise()}async function ER(t,e){const n=pc(t,!1).get(e),r=await new Sl(n).toPromise();return r===void 0?null:r.value}function J0(t,e){const n=pc(t,!0).delete(e);return new Sl(n).toPromise()}const CR=800,SR=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(yR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mR(),!this.activeServiceWorker)return;this.sender=new pR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yd();return await Q0(e,lu,"1"),await J0(e,lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Q0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ER(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>J0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pc(i,!1).getAll();return new Sl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const IR=Pw;new wl(3e4,6e4);/**
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
 */function Xp(t,e){return e?Ln(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zp extends Yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TR(t){return Ew(t.auth,new Zp(t),t.bypassAuthState)}function kR(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),nR(n,new Zp(t),t.bypassAuthState)}async function AR(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),tR(n,new Zp(t),t.bypassAuthState)}/**
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
 */class Ow{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TR;case"linkViaPopup":case"linkViaRedirect":return AR;case"reauthViaPopup":case"reauthViaRedirect":return kR;default:Wt(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RR=new wl(2e3,1e4);async function NR(t,e,n){const r=Gn(t);iw(t,e,dc);const i=Xp(r,n);return new Hr(r,"signInViaPopup",e,i).executeNotNull()}class Hr extends Ow{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RR.get())};e()}}Hr.currentPopupAction=null;/**
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
 */const xR="pendingRedirect",ya=new Map;class PR extends Ow{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ya.get(this.auth._key());if(!e){try{const r=await OR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ya.set(this.auth._key(),e)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OR(t,e){const n=Lw(e),r=Dw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function DR(t,e){return Dw(t)._set(Lw(e),"true")}function LR(t,e){ya.set(t._key(),e)}function Dw(t){return Ln(t._redirectPersistence)}function Lw(t){return va(xR,t.config.apiKey,t.name)}/**
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
 */function MR(t,e,n){return bR(t,e,n)}async function bR(t,e,n){const r=Gn(t);iw(t,e,dc),await r._initializationPromise;const i=Xp(r,n);return await DR(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function FR(t,e,n=!1){const r=Gn(t),i=Xp(r,e),o=await new PR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const UR=10*60*1e3;class jR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$R(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UR&&this.cachedEventUids.clear(),this.cachedEventUids.has(X0(e))}saveEventToCache(e){this.cachedEventUids.add(X0(e)),this.lastProcessedEventTime=Date.now()}}function X0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $R(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mw(t);default:return!1}}/**
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
 */async function VR(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
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
 */const BR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zR=/^https?/;async function HR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VR(t);for(const n of e)try{if(WR(n))return}catch{}Wt(t,"unauthorized-domain")}function WR(t){const e=Kd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zR.test(n))return!1;if(BR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const GR=new wl(3e4,6e4);function Z0(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KR(t){return new Promise((e,n)=>{var r,i,s;function o(){Z0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Z0(),n(wn(t,"network-request-failed"))},timeout:GR.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const l=U4("iframefcb");return En()[l]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},yw(`${F4()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw _a=null,e})}let _a=null;function qR(t){return _a=_a||KR(t),_a}/**
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
 */const YR=new wl(5e3,15e3),QR="__/auth/iframe",JR="emulator/auth/iframe",XR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eN(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gp(e,JR):`https://${t.config.authDomain}/${QR}`,r={apiKey:e.apiKey,appName:t.name,v:gi},i=ZR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ws(r).slice(1)}`}async function tN(t){const e=await qR(t),n=En().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:eN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),l=En().setTimeout(()=>{s(o)},YR.get());function a(){En().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const nN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rN=500,iN=600,sN="_blank",oN="http://localhost";class ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lN(t,e,n,r=rN,i=iN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},nN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(l=hw(u)?sN:n),cw(u)&&(e=e||oN,a.scrollbars="yes");const h=Object.entries(a).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(A4(u)&&l!=="_self")return aN(e||"",l),new ev(null);const c=window.open(e||"",l,h);z(c,t,"popup-blocked");try{c.focus()}catch{}return new ev(c)}function aN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uN="__/auth/handler",cN="emulator/auth/handler",hN=encodeURIComponent("fac");async function tv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gi,eventId:i};if(e instanceof dc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries(s||{}))o[h]=c}if(e instanceof Cl){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${hN}=${encodeURIComponent(a)}`:"";return`${dN(t)}?${ws(l).slice(1)}${u}`}function dN({config:t}){return t.emulator?Gp(t,cN):`https://${t.authDomain}/${uN}`}/**
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
 */const mh="webStorageSupport";class fN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=FR,this._overrideRedirectResult=LR}async _openPopup(e,n,r,i){var s;zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tv(e,n,r,Kd(),i);return lN(e,o,Jp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tv(e,n,r,Kd(),i);return gR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tN(e),r=new jR(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mh,{type:mh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mh];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mw()||qp()||cc()}}const pN=fN;var nv="@firebase/auth",rv="1.6.2";/**
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
 */class gN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vN(t){ln(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vw(t)},u=new L4(r,i,s,a);return z4(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ln(new zt("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new gN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(nv,rv,mN(t)),wt(nv,rv,"esm2017")}/**
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
 */const yN=5*60,_N=F2("authIdTokenMaxAge")||yN;let iv=null;const wN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_N)return;const i=n==null?void 0:n.token;iv!==i&&(iv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function EN(t=vp()){const e=pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=B4(t,{popupRedirectResolver:pN,persistence:[IR,dR,Aw]}),r=F2("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=wN(r);lR(n,s,()=>s(n.currentUser)),oR(n,o=>s(o))}const i=M2("auth");return i&&H4(n,`http://${i}`),n}function CN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}M4({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vN("Browser");var SN="firebase",IN="10.9.0";/**
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
 */wt(SN,IN,"app");/*! *****************************************************************************
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
***************************************************************************** */function TN(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(h){try{u(r.next(h))}catch(c){o(c)}}function a(h){try{u(r.throw(h))}catch(c){o(c)}}function u(h){h.done?s(h.value):i(h.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function kN(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(h){return a([u,h])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(h){u=[6,h],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var Fi=function(){return Fi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Fi.apply(this,arguments)},bw=function(t){return{loading:t==null,value:t}},AN=function(){return function(t,e){switch(e.type){case"error":return Fi(Fi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return bw(e.defaultValue);case"value":return Fi(Fi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},RN=function(t){var e=t?t():void 0,n=T.useReducer(AN(),bw(e)),r=n[0],i=n[1],s=T.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=T.useCallback(function(a){i({type:"error",error:a})},[]),l=T.useCallback(function(a){i({type:"value",value:a})},[]);return T.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},NN=function(t,e){var n=RN(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return T.useEffect(function(){var a=Sw(t,function(u){return TN(void 0,void 0,void 0,function(){var h;return kN(this,function(c){switch(c.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return c.sent(),[3,4];case 3:return h=c.sent(),s(h),[3,4];case 4:return o(u),[2]}})})},s);return function(){a()}},[t]),[l,i,r]};const Fw="@firebase/installations",eg="0.6.5";/**
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
 */const Uw=1e4,jw=`w:${eg}`,$w="FIS_v2",xN="https://firebaseinstallations.googleapis.com/v1",PN=60*60*1e3,ON="installations",DN="Installations";/**
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
 */const LN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},oi=new fi(ON,DN,LN);function Vw(t){return t instanceof an&&t.code.includes("request-failed")}/**
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
 */function Bw({projectId:t}){return`${xN}/projects/${t}/installations`}function zw(t){return{token:t.token,requestStatus:2,expiresIn:bN(t.expiresIn),creationTime:Date.now()}}async function Hw(t,e){const r=(await e.json()).error;return oi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ww({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function MN(t,{refreshToken:e}){const n=Ww(t);return n.append("Authorization",FN(e)),n}async function Gw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bN(t){return Number(t.replace("s","000"))}function FN(t){return`${$w} ${t}`}/**
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
 */async function UN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Bw(t),i=Ww(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:$w,appId:t.appId,sdkVersion:jw},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Gw(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:zw(u.authToken)}}else throw await Hw("Create Installation",a)}/**
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
 */function Kw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const $N=/^[cdef][\w-]{21}$/,Qd="";function VN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=BN(t);return $N.test(n)?n:Qd}catch{return Qd}}function BN(t){return jN(t).substr(0,22)}/**
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
 */function gc(t){return`${t.appName}!${t.appId}`}/**
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
 */const qw=new Map;function Yw(t,e){const n=gc(t);Qw(n,e),zN(n,e)}function Qw(t,e){const n=qw.get(t);if(n)for(const r of n)r(e)}function zN(t,e){const n=HN();n&&n.postMessage({key:t,fid:e}),WN()}let Wr=null;function HN(){return!Wr&&"BroadcastChannel"in self&&(Wr=new BroadcastChannel("[Firebase] FID Change"),Wr.onmessage=t=>{Qw(t.data.key,t.data.fid)}),Wr}function WN(){qw.size===0&&Wr&&(Wr.close(),Wr=null)}/**
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
 */const GN="firebase-installations-database",KN=1,li="firebase-installations-store";let vh=null;function tg(){return vh||(vh=G2(GN,KN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(li)}}})),vh}async function uu(t,e){const n=gc(t),i=(await tg()).transaction(li,"readwrite"),s=i.objectStore(li),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Yw(t,e.fid),e}async function Jw(t){const e=gc(t),r=(await tg()).transaction(li,"readwrite");await r.objectStore(li).delete(e),await r.done}async function mc(t,e){const n=gc(t),i=(await tg()).transaction(li,"readwrite"),s=i.objectStore(li),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Yw(t,l.fid),l}/**
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
 */async function ng(t){let e;const n=await mc(t.appConfig,r=>{const i=qN(r),s=YN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Qd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qN(t){const e=t||{fid:VN(),registrationStatus:0};return Xw(e)}function YN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(oi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:JN(t)}:{installationEntry:e}}async function QN(t,e){try{const n=await UN(t,e);return uu(t.appConfig,n)}catch(n){throw Vw(n)&&n.customData.serverCode===409?await Jw(t.appConfig):await uu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function JN(t){let e=await sv(t.appConfig);for(;e.registrationStatus===1;)await Kw(100),e=await sv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ng(t);return r||n}return e}function sv(t){return mc(t,e=>{if(!e)throw oi.create("installation-not-found");return Xw(e)})}function Xw(t){return XN(t)?{fid:t.fid,registrationStatus:0}:t}function XN(t){return t.registrationStatus===1&&t.registrationTime+Uw<Date.now()}/**
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
 */async function ZN({appConfig:t,heartbeatServiceProvider:e},n){const r=ex(t,n),i=MN(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:jw,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Gw(()=>fetch(r,l));if(a.ok){const u=await a.json();return zw(u)}else throw await Hw("Generate Auth Token",a)}function ex(t,{fid:e}){return`${Bw(t)}/${e}/authTokens:generate`}/**
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
 */async function rg(t,e=!1){let n;const r=await mc(t.appConfig,s=>{if(!Zw(s))throw oi.create("not-registered");const o=s.authToken;if(!e&&rx(o))return s;if(o.requestStatus===1)return n=tx(t,e),s;{if(!navigator.onLine)throw oi.create("app-offline");const l=sx(s);return n=nx(t,l),l}});return n?await n:r.authToken}async function tx(t,e){let n=await ov(t.appConfig);for(;n.authToken.requestStatus===1;)await Kw(100),n=await ov(t.appConfig);const r=n.authToken;return r.requestStatus===0?rg(t,e):r}function ov(t){return mc(t,e=>{if(!Zw(e))throw oi.create("not-registered");const n=e.authToken;return ox(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nx(t,e){try{const n=await ZN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await uu(t.appConfig,r),n}catch(n){if(Vw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jw(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await uu(t.appConfig,r)}throw n}}function Zw(t){return t!==void 0&&t.registrationStatus===2}function rx(t){return t.requestStatus===2&&!ix(t)}function ix(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PN}function sx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ox(t){return t.requestStatus===1&&t.requestTime+Uw<Date.now()}/**
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
 */async function lx(t){const e=t,{installationEntry:n,registrationPromise:r}=await ng(e);return r?r.catch(console.error):rg(e).catch(console.error),n.fid}/**
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
 */async function ax(t,e=!1){const n=t;return await ux(n),(await rg(n,e)).token}async function ux(t){const{registrationPromise:e}=await ng(t);e&&await e}/**
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
 */function cx(t){if(!t||!t.options)throw yh("App Configuration");if(!t.name)throw yh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function yh(t){return oi.create("missing-app-config-values",{valueName:t})}/**
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
 */const eE="installations",hx="installations-internal",dx=t=>{const e=t.getProvider("app").getImmediate(),n=cx(e),r=pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fx=t=>{const e=t.getProvider("app").getImmediate(),n=pi(e,eE).getImmediate();return{getId:()=>lx(n),getToken:i=>ax(n,i)}};function px(){ln(new zt(eE,dx,"PUBLIC")),ln(new zt(hx,fx,"PRIVATE"))}px();wt(Fw,eg);wt(Fw,eg,"esm2017");/**
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
 */const cu="analytics",gx="firebase_id",mx="origin",vx=60*1e3,yx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ig="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new hl("@firebase/analytics");/**
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
 */const _x={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new fi("analytics","Analytics",_x);/**
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
 */function wx(t){if(!t.startsWith(ig)){const e=xt.create("invalid-gtag-resource",{gtagURL:t});return Et.warn(e.message),""}return t}function tE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ex(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Cx(t,e){const n=Ex("firebase-js-sdk-policy",{createScriptURL:wx}),r=document.createElement("script"),i=`${ig}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Sx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ix(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await tE(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){Et.error(l)}t("config",i,s)}async function Tx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await tE(n);for(const a of o){const u=l.find(c=>c.measurementId===a),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Et.error(s)}}function kx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await Tx(t,e,n,l,a)}else if(s==="config"){const[l,a]=o;await Ix(t,e,n,r,l,a)}else if(s==="consent"){const[l]=o;t("consent","update",l)}else if(s==="get"){const[l,a,u]=o;t("get",l,a,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Et.error(l)}}return i}function Ax(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=kx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Rx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ig)&&n.src.includes(t))return n;return null}/**
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
 */const Nx=30,xx=1e3;class Px{constructor(e={},n=xx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nE=new Px;function Ox(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Dx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Ox(r)},s=yx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Lx(t,e=nE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Fx;return setTimeout(async()=>{l.abort()},n!==void 0?n:vx),rE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function rE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=nE){var s;const{appId:o,measurementId:l}=t;try{await Mx(r,e)}catch(a){if(l)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await Dx(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!bx(u)){if(i.deleteThrottleMetadata(o),l)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?f0(n,i.intervalMillis,Nx):f0(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,c),Et.debug(`Calling attemptFetch again in ${h} millis`),rE(t,c,r,i)}}function Mx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bx(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Fx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ux(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function jx(){if(V2())try{await B2()}catch(t){return Et.warn(xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Et.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $x(t,e,n,r,i,s,o){var l;const a=Lx(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Et.error(g)),e.push(a);const u=jx().then(g=>{if(g)return r.getId()}),[h,c]=await Promise.all([a,u]);Rx(s)||Cx(s,h.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[mx]="firebase",d.update=!0,c!=null&&(d[gx]=c),i("config",h.measurementId,d),h.measurementId}/**
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
 */class Vx{constructor(e){this.app=e}_delete(){return delete co[this.app.options.appId],Promise.resolve()}}let co={},lv=[];const av={};let _h="dataLayer",Bx="gtag",uv,iE,cv=!1;function zx(){const t=[];if(U2()&&t.push("This is a browser extension environment."),wk()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function Hx(t,e,n){zx();const r=t.options.appId;if(!r)throw xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(co[r]!=null)throw xt.create("already-exists",{id:r});if(!cv){Sx(_h);const{wrappedGtag:s,gtagCore:o}=Ax(co,lv,av,_h,Bx);iE=s,uv=o,cv=!0}return co[r]=$x(t,lv,av,e,uv,_h,n),new Vx(t)}function Wx(t=vp()){t=Ye(t);const e=pi(t,cu);return e.isInitialized()?e.getImmediate():Gx(t)}function Gx(t,e={}){const n=pi(t,cu);if(n.isInitialized()){const i=n.getImmediate();if(bo(e,n.getOptions()))return i;throw xt.create("already-initialized")}return n.initialize({options:e})}function Kx(t,e,n,r){t=Ye(t),Ux(iE,co[t.app.options.appId],e,n,r).catch(i=>Et.error(i))}const hv="@firebase/analytics",dv="0.10.1";function qx(){ln(new zt(cu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Hx(r,i,n)},"PUBLIC")),ln(new zt("analytics-internal",t,"PRIVATE")),wt(hv,dv),wt(hv,dv,"esm2017");function t(e){try{const n=e.getProvider(cu).getImmediate();return{logEvent:(r,i,s)=>Kx(n,r,i,s)}}catch(n){throw xt.create("interop-component-reg-failed",{reason:n})}}}qx();var fv={};const pv="@firebase/database",gv="1.0.3";/**
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
 */let sE="";function Yx(t){sE=t}/**
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
 */class Qx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Mo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Jx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const oE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qx(e)}}catch{}return new Jx},Gr=oE("localStorage"),Jd=oE("sessionStorage");/**
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
 */const Ji=new hl("@firebase/database"),Xx=function(){let t=1;return function(){return t++}}(),lE=function(t){const e=xk(t),n=new kk;n.update(e);const r=n.digest();return fp.encodeByteArray(r)},Il=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Il.apply(null,r):typeof r=="object"?e+=Oe(r):e+=r,e+=" "}return e};let Jr=null,mv=!0;const Zx=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ji.logLevel=ne.VERBOSE,Jr=Ji.log.bind(Ji),e&&Jd.set("logging_enabled",!0)):typeof t=="function"?Jr=t:(Jr=null,Jd.remove("logging_enabled"))},ze=function(...t){if(mv===!0&&(mv=!1,Jr===null&&Jd.get("logging_enabled")===!0&&Zx(!0)),Jr){const e=Il.apply(null,t);Jr(e)}},Tl=function(t){return function(...e){ze(t,...e)}},Xd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Il(...t);Ji.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Il(...t)}`;throw Ji.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+Il(...t);Ji.warn(e)},eP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},as="[MIN_NAME]",ai="[MAX_NAME]",mi=function(t,e){if(t===e)return 0;if(t===as||e===ai)return-1;if(e===as||t===ai)return 1;{const n=vv(t),r=vv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nP=function(t,e){return t===e?0:t<e?-1:1},Us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},og=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Oe(e[r]),n+=":",n+=og(t[e[r]]);return n+="}",n},aE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const uE=function(t){R(!sg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},rP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oP=new RegExp("^-?(0*)\\d{1,10}$"),lP=-2147483648,aP=2147483647,vv=function(t){if(oP.test(t)){const e=Number(t);if(e>=lP&&e<=aP)return e}return null},Ts=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},uP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ho=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class hP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class Xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xi.OWNER="owner";/**
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
 */const lg="5",cE="v",hE="s",dE="r",fE="f",pE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gE="ls",mE="p",Zd="ac",vE="websocket",yE="long_polling";/**
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
 */class _E{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wE(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===vE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dP(t)&&(n.ns=t.namespace);const i=[];return Ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class fP{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hk(this.counters_)}}/**
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
 */const wh={},Eh={};function ag(t){const e=t.toString();return wh[e]||(wh[e]=new fP),wh[e]}function pP(t,e){const n=t.toString();return Eh[n]||(Eh[n]=e()),Eh[n]}/**
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
 */class gP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ts(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const yv="start",mP="close",vP="pLPCommand",yP="pRTLPCB",EE="id",CE="pw",SE="ser",_P="cb",wP="seg",EP="ts",CP="d",SP="dframe",IE=1870,TE=30,IP=IE-TE,TP=25e3,kP=3e4;class Ui{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tl(e),this.stats_=ag(n),this.urlFn=a=>(this.appCheckToken&&(a[Zd]=this.appCheckToken),wE(n,yE,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kP)),tP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ug((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yv)this.id=l,this.password=a;else if(o===mP)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[yv]="t",r[SE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_P]=this.scriptTagHolder.uniqueCallbackIdentifier),r[cE]=lg,this.transportSessionId&&(r[hE]=this.transportSessionId),this.lastSessionId&&(r[gE]=this.lastSessionId),this.applicationId&&(r[mE]=this.applicationId),this.appCheckToken&&(r[Zd]=this.appCheckToken),typeof location<"u"&&location.hostname&&pE.test(location.hostname)&&(r[dE]=fE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ui.forceAllow_=!0}static forceDisallow(){Ui.forceDisallow_=!0}static isAvailable(){return Ui.forceAllow_?!0:!Ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rP()&&!iP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=D2(n),i=aE(r,IP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[SP]="t",r[EE]=e,r[CE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ug{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Xx(),window[vP+this.uniqueCallbackIdentifier]=e,window[yP+this.uniqueCallbackIdentifier]=n,this.myIFrame=ug.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ze("frame writing exception"),l.stack&&ze(l.stack),ze(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[EE]=this.myID,e[CE]=this.myPW,e[SE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+TE+r.length<=IE;){const o=this.pendingSegs.shift();r=r+"&"+wP+i+"="+o.seg+"&"+EP+i+"="+o.ts+"&"+CP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(TP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const AP=16384,RP=45e3;let hu=null;typeof MozWebSocket<"u"?hu=MozWebSocket:typeof WebSocket<"u"&&(hu=WebSocket);class Zt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tl(this.connId),this.stats_=ag(n),this.connURL=Zt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[cE]=lg,typeof location<"u"&&location.hostname&&pE.test(location.hostname)&&(o[dE]=fE),n&&(o[hE]=n),r&&(o[gE]=r),i&&(o[Zd]=i),s&&(o[mE]=s),wE(e,vE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gr.set("previous_websocket_failure",!0);try{let r;$2(),this.mySock=new hu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&hu!==null&&!Zt.forceDisallow_}static previouslyFailed(){return Gr.isInMemoryStorage||Gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Mo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=aE(n,AP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
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
 */class Qo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ui,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of Qo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qo.globalTransportInitialized_=!1;/**
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
 */const NP=6e4,xP=5e3,PP=10*1024,OP=100*1024,Ch="t",_v="d",DP="s",wv="r",LP="e",Ev="o",Cv="a",Sv="n",Iv="p",MP="h";class bP{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tl("c:"+this.id+":"),this.transportManager_=new Qo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ho(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ch in e){const n=e[Ch];n===Cv?this.upgradeIfSecondaryHealthy_():n===wv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ev&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Us("t",e),r=Us("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Iv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Us("t",e),r=Us("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Us(Ch,e);if(_v in e){const r=e[_v];if(n===MP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Sv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DP?this.onConnectionShutdown_(r):n===wv?this.onReset_(r):n===LP?Xd("Server Error: "+r):n===Ev?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),lg!==r&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ho(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ho(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Iv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class kE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class AE{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class du extends AE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new du}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Tv=32,kv=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new se("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Er(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function cg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function FP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Jo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function RE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function we(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function at(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return at(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function UP(t,e){const n=Jo(t,0),r=Jo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=mi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function hg(t,e){if(Er(t)!==Er(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Er(t)>Er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class jP{constructor(e,n){this.errorPrefix_=n,this.parts_=Jo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=qu(this.parts_[r]);NE(this)}}function $P(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qu(e),NE(t)}function VP(t){const e=t.parts_.pop();t.byteLength_-=qu(e),t.parts_.length>0&&(t.byteLength_-=1)}function NE(t){if(t.byteLength_>kv)throw new Error(t.errorPrefix_+"has a key path longer than "+kv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tv+") or object contains a cycle "+Fr(t))}function Fr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class dg extends AE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new dg}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const js=1e3,BP=60*5*1e3,Av=30*1e3,zP=1.3,HP=3e4,WP="server_kill",Rv=3;class Fn extends kE{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Fn.nextPersistentConnectionId_++,this.log_=Tl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=js,this.maxReconnectDelay_=BP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$2())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&du.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Oe(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new cl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Fn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const r=ls(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Av)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ik(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xd("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HP&&(this.reconnectDelay_=js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ze("getToken() completed but was canceled"):(ze("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new bP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ct(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(WP)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ct(c),a())}}}interrupt(e){ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xd(this.interruptReasons_)&&(this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>og(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rv&&(this.reconnectDelay_=Av,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sE.replace(/\./g,"-")]=1,gp()?e["framework.cordova"]=1:j2()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=du.getInstance().currentlyOnline();return xd(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
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
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
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
 */class vc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(as,e),i=new q(as,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
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
 */let na;class xE extends vc{static get __EMPTY_NODE(){return na}static set __EMPTY_NODE(e){na=e}compare(e,n){return mi(e.name,n.name)}isDefinedOn(e){throw _s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(ai,na)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,na)}toString(){return".key"}}const Zi=new xE;/**
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
 */class ra{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??mt.EMPTY_NODE,this.right=s??mt.EMPTY_NODE}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class GP{copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ra(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ra(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ra(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ra(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new GP;/**
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
 */function KP(t,e){return mi(t.name,e.name)}function fg(t,e){return mi(t,e)}/**
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
 */let ef;function qP(t){ef=t}const PE=function(t){return typeof t=="number"?"number:"+uE(t):"string:"+t},OE=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else R(t===ef||t.isEmpty(),"priority of unexpected type.");R(t===ef||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Nv;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),OE(this.priorityNode_)}static set __childrenNodeConstructor(e){Nv=e}static get __childrenNodeConstructor(){return Nv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:K(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+PE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=uE(this.value_):e+=this.value_,this.lazyHash_=lE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),s=Le.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let DE,LE;function YP(t){DE=t}function QP(t){LE=t}class JP extends vc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?mi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(ai,new Le("[PRIORITY-POST]",LE))}makePost(e,n){const r=DE(e);return new q(n,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new JP;/**
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
 */const XP=Math.log(2);class ZP{constructor(e){const n=s=>parseInt(Math.log(s)/XP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fu=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let c,d;if(h===0)return null;if(h===1)return c=t[a],d=n?n(c):c,new be(d,c.node,be.BLACK,null,null);{const g=parseInt(h/2,10)+a,v=i(a,g),w=i(g+1,u);return c=t[g],d=n?n(c):c,new be(d,c.node,be.BLACK,v,w)}},s=function(a){let u=null,h=null,c=t.length;const d=function(v,w){const I=c-v,p=c;c-=v;const f=i(I+1,p),m=t[I],E=n?n(m):m;g(new be(E,m.node,w,null,f))},g=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),I=Math.pow(2,a.count-(v+1));w?d(I,be.BLACK):(d(I,be.BLACK),d(I,be.RED))}return h},o=new ZP(t.length),l=s(o);return new mt(r||e,l)};/**
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
 */let Sh;const Ci={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Ci&&Ee,"ChildrenNode.ts has not been loaded"),Sh=Sh||new Mn({".priority":Ci},{".priority":Ee}),Sh}get(e){const n=ls(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=fu(r,e.getCompare()):l=Ci;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Mn(h,u)}addToIndexes(e,n){const r=Ya(this.indexes_,(i,s)=>{const o=ls(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Ci)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(q.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),fu(l,o.getCompare())}else return Ci;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new q(e.name,l))),a.insert(e,e.node)}});return new Mn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ya(this.indexes_,i=>{if(i===Ci)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new Mn(r,this.indexSet_)}}/**
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
 */let $s;class ${constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&OE(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $s||($s=new $(new mt(fg),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$s:this.priorityNode_;return new $(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{R(K(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,l)=>{n[o]=l.val(e),r++,s&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+PE(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":lE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kl?-1:0}withIndex(e){if(e===Zi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zi?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class e5 extends ${constructor(){super(new mt(fg),$.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const kl=new e5;Object.defineProperties(q,{MIN:{value:new q(as,$.EMPTY_NODE)},MAX:{value:new q(ai,kl)}});xE.__EMPTY_NODE=$.EMPTY_NODE;Le.__childrenNodeConstructor=$;qP(kl);QP(kl);/**
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
 */const t5=!0;function Pe(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Pe(e))}if(!(t instanceof Array)&&t5){const n=[];let r=!1;if(Ke(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new q(o,a)))}}),n.length===0)return $.EMPTY_NODE;const s=fu(n,KP,o=>o.name,fg);if(r){const o=fu(n,Ee.getCompare());return new $(s,Pe(e),new Mn({".priority":o},{".priority":Ee}))}else return new $(s,Pe(e),Mn.Default)}else{let n=$.EMPTY_NODE;return Ke(t,(r,i)=>{if(Sn(t,r)&&r.substring(0,1)!=="."){const s=Pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Pe(e))}}YP(Pe);/**
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
 */class n5 extends vc{constructor(e){super(),this.indexPath_=e,R(!Q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?mi(e.name,n.name):s}makePost(e,n){const r=Pe(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,kl);return new q(ai,e)}toString(){return Jo(this.indexPath_,0).join("/")}}/**
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
 */class r5 extends vc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?mi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=Pe(e);return new q(n,r)}toString(){return".value"}}const i5=new r5;/**
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
 */function ME(t){return{type:"value",snapshotNode:t}}function us(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function s5(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class pg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Xo(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(us(n,r)):o.trackChildChange(Zo(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Xo(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Zo(i,s,o))}else r.trackChildChange(us(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class el{constructor(e){this.indexedFilter_=new pg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=el.getStartPost_(e),this.endPost_=el.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new q(n,r))||(r=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,l)=>{s.matches(new q(o,l))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class o5{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new el(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=$.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,g)=>c(g,d)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new q(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(h&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Zo(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Xo(n,c));const w=l.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(us(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return r.isEmpty()?e:h&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Xo(u.name,u.node)),s.trackChildChange(us(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,$.EMPTY_NODE)):e}}/**
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
 */class gg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:as}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new gg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function l5(t){return t.loadsAllData()?new pg(t.getIndex()):t.hasLimit()?new o5(t):new el(t)}function xv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===i5?n="$value":t.index_===Zi?n="$key":(R(t.index_ instanceof n5,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Oe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Oe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Oe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
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
 */class pu extends kE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Tl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pu.getListenId_(e,r),l={};this.listens_[o]=l;const a=xv(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),ls(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=pu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xv(e._queryParams),r=e._path.toString(),i=new cl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ws(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Mo(l.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class a5{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function gu(){return{value:null,children:new Map}}function bE(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,gu());const i=t.children.get(r);e=le(e),bE(i,e,n)}}function tf(t,e,n){t.value!==null?n(e,t.value):u5(t,(r,i)=>{const s=new se(e.toString()+"/"+r);tf(i,s,n)})}function u5(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class c5{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Ov=10*1e3,h5=30*1e3,d5=5*60*1e3;class f5{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new c5(e);const r=Ov+(h5-Ov)*Math.random();ho(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ke(e,(i,s)=>{s>0&&Sn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ho(this.reportStats_.bind(this),Math.floor(Math.random()*2*d5))}}/**
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
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function mg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class mu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=tn.ACK_USER_WRITE,this.source=mg()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new mu(te(),n,this.revert)}}else return R(K(this.path)===e,"operationForChild called for unrelated child."),new mu(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class tl{constructor(e,n){this.source=e,this.path=n,this.type=tn.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new tl(this.source,te()):new tl(this.source,le(this.path))}}/**
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
 */class ui{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=tn.OVERWRITE}operationForChild(e){return Q(this.path)?new ui(this.source,te(),this.snap.getImmediateChild(e)):new ui(this.source,le(this.path),this.snap)}}/**
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
 */class cs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=tn.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new ui(this.source,te(),n.value):new cs(this.source,te(),n)}else return R(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Cr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class p5{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function g5(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(s5(o.childName,o.snapshotNode))}),Vs(t,i,"child_removed",e,r,n),Vs(t,i,"child_added",e,r,n),Vs(t,i,"child_moved",s,r,n),Vs(t,i,"child_changed",e,r,n),Vs(t,i,"value",e,r,n),i}function Vs(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>v5(t,l,a)),o.forEach(l=>{const a=m5(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function m5(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function v5(t,e,n){if(e.childName==null||n.childName==null)throw _s("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function yc(t,e){return{eventCache:t,serverCache:e}}function fo(t,e,n,r){return yc(new Cr(e,n,r),t.serverCache)}function FE(t,e,n,r){return yc(t.eventCache,new Cr(e,n,r))}function vu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ih;const y5=()=>(Ih||(Ih=new mt(nP)),Ih);class oe{constructor(e,n=y5()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Ke(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Q(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:we(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new oe(null)}}set(e,n){if(Q(e))return new oe(n,this.children);{const r=K(e),s=(this.children.get(r)||new oe(null)).set(le(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(Q(e))return n;{const r=K(e),s=(this.children.get(r)||new oe(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(we(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(le(e),we(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),we(n,i),r):new oe(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(we(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new oe(null))}}function po(t,e,n){if(Q(e))return new sn(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=at(i,e);return s=s.updateChild(o,n),new sn(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new sn(s)}}}function nf(t,e,n){let r=t;return Ke(n,(i,s)=>{r=po(r,we(e,i),s)}),r}function Dv(t,e){if(Q(e))return sn.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new sn(n)}}function rf(t,e){return vi(t,e)!=null}function vi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(at(n.path,e)):null}function Lv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function vr(t,e){if(Q(e))return t;{const n=vi(t,e);return n!=null?new sn(new oe(n)):new sn(t.writeTree_.subtree(e))}}function sf(t){return t.writeTree_.isEmpty()}function hs(t,e){return UE(te(),t.writeTree_,e)}function UE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=UE(we(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(we(t,".priority"),r)),n}}/**
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
 */function _c(t,e){return BE(e,t)}function _5(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=po(t.visibleWrites,e,n)),t.lastWriteId=r}function w5(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=nf(t.visibleWrites,e,n),t.lastWriteId=r}function E5(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function C5(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&S5(l,r.path)?i=!1:jt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return I5(t),!0;if(r.snap)t.visibleWrites=Dv(t.visibleWrites,r.path);else{const l=r.children;Ke(l,a=>{t.visibleWrites=Dv(t.visibleWrites,we(r.path,a))})}return!0}else return!1}function S5(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(we(t.path,n),e))return!0;return!1}function I5(t){t.visibleWrites=jE(t.allWrites,T5,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function T5(t){return t.visible}function jE(t,e,n){let r=sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)jt(n,o)?(l=at(n,o),r=po(r,l,s.snap)):jt(o,n)&&(l=at(o,n),r=po(r,te(),s.snap.getChild(l)));else if(s.children){if(jt(n,o))l=at(n,o),r=nf(r,l,s.children);else if(jt(o,n))if(l=at(o,n),Q(l))r=nf(r,te(),s.children);else{const a=ls(s.children,K(l));if(a){const u=a.getChild(le(l));r=po(r,te(),u)}}}else throw _s("WriteRecord should have .snap or .children")}}return r}function $E(t,e,n,r,i){if(!r&&!i){const s=vi(t.visibleWrites,e);if(s!=null)return s;{const o=vr(t.visibleWrites,e);if(sf(o))return n;if(n==null&&!rf(o,te()))return null;{const l=n||$.EMPTY_NODE;return hs(o,l)}}}else{const s=vr(t.visibleWrites,e);if(!i&&sf(s))return n;if(!i&&n==null&&!rf(s,te()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(jt(u.path,e)||jt(e,u.path))},l=jE(t.allWrites,o,e),a=n||$.EMPTY_NODE;return hs(l,a)}}}function k5(t,e,n){let r=$.EMPTY_NODE;const i=vi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vr(t.visibleWrites,e);return n.forEachChild(Ee,(o,l)=>{const a=hs(vr(s,new se(o)),l);r=r.updateImmediateChild(o,a)}),Lv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vr(t.visibleWrites,e);return Lv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function A5(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=we(e,n);if(rf(t.visibleWrites,s))return null;{const o=vr(t.visibleWrites,s);return sf(o)?i.getChild(n):hs(o,i.getChild(n))}}function R5(t,e,n,r){const i=we(e,n),s=vi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vr(t.visibleWrites,i);return hs(o,r.getNode().getImmediateChild(n))}else return null}function N5(t,e){return vi(t.visibleWrites,e)}function x5(t,e,n,r,i,s,o){let l;const a=vr(t.visibleWrites,e),u=vi(a,te());if(u!=null)l=u;else if(n!=null)l=hs(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=d.getNext();for(;g&&h.length<i;)c(g,r)!==0&&h.push(g),g=d.getNext();return h}else return[]}function P5(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function yu(t,e,n,r){return $E(t.writeTree,t.treePath,e,n,r)}function _g(t,e){return k5(t.writeTree,t.treePath,e)}function Mv(t,e,n,r){return A5(t.writeTree,t.treePath,e,n,r)}function _u(t,e){return N5(t.writeTree,we(t.treePath,e))}function O5(t,e,n,r,i,s){return x5(t.writeTree,t.treePath,e,n,r,i,s)}function wg(t,e,n){return R5(t.writeTree,t.treePath,e,n)}function VE(t,e){return BE(we(t.treePath,e),t.writeTree)}function BE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class D5{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Zo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Xo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,us(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Zo(r,e.snapshotNode,i.oldSnap));else throw _s("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class L5{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const zE=new L5;class Eg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ci(this.viewCache_),s=O5(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function M5(t){return{filter:t}}function b5(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function F5(t,e,n,r,i){const s=new D5;let o,l;if(n.type===tn.OVERWRITE){const u=n;u.source.fromUser?o=of(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=wu(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===tn.MERGE){const u=n;u.source.fromUser?o=j5(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=lf(t,e,u.path,u.children,r,i,l,s))}else if(n.type===tn.ACK_USER_WRITE){const u=n;u.revert?o=B5(t,e,u.path,r,i,s):o=$5(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===tn.LISTEN_COMPLETE)o=V5(t,e,n.path,r,s);else throw _s("Unknown operation type: "+n.type);const a=s.getChanges();return U5(e,o,a),{viewCache:o,changes:a}}function U5(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=vu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ME(vu(e)))}}function HE(t,e,n,r,i,s){const o=e.eventCache;if(_u(r,n)!=null)return e;{let l,a;if(Q(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ci(e),h=u instanceof $?u:$.EMPTY_NODE,c=_g(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=yu(r,ci(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){R(Er(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const c=Mv(r,n,h,a);c!=null?l=t.filter.updatePriority(h,c):l=o.getNode()}else{const h=le(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Mv(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(h,d):c=o.getNode().getImmediateChild(u)}else c=wg(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,h,i,s):l=o.getNode()}}return fo(e,l,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function wu(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),g,null)}else{const g=K(n);if(!a.isCompleteForPath(n)&&Er(n)>1)return e;const v=le(n),I=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=h.updatePriority(a.getNode(),I):u=h.updateChild(a.getNode(),g,I,v,zE,null)}const c=FE(e,u,a.isFullyInitialized()||Q(n),h.filtersNodes()),d=new Eg(i,c,s);return HE(t,c,n,i,d,l)}function of(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Eg(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=fo(e,u,!0,t.filter.filtersNodes());else{const c=K(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=fo(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=le(n),g=l.getNode().getImmediateChild(c);let v;if(Q(d))v=r;else{const w=h.getCompleteChild(c);w!=null?cg(d)===".priority"&&w.getChild(RE(d)).isEmpty()?v=w:v=w.updateChild(d,r):v=$.EMPTY_NODE}if(g.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),c,v,d,h,o);a=fo(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function bv(t,e){return t.eventCache.isCompleteForChild(e)}function j5(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=we(n,a);bv(e,K(h))&&(l=of(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=we(n,a);bv(e,K(h))||(l=of(t,l,h,u,i,s,o))}),l}function Fv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lf(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;Q(n)?u=r:u=new oe(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(h.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=Fv(t,g,d);a=wu(t,a,new se(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const g=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!h.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),w=Fv(t,v,d);a=wu(t,a,new se(c),w,i,s,o,l)}}),a}function $5(t,e,n,r,i,s,o){if(_u(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(Q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return wu(t,e,n,a.getNode().getChild(n),i,s,l,o);if(Q(n)){let u=new oe(null);return a.getNode().forEachChild(Zi,(h,c)=>{u=u.set(new se(h),c)}),lf(t,e,n,u,i,s,l,o)}else return e}else{let u=new oe(null);return r.foreach((h,c)=>{const d=we(n,h);a.isCompleteForPath(d)&&(u=u.set(h,a.getNode().getChild(d)))}),lf(t,e,n,u,i,s,l,o)}}function V5(t,e,n,r,i){const s=e.serverCache,o=FE(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return HE(t,o,n,r,zE,i)}function B5(t,e,n,r,i,s){let o;if(_u(r,n)!=null)return e;{const l=new Eg(r,e,i),a=e.eventCache.getNode();let u;if(Q(n)||K(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=yu(r,ci(e));else{const c=e.serverCache.getNode();R(c instanceof $,"serverChildren would be complete if leaf node"),h=_g(r,c)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=K(n);let c=wg(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=a.getImmediateChild(h)),c!=null?u=t.filter.updateChild(a,h,c,le(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,$.EMPTY_NODE,le(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yu(r,ci(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||_u(r,te())!=null,fo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class z5{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new pg(r.getIndex()),s=l5(r);this.processor_=M5(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode($.EMPTY_NODE,l.getNode(),null),h=new Cr(a,o.isFullyInitialized(),i.filtersNodes()),c=new Cr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=yc(c,h),this.eventGenerator_=new p5(this.query_)}get query(){return this.query_}}function H5(t){return t.viewCache_.serverCache.getNode()}function W5(t){return vu(t.viewCache_)}function G5(t,e){const n=ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Uv(t){return t.eventRegistrations_.length===0}function K5(t,e){t.eventRegistrations_.push(e)}function jv(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function $v(t,e,n,r){e.type===tn.MERGE&&e.source.queryId!==null&&(R(ci(t.viewCache_),"We should always have a full cache before handling merges"),R(vu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=F5(t.processor_,i,e,n,r);return b5(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,WE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function q5(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(us(s,o))}),n.isFullyInitialized()&&r.push(ME(n.getNode())),WE(t,r,n.getNode(),e)}function WE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return g5(t.eventGenerator_,e,n,i)}/**
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
 */let Eu;class GE{constructor(){this.views=new Map}}function Y5(t){R(!Eu,"__referenceConstructor has already been defined"),Eu=t}function Q5(){return R(Eu,"Reference.ts has not been loaded"),Eu}function J5(t){return t.views.size===0}function Cg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),$v(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat($v(o,e,n,r));return s}}function KE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=yu(n,i?r:null),a=!1;l?a=!0:r instanceof $?(l=_g(n,r),a=!1):(l=$.EMPTY_NODE,a=!1);const u=yc(new Cr(l,a,!1),new Cr(r,i,!1));return new z5(e,u)}return o}function X5(t,e,n,r,i,s){const o=KE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),K5(o,n),q5(o,n)}function Z5(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sr(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(jv(u,n,r)),Uv(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(jv(a,n,r)),Uv(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sr(t)&&s.push(new(Q5())(e._repo,e._path)),{removed:s,events:o}}function qE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yr(t,e){let n=null;for(const r of t.views.values())n=n||G5(r,e);return n}function YE(t,e){if(e._queryParams.loadsAllData())return wc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function QE(t,e){return YE(t,e)!=null}function Sr(t){return wc(t)!=null}function wc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Cu;function e9(t){R(!Cu,"__referenceConstructor has already been defined"),Cu=t}function t9(){return R(Cu,"Reference.ts has not been loaded"),Cu}let n9=1;class Vv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=P5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function JE(t,e,n,r,i){return _5(t.pendingWriteTree_,e,n,r,i),i?ks(t,new ui(mg(),e,n)):[]}function r9(t,e,n,r){w5(t.pendingWriteTree_,e,n,r);const i=oe.fromObject(n);return ks(t,new cs(mg(),e,i))}function sr(t,e,n=!1){const r=E5(t.pendingWriteTree_,e);if(C5(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(te(),!0):Ke(r.children,o=>{s=s.set(new se(o),!0)}),ks(t,new mu(r.path,s,n))}else return[]}function Al(t,e,n){return ks(t,new ui(vg(),e,n))}function i9(t,e,n){const r=oe.fromObject(n);return ks(t,new cs(vg(),e,r))}function s9(t,e){return ks(t,new tl(vg(),e))}function o9(t,e,n){const r=Ig(t,n);if(r){const i=Tg(r),s=i.path,o=i.queryId,l=at(s,e),a=new tl(yg(o),l);return kg(t,s,a)}else return[]}function Su(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||QE(o,e))){const a=Z5(o,e,n,r);J5(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const h=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,g)=>Sr(g));if(h&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=u9(d);for(let v=0;v<g.length;++v){const w=g[v],I=w.query,p=tC(t,w);t.listenProvider_.startListening(go(I),nl(t,I),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(go(e),null):u.forEach(d=>{const g=t.queryToTagMap.get(Ec(d));t.listenProvider_.stopListening(go(d),g)}))}c9(t,u)}return l}function XE(t,e,n,r){const i=Ig(t,r);if(i!=null){const s=Tg(i),o=s.path,l=s.queryId,a=at(o,e),u=new ui(yg(l),a,n);return kg(t,o,u)}else return[]}function l9(t,e,n,r){const i=Ig(t,r);if(i){const s=Tg(i),o=s.path,l=s.queryId,a=at(o,e),u=oe.fromObject(n),h=new cs(yg(l),a,u);return kg(t,o,h)}else return[]}function af(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const v=at(d,i);s=s||yr(g,v),o=o||Sr(g)});let l=t.syncPointTree_.get(i);l?(o=o||Sr(l),s=s||yr(l,te())):(l=new GE,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const w=yr(v,te());w&&(s=s.updateImmediateChild(g,w))}));const u=QE(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Ec(e);R(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=h9();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const h=_c(t.pendingWriteTree_,i);let c=X5(l,e,n,h,s,a);if(!u&&!o&&!r){const d=YE(l,e);c=c.concat(d9(t,e,d))}return c}function Sg(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=at(o,e),u=yr(l,a);if(u)return u});return $E(i,e,s,n,!0)}function a9(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const c=at(u,n);r=r||yr(h,c)});let i=t.syncPointTree_.get(n);i?r=r||yr(i,te()):(i=new GE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Cr(r,!0,!1):null,l=_c(t.pendingWriteTree_,e._path),a=KE(i,e,l,s?o.getNode():$.EMPTY_NODE,s);return W5(a)}function ks(t,e){return ZE(e,t.syncPointTree_,null,_c(t.pendingWriteTree_,te()))}function ZE(t,e,n,r){if(Q(t.path))return eC(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=yr(i,te()));let s=[];const o=K(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=VE(r,o);s=s.concat(ZE(l,a,u,h))}return i&&(s=s.concat(Cg(i,t,r,n))),s}}function eC(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=yr(i,te()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=VE(r,o),h=t.operationForChild(o);h&&(s=s.concat(eC(h,l,a,u)))}),i&&(s=s.concat(Cg(i,t,r,n))),s}function tC(t,e){const n=e.query,r=nl(t,n);return{hashFn:()=>(H5(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?o9(t,n._path,r):s9(t,n._path);{const s=sP(i,n);return Su(t,n,null,s)}}}}function nl(t,e){const n=Ec(e);return t.queryToTagMap.get(n)}function Ec(t){return t._path.toString()+"$"+t._queryIdentifier}function Ig(t,e){return t.tagToQueryMap.get(e)}function Tg(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function kg(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=_c(t.pendingWriteTree_,e);return Cg(r,n,i,null)}function u9(t){return t.fold((e,n,r)=>{if(n&&Sr(n))return[wc(n)];{let i=[];return n&&(i=qE(n)),Ke(r,(s,o)=>{i=i.concat(o)}),i}})}function go(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(t9())(t._repo,t._path):t}function c9(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ec(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function h9(){return n9++}function d9(t,e,n){const r=e._path,i=nl(t,e),s=tC(t,n),o=t.listenProvider_.startListening(go(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)R(!Sr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,c)=>{if(!Q(u)&&h&&Sr(h))return[wc(h).query];{let d=[];return h&&(d=d.concat(qE(h).map(g=>g.query))),Ke(c,(g,v)=>{d=d.concat(v)}),d}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(go(h),nl(t,h))}}return o}/**
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
 */class Ag{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ag(n)}node(){return this.node_}}class Rg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new Rg(this.syncTree_,n)}node(){return Sg(this.syncTree_,this.path_)}}const f9=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bv=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return p9(t[".sv"],e,n);if(typeof t[".sv"]=="object")return g9(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},p9=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},g9=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},nC=function(t,e,n,r){return Ng(e,new Rg(n,t),r)},rC=function(t,e,n){return Ng(t,new Ag(e),n)};function Ng(t,e,n){const r=t.getPriority().val(),i=Bv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Bv(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Le(l,Pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Le(i))),o.forEachChild(Ee,(l,a)=>{const u=Ng(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class xg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Pg(t,e){let n=e instanceof se?e:new se(e),r=t,i=K(n);for(;i!==null;){const s=ls(r.node.children,i)||{children:{},childCount:0};r=new xg(i,r,s),n=le(n),i=K(n)}return r}function As(t){return t.node.value}function iC(t,e){t.node.value=e,uf(t)}function sC(t){return t.node.childCount>0}function m9(t){return As(t)===void 0&&!sC(t)}function Cc(t,e){Ke(t.node.children,(n,r)=>{e(new xg(n,t,r))})}function oC(t,e,n,r){n&&!r&&e(t),Cc(t,i=>{oC(i,e,!0,r)}),n&&r&&e(t)}function v9(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Rl(t){return new se(t.parent===null?t.name:Rl(t.parent)+"/"+t.name)}function uf(t){t.parent!==null&&y9(t.parent,t.name,t)}function y9(t,e,n){const r=m9(n),i=Sn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,uf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,uf(t))}/**
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
 */const _9=/[\[\].#$\/\u0000-\u001F\u007F]/,w9=/[\[\].#$\u0000-\u001F\u007F]/,Th=10*1024*1024,Og=function(t){return typeof t=="string"&&t.length!==0&&!_9.test(t)},lC=function(t){return typeof t=="string"&&t.length!==0&&!w9.test(t)},E9=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lC(t)},C9=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!sg(t)||t&&typeof t=="object"&&Sn(t,".sv")},S9=function(t,e,n,r){r&&e===void 0||Sc(Ku(t,"value"),e,n)},Sc=function(t,e,n){const r=n instanceof se?new jP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fr(r)+" with contents = "+e.toString());if(sg(e))throw new Error(t+"contains "+e.toString()+" "+Fr(r));if(typeof e=="string"&&e.length>Th/3&&qu(e)>Th)throw new Error(t+"contains a string greater than "+Th+" utf8 bytes "+Fr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ke(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Og(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$P(r,o),Sc(t,l,r),VP(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fr(r)+" in addition to actual children.")}},I9=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Jo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Og(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(UP);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&jt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},T9=function(t,e,n,r){if(r&&e===void 0)return;const i=Ku(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ke(e,(o,l)=>{const a=new se(o);if(Sc(i,l,we(n,a)),cg(a)===".priority"&&!C9(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),I9(i,s)},aC=function(t,e,n,r){if(!(r&&n===void 0)&&!lC(n))throw new Error(Ku(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},k9=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aC(t,e,n,r)},A9=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},R9=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Og(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!E9(n))throw new Error(Ku(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class N9{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ic(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function uC(t,e,n){Ic(t,n),cC(t,r=>hg(r,e))}function Gt(t,e,n){Ic(t,n),cC(t,r=>jt(r,e)||jt(e,r))}function cC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(x9(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function x9(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Jr&&ze("event: "+n.toString()),Ts(r)}}}/**
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
 */const P9="repo_interrupt",O9=25;class D9{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new N9,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gu(),this.transactionQueueTree_=new xg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function L9(t,e,n){if(t.stats_=ag(t.repoInfo_),t.forceRestClient_||uP())t.server_=new pu(t.repoInfo_,(r,i,s,o)=>{zv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{zv(t,r,i,s,o)},r=>{Hv(t,r)},r=>{b9(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pP(t.repoInfo_,()=>new f5(t.stats_,t.server_)),t.infoData_=new a5,t.infoSyncTree_=new Vv({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Al(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Dg(t,"connected",!1),t.serverSyncTree_=new Vv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Gt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function M9(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Tc(t){return f9({timestamp:M9(t)})}function zv(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Ya(n,u=>Pe(u));o=l9(t.serverSyncTree_,s,a,i)}else{const a=Pe(n);o=XE(t.serverSyncTree_,s,a,i)}else if(r){const a=Ya(n,u=>Pe(u));o=i9(t.serverSyncTree_,s,a)}else{const a=Pe(n);o=Al(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ds(t,s)),Gt(t.eventQueue_,l,o)}function Hv(t,e){Dg(t,"connected",e),e===!1&&$9(t)}function b9(t,e){Ke(e,(n,r)=>{Dg(t,n,r)})}function Dg(t,e,n){const r=new se("/.info/"+e),i=Pe(n);t.infoData_.updateSnapshot(r,i);const s=Al(t.infoSyncTree_,r,i);Gt(t.eventQueue_,r,s)}function Lg(t){return t.nextWriteId_++}function F9(t,e,n){const r=a9(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Pe(i).withIndex(e._queryParams.getIndex());af(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Al(t.serverSyncTree_,e._path,s);else{const l=nl(t.serverSyncTree_,e);o=XE(t.serverSyncTree_,e._path,s,l)}return Gt(t.eventQueue_,e._path,o),Su(t.serverSyncTree_,e,n,null,!0),s},i=>(Nl(t,"get for query "+Oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function U9(t,e,n,r,i){Nl(t,"set",{path:e.toString(),value:n,priority:r});const s=Tc(t),o=Pe(n,r),l=Sg(t.serverSyncTree_,e),a=rC(o,l,s),u=Lg(t),h=JE(t.serverSyncTree_,e,a,u,!0);Ic(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const v=d==="ok";v||ct("set at "+e+" failed: "+d);const w=sr(t.serverSyncTree_,u,!v);Gt(t.eventQueue_,e,w),cf(t,i,d,g)});const c=bg(t,e);ds(t,c),Gt(t.eventQueue_,c,[])}function j9(t,e,n,r){Nl(t,"update",{path:e.toString(),value:n});let i=!0;const s=Tc(t),o={};if(Ke(n,(l,a)=>{i=!1,o[l]=nC(we(e,l),Pe(a),t.serverSyncTree_,s)}),i)ze("update() called with empty data.  Don't do anything."),cf(t,r,"ok",void 0);else{const l=Lg(t),a=r9(t.serverSyncTree_,e,o,l);Ic(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const c=u==="ok";c||ct("update at "+e+" failed: "+u);const d=sr(t.serverSyncTree_,l,!c),g=d.length>0?ds(t,e):e;Gt(t.eventQueue_,g,d),cf(t,r,u,h)}),Ke(n,u=>{const h=bg(t,we(e,u));ds(t,h)}),Gt(t.eventQueue_,e,[])}}function $9(t){Nl(t,"onDisconnectEvents");const e=Tc(t),n=gu();tf(t.onDisconnect_,te(),(i,s)=>{const o=nC(i,s,t.serverSyncTree_,e);bE(n,i,o)});let r=[];tf(n,te(),(i,s)=>{r=r.concat(Al(t.serverSyncTree_,i,s));const o=bg(t,i);ds(t,o)}),t.onDisconnect_=gu(),Gt(t.eventQueue_,te(),r)}function V9(t,e,n){let r;K(e._path)===".info"?r=af(t.infoSyncTree_,e,n):r=af(t.serverSyncTree_,e,n),uC(t.eventQueue_,e._path,r)}function Wv(t,e,n){let r;K(e._path)===".info"?r=Su(t.infoSyncTree_,e,n):r=Su(t.serverSyncTree_,e,n),uC(t.eventQueue_,e._path,r)}function B9(t){t.persistentConnection_&&t.persistentConnection_.interrupt(P9)}function Nl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ze(n,...e)}function cf(t,e,n,r){e&&Ts(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function hC(t,e,n){return Sg(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function Mg(t,e=t.transactionQueueTree_){if(e||kc(t,e),As(e)){const n=fC(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&z9(t,Rl(e),n)}else sC(e)&&Cc(e,n=>{Mg(t,n)})}function z9(t,e,n){const r=n.map(u=>u.currentWriteId),i=hC(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];R(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=at(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Nl(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(sr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();kc(t,Pg(t.transactionQueueTree_,e)),Mg(t,t.transactionQueueTree_),Gt(t.eventQueue_,e,h);for(let d=0;d<c.length;d++)Ts(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ct("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ds(t,e)}},o)}function ds(t,e){const n=dC(t,e),r=Rl(n),i=fC(t,n);return H9(t,i,r),r}function H9(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=at(n,a.path);let h=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,c=a.abortReason,i=i.concat(sr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=O9)h=!0,c="maxretry",i=i.concat(sr(t.serverSyncTree_,a.currentWriteId,!0));else{const d=hC(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Sc("transaction failed: Data returned ",g,a.path);let v=Pe(g);typeof g=="object"&&g!=null&&Sn(g,".priority")||(v=v.updatePriority(d.getPriority()));const I=a.currentWriteId,p=Tc(t),f=rC(v,d,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=Lg(t),o.splice(o.indexOf(I),1),i=i.concat(JE(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(sr(t.serverSyncTree_,I,!0))}else h=!0,c="nodata",i=i.concat(sr(t.serverSyncTree_,a.currentWriteId,!0))}Gt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}kc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Ts(r[l]);Mg(t,t.transactionQueueTree_)}function dC(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&As(r)===void 0;)r=Pg(r,n),e=le(e),n=K(e);return r}function fC(t,e){const n=[];return pC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function pC(t,e,n){const r=As(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Cc(e,i=>{pC(t,i,n)})}function kc(t,e){const n=As(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,iC(e,n.length>0?n:void 0)}Cc(e,r=>{kc(t,r)})}function bg(t,e){const n=Rl(dC(t,e)),r=Pg(t.transactionQueueTree_,e);return v9(r,i=>{kh(t,i)}),kh(t,r),oC(r,i=>{kh(t,i)}),n}function kh(t,e){const n=As(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(sr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?iC(e,void 0):n.length=s+1,Gt(t.eventQueue_,Rl(e),i);for(let o=0;o<r.length;o++)Ts(r[o])}}/**
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
 */function W9(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function G9(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Gv=function(t,e){const n=K9(t),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _E(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},K9=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=W9(t.substring(h,c)));const d=G9(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class gC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class mC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class vC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Fg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:cg(this._path)}get ref(){return new In(this._repo,this._path)}get _queryIdentifier(){const e=Pv(this._queryParams),n=og(e);return n==="{}"?"default":n}get _queryObject(){return Pv(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof Fg))return!1;const n=this._repo===e._repo,r=hg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+FP(this._path)}}class In extends Fg{constructor(e,n){super(e,n,new gg,!1)}get parent(){const e=RE(this._path);return e===null?null:new In(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=rl(this.ref,e);return new fs(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new fs(i,rl(this.ref,r),Ee)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ac(t,e){return t=Ye(t),t._checkNotDeleted("ref"),e!==void 0?rl(t._root,e):t._root}function rl(t,e){return t=Ye(t),K(t._path)===null?k9("child","path",e,!1):aC("child","path",e,!1),new In(t._repo,we(t._path,e))}function q9(t,e){t=Ye(t),A9("set",t._path),S9("set",e,t._path,!1);const n=new cl;return U9(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Y9(t,e){T9("update",e,t._path,!1);const n=new cl;return j9(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Q9(t){t=Ye(t);const e=new vC(()=>{}),n=new Rc(e);return F9(t._repo,t,n).then(r=>new fs(r,new In(t._repo,t._path),t._queryParams.getIndex()))}class Rc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new gC("value",this,new fs(e.snapshotNode,new In(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mC(this,e,n):null}matches(e){return e instanceof Rc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ug{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mC(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const r=rl(new In(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new gC(e.type,this,new fs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ug?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function J9(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(h,c)=>{Wv(t._repo,t,l),a(h,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new vC(n,s||void 0),l=e==="value"?new Rc(o):new Ug(e,o);return V9(t._repo,t,l),()=>Wv(t._repo,t,l)}function X9(t,e,n,r){return J9(t,"value",e,n,r)}Y5(In);e9(In);/**
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
 */const Z9="FIREBASE_DATABASE_EMULATOR_HOST",hf={};let eO=!1;function tO(t,e,n,r){t.repoInfo_=new _E(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function nO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Gv(s,i),l=o.repoInfo,a,u;typeof process<"u"&&fv&&(u=fv[Z9]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Gv(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new Xi(Xi.OWNER):new hP(t.name,t.options,e);R9("Invalid Firebase Database URL",o),Q(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=iO(l,t,h,new cP(t.name,n));return new sO(c,t)}function rO(t,e){const n=hf[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),B9(t),delete n[t.key]}function iO(t,e,n,r){let i=hf[e.name];i||(i={},hf[e.name]=i);let s=i[t.toURLString()];return s&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new D9(t,eO,n,r),i[t.toURLString()]=s,s}class sO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(L9(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new In(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function oO(t=vp(),e){const n=pi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=vk("database");r&&lO(n,...r)}return n}function lO(t,e,n,r={}){t=Ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xi(Xi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:yk(r.mockUserToken,t.app.options.projectId);s=new Xi(o)}tO(i,e,n,s)}/**
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
 */function aO(t){Yx(gi),ln(new zt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return nO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wt(pv,gv,t),wt(pv,gv,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};aO();const uO={apiKey:"AIzaSyDZTdRn4Auo-weSPUceWIFinY0rQsVNn3U",authDomain:"jobchaser-26d9a.firebaseapp.com",projectId:"jobchaser-26d9a",storageBucket:"jobchaser-26d9a.appspot.com",messagingSenderId:"871802840073",appId:"1:871802840073:web:3c289fe370ec71235784d8",measurementId:"G-QGYD6EBDJH",databaseURL:"https://jobchaser-26d9a-default-rtdb.europe-west1.firebasedatabase.app"},cO=K2(uO);Wx(cO);const Nc=oO();function xl(){const t=EN(),e=new Nn,[n]=NN(t);return{auth:t,user:n,provider:e,signInWithRedirect:MR,signInWithPopup:NR,signInWithEmailAndPassword:sR,createUserWithEmailAndPassword:iR,onAuthStateChanged:Sw,signOut:aR}}function yC(t,e,n,r=null,i=null){q9(Ac(Nc,"users/"+t),{userId:t,fullname:n,email:e,password:r,profileImg:i})}function Kv(t,e){const n=Ac(Nc);return new Promise((r,i)=>{Q9(rl(n,t+"/"+e)).then(s=>{if(s.exists()){const o=s.val();r(o)}else r(s.exists()),console.log("No data available")}).catch(s=>{console.error(s)})})}function hO(t){return new Promise((e,n)=>{X9(Ac(Nc,"SavedJobs/"+t),r=>{e(r.val())})})}function qv(t,e){Y9(Ac(Nc,"SavedJobs/"+e),{jobs:t})}function dO({toggleMenu:t,menuClass:e,textColorHeader:n,checked:r,color:i}){return y.jsxs("div",{onClick:t,className:"menu",children:[y.jsx("div",{style:{background:e?i:n},className:"bar"}),y.jsx("input",{style:{background:e?i:n},checked:r,type:"checkbox",className:"bar"}),y.jsx("div",{style:{background:e?i:n},className:"bar"}),y.jsx("p",{style:{color:e?i:n},children:"Menu"})]})}function Ah({label:t,className:e,isMobileScreen:n,color:r,textColorHeader:i,isDarkTheme:s}){const[o,l]=T.useState("");return T.useEffect(()=>{t.toLocaleLowerCase()==="hem"&&l("/Jobchaser/"),t.toLocaleLowerCase()==="lediga jobb"&&l("/Jobchaser/Find-job"),t.toLocaleLowerCase()==="logga in"&&l("/Jobchaser/Sign-in")},[]),y.jsxs(x2,{style:{color:n?r:i},to:o,children:[t,n&&y.jsx("img",{className:e,src:s?_2:w2,alt:"chevron icon"})]})}function fO({toggleDarkTheme:t}){const[e,n]=T.useReducer(aT,lT),{isOnline:r,isDarkTheme:i,background:s,color:o,textColorHeader:l}=T.useContext(un),{auth:a,signOut:u}=xl(),h=window.matchMedia("(width < 1249px)"),c=window.matchMedia("(height < 801px)"),d=document.body;d.style.background=i?"linear-gradient(147deg, #4d4855 0%, #000000 74%)":"whitesmoke";function g(){t(p=>!p)}function v(p){if(!(!h.matches||p.target.tagName==="BUTTON")){if(e.menuClass){e.timeoutId?(clearTimeout(e.timeoutId),n({type:Ce.TIMEOUT_ID,payload:setTimeout(()=>"none",350)})):n({type:Ce.TIMEOUT_ID,payload:setTimeout(()=>"none",350)}),d.removeAttribute("style"),n({type:Ce.CHECKED,payload:!1}),n({type:Ce.MENU_CLASS,payload:null});return}if(e.menuClass===null){n({type:Ce.STYLE_TRANSITION,payload:"translate 350ms"}),d.style.overflow="hidden",n({type:Ce.CHECKED,payload:!0}),n({type:Ce.MENU_CLASS,payload:"show-menu"});return}}}T.useEffect(()=>{if(document.getElementById("root"),i){d.style.background="linear-gradient(147deg, #4d4855 0%, #000000 74%)";return}if(!i){d.style.background="whitesmoke";return}},[i]),T.useEffect(()=>{h.matches&&n({type:Ce.IS_MOBILE,payload:!0}),h.addEventListener("change",p=>{if(!p.matches){console.log("desktop"),d.removeAttribute("style"),n({type:Ce.IS_MOBILE,payload:!1}),n({type:Ce.CHECKED,payload:!1}),n({type:Ce.MENU_CLASS,payload:null}),n({type:Ce.STYLE_TRANSITION,payload:"none"});return}n({type:Ce.IS_MOBILE,payload:!0})}),c.addEventListener("change",p=>{p.matches&&n({type:Ce.STYLE_BOTTOM,payload:"-120px"}),p.matches||n({type:Ce.STYLE_BOTTOM,payload:"0px"})})},[]);function w(p){return p===null?l==="white"?e0:Zm:i?e0:Zm}function I(p){if(p)return o?t0:n0;if(!p)return l==="white"?t0:n0}return y.jsx(y.Fragment,{children:y.jsx("header",{children:y.jsxs("div",{className:"header-container",children:[y.jsxs("div",{className:"title-container",style:{color:e.menuClass?o:l},children:[y.jsx("img",{tabIndex:0,src:w(e.menuClass),alt:"Jobchaser logo"}),y.jsx("p",{children:"Jobchaser"}),y.jsx("p",{children:"EST 2023"})]}),y.jsx(dO,{toggleMenu:v,menuClass:e.menuClass,textColorHeader:l,checked:e.checked,color:o}),y.jsxs("nav",{onClick:v,className:`link-options ${e.menuClass}`,style:{transition:e.styleTransition,background:e.isMobileScreen&&s},children:[y.jsx("button",{style:{color:e.menuClass?o:l,marginBottom:e.menuClass&&e.marginBottom,border:e.isMobileScreen?`1px solid ${o}`:`1px solid ${l}`},onClick:g,children:i?"Light Theme":"Dark Theme"}),y.jsx(Ah,{label:"Hem",className:"chevron",isMobileScreen:e.isMobileScreen,color:o,textColorHeader:l,isDarkTheme:i}),y.jsx(Ah,{label:"Lediga jobb",className:"chevron",isMobileScreen:e.isMobileScreen,color:o,textColorHeader:l,isDarkTheme:i}),r&&y.jsxs(x2,{to:"/Jobchaser/User-profile",style:{color:e.isMobileScreen?o:l},children:[y.jsxs("div",{className:"profile-container",children:[y.jsx("p",{children:"Profil"}),y.jsx("img",{src:r.profileImg?r.profileImg:oT,alt:"user profile picture",style:{border:"2px solid "+(e.menuClass?o:l)}})]}),e.isMobileScreen&&y.jsx("img",{style:{bottom:"30%"},className:"chevron",src:i?_2:w2,alt:"chevron icon"})]}),r?y.jsxs("div",{onClick:()=>a.signOut(),className:"sign-out-cont",children:[y.jsx("button",{className:"sign-out-btn",style:{color:e.isMobileScreen?o:l},children:"Logga ut"}),y.jsx("div",{className:"sign-out-img-container",children:y.jsx("img",{src:I(e.isMobileScreen),alt:"sign out icon"})})]}):y.jsx(Ah,{label:"Logga in",className:"chevron",isMobileScreen:e.isMobileScreen,color:o,textColorHeader:l,isDarkTheme:i})]})]})})})}const pO="/Jobchaser/assets/Search SVG Vector-BR--GbvO.svg",gO="/Jobchaser/assets/start-page-background-Dm21Msj3.jpg",mO=()=>{const{isOnline:t}=T.useContext(un),e=Gu();return y.jsxs("div",{className:"search-opening-text-container",children:[y.jsxs("picture",{children:[y.jsx("source",{type:"image/webp"}),y.jsx("img",{className:"jobb-hero-img",loading:"lazy",src:gO,alt:"hero image of a women laughing"})]}),y.jsxs("div",{children:[y.jsx("article",{className:"search-opening-text",children:y.jsx("h1",{children:"Lediga jobb för hela Sverige!"})}),y.jsx("button",{style:{background:"#f09711",color:"black",position:"relative"},className:"available-jobs-btn",onClick:()=>e(t?"/Jobchaser/User-profile":"/Jobchaser/Sign-in"),children:"Bli medlem"})]})]})},vO="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M45.35%206.1709H19.41C16.8178%206.17618%2014.3333%207.20827%2012.5003%209.04123C10.6674%2010.8742%209.63528%2013.3587%209.62999%2015.9509V52.2709C9.6272%2053.3655%209.92973%2054.4392%2010.5036%2055.3713C11.0775%2056.3034%2011.9%2057.057%2012.8787%2057.5474C13.8573%2058.0377%2014.9533%2058.2454%2016.0435%2058.1471C17.1337%2058.0488%2018.1748%2057.6484%2019.05%2056.9909L31.25%2047.8509C31.5783%2047.6074%2031.9762%2047.4759%2032.385%2047.4759C32.7938%2047.4759%2033.1917%2047.6074%2033.52%2047.8509L45.71%2056.9809C46.5842%2057.6387%2047.6246%2058.0397%2048.7142%2058.1387C49.8038%2058.2378%2050.8994%2058.0311%2051.8779%2057.5418C52.8565%2057.0525%2053.6793%2056.3001%2054.2537%2055.3689C54.8282%2054.4378%2055.1317%2053.365%2055.13%2052.2709V15.9509C55.1247%2013.3587%2054.0926%2010.8742%2052.2597%209.04123C50.4267%207.20827%2047.9422%206.17618%2045.35%206.1709Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",yO="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M45.35%206.1709H19.41C16.8178%206.17618%2014.3333%207.20827%2012.5003%209.04123C10.6674%2010.8742%209.63528%2013.3587%209.62999%2015.9509V52.2709C9.6272%2053.3655%209.92973%2054.4392%2010.5036%2055.3713C11.0775%2056.3034%2011.9%2057.057%2012.8787%2057.5474C13.8573%2058.0377%2014.9533%2058.2454%2016.0435%2058.1471C17.1337%2058.0488%2018.1748%2057.6484%2019.05%2056.9909L31.25%2047.8509C31.5783%2047.6074%2031.9762%2047.4759%2032.385%2047.4759C32.7938%2047.4759%2033.1917%2047.6074%2033.52%2047.8509L45.71%2056.9809C46.5842%2057.6387%2047.6246%2058.0397%2048.7142%2058.1387C49.8038%2058.2378%2050.8994%2058.0311%2051.8779%2057.5418C52.8565%2057.0525%2053.6793%2056.3001%2054.2537%2055.3689C54.8282%2054.4378%2055.1317%2053.365%2055.13%2052.2709V15.9509C55.1247%2013.3587%2054.0926%2010.8742%2052.2597%209.04123C50.4267%207.20827%2047.9422%206.17618%2045.35%206.1709Z'%20fill='%23000000'/%3e%3c/g%3e%3c/svg%3e";function _O({style:t,jobObj:e}){const[n,r]=T.useState(null),[i,s]=T.useState(null),{savedJobAds:o,setSavedJobAds:l,isOnline:a}=T.useContext(un);T.useEffect(()=>{const c=o.map(d=>d.id);if(c.includes(e.id)&&n===null){console.log("This ad is already saved: ",e.id,c),s(!0);return}h(n)},[n]);function u(c){if(c.target,i){r(!1),s(null);return}a&&r(d=>!d)}function h(c){if(c===!0)e.saved=!0,o.push(e),qv(o,a.userId);else if(c===!1&&o.length!==0){const d=o.map(g=>{if(g.id===e.id)return null;if(g.id!==e.id)return g});l(d.filter(g=>g!==null)),qv(d,a.userId)}}return y.jsxs("div",{className:t,children:[y.jsx("img",{onClick:u,tabIndex:0,src:n||i?yO:vO,alt:"save to favorite button"}),y.jsx("p",{children:i||n?"Sparad":"Spara"})]})}const wO="/Jobchaser/assets/Jobchaser-log-D2mofJjZ.svg";function _C(t){const{id:e,headline:n,duration:{label:r},employer:{name:i},working_hours_type:{label:s},employment_type:{label:o},occupation:{label:l},workplace_address:{municipality:a},last_publication_date:u,webpage_url:h,logo_url:c}=t;return y.jsxs("li",{className:"card",children:[y.jsx(_O,{style:"favorite-btn",jobObj:t}),y.jsx("div",{className:"card-logo-container",children:y.jsx("img",{src:c||wO,alt:`Logo for ${i}`})}),y.jsxs("article",{className:"information-container",children:[y.jsx("div",{className:"card-title-container",children:y.jsx("a",{style:{color:"black"},href:h,children:y.jsx("h2",{children:n})})}),y.jsxs("div",{className:"details-container",children:[y.jsxs("div",{className:"upper-job-details",children:[y.jsx("p",{children:i}),y.jsxs("p",{children:["Position: ",y.jsx("span",{style:{fontWeight:"500"},children:l})]}),y.jsxs("p",{children:["Kommun: ",y.jsx("span",{style:{fontWeight:"500"},children:a})]})]}),y.jsxs("div",{className:"lower-job-details",children:[y.jsxs("p",{children:["Omfattning: ",s]}),y.jsxs("p",{children:["Varaktighet: ",r]}),y.jsxs("p",{children:["Anställningsform: ",o]})]})]})]}),y.jsxs("div",{className:"footer",children:[y.jsx("a",{href:h,children:y.jsx("p",{style:{color:"#3E619F"},children:"Besök webbplatsen"})}),y.jsxs("div",{children:[y.jsx("p",{children:"Sista datum: "}),y.jsx("p",{children:u})]})]})]},e)}const EO=({jobs:t})=>y.jsx("div",{className:"card-container",children:y.jsx("ul",{className:"card-layout",children:t.map(e=>_C(e))})});function CO(){const[t,e]=T.useState(""),[n,r]=T.useState(""),[i,s]=T.useState(null),{setTextColorHeader:o,setSavedJobAds:l,savedJobAds:a,setJobs:u,jobs:h}=T.useContext(un);o("black");const c=d=>e(d.target.value);return T.useEffect(()=>{fetch("https://jobsearch.api.jobtechdev.se/search?q="+n).then(d=>d.json()).then(d=>{const g=d.hits.map(v=>{const w="Information saknas";return v.duration.label===null&&(v.duration.label=w),v.working_hours_type.label===null&&(v.working_hours_type.label=w),v.employment_type.label===null&&(v.employment_type.label=w),v});u(g)}).catch(d=>{console.log(d),s(d)})},[n]),y.jsxs(y.Fragment,{children:[y.jsx(mO,{}),y.jsx("form",{tabIndex:0,className:"job-form",onSubmit:d=>{d.preventDefault(),r(t)},children:y.jsxs("div",{className:"input-container",children:[y.jsx("button",{type:"submit",className:"search-btn",children:y.jsx("img",{src:pO,alt:"magnifying glass"})}),y.jsx("input",{className:"search-input",value:t,onChange:c,type:"text",placeholder:"Jobbtitel, nyckelord eller stad","aria-label":"Search bar for job ads"})]})}),Array.isArray(h)&&h.length!==0&&y.jsx(EO,{jobs:h}),i&&y.jsx("div",{className:"error-container",children:y.jsx("h1",{children:i})})]})}const SO="/Jobchaser/assets/Female pp-Cja9UEM7.png",IO="/Jobchaser/assets/Male pp-gAItaz0u.png",TO="/Jobchaser/assets/Female pp-1-Dy8qnpCo.png",kO="/Jobchaser/assets/Male pp-1-e-OwLf6a.png",AO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgB3ZS9DcIwEIXfORGigxGyQiREnRQBSrJBsgFMwgiwAfRQpAMBEhmBEVIi8mMsByElGAnK4zXWPX/3JMv2AS3Jc7DED+LAiwZwDCJIRPIwnuGbQCY86c2L10fZ8VDJhXIcZWXKDWEXKblJ9hbGjCd5Gq2VMcUnEVY02MavQIa8gH2PIelqBpRv5fOGx5AX+vpL4RuhXPjt58GRrwdP95YZoT/x60Pm+rMqyQRUhXrVpegZm5nxti5KNY0suDTcpc+2jdxPHBQWGUOZ8Q90bh3S9+OHDQAAAABJRU5ErkJggg==",RO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgB1dQxT8JAFAfw/6OtxqXB6OYgiR9ASYS5mJD4CXR1d3F2Mf0klm/gLEZkIpGElITv0bGloTweBzQtLQlsxxt67d3vLn3X1wO2gv/bdzggdPPx5L3gK7kFB04NhJ5q93kBDT2fXfWCIMj5XJKwrA+5VmFan9gnNPRMJ1XDMHKepBxeQHQr++DIc/ZT/8mwLzvZp/vvr02n7n568YT48ll5IvKZuW+u6RuK4aiJ82RcHDoOLwnKHIwr1Ox6glyUBrvU/PWyPcfkJUnXtm2P0o5hm7cRNbqEHaGrz5QrJEHl1cHDg8dahvvp3ejhunRBjT1xnPowDJVfna7mTBDLz8wtavzUly0YHYTGedmiOvvTm9d6kiQtKdVOFEXKLwBq9QCB/JQuZAAAAABJRU5ErkJggg==",Yv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB1ZRPToQwFMbfo8Swc7gBcwQSY+KOzahLuQHcwDnJHMG5gS5NdMFOoyZyA+cG/FkZp536UXQSLCS6qy8hpV9/PPryvpboR+iXxRX9IVzj27a1eG+Q8GmRkaZMP55d0m824BiPAjMMWdM0A55NstdkRuogoZ1eQYkg1VBT8mXJcVFbP3eMr6pqJoRI8LrCY3hmTqWUZRiGNevn02skuKCpYFrz0V2+34BjPLoHnqZ5orVH/kdOmjfjCaGL7XKgOcYrpXKt9Sjf6Vhf9nZ9OI/IV28WJcWcT26tBK7xsGsEu1o8CpzDrpv+4gneLZ//K92c2Wm9L3JrDitCF8S71Ixm6h2OfuoaT988Fehe2o3dJAgCw/tmSaFiQTEf35df8I2xjBQ8mtI1Hh1DcTGsuec7C0Mz/CcdKSqPumuAJwAAAABJRU5ErkJggg==",NO=[{id:"DA86E2400000000006174283575328768",userName:"Sofia Lundén",header:"Fantastiskt jobbsökningsplattform!",content:"Jag har testat många jobbsökningsplattformar, men Jobchaser sticker ut för sin effektivitet och effektivitet. Sökfilterna är omfattande, vilket gör att jag snabbt kan begränsa mina alternativ. Dessutom håller notifieringssystemet mig uppdaterad om nya listor som matchar mina kriterier. Tack vare Jobchaser landade jag mitt drömjobb inom veckor efter att ha använt plattformen. Kunde inte vara lyckligare!"},{id:"IO91FPSA2019418445971456",userName:"Douglas Fowler",header:"Effektiv och effektiv.",content:"Jobchaser har varit en absolut spelväxlare för mig i min jobbjakt. Gränssnittet är användarvänligt, vilket gör det enkelt att navigera bland listor och ansöka om relevanta positioner. Jag uppskattar särskilt funktionen för personliga jobbförslag, som har hjälpt mig att upptäcka möjligheter jag annars inte skulle ha hittat. Rekommenderas varmt!"},{id:"SD134UQB6568605363732480",userName:"Catherine Simpson",header:"Ett måste-ha verktyg för jobbsökande!",content:"Jobchaser är ett måste-ha verktyg för alla som är på jobbjakt. Det som skiljer det åt är dess intuitiva design och robusta funktioner. Möjligheten att spara favoritlistor och följa ansökningsstatus har avsevärt effektiviserat min jobbsökningsprocess. Plattformens omfattande databas ser till att jag aldrig tar slut på alternativ. Kudos till Jobchaser-teamet för att ha skapat en sådan värdefull resurs."},{id:"RX85MDYP8606513606164480",userName:"Simon Liamsson",header:"Oersättlig resurs för jobbsökande!",content:"Som nyligen examinerad som går in på arbetsmarknaden har Jobchaser varit en ovärderlig resurs. Inte bara samlar det jobblistor från olika källor, utan det ger också insikter om företagskulturer och intervjuupplevelser delade av andra användare. Den gemenskapliga aspekten lägger till en unik dimension på plattformen, vilket främjar samarbete och stöd bland jobbsökande. Tack vare Jobchaser säkrade jag flera jobberbjudanden på en konkurrensutsatt marknad. Mycket imponerad!"}],xO=()=>{const{isDarkTheme:t,color:e}=T.useContext(un),n=[SO,IO,TO,kO],r=[AO,RO,Yv,Yv];return y.jsxs("div",{style:{color:e},className:"reviews-container",children:[y.jsx("h3",{style:{color:e},children:"Recensioner"}),y.jsx("ul",{className:"reviews-card-layout",children:NO.map((i,s)=>y.jsxs("li",{style:{background:t?"black":"white",border:"1px solid whitesmoke"},tabIndex:0,"aria-label":"A review card",className:"review-card",children:[y.jsxs("div",{className:"upper-container",children:[y.jsx("div",{className:"pp-container",children:y.jsx("img",{src:n[s],alt:"Profile pic"})}),y.jsx("div",{className:"ratings-container",children:y.jsx("img",{loading:"lazy",src:r[s],alt:"Ratings, five stars"})})]}),y.jsxs("article",{children:[y.jsxs("h4",{children:[y.jsx("span",{className:"user-highlight",children:i.userName})," har lämnat en recension."]}),y.jsxs("div",{className:"text-container",children:[y.jsx("h5",{children:i.header}),y.jsx("p",{children:i.content})]})]})]},i.id))})]})},PO="/Jobchaser/assets/amazon-white-color-B6Vmuslb.svg",OO="/Jobchaser/assets/amazon-dark-color-DRi9NAKT.svg",DO="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.0014%2016.3109C30.0014%2015.1598%2029.9061%2014.3198%2029.6998%2013.4487H16.2871V18.6442H24.1601C24.0014%2019.9354%2023.1442%2021.8798%2021.2394%2023.1864L21.2127%2023.3604L25.4536%2026.58L25.7474%2026.6087C28.4458%2024.1665%2030.0014%2020.5731%2030.0014%2016.3109Z'%20fill='%234285F4'/%3e%3cpath%20d='M16.2863%2029.9998C20.1434%2029.9998%2023.3814%2028.7553%2025.7466%2026.6086L21.2386%2023.1863C20.0323%2024.0108%2018.4132%2024.5863%2016.2863%2024.5863C12.5086%2024.5863%209.30225%2022.1441%208.15929%2018.7686L7.99176%2018.7825L3.58208%2022.127L3.52441%2022.2841C5.87359%2026.8574%2010.699%2029.9998%2016.2863%2029.9998Z'%20fill='%2334A853'/%3e%3cpath%20d='M8.15964%2018.769C7.85806%2017.8979%207.68352%2016.9645%207.68352%2016.0001C7.68352%2015.0356%207.85806%2014.1023%208.14377%2013.2312L8.13578%2013.0456L3.67083%209.64746L3.52475%209.71556C2.55654%2011.6134%202.00098%2013.7445%202.00098%2016.0001C2.00098%2018.2556%202.55654%2020.3867%203.52475%2022.2845L8.15964%2018.769Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M16.2864%207.4133C18.9689%207.4133%2020.7784%208.54885%2021.8102%209.4978L25.8419%205.64C23.3658%203.38445%2020.1435%202%2016.2864%202C10.699%202%205.8736%205.1422%203.52441%209.71549L8.14345%2013.2311C9.30229%209.85555%2012.5086%207.4133%2016.2864%207.4133Z'%20fill='%23EB4335'/%3e%3c/svg%3e",LO="/Jobchaser/assets/netflix-icon-C9XciuAf.svg",MO="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-3%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eAndroid-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-304.000000,%20-560.000000)'%20fill='%2395CF00'%3e%3cpath%20d='M330.727009,569.600905%20C329.935377,569.600905%20329.294532,568.977195%20329.294532,568.206729%20C329.294532,567.436264%20329.935377,566.815376%20330.727009,566.815376%20C331.518641,566.815376%20332.159486,567.436264%20332.159486,568.206729%20C332.159486,568.977195%20331.518641,569.600905%20330.727009,569.600905%20L330.727009,569.600905%20Z%20M319.272991,569.600905%20C318.481359,569.600905%20317.840514,568.977195%20317.840514,568.206729%20C317.840514,567.436264%20318.481359,566.815376%20319.272991,566.815376%20C320.064623,566.815376%20320.705468,567.436264%20320.705468,568.206729%20C320.705468,568.977195%20320.064623,569.600905%20319.272991,569.600905%20L319.272991,569.600905%20Z%20M331.573737,564.018558%20L332.107291,563.233981%20L332.640845,562.460694%20L333.829743,560.722208%20C333.97763,560.507719%20333.916736,560.219853%20333.696355,560.078742%20C333.478873,559.934809%20333.180199,559.994075%20333.038111,560.208564%20L331.222867,562.852982%20L330.677713,563.648847%20C328.952361,562.996915%20327.029826,562.632849%20325,562.632849%20C322.973074,562.632849%20321.047639,562.996915%20319.322287,563.648847%20L318.780033,562.852982%20L318.243579,562.071228%20L316.967688,560.208564%20C316.819801,559.994075%20316.524027,559.937631%20316.303645,560.078742%20C316.086164,560.219853%20316.025269,560.507719%20316.170257,560.722208%20L317.359155,562.460694%20L317.892709,563.233981%20L318.429163,564.018558%20C314.37821,565.855822%20311.637945,569.335616%20311.637945,573.317766%20L338.362055,573.317766%20C338.362055,569.335616%20335.62179,565.855822%20331.573737,564.018558%20Z%20M311.843828,575.174785%20L311.637945,575.174785%20L311.637945,595.613286%20C311.637945,597.236061%20312.992129,598.556859%20314.662386,598.556859%20L316.842999,598.556859%20C316.767606,598.802392%20316.727009,599.059214%20316.727009,599.330147%20L316.727009,605.214471%20C316.727009,606.75258%20318.011599,608%20319.591964,608%20C321.172328,608%20322.456918,606.75258%20322.456918,605.214471%20L322.456918,599.330147%20C322.456918,599.059214%20322.413422,598.802392%20322.340928,598.556859%20L327.659072,598.556859%20C327.586578,598.802392%20327.545982,599.059214%20327.545982,599.330147%20L327.545982,605.214471%20C327.545982,606.75258%20328.827672,608%20330.408036,608%20C331.991301,608%20333.275891,606.75258%20333.275891,605.214471%20L333.275891,599.330147%20C333.275891,599.059214%20333.232394,598.802392%20333.157001,598.556859%20L335.340514,598.556859%20C337.010771,598.556859%20338.362055,597.236061%20338.362055,595.613286%20L338.362055,575.174785%20L311.843828,575.174785%20Z%20M306.864954,575.174785%20C305.28169,575.174785%20304,576.422205%20304,577.960314%20L304,589.884184%20C304,591.422293%20305.28169,592.669713%20306.864954,592.669713%20C308.445319,592.669713%20309.727009,591.422293%20309.727009,589.884184%20L309.727009,577.960314%20C309.727009,576.422205%20308.445319,575.174785%20306.864954,575.174785%20Z%20M343.137945,575.174785%20C341.554681,575.174785%20340.272991,576.422205%20340.272991,577.960314%20L340.272991,589.884184%20C340.272991,591.422293%20341.554681,592.669713%20343.137945,592.669713%20C344.71831,592.669713%20346,591.422293%20346,589.884184%20L346,577.960314%20C346,576.422205%20344.71831,575.174785%20343.137945,575.174785%20Z'%20id='Android'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",bO="/Jobchaser/assets/home-page-hero-pic-BpeKQlgR.avif";function FO(){const{isDarkTheme:t,color:e,setTextColorHeader:n,isOnline:r}=T.useContext(un);n("white");const i=Gu();return xl(),T.useEffect(()=>{const s=new IntersectionObserver(l=>{l.forEach(a=>{a.isIntersecting&&a.target.classList.add("show-logo")})});Array.from(document.getElementsByClassName("company-logo-container")).forEach(l=>s.observe(l))},[]),y.jsx(y.Fragment,{children:y.jsxs("div",{className:"home-layout",children:[y.jsxs("div",{className:"hero-container",children:[y.jsxs("picture",{children:[y.jsx("source",{type:"image/webp"}),y.jsx("img",{className:"home-hero-img",loading:"lazy",src:bO,alt:"hero image of a women laughing"})]}),y.jsxs("div",{className:"opening-text-container",children:[y.jsxs("article",{className:"opening-text",children:[y.jsxs("h1",{children:["Vi hjälper dig med ditt ",y.jsx("span",{style:{color:"#f09711"},children:"jobbsökande!"})]}),y.jsx("p",{children:"Välkommen till nästa steg i din karriär - vi tar dig närmare anställningen du strävar efter."})]}),y.jsxs("div",{className:"btn-layout",children:[y.jsx("button",{className:"available-jobs-btn",onClick:()=>i("/Jobchaser/Find-job"),children:"Lediga jobb"}),y.jsx("button",{className:"available-jobs-btn",onClick:()=>i(r?"/Jobchaser/User-profile":"/Jobchaser/Sign-in"),children:r?"Profil":"Registrera dig"})]})]})]}),y.jsxs("div",{className:"middle-container",children:[y.jsx("h2",{style:{color:e},children:"Partnerskap med företag världen över"}),y.jsxs("div",{className:"companies-logo-layout",children:[y.jsx("div",{className:"company-logo-container",children:y.jsx("img",{loading:"lazy",src:t?PO:OO,alt:"Amazon logo"})}),y.jsx("div",{className:"company-logo-container",children:y.jsx("img",{loading:"lazy",src:DO,alt:"Google logo"})}),y.jsx("div",{className:"company-logo-container",children:y.jsx("img",{loading:"lazy",src:LO,alt:"Netflix logo"})}),y.jsx("div",{className:"company-logo-container",children:y.jsx("img",{loading:"lazy",src:MO,alt:"Android logo"})})]})]}),y.jsx(xO,{})]})})}var Pl=t=>t.type==="checkbox",ji=t=>t instanceof Date,ot=t=>t==null;const wC=t=>typeof t=="object";var qe=t=>!ot(t)&&!Array.isArray(t)&&wC(t)&&!ji(t),UO=t=>qe(t)&&t.target?Pl(t.target)?t.target.checked:t.target.value:t,jO=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,$O=(t,e)=>t.has(jO(e)),Ol=t=>Array.isArray(t)?t.filter(Boolean):[],Fe=t=>t===void 0,U=(t,e,n)=>{if(!e||!qe(t))return n;const r=Ol(e.split(/[,[\].]+?/)).reduce((i,s)=>ot(i)?i:i[s],t);return Fe(r)||r===t?Fe(t[e])?n:t[e]:r};const Qv={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},en={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},kn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Xt.createContext(null);var VO=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==en.all&&(e._proxyFormState[o]=!r||en.all),n&&(n[o]=!0),t[o]}});return i},Lt=t=>qe(t)&&!Object.keys(t).length,BO=(t,e,n)=>{const{name:r,...i}=t;return Lt(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(s=>e[s]===(!n||en.all))},Rh=t=>Array.isArray(t)?t:[t];function zO(t){const e=Xt.useRef(t);e.current=t,Xt.useEffect(()=>{const n=!t.disabled&&e.current.subject.subscribe({next:e.current.callback});return()=>{n&&n.unsubscribe()}},[t.disabled])}var vn=t=>typeof t=="string",HO=(t,e,n,r)=>{const i=Array.isArray(t);return vn(t)?(r&&e.watch.add(t),U(n,t)):i?t.map(s=>(r&&e.watch.add(s),U(n,s))):(r&&(e.watchAll=!0),n)},Iu=t=>typeof t=="function",EC=t=>{for(const e in t)if(Iu(t[e]))return!0;return!1},WO=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},jg=t=>/^\w*$/.test(t),CC=t=>Ol(t.replace(/["|']|\]/g,"").split(/\.|\[/));function fe(t,e,n){let r=-1;const i=jg(e)?[e]:CC(e),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let a=n;if(r!==o){const u=t[l];a=qe(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[l]=a,t=t[l]}return t}const df=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=U(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else qe(o)&&df(o,e)}}};var Jv=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),GO=(t,e,n)=>{const r=Ol(U(t,n));return fe(r,"root",e[n]),fe(t,n,r),t},Tu=t=>typeof t=="boolean",$g=t=>t.type==="file",wa=t=>vn(t)||Xt.isValidElement(t),Vg=t=>t.type==="radio",ku=t=>t instanceof RegExp;const Xv={value:!1,isValid:!1},Zv={value:!0,isValid:!0};var SC=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Fe(t[0].attributes.value)?Fe(t[0].value)||t[0].value===""?Zv:{value:t[0].value,isValid:!0}:Zv:Xv}return Xv};const ey={isValid:!1,value:null};var IC=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,ey):ey;function ty(t,e,n="validate"){if(wa(t)||Array.isArray(t)&&t.every(wa)||Tu(t)&&!t)return{type:n,message:wa(t)?t:"",ref:e}}var Si=t=>qe(t)&&!ku(t)?t:{value:t,message:""},ny=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:l,maxLength:a,minLength:u,min:h,max:c,pattern:d,validate:g,name:v,valueAsNumber:w,mount:I,disabled:p}=t._f;if(!I||p)return{};const f=o?o[0]:s,m=V=>{r&&f.reportValidity&&(f.setCustomValidity(Tu(V)?"":V||" "),f.reportValidity())},E={},N=Vg(s),L=Pl(s),D=N||L,b=(w||$g(s))&&!s.value||e===""||Array.isArray(e)&&!e.length,Y=WO.bind(null,v,n,E),W=(V,J,ue,Ne=kn.maxLength,Ct=kn.minLength)=>{const Qe=V?J:ue;E[v]={type:V?Ne:Ct,message:Qe,ref:s,...Y(V?Ne:Ct,Qe)}};if(i?!Array.isArray(e)||!e.length:l&&(!D&&(b||ot(e))||Tu(e)&&!e||L&&!SC(o).isValid||N&&!IC(o).isValid)){const{value:V,message:J}=wa(l)?{value:!!l,message:l}:Si(l);if(V&&(E[v]={type:kn.required,message:J,ref:f,...Y(kn.required,J)},!n))return m(J),E}if(!b&&(!ot(h)||!ot(c))){let V,J;const ue=Si(c),Ne=Si(h);if(!ot(e)&&!isNaN(e)){const Ct=s.valueAsNumber||e&&+e;ot(ue.value)||(V=Ct>ue.value),ot(Ne.value)||(J=Ct<Ne.value)}else{const Ct=s.valueAsDate||new Date(e),Qe=B=>new Date(new Date().toDateString()+" "+B),Tn=s.type=="time",P=s.type=="week";vn(ue.value)&&e&&(V=Tn?Qe(e)>Qe(ue.value):P?e>ue.value:Ct>new Date(ue.value)),vn(Ne.value)&&e&&(J=Tn?Qe(e)<Qe(Ne.value):P?e<Ne.value:Ct<new Date(Ne.value))}if((V||J)&&(W(!!V,ue.message,Ne.message,kn.max,kn.min),!n))return m(E[v].message),E}if((a||u)&&!b&&(vn(e)||i&&Array.isArray(e))){const V=Si(a),J=Si(u),ue=!ot(V.value)&&e.length>V.value,Ne=!ot(J.value)&&e.length<J.value;if((ue||Ne)&&(W(ue,V.message,J.message),!n))return m(E[v].message),E}if(d&&!b&&vn(e)){const{value:V,message:J}=Si(d);if(ku(V)&&!e.match(V)&&(E[v]={type:kn.pattern,message:J,ref:s,...Y(kn.pattern,J)},!n))return m(J),E}if(g){if(Iu(g)){const V=await g(e),J=ty(V,f);if(J&&(E[v]={...J,...Y(kn.validate,J.message)},!n))return m(J.message),E}else if(qe(g)){let V={};for(const J in g){if(!Lt(V)&&!n)break;const ue=ty(await g[J](e),f,J);ue&&(V={...ue,...Y(J,ue.message)},m(ue.message),n&&(E[v]=V))}if(!Lt(V)&&(E[v]={ref:f,...V},!n))return E}}return m(!0),E},KO=t=>{const e=t.constructor&&t.constructor.prototype;return qe(e)&&e.hasOwnProperty("isPrototypeOf")},ff=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ur(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(ff&&(t instanceof Blob||t instanceof FileList))&&(n||qe(t)))if(e=n?[]:{},!Array.isArray(t)&&!KO(t))e=t;else for(const r in t)e[r]=Ur(t[r]);else return t;return e}var ry=t=>({isOnSubmit:!t||t===en.onSubmit,isOnBlur:t===en.onBlur,isOnChange:t===en.onChange,isOnAll:t===en.all,isOnTouch:t===en.onTouched});function qO(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Fe(t)?r++:t[e[r++]];return t}function YO(t){for(const e in t)if(!Fe(t[e]))return!1;return!0}function it(t,e){const n=jg(e)?[e]:CC(e),r=n.length==1?t:qO(t,n),i=n[n.length-1];let s;r&&delete r[i];for(let o=0;o<n.slice(0,-1).length;o++){let l=-1,a;const u=n.slice(0,-(o+1)),h=u.length-1;for(o>0&&(s=t);++l<u.length;){const c=u[l];a=a?a[c]:t[c],h===l&&(qe(a)&&Lt(a)||Array.isArray(a)&&YO(a))&&(s?delete s[c]:delete t[c]),s=a}}return t}function Nh(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var Au=t=>ot(t)||!wC(t);function $i(t,e){if(Au(t)||Au(e))return t===e;if(ji(t)&&ji(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(ji(s)&&ji(o)||qe(s)&&qe(o)||Array.isArray(s)&&Array.isArray(o)?!$i(s,o):s!==o)return!1}}return!0}var pf=t=>{const e=t?t.ownerDocument:0,n=e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement;return t instanceof n},TC=t=>t.type==="select-multiple",QO=t=>Vg(t)||Pl(t),xh=t=>pf(t)&&t.isConnected;function Ru(t,e={}){const n=Array.isArray(t);if(qe(t)||n)for(const r in t)Array.isArray(t[r])||qe(t[r])&&!EC(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Ru(t[r],e[r])):ot(t[r])||(e[r]=!0);return e}function kC(t,e,n){const r=Array.isArray(t);if(qe(t)||r)for(const i in t)Array.isArray(t[i])||qe(t[i])&&!EC(t[i])?Fe(e)||Au(n[i])?n[i]=Array.isArray(t[i])?Ru(t[i],[]):{...Ru(t[i])}:kC(t[i],ot(e)?{}:e[i],n[i]):n[i]=!$i(t[i],e[i]);return n}var Ph=(t,e)=>kC(t,e,Ru(e)),AC=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Fe(t)?t:e?t===""?NaN:t&&+t:n&&vn(t)?new Date(t):r?r(t):t;function Oh(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return $g(e)?e.files:Vg(e)?IC(t.refs).value:TC(e)?[...e.selectedOptions].map(({value:n})=>n):Pl(e)?SC(t.refs).value:AC(Fe(e.value)?t.ref.value:e.value,t)}var JO=(t,e,n,r)=>{const i={};for(const s of t){const o=U(e,s);o&&fe(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Bs=t=>Fe(t)?void 0:ku(t)?t.source:qe(t)?ku(t.value)?t.value.source:t.value:t,XO=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function iy(t,e,n){const r=U(t,n);if(r||jg(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=U(e,s),l=U(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};i.pop()}return{name:n}}var ZO=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,e6=(t,e)=>!Ol(U(t,e)).length&&it(t,e);const t6={mode:en.onSubmit,reValidateMode:en.onChange,shouldFocusError:!0};function n6(t={}){let e={...t6,...t},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},i=Ur(e.defaultValues)||{},s=e.shouldUnregister?{}:Ur(i),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},a,u=0,h={};const c={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:Nh(),array:Nh(),state:Nh()},g=ry(e.mode),v=ry(e.reValidateMode),w=e.criteriaMode===en.all,I=_=>C=>{clearTimeout(u),u=window.setTimeout(_,C)},p=async _=>{let C=!1;return c.isValid&&(C=e.resolver?Lt((await D()).errors):await Y(r,!0),!_&&C!==n.isValid&&(n.isValid=C,d.state.next({isValid:C}))),C},f=(_,C=[],S,O,F=!0,A=!0)=>{if(O&&S){if(o.action=!0,A&&Array.isArray(U(r,_))){const j=S(U(r,_),O.argA,O.argB);F&&fe(r,_,j)}if(c.errors&&A&&Array.isArray(U(n.errors,_))){const j=S(U(n.errors,_),O.argA,O.argB);F&&fe(n.errors,_,j),e6(n.errors,_)}if(c.touchedFields&&A&&Array.isArray(U(n.touchedFields,_))){const j=S(U(n.touchedFields,_),O.argA,O.argB);F&&fe(n.touchedFields,_,j)}c.dirtyFields&&(n.dirtyFields=Ph(i,s)),d.state.next({isDirty:V(_,C),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else fe(s,_,C)},m=(_,C)=>{fe(n.errors,_,C),d.state.next({errors:n.errors})},E=(_,C,S,O)=>{const F=U(r,_);if(F){const A=U(s,_,Fe(S)?U(i,_):S);Fe(A)||O&&O.defaultChecked||C?fe(s,_,C?A:Oh(F._f)):Ne(_,A),o.mount&&p()}},N=(_,C,S,O,F)=>{let A=!1;const j={name:_},Ae=U(n.touchedFields,_);if(c.isDirty){const St=n.isDirty;n.isDirty=j.isDirty=V(),A=St!==j.isDirty}if(c.dirtyFields&&(!S||O)){const St=U(n.dirtyFields,_);$i(U(i,_),C)?it(n.dirtyFields,_):fe(n.dirtyFields,_,!0),j.dirtyFields=n.dirtyFields,A=A||St!==U(n.dirtyFields,_)}return S&&!Ae&&(fe(n.touchedFields,_,S),j.touchedFields=n.touchedFields,A=A||c.touchedFields&&Ae!==S),A&&F&&d.state.next(j),A?j:{}},L=async(_,C,S,O)=>{const F=U(n.errors,_),A=c.isValid&&n.isValid!==C;if(t.delayError&&S?(a=I(()=>m(_,S)),a(t.delayError)):(clearTimeout(u),a=null,S?fe(n.errors,_,S):it(n.errors,_)),(S?!$i(F,S):F)||!Lt(O)||A){const j={...O,...A?{isValid:C}:{},errors:n.errors,name:_};n={...n,...j},d.state.next(j)}h[_]--,c.isValidating&&!Object.values(h).some(j=>j)&&(d.state.next({isValidating:!1}),h={})},D=async _=>e.resolver?await e.resolver({...s},e.context,JO(_||l.mount,r,e.criteriaMode,e.shouldUseNativeValidation)):{},b=async _=>{const{errors:C}=await D();if(_)for(const S of _){const O=U(C,S);O?fe(n.errors,S,O):it(n.errors,S)}else n.errors=C;return C},Y=async(_,C,S={valid:!0})=>{for(const O in _){const F=_[O];if(F){const{_f:A,...j}=F;if(A){const Ae=l.array.has(A.name),St=await ny(F,U(s,A.name),w,e.shouldUseNativeValidation,Ae);if(St[A.name]&&(S.valid=!1,C))break;!C&&(U(St,A.name)?Ae?GO(n.errors,St,A.name):fe(n.errors,A.name,St[A.name]):it(n.errors,A.name))}j&&await Y(j,C,S)}}return S.valid},W=()=>{for(const _ of l.unMount){const C=U(r,_);C&&(C._f.refs?C._f.refs.every(S=>!xh(S)):!xh(C._f.ref))&&Kt(_)}l.unMount=new Set},V=(_,C)=>(_&&C&&fe(s,_,C),!$i(B(),i)),J=(_,C,S)=>{const O={...o.mount?s:Fe(C)?i:vn(_)?{[_]:C}:C};return HO(_,l,O,S)},ue=_=>Ol(U(o.mount?s:i,_,t.shouldUnregister?U(i,_,[]):[])),Ne=(_,C,S={})=>{const O=U(r,_);let F=C;if(O){const A=O._f;A&&(!A.disabled&&fe(s,_,AC(C,A)),F=ff&&pf(A.ref)&&ot(C)?"":C,TC(A.ref)?[...A.ref.options].forEach(j=>j.selected=F.includes(j.value)):A.refs?Pl(A.ref)?A.refs.length>1?A.refs.forEach(j=>(!j.defaultChecked||!j.disabled)&&(j.checked=Array.isArray(F)?!!F.find(Ae=>Ae===j.value):F===j.value)):A.refs[0]&&(A.refs[0].checked=!!F):A.refs.forEach(j=>j.checked=j.value===F):$g(A.ref)?A.ref.value="":(A.ref.value=F,A.ref.type||d.watch.next({name:_})))}(S.shouldDirty||S.shouldTouch)&&N(_,F,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&P(_)},Ct=(_,C,S)=>{for(const O in C){const F=C[O],A=`${_}.${O}`,j=U(r,A);(l.array.has(_)||!Au(F)||j&&!j._f)&&!ji(F)?Ct(A,F,S):Ne(A,F,S)}},Qe=(_,C,S={})=>{const O=U(r,_),F=l.array.has(_),A=Ur(C);fe(s,_,A),F?(d.array.next({name:_,values:s}),(c.isDirty||c.dirtyFields)&&S.shouldDirty&&(n.dirtyFields=Ph(i,s),d.state.next({name:_,dirtyFields:n.dirtyFields,isDirty:V(_,A)}))):O&&!O._f&&!ot(A)?Ct(_,A,S):Ne(_,A,S),Jv(_,l)&&d.state.next({}),d.watch.next({name:_})},Tn=async _=>{const C=_.target;let S=C.name;const O=U(r,S);if(O){let F,A;const j=C.type?Oh(O._f):UO(_),Ae=_.type===Qv.BLUR||_.type===Qv.FOCUS_OUT,St=!XO(O._f)&&!e.resolver&&!U(n.errors,S)&&!O._f.deps||ZO(Ae,U(n.touchedFields,S),n.isSubmitted,v,g),Dl=Jv(S,l,Ae);fe(s,S,j),Ae?(O._f.onBlur&&O._f.onBlur(_),a&&a(0)):O._f.onChange&&O._f.onChange(_);const xc=N(S,j,Ae,!1),xC=!Lt(xc)||Dl;if(!Ae&&d.watch.next({name:S,type:_.type}),St)return xC&&d.state.next({name:S,...Dl?{}:xc});if(!Ae&&Dl&&d.state.next({}),h[S]=(h[S],1),d.state.next({isValidating:!0}),e.resolver){const{errors:Bg}=await D([S]),PC=iy(n.errors,r,S),zg=iy(Bg,r,PC.name||S);F=zg.error,S=zg.name,A=Lt(Bg)}else F=(await ny(O,U(s,S),w,e.shouldUseNativeValidation))[S],A=await p(!0);O._f.deps&&P(O._f.deps),L(S,A,F,xc)}},P=async(_,C={})=>{let S,O;const F=Rh(_);if(d.state.next({isValidating:!0}),e.resolver){const A=await b(Fe(_)?_:F);S=Lt(A),O=_?!F.some(j=>U(A,j)):S}else _?(O=(await Promise.all(F.map(async A=>{const j=U(r,A);return await Y(j&&j._f?{[A]:j}:j)}))).every(Boolean),!(!O&&!n.isValid)&&p()):O=S=await Y(r);return d.state.next({...!vn(_)||c.isValid&&S!==n.isValid?{}:{name:_},...e.resolver||!_?{isValid:S}:{},errors:n.errors,isValidating:!1}),C.shouldFocus&&!O&&df(r,A=>A&&U(n.errors,A),_?F:l.mount),O},B=_=>{const C={...i,...o.mount?s:{}};return Fe(_)?C:vn(_)?U(C,_):_.map(S=>U(C,S))},G=(_,C)=>({invalid:!!U((C||n).errors,_),isDirty:!!U((C||n).dirtyFields,_),isTouched:!!U((C||n).touchedFields,_),error:U((C||n).errors,_)}),ge=_=>{_?Rh(_).forEach(C=>it(n.errors,C)):n.errors={},d.state.next({errors:n.errors})},ke=(_,C,S)=>{const O=(U(r,_,{_f:{}})._f||{}).ref;fe(n.errors,_,{...C,ref:O}),d.state.next({name:_,errors:n.errors,isValid:!1}),S&&S.shouldFocus&&O&&O.focus&&O.focus()},yi=(_,C)=>Iu(_)?d.watch.subscribe({next:S=>_(J(void 0,C),S)}):J(_,C,!0),Kt=(_,C={})=>{for(const S of _?Rh(_):l.mount)l.mount.delete(S),l.array.delete(S),U(r,S)&&(C.keepValue||(it(r,S),it(s,S)),!C.keepError&&it(n.errors,S),!C.keepDirty&&it(n.dirtyFields,S),!C.keepTouched&&it(n.touchedFields,S),!e.shouldUnregister&&!C.keepDefaultValue&&it(i,S));d.watch.next({}),d.state.next({...n,...C.keepDirty?{isDirty:V()}:{}}),!C.keepIsValid&&p()},Dr=(_,C={})=>{let S=U(r,_);const O=Tu(C.disabled);return fe(r,_,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:_}},name:_,mount:!0,...C}}),l.mount.add(_),S?O&&fe(s,_,C.disabled?void 0:U(s,_,Oh(S._f))):E(_,!0,C.value),{...O?{disabled:C.disabled}:{},...e.shouldUseNativeValidation?{required:!!C.required,min:Bs(C.min),max:Bs(C.max),minLength:Bs(C.minLength),maxLength:Bs(C.maxLength),pattern:Bs(C.pattern)}:{},name:_,onChange:Tn,onBlur:Tn,ref:F=>{if(F){Dr(_,C),S=U(r,_);const A=Fe(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,j=QO(A),Ae=S._f.refs||[];if(j?Ae.find(St=>St===A):A===S._f.ref)return;fe(r,_,{_f:{...S._f,...j?{refs:[...Ae.filter(xh),A,...Array.isArray(U(i,_))?[{}]:[]],ref:{type:A.type,name:_}}:{ref:A}}}),E(_,!1,void 0,A)}else S=U(r,_,{}),S._f&&(S._f.mount=!1),(e.shouldUnregister||C.shouldUnregister)&&!($O(l.array,_)&&o.action)&&l.unMount.add(_)}}},cn=()=>e.shouldFocusError&&df(r,_=>_&&U(n.errors,_),l.mount),_i=(_,C)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let O=!0,F=Ur(s);d.state.next({isSubmitting:!0});try{if(e.resolver){const{errors:A,values:j}=await D();n.errors=A,F=j}else await Y(r);Lt(n.errors)?(d.state.next({errors:{},isSubmitting:!0}),await _(F,S)):(C&&await C({...n.errors},S),cn())}catch(A){throw O=!1,A}finally{n.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Lt(n.errors)&&O,submitCount:n.submitCount+1,errors:n.errors})}},RC=(_,C={})=>{U(r,_)&&(Fe(C.defaultValue)?Qe(_,U(i,_)):(Qe(_,C.defaultValue),fe(i,_,C.defaultValue)),C.keepTouched||it(n.touchedFields,_),C.keepDirty||(it(n.dirtyFields,_),n.isDirty=C.defaultValue?V(_,U(i,_)):V()),C.keepError||(it(n.errors,_),c.isValid&&p()),d.state.next({...n}))},NC=(_,C={})=>{const S=_||i,O=Ur(S),F=_&&!Lt(_)?O:i;if(C.keepDefaultValues||(i=S),!C.keepValues){if(C.keepDirtyValues)for(const A of l.mount)U(n.dirtyFields,A)?fe(F,A,U(s,A)):Qe(A,U(F,A));else{if(ff&&Fe(_))for(const A of l.mount){const j=U(r,A);if(j&&j._f){const Ae=Array.isArray(j._f.refs)?j._f.refs[0]:j._f.ref;try{if(pf(Ae)){Ae.closest("form").reset();break}}catch{}}}r={}}s=t.shouldUnregister?C.keepDefaultValues?Ur(i):{}:O,d.array.next({values:F}),d.watch.next({values:F})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!c.isValid||!!C.keepIsValid,o.watch=!!t.shouldUnregister,d.state.next({submitCount:C.keepSubmitCount?n.submitCount:0,isDirty:C.keepDirty||C.keepDirtyValues?n.isDirty:!!(C.keepDefaultValues&&!$i(_,i)),isSubmitted:C.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:C.keepDirty||C.keepDirtyValues?n.dirtyFields:C.keepDefaultValues&&_?Ph(i,_):{},touchedFields:C.keepTouched?n.touchedFields:{},errors:C.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:Dr,unregister:Kt,getFieldState:G,_executeSchema:D,_focusError:cn,_getWatch:J,_getDirty:V,_updateValid:p,_removeUnmounted:W,_updateFieldArray:f,_getFieldArray:ue,_subjects:d,_proxyFormState:c,get _fields(){return r},get _formValues(){return s},get _stateFlags(){return o},set _stateFlags(_){o=_},get _defaultValues(){return i},get _names(){return l},set _names(_){l=_},get _formState(){return n},set _formState(_){n=_},get _options(){return e},set _options(_){e={...e,..._}}},trigger:P,register:Dr,handleSubmit:_i,watch:yi,setValue:Qe,getValues:B,reset:(_,C)=>NC(Iu(_)?_(s):_,C),resetField:RC,clearErrors:ge,unregister:Kt,setError:ke,setFocus:(_,C={})=>{const S=U(r,_),O=S&&S._f;if(O){const F=O.refs?O.refs[0]:O.ref;F.focus&&(F.focus(),C.shouldSelect&&F.select())}},getFieldState:G}}function r6(t={}){const e=Xt.useRef(),[n,r]=Xt.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:t.defaultValues});e.current||(e.current={...n6(t),formState:n});const i=e.current.control;return i._options=t,zO({subject:i._subjects.state,callback:Xt.useCallback(s=>{BO(s,i._proxyFormState,!0)&&(i._formState={...i._formState,...s},r({...i._formState}))},[i])}),Xt.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),Xt.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),e.current.formState=VO(n,i),e.current}function Dh({input:t,label:e,property:n,type:r,required:i,placeholder:s,errors:o,register:l}){const a=e.charAt(0).toLocaleUpperCase()+e.slice(1),u=d=>{let g,v;return d==="email"&&(g=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,v="Ogiltig e-postadress. Vänligen ange en giltig e-postadress."),d==="password"&&(g=/^(?=.*[A-Z])(?=.*\d)(?!.*<.*>).*.{6,}$/,v="Vänligen ange en sträng som innehåller minst en stor bokstav, en siffra och är minst 6 tecken lång."),d==="userName"&&(g=/^[a-zA-ZåäöÅÄÖ\s]{2,}$/,v="Vänligen ange en giltig sträng med minst två bokstäver."),{pattern:g,errorMessage:v}},{pattern:h,errorMessage:c}=u(n);return y.jsxs("div",{className:"form-control",children:[y.jsx("label",{style:{whiteSpace:"nowrap"},children:a}),t?y.jsx("input",{className:"post-job-data-input",placeholder:s,type:r,...l(n,{required:i,pattern:h})}):y.jsx("textarea",{wrap:"soft",rows:30,cols:10,...l(n,{required:i,pattern:!t&&/^[A-Za-z0-9.,\s]+$/})}),o[n]&&o[n].type==="required"&&y.jsxs("p",{className:"errorMsg",children:[a," är obligatoriskt."]}),o[n]&&o[n].type==="pattern"&&y.jsx("p",{className:"errorMsg",children:c})]})}const i6=()=>{const{handleSubmit:t,register:e,formState:{errors:n}}=r6(),[r,i]=T.useState(!0),{auth:s,user:o,provider:l,signInWithRedirect:a,signInWithPopup:u,signInWithEmailAndPassword:h,createUserWithEmailAndPassword:c}=xl(),d=()=>{u(s,l).catch(v=>{v.message,alert("Inloggningen misslyckades.")})},g=v=>{const{email:w,password:I,userName:p}=v;r?h(s,w,I).then(f=>{const m=f.user;console.log(m)}).catch(f=>{f.code,f.message,alert("Fel E-post eller lösenord.")}):c(s,w,I).then(f=>{const m=f.user;console.log(f),console.log(m),yC(m.uid,w,p,I)}).catch(f=>{f.code;const m=f.message;console.log(m),alert("Kontot existerar redan. Vänligen logga in eller återställ ditt lösenord om du har glömt det.")})};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"google-container",children:[y.jsx("h1",{children:"Kom igång"}),y.jsxs("div",{onClick:d,tabIndex:0,"aria-label":"sign in with google button",className:"google-btn-container",children:[y.jsx("div",{className:"google-img-cont",children:y.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google icon"})}),y.jsx("p",{children:"Logga in med Google"})]})]}),y.jsx("div",{className:"hr"}),y.jsxs("form",{className:"post-job-form",onSubmit:t(g),children:[r?y.jsx("h1",{children:"Logga in"}):y.jsx("h1",{children:"Skapa konto"}),y.jsxs("div",{children:[y.jsxs("div",{children:[!r&&y.jsx(Dh,{property:"userName",input:!0,label:"För- och efternamn",type:"text",required:!0,placeholder:"Skriv ditt för- och efternamn",errors:n,register:e}),y.jsx(Dh,{property:"email",input:!0,label:"e-post",type:"text",required:!0,placeholder:"Skriv in e-post",errors:n,register:e}),y.jsx(Dh,{property:"password",input:!0,label:"lösenord",type:"password",required:!0,placeholder:"Skriv in lösenord",errors:n,register:e})]}),y.jsx("div",{onClick:()=>i(v=>!v),className:"create-account-container",children:r?y.jsx("p",{children:"Skapa konto?"}):y.jsx("p",{children:"Logga in"})})]}),y.jsx("div",{style:{alignSelf:"center"},children:y.jsx("button",{className:"submit-btn",children:r?"Logga in":"Skapa"})})]})]})},sy=()=>{xl();const{setTextColorHeader:t,isOnline:e}=T.useContext(un);return t("white"),y.jsx(y.Fragment,{children:y.jsxs("div",{className:"sign-in-layout",children:[y.jsxs("picture",{children:[y.jsx("source",{type:"image/webp"}),y.jsx("img",{className:"signIn-hero-img",src:"https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"image of people in the office"})]}),y.jsx("div",{className:"side-img-container"}),y.jsx("div",{className:"sign-in-cont",children:y.jsx(i6,{})})]})})},s6="_profileContainer_n4j29_1",o6="_profileImgCont_n4j29_19",l6="_profileImgAvailable_n4j29_57",a6="_anonymous_n4j29_67",u6="_userContactInfo_n4j29_77",zs={profileContainer:s6,profileImgCont:o6,profileImgAvailable:l6,anonymous:a6,userContactInfo:u6},c6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZCAYAAABVC4ivAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcaSURBVHgB7Z1pjBRFFMf/KOKB4dogoqLrFQ8UlfVA8YjGKyofjBrFCMQjGq8Y7wOFRPCjkZhoPKLfNJpoEGMiKrpeRMTghTfKrByiAQ/QVVbB5f2p7c0wOzv1qqe6u3qmf8k/fKCmt/ptTdWrV+/VDkDY7Ck6TjRCNEY0UrSTaLPoL9EaUUfPv0tEf6PAynDR+aI5opWibgf9I2oXzRAdjYI+jBY9JloBN8P2p/9Fi0RXiHZAk7O36FGYr393QvpSdLVoAJqQG0S/IznjVup90SFoEvYQLUB6xi3Xv6Lb0eAcIVqFbAxcrkdEu6IBOV60HtkbONKboh3RQJwJs+KHYuBIr4qGIWHSWHEPE82H2Vi48qvodRgP4VOYqYabkIEwPvWBogmicaITRNvBnZdEl4i6kFO4yJXgNro2wYywi0TbQ89eMItaB9xH9CzkmOfg9rIfiU5DfewiukW0weHnciqbiBxyDdxGL0ehz+mrFWbXp+0D4x8jkCPY2bXQvRyDOqcjGQaJnobe0A8iR8yE7qW44zsRyfOUsj/8Ro1CDmBIkqPT9kKdorORHi9AZ+jnkQNuRJgreovoZ9j79YdodwQMA+ol2F9kKdzcM1+cAd0AuAcBQ/dL8xL1umlxoffyIuz9a0fAPAD7C3yIbJkI3QLYgkDhOZvtBaYhez6BvZ9XwhNx9vr9wdjEWEubdaJ5yJ5nFG3GwRO+jWwLHX4Ns3pnjWbK2h+e8GnkkYo2nyEMPofZCNXiYHja5vs08r6KNksQBjw8+NHShnHmIfCATyNrgt+rEA4/Wf5/MExEr258Gnmgos0mhMNvlv8f1KO68WlkzclCSGdqtkFBN24zPODTyH8q2oxGONjiE13wdCTl08i2OY4cgDBg3GQ/SxueJW6AB3wauaRoE0oi4D4w54+1oPcR3EjmyfJ/ljaHwkTqsuZU2OfkL+AJ39PFSksbBvRDOLA8T9FmGQKFGZq2wMuzyJZWmJw4Wz8nIFCYK6EJI3qLC8TgXtj7yFGs8fszgbukjbC/hCYKlgT0KDph798TCJyHoRvN5yB95sHeNya6HInAYX4ajWh7GR5qjkF63AHd0dg7yAk8Vte80GKkkFUpTIK+ZCLNNIW6YCZnt1IMfw5HckyGPi96EXIG8yq0hv4WJkjuE3oHzAHRTF0Ut9AHIWfwpOR76A3NWMHN8BOpY4xEs8iVawZyyjEwW22Xl+UvhiVhcQLmPMh9CO4la5wmcl2Cdi10O6xKcZv+pOhimATvajAswKATR+GCmD9neY3n54r74P7ylVot+hjGxfoAZh7vqvOZrIA9HA3EbNRvaJ9i/nSW2/vEuAthGLiEFA3sM9Rpg7s7ulUhVBnRb2bh5mA0CCySZIFOnEUpaXGevxVhnT06wVWf2+sQiyQr9QtMYVCwmZyVcIv8OMzpdejGrRTduSkI3GeeinjFiiGJ3zwWa6YZIVTBBW0u8jE1aMXT6inwgI+vBZ15zr0+Luyg5/EDTAiUGaAsYOQpOBcoxp8Z32DAh14RU6gYH2FJGOsGW3r6wK38eOiyTG3Q2Nym34kMU8xY6LIO9Y0Ybgp4msKCSW5vfZytMe7RJrpK9Bp0R2K1xCL6JMOx/cJ0f815WTXxc3TrTkI6B5a8QIRBp6+A2IbmopiaoTnFXId4HeWonYWMRkUPJ8OEQV2jg1QHdHnYdXN9jA7y68rKqN0QDixzY6DJ1dDfIeFiyskxOvUyzHFUiDDxkHfHMazq8k5M4UrExeNC4nLFGEc7p5WdET6tML6xi6Ffgack8QhWNq126AAXiTbkC3ok0+Fm6DnwiMtvmYWIIc29rlwKfUiAm69J8MBM6A3cDk8VQxnDZEPt4s5Fva4oHrOBNHdXUHT6G+k+TOYwaxfEuaiD+cof8g1yFCZ0gN6UdkSfixhcpnw4F8SGOO3tBwb1NXYowfFqSiaYaBNTssjOTBNOgdqF/zY4MFX50NloDhgG0Fytw2CZ6lJsOtiaUdyBbGMQaTMNuoE33efDLkdzwcHHGxg1a5Q1n+9dxYPeQ3NeX34KdKc/F9R6SJvyIbHclQaBAXybfWreTnO/4gFL0dycBbuN6FtXDYfyhGKZ4gE3oaAEu53urvbBoxQfZBJII8Qm6kWzQemdMspz4Y6FnYXwVDmfcxhu2Ghpw5vJ+7i4ml3NhSggPFF5G3Z7bd0NRyOZ7pjtil1+6A0UEJZLLFa023pPXmRk/nkgW3CDl/evR0HEW4o2XOd6jawpc12IgnK4abNlFTGvpNfI42GnMPK28DDDtmdgCHhYZGRNoWIotxOGhObikbGRkTUXMK1AQSVrFG1GRUbWXN9VLHp9Wa5oMyQysq1AJfpzFgXbormmrSUysu2Gq7UoqIbGLkMjI9vSjTpRUA3NFDq0fMdXCy93VjYgmsGXh1zA/LMFVZZvx993EP4AAAAASUVORK5CYII=";function h6({user:t}){const{color:e,isOnline:n}=T.useContext(un);return y.jsxs("div",{style:{borderColor:e},className:zs.profileContainer,children:[y.jsx("div",{className:zs.profileImgCont,style:{borderColor:e},children:y.jsx("img",{className:n.profileImg?zs.profileImgAvailable:zs.anonymous,src:n.profileImg?n.profileImg:c6,alt:"user picture"})}),y.jsxs("div",{className:zs.userContactInfo,children:[y.jsxs("p",{style:{color:e},children:[y.jsx("b",{children:"Name:"})," ",t.fullname]}),y.jsxs("p",{style:{color:e},children:[y.jsx("b",{children:"Email:"})," ",t.email]})]})]})}const d6="_titleForSavedJobs_1yvwz_1",f6={titleForSavedJobs:d6};function p6(){const{savedJobAds:t,setSavedJobAds:e,isOnline:n,color:r}=T.useContext(un);return y.jsxs(y.Fragment,{children:[y.jsx("h1",{className:f6.titleForSavedJobs,style:{color:r},children:"Sparade jobbannonser"}),y.jsx("div",{className:"card-container",children:y.jsx("ul",{className:"card-layout",children:t.map(i=>_C(i))})})]})}const g6="_hr_1pzqc_1",m6={hr:g6};function v6(){const{isOnline:t,color:e,setTextColorHeader:n}=T.useContext(un);return n(e),y.jsxs(y.Fragment,{children:[y.jsx(h6,{user:t}),y.jsx("div",{style:{background:e},className:m6.hr}),y.jsx(p6,{})]})}const un=T.createContext();function y6(){const[t,e]=T.useState(null),[n,r]=T.useState(!1),[i,s]=T.useState(""),[o,l]=T.useState([]),[a,u]=T.useState(null),h={setJobs:u,jobs:a,setSavedJobAds:l,savedJobAds:o,isOnline:t,isDarkTheme:n,textColorHeader:i,setTextColorHeader:s,color:n?"#ffff":"",background:n?"linear-gradient(147deg, #4d4855 0%, #000000 74%)":"whitesmoke"},{auth:c,onAuthStateChanged:d}=xl();return T.useEffect(()=>{const g=d(c,v=>{if(v){Kv("users",v.uid).then(I=>{if(!I){console.log("data is",I),yC(v.uid,v.email,v.displayName,null,v.photoURL),Kv("users",v.uid).then(f=>e(f));return}e(I)});return}l([]),e(v),console.log(v)});return()=>g},[]),T.useEffect(()=>{if(!t)return;hO(t.userId).then(v=>{const w=v.jobs;l(w),console.log("saved Jobs:",v.jobs)})},[t]),y.jsx(y.Fragment,{children:y.jsx(sk,{children:y.jsxs(un.Provider,{value:h,children:[y.jsx(fO,{toggleDarkTheme:r}),y.jsx("main",{className:"job-form-container",children:y.jsxs(XT,{children:[y.jsx(qs,{path:"/Jobchaser/",element:y.jsx(FO,{})}),y.jsx(qs,{path:"/Jobchaser/Find-job",element:y.jsx(CO,{})}),y.jsx(qs,{path:"/Jobchaser/Sign-in",element:t?y.jsx(QT,{to:"/Jobchaser/User-profile"}):y.jsx(sy,{})}),y.jsx(qs,{path:"/Jobchaser/User-profile",element:t?y.jsx(v6,{}):y.jsx(sy,{})})]})})]})})})}Lh.createRoot(document.getElementById("root")).render(y.jsx(Xt.StrictMode,{children:y.jsx(y6,{})}));
