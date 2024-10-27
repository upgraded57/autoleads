import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import toast from "react-hot-toast";
import { axiosInstance } from "@/api/axiosInstance";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SupportModal({ open, setOpen }: ModalProps) {
  const user = useContext(UserContext)?.user;
  const [isLoading, setIsLoading] = useState(false);

  const submitReport = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    const toastId = toast.loading("Creating support ticket");
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const rawData = new FormData(form);
    rawData.append("email", user.email);
    rawData.append("user", user.id);

    const data = Object.fromEntries(rawData);

    await axiosInstance
      .post("/support/", data)
      .then(() => {
        toast.success("Support ticket created", { id: toastId });
      })
      .catch(() => {
        toast.error("Something went wrong. Please retry", { id: toastId });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle>Report a Problem</AlertDialogTitle>
            <AlertDialogCancel className="p-0 h-auto rounded-full bg-transparent border-none absolute top-5 right-5">
              <IoIosCloseCircleOutline className="text-xl hover:text-red-clr" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-text-clr">
          Having problems fill out our report form and we'll be with you in no
          time!.
        </AlertDialogDescription>

        <div className="">
          <form onSubmit={submitReport} className="">
            <label htmlFor="subject" className="block mb-4">
              <p className="text-sm">Problem Subject</p>
              <Input
                type="text"
                placeholder="e.g. I cannot invite a user to a campaign"
                className="w-full"
                name="subject"
                id="subject"
                disabled={isLoading}
                required
              />
            </label>

            <label htmlFor="description" className="block mb-4">
              <p className="text-sm">Problem Description</p>
              <Textarea
                className="w-full resize-none"
                name="description"
                id="description"
                required
                disabled={isLoading}
              />
            </label>
            <label htmlFor="file" className="block max-w-max">
              <input
                type="file"
                name="attachments"
                id="file"
                accept="image/*"
                hidden
                disabled={isLoading}
              />
              <p
                className={`block mb-4 text-sm text-pry-clr italic ${
                  isLoading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                Attach Screenshots
              </p>
            </label>
            <Button
              type="submit"
              className="pry-btn w-full"
              disabled={isLoading}
            >
              Submit
            </Button>
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
