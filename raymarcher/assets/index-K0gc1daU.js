var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){if(e instanceof Int8Array)return E;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return D;if(e instanceof Int16Array)return O;if(e instanceof Uint16Array)return k;if(e instanceof Int32Array)return A;if(e instanceof Uint32Array)return j;if(e instanceof Float32Array)return M;throw Error(`unsupported typed array type`)}function r(e){if(e===Int8Array)return E;if(e===Uint8Array||e===Uint8ClampedArray)return D;if(e===Int16Array)return O;if(e===Uint16Array)return k;if(e===Int32Array)return A;if(e===Uint32Array)return j;if(e===Float32Array)return M;throw Error(`unsupported typed array type`)}function i(e){let t=pt[e];if(!t)throw Error(`unknown gl type`);return t}function a(...e){console.error(...e)}function o(e,t){if(!e||typeof e!=`object`)return!1;let n=ht.get(t);n||(n=new WeakMap,ht.set(t,n));let r=n.get(e);if(r===void 0){let i=Object.prototype.toString.call(e);r=i.substring(8,i.length-1)===t,n.set(e,r)}return r}function s(e,t){return typeof WebGLBuffer<`u`&&o(t,`WebGLBuffer`)}function c(e,t){return typeof WebGLTexture<`u`&&o(t,`WebGLTexture`)}function l(e,t,n,r,i){e.bindBuffer(t,n),e.bufferData(t,r,i||gt)}function u(e,t,n,r){if(s(e,t))return t;n||=N;let i=e.createBuffer();return l(e,n,i,t,r),i}function d(e){return e===`indices`}function f(e){return e===Int8Array||e===Uint8Array}function p(e){return e.length?e:e.data}function m(e,t){let n;if(n=Dt.test(e)?2:Ot.test(e)?4:3,t%n>0)throw Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);return n}function h(e,t,n){return e.numComponents||e.size||m(t,n||p(e).length)}function g(e,t){if(mt(e))return e;if(mt(e.data))return e.data;Array.isArray(e)&&(e={data:e});let n=e.type?v(e.type):void 0;return n||=d(t)?Uint16Array:Float32Array,new n(e.data)}function _(e){return typeof e==`number`?e:e?r(e):Tt}function v(e){return typeof e==`number`?i(e):e||Float32Array}function y(e,t){return{buffer:t.buffer,numValues:24,type:_(t.type),arrayType:v(t.type)}}function b(e,t){let n=t.data||t,i=v(t.type),a=n*i.BYTES_PER_ELEMENT,o=e.createBuffer();return e.bindBuffer(N,o),e.bufferData(N,a,t.drawType||gt),{buffer:o,numValues:n,type:r(i),arrayType:i}}function ee(e,t,r){let i=g(t,r);return{arrayType:i.constructor,buffer:u(e,i,void 0,t.drawType),type:n(i),numValues:0}}function te(e,t){let n={};return Object.keys(t).forEach(function(r){if(!d(r)){let i=t[r],a=i.attrib||i.name||i.attribName||Et.attribPrefix+r;if(i.value){if(!Array.isArray(i.value)&&!mt(i.value))throw Error(`array.value is not array or typedarray`);n[a]={value:i.value}}else{let t;t=i.buffer&&i.buffer instanceof WebGLBuffer?y:typeof i==`number`||typeof i.data==`number`?b:ee;let{buffer:o,type:s,numValues:c,arrayType:l}=t(e,i,r),u=i.normalize===void 0?f(l):i.normalize;n[a]={buffer:o,numComponents:h(i,r,c),type:s,normalize:u,stride:i.stride||0,offset:i.offset||0,divisor:i.divisor===void 0?void 0:i.divisor,drawType:i.drawType}}}}),e.bindBuffer(N,null),n}function ne(e,t){return t===yt||t===bt?1:t===xt||t===St?2:t===Ct||t===wt||t===Tt?4:0}function re(e,t){let n,r;for(r=0;r<kt.length&&(n=kt[r],!(n in t||(n=Et.attribPrefix+n,n in t)));++r);r===kt.length&&(n=Object.keys(t)[0]);let i=t[n];if(!i.buffer)return 1;e.bindBuffer(N,i.buffer);let a=e.getBufferParameter(N,vt);e.bindBuffer(N,null);let o=a/ne(e,i.type),s=i.numComponents||i.size,c=o/s;if(c%1!=0)throw Error(`numComponents ${s} not correct for length ${length}`);return c}function ie(e,t,r){let i=te(e,t),a=Object.assign({},r||{});a.attribs=Object.assign({},r?r.attribs:{},i);let o=t.indices;if(o){let t=g(o,`indices`);a.indices=u(e,t,_t),a.numElements=t.length,a.elementType=n(t)}else a.numElements||=re(e,a.attribs);return a}function ae(e){return!!e.texStorage2D}function oe(e){return typeof document<`u`&&document.getElementById?document.getElementById(e):null}function se(e,t){return B[t].bindPoint}function ce(e,t){return function(n){e.uniform1f(t,n)}}function le(e,t){return function(n){e.uniform1fv(t,n)}}function ue(e,t){return function(n){e.uniform2fv(t,n)}}function de(e,t){return function(n){e.uniform3fv(t,n)}}function fe(e,t){return function(n){e.uniform4fv(t,n)}}function pe(e,t){return function(n){e.uniform1i(t,n)}}function me(e,t){return function(n){e.uniform1iv(t,n)}}function he(e,t){return function(n){e.uniform2iv(t,n)}}function ge(e,t){return function(n){e.uniform3iv(t,n)}}function _e(e,t){return function(n){e.uniform4iv(t,n)}}function ve(e,t){return function(n){e.uniform1ui(t,n)}}function ye(e,t){return function(n){e.uniform1uiv(t,n)}}function be(e,t){return function(n){e.uniform2uiv(t,n)}}function xe(e,t){return function(n){e.uniform3uiv(t,n)}}function Se(e,t){return function(n){e.uniform4uiv(t,n)}}function Ce(e,t){return function(n){e.uniformMatrix2fv(t,!1,n)}}function we(e,t){return function(n){e.uniformMatrix3fv(t,!1,n)}}function Te(e,t){return function(n){e.uniformMatrix4fv(t,!1,n)}}function Ee(e,t){return function(n){e.uniformMatrix2x3fv(t,!1,n)}}function De(e,t){return function(n){e.uniformMatrix3x2fv(t,!1,n)}}function Oe(e,t){return function(n){e.uniformMatrix2x4fv(t,!1,n)}}function ke(e,t){return function(n){e.uniformMatrix4x2fv(t,!1,n)}}function Ae(e,t){return function(n){e.uniformMatrix3x4fv(t,!1,n)}}function je(e,t){return function(n){e.uniformMatrix4x3fv(t,!1,n)}}function x(e,t,n,r){let i=se(e,t);return ae(e)?function(t){let a,o;!t||c(e,t)?(a=t,o=null):(a=t.texture,o=t.sampler),e.uniform1i(r,n),e.activeTexture(P+n),e.bindTexture(i,a),e.bindSampler(n,o)}:function(t){e.uniform1i(r,n),e.activeTexture(P+n),e.bindTexture(i,t)}}function S(e,t,n,r,i){let a=se(e,t),o=new Int32Array(i);for(let e=0;e<i;++e)o[e]=n+e;return ae(e)?function(t){e.uniform1iv(r,o),t.forEach(function(t,r){e.activeTexture(P+o[r]);let i,s;!t||c(e,t)?(i=t,s=null):(i=t.texture,s=t.sampler),e.bindSampler(n,s),e.bindTexture(a,i)})}:function(t){e.uniform1iv(r,o),t.forEach(function(t,n){e.activeTexture(P+o[n]),e.bindTexture(a,t)})}}function C(e,t){return function(n){if(n.value)switch(e.disableVertexAttribArray(t),n.value.length){case 4:e.vertexAttrib4fv(t,n.value);break;case 3:e.vertexAttrib3fv(t,n.value);break;case 2:e.vertexAttrib2fv(t,n.value);break;case 1:e.vertexAttrib1fv(t,n.value);break;default:throw Error(`the length of a float constant value must be between 1 and 4!`)}else e.bindBuffer(F,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,n.numComponents||n.size,n.type||I,n.normalize||!1,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function w(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4iv(t,n.value);else throw Error(`The length of an integer constant value must be 4!`);else e.bindBuffer(F,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||un,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function T(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4uiv(t,n.value);else throw Error(`The length of an unsigned integer constant value must be 4!`);else e.bindBuffer(F,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Pn,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function Me(e,t,n){let r=n.size,i=n.count;return function(n){e.bindBuffer(F,n.buffer);let a=n.size||n.numComponents||r,o=a/i,s=n.type||I,c=B[s].size*a,l=n.normalize||!1,u=n.offset||0,d=c/i;for(let r=0;r<i;++r)e.enableVertexAttribArray(t+r),e.vertexAttribPointer(t+r,o,s,l,c,u+d*r),e.vertexAttribDivisor&&e.vertexAttribDivisor(t+r,n.divisor||0)}}function Ne(e,t=``,n=0){let r=[...t.matchAll(qn)],i=new Map(r.map((e,n)=>{let i=parseInt(e[1]),a=r[n+1],o=a?a.index:t.length,s=t.substring(e.index,o);return[i-1,s]}));return e.split(`
`).map((e,t)=>{let r=i.get(t);return`${t+1+n}: ${e}${r?`\n\n^^^ ${r}`:``}`}).join(`
`)}function Pe(e){let t=0;return Jn.test(e)&&(t=1,e=e.replace(Jn,``)),{lineOffset:t,shaderSource:e}}function Fe(e,t){return e.errorCallback(t),e.callback&&setTimeout(()=>{e.callback(`${t}\n${e.errors.join(`
`)}`)}),null}function Ie(e,t,n,r){if(r||=Gt,!e.getShaderParameter(n,qt)){let i=e.getShaderInfoLog(n),{lineOffset:a,shaderSource:o}=Pe(e.getShaderSource(n)),s=`${Ne(o,i,a)}\nError compiling ${At(e,t)}: ${i}`;return r(s),s}return``}function Le(e,t,n){let r,i,a;if(typeof t==`function`&&(n=t,t=void 0),typeof e==`function`)n=e,e=void 0;else if(e&&!Array.isArray(e)){let t=e;n=t.errorCallback,e=t.attribLocations,r=t.transformFeedbackVaryings,i=t.transformFeedbackMode,a=t.callback}let o=n||Gt,s=[],c={errorCallback(e,...t){s.push(e),o(e,...t)},transformFeedbackVaryings:r,transformFeedbackMode:i,callback:a,errors:s};{let n={};Array.isArray(e)?e.forEach(function(e,r){n[e]=t?t[r]:r}):n=e||{},c.attribLocations=n}return c}function Re(e,t){if(t.indexOf(`frag`)>=0)return Yt;if(t.indexOf(`vert`)>=0)return Xt}function ze(e,t,n){let r=e.getAttachedShaders(t);for(let t of r)n.has(t)||e.deleteShader(t);e.deleteProgram(t)}function Be(e,t,n){let r=e.createProgram(),{attribLocations:i,transformFeedbackVaryings:a,transformFeedbackMode:o}=Le(n);for(let n=0;n<t.length;++n){let i=t[n];if(typeof i==`string`){let t=oe(i),r=t?t.text:i,a=e[Yn[n]];t&&t.type&&(a=Re(e,t.type)||a),i=e.createShader(a),e.shaderSource(i,Pe(r).shaderSource),e.compileShader(i)}e.attachShader(r,i)}Object.entries(i).forEach(([t,n])=>e.bindAttribLocation(r,n,t));{let t=a;t&&(t.attribs&&(t=t.attribs),Array.isArray(t)||(t=Object.keys(t)),e.transformFeedbackVaryings(r,t,o||Zt))}return e.linkProgram(r),r}function Ve(e,t,n,r,i){let a=Le(n,r,i),o=new Set(t),s=Be(e,t,a);function c(e,t){let n=Ue(e,t,a.errorCallback);return n&&ze(e,t,o),n}if(a.callback){He(e,s).then(()=>{let t=c(e,s);a.callback(t,t?void 0:s)});return}return c(e,s)?void 0:s}async function He(e,t){let n=e.getExtension(`KHR_parallel_shader_compile`),r=n?(e,t)=>e.getProgramParameter(t,n.COMPLETION_STATUS_KHR):()=>!0,i=0;do await Xn(i),i=1e3/60;while(!r(e,t))}function Ue(e,t,n){if(n||=Gt,!e.getProgramParameter(t,Jt)){let r=e.getProgramInfoLog(t);return n(`Error in program linking: ${r}`),`${r}\n${e.getAttachedShaders(t).map(t=>Ie(e,e.getShaderParameter(t,e.SHADER_TYPE),t,n)).filter(e=>e).join(`
`)}`}}function We(e,t,n,r,i){return Ve(e,t,n,r,i)}function Ge(e){let t=e.name;return t.startsWith(`gl_`)||t.startsWith(`webgl_`)}function Ke(e,t,n,r){let i=e.split(Zn).filter(e=>e!==``),a=0,o=``;for(;;){let e=i[a++];o+=e;let s=Qn(e[0]),c=s?parseInt(e):e;if(s&&(o+=i[a++]),a===i.length){n[c]=t;break}else{let e=i[a++],t=e===`[`,s=n[c]||(t?[]:{});n[c]=s,n=s,r[o]=r[o]||function(e){return function(t){Xe(e,t)}}(s),o+=e}}}function qe(e,t){let n=0;function r(t,r,i){let a=r.name.endsWith(`[0]`),o=r.type,s=B[o];if(!s)throw Error(`unknown type: 0x${o.toString(16)}`);let c;if(s.bindPoint){let t=n;n+=r.size,c=a?s.arraySetter(e,o,t,i,r.size):s.setter(e,o,t,i,r.size)}else c=s.arraySetter&&a?s.arraySetter(e,i):s.setter(e,i);return c.location=i,c}let i={},a={},o=e.getProgramParameter(t,Qt);for(let n=0;n<o;++n){let o=e.getActiveUniform(t,n);if(Ge(o))continue;let s=o.name;s.endsWith(`[0]`)&&(s=s.substr(0,s.length-3));let c=e.getUniformLocation(t,o.name);if(c){let e=r(t,o,c);i[s]=e,Ke(s,e,a,i)}}return i}function Je(e,t){let n={},r=e.getProgramParameter(t,en);for(let i=0;i<r;++i){let r=e.getTransformFeedbackVarying(t,i);n[r.name]={index:i,type:r.type,size:r.size}}return n}function Ye(e,t){let n=e.getProgramParameter(t,Qt),r=[],i=[];for(let a=0;a<n;++a){i.push(a),r.push({});let n=e.getActiveUniform(t,a);r[a].name=n.name}[[`UNIFORM_TYPE`,`type`],[`UNIFORM_SIZE`,`size`],[`UNIFORM_BLOCK_INDEX`,`blockNdx`],[`UNIFORM_OFFSET`,`offset`]].forEach(function(n){let a=n[0],o=n[1];e.getActiveUniforms(t,i,e[a]).forEach(function(e,t){r[t][o]=e})});let a={},o=e.getProgramParameter(t,tn);for(let n=0;n<o;++n){let r=e.getActiveUniformBlockName(t,n),i={index:e.getUniformBlockIndex(t,r),usedByVertexShader:e.getActiveUniformBlockParameter(t,n,nn),usedByFragmentShader:e.getActiveUniformBlockParameter(t,n,rn),size:e.getActiveUniformBlockParameter(t,n,an),uniformIndices:e.getActiveUniformBlockParameter(t,n,on)};i.used=i.usedByVertexShader||i.usedByFragmentShader,a[r]=i}return{blockSpecs:a,uniformData:r}}function Xe(e,t){for(let n in t){let r=e[n];typeof r==`function`?r(t[n]):Xe(e[n],t[n])}}function Ze(e,...t){let n=e.uniformSetters||e,r=t.length;for(let e=0;e<r;++e){let r=t[e];if(Array.isArray(r)){let e=r.length;for(let t=0;t<e;++t)Ze(n,r[t])}else for(let e in r){let t=n[e];t&&t(r[e])}}}function Qe(e,t){let n={},r=e.getProgramParameter(t,$t);for(let i=0;i<r;++i){let r=e.getActiveAttrib(t,i);if(Ge(r))continue;let a=e.getAttribLocation(t,r.name),o=V[r.type],s=o.setter(e,a,o);s.location=a,n[r.name]=s}return n}function $e(e,t){for(let n in t){let r=e[n];r&&r(t[n])}}function et(e,t,n){n.vertexArrayObject?e.bindVertexArray(n.vertexArrayObject):($e(t.attribSetters||t,n.attribs),n.indices&&e.bindBuffer(Kt,n.indices))}function tt(e,t){let n=qe(e,t),r=Qe(e,t),i={program:t,uniformSetters:n,attribSetters:r,uniformLocations:Object.fromEntries(Object.entries(n).map(([e,t])=>[e,t.location])),attribLocations:Object.fromEntries(Object.entries(r).map(([e,t])=>[e,t.location]))};return ae(e)&&(i.uniformBlockSpec=Ye(e,t),i.transformFeedbackInfo=Je(e,t)),i}function nt(e,t,n,r,i){let a=Le(n,r,i),o=[];if(t=t.map(function(e){if(!$n.test(e)){let t=oe(e);if(t)e=t.text;else{let t=`no element with id: ${e}`;a.errorCallback(t),o.push(t)}}return e}),o.length)return Fe(a,``);let s=a.callback;s&&(a.callback=(t,n)=>{s(t,t?void 0:tt(e,n))});let c=We(e,t,a);return c?tt(e,c):null}function rt(e,t,n,r,i,a){n=n===void 0?er:n;let o=t.indices,s=t.elementType,c=r===void 0?t.numElements:r;i=i===void 0?0:i,s||o?a===void 0?e.drawElements(n,c,s===void 0?tr:t.elementType,i):e.drawElementsInstanced(n,c,s===void 0?tr:t.elementType,i,a):a===void 0?e.drawArrays(n,i,c):e.drawArraysInstanced(n,i,c,a)}var E,D,O,k,A,j,M,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,N,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,P,F,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,I,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,L,R,Kn,z,B,V,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,H,mr,hr,U,W,gr=e((()=>{E=5120,D=5121,O=5122,k=5123,A=5124,j=5125,M=5126,it=32819,at=32820,ot=33635,st=5131,ct=33640,lt=35899,ut=35902,dt=36269,ft=34042,pt={};{let e=pt;e[E]=Int8Array,e[D]=Uint8Array,e[O]=Int16Array,e[k]=Uint16Array,e[A]=Int32Array,e[j]=Uint32Array,e[M]=Float32Array,e[it]=Uint16Array,e[at]=Uint16Array,e[ot]=Uint16Array,e[st]=Uint16Array,e[ct]=Uint32Array,e[lt]=Uint32Array,e[ut]=Uint32Array,e[dt]=Uint32Array,e[ft]=Uint32Array}mt=typeof SharedArrayBuffer<`u`?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer},ht=new Map,gt=35044,N=34962,_t=34963,vt=34660,yt=5120,bt=5121,xt=5122,St=5123,Ct=5124,wt=5125,Tt=5126,Et={attribPrefix:``},Dt=/coord|texture/i,Ot=/color|colour/i,kt=[`position`,`positions`,`a_position`],At=function(){let e={},t={};function n(n){let r=n.constructor.name;if(!e[r]){for(let e in n)if(typeof n[e]==`number`){let r=t[n[e]];t[n[e]]=r?`${r} | ${e}`:e}e[r]=!0}}return function(e,r){return n(e),t[r]||(typeof r==`number`?`0x${r.toString(16)}`:r)}}(),new Uint8Array([128,192,255,255]),function(){let e;return function(){return e||=typeof document<`u`&&document.createElement?document.createElement(`canvas`).getContext(`2d`):null,e}}(),jt=6406,Mt=6407,Nt=6408,Pt=6409,Ft=6410,It=6402,Lt=34041,Rt=33319,zt=33320,Bt=6403,Vt=36244,Ht=36248,Ut=36249,Wt={};{let e=Wt;e[jt]={numColorComponents:1},e[Pt]={numColorComponents:1},e[Ft]={numColorComponents:2},e[Mt]={numColorComponents:3},e[Nt]={numColorComponents:4},e[Bt]={numColorComponents:1},e[Vt]={numColorComponents:1},e[Rt]={numColorComponents:2},e[zt]={numColorComponents:2},e[Mt]={numColorComponents:3},e[Ht]={numColorComponents:3},e[Nt]={numColorComponents:4},e[Ut]={numColorComponents:4},e[It]={numColorComponents:1},e[Lt]={numColorComponents:2}}Gt=a,P=33984,F=34962,Kt=34963,qt=35713,Jt=35714,Yt=35632,Xt=35633,Zt=35981,Qt=35718,$t=35721,en=35971,tn=35382,nn=35396,rn=35398,an=35392,on=35395,I=5126,sn=35664,cn=35665,ln=35666,un=5124,dn=35667,fn=35668,pn=35669,mn=35670,hn=35671,gn=35672,_n=35673,vn=35674,yn=35675,bn=35676,xn=35678,Sn=35680,Cn=35679,wn=35682,Tn=35685,En=35686,Dn=35687,On=35688,kn=35689,An=35690,jn=36289,Mn=36292,Nn=36293,Pn=5125,Fn=36294,In=36295,Ln=36296,Rn=36298,zn=36299,Bn=36300,Vn=36303,Hn=36306,Un=36307,Wn=36308,Gn=36311,L=3553,R=34067,Kn=32879,z=35866,B={},B[I]={Type:Float32Array,size:4,setter:ce,arraySetter:le},B[sn]={Type:Float32Array,size:8,setter:ue,cols:2},B[cn]={Type:Float32Array,size:12,setter:de,cols:3},B[ln]={Type:Float32Array,size:16,setter:fe,cols:4},B[un]={Type:Int32Array,size:4,setter:pe,arraySetter:me},B[dn]={Type:Int32Array,size:8,setter:he,cols:2},B[fn]={Type:Int32Array,size:12,setter:ge,cols:3},B[pn]={Type:Int32Array,size:16,setter:_e,cols:4},B[Pn]={Type:Uint32Array,size:4,setter:ve,arraySetter:ye},B[Fn]={Type:Uint32Array,size:8,setter:be,cols:2},B[In]={Type:Uint32Array,size:12,setter:xe,cols:3},B[Ln]={Type:Uint32Array,size:16,setter:Se,cols:4},B[mn]={Type:Uint32Array,size:4,setter:pe,arraySetter:me},B[hn]={Type:Uint32Array,size:8,setter:he,cols:2},B[gn]={Type:Uint32Array,size:12,setter:ge,cols:3},B[_n]={Type:Uint32Array,size:16,setter:_e,cols:4},B[vn]={Type:Float32Array,size:32,setter:Ce,rows:2,cols:2},B[yn]={Type:Float32Array,size:48,setter:we,rows:3,cols:3},B[bn]={Type:Float32Array,size:64,setter:Te,rows:4,cols:4},B[Tn]={Type:Float32Array,size:32,setter:Ee,rows:2,cols:3},B[En]={Type:Float32Array,size:32,setter:Oe,rows:2,cols:4},B[Dn]={Type:Float32Array,size:48,setter:De,rows:3,cols:2},B[On]={Type:Float32Array,size:48,setter:Ae,rows:3,cols:4},B[kn]={Type:Float32Array,size:64,setter:ke,rows:4,cols:2},B[An]={Type:Float32Array,size:64,setter:je,rows:4,cols:3},B[xn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:L},B[Sn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:R},B[Cn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:Kn},B[wn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:L},B[jn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:z},B[Mn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:z},B[Nn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:R},B[Rn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:L},B[zn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:Kn},B[Bn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:R},B[Vn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:z},B[Hn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:L},B[Un]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:Kn},B[Wn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:R},B[Gn]={Type:null,size:0,setter:x,arraySetter:S,bindPoint:z},V={},V[I]={size:4,setter:C},V[sn]={size:8,setter:C},V[cn]={size:12,setter:C},V[ln]={size:16,setter:C},V[un]={size:4,setter:w},V[dn]={size:8,setter:w},V[fn]={size:12,setter:w},V[pn]={size:16,setter:w},V[Pn]={size:4,setter:T},V[Fn]={size:8,setter:T},V[In]={size:12,setter:T},V[Ln]={size:16,setter:T},V[mn]={size:4,setter:w},V[hn]={size:8,setter:w},V[gn]={size:12,setter:w},V[_n]={size:16,setter:w},V[vn]={size:4,setter:Me,count:2},V[yn]={size:9,setter:Me,count:3},V[bn]={size:16,setter:Me,count:4},qn=/ERROR:\s*\d+:(\d+)/gi,Jn=/^[ \t]*\n/,Yn=[`VERTEX_SHADER`,`FRAGMENT_SHADER`],Xn=(e=0)=>new Promise(t=>setTimeout(t,e)),Zn=/(\.|\[|]|\w+)/g,Qn=e=>e>=`0`&&e<=`9`,$n=/\s|{|}|;/,er=4,tr=5123,nr=6402,rr=33190,ir=36012,ar=35056,or=36013,sr=32854,cr=32855,lr=36194,ur=33189,dr=6401,fr=36168,pr=34041,H=36096,mr=36128,hr=33306,U={},U[pr]=hr,U[dr]=mr,U[fr]=mr,U[nr]=H,U[ur]=H,U[rr]=H,U[ir]=H,U[ar]=hr,U[or]=hr,W={},W[sr]=!0,W[cr]=!0,W[lr]=!0,W[pr]=!0,W[ur]=!0,W[dr]=!0,W[fr]=!0})),G,_r=e((()=>{G=typeof Float32Array<`u`?Float32Array:Array,Math.PI/180,180/Math.PI}));function vr(){var e=new G(9);return G!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}var yr=e((()=>{_r()}));function K(){var e=new G(3);return G!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function br(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function xr(e,t,n){var r=new G(3);return r[0]=e,r[1]=t,r[2]=n,r}function q(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function Sr(e,t){var n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function Cr(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function wr(e,t,n){var r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function J(e,t,n){var r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],c=t[1],l=t[2],u=i*l-a*c,d=a*s-r*l,f=r*c-i*s;return u+=u,d+=d,f+=f,e[0]=s+o*u+i*f-a*d,e[1]=c+o*d+a*u-r*f,e[2]=l+o*f+r*d-i*u,e}var Tr,Er=e((()=>{_r(),Tr=br,function(){var e=K();return function(t,n,r,i,a,o){var s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}()}));function Dr(){var e=new G(4);return G!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Or(e,t,n,r){var i=new G(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function kr(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=a*o,e}var Ar=e((()=>{_r(),function(){var e=Dr();return function(t,n,r,i,a,o){var s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}()}));function Y(){var e=new G(4);return G!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function jr(e,t,n){n*=.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function Mr(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=r*u+o*s+i*l-a*c,e[1]=i*u+o*c+a*s-r*l,e[2]=a*u+o*l+r*c-i*s,e[3]=o*u-r*s-i*c-a*l,e}function Nr(e,t,n,r){var i=t[0],a=t[1],o=t[2],s=t[3],c=n[0],l=n[1],u=n[2],d=n[3],f,p=i*c+a*l+o*u+s*d,m,h,g;return p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(f=Math.acos(p),m=Math.sin(f),h=Math.sin((1-r)*f)/m,g=Math.sin(r*f)/m):(h=1-r,g=r),e[0]=h*i+g*c,e[1]=h*a+g*l,e[2]=h*o+g*u,e[3]=h*s+g*d,e}function Pr(e,t){var n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=(i+1)%3,o=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[a*3+a]-t[o*3+o]+1),e[i]=.5*r,r=.5/r,e[3]=(t[a*3+o]-t[o*3+a])*r,e[a]=(t[a*3+i]+t[i*3+a])*r,e[o]=(t[o*3+i]+t[i*3+o])*r}return e}var Fr,X,Ir=e((()=>{_r(),yr(),Er(),Ar(),Fr=Or,X=kr,function(){var e=K(),t=xr(1,0,0),n=xr(0,1,0);return function(r,i,a){var o=Cr(i,a);return o<-.999999?(wr(e,t,i),Tr(e)<1e-6&&wr(e,n,i),Sr(e,e),jr(r,e,Math.PI),r):o>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(wr(e,i,a),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+o,X(r,r))}}(),function(){var e=Y(),t=Y();return function(n,r,i,a,o,s){return Nr(e,r,o,s),Nr(t,i,a,s),Nr(n,e,t,2*s*(1-s)),n}}(),function(){var e=vr();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],X(t,Pr(t,e))}}()})),Lr=e((()=>{Ir(),Er()}));function Rr(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}function zr(e){return Ur.find(t=>t.match(e))}function Br(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var Z,Vr,Hr,Q,Ur,Wr,$,Gr,Kr,qr,Jr,Yr,Xr,Zr=e((()=>{Z=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Vr=class extends Z{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}},Hr={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:Rr,toHexString:Rr},Q={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},Ur=[Hr,Q,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=Q.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return Q.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=Q.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return Q.toHexString(i)}}],Wr=class extends Z{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=zr(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=Rr(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},$=class extends Z{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},Gr=class extends Z{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Kr=class extends Z{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},qr=class extends Z{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Jr=`.lil-gui {
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
}`,Yr=!1,Xr=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!Yr&&o&&(Br(Jr),Yr=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a}add(e,t,n,r,i){if(Object(n)===n)return new Kr(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new Gr(this,e,t,n,r,i);case`boolean`:return new Vr(this,e,t);case`string`:return new qr(this,e,t);case`function`:return new $(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Wr(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof $||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof $)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}})),Qr,$r=e((()=>{Qr=`#version 300 es
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
uniform vec3 u_trap_color_plane;
uniform vec3 u_specular_color;
uniform float u_gamma;

float sdSphere(vec3 p, float r) {
  return length(p) - r;
}

float mandelbox(vec3 pos) {
  float scale = 2.0;
  float foldLimit = 1.0;
  float minRadius2 = 0.25;
  float fixedRadius2 = 1.0;

  vec3 z = pos;
  float dr = 1.0;

  for (int i = 0; i < 38; i++) {
    // Box fold
    z = clamp(z, -foldLimit, foldLimit) * 2.0 - z;

    // Sphere fold
    float r2 = dot(z, z);
    if (r2 < minRadius2) {
      float t = fixedRadius2 / minRadius2;
      z *= t;
      dr *= t;
    } else if (r2 < fixedRadius2) {
      float t = fixedRadius2 / r2;
      z *= t;
      dr *= t;
    }

    z = z * scale + pos;
    dr = dr * abs(scale) + 1.0;
  }

  return length(z) / abs(dr);
}

// Mandelbox with orbit trap data: returns vec4(de, trap_origin, trap_plane, trap_axis)
vec4 mandelbox_trap(vec3 pos) {
  float scale = 2.0;
  float foldLimit = 1.0;
  float minRadius2 = 0.25;
  float fixedRadius2 = 1.0;

  vec3 z = pos;
  float dr = 1.0;

  float trap_origin = 1e10; // min distance to origin
  float trap_axis = 1e10;   // min distance to any axis
  float trap_plane = 1e10;  // min distance to any coordinate plane

  for (int i = 0; i < 38; i++) {
    z = clamp(z, -foldLimit, foldLimit) * 2.0 - z;

    float r2 = dot(z, z);
    if (r2 < minRadius2) {
      float t = fixedRadius2 / minRadius2;
      z *= t;
      dr *= t;
    } else if (r2 < fixedRadius2) {
      float t = fixedRadius2 / r2;
      z *= t;
      dr *= t;
    }

    z = z * scale + pos;
    dr = dr * abs(scale) + 1.0;

    // Track orbit traps
    trap_origin = min(trap_origin, length(z));
    trap_axis = min(trap_axis, min(length(z.yz), min(length(z.xz), length(z.xy))));
    trap_plane = min(trap_plane, min(abs(z.x), min(abs(z.y), abs(z.z))));
  }

  float de = length(z) / abs(dr);
  return vec4(de, trap_origin, trap_axis, trap_plane);
}

float scene(vec3 p) {
  float mb = mandelbox(p);
  float s2 = sdSphere(p - vec3(1.5, 0.5, -0.5), 0.4);
  return min(mb, s2);
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
  float epsilon = init_dist/1000.0;

  // Raymarch
  float t = 0.0;
  int steps = 0;

  float d;

  for (int i = 0; i < 512; i++) {
    if (i >= u_max_steps) break;
    steps = i;
    vec3 p = ro + rd * t;

    d = scene(p);
    if (d < epsilon) break;
    t += d;
    if (t > 64.0) break;
  }

  float raw_ao = 1.0 - float(steps) / float(u_max_steps);

  vec3 col_background = vec3(0.);
  vec3 col_specular = u_specular_color;
  vec3 col_ao = vec3(0.0, 0.0, 0.0);

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
    vec4 trap = mandelbox_trap(p);
    float tr = clamp(trap.y * 0.4, 0.0, 1.0);  // origin trap
    float tg = clamp(trap.z * 0.4, 0.0, 1.0);  // axis trap
    float tb = clamp(trap.w * 0.4, 0.0, 1.0);  // plane trap
    vec3 col_material = tr * u_trap_color_origin + tg * u_trap_color_axis + tb * u_trap_color_plane;

    // Lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(n, lightDir), 0.0);
    float amb = 0.15;

    // Specular
    vec3 h = normalize(lightDir - rd);
    float spec = pow(max(dot(n, h), 0.0), 32.0);

    col = (col_material * (amb + diff) + col_specular * spec * 0.5) * ao + col_ao * (1. - ao);

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
`}));t((()=>{gr(),Lr(),Zr(),$r(),ti();var e=document.getElementById(`c`),t=e.getContext(`webgl2`,{preserveDrawingBuffer:!0});function n(){e.width=window.innerWidth,e.height=window.innerHeight,t.viewport(0,0,e.width,e.height)}window.addEventListener(`resize`,n),n();var r=nt(t,[Qr,ei]),i=ie(t,{position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]}),a=new Set;window.addEventListener(`keydown`,e=>{a.add(e.key),e.key===`p`&&(c=+!c,console.log(`DEBUG `+(c?`ON`:`OFF`))),e.key===`F9`&&(e.preventDefault(),ne()),[` `,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.key)&&e.preventDefault()}),window.addEventListener(`keyup`,e=>a.delete(e.key));var o=0,s=0;e.addEventListener(`click`,()=>{document.pointerLockElement===e?document.exitPointerLock():e.requestPointerLock()}),document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement!==e&&(o=0,s=0)}),window.addEventListener(`mousemove`,t=>{document.pointerLockElement===e&&(o+=t.movementX,s+=t.movementY)});var c=0,l=xr(11,11,11),u=Fr(-.3251,.3251,0,.8881),d=0,f=document.getElementById(`ft`),p={aoMode:0,maxSteps:256,fogEnabled:!0,specularColor:`#ffffff`,trapOrigin:`#ff0000`,trapAxis:`#00ff00`,trapPlane:`#0000ff`,gamma:2.2,captureRes:`7680x4320`},m=new Xr;m.add(p,`maxSteps`,16,512,1).name(`Max Steps`);var h=m.addFolder(`Light`);h.add(p,`aoMode`,{Off:-1,"Step Count":0,"SDF Sampled (IQ)":1,"Cone Traced":2}).name(`Ambient Occlusion`),h.add(p,`fogEnabled`).name(`Depth Fog`),h.addColor(p,`specularColor`).name(`Specular Color`),h.add(p,`gamma`,1,4,.1).name(`Gamma`);var g=m.addFolder(`Colours`);g.addColor(p,`trapOrigin`).name(`Trap: Origin`),g.addColor(p,`trapAxis`).name(`Trap: Axis`),g.addColor(p,`trapPlane`).name(`Trap: Plane`);var _=m.addFolder(`Screenshot`);_.add(p,`captureRes`,[`1920x1080`,`3840x2160`,`7680x4320`,`15360x8640`]).name(`Size`),_.add({capture:()=>ne()},`capture`).name(`Take Screenshot (F9)`);var v=m.addFolder(`Controls`),y=document.createElement(`div`);y.style.cssText=`padding:4px 8px;font:11px/1.6 monospace;color:#eee;white-space:pre`,y.textContent=`WASD        move
Space/Ctrl  up / down
Arrows      look around
Mouse       click to grab
            drag to look
P           toggle debug
F9          screenshot`,v.$children.appendChild(y),v.close();function b(e){let t=parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function ee(e,t,n,r){return{u_resolution:e,u_ro:Array.from(l),u_forward:Array.from(t),u_right:Array.from(n),u_up:Array.from(r),u_debug:c,u_ao_mode:p.aoMode,u_max_steps:p.maxSteps,u_fog_enabled:+!!p.fogEnabled,u_trap_color_origin:b(p.trapOrigin),u_trap_color_axis:b(p.trapAxis),u_trap_color_plane:b(p.trapPlane),u_specular_color:b(p.specularColor),u_gamma:p.gamma}}function te(n){let c=n-d;d=n,f.textContent=`${c.toFixed(1)} ms  (${(1e3/c).toFixed(0)} fps)`;let p=.05,m=.03,h=J(K(),[0,0,-1],u),g=J(K(),[1,0,0],u),_=J(K(),[0,1,0],u),v=.003,y=o*-v,b=s*-v;o=0,s=0,a.has(`ArrowLeft`)&&(y+=m),a.has(`ArrowRight`)&&(y-=m),a.has(`ArrowUp`)&&(b+=m),a.has(`ArrowDown`)&&(b-=m),y!==0&&(Mr(u,u,jr(Y(),[0,1,0],y)),X(u,u)),b!==0&&(Mr(u,u,jr(Y(),[1,0,0],b)),X(u,u)),a.has(`w`)&&q(l,l,h,p),a.has(`s`)&&q(l,l,h,-p),a.has(`a`)&&q(l,l,g,-p),a.has(`d`)&&q(l,l,g,p),a.has(` `)&&q(l,l,_,p),a.has(`Control`)&&q(l,l,_,-p),t.useProgram(r.program),et(t,r,i),Ze(r,ee([e.width,e.height],h,g,_)),rt(t,i),requestAnimationFrame(te)}function ne(){let[n,a]=p.captureRes.split(`x`).map(Number),o=e.width,s=e.height;e.width=n,e.height=a,t.viewport(0,0,n,a);let c=J(K(),[0,0,-1],u),l=J(K(),[1,0,0],u),d=J(K(),[0,1,0],u);t.useProgram(r.program),et(t,r,i),Ze(r,ee([n,a],c,l,d)),rt(t,i),e.toBlob(n=>{if(!n)return;let r=document.createElement(`a`);r.href=URL.createObjectURL(n),r.download=`raymarcher-${Date.now()}.png`,r.click(),URL.revokeObjectURL(r.href),e.width=o,e.height=s,t.viewport(0,0,o,s)},`image/png`)}requestAnimationFrame(te)}))();