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
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import moment from "moment";
import { DashboardTableProps } from "@/utils/Types.dto";
import EmptyState from "./EmptyState";

const ITEMS_PER_PAGE = 10;

export default function DashboardTable({ data, year }: DashboardTableProps) {
  const [yearData, setYearData] = useState(data);
  useEffect(() => {
    const newYearData = data?.filter(
      (el) => moment(el.created).format("YYYY") === year
    );
    setYearData(newYearData);
  }, [year]);

  const navigate = useNavigate();

  const [q, setQ] = useSearchParams({
    status: "",
    value: "",
    currentPage: "1", // Ensure default value for pagination
    itemsPerPage: ITEMS_PER_PAGE.toString(),
  });

  const [filteredLeads, setFilteredLeads] = useState(yearData);

  // Function to set filter parameters
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

      let filteredData = yearData;

      if (filterValue) {
        filteredData = filteredData?.filter((el) => {
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
        });
      }

      if (searchValue) {
        filteredData = filteredData?.filter((el) => {
          return (
            el.full_name.toLowerCase().includes(searchValue.toLowerCase()) ||
            el.email.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
      }

      setFilteredLeads(filteredData);
    };

    filterLeads();
  }, [q, yearData]);

  // Read pagination parameters from the URL
  const currentPage = parseInt(q.get("currentPage") || "1", 10);
  const itemsPerPage = parseInt(
    q.get("itemsPerPage") || `${ITEMS_PER_PAGE}`,
    10
  );

  // Calculate the start and end index for slicing the filtered data array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setQ({
      ...Object.fromEntries(q.entries()),
      currentPage: newPage.toString(),
    });
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredLeads?.length / itemsPerPage);

  return (
    <>
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
          <div className="basis-1/4 flex justify-end items-center gap-2">
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
              disabled={endIndex >= yearData?.length}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <FaChevronRight />
            </Button>
          </div>
        </div>
        {filteredLeads?.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date Contacted</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Feedback</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.slice(startIndex, endIndex).map((lead) => (
                <TableRow
                  key={lead.id}
                  onClick={() => navigate(`/app/lead/${lead.id}`)}
                >
                  <TableCell>
                    {lead.last_called
                      ? moment(lead.last_called).format("DD/MM/YYYY")
                      : "N/A"}
                  </TableCell>
                  <TableCell>{lead.full_name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.campaign_name}</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <EmptyState />
        )}
      </div>
    </>
  );
}
