import { Button } from "@/components/ui/button";
import PermissionTable from "./PermissionTable";

export default function Permission() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <span>
          <h3 className="font-semibold text-lg">Permission Manager</h3>
          <p>Click to select the permissions each role has access to</p>
        </span>
        <Button className="pry-btn gap-2">Save Changes</Button>
      </div>

      <PermissionTable />
    </div>
  );
}
