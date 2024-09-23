import{b as f,r as t,j as e,_ as n}from"./index-BamLPRPK.js";import{L as u}from"./Logo-DiR7EHDd.js";import{I as o}from"./input-uqjX1zVl.js";import{B as j}from"./button-9-gbE7ke.js";import{c as N,d as C,e as y}from"./campaign-zFr2rtmX.js";import"./logo-alt-DamHNGlx.js";import"./axiosInstance-D6jcOrH_.js";import"./baseUrl-HwsEoYQ5.js";import"./useQuery-CMmpEYOC.js";function B(){const m=f(),[a,i]=t.useState(""),[l,c]=t.useState(null),[r,d]=t.useState(""),[p,x]=t.useState(""),g=s=>{s.target.files&&c(s.target.files[0])},h=()=>{a==="upload"?l!=null&&l.name?N(l,m):n.error("Please upload a campaign file",{id:"newCampaignToast"}):a==="form"?r.length>0?C(r,m):n.error("Please enter a campaign name",{id:"newCampaignToast"}):a==="sheet"?p.length>0?y(p,m):n.error("Please enter a Google sheet name",{id:"newCampaignToast"}):n.error("Please select an option",{id:"newCampaignToast"})};return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-header text-2xl font-medium",children:"Choose your lead generation option"}),e.jsxs("div",{className:"rounded-2xl bg-white p-4 w-[450px] mt-5",children:[e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"upload",className:"flex items-center gap-4",children:[e.jsx("input",{type:"radio",name:"new",id:"upload",onChange:()=>i("upload")}),e.jsx("p",{className:"font-semibold px-4 py-2 rounded-md border-[1px] w-full",children:"Upload Form"})]}),a==="upload"&&e.jsxs("div",{className:"ml-8 mt-2",children:[e.jsx("small",{className:"text-xs",children:"Upload campaign file (csv, xls, etc)"}),e.jsx(o,{type:"file",accept:".xlsx, .xls, .csv",onChange:g,className:"cursor-pointer"})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"my-3",children:[e.jsxs("label",{htmlFor:"form",className:"flex items-center gap-4",children:[e.jsx("input",{type:"radio",name:"new",id:"form",onChange:()=>i("form")}),e.jsx("p",{className:"font-semibold px-4 py-2 rounded-md border-[1px] w-full",children:"Generate Form"})]}),a==="form"&&e.jsxs("div",{className:"ml-8 mt-2",children:[e.jsx("small",{className:"text-xs",children:"Campaign name"}),e.jsx(o,{type:"text",placeholder:"Campaign name",onChange:s=>d(s.target.value)})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"my-3",children:[e.jsxs("label",{htmlFor:"sheet",className:"flex items-center gap-4",children:[e.jsx("input",{type:"radio",name:"new",id:"sheet",onChange:()=>i("sheet")}),e.jsx("p",{className:"font-semibold px-4 py-2 rounded-md border-[1px] w-full",children:"Add Campaign From Google Sheet"})]}),a==="sheet"&&e.jsxs("div",{className:"ml-8 mt-2",children:[e.jsx("small",{className:"text-xs",children:"Google sheet campaign name"}),e.jsx(o,{type:"text",placeholder:"Google sheet campaign name",onChange:s=>x(s.target.value)})]})]}),e.jsx(j,{onClick:h,className:"pry-btn w-full",children:"Continue"})]})]})})]})}export{B as default};
