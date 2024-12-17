import{r as n,j as e,b as x,U as R,l as _,B as P}from"./index-By6uAPBI.js";import{c as E,P as p,u as k,a as f}from"./index-CbbDvytT.js";import{I as m}from"./input-D8bmPQbO.js";var u="Avatar",[F,q]=E(u),[M,g]=F(u),j=n.forwardRef((a,s)=>{const{__scopeAvatar:t,...r}=a,[l,i]=n.useState("idle");return e.jsx(M,{scope:t,imageLoadingStatus:l,onImageLoadingStatusChange:i,children:e.jsx(p.span,{...r,ref:s})})});j.displayName=u;var v="AvatarImage",N=n.forwardRef((a,s)=>{const{__scopeAvatar:t,src:r,onLoadingStatusChange:l=()=>{},...i}=a,d=g(v,t),o=T(r),c=k(h=>{l(h),d.onImageLoadingStatusChange(h)});return f(()=>{o!=="idle"&&c(o)},[o,c]),o==="loaded"?e.jsx(p.img,{...i,ref:s,src:r}):null});N.displayName=v;var y="AvatarFallback",A=n.forwardRef((a,s)=>{const{__scopeAvatar:t,delayMs:r,...l}=a,i=g(y,t),[d,o]=n.useState(r===void 0);return n.useEffect(()=>{if(r!==void 0){const c=window.setTimeout(()=>o(!0),r);return()=>window.clearTimeout(c)}},[r]),d&&i.imageLoadingStatus!=="loaded"?e.jsx(p.span,{...l,ref:s}):null});A.displayName=y;function T(a){const[s,t]=n.useState("idle");return f(()=>{if(!a){t("error");return}let r=!0;const l=new window.Image,i=d=>()=>{r&&t(d)};return t("loading"),l.onload=i("loaded"),l.onerror=i("error"),l.src=a,()=>{r=!1}},[a]),s}var w=j,S=N,b=A;const L=n.forwardRef(({className:a,...s},t)=>e.jsx(w,{ref:t,className:x("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...s}));L.displayName=w.displayName;const C=n.forwardRef(({className:a,...s},t)=>e.jsx(S,{ref:t,className:x("aspect-square h-full w-full",a),...s}));C.displayName=S.displayName;const I=n.forwardRef(({className:a,...s},t)=>e.jsx(b,{ref:t,className:x("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...s}));I.displayName=b.displayName;function G(){var s;const a=(s=n.useContext(R))==null?void 0:s.user;return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Business Account",subtitle:"Update you company info and details here"}),e.jsxs("div",{className:"bg-white rounded-2xl",children:[e.jsxs("div",{className:"p-10 flex items-center gap-4",children:[e.jsxs(L,{className:"w-[100px] h-[100px]",children:[e.jsx(C,{src:"https://github.com/shadcn.png"}),e.jsx(I,{className:"text-xl",children:a.first_name[0]+(a==null?void 0:a.last_name[0])})]}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-2xl font-[500]",children:`${a.first_name} ${a==null?void 0:a.last_name}`}),e.jsx("p",{children:a==null?void 0:a.email})]})]}),e.jsx("hr",{}),e.jsx("div",{className:"p-10",children:e.jsxs("div",{className:"grid grid-cols-2 gap-10 items-center",children:[e.jsxs("span",{children:[e.jsx("h3",{className:"text-xl font-[500]",children:"Public Profile"}),e.jsx("p",{children:"This will be displayed on your Profile"})]}),e.jsx("span",{children:e.jsx(m,{type:"text",placeholder:"company name"})})]})}),e.jsx("hr",{}),e.jsx("div",{className:"p-10",children:e.jsxs("div",{className:"grid grid-cols-2 gap-10 items-center",children:[e.jsxs("span",{children:[e.jsx("h3",{className:"text-xl font-[500]",children:"Company Logo"}),e.jsx("p",{children:"Update your company logo and choose where you want it to be displayed"})]}),e.jsx("span",{children:e.jsx(m,{type:"file"})})]})}),e.jsx("hr",{}),e.jsx("div",{className:"p-10",children:e.jsxs("div",{className:"grid grid-cols-2 gap-10 items-center",children:[e.jsxs("span",{children:[e.jsx("h3",{className:"text-xl font-[500]",children:"Registered Email"}),e.jsx("p",{children:"This will be displayed on your Profile"})]}),e.jsx("span",{children:e.jsx(m,{type:"email",placeholder:"email address"})})]})}),e.jsx("div",{className:"px-10 pb-6 flex justify-end",children:e.jsx(P,{className:"pry-btn",children:"Save Changes"})})]})]})}export{G as default};