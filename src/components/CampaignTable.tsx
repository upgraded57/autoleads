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
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  SetURLSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Input } from "./ui/input";
import { useEffect, useRef, useState } from "react";
import { CampaignTableProps, LeadProps } from "@/utils/Types.dto";
import { exportFile } from "@/utils/Export";
import { CampaignShareModal } from "./CampaignShareModal";
import { IoPlayCircle, IoStopCircle } from "react-icons/io5";
import toast from "react-hot-toast";
import moment from "moment";
import { updateLeadQuality } from "@/api/campaign";
import { useQueryClient } from "@tanstack/react-query";
import { DateRange } from "react-day-picker";
import { X } from "lucide-react";
import { IoIosClose } from "react-icons/io";

const ITEMS_PER_PAGE = 10;

export default function CampaignTable({
  data,
  campaign_id,
  campaign_name,
  guest,
}: CampaignTableProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState("");

  const [q, setQ] = useSearchParams();

  const [filterModal, setFilterModal] = useState(false);

  const [filteredLeads, setFilteredLeads] = useState(data);

  // Function to set filter parameters
  const setFilter = (
    key: "status" | "value" | "quality" | "date",
    newValue: string
  ) => {
    const currentParams = Object.fromEntries(q.entries());
    const updatedParams = {
      ...currentParams,
      [key]: newValue,
    };
    setQ(updatedParams);
  };

  useEffect(() => {
    const filterLeads = () => {
      const status = q.get("status");
      const quality = q.get("quality");
      const searchValue = q.get("value");

      let filteredData = data;

      if (status) {
        filteredData = filteredData.filter((el) => {
          if (
            status.toLowerCase() === "pending" ||
            status.toLowerCase() === "contacted"
          ) {
            return el.status.toLowerCase() === status.toLowerCase();
          } else {
            return status.toLowerCase() === el.contacted_status.toLowerCase();
          }
        });
      }

      if (quality) {
        filteredData = filteredData.filter((el) =>
          el.lead_quality?.toLowerCase().includes(quality.toLowerCase())
        );
      }

      if (searchValue) {
        filteredData = filteredData.filter((el) => {
          return (
            el.full_name.toLowerCase().includes(searchValue.toLowerCase()) ||
            el.email.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
      }

      setFilteredLeads(filteredData);
    };

    filterLeads();
  }, [q, data]);

  // Read pagination parameters from the URL
  const currentPage = parseInt(q.get("currentPage") || "1", 10);

  // Calculate the start and end index for slicing the filtered data array
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setQ({
      ...Object.fromEntries(q.entries()),
      currentPage: newPage.toString(),
    });
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredLeads.length / ITEMS_PER_PAGE);

  // Invite user to view campaign
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  const handleNavigate = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    lead: LeadProps["lead"]
  ) => {
    const target = e.target as HTMLTableRowElement;

    if (target.className.includes("playPause")) return;
    else {
      if (guest) {
        navigate(`/guest/campaigns/${campaign_id}/lead/${lead.id}`);
      } else {
        navigate(`/app/lead/${lead.id}`);
      }
    }
  };

  const audio = useRef<HTMLAudioElement>(new Audio());

  const handlePlayPause = (lead: LeadProps["lead"]) => {
    if (!lead.recording_url) return;

    // Stop currently playing audio
    if (isPlaying) {
      stopAudio();
    }

    if (currentAudioUrl === lead.recording_url) {
      audio.current.pause();
      setCurrentAudioUrl("");
      return;
    }

    audio.current.src = lead.recording_url;
    const toastId = toast.loading("Loading recording...", {
      id: "audioToast",
    });

    audio.current.oncanplaythrough = () => {
      toast.success("Now playing recording", { id: toastId });
      audio.current.play();
    };

    audio.current.onplaying = () => {
      setIsPlaying(true);
      setCurrentAudioUrl(lead.recording_url!);
    };

    audio.current.onended = () => {
      setIsPlaying(false);
      setCurrentAudioUrl("");
    };
  };

  const stopAudio = () => {
    audio.current.pause();
    audio.current.currentTime = 0;
    audio.current.src = "";
    setIsPlaying(false);
    setCurrentAudioUrl("");
  };

  const [isUpdatingQuality, setIsUpdatingQuality] = useState(false);

  const handleUpdateLeadQuality = (val: string, id: string) => {
    updateLeadQuality(val, setIsUpdatingQuality, id, queryClient, campaign_id);
  };
  return (
    <>
      <div>
        {/* Table Head */}
        <div className="w-full flex justify-between items-center mb-6">
          {/* Filter Modal Toggler */}
          <div className="basis-1/4 flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setFilterModal(true)}
              className={`${
                q.size > 0
                  ? "bg-accent-clr text-white border-none hover:bg-accent-clr hover:text-white"
                  : ""
              }`}
            >
              Filters {q.size > 0 && `(${q.size})`}
            </Button>
            {q.size > 0 && (
              <Button
                variant="ghost"
                className="aspect-square hover:bg-destructive/10 hover:text-destructive"
                title="Clear Filters"
                onClick={() => setQ({})}
              >
                <X size={16} />
              </Button>
            )}
          </div>

          {/* Search Input */}
          <div className="basis-2/4 flex items-center justify-center gap-2">
            <Input
              type="text"
              placeholder="Search by lead name or email..."
              className="max-w-[300px]"
              onChange={(e) => setFilter("value", e.target.value)}
              defaultValue={q.get("value") || ""}
              value={q.get("value") || ""}
            />
          </div>
          {/* Share & Export Btns */}
          <div className="basis-1/4 flex items-center justify-end gap-2">
            {!guest && (
              <Button
                className="pry-btn"
                onClick={() => setInviteModalOpen(true)}
              >
                Share
              </Button>
            )}
            {!guest && (
              <Button
                className="pry-btn"
                onClick={() => exportFile(data, campaign_name)}
              >
                Export
              </Button>
            )}
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[150px]">Date Contacted</TableHead>
              <TableHead className="min-w-[200px]">Full Name</TableHead>
              <TableHead className="min-w-[200px]">Email Address</TableHead>
              <TableHead className="min-w-[150px]">Phone Number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Feedback</TableHead>
              <TableHead>Lead Quality</TableHead>
              <TableHead>Recording</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.slice(startIndex, endIndex).length > 0 ? (
              filteredLeads.slice(startIndex, endIndex).map((lead) => (
                <TableRow
                  key={lead.id}
                  onClick={(e) => handleNavigate(e, lead)}
                >
                  <TableCell className="py-4">
                    {lead.last_called
                      ? moment(lead.last_called).format("DD/MM/YYYY")
                      : "N/A"}
                  </TableCell>
                  <TableCell>{lead.full_name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.phone_number}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-xs rounded-md text-white ${
                        lead.status.toLowerCase() === "pending"
                          ? "bg-gray-200"
                          : "bg-yellow-clr"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-xs rounded-md text-white ${
                        lead.contacted_status.toLowerCase() === "pending"
                          ? "bg-gray-200"
                          : lead.contacted_status.toLowerCase() === "converted"
                          ? "bg-green-clr"
                          : lead.contacted_status.toLowerCase() === "answered"
                          ? "bg-yellow-clr"
                          : "bg-red-clr"
                      }`}
                    >
                      {lead.contacted_status}
                    </span>
                  </TableCell>
                  <TableCell className="playPause">
                    <Select
                      onValueChange={(val) =>
                        handleUpdateLeadQuality(val, lead.id)
                      }
                      disabled={isUpdatingQuality}
                    >
                      <SelectTrigger
                        size="sm"
                        className="w-[120px] shadow-none"
                      >
                        <SelectValue
                          placeholder={lead.lead_quality || "Pending"}
                        />
                      </SelectTrigger>
                      <SelectContent className="playPause">
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="Good">Good Lead</SelectItem>
                        <SelectItem value="Bad">Bad Lead</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    {lead.recording_url ? (
                      <span
                        className="playPause cursor-pointer"
                        onClick={() => {
                          handlePlayPause(lead);
                        }}
                      >
                        {isPlaying && currentAudioUrl === lead.recording_url ? (
                          <IoStopCircle className=" text-2xl text-pry-clr pointer-events-none" />
                        ) : (
                          <IoPlayCircle className=" text-2xl text-accent-clr pointer-events-none" />
                        )}
                      </span>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={8} className="text-center h-[300px]">
                  <span className="block mb-4">
                    Your filter did not return any lead!
                  </span>
                  <Button
                    className="hover:bg-destructive/10 text-destructive hover:text-destructive border-destructive"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQ({});
                    }}
                  >
                    Clear Filters
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Page controls */}
        <div className="mt-5 w-full flex items-center justify-center gap-3">
          <Button
            size="xs"
            variant="secondary"
            title="Previous Page"
            disabled={currentPage <= 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <FaChevronLeft />
          </Button>

          <p className="text-sm">
            Page {currentPage} of {totalPages}
          </p>

          <Button
            size="xs"
            title="Next Page"
            variant="secondary"
            disabled={endIndex >= data.length || totalPages === 1}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <FaChevronRight />
          </Button>
        </div>
      </div>

      <CampaignShareModal
        campaign_id={campaign_id}
        inviteModalOpen={inviteModalOpen}
        setInviteModalOpen={setInviteModalOpen}
      />

      <FiltersModal
        open={filterModal}
        setOpen={setFilterModal}
        setFilter={setFilter}
        q={q}
        setQ={setQ}
      />
    </>
  );
}

const FiltersModal = ({
  open,
  setOpen,
  setFilter,
  q,
  setQ,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: (
    key: "status" | "value" | "quality" | "date",
    newValue: string
  ) => void;
  q: URLSearchParams;
  setQ: SetURLSearchParams;
}) => {
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <>
      <AlertDialog open={open} onOpenChange={() => setOpen(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center justify-between">
              <AlertDialogTitle>Filters</AlertDialogTitle>
              <AlertDialogCancel className="p-0 h-auto rounded-full">
                <IoIosClose className="text-2xl hover:text-red-500" />
              </AlertDialogCancel>
            </div>
            <AlertDialogDescription />
          </AlertDialogHeader>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <p className="text-sm basis-1/3">Contacted Status:</p>

              <Select onValueChange={(val) => setFilter("status", val)}>
                <SelectTrigger className="w-[150px]" size="sm">
                  <SelectValue placeholder={q.get("status") || "Status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="converted">Qualified</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm basis-1/3">Date Contacted:</p>
              <Select onValueChange={(val) => setFilter("date", val)}>
                <SelectTrigger className="w-[150px]" size="sm">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this_week">This Week</SelectItem>
                  <SelectItem value="this_month">This Month</SelectItem>
                  <SelectItem value="last_month">Last Month</SelectItem>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="sm" variant="ghost">
                    Custom
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="m-0">
                  <Calendar mode="range" selected={date} onSelect={setDate} />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm basis-1/3">Lead Quality:</p>
              <Select
                onValueChange={(val) => setFilter("quality", val)}
                name="quality"
              >
                <SelectTrigger className="w-[150px]" size="sm">
                  <SelectValue
                    placeholder={
                      q.get("quality")
                        ? q.get("quality") + " lead"
                        : "Lead Quality"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="good">Good Lead</SelectItem>
                  <SelectItem value="bad">Bad Lead</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            className="w-max mt-4 text-destructive hover:bg-destructive/10 hover:text-destructive"
            variant="ghost"
            size="sm"
            onClick={() => setQ({})}
          >
            Clear All Filters
          </Button>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
