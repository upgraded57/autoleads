import { Outlet } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import ProtectedRoutes from "@/utils/ProtectedRoutes";
import { Suspense } from "react";
import { SuspenseFallback } from "@/utils/Routes";

export default function RootCampaignsLayout() {
  return (
    <div className="px-5">
      <UserProvider>
        <ProtectedRoutes>
          <Suspense fallback={<SuspenseFallback />}>
            <Outlet />
          </Suspense>
        </ProtectedRoutes>
      </UserProvider>
    </div>
  );
}
