import{j as e,b as C,e as w,r as d,_ as g}from"./index-BTCpIiPF.js";import{L as F}from"./Logo-BQp2vZ12.js";import{I as n}from"./input-CJ-424JH.js";import{B as m}from"./button-CJVJc3-c.js";import{c as v}from"./index-DtqcRb2E.js";import{a as B}from"./axiosInstance-D6jcOrH_.js";import{A as T,a as k,b as A,c as S,e as I}from"./alert-dialog-gQRSNSLl.js";import{c as z,a as D,m as E}from"./Codes-DfKTs67F.js";import{b as u,c as L}from"./index-CZTfoIKN.js";import"./logo-alt-DamHNGlx.js";import"./iconBase-YLiFKhbO.js";import"./baseUrl-HwsEoYQ5.js";import"./index-CJdAoNCs.js";import"./Combination-CQp_1Ujl.js";function P({inviteModalOpen:c,campaign_id:s}){const x=E(s);return e.jsx(T,{open:c,children:e.jsxs(k,{children:[e.jsxs(A,{children:[e.jsx(S,{className:"text-pry-clr text-xl font-semibold",children:"View Code"}),e.jsx(I,{children:"Copy the code below and paste into your website to display the contact form as a popup. Website reload may be required"})]}),e.jsx("div",{className:"w-full rounded-md border-2 border-gray-200 p-2 h-[100px] overflow-y-scroll text-xs bg-gray-100",children:x}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(m,{size:"sm",variant:"outline",className:"hover:bg-[#d8e0fb] font-normal gap-2",onClick:()=>z(s),children:[e.jsx(u,{className:"text-md"}),"Copy popup code"]}),e.jsxs(m,{size:"sm",variant:"outline",className:"hover:bg-[#d8e0fb] font-normal gap-2",onClick:()=>D(s),children:[e.jsx(u,{className:"text-md"}),"Copy inline- code"]}),e.jsx(C,{to:"/app/campaigns",className:"w-full",children:e.jsxs(m,{size:"sm",className:"w-full pry-btn gap-2",children:[e.jsx(L,{className:"text-lg"}),"Go to Campaigns"]})})]})]})})}function X(){const{campaign_id:c}=w(),[s,x]=d.useState({title:"",subtitle:"",btnText:"",redirectUrl:""}),[a,h]=d.useState({fullName:!0,email:!0,phone:!0,location:!1}),[o,f]=d.useState({bgColor:"",inputBg:"",textClr:"",btnText:"",btnBg:""}),[b,j]=d.useState(!1),p={texts:[{name:"title",id:"formTitle",tag:"Form Title"},{name:"subtitle",id:"formSubitle",tag:"Form Subtitle"},{name:"btnText",id:"formBtnText",tag:"Button Text"},{name:"redirectUrl",id:"formRedirectUrl",tag:"Redirect Url"}],checks:[{name:"fullName",id:"formFullname",tag:"Full Name"},{name:"email",id:"formEmail",tag:"Email Address"},{name:"phone",id:"formPhone",tag:"Phone Number"},{name:"location",id:"formLocation",tag:"Location"}],colors:[{name:"bgColor",id:"formBgColor",tag:"Background Color"},{name:"inputBg",id:"formInputBg",tag:"Input Field Background"},{name:"textClr",id:"formTextClr",tag:"Text Color"},{name:"btnText",id:"formBtnText",tag:"Button Text Color"},{name:"btnBg",id:"formBtnBg",tag:"Button Color"}]},N={styles:{textClr:o.textClr,bodyClr:o.bgColor,btnBG:o.btnBg,btnTextClr:o.btnText,bgClr:o.bgColor,inputBG:o.inputBg},texts:{title:s.title,subtitle:s.subtitle,btnText:s.btnText},fields:[a.email?"email":"",a.fullName?"fullName":"",a.phone?"phone":"",a.location?"location":""],redirect:{url:s.redirectUrl||""}},y=async()=>{const t=g.loading("Creating form");await B.post(`/campaign/${c}/form-design/`,{design:JSON.stringify(N)}).then(()=>{g.success("Form created successully",{id:t}),j(!0)}).catch(l=>{console.log(l),g.error(l.response.data[0]||"Something went wrong. Please retry",{id:t})})};return e.jsxs(e.Fragment,{children:[e.jsx(F,{}),b&&e.jsx(P,{inviteModalOpen:b,campaign_id:c}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h1",{className:"text-header text-2xl font-semibold",children:"Customize your form"}),e.jsxs(m,{className:"pry-btn gap-2",onClick:y,children:[e.jsx(v,{className:"text-lg"})," Create Form"]})]}),e.jsxs("div",{className:"wizard-box w-full flex rounded-2xl border-[1px] border-gray-300 mt-6 overflow-hidden",children:[e.jsx("div",{className:"basis-2/3 p-4 overflow-y-scroll flex items-center justify-center min-h-full",children:e.jsxs("div",{className:"w-full max-w-[600px] mx-auto bg-body-clr bg-gray-50 px-4 py-8 rounded-lg",children:[e.jsx("h1",{className:"text-header text-xl font-semibold uppercase text-center",children:s.title||"form title"}),e.jsx("p",{className:"text-center my-4",children:s.subtitle||"Form Subtitle"}),a.fullName&&e.jsxs("label",{className:"block mb-2",children:[e.jsx("p",{children:"Full Name"}),e.jsx(n,{type:"text",disabled:!0,placeholder:"e.g John Doe",className:"bg-transparent border-gray-300"})]}),a.email&&e.jsxs("label",{className:"block mb-2",children:[e.jsx("p",{children:"Email Address"}),e.jsx(n,{type:"text",disabled:!0,placeholder:"e.g johndoe@email.com",className:"bg-transparent border-gray-300"})]}),a.phone&&e.jsxs("label",{className:"block mb-2",children:[e.jsx("p",{children:"Phone Number"}),e.jsx(n,{type:"text",disabled:!0,placeholder:"09011223344",className:"bg-transparent border-gray-300"})]}),a.location&&e.jsxs("label",{className:"block mb-2",children:[e.jsx("p",{children:"Location"}),e.jsx(n,{type:"text",disabled:!0,placeholder:"e.g Lagos, Nigeria",className:"bg-transparent border-gray-300"})]}),e.jsx(m,{disabled:!0,className:"w-full uppercase bg-accent-clr",children:s.btnText||"call me now"})]})}),e.jsxs("div",{className:"basis-1/3 bg-white p-4 overflow-y-scroll",children:[e.jsx("h1",{className:"text-header text-xl mb-6 font-semibold",children:"Form Settings"}),e.jsx("div",{className:"px-3",children:p.texts.map((t,l)=>e.jsxs("label",{htmlFor:t.id,className:"block my-4",children:[e.jsx("p",{className:"text-sm",children:t.tag}),e.jsx(n,{type:"text",className:"h-8",id:t.id,name:t.name,onChange:r=>x(i=>({...i,[r.target.name]:r.target.value}))})]},l))}),e.jsx("hr",{className:"my-6"}),e.jsx("p",{children:"Check the options below for fields to display"}),e.jsx("div",{className:"px-3",children:p.checks.map((t,l)=>e.jsxs("label",{htmlFor:t.id,className:"flex gap-2 items-center my-2",children:[e.jsx("input",{type:"checkbox",name:t.name,id:t.id,defaultChecked:a[t.name],onChange:r=>h(i=>({...i,[r.target.name]:r.target.checked}))}),e.jsx("p",{className:"text-sm",children:t.tag})]},l))}),e.jsx("hr",{className:"my-6"}),e.jsx("p",{children:"Edit and customize form aesthetics with the options below"}),e.jsx("div",{className:"px-3",children:p.colors.map((t,l)=>e.jsxs("label",{htmlFor:t.id,className:"flex gap-2 items-center my-2",children:[e.jsx("input",{type:"color",name:t.name,id:t.id,defaultValue:o[t.name],onChange:r=>f(i=>({...i,[r.target.name]:r.target.value}))}),e.jsx("p",{className:"text-sm",children:t.tag})]},l))})]})]})]})}export{X as default};