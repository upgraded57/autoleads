import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Input } from "./input";
import { useEffect, useState } from "react";
import { CampaignsTableProps } from "@/utils/Types.dto";

export default function CampaignTable({ data }: CampaignsTableProps) {
  const navigate = useNavigate();

  const [q, setQ] = useSearchParams({
    status: "",
    value: "",
    page: "",
  });

  const [leads, setLeads] = useState(data);

  const setFilter = (key: "status" | "value", newValue: string) => {
    const currentParams = Object.fromEntries(q.entries());
    const updatedParams = {
      ...currentParams,
      [key]: newValue,
    };
    setQ(updatedParams);
  };

  useEffect(() => {
    const filterLeads = () => {
      const filterValue = q.get("status");
      const searchValue = q.get("value");
      if (!filterValue && !searchValue) {
        const filteredData = data;
        setLeads(filteredData);
        return;
      }

      const filteredData = data?.filter((el) => {
        if (searchValue && !filterValue) {
          return (
            el.full_name.toLowerCase().includes(searchValue.toLowerCase()) ||
            el.email.toLowerCase().includes(searchValue.toLowerCase())
          );
        } else if (filterValue && !searchValue) {
          if (
            filterValue.toLowerCase() === "pending" ||
            filterValue.toLowerCase() === "contacted"
          ) {
            return el.status.toLowerCase() === filterValue.toLowerCase();
          } else {
            return (
              filterValue.toLowerCase() === el.contacted_status.toLowerCase()
            );
          }
        } else if (searchValue && filterValue) {
          return (
            filterValue.toLowerCase() === el.contacted_status.toLowerCase() &&
            (el.full_name.toLowerCase().includes(searchValue.toLowerCase()) ||
              el.email.toLowerCase().includes(searchValue.toLowerCase()))
          );
        }
      });

      setLeads(filteredData);
    };

    filterLeads();
  }, [q]);

  const ITEMS_PER_PAGE = 10;
  // Read pagination parameters from the URL
  const currentPage = parseInt(q.get("currentPage") || "1", 10);
  const itemsPerPage = parseInt(
    q.get("itemsPerPage") || `${ITEMS_PER_PAGE}`,
    10
  );

  // Calculate the start and end index for slicing the data array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Handle page change
  const handlePageChange = (newPage: any) => {
    setQ({ currentPage: newPage, itemsPerPage: itemsPerPage.toString() });
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-6">
        <div className="basis-1/4 flex items-center gap-2">
          <p className="">Status:</p>
          <Button variant="outline" className="p-0 h-auto">
            <select
              className="bg-transparent outline-none h-10 px-2"
              onChange={(e) => setFilter("status", e.target.value)}
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
              <option value="converted">Qualified</option>
              <option value="rejected">Rejected</option>
            </select>
          </Button>
        </div>

        <div className="basis-2/4 flex items-center justify-center gap-2">
          <Input
            type="text"
            placeholder="Search by lead name or email..."
            className="max-w-[300px]"
            onChange={(e) => setFilter("value", e.target.value)}
            defaultValue={q.get("value") || ""}
          />
        </div>
        <div className="basis-1/4 flex items-center justify-end gap-2">
          <Button className="pry-btn">Share</Button>
          <Button className="pry-btn">Export</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Feedback</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.slice(startIndex, endIndex).map((lead) => (
            <TableRow
              key={lead.id}
              onClick={() => navigate(`/app/lead/${lead.id}`)}
            >
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
                      : "bg-red-clr"
                  }`}
                >
                  {lead.contacted_status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-5 w-full flex items-center justify-center gap-3">
        {/* Page controls */}
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
          disabled={endIndex >= data.length}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
}
