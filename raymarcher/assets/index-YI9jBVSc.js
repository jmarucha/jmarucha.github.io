var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){if(e instanceof Int8Array)return Ye;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Xe;if(e instanceof Int16Array)return Ze;if(e instanceof Uint16Array)return Qe;if(e instanceof Int32Array)return $e;if(e instanceof Uint32Array)return et;if(e instanceof Float32Array)return tt;throw Error(`unsupported typed array type`)}function r(e){if(e===Int8Array)return Ye;if(e===Uint8Array||e===Uint8ClampedArray)return Xe;if(e===Int16Array)return Ze;if(e===Uint16Array)return Qe;if(e===Int32Array)return $e;if(e===Uint32Array)return et;if(e===Float32Array)return tt;throw Error(`unsupported typed array type`)}function i(e){let t=dt[e];if(!t)throw Error(`unknown gl type`);return t}function a(...e){console.error(...e)}function o(e,t){if(!e||typeof e!=`object`)return!1;let n=pt.get(t);n||(n=new WeakMap,pt.set(t,n));let r=n.get(e);if(r===void 0){let i=Object.prototype.toString.call(e);r=i.substring(8,i.length-1)===t,n.set(e,r)}return r}function s(e,t){return typeof WebGLBuffer<`u`&&o(t,`WebGLBuffer`)}function c(e,t){return typeof WebGLTexture<`u`&&o(t,`WebGLTexture`)}function l(e,t,n,r,i){e.bindBuffer(t,n),e.bufferData(t,r,i||mt)}function u(e,t,n,r){if(s(e,t))return t;n||=F;let i=e.createBuffer();return l(e,n,i,t,r),i}function d(e){return e===`indices`}function f(e){return e===Int8Array||e===Uint8Array}function p(e){return e.length?e:e.data}function m(e,t){let n;if(n=Tt.test(e)?2:Et.test(e)?4:3,t%n>0)throw Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);return n}function h(e,t,n){return e.numComponents||e.size||m(t,n||p(e).length)}function g(e,t){if(ft(e))return e;if(ft(e.data))return e.data;Array.isArray(e)&&(e={data:e});let n=e.type?_(e.type):void 0;return n||=d(t)?Uint16Array:Float32Array,new n(e.data)}function ee(e){return typeof e==`number`?e:e?r(e):Ct}function _(e){return typeof e==`number`?i(e):e||Float32Array}function v(e,t){return{buffer:t.buffer,numValues:24,type:ee(t.type),arrayType:_(t.type)}}function y(e,t){let n=t.data||t,i=_(t.type),a=n*i.BYTES_PER_ELEMENT,o=e.createBuffer();return e.bindBuffer(F,o),e.bufferData(F,a,t.drawType||mt),{buffer:o,numValues:n,type:r(i),arrayType:i}}function b(e,t,r){let i=g(t,r);return{arrayType:i.constructor,buffer:u(e,i,void 0,t.drawType),type:n(i),numValues:0}}function x(e,t){let n={};return Object.keys(t).forEach(function(r){if(!d(r)){let i=t[r],a=i.attrib||i.name||i.attribName||wt.attribPrefix+r;if(i.value){if(!Array.isArray(i.value)&&!ft(i.value))throw Error(`array.value is not array or typedarray`);n[a]={value:i.value}}else{let t;t=i.buffer&&i.buffer instanceof WebGLBuffer?v:typeof i==`number`||typeof i.data==`number`?y:b;let{buffer:o,type:s,numValues:c,arrayType:l}=t(e,i,r),u=i.normalize===void 0?f(l):i.normalize;n[a]={buffer:o,numComponents:h(i,r,c),type:s,normalize:u,stride:i.stride||0,offset:i.offset||0,divisor:i.divisor===void 0?void 0:i.divisor,drawType:i.drawType}}}}),e.bindBuffer(F,null),n}function S(e,t){return t===_t||t===vt?1:t===yt||t===bt?2:t===xt||t===St||t===Ct?4:0}function C(e,t){let n,r;for(r=0;r<Dt.length&&(n=Dt[r],!(n in t||(n=wt.attribPrefix+n,n in t)));++r);r===Dt.length&&(n=Object.keys(t)[0]);let i=t[n];if(!i.buffer)return 1;e.bindBuffer(F,i.buffer);let a=e.getBufferParameter(F,gt);e.bindBuffer(F,null);let o=a/S(e,i.type),s=i.numComponents||i.size,c=o/s;if(c%1!=0)throw Error(`numComponents ${s} not correct for length ${length}`);return c}function te(e,t,r){let i=x(e,t),a=Object.assign({},r||{});a.attribs=Object.assign({},r?r.attribs:{},i);let o=t.indices;if(o){let t=g(o,`indices`);a.indices=u(e,t,ht),a.numElements=t.length,a.elementType=n(t)}else a.numElements||=C(e,a.attribs);return a}function w(e){return!!e.texStorage2D}function T(e){return typeof document<`u`&&document.getElementById?document.getElementById(e):null}function E(e,t){return H[t].bindPoint}function ne(e,t){return function(n){e.uniform1f(t,n)}}function re(e,t){return function(n){e.uniform1fv(t,n)}}function ie(e,t){return function(n){e.uniform2fv(t,n)}}function D(e,t){return function(n){e.uniform3fv(t,n)}}function ae(e,t){return function(n){e.uniform4fv(t,n)}}function O(e,t){return function(n){e.uniform1i(t,n)}}function k(e,t){return function(n){e.uniform1iv(t,n)}}function A(e,t){return function(n){e.uniform2iv(t,n)}}function oe(e,t){return function(n){e.uniform3iv(t,n)}}function j(e,t){return function(n){e.uniform4iv(t,n)}}function se(e,t){return function(n){e.uniform1ui(t,n)}}function ce(e,t){return function(n){e.uniform1uiv(t,n)}}function le(e,t){return function(n){e.uniform2uiv(t,n)}}function ue(e,t){return function(n){e.uniform3uiv(t,n)}}function de(e,t){return function(n){e.uniform4uiv(t,n)}}function fe(e,t){return function(n){e.uniformMatrix2fv(t,!1,n)}}function pe(e,t){return function(n){e.uniformMatrix3fv(t,!1,n)}}function me(e,t){return function(n){e.uniformMatrix4fv(t,!1,n)}}function he(e,t){return function(n){e.uniformMatrix2x3fv(t,!1,n)}}function ge(e,t){return function(n){e.uniformMatrix3x2fv(t,!1,n)}}function _e(e,t){return function(n){e.uniformMatrix2x4fv(t,!1,n)}}function ve(e,t){return function(n){e.uniformMatrix4x2fv(t,!1,n)}}function ye(e,t){return function(n){e.uniformMatrix3x4fv(t,!1,n)}}function be(e,t){return function(n){e.uniformMatrix4x3fv(t,!1,n)}}function M(e,t,n,r){let i=E(e,t);return w(e)?function(t){let a,o;!t||c(e,t)?(a=t,o=null):(a=t.texture,o=t.sampler),e.uniform1i(r,n),e.activeTexture(I+n),e.bindTexture(i,a),e.bindSampler(n,o)}:function(t){e.uniform1i(r,n),e.activeTexture(I+n),e.bindTexture(i,t)}}function N(e,t,n,r,i){let a=E(e,t),o=new Int32Array(i);for(let e=0;e<i;++e)o[e]=n+e;return w(e)?function(t){e.uniform1iv(r,o),t.forEach(function(t,r){e.activeTexture(I+o[r]);let i,s;!t||c(e,t)?(i=t,s=null):(i=t.texture,s=t.sampler),e.bindSampler(n,s),e.bindTexture(a,i)})}:function(t){e.uniform1iv(r,o),t.forEach(function(t,n){e.activeTexture(I+o[n]),e.bindTexture(a,t)})}}function xe(e,t){return function(n){if(n.value)switch(e.disableVertexAttribArray(t),n.value.length){case 4:e.vertexAttrib4fv(t,n.value);break;case 3:e.vertexAttrib3fv(t,n.value);break;case 2:e.vertexAttrib2fv(t,n.value);break;case 1:e.vertexAttrib1fv(t,n.value);break;default:throw Error(`the length of a float constant value must be between 1 and 4!`)}else e.bindBuffer(L,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,n.numComponents||n.size,n.type||R,n.normalize||!1,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function P(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4iv(t,n.value);else throw Error(`The length of an integer constant value must be 4!`);else e.bindBuffer(L,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||cn,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function Se(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4uiv(t,n.value);else throw Error(`The length of an unsigned integer constant value must be 4!`);else e.bindBuffer(L,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Mn,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function Ce(e,t,n){let r=n.size,i=n.count;return function(n){e.bindBuffer(L,n.buffer);let a=n.size||n.numComponents||r,o=a/i,s=n.type||R,c=H[s].size*a,l=n.normalize||!1,u=n.offset||0,d=c/i;for(let r=0;r<i;++r)e.enableVertexAttribArray(t+r),e.vertexAttribPointer(t+r,o,s,l,c,u+d*r),e.vertexAttribDivisor&&e.vertexAttribDivisor(t+r,n.divisor||0)}}function we(e,t=``,n=0){let r=[...t.matchAll(Gn)],i=new Map(r.map((e,n)=>{let i=parseInt(e[1]),a=r[n+1],o=a?a.index:t.length,s=t.substring(e.index,o);return[i-1,s]}));return e.split(`
`).map((e,t)=>{let r=i.get(t);return`${t+1+n}: ${e}${r?`\n\n^^^ ${r}`:``}`}).join(`
`)}function Te(e){let t=0;return Kn.test(e)&&(t=1,e=e.replace(Kn,``)),{lineOffset:t,shaderSource:e}}function Ee(e,t){return e.errorCallback(t),e.callback&&setTimeout(()=>{e.callback(`${t}\n${e.errors.join(`
`)}`)}),null}function De(e,t,n,r){if(r||=Ut,!e.getShaderParameter(n,Gt)){let i=e.getShaderInfoLog(n),{lineOffset:a,shaderSource:o}=Te(e.getShaderSource(n)),s=`${we(o,i,a)}\nError compiling ${Ot(e,t)}: ${i}`;return r(s),s}return``}function Oe(e,t,n){let r,i,a;if(typeof t==`function`&&(n=t,t=void 0),typeof e==`function`)n=e,e=void 0;else if(e&&!Array.isArray(e)){let t=e;n=t.errorCallback,e=t.attribLocations,r=t.transformFeedbackVaryings,i=t.transformFeedbackMode,a=t.callback}let o=n||Ut,s=[],c={errorCallback(e,...t){s.push(e),o(e,...t)},transformFeedbackVaryings:r,transformFeedbackMode:i,callback:a,errors:s};{let n={};Array.isArray(e)?e.forEach(function(e,r){n[e]=t?t[r]:r}):n=e||{},c.attribLocations=n}return c}function ke(e,t){if(t.indexOf(`frag`)>=0)return qt;if(t.indexOf(`vert`)>=0)return Jt}function Ae(e,t,n){let r=e.getAttachedShaders(t);for(let t of r)n.has(t)||e.deleteShader(t);e.deleteProgram(t)}function je(e,t,n){let r=e.createProgram(),{attribLocations:i,transformFeedbackVaryings:a,transformFeedbackMode:o}=Oe(n);for(let n=0;n<t.length;++n){let i=t[n];if(typeof i==`string`){let t=T(i),r=t?t.text:i,a=e[qn[n]];t&&t.type&&(a=ke(e,t.type)||a),i=e.createShader(a),e.shaderSource(i,Te(r).shaderSource),e.compileShader(i)}e.attachShader(r,i)}Object.entries(i).forEach(([t,n])=>e.bindAttribLocation(r,n,t));{let t=a;t&&(t.attribs&&(t=t.attribs),Array.isArray(t)||(t=Object.keys(t)),e.transformFeedbackVaryings(r,t,o||Yt))}return e.linkProgram(r),r}function Me(e,t,n,r,i){let a=Oe(n,r,i),o=new Set(t),s=je(e,t,a);function c(e,t){let n=Pe(e,t,a.errorCallback);return n&&Ae(e,t,o),n}if(a.callback){Ne(e,s).then(()=>{let t=c(e,s);a.callback(t,t?void 0:s)});return}return c(e,s)?void 0:s}async function Ne(e,t){let n=e.getExtension(`KHR_parallel_shader_compile`),r=n?(e,t)=>e.getProgramParameter(t,n.COMPLETION_STATUS_KHR):()=>!0,i=0;do await Jn(i),i=1e3/60;while(!r(e,t))}function Pe(e,t,n){if(n||=Ut,!e.getProgramParameter(t,Kt)){let r=e.getProgramInfoLog(t);return n(`Error in program linking: ${r}`),`${r}\n${e.getAttachedShaders(t).map(t=>De(e,e.getShaderParameter(t,e.SHADER_TYPE),t,n)).filter(e=>e).join(`
`)}`}}function Fe(e,t,n,r,i){return Me(e,t,n,r,i)}function Ie(e){let t=e.name;return t.startsWith(`gl_`)||t.startsWith(`webgl_`)}function Le(e,t,n,r){let i=e.split(Yn).filter(e=>e!==``),a=0,o=``;for(;;){let e=i[a++];o+=e;let s=Xn(e[0]),c=s?parseInt(e):e;if(s&&(o+=i[a++]),a===i.length){n[c]=t;break}else{let e=i[a++],t=e===`[`,s=n[c]||(t?[]:{});n[c]=s,n=s,r[o]=r[o]||function(e){return function(t){Ve(e,t)}}(s),o+=e}}}function Re(e,t){let n=0;function r(t,r,i){let a=r.name.endsWith(`[0]`),o=r.type,s=H[o];if(!s)throw Error(`unknown type: 0x${o.toString(16)}`);let c;if(s.bindPoint){let t=n;n+=r.size,c=a?s.arraySetter(e,o,t,i,r.size):s.setter(e,o,t,i,r.size)}else c=s.arraySetter&&a?s.arraySetter(e,i):s.setter(e,i);return c.location=i,c}let i={},a={},o=e.getProgramParameter(t,Xt);for(let n=0;n<o;++n){let o=e.getActiveUniform(t,n);if(Ie(o))continue;let s=o.name;s.endsWith(`[0]`)&&(s=s.substr(0,s.length-3));let c=e.getUniformLocation(t,o.name);if(c){let e=r(t,o,c);i[s]=e,Le(s,e,a,i)}}return i}function ze(e,t){let n={},r=e.getProgramParameter(t,Qt);for(let i=0;i<r;++i){let r=e.getTransformFeedbackVarying(t,i);n[r.name]={index:i,type:r.type,size:r.size}}return n}function Be(e,t){let n=e.getProgramParameter(t,Xt),r=[],i=[];for(let a=0;a<n;++a){i.push(a),r.push({});let n=e.getActiveUniform(t,a);r[a].name=n.name}[[`UNIFORM_TYPE`,`type`],[`UNIFORM_SIZE`,`size`],[`UNIFORM_BLOCK_INDEX`,`blockNdx`],[`UNIFORM_OFFSET`,`offset`]].forEach(function(n){let a=n[0],o=n[1];e.getActiveUniforms(t,i,e[a]).forEach(function(e,t){r[t][o]=e})});let a={},o=e.getProgramParameter(t,$t);for(let n=0;n<o;++n){let r=e.getActiveUniformBlockName(t,n),i={index:e.getUniformBlockIndex(t,r),usedByVertexShader:e.getActiveUniformBlockParameter(t,n,en),usedByFragmentShader:e.getActiveUniformBlockParameter(t,n,tn),size:e.getActiveUniformBlockParameter(t,n,nn),uniformIndices:e.getActiveUniformBlockParameter(t,n,rn)};i.used=i.usedByVertexShader||i.usedByFragmentShader,a[r]=i}return{blockSpecs:a,uniformData:r}}function Ve(e,t){for(let n in t){let r=e[n];typeof r==`function`?r(t[n]):Ve(e[n],t[n])}}function He(e,...t){let n=e.uniformSetters||e,r=t.length;for(let e=0;e<r;++e){let r=t[e];if(Array.isArray(r)){let e=r.length;for(let t=0;t<e;++t)He(n,r[t])}else for(let e in r){let t=n[e];t&&t(r[e])}}}function Ue(e,t){let n={},r=e.getProgramParameter(t,Zt);for(let i=0;i<r;++i){let r=e.getActiveAttrib(t,i);if(Ie(r))continue;let a=e.getAttribLocation(t,r.name),o=U[r.type],s=o.setter(e,a,o);s.location=a,n[r.name]=s}return n}function We(e,t){for(let n in t){let r=e[n];r&&r(t[n])}}function Ge(e,t,n){n.vertexArrayObject?e.bindVertexArray(n.vertexArrayObject):(We(t.attribSetters||t,n.attribs),n.indices&&e.bindBuffer(Wt,n.indices))}function Ke(e,t){let n=Re(e,t),r=Ue(e,t),i={program:t,uniformSetters:n,attribSetters:r,uniformLocations:Object.fromEntries(Object.entries(n).map(([e,t])=>[e,t.location])),attribLocations:Object.fromEntries(Object.entries(r).map(([e,t])=>[e,t.location]))};return w(e)&&(i.uniformBlockSpec=Be(e,t),i.transformFeedbackInfo=ze(e,t)),i}function qe(e,t,n,r,i){let a=Oe(n,r,i),o=[];if(t=t.map(function(e){if(!Zn.test(e)){let t=T(e);if(t)e=t.text;else{let t=`no element with id: ${e}`;a.errorCallback(t),o.push(t)}}return e}),o.length)return Ee(a,``);let s=a.callback;s&&(a.callback=(t,n)=>{s(t,t?void 0:Ke(e,n))});let c=Fe(e,t,a);return c?Ke(e,c):null}function Je(e,t,n,r,i,a){n=n===void 0?Qn:n;let o=t.indices,s=t.elementType,c=r===void 0?t.numElements:r;i=i===void 0?0:i,s||o?a===void 0?e.drawElements(n,c,s===void 0?$n:t.elementType,i):e.drawElementsInstanced(n,c,s===void 0?$n:t.elementType,i,a):a===void 0?e.drawArrays(n,i,c):e.drawArraysInstanced(n,i,c,a)}var Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,F,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,I,L,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,R,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,z,B,Wn,V,H,U,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,W,fr,pr,G,K,mr=e((()=>{Ye=5120,Xe=5121,Ze=5122,Qe=5123,$e=5124,et=5125,tt=5126,nt=32819,rt=32820,it=33635,at=5131,ot=33640,st=35899,ct=35902,lt=36269,ut=34042,dt={};{let e=dt;e[Ye]=Int8Array,e[Xe]=Uint8Array,e[Ze]=Int16Array,e[Qe]=Uint16Array,e[$e]=Int32Array,e[et]=Uint32Array,e[tt]=Float32Array,e[nt]=Uint16Array,e[rt]=Uint16Array,e[it]=Uint16Array,e[at]=Uint16Array,e[ot]=Uint32Array,e[st]=Uint32Array,e[ct]=Uint32Array,e[lt]=Uint32Array,e[ut]=Uint32Array}ft=typeof SharedArrayBuffer<`u`?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer},pt=new Map,mt=35044,F=34962,ht=34963,gt=34660,_t=5120,vt=5121,yt=5122,bt=5123,xt=5124,St=5125,Ct=5126,wt={attribPrefix:``},Tt=/coord|texture/i,Et=/color|colour/i,Dt=[`position`,`positions`,`a_position`],Ot=function(){let e={},t={};function n(n){let r=n.constructor.name;if(!e[r]){for(let e in n)if(typeof n[e]==`number`){let r=t[n[e]];t[n[e]]=r?`${r} | ${e}`:e}e[r]=!0}}return function(e,r){return n(e),t[r]||(typeof r==`number`?`0x${r.toString(16)}`:r)}}(),new Uint8Array([128,192,255,255]),function(){let e;return function(){return e||=typeof document<`u`&&document.createElement?document.createElement(`canvas`).getContext(`2d`):null,e}}(),kt=6406,At=6407,jt=6408,Mt=6409,Nt=6410,Pt=6402,Ft=34041,It=33319,Lt=33320,Rt=6403,zt=36244,Bt=36248,Vt=36249,Ht={};{let e=Ht;e[kt]={numColorComponents:1},e[Mt]={numColorComponents:1},e[Nt]={numColorComponents:2},e[At]={numColorComponents:3},e[jt]={numColorComponents:4},e[Rt]={numColorComponents:1},e[zt]={numColorComponents:1},e[It]={numColorComponents:2},e[Lt]={numColorComponents:2},e[At]={numColorComponents:3},e[Bt]={numColorComponents:3},e[jt]={numColorComponents:4},e[Vt]={numColorComponents:4},e[Pt]={numColorComponents:1},e[Ft]={numColorComponents:2}}Ut=a,I=33984,L=34962,Wt=34963,Gt=35713,Kt=35714,qt=35632,Jt=35633,Yt=35981,Xt=35718,Zt=35721,Qt=35971,$t=35382,en=35396,tn=35398,nn=35392,rn=35395,R=5126,an=35664,on=35665,sn=35666,cn=5124,ln=35667,un=35668,dn=35669,fn=35670,pn=35671,mn=35672,hn=35673,gn=35674,_n=35675,vn=35676,yn=35678,bn=35680,xn=35679,Sn=35682,Cn=35685,wn=35686,Tn=35687,En=35688,Dn=35689,On=35690,kn=36289,An=36292,jn=36293,Mn=5125,Nn=36294,Pn=36295,Fn=36296,In=36298,Ln=36299,Rn=36300,zn=36303,Bn=36306,Vn=36307,Hn=36308,Un=36311,z=3553,B=34067,Wn=32879,V=35866,H={},H[R]={Type:Float32Array,size:4,setter:ne,arraySetter:re},H[an]={Type:Float32Array,size:8,setter:ie,cols:2},H[on]={Type:Float32Array,size:12,setter:D,cols:3},H[sn]={Type:Float32Array,size:16,setter:ae,cols:4},H[cn]={Type:Int32Array,size:4,setter:O,arraySetter:k},H[ln]={Type:Int32Array,size:8,setter:A,cols:2},H[un]={Type:Int32Array,size:12,setter:oe,cols:3},H[dn]={Type:Int32Array,size:16,setter:j,cols:4},H[Mn]={Type:Uint32Array,size:4,setter:se,arraySetter:ce},H[Nn]={Type:Uint32Array,size:8,setter:le,cols:2},H[Pn]={Type:Uint32Array,size:12,setter:ue,cols:3},H[Fn]={Type:Uint32Array,size:16,setter:de,cols:4},H[fn]={Type:Uint32Array,size:4,setter:O,arraySetter:k},H[pn]={Type:Uint32Array,size:8,setter:A,cols:2},H[mn]={Type:Uint32Array,size:12,setter:oe,cols:3},H[hn]={Type:Uint32Array,size:16,setter:j,cols:4},H[gn]={Type:Float32Array,size:32,setter:fe,rows:2,cols:2},H[_n]={Type:Float32Array,size:48,setter:pe,rows:3,cols:3},H[vn]={Type:Float32Array,size:64,setter:me,rows:4,cols:4},H[Cn]={Type:Float32Array,size:32,setter:he,rows:2,cols:3},H[wn]={Type:Float32Array,size:32,setter:_e,rows:2,cols:4},H[Tn]={Type:Float32Array,size:48,setter:ge,rows:3,cols:2},H[En]={Type:Float32Array,size:48,setter:ye,rows:3,cols:4},H[Dn]={Type:Float32Array,size:64,setter:ve,rows:4,cols:2},H[On]={Type:Float32Array,size:64,setter:be,rows:4,cols:3},H[yn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:z},H[bn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:B},H[xn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:Wn},H[Sn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:z},H[kn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:V},H[An]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:V},H[jn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:B},H[In]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:z},H[Ln]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:Wn},H[Rn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:B},H[zn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:V},H[Bn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:z},H[Vn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:Wn},H[Hn]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:B},H[Un]={Type:null,size:0,setter:M,arraySetter:N,bindPoint:V},U={},U[R]={size:4,setter:xe},U[an]={size:8,setter:xe},U[on]={size:12,setter:xe},U[sn]={size:16,setter:xe},U[cn]={size:4,setter:P},U[ln]={size:8,setter:P},U[un]={size:12,setter:P},U[dn]={size:16,setter:P},U[Mn]={size:4,setter:Se},U[Nn]={size:8,setter:Se},U[Pn]={size:12,setter:Se},U[Fn]={size:16,setter:Se},U[fn]={size:4,setter:P},U[pn]={size:8,setter:P},U[mn]={size:12,setter:P},U[hn]={size:16,setter:P},U[gn]={size:4,setter:Ce,count:2},U[_n]={size:9,setter:Ce,count:3},U[vn]={size:16,setter:Ce,count:4},Gn=/ERROR:\s*\d+:(\d+)/gi,Kn=/^[ \t]*\n/,qn=[`VERTEX_SHADER`,`FRAGMENT_SHADER`],Jn=(e=0)=>new Promise(t=>setTimeout(t,e)),Yn=/(\.|\[|]|\w+)/g,Xn=e=>e>=`0`&&e<=`9`,Zn=/\s|{|}|;/,Qn=4,$n=5123,er=6402,tr=33190,nr=36012,rr=35056,ir=36013,ar=32854,or=32855,sr=36194,cr=33189,lr=6401,ur=36168,dr=34041,W=36096,fr=36128,pr=33306,G={},G[dr]=pr,G[lr]=fr,G[ur]=fr,G[er]=W,G[cr]=W,G[tr]=W,G[nr]=W,G[rr]=pr,G[ir]=pr,K={},K[ar]=!0,K[or]=!0,K[sr]=!0,K[dr]=!0,K[cr]=!0,K[lr]=!0,K[ur]=!0})),q,hr=e((()=>{q=typeof Float32Array<`u`?Float32Array:Array,Math.PI/180,180/Math.PI}));function gr(){var e=new q(9);return q!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}var _r=e((()=>{hr()}));function J(){var e=new q(3);return q!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function vr(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function yr(e,t,n){var r=new q(3);return r[0]=e,r[1]=t,r[2]=n,r}function Y(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function br(e,t){var n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function xr(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Sr(e,t,n){var r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function X(e,t,n){var r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],c=t[1],l=t[2],u=i*l-a*c,d=a*s-r*l,f=r*c-i*s;return u+=u,d+=d,f+=f,e[0]=s+o*u+i*f-a*d,e[1]=c+o*d+a*u-r*f,e[2]=l+o*f+r*d-i*u,e}var Cr,wr=e((()=>{hr(),Cr=vr,function(){var e=J();return function(t,n,r,i,a,o){var s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}()}));function Tr(){var e=new q(4);return q!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Er(e,t,n,r){var i=new q(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function Dr(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=a*o,e}var Or=e((()=>{hr(),function(){var e=Tr();return function(t,n,r,i,a,o){var s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}()}));function kr(){var e=new q(4);return q!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function Ar(e,t,n){n*=.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function jr(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=r*u+o*s+i*l-a*c,e[1]=i*u+o*c+a*s-r*l,e[2]=a*u+o*l+r*c-i*s,e[3]=o*u-r*s-i*c-a*l,e}function Mr(e,t,n,r){var i=t[0],a=t[1],o=t[2],s=t[3],c=n[0],l=n[1],u=n[2],d=n[3],f,p=i*c+a*l+o*u+s*d,m,h,g;return p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(f=Math.acos(p),m=Math.sin(f),h=Math.sin((1-r)*f)/m,g=Math.sin(r*f)/m):(h=1-r,g=r),e[0]=h*i+g*c,e[1]=h*a+g*l,e[2]=h*o+g*u,e[3]=h*s+g*d,e}function Nr(e,t){var n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=(i+1)%3,o=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[a*3+a]-t[o*3+o]+1),e[i]=.5*r,r=.5/r,e[3]=(t[a*3+o]-t[o*3+a])*r,e[a]=(t[a*3+i]+t[i*3+a])*r,e[o]=(t[o*3+i]+t[i*3+o])*r}return e}var Pr,Z,Fr=e((()=>{hr(),_r(),wr(),Or(),Pr=Er,Z=Dr,function(){var e=J(),t=yr(1,0,0),n=yr(0,1,0);return function(r,i,a){var o=xr(i,a);return o<-.999999?(Sr(e,t,i),Cr(e)<1e-6&&Sr(e,n,i),br(e,e),Ar(r,e,Math.PI),r):o>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(Sr(e,i,a),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+o,Z(r,r))}}(),function(){var e=kr(),t=kr();return function(n,r,i,a,o,s){return Mr(e,r,o,s),Mr(t,i,a,s),Mr(n,e,t,2*s*(1-s)),n}}(),function(){var e=gr();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],Z(t,Nr(t,e))}}()})),Ir=e((()=>{Fr(),wr()}));function Lr(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}function Rr(e){return Hr.find(t=>t.match(e))}function zr(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var Q,Br,Vr,$,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr=e((()=>{Q=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Br=class extends Q{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}},Vr={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:Lr,toHexString:Lr},$={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},Hr=[Vr,$,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=$.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return $.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=$.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return $.toHexString(i)}}],Ur=class extends Q{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Rr(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=Lr(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Wr=class extends Q{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},Gr=class extends Q{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Kr=class extends Q{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},qr=class extends Q{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Jr=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`,Yr=!1,Xr=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!Yr&&o&&(zr(Jr),Yr=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a}add(e,t,n,r,i){if(Object(n)===n)return new Kr(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new Gr(this,e,t,n,r,i);case`boolean`:return new Br(this,e,t);case`string`:return new qr(this,e,t);case`function`:return new Wr(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Ur(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof Wr||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof Wr)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}})),Qr,$r=e((()=>{Qr=`#version 300 es
in vec4 position;
void main() {
  gl_Position = position;
}
`})),ei,ti=e((()=>{ei=`#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_resolution;
uniform vec3 u_ro;
uniform vec3 u_forward;
uniform vec3 u_right;
uniform vec3 u_up;
uniform int u_debug;
uniform int u_ao_mode;
uniform int u_max_steps;
uniform int u_fog_enabled;
uniform vec3 u_trap_color_origin;
uniform vec3 u_trap_color_axis;
uniform vec3 u_trap_color_axis_x;
uniform vec3 u_trap_color_axis_y;
uniform vec3 u_trap_color_axis_z;
uniform vec3 u_trap_color_plane;
uniform vec3 u_specular_color;
uniform vec3 u_diffuse_color;
uniform float u_trap_scale_origin;
uniform float u_trap_scale_axis;
uniform float u_trap_scale_axis_x;
uniform float u_trap_scale_axis_y;
uniform float u_trap_scale_axis_z;
uniform float u_trap_scale_plane;
uniform int u_color_normalize;
uniform float u_gamma;
uniform float u_eps_factor;
uniform float u_mb_scale;
uniform float u_mb_fold_limit;
uniform float u_mb_min_radius2;
uniform float u_mb_fixed_radius2;
uniform int u_mb_iterations;

void boxFold(inout vec3 z) {
  z = clamp(z, -u_mb_fold_limit, u_mb_fold_limit) * 2.0 - z;
}

void sphereFold(inout vec3 z, inout float dr) {
  float r2 = dot(z, z);
  if (r2 < u_mb_min_radius2) {
    float t = u_mb_fixed_radius2 / u_mb_min_radius2;
    z *= t;
    dr *= t;
  } else if (r2 < u_mb_fixed_radius2) {
    float t = u_mb_fixed_radius2 / r2;
    z *= t;
    dr *= t;
  }
}

float mandelbox(vec3 pos) {
  vec3 z = pos;
  float dr = 1.0;

  for (int i = 0; i < 512; i++) {
    if (i >= u_mb_iterations) break;
    boxFold(z);
    sphereFold(z, dr);
    z = z * u_mb_scale + pos;
    dr = dr * abs(u_mb_scale) + 1.0;
  }

  return length(z) / abs(dr);
}

struct Traps {
  float origin;
  float axis;
  float axis_x;
  float axis_y;
  float axis_z;
  float plane;
};

Traps mandelbox_trap(vec3 pos) {
  vec3 z = pos;
  float dr = 1.0;
  Traps t = Traps(1e10, 1e10, 1e10, 1e10, 1e10, 1e10);

  for (int i = 0; i < 512; i++) {
    if (i >= u_mb_iterations) break;
    boxFold(z);
    sphereFold(z, dr);
    z = z * u_mb_scale + pos;
    dr = dr * abs(u_mb_scale) + 1.0;

    t.origin = min(t.origin, length(z));
    t.axis   = min(t.axis, min(length(z.yz), min(length(z.xz), length(z.xy))));
    t.axis_x = min(t.axis_x, length(z.yz));
    t.axis_y = min(t.axis_y, length(z.xz));
    t.axis_z = min(t.axis_z, length(z.xy));
    t.plane  = min(t.plane, min(abs(z.x), min(abs(z.y), abs(z.z))));
  }

  return t;
}

float scene(vec3 p) {
  return mandelbox(p);
}

vec3 calcNormal(vec3 p, float epsilon) {
  vec2 e = vec2(epsilon, 0.0);
  return normalize(vec3(
    scene(p + e.xyy) - scene(p - e.xyy),
    scene(p + e.yxy) - scene(p - e.yxy),
    scene(p + e.yyx) - scene(p - e.yyx)
  ));
}

// SDF-sampled AO (Inigo Quilez style)
// Sample SDF at 5 points along normal; compare actual vs expected distance
float calcAO_sdf(vec3 pos, vec3 nor) {
  float occ = 0.0;
  float sca = 1.0;
  for (int i = 0; i < 5; i++) {
    float h = 0.01 + 0.12 * float(i) / 4.0;
    float d = scene(pos + h * nor);
    occ += (h - d) * sca;
    sca *= 0.95;
  }
  return clamp(1.0 - 3.0 * occ, 0.0, 1.0);
}

// Cone-traced AO
// Treat each SDF sample as a cone cross-section; ratio of SDF to cone radius = visibility
float calcAO_cone(vec3 pos, vec3 nor) {
  float occ = 0.0;
  float t = 0.01;
  float tanHalf = 0.577; // tan(30°) — cone half-angle
  for (int i = 0; i < 5; i++) {
    float d = scene(pos + nor * t);
    float coneRadius = t * tanHalf;
    occ += max(0.0, 1.0 - d / coneRadius);
    t += max(d, 0.02);
  }
  return clamp(1.0 - occ * 0.2, 0.0, 1.0);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;

  vec3 ro = u_ro;
  vec3 rd = normalize(u_forward + uv.x * u_right + uv.y * u_up);

  float init_dist = scene(ro);

  // Raymarch
  float t = 0.0;
  int steps = 0;

  float d;
  float epsilon;

  for (int i = 0; i < 512; i++) {
    if (i >= u_max_steps) break;
    steps = i;
    vec3 p = ro + rd * t;

    d = scene(p);
    // quarter-pixel-sized sphere
    epsilon = max(1e-6, u_eps_factor * t / u_resolution.y);
    if (d < epsilon) break;
    t += d;
    if (t > 64.0) break;
  }

  float raw_ao = 1.0 - float(steps) / float(u_max_steps);

  vec3 col_background = vec3(0.);
  vec3 col_specular = u_specular_color;

  vec3 col = col_background;

  if (t < 64.0
    && d < 0.1 // catch near-intersections flying off to background
    ) {
    vec3 p = ro + rd * t;
    vec3 n = calcNormal(p, epsilon);

    // AO mode: -1 = off, 0 = step-count, 1 = SDF-sampled (IQ), 2 = cone-traced
    float ao = 1.0;
    if (u_ao_mode == 0) {
      ao = clamp(pow(raw_ao, 1.25), 0.0, 1.0);
    } else if (u_ao_mode == 1) {
      ao = calcAO_sdf(p, n);
    } else if (u_ao_mode == 2) {
      ao = calcAO_cone(p, n);
    }

    // Orbit trap coloring
    Traps trap = mandelbox_trap(p);
    vec3 col_material = u_diffuse_color
      + trap.origin * u_trap_scale_origin * u_trap_color_origin
      + trap.axis   * u_trap_scale_axis   * u_trap_color_axis
      + trap.axis_x * u_trap_scale_axis_x * u_trap_color_axis_x
      + trap.axis_y * u_trap_scale_axis_y * u_trap_color_axis_y
      + trap.axis_z * u_trap_scale_axis_z * u_trap_color_axis_z
      + trap.plane  * u_trap_scale_plane  * u_trap_color_plane;
    
    if (u_color_normalize == 1) {
      col_material = max(col_material, vec3(0.0));
      if (dot(col_material, col_material) > 1.0)
        col_material = normalize(col_material);
    } else {
      col_material = clamp(col_material, 0.0, 1.0);
    }

    // Lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(n, lightDir), 0.0);
    float amb = 0.15;

    // Specular
    vec3 h = normalize(lightDir - rd);
    float spec = pow(max(dot(n, h), 0.0), 32.0);

    col = (col_material * (amb + diff) + col_specular * spec * 0.5) * ao;

    float fog = exp( - 0.1 * sqrt(t/init_dist));
    if (u_fog_enabled == 1) {
      col = col * fog + col_background * (1. - fog);
    }
  }

  // Gamma
  vec3 col_gamma = vec3(1.0 / u_gamma);
  col = pow(col, col_gamma);
  fragColor = vec4(col, 1.0);
}
`}));t((()=>{mr(),Ir(),Zr(),$r(),ti();var e=document.getElementById(`c`),t=e.getContext(`webgl2`,{preserveDrawingBuffer:!0});function n(){e.width=window.innerWidth,e.height=window.innerHeight,t.viewport(0,0,e.width,e.height)}window.addEventListener(`resize`,n),n();var r=qe(t,[Qr,ei]),i=te(t,{position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]}),a=new Set;window.addEventListener(`keydown`,e=>{a.add(e.key),e.key===`p`&&(c=+!c,console.log(`DEBUG `+(c?`ON`:`OFF`))),e.key===`F9`&&(e.preventDefault(),ce()),[` `,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key)&&e.preventDefault()}),window.addEventListener(`keyup`,e=>a.delete(e.key));var o=0,s=0;e.addEventListener(`click`,()=>{document.pointerLockElement===e?document.exitPointerLock():e.requestPointerLock()}),document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement!==e&&(o=0,s=0)}),window.addEventListener(`mousemove`,t=>{document.pointerLockElement===e&&(o+=t.movementX,s+=t.movementY)});var c=0,l=yr(11,11,11),u=Pr(-.3251,.3251,0,.8881),d=0,f=[],p=15,m=document.getElementById(`ft`),h=t.getExtension(`EXT_disjoint_timer_query_webgl2`),g=null,ee=0,_={Fire:{specularColor:`#ffffff`,diffuseColor:`#000000`,trapOrigin:`#ff0000`,trapAxis:`#00ff00`,trapAxisX:`#000000`,trapAxisY:`#000000`,trapAxisZ:`#000000`,trapPlane:`#0000ff`,trapScaleOrigin:.4,trapScaleAxis:.4,trapScaleAxisX:0,trapScaleAxisY:0,trapScaleAxisZ:0,trapScalePlane:.4},Water:{specularColor:`#ffffff`,diffuseColor:`#ffffff`,trapOrigin:`#ff0000`,trapAxis:`#00ff00`,trapAxisX:`#000000`,trapAxisY:`#000000`,trapAxisZ:`#000000`,trapPlane:`#0000ff`,trapScaleOrigin:-.3,trapScaleAxis:-.5,trapScaleAxisX:0,trapScaleAxisY:0,trapScaleAxisZ:0,trapScalePlane:-1},Neon:{specularColor:`#666666`,diffuseColor:`#888888`,trapOrigin:`#ffffff`,trapAxis:`#000000`,trapAxisX:`#ff0000`,trapAxisY:`#00ff00`,trapAxisZ:`#0000ff`,trapPlane:`#000000`,trapScaleOrigin:-.05,trapScaleAxis:0,trapScaleAxisX:-.8,trapScaleAxisY:-.6,trapScaleAxisZ:-.8,trapScalePlane:0}},v={aoMode:0,maxSteps:256,fogEnabled:!0,colorPreset:`Fire`,specularColor:_.Fire.specularColor,diffuseColor:_.Fire.diffuseColor,trapOrigin:_.Fire.trapOrigin,trapAxis:_.Fire.trapAxis,trapAxisX:_.Fire.trapAxisX,trapAxisY:_.Fire.trapAxisY,trapAxisZ:_.Fire.trapAxisZ,trapPlane:_.Fire.trapPlane,trapScaleOrigin:_.Fire.trapScaleOrigin,trapScaleAxis:_.Fire.trapScaleAxis,trapScaleAxisX:_.Fire.trapScaleAxisX,trapScaleAxisY:_.Fire.trapScaleAxisY,trapScaleAxisZ:_.Fire.trapScaleAxisZ,trapScalePlane:_.Fire.trapScalePlane,colorNormalize:!0,gamma:2.2,epsFactor:.25,mbScale:2,mbFoldLimit:1,mbMinRadius2:.25,mbFixedRadius2:1,mbIterations:38,captureRes:`7680x4320`},y=new Xr,b=y.addFolder(`Raymarcher`);b.add(v,`maxSteps`,16,512,1).name(`Max Steps`),b.add(v,`epsFactor`,.01,1,.01).name(`Epsilon Factor`);var x=y.addFolder(`Light`);x.add(v,`aoMode`,{Off:-1,"Step Count":0,"SDF Sampled (IQ)":1,"Cone Traced":2}).name(`Ambient Occlusion`),x.add(v,`fogEnabled`).name(`Depth Fog`),x.add(v,`gamma`,1,4,.1).name(`Gamma`);var S=y.addFolder(`Fractal`).open(!1);S.add(v,`mbScale`,-3,4,.01).name(`Scale`),S.add(v,`mbFoldLimit`,.1,4,.01).name(`Fold Limit`),S.add(v,`mbMinRadius2`,.01,2,.01).name(`Min Radius²`),S.add(v,`mbFixedRadius2`,.1,4,.01).name(`Fixed Radius²`),S.add(v,`mbIterations`,1,128,1).name(`Iterations`);var C=S.controllersRecursive(),w=y.addFolder(`Colours`);w.add(v,`colorPreset`,Object.keys(_)).name(`Preset`).onChange(e=>{let t=_[e];v.specularColor=t.specularColor,v.diffuseColor=t.diffuseColor,v.trapOrigin=t.trapOrigin,v.trapAxis=t.trapAxis,v.trapAxisX=t.trapAxisX,v.trapAxisY=t.trapAxisY,v.trapAxisZ=t.trapAxisZ,v.trapPlane=t.trapPlane,v.trapScaleOrigin=t.trapScaleOrigin,v.trapScaleAxis=t.trapScaleAxis,v.trapScaleAxisX=t.trapScaleAxisX,v.trapScaleAxisY=t.trapScaleAxisY,v.trapScaleAxisZ=t.trapScaleAxisZ,v.trapScalePlane=t.trapScalePlane,w.controllersRecursive().forEach(e=>e.updateDisplay()),T.controllersRecursive().forEach(e=>e.updateDisplay())}),w.addColor(v,`specularColor`).name(`Specular Color`),w.addColor(v,`diffuseColor`).name(`Diffuse Color`),w.add(v,`colorNormalize`).name(`Normalize Color`);var T=w.addFolder(`Traps`).open(!1);T.addColor(v,`trapOrigin`).name(`Origin`),T.add(v,`trapScaleOrigin`,-2,2,.01).name(`Origin Scale`),T.addColor(v,`trapAxis`).name(`Min of Axes`),T.add(v,`trapScaleAxis`,-2,2,.01).name(`Min of Axes Scale`);var E=T.addFolder(`Axes`);E.addColor(v,`trapAxisX`).name(`Axis X`),E.add(v,`trapScaleAxisX`,-2,2,.01).name(`Axis X Scale`),E.addColor(v,`trapAxisY`).name(`Axis Y`),E.add(v,`trapScaleAxisY`,-2,2,.01).name(`Axis Y Scale`),E.addColor(v,`trapAxisZ`).name(`Axis Z`),E.add(v,`trapScaleAxisZ`,-2,2,.01).name(`Axis Z Scale`),T.addColor(v,`trapPlane`).name(`Min of Planes`),T.add(v,`trapScalePlane`,-2,2,.01).name(`Min of Planes Scale`);var ne=y.addFolder(`Screenshot`);ne.add(v,`captureRes`,[`1920x1080`,`3840x2160`,`7680x4320`,`15360x8640`]).name(`Size`),ne.add({capture:()=>ce()},`capture`).name(`Take Screenshot (F9)`);var re=y.addFolder(`Controls`),ie=document.createElement(`div`);ie.style.cssText=`padding:4px 8px;font:11px/1.6 monospace;color:#eee;white-space:pre`,ie.textContent=`WASD        move
Space/Ctrl  up / down
Arrows      look around
Mouse       click to grab
            drag to look
P           toggle debug
F9          screenshot`,re.$children.appendChild(ie),re.close();function D(e){let t=parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function ae(e,t,n,r){return{u_resolution:e,u_ro:Array.from(l),u_forward:Array.from(t),u_right:Array.from(n),u_up:Array.from(r),u_debug:c,u_ao_mode:v.aoMode,u_max_steps:v.maxSteps,u_fog_enabled:+!!v.fogEnabled,u_trap_color_origin:D(v.trapOrigin),u_trap_color_axis:D(v.trapAxis),u_trap_color_axis_x:D(v.trapAxisX),u_trap_color_axis_y:D(v.trapAxisY),u_trap_color_axis_z:D(v.trapAxisZ),u_trap_color_plane:D(v.trapPlane),u_specular_color:D(v.specularColor),u_diffuse_color:D(v.diffuseColor),u_trap_scale_origin:v.trapScaleOrigin,u_trap_scale_axis:v.trapScaleAxis,u_trap_scale_axis_x:v.trapScaleAxisX,u_trap_scale_axis_y:v.trapScaleAxisY,u_trap_scale_axis_z:v.trapScaleAxisZ,u_trap_scale_plane:v.trapScalePlane,u_color_normalize:+!!v.colorNormalize,u_gamma:v.gamma,u_eps_factor:v.epsFactor,u_mb_scale:v.mbScale,u_mb_fold_limit:v.mbFoldLimit,u_mb_min_radius2:v.mbMinRadius2,u_mb_fixed_radius2:v.mbFixedRadius2,u_mb_iterations:v.mbIterations}}var O={enabled:!1,speed:.003,nudge:.001},k=[{key:`mbScale`,min:1.6,max:3},{key:`mbFoldLimit`,min:.5,max:2},{key:`mbMinRadius2`,min:.05,max:1},{key:`mbFixedRadius2`,min:.2,max:2}],A=k.map(()=>Math.random()-.5);{let e=Math.sqrt(A.reduce((e,t)=>e+t*t,0));A=A.map(t=>t/e*O.speed)}function oe(){if(!O.enabled)return;let e=A.map(()=>(Math.random()-.5)*O.nudge);A=A.map((t,n)=>t+e[n]);let t=Math.sqrt(A.reduce((e,t)=>e+t*t,0));A=A.map(e=>e/t*O.speed);for(let e=0;e<k.length;e++){let t=k[e],n=v[t.key]+A[e];n<t.min&&(n=t.min+(t.min-n),A[e]=-A[e]),n>t.max&&(n=t.max-(n-t.max),A[e]=-A[e]),v[t.key]=n}for(let e of C)e.updateDisplay()}var j=y.addFolder(`Animation`);j.add(O,`enabled`).name(`Enabled`),j.add(O,`speed`,1e-4,.02,1e-4).name(`Speed`),j.add(O,`nudge`,0,.01,1e-4).name(`Nudge Strength`);function se(n){let c=n-d;d=n,f.push(c),f.length>p&&f.shift();let _=f.reduce((e,t)=>e+t,0)/f.length,v=h?`gpu ${ee.toFixed(1)} ms`:`no timer ext`;m.textContent=`${_.toFixed(1)} ms  (${(1e3/_).toFixed(0)} fps)  ${v}`,oe();let y=.05,b=.03,x=X(J(),[0,0,-1],u),S=X(J(),[1,0,0],u),C=X(J(),[0,1,0],u),te=.003,w=o*-te,T=s*-te;if(o=0,s=0,a.has(`ArrowLeft`)&&(w+=b),a.has(`ArrowRight`)&&(w-=b),a.has(`ArrowUp`)&&(T+=b),a.has(`ArrowDown`)&&(T-=b),w!==0&&(jr(u,u,Ar(kr(),[0,1,0],w)),Z(u,u)),T!==0&&(jr(u,u,Ar(kr(),[1,0,0],T)),Z(u,u)),a.has(`w`)&&Y(l,l,x,y),a.has(`s`)&&Y(l,l,x,-y),a.has(`a`)&&Y(l,l,S,-y),a.has(`d`)&&Y(l,l,S,y),a.has(` `)&&Y(l,l,C,y),a.has(`Control`)&&Y(l,l,C,-y),g&&h){let e=t.getQueryParameter(g,t.QUERY_RESULT_AVAILABLE),n=t.getParameter(h.GPU_DISJOINT_EXT);e&&!n&&(ee=t.getQueryParameter(g,t.QUERY_RESULT)/1e6),(e||n)&&(t.deleteQuery(g),g=null)}!g&&h&&(g=t.createQuery(),t.beginQuery(h.TIME_ELAPSED_EXT,g)),t.useProgram(r.program),Ge(t,r,i),He(r,ae([e.width,e.height],x,S,C)),Je(t,i),h&&g&&t.endQuery(h.TIME_ELAPSED_EXT),requestAnimationFrame(se)}function ce(){let[n,a]=v.captureRes.split(`x`).map(Number),o=e.width,s=e.height;e.width=n,e.height=a,t.viewport(0,0,n,a);let c=X(J(),[0,0,-1],u),l=X(J(),[1,0,0],u),d=X(J(),[0,1,0],u);t.useProgram(r.program),Ge(t,r,i),He(r,ae([n,a],c,l,d)),Je(t,i),e.toBlob(n=>{if(!n)return;let r=document.createElement(`a`);r.href=URL.createObjectURL(n),r.download=`raymarcher-${Date.now()}.png`,r.click(),URL.revokeObjectURL(r.href),e.width=o,e.height=s,t.viewport(0,0,o,s)},`image/png`)}requestAnimationFrame(se)}))();