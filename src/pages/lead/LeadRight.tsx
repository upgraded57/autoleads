import { LeadProps } from "@/utils/Types.dto";
import moment from "moment";

export default function LeadRight({ lead }: LeadProps) {
  return (
    <div>
      <div className="p-4">
        <h3 className="font-semibold text-pry-clr text-xl">Lead Log</h3>
      </div>
      <div className="border-t-[1px] border-gray-200 p-4">
        <h4 className="text-pry-clr font-semibold opacity-60">Call</h4>
        <p className="text-xs my-3">
          {lead?.call_time
            ? moment(lead?.call_time).fromNow()
            : "Call time not available"}
        </p>
        <p className="text-xs">
          <strong>Duration: </strong>
          {lead?.call_duration
            ? lead?.call_duration + " seconds"
            : "not available"}
        </p>
      </div>
    </div>
  );
}
