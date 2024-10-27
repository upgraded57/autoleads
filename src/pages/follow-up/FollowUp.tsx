import { chooseFollowUpOption } from "@/api/campaign";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function FollowUp() {
  const [q] = useSearchParams();
  const { campaign_id } = useParams();
  const navigate = useNavigate();
  const type = q.get("type");

  const [methodType, setMethodType] = useState<"Sms" | "CALL" | "">("");

  const chooseFollowUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (methodType === "" || !campaign_id || !type) {
      toast.error("Please choose a method", { id: "followUpToast" });
    } else {
      chooseFollowUpOption(campaign_id, methodType, navigate, type);
    }
  };

  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-header text-2xl font-medium">
            Choose a follow up method
          </h1>
          <div className="rounded-2xl bg-white p-4 w-[450px] mt-5">
            <p>
              You are currently on the premium plan so you have access to all
              follow up methods
            </p>
            <hr className="my-2" />
            <form onSubmit={chooseFollowUp}>
              <label
                htmlFor="text"
                className="flex gap-2 items-center mb-2 cursor-not-allowed"
                title="WhatsApp follow up method is coming soon"
              >
                <input
                  type="radio"
                  name="method"
                  id="text"
                  disabled
                  onChange={() => setMethodType("Sms")}
                />
                <p>Whatsapp Message (Coming Soon)</p>
              </label>
              <label
                htmlFor="call"
                className="flex gap-2 items-center mb-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="method"
                  id="call"
                  onChange={() => setMethodType("CALL")}
                />
                <p>Calls</p>
              </label>
              <Button type="submit" className="pry-btn w-full">
                Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
