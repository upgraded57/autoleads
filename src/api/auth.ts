import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "./baseUrl";
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
// forgot password
export const forgotPassword = async (
  mail: {},
  setResetUserId: React.Dispatch<SetStateAction<string>>,
  setOpenModal: React.Dispatch<SetStateAction<boolean>>
) => {
  const toastId = toast.loading("Sending OTP");
  await axios
    .post(`${baseURL}/forgot-password/`, mail)
    .then((res) => {
      setResetUserId(res.data.user_id);
      sessionStorage.setItem("user_id", res.data.user_id);
      setOpenModal(true);
      toast.success("OTP sent to your mail", {
        id: toastId,
      });
    })
    .catch((err) => {
      toast.error(
        err.response.data.message || "Something went wrong. Please retry",
        {
          id: toastId,
        }
      );
    });
};

// register new user
export const registerUser = async (
  signupData: {},
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  const toastId = toast.loading("Creating your account");
  setIsLoading(true);
  await axios
    .post(`${baseURL}/api/register/`, signupData)
    .then((res) => {
      if (localStorage.getItem("newUser")) {
        localStorage.removeItem("newUser");
      }
      localStorage.setItem("newUser", JSON.stringify(res.data));
      toast.success("Account creation successful", {
        id: toastId,
      });
      navigate("/auth/verify-otp");
    })
    .catch((err) => {
      if (err.response.data.email) {
        toast.error(`Account creation failed. ${err.response.data.email[0]}`, {
          id: toastId,
        });
      } else if (err.response.data.phone_number) {
        toast.error(
          `Account creation failed. ${err.response.data.phone_number[0]}`,
          {
            id: toastId,
          }
        );
      } else if (err.response.data.last_name) {
        toast.error(`Account creation failed. Please enter a full name`, {
          id: toastId,
        });
      } else {
        toast.error("Something went wrong. Please retry", {
          id: toastId,
        });
      }
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

// login
export const loginUser = async (
  loginData: {},
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  setIsLoading(true);
  const toastId = toast.loading("Signing In...");
  await axios
    .post(`${baseURL}/api/token/`, loginData)
    .then((res) => {
      const tokens = { access: res.data.access, refresh: res.data.refresh };
      localStorage.setItem("tokens", JSON.stringify(tokens));
      localStorage.setItem("user", JSON.stringify(res.data.user.id));
      localStorage.setItem(
        "business_id",
        JSON.stringify(res.data.user.businesses[0].id)
      );
      toast.success("Login Successful", {
        id: toastId,
      });
      navigate("/app/dashboard");
    })
    .catch((err) => {
      if (err.response.data.non_field_errors) {
        toast.error(
          `Sign in failed. ${err.response.data.non_field_errors[0]}`,
          {
            id: toastId,
          }
        );
      } else {
        toast.error("Something went wrong. Please retry", {
          id: toastId,
        });
      }
    })
    .finally(() => {
      setIsLoading(false);
    });
};

// verify OTP
export const OTPVerify = async (data: {}, navigate: NavigateFunction) => {
  const toastId = toast.loading("Verifying OTP...");
  await axios({
    url: `${baseURL}/api/activate/`,
    method: "post",
    data,
  })
    .then(() => {
      toast.success("OTP verification successful. Please Sign in", {
        id: toastId,
      });
      localStorage.removeItem("newUser");
      navigate("/auth");
    })

    .catch((err) => {
      toast.error("Please check the OTP and retry", {
        id: toastId,
      });
      console.log(err);
    });
};

// verify password reset OTP
export const OTPResetVerify = async (data: {}, navigate: NavigateFunction) => {
  const toastId = toast.loading("Verifying OTP...");
  await axios({
    url: `${baseURL}/verify-password-otp/`,
    method: "post",
    data,
  })
    .then(() => {
      toast.success("OTP verification successful", {
        id: toastId,
      });
      localStorage.removeItem("newUser");
      navigate("/auth/reset-password");
    })

    .catch((err) => {
      toast.error("Please check the OTP and retry", {
        id: toastId,
      });
      console.log(err);
    });
};

export const resendOTP = async (email: string) => {
  const toastId = toast.loading("Resend OTP", { id: "resendotp" });
  await axios
    .post(`${baseURL}/auth/users/resend_activation`, { email })
    .then(() => {
      toast.success("OTP resent to your email", { id: toastId });
    })
    .catch(() => {
      toast.error("Cannot resend otp", { id: toastId });
    });
};

export const resetPassword = async (data: {}, navigate: NavigateFunction) => {
  const toastId = toast.loading("Resetting password", { id: "resendotp" });
  await axios
    .post(`${baseURL}/reset-password/`, data)
    .then(() => {
      toast.success("Password reset successfully", { id: toastId });
      navigate("/auth");
    })
    .catch(() => {
      toast.error("Something went wrong. Please retry", { id: toastId });
    });
};
