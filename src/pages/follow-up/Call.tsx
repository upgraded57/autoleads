import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { FaCirclePlay, FaSpinner } from "react-icons/fa6";
import { useState } from "react";
import { addCampaignAudios } from "@/api/campaign";

export default function Call() {
  const { campaign_id, type } = useParams();
  const navigate = useNavigate();
  const [audio1Link, setAudio1Link] = useState("");
  const [audio2Link, setAudio2Link] = useState("");
  const [audio3Link, setAudio3Link] = useState("");
  const [audio4Link, setAudio4Link] = useState("");

  const chooseAudioLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const audios = [audio1Link, audio2Link, audio3Link, audio4Link];
    addCampaignAudios(audios, campaign_id!, navigate, type!);
  };

  const [isLoading, setIsLoading] = useState({
    audio1: false,
    audio2: false,
    audio3: false,
    audio4: false,
  });

  // Create an array or object to store the audio instances
  const audioInstances: { [key: number]: HTMLAudioElement } = {};

  const playAudio = (idx: number) => {
    const audioURL =
      idx === 1 ? audio1Link : idx === 2 ? audio2Link : audio3Link;

    if (audioURL.length === 0) {
      return alert(`Audio ${idx} URL empty or ${audioURL || "URL"} is invalid`);
    }

    // Create or reuse the audio instance for the specific idx
    if (!audioInstances[idx]) {
      audioInstances[idx] = new Audio(audioURL);
    }

    setIsLoading((prev) => ({
      ...prev,
      [`audio${idx}`]: true,
    }));

    // Attach the oncanplaythrough event and play the audio
    audioInstances[idx].oncanplaythrough = () => {
      setIsLoading((prev) => ({
        ...prev,
        [`audio${idx}`]: false,
      }));

      audioInstances[idx].play();
    };
  };

  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-header text-2xl font-medium">
            Upload audios to link to your campaign
          </h1>
          <form
            className="rounded-2xl bg-white p-4 w-[450px] mt-5"
            onSubmit={chooseAudioLink}
          >
            <h1 className="text-2xl font-medium">Add Audio Links</h1>
            <p>
              To link an audio file to your campaign kindly click{" "}
              <Link
                to="https://www.opendrive.com/login?ref=%2Ffiles&s=5862827e7d"
                className="text-pry-clr font-semibold hover:underline"
              >
                here
              </Link>
              , after uploading your file copy the audio link and paste in the
              tab below
            </p>

            <div className="my-6">
              <div className="flex items-center gap-2 mb-2">
                <Input
                  type="url"
                  placeholder="Link to first audio"
                  onChange={(e) => setAudio1Link(e.target.value)}
                  required
                />
                <div className="h-full aspect-square cursor-pointer text-pry-clr">
                  {isLoading.audio1 ? (
                    <FaSpinner className="loading-icon" />
                  ) : (
                    <FaCirclePlay
                      className="text-2xl"
                      title="Play Audio"
                      onClick={() => playAudio(1)}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Input
                  type="url"
                  placeholder="Link to second audio (if client responds positively)"
                  onChange={(e) => setAudio2Link(e.target.value)}
                  required
                />
                <div className="h-full aspect-square cursor-pointer text-pry-clr">
                  {isLoading.audio2 ? (
                    <FaSpinner className="loading-icon" />
                  ) : (
                    <FaCirclePlay
                      className="text-2xl"
                      title="Play Audio"
                      onClick={() => playAudio(2)}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Input
                  type="url"
                  placeholder="Link to third audio (if client responds negatively)"
                  onChange={(e) => setAudio3Link(e.target.value)}
                  required
                />
                <div className="h-full aspect-square cursor-pointer text-pry-clr">
                  {isLoading.audio3 ? (
                    <FaSpinner className="loading-icon" />
                  ) : (
                    <FaCirclePlay
                      className="text-2xl"
                      title="Play Audio"
                      onClick={() => playAudio(3)}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  type="url"
                  placeholder="Callback audio (if client calls back)"
                  onChange={(e) => setAudio4Link(e.target.value)}
                  required
                />
                <div className="h-full aspect-square cursor-pointer text-pry-clr">
                  {isLoading.audio4 ? (
                    <FaSpinner className="loading-icon" />
                  ) : (
                    <FaCirclePlay
                      className="text-2xl"
                      title="Play Audio"
                      onClick={() => playAudio(4)}
                    />
                  )}
                </div>
              </div>
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
