import{b as p,d as g,j as t,c as x}from"./index-BHPEYUkL.js";import{L as j}from"./LayoutTop-Bw7sUrPA.js";import{B as d}from"./button-U2B68_In.js";import{C as s,a as u}from"./CampaignTable-jQsID6_3.js";import{a as h}from"./campaign-BUeP8qHy.js";import{c as f}from"./index-C-lXkY70.js";import{E as C}from"./EmptyState-p71QG1vM.js";import"./table-DKrw_Qba.js";import"./input-BHvBBxJ9.js";import"./alert-dialog-CDgCoE-l.js";import"./index-CART2k_e.js";import"./Combination-DfSZ7FCn.js";import"./index-C03YW4IF.js";import"./iconBase-Dv-CgA8s.js";import"./axiosInstance-D6jcOrH_.js";import"./baseUrl-HwsEoYQ5.js";import"./useQuery-BxJrOT0q.js";import"./index-D9SJB1D9.js";function A(){var n;const m=p(),{campaign_id:a}=g(),{isLoading:c,data:e}=h(a),r=(e==null?void 0:e.leads)&&(e==null?void 0:e.leads.filter(i=>i.status.toLowerCase()==="contacted")),o=(e==null?void 0:e.leads)&&(e==null?void 0:e.leads.filter(i=>i.contacted_status.toLowerCase()==="converted")),l=(e==null?void 0:e.leads)&&(e==null?void 0:e.leads.filter(i=>i.contacted_status.toLowerCase()==="rejected"));return t.jsxs(t.Fragment,{children:[t.jsx(j,{title:(e==null?void 0:e.campaign_name)||"Campaign Name",button:t.jsxs(d,{variant:"ghost",size:"sm",className:"border-grey-clr gap-1",onClick:()=>m(-1),children:[t.jsx("span",{className:"p-1 rounded-full bg-white",children:t.jsx(f,{})}),"Back"]})}),c?t.jsx("div",{className:"w-full h-[300px] flex items-center justify-center",children:t.jsx(x,{})}):((n=e==null?void 0:e.leads)==null?void 0:n.length)>0?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-6",children:[t.jsx(s,{title:"Total Leads",qty:(e==null?void 0:e.leads.length)||0}),t.jsx(s,{title:"Total Called",qty:(r==null?void 0:r.length)||0}),t.jsx(s,{title:"Total Qualified",qty:(o==null?void 0:o.length)||0}),t.jsx(s,{title:"Total Rejected",qty:(l==null?void 0:l.length)||0})]}),t.jsx("div",{className:"p-4 rounded-2xl bg-white",children:t.jsx(u,{campaign_id:a??"",data:e==null?void 0:e.leads,campaign_name:e==null?void 0:e.campaign_name})})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-6",children:[t.jsx(s,{title:"Total Leads",qty:0}),t.jsx(s,{title:"Total Called",qty:0}),t.jsx(s,{title:"Total Qualified",qty:0}),t.jsx(s,{title:"Total Rejected",qty:0})]}),t.jsx(C,{})]})]})}export{A as default};
