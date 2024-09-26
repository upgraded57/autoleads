import{a as r,b as i}from"./baseUrl-HwsEoYQ5.js";import{_ as a}from"./index-DdhJ41Kh.js";const u=async(o,t,n)=>{const s=a.loading("Creating your account");t(!0),await r.post(`${i}/api/register/`,o).then(e=>{localStorage.getItem("newUser")&&localStorage.removeItem("newUser"),localStorage.setItem("newUser",JSON.stringify(e.data)),a.success("Account creation successful",{id:s}),n("/auth/verify-otp")}).catch(e=>{e.response.data.email?a.error(`Account creation failed. ${e.response.data.email[0]}`,{id:s}):e.response.data.phone_number?a.error(`Account creation failed. ${e.response.data.phone_number[0]}`,{id:s}):e.response.data.last_name?a.error("Account creation failed. Please enter a full name",{id:s}):a.error("Something went wrong. Please retry",{id:s}),console.log(e)}).finally(()=>{t(!1)})},f=async(o,t,n)=>{t(!0);const s=a.loading("Signing In...");await r.post(`${i}/api/token/`,o).then(e=>{const c={access:e.data.access,refresh:e.data.refresh};localStorage.setItem("tokens",JSON.stringify(c)),localStorage.setItem("user",JSON.stringify(e.data.user.id)),localStorage.setItem("business_id",JSON.stringify(e.data.user.businesses[0].id)),a.success("Login Successful",{id:s}),n("/app/dashboard")}).catch(e=>{e.response.data.non_field_errors?a.error(`Sign in failed. ${e.response.data.non_field_errors[0]}`,{id:s}):a.error("Something went wrong. Please retry",{id:s})}).finally(()=>{t(!1)})},g=async(o,t)=>{const n=a.loading("Verifying OTP...");await r({url:`${i}/api/activate/`,method:"post",data:o}).then(()=>{a.success("OTP verification successful. Please Sign in",{id:n}),localStorage.removeItem("newUser"),t("/auth")}).catch(s=>{a.error("Please check the OTP and retry",{id:n}),console.log(s)})},p=async o=>{const t=a.loading("Resend OTP",{id:"resendotp"});await r.post(`${i}/auth/user/resend_activation`,{email:o}).then(()=>{a.success("OTP resent to your email",{id:t})}).catch(()=>{a.error("Cannot resend otp",{id:t})})};export{g as O,p as a,f as l,u as r};