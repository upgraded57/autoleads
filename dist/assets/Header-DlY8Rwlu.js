import{u as x,r as m,j as e,b as i}from"./index-DdhJ41Kh.js";import{l as p}from"./logo-alt-DamHNGlx.js";import{G as h}from"./iconBase-DVQD-ZR5.js";import{B as a}from"./button-CECRcXg6.js";import{b as u}from"./index-BtmiVetC.js";function f(t){return h({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(t)}function b(){const t=x(),n=[{path:"#",title:"Resources"},{path:"/features",title:"Features"},{path:"/pricing",title:"Pricing"},{path:"/about",title:"About Us"}],[r,c]=m.useState(!1),o=()=>c(!r),d=()=>{const s=localStorage.getItem("user");t(s?"/app/dashboard":"/auth?type=login")};return m.useEffect(()=>{const s=()=>{window.innerWidth>=768&&c(!1)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]),e.jsxs("header",{className:"flex items-center justify-between md:justify-center py-4 h-[100px]",children:[e.jsx("div",{className:"md:basis-1/4",children:e.jsx(i,{to:"/",children:e.jsx("img",{src:p,alt:"Primeclick logo",className:"w-[150px]"})})}),e.jsx("ul",{className:"hidden md:flex items-center justify-between basis-2/4 w-full",children:n.map((s,l)=>e.jsx("li",{children:e.jsx(i,{to:s.path,className:"text-sm",children:s.title})},l))}),e.jsxs("div",{className:"hidden md:flex ml-auto items-center justify-end gap-4 basis-1/4",children:[e.jsx(a,{variant:"ghost",onClick:d,className:"px-6",children:"Log in"}),e.jsx(a,{className:"pry-btn px-6",onClick:()=>t("/auth?type=signup"),children:"Sign up"})]}),e.jsx("div",{className:"text-2xl cursor-pointer md:hidden",onClick:o,children:e.jsx(f,{})}),r&&e.jsxs("div",{className:"w-screen h-screen fixed inset-0 bg-white px-3",children:[e.jsxs("div",{className:"flex items-center justify-between h-[100px]",children:[e.jsx(i,{to:"/",children:e.jsx("img",{src:p,alt:"Primeclick logo",className:"w-[150px]"})}),e.jsx(u,{className:"text-2xl cursor-pointer",onClick:o})]}),e.jsx("ul",{className:"",children:n.map((s,l)=>e.jsx("li",{className:"py-5 pl-4",children:e.jsx(i,{to:s.path,className:"text-lg",children:s.title})},l))}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{variant:"outline",onClick:d,className:"w-full py-6",children:"Log in"}),e.jsx(a,{className:"pry-btn w-full py-6",onClick:()=>t("/auth?type=signup"),children:"Sign up"})]})]})]})}export{b as H};