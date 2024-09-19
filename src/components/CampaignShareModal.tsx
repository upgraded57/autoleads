import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import toast from "react-hot-toast";
import toast from "react-hot-toast";
import { axiosInstance } from "@/api/axiosInstance";

interface modalProps {
  campaign_id: string;
  inviteModalOpen: boolean;
  setInviteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CampaignShareModal({
  campaign_id,
  inviteModalOpen,
  setInviteModalOpen,
}: modalProps) {
  const shareCampaign = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Sending invite...", {
      id: "shareCampaignModal",
    });

    const form = e.target as HTMLFormElement;
    const email = Object.fromEntries(new FormData(form)).email;

    const inviteData = { campaign_id, email };

    await axiosInstance
      .post("/collect-email/", inviteData)
      .then(() => {
        toast.success("Invite link sent successfully", { id: toastId });
        setInviteModalOpen(false);
      })
      .catch(() => {
        toast.error("Something went wrong. Please retry!", { id: toastId });
      });
  };

  return (
    <AlertDialog open={inviteModalOpen} onOpenChange={setInviteModalOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle>Share Campaign</AlertDialogTitle>
            <AlertDialogCancel className="p-0 h-auto rounded-full">
              <IoIosClose className="text-2xl hover:text-red-500" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Share this campaign as view-only to anyone. The recipient will not be
          able to modify or alter the content of the campaign or its status.
        </AlertDialogDescription>

        <div className="">
          <form onSubmit={shareCampaign} className="flex items-center gap-2">
            <Input
              type="email"
              placeholder="Recipient email"
              className="w-full"
              name="email"
              required
            />
            <Button type="submit" className="pry-btn">
              Share
            </Button>
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
