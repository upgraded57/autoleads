import{r as u,j as e,i as n,L as c}from"./index-DdhJ41Kh.js";import{u as i}from"./useQuery-C9FSdUiF.js";import{a as x}from"./axiosInstance-D6jcOrH_.js";const m=s=>i({queryKey:["Fetch User",s],queryFn:async()=>(await x.get(`auth/users/${s}`)).data,staleTime:5*60*1e3}),f=u.createContext(void 0),p=({children:s})=>{const t=localStorage.getItem("user"),r=localStorage.getItem("business_id");if(!t||!r)return e.jsx(n,{to:"/auth"});const{isLoading:a,data:o}=m(JSON.parse(t));return a?e.jsx("div",{className:"w-full h-screen flex items-center justify-center",children:e.jsx(c,{})}):!a&&!o?e.jsx(n,{to:"/auth"}):e.jsx(f.Provider,{value:{user:o},children:s})};export{p as U,f as a};
