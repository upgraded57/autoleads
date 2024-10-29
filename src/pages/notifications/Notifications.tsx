import LayoutTop from "@/components/LayoutTop";

import { Link } from "react-router-dom";
import { useFetchLogs } from "@/api/campaign";
import moment from "moment";
import EmptyState from "@/components/EmptyState";

interface LogProps {
  action: "CREATION" | "MODFICATION" | "LAUNCH";
  business: string;
  campaign: string;
  created_at: string;
  description: string;
  id: string;
  user: string;
}
export default function Notifications() {
  const { data: logs } = useFetchLogs();
  return (
    <>
      <LayoutTop
        title="Notifications"
        subtitle="All your notifications in one place"
      />

      {logs.length > 0 ? (
        logs?.map((log: LogProps, idx: number) => (
          <div key={idx} className="w-full p-4 bg-white mb-4 rounded-2xl">
            <div className="flex gap-2 items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  log.action.split("")[0] === "L"
                    ? "bg-green-600"
                    : log.action.split("")[0] === "C"
                    ? "bg-orange-400"
                    : "bg-purple-400"
                }`}
              >
                {log.action.split("")[0]}
              </div>
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
        ))
      ) : (
        <EmptyState />
      )}
    </>
  );
}
