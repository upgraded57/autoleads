import { OTPVerify } from "@/api/auth";
import Logo from "@/components/Logo";

import { Button } from "@/components/ui/button";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";

const cn = "rounded-md border-[1px]";
export default function VerifyOtp() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = Object.fromEntries(new FormData(form));
    OTPVerify(data, navigate);
  };
  return (
    <div className="verify-otp">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center text-center max-w-sm">
          <h1 className="text-header font-semibold text-xl">
            Verification OTP sent
          </h1>
          <p className="mt-2 mb-6">
            A one-time verification code, has been sent to your Email to confirm
            its really you.
          </p>
          <form onSubmit={handleSubmit}>
            <InputOTP maxLength={6} name="otp">
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
        </div>
      </div>
    </div>
  );
}
