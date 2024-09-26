import{e as k,r as a,j as t,_ as l}from"./index-DdhJ41Kh.js";import{a as j,b as f}from"./baseUrl-HwsEoYQ5.js";import{d as S}from"./index-B4WLs9W7.js";import"./iconBase-DVQD-ZR5.js";function G(){var g;const{campaign_id:h}=k();a.useEffect(()=>{},[]);const[r,C]=a.useState(null),[N,m]=a.useState(!1);a.useEffect(()=>{(async()=>{await j.get(`${f}/campaign/form-design/${h}/`).then(s=>{m(!1),C(JSON.parse(s.data.design))}).catch(()=>{m(!0)})})()},[]);const i=r==null?void 0:r.texts,e=r==null?void 0:r.styles,n=r==null?void 0:r.fields,c=(g=r==null?void 0:r.redirect)==null?void 0:g.url,[u,w]=a.useState(""),[x,F]=a.useState(""),[p,v]=a.useState(""),E=async o=>{if(o.preventDefault(),u.length<1||x.length<1||p.length<1)return l.error("Please fill the required fields");const s={full_name:u,email:x,phone_number:p},b=l.loading("Collecting your contact data");await j({method:"post",url:`${f}/lead/create/${h}/`,data:s}).then(d=>{console.log(d.data),l.success("You will be contacted within five minutes",{id:b}),c&&c.length>0&&(window.location=c)}).catch(d=>{l.error("Something went wrong. Please retry",{id:b}),console.log(d)})};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"forms",style:{backgroundColor:(e==null?void 0:e.bgClr)||"inherit"},children:[t.jsx("div",{className:"form-close-msg",children:t.jsx("p",{children:"*Click outside to close form"})}),t.jsxs("form",{onSubmit:E,id:"form",children:[t.jsx("h2",{className:"h-100",style:{color:(e==null?void 0:e.textClr)||"inherit"},children:i==null?void 0:i.title}),t.jsx("p",{style:{color:(e==null?void 0:e.textClr)||"inherit"},children:i==null?void 0:i.subtitle}),t.jsxs("div",{className:"form__body",children:[(n==null?void 0:n.includes("fullName"))&&t.jsxs("label",{htmlFor:"fullName",children:[t.jsx("p",{style:{color:(e==null?void 0:e.textClr)||"inherit"},children:"Full Name"}),t.jsx("input",{style:{backgroundColor:(e==null?void 0:e.inputBG)||"inherit"},type:"text",name:"fullName",id:"fullName",placeholder:"e.g. John Doe",required:!0,onChange:o=>w(o.target.value)})]}),(n==null?void 0:n.includes("email"))&&t.jsxs("label",{htmlFor:"email",children:[t.jsx("p",{style:{color:(e==null?void 0:e.textClr)||"inherit"},children:"Email Address"}),t.jsx("input",{style:{backgroundColor:(e==null?void 0:e.inputBG)||"inherit"},type:"email",name:"email",id:"email",placeholder:"e.g. johndoe@mail.com",required:!0,onChange:o=>F(o.target.value)})]}),(n==null?void 0:n.includes("phone"))&&t.jsxs("label",{htmlFor:"phone",children:[t.jsx("p",{style:{color:(e==null?void 0:e.textClr)||"inherit"},children:"Phone Number"}),t.jsx("input",{style:{backgroundColor:(e==null?void 0:e.inputBG)||"inherit"},type:"text",name:"phone",id:"phone",placeholder:"e.g. 08111223344",required:!0,onChange:o=>v(o.target.value)})]}),(n==null?void 0:n.includes("location"))&&t.jsxs("label",{htmlFor:"location",children:[t.jsx("p",{style:{color:(e==null?void 0:e.textClr)||"inherit"},children:"Location"}),t.jsx("input",{style:{backgroundColor:(e==null?void 0:e.inputBG)||"inherit"},type:"text",name:"location",id:"location",placeholder:"e.g. Lagos, Nigeria",required:!0})]}),t.jsx("button",{id:"submitBtn",type:"submit",style:{backgroundColor:(e==null?void 0:e.btnBG)||"var(--pry-clr)",color:(e==null?void 0:e.btnTextClr)||"white"},children:(i==null?void 0:i.btnText)||"Contact Me"})]})]}),N&&t.jsx("div",{className:"w-screen h-screen fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center",children:t.jsxs("div",{className:"bg-white p-4 rounded-2xl",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(S,{className:"text-lg text-yellow-400"}),t.jsx("h1",{className:"text-lg font-semibold text-header",children:"Error"})]}),t.jsxs("p",{className:"text-sm",children:["Unable to fetch campaign form. Try reloading this page"," "]}),t.jsx("p",{className:"text-sm",children:"Contact this website's administrator if this issue persists"})]})})]})})}export{G as default};
