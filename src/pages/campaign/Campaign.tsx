import LayoutTop from "@/components/LayoutTop";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import CampaignTable from "@/components/CampaignTable";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchCampaign } from "@/api/campaign";
import Loader from "@/components/ui/loader";
import { FaChevronLeft } from "react-icons/fa";
import EmptyState from "@/components/EmptyState";

export default function Campaign() {
  const navigate = useNavigate();
  const { campaign_id } = useParams();
  const { isLoading, data } = useFetchCampaign(campaign_id!);

  const calledLeads =
    data?.leads &&
    data?.leads.filter((el: any) => {
      return el.status.toLowerCase() === "contacted";
    });

  const qualifiedLeads =
    data?.leads &&
    data?.leads.filter((el: any) => {
      return el.contacted_status.toLowerCase() === "converted";
    });

  const rejectedLeads =
    data?.leads &&
    data?.leads.filter((el: any) => {
      return el.contacted_status.toLowerCase() === "rejected";
    });

  return (
    <>
      <LayoutTop
        title={data?.campaign_name || "Campaign Name"}
        button={
          <Button
            variant="ghost"
            size="sm"
            className="border-grey-clr gap-1"
            onClick={() => navigate(-1)}
          >
            <span className="p-1 rounded-full bg-white">
              <FaChevronLeft />
            </span>
            Back
          </Button>
        }
      />
      {isLoading ? (
        <div className="w-full h-[300px] flex items-center justify-center">
          <Loader />
        </div>
      ) : data?.leads?.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card title="Total Leads" qty={data?.leads.length || 0} />
            <Card title="Total Called" qty={calledLeads?.length || 0} />
            <Card title="Total Qualified" qty={qualifiedLeads?.length || 0} />
            <Card title="Total Rejected" qty={rejectedLeads?.length || 0} />
          </div>
          <div className="p-4 rounded-2xl bg-white">
            <CampaignTable
              campaign_id={campaign_id ?? ""}
              data={data?.leads}
              campaign_name={data?.campaign_name}
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card title="Total Leads" qty={0} />
            <Card title="Total Called" qty={0} />
            <Card title="Total Qualified" qty={0} />
            <Card title="Total Rejected" qty={0} />
          </div>
          <EmptyState />
        </>
      )}
    </>
  );
}
