import LayoutTop from "@/components/LayoutTop";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import CampaignsTable from "@/components/CampaignsTable";
import { useFetchCampaigns } from "@/api/campaign";
import Loader from "@/components/ui/loader";
import { Link } from "react-router-dom";
import EmptyState from "@/components/EmptyState";

export default function Campaigns() {
  const { isLoading, data } = useFetchCampaigns();

  return (
    <>
      <LayoutTop
        title="Campaigns"
        subtitle="All your campaigns in one place"
        button={
          <Link to="/campaigns/new">
            <Button className="pry-btn gap-1">
              <FaPlus /> Add New Campaign
            </Button>
          </Link>
        }
      />
      <div className="p-4 rounded-2xl bg-white">
        {isLoading ? (
          <div className="w-full h-[300px] flex items-center justify-center">
            <Loader />
          </div>
        ) : data?.length > 0 ? (
          <CampaignsTable data={data} />
        ) : (
          <EmptyState />
        )}
      </div>
    </>
  );
}
