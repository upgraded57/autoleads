import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "@/api/auth";

interface AuthPageProps {
  setAuthState: Dispatch<SetStateAction<string>>;
}
const cn =
  "w-full mt-1 rounded-none border-0 border-b-2 focus-visible:ring-0 focus:border-b-pry-clr";

export default function Login({ setAuthState }: AuthPageProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initiateLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const loginData = Object.fromEntries(new FormData(form));

    loginUser(loginData, setIsLoading, navigate);
  };

  return (
    <div className="w-full mx-auto">
      <h1 className="text-header uppercase text-3xl font-semibold text-center mb-20">
        Login
      </h1>
      <form className=" max-w-[400px] mx-auto w-full" onSubmit={initiateLogin}>
        <label htmlFor="email" className="block w-full mb-6">
          <p>Email Address</p>
          <Input
            id="email"
            name="email"
            placeholder="e.g johndoe@email.com"
            required
            className={cn}
          />
        </label>
        <label htmlFor="password" className="block w-full">
          <p>Password</p>
          <Input
            type="password"
            minLength={8}
            name="password"
            id="password"
            placeholder="********"
            required
            className={cn}
          />
        </label>
        <Link
          to="/forgot-password"
          className="text-sm w-max float-right mt-1 text-pry-clr hover:underline"
        >
          Forgot Password?
        </Link>
        <Button
          type="submit"
          className="pry-btn w-full mt-5 uppercase"
          disabled={isLoading}
        >
          Login
        </Button>
      </form>

      <div className="flex gap-1 items-center justify-center mt-10">
        <p>Don't have an account?</p>
        <p
          className="text-pry-clr font-semibold cursor-pointer hover:underline"
          onClick={() => (isLoading ? "" : setAuthState("signup"))}
        >
          Sign Up
        </p>
        <p>here</p>
      </div>
    </div>
  );
}
