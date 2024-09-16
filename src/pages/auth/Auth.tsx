// images
import logo from "@/assets/logo-alt.png";
import authImg from "@/assets/authImg.png";
import { useSearchParams } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

interface AuthPageProps {
  setAuthState: Dispatch<SetStateAction<string>>;
}

export default function Auth() {
  const [param] = useSearchParams();
  const [authState, setAuthState] = useState(param.get("type") || "login");

  const AuthPage = ({ setAuthState }: AuthPageProps) => {
    return authState === "signup" ? (
      <Signup setAuthState={setAuthState} />
    ) : (
      <Login setAuthState={setAuthState} />
    );
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
        <div className="flex-1 h-full flex items-center py-10 justify-center">
          <AuthPage setAuthState={setAuthState} />
        </div>
      </div>
    </div>
  );
}
