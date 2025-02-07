// images
import logo from "@/assets/logo-alt.png";
import authImg from "@/assets/authImg.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { resetPassword } from "@/api/auth";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const userId = sessionStorage.getItem("user_id");
  if (!userId) {
    navigate("/auth");
    return;
  }

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    form.append("user_id", userId);
    const data = Object.fromEntries(form);
    if (data.new_password !== data.confirm_password) {
      toast.error("Password do not match", { id: "authToast" });
      return;
    }

    resetPassword(data, navigate);
  };
  return (
    <div className="h-screen py-8 px-4">
      <div className=" flex gap-5 items-center justify-between bg-white h-full rounded-2xl overflow-hidden">
        <div className="flex-1 h-full relative flex flex-col gap-10">
          <div className="p-10 pb-0">
            <img src={logo} alt="Autoleads" className="w-[180px] mb-20" />
            <h1 className="header-text font-bold text-4xl block mb-6 ">
              The simplest lead management solution
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="w-full">
            <img src={authImg} alt="Autoleads" />
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col justify-center items-center">
          <div className="max-w-sm text-center mb-14">
            <h1 className="text-header uppercase text-3xl font-semibold text-center mb-3">
              Reset Password
            </h1>
            <p>Kindly reset your password to have access to your account.</p>
          </div>
          <form
            className=" max-w-[400px] mx-auto w-full"
            onSubmit={handleResetPassword}
          >
            <label htmlFor="new_password" className="block w-full mb-6">
              <p>New Password</p>
              <div className="relative flex items-center">
                <Input
                  id="new_password"
                  name="new_password"
                  placeholder="********"
                  type={passwordVisible ? "text" : "password"}
                  required
                  minLength={8}
                  className="w-full mt-1 rounded-none border-0 border-b-2 focus-visible:ring-0 focus:border-b-pry-clr"
                />
                <span
                  className="absolute right-0 cursor-pointer"
                  onClick={() => setPasswordVisible((prev) => !prev)}
                >
                  {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </label>
            <label htmlFor="confirm_password" className="block w-full mb-6">
              <p>Confirm New Password</p>
              <div className="relative flex items-center">
                <Input
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="********"
                  type={passwordVisible ? "text" : "password"}
                  required
                  minLength={8}
                  className="w-full mt-1 rounded-none border-0 border-b-2 focus-visible:ring-0 focus:border-b-pry-clr"
                />
                <span
                  className="absolute right-0 cursor-pointer"
                  onClick={() => setPasswordVisible((prev) => !prev)}
                >
                  {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </label>

            <Button type="submit" className="pry-btn w-full mt-5 uppercase">
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
