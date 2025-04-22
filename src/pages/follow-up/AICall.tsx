import { addCampaignContext } from "@/api/campaign";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

export default function AICall() {
  const navigate = useNavigate();
  const { campaign_id, type } = useParams();

  const chooseAICall = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    addCampaignContext(data, campaign_id, navigate, type);
  };
  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center w-[450px] mx-auto">
        <div>
          <h1 className="text-header text-2xl font-medium">AI Calls</h1>
          <p className="text-sm">
            Enter the context and goal of the campaign. The more descriptive you
            are, the better as AI will rely on the context provide for
            conversation with your customers.
          </p>
          <form
            className="rounded-2xl bg-white p-4 mt-5"
            onSubmit={chooseAICall}
          >
            <div>
              <p className="text-sm">
                Enter the details of the campaign. This may include the campaign
                name and information of the campaign
              </p>
              <textarea
                placeholder="Campaign Details"
                className="w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal mt-2"
                name="campaign_details"
                rows={5}
                required
              />
            </div>
            <div className="mt-6 mb-2">
              <p className="text-sm">
                Enter the goal of the campaign. This is the purpose of the
                campaign
              </p>
              <textarea
                placeholder="Campaign Goals"
                className="w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal mt-2"
                name="campaign_goal"
                rows={5}
                required
              />
            </div>

            <Button className="pry-btn w-full" type="submit">
              Continue
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
