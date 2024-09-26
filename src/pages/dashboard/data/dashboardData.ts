import { useFetchDashboardLeads } from "@/api/campaign";
import { UserContext } from "@/context/UserContext";
import moment from "moment";
import { useContext } from "react";
interface DashboardDataProps {
  year: string | "";
}
export default function dashboardData({ year }: DashboardDataProps) {
  const user = useContext(UserContext)?.user;
  const { isLoading, data: business } = useFetchDashboardLeads();
  const leads = business?.leads;
  const yearLeads = leads?.filter(
    (lead: any) =>
      moment(lead.created).format("YYYY") ===
      (year ?? new Date().getFullYear.toString())
  );

  const reachedLeads = yearLeads?.filter(
    (lead: any) => lead.status.toLowerCase() === "contacted"
  );

  const convertedLeads = yearLeads?.filter(
    (lead: any) => lead.contacted_status.toLowerCase() === "converted"
  );

  const rejectedLeads = yearLeads?.filter(
    (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
  );

  return {
    leads,
    user,
    isLoading,
    yearLeads,
    reachedLeads,
    convertedLeads,
    rejectedLeads,
  };
}
