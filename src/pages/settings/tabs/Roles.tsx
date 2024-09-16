import { Button } from "@/components/ui/button";
import { useState } from "react";
import { InviteModal } from "./InviteModal";
import { FaPlus } from "react-icons/fa6";
import UsersTable from "./UsersTable";
import Permission from "./Permission";

export default function Roles() {
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  return (
    <>
      <div className="rounded-2xl bg-white p-4 mb-6">
        {inviteModalOpen && (
          <InviteModal
            inviteModalOpen={inviteModalOpen}
            setInviteModalOpen={setInviteModalOpen}
          />
        )}
        <div className="flex justify-between items-center mb-6">
          <span>
            <h3 className="font-semibold text-lg">Team Overview</h3>
            <p>
              This is a list of all team members currently onboarded on the
              platform
            </p>
          </span>
          <Button
            className="pry-btn gap-2"
            onClick={() => setInviteModalOpen(true)}
          >
            <FaPlus />
            Invite or Add User
          </Button>
        </div>

        <div>
          <UsersTable />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-4">
        <Permission />
      </div>
    </>
  );
}
