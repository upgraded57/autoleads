import {
  useGetCampaignContext,
  useUpdateCampaignContext,
} from "@/api/campaign";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCampaign() {
  const navigate = useNavigate();
  const { campaign_id } = useParams() as { campaign_id: string };
  const { isLoading, data, isError } = useGetCampaignContext(campaign_id);

  const { mutateAsync: updateContext, isPending } = useUpdateCampaignContext();

  const chooseAICall = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    ) as Record<string, string>;
    const toastId = toast.loading("Updating campaign context", {
      id: "updateToast",
    });
    updateContext({ campaign_id, data: form }).then(() => {
      toast.success("Campaign context updated successfully", { id: toastId });
      navigate("/app/campaigns");
    });
  };

  return (
    <>
      <Logo />
      {isLoading ? (
        <div className="w-full h-screen pb-[200px] grid place-content-center">
          <div className="flex items-center gap-2">
            <Loader />
            <p className="text-sm">Fetching campaign data</p>
          </div>
        </div>
      ) : isError ? (
        <div className="w-full h-screen pb-[200px] grid place-content-center">
          <p className="text-sm">
            We couldn't get the exiting information of that campaign. Please
            retry
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  mx-auto pb-10">
          <div className="w-full max-w-screen-lg">
            <h1 className="text-header text-2xl font-medium">
              Edit Campaign Context
            </h1>
            <p className="text-sm">Make changes to your campaign context</p>
            <form
              className="rounded-lg shadow bg-white w-full p-10 mt-5"
              onSubmit={chooseAICall}
            >
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 items-end">
                <label htmlFor="product_name" className="block mb-4 w-full">
                  <p className="text-sm">Product Name</p>
                  <Input
                    type="text"
                    id="product_name"
                    name="product_name"
                    placeholder="e.g. Primeclick Marketing"
                    defaultValue={data?.product_name}
                    required
                  />
                </label>
                <label
                  htmlFor="product_offer_or_call_to_action"
                  className="block mb-4 w-full"
                >
                  <p className="text-sm">Product Offer or Call to Action</p>
                  <Input
                    type="text"
                    id="product_offer_or_call_to_action"
                    name="product_offer_or_call_to_action"
                    placeholder="e.g. Digital Marketing at its best"
                    defaultValue={data?.product_offer_or_call_to_action}
                    required
                  />
                </label>
              </div>
              <label
                htmlFor="product_description"
                className="block mb-4 w-full"
              >
                <p className="text-sm">Product Description</p>
                <Input
                  type="text"
                  id="product_description"
                  name="product_description"
                  placeholder="e.g. Digital Marketing at its best"
                  defaultValue={data?.product_description}
                  required
                />
              </label>

              <label htmlFor="product_pricing" className="block mb-4">
                <p className="text-sm">Product Pricing</p>
                <Textarea
                  id="product_pricing"
                  name="product_pricing"
                  defaultValue={data?.product_pricing}
                  required
                />
              </label>
              <label htmlFor="faqs" className="block mb-4">
                <p className="text-sm">Frequently asked Questions</p>
                <Textarea id="faqs" name="faqs" defaultValue={data?.faqs} />
              </label>
              <label
                htmlFor="company_information"
                className="block mb-4 w-full"
              >
                <p className="text-sm">Company Information</p>
                <Input
                  type="text"
                  id="company_information"
                  name="company_information"
                  placeholder="e.g. company name, company address, company contact information"
                  defaultValue={data?.company_information}
                  required
                />
              </label>

              <label
                htmlFor="most_important_information"
                className="block mb-4 w-full"
              >
                <p className="text-sm">Most Important Information</p>
                <Input
                  type="text"
                  id="most_important_information"
                  name="most_important_information"
                  placeholder="e.g. the most important information to be emphasized during the call"
                  defaultValue={data?.most_important_information}
                  required
                />
              </label>

              <label htmlFor="sales_team_email" className="block mb-4 w-full">
                <p className="text-sm">Sales Team Email</p>
                <Input
                  type="text"
                  id="sales_team_email"
                  name="sales_team_email"
                  placeholder="e.g. autoleads@primeclick.com"
                  defaultValue={data?.sales_team_email}
                />
              </label>

              <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 items-end">
                <label htmlFor="client_url" className="block mb-4 w-full">
                  <p className="text-sm">Client URL</p>
                  <Input
                    type="text"
                    id="client_url"
                    name="client_url"
                    placeholder="e.g. https://autoleads.primeclickmedia.com"
                    required
                  />
                </label>
                <label htmlFor="campaign_goal" className="block mb-4 w-full">
                  <p className="text-sm lg:mb-1">Campaign Goal</p>
                  <Select name="campaign_goal" required>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={
                          data?.campaign_goal || "Select Campaign Goal"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Get Feedback">Get Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </label>
              </div>

              <Button
                className="pry-btn w-max"
                type="submit"
                disabled={isPending}
              >
                {isPending && <Loader2 className="animate-spin" />}
                Save Context
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
