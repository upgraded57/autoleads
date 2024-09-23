import{r as n,j as a}from"./index-BHPEYUkL.js";import{L as R}from"./LayoutTop-Bw7sUrPA.js";import{c as _,P as p,a as P,u as h}from"./index-CART2k_e.js";import{c as x,B as E}from"./button-U2B68_In.js";import{a as k}from"./UserContext-D0eiQaAi.js";import{I as m}from"./input-BHvBBxJ9.js";import"./useQuery-BxJrOT0q.js";import"./axiosInstance-D6jcOrH_.js";import"./baseUrl-HwsEoYQ5.js";var u="Avatar",[F,H]=_(u),[M,g]=F(u),j=n.forwardRef((e,s)=>{const{__scopeAvatar:t,...r}=e,[l,i]=n.useState("idle");return a.jsx(M,{scope:t,imageLoadingStatus:l,onImageLoadingStatusChange:i,children:a.jsx(p.span,{...r,ref:s})})});j.displayName=u;var v="AvatarImage",N=n.forwardRef((e,s)=>{const{__scopeAvatar:t,src:r,onLoadingStatusChange:l=()=>{},...i}=e,d=g(v,t),o=T(r),c=P(f=>{l(f),d.onImageLoadingStatusChange(f)});return h(()=>{o!=="idle"&&c(o)},[o,c]),o==="loaded"?a.jsx(p.img,{...i,ref:s,src:r}):null});N.displayName=v;var y="AvatarFallback",A=n.forwardRef((e,s)=>{const{__scopeAvatar:t,delayMs:r,...l}=e,i=g(y,t),[d,o]=n.useState(r===void 0);return n.useEffect(()=>{if(r!==void 0){const c=window.setTimeout(()=>o(!0),r);return()=>window.clearTimeout(c)}},[r]),d&&i.imageLoadingStatus!=="loaded"?a.jsx(p.span,{...l,ref:s}):null});A.displayName=y;function T(e){const[s,t]=n.useState("idle");return h(()=>{if(!e){t("error");return}let r=!0;const l=new window.Image,i=d=>()=>{r&&t(d)};return t("loading"),l.onload=i("loaded"),l.onerror=i("error"),l.src=e,()=>{r=!1}},[e]),s}var w=j,S=N,b=A;const L=n.forwardRef(({className:e,...s},t)=>a.jsx(w,{ref:t,className:x("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...s}));L.displayName=w.displayName;const C=n.forwardRef(({className:e,...s},t)=>a.jsx(S,{ref:t,className:x("aspect-square h-full w-full",e),...s}));C.displayName=S.displayName;const I=n.forwardRef(({className:e,...s},t)=>a.jsx(b,{ref:t,className:x("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...s}));I.displayName=b.displayName;function J(){var s;const e=(s=n.useContext(k))==null?void 0:s.user;return a.jsxs(a.Fragment,{children:[a.jsx(R,{title:"Business Account",subtitle:"Update you company info and details here"}),a.jsxs("div",{className:"bg-white rounded-2xl",children:[a.jsxs("div",{className:"p-10 flex items-center gap-4",children:[a.jsxs(L,{className:"w-[100px] h-[100px]",children:[a.jsx(C,{src:"https://github.com/shadcn.png"}),a.jsx(I,{className:"text-xl",children:e.first_name[0]+(e==null?void 0:e.last_name[0])})]}),a.jsxs("span",{children:[a.jsx("h3",{className:"text-2xl font-[500]",children:`${e.first_name} ${e==null?void 0:e.last_name}`}),a.jsx("p",{children:e==null?void 0:e.email})]})]}),a.jsx("hr",{}),a.jsx("div",{className:"p-10",children:a.jsxs("div",{className:"grid grid-cols-2 gap-10 items-center",children:[a.jsxs("span",{children:[a.jsx("h3",{className:"text-xl font-[500]",children:"Public Profile"}),a.jsx("p",{children:"This will be displayed on your Profile"})]}),a.jsx("span",{children:a.jsx(m,{type:"text",placeholder:"company name"})})]})}),a.jsx("hr",{}),a.jsx("div",{className:"p-10",children:a.jsxs("div",{className:"grid grid-cols-2 gap-10 items-center",children:[a.jsxs("span",{children:[a.jsx("h3",{className:"text-xl font-[500]",children:"Company Logo"}),a.jsx("p",{children:"Update your company logo and choose where you want it to be displayed"})]}),a.jsx("span",{children:a.jsx(m,{type:"file"})})]})}),a.jsx("hr",{}),a.jsx("div",{className:"p-10",children:a.jsxs("div",{className:"grid grid-cols-2 gap-10 items-center",children:[a.jsxs("span",{children:[a.jsx("h3",{className:"text-xl font-[500]",children:"Registered Email"}),a.jsx("p",{children:"This will be displayed on your Profile"})]}),a.jsx("span",{children:a.jsx(m,{type:"email",placeholder:"mail email address"})})]})}),a.jsx("div",{className:"px-10 pb-6 flex justify-end",children:a.jsx(E,{className:"pry-btn",children:"Save Changes"})})]})]})}export{J as default};
