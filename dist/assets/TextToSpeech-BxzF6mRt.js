import{u as x,e as d,a as c,j as e}from"./index-DdhJ41Kh.js";import{h as u}from"./campaign-B2dhutmA.js";import{L as p}from"./Logo-BumW5BPj.js";import{B as f}from"./button-CECRcXg6.js";import"./axiosInstance-D6jcOrH_.js";import"./baseUrl-HwsEoYQ5.js";import"./useQuery-C9FSdUiF.js";import"./logo-alt-DamHNGlx.js";function T(){const r=x(),{campaign_id:o}=d(),[a]=c(),n=a.get("type"),l=s=>{s.preventDefault();const i=s.target,t=Object.fromEntries(new FormData(i)),m=[t.text1,t.text2,t.text3,t.text4];u(m,o,r,n)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-header text-2xl font-medium",children:"Text Input"}),e.jsxs("form",{className:"rounded-2xl bg-white p-4 w-[450px] mt-5",onSubmit:l,children:[e.jsx("p",{children:"Enter the texts to be converted to speech and played in-call to your users based on their response"}),e.jsxs("div",{className:"mt-6 mb-2",children:[e.jsx("textarea",{placeholder:"Intro text",className:"w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal",name:"text1",required:!0}),e.jsx("textarea",{placeholder:"Positive response text (when the user responds positively)",className:"w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal",name:"text2",required:!0}),e.jsx("textarea",{placeholder:"Negative response text (when the user responds negatively)",className:"w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal",name:"text3",required:!0}),e.jsx("textarea",{placeholder:"Callback text (if the user calls back)",className:"w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal",name:"text4",required:!0})]}),e.jsx(f,{className:"pry-btn w-full",type:"submit",children:"Continue"})]})]})})]})}export{T as default};
