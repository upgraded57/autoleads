import{r as e,j as c,b as Ie,_ as ge}from"./index-BHPEYUkL.js";import{O as Ae,a as Be}from"./auth-BMXEkRyv.js";import{c as Z,B as We}from"./button-U2B68_In.js";import"./baseUrl-HwsEoYQ5.js";var _e=Object.defineProperty,Fe=Object.defineProperties,Le=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,ve=(t,n,r)=>n in t?_e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,$e=(t,n)=>{for(var r in n||(n={}))he.call(n,r)&&ve(t,r,n[r]);if(ee)for(var r of ee(n))xe.call(n,r)&&ve(t,r,n[r]);return t},He=(t,n)=>Fe(t,Le(n)),Ge=(t,n)=>{var r={};for(var l in t)he.call(t,l)&&n.indexOf(l)<0&&(r[l]=t[l]);if(t!=null&&ee)for(var l of ee(t))n.indexOf(l)<0&&xe.call(t,l)&&(r[l]=t[l]);return r},Ve="^\\d+$";function Ue(t){let n=setTimeout(t,0),r=setTimeout(t,10),l=setTimeout(t,50);return[n,r,l]}function ze(t){let n=e.useRef();return e.useEffect(()=>{n.current=t}),n.current}var qe=18,be=40,Je=`${be}px`,Ke=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function Qe({containerRef:t,inputRef:n,pushPasswordManagerStrategy:r,isFocused:l}){let g=e.useRef({done:!1,refocused:!1}),[i,b]=e.useState(!1),[v,B]=e.useState(!1),[j,W]=e.useState(!1),te=e.useMemo(()=>r==="none"?!1:(r==="increase-width"||r==="experimental-no-flickering")&&i&&v,[i,v,r]),N=e.useCallback(()=>{let h=t.current,m=n.current;if(!h||!m||j||r==="none")return;let s=h,S=s.getBoundingClientRect().left+s.offsetWidth,_=s.getBoundingClientRect().top+s.offsetHeight/2,K=S-qe,Q=_;if(!(document.querySelectorAll(Ke).length===0&&document.elementFromPoint(K,Q)===h)&&(b(!0),W(!0),!g.current.refocused&&document.activeElement===m)){let G=[m.selectionStart,m.selectionEnd];m.blur(),m.focus(),m.setSelectionRange(G[0],G[1]),g.current.refocused=!0}},[t,n,j,r]);return e.useEffect(()=>{let h=t.current;if(!h||r==="none")return;function m(){let S=window.innerWidth-h.getBoundingClientRect().right;B(S>=be)}m();let s=setInterval(m,1e3);return()=>{clearInterval(s)}},[t,r]),e.useEffect(()=>{let h=l||document.activeElement===n.current;if(r==="none"||!h)return;let m=setTimeout(N,0),s=setTimeout(N,2e3),S=setTimeout(N,5e3),_=setTimeout(()=>{W(!0)},6e3);return()=>{clearTimeout(m),clearTimeout(s),clearTimeout(S),clearTimeout(_)}},[n,l,r,N]),{hasPWMBadge:i,willPushPWMBadge:te,PWM_BADGE_SPACE_WIDTH:Je}}var we=e.createContext({}),ye=e.forwardRef((t,n)=>{var r=t,{value:l,onChange:g,maxLength:i,textAlign:b="left",pattern:v=Ve,inputMode:B="numeric",onComplete:j,pushPasswordManagerStrategy:W="increase-width",containerClassName:te,noScriptCSSFallback:N=Xe,render:h,children:m}=r,s=Ge(r,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]),S,_,K,Q,G;let[Pe,Ce]=e.useState(typeof s.defaultValue=="string"?s.defaultValue:""),p=l??Pe,O=ze(p),V=e.useCallback(a=>{g==null||g(a),Ce(a)},[g]),y=e.useMemo(()=>v?typeof v=="string"?new RegExp(v):v:null,[v]),d=e.useRef(null),ne=e.useRef(null),re=e.useRef({value:p,onChange:V,isIOS:typeof window<"u"&&((_=(S=window==null?void 0:window.CSS)==null?void 0:S.supports)==null?void 0:_.call(S,"-webkit-touch-callout","none"))}),X=e.useRef({prev:[(K=d.current)==null?void 0:K.selectionStart,(Q=d.current)==null?void 0:Q.selectionEnd,(G=d.current)==null?void 0:G.selectionDirection]});e.useImperativeHandle(n,()=>d.current,[]),e.useEffect(()=>{let a=d.current,o=ne.current;if(!a||!o)return;re.current.value!==a.value&&re.current.onChange(a.value),X.current.prev=[a.selectionStart,a.selectionEnd,a.selectionDirection];function f(){if(document.activeElement!==a){z(null),q(null);return}let u=a.selectionStart,w=a.selectionEnd,P=a.selectionDirection,R=a.maxLength,T=a.value,$=X.current.prev,C=-1,k=-1,D;if(T.length!==0&&u!==null&&w!==null){let Re=u===w,Te=u===T.length&&T.length<R;if(Re&&!Te){let I=u;if(I===0)C=0,k=1,D="forward";else if(I===R)C=I-1,k=I,D="backward";else if(R>1&&T.length>1){let le=0;if($[0]!==null&&$[1]!==null){D=I<$[1]?"backward":"forward";let De=$[0]===$[1]&&$[0]<R;D==="backward"&&!De&&(le=-1)}C=le+I,k=le+I+1}}C!==-1&&k!==-1&&C!==k&&d.current.setSelectionRange(C,k,D)}let me=C!==-1?C:u,fe=k!==-1?k:w,Me=D??P;z(me),q(fe),X.current.prev=[me,fe,Me]}if(document.addEventListener("selectionchange",f,{capture:!0}),f(),document.activeElement===a&&ae(!0),!document.getElementById("input-otp-style")){let u=document.createElement("style");if(u.id="input-otp-style",document.head.appendChild(u),u.sheet){let w="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";J(u.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),J(u.sheet,`[data-input-otp]:autofill { ${w} }`),J(u.sheet,`[data-input-otp]:-webkit-autofill { ${w} }`),J(u.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),J(u.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let x=()=>{o&&o.style.setProperty("--root-height",`${a.clientHeight}px`)};x();let E=new ResizeObserver(x);return E.observe(a),()=>{document.removeEventListener("selectionchange",f,{capture:!0}),E.disconnect()}},[]);let[ie,se]=e.useState(!1),[U,ae]=e.useState(!1),[M,z]=e.useState(null),[F,q]=e.useState(null);e.useEffect(()=>{Ue(()=>{var a,o,f,x;(a=d.current)==null||a.dispatchEvent(new Event("input"));let E=(o=d.current)==null?void 0:o.selectionStart,u=(f=d.current)==null?void 0:f.selectionEnd,w=(x=d.current)==null?void 0:x.selectionDirection;E!==null&&u!==null&&(z(E),q(u),X.current.prev=[E,u,w])})},[p,U]),e.useEffect(()=>{O!==void 0&&p!==O&&O.length<i&&p.length===i&&(j==null||j(p))},[i,j,O,p]);let L=Qe({containerRef:ne,inputRef:d,pushPasswordManagerStrategy:W,isFocused:U}),ce=e.useCallback(a=>{let o=a.currentTarget.value.slice(0,i);if(o.length>0&&y&&!y.test(o)){a.preventDefault();return}typeof O=="string"&&o.length<O.length&&document.dispatchEvent(new Event("selectionchange")),V(o)},[i,V,O,y]),ue=e.useCallback(()=>{var a;if(d.current){let o=Math.min(d.current.value.length,i-1),f=d.current.value.length;(a=d.current)==null||a.setSelectionRange(o,f),z(o),q(f)}ae(!0)},[i]),de=e.useCallback(a=>{var o,f;let x=d.current;if(!re.current.isIOS||!a.clipboardData||!x)return;let E=a.clipboardData.getData("text/plain");a.preventDefault();let u=(o=d.current)==null?void 0:o.selectionStart,w=(f=d.current)==null?void 0:f.selectionEnd,P=(u!==w?p.slice(0,u)+E+p.slice(w):p.slice(0,u)+E+p.slice(u)).slice(0,i);if(P.length>0&&y&&!y.test(P))return;x.value=P,V(P);let R=Math.min(P.length,i-1),T=P.length;x.setSelectionRange(R,T),z(R),q(T)},[i,V,y,p]),ke=e.useMemo(()=>({position:"relative",cursor:s.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[s.disabled]),pe=e.useMemo(()=>({position:"absolute",inset:0,width:L.willPushPWMBadge?`calc(100% + ${L.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:L.willPushPWMBadge?`inset(0 ${L.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:b,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[L.PWM_BADGE_SPACE_WIDTH,L.willPushPWMBadge,b]),Ne=e.useMemo(()=>e.createElement("input",He($e({autoComplete:s.autoComplete||"one-time-code"},s),{"data-input-otp":!0,"data-input-otp-mss":M,"data-input-otp-mse":F,inputMode:B,pattern:y==null?void 0:y.source,style:pe,maxLength:i,value:p,ref:d,onPaste:a=>{var o;de(a),(o=s.onPaste)==null||o.call(s,a)},onChange:ce,onMouseOver:a=>{var o;se(!0),(o=s.onMouseOver)==null||o.call(s,a)},onMouseLeave:a=>{var o;se(!1),(o=s.onMouseLeave)==null||o.call(s,a)},onFocus:a=>{var o;ue(),(o=s.onFocus)==null||o.call(s,a)},onBlur:a=>{var o;ae(!1),(o=s.onBlur)==null||o.call(s,a)}})),[ce,ue,de,B,pe,i,F,M,s,y==null?void 0:y.source,p]),oe=e.useMemo(()=>({slots:Array.from({length:i}).map((a,o)=>{let f=U&&M!==null&&F!==null&&(M===F&&o===M||o>=M&&o<F),x=p[o]!==void 0?p[o]:null;return{char:x,isActive:f,hasFakeCaret:f&&x===null}}),isFocused:U,isHovering:!s.disabled&&ie}),[U,ie,i,F,M,s.disabled,p]),Oe=e.useMemo(()=>h?h(oe):e.createElement(we.Provider,{value:oe},m),[m,oe,h]);return e.createElement(e.Fragment,null,N!==null&&e.createElement("noscript",null,e.createElement("style",null,N)),e.createElement("div",{ref:ne,"data-input-otp-container":!0,style:ke,className:te},Oe,e.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Ne)))});ye.displayName="Input";function J(t,n){try{t.insertRule(n)}catch{console.error("input-otp could not insert CSS rule:",n)}}var Xe=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Se=(...t)=>t.filter((n,r,l)=>!!n&&l.indexOf(n)===r).join(" ");/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ze={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=e.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:g="",children:i,iconNode:b,...v},B)=>e.createElement("svg",{ref:B,...Ze,width:n,height:n,stroke:t,strokeWidth:l?Number(r)*24/Number(n):r,className:Se("lucide",g),...v},[...b.map(([j,W])=>e.createElement(j,W)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(t,n)=>{const r=e.forwardRef(({className:l,...g},i)=>e.createElement(et,{ref:i,iconNode:n,className:Se(`lucide-${Ye(t)}`,l),...g}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=tt("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]),Ee=e.forwardRef(({className:t,containerClassName:n,...r},l)=>c.jsx(ye,{ref:l,containerClassName:Z("flex items-center gap-2 has-[:disabled]:opacity-50",n),className:Z("disabled:cursor-not-allowed",t),...r}));Ee.displayName="InputOTP";const je=e.forwardRef(({className:t,...n},r)=>c.jsx("div",{ref:r,className:Z("flex items-center",t),...n}));je.displayName="InputOTPGroup";const A=e.forwardRef(({index:t,className:n,...r},l)=>{const g=e.useContext(we),{char:i,hasFakeCaret:b,isActive:v}=g.slots[t];return c.jsxs("div",{ref:l,className:Z("relative flex h-[50px] w-[50px] items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",v&&"z-10 ring-2 ring-yellow-400 ring-offset-background",n),...r,children:[i,b&&c.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:c.jsx("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})});A.displayName="InputOTPSlot";const rt=e.forwardRef(({...t},n)=>c.jsx("div",{ref:n,role:"separator",...t,children:c.jsx(nt,{})}));rt.displayName="InputOTPSeparator";const H="rounded-md border-[1px]",Y=localStorage.getItem("newUser");function st(){const t=Ie(),n=l=>{if(!Y)return ge.error("Please sign up");const g=JSON.parse(Y);l.preventDefault();const i=l.target,b=new FormData(i);b.append("user_id",g.user_id);const v=Object.fromEntries(b);Ae(v,t)},r=()=>{if(!Y)return ge.error("Please sign up");const l=JSON.parse(Y);Be(l.email)};return c.jsx("div",{className:"verify-otp",children:c.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-70",children:c.jsxs("div",{className:"bg-white p-4 rounded-2xl flex flex-col items-center justify-center text-center max-w-sm",children:[c.jsx("h1",{className:"text-header font-semibold text-xl",children:"Verification OTP sent"}),c.jsx("p",{className:"mt-2 mb-6",children:"A one-time verification code, has been sent to your Email to confirm its really you."}),c.jsxs("form",{onSubmit:n,children:[c.jsx(Ee,{maxLength:6,name:"otp",children:c.jsxs(je,{className:"gap-2",children:[c.jsx(A,{className:H,index:0}),c.jsx(A,{className:H,index:1}),c.jsx(A,{className:H,index:2}),c.jsx(A,{className:H,index:3}),c.jsx(A,{className:H,index:4}),c.jsx(A,{className:H,index:5})]})}),c.jsx(We,{type:"submit",className:"pry-btn w-full mt-6",children:"Confirm"}),c.jsxs("div",{className:"flex items-center justify-end gap-2 mt-6",children:[c.jsx("p",{className:"text-xs",children:"Didn't get OTP?"}),c.jsx("p",{className:"font-semibold text-xs text-pry-clr cursor-pointer hover:underline",onClick:r,children:"Resend it"})]})]})]})})})}export{st as default};
