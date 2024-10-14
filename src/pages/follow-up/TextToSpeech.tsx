import { addCampaignTexts } from "@/api/campaign";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TextToSpeech() {
  const navigate = useNavigate();
  const { campaign_id } = useParams();
  const { type } = useParams();

  const chooseTTS = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
    const texts = [data.text1, data.text2, data.text3, data.text4];
    addCampaignTexts(texts, campaign_id, navigate, type);
  };

  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-header text-2xl font-medium">Text Input</h1>
          <form
            className="rounded-2xl bg-white p-4 w-[450px] mt-5"
            onSubmit={chooseTTS}
          >
            <p>
              Enter the texts to be converted to speech and played in-call to
              your users based on their response
            </p>

            <div className="mt-6 mb-2">
              <textarea
                placeholder="Intro text"
                className="w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal"
                name="text1"
                required
              />
              <textarea
                placeholder="Positive response text (when the user responds positively)"
                className="w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal"
                name="text2"
                required
              />
              <textarea
                placeholder="Negative response text (when the user responds negatively)"
                className="w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal"
                name="text3"
                required
              />
              <textarea
                placeholder="Callback text (if the user calls back)"
                className="w-full border rounded-md p-2 resize-none outline-offset-[4px] text-sm font-normal"
                name="text4"
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
