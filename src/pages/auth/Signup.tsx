import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "@/api/auth";

interface AuthPageProps {
  setAuthState: Dispatch<SetStateAction<string>>;
}
const cn =
  "w-full mt-1 rounded-none border-0 border-b-2 focus-visible:ring-0 focus:border-b-pry-clr";

export default function Signup({ setAuthState }: AuthPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const signupData = Object.fromEntries(new FormData(form));

    registerUser(signupData, setIsLoading, navigate);
  };

  return (
    <div className="w-full mx-auto h-full overflow-y-scroll">
      <h1 className="text-header uppercase text-3xl font-semibold text-center mb-10">
        Sign Up
      </h1>
      <form className=" max-w-[400px] mx-auto w-full" onSubmit={createAccount}>
        <label htmlFor="name" className="block w-full mb-6">
          <p>Full Name</p>
          <Input
            id="name"
            name="name"
            placeholder="e.g John Doe"
            required
            className={cn}
          />
        </label>
        <label htmlFor="business_name" className="block w-full mb-6">
          <p>Business Name</p>
          <Input
            id="business_name"
            name="business_name"
            placeholder="e.g John Doe Company"
            required
            className={cn}
          />
        </label>
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
        <label htmlFor="phone" className="block w-full mb-6">
          <p>Phone Number</p>
          <Input
            id="phone"
            name="phone"
            placeholder="e.g 234 901 234 5678 "
            required
            className={cn}
          />
        </label>
        <label htmlFor="password" className="block w-full mb-6">
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
        <label htmlFor="confirm_password" className="block w-full">
          <p>Confirm Password</p>
          <Input
            type="confirm_password"
            minLength={8}
            name="confirm_password"
            id="confirm_password"
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
          create account
        </Button>
      </form>

      <div className="flex gap-1 items-center justify-center mt-10">
        <p>Already have an account?</p>
        <p
          className="text-pry-clr font-semibold cursor-pointer hover:underline"
          onClick={() => (isLoading ? "" : setAuthState("login"))}
        >
          Login
        </p>
        <p>here</p>
      </div>
    </div>
  );
}
