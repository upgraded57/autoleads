import{f as i,v as r,j as e,C as m,B as c,K as u}from"./index-BYm0heM1.js";function f(){const n=i(),{campaign_id:a}=r(),{type:o}=r(),l=s=>{s.preventDefault();const x=s.target,t=Object.fromEntries(new FormData(x)),d=[t.text1,t.text2,t.text3,t.text4];u(d,a,n,o)};return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-header text-2xl font-medium",children:"Text Input"}),e.jsxs("form",{className:"rounded-2xl bg-white p-4 w-[450px] mt-5",onSubmit:l,children:[e.jsx("p",{children:"Enter the texts to be converted to speech and played in-call to your users based on their response"}),e.jsxs("div",{className:"mt-6 mb-2",children:[e.jsx("textarea",{placeholder:"Intro text",className:"w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal",name:"text1",required:!0}),e.jsx("textarea",{placeholder:"Positive response text (when the user responds positively)",className:"w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal",name:"text2",required:!0}),e.jsx("textarea",{placeholder:"Negative response text (when the user responds negatively)",className:"w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal",name:"text3",required:!0}),e.jsx("textarea",{placeholder:"Callback text (if the user calls back)",className:"w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal",name:"text4",required:!0})]}),e.jsx(c,{className:"pry-btn w-full",type:"submit",children:"Continue"})]})]})})]})}export{f as default};
