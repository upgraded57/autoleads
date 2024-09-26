import{_ as s}from"./index-BTCpIiPF.js";import{a as c}from"./axiosInstance-D6jcOrH_.js";import{u as d}from"./useQuery-DCJIIb-3.js";import{b as r,a as g}from"./baseUrl-HwsEoYQ5.js";const w=async(a,e)=>{const t=localStorage.getItem("business_id")||"",n=JSON.parse(t),o=s.loading("Creating campaign");await c({method:"post",url:`${r}/campaign/create/${n}/`,data:{name:a}}).then(i=>{s.success("Campaign name created",{id:o}),e(`/campaigns/new/${i.data.campaign_id}?type=form`)}).catch(()=>{s.error("Something went wrong. Please Retry",{id:o})})},y=async(a,e)=>{const t=s.loading("Uploading File..."),n=localStorage.getItem("business_id")||"",o=JSON.parse(n),i=new FormData;i.append("campaign",a),await c({method:"post",url:`${r}/campaign/upload/${o}/`,data:i}).then(p=>{s.success("File uploaded successfully",{id:t}),e(`/campaigns/new/${p.data.campaign_id}?type=upload`)}).catch(()=>{s.error("Please check the file and retry",{id:t})})},$=async(a,e)=>{const t=s.loading("Creating campaign"),n=localStorage.getItem("business_id")||"",o=JSON.parse(n);await c({method:"post",url:`${r}/campaign/create/${o}/`,data:{name:a}}).then(i=>{s.success("Campaign name created",{id:t}),e(`/campaigns/new/${i.data.campaign_id}?type=sheet`)}).catch(()=>{s.error("Something went wrong. Please Retry",{id:t})})},C=()=>{const a=localStorage.getItem("business_id")||"",e=JSON.parse(a);return d({queryKey:["Campaigns",e],queryFn:async()=>(await c({method:"get",url:`/campaigns/list/${e}/`})).data,staleTime:0})},b=a=>d({queryKey:["Campaign",a],queryFn:async()=>(await c({method:"get",url:`/leads/list/${a}`})).data,staleTime:5*60*1e3}),I=async(a,e,t,n)=>{const o=s.loading("Setting up follow up option");await c.put(`${r}/campaign/add/contact/${a}/`,{contact_option:e==="CALL"?e.toUpperCase():"Sms"}).then(()=>{s.success("Follow up method set",{id:o}),t(`/campaigns/new/${a}/content-type?type=${n}&option=${e}`)}).catch(()=>{s.error("Something went wrong. Please retry",{id:o})})},f=async(a,e,t,n,o)=>{const i=s.loading("Setting content type",{id:"a"});await c.put(`/campaign/content-option/${a}/`,{content_option:t}).then(()=>{s.success("Content type set",{id:i}),t.toLowerCase()==="audio"?o(`/campaigns/new/${a}/${e}/${n.toLowerCase()}`):o(`/campaigns/new/${a}/tts/${e}/${n.toLowerCase()}`)}).catch(()=>{s.error("Something went wrong",{id:i})})},S=async(a,e,t,n)=>{const o=s.loading("Assigning audios to call");await c.put(`campaign/call/create/${e}/`,{audio_link_1:a[0],audio_link_2:a[1],audio_link_3:a[2],audio_link_4:a[3]}).then(()=>{s.success("Audios assigned to calls",{id:o}),t(n==="upload"||n==="sheet"?"/app/campaigns":`/campaigns/new/form/${e}/wizard`)}).catch(()=>{s.error("Something went wrong. Please retry",{id:o})})},_=async(a,e,t,n)=>{const o=s.loading("Assigning audios to call");await c.put(`campaign/call/create/${e}/`,{text_1:a[0],text_2:a[1],text_3:a[2],text_4:a[3]}).then(()=>{s.success("Audios assigned to calls",{id:o}),t(n==="upload"||n==="sheet"?"/app/campaigns":`/campaigns/new/form/${e}/wizard`)}).catch(()=>{s.error("Something went wrong. Please retry",{id:o})})},L=async a=>{const e=s.loading("Launching Campaigns");await c.post(`/campaign/call/launch/${a}/`).then(()=>{s.success("Campaign Started",{id:e})}).catch(()=>{s.error("Something went wrong. Please retry",{id:e})})},F=a=>d({queryKey:["leadInfo",a],queryFn:()=>g({url:`${r}/leads/detail/${a}/`}),select:t=>t.data}),q=()=>{const a=localStorage.getItem("business_id")||"",e=JSON.parse(a);return d({queryKey:["Dashboard Leads",e],queryFn:()=>c.get(`/business/leads/${e}`),select:n=>n.data})};export{C as a,b,F as c,y as d,w as e,$ as f,I as g,_ as h,S as i,f as j,L as l,q as u};