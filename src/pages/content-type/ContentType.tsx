import { chooseContentUploadType } from "@/api/campaign";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ContentType() {
  const [cType, setCType] = useState<"Audio" | "Text" | "AI" | null>(null);
  const { campaign_id } = useParams();
  const navigate = useNavigate();
  const [q] = useSearchParams();
  const type = q.get("type");
  const option = q.get("option");

  const chooseContentType = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cType === null)
      return toast.error("Please select a content type", { id: "ctype" });

    chooseContentUploadType(campaign_id, type, cType, option, navigate);
  };

  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-header text-2xl font-medium">
            Choose a content upload type
          </h1>
          <div className="rounded-2xl bg-white p-4 w-[450px] mt-5">
            <p>
              This will determine how you want to upload the in-call audio that
              will played to your customers. Choose audio if you have the audio
              urls or text input if you want to enter texts which will be
              converted to speech
            </p>
            <hr className="my-2" />
            <form onSubmit={chooseContentType}>
              <label htmlFor="audio" className="flex gap-2 items-center mb-2">
                <input
                  type="radio"
                  name="method"
                  id="audio"
                  onChange={() => setCType("Audio")}
                />
                <p>Audio Upload</p>
              </label>
              <label htmlFor="text" className="flex gap-2 items-center mb-2">
                <input
                  type="radio"
                  name="method"
                  id="text"
                  onChange={() => setCType("Text")}
                />
                <p>Text Input</p>
              </label>
              <label htmlFor="ai" className="flex gap-2 items-center mb-2">
                <input
                  type="radio"
                  name="method"
                  id="ai"
                  onChange={() => setCType("AI")}
                />
                <p>AI Calls</p>
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
