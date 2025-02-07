import{_ as e,V as n,W as i}from"./index-BBASEsXd.js";const l=async(r,t,o)=>{const a=e.loading("Sending OTP");await n.post(`${i}/forgot-password/`,r).then(s=>{t(s.data.user_id),sessionStorage.setItem("user_id",s.data.user_id),o(!0),e.success("OTP sent to your mail",{id:a})}).catch(s=>{e.error(s.response.data.message||"Something went wrong. Please retry",{id:a})})},u=async(r,t,o)=>{const a=e.loading("Creating your account");t(!0),await n.post(`${i}/api/register/`,r).then(s=>{localStorage.getItem("newUser")&&localStorage.removeItem("newUser"),localStorage.setItem("newUser",JSON.stringify(s.data)),e.success("Account creation successful",{id:a}),o("/auth/verify-otp")}).catch(s=>{s.response.data.email?e.error(`Account creation failed. ${s.response.data.email[0]}`,{id:a}):s.response.data.phone_number?e.error(`Account creation failed. ${s.response.data.phone_number[0]}`,{id:a}):s.response.data.last_name?e.error("Account creation failed. Please enter a full name",{id:a}):e.error("Something went wrong. Please retry",{id:a}),console.log(s)}).finally(()=>{t(!1)})},g=async(r,t,o)=>{t(!0);const a=e.loading("Signing In...");await n.post(`${i}/api/token/`,r).then(s=>{const c={access:s.data.access,refresh:s.data.refresh};localStorage.setItem("tokens",JSON.stringify(c)),localStorage.setItem("user",JSON.stringify(s.data.user.id)),localStorage.setItem("business_id",JSON.stringify(s.data.user.businesses[0].id)),e.success("Login Successful",{id:a}),o("/app/dashboard")}).catch(s=>{s.response.data.non_field_errors?e.error(`Sign in failed. ${s.response.data.non_field_errors[0]}`,{id:a}):e.error("Something went wrong. Please retry",{id:a})}).finally(()=>{t(!1)})},f=async(r,t)=>{const o=e.loading("Verifying OTP...");await n({url:`${i}/api/activate/`,method:"post",data:r}).then(()=>{e.success("OTP verification successful. Please Sign in",{id:o}),localStorage.removeItem("newUser"),t("/auth")}).catch(a=>{e.error("Please check the OTP and retry",{id:o}),console.log(a)})},h=async(r,t)=>{const o=e.loading("Verifying OTP...");await n({url:`${i}/verify-password-otp/`,method:"post",data:r}).then(()=>{e.success("OTP verification successful",{id:o}),localStorage.removeItem("newUser"),t("/auth/reset-password")}).catch(a=>{e.error("Please check the OTP and retry",{id:o}),console.log(a)})},p=async r=>{const t=e.loading("Resend OTP",{id:"resendotp"});await n.post(`${i}/auth/users/resend_activation`,{email:r}).then(()=>{e.success("OTP resent to your email",{id:t})}).catch(()=>{e.error("Cannot resend otp",{id:t})})},m=async(r,t)=>{const o=e.loading("Resetting password",{id:"resendotp"});await n.post(`${i}/reset-password/`,r).then(()=>{e.success("Password reset successfully",{id:o}),t("/auth")}).catch(()=>{e.error("Something went wrong. Please retry",{id:o})})};export{f as O,p as a,h as b,m as c,l as f,g as l,u as r};
