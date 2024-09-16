import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  createCampaign,
  createGoogleCampaign,
  uploadCampaign,
} from "@/api/campaign";
import toast from "react-hot-toast";

export default function NewCampaign() {
  const navigate = useNavigate();
  const [campaignType, setCampaignType] = useState<
    "upload" | "sheet" | "form" | ""
  >("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [campaignName, setCampaignName] = useState("");
  const [googleCampaignName, setGoogleCampaignName] = useState("");

  const addFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFile(event.target.files[0]);
    }
  };

  const createNewCampaign = () => {
    if (campaignType === "upload") {
      if (uploadedFile?.name) {
        uploadCampaign(uploadedFile, navigate);
      } else {
        toast.error("Please upload a campaign file", {
          id: "newCampaignToast",
        });
      }
    } else if (campaignType === "form") {
      if (campaignName.length > 0) {
        createCampaign(campaignName, navigate);
      } else {
        toast.error("Please enter a campaign name", { id: "newCampaignToast" });
      }
    } else if (campaignType === "sheet") {
      if (googleCampaignName.length > 0) {
        createGoogleCampaign(googleCampaignName, navigate);
      } else {
        toast.error("Please enter a Google sheet name", {
          id: "newCampaignToast",
        });
      }
    } else {
      toast.error("Please select an option", { id: "newCampaignToast" });
    }
  };
  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-header text-2xl font-medium">
            Choose your lead generation option
          </h1>
          <div className="rounded-2xl bg-white p-4 w-[450px] mt-5">
            <div className="mb-3">
              <label htmlFor="upload" className="flex items-center gap-4">
                <input
                  type="radio"
                  name="new"
                  id="upload"
                  onChange={() => setCampaignType("upload")}
                />
                <p className="font-semibold px-4 py-2 rounded-md border-[1px] w-full">
                  Upload Form
                </p>
              </label>
              {campaignType === "upload" && (
                <div className="ml-8 mt-2">
                  <small className="text-xs">
                    Upload campaign file (csv, xls, etc)
                  </small>
                  <Input
                    type="file"
                    accept=".xlsx, .xls, .csv"
                    onChange={addFile}
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>
            <hr />

            <div className="my-3">
              <label htmlFor="form" className="flex items-center gap-4">
                <input
                  type="radio"
                  name="new"
                  id="form"
                  onChange={() => setCampaignType("form")}
                />
                <p className="font-semibold px-4 py-2 rounded-md border-[1px] w-full">
                  Generate Form
                </p>
              </label>
              {campaignType === "form" && (
                <div className="ml-8 mt-2">
                  <small className="text-xs">Campaign name</small>
                  <Input
                    type="text"
                    placeholder="Campaign name"
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                </div>
              )}
            </div>

            <hr />
            <div className="my-3">
              <label htmlFor="sheet" className="flex items-center gap-4">
                <input
                  type="radio"
                  name="new"
                  id="sheet"
                  onChange={() => setCampaignType("sheet")}
                />
                <p className="font-semibold px-4 py-2 rounded-md border-[1px] w-full">
                  Add Campaign From Google Sheet
                </p>
              </label>
              {campaignType === "sheet" && (
                <div className="ml-8 mt-2">
                  <small className="text-xs">Google sheet campaign name</small>
                  <Input
                    type="text"
                    placeholder="Google sheet campaign name"
                    onChange={(e) => setGoogleCampaignName(e.target.value)}
                  />
                </div>
              )}
            </div>
            <Button onClick={createNewCampaign} className="pry-btn w-full">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
