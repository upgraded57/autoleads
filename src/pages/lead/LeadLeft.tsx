import { LeadProps } from "@/utils/Types.dto";

export default function LeadLeft({ lead }: LeadProps) {
  const firstName = lead?.full_name.split(" ")[0];
  const lastName = lead?.full_name.split(" ")[1];

  return (
    <>
      <div className="w-20 aspect-square mx-auto rounded-full bg-pry-clr flex items-center justify-center text-white text-lg uppercase">
        {(firstName ? firstName[0] : "") + (lastName ? lastName[0] : "")}
      </div>
      <div className="flex items-center gap-3 my-10">
        <p className="font-semibold text-sm">Status:</p>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 text-xs rounded-md text-white ${
              lead.status.toLowerCase() === "pending"
                ? "bg-gray-200"
                : "bg-yellow-clr"
            }`}
          >
            {lead.status}
          </span>
          <span
            className={`px-2 py-1 text-xs rounded-md text-white ${
              lead.contacted_status.toLowerCase() === "pending"
                ? "bg-gray-200"
                : lead.contacted_status.toLowerCase() === "converted"
                ? "bg-green-clr"
                : "bg-red-clr"
            }`}
          >
            {lead.contacted_status}
          </span>
        </div>
      </div>

      <div className="border-t-[1px] border-gray-200 py-2 flex items-center gap-3">
        <p>Name:</p>
        <p className="font-semibold">{lead?.full_name}</p>
      </div>
      <div className="border-t-[1px] border-gray-200 py-2 flex items-center gap-3">
        <p>Email:</p>
        <p className="font-semibold">{lead?.email}</p>
      </div>
      <div className="border-t-[1px] border-gray-200 pt-2 flex items-center gap-3">
        <p>Phone:</p>
        <p className="font-semibold">{lead?.phone_number}</p>
      </div>
    </>
  );
}
