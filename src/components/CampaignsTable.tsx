import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { useNavigate, useSearchParams } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import { launchCampaign } from "@/api/campaign";
import { HiDotsVertical } from "react-icons/hi";
import { copyCodeAsInline, copyCodeAsPopup } from "@/utils/Codes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CampaignsTableProps {
  data: {
    converted: number;
    created: string;
    id: string;
    leads: number;
    title: string;
    type_of: string;
  }[];
}

export default function CampaignsTable({ data }: CampaignsTableProps) {
  const [q, setQ] = useSearchParams({
    type: "",
    value: "",
  });
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
  }, [q]);

  const viewCampaign = (id: string) => {
    navigate(`/app/campaigns/${id}`);
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-6">
        <div className="basis-1/4 flex items-center gap-2">
          <p className="">Filter by:</p>
          <Button variant="outline" className="p-0 h-auto">
            <select
              className="bg-transparent outline-none h-10 px-2"
              onChange={(e) => setFilter("type", e.target.value)}
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
                {campaign.converted}
              </TableCell>
              <TableCell onClick={() => viewCampaign(campaign.id)}>
                {campaign.converted}
              </TableCell>
              <TableCell>
                {campaign.type_of.toLowerCase() === "upload" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs h-auto py-1 px-3"
                    onClick={() => launchCampaign(campaign.id)}
                  >
                    Launch Campaign
                  </Button>
                ) : (
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        size="icon"
                        className="h-auto p-2 w-auto text-inherit hover:bg-gray-200"
                      >
                        <HiDotsVertical />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto flex flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full text-xs h-auto py-1 px-3"
                        onClick={() => copyCodeAsPopup(campaign.id)}
                      >
                        Copy code as popup
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full text-xs h-auto py-1 px-3"
                        onClick={() => copyCodeAsInline(campaign.id)}
                      >
                        Copy code inline form
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full text-xs h-auto py-1 px-3"
                      >
                        Edit form
                      </Button>
                    </PopoverContent>
                  </Popover>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
