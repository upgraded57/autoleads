import { addCampaignContext } from "@/api/campaign";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function AICall() {
  const navigate = useNavigate();
  const { campaign_id } = useParams();
  const [q] = useSearchParams();
  const type = q.get("type");

  const chooseAICall = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    addCampaignContext(data, campaign_id, navigate, type);
  };

  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center mx-auto pb-10">
        <div className="w-full max-w-screen-lg">
          <h1 className="text-header text-2xl font-medium">Campaign Context</h1>
          <p className="text-sm">
            Enter the context and goal of the campaign. The more descriptive you
            are, the better as AI will rely on the context provide for
            conversation with your customers.
          </p>
          <form
            className="rounded-lg shadow bg-white p-10 mt-5"
            onSubmit={chooseAICall}
          >
            <label htmlFor="product_name" className="block mb-4 w-full">
              <p className="text-sm">Product Name</p>
              <Input
                type="text"
                id="product_name"
                name="product_name"
                placeholder="e.g. Primeclick Marketing"
              />
            </label>
            <label htmlFor="product_description" className="block mb-4 w-full">
              <p className="text-sm">Product Description</p>
              <Input
                type="text"
                id="product_description"
                name="product_description"
                placeholder="e.g. Digital Marketing at its best"
              />
            </label>

            <label htmlFor="product_pricing" className="block mb-4">
              <p className="text-sm">Product Pricing</p>
              <Textarea id="product_pricing" name="product_pricing" />
            </label>
            <label htmlFor="faqs" className="block mb-4">
              <p className="text-sm">Frequently asked Questions</p>
              <Textarea id="faqs" name="faqs" />
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
              />
            </label>
            <label htmlFor="company_information" className="block mb-4 w-full">
              <p className="text-sm">Company Information</p>
              <Input
                type="text"
                id="company_information"
                name="company_information"
                placeholder="e.g. company name, company address, company contact information"
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
                required
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
                <p className="text-sm">Campaign Goal</p>
                <Select name="campaign_goal">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Campaign Goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Get Feedback">Get Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>

            <Button className="pry-btn w-max" type="submit">
              Save Context
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
