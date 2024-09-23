import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { copyCodeAsInline, copyCodeAsPopup, modalCode } from "@/utils/Codes";

import { IoExitOutline, IoCopyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface modalProps {
  inviteModalOpen: boolean;
  campaign_id: string;
}

export function FormCreatedModal({ inviteModalOpen, campaign_id }: modalProps) {
  const codeToCopy = modalCode(campaign_id);

  return (
    <AlertDialog open={inviteModalOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-pry-clr text-xl font-semibold">
            View Code
          </AlertDialogTitle>
          <AlertDialogDescription>
            Copy the code below and paste into your website to display the
            contact form as a popup. Website reload may be required
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="w-full rounded-md border-2 border-gray-200 p-2 h-[100px] overflow-y-scroll text-xs bg-gray-100">
          {codeToCopy}
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="hover:bg-[#d8e0fb] font-normal gap-2"
            onClick={() => copyCodeAsPopup(campaign_id)}
          >
            <IoCopyOutline className="text-md" />
            Copy popup code
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="hover:bg-[#d8e0fb] font-normal gap-2"
            onClick={() => copyCodeAsInline(campaign_id)}
          >
            <IoCopyOutline className="text-md" />
            Copy inline- code
          </Button>
          <Link to="/app/campaigns" className="w-full">
            <Button size="sm" className="w-full pry-btn gap-2">
              <IoExitOutline className="text-lg" />
              Go to Campaigns
            </Button>
          </Link>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
