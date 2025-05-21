import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";
import { useNavigate, useSearchParams } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  launchCampaign,
  UseDeleteCampaign,
  useResetCampaign,
} from "@/api/campaign";
import { HiDotsVertical } from "react-icons/hi";
import { copyCodeAsInline, copyCodeAsPopup } from "@/utils/Codes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CampaignsTableProps } from "@/utils/Types.dto";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function CampaignsTable({ data }: CampaignsTableProps) {
  const [q, setQ] = useSearchParams({
    type: "",
    value: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState(data);

  const setFilter = (key: "type" | "value", newValue: string) => {
    const currentParams = Object.fromEntries(q.entries());
    const updatedParams = {
      ...currentParams,
      [key]: newValue,
    };
    setQ(updatedParams);
  };

  useEffect(() => {
    const filerCampaigns = () => {
      const filterValue = q.get("type");
      const searchValue = q.get("value");
      if (!filterValue && !searchValue) {
        const filteredData = data;
        setCampaigns(filteredData);
        return;
      }

      const filteredData = data?.filter((el) => {
        if (!filterValue && searchValue) {
          return el.title.toLowerCase().includes(searchValue.toLowerCase());
        } else if (!searchValue && filterValue) {
          return filterValue.toLowerCase() === el.type_of.toLowerCase();
        } else if (searchValue && filterValue) {
          return (
            filterValue.toLowerCase() === el.type_of.toLowerCase() &&
            el.title.toLowerCase().includes(searchValue.toLowerCase())
          );
        }
      });

      setCampaigns(filteredData);
    };

    filerCampaigns();
  }, [q, data]);

  const viewCampaign = (id: string) => {
    navigate(`/app/campaigns/${id}`);
  };

  const { mutateAsync: deleteCampaign, isPending: isDeletingCampaign } =
    UseDeleteCampaign();
  const handleDeleteCampaign = (id: string) => {
    const toastId = toast.loading("Deleting Campaign");
    deleteCampaign(id)
      .then(() => {
        toast.success("Campaign deleted successfully", { id: toastId });
        queryClient.invalidateQueries();
      })
      .catch(() => {
        toast.error("Unable to delete campaign", { id: toastId });
      });
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-6">
        <div className="basis-1/4 flex items-center gap-2">
          <p className="">Filter by:</p>
          <Button variant="outline" className="p-0 h-auto">
            <select
              className="bg-transparent outline-hidden h-10 px-2"
              onChange={(e) => setFilter("type", e.target.value)}
              defaultValue={q.get("type") ?? ""}
            >
              <option value="">All Types</option>
              <option value="direct">Direct</option>
              <option value="upload">Upload</option>
            </select>
          </Button>
        </div>

        <Input
          type="text"
          placeholder="Search by campaign title..."
          className="max-w-[300px]"
          defaultValue={q.get("value") || ""}
          onChange={(e) => setFilter("value", e.target.value)}
        />
        <div className="basis-1/4 flex items-center justify-end gap-2"></div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Leads</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Contacted</TableHead>
            <TableHead>Converted</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns?.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell onClick={() => viewCampaign(campaign.id)}>
                {campaign.id}
              </TableCell>
              <TableCell onClick={() => viewCampaign(campaign.id)}>
                {campaign.title}
              </TableCell>
              <TableCell onClick={() => viewCampaign(campaign.id)}>
                {campaign.leads}
              </TableCell>
              <TableCell onClick={() => viewCampaign(campaign.id)}>
                {moment(campaign.created).format("MMM DD, YYYY hh:mm")}
              </TableCell>
              <TableCell onClick={() => viewCampaign(campaign.id)}>
                {campaign.type_of}
              </TableCell>
              <TableCell onClick={() => viewCampaign(campaign.id)}>
                {campaign.contacted_leads}
              </TableCell>
              <TableCell onClick={() => viewCampaign(campaign.id)}>
                {campaign.converted_leads}
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button size="sm" variant="ghost" className="my-2">
                      <HiDotsVertical />
                    </Button>
                  </PopoverTrigger>
                  {campaign.type_of.toLowerCase() === "upload" ? (
                    <PopoverContent className="flex flex-col gap-3 w-max">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded"
                        onClick={() => launchCampaign(campaign.id)}
                      >
                        Launch Campaign
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded border-destructive text-destructive hover:bg-destructive hover:text-white"
                        disabled={isDeletingCampaign}
                        onClick={() => {
                          setCurrentId(campaign.id);
                          setOpenModal(true);
                        }}
                      >
                        Reset Campaign
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="rounded"
                        disabled={isDeletingCampaign}
                        onClick={() => handleDeleteCampaign(campaign.id)}
                      >
                        Delete Campaign
                      </Button>{" "}
                    </PopoverContent>
                  ) : (
                    <PopoverContent className="flex flex-col gap-3 w-max">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded"
                        onClick={() => copyCodeAsPopup(campaign.id)}
                      >
                        Copy code as popup
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded"
                        onClick={() => copyCodeAsInline(campaign.id)}
                      >
                        Copy code inline form
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded"
                        onClick={() => {
                          navigate(`/campaigns/form/edit/${campaign.id}`);
                        }}
                      >
                        Edit Form
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded"
                        onClick={() => {
                          navigate(`/campaigns/edit/${campaign.id}`);
                        }}
                      >
                        Edit Context
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded border-destructive text-destructive hover:bg-destructive hover:text-white"
                        disabled={isDeletingCampaign}
                        onClick={() => {
                          setCurrentId(campaign.id);
                          setOpenModal(true);
                        }}
                      >
                        Reset Campaign
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="rounded"
                        disabled={isDeletingCampaign}
                        onClick={() => handleDeleteCampaign(campaign.id)}
                      >
                        Delete Campaign
                      </Button>
                    </PopoverContent>
                  )}
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ResetModal
        open={openModal}
        setIsOpen={setOpenModal}
        id={currentId}
        setCurrentId={setCurrentId}
      />
    </div>
  );
}

const ResetModal = ({
  open,
  setIsOpen,
  id,
  setCurrentId,
}: {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentId: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}) => {
  const { mutateAsync: resetCampaign, isPending } = useResetCampaign();
  const handleResetCampaign = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!id) return;
    const toastId = toast.loading("Resetting campaign data", {
      id: "resetToast",
    });
    resetCampaign(id)
      .then(() => {
        toast.success("Campaign data reset successfully", { id: toastId });
      })
      .catch((err) => {
        toast.error(
          err?.response?.data?.message || "Unable to reset campaign data",
          {
            id: toastId,
          }
        );
      });
  };
  return (
    <AlertDialog
      open={open}
      onOpenChange={
        isPending
          ? () => {}
          : () => {
              setIsOpen(false);
              setCurrentId("");
            }
      }
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reset Campaign?</AlertDialogTitle>
          <AlertDialogDescription className="py-4">
            This action cannot be undone. This will permanently delete all the
            leads in the campaign. Do you still wish to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="mr-2 bg-destructive text-white hover:bg-destructive/90"
            onClick={handleResetCampaign}
            disabled={isPending}
          >
            {isPending && <Loader2 className="animate-spin" />}
            Yes, Reset Campaign
          </AlertDialogAction>
          <AlertDialogCancel disabled={isPending}>No, Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
