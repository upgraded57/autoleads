import { Outlet } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import ProtectedRoutes from "@/utils/ProtectedRoutes";
import { Suspense } from "react";
import Loader from "@/components/ui/loader";

export default function RootCampaignsLayout() {
  return (
    <div className="px-5">
      <UserProvider>
        <ProtectedRoutes>
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <Loader />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ProtectedRoutes>
      </UserProvider>
    </div>
  );
}
