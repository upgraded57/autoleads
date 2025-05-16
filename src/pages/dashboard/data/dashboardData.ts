/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFetchDashboardLeads } from "@/api/campaign";
import { UserContext } from "@/context/UserContext";
import moment from "moment";
import { useContext } from "react";
interface DashboardDataProps {
  year: string | "";
}
export default function DashboardData({ year }: DashboardDataProps) {
  const user = useContext(UserContext)?.user;
  const { isLoading, data: business } = useFetchDashboardLeads();
  const leads = business?.leads;
  const yearLeads = leads?.filter(
    (lead: any) =>
      moment(lead.created).format("YYYY") ===
      (year ?? new Date().getFullYear.toString())
  );

  const calledLeads = yearLeads?.filter(
    (lead: any) => lead.status.toLowerCase() === "contacted"
  );

  const qualifiedLeads = yearLeads?.filter(
    (lead: any) => lead.contacted_status.toLowerCase() === "converted"
  );

  const answeredLeads = yearLeads?.filter(
    (lead: any) =>
      lead.contacted_status.toLowerCase() === "answered" ||
      lead.contacted_status.toLowerCase() === "converted"
  );

  const rejectedLeads = yearLeads?.filter(
    (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
  );

  return {
    leads,
    user,
    isLoading,
    yearLeads,
    calledLeads,
    answeredLeads,
    rejectedLeads,
    qualifiedLeads,
  };
}
