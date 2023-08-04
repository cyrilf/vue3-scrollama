(function(u,S){typeof exports=="object"&&typeof module<"u"?module.exports=S(require("vue")):typeof define=="function"&&define.amd?define(["vue"],S):(u=typeof globalThis<"u"?globalThis:u||self,u.VueScrollama=S(u.Vue))})(this,function(u){"use strict";function S(t,n=document){return typeof t=="string"?Array.from(n.querySelectorAll(t)):t instanceof Element?[t]:t instanceof NodeList?Array.from(t):t instanceof Array?t:[]}function F(t){const n=document.createElement("div");n.className=`scrollama__debug-step ${t}`,n.style.position="fixed",n.style.left="0",n.style.width="100%",n.style.zIndex="9999",n.style.borderTop="2px solid black",n.style.borderBottom="2px solid black";const o=document.createElement("p");return o.style.position="absolute",o.style.left="0",o.style.height="1px",o.style.width="100%",o.style.borderTop="1px dashed black",n.appendChild(o),document.body.appendChild(n),n}function V({id:t,step:n,marginTop:o}){const{index:s,height:p}=n,d=`scrollama__debug-step--${t}-${s}`;let h=document.querySelector(`.${d}`);h||(h=F(d)),h.style.top=`${o*-1}px`,h.style.height=`${p}px`,h.querySelector("p").style.top=`${p/2}px`}function D(){const t="abcdefghijklmnopqrstuvwxyz",n=Date.now(),o=[];for(let s=0;s<6;s+=1){const p=t[Math.floor(Math.random()*t.length)];o.push(p)}return`${o.join("")}${n}`}function _(t){console.error(`scrollama error: ${t}`)}function w(t){return+t.getAttribute("data-scrollama-index")}function U(t,n){const o=Math.ceil(t/n),s=[],p=1/o;for(let d=0;d<o+1;d+=1)s.push(d*p);return s}function P(t){if(typeof t=="string"&&t.indexOf("px")>0){const n=+t.replace("px","");return isNaN(n)?(err("offset value must be in 'px' format. Fallback to 0.5."),{format:"percent",value:.5}):{format:"pixels",value:n}}else if(typeof t=="number"||!isNaN(+t))return t>1&&err("offset value is greater than 1. Fallback to 1."),t<0&&err("offset value is lower than 0. Fallback to 0."),{format:"percent",value:Math.min(Math.max(0,t),1)};return null}function G(t){t.forEach(n=>n.node.setAttribute("data-scrollama-index",n.index))}function J(t){const{top:n}=t.getBoundingClientRect(),o=window.pageYOffset,s=document.body.clientTop||0;return n+o-s}let x,$,g;function q(t){const n=t?t.scrollTop:window.pageYOffset;x!==n&&(x=n,x>$?g="down":x<$&&(g="up"),$=x)}function K(t){x=0,$=0,document.addEventListener("scroll",()=>q(t))}function B(){let t={},n=D(),o=[],s,p,d,h=0,m=!1,a=!1,I=!1,N=!1,z=[];function R(){t={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},z=[]}function T(e){e&&!m&&M(),!e&&m&&H(),m=e}function A(e,i){const r=w(e),c=o[r];i!==void 0&&(c.progress=i);const l={element:e,index:r,progress:i,direction:g};c.state==="enter"&&t.stepProgress(l)}function Q(e,i=!0){const r=w(e),c=o[r],l={element:e,index:r,direction:g};c.direction=g,c.state="enter",z[r]||t.stepEnter(l),N&&(z[r]=!0)}function W(e,i=!0){const r=w(e),c=o[r];if(!c.state)return!1;const l={element:e,index:r,direction:g};a&&(g==="down"&&c.progress<1?A(e,1):g==="up"&&c.progress>0&&A(e,0)),c.direction=g,c.state="exit",t.stepExit(l)}function X([e]){const i=w(e.target),r=o[i],c=e.target.offsetHeight;c!==r.height&&(r.height=c,j(r),Y(r),L(r))}function Z([e]){q(p);const{isIntersecting:i,target:r}=e;i?Q(r):W(r)}function ee([e]){const i=w(e.target),r=o[i],{isIntersecting:c,intersectionRatio:l,target:b}=e;c&&r.state==="enter"&&A(b,l)}function j({observers:e}){Object.keys(e).map(i=>{e[i].disconnect()})}function H(){o.forEach(j)}function L(e){const i=new ResizeObserver(X);i.observe(e.node),e.observers.resize=i}function te(){o.forEach(L)}function Y(e){const i=window.innerHeight,r=e.offset||s,c=r.format==="pixels"?1:i,l=r.value*c,b=e.height/2-l,y=e.height/2-(i-l),E={rootMargin:`${b}px 0px ${y}px 0px`,threshold:.5,root:d},C=new IntersectionObserver(Z,E);C.observe(e.node),e.observers.step=C,I&&V({id:n,step:e,marginTop:b,marginBottom:y})}function ne(){o.forEach(Y)}function oe(e){const i=window.innerHeight,r=e.offset||s,c=r.format==="pixels"?1:i,l=r.value*c,b=-l+e.height,y=l-i,O=`${b}px 0px ${y}px 0px`,k=U(e.height,h),v={rootMargin:O,threshold:k},E=new IntersectionObserver(ee,v);E.observe(e.node),e.observers.progress=E}function re(){o.forEach(oe)}function M(){H(),te(),ne(),a&&re()}const f={};return f.setup=({step:e,parent:i,offset:r=.5,threshold:c=4,progress:l=!1,once:b=!1,debug:y=!1,container:O=void 0,root:k=null})=>(K(O),o=S(e,i).map((v,E)=>({index:E,direction:void 0,height:v.offsetHeight,node:v,observers:{},offset:P(v.dataset.offset),top:J(v),progress:0,state:void 0})),o.length?(a=l,N=b,I=y,h=Math.max(1,+c),s=P(r),p=O,d=k,R(),G(o),T(!0),f):(_("no step elements"),f)),f.enable=()=>(T(!0),f),f.disable=()=>(T(!1),f),f.destroy=()=>(T(!1),R(),f),f.resize=()=>(M(),f),f.offset=e=>e==null?s.value:(s=P(e),M(),f),f.onStepEnter=e=>(typeof e=="function"?t.stepEnter=e:_("onStepEnter requires a function"),f),f.onStepExit=e=>(typeof e=="function"?t.stepExit=e:_("onStepExit requires a function"),f),f.onStepProgress=e=>(typeof e=="function"?t.stepProgress=e:_("onStepProgress requires a function"),f),f}return{__name:"VueScrollama",setup(t,{emit:n}){let o=u.ref(null);const s=u.ref(null),p=new Proxy({},{get:(m,a)=>o.value.getAttribute(a),has:(m,a)=>o.value.hasAttribute(a)});u.onMounted(()=>{s.value=B(),d()}),u.onBeforeUnmount(()=>{s.value&&s.value.destroy(),window.removeEventListener("resize",h)}),u.watchEffect(()=>{d()});function d(){if(s.value&&s.value.destroy(),o.value){const m={step:Array.from(o.value.children),progress:"step-progress"in p,...p};s.value=B().setup(m).onStepProgress(a=>{n("step-progress",a)}).onStepEnter(a=>{n("step-enter",a)}).onStepExit(a=>{n("step-exit",a)}),window.addEventListener("resize",h)}}function h(){s.value&&s.value.resize()}return(m,a)=>(u.openBlock(),u.createElementBlock("div",{class:"scrollama__steps",ref_key:"rootElement",ref:o},[u.renderSlot(m.$slots,"default")],512))}}});
