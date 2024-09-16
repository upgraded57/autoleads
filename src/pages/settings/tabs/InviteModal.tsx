import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

interface modalProps {
  inviteModalOpen: boolean;
  setInviteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function InviteModal({
  inviteModalOpen,
  setInviteModalOpen,
}: modalProps) {
  const [inviteesCount, setInviteesCount] = useState(["1"]);

  const addInviteField = () => {
    setInviteesCount((prev) => [...prev, "1"]);
  };

  const sendUserInvites = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const invitees = Object.fromEntries(new FormData(form));

    console.log(invitees);

    toast.success("Invites will be sent");

    setInviteModalOpen(false);
  };
  return (
    <AlertDialog open={inviteModalOpen} onOpenChange={setInviteModalOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle>Add a new User</AlertDialogTitle>
            <AlertDialogCancel className="p-0 h-auto rounded-full">
              <IoIosClose className="text-2xl hover:text-red-500" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>

        <div className="my-3">
          <form onSubmit={(e) => sendUserInvites(e)}>
            {inviteesCount.map((_, idx) => (
              <div key={idx} className="flex items-center gap-3 mb-3">
                <label htmlFor={`email${idx}`} className="w-full">
                  <p>Email</p>
                  <Input
                    placeholder="email address"
                    type="email"
                    id={`email${idx}`}
                    name={`email${idx}`}
                    required
                  />
                </label>

                <label htmlFor={`role${idx}`} className="min-w-max">
                  <p>Role</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="p-0 h-auto"
                  >
                    <select
                      className="bg-transparent outline-none h-10 px-2 w-full"
                      name={`role${idx}`}
                      id={`role${idx}`}
                      required
                    >
                      <option value=""> --Select Role-- </option>
                      <option value="superAdmin"> Super Admin </option>
                      <option value="admin"> Admin </option>
                      <option value="viewer"> Viewer </option>
                    </select>
                  </Button>
                </label>
              </div>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <Button variant="outline" onClick={addInviteField}>
                Add New Fields
              </Button>
              <Button type="submit" className="pry-btn">
                Send Invites
              </Button>
            </div>
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
