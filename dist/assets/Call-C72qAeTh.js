import{e as A,u as b,r as s,j as e,b as C}from"./index-DdhJ41Kh.js";import{L as q}from"./Logo-BumW5BPj.js";import{B as w}from"./button-CECRcXg6.js";import{I as n}from"./input-7oIjz_UN.js";import{a as r,b as c}from"./index-B4WLs9W7.js";import{i as S}from"./campaign-B2dhutmA.js";import"./logo-alt-DamHNGlx.js";import"./iconBase-DVQD-ZR5.js";import"./axiosInstance-D6jcOrH_.js";import"./baseUrl-HwsEoYQ5.js";import"./useQuery-C9FSdUiF.js";function z(){const{campaign_id:h,type:f}=A(),j=b(),[u,g]=s.useState(""),[m,y]=s.useState(""),[p,k]=s.useState(""),[N,v]=s.useState(""),L=a=>{a.preventDefault(),S([u,m,p,N],h,j,f)},[i,x]=s.useState({audio1:!1,audio2:!1,audio3:!1,audio4:!1}),t={},l=a=>{const o=a===1?u:a===2?m:p;if(o.length===0)return alert(`Audio ${a} URL empty or ${o||"URL"} is invalid`);t[a]||(t[a]=new Audio(o)),x(d=>({...d,[`audio${a}`]:!0})),t[a].oncanplaythrough=()=>{x(d=>({...d,[`audio${a}`]:!1})),t[a].play()}};return e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-header text-2xl font-medium",children:"Upload audios to link to your campaign"}),e.jsxs("form",{className:"rounded-2xl bg-white p-4 w-[450px] mt-5",onSubmit:L,children:[e.jsx("h1",{className:"text-2xl font-medium",children:"Add Audio Links"}),e.jsxs("p",{children:["To link an audio file to your campaign kindly click"," ",e.jsx(C,{to:"https://www.opendrive.com/login?ref=%2Ffiles&s=5862827e7d",className:"text-pry-clr font-semibold hover:underline",children:"here"}),", after uploading your file copy the audio link and paste in the tab below"]}),e.jsxs("div",{className:"my-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(n,{type:"url",placeholder:"Link to first audio",onChange:a=>g(a.target.value),required:!0}),e.jsx("div",{className:"h-full aspect-square cursor-pointer text-pry-clr",children:i.audio1?e.jsx(r,{className:"loading-icon"}):e.jsx(c,{className:"text-2xl",title:"Play Audio",onClick:()=>l(1)})})]}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(n,{type:"url",placeholder:"Link to second audio (if client responds positively)",onChange:a=>y(a.target.value),required:!0}),e.jsx("div",{className:"h-full aspect-square cursor-pointer text-pry-clr",children:i.audio2?e.jsx(r,{className:"loading-icon"}):e.jsx(c,{className:"text-2xl",title:"Play Audio",onClick:()=>l(2)})})]}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(n,{type:"url",placeholder:"Link to third audio (if client responds negatively)",onChange:a=>k(a.target.value),required:!0}),e.jsx("div",{className:"h-full aspect-square cursor-pointer text-pry-clr",children:i.audio3?e.jsx(r,{className:"loading-icon"}):e.jsx(c,{className:"text-2xl",title:"Play Audio",onClick:()=>l(3)})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{type:"url",placeholder:"Callback audio (if client calls back)",onChange:a=>v(a.target.value),required:!0}),e.jsx("div",{className:"h-full aspect-square cursor-pointer text-pry-clr",children:i.audio4?e.jsx(r,{className:"loading-icon"}):e.jsx(c,{className:"text-2xl",title:"Play Audio",onClick:()=>l(4)})})]})]}),e.jsx(w,{className:"pry-btn w-full",type:"submit",children:"Continue"})]})]})})]})}export{z as default};
