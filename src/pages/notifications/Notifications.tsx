import LayoutTop from "@/components/LayoutTop";

import { Link } from "react-router-dom";
import { useFetchLogs } from "@/api/campaign";
import moment from "moment";

export default function Notifications() {
  const { data: logs } = useFetchLogs();
  console.log(logs);
  return (
    <>
      <LayoutTop
        title="Notifications"
        subtitle="All your notifications in one place"
      />

      {logs?.map((log: any, idx: number) => (
        <div key={idx} className="w-full p-4 bg-white mb-4 rounded-2xl">
          <div className="flex gap-2 items-center">
            <div className="w-16 h-16 rounded-full bg-green-400"></div>
            <div className="flex flex-col gap-1">
              <small className="text-xs text-gray-400">
                {moment(log.created_at).fromNow()}
              </small>
              <h1 className="text-xl leading-none">{log.description}</h1>
              <small className="text-xs text-gray-400">
                Click{" "}
                <Link
                  to={`/app/campaigns/${log.campaign}`}
                  className="text-accent-clr font-semibold cursor-pointer hover:underline"
                >
                  here
                </Link>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
