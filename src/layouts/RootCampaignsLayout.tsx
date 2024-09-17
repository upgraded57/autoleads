import { Outlet } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import ProtectedRoutes from "@/utils/ProtectedRoutes";

export default function RootCampaignsLayout() {
  return (
    <div className="px-5">
      <UserProvider>
        <ProtectedRoutes>
          <Outlet />
        </ProtectedRoutes>
      </UserProvider>
    </div>
  );
}
