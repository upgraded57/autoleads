import UsersTable from "./UsersTable";
import { useFetchRoles } from "@/api/campaign";
import Loader from "@/components/ui/loader";

export default function Roles() {
  const { isLoading, data: users } = useFetchRoles();
  if (isLoading)
    return (
      <div className="w-full h-[200px] py-10 flex items-center justify-center bg-white rounded-2xl">
        <Loader />
      </div>
    );
  return (
    <>
      <div className="rounded-2xl bg-white p-4 mb-6">
        <div className="flex justify-between items-center mb-6">
          <span>
            <h3 className="font-semibold text-lg">Team Overview</h3>
            <p>
              This is a list of all team members currently onboarded on the
              platform
            </p>
          </span>
          <div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-xs">Access Granted</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <p className="text-xs">Access Revoked</p>
            </div>
          </div>
        </div>

        <div>
          <UsersTable users={users} />
        </div>
      </div>
    </>
  );
}
