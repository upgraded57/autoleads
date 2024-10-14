import LayoutTop from "@/components/LayoutTop";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useFetchLeadInfo } from "@/api/campaign";
import Loader from "@/components/ui/loader";
import LeadLeft from "./LeadLeft";
import LeadCenter from "./LeadCenter";
import LeadRight from "./LeadRight";
import EmptyState from "@/components/EmptyState";

export default function Lead() {
  const navigate = useNavigate();
  const { lead_id } = useParams();
  const { isLoading, data } = useFetchLeadInfo(lead_id!);

  return (
    <>
      <LayoutTop
        height="short"
        title="Lead Information"
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
      <div className="p-4 rounded-2xl bg-white">
        {isLoading ? (
          <div className="w-full h-[300px] flex items-center justify-center">
            <Loader />
          </div>
        ) : data && data.full_name ? (
          <div className="flex items-start gap-5">
            <div className="basis-[35%]  border-[1px] border-gray-200 rounded-lg p-4">
              <LeadLeft lead={data} />
            </div>
            <div className="basis-[35%]  border-[1px] border-gray-200 rounded-lg">
              <LeadCenter lead={data} />
            </div>
            <div className="basis-[30%]  border-[1px] border-gray-200 rounded-lg">
              <LeadRight lead={data} />
            </div>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </>
  );
}
