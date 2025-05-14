import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import { HiDotsVertical } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import toast from "react-hot-toast";
import { axiosInstance } from "@/api/axiosInstance";
import { useQueryClient } from "@tanstack/react-query";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";

interface UserProps {
  users: {
    access_code: string;
    campaign: string;
    email: string;
    has_access: boolean;
    id: string;
    link: string;
    sent_time: string;
  }[];
}
export default function UsersTable({ users }: UserProps) {
  const queryClient = useQueryClient();

  const copyLink = (link: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(link)
        .then(() =>
          toast.success("Link copied to clipboard", { id: "copyToast" })
        );
    }
  };

  const revokeAccess = async (id: string) => {
    const business = localStorage.getItem("business_id") || "";
    const businessId = JSON.parse(business);
    const toastId = toast.loading("Revoking Access", { id: "revokeToast" });
    await axiosInstance
      .put(`/revoke-access/${id}/`)
      .then(() => {
        toast.success("Campaign access revoked", { id: toastId });
        // Invalidate query
        queryClient.invalidateQueries({
          queryKey: ["Roles", businessId],
        });
      })
      .catch(() => {
        toast.error("Something went wrong. Please retry", { id: toastId });
      });
  };
  return users?.length > 0 ? (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Campaign</TableHead>
          <TableHead>Sent Time</TableHead>
          <TableHead>Access Code</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, idx) => (
          <TableRow key={idx}>
            <TableCell>
              <div
                className={`w-2 h-2 rounded-full ${
                  user.has_access ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.campaign}</TableCell>
            <TableCell>
              {moment(user.sent_time).format("DD MMM YYYY, HH:MMa")}
            </TableCell>
            <TableCell>{user.access_code}</TableCell>
            <TableCell>
              <Popover>
                <PopoverTrigger className="h-auto p-2 w-auto rounded-md text-inherit hover:bg-gray-200">
                  <HiDotsVertical />
                </PopoverTrigger>
                <PopoverContent className="bg-white rounded-md p-2 flex flex-col gap-2 border-[1px] border-neutral-light-clr max-w-max">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-normal cursor-pointer"
                    onClick={() => copyLink(user.link)}
                  >
                    Copy Link
                  </Button>
                  {user.has_access && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-normal cursor-pointer hover:bg-red-600 hover:text-white hover:border-transparent justify-center"
                      onClick={() => revokeAccess(user.id)}
                    >
                      Revoke Access
                    </Button>
                  )}
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <EmptyState />
  );
}
