function xC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function PC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ly={exports:{}},xu={},ay={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),OC=Symbol.for("react.portal"),DC=Symbol.for("react.fragment"),LC=Symbol.for("react.strict_mode"),MC=Symbol.for("react.profiler"),bC=Symbol.for("react.provider"),FC=Symbol.for("react.context"),UC=Symbol.for("react.forward_ref"),jC=Symbol.for("react.suspense"),$C=Symbol.for("react.memo"),VC=Symbol.for("react.lazy"),Hg=Symbol.iterator;function BC(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var uy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cy=Object.assign,hy={};function fs(t,e,n){this.props=t,this.context=e,this.refs=hy,this.updater=n||uy}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dy(){}dy.prototype=fs.prototype;function mf(t,e,n){this.props=t,this.context=e,this.refs=hy,this.updater=n||uy}var vf=mf.prototype=new dy;vf.constructor=mf;cy(vf,fs.prototype);vf.isPureReactComponent=!0;var Gg=Array.isArray,fy=Object.prototype.hasOwnProperty,yf={current:null},py={key:!0,ref:!0,__self:!0,__source:!0};function gy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fy.call(e,r)&&!py.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:nl,type:t,key:s,ref:o,props:i,_owner:yf.current}}function zC(t,e){return{$$typeof:nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _f(t){return typeof t=="object"&&t!==null&&t.$$typeof===nl}function WC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kg=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WC(""+t.key):e.toString(36)}function sa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nl:case OC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oc(o,0):r,Gg(i)?(n="",t!=null&&(n=t.replace(Kg,"$&/")+"/"),sa(i,e,n,"",function(u){return u})):i!=null&&(_f(i)&&(i=zC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gg(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Oc(s,l);o+=sa(s,e,n,a,i)}else if(a=BC(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Oc(s,l++),o+=sa(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return sa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},oa={transition:null},GC={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:oa,ReactCurrentOwner:yf};X.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!_f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=fs;X.Fragment=DC;X.Profiler=MC;X.PureComponent=mf;X.StrictMode=LC;X.Suspense=jC;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GC;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)fy.call(e,a)&&!py.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:nl,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:FC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bC,_context:t},t.Consumer=t};X.createElement=gy;X.createFactory=function(t){var e=gy.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:UC,render:t}};X.isValidElement=_f;X.lazy=function(t){return{$$typeof:VC,_payload:{_status:-1,_result:t},_init:HC}};X.memo=function(t,e){return{$$typeof:$C,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=oa.transition;oa.transition={};try{t()}finally{oa.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return ct.current.useCallback(t,e)};X.useContext=function(t){return ct.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};X.useEffect=function(t,e){return ct.current.useEffect(t,e)};X.useId=function(){return ct.current.useId()};X.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return ct.current.useMemo(t,e)};X.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};X.useRef=function(t){return ct.current.useRef(t)};X.useState=function(t){return ct.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return ct.current.useTransition()};X.version="18.2.0";ay.exports=X;var I=ay.exports;const Jt=PC(I),KC=xC({__proto__:null,default:Jt},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qC=I,YC=Symbol.for("react.element"),QC=Symbol.for("react.fragment"),JC=Object.prototype.hasOwnProperty,XC=qC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZC={key:!0,ref:!0,__self:!0,__source:!0};function my(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)JC.call(e,r)&&!ZC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YC,type:t,key:s,ref:o,props:i,_owner:XC.current}}xu.Fragment=QC;xu.jsx=my;xu.jsxs=my;ly.exports=xu;var y=ly.exports,Mh={},vy={exports:{}},Pt={},yy={exports:{}},_y={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,B){var G=O.length;O.push(B);e:for(;0<G;){var ge=G-1>>>1,Te=O[ge];if(0<i(Te,B))O[ge]=B,O[G]=Te,G=ge;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],G=O.pop();if(G!==B){O[0]=G;e:for(var ge=0,Te=O.length,vi=Te>>>1;ge<vi;){var Gt=2*(ge+1)-1,Or=O[Gt],un=Gt+1,yi=O[un];if(0>i(Or,G))un<Te&&0>i(yi,Or)?(O[ge]=yi,O[un]=G,ge=un):(O[ge]=Or,O[Gt]=G,ge=Gt);else if(un<Te&&0>i(yi,G))O[ge]=yi,O[un]=G,ge=un;else break e}}return B}function i(O,B){var G=O.sortIndex-B.sortIndex;return G!==0?G:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,c=null,d=3,g=!1,m=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=O)r(u),B.sortIndex=B.expirationTime,e(a,B);else break;B=n(u)}}function E(O){if(w=!1,v(O),!m)if(n(a)!==null)m=!0,Ye(N);else{var B=n(u);B!==null&&In(E,B.startTime-O)}}function N(O,B){m=!1,w&&(w=!1,p(b),b=-1),g=!0;var G=d;try{for(v(B),c=n(a);c!==null&&(!(c.expirationTime>B)||O&&!F());){var ge=c.callback;if(typeof ge=="function"){c.callback=null,d=c.priorityLevel;var Te=ge(c.expirationTime<=B);B=t.unstable_now(),typeof Te=="function"?c.callback=Te:c===n(a)&&r(a),v(B)}else r(a);c=n(a)}if(c!==null)var vi=!0;else{var Gt=n(u);Gt!==null&&In(E,Gt.startTime-B),vi=!1}return vi}finally{c=null,d=G,g=!1}}var L=!1,x=null,b=-1,K=5,H=-1;function F(){return!(t.unstable_now()-H<K)}function J(){if(x!==null){var O=t.unstable_now();H=O;var B=!0;try{B=x(!0,O)}finally{B?ue():(L=!1,x=null)}}else L=!1}var ue;if(typeof f=="function")ue=function(){f(J)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Et=Re.port2;Re.port1.onmessage=J,ue=function(){Et.postMessage(null)}}else ue=function(){T(J,0)};function Ye(O){x=O,L||(L=!0,ue())}function In(O,B){b=T(function(){O(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,Ye(N))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var G=d;d=B;try{return O()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=d;d=O;try{return B()}finally{d=G}},t.unstable_scheduleCallback=function(O,B,G){var ge=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ge+G:ge):G=ge,O){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=G+Te,O={id:h++,callback:B,priorityLevel:O,startTime:G,expirationTime:Te,sortIndex:-1},G>ge?(O.sortIndex=G,e(u,O),n(a)===null&&O===n(u)&&(w?(p(b),b=-1):w=!0,In(E,G-ge))):(O.sortIndex=Te,e(a,O),m||g||(m=!0,Ye(N))),O},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(O){var B=d;return function(){var G=d;d=B;try{return O.apply(this,arguments)}finally{d=G}}}})(_y);yy.exports=_y;var eS=yy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy=I,xt=eS;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ey=new Set,po={};function ci(t,e){Zi(t,e),Zi(t+"Capture",e)}function Zi(t,e){for(po[t]=e,t=0;t<e.length;t++)Ey.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,tS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qg={},Yg={};function nS(t){return bh.call(Yg,t)?!0:bh.call(qg,t)?!1:tS.test(t)?Yg[t]=!0:(qg[t]=!0,!1)}function rS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iS(t,e,n,r){if(e===null||typeof e>"u"||rS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var wf=/[\-:]([a-z])/g;function Ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wf,Ef);He[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wf,Ef);He[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wf,Ef);He[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cf(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iS(e,n,i,r)&&(n=null),r||i===null?nS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),Si=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Sy=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),Uh=Symbol.for("react.suspense"),jh=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Iy=Symbol.for("react.offscreen"),Qg=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=Qg&&t[Qg]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Dc;function Bs(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Lc=!1;function Mc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function sS(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function $h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ii:return"Fragment";case Si:return"Portal";case Fh:return"Profiler";case Sf:return"StrictMode";case Uh:return"Suspense";case jh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sy:return(t.displayName||"Context")+".Consumer";case Cy:return(t._context.displayName||"Context")+".Provider";case If:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tf:return e=t.displayName||null,e!==null?e:$h(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return $h(t(e))}catch{}}return null}function oS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $h(e);case 8:return e===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ty(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lS(t){var e=Ty(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=lS(t))}function ky(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ty(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vh(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ay(t,e){e=e.checked,e!=null&&Cf(t,"checked",e,!1)}function Bh(t,e){Ay(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zh(t,e.type,n):e.hasOwnProperty("defaultValue")&&zh(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zh(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(zs(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function Ry(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ny(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ny(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,xy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aS=["Webkit","ms","Moz","O"];Object.keys(Js).forEach(function(t){aS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Js[e]=Js[t]})});function Py(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Js.hasOwnProperty(t)&&Js[t]?(""+e).trim():e+"px"}function Oy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Py(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uS=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gh(t,e){if(e){if(uS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=null;function kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yh=null,Vi=null,Bi=null;function tm(t){if(t=sl(t)){if(typeof Yh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Mu(e),Yh(t.stateNode,t.type,e))}}function Dy(t){Vi?Bi?Bi.push(t):Bi=[t]:Vi=t}function Ly(){if(Vi){var t=Vi,e=Bi;if(Bi=Vi=null,tm(t),e)for(t=0;t<e.length;t++)tm(e[t])}}function My(t,e){return t(e)}function by(){}var bc=!1;function Fy(t,e,n){if(bc)return t(e,n);bc=!0;try{return My(t,e,n)}finally{bc=!1,(Vi!==null||Bi!==null)&&(by(),Ly())}}function mo(t,e){var n=t.stateNode;if(n===null)return null;var r=Mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Qh=!1;if(Fn)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Qh=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Qh=!1}function cS(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Xs=!1,Sa=null,Ia=!1,Jh=null,hS={onError:function(t){Xs=!0,Sa=t}};function dS(t,e,n,r,i,s,o,l,a){Xs=!1,Sa=null,cS.apply(hS,arguments)}function fS(t,e,n,r,i,s,o,l,a){if(dS.apply(this,arguments),Xs){if(Xs){var u=Sa;Xs=!1,Sa=null}else throw Error(k(198));Ia||(Ia=!0,Jh=u)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Uy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nm(t){if(hi(t)!==t)throw Error(k(188))}function pS(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nm(i),t;if(s===r)return nm(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function jy(t){return t=pS(t),t!==null?$y(t):null}function $y(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$y(t);if(e!==null)return e;t=t.sibling}return null}var Vy=xt.unstable_scheduleCallback,rm=xt.unstable_cancelCallback,gS=xt.unstable_shouldYield,mS=xt.unstable_requestPaint,Ce=xt.unstable_now,vS=xt.unstable_getCurrentPriorityLevel,Af=xt.unstable_ImmediatePriority,By=xt.unstable_UserBlockingPriority,Ta=xt.unstable_NormalPriority,yS=xt.unstable_LowPriority,zy=xt.unstable_IdlePriority,Pu=null,vn=null;function _S(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Pu,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:CS,wS=Math.log,ES=Math.LN2;function CS(t){return t>>>=0,t===0?32:31-(wS(t)/ES|0)|0}var bl=64,Fl=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ws(l):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function SS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=SS(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wy(){var t=bl;return bl<<=1,!(bl&4194240)&&(bl=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function TS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Hy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gy,Nf,Ky,qy,Yy,Zh=!1,Ul=[],sr=null,or=null,lr=null,vo=new Map,yo=new Map,Qn=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function im(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(e.pointerId)}}function Ns(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sl(e),e!==null&&Nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AS(t,e,n,r,i){switch(e){case"focusin":return sr=Ns(sr,t,e,n,r,i),!0;case"dragenter":return or=Ns(or,t,e,n,r,i),!0;case"mouseover":return lr=Ns(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vo.set(s,Ns(vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yo.set(s,Ns(yo.get(s)||null,t,e,n,r,i)),!0}return!1}function Qy(t){var e=Ur(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=Uy(n),e!==null){t.blockedOn=e,Yy(t.priority,function(){Ky(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function la(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qh=r,n.target.dispatchEvent(r),qh=null}else return e=sl(n),e!==null&&Nf(e),t.blockedOn=n,!1;e.shift()}return!0}function sm(t,e,n){la(t)&&n.delete(e)}function RS(){Zh=!1,sr!==null&&la(sr)&&(sr=null),or!==null&&la(or)&&(or=null),lr!==null&&la(lr)&&(lr=null),vo.forEach(sm),yo.forEach(sm)}function xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Zh||(Zh=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,RS)))}function _o(t){function e(i){return xs(i,t)}if(0<Ul.length){xs(Ul[0],t);for(var n=1;n<Ul.length;n++){var r=Ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&xs(sr,t),or!==null&&xs(or,t),lr!==null&&xs(lr,t),vo.forEach(e),yo.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)Qy(n),n.blockedOn===null&&Qn.shift()}var zi=Wn.ReactCurrentBatchConfig,Aa=!0;function NS(t,e,n,r){var i=re,s=zi.transition;zi.transition=null;try{re=1,xf(t,e,n,r)}finally{re=i,zi.transition=s}}function xS(t,e,n,r){var i=re,s=zi.transition;zi.transition=null;try{re=4,xf(t,e,n,r)}finally{re=i,zi.transition=s}}function xf(t,e,n,r){if(Aa){var i=ed(t,e,n,r);if(i===null)Kc(t,e,r,Ra,n),im(t,r);else if(AS(i,t,e,n,r))r.stopPropagation();else if(im(t,r),e&4&&-1<kS.indexOf(t)){for(;i!==null;){var s=sl(i);if(s!==null&&Gy(s),s=ed(t,e,n,r),s===null&&Kc(t,e,r,Ra,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var Ra=null;function ed(t,e,n,r){if(Ra=null,t=kf(r),t=Ur(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Uy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ra=t,null}function Jy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vS()){case Af:return 1;case By:return 4;case Ta:case yS:return 16;case zy:return 536870912;default:return 16}default:return 16}}var tr=null,Pf=null,aa=null;function Xy(){if(aa)return aa;var t,e=Pf,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return aa=i.slice(t,1<r?1-r:void 0)}function ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jl(){return!0}function om(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jl:om,this.isPropagationStopped=om,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=Ot(ps),il=ye({},ps,{view:0,detail:0}),PS=Ot(il),Uc,jc,Ps,Ou=ye({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(Uc=t.screenX-Ps.screenX,jc=t.screenY-Ps.screenY):jc=Uc=0,Ps=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),lm=Ot(Ou),OS=ye({},Ou,{dataTransfer:0}),DS=Ot(OS),LS=ye({},il,{relatedTarget:0}),$c=Ot(LS),MS=ye({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),bS=Ot(MS),FS=ye({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),US=Ot(FS),jS=ye({},ps,{data:0}),am=Ot(jS),$S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BS[t])?!!e[t]:!1}function Df(){return zS}var WS=ye({},il,{key:function(t){if(t.key){var e=$S[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HS=Ot(WS),GS=ye({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=Ot(GS),KS=ye({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),qS=Ot(KS),YS=ye({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),QS=Ot(YS),JS=ye({},Ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XS=Ot(JS),ZS=[9,13,27,32],Lf=Fn&&"CompositionEvent"in window,Zs=null;Fn&&"documentMode"in document&&(Zs=document.documentMode);var eI=Fn&&"TextEvent"in window&&!Zs,Zy=Fn&&(!Lf||Zs&&8<Zs&&11>=Zs),cm=" ",hm=!1;function e_(t,e){switch(t){case"keyup":return ZS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function tI(t,e){switch(t){case"compositionend":return t_(e);case"keypress":return e.which!==32?null:(hm=!0,cm);case"textInput":return t=e.data,t===cm&&hm?null:t;default:return null}}function nI(t,e){if(Ti)return t==="compositionend"||!Lf&&e_(t,e)?(t=Xy(),aa=Pf=tr=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zy&&e.locale!=="ko"?null:e.data;default:return null}}var rI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rI[t.type]:e==="textarea"}function n_(t,e,n,r){Dy(r),e=Na(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var eo=null,wo=null;function iI(t){f_(t,0)}function Du(t){var e=Ri(t);if(ky(e))return t}function sI(t,e){if(t==="change")return e}var r_=!1;if(Fn){var Vc;if(Fn){var Bc="oninput"in document;if(!Bc){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),Bc=typeof fm.oninput=="function"}Vc=Bc}else Vc=!1;r_=Vc&&(!document.documentMode||9<document.documentMode)}function pm(){eo&&(eo.detachEvent("onpropertychange",i_),wo=eo=null)}function i_(t){if(t.propertyName==="value"&&Du(wo)){var e=[];n_(e,wo,t,kf(t)),Fy(iI,e)}}function oI(t,e,n){t==="focusin"?(pm(),eo=e,wo=n,eo.attachEvent("onpropertychange",i_)):t==="focusout"&&pm()}function lI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Du(wo)}function aI(t,e){if(t==="click")return Du(e)}function uI(t,e){if(t==="input"||t==="change")return Du(e)}function cI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:cI;function Eo(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bh.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mm(t,e){var n=gm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gm(n)}}function s_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?s_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function o_(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hI(t){var e=o_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&s_(n.ownerDocument.documentElement,n)){if(r!==null&&Mf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mm(n,s);var o=mm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dI=Fn&&"documentMode"in document&&11>=document.documentMode,ki=null,td=null,to=null,nd=!1;function vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||ki==null||ki!==Ca(r)||(r=ki,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&Eo(to,r)||(to=r,r=Na(td,"onSelect"),0<r.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ki)))}function $l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},zc={},l_={};Fn&&(l_=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function Lu(t){if(zc[t])return zc[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l_)return zc[t]=e[n];return t}var a_=Lu("animationend"),u_=Lu("animationiteration"),c_=Lu("animationstart"),h_=Lu("transitionend"),d_=new Map,ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){d_.set(t,e),ci(e,[t])}for(var Wc=0;Wc<ym.length;Wc++){var Hc=ym[Wc],fI=Hc.toLowerCase(),pI=Hc[0].toUpperCase()+Hc.slice(1);Sr(fI,"on"+pI)}Sr(a_,"onAnimationEnd");Sr(u_,"onAnimationIteration");Sr(c_,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(h_,"onTransitionEnd");Zi("onMouseEnter",["mouseout","mouseover"]);Zi("onMouseLeave",["mouseout","mouseover"]);Zi("onPointerEnter",["pointerout","pointerover"]);Zi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function _m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fS(r,e,void 0,t),t.currentTarget=null}function f_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;_m(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;_m(i,l,u),s=a}}}if(Ia)throw t=Jh,Ia=!1,Jh=null,t}function ce(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var r=t+"__bubble";n.has(r)||(p_(e,t,2,!1),n.add(r))}function Gc(t,e,n){var r=0;e&&(r|=4),p_(n,t,r,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Vl]){t[Vl]=!0,Ey.forEach(function(n){n!=="selectionchange"&&(gI.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,Gc("selectionchange",!1,e))}}function p_(t,e,n,r){switch(Jy(e)){case 1:var i=NS;break;case 4:i=xS;break;default:i=xf}n=i.bind(null,e,n,t),i=void 0,!Qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Fy(function(){var u=s,h=kf(n),c=[];e:{var d=d_.get(t);if(d!==void 0){var g=Of,m=t;switch(t){case"keypress":if(ua(n)===0)break e;case"keydown":case"keyup":g=HS;break;case"focusin":m="focus",g=$c;break;case"focusout":m="blur",g=$c;break;case"beforeblur":case"afterblur":g=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=DS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=qS;break;case a_:case u_:case c_:g=bS;break;case h_:g=QS;break;case"scroll":g=PS;break;case"wheel":g=XS;break;case"copy":case"cut":case"paste":g=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=um}var w=(e&4)!==0,T=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,v;f!==null;){v=f;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,p!==null&&(E=mo(f,p),E!=null&&w.push(So(f,E,v)))),T)break;f=f.return}0<w.length&&(d=new g(d,m,null,n,h),c.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==qh&&(m=n.relatedTarget||n.fromElement)&&(Ur(m)||m[Un]))break e;if((g||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=u,m=m?Ur(m):null,m!==null&&(T=hi(m),m!==T||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=u),g!==m)){if(w=lm,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=um,E="onPointerLeave",p="onPointerEnter",f="pointer"),T=g==null?d:Ri(g),v=m==null?d:Ri(m),d=new w(E,f+"leave",g,n,h),d.target=T,d.relatedTarget=v,E=null,Ur(h)===u&&(w=new w(p,f+"enter",m,n,h),w.target=v,w.relatedTarget=T,E=w),T=E,g&&m)t:{for(w=g,p=m,f=0,v=w;v;v=_i(v))f++;for(v=0,E=p;E;E=_i(E))v++;for(;0<f-v;)w=_i(w),f--;for(;0<v-f;)p=_i(p),v--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=_i(w),p=_i(p)}w=null}else w=null;g!==null&&wm(c,d,g,w,!1),m!==null&&T!==null&&wm(c,T,m,w,!0)}}e:{if(d=u?Ri(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var N=sI;else if(dm(d))if(r_)N=uI;else{N=lI;var L=oI}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=aI);if(N&&(N=N(t,u))){n_(c,N,n,h);break e}L&&L(t,d,u),t==="focusout"&&(L=d._wrapperState)&&L.controlled&&d.type==="number"&&zh(d,"number",d.value)}switch(L=u?Ri(u):window,t){case"focusin":(dm(L)||L.contentEditable==="true")&&(ki=L,td=u,to=null);break;case"focusout":to=td=ki=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,vm(c,n,h);break;case"selectionchange":if(dI)break;case"keydown":case"keyup":vm(c,n,h)}var x;if(Lf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ti?e_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Zy&&n.locale!=="ko"&&(Ti||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ti&&(x=Xy()):(tr=h,Pf="value"in tr?tr.value:tr.textContent,Ti=!0)),L=Na(u,b),0<L.length&&(b=new am(b,t,null,n,h),c.push({event:b,listeners:L}),x?b.data=x:(x=t_(n),x!==null&&(b.data=x)))),(x=eI?tI(t,n):nI(t,n))&&(u=Na(u,"onBeforeInput"),0<u.length&&(h=new am("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=x))}f_(c,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Na(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=mo(t,n),s!=null&&r.unshift(So(t,s,i)),s=mo(t,e),s!=null&&r.push(So(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=mo(n,s),a!=null&&o.unshift(So(n,a,l))):i||(a=mo(n,s),a!=null&&o.push(So(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mI=/\r\n?/g,vI=/\u0000|\uFFFD/g;function Em(t){return(typeof t=="string"?t:""+t).replace(mI,`
`).replace(vI,"")}function Bl(t,e,n){if(e=Em(e),Em(t)!==e&&n)throw Error(k(425))}function xa(){}var rd=null,id=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,yI=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,_I=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(t){return Cm.resolve(null).then(t).catch(wI)}:od;function wI(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),dn="__reactFiber$"+gs,Io="__reactProps$"+gs,Un="__reactContainer$"+gs,ld="__reactEvents$"+gs,EI="__reactListeners$"+gs,CI="__reactHandles$"+gs;function Ur(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sm(t);t!==null;){if(n=t[dn])return n;t=Sm(t)}return e}t=n,n=t.parentNode}return null}function sl(t){return t=t[dn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Mu(t){return t[Io]||null}var ad=[],Ni=-1;function Ir(t){return{current:t}}function de(t){0>Ni||(t.current=ad[Ni],ad[Ni]=null,Ni--)}function ae(t,e){Ni++,ad[Ni]=t.current,t.current=e}var _r={},tt=Ir(_r),mt=Ir(!1),Jr=_r;function es(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function Pa(){de(mt),de(tt)}function Im(t,e,n){if(tt.current!==_r)throw Error(k(168));ae(tt,e),ae(mt,n)}function g_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,oS(t)||"Unknown",i));return ye({},n,r)}function Oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Jr=tt.current,ae(tt,t),ae(mt,mt.current),!0}function Tm(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=g_(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,de(mt),de(tt),ae(tt,t)):de(mt),ae(mt,n)}var An=null,bu=!1,Yc=!1;function m_(t){An===null?An=[t]:An.push(t)}function SI(t){bu=!0,m_(t)}function Tr(){if(!Yc&&An!==null){Yc=!0;var t=0,e=re;try{var n=An;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,bu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),Vy(Af,Tr),i}finally{re=e,Yc=!1}}return null}var xi=[],Pi=0,Da=null,La=0,Lt=[],Mt=0,Xr=null,Nn=1,xn="";function Dr(t,e){xi[Pi++]=La,xi[Pi++]=Da,Da=t,La=e}function v_(t,e,n){Lt[Mt++]=Nn,Lt[Mt++]=xn,Lt[Mt++]=Xr,Xr=t;var r=Nn;t=xn;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-tn(e)+i|n<<i|r,xn=s+t}else Nn=1<<s|n<<i|r,xn=t}function bf(t){t.return!==null&&(Dr(t,1),v_(t,1,0))}function Ff(t){for(;t===Da;)Da=xi[--Pi],xi[Pi]=null,La=xi[--Pi],xi[Pi]=null;for(;t===Xr;)Xr=Lt[--Mt],Lt[Mt]=null,xn=Lt[--Mt],Lt[Mt]=null,Nn=Lt[--Mt],Lt[Mt]=null}var Rt=null,kt=null,pe=!1,Qt=null;function y_(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,kt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Nn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,kt=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(pe){var e=kt;if(e){var n=e;if(!km(t,e)){if(ud(t))throw Error(k(418));e=ar(n.nextSibling);var r=Rt;e&&km(t,e)?y_(r,n):(t.flags=t.flags&-4097|2,pe=!1,Rt=t)}}else{if(ud(t))throw Error(k(418));t.flags=t.flags&-4097|2,pe=!1,Rt=t}}}function Am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function zl(t){if(t!==Rt)return!1;if(!pe)return Am(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=kt)){if(ud(t))throw __(),Error(k(418));for(;e;)y_(t,e),e=ar(e.nextSibling)}if(Am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Rt?ar(t.stateNode.nextSibling):null;return!0}function __(){for(var t=kt;t;)t=ar(t.nextSibling)}function ts(){kt=Rt=null,pe=!1}function Uf(t){Qt===null?Qt=[t]:Qt.push(t)}var II=Wn.ReactCurrentBatchConfig;function qt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ma=Ir(null),ba=null,Oi=null,jf=null;function $f(){jf=Oi=ba=null}function Vf(t){var e=Ma.current;de(Ma),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wi(t,e){ba=t,jf=Oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(jf!==t)if(t={context:t,memoizedValue:e,next:null},Oi===null){if(ba===null)throw Error(k(308));Oi=t,ba.dependencies={lanes:0,firstContext:t}}else Oi=Oi.next=t;return e}var jr=null;function Bf(t){jr===null?jr=[t]:jr.push(t)}function w_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bf(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bf(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rf(t,n)}}function Rm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fa(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,h=u=a=null,l=s;do{var d=l.lane,g=l.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=t,w=l;switch(d=e,g=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){c=m.call(g,c,d);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,d=typeof m=="function"?m.call(g,c,d):m,d==null)break e;c=ye({},c,d);break e;case 2:Yn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=g,a=c):h=h.next=g,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=c}}function Nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var C_=new wy.Component().refs;function dd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=hr(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(nn(e,t,i,r),ca(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=hr(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(nn(e,t,i,r),ca(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=hr(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,r),e!==null&&(nn(e,t,r,n),ca(e,t,r))}};function xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,s):!0}function S_(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=vt(e)?Jr:tt.current,r=e.contextTypes,s=(r=r!=null)?es(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=C_,zf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=vt(e)?Jr:tt.current,i.context=es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fu.enqueueReplaceState(i,i.state,null),Fa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===C_&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Om(t){var e=t._init;return e(t._payload)}function I_(t){function e(p,f){if(t){var v=p.deletions;v===null?(p.deletions=[f],p.flags|=16):v.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=dr(p,f),p.index=0,p.sibling=null,p}function s(p,f,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<f?(p.flags|=2,f):v):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,v,E){return f===null||f.tag!==6?(f=nh(v,p.mode,E),f.return=p,f):(f=i(f,v),f.return=p,f)}function a(p,f,v,E){var N=v.type;return N===Ii?h(p,f,v.props.children,E,v.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qn&&Om(N)===f.type)?(E=i(f,v.props),E.ref=Os(p,f,v),E.return=p,E):(E=ma(v.type,v.key,v.props,null,p.mode,E),E.ref=Os(p,f,v),E.return=p,E)}function u(p,f,v,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=rh(v,p.mode,E),f.return=p,f):(f=i(f,v.children||[]),f.return=p,f)}function h(p,f,v,E,N){return f===null||f.tag!==7?(f=Kr(v,p.mode,E,N),f.return=p,f):(f=i(f,v),f.return=p,f)}function c(p,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=nh(""+f,p.mode,v),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Dl:return v=ma(f.type,f.key,f.props,null,p.mode,v),v.ref=Os(p,null,f),v.return=p,v;case Si:return f=rh(f,p.mode,v),f.return=p,f;case qn:var E=f._init;return c(p,E(f._payload),v)}if(zs(f)||As(f))return f=Kr(f,p.mode,v,null),f.return=p,f;Wl(p,f)}return null}function d(p,f,v,E){var N=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:l(p,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Dl:return v.key===N?a(p,f,v,E):null;case Si:return v.key===N?u(p,f,v,E):null;case qn:return N=v._init,d(p,f,N(v._payload),E)}if(zs(v)||As(v))return N!==null?null:h(p,f,v,E,null);Wl(p,v)}return null}function g(p,f,v,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(v)||null,l(f,p,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Dl:return p=p.get(E.key===null?v:E.key)||null,a(f,p,E,N);case Si:return p=p.get(E.key===null?v:E.key)||null,u(f,p,E,N);case qn:var L=E._init;return g(p,f,v,L(E._payload),N)}if(zs(E)||As(E))return p=p.get(v)||null,h(f,p,E,N,null);Wl(f,E)}return null}function m(p,f,v,E){for(var N=null,L=null,x=f,b=f=0,K=null;x!==null&&b<v.length;b++){x.index>b?(K=x,x=null):K=x.sibling;var H=d(p,x,v[b],E);if(H===null){x===null&&(x=K);break}t&&x&&H.alternate===null&&e(p,x),f=s(H,f,b),L===null?N=H:L.sibling=H,L=H,x=K}if(b===v.length)return n(p,x),pe&&Dr(p,b),N;if(x===null){for(;b<v.length;b++)x=c(p,v[b],E),x!==null&&(f=s(x,f,b),L===null?N=x:L.sibling=x,L=x);return pe&&Dr(p,b),N}for(x=r(p,x);b<v.length;b++)K=g(x,p,b,v[b],E),K!==null&&(t&&K.alternate!==null&&x.delete(K.key===null?b:K.key),f=s(K,f,b),L===null?N=K:L.sibling=K,L=K);return t&&x.forEach(function(F){return e(p,F)}),pe&&Dr(p,b),N}function w(p,f,v,E){var N=As(v);if(typeof N!="function")throw Error(k(150));if(v=N.call(v),v==null)throw Error(k(151));for(var L=N=null,x=f,b=f=0,K=null,H=v.next();x!==null&&!H.done;b++,H=v.next()){x.index>b?(K=x,x=null):K=x.sibling;var F=d(p,x,H.value,E);if(F===null){x===null&&(x=K);break}t&&x&&F.alternate===null&&e(p,x),f=s(F,f,b),L===null?N=F:L.sibling=F,L=F,x=K}if(H.done)return n(p,x),pe&&Dr(p,b),N;if(x===null){for(;!H.done;b++,H=v.next())H=c(p,H.value,E),H!==null&&(f=s(H,f,b),L===null?N=H:L.sibling=H,L=H);return pe&&Dr(p,b),N}for(x=r(p,x);!H.done;b++,H=v.next())H=g(x,p,b,H.value,E),H!==null&&(t&&H.alternate!==null&&x.delete(H.key===null?b:H.key),f=s(H,f,b),L===null?N=H:L.sibling=H,L=H);return t&&x.forEach(function(J){return e(p,J)}),pe&&Dr(p,b),N}function T(p,f,v,E){if(typeof v=="object"&&v!==null&&v.type===Ii&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Dl:e:{for(var N=v.key,L=f;L!==null;){if(L.key===N){if(N=v.type,N===Ii){if(L.tag===7){n(p,L.sibling),f=i(L,v.props.children),f.return=p,p=f;break e}}else if(L.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qn&&Om(N)===L.type){n(p,L.sibling),f=i(L,v.props),f.ref=Os(p,L,v),f.return=p,p=f;break e}n(p,L);break}else e(p,L);L=L.sibling}v.type===Ii?(f=Kr(v.props.children,p.mode,E,v.key),f.return=p,p=f):(E=ma(v.type,v.key,v.props,null,p.mode,E),E.ref=Os(p,f,v),E.return=p,p=E)}return o(p);case Si:e:{for(L=v.key;f!==null;){if(f.key===L)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(p,f.sibling),f=i(f,v.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=rh(v,p.mode,E),f.return=p,p=f}return o(p);case qn:return L=v._init,T(p,f,L(v._payload),E)}if(zs(v))return m(p,f,v,E);if(As(v))return w(p,f,v,E);Wl(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,v),f.return=p,p=f):(n(p,f),f=nh(v,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return T}var ns=I_(!0),T_=I_(!1),ol={},yn=Ir(ol),To=Ir(ol),ko=Ir(ol);function $r(t){if(t===ol)throw Error(k(174));return t}function Wf(t,e){switch(ae(ko,e),ae(To,t),ae(yn,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hh(e,t)}de(yn),ae(yn,e)}function rs(){de(yn),de(To),de(ko)}function k_(t){$r(ko.current);var e=$r(yn.current),n=Hh(e,t.type);e!==n&&(ae(To,t),ae(yn,n))}function Hf(t){To.current===t&&(de(yn),de(To))}var me=Ir(0);function Ua(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function Gf(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var ha=Wn.ReactCurrentDispatcher,Jc=Wn.ReactCurrentBatchConfig,Zr=0,ve=null,Ne=null,Le=null,ja=!1,no=!1,Ao=0,TI=0;function Qe(){throw Error(k(321))}function Kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function qf(t,e,n,r,i,s){if(Zr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ha.current=t===null||t.memoizedState===null?NI:xI,t=n(r,i),no){s=0;do{if(no=!1,Ao=0,25<=s)throw Error(k(301));s+=1,Le=Ne=null,e.updateQueue=null,ha.current=PI,t=n(r,i)}while(no)}if(ha.current=$a,e=Ne!==null&&Ne.next!==null,Zr=0,Le=Ne=ve=null,ja=!1,e)throw Error(k(300));return t}function Yf(){var t=Ao!==0;return Ao=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ve.memoizedState=Le=t:Le=Le.next=t,Le}function Vt(){if(Ne===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Le===null?ve.memoizedState:Le.next;if(e!==null)Le=e,Ne=t;else{if(t===null)throw Error(k(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?ve.memoizedState=Le=t:Le=Le.next=t}return Le}function Ro(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((Zr&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ve.lanes|=h,ei|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,sn(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function A_(){}function R_(t,e){var n=ve,r=Vt(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Qf(P_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,No(9,x_.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(k(349));Zr&30||N_(n,e,i)}return i}function N_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x_(t,e,n,r){e.value=n,e.getSnapshot=r,O_(e)&&D_(t)}function P_(t,e,n){return n(function(){O_(e)&&D_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function D_(t){var e=jn(t,1);e!==null&&nn(e,t,1,-1)}function Dm(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=RI.bind(null,ve,t),[e.memoizedState,t]}function No(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function L_(){return Vt().memoizedState}function da(t,e,n,r){var i=hn();ve.flags|=t,i.memoizedState=No(1|e,n,void 0,r===void 0?null:r)}function Uu(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Kf(r,o.deps)){i.memoizedState=No(e,n,s,r);return}}ve.flags|=t,i.memoizedState=No(1|e,n,s,r)}function Lm(t,e){return da(8390656,8,t,e)}function Qf(t,e){return Uu(2048,8,t,e)}function M_(t,e){return Uu(4,2,t,e)}function b_(t,e){return Uu(4,4,t,e)}function F_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U_(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,F_.bind(null,e,t),n)}function Jf(){}function j_(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $_(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return Zr&21?(sn(n,e)||(n=Wy(),ve.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function kI(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Jc.transition;Jc.transition={};try{t(!1),e()}finally{re=n,Jc.transition=r}}function B_(){return Vt().memoizedState}function AI(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z_(t))W_(e,n);else if(n=w_(t,e,n,r),n!==null){var i=at();nn(n,t,r,i),H_(n,e,r)}}function RI(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z_(t))W_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,sn(l,o)){var a=e.interleaved;a===null?(i.next=i,Bf(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=w_(t,e,i,r),n!==null&&(i=at(),nn(n,t,r,i),H_(n,e,r))}}function z_(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function W_(t,e){no=ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function H_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rf(t,n)}}var $a={readContext:$t,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},NI={readContext:$t,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:Lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,da(4194308,4,F_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return da(4194308,4,t,e)},useInsertionEffect:function(t,e){return da(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AI.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:Dm,useDebugValue:Jf,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=Dm(!1),e=t[0];return t=kI.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=hn();if(pe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Fe===null)throw Error(k(349));Zr&30||N_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lm(P_.bind(null,r,s,t),[t]),r.flags|=2048,No(9,x_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=Fe.identifierPrefix;if(pe){var n=xn,r=Nn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xI={readContext:$t,useCallback:j_,useContext:$t,useEffect:Qf,useImperativeHandle:U_,useInsertionEffect:M_,useLayoutEffect:b_,useMemo:$_,useReducer:Xc,useRef:L_,useState:function(){return Xc(Ro)},useDebugValue:Jf,useDeferredValue:function(t){var e=Vt();return V_(e,Ne.memoizedState,t)},useTransition:function(){var t=Xc(Ro)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:R_,useId:B_,unstable_isNewReconciler:!1},PI={readContext:$t,useCallback:j_,useContext:$t,useEffect:Qf,useImperativeHandle:U_,useInsertionEffect:M_,useLayoutEffect:b_,useMemo:$_,useReducer:Zc,useRef:L_,useState:function(){return Zc(Ro)},useDebugValue:Jf,useDeferredValue:function(t){var e=Vt();return Ne===null?e.memoizedState=t:V_(e,Ne.memoizedState,t)},useTransition:function(){var t=Zc(Ro)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:R_,useId:B_,unstable_isNewReconciler:!1};function is(t,e){try{var n="",r=e;do n+=sS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OI=typeof WeakMap=="function"?WeakMap:Map;function G_(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ba||(Ba=!0,Id=r),pd(t,e)},n}function K_(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=GI.bind(null,t,e,n),e.then(t,t))}function bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var DI=Wn.ReactCurrentOwner,pt=!1;function it(t,e,n,r){e.child=t===null?T_(e,null,n,r):ns(e,t.child,n,r)}function Um(t,e,n,r,i){n=n.render;var s=e.ref;return Wi(e,i),r=qf(t,e,n,r,s,i),n=Yf(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(pe&&n&&bf(e),e.flags|=1,it(t,e,r,i),e.child)}function jm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q_(t,e,s,r,i)):(t=ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function q_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Eo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,$n(t,e,i)}return gd(t,e,n,r,i)}function Y_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Li,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Li,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Li,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Li,St),St|=r;return it(t,e,i,n),e.child}function Q_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,r,i){var s=vt(n)?Jr:tt.current;return s=es(e,s),Wi(e,i),n=qf(t,e,n,r,s,i),r=Yf(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(pe&&r&&bf(e),e.flags|=1,it(t,e,n,i),e.child)}function $m(t,e,n,r,i){if(vt(n)){var s=!0;Oa(e)}else s=!1;if(Wi(e,i),e.stateNode===null)fa(t,e),S_(e,n,r),fd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=vt(n)?Jr:tt.current,u=es(e,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Pm(e,o,r,u),Yn=!1;var d=e.memoizedState;o.state=d,Fa(e,r,o,i),a=e.memoizedState,l!==r||d!==a||mt.current||Yn?(typeof h=="function"&&(dd(e,n,h,r),a=e.memoizedState),(l=Yn||xm(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,E_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:qt(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=$t(a):(a=vt(n)?Jr:tt.current,a=es(e,a));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&Pm(e,o,r,a),Yn=!1,d=e.memoizedState,o.state=d,Fa(e,r,o,i);var m=e.memoizedState;l!==c||d!==m||mt.current||Yn?(typeof g=="function"&&(dd(e,n,g,r),m=e.memoizedState),(u=Yn||xm(e,n,u,r,d,m,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return md(t,e,n,r,s,i)}function md(t,e,n,r,i,s){Q_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tm(e,n,!1),$n(t,e,s);r=e.stateNode,DI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ns(e,t.child,null,s),e.child=ns(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&Tm(e,n,!0),e.child}function J_(t){var e=t.stateNode;e.pendingContext?Im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Im(t,e.context,!1),Wf(t,e.containerInfo)}function Vm(t,e,n,r,i){return ts(),Uf(i),e.flags|=256,it(t,e,n,r),e.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function X_(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(me,i&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vu(o,r,0,null),t=Kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=vd,t):Xf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return LI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=dr(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=dr(l,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vd,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xf(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hl(t,e,n,r){return r!==null&&Uf(r),ns(e,t.child,null,n),t=Xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(k(422))),Hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Vu({mode:"visible",children:r.children},i,0,null),s=Kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ns(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=vd,s);if(!(e.mode&1))return Hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=eh(s,r,void 0),Hl(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),nn(r,t,i,-1))}return ip(),r=eh(Error(k(421))),Hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=ar(i.nextSibling),Rt=e,pe=!0,Qt=null,t!==null&&(Lt[Mt++]=Nn,Lt[Mt++]=xn,Lt[Mt++]=Xr,Nn=t.id,xn=t.overflow,Xr=e),e=Xf(e,r.children),e.flags|=4096,e)}function Bm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hd(t.return,e,n)}function th(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Z_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,n,e);else if(t.tag===19)Bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ua(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),th(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ua(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}th(e,!0,n,null,s);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function MI(t,e,n){switch(e.tag){case 3:J_(e),ts();break;case 5:k_(e);break;case 1:vt(e.type)&&Oa(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(Ma,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?X_(t,e,n):(ae(me,me.current&1),t=$n(t,e,n),t!==null?t.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Z_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Y_(t,e,n)}return $n(t,e,n)}var e1,_d,t1,n1;e1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};t1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(yn.current);var s=null;switch(n){case"input":i=Vh(t,i),r=Vh(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Wh(t,i),r=Wh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xa)}Gh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ce("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};n1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ds(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bI(t,e,n){var r=e.pendingProps;switch(Ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return vt(e.type)&&Pa(),Je(e),null;case 3:return r=e.stateNode,rs(),de(mt),de(tt),Gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(Ad(Qt),Qt=null))),_d(t,e),Je(e),null;case 5:Hf(e);var i=$r(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)t1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Je(e),null}if(t=$r(yn.current),zl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[Io]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Hs.length;i++)ce(Hs[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Jg(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Zg(r,s),ce("invalid",r)}Gh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,l,t),i=["children",""+l]):po.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ll(r),Xg(r,s,!0);break;case"textarea":Ll(r),em(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ny(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[Io]=r,e1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kh(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hs.length;i++)ce(Hs[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":Jg(t,r),i=Vh(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Zg(t,r),i=Wh(t,r),ce("invalid",t);break;default:i=r}Gh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Oy(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&xy(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&go(t,a):typeof a=="number"&&go(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ce("scroll",t):a!=null&&Cf(t,s,a,o))}switch(n){case"input":Ll(t),Xg(t,r,!1);break;case"textarea":Ll(t),em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)n1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=$r(ko.current),$r(yn.current),zl(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return Je(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&kt!==null&&e.mode&1&&!(e.flags&128))__(),ts(),e.flags|=98560,s=!1;else if(s=zl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[dn]=e}else ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Qt!==null&&(Ad(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Oe===0&&(Oe=3):ip())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return rs(),_d(t,e),t===null&&Co(e.stateNode.containerInfo),Je(e),null;case 10:return Vf(e.type._context),Je(e),null;case 17:return vt(e.type)&&Pa(),Je(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ds(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ua(t),o!==null){for(e.flags|=128,Ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>ss&&(e.flags|=128,r=!0,Ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ua(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Je(e),null}else 2*Ce()-s.renderingStartTime>ss&&n!==1073741824&&(e.flags|=128,r=!0,Ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function FI(t,e){switch(Ff(e),e.tag){case 1:return vt(e.type)&&Pa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(),de(mt),de(tt),Gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hf(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return rs(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var Gl=!1,Xe=!1,UI=typeof WeakSet=="function"?WeakSet:Set,M=null;function Di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function wd(t,e,n){try{n()}catch(r){_e(t,e,r)}}var zm=!1;function jI(t,e){if(rd=Aa,t=o_(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,c=t,d=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)d=c,c=g;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++h===r&&(a=o),(g=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},Aa=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,T=m.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:qt(e.type,w),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){_e(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return m=zm,zm=!1,m}function ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wd(e,n,s)}i=i.next}while(i!==r)}}function ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r1(t){var e=t.alternate;e!==null&&(t.alternate=null,r1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Io],delete e[ld],delete e[EI],delete e[CI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i1(t){return t.tag===5||t.tag===3||t.tag===4}function Wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xa));else if(r!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}function Sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var $e=null,Yt=!1;function Gn(t,e,n){for(n=n.child;n!==null;)s1(t,e,n),n=n.sibling}function s1(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Pu,n)}catch{}switch(n.tag){case 5:Xe||Di(n,e);case 6:var r=$e,i=Yt;$e=null,Gn(t,e,n),$e=r,Yt=i,$e!==null&&(Yt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Yt?(t=$e,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),_o(t)):qc($e,n.stateNode));break;case 4:r=$e,i=Yt,$e=n.stateNode.containerInfo,Yt=!0,Gn(t,e,n),$e=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wd(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!Xe&&(Di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Gn(t,e,n),Xe=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function Hm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UI),e.forEach(function(r){var i=qI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,Yt=!1;break e;case 3:$e=l.stateNode.containerInfo,Yt=!0;break e;case 4:$e=l.stateNode.containerInfo,Yt=!0;break e}l=l.return}if($e===null)throw Error(k(160));s1(s,o,i),$e=null,Yt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){_e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o1(e,t),e=e.sibling}function o1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),cn(t),r&4){try{ro(3,t,t.return),ju(3,t)}catch(w){_e(t,t.return,w)}try{ro(5,t,t.return)}catch(w){_e(t,t.return,w)}}break;case 1:Kt(e,t),cn(t),r&512&&n!==null&&Di(n,n.return);break;case 5:if(Kt(e,t),cn(t),r&512&&n!==null&&Di(n,n.return),t.flags&32){var i=t.stateNode;try{go(i,"")}catch(w){_e(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ay(i,s),Kh(l,o);var u=Kh(l,s);for(o=0;o<a.length;o+=2){var h=a[o],c=a[o+1];h==="style"?Oy(i,c):h==="dangerouslySetInnerHTML"?xy(i,c):h==="children"?go(i,c):Cf(i,h,c,u)}switch(l){case"input":Bh(i,s);break;case"textarea":Ry(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?$i(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Io]=s}catch(w){_e(t,t.return,w)}}break;case 6:if(Kt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){_e(t,t.return,w)}}break;case 3:if(Kt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(w){_e(t,t.return,w)}break;case 4:Kt(e,t),cn(t);break;case 13:Kt(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tp=Ce())),r&4&&Hm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(u=Xe)||h,Kt(e,t),Xe=u):Kt(e,t),cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(M=t,h=t.child;h!==null;){for(c=M=h;M!==null;){switch(d=M,g=d.child,d.tag){case 0:case 11:case 14:case 15:ro(4,d,d.return);break;case 1:Di(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(w){_e(r,n,w)}}break;case 5:Di(d,d.return);break;case 22:if(d.memoizedState!==null){Km(c);continue}}g!==null?(g.return=d,M=g):Km(c)}h=h.sibling}e:for(h=null,c=t;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Py("display",o))}catch(w){_e(t,t.return,w)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){_e(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Kt(e,t),cn(t),r&4&&Hm(t);break;case 21:break;default:Kt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(go(i,""),r.flags&=-33);var s=Wm(t);Sd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wm(t);Cd(t,l,o);break;default:throw Error(k(161))}}catch(a){_e(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $I(t,e,n){M=t,l1(t)}function l1(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gl;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Xe;l=Gl;var u=Xe;if(Gl=o,(Xe=a)&&!u)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?qm(i):a!==null?(a.return=o,M=a):qm(i);for(;s!==null;)M=s,l1(s),s=s.sibling;M=i,Gl=l,Xe=u}Gm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Gm(t)}}function Gm(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&_o(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Xe||e.flags&512&&Ed(e)}catch(d){_e(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Km(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function qm(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ju(4,e)}catch(a){_e(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){_e(e,i,a)}}var s=e.return;try{Ed(e)}catch(a){_e(e,s,a)}break;case 5:var o=e.return;try{Ed(e)}catch(a){_e(e,o,a)}}}catch(a){_e(e,e.return,a)}if(e===t){M=null;break}var l=e.sibling;if(l!==null){l.return=e.return,M=l;break}M=e.return}}var VI=Math.ceil,Va=Wn.ReactCurrentDispatcher,Zf=Wn.ReactCurrentOwner,jt=Wn.ReactCurrentBatchConfig,ee=0,Fe=null,Ae=null,ze=0,St=0,Li=Ir(0),Oe=0,xo=null,ei=0,$u=0,ep=0,io=null,ft=null,tp=0,ss=1/0,kn=null,Ba=!1,Id=null,cr=null,Kl=!1,nr=null,za=0,so=0,Td=null,pa=-1,ga=0;function at(){return ee&6?Ce():pa!==-1?pa:pa=Ce()}function hr(t){return t.mode&1?ee&2&&ze!==0?ze&-ze:II.transition!==null?(ga===0&&(ga=Wy()),ga):(t=re,t!==0||(t=window.event,t=t===void 0?16:Jy(t.type)),t):1}function nn(t,e,n,r){if(50<so)throw so=0,Td=null,Error(k(185));rl(t,n,r),(!(ee&2)||t!==Fe)&&(t===Fe&&(!(ee&2)&&($u|=n),Oe===4&&Jn(t,ze)),yt(t,r),n===1&&ee===0&&!(e.mode&1)&&(ss=Ce()+500,bu&&Tr()))}function yt(t,e){var n=t.callbackNode;IS(t,e);var r=ka(t,t===Fe?ze:0);if(r===0)n!==null&&rm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rm(n),e===1)t.tag===0?SI(Ym.bind(null,t)):m_(Ym.bind(null,t)),_I(function(){!(ee&6)&&Tr()}),n=null;else{switch(Hy(r)){case 1:n=Af;break;case 4:n=By;break;case 16:n=Ta;break;case 536870912:n=zy;break;default:n=Ta}n=g1(n,a1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a1(t,e){if(pa=-1,ga=0,ee&6)throw Error(k(327));var n=t.callbackNode;if(Hi()&&t.callbackNode!==n)return null;var r=ka(t,t===Fe?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wa(t,r);else{e=r;var i=ee;ee|=2;var s=c1();(Fe!==t||ze!==e)&&(kn=null,ss=Ce()+500,Gr(t,e));do try{WI();break}catch(l){u1(t,l)}while(!0);$f(),Va.current=s,ee=i,Ae!==null?e=0:(Fe=null,ze=0,e=Oe)}if(e!==0){if(e===2&&(i=Xh(t),i!==0&&(r=i,e=kd(t,i))),e===1)throw n=xo,Gr(t,0),Jn(t,r),yt(t,Ce()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!BI(i)&&(e=Wa(t,r),e===2&&(s=Xh(t),s!==0&&(r=s,e=kd(t,s))),e===1))throw n=xo,Gr(t,0),Jn(t,r),yt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Lr(t,ft,kn);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=tp+500-Ce(),10<e)){if(ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=od(Lr.bind(null,t,ft,kn),e);break}Lr(t,ft,kn);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VI(r/1960))-r,10<r){t.timeoutHandle=od(Lr.bind(null,t,ft,kn),r);break}Lr(t,ft,kn);break;case 5:Lr(t,ft,kn);break;default:throw Error(k(329))}}}return yt(t,Ce()),t.callbackNode===n?a1.bind(null,t):null}function kd(t,e){var n=io;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Wa(t,e),t!==2&&(e=ft,ft=n,e!==null&&Ad(e)),t}function Ad(t){ft===null?ft=t:ft.push.apply(ft,t)}function BI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~ep,e&=~$u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Ym(t){if(ee&6)throw Error(k(327));Hi();var e=ka(t,0);if(!(e&1))return yt(t,Ce()),null;var n=Wa(t,e);if(t.tag!==0&&n===2){var r=Xh(t);r!==0&&(e=r,n=kd(t,r))}if(n===1)throw n=xo,Gr(t,0),Jn(t,e),yt(t,Ce()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,ft,kn),yt(t,Ce()),null}function np(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(ss=Ce()+500,bu&&Tr())}}function ti(t){nr!==null&&nr.tag===0&&!(ee&6)&&Hi();var e=ee;ee|=1;var n=jt.transition,r=re;try{if(jt.transition=null,re=1,t)return t()}finally{re=r,jt.transition=n,ee=e,!(ee&6)&&Tr()}}function rp(){St=Li.current,de(Li)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yI(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(Ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pa();break;case 3:rs(),de(mt),de(tt),Gf();break;case 5:Hf(r);break;case 4:rs();break;case 13:de(me);break;case 19:de(me);break;case 10:Vf(r.type._context);break;case 22:case 23:rp()}n=n.return}if(Fe=t,Ae=t=dr(t.current,null),ze=St=e,Oe=0,xo=null,ep=$u=ei=0,ft=io=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jr=null}return t}function u1(t,e){do{var n=Ae;try{if($f(),ha.current=$a,ja){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ja=!1}if(Zr=0,Le=Ne=ve=null,no=!1,Ao=0,Zf.current=null,n===null||n.return===null){Oe=1,xo=e,Ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ze,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=bm(o);if(g!==null){g.flags&=-257,Fm(g,o,l,s,e),g.mode&1&&Mm(s,u,e),e=g,a=u;var m=e.updateQueue;if(m===null){var w=new Set;w.add(a),e.updateQueue=w}else m.add(a);break e}else{if(!(e&1)){Mm(s,u,e),ip();break e}a=Error(k(426))}}else if(pe&&l.mode&1){var T=bm(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Fm(T,o,l,s,e),Uf(is(a,l));break e}}s=a=is(a,l),Oe!==4&&(Oe=2),io===null?io=[s]:io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=G_(s,a,e);Rm(s,p);break e;case 1:l=a;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=K_(s,l,e);Rm(s,E);break e}}s=s.return}while(s!==null)}d1(n)}catch(N){e=N,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function c1(){var t=Va.current;return Va.current=$a,t===null?$a:t}function ip(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(ei&268435455)&&!($u&268435455)||Jn(Fe,ze)}function Wa(t,e){var n=ee;ee|=2;var r=c1();(Fe!==t||ze!==e)&&(kn=null,Gr(t,e));do try{zI();break}catch(i){u1(t,i)}while(!0);if($f(),ee=n,Va.current=r,Ae!==null)throw Error(k(261));return Fe=null,ze=0,Oe}function zI(){for(;Ae!==null;)h1(Ae)}function WI(){for(;Ae!==null&&!gS();)h1(Ae)}function h1(t){var e=p1(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?d1(t):Ae=e,Zf.current=null}function d1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FI(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Ae=null;return}}else if(n=bI(n,e,St),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Oe===0&&(Oe=5)}function Lr(t,e,n){var r=re,i=jt.transition;try{jt.transition=null,re=1,HI(t,e,n,r)}finally{jt.transition=i,re=r}return null}function HI(t,e,n,r){do Hi();while(nr!==null);if(ee&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TS(t,s),t===Fe&&(Ae=Fe=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kl||(Kl=!0,g1(Ta,function(){return Hi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=re;re=1;var l=ee;ee|=4,Zf.current=null,jI(t,n),o1(n,t),hI(id),Aa=!!rd,id=rd=null,t.current=n,$I(n),mS(),ee=l,re=o,jt.transition=s}else t.current=n;if(Kl&&(Kl=!1,nr=t,za=i),s=t.pendingLanes,s===0&&(cr=null),_S(n.stateNode),yt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ba)throw Ba=!1,t=Id,Id=null,t;return za&1&&t.tag!==0&&Hi(),s=t.pendingLanes,s&1?t===Td?so++:(so=0,Td=t):so=0,Tr(),null}function Hi(){if(nr!==null){var t=Hy(za),e=jt.transition,n=re;try{if(jt.transition=null,re=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,za=0,ee&6)throw Error(k(331));var i=ee;for(ee|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(M=u;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:ro(8,h,s)}var c=h.child;if(c!==null)c.return=h,M=c;else for(;M!==null;){h=M;var d=h.sibling,g=h.return;if(r1(h),h===u){M=null;break}if(d!==null){d.return=g,M=d;break}M=g}}}var m=s.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,M=v;else e:for(o=f;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ju(9,l)}}catch(N){_e(l,l.return,N)}if(l===o){M=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,M=E;break e}M=l.return}}if(ee=i,Tr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Pu,t)}catch{}r=!0}return r}finally{re=n,jt.transition=e}}return!1}function Qm(t,e,n){e=is(n,e),e=G_(t,e,1),t=ur(t,e,1),e=at(),t!==null&&(rl(t,1,e),yt(t,e))}function _e(t,e,n){if(t.tag===3)Qm(t,t,n);else for(;e!==null;){if(e.tag===3){Qm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){t=is(n,t),t=K_(e,t,1),e=ur(e,t,1),t=at(),e!==null&&(rl(e,1,t),yt(e,t));break}}e=e.return}}function GI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(ze&n)===n&&(Oe===4||Oe===3&&(ze&130023424)===ze&&500>Ce()-tp?Gr(t,0):ep|=n),yt(t,e)}function f1(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=at();t=jn(t,e),t!==null&&(rl(t,e,n),yt(t,n))}function KI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f1(t,n)}function qI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),f1(t,n)}var p1;p1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,MI(t,e,n);pt=!!(t.flags&131072)}else pt=!1,pe&&e.flags&1048576&&v_(e,La,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fa(t,e),t=e.pendingProps;var i=es(e,tt.current);Wi(e,n),i=qf(null,e,r,t,i,n);var s=Yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,Oa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zf(e),i.updater=Fu,e.stateNode=i,i._reactInternals=e,fd(e,r,t,n),e=md(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&bf(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QI(r),t=qt(r,t),i){case 0:e=gd(null,e,r,t,n);break e;case 1:e=$m(null,e,r,t,n);break e;case 11:e=Um(null,e,r,t,n);break e;case 14:e=jm(null,e,r,qt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),gd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),$m(t,e,r,i,n);case 3:e:{if(J_(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,E_(t,e),Fa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=is(Error(k(423)),e),e=Vm(t,e,r,n,i);break e}else if(r!==i){i=is(Error(k(424)),e),e=Vm(t,e,r,n,i);break e}else for(kt=ar(e.stateNode.containerInfo.firstChild),Rt=e,pe=!0,Qt=null,n=T_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ts(),r===i){e=$n(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return k_(e),t===null&&cd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,sd(r,i)?o=null:s!==null&&sd(r,s)&&(e.flags|=32),Q_(t,e),it(t,e,o,n),e.child;case 6:return t===null&&cd(e),null;case 13:return X_(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ns(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Um(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(Ma,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!mt.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Mn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hd(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wi(e,n),i=$t(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),jm(t,e,r,i,n);case 15:return q_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),fa(t,e),e.tag=1,vt(r)?(t=!0,Oa(e)):t=!1,Wi(e,n),S_(e,r,i),fd(e,r,i,n),md(null,e,r,!0,t,n);case 19:return Z_(t,e,n);case 22:return Y_(t,e,n)}throw Error(k(156,e.tag))};function g1(t,e){return Vy(t,e)}function YI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new YI(t,e,n,r)}function sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QI(t){if(typeof t=="function")return sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===If)return 11;if(t===Tf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ma(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ii:return Kr(n.children,i,s,e);case Sf:o=8,i|=8;break;case Fh:return t=Ft(12,n,e,i|2),t.elementType=Fh,t.lanes=s,t;case Uh:return t=Ft(13,n,e,i),t.elementType=Uh,t.lanes=s,t;case jh:return t=Ft(19,n,e,i),t.elementType=jh,t.lanes=s,t;case Iy:return Vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cy:o=10;break e;case Sy:o=9;break e;case If:o=11;break e;case Tf:o=14;break e;case qn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Vu(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=Iy,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function op(t,e,n,r,i,s,o,l,a){return t=new JI(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(s),t}function XI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function m1(t){if(!t)return _r;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(vt(n))return g_(t,n,e)}return e}function v1(t,e,n,r,i,s,o,l,a){return t=op(n,r,!0,t,i,s,o,l,a),t.context=m1(null),n=t.current,r=at(),i=hr(n),s=Mn(r,i),s.callback=e??null,ur(n,s,i),t.current.lanes=i,rl(t,i,r),yt(t,r),t}function Bu(t,e,n,r){var i=e.current,s=at(),o=hr(i);return n=m1(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ur(i,e,o),t!==null&&(nn(t,i,o,s),ca(t,i,o)),o}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lp(t,e){Jm(t,e),(t=t.alternate)&&Jm(t,e)}function ZI(){return null}var y1=typeof reportError=="function"?reportError:function(t){console.error(t)};function ap(t){this._internalRoot=t}zu.prototype.render=ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Bu(t,e,null,null)};zu.prototype.unmount=ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){Bu(null,t,null,null)}),e[Un]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=qy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&Qy(t)}};function up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function eT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ha(o);s.call(u)}}var o=v1(e,r,t,0,null,!1,!1,"",Xm);return t._reactRootContainer=o,t[Un]=o.current,Co(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ha(a);l.call(u)}}var a=op(t,0,!1,null,null,!1,!1,"",Xm);return t._reactRootContainer=a,t[Un]=a.current,Co(t.nodeType===8?t.parentNode:t),ti(function(){Bu(e,a,n,r)}),a}function Hu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ha(o);l.call(a)}}Bu(e,o,t,i)}else o=eT(n,e,t,i,r);return Ha(o)}Gy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(Rf(e,n|1),yt(e,Ce()),!(ee&6)&&(ss=Ce()+500,Tr()))}break;case 13:ti(function(){var r=jn(t,1);if(r!==null){var i=at();nn(r,t,1,i)}}),lp(t,1)}};Nf=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=at();nn(e,t,134217728,n)}lp(t,134217728)}};Ky=function(t){if(t.tag===13){var e=hr(t),n=jn(t,e);if(n!==null){var r=at();nn(n,t,e,r)}lp(t,e)}};qy=function(){return re};Yy=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Yh=function(t,e,n){switch(e){case"input":if(Bh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Mu(r);if(!i)throw Error(k(90));ky(r),Bh(r,i)}}}break;case"textarea":Ry(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};My=np;by=ti;var tT={usingClientEntryPoint:!1,Events:[sl,Ri,Mu,Dy,Ly,np]},Ls={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nT={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||ZI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Pu=ql.inject(nT),vn=ql}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(e))throw Error(k(200));return XI(t,e,null,n)};Pt.createRoot=function(t,e){if(!up(t))throw Error(k(299));var n=!1,r="",i=y1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=op(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Co(t.nodeType===8?t.parentNode:t),new ap(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=jy(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return ti(t)};Pt.hydrate=function(t,e,n){if(!Wu(e))throw Error(k(200));return Hu(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!up(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=y1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=v1(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zu(e)};Pt.render=function(t,e,n){if(!Wu(e))throw Error(k(200));return Hu(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Wu(t))throw Error(k(40));return t._reactRootContainer?(ti(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Pt.unstable_batchedUpdates=np;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wu(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Hu(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";function _1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_1)}catch(t){console.error(t)}}_1(),vy.exports=Pt;var rT=vy.exports,Zm=rT;Mh.createRoot=Zm.createRoot,Mh.hydrateRoot=Zm.hydrateRoot;const Yl="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-5.5%200%2026%2026'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%20fill='%23000000'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3echevron-right%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-474.000000,%20-1196.000000)'%20fill='%23ffffff'%3e%3cpath%20d='M488.404,1207.36%20L477.637,1197.6%20C476.806,1196.76%20475.459,1196.76%20474.629,1197.6%20C473.798,1198.43%20473.798,1199.77%20474.629,1200.6%20L483.885,1209%20L474.629,1217.4%20C473.798,1218.23%20473.798,1219.57%20474.629,1220.4%20C475.459,1221.24%20476.806,1221.24%20477.637,1220.4%20L488.404,1210.64%20C488.854,1210.19%20489.052,1209.59%20489.015,1209%20C489.052,1208.41%20488.854,1207.81%20488.404,1207.36'%20id='chevron-right'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ql="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-5.5%200%2026%2026'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'%3e%3ctitle%3echevron-right%3c/title%3e%3cdesc%3eCreated%20with%20Sketch%20Beta.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20sketch:type='MSPage'%3e%3cg%20id='Icon-Set-Filled'%20sketch:type='MSLayerGroup'%20transform='translate(-474.000000,%20-1196.000000)'%20fill='%23000000'%3e%3cpath%20d='M488.404,1207.36%20L477.637,1197.6%20C476.806,1196.76%20475.459,1196.76%20474.629,1197.6%20C473.798,1198.43%20473.798,1199.77%20474.629,1200.6%20L483.885,1209%20L474.629,1217.4%20C473.798,1218.23%20473.798,1219.57%20474.629,1220.4%20C475.459,1221.24%20476.806,1221.24%20477.637,1220.4%20L488.404,1210.64%20C488.854,1210.19%20489.052,1209.59%20489.015,1209%20C489.052,1208.41%20488.854,1207.81%20488.404,1207.36'%20id='chevron-right'%20sketch:type='MSShapeGroup'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",e0="data:image/svg+xml,%3csvg%20width='84'%20height='81'%20viewBox='0%200%2084%2081'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='36.0624'%20width='51'%20height='11'%20transform='rotate(-45%200%2036.0624)'%20fill='%2306CBAD'%20fill-opacity='0.69'/%3e%3crect%20x='75.4827'%20y='44.2609'%20width='51'%20height='11'%20transform='rotate(-135%2075.4827%2044.2609)'%20fill='%23866BFA'%20fill-opacity='0.69'/%3e%3crect%20x='36.4827'%20y='80.2609'%20width='51'%20height='11'%20transform='rotate(-135%2036.4827%2080.2609)'%20fill='%23FD456B'%20fill-opacity='0.69'/%3e%3crect%20x='83.2609'%20y='44.1985'%20width='51'%20height='11'%20transform='rotate(135%2083.2609%2044.1985)'%20fill='%23F5CC00'%20fill-opacity='0.69'/%3e%3cpath%20d='M41.7083%2045.0363V32.8443H39.2763C38.999%2032.8443%2038.8603%2032.7163%2038.8603%2032.4603V30.8283C38.8603%2030.5723%2038.999%2030.4443%2039.2763%2030.4443H46.9563C47.2336%2030.4443%2047.3723%2030.5723%2047.3723%2030.8283V32.4603C47.3723%2032.7163%2047.2336%2032.8443%2046.9563%2032.8443H44.4923V44.7483C44.4923%2047.8843%2043.7563%2050.1136%2042.2843%2051.4363C40.8123%2052.7589%2038.5083%2053.4203%2035.3723%2053.4203C35.095%2053.4203%2034.9563%2053.2923%2034.9563%2053.0363V51.4043C34.9563%2051.1483%2035.095%2051.0203%2035.3723%2051.0203C37.719%2051.0203%2039.3616%2050.5403%2040.3003%2049.5803C41.239%2048.5989%2041.7083%2047.0843%2041.7083%2045.0363Z'%20fill='black'/%3e%3c/svg%3e",t0="data:image/svg+xml,%3csvg%20width='84'%20height='81'%20viewBox='0%200%2084%2081'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='36.0624'%20width='51'%20height='11'%20transform='rotate(-45%200%2036.0624)'%20fill='%2306CBAD'%20fill-opacity='0.69'/%3e%3crect%20x='75.4827'%20y='44.2609'%20width='51'%20height='11'%20transform='rotate(-135%2075.4827%2044.2609)'%20fill='%23866BFA'%20fill-opacity='0.69'/%3e%3crect%20x='36.4827'%20y='80.2609'%20width='51'%20height='11'%20transform='rotate(-135%2036.4827%2080.2609)'%20fill='%23FD456B'%20fill-opacity='0.69'/%3e%3crect%20x='83.261'%20y='44.1985'%20width='51'%20height='11'%20transform='rotate(135%2083.261%2044.1985)'%20fill='%23F5CC00'%20fill-opacity='0.69'/%3e%3cpath%20d='M41.7084%2045.0363V32.8443H39.2764C38.9991%2032.8443%2038.8604%2032.7163%2038.8604%2032.4603V30.8283C38.8604%2030.5723%2038.9991%2030.4443%2039.2764%2030.4443H46.9564C47.2337%2030.4443%2047.3724%2030.5723%2047.3724%2030.8283V32.4603C47.3724%2032.7163%2047.2337%2032.8443%2046.9564%2032.8443H44.4924V44.7483C44.4924%2047.8843%2043.7564%2050.1136%2042.2844%2051.4363C40.8124%2052.7589%2038.5084%2053.4203%2035.3724%2053.4203C35.0951%2053.4203%2034.9564%2053.2923%2034.9564%2053.0363V51.4043C34.9564%2051.1483%2035.0951%2051.0203%2035.3724%2051.0203C37.7191%2051.0203%2039.3617%2050.5403%2040.3004%2049.5803C41.2391%2048.5989%2041.7084%2047.0843%2041.7084%2045.0363Z'%20fill='white'/%3e%3c/svg%3e",iT="/Jobchaser/assets/anonymous-user-CtKAw0Qq.svg",n0="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%203C4.34315%203%203%204.34315%203%206V18C3%2019.6569%204.34315%2021%206%2021H17C17.5523%2021%2018%2020.5523%2018%2020C18%2019.4477%2017.5523%2019%2017%2019H6C5.44772%2019%205%2018.5523%205%2018V6C5%205.44772%205.44772%205%206%205H17C17.5523%205%2018%204.55228%2018%204C18%203.44772%2017.5523%203%2017%203H6ZM15.7071%207.29289C15.3166%206.90237%2014.6834%206.90237%2014.2929%207.29289C13.9024%207.68342%2013.9024%208.31658%2014.2929%208.70711L16.5858%2011H8C7.44772%2011%207%2011.4477%207%2012C7%2012.5523%207.44772%2013%208%2013H16.5858L14.2929%2015.2929C13.9024%2015.6834%2013.9024%2016.3166%2014.2929%2016.7071C14.6834%2017.0976%2015.3166%2017.0976%2015.7071%2016.7071L19.7071%2012.7071C20.0976%2012.3166%2020.0976%2011.6834%2019.7071%2011.2929L15.7071%207.29289Z'%20fill='%23ffff'/%3e%3c/g%3e%3c/svg%3e",r0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6%203C4.34315%203%203%204.34315%203%206V18C3%2019.6569%204.34315%2021%206%2021H17C17.5523%2021%2018%2020.5523%2018%2020C18%2019.4477%2017.5523%2019%2017%2019H6C5.44772%2019%205%2018.5523%205%2018V6C5%205.44772%205.44772%205%206%205H17C17.5523%205%2018%204.55228%2018%204C18%203.44772%2017.5523%203%2017%203H6ZM15.7071%207.29289C15.3166%206.90237%2014.6834%206.90237%2014.2929%207.29289C13.9024%207.68342%2013.9024%208.31658%2014.2929%208.70711L16.5858%2011H8C7.44772%2011%207%2011.4477%207%2012C7%2012.5523%207.44772%2013%208%2013H16.5858L14.2929%2015.2929C13.9024%2015.6834%2013.9024%2016.3166%2014.2929%2016.7071C14.6834%2017.0976%2015.3166%2017.0976%2015.7071%2016.7071L19.7071%2012.7071C20.0976%2012.3166%2020.0976%2011.6834%2019.7071%2011.2929L15.7071%207.29289Z'%20fill='%23000000'/%3e%3c/svg%3e";/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Po.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const i0="popstate";function sT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Rd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ga(i)}return lT(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function w1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oT(){return Math.random().toString(36).substr(2,8)}function s0(t,e){return{usr:t.state,key:t.key,idx:e}}function Rd(t,e,n,r){return n===void 0&&(n=null),Po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ms(e):e,{state:n,key:e&&e.key||r||oT()})}function Ga(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rr.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(Po({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function c(){l=rr.Pop;let T=h(),p=T==null?null:T-u;u=T,a&&a({action:l,location:w.location,delta:p})}function d(T,p){l=rr.Push;let f=Rd(w.location,T,p);n&&n(f,T),u=h()+1;let v=s0(f,u),E=w.createHref(f);try{o.pushState(v,"",E)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(E)}s&&a&&a({action:l,location:w.location,delta:1})}function g(T,p){l=rr.Replace;let f=Rd(w.location,T,p);n&&n(f,T),u=h();let v=s0(f,u),E=w.createHref(f);o.replaceState(v,"",E),s&&a&&a({action:l,location:w.location,delta:0})}function m(T){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:Ga(T);return f=f.replace(/ $/,"%20"),Se(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return l},get location(){return t(i,o)},listen(T){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(i0,c),a=T,()=>{i.removeEventListener(i0,c),a=null}},createHref(T){return e(i,T)},createURL:m,encodeLocation(T){let p=m(T);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(T){return o.go(T)}};return w}var o0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(o0||(o0={}));function aT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ms(e):e,i=cp(r.pathname||"/",n);if(i==null)return null;let s=E1(t);uT(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let a=ET(i);o=yT(s[l],a)}return o}function E1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(Se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=fr([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),E1(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:mT(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of C1(s.path))i(s,o,a)}),e}function C1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=C1(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function uT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cT=/^:[\w-]+$/,hT=3,dT=2,fT=1,pT=10,gT=-2,l0=t=>t==="*";function mT(t,e){let n=t.split("/"),r=n.length;return n.some(l0)&&(r+=gT),e&&(r+=dT),n.filter(i=>!l0(i)).reduce((i,s)=>i+(cT.test(s)?hT:s===""?fT:pT),r)}function vT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=_T({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!h)return null;Object.assign(r,h.params);let c=l.route;s.push({params:r,pathname:fr([i,h.pathname]),pathnameBase:TT(fr([i,h.pathnameBase])),route:c}),h.pathnameBase!=="/"&&(i=fr([i,h.pathnameBase]))}return s}function _T(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,c)=>{let{paramName:d,isOptional:g}=h;if(d==="*"){let w=l[c]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const m=l[c];return g&&!m?u[d]=void 0:u[d]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),w1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ET(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return w1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function CT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ms(t):t;return{pathname:n?n.startsWith("/")?n:ST(n,e):e,search:kT(r),hash:AT(i)}}function ST(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ih(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hp(t,e){let n=IT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ms(t):(i=Po({},t),Se(!i.pathname||!i.pathname.includes("?"),ih("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),ih("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),ih("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}l=c>=0?e[c]:"/"}let a=CT(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const fr=t=>t.join("/").replace(/\/\/+/g,"/"),TT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,AT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function RT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const S1=["post","put","patch","delete"];new Set(S1);const NT=["get",...S1];new Set(NT);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oo.apply(this,arguments)}const fp=I.createContext(null),xT=I.createContext(null),kr=I.createContext(null),Gu=I.createContext(null),Ar=I.createContext({outlet:null,matches:[],isDataRoute:!1}),I1=I.createContext(null);function PT(t,e){let{relative:n}=e===void 0?{}:e;vs()||Se(!1);let{basename:r,navigator:i}=I.useContext(kr),{hash:s,pathname:o,search:l}=k1(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:fr([r,o])),i.createHref({pathname:a,search:l,hash:s})}function vs(){return I.useContext(Gu)!=null}function ll(){return vs()||Se(!1),I.useContext(Gu).location}function T1(t){I.useContext(kr).static||I.useLayoutEffect(t)}function Ku(){let{isDataRoute:t}=I.useContext(Ar);return t?WT():OT()}function OT(){vs()||Se(!1);let t=I.useContext(fp),{basename:e,future:n,navigator:r}=I.useContext(kr),{matches:i}=I.useContext(Ar),{pathname:s}=ll(),o=JSON.stringify(hp(i,n.v7_relativeSplatPath)),l=I.useRef(!1);return T1(()=>{l.current=!0}),I.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=dp(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:fr([e,c.pathname])),(h.replace?r.replace:r.push)(c,h.state,h)},[e,r,o,s,t])}function k1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(kr),{matches:i}=I.useContext(Ar),{pathname:s}=ll(),o=JSON.stringify(hp(i,r.v7_relativeSplatPath));return I.useMemo(()=>dp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function DT(t,e){return LT(t,e)}function LT(t,e,n,r){vs()||Se(!1);let{navigator:i}=I.useContext(kr),{matches:s}=I.useContext(Ar),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=ll(),h;if(e){var c;let T=typeof e=="string"?ms(e):e;a==="/"||(c=T.pathname)!=null&&c.startsWith(a)||Se(!1),h=T}else h=u;let d=h.pathname||"/",g=d;if(a!=="/"){let T=a.replace(/^\//,"").split("/");g="/"+d.replace(/^\//,"").split("/").slice(T.length).join("/")}let m=aT(t,{pathname:g}),w=jT(m&&m.map(T=>Object.assign({},T,{params:Object.assign({},l,T.params),pathname:fr([a,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?a:fr([a,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,n,r);return e&&w?I.createElement(Gu.Provider,{value:{location:Oo({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:rr.Pop}},w):w}function MT(){let t=zT(),e=RT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const bT=I.createElement(MT,null);class FT extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(Ar.Provider,{value:this.props.routeContext},I.createElement(I1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function UT(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(fp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Ar.Provider,{value:e},r)}function jT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));h>=0||Se(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let c=o[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=h),c.route.id){let{loaderData:d,errors:g}=n,m=c.route.loader&&d[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||m){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,c,d)=>{let g,m=!1,w=null,T=null;n&&(g=l&&c.route.id?l[c.route.id]:void 0,w=c.route.errorElement||bT,a&&(u<0&&d===0?(HT("route-fallback",!1),m=!0,T=null):u===d&&(m=!0,T=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,d+1)),f=()=>{let v;return g?v=w:m?v=T:c.route.Component?v=I.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=h,I.createElement(UT,{match:c,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?I.createElement(FT,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var A1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(A1||{}),Ka=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ka||{});function $T(t){let e=I.useContext(fp);return e||Se(!1),e}function VT(t){let e=I.useContext(xT);return e||Se(!1),e}function BT(t){let e=I.useContext(Ar);return e||Se(!1),e}function R1(t){let e=BT(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function zT(){var t;let e=I.useContext(I1),n=VT(Ka.UseRouteError),r=R1(Ka.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function WT(){let{router:t}=$T(A1.UseNavigateStable),e=R1(Ka.UseNavigateStable),n=I.useRef(!1);return T1(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Oo({fromRouteId:e},s)))},[t,e])}const a0={};function HT(t,e,n){!e&&!a0[t]&&(a0[t]=!0)}function GT(t){let{to:e,replace:n,state:r,relative:i}=t;vs()||Se(!1);let{future:s,static:o}=I.useContext(kr),{matches:l}=I.useContext(Ar),{pathname:a}=ll(),u=Ku(),h=dp(e,hp(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(h);return I.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function Gs(t){Se(!1)}function KT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:o=!1,future:l}=t;vs()&&Se(!1);let a=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:a,navigator:s,static:o,future:Oo({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=ms(r));let{pathname:h="/",search:c="",hash:d="",state:g=null,key:m="default"}=r,w=I.useMemo(()=>{let T=cp(h,a);return T==null?null:{location:{pathname:T,search:c,hash:d,state:g,key:m},navigationType:i}},[a,h,c,d,g,m,i]);return w==null?null:I.createElement(kr.Provider,{value:u},I.createElement(Gu.Provider,{children:n,value:w}))}function qT(t){let{children:e,location:n}=t;return DT(Nd(e),n)}new Promise(()=>{});function Nd(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,Nd(r.props.children,s));return}r.type!==Gs&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Nd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xd.apply(this,arguments)}function YT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function QT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JT(t,e){return t.button===0&&(!e||e==="_self")&&!QT(t)}const XT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ZT="6";try{window.__reactRouterVersion=ZT}catch{}const ek="startTransition",u0=KC[ek];function tk(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=sT({window:i,v5Compat:!0}));let o=s.current,[l,a]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=I.useCallback(c=>{u&&u0?u0(()=>a(c)):a(c)},[a,u]);return I.useLayoutEffect(()=>o.listen(h),[o,h]),I.createElement(KT,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const nk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jl=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h,unstable_viewTransition:c}=e,d=YT(e,XT),{basename:g}=I.useContext(kr),m,w=!1;if(typeof u=="string"&&rk.test(u)&&(m=u,nk))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),N=cp(E.pathname,g);E.origin===v.origin&&N!=null?u=N+E.search+E.hash:w=!0}catch{}let T=PT(u,{relative:i}),p=ik(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,unstable_viewTransition:c});function f(v){r&&r(v),v.defaultPrevented||p(v)}return I.createElement("a",xd({},d,{href:m||T,onClick:w||s?r:f,ref:n,target:a}))});var c0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(c0||(c0={}));var h0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(h0||(h0={}));function ik(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=Ku(),u=ll(),h=k1(t,{relative:o});return I.useCallback(c=>{if(JT(c,n)){c.preventDefault();let d=r!==void 0?r:Ga(u)===Ga(h);a(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,h,r,i,n,t,s,o,l])}var d0={};/**
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
 */const N1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw ys(e)},ys=function(t){return new Error("Firebase Database ("+N1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const x1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(d=64)),r.push(n[h],n[c],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new ok;const d=s<<2|l>>4;if(r.push(d),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const m=u<<6&192|c;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ok extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P1=function(t){const e=x1(t);return pp.encodeByteArray(e,!0)},qa=function(t){return P1(t).replace(/\./g,"")},Ya=function(t){try{return pp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lk(t){return O1(void 0,t)}function O1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ak(n)||(t[n]=O1(t[n],e[n]));return t}function ak(t){return t!=="__proto__"}/**
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
 */function uk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ck=()=>uk().__FIREBASE_DEFAULTS__,hk=()=>{if(typeof process>"u"||typeof d0>"u")return;const t=d0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ya(t[1]);return e&&JSON.parse(e)},gp=()=>{try{return ck()||hk()||dk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},D1=t=>{var e,n;return(n=(e=gp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fk=t=>{const e=D1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},L1=()=>{var t;return(t=gp())===null||t===void 0?void 0:t.config},M1=t=>{var e;return(e=gp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class al{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qa(JSON.stringify(n)),qa(JSON.stringify(o)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function b1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gk(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function U1(){return N1.NODE_ADMIN===!0}function j1(){try{return typeof indexedDB=="object"}catch{return!1}}function $1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function mk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vk="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vk,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ln(i,l,r)}}function yk(t,e){return t.replace(_k,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _k=/\{\$([^}]+)}/g;/**
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
 */function Do(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
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
 */const V1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Do(Ya(s[0])||""),n=Do(Ya(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},wk=function(t){const e=V1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ek=function(t){const e=V1(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function os(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(f0(s)&&f0(o)){if(!Lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function f0(t){return t!==null&&typeof t=="object"}/**
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
 */function _s(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Ck{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):c<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const d=(i<<5|i>>>27)+u+a+h+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Sk(t,e){const n=new Ik(t,e);return n.subscribe.bind(n)}class Ik{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sh),i.error===void 0&&(i.error=sh),i.complete===void 0&&(i.complete=sh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sh(){}function qu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const kk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Ak=1e3,Rk=2,Nk=4*60*60*1e3,xk=.5;function p0(t,e=Ak,n=Rk){const r=e*Math.pow(n,t),i=Math.round(xk*r*(Math.random()-.5)*2);return Math.min(Nk,r+i)}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class Pk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new al;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dk(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ok(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ok(t){return t===Mr?void 0:t}function Dk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Mk={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},bk=ne.INFO,Fk={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Uk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ul{constructor(e){this.name=e,this._logLevel=bk,this._logHandler=Uk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const jk=(t,e)=>e.some(n=>t instanceof n);let g0,m0;function $k(){return g0||(g0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vk(){return m0||(m0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B1=new WeakMap,Od=new WeakMap,z1=new WeakMap,oh=new WeakMap,vp=new WeakMap;function Bk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&B1.set(n,t)}).catch(()=>{}),vp.set(e,t),e}function zk(t){if(Od.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Od.set(t,e)}let Dd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||z1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wk(t){Dd=t(Dd)}function Hk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lh(this),e,...n);return z1.set(r,e.sort?e.sort():[e]),pr(r)}:Vk().includes(t)?function(...e){return t.apply(lh(this),e),pr(B1.get(this))}:function(...e){return pr(t.apply(lh(this),e))}}function Gk(t){return typeof t=="function"?Hk(t):(t instanceof IDBTransaction&&zk(t),jk(t,$k())?new Proxy(t,Dd):t)}function pr(t){if(t instanceof IDBRequest)return Bk(t);if(oh.has(t))return oh.get(t);const e=Gk(t);return e!==t&&(oh.set(t,e),vp.set(e,t)),e}const lh=t=>vp.get(t);function W1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pr(o.result),a.oldVersion,a.newVersion,pr(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Kk=["get","getKey","getAll","getAllKeys","count"],qk=["put","add","delete","clear"],ah=new Map;function v0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Kk.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ah.set(e,s),s}Wk(t=>({...t,get:(e,n,r)=>v0(e,n)||t.get(e,n,r),has:(e,n)=>!!v0(e,n)||t.has(e,n)}));/**
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
 */class Yk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ld="@firebase/app",y0="0.9.29";/**
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
 */const ni=new ul("@firebase/app"),Jk="@firebase/app-compat",Xk="@firebase/analytics-compat",Zk="@firebase/analytics",e3="@firebase/app-check-compat",t3="@firebase/app-check",n3="@firebase/auth",r3="@firebase/auth-compat",i3="@firebase/database",s3="@firebase/database-compat",o3="@firebase/functions",l3="@firebase/functions-compat",a3="@firebase/installations",u3="@firebase/installations-compat",c3="@firebase/messaging",h3="@firebase/messaging-compat",d3="@firebase/performance",f3="@firebase/performance-compat",p3="@firebase/remote-config",g3="@firebase/remote-config-compat",m3="@firebase/storage",v3="@firebase/storage-compat",y3="@firebase/firestore",_3="@firebase/firestore-compat",w3="firebase",E3="10.9.0";/**
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
 */const Md="[DEFAULT]",C3={[Ld]:"fire-core",[Jk]:"fire-core-compat",[Zk]:"fire-analytics",[Xk]:"fire-analytics-compat",[t3]:"fire-app-check",[e3]:"fire-app-check-compat",[n3]:"fire-auth",[r3]:"fire-auth-compat",[i3]:"fire-rtdb",[s3]:"fire-rtdb-compat",[o3]:"fire-fn",[l3]:"fire-fn-compat",[a3]:"fire-iid",[u3]:"fire-iid-compat",[c3]:"fire-fcm",[h3]:"fire-fcm-compat",[d3]:"fire-perf",[f3]:"fire-perf-compat",[p3]:"fire-rc",[g3]:"fire-rc-compat",[m3]:"fire-gcs",[v3]:"fire-gcs-compat",[y3]:"fire-fst",[_3]:"fire-fst-compat","fire-js":"fire-js",[w3]:"fire-js-all"};/**
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
 */const Ja=new Map,bd=new Map;function S3(t,e){try{t.container.addComponent(e)}catch(n){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function on(t){const e=t.name;if(bd.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;bd.set(e,t);for(const n of Ja.values())S3(n,t);return!0}function fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const I3={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gr=new di("app","Firebase",I3);/**
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
 */class T3{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const pi=E3;function H1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Md,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=L1()),!n)throw gr.create("no-options");const s=Ja.get(i);if(s){if(Lo(n,s.options)&&Lo(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new Lk(i);for(const a of bd.values())o.addComponent(a);const l=new T3(n,r,o);return Ja.set(i,l),l}function yp(t=Md){const e=Ja.get(t);if(!e&&t===Md&&L1())return H1();if(!e)throw gr.create("no-app",{appName:t});return e}function _t(t,e,n){var r;let i=(r=C3[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(l.join(" "));return}on(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const k3="firebase-heartbeat-database",A3=1,Mo="firebase-heartbeat-store";let uh=null;function G1(){return uh||(uh=W1(k3,A3,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),uh}async function R3(t){try{const n=(await G1()).transaction(Mo),r=await n.objectStore(Mo).get(K1(t));return await n.done,r}catch(e){if(e instanceof ln)ni.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ni.warn(n.message)}}}async function _0(t,e){try{const r=(await G1()).transaction(Mo,"readwrite");await r.objectStore(Mo).put(e,K1(t)),await r.done}catch(n){if(n instanceof ln)ni.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ni.warn(r.message)}}}function K1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const N3=1024,x3=30*24*60*60*1e3;class P3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=w0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=x3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=w0(),{heartbeatsToSend:r,unsentEntries:i}=O3(this._heartbeatsCache.heartbeats),s=qa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function w0(){return new Date().toISOString().substring(0,10)}function O3(t,e=N3){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),E0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),E0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j1()?$1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function E0(t){return qa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function L3(t){on(new Bt("platform-logger",e=>new Yk(e),"PRIVATE")),on(new Bt("heartbeat",e=>new P3(e),"PRIVATE")),_t(Ld,y0,t),_t(Ld,y0,"esm2017"),_t("fire-js","")}L3("");var M3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,_p=_p||{},W=M3||self;function Qu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function cl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function b3(t){return Object.prototype.hasOwnProperty.call(t,ch)&&t[ch]||(t[ch]=++F3)}var ch="closure_uid_"+(1e9*Math.random()>>>0),F3=0;function U3(t,e,n){return t.call.apply(t.bind,arguments)}function j3(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=U3:Ze=j3,Ze.apply(null,arguments)}function Xl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(r,o)}}function Rr(){this.s=this.s,this.o=this.o}var $3=0;Rr.prototype.s=!1;Rr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),$3!=0)&&b3(this)};Rr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const q1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Qu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var V3=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};W.addEventListener("test",n,e),W.removeEventListener("test",n,e)}catch{}return t}();function bo(t){return/^[\s\xa0]*$/.test(t)}function Ju(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return Ju().indexOf(t)!=-1}function Ep(t){return Ep[" "](t),t}Ep[" "]=function(){};function B3(t,e){var n=MA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var z3=fn("Opera"),Fo=fn("Trident")||fn("MSIE"),Y1=fn("Edge"),Fd=Y1||Fo,Q1=fn("Gecko")&&!(Ju().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),W3=Ju().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge");function J1(){var t=W.document;return t?t.documentMode:void 0}e:{var S0="",hh=function(){var t=Ju();if(Q1)return/rv:([^\);]+)(\)|;)/.exec(t);if(Y1)return/Edge\/([\d\.]+)/.exec(t);if(Fo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(W3)return/WebKit\/(\S+)/.exec(t);if(z3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hh&&(S0=hh?hh[1]:""),Fo){var I0=J1();if(I0!=null&&I0>parseFloat(S0))break e}}W.document&&Fo&&J1();function Uo(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Q1){e:{try{Ep(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:H3[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Uo.$.h.call(this)}}je(Uo,et);var H3={2:"touch",3:"pen",4:"mouse"};Uo.prototype.h=function(){Uo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hl="closure_listenable_"+(1e6*Math.random()|0),G3=0;function K3(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++G3,this.fa=this.ia=!1}function Xu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Cp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function q3(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function X1(t){const e={};for(const n in t)e[n]=t[n];return e}const T0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Z1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<T0.length;s++)n=T0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zu(t){this.src=t,this.g={},this.h=0}Zu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=jd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new K3(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ud(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=q1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Sp="closure_lm_"+(1e6*Math.random()|0),dh={};function e2(t,e,n,r,i){if(r&&r.once)return n2(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)e2(t,e[s],n,r,i);return null}return n=kp(n),t&&t[hl]?t.O(e,n,cl(r)?!!r.capture:!!r,i):t2(t,e,n,!1,r,i)}function t2(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=cl(i)?!!i.capture:!!i,l=Tp(t);if(l||(t[Sp]=l=new Zu(t)),n=l.add(e,n,r,o,s),n.proxy)return n;if(r=Y3(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)V3||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(i2(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Y3(){function t(n){return e.call(t.src,t.listener,n)}const e=Q3;return t}function n2(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)n2(t,e[s],n,r,i);return null}return n=kp(n),t&&t[hl]?t.P(e,n,cl(r)?!!r.capture:!!r,i):t2(t,e,n,!0,r,i)}function r2(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)r2(t,e[s],n,r,i);else r=cl(r)?!!r.capture:!!r,n=kp(n),t&&t[hl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=jd(s,n,r,i),-1<n&&(Xu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Tp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jd(e,n,r,i)),(n=-1<t?e[t]:null)&&Ip(n))}function Ip(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[hl])Ud(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(i2(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tp(e))?(Ud(n,t),n.h==0&&(n.src=null,e[Sp]=null)):Xu(t)}}}function i2(t){return t in dh?dh[t]:dh[t]="on"+t}function Q3(t,e){if(t.fa)t=!0;else{e=new Uo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ip(t),t=n.call(r,e)}return t}function Tp(t){return t=t[Sp],t instanceof Zu?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function kp(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function Ue(){Rr.call(this),this.i=new Zu(this),this.S=this,this.J=null}je(Ue,Rr);Ue.prototype[hl]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){r2(this,t,e,n,r)};function We(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;e=new et(r,t),Z1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Zl(o,r,!0,e)&&i}if(o=e.g=t,i=Zl(o,r,!0,e)&&i,i=Zl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Zl(o,r,!1,e)&&i}Ue.prototype.N=function(){if(Ue.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xu(n[r]);delete t.g[e],t.h--}}this.J=null};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Zl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Ud(t.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ap=W.JSON.stringify;class J3{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function X3(){var t=Rp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Z3{constructor(){this.h=this.g=null}add(e,n){const r=s2.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var s2=new J3(()=>new eA,t=>t.reset());class eA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function nA(t){W.setTimeout(()=>{throw t},0)}let jo,$o=!1,Rp=new Z3,o2=()=>{const t=W.Promise.resolve(void 0);jo=()=>{t.then(rA)}};var rA=()=>{for(var t;t=X3();){try{t.h.call(t.g)}catch(n){nA(n)}var e=s2;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$o=!1};function ec(t,e){Ue.call(this),this.h=t||1,this.g=e||W,this.j=Ze(this.qb,this),this.l=Date.now()}je(ec,Ue);P=ec.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(Np(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Np(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){ec.$.N.call(this),Np(this),delete this.g};function xp(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function l2(t){t.g=xp(()=>{t.g=null,t.i&&(t.i=!1,l2(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class iA extends Rr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:l2(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vo(t){Rr.call(this),this.h=t,this.g={}}je(Vo,Rr);var k0=[];function a2(t,e,n,r){Array.isArray(n)||(n&&(k0[0]=n.toString()),n=k0);for(var i=0;i<n.length;i++){var s=e2(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function u2(t){Cp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ip(e)},t),t.g={}}Vo.prototype.N=function(){Vo.$.N.call(this),u2(this)};Vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tc(){this.g=!0}tc.prototype.Ea=function(){this.g=!1};function sA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function oA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Mi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aA(t,n)+(r?" "+r:"")})}function lA(t,e){t.info(function(){return"TIMEOUT: "+e})}tc.prototype.info=function(){};function aA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ap(n)}catch{return e}}var ws={},A0=null;function Pp(){return A0=A0||new Ue}ws.Ta="serverreachability";function c2(t){et.call(this,ws.Ta,t)}je(c2,et);function Bo(t){const e=Pp();We(e,new c2(e))}ws.STAT_EVENT="statevent";function h2(t,e){et.call(this,ws.STAT_EVENT,t),this.stat=e}je(h2,et);function ot(t){const e=Pp();We(e,new h2(e,t))}ws.Ua="timingevent";function d2(t,e){et.call(this,ws.Ua,t),this.size=e}je(d2,et);function dl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Op={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Dp(){}Dp.prototype.h=null;function R0(t){return t.h||(t.h=t.i())}function cA(){}var fl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lp(){et.call(this,"d")}je(Lp,et);function Mp(){et.call(this,"c")}je(Mp,et);var $d;function nc(){}je(nc,Dp);nc.prototype.g=function(){return new XMLHttpRequest};nc.prototype.i=function(){return{}};$d=new nc;function pl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Vo(this),this.P=hA,t=Fd?125:void 0,this.V=new ec(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new f2}function f2(){this.i=null,this.g="",this.h=!1}var hA=45e3,p2={},Vd={};P=pl.prototype;P.setTimeout=function(t){this.P=t};function Bd(t,e,n){t.L=1,t.A=ic(Vn(e)),t.u=n,t.S=!0,g2(t,null)}function g2(t,e){t.G=Date.now(),gl(t),t.B=Vn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),S2(n.i,"t",r),t.o=0,n=t.l.J,t.h=new f2,t.g=W2(t.l,n?e:null,!t.u),0<t.O&&(t.M=new iA(Ze(t.Pa,t,t.g),t.O)),a2(t.U,t.g,"readystatechange",t.nb),e=t.I?X1(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Bo(),sA(t.j,t.v,t.B,t.m,t.W,t.u)}P.nb=function(t){t=t.target;const e=this.M;e&&pn(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const h=pn(this.g);var e=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||Fd||this.g&&(this.h.h||this.g.ja()||O0(this.g)))){this.J||h!=4||e==7||(e==8||0>=c?Bo(3):Bo(2)),rc(this);var n=this.g.da();this.ca=n;t:if(m2(this)){var r=O0(this.g);t="";var i=r.length,s=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),oo(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,oA(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bo(l)){var u=l;break t}}u=null}if(n=u)Mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zd(this,n);else{this.i=!1,this.s=3,ot(12),Vr(this),oo(this);break e}}this.S?(v2(this,h,o),Fd&&this.i&&h==3&&(a2(this.U,this.V,"tick",this.mb),this.V.start())):(Mi(this.j,this.m,o,null),zd(this,o)),h==4&&Vr(this),this.i&&!this.J&&(h==4?$2(this.l,this):(this.i=!1,gl(this)))}else OA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Vr(this),oo(this)}}}catch{}finally{}};function m2(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function v2(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=dA(t,n),i==Vd){e==4&&(t.s=4,ot(14),r=!1),Mi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==p2){t.s=4,ot(15),Mi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Mi(t.j,t.m,i,null),zd(t,i);m2(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vp(e),e.M=!0,ot(11))):(Mi(t.j,t.m,n,"[Invalid Chunked Response]"),Vr(t),oo(t))}P.mb=function(){if(this.g){var t=pn(this.g),e=this.g.ja();this.o<e.length&&(rc(this),v2(this,t,e),this.i&&t!=4&&gl(this))}};function dA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Vd:(n=Number(e.substring(n,r)),isNaN(n)?p2:(r+=1,r+n>e.length?Vd:(e=e.slice(r,r+n),t.o=r+n,e)))}P.cancel=function(){this.J=!0,Vr(this)};function gl(t){t.Y=Date.now()+t.P,y2(t,t.P)}function y2(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=dl(Ze(t.lb,t),e)}function rc(t){t.C&&(W.clearTimeout(t.C),t.C=null)}P.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(lA(this.j,this.B),this.L!=2&&(Bo(),ot(17)),Vr(this),this.s=2,oo(this)):y2(this,this.Y-t)};function oo(t){t.l.H==0||t.J||$2(t.l,t)}function Vr(t){rc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Np(t.V),u2(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function zd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Wd(n.i,t))){if(!t.K&&Wd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)eu(n),ac(n);else break e;$p(n),ot(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=dl(Ze(n.ib,n),6e3));if(1>=k2(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Br(n,11)}else if((t.K||n.g==t)&&eu(n),!bo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const c=u[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bp(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,he(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=z2(r,r.J?r.pa:null,r.Y),o.K){A2(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.C&&(rc(l),gl(l)),r.g=o}else U2(r);0<n.j.length&&uc(n)}else u[0]!="stop"&&u[0]!="close"||Br(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Br(n,7):jp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Bo(4)}catch{}}function fA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Qu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function pA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Qu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function _2(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Qu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pA(t),r=fA(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var w2=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qr){this.h=t.h,Xa(this,t.j),this.s=t.s,this.g=t.g,Za(this,t.m),this.l=t.l;var e=t.i,n=new zo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),N0(this,n),this.o=t.o}else t&&(e=String(t).match(w2))?(this.h=!1,Xa(this,e[1]||"",!0),this.s=Ys(e[2]||""),this.g=Ys(e[3]||"",!0),Za(this,e[4]),this.l=Ys(e[5]||"",!0),N0(this,e[6]||"",!0),this.o=Ys(e[7]||"")):(this.h=!1,this.i=new zo(null,this.h))}qr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qs(e,x0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qs(e,x0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qs(n,n.charAt(0)=="/"?yA:vA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qs(n,wA)),t.join("")};function Vn(t){return new qr(t)}function Xa(t,e,n){t.j=n?Ys(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Za(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function N0(t,e,n){e instanceof zo?(t.i=e,EA(t.i,t.h)):(n||(e=Qs(e,_A)),t.i=new zo(e,t.h))}function he(t,e,n){t.i.set(e,n)}function ic(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ys(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var x0=/[#\/\?@]/g,vA=/[#\?:]/g,yA=/[#\?]/g,_A=/[#\?@]/g,wA=/#/g;function zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Nr(t){t.g||(t.g=new Map,t.h=0,t.i&&gA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=zo.prototype;P.add=function(t,e){Nr(this),this.i=null,t=Es(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function E2(t,e){Nr(t),e=Es(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function C2(t,e){return Nr(t),e=Es(t,e),t.g.has(e)}P.forEach=function(t,e){Nr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){Nr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Nr(this);let e=[];if(typeof t=="string")C2(this,t)&&(e=e.concat(this.g.get(Es(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Nr(this),this.i=null,t=Es(this,t),C2(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function S2(t,e,n){E2(t,e),0<n.length&&(t.i=null,t.g.set(Es(t,e),wp(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Es(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function EA(t,e){e&&!t.j&&(Nr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(E2(this,r),S2(this,i,n))},t)),t.j=e}var CA=class{constructor(t,e){this.g=t,this.map=e}};function I2(t){this.l=t||SA,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SA=10;function T2(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function k2(t){return t.h?1:t.g?t.g.size:0}function Wd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bp(t,e){t.g?t.g.add(e):t.h=e}function A2(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}I2.prototype.cancel=function(){if(this.i=R2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function R2(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return wp(t.i)}var IA=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function TA(){this.g=new IA}function kA(t,e,n){const r=n||"";try{_2(t,function(i,s){let o=i;cl(i)&&(o=Ap(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function AA(t,e){const n=new tc;if(W.Image){const r=new Image;r.onload=Xl(ea,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xl(ea,n,r,"TestLoadImage: error",!1,e),r.onabort=Xl(ea,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xl(ea,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ea(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function sc(t){this.l=t.ec||null,this.j=t.ob||!1}je(sc,Dp);sc.prototype.g=function(){return new oc(this.l,this.j)};sc.prototype.i=function(t){return function(){return t}}({});function oc(t,e){Ue.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Fp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(oc,Ue);var Fp=0;P=oc.prototype;P.open=function(t,e){if(this.readyState!=Fp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wo(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ml(this)),this.readyState=Fp};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;N2(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function N2(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ml(this):Wo(this),this.readyState==3&&N2(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,ml(this))};P.Ya=function(t){this.g&&(this.response=t,ml(this))};P.ka=function(){this.g&&ml(this)};function ml(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wo(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RA=W.JSON.parse;function Ie(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=x2,this.L=this.M=!1}je(Ie,Ue);var x2="",NA=/^https?$/i,xA=["POST","PUT"];P=Ie.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$d.g(),this.C=this.u?R0(this.u):R0($d),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){P0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=q1(xA,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{D2(this),0<this.B&&((this.L=PA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=xp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){P0(this,s)}};function PA(t){return Fo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof _p<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function P0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,P2(t),lc(t)}function P2(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),lc(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lc(this,!0)),Ie.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?O2(this):this.kb())};P.kb=function(){O2(this)};function O2(t){if(t.h&&typeof _p<"u"&&(!t.C[1]||pn(t)!=4||t.da()!=2)){if(t.v&&pn(t)==4)xp(t.La,0,t);else if(We(t,"readystatechange"),pn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(w2)[1]||null;!i&&W.self&&W.self.location&&(i=W.self.location.protocol.slice(0,-1)),r=!NA.test(i?i.toLowerCase():"")}n=r}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var s=2<pn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",P2(t)}}finally{lc(t)}}}}function lc(t,e){if(t.g){D2(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=r}catch{}}}function D2(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function pn(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RA(e)}};function O0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case x2:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function OA(t){const e={};t=(t.g&&2<=pn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(bo(t[r]))continue;var n=tA(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}q3(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function L2(t){let e="";return Cp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Up(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=L2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function M2(t){this.Ga=0,this.j=[],this.l=new tc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ms("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ms("baseRetryDelayMs",5e3,t),this.hb=Ms("retryDelaySeedMs",1e4,t),this.eb=Ms("forwardChannelMaxRetries",2,t),this.xa=Ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new I2(t&&t.concurrentRequestLimit),this.Ja=new TA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=M2.prototype;P.ra=8;P.H=1;function jp(t){if(b2(t),t.H==3){var e=t.W++,n=Vn(t.I);if(he(n,"SID",t.K),he(n,"RID",e),he(n,"TYPE","terminate"),vl(t,n),e=new pl(t,t.l,e),e.L=2,e.A=ic(Vn(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.A,n=!0),n||(e.g=W2(e.l,null),e.g.ha(e.A)),e.G=Date.now(),gl(e)}B2(t)}function ac(t){t.g&&(Vp(t),t.g.cancel(),t.g=null)}function b2(t){ac(t),t.u&&(W.clearTimeout(t.u),t.u=null),eu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function uc(t){if(!T2(t.i)&&!t.m){t.m=!0;var e=t.Na;jo||o2(),$o||(jo(),$o=!0),Rp.add(e,t),t.C=0}}function DA(t,e){return k2(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=dl(Ze(t.Na,t,e),V2(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new pl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=X1(s),Z1(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=F2(this,i,e),n=Vn(this.I),he(n,"RID",t),he(n,"CVER",22),this.F&&he(n,"X-HTTP-Session-Id",this.F),vl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(L2(s)))+"&"+e:this.o&&Up(n,this.o,s)),bp(this.i,i),this.bb&&he(n,"TYPE","init"),this.P?(he(n,"$req",e),he(n,"SID","null"),i.aa=!0,Bd(i,n,null)):Bd(i,n,e),this.H=2}}else this.H==3&&(t?D0(this,t):this.j.length==0||T2(this.i)||D0(this))};function D0(t,e){var n;e?n=e.m:n=t.W++;const r=Vn(t.I);he(r,"SID",t.K),he(r,"RID",n),he(r,"AID",t.V),vl(t,r),t.o&&t.s&&Up(r,t.o,t.s),n=new pl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=F2(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),bp(t.i,n),Bd(n,r,e)}function vl(t,e){t.na&&Cp(t.na,function(n,r){he(e,r,n)}),t.h&&_2({},function(n,r){he(e,r,n)})}function F2(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ze(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const h=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{kA(h,o,"req"+u+"_")}catch{r&&r(h)}}if(l){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function U2(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;jo||o2(),$o||(jo(),$o=!0),Rp.add(e,t),t.A=0}}function $p(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=dl(Ze(t.Ma,t),V2(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,j2(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=dl(Ze(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),ac(this),j2(this))};function Vp(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function j2(t){t.g=new pl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Vn(t.wa);he(e,"RID","rpc"),he(e,"SID",t.K),he(e,"AID",t.V),he(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&he(e,"TO",t.qa),he(e,"TYPE","xmlhttp"),vl(t,e),t.o&&t.s&&Up(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ic(Vn(e)),n.u=null,n.S=!0,g2(n,t)}P.ib=function(){this.v!=null&&(this.v=null,ac(this),$p(this),ot(19))};function eu(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function $2(t,e){var n=null;if(t.g==e){eu(t),Vp(t),t.g=null;var r=2}else if(Wd(t.i,e))n=e.F,A2(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Pp(),We(r,new d2(r,n)),uc(t)}else U2(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&DA(t,e)||r==2&&$p(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Br(t,5);break;case 4:Br(t,10);break;case 3:Br(t,6);break;default:Br(t,2)}}}function V2(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Br(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ze(t.pb,t);n||(n=new qr("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Xa(n,"https"),ic(n)),AA(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),B2(t),b2(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function B2(t){if(t.H=0,t.ma=[],t.h){const e=R2(t.i);(e.length!=0||t.j.length!=0)&&(C0(t.ma,e),C0(t.ma,t.j),t.i.i.length=0,wp(t.j),t.j.length=0),t.h.ya()}}function z2(t,e,n){var r=n instanceof qr?Vn(n):new qr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Za(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new qr(null);r&&Xa(s,r),e&&(s.g=e),i&&Za(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&he(r,n,e),he(r,"VER",t.ra),vl(t,r),r}function W2(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ie(new sc({ob:n})):new Ie(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function H2(){}P=H2.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function zt(t,e){Ue.call(this),this.g=new M2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!bo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}je(zt,Ue);zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=z2(t,null,t.Y),uc(t)};zt.prototype.close=function(){jp(this.g)};zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ap(t),t=n);e.j.push(new CA(e.fb++,t)),e.H==3&&uc(e)};zt.prototype.N=function(){this.g.h=null,delete this.j,jp(this.g),delete this.g,zt.$.N.call(this)};function G2(t){Lp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(G2,Lp);function K2(){Mp.call(this),this.status=1}je(K2,Mp);function Cs(t){this.g=t}je(Cs,H2);Cs.prototype.Ba=function(){We(this.g,"a")};Cs.prototype.Aa=function(t){We(this.g,new G2(t))};Cs.prototype.za=function(t){We(this.g,new K2)};Cs.prototype.ya=function(){We(this.g,"b")};function LA(){this.blockSize=-1}function En(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}je(En,LA);En.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ph(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}En.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ph(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ph(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ph(this,r),i=0;break}}this.h=i,this.i+=e};En.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var MA={};function Bp(t){return-128<=t&&128>t?B3(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function gn(t){if(isNaN(t)||!isFinite(t))return Gi;if(0>t)return Ve(gn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Hd;return new ie(e,0)}function q2(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ve(q2(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gn(Math.pow(e,8)),r=Gi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=gn(Math.pow(e,s)),r=r.R(s).add(gn(o))):(r=r.R(n),r=r.add(gn(o)))}return r}var Hd=4294967296,Gi=Bp(0),Gd=Bp(1),L0=Bp(16777216);P=ie.prototype;P.ea=function(){if(bt(this))return-Ve(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Hd+r)*e,e*=Hd}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Pn(this))return"0";if(bt(this))return"-"+Ve(this).toString(t);for(var e=gn(Math.pow(t,6)),n=this,r="";;){var i=nu(n,e).g;n=tu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Pn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bt(t){return t.h==-1}P.X=function(t){return t=tu(this,t),bt(t)?-1:Pn(t)?0:1};function Ve(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(Gd)}P.abs=function(){return bt(this)?Ve(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function tu(t,e){return t.add(Ve(e))}P.R=function(t){if(Pn(this)||Pn(t))return Gi;if(bt(this))return bt(t)?Ve(this).R(Ve(t)):Ve(Ve(this).R(t));if(bt(t))return Ve(this.R(Ve(t)));if(0>this.X(L0)&&0>t.X(L0))return gn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=t.D(i)>>>16,a=t.D(i)&65535;n[2*r+2*i]+=o*a,ta(n,2*r+2*i),n[2*r+2*i+1]+=s*a,ta(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,ta(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,ta(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function ta(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function bs(t,e){this.g=t,this.h=e}function nu(t,e){if(Pn(e))throw Error("division by zero");if(Pn(t))return new bs(Gi,Gi);if(bt(t))return e=nu(Ve(t),e),new bs(Ve(e.g),Ve(e.h));if(bt(e))return e=nu(t,Ve(e)),new bs(Ve(e.g),e.h);if(30<t.g.length){if(bt(t)||bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Gd,r=e;0>=r.X(t);)n=M0(n),r=M0(r);var i=wi(n,1),s=wi(r,1);for(r=wi(r,2),n=wi(n,2);!Pn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=wi(r,1),n=wi(n,1)}return e=tu(t,i.R(e)),new bs(i,e)}for(i=Gi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gn(n),o=s.R(e);bt(o)||0<o.X(t);)n-=r,s=gn(n),o=s.R(e);Pn(s)&&(s=Gd),i=i.add(s),t=tu(t,o)}return new bs(i,t)}P.gb=function(t){return nu(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function M0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function wi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;Op.NO_ERROR=0;Op.TIMEOUT=8;Op.HTTP_ERROR=6;uA.COMPLETE="complete";cA.EventType=fl;fl.OPEN="a";fl.CLOSE="b";fl.ERROR="c";fl.MESSAGE="d";Ue.prototype.listen=Ue.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;En.prototype.digest=En.prototype.l;En.prototype.reset=En.prototype.reset;En.prototype.update=En.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=gn;ie.fromString=q2;var bA=ie;const b0="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let cc="10.9.0";/**
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
 */const ru=new ul("@firebase/firestore");function At(t,...e){if(ru.logLevel<=ne.DEBUG){const n=e.map(Y2);ru.debug(`Firestore (${cc}): ${t}`,...n)}}function zp(t,...e){if(ru.logLevel<=ne.ERROR){const n=e.map(Y2);ru.error(`Firestore (${cc}): ${t}`,...n)}}function Y2(t){if(typeof t=="string")return t;try{/**
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
 */function Q2(t="Unexpected state"){const e=`FIRESTORE (${cc}) INTERNAL ASSERTION FAILED: `+t;throw zp(e),new Error(e)}function Kd(t,e){t||Q2()}/**
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
 */const It={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Tt extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ki{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class FA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class jA{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new Ki;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ki,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{At("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(At("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ki)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(At("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Kd(typeof r.accessToken=="string"),new FA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Kd(e===null||typeof e=="string"),new dt(e)}}class $A{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $A(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&At("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,At("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{At("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):At("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Kd(typeof n.token=="string"),this.R=n.token,new BA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function WA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class HA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J2(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class GA{constructor(e,n,r,i,s,o,l,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class iu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new iu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof iu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var F0,Z;(Z=F0||(F0={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new bA([4294967295,4294967295],0);function gh(){return typeof document<"u"?document:null}/**
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
 */class KA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&At("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Wp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Wp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Tt(It.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qA(t,e){if(zp("AsyncQueue",`${e}: ${t}`),J2(t))return new Tt(It.UNAVAILABLE,`${e}: ${t}`);throw t}var U0,j0;(j0=U0||(U0={})).j_="default",j0.Cache="cache";/**
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
 */class YA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=HA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{At("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(At("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Tt(It.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qA(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function X2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $0=new Map;function QA(t,e,n,r){if(e===!0&&r===!0)throw new Tt(It.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class V0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Tt(It.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Tt(It.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X2((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Tt(It.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Tt(It.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Tt(It.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class JA{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new V0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Tt(It.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Tt(It.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new V0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UA;switch(r.type){case"firstParty":return new VA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Tt(It.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$0.get(n);r&&(At("ComponentProvider","Removing Datastore"),$0.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class XA{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new KA(this,"async_queue_retry"),this.cu=()=>{const n=gh();n&&At("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Ki;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!J2(e))throw e;At("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zp("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=Wp.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&Q2()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class ZA extends JA{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new XA}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||e4(this),this._firestoreClient.terminate()}}function e4(t){var e,n,r;const i=t._freezeSettings(),s=function(l,a,u,h){return new GA(l,a,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,X2(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new YA(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){cc=i})(pi),on(new Bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ZA(new jA(r.getProvider("auth-internal")),new zA(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Tt(It.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new iu(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),_t(b0,"4.5.0",e),_t(b0,"4.5.0","esm2017")})();function Hp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Z2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t4=Z2,ew=new di("auth","Firebase",Z2());/**
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
 */const su=new ul("@firebase/auth");function n4(t,...e){su.logLevel<=ne.WARN&&su.warn(`Auth (${pi}): ${t}`,...e)}function va(t,...e){su.logLevel<=ne.ERROR&&su.error(`Auth (${pi}): ${t}`,...e)}/**
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
 */function Wt(t,...e){throw Gp(t,...e)}function _n(t,...e){return Gp(t,...e)}function tw(t,e,n){const r=Object.assign(Object.assign({},t4()),{[e]:n});return new di("auth","Firebase",r).create(e,{appName:t.name})}function nw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Wt(t,"argument-error"),tw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ew.create(t,...e)}function z(t,e,...n){if(!t)throw Gp(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw va(e),new Error(e)}function Bn(t,e){t||On(e)}/**
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
 */function qd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function r4(){return B0()==="http:"||B0()==="https:"}function B0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function i4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r4()||b1()||"connection"in navigator)?navigator.onLine:!0}function s4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=mp()||F1()}get(){return i4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kp(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const o4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const l4=new yl(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pr(t,e,n,r,i={}){return iw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=_s(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),rw.fetch()(sw(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function iw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},o4),e);try{const i=new u4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw na(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw na(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw na(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tw(t,h,u);Wt(t,h)}}catch(i){if(i instanceof ln)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function _l(t,e,n,r,i={}){const s=await Pr(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kp(t.config,i):`${t.config.apiScheme}://${i}`}function a4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class u4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),l4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}function z0(t){return t!==void 0&&t.enterprise!==void 0}class c4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return a4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function h4(t,e){return Pr(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
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
 */async function d4(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function f4(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function p4(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=qp(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lo(mh(i.auth_time)),issuedAtTime:lo(mh(i.iat)),expirationTime:lo(mh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mh(t){return Number(t)*1e3}function qp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return va("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ya(n);return i?JSON.parse(i):(va("Failed to decode base64 JWT payload"),null)}catch(i){return va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function g4(t){const e=qp(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&m4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class v4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ow{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ou(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ho(t,f4(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?w4(s.providerUserInfo):[],l=_4(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ow(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function y4(t){const e=qe(t);await ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function w4(t){return t.map(e=>{var{providerId:n}=e,r=Hp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function E4(t,e){const n=await iw(t,{},async()=>{const r=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",rw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function C4(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
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
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):g4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await E4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Go;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function Kn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ow(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return p4(this,e)}reload(){return y4(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ho(this,d4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:E,isAnonymous:N,providerData:L,stsTokenManager:x}=n;z(v&&x,e,"internal-error");const b=Go.fromJSON(this.name,x);z(typeof v=="string",e,"internal-error"),Kn(c,e.name),Kn(d,e.name),z(typeof E=="boolean",e,"internal-error"),z(typeof N=="boolean",e,"internal-error"),Kn(g,e.name),Kn(m,e.name),Kn(w,e.name),Kn(T,e.name),Kn(p,e.name),Kn(f,e.name);const K=new Yr({uid:v,auth:e,email:d,emailVerified:E,displayName:c,isAnonymous:N,photoURL:m,phoneNumber:g,tenantId:w,stsTokenManager:b,createdAt:p,lastLoginAt:f});return L&&Array.isArray(L)&&(K.providerData=L.map(H=>Object.assign({},H))),T&&(K._redirectEventId=T),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new Go;i.updateFromServerResponse(n);const s=new Yr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ou(s),s}}/**
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
 */const W0=new Map;function Dn(t){Bn(t instanceof Function,"Expected a class definition");let e=W0.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,W0.set(t,e),e)}/**
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
 */class lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lw.type="NONE";const H0=lw;/**
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
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(Dn(H0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Dn(H0);const o=ya(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const c=Yr._fromJSON(e,h);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new qi(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new qi(s,e,r))}}/**
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
 */function G0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dw(e))return"Blackberry";if(fw(e))return"Webos";if(Yp(e))return"Safari";if((e.includes("chrome/")||uw(e))&&!e.includes("edge/"))return"Chrome";if(hw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aw(t=nt()){return/firefox\//i.test(t)}function Yp(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uw(t=nt()){return/crios\//i.test(t)}function cw(t=nt()){return/iemobile/i.test(t)}function hw(t=nt()){return/android/i.test(t)}function dw(t=nt()){return/blackberry/i.test(t)}function fw(t=nt()){return/webos/i.test(t)}function hc(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function S4(t=nt()){var e;return hc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function I4(){return gk()&&document.documentMode===10}function pw(t=nt()){return hc(t)||hw(t)||fw(t)||dw(t)||/windows phone/i.test(t)||cw(t)}function T4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gw(t,e=[]){let n;switch(t){case"Browser":n=G0(nt());break;case"Worker":n=`${G0(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}/**
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
 */class k4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function A4(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
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
 */const R4=6;class N4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:R4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class x4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new K0(this),this.idTokenSubscription=new K0(this),this.beforeStateQueue=new k4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ew,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A4(this),n=new N4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await C4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hn(t){return qe(t)}class K0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sk(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function P4(t){dc=t}function mw(t){return dc.loadJS(t)}function O4(){return dc.recaptchaEnterpriseScript}function D4(){return dc.gapiScript}function L4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const M4="recaptcha-enterprise",b4="NO_RECAPTCHA";class F4{constructor(e){this.type=M4,this.auth=Hn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{h4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new c4(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;z0(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(b4)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&z0(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=O4();a.length!==0&&(a+=l),mw(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function q0(t,e,n,r=!1){const i=new F4(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Yd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await q0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await q0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function U4(t,e){const n=fi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Lo(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function j4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $4(t,e,n){const r=Hn(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=vw(e),{host:o,port:l}=V4(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||B4()}function vw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V4(t){const e=vw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Y0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Y0(o)}}}function Y0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function B4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function z4(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function W4(t,e){return _l(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
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
 */async function H4(t,e){return _l(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function G4(t,e){return _l(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
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
 */class Ko extends Qp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,n,"signInWithPassword",W4);case"emailLink":return H4(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,r,"signUpPassword",z4);case"emailLink":return G4(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yi(t,e){return _l(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
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
 */const K4="http://localhost";class ri extends Qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:K4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_s(n)}return e}}/**
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
 */function q4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Y4(t){const e=Ks(qs(t)).link,n=e?Ks(qs(e)).deep_link_id:null,r=Ks(qs(t)).deep_link_id;return(r?Ks(qs(r)).link:null)||r||n||e||t}class Jp{constructor(e){var n,r,i,s,o,l;const a=Ks(qs(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,h=(r=a.oobCode)!==null&&r!==void 0?r:null,c=q4((i=a.mode)!==null&&i!==void 0?i:null);z(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Y4(e);try{return new Jp(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jp.parseLink(n);return z(r,"argument-error"),Ko._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wl extends fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends wl{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class Zn extends wl{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends wl{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function Q4(t,e){return _l(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yr._fromIdTokenResponse(e,r,i),o=Q0(r);return new ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Q0(r);return new ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Q0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lu extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,lu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new lu(e,n,r,i)}}function yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?lu._fromErrorAndOperation(t,s,e,r):s})}async function J4(t,e,n=!1){const r=await Ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
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
 */async function X4(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ho(t,yw(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=qp(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
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
 */async function _w(t,e,n=!1){const r="signIn",i=await yw(t,r,e),s=await ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Z4(t,e){return _w(Hn(t),e)}/**
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
 */async function ww(t){const e=Hn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eR(t,e,n){const r=Hn(t),o=await Yd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Q4).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ww(t),a}),l=await ii._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function tR(t,e,n){return Z4(qe(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ww(t),r})}function nR(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function rR(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function Ew(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function iR(t){return qe(t).signOut()}const au="__sak";/**
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
 */class Cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(au,"1"),this.storage.removeItem(au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sR(){const t=nt();return Yp(t)||hc(t)}const oR=1e3,lR=10;class Sw extends Cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sR()&&T4(),this.fallbackToPolling=pw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);I4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sw.type="LOCAL";const aR=Sw;/**
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
 */class Iw extends Cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iw.type="SESSION";const Tw=Iw;/**
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
 */function uR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await uR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
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
 */function Xp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Xp("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function hR(t){wn().location.href=t}/**
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
 */function kw(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function dR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pR(){return kw()?self:null}/**
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
 */const Aw="firebaseLocalStorageDb",gR=1,uu="firebaseLocalStorage",Rw="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gc(t,e){return t.transaction([uu],e?"readwrite":"readonly").objectStore(uu)}function mR(){const t=indexedDB.deleteDatabase(Aw);return new El(t).toPromise()}function Qd(){const t=indexedDB.open(Aw,gR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uu,{keyPath:Rw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uu)?e(r):(r.close(),await mR(),e(await Qd()))})})}async function J0(t,e,n){const r=gc(t,!0).put({[Rw]:e,value:n});return new El(r).toPromise()}async function vR(t,e){const n=gc(t,!1).get(e),r=await new El(n).toPromise();return r===void 0?null:r.value}function X0(t,e){const n=gc(t,!0).delete(e);return new El(n).toPromise()}const yR=800,_R=3;class Nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_R)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(pR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dR(),!this.activeServiceWorker)return;this.sender=new cR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await J0(e,au,"1"),await X0(e,au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>J0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>X0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gc(i,!1).getAll();return new El(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nw.type="LOCAL";const wR=Nw;new yl(3e4,6e4);/**
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
 */function Zp(t,e){return e?Dn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eg extends Qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ER(t){return _w(t.auth,new eg(t),t.bypassAuthState)}function CR(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),X4(n,new eg(t),t.bypassAuthState)}async function SR(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),J4(n,new eg(t),t.bypassAuthState)}/**
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
 */class xw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ER;case"linkViaPopup":case"linkViaRedirect":return SR;case"reauthViaPopup":case"reauthViaRedirect":return CR;default:Wt(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IR=new yl(2e3,1e4);async function TR(t,e,n){const r=Hn(t);nw(t,e,fc);const i=Zp(r,n);return new zr(r,"signInViaPopup",e,i).executeNotNull()}class zr extends xw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IR.get())};e()}}zr.currentPopupAction=null;/**
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
 */const kR="pendingRedirect",_a=new Map;class AR extends xw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await RR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RR(t,e){const n=Ow(e),r=Pw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function NR(t,e){return Pw(t)._set(Ow(e),"true")}function xR(t,e){_a.set(t._key(),e)}function Pw(t){return Dn(t._redirectPersistence)}function Ow(t){return ya(kR,t.config.apiKey,t.name)}/**
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
 */function PR(t,e,n){return OR(t,e,n)}async function OR(t,e,n){const r=Hn(t);nw(t,e,fc),await r._initializationPromise;const i=Zp(r,n);return await NR(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function DR(t,e,n=!1){const r=Hn(t),i=Zp(r,e),o=await new AR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LR=10*60*1e3;class MR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Z0(e))}saveEventToCache(e){this.cachedEventUids.add(Z0(e)),this.lastProcessedEventTime=Date.now()}}function Z0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dw(t);default:return!1}}/**
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
 */async function FR(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
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
 */const UR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jR=/^https?/;async function $R(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FR(t);for(const n of e)try{if(VR(n))return}catch{}Wt(t,"unauthorized-domain")}function VR(t){const e=qd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jR.test(n))return!1;if(UR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const BR=new yl(3e4,6e4);function ev(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zR(t){return new Promise((e,n)=>{var r,i,s;function o(){ev(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ev(),n(_n(t,"network-request-failed"))},timeout:BR.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const l=L4("iframefcb");return wn()[l]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},mw(`${D4()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw wa=null,e})}let wa=null;function WR(t){return wa=wa||zR(t),wa}/**
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
 */const HR=new yl(5e3,15e3),GR="__/auth/iframe",KR="emulator/auth/iframe",qR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QR(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kp(e,KR):`https://${t.config.authDomain}/${GR}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=YR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_s(r).slice(1)}`}async function JR(t){const e=await WR(t),n=wn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:QR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=wn().setTimeout(()=>{s(o)},HR.get());function a(){wn().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZR=500,eN=600,tN="_blank",nN="http://localhost";class tv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rN(t,e,n,r=ZR,i=eN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},XR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=nt().toLowerCase();n&&(l=uw(u)?tN:n),aw(u)&&(e=e||nN,a.scrollbars="yes");const h=Object.entries(a).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(S4(u)&&l!=="_self")return iN(e||"",l),new tv(null);const c=window.open(e||"",l,h);z(c,t,"popup-blocked");try{c.focus()}catch{}return new tv(c)}function iN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sN="__/auth/handler",oN="emulator/auth/handler",lN=encodeURIComponent("fac");async function nv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof fc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries(s||{}))o[h]=c}if(e instanceof wl){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${lN}=${encodeURIComponent(a)}`:"";return`${aN(t)}?${_s(l).slice(1)}${u}`}function aN({config:t}){return t.emulator?Kp(t,oN):`https://${t.authDomain}/${sN}`}/**
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
 */const vh="webStorageSupport";class uN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tw,this._completeRedirectFn=DR,this._overrideRedirectResult=xR}async _openPopup(e,n,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nv(e,n,r,qd(),i);return rN(e,o,Xp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await nv(e,n,r,qd(),i);return hR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JR(e),r=new MR(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vh,{type:vh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vh];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$R(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pw()||Yp()||hc()}}const cN=uN;var rv="@firebase/auth",iv="1.6.2";/**
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
 */class hN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fN(t){on(new Bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gw(t)},u=new x4(r,i,s,a);return j4(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),on(new Bt("auth-internal",e=>{const n=Hn(e.getProvider("auth").getImmediate());return(r=>new hN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(rv,iv,dN(t)),_t(rv,iv,"esm2017")}/**
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
 */const pN=5*60,gN=M1("authIdTokenMaxAge")||pN;let sv=null;const mN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gN)return;const i=n==null?void 0:n.token;sv!==i&&(sv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vN(t=yp()){const e=fi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=U4(t,{popupRedirectResolver:cN,persistence:[wR,aR,Tw]}),r=M1("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=mN(r);rR(n,s,()=>s(n.currentUser)),nR(n,o=>s(o))}const i=D1("auth");return i&&$4(n,`http://${i}`),n}function yN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}P4({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fN("Browser");var _N="firebase",wN="10.9.0";/**
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
 */_t(_N,wN,"app");/*! *****************************************************************************
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
***************************************************************************** */function EN(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(h){try{u(r.next(h))}catch(c){o(c)}}function a(h){try{u(r.throw(h))}catch(c){o(c)}}function u(h){h.done?s(h.value):i(h.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function CN(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(h){return a([u,h])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(h){u=[6,h],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var bi=function(){return bi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},bi.apply(this,arguments)},Lw=function(t){return{loading:t==null,value:t}},SN=function(){return function(t,e){switch(e.type){case"error":return bi(bi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Lw(e.defaultValue);case"value":return bi(bi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},IN=function(t){var e=t?t():void 0,n=I.useReducer(SN(),Lw(e)),r=n[0],i=n[1],s=I.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=I.useCallback(function(a){i({type:"error",error:a})},[]),l=I.useCallback(function(a){i({type:"value",value:a})},[]);return I.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},TN=function(t,e){var n=IN(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return I.useEffect(function(){var a=Ew(t,function(u){return EN(void 0,void 0,void 0,function(){var h;return CN(this,function(c){switch(c.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return c.sent(),[3,4];case 3:return h=c.sent(),s(h),[3,4];case 4:return o(u),[2]}})})},s);return function(){a()}},[t]),[l,i,r]};const Mw="@firebase/installations",tg="0.6.5";/**
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
 */const bw=1e4,Fw=`w:${tg}`,Uw="FIS_v2",kN="https://firebaseinstallations.googleapis.com/v1",AN=60*60*1e3,RN="installations",NN="Installations";/**
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
 */const xN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},si=new di(RN,NN,xN);function jw(t){return t instanceof ln&&t.code.includes("request-failed")}/**
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
 */function $w({projectId:t}){return`${kN}/projects/${t}/installations`}function Vw(t){return{token:t.token,requestStatus:2,expiresIn:ON(t.expiresIn),creationTime:Date.now()}}async function Bw(t,e){const r=(await e.json()).error;return si.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function PN(t,{refreshToken:e}){const n=zw(t);return n.append("Authorization",DN(e)),n}async function Ww(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ON(t){return Number(t.replace("s","000"))}function DN(t){return`${Uw} ${t}`}/**
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
 */async function LN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$w(t),i=zw(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Uw,appId:t.appId,sdkVersion:Fw},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Ww(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Vw(u.authToken)}}else throw await Bw("Create Installation",a)}/**
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
 */function Hw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function MN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const bN=/^[cdef][\w-]{21}$/,Jd="";function FN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=UN(t);return bN.test(n)?n:Jd}catch{return Jd}}function UN(t){return MN(t).substr(0,22)}/**
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
 */const Gw=new Map;function Kw(t,e){const n=mc(t);qw(n,e),jN(n,e)}function qw(t,e){const n=Gw.get(t);if(n)for(const r of n)r(e)}function jN(t,e){const n=$N();n&&n.postMessage({key:t,fid:e}),VN()}let Wr=null;function $N(){return!Wr&&"BroadcastChannel"in self&&(Wr=new BroadcastChannel("[Firebase] FID Change"),Wr.onmessage=t=>{qw(t.data.key,t.data.fid)}),Wr}function VN(){Gw.size===0&&Wr&&(Wr.close(),Wr=null)}/**
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
 */const BN="firebase-installations-database",zN=1,oi="firebase-installations-store";let yh=null;function ng(){return yh||(yh=W1(BN,zN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oi)}}})),yh}async function cu(t,e){const n=mc(t),i=(await ng()).transaction(oi,"readwrite"),s=i.objectStore(oi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Kw(t,e.fid),e}async function Yw(t){const e=mc(t),r=(await ng()).transaction(oi,"readwrite");await r.objectStore(oi).delete(e),await r.done}async function vc(t,e){const n=mc(t),i=(await ng()).transaction(oi,"readwrite"),s=i.objectStore(oi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Kw(t,l.fid),l}/**
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
 */async function rg(t){let e;const n=await vc(t.appConfig,r=>{const i=WN(r),s=HN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Jd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WN(t){const e=t||{fid:FN(),registrationStatus:0};return Qw(e)}function HN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(si.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KN(t)}:{installationEntry:e}}async function GN(t,e){try{const n=await LN(t,e);return cu(t.appConfig,n)}catch(n){throw jw(n)&&n.customData.serverCode===409?await Yw(t.appConfig):await cu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KN(t){let e=await ov(t.appConfig);for(;e.registrationStatus===1;)await Hw(100),e=await ov(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await rg(t);return r||n}return e}function ov(t){return vc(t,e=>{if(!e)throw si.create("installation-not-found");return Qw(e)})}function Qw(t){return qN(t)?{fid:t.fid,registrationStatus:0}:t}function qN(t){return t.registrationStatus===1&&t.registrationTime+bw<Date.now()}/**
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
 */async function YN({appConfig:t,heartbeatServiceProvider:e},n){const r=QN(t,n),i=PN(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Fw,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Ww(()=>fetch(r,l));if(a.ok){const u=await a.json();return Vw(u)}else throw await Bw("Generate Auth Token",a)}function QN(t,{fid:e}){return`${$w(t)}/${e}/authTokens:generate`}/**
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
 */async function ig(t,e=!1){let n;const r=await vc(t.appConfig,s=>{if(!Jw(s))throw si.create("not-registered");const o=s.authToken;if(!e&&ZN(o))return s;if(o.requestStatus===1)return n=JN(t,e),s;{if(!navigator.onLine)throw si.create("app-offline");const l=tx(s);return n=XN(t,l),l}});return n?await n:r.authToken}async function JN(t,e){let n=await lv(t.appConfig);for(;n.authToken.requestStatus===1;)await Hw(100),n=await lv(t.appConfig);const r=n.authToken;return r.requestStatus===0?ig(t,e):r}function lv(t){return vc(t,e=>{if(!Jw(e))throw si.create("not-registered");const n=e.authToken;return nx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function XN(t,e){try{const n=await YN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await cu(t.appConfig,r),n}catch(n){if(jw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yw(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await cu(t.appConfig,r)}throw n}}function Jw(t){return t!==void 0&&t.registrationStatus===2}function ZN(t){return t.requestStatus===2&&!ex(t)}function ex(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AN}function tx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nx(t){return t.requestStatus===1&&t.requestTime+bw<Date.now()}/**
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
 */async function rx(t){const e=t,{installationEntry:n,registrationPromise:r}=await rg(e);return r?r.catch(console.error):ig(e).catch(console.error),n.fid}/**
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
 */async function ix(t,e=!1){const n=t;return await sx(n),(await ig(n,e)).token}async function sx(t){const{registrationPromise:e}=await rg(t);e&&await e}/**
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
 */function ox(t){if(!t||!t.options)throw _h("App Configuration");if(!t.name)throw _h("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _h(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _h(t){return si.create("missing-app-config-values",{valueName:t})}/**
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
 */const Xw="installations",lx="installations-internal",ax=t=>{const e=t.getProvider("app").getImmediate(),n=ox(e),r=fi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ux=t=>{const e=t.getProvider("app").getImmediate(),n=fi(e,Xw).getImmediate();return{getId:()=>rx(n),getToken:i=>ix(n,i)}};function cx(){on(new Bt(Xw,ax,"PUBLIC")),on(new Bt(lx,ux,"PRIVATE"))}cx();_t(Mw,tg);_t(Mw,tg,"esm2017");/**
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
 */const hu="analytics",hx="firebase_id",dx="origin",fx=60*1e3,px="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sg="https://www.googletagmanager.com/gtag/js";/**
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
 */const wt=new ul("@firebase/analytics");/**
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
 */const gx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new di("analytics","Analytics",gx);/**
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
 */function mx(t){if(!t.startsWith(sg)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return wt.warn(e.message),""}return t}function Zw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function vx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function yx(t,e){const n=vx("firebase-js-sdk-policy",{createScriptURL:mx}),r=document.createElement("script"),i=`${sg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function _x(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await Zw(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){wt.error(l)}t("config",i,s)}async function Ex(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Zw(n);for(const a of o){const u=l.find(c=>c.measurementId===a),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){wt.error(s)}}function Cx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await Ex(t,e,n,l,a)}else if(s==="config"){const[l,a]=o;await wx(t,e,n,r,l,a)}else if(s==="consent"){const[l]=o;t("consent","update",l)}else if(s==="get"){const[l,a,u]=o;t("get",l,a,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){wt.error(l)}}return i}function Sx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Cx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Ix(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(sg)&&n.src.includes(t))return n;return null}/**
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
 */const Tx=30,kx=1e3;class Ax{constructor(e={},n=kx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const eE=new Ax;function Rx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Nx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Rx(r)},s=px.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function xx(t,e=eE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Dx;return setTimeout(async()=>{l.abort()},n!==void 0?n:fx),tE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function tE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=eE){var s;const{appId:o,measurementId:l}=t;try{await Px(r,e)}catch(a){if(l)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await Nx(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!Ox(u)){if(i.deleteThrottleMetadata(o),l)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?p0(n,i.intervalMillis,Tx):p0(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,c),wt.debug(`Calling attemptFetch again in ${h} millis`),tE(t,c,r,i)}}function Px(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ox(t){if(!(t instanceof ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Dx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Lx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function Mx(){if(j1())try{await $1()}catch(t){return wt.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return wt.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bx(t,e,n,r,i,s,o){var l;const a=xx(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>wt.error(g)),e.push(a);const u=Mx().then(g=>{if(g)return r.getId()}),[h,c]=await Promise.all([a,u]);Ix(s)||yx(s,h.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[dx]="firebase",d.update=!0,c!=null&&(d[hx]=c),i("config",h.measurementId,d),h.measurementId}/**
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
 */class Fx{constructor(e){this.app=e}_delete(){return delete ao[this.app.options.appId],Promise.resolve()}}let ao={},av=[];const uv={};let wh="dataLayer",Ux="gtag",cv,nE,hv=!1;function jx(){const t=[];if(b1()&&t.push("This is a browser extension environment."),mk()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});wt.warn(n.message)}}function $x(t,e,n){jx();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(ao[r]!=null)throw Nt.create("already-exists",{id:r});if(!hv){_x(wh);const{wrappedGtag:s,gtagCore:o}=Sx(ao,av,uv,wh,Ux);nE=s,cv=o,hv=!0}return ao[r]=bx(t,av,uv,e,cv,wh,n),new Fx(t)}function Vx(t=yp()){t=qe(t);const e=fi(t,hu);return e.isInitialized()?e.getImmediate():Bx(t)}function Bx(t,e={}){const n=fi(t,hu);if(n.isInitialized()){const i=n.getImmediate();if(Lo(e,n.getOptions()))return i;throw Nt.create("already-initialized")}return n.initialize({options:e})}function zx(t,e,n,r){t=qe(t),Lx(nE,ao[t.app.options.appId],e,n,r).catch(i=>wt.error(i))}const dv="@firebase/analytics",fv="0.10.1";function Wx(){on(new Bt(hu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $x(r,i,n)},"PUBLIC")),on(new Bt("analytics-internal",t,"PRIVATE")),_t(dv,fv),_t(dv,fv,"esm2017");function t(e){try{const n=e.getProvider(hu).getImmediate();return{logEvent:(r,i,s)=>zx(n,r,i,s)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}Wx();var pv={};const gv="@firebase/database",mv="1.0.3";/**
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
 */let rE="";function Hx(t){rE=t}/**
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
 */class Gx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Do(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Kx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const iE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Gx(e)}}catch{}return new Kx},Hr=iE("localStorage"),Xd=iE("sessionStorage");/**
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
 */const Qi=new ul("@firebase/database"),qx=function(){let t=1;return function(){return t++}}(),sE=function(t){const e=kk(t),n=new Ck;n.update(e);const r=n.digest();return pp.encodeByteArray(r)},Cl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Cl.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let Qr=null,vv=!0;const Yx=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qi.logLevel=ne.VERBOSE,Qr=Qi.log.bind(Qi),e&&Xd.set("logging_enabled",!0)):typeof t=="function"?Qr=t:(Qr=null,Xd.remove("logging_enabled"))},Be=function(...t){if(vv===!0&&(vv=!1,Qr===null&&Xd.get("logging_enabled")===!0&&Yx(!0)),Qr){const e=Cl.apply(null,t);Qr(e)}},Sl=function(t){return function(...e){Be(t,...e)}},Zd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cl(...t);Qi.error(e)},zn=function(...t){const e=`FIREBASE FATAL ERROR: ${Cl(...t)}`;throw Qi.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+Cl(...t);Qi.warn(e)},Qx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},og=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Jx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ls="[MIN_NAME]",li="[MAX_NAME]",gi=function(t,e){if(t===e)return 0;if(t===ls||e===li)return-1;if(e===ls||t===li)return 1;{const n=yv(t),r=yv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Xx=function(t,e){return t===e?0:t<e?-1:1},Fs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},lg=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=lg(t[e[r]]);return n+="}",n},oE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lE=function(t){R(!og(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},Zx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const nP=new RegExp("^-?(0*)\\d{1,10}$"),rP=-2147483648,iP=2147483647,yv=function(t){if(nP.test(t)){const e=Number(t);if(e>=rP&&e<=iP)return e}return null},Is=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},sP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},uo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class lP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class Ji{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ji.OWNER="owner";/**
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
 */const ag="5",aE="v",uE="s",cE="r",hE="f",dE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fE="ls",pE="p",ef="ac",gE="websocket",mE="long_polling";/**
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
 */class vE{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function aP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yE(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===gE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aP(t)&&(n.ns=t.namespace);const i=[];return Ge(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class uP{constructor(){this.counters_={}}incrementCounter(e,n=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lk(this.counters_)}}/**
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
 */const Eh={},Ch={};function ug(t){const e=t.toString();return Eh[e]||(Eh[e]=new uP),Eh[e]}function cP(t,e){const n=t.toString();return Ch[n]||(Ch[n]=e()),Ch[n]}/**
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
 */class hP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Is(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _v="start",dP="close",fP="pLPCommand",pP="pRTLPCB",_E="id",wE="pw",EE="ser",gP="cb",mP="seg",vP="ts",yP="d",_P="dframe",CE=1870,SE=30,wP=CE-SE,EP=25e3,CP=3e4;class Fi{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Sl(e),this.stats_=ug(n),this.urlFn=a=>(this.appCheckToken&&(a[ef]=this.appCheckToken),yE(n,mE,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CP)),Jx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cg((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_v)this.id=l,this.password=a;else if(o===dP)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[_v]="t",r[EE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[gP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[aE]=ag,this.transportSessionId&&(r[uE]=this.transportSessionId),this.lastSessionId&&(r[fE]=this.lastSessionId),this.applicationId&&(r[pE]=this.applicationId),this.appCheckToken&&(r[ef]=this.appCheckToken),typeof location<"u"&&location.hostname&&dE.test(location.hostname)&&(r[cE]=hE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fi.forceAllow_=!0}static forceDisallow(){Fi.forceDisallow_=!0}static isAvailable(){return Fi.forceAllow_?!0:!Fi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Zx()&&!eP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=P1(n),i=oE(r,wP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[_P]="t",r[_E]=e,r[wE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=qx(),window[fP+this.uniqueCallbackIdentifier]=e,window[pP+this.uniqueCallbackIdentifier]=n,this.myIFrame=cg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Be("frame writing exception"),l.stack&&Be(l.stack),Be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_E]=this.myID,e[wE]=this.myPW,e[EE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+SE+r.length<=CE;){const o=this.pendingSegs.shift();r=r+"&"+mP+i+"="+o.seg+"&"+vP+i+"="+o.ts+"&"+yP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(EP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const SP=16384,IP=45e3;let du=null;typeof MozWebSocket<"u"?du=MozWebSocket:typeof WebSocket<"u"&&(du=WebSocket);class Xt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Sl(this.connId),this.stats_=ug(n),this.connURL=Xt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[aE]=ag,typeof location<"u"&&location.hostname&&dE.test(location.hostname)&&(o[cE]=hE),n&&(o[uE]=n),r&&(o[fE]=r),i&&(o[ef]=i),s&&(o[pE]=s),yE(e,gE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hr.set("previous_websocket_failure",!0);try{let r;U1(),this.mySock=new du(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&du!==null&&!Xt.forceDisallow_}static previouslyFailed(){return Hr.isInMemoryStorage||Hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Do(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=oE(n,SP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
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
 */class qo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fi,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xt&&Xt.isAvailable();let r=n&&!Xt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xt];else{const i=this.transports_=[];for(const s of qo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);qo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qo.globalTransportInitialized_=!1;/**
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
 */const TP=6e4,kP=5e3,AP=10*1024,RP=100*1024,Sh="t",wv="d",NP="s",Ev="r",xP="e",Cv="o",Sv="a",Iv="n",Tv="p",PP="h";class OP{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Sl("c:"+this.id+":"),this.transportManager_=new qo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=uo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sh in e){const n=e[Sh];n===Sv?this.upgradeIfSecondaryHealthy_():n===Ev?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Cv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fs("t",e),r=Fs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Iv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fs("t",e),r=Fs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fs(Sh,e);if(wv in e){const r=e[wv];if(n===PP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Iv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NP?this.onConnectionShutdown_(r):n===Ev?this.onReset_(r):n===xP?Zd("Server Error: "+r):n===Cv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ag!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),uo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):uo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class IE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class TE{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class fu extends TE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fu}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const kv=32,Av=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function te(){return new se("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wr(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function hg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Yo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function we(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return lt(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function LP(t,e){const n=Yo(t,0),r=Yo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=gi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function dg(t,e){if(wr(t)!==wr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wr(t)>wr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class MP{constructor(e,n){this.errorPrefix_=n,this.parts_=Yo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Yu(this.parts_[r]);AE(this)}}function bP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yu(e),AE(t)}function FP(t){const e=t.parts_.pop();t.byteLength_-=Yu(e),t.parts_.length>0&&(t.byteLength_-=1)}function AE(t){if(t.byteLength_>Av)throw new Error(t.errorPrefix_+"has a key path longer than "+Av+" bytes ("+t.byteLength_+").");if(t.parts_.length>kv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kv+") or object contains a cycle "+br(t))}function br(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fg extends TE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fg}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Us=1e3,UP=60*5*1e3,Rv=30*1e3,jP=1.3,$P=3e4,VP="server_kill",Nv=3;class bn extends IE{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=bn.nextPersistentConnectionId_++,this.log_=Sl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Us,this.maxReconnectDelay_=UP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!U1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new al,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;bn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Cn(e,"w")){const r=os(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ek(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zd("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$P&&(this.reconnectDelay_=Us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Be("getToken() completed but was canceled"):(Be("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new OP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ut(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(VP)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ut(c),a())}}}interrupt(e){Be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pd(this.interruptReasons_)&&(this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>lg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nv&&(this.reconnectDelay_=Rv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+rE.replace(/\./g,"-")]=1,mp()?e["framework.cordova"]=1:F1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fu.getInstance().currentlyOnline();return Pd(this.interruptReasons_)&&e}}bn.nextPersistentConnectionId_=0;bn.nextConnectionId_=0;/**
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
 */class yc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Y(ls,e),i=new Y(ls,n);return this.compare(r,i)!==0}minPost(){return Y.MIN}}/**
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
 */let ra;class RE extends yc{static get __EMPTY_NODE(){return ra}static set __EMPTY_NODE(e){ra=e}compare(e,n){return gi(e.name,n.name)}isDefinedOn(e){throw ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(li,ra)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,ra)}toString(){return".key"}}const Xi=new RE;/**
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
 */class ia{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??gt.EMPTY_NODE,this.right=s??gt.EMPTY_NODE}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class BP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ia(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ia(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ia(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new BP;/**
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
 */function zP(t,e){return gi(t.name,e.name)}function pg(t,e){return gi(t,e)}/**
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
 */let tf;function WP(t){tf=t}const NE=function(t){return typeof t=="number"?"number:"+lE(t):"string:"+t},xE=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else R(t===tf||t.isEmpty(),"priority of unexpected type.");R(t===tf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xv;class De{constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xE(this.priorityNode_)}static set __childrenNodeConstructor(e){xv=e}static get __childrenNodeConstructor(){return xv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:q(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||wr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+NE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lE(this.value_):e+=this.value_,this.lazyHash_=sE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=De.VALUE_TYPE_ORDER.indexOf(n),s=De.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let PE,OE;function HP(t){PE=t}function GP(t){OE=t}class KP extends yc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?gi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(li,new De("[PRIORITY-POST]",OE))}makePost(e,n){const r=PE(e);return new Y(n,new De("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new KP;/**
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
 */const qP=Math.log(2);class YP{constructor(e){const n=s=>parseInt(Math.log(s)/qP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pu=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let c,d;if(h===0)return null;if(h===1)return c=t[a],d=n?n(c):c,new Me(d,c.node,Me.BLACK,null,null);{const g=parseInt(h/2,10)+a,m=i(a,g),w=i(g+1,u);return c=t[g],d=n?n(c):c,new Me(d,c.node,Me.BLACK,m,w)}},s=function(a){let u=null,h=null,c=t.length;const d=function(m,w){const T=c-m,p=c;c-=m;const f=i(T+1,p),v=t[T],E=n?n(v):v;g(new Me(E,v.node,w,null,f))},g=function(m){u?(u.left=m,u=m):(h=m,u=m)};for(let m=0;m<a.count;++m){const w=a.nextBitIsOne(),T=Math.pow(2,a.count-(m+1));w?d(T,Me.BLACK):(d(T,Me.BLACK),d(T,Me.RED))}return h},o=new YP(t.length),l=s(o);return new gt(r||e,l)};/**
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
 */let Ih;const Ei={};class Ln{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Ei&&Ee,"ChildrenNode.ts has not been loaded"),Ih=Ih||new Ln({".priority":Ei},{".priority":Ee}),Ih}get(e){const n=os(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Y.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=pu(r,e.getCompare()):l=Ei;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Ln(h,u)}addToIndexes(e,n){const r=Qa(this.indexes_,(i,s)=>{const o=os(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Ei)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(Y.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),pu(l,o.getCompare())}else return Ei;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new Y(e.name,l))),a.insert(e,e.node)}});return new Ln(r,this.indexSet_)}removeFromIndexes(e,n){const r=Qa(this.indexes_,i=>{if(i===Ei)return i;{const s=n.get(e.name);return s?i.remove(new Y(e.name,s)):i}});return new Ln(r,this.indexSet_)}}/**
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
 */let js;class V{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&xE(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return js||(js=new V(new gt(pg),null,Ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||js}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?js:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Y(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?js:this.priorityNode_;return new V(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{R(q(e)!==".priority"||wr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,l)=>{n[o]=l.val(e),r++,s&&V.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+NE(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":sE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Y(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Il?-1:0}withIndex(e){if(e===Xi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xi?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QP extends V{constructor(){super(new gt(pg),V.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Il=new QP;Object.defineProperties(Y,{MIN:{value:new Y(ls,V.EMPTY_NODE)},MAX:{value:new Y(li,Il)}});RE.__EMPTY_NODE=V.EMPTY_NODE;De.__childrenNodeConstructor=V;WP(Il);GP(Il);/**
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
 */const JP=!0;function xe(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,xe(e))}if(!(t instanceof Array)&&JP){const n=[];let r=!1;if(Ge(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=xe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new Y(o,a)))}}),n.length===0)return V.EMPTY_NODE;const s=pu(n,zP,o=>o.name,pg);if(r){const o=pu(n,Ee.getCompare());return new V(s,xe(e),new Ln({".priority":o},{".priority":Ee}))}else return new V(s,xe(e),Ln.Default)}else{let n=V.EMPTY_NODE;return Ge(t,(r,i)=>{if(Cn(t,r)&&r.substring(0,1)!=="."){const s=xe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(xe(e))}}HP(xe);/**
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
 */class XP extends yc{constructor(e){super(),this.indexPath_=e,R(!Q(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?gi(e.name,n.name):s}makePost(e,n){const r=xe(e),i=V.EMPTY_NODE.updateChild(this.indexPath_,r);return new Y(n,i)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Il);return new Y(li,e)}toString(){return Yo(this.indexPath_,0).join("/")}}/**
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
 */class ZP extends yc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const r=xe(e);return new Y(n,r)}toString(){return".value"}}const e5=new ZP;/**
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
 */function DE(t){return{type:"value",snapshotNode:t}}function as(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Jo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function t5(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class gg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Qo(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(as(n,r)):o.trackChildChange(Jo(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Qo(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Jo(i,s,o))}else r.trackChildChange(as(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xo{constructor(e){this.indexedFilter_=new gg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xo.getStartPost_(e),this.endPost_=Xo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Y(n,r))||(r=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=V.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(V.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,l)=>{s.matches(new Y(o,l))||(i=i.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class n5{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Y(n,r))||(r=V.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=V.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(V.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,g)=>c(g,d)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new Y(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(h&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Jo(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Qo(n,c));const w=l.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(as(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return r.isEmpty()?e:h&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Qo(u.name,u.node)),s.trackChildChange(as(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,V.EMPTY_NODE)):e}}/**
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
 */class mg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ls}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:li}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new mg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function r5(t){return t.loadsAllData()?new gg(t.getIndex()):t.hasLimit()?new n5(t):new Xo(t)}function Pv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===e5?n="$value":t.index_===Xi?n="$key":(R(t.index_ instanceof XP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ov(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
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
 */class gu extends IE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Sl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=gu.getListenId_(e,r),l={};this.listens_[o]=l;const a=Pv(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),os(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=gu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Pv(e._queryParams),r=e._path.toString(),i=new al;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_s(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Do(l.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class i5{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function mu(){return{value:null,children:new Map}}function LE(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,mu());const i=t.children.get(r);e=le(e),LE(i,e,n)}}function nf(t,e,n){t.value!==null?n(e,t.value):s5(t,(r,i)=>{const s=new se(e.toString()+"/"+r);nf(i,s,n)})}function s5(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class o5{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ge(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Dv=10*1e3,l5=30*1e3,a5=5*60*1e3;class u5{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new o5(e);const r=Dv+(l5-Dv)*Math.random();uo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ge(e,(i,s)=>{s>0&&Cn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),uo(this.reportStats_.bind(this),Math.floor(Math.random()*2*a5))}}/**
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
 */var en;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function vg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _g(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class vu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=en.ACK_USER_WRITE,this.source=vg()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new vu(te(),n,this.revert)}}else return R(q(this.path)===e,"operationForChild called for unrelated child."),new vu(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zo{constructor(e,n){this.source=e,this.path=n,this.type=en.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Zo(this.source,te()):new Zo(this.source,le(this.path))}}/**
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
 */class ai{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=en.OVERWRITE}operationForChild(e){return Q(this.path)?new ai(this.source,te(),this.snap.getImmediateChild(e)):new ai(this.source,le(this.path),this.snap)}}/**
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
 */class us{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=en.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new ai(this.source,te(),n.value):new us(this.source,te(),n)}else return R(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new us(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Er{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class c5{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function h5(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(t5(o.childName,o.snapshotNode))}),$s(t,i,"child_removed",e,r,n),$s(t,i,"child_added",e,r,n),$s(t,i,"child_moved",s,r,n),$s(t,i,"child_changed",e,r,n),$s(t,i,"value",e,r,n),i}function $s(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>f5(t,l,a)),o.forEach(l=>{const a=d5(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function d5(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function f5(t,e,n){if(e.childName==null||n.childName==null)throw ys("Should only compare child_ events.");const r=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function _c(t,e){return{eventCache:t,serverCache:e}}function co(t,e,n,r){return _c(new Er(e,n,r),t.serverCache)}function ME(t,e,n,r){return _c(t.eventCache,new Er(e,n,r))}function yu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ui(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Th;const p5=()=>(Th||(Th=new gt(Xx)),Th);class oe{constructor(e,n=p5()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Ge(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:te(),value:this.value};if(Q(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:we(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new oe(null)}}set(e,n){if(Q(e))return new oe(n,this.children);{const r=q(e),s=(this.children.get(r)||new oe(null)).set(le(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(Q(e))return n;{const r=q(e),s=(this.children.get(r)||new oe(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(we(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,te(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(le(e),we(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,te(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),we(n,i),r):new oe(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(we(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class rn{constructor(e){this.writeTree_=e}static empty(){return new rn(new oe(null))}}function ho(t,e,n){if(Q(e))return new rn(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=lt(i,e);return s=s.updateChild(o,n),new rn(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new rn(s)}}}function rf(t,e,n){let r=t;return Ge(n,(i,s)=>{r=ho(r,we(e,i),s)}),r}function Lv(t,e){if(Q(e))return rn.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new rn(n)}}function sf(t,e){return mi(t,e)!=null}function mi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Mv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new Y(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Y(r,i.value))}),e}function mr(t,e){if(Q(e))return t;{const n=mi(t,e);return n!=null?new rn(new oe(n)):new rn(t.writeTree_.subtree(e))}}function of(t){return t.writeTree_.isEmpty()}function cs(t,e){return bE(te(),t.writeTree_,e)}function bE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=bE(we(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(we(t,".priority"),r)),n}}/**
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
 */function wc(t,e){return $E(e,t)}function g5(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ho(t.visibleWrites,e,n)),t.lastWriteId=r}function m5(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=rf(t.visibleWrites,e,n),t.lastWriteId=r}function v5(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function y5(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&_5(l,r.path)?i=!1:Ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return w5(t),!0;if(r.snap)t.visibleWrites=Lv(t.visibleWrites,r.path);else{const l=r.children;Ge(l,a=>{t.visibleWrites=Lv(t.visibleWrites,we(r.path,a))})}return!0}else return!1}function _5(t,e){if(t.snap)return Ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ut(we(t.path,n),e))return!0;return!1}function w5(t){t.visibleWrites=FE(t.allWrites,E5,te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function E5(t){return t.visible}function FE(t,e,n){let r=rn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ut(n,o)?(l=lt(n,o),r=ho(r,l,s.snap)):Ut(o,n)&&(l=lt(o,n),r=ho(r,te(),s.snap.getChild(l)));else if(s.children){if(Ut(n,o))l=lt(n,o),r=rf(r,l,s.children);else if(Ut(o,n))if(l=lt(o,n),Q(l))r=rf(r,te(),s.children);else{const a=os(s.children,q(l));if(a){const u=a.getChild(le(l));r=ho(r,te(),u)}}}else throw ys("WriteRecord should have .snap or .children")}}return r}function UE(t,e,n,r,i){if(!r&&!i){const s=mi(t.visibleWrites,e);if(s!=null)return s;{const o=mr(t.visibleWrites,e);if(of(o))return n;if(n==null&&!sf(o,te()))return null;{const l=n||V.EMPTY_NODE;return cs(o,l)}}}else{const s=mr(t.visibleWrites,e);if(!i&&of(s))return n;if(!i&&n==null&&!sf(s,te()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ut(u.path,e)||Ut(e,u.path))},l=FE(t.allWrites,o,e),a=n||V.EMPTY_NODE;return cs(l,a)}}}function C5(t,e,n){let r=V.EMPTY_NODE;const i=mi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=mr(t.visibleWrites,e);return n.forEachChild(Ee,(o,l)=>{const a=cs(mr(s,new se(o)),l);r=r.updateImmediateChild(o,a)}),Mv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=mr(t.visibleWrites,e);return Mv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function S5(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=we(e,n);if(sf(t.visibleWrites,s))return null;{const o=mr(t.visibleWrites,s);return of(o)?i.getChild(n):cs(o,i.getChild(n))}}function I5(t,e,n,r){const i=we(e,n),s=mi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=mr(t.visibleWrites,i);return cs(o,r.getNode().getImmediateChild(n))}else return null}function T5(t,e){return mi(t.visibleWrites,e)}function k5(t,e,n,r,i,s,o){let l;const a=mr(t.visibleWrites,e),u=mi(a,te());if(u!=null)l=u;else if(n!=null)l=cs(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=d.getNext();for(;g&&h.length<i;)c(g,r)!==0&&h.push(g),g=d.getNext();return h}else return[]}function A5(){return{visibleWrites:rn.empty(),allWrites:[],lastWriteId:-1}}function _u(t,e,n,r){return UE(t.writeTree,t.treePath,e,n,r)}function wg(t,e){return C5(t.writeTree,t.treePath,e)}function bv(t,e,n,r){return S5(t.writeTree,t.treePath,e,n,r)}function wu(t,e){return T5(t.writeTree,we(t.treePath,e))}function R5(t,e,n,r,i,s){return k5(t.writeTree,t.treePath,e,n,r,i,s)}function Eg(t,e,n){return I5(t.writeTree,t.treePath,e,n)}function jE(t,e){return $E(we(t.treePath,e),t.writeTree)}function $E(t,e){return{treePath:t,writeTree:e}}/**
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
 */class N5{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Jo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Qo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,as(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Jo(r,e.snapshotNode,i.oldSnap));else throw ys("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class x5{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const VE=new x5;class Cg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Eg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ui(this.viewCache_),s=R5(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function P5(t){return{filter:t}}function O5(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function D5(t,e,n,r,i){const s=new N5;let o,l;if(n.type===en.OVERWRITE){const u=n;u.source.fromUser?o=lf(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=Eu(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===en.MERGE){const u=n;u.source.fromUser?o=M5(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=af(t,e,u.path,u.children,r,i,l,s))}else if(n.type===en.ACK_USER_WRITE){const u=n;u.revert?o=U5(t,e,u.path,r,i,s):o=b5(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===en.LISTEN_COMPLETE)o=F5(t,e,n.path,r,s);else throw ys("Unknown operation type: "+n.type);const a=s.getChanges();return L5(e,o,a),{viewCache:o,changes:a}}function L5(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(DE(yu(e)))}}function BE(t,e,n,r,i,s){const o=e.eventCache;if(wu(r,n)!=null)return e;{let l,a;if(Q(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ui(e),h=u instanceof V?u:V.EMPTY_NODE,c=wg(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=_u(r,ui(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){R(wr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const c=bv(r,n,h,a);c!=null?l=t.filter.updatePriority(h,c):l=o.getNode()}else{const h=le(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=bv(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(h,d):c=o.getNode().getImmediateChild(u)}else c=Eg(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,h,i,s):l=o.getNode()}}return co(e,l,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Eu(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),g,null)}else{const g=q(n);if(!a.isCompleteForPath(n)&&wr(n)>1)return e;const m=le(n),T=a.getNode().getImmediateChild(g).updateChild(m,r);g===".priority"?u=h.updatePriority(a.getNode(),T):u=h.updateChild(a.getNode(),g,T,m,VE,null)}const c=ME(e,u,a.isFullyInitialized()||Q(n),h.filtersNodes()),d=new Cg(i,c,s);return BE(t,c,n,i,d,l)}function lf(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Cg(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=co(e,u,!0,t.filter.filtersNodes());else{const c=q(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=co(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=le(n),g=l.getNode().getImmediateChild(c);let m;if(Q(d))m=r;else{const w=h.getCompleteChild(c);w!=null?hg(d)===".priority"&&w.getChild(kE(d)).isEmpty()?m=w:m=w.updateChild(d,r):m=V.EMPTY_NODE}if(g.equals(m))a=e;else{const w=t.filter.updateChild(l.getNode(),c,m,d,h,o);a=co(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Fv(t,e){return t.eventCache.isCompleteForChild(e)}function M5(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=we(n,a);Fv(e,q(h))&&(l=lf(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=we(n,a);Fv(e,q(h))||(l=lf(t,l,h,u,i,s,o))}),l}function Uv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function af(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;Q(n)?u=r:u=new oe(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(h.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),m=Uv(t,g,d);a=Eu(t,a,new se(c),m,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const g=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!h.hasChild(c)&&!g){const m=e.serverCache.getNode().getImmediateChild(c),w=Uv(t,m,d);a=Eu(t,a,new se(c),w,i,s,o,l)}}),a}function b5(t,e,n,r,i,s,o){if(wu(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(Q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Eu(t,e,n,a.getNode().getChild(n),i,s,l,o);if(Q(n)){let u=new oe(null);return a.getNode().forEachChild(Xi,(h,c)=>{u=u.set(new se(h),c)}),af(t,e,n,u,i,s,l,o)}else return e}else{let u=new oe(null);return r.foreach((h,c)=>{const d=we(n,h);a.isCompleteForPath(d)&&(u=u.set(h,a.getNode().getChild(d)))}),af(t,e,n,u,i,s,l,o)}}function F5(t,e,n,r,i){const s=e.serverCache,o=ME(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return BE(t,o,n,r,VE,i)}function U5(t,e,n,r,i,s){let o;if(wu(r,n)!=null)return e;{const l=new Cg(r,e,i),a=e.eventCache.getNode();let u;if(Q(n)||q(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=_u(r,ui(e));else{const c=e.serverCache.getNode();R(c instanceof V,"serverChildren would be complete if leaf node"),h=wg(r,c)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=q(n);let c=Eg(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=a.getImmediateChild(h)),c!=null?u=t.filter.updateChild(a,h,c,le(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,V.EMPTY_NODE,le(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_u(r,ui(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||wu(r,te())!=null,co(e,u,o,t.filter.filtersNodes())}}/**
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
 */class j5{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gg(r.getIndex()),s=r5(r);this.processor_=P5(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(V.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(V.EMPTY_NODE,l.getNode(),null),h=new Er(a,o.isFullyInitialized(),i.filtersNodes()),c=new Er(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=_c(c,h),this.eventGenerator_=new c5(this.query_)}get query(){return this.query_}}function $5(t){return t.viewCache_.serverCache.getNode()}function V5(t){return yu(t.viewCache_)}function B5(t,e){const n=ui(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function jv(t){return t.eventRegistrations_.length===0}function z5(t,e){t.eventRegistrations_.push(e)}function $v(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Vv(t,e,n,r){e.type===en.MERGE&&e.source.queryId!==null&&(R(ui(t.viewCache_),"We should always have a full cache before handling merges"),R(yu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=D5(t.processor_,i,e,n,r);return O5(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function W5(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(as(s,o))}),n.isFullyInitialized()&&r.push(DE(n.getNode())),zE(t,r,n.getNode(),e)}function zE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return h5(t.eventGenerator_,e,n,i)}/**
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
 */let Cu;class WE{constructor(){this.views=new Map}}function H5(t){R(!Cu,"__referenceConstructor has already been defined"),Cu=t}function G5(){return R(Cu,"Reference.ts has not been loaded"),Cu}function K5(t){return t.views.size===0}function Sg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Vv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Vv(o,e,n,r));return s}}function HE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=_u(n,i?r:null),a=!1;l?a=!0:r instanceof V?(l=wg(n,r),a=!1):(l=V.EMPTY_NODE,a=!1);const u=_c(new Er(l,a,!1),new Er(r,i,!1));return new j5(e,u)}return o}function q5(t,e,n,r,i,s){const o=HE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),z5(o,n),W5(o,n)}function Y5(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Cr(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat($v(u,n,r)),jv(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat($v(a,n,r)),jv(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Cr(t)&&s.push(new(G5())(e._repo,e._path)),{removed:s,events:o}}function GE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vr(t,e){let n=null;for(const r of t.views.values())n=n||B5(r,e);return n}function KE(t,e){if(e._queryParams.loadsAllData())return Ec(t);{const r=e._queryIdentifier;return t.views.get(r)}}function qE(t,e){return KE(t,e)!=null}function Cr(t){return Ec(t)!=null}function Ec(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Su;function Q5(t){R(!Su,"__referenceConstructor has already been defined"),Su=t}function J5(){return R(Su,"Reference.ts has not been loaded"),Su}let X5=1;class Bv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=A5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function YE(t,e,n,r,i){return g5(t.pendingWriteTree_,e,n,r,i),i?Ts(t,new ai(vg(),e,n)):[]}function Z5(t,e,n,r){m5(t.pendingWriteTree_,e,n,r);const i=oe.fromObject(n);return Ts(t,new us(vg(),e,i))}function ir(t,e,n=!1){const r=v5(t.pendingWriteTree_,e);if(y5(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(te(),!0):Ge(r.children,o=>{s=s.set(new se(o),!0)}),Ts(t,new vu(r.path,s,n))}else return[]}function Tl(t,e,n){return Ts(t,new ai(yg(),e,n))}function e9(t,e,n){const r=oe.fromObject(n);return Ts(t,new us(yg(),e,r))}function t9(t,e){return Ts(t,new Zo(yg(),e))}function n9(t,e,n){const r=Tg(t,n);if(r){const i=kg(r),s=i.path,o=i.queryId,l=lt(s,e),a=new Zo(_g(o),l);return Ag(t,s,a)}else return[]}function Iu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||qE(o,e))){const a=Y5(o,e,n,r);K5(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const h=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,g)=>Cr(g));if(h&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=s9(d);for(let m=0;m<g.length;++m){const w=g[m],T=w.query,p=ZE(t,w);t.listenProvider_.startListening(fo(T),el(t,T),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(fo(e),null):u.forEach(d=>{const g=t.queryToTagMap.get(Cc(d));t.listenProvider_.stopListening(fo(d),g)}))}o9(t,u)}return l}function QE(t,e,n,r){const i=Tg(t,r);if(i!=null){const s=kg(i),o=s.path,l=s.queryId,a=lt(o,e),u=new ai(_g(l),a,n);return Ag(t,o,u)}else return[]}function r9(t,e,n,r){const i=Tg(t,r);if(i){const s=kg(i),o=s.path,l=s.queryId,a=lt(o,e),u=oe.fromObject(n),h=new us(_g(l),a,u);return Ag(t,o,h)}else return[]}function uf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const m=lt(d,i);s=s||vr(g,m),o=o||Cr(g)});let l=t.syncPointTree_.get(i);l?(o=o||Cr(l),s=s||vr(l,te())):(l=new WE,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=V.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const w=vr(m,te());w&&(s=s.updateImmediateChild(g,w))}));const u=qE(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Cc(e);R(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=l9();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const h=wc(t.pendingWriteTree_,i);let c=q5(l,e,n,h,s,a);if(!u&&!o&&!r){const d=KE(l,e);c=c.concat(a9(t,e,d))}return c}function Ig(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=lt(o,e),u=vr(l,a);if(u)return u});return UE(i,e,s,n,!0)}function i9(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const c=lt(u,n);r=r||vr(h,c)});let i=t.syncPointTree_.get(n);i?r=r||vr(i,te()):(i=new WE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Er(r,!0,!1):null,l=wc(t.pendingWriteTree_,e._path),a=HE(i,e,l,s?o.getNode():V.EMPTY_NODE,s);return V5(a)}function Ts(t,e){return JE(e,t.syncPointTree_,null,wc(t.pendingWriteTree_,te()))}function JE(t,e,n,r){if(Q(t.path))return XE(t,e,n,r);{const i=e.get(te());n==null&&i!=null&&(n=vr(i,te()));let s=[];const o=q(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=jE(r,o);s=s.concat(JE(l,a,u,h))}return i&&(s=s.concat(Sg(i,t,r,n))),s}}function XE(t,e,n,r){const i=e.get(te());n==null&&i!=null&&(n=vr(i,te()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=jE(r,o),h=t.operationForChild(o);h&&(s=s.concat(XE(h,l,a,u)))}),i&&(s=s.concat(Sg(i,t,r,n))),s}function ZE(t,e){const n=e.query,r=el(t,n);return{hashFn:()=>($5(e)||V.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?n9(t,n._path,r):t9(t,n._path);{const s=tP(i,n);return Iu(t,n,null,s)}}}}function el(t,e){const n=Cc(e);return t.queryToTagMap.get(n)}function Cc(t){return t._path.toString()+"$"+t._queryIdentifier}function Tg(t,e){return t.tagToQueryMap.get(e)}function kg(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Ag(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=wc(t.pendingWriteTree_,e);return Sg(r,n,i,null)}function s9(t){return t.fold((e,n,r)=>{if(n&&Cr(n))return[Ec(n)];{let i=[];return n&&(i=GE(n)),Ge(r,(s,o)=>{i=i.concat(o)}),i}})}function fo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(J5())(t._repo,t._path):t}function o9(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Cc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function l9(){return X5++}function a9(t,e,n){const r=e._path,i=el(t,e),s=ZE(t,n),o=t.listenProvider_.startListening(fo(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)R(!Cr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,c)=>{if(!Q(u)&&h&&Cr(h))return[Ec(h).query];{let d=[];return h&&(d=d.concat(GE(h).map(g=>g.query))),Ge(c,(g,m)=>{d=d.concat(m)}),d}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(fo(h),el(t,h))}}return o}/**
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
 */class Rg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rg(n)}node(){return this.node_}}class Ng{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new Ng(this.syncTree_,n)}node(){return Ig(this.syncTree_,this.path_)}}const u9=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},zv=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return c9(t[".sv"],e,n);if(typeof t[".sv"]=="object")return h9(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},c9=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},h9=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eC=function(t,e,n,r){return xg(e,new Ng(n,t),r)},tC=function(t,e,n){return xg(t,new Rg(e),n)};function xg(t,e,n){const r=t.getPriority().val(),i=zv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=zv(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new De(l,xe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new De(i))),o.forEachChild(Ee,(l,a)=>{const u=xg(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Pg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Og(t,e){let n=e instanceof se?e:new se(e),r=t,i=q(n);for(;i!==null;){const s=os(r.node.children,i)||{children:{},childCount:0};r=new Pg(i,r,s),n=le(n),i=q(n)}return r}function ks(t){return t.node.value}function nC(t,e){t.node.value=e,cf(t)}function rC(t){return t.node.childCount>0}function d9(t){return ks(t)===void 0&&!rC(t)}function Sc(t,e){Ge(t.node.children,(n,r)=>{e(new Pg(n,t,r))})}function iC(t,e,n,r){n&&!r&&e(t),Sc(t,i=>{iC(i,e,!0,r)}),n&&r&&e(t)}function f9(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function kl(t){return new se(t.parent===null?t.name:kl(t.parent)+"/"+t.name)}function cf(t){t.parent!==null&&p9(t.parent,t.name,t)}function p9(t,e,n){const r=d9(n),i=Cn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,cf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cf(t))}/**
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
 */const g9=/[\[\].#$\/\u0000-\u001F\u007F]/,m9=/[\[\].#$\u0000-\u001F\u007F]/,kh=10*1024*1024,Dg=function(t){return typeof t=="string"&&t.length!==0&&!g9.test(t)},sC=function(t){return typeof t=="string"&&t.length!==0&&!m9.test(t)},v9=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sC(t)},y9=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!og(t)||t&&typeof t=="object"&&Cn(t,".sv")},_9=function(t,e,n,r){r&&e===void 0||Ic(qu(t,"value"),e,n)},Ic=function(t,e,n){const r=n instanceof se?new MP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+br(r));if(typeof e=="function")throw new Error(t+"contains a function "+br(r)+" with contents = "+e.toString());if(og(e))throw new Error(t+"contains "+e.toString()+" "+br(r));if(typeof e=="string"&&e.length>kh/3&&Yu(e)>kh)throw new Error(t+"contains a string greater than "+kh+" utf8 bytes "+br(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ge(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Dg(o)))throw new Error(t+" contains an invalid key ("+o+") "+br(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bP(r,o),Ic(t,l,r),FP(r)}),i&&s)throw new Error(t+' contains ".value" child '+br(r)+" in addition to actual children.")}},w9=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Yo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Dg(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(LP);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ut(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},E9=function(t,e,n,r){if(r&&e===void 0)return;const i=qu(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ge(e,(o,l)=>{const a=new se(o);if(Ic(i,l,we(n,a)),hg(a)===".priority"&&!y9(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),w9(i,s)},oC=function(t,e,n,r){if(!(r&&n===void 0)&&!sC(n))throw new Error(qu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},C9=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oC(t,e,n,r)},S9=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},I9=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!v9(n))throw new Error(qu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class T9{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Tc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!dg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function lC(t,e,n){Tc(t,n),aC(t,r=>dg(r,e))}function Ht(t,e,n){Tc(t,n),aC(t,r=>Ut(r,e)||Ut(e,r))}function aC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(k9(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function k9(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qr&&Be("event: "+n.toString()),Is(r)}}}/**
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
 */const A9="repo_interrupt",R9=25;class N9{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new T9,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mu(),this.transactionQueueTree_=new Pg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function x9(t,e,n){if(t.stats_=ug(t.repoInfo_),t.forceRestClient_||sP())t.server_=new gu(t.repoInfo_,(r,i,s,o)=>{Wv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new bn(t.repoInfo_,e,(r,i,s,o)=>{Wv(t,r,i,s,o)},r=>{Hv(t,r)},r=>{O9(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=cP(t.repoInfo_,()=>new u5(t.stats_,t.server_)),t.infoData_=new i5,t.infoSyncTree_=new Bv({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Tl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Lg(t,"connected",!1),t.serverSyncTree_=new Bv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ht(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function P9(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kc(t){return u9({timestamp:P9(t)})}function Wv(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Qa(n,u=>xe(u));o=r9(t.serverSyncTree_,s,a,i)}else{const a=xe(n);o=QE(t.serverSyncTree_,s,a,i)}else if(r){const a=Qa(n,u=>xe(u));o=e9(t.serverSyncTree_,s,a)}else{const a=xe(n);o=Tl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=hs(t,s)),Ht(t.eventQueue_,l,o)}function Hv(t,e){Lg(t,"connected",e),e===!1&&b9(t)}function O9(t,e){Ge(e,(n,r)=>{Lg(t,n,r)})}function Lg(t,e,n){const r=new se("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(r,i);const s=Tl(t.infoSyncTree_,r,i);Ht(t.eventQueue_,r,s)}function Mg(t){return t.nextWriteId_++}function D9(t,e,n){const r=i9(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=xe(i).withIndex(e._queryParams.getIndex());uf(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Tl(t.serverSyncTree_,e._path,s);else{const l=el(t.serverSyncTree_,e);o=QE(t.serverSyncTree_,e._path,s,l)}return Ht(t.eventQueue_,e._path,o),Iu(t.serverSyncTree_,e,n,null,!0),s},i=>(Al(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function L9(t,e,n,r,i){Al(t,"set",{path:e.toString(),value:n,priority:r});const s=kc(t),o=xe(n,r),l=Ig(t.serverSyncTree_,e),a=tC(o,l,s),u=Mg(t),h=YE(t.serverSyncTree_,e,a,u,!0);Tc(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const m=d==="ok";m||ut("set at "+e+" failed: "+d);const w=ir(t.serverSyncTree_,u,!m);Ht(t.eventQueue_,e,w),hf(t,i,d,g)});const c=Fg(t,e);hs(t,c),Ht(t.eventQueue_,c,[])}function M9(t,e,n,r){Al(t,"update",{path:e.toString(),value:n});let i=!0;const s=kc(t),o={};if(Ge(n,(l,a)=>{i=!1,o[l]=eC(we(e,l),xe(a),t.serverSyncTree_,s)}),i)Be("update() called with empty data.  Don't do anything."),hf(t,r,"ok",void 0);else{const l=Mg(t),a=Z5(t.serverSyncTree_,e,o,l);Tc(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const c=u==="ok";c||ut("update at "+e+" failed: "+u);const d=ir(t.serverSyncTree_,l,!c),g=d.length>0?hs(t,e):e;Ht(t.eventQueue_,g,d),hf(t,r,u,h)}),Ge(n,u=>{const h=Fg(t,we(e,u));hs(t,h)}),Ht(t.eventQueue_,e,[])}}function b9(t){Al(t,"onDisconnectEvents");const e=kc(t),n=mu();nf(t.onDisconnect_,te(),(i,s)=>{const o=eC(i,s,t.serverSyncTree_,e);LE(n,i,o)});let r=[];nf(n,te(),(i,s)=>{r=r.concat(Tl(t.serverSyncTree_,i,s));const o=Fg(t,i);hs(t,o)}),t.onDisconnect_=mu(),Ht(t.eventQueue_,te(),r)}function F9(t,e,n){let r;q(e._path)===".info"?r=uf(t.infoSyncTree_,e,n):r=uf(t.serverSyncTree_,e,n),lC(t.eventQueue_,e._path,r)}function Gv(t,e,n){let r;q(e._path)===".info"?r=Iu(t.infoSyncTree_,e,n):r=Iu(t.serverSyncTree_,e,n),lC(t.eventQueue_,e._path,r)}function U9(t){t.persistentConnection_&&t.persistentConnection_.interrupt(A9)}function Al(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Be(n,...e)}function hf(t,e,n,r){e&&Is(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function uC(t,e,n){return Ig(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function bg(t,e=t.transactionQueueTree_){if(e||Ac(t,e),ks(e)){const n=hC(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&j9(t,kl(e),n)}else rC(e)&&Sc(e,n=>{bg(t,n)})}function j9(t,e,n){const r=n.map(u=>u.currentWriteId),i=uC(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];R(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=lt(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Al(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(ir(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ac(t,Og(t.transactionQueueTree_,e)),bg(t,t.transactionQueueTree_),Ht(t.eventQueue_,e,h);for(let d=0;d<c.length;d++)Is(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ut("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}hs(t,e)}},o)}function hs(t,e){const n=cC(t,e),r=kl(n),i=hC(t,n);return $9(t,i,r),r}function $9(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=lt(n,a.path);let h=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,c=a.abortReason,i=i.concat(ir(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=R9)h=!0,c="maxretry",i=i.concat(ir(t.serverSyncTree_,a.currentWriteId,!0));else{const d=uC(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Ic("transaction failed: Data returned ",g,a.path);let m=xe(g);typeof g=="object"&&g!=null&&Cn(g,".priority")||(m=m.updatePriority(d.getPriority()));const T=a.currentWriteId,p=kc(t),f=tC(m,d,p);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=f,a.currentWriteId=Mg(t),o.splice(o.indexOf(T),1),i=i.concat(YE(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(ir(t.serverSyncTree_,T,!0))}else h=!0,c="nodata",i=i.concat(ir(t.serverSyncTree_,a.currentWriteId,!0))}Ht(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Ac(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Is(r[l]);bg(t,t.transactionQueueTree_)}function cC(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&ks(r)===void 0;)r=Og(r,n),e=le(e),n=q(e);return r}function hC(t,e){const n=[];return dC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function dC(t,e,n){const r=ks(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Sc(e,i=>{dC(t,i,n)})}function Ac(t,e){const n=ks(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,nC(e,n.length>0?n:void 0)}Sc(e,r=>{Ac(t,r)})}function Fg(t,e){const n=kl(cC(t,e)),r=Og(t.transactionQueueTree_,e);return f9(r,i=>{Ah(t,i)}),Ah(t,r),iC(r,i=>{Ah(t,i)}),n}function Ah(t,e){const n=ks(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ir(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nC(e,void 0):n.length=s+1,Ht(t.eventQueue_,kl(e),i);for(let o=0;o<r.length;o++)Is(r[o])}}/**
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
 */function V9(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function B9(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kv=function(t,e){const n=z9(t),r=n.namespace;n.domain==="firebase.com"&&zn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Qx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},z9=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=V9(t.substring(h,c)));const d=B9(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class fC{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class pC{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class gC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ug{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:hg(this._path)}get ref(){return new Sn(this._repo,this._path)}get _queryIdentifier(){const e=Ov(this._queryParams),n=lg(e);return n==="{}"?"default":n}get _queryObject(){return Ov(this._queryParams)}isEqual(e){if(e=qe(e),!(e instanceof Ug))return!1;const n=this._repo===e._repo,r=dg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+DP(this._path)}}class Sn extends Ug{constructor(e,n){super(e,n,new mg,!1)}get parent(){const e=kE(this._path);return e===null?null:new Sn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ds{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=tl(this.ref,e);return new ds(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ds(i,tl(this.ref,r),Ee)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rc(t,e){return t=qe(t),t._checkNotDeleted("ref"),e!==void 0?tl(t._root,e):t._root}function tl(t,e){return t=qe(t),q(t._path)===null?C9("child","path",e,!1):oC("child","path",e,!1),new Sn(t._repo,we(t._path,e))}function W9(t,e){t=qe(t),S9("set",t._path),_9("set",e,t._path,!1);const n=new al;return L9(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function H9(t,e){E9("update",e,t._path,!1);const n=new al;return M9(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function G9(t){t=qe(t);const e=new gC(()=>{}),n=new Nc(e);return D9(t._repo,t,n).then(r=>new ds(r,new Sn(t._repo,t._path),t._queryParams.getIndex()))}class Nc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fC("value",this,new ds(e.snapshotNode,new Sn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pC(this,e,n):null}matches(e){return e instanceof Nc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class jg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pC(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const r=tl(new Sn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new fC(e.type,this,new ds(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof jg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function K9(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(h,c)=>{Gv(t._repo,t,l),a(h,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new gC(n,s||void 0),l=e==="value"?new Nc(o):new jg(e,o);return F9(t._repo,t,l),()=>Gv(t._repo,t,l)}function q9(t,e,n,r){return K9(t,"value",e,n,r)}H5(Sn);Q5(Sn);/**
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
 */const Y9="FIREBASE_DATABASE_EMULATOR_HOST",df={};let Q9=!1;function J9(t,e,n,r){t.repoInfo_=new vE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function X9(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kv(s,i),l=o.repoInfo,a,u;typeof process<"u"&&pv&&(u=pv[Y9]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Kv(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new Ji(Ji.OWNER):new lP(t.name,t.options,e);I9("Invalid Firebase Database URL",o),Q(o.path)||zn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=e6(l,t,h,new oP(t.name,n));return new t6(c,t)}function Z9(t,e){const n=df[e];(!n||n[t.key]!==t)&&zn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),U9(t),delete n[t.key]}function e6(t,e,n,r){let i=df[e.name];i||(i={},df[e.name]=i);let s=i[t.toURLString()];return s&&zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new N9(t,Q9,n,r),i[t.toURLString()]=s,s}class t6{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(x9(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sn(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z9(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zn("Cannot call "+e+" on a deleted database.")}}function n6(t=yp(),e){const n=fi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=fk("database");r&&r6(n,...r)}return n}function r6(t,e,n,r={}){t=qe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ji(Ji.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:pk(r.mockUserToken,t.app.options.projectId);s=new Ji(o)}J9(i,e,n,s)}/**
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
 */function i6(t){Hx(pi),on(new Bt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return X9(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_t(gv,mv,t),_t(gv,mv,"esm2017")}bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};i6();const s6={apiKey:"AIzaSyDZTdRn4Auo-weSPUceWIFinY0rQsVNn3U",authDomain:"jobchaser-26d9a.firebaseapp.com",projectId:"jobchaser-26d9a",storageBucket:"jobchaser-26d9a.appspot.com",messagingSenderId:"871802840073",appId:"1:871802840073:web:3c289fe370ec71235784d8",measurementId:"G-QGYD6EBDJH",databaseURL:"https://jobchaser-26d9a-default-rtdb.europe-west1.firebasedatabase.app"},o6=H1(s6);Vx(o6);const xc=n6();function Rl(){const t=vN(),e=new Rn,[n]=TN(t);return{auth:t,user:n,provider:e,signInWithRedirect:PR,signInWithPopup:TR,signInWithEmailAndPassword:tR,createUserWithEmailAndPassword:eR,onAuthStateChanged:Ew,signOut:iR}}function mC(t,e,n,r=null,i=null){W9(Rc(xc,"users/"+t),{userId:t,fullname:n,email:e,password:r,profileImg:i})}function qv(t,e){const n=Rc(xc);return new Promise((r,i)=>{G9(tl(n,t+"/"+e)).then(s=>{if(s.exists()){const o=s.val();r(o)}else r(s.exists()),console.log("No data available")}).catch(s=>{console.error(s)})})}function l6(t){return new Promise((e,n)=>{q9(Rc(xc,"SavedJobs/"+t),r=>{e(r.val())})})}function Yv(t,e){H9(Rc(xc,"SavedJobs/"+e),{jobs:t})}function a6({toggleDarkTheme:t}){const{isOnline:e,isDarkTheme:n,background:r,color:i,textColorHeader:s}=I.useContext(an),{auth:o,signOut:l}=Rl();function a(){t(F=>!F)}const[u,h]=I.useState(!1),[c,d]=I.useState(null),[g,m]=I.useState(!1),[w,T]=I.useState("none"),[p,f]=I.useState(),[v,E]=I.useState("none"),N=window.matchMedia("(width < 1300px)"),L=window.matchMedia("(height < 801px)"),x=document.body;x.style.background=n?"linear-gradient(147deg, #4d4855 0%, #000000 74%)":"whitesmoke";function b(F){if(!(!N.matches||F.target.tagName==="BUTTON")){if(c){p?(clearTimeout(p),f(setTimeout(()=>T("none"),350))):f(setTimeout(()=>T("none"),350)),x.removeAttribute("style"),m(!1),d(null);return}if(c===null){T("translate 350ms"),x.style.overflow="hidden",m(!0),d("show-menu");return}}}I.useEffect(()=>{if(document.getElementById("root"),n){x.style.background="linear-gradient(147deg, #4d4855 0%, #000000 74%)";return}if(!n){x.style.background="whitesmoke";return}},[n]),I.useEffect(()=>(N.matches&&h(!0),N.addEventListener("change",F=>{if(!F.matches){console.log("desktop"),x.removeAttribute("style"),h(!1),m(!1),d(null),T("none");return}h(!0)}),L.addEventListener("change",F=>{F.matches&&E("-120px"),F.matches||E("0px")}),()=>{}),[]);function K(F){return F===null?s==="white"?t0:e0:n?t0:e0}function H(F){if(F)return i?n0:r0;if(!F)return s==="white"?n0:r0}return y.jsx(y.Fragment,{children:y.jsx("header",{children:y.jsxs("div",{className:"header-container",children:[y.jsxs("div",{className:"title-container",style:{color:c?i:s},children:[y.jsx("img",{tabIndex:0,src:K(c),alt:"Jobchaser logo"}),y.jsx("p",{children:"Jobchaser"}),y.jsx("p",{children:"EST 2023"})]}),y.jsxs("div",{onClick:b,className:"menu",children:[y.jsx("div",{style:{background:c?i:s},className:"bar"}),y.jsx("input",{style:{background:c?i:s},checked:g,type:"checkbox",className:"bar"}),y.jsx("div",{style:{background:c?i:s},className:"bar"})]}),y.jsxs("nav",{onClick:b,className:`link-options ${c}`,style:{transition:w,background:u&&r},children:[y.jsx("button",{style:{color:c?i:s,marginBottom:c&&v,border:u?`1px solid ${i}`:`1px solid ${s}`},onClick:a,children:n?"Light Theme":"Dark Theme"}),y.jsxs(Jl,{style:{color:u?i:s},to:"/Jobchaser/",children:["Hem",u&&y.jsx("img",{className:"chevron",src:n?Yl:Ql,alt:"chevron icon"})]}),y.jsxs(Jl,{style:{color:u?i:s},to:"/Jobchaser/Find-job",children:["Lediga jobb",u&&y.jsx("img",{className:"chevron",src:n?Yl:Ql,alt:"chevron icon"})]}),e&&y.jsxs(Jl,{to:"/Jobchaser/User-profile",style:{color:u?i:s},children:[y.jsxs("div",{className:"profile-container",children:[y.jsx("p",{children:"Profil"}),y.jsx("img",{src:e.profileImg?e.profileImg:iT,alt:"user profile picture",style:{border:"2px solid "+(c?i:s)}})]}),u&&y.jsx("img",{style:{bottom:"30%"},className:"chevron",src:n?Yl:Ql,alt:"chevron icon"})]}),e?y.jsxs("div",{onClick:()=>o.signOut(),className:"sign-out-cont",children:[y.jsx("button",{className:"sign-out-btn",style:{color:u?i:s},children:"Logga ut"}),y.jsx("div",{className:"sign-out-img-container",children:y.jsx("img",{src:H(u),alt:"sign out icon"})})]}):y.jsxs(Jl,{style:{color:u?i:s},to:"/Jobchaser/Sign-in",children:["Logga in",u&&y.jsx("img",{className:"chevron",src:n?Yl:Ql,alt:"chevron icon"})]})]})]})})})}const u6="/Jobchaser/assets/Search SVG Vector-BR--GbvO.svg",c6="/Jobchaser/assets/start-page-background-Dm21Msj3.jpg",h6=()=>{const{isOnline:t}=I.useContext(an),e=Ku();return y.jsxs("div",{className:"search-opening-text-container",children:[y.jsxs("picture",{children:[y.jsx("source",{type:"image/webp"}),y.jsx("img",{className:"jobb-hero-img",loading:"lazy",src:c6,alt:"hero image of a women laughing"})]}),y.jsxs("div",{children:[y.jsx("article",{className:"search-opening-text",children:y.jsx("h1",{children:"Lediga jobb för hela Sverige!"})}),y.jsx("button",{style:{background:"#f09711",color:"black",position:"relative"},className:"available-jobs-btn",onClick:()=>e(t?"/Jobchaser/User-profile":"/Jobchaser/Sign-in"),children:"Bli medlem"})]})]})},d6="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M45.35%206.1709H19.41C16.8178%206.17618%2014.3333%207.20827%2012.5003%209.04123C10.6674%2010.8742%209.63528%2013.3587%209.62999%2015.9509V52.2709C9.6272%2053.3655%209.92973%2054.4392%2010.5036%2055.3713C11.0775%2056.3034%2011.9%2057.057%2012.8787%2057.5474C13.8573%2058.0377%2014.9533%2058.2454%2016.0435%2058.1471C17.1337%2058.0488%2018.1748%2057.6484%2019.05%2056.9909L31.25%2047.8509C31.5783%2047.6074%2031.9762%2047.4759%2032.385%2047.4759C32.7938%2047.4759%2033.1917%2047.6074%2033.52%2047.8509L45.71%2056.9809C46.5842%2057.6387%2047.6246%2058.0397%2048.7142%2058.1387C49.8038%2058.2378%2050.8994%2058.0311%2051.8779%2057.5418C52.8565%2057.0525%2053.6793%2056.3001%2054.2537%2055.3689C54.8282%2054.4378%2055.1317%2053.365%2055.13%2052.2709V15.9509C55.1247%2013.3587%2054.0926%2010.8742%2052.2597%209.04123C50.4267%207.20827%2047.9422%206.17618%2045.35%206.1709Z'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e",f6="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M45.35%206.1709H19.41C16.8178%206.17618%2014.3333%207.20827%2012.5003%209.04123C10.6674%2010.8742%209.63528%2013.3587%209.62999%2015.9509V52.2709C9.6272%2053.3655%209.92973%2054.4392%2010.5036%2055.3713C11.0775%2056.3034%2011.9%2057.057%2012.8787%2057.5474C13.8573%2058.0377%2014.9533%2058.2454%2016.0435%2058.1471C17.1337%2058.0488%2018.1748%2057.6484%2019.05%2056.9909L31.25%2047.8509C31.5783%2047.6074%2031.9762%2047.4759%2032.385%2047.4759C32.7938%2047.4759%2033.1917%2047.6074%2033.52%2047.8509L45.71%2056.9809C46.5842%2057.6387%2047.6246%2058.0397%2048.7142%2058.1387C49.8038%2058.2378%2050.8994%2058.0311%2051.8779%2057.5418C52.8565%2057.0525%2053.6793%2056.3001%2054.2537%2055.3689C54.8282%2054.4378%2055.1317%2053.365%2055.13%2052.2709V15.9509C55.1247%2013.3587%2054.0926%2010.8742%2052.2597%209.04123C50.4267%207.20827%2047.9422%206.17618%2045.35%206.1709Z'%20fill='%23000000'/%3e%3c/g%3e%3c/svg%3e";function p6({style:t,jobObj:e}){const[n,r]=I.useState(null),[i,s]=I.useState(null),{savedJobAds:o,setSavedJobAds:l,isOnline:a}=I.useContext(an);I.useEffect(()=>{const c=o.map(d=>d.id);if(c.includes(e.id)&&n===null){console.log("This ad is already saved: ",e.id,c),s(!0);return}h(n)},[n]);function u(c){if(c.target,i){r(!1),s(null);return}a&&r(d=>!d)}function h(c){if(c===!0)e.saved=!0,o.push(e),Yv(o,a.userId);else if(c===!1&&o.length!==0){const d=o.map(g=>{if(g.id===e.id)return null;if(g.id!==e.id)return g});l(d.filter(g=>g!==null)),Yv(d,a.userId)}}return y.jsx("img",{onClick:u,tabIndex:0,className:t,src:n||i?f6:d6,alt:"save to favorite button"})}const g6="/Jobchaser/assets/Jobchaser-log-vQprY9hQ.svg";function vC(t){const{id:e,headline:n,duration:{label:r},employer:{name:i},working_hours_type:{label:s},employment_type:{label:o},occupation:{label:l},workplace_address:{municipality:a},last_publication_date:u,webpage_url:h,logo_url:c}=t;return y.jsxs("li",{className:"card",children:[y.jsx(p6,{style:"favorite-btn",jobObj:t}),y.jsx("div",{className:"card-logo-container",children:y.jsx("img",{src:c||g6,alt:`Logo for ${i}`})}),y.jsxs("article",{className:"information-container",children:[y.jsx("div",{className:"card-title-container",children:y.jsx("a",{style:{color:"black"},href:h,children:y.jsx("h2",{children:n})})}),y.jsxs("div",{className:"details-container",children:[y.jsxs("div",{className:"upper-job-details",children:[y.jsx("p",{children:i}),y.jsxs("p",{children:["Position: ",y.jsx("span",{style:{fontWeight:"500"},children:l})]}),y.jsxs("p",{children:["Kommun: ",y.jsx("span",{style:{fontWeight:"500"},children:a})]})]}),y.jsxs("div",{className:"lower-job-details",children:[y.jsxs("p",{children:["Omfattning: ",s]}),y.jsxs("p",{children:["Varaktighet: ",r]}),y.jsxs("p",{children:["Anställningsform: ",o]})]})]})]}),y.jsxs("div",{className:"footer",children:[y.jsx("a",{href:h,children:y.jsx("p",{style:{color:"#3E619F"},children:"Besök webbplatsen"})}),y.jsxs("div",{children:[y.jsx("p",{children:"Sista datum: "}),y.jsx("p",{children:u})]})]})]},e)}const m6=({jobs:t})=>y.jsx("div",{className:"card-container",children:y.jsx("ul",{className:"card-layout",children:t.map(e=>vC(e))})});function v6(){const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(null),{setTextColorHeader:o,setSavedJobAds:l,savedJobAds:a,setJobs:u,jobs:h}=I.useContext(an);o("black");const c=d=>e(d.target.value);return I.useEffect(()=>{fetch("https://jobsearch.api.jobtechdev.se/search?q="+n).then(d=>d.json()).then(d=>{const g=d.hits.map(m=>{const w="Information saknas";return m.duration.label===null&&(m.duration.label=w),m.working_hours_type.label===null&&(m.working_hours_type.label=w),m.employment_type.label===null&&(m.employment_type.label=w),m});u(g)}).catch(d=>{console.log(d),s(d)})},[n]),y.jsxs(y.Fragment,{children:[y.jsx(h6,{}),y.jsx("form",{tabIndex:0,className:"job-form",onSubmit:d=>{d.preventDefault(),r(t)},children:y.jsxs("div",{className:"input-container",children:[y.jsx("button",{type:"submit",className:"search-btn",children:y.jsx("img",{src:u6,alt:"magnifying glass"})}),y.jsx("input",{className:"search-input",value:t,onChange:c,type:"text",placeholder:"Jobbtitel, nyckelord eller stad","aria-label":"Search bar for job ads"})]})}),Array.isArray(h)&&h.length!==0&&y.jsx(m6,{jobs:h}),i&&y.jsx("div",{className:"error-container",children:y.jsx("h1",{children:i})})]})}const y6="/Jobchaser/assets/Female pp-Cja9UEM7.png",_6="/Jobchaser/assets/Male pp-gAItaz0u.png",w6="/Jobchaser/assets/Female pp-1-Dy8qnpCo.png",E6="/Jobchaser/assets/Male pp-1-e-OwLf6a.png",C6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgB3ZS9DcIwEIXfORGigxGyQiREnRQBSrJBsgFMwgiwAfRQpAMBEhmBEVIi8mMsByElGAnK4zXWPX/3JMv2AS3Jc7DED+LAiwZwDCJIRPIwnuGbQCY86c2L10fZ8VDJhXIcZWXKDWEXKblJ9hbGjCd5Gq2VMcUnEVY02MavQIa8gH2PIelqBpRv5fOGx5AX+vpL4RuhXPjt58GRrwdP95YZoT/x60Pm+rMqyQRUhXrVpegZm5nxti5KNY0suDTcpc+2jdxPHBQWGUOZ8Q90bh3S9+OHDQAAAABJRU5ErkJggg==",S6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgB1dQxT8JAFAfw/6OtxqXB6OYgiR9ASYS5mJD4CXR1d3F2Mf0klm/gLEZkIpGElITv0bGloTweBzQtLQlsxxt67d3vLn3X1wO2gv/bdzggdPPx5L3gK7kFB04NhJ5q93kBDT2fXfWCIMj5XJKwrA+5VmFan9gnNPRMJ1XDMHKepBxeQHQr++DIc/ZT/8mwLzvZp/vvr02n7n568YT48ll5IvKZuW+u6RuK4aiJ82RcHDoOLwnKHIwr1Ox6glyUBrvU/PWyPcfkJUnXtm2P0o5hm7cRNbqEHaGrz5QrJEHl1cHDg8dahvvp3ejhunRBjT1xnPowDJVfna7mTBDLz8wtavzUly0YHYTGedmiOvvTm9d6kiQtKdVOFEXKLwBq9QCB/JQuZAAAAABJRU5ErkJggg==",Qv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAJCAYAAACIYoQoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE6SURBVHgB1ZRPToQwFMbfo8Swc7gBcwQSY+KOzahLuQHcwDnJHMG5gS5NdMFOoyZyA+cG/FkZp536UXQSLCS6qy8hpV9/PPryvpboR+iXxRX9IVzj27a1eG+Q8GmRkaZMP55d0m824BiPAjMMWdM0A55NstdkRuogoZ1eQYkg1VBT8mXJcVFbP3eMr6pqJoRI8LrCY3hmTqWUZRiGNevn02skuKCpYFrz0V2+34BjPLoHnqZ5orVH/kdOmjfjCaGL7XKgOcYrpXKt9Sjf6Vhf9nZ9OI/IV28WJcWcT26tBK7xsGsEu1o8CpzDrpv+4gneLZ//K92c2Wm9L3JrDitCF8S71Ixm6h2OfuoaT988Fehe2o3dJAgCw/tmSaFiQTEf35df8I2xjBQ8mtI1Hh1DcTGsuec7C0Mz/CcdKSqPumuAJwAAAABJRU5ErkJggg==",I6=[{id:"DA86E2400000000006174283575328768",userName:"Sofia Lundén",header:"Fantastiskt jobbsökningsplattform!",content:"Jag har testat många jobbsökningsplattformar, men Jobchaser sticker ut för sin effektivitet och effektivitet. Sökfilterna är omfattande, vilket gör att jag snabbt kan begränsa mina alternativ. Dessutom håller notifieringssystemet mig uppdaterad om nya listor som matchar mina kriterier. Tack vare Jobchaser landade jag mitt drömjobb inom veckor efter att ha använt plattformen. Kunde inte vara lyckligare!"},{id:"IO91FPSA2019418445971456",userName:"Douglas Fowler",header:"Effektiv och effektiv.",content:"Jobchaser har varit en absolut spelväxlare för mig i min jobbjakt. Gränssnittet är användarvänligt, vilket gör det enkelt att navigera bland listor och ansöka om relevanta positioner. Jag uppskattar särskilt funktionen för personliga jobbförslag, som har hjälpt mig att upptäcka möjligheter jag annars inte skulle ha hittat. Rekommenderas varmt!"},{id:"SD134UQB6568605363732480",userName:"Catherine Simpson",header:"Ett måste-ha verktyg för jobbsökande!",content:"Jobchaser är ett måste-ha verktyg för alla som är på jobbjakt. Det som skiljer det åt är dess intuitiva design och robusta funktioner. Möjligheten att spara favoritlistor och följa ansökningsstatus har avsevärt effektiviserat min jobbsökningsprocess. Plattformens omfattande databas ser till att jag aldrig tar slut på alternativ. Kudos till Jobchaser-teamet för att ha skapat en sådan värdefull resurs."},{id:"RX85MDYP8606513606164480",userName:"Simon Liamsson",header:"Oersättlig resurs för jobbsökande!",content:"Som nyligen examinerad som går in på arbetsmarknaden har Jobchaser varit en ovärderlig resurs. Inte bara samlar det jobblistor från olika källor, utan det ger också insikter om företagskulturer och intervjuupplevelser delade av andra användare. Den gemenskapliga aspekten lägger till en unik dimension på plattformen, vilket främjar samarbete och stöd bland jobbsökande. Tack vare Jobchaser säkrade jag flera jobberbjudanden på en konkurrensutsatt marknad. Mycket imponerad!"}],T6=()=>{const{isDarkTheme:t,bgTheme:e,color:n}=I.useContext(an),r=[y6,_6,w6,E6],i=[C6,S6,Qv,Qv];return y.jsxs("div",{style:{color:n},className:"reviews-container",children:[y.jsx("h3",{style:{color:n},children:"Recensioner"}),y.jsx("ul",{className:"reviews-card-layout",children:I6.map((s,o)=>y.jsxs("li",{style:{background:t?"black":"white",border:"1px solid whitesmoke"},tabIndex:0,"aria-label":"A review card",className:"review-card",children:[y.jsxs("div",{className:"upper-container",children:[y.jsx("div",{className:"pp-container",children:y.jsx("img",{src:r[o],alt:"Profile pic"})}),y.jsx("div",{className:"ratings-container",children:y.jsx("img",{loading:"lazy",src:i[o],alt:"Ratings, five stars"})})]}),y.jsxs("article",{children:[y.jsxs("h4",{children:[y.jsx("span",{className:"user-highlight",children:s.userName})," har lämnat en recension."]}),y.jsxs("div",{className:"text-container",children:[y.jsx("h5",{children:s.header}),y.jsx("p",{children:s.content})]})]})]},s.id))})]})},k6="/Jobchaser/assets/amazon-white-color-B6Vmuslb.svg",A6="/Jobchaser/assets/amazon-dark-color-DRi9NAKT.svg",R6="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.0014%2016.3109C30.0014%2015.1598%2029.9061%2014.3198%2029.6998%2013.4487H16.2871V18.6442H24.1601C24.0014%2019.9354%2023.1442%2021.8798%2021.2394%2023.1864L21.2127%2023.3604L25.4536%2026.58L25.7474%2026.6087C28.4458%2024.1665%2030.0014%2020.5731%2030.0014%2016.3109Z'%20fill='%234285F4'/%3e%3cpath%20d='M16.2863%2029.9998C20.1434%2029.9998%2023.3814%2028.7553%2025.7466%2026.6086L21.2386%2023.1863C20.0323%2024.0108%2018.4132%2024.5863%2016.2863%2024.5863C12.5086%2024.5863%209.30225%2022.1441%208.15929%2018.7686L7.99176%2018.7825L3.58208%2022.127L3.52441%2022.2841C5.87359%2026.8574%2010.699%2029.9998%2016.2863%2029.9998Z'%20fill='%2334A853'/%3e%3cpath%20d='M8.15964%2018.769C7.85806%2017.8979%207.68352%2016.9645%207.68352%2016.0001C7.68352%2015.0356%207.85806%2014.1023%208.14377%2013.2312L8.13578%2013.0456L3.67083%209.64746L3.52475%209.71556C2.55654%2011.6134%202.00098%2013.7445%202.00098%2016.0001C2.00098%2018.2556%202.55654%2020.3867%203.52475%2022.2845L8.15964%2018.769Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M16.2864%207.4133C18.9689%207.4133%2020.7784%208.54885%2021.8102%209.4978L25.8419%205.64C23.3658%203.38445%2020.1435%202%2016.2864%202C10.699%202%205.8736%205.1422%203.52441%209.71549L8.14345%2013.2311C9.30229%209.85555%2012.5086%207.4133%2016.2864%207.4133Z'%20fill='%23EB4335'/%3e%3c/svg%3e",N6="/Jobchaser/assets/netflix-icon-C9XciuAf.svg",x6="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-3%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eAndroid-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-304.000000,%20-560.000000)'%20fill='%2395CF00'%3e%3cpath%20d='M330.727009,569.600905%20C329.935377,569.600905%20329.294532,568.977195%20329.294532,568.206729%20C329.294532,567.436264%20329.935377,566.815376%20330.727009,566.815376%20C331.518641,566.815376%20332.159486,567.436264%20332.159486,568.206729%20C332.159486,568.977195%20331.518641,569.600905%20330.727009,569.600905%20L330.727009,569.600905%20Z%20M319.272991,569.600905%20C318.481359,569.600905%20317.840514,568.977195%20317.840514,568.206729%20C317.840514,567.436264%20318.481359,566.815376%20319.272991,566.815376%20C320.064623,566.815376%20320.705468,567.436264%20320.705468,568.206729%20C320.705468,568.977195%20320.064623,569.600905%20319.272991,569.600905%20L319.272991,569.600905%20Z%20M331.573737,564.018558%20L332.107291,563.233981%20L332.640845,562.460694%20L333.829743,560.722208%20C333.97763,560.507719%20333.916736,560.219853%20333.696355,560.078742%20C333.478873,559.934809%20333.180199,559.994075%20333.038111,560.208564%20L331.222867,562.852982%20L330.677713,563.648847%20C328.952361,562.996915%20327.029826,562.632849%20325,562.632849%20C322.973074,562.632849%20321.047639,562.996915%20319.322287,563.648847%20L318.780033,562.852982%20L318.243579,562.071228%20L316.967688,560.208564%20C316.819801,559.994075%20316.524027,559.937631%20316.303645,560.078742%20C316.086164,560.219853%20316.025269,560.507719%20316.170257,560.722208%20L317.359155,562.460694%20L317.892709,563.233981%20L318.429163,564.018558%20C314.37821,565.855822%20311.637945,569.335616%20311.637945,573.317766%20L338.362055,573.317766%20C338.362055,569.335616%20335.62179,565.855822%20331.573737,564.018558%20Z%20M311.843828,575.174785%20L311.637945,575.174785%20L311.637945,595.613286%20C311.637945,597.236061%20312.992129,598.556859%20314.662386,598.556859%20L316.842999,598.556859%20C316.767606,598.802392%20316.727009,599.059214%20316.727009,599.330147%20L316.727009,605.214471%20C316.727009,606.75258%20318.011599,608%20319.591964,608%20C321.172328,608%20322.456918,606.75258%20322.456918,605.214471%20L322.456918,599.330147%20C322.456918,599.059214%20322.413422,598.802392%20322.340928,598.556859%20L327.659072,598.556859%20C327.586578,598.802392%20327.545982,599.059214%20327.545982,599.330147%20L327.545982,605.214471%20C327.545982,606.75258%20328.827672,608%20330.408036,608%20C331.991301,608%20333.275891,606.75258%20333.275891,605.214471%20L333.275891,599.330147%20C333.275891,599.059214%20333.232394,598.802392%20333.157001,598.556859%20L335.340514,598.556859%20C337.010771,598.556859%20338.362055,597.236061%20338.362055,595.613286%20L338.362055,575.174785%20L311.843828,575.174785%20Z%20M306.864954,575.174785%20C305.28169,575.174785%20304,576.422205%20304,577.960314%20L304,589.884184%20C304,591.422293%20305.28169,592.669713%20306.864954,592.669713%20C308.445319,592.669713%20309.727009,591.422293%20309.727009,589.884184%20L309.727009,577.960314%20C309.727009,576.422205%20308.445319,575.174785%20306.864954,575.174785%20Z%20M343.137945,575.174785%20C341.554681,575.174785%20340.272991,576.422205%20340.272991,577.960314%20L340.272991,589.884184%20C340.272991,591.422293%20341.554681,592.669713%20343.137945,592.669713%20C344.71831,592.669713%20346,591.422293%20346,589.884184%20L346,577.960314%20C346,576.422205%20344.71831,575.174785%20343.137945,575.174785%20Z'%20id='Android'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",P6="/Jobchaser/assets/home-page-hero-pic-BpeKQlgR.avif";function O6(){const{isDarkTheme:t,bgTheme:e,color:n,setTextColorHeader:r,isOnline:i}=I.useContext(an);r("white");const s=Ku();return Rl(),I.useEffect(()=>{const o=new IntersectionObserver(a=>{a.forEach(u=>{u.isIntersecting&&u.target.classList.add("show-logo")})});Array.from(document.getElementsByClassName("company-logo-container")).forEach(a=>o.observe(a))},[]),y.jsx(y.Fragment,{children:y.jsxs("div",{className:"home-layout",children:[y.jsxs("div",{className:"hero-container",children:[y.jsxs("picture",{children:[y.jsx("source",{type:"image/webp"}),y.jsx("img",{className:"home-hero-img",loading:"lazy",src:P6,alt:"hero image of a women laughing"})]}),y.jsxs("div",{className:"opening-text-container",children:[y.jsxs("article",{className:"opening-text",children:[y.jsxs("h1",{children:["Vi hjälper dig med ditt ",y.jsx("span",{style:{color:"#f09711"},children:"jobbsökande!"})]}),y.jsx("p",{children:"Välkommen till nästa steg i din karriär - vi tar dig närmare anställningen du strävar efter."})]}),y.jsxs("div",{className:"btn-layout",children:[y.jsx("button",{className:"available-jobs-btn",onClick:()=>s("/Jobchaser/Find-job"),children:"Lediga jobb"}),y.jsx("button",{className:"available-jobs-btn",onClick:()=>s(i?"/Jobchaser/User-profile":"/Jobchaser/Sign-in"),children:i?"Profil":"Registrera dig"})]})]})]}),y.jsxs("div",{className:"middle-container",children:[y.jsx("h2",{style:{color:n},children:"Partnerskap med företag världen över"}),y.jsxs("div",{className:"companies-logo-layout",children:[y.jsx("div",{className:"company-logo-container",children:y.jsx("img",{loading:"lazy",src:t?k6:A6,alt:"Amazon logo"})}),y.jsx("div",{className:"company-logo-container",children:y.jsx("img",{loading:"lazy",src:R6,alt:"Google logo"})}),y.jsx("div",{className:"company-logo-container",children:y.jsx("img",{loading:"lazy",src:N6,alt:"Netflix logo"})}),y.jsx("div",{className:"company-logo-container",children:y.jsx("img",{loading:"lazy",src:x6,alt:"Android logo"})})]})]}),y.jsx(T6,{})]})})}var Nl=t=>t.type==="checkbox",Ui=t=>t instanceof Date,st=t=>t==null;const yC=t=>typeof t=="object";var Ke=t=>!st(t)&&!Array.isArray(t)&&yC(t)&&!Ui(t),D6=t=>Ke(t)&&t.target?Nl(t.target)?t.target.checked:t.target.value:t,L6=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,M6=(t,e)=>t.has(L6(e)),xl=t=>Array.isArray(t)?t.filter(Boolean):[],be=t=>t===void 0,j=(t,e,n)=>{if(!e||!Ke(t))return n;const r=xl(e.split(/[,[\].]+?/)).reduce((i,s)=>st(i)?i:i[s],t);return be(r)||r===t?be(t[e])?n:t[e]:r};const Jv={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Zt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Tn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Jt.createContext(null);var b6=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==Zt.all&&(e._proxyFormState[o]=!r||Zt.all),n&&(n[o]=!0),t[o]}});return i},Dt=t=>Ke(t)&&!Object.keys(t).length,F6=(t,e,n)=>{const{name:r,...i}=t;return Dt(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(s=>e[s]===(!n||Zt.all))},Rh=t=>Array.isArray(t)?t:[t];function U6(t){const e=Jt.useRef(t);e.current=t,Jt.useEffect(()=>{const n=!t.disabled&&e.current.subject.subscribe({next:e.current.callback});return()=>{n&&n.unsubscribe()}},[t.disabled])}var mn=t=>typeof t=="string",j6=(t,e,n,r)=>{const i=Array.isArray(t);return mn(t)?(r&&e.watch.add(t),j(n,t)):i?t.map(s=>(r&&e.watch.add(s),j(n,s))):(r&&(e.watchAll=!0),n)},Tu=t=>typeof t=="function",_C=t=>{for(const e in t)if(Tu(t[e]))return!0;return!1},$6=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},$g=t=>/^\w*$/.test(t),wC=t=>xl(t.replace(/["|']|\]/g,"").split(/\.|\[/));function fe(t,e,n){let r=-1;const i=$g(e)?[e]:wC(e),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let a=n;if(r!==o){const u=t[l];a=Ke(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[l]=a,t=t[l]}return t}const ff=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=j(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Ke(o)&&ff(o,e)}}};var Xv=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),V6=(t,e,n)=>{const r=xl(j(t,n));return fe(r,"root",e[n]),fe(t,n,r),t},ku=t=>typeof t=="boolean",Vg=t=>t.type==="file",Ea=t=>mn(t)||Jt.isValidElement(t),Bg=t=>t.type==="radio",Au=t=>t instanceof RegExp;const Zv={value:!1,isValid:!1},ey={value:!0,isValid:!0};var EC=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!be(t[0].attributes.value)?be(t[0].value)||t[0].value===""?ey:{value:t[0].value,isValid:!0}:ey:Zv}return Zv};const ty={isValid:!1,value:null};var CC=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,ty):ty;function ny(t,e,n="validate"){if(Ea(t)||Array.isArray(t)&&t.every(Ea)||ku(t)&&!t)return{type:n,message:Ea(t)?t:"",ref:e}}var Ci=t=>Ke(t)&&!Au(t)?t:{value:t,message:""},ry=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:l,maxLength:a,minLength:u,min:h,max:c,pattern:d,validate:g,name:m,valueAsNumber:w,mount:T,disabled:p}=t._f;if(!T||p)return{};const f=o?o[0]:s,v=F=>{r&&f.reportValidity&&(f.setCustomValidity(ku(F)?"":F||" "),f.reportValidity())},E={},N=Bg(s),L=Nl(s),x=N||L,b=(w||Vg(s))&&!s.value||e===""||Array.isArray(e)&&!e.length,K=$6.bind(null,m,n,E),H=(F,J,ue,Re=Tn.maxLength,Et=Tn.minLength)=>{const Ye=F?J:ue;E[m]={type:F?Re:Et,message:Ye,ref:s,...K(F?Re:Et,Ye)}};if(i?!Array.isArray(e)||!e.length:l&&(!x&&(b||st(e))||ku(e)&&!e||L&&!EC(o).isValid||N&&!CC(o).isValid)){const{value:F,message:J}=Ea(l)?{value:!!l,message:l}:Ci(l);if(F&&(E[m]={type:Tn.required,message:J,ref:f,...K(Tn.required,J)},!n))return v(J),E}if(!b&&(!st(h)||!st(c))){let F,J;const ue=Ci(c),Re=Ci(h);if(!st(e)&&!isNaN(e)){const Et=s.valueAsNumber||e&&+e;st(ue.value)||(F=Et>ue.value),st(Re.value)||(J=Et<Re.value)}else{const Et=s.valueAsDate||new Date(e),Ye=B=>new Date(new Date().toDateString()+" "+B),In=s.type=="time",O=s.type=="week";mn(ue.value)&&e&&(F=In?Ye(e)>Ye(ue.value):O?e>ue.value:Et>new Date(ue.value)),mn(Re.value)&&e&&(J=In?Ye(e)<Ye(Re.value):O?e<Re.value:Et<new Date(Re.value))}if((F||J)&&(H(!!F,ue.message,Re.message,Tn.max,Tn.min),!n))return v(E[m].message),E}if((a||u)&&!b&&(mn(e)||i&&Array.isArray(e))){const F=Ci(a),J=Ci(u),ue=!st(F.value)&&e.length>F.value,Re=!st(J.value)&&e.length<J.value;if((ue||Re)&&(H(ue,F.message,J.message),!n))return v(E[m].message),E}if(d&&!b&&mn(e)){const{value:F,message:J}=Ci(d);if(Au(F)&&!e.match(F)&&(E[m]={type:Tn.pattern,message:J,ref:s,...K(Tn.pattern,J)},!n))return v(J),E}if(g){if(Tu(g)){const F=await g(e),J=ny(F,f);if(J&&(E[m]={...J,...K(Tn.validate,J.message)},!n))return v(J.message),E}else if(Ke(g)){let F={};for(const J in g){if(!Dt(F)&&!n)break;const ue=ny(await g[J](e),f,J);ue&&(F={...ue,...K(J,ue.message)},v(ue.message),n&&(E[m]=F))}if(!Dt(F)&&(E[m]={ref:f,...F},!n))return E}}return v(!0),E},B6=t=>{const e=t.constructor&&t.constructor.prototype;return Ke(e)&&e.hasOwnProperty("isPrototypeOf")},pf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Fr(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(pf&&(t instanceof Blob||t instanceof FileList))&&(n||Ke(t)))if(e=n?[]:{},!Array.isArray(t)&&!B6(t))e=t;else for(const r in t)e[r]=Fr(t[r]);else return t;return e}var iy=t=>({isOnSubmit:!t||t===Zt.onSubmit,isOnBlur:t===Zt.onBlur,isOnChange:t===Zt.onChange,isOnAll:t===Zt.all,isOnTouch:t===Zt.onTouched});function z6(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=be(t)?r++:t[e[r++]];return t}function W6(t){for(const e in t)if(!be(t[e]))return!1;return!0}function rt(t,e){const n=$g(e)?[e]:wC(e),r=n.length==1?t:z6(t,n),i=n[n.length-1];let s;r&&delete r[i];for(let o=0;o<n.slice(0,-1).length;o++){let l=-1,a;const u=n.slice(0,-(o+1)),h=u.length-1;for(o>0&&(s=t);++l<u.length;){const c=u[l];a=a?a[c]:t[c],h===l&&(Ke(a)&&Dt(a)||Array.isArray(a)&&W6(a))&&(s?delete s[c]:delete t[c]),s=a}}return t}function Nh(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var Ru=t=>st(t)||!yC(t);function ji(t,e){if(Ru(t)||Ru(e))return t===e;if(Ui(t)&&Ui(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Ui(s)&&Ui(o)||Ke(s)&&Ke(o)||Array.isArray(s)&&Array.isArray(o)?!ji(s,o):s!==o)return!1}}return!0}var gf=t=>{const e=t?t.ownerDocument:0,n=e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement;return t instanceof n},SC=t=>t.type==="select-multiple",H6=t=>Bg(t)||Nl(t),xh=t=>gf(t)&&t.isConnected;function Nu(t,e={}){const n=Array.isArray(t);if(Ke(t)||n)for(const r in t)Array.isArray(t[r])||Ke(t[r])&&!_C(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Nu(t[r],e[r])):st(t[r])||(e[r]=!0);return e}function IC(t,e,n){const r=Array.isArray(t);if(Ke(t)||r)for(const i in t)Array.isArray(t[i])||Ke(t[i])&&!_C(t[i])?be(e)||Ru(n[i])?n[i]=Array.isArray(t[i])?Nu(t[i],[]):{...Nu(t[i])}:IC(t[i],st(e)?{}:e[i],n[i]):n[i]=!ji(t[i],e[i]);return n}var Ph=(t,e)=>IC(t,e,Nu(e)),TC=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>be(t)?t:e?t===""?NaN:t&&+t:n&&mn(t)?new Date(t):r?r(t):t;function Oh(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Vg(e)?e.files:Bg(e)?CC(t.refs).value:SC(e)?[...e.selectedOptions].map(({value:n})=>n):Nl(e)?EC(t.refs).value:TC(be(e.value)?t.ref.value:e.value,t)}var G6=(t,e,n,r)=>{const i={};for(const s of t){const o=j(e,s);o&&fe(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Vs=t=>be(t)?void 0:Au(t)?t.source:Ke(t)?Au(t.value)?t.value.source:t.value:t,K6=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function sy(t,e,n){const r=j(t,n);if(r||$g(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=j(e,s),l=j(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};i.pop()}return{name:n}}var q6=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,Y6=(t,e)=>!xl(j(t,e)).length&&rt(t,e);const Q6={mode:Zt.onSubmit,reValidateMode:Zt.onChange,shouldFocusError:!0};function J6(t={}){let e={...Q6,...t},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},i=Fr(e.defaultValues)||{},s=e.shouldUnregister?{}:Fr(i),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},a,u=0,h={};const c={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:Nh(),array:Nh(),state:Nh()},g=iy(e.mode),m=iy(e.reValidateMode),w=e.criteriaMode===Zt.all,T=_=>C=>{clearTimeout(u),u=window.setTimeout(_,C)},p=async _=>{let C=!1;return c.isValid&&(C=e.resolver?Dt((await x()).errors):await K(r,!0),!_&&C!==n.isValid&&(n.isValid=C,d.state.next({isValid:C}))),C},f=(_,C=[],S,D,U=!0,A=!0)=>{if(D&&S){if(o.action=!0,A&&Array.isArray(j(r,_))){const $=S(j(r,_),D.argA,D.argB);U&&fe(r,_,$)}if(c.errors&&A&&Array.isArray(j(n.errors,_))){const $=S(j(n.errors,_),D.argA,D.argB);U&&fe(n.errors,_,$),Y6(n.errors,_)}if(c.touchedFields&&A&&Array.isArray(j(n.touchedFields,_))){const $=S(j(n.touchedFields,_),D.argA,D.argB);U&&fe(n.touchedFields,_,$)}c.dirtyFields&&(n.dirtyFields=Ph(i,s)),d.state.next({isDirty:F(_,C),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else fe(s,_,C)},v=(_,C)=>{fe(n.errors,_,C),d.state.next({errors:n.errors})},E=(_,C,S,D)=>{const U=j(r,_);if(U){const A=j(s,_,be(S)?j(i,_):S);be(A)||D&&D.defaultChecked||C?fe(s,_,C?A:Oh(U._f)):Re(_,A),o.mount&&p()}},N=(_,C,S,D,U)=>{let A=!1;const $={name:_},ke=j(n.touchedFields,_);if(c.isDirty){const Ct=n.isDirty;n.isDirty=$.isDirty=F(),A=Ct!==$.isDirty}if(c.dirtyFields&&(!S||D)){const Ct=j(n.dirtyFields,_);ji(j(i,_),C)?rt(n.dirtyFields,_):fe(n.dirtyFields,_,!0),$.dirtyFields=n.dirtyFields,A=A||Ct!==j(n.dirtyFields,_)}return S&&!ke&&(fe(n.touchedFields,_,S),$.touchedFields=n.touchedFields,A=A||c.touchedFields&&ke!==S),A&&U&&d.state.next($),A?$:{}},L=async(_,C,S,D)=>{const U=j(n.errors,_),A=c.isValid&&n.isValid!==C;if(t.delayError&&S?(a=T(()=>v(_,S)),a(t.delayError)):(clearTimeout(u),a=null,S?fe(n.errors,_,S):rt(n.errors,_)),(S?!ji(U,S):U)||!Dt(D)||A){const $={...D,...A?{isValid:C}:{},errors:n.errors,name:_};n={...n,...$},d.state.next($)}h[_]--,c.isValidating&&!Object.values(h).some($=>$)&&(d.state.next({isValidating:!1}),h={})},x=async _=>e.resolver?await e.resolver({...s},e.context,G6(_||l.mount,r,e.criteriaMode,e.shouldUseNativeValidation)):{},b=async _=>{const{errors:C}=await x();if(_)for(const S of _){const D=j(C,S);D?fe(n.errors,S,D):rt(n.errors,S)}else n.errors=C;return C},K=async(_,C,S={valid:!0})=>{for(const D in _){const U=_[D];if(U){const{_f:A,...$}=U;if(A){const ke=l.array.has(A.name),Ct=await ry(U,j(s,A.name),w,e.shouldUseNativeValidation,ke);if(Ct[A.name]&&(S.valid=!1,C))break;!C&&(j(Ct,A.name)?ke?V6(n.errors,Ct,A.name):fe(n.errors,A.name,Ct[A.name]):rt(n.errors,A.name))}$&&await K($,C,S)}}return S.valid},H=()=>{for(const _ of l.unMount){const C=j(r,_);C&&(C._f.refs?C._f.refs.every(S=>!xh(S)):!xh(C._f.ref))&&Gt(_)}l.unMount=new Set},F=(_,C)=>(_&&C&&fe(s,_,C),!ji(B(),i)),J=(_,C,S)=>{const D={...o.mount?s:be(C)?i:mn(_)?{[_]:C}:C};return j6(_,l,D,S)},ue=_=>xl(j(o.mount?s:i,_,t.shouldUnregister?j(i,_,[]):[])),Re=(_,C,S={})=>{const D=j(r,_);let U=C;if(D){const A=D._f;A&&(!A.disabled&&fe(s,_,TC(C,A)),U=pf&&gf(A.ref)&&st(C)?"":C,SC(A.ref)?[...A.ref.options].forEach($=>$.selected=U.includes($.value)):A.refs?Nl(A.ref)?A.refs.length>1?A.refs.forEach($=>(!$.defaultChecked||!$.disabled)&&($.checked=Array.isArray(U)?!!U.find(ke=>ke===$.value):U===$.value)):A.refs[0]&&(A.refs[0].checked=!!U):A.refs.forEach($=>$.checked=$.value===U):Vg(A.ref)?A.ref.value="":(A.ref.value=U,A.ref.type||d.watch.next({name:_})))}(S.shouldDirty||S.shouldTouch)&&N(_,U,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&O(_)},Et=(_,C,S)=>{for(const D in C){const U=C[D],A=`${_}.${D}`,$=j(r,A);(l.array.has(_)||!Ru(U)||$&&!$._f)&&!Ui(U)?Et(A,U,S):Re(A,U,S)}},Ye=(_,C,S={})=>{const D=j(r,_),U=l.array.has(_),A=Fr(C);fe(s,_,A),U?(d.array.next({name:_,values:s}),(c.isDirty||c.dirtyFields)&&S.shouldDirty&&(n.dirtyFields=Ph(i,s),d.state.next({name:_,dirtyFields:n.dirtyFields,isDirty:F(_,A)}))):D&&!D._f&&!st(A)?Et(_,A,S):Re(_,A,S),Xv(_,l)&&d.state.next({}),d.watch.next({name:_})},In=async _=>{const C=_.target;let S=C.name;const D=j(r,S);if(D){let U,A;const $=C.type?Oh(D._f):D6(_),ke=_.type===Jv.BLUR||_.type===Jv.FOCUS_OUT,Ct=!K6(D._f)&&!e.resolver&&!j(n.errors,S)&&!D._f.deps||q6(ke,j(n.touchedFields,S),n.isSubmitted,m,g),Pl=Xv(S,l,ke);fe(s,S,$),ke?(D._f.onBlur&&D._f.onBlur(_),a&&a(0)):D._f.onChange&&D._f.onChange(_);const Pc=N(S,$,ke,!1),RC=!Dt(Pc)||Pl;if(!ke&&d.watch.next({name:S,type:_.type}),Ct)return RC&&d.state.next({name:S,...Pl?{}:Pc});if(!ke&&Pl&&d.state.next({}),h[S]=(h[S],1),d.state.next({isValidating:!0}),e.resolver){const{errors:zg}=await x([S]),NC=sy(n.errors,r,S),Wg=sy(zg,r,NC.name||S);U=Wg.error,S=Wg.name,A=Dt(zg)}else U=(await ry(D,j(s,S),w,e.shouldUseNativeValidation))[S],A=await p(!0);D._f.deps&&O(D._f.deps),L(S,A,U,Pc)}},O=async(_,C={})=>{let S,D;const U=Rh(_);if(d.state.next({isValidating:!0}),e.resolver){const A=await b(be(_)?_:U);S=Dt(A),D=_?!U.some($=>j(A,$)):S}else _?(D=(await Promise.all(U.map(async A=>{const $=j(r,A);return await K($&&$._f?{[A]:$}:$)}))).every(Boolean),!(!D&&!n.isValid)&&p()):D=S=await K(r);return d.state.next({...!mn(_)||c.isValid&&S!==n.isValid?{}:{name:_},...e.resolver||!_?{isValid:S}:{},errors:n.errors,isValidating:!1}),C.shouldFocus&&!D&&ff(r,A=>A&&j(n.errors,A),_?U:l.mount),D},B=_=>{const C={...i,...o.mount?s:{}};return be(_)?C:mn(_)?j(C,_):_.map(S=>j(C,S))},G=(_,C)=>({invalid:!!j((C||n).errors,_),isDirty:!!j((C||n).dirtyFields,_),isTouched:!!j((C||n).touchedFields,_),error:j((C||n).errors,_)}),ge=_=>{_?Rh(_).forEach(C=>rt(n.errors,C)):n.errors={},d.state.next({errors:n.errors})},Te=(_,C,S)=>{const D=(j(r,_,{_f:{}})._f||{}).ref;fe(n.errors,_,{...C,ref:D}),d.state.next({name:_,errors:n.errors,isValid:!1}),S&&S.shouldFocus&&D&&D.focus&&D.focus()},vi=(_,C)=>Tu(_)?d.watch.subscribe({next:S=>_(J(void 0,C),S)}):J(_,C,!0),Gt=(_,C={})=>{for(const S of _?Rh(_):l.mount)l.mount.delete(S),l.array.delete(S),j(r,S)&&(C.keepValue||(rt(r,S),rt(s,S)),!C.keepError&&rt(n.errors,S),!C.keepDirty&&rt(n.dirtyFields,S),!C.keepTouched&&rt(n.touchedFields,S),!e.shouldUnregister&&!C.keepDefaultValue&&rt(i,S));d.watch.next({}),d.state.next({...n,...C.keepDirty?{isDirty:F()}:{}}),!C.keepIsValid&&p()},Or=(_,C={})=>{let S=j(r,_);const D=ku(C.disabled);return fe(r,_,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:_}},name:_,mount:!0,...C}}),l.mount.add(_),S?D&&fe(s,_,C.disabled?void 0:j(s,_,Oh(S._f))):E(_,!0,C.value),{...D?{disabled:C.disabled}:{},...e.shouldUseNativeValidation?{required:!!C.required,min:Vs(C.min),max:Vs(C.max),minLength:Vs(C.minLength),maxLength:Vs(C.maxLength),pattern:Vs(C.pattern)}:{},name:_,onChange:In,onBlur:In,ref:U=>{if(U){Or(_,C),S=j(r,_);const A=be(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,$=H6(A),ke=S._f.refs||[];if($?ke.find(Ct=>Ct===A):A===S._f.ref)return;fe(r,_,{_f:{...S._f,...$?{refs:[...ke.filter(xh),A,...Array.isArray(j(i,_))?[{}]:[]],ref:{type:A.type,name:_}}:{ref:A}}}),E(_,!1,void 0,A)}else S=j(r,_,{}),S._f&&(S._f.mount=!1),(e.shouldUnregister||C.shouldUnregister)&&!(M6(l.array,_)&&o.action)&&l.unMount.add(_)}}},un=()=>e.shouldFocusError&&ff(r,_=>_&&j(n.errors,_),l.mount),yi=(_,C)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let D=!0,U=Fr(s);d.state.next({isSubmitting:!0});try{if(e.resolver){const{errors:A,values:$}=await x();n.errors=A,U=$}else await K(r);Dt(n.errors)?(d.state.next({errors:{},isSubmitting:!0}),await _(U,S)):(C&&await C({...n.errors},S),un())}catch(A){throw D=!1,A}finally{n.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Dt(n.errors)&&D,submitCount:n.submitCount+1,errors:n.errors})}},kC=(_,C={})=>{j(r,_)&&(be(C.defaultValue)?Ye(_,j(i,_)):(Ye(_,C.defaultValue),fe(i,_,C.defaultValue)),C.keepTouched||rt(n.touchedFields,_),C.keepDirty||(rt(n.dirtyFields,_),n.isDirty=C.defaultValue?F(_,j(i,_)):F()),C.keepError||(rt(n.errors,_),c.isValid&&p()),d.state.next({...n}))},AC=(_,C={})=>{const S=_||i,D=Fr(S),U=_&&!Dt(_)?D:i;if(C.keepDefaultValues||(i=S),!C.keepValues){if(C.keepDirtyValues)for(const A of l.mount)j(n.dirtyFields,A)?fe(U,A,j(s,A)):Ye(A,j(U,A));else{if(pf&&be(_))for(const A of l.mount){const $=j(r,A);if($&&$._f){const ke=Array.isArray($._f.refs)?$._f.refs[0]:$._f.ref;try{if(gf(ke)){ke.closest("form").reset();break}}catch{}}}r={}}s=t.shouldUnregister?C.keepDefaultValues?Fr(i):{}:D,d.array.next({values:U}),d.watch.next({values:U})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!c.isValid||!!C.keepIsValid,o.watch=!!t.shouldUnregister,d.state.next({submitCount:C.keepSubmitCount?n.submitCount:0,isDirty:C.keepDirty||C.keepDirtyValues?n.isDirty:!!(C.keepDefaultValues&&!ji(_,i)),isSubmitted:C.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:C.keepDirty||C.keepDirtyValues?n.dirtyFields:C.keepDefaultValues&&_?Ph(i,_):{},touchedFields:C.keepTouched?n.touchedFields:{},errors:C.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:Or,unregister:Gt,getFieldState:G,_executeSchema:x,_focusError:un,_getWatch:J,_getDirty:F,_updateValid:p,_removeUnmounted:H,_updateFieldArray:f,_getFieldArray:ue,_subjects:d,_proxyFormState:c,get _fields(){return r},get _formValues(){return s},get _stateFlags(){return o},set _stateFlags(_){o=_},get _defaultValues(){return i},get _names(){return l},set _names(_){l=_},get _formState(){return n},set _formState(_){n=_},get _options(){return e},set _options(_){e={...e,..._}}},trigger:O,register:Or,handleSubmit:yi,watch:vi,setValue:Ye,getValues:B,reset:(_,C)=>AC(Tu(_)?_(s):_,C),resetField:kC,clearErrors:ge,unregister:Gt,setError:Te,setFocus:(_,C={})=>{const S=j(r,_),D=S&&S._f;if(D){const U=D.refs?D.refs[0]:D.ref;U.focus&&(U.focus(),C.shouldSelect&&U.select())}},getFieldState:G}}function X6(t={}){const e=Jt.useRef(),[n,r]=Jt.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:t.defaultValues});e.current||(e.current={...J6(t),formState:n});const i=e.current.control;return i._options=t,U6({subject:i._subjects.state,callback:Jt.useCallback(s=>{F6(s,i._proxyFormState,!0)&&(i._formState={...i._formState,...s},r({...i._formState}))},[i])}),Jt.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),Jt.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),e.current.formState=b6(n,i),e.current}function Dh({input:t,label:e,property:n,type:r,required:i,placeholder:s,errors:o,register:l}){const a=e.charAt(0).toLocaleUpperCase()+e.slice(1),u=d=>{let g,m;return d==="email"&&(g=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,m="Ogiltig e-postadress. Vänligen ange en giltig e-postadress."),d==="password"&&(g=/^(?=.*[A-Z])(?=.*\d)(?!.*<.*>).*.{6,}$/,m="Vänligen ange en sträng som innehåller minst en stor bokstav, en siffra och är minst 6 tecken lång."),d==="userName"&&(g=/^[a-zA-ZåäöÅÄÖ\s]{2,}$/,m="Vänligen ange en giltig sträng med minst två bokstäver."),{pattern:g,errorMessage:m}},{pattern:h,errorMessage:c}=u(n);return y.jsxs("div",{className:"form-control",children:[y.jsx("label",{style:{whiteSpace:"nowrap"},children:a}),t?y.jsx("input",{className:"post-job-data-input",placeholder:s,type:r,...l(n,{required:i,pattern:h})}):y.jsx("textarea",{wrap:"soft",rows:30,cols:10,...l(n,{required:i,pattern:!t&&/^[A-Za-z0-9.,\s]+$/})}),o[n]&&o[n].type==="required"&&y.jsxs("p",{className:"errorMsg",children:[a," är obligatoriskt."]}),o[n]&&o[n].type==="pattern"&&y.jsx("p",{className:"errorMsg",children:c})]})}const Z6=()=>{const{handleSubmit:t,register:e,formState:{errors:n}}=X6(),[r,i]=I.useState(!0),{auth:s,user:o,provider:l,signInWithRedirect:a,signInWithEmailAndPassword:u,createUserWithEmailAndPassword:h}=Rl(),c=()=>{a(s,l).catch(g=>{g.message,alert("Inloggningen misslyckades.")})},d=g=>{console.log(g);const{email:m,password:w,userName:T}=g;r?u(s,m,w).then(p=>{const f=p.user;console.log(f)}).catch(p=>{p.code,p.message,alert("Fel E-post eller lösenord.")}):h(s,m,w).then(p=>{const f=p.user;console.log(p),console.log(f),mC(f.uid,m,T,w)}).catch(p=>{p.code;const f=p.message;console.log(f),alert("Kontot existerar redan. Vänligen logga in eller återställ ditt lösenord om du har glömt det.")})};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"google-container",children:[y.jsx("h1",{children:"Kom igång"}),y.jsxs("div",{onClick:c,tabIndex:0,"aria-label":"sign in with google button",className:"google-btn-container",children:[y.jsx("div",{className:"google-img-cont",children:y.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google icon"})}),y.jsx("p",{children:"Logga in med Google"})]})]}),y.jsx("div",{className:"hr"}),y.jsxs("form",{className:"post-job-form",onSubmit:t(d),children:[r?y.jsx("h1",{children:"Logga in"}):y.jsx("h1",{children:"Skapa konto"}),y.jsxs("div",{children:[y.jsxs("div",{children:[!r&&y.jsx(Dh,{property:"userName",input:!0,label:"För- och efternamn",type:"text",required:!0,placeholder:"Skriv ditt för- och efternamn",errors:n,register:e}),y.jsx(Dh,{property:"email",input:!0,label:"e-post",type:"text",required:!0,placeholder:"Skriv in e-post",errors:n,register:e}),y.jsx(Dh,{property:"password",input:!0,label:"lösenord",type:"password",required:!0,placeholder:"Skriv in lösenord",errors:n,register:e})]}),y.jsx("div",{onClick:()=>i(g=>!g),className:"create-account-container",children:r?y.jsx("p",{children:"Skapa konto?"}):y.jsx("p",{children:"Logga in"})})]}),y.jsx("div",{style:{alignSelf:"center"},children:y.jsx("button",{className:"submit-btn",children:r?"Logga in":"Skapa"})})]})]})},oy=()=>{Rl();const{setTextColorHeader:t,isOnline:e}=I.useContext(an);return t("white"),y.jsx(y.Fragment,{children:y.jsxs("div",{className:"sign-in-layout",children:[y.jsxs("picture",{children:[y.jsx("source",{type:"image/webp"}),y.jsx("img",{className:"signIn-hero-img",src:"https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"hero image of a women laughing"})]}),y.jsx("div",{className:"side-img-container"}),y.jsx("div",{className:"sign-in-cont",children:y.jsx(Z6,{})})]})})},eO="_profileContainer_1lnzj_1",tO="_profileImgCont_1lnzj_19",nO="_userContactInfo_1lnzj_55",Lh={profileContainer:eO,profileImgCont:tO,userContactInfo:nO},rO="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZCAYAAABVC4ivAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcaSURBVHgB7Z1pjBRFFMf/KOKB4dogoqLrFQ8UlfVA8YjGKyofjBrFCMQjGq8Y7wOFRPCjkZhoPKLfNJpoEGMiKrpeRMTghTfKrByiAQ/QVVbB5f2p7c0wOzv1qqe6u3qmf8k/fKCmt/ptTdWrV+/VDkDY7Ck6TjRCNEY0UrSTaLPoL9EaUUfPv0tEf6PAynDR+aI5opWibgf9I2oXzRAdjYI+jBY9JloBN8P2p/9Fi0RXiHZAk7O36FGYr393QvpSdLVoAJqQG0S/IznjVup90SFoEvYQLUB6xi3Xv6Lb0eAcIVqFbAxcrkdEu6IBOV60HtkbONKboh3RQJwJs+KHYuBIr4qGIWHSWHEPE82H2Vi48qvodRgP4VOYqYabkIEwPvWBogmicaITRNvBnZdEl4i6kFO4yJXgNro2wYywi0TbQ89eMItaB9xH9CzkmOfg9rIfiU5DfewiukW0weHnciqbiBxyDdxGL0ehz+mrFWbXp+0D4x8jkCPY2bXQvRyDOqcjGQaJnobe0A8iR8yE7qW44zsRyfOUsj/8Ro1CDmBIkqPT9kKdorORHi9AZ+jnkQNuRJgreovoZ9j79YdodwQMA+ol2F9kKdzcM1+cAd0AuAcBQ/dL8xL1umlxoffyIuz9a0fAPAD7C3yIbJkI3QLYgkDhOZvtBaYhez6BvZ9XwhNx9vr9wdjEWEubdaJ5yJ5nFG3GwRO+jWwLHX4Ns3pnjWbK2h+e8GnkkYo2nyEMPofZCNXiYHja5vs08r6KNksQBjw8+NHShnHmIfCATyNrgt+rEA4/Wf5/MExEr258Gnmgos0mhMNvlv8f1KO68WlkzclCSGdqtkFBN24zPODTyH8q2oxGONjiE13wdCTl08i2OY4cgDBg3GQ/SxueJW6AB3wauaRoE0oi4D4w54+1oPcR3EjmyfJ/ljaHwkTqsuZU2OfkL+AJ39PFSksbBvRDOLA8T9FmGQKFGZq2wMuzyJZWmJw4Wz8nIFCYK6EJI3qLC8TgXtj7yFGs8fszgbukjbC/hCYKlgT0KDph798TCJyHoRvN5yB95sHeNya6HInAYX4ajWh7GR5qjkF63AHd0dg7yAk8Vte80GKkkFUpTIK+ZCLNNIW6YCZnt1IMfw5HckyGPi96EXIG8yq0hv4WJkjuE3oHzAHRTF0Ut9AHIWfwpOR76A3NWMHN8BOpY4xEs8iVawZyyjEwW22Xl+UvhiVhcQLmPMh9CO4la5wmcl2Cdi10O6xKcZv+pOhimATvajAswKATR+GCmD9neY3n54r74P7ylVot+hjGxfoAZh7vqvOZrIA9HA3EbNRvaJ9i/nSW2/vEuAthGLiEFA3sM9Rpg7s7ulUhVBnRb2bh5mA0CCySZIFOnEUpaXGevxVhnT06wVWf2+sQiyQr9QtMYVCwmZyVcIv8OMzpdejGrRTduSkI3GeeinjFiiGJ3zwWa6YZIVTBBW0u8jE1aMXT6inwgI+vBZ15zr0+Luyg5/EDTAiUGaAsYOQpOBcoxp8Z32DAh14RU6gYH2FJGOsGW3r6wK38eOiyTG3Q2Nym34kMU8xY6LIO9Y0Ybgp4msKCSW5vfZytMe7RJrpK9Bp0R2K1xCL6JMOx/cJ0f815WTXxc3TrTkI6B5a8QIRBp6+A2IbmopiaoTnFXId4HeWonYWMRkUPJ8OEQV2jg1QHdHnYdXN9jA7y68rKqN0QDixzY6DJ1dDfIeFiyskxOvUyzHFUiDDxkHfHMazq8k5M4UrExeNC4nLFGEc7p5WdET6tML6xi6Ffgack8QhWNq126AAXiTbkC3ok0+Fm6DnwiMtvmYWIIc29rlwKfUiAm69J8MBM6A3cDk8VQxnDZEPt4s5Fva4oHrOBNHdXUHT6G+k+TOYwaxfEuaiD+cof8g1yFCZ0gN6UdkSfixhcpnw4F8SGOO3tBwb1NXYowfFqSiaYaBNTssjOTBNOgdqF/zY4MFX50NloDhgG0Fytw2CZ6lJsOtiaUdyBbGMQaTMNuoE33efDLkdzwcHHGxg1a5Q1n+9dxYPeQ3NeX34KdKc/F9R6SJvyIbHclQaBAXybfWreTnO/4gFL0dycBbuN6FtXDYfyhGKZ4gE3oaAEu53urvbBoxQfZBJII8Qm6kWzQemdMspz4Y6FnYXwVDmfcxhu2Ghpw5vJ+7i4ml3NhSggPFF5G3Z7bd0NRyOZ7pjtil1+6A0UEJZLLFa023pPXmRk/nkgW3CDl/evR0HEW4o2XOd6jawpc12IgnK4abNlFTGvpNfI42GnMPK28DDDtmdgCHhYZGRNoWIotxOGhObikbGRkTUXMK1AQSVrFG1GRUbWXN9VLHp9Wa5oMyQysq1AJfpzFgXbormmrSUysu2Gq7UoqIbGLkMjI9vSjTpRUA3NFDq0fMdXCy93VjYgmsGXh1zA/LMFVZZvx993EP4AAAAASUVORK5CYII=";function iO({user:t}){const{color:e}=I.useContext(an);return y.jsxs("div",{style:{borderColor:e},className:Lh.profileContainer,children:[y.jsx("div",{className:Lh.profileImgCont,children:y.jsx("img",{src:rO,alt:"user picture"})}),y.jsxs("div",{className:Lh.userContactInfo,children:[y.jsxs("p",{style:{color:e},children:[y.jsx("b",{children:"Name:"})," ",t.fullname]}),y.jsxs("p",{style:{color:e},children:[y.jsx("b",{children:"Email:"})," ",t.email]})]})]})}function sO(){const{savedJobAds:t,setSavedJobAds:e,isOnline:n,color:r}=I.useContext(an);return y.jsxs(y.Fragment,{children:[y.jsx("h1",{style:{textAlign:"center",fontSize:"2.5rem",color:r},children:"Sparade jobbannonser"}),y.jsx("div",{className:"card-container",children:y.jsx("ul",{className:"card-layout",children:t.map(i=>vC(i))})})]})}const oO="_hr_yrs8w_1",lO={hr:oO};function aO(){const{isOnline:t,color:e,setTextColorHeader:n}=I.useContext(an);return n(e),y.jsxs(y.Fragment,{children:[y.jsx(iO,{user:t}),y.jsx("div",{style:{background:e},className:lO.hr}),y.jsx(sO,{})]})}const an=I.createContext();function uO(){const[t,e]=I.useState(null),[n,r]=I.useState(!1),[i,s]=I.useState(""),[o,l]=I.useState([]),[a,u]=I.useState(null),h={setJobs:u,jobs:a,setSavedJobAds:l,savedJobAds:o,isOnline:t,isDarkTheme:n,textColorHeader:i,setTextColorHeader:s,color:n?"#ffff":"",background:n?"linear-gradient(147deg, #4d4855 0%, #000000 74%)":"whitesmoke",bgTheme:n?{backgroundColor:"#4d4855",background:"linear-gradient(147deg, #4d4855 0%, #000000 74%)",color:"#ffff"}:{}},{auth:c,onAuthStateChanged:d}=Rl();return I.useEffect(()=>{const g=d(c,m=>{if(m){qv("users",m.uid).then(T=>{if(!T){console.log("data is",T),mC(m.uid,m.email,m.displayName,null,m.photoURL),qv("users",m.uid).then(f=>e(f));return}e(T)});return}e(m),console.log(m)});return()=>g},[]),I.useEffect(()=>{if(!t)return;l6(t.userId).then(m=>{const w=m.jobs;l(w),console.log("saved Jobs:",m.jobs)})},[t]),y.jsx(y.Fragment,{children:y.jsx(tk,{children:y.jsxs(an.Provider,{value:h,children:[y.jsx(a6,{toggleDarkTheme:r}),y.jsx("main",{className:"job-form-container",children:y.jsxs(qT,{children:[y.jsx(Gs,{path:"/Jobchaser/",element:y.jsx(O6,{})}),y.jsx(Gs,{path:"/Jobchaser/Find-job",element:y.jsx(v6,{})}),y.jsx(Gs,{path:"/Jobchaser/Sign-in",element:t?y.jsx(GT,{to:"/Jobchaser/User-profile"}):y.jsx(oy,{})}),y.jsx(Gs,{path:"/Jobchaser/User-profile",element:t?y.jsx(aO,{}):y.jsx(oy,{})})]})})]})})})}Mh.createRoot(document.getElementById("root")).render(y.jsx(Jt.StrictMode,{children:y.jsx(uO,{})}));
