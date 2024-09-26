import { useFetchDashboardLeads } from "@/api/campaign";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export default function dashboardData() {
  const user = useContext(UserContext)?.user;
  const { isLoading, data: business } = useFetchDashboardLeads();
  const leads = business?.leads;
  const reachedLeads = leads?.filter(
    (lead: any) => lead.status.toLowerCase() === "contacted"
  );

  const convertedLeads = leads?.filter(
    (lead: any) => lead.contacted_status.toLowerCase() === "converted"
  );

  const rejectedLeads = leads?.filter(
    (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
  );

  return {
    user,
    isLoading,
    leads,
    reachedLeads,
    convertedLeads,
    rejectedLeads,
  };
}
