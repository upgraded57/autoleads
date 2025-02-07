// images
import logo from "@/assets/logo-alt.png";
import authImg from "@/assets/authImg.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { forgotPassword, OTPResetVerify } from "@/api/auth";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [resetUserId, setResetUserId] = useState("");
  const handleResetAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    forgotPassword(form, setResetUserId, setOpenModal);
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
              Forgot Password
            </h1>
            <p>
              Please enter your account email address to reset your password
            </p>
          </div>
          <form
            className=" max-w-[400px] mx-auto w-full"
            onSubmit={handleResetAccount}
          >
            <label htmlFor="mail" className="block w-full mb-6">
              <p>Email Address</p>
              <Input
                id="email"
                name="email"
                placeholder="e.g johndoe@email.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 rounded-none border-0 border-b-2 focus-visible:ring-0 focus:border-b-pry-clr"
              />
            </label>

            <Button type="submit" className="pry-btn w-full mt-5 uppercase">
              Find Account
            </Button>
          </form>
        </div>
      </div>
      <VerifyResetOtp isOpen={openModal} resetUserId={resetUserId} />
    </div>
  );
}

const VerifyResetOtp = ({
  isOpen,
  resetUserId,
}: {
  isOpen: boolean;
  resetUserId: string;
}) => {
  const cn = "rounded-md border-[1px]";
  const navigate = useNavigate();

  const handleVerifyOtp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    form.append("user_id", resetUserId);
    OTPResetVerify(Object.fromEntries(form), navigate);
  };
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild />
      <AlertDialogContent className="max-w-sm text-center">
        <AlertDialogHeader>
          <AlertDialogTitle />
          <AlertDialogDescription />
        </AlertDialogHeader>
        <h1 className="text-header font-semibold text-xl">
          Verification OTP sent
        </h1>
        <p className="mt-2 mb-6">
          A one-time verification code, has been sent to your Email to confirm
          its really you.
        </p>
        <form onSubmit={handleVerifyOtp}>
          <InputOTP
            maxLength={6}
            name="pass_otp"
            className="w-full justify-center"
          >
            <InputOTPGroup className="gap-2">
              <InputOTPSlot className={cn} index={0} />
              <InputOTPSlot className={cn} index={1} />
              <InputOTPSlot className={cn} index={2} />
              <InputOTPSlot className={cn} index={3} />
              <InputOTPSlot className={cn} index={4} />
              <InputOTPSlot className={cn} index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button type="submit" className="pry-btn w-full mt-6">
            Confirm
          </Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
