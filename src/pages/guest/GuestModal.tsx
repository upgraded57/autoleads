import { baseURL } from "@/api/baseUrl";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface GuestModalProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCampaigns: React.Dispatch<React.SetStateAction<never[]>>;
  campaign_id: string;
}

export default function GuestModal({
  modalActive,
  setModalActive,
  setCampaigns,
  campaign_id,
}: GuestModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const verifyAccessCode = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const accessCode = Object.fromEntries(new FormData(form))
      .access_code as string;
    const toastId = toast.loading("Verifying access code...");
    await axios
      .get(`${baseURL}/dashboard/${campaign_id}/${accessCode}`)
      .then((res) => {
        toast.success("Access code verified", { id: toastId });
        setCampaigns(res.data);
        sessionStorage.setItem("guestVerified", "true");
        sessionStorage.setItem("access_code", JSON.stringify(accessCode));
        setModalActive(false);
      })
      .catch((err) => {
        if (err.response.status && err.response.status === 401) {
          return toast.error("Access denied. Access code invalid", {
            id: toastId,
          });
        }
        toast.error("Something went wrong", { id: toastId });
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <AlertDialog open={modalActive}>
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold">
            Enter Access Code
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogDescription>
          An access code was sent with the invite mail. Enter it to gain access
          to view this campaign
        </AlertDialogDescription>

        <form onSubmit={verifyAccessCode} className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="access code"
            name="access_code"
            required
          />
          <Button type="submit" className="pry-btn" disabled={isLoading}>
            View Campaign
          </Button>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
