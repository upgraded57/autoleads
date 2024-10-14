import{f,r as n,j as e,C as u,B as j,D as N,_ as t,H as C,I as y}from"./index-BYm0heM1.js";import{I as o}from"./input-BAm2WIgo.js";function b(){const i=f(),[a,m]=n.useState(""),[l,d]=n.useState(null),[r,p]=n.useState(""),[c,x]=n.useState(""),g=s=>{s.target.files&&d(s.target.files[0])},h=()=>{a==="upload"?l!=null&&l.name?N(l,i):t.error("Please upload a campaign file",{id:"newCampaignToast"}):a==="form"?r.length>0?C(r,i):t.error("Please enter a campaign name",{id:"newCampaignToast"}):a==="sheet"?c.length>0?y(c,i):t.error("Please enter a Google sheet name",{id:"newCampaignToast"}):t.error("Please select an option",{id:"newCampaignToast"})};return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-header text-2xl font-medium",children:"Choose your lead generation option"}),e.jsxs("div",{className:"rounded-2xl bg-white p-4 w-[450px] mt-5",children:[e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"upload",className:"flex items-center gap-4",children:[e.jsx("input",{type:"radio",name:"new",id:"upload",onChange:()=>m("upload")}),e.jsx("p",{className:"font-semibold px-4 py-2 rounded-md border-[1px] w-full",children:"Upload Form"})]}),a==="upload"&&e.jsxs("div",{className:"ml-8 mt-2",children:[e.jsx("small",{className:"text-xs",children:"Upload campaign file (csv, xls, etc)"}),e.jsx(o,{type:"file",accept:".xlsx, .xls, .csv",onChange:g,className:"cursor-pointer"})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"my-3",children:[e.jsxs("label",{htmlFor:"form",className:"flex items-center gap-4",children:[e.jsx("input",{type:"radio",name:"new",id:"form",onChange:()=>m("form")}),e.jsx("p",{className:"font-semibold px-4 py-2 rounded-md border-[1px] w-full",children:"Generate Form"})]}),a==="form"&&e.jsxs("div",{className:"ml-8 mt-2",children:[e.jsx("small",{className:"text-xs",children:"Campaign name"}),e.jsx(o,{type:"text",placeholder:"Campaign name",onChange:s=>p(s.target.value)})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"my-3",children:[e.jsxs("label",{htmlFor:"sheet",className:"flex items-center gap-4",children:[e.jsx("input",{type:"radio",name:"new",id:"sheet",onChange:()=>m("sheet")}),e.jsx("p",{className:"font-semibold px-4 py-2 rounded-md border-[1px] w-full",children:"Add Campaign From Google Sheet"})]}),a==="sheet"&&e.jsxs("div",{className:"ml-8 mt-2",children:[e.jsx("small",{className:"text-xs",children:"Google sheet campaign name"}),e.jsx(o,{type:"text",placeholder:"Google sheet campaign name",onChange:s=>x(s.target.value)})]})]}),e.jsx(j,{onClick:h,className:"pry-btn w-full",children:"Continue"})]})]})})]})}export{b as default};
