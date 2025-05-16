import { useFetchLogs } from "@/api/campaign";
import { Link } from "react-router-dom";
import Loader from "@/components/ui/loader";
import EmptyState from "@/components/EmptyState";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";

export default function RecentActivities() {
  const { isLoading, data: logs } = useFetchLogs();

  return (
    <>
      <div className="flex items-center justify-between">
        <p>Recent Activities</p>
        <Link
          to="/app/notifications"
          className="text-accent-clr text-sm hover:underline"
        >
          See All
        </Link>
      </div>

      <div className="w-full mt-4 h-full">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader />
          </div>
        ) : logs.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs?.map((log: Record<string, string>, idx: number) => (
                <TableRow key={idx}>
                  <TableCell>{log?.action.toLowerCase()}</TableCell>
                  <TableCell className="min-w-[160px]">
                    {moment(log?.created_at).format("MMM D, YYYY / HH:MM")}
                  </TableCell>
                  <TableCell>{log.description.slice(0, 20) + "..."}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <EmptyState />
          </div>
        )}
      </div>
    </>
  );
}
