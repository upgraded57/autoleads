import{u as p,e as g,j as t,L as x}from"./index-DdhJ41Kh.js";import{L as j}from"./LayoutTop-JTYiaKbl.js";import{B as d}from"./button-CECRcXg6.js";import{C as s}from"./Card-C4On0QzP.js";import{C as u}from"./CampaignTable-BhjU0Wtn.js";import{b as h}from"./campaign-B2dhutmA.js";import{a as f}from"./index-Dzgk0E-5.js";import{E as C}from"./EmptyState-Cv8RhFkb.js";import"./table-DoRuid5K.js";import"./input-7oIjz_UN.js";import"./alert-dialog-CMEglhkp.js";import"./index-CnzR3zp9.js";import"./Combination-I0-RzAZq.js";import"./index-BtmiVetC.js";import"./iconBase-DVQD-ZR5.js";import"./axiosInstance-D6jcOrH_.js";import"./baseUrl-HwsEoYQ5.js";import"./useQuery-C9FSdUiF.js";import"./index-d6zG5U_6.js";function D(){var n;const m=p(),{campaign_id:a}=g(),{isLoading:c,data:e}=h(a),r=(e==null?void 0:e.leads)&&(e==null?void 0:e.leads.filter(i=>i.status.toLowerCase()==="contacted")),o=(e==null?void 0:e.leads)&&(e==null?void 0:e.leads.filter(i=>i.contacted_status.toLowerCase()==="converted")),l=(e==null?void 0:e.leads)&&(e==null?void 0:e.leads.filter(i=>i.contacted_status.toLowerCase()==="rejected"));return t.jsxs(t.Fragment,{children:[t.jsx(j,{title:(e==null?void 0:e.campaign_name)||"Campaign Name",button:t.jsxs(d,{variant:"ghost",size:"sm",className:"border-grey-clr gap-1",onClick:()=>m(-1),children:[t.jsx("span",{className:"p-1 rounded-full bg-white",children:t.jsx(f,{})}),"Back"]})}),c?t.jsx("div",{className:"w-full h-[300px] flex items-center justify-center",children:t.jsx(x,{})}):((n=e==null?void 0:e.leads)==null?void 0:n.length)>0?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-6",children:[t.jsx(s,{title:"Total Leads",qty:(e==null?void 0:e.leads.length)||0}),t.jsx(s,{title:"Total Called",qty:(r==null?void 0:r.length)||0}),t.jsx(s,{title:"Total Qualified",qty:(o==null?void 0:o.length)||0}),t.jsx(s,{title:"Total Rejected",qty:(l==null?void 0:l.length)||0})]}),t.jsx("div",{className:"p-4 rounded-2xl bg-white",children:t.jsx(u,{campaign_id:a??"",data:e==null?void 0:e.leads,campaign_name:e==null?void 0:e.campaign_name})})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-6",children:[t.jsx(s,{title:"Total Leads",qty:0}),t.jsx(s,{title:"Total Called",qty:0}),t.jsx(s,{title:"Total Qualified",qty:0}),t.jsx(s,{title:"Total Rejected",qty:0})]}),t.jsx(C,{})]})]})}export{D as default};