import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { addCampaignAudios } from "@/api/campaign";

export default function Call() {
  const { campaign_id, type } = useParams();
  const navigate = useNavigate();

  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = e.target as HTMLFormElement;
    const form = new FormData(data);
    addCampaignAudios(form, campaign_id!, navigate, type!);
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
            onSubmit={handleUpload}
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
              <label htmlFor="file1" className="block mb-4">
                <p className="text-sm">Intro audio </p>
                <Input type="file" id="file1" name="audio_1" required />
              </label>
              <label htmlFor="file2" className="block mb-4">
                <p className="text-sm">
                  Positive feedback audio (If the user responds positively)
                </p>
                <Input type="file" id="file2" name="audio_2" required />
              </label>
              <label htmlFor="file3" className="block mb-4">
                <p className="text-sm">
                  Negative feedback audio (If the user responds negatively)
                </p>
                <Input type="file" id="file3" name="audio_3" required />
              </label>
              <label htmlFor="file4" className="block mb-4">
                <p className="text-sm">
                  Callback audio (If the user calls back)
                </p>
                <Input type="file" id="file4" name="audio_4" required />
              </label>
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
