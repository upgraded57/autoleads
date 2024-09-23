import { UserProvider } from "@/context/UserContext";
import { Outlet } from "react-router-dom";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import logo from "@/assets/logo-alt.png";
import DashboardLinks from "@/layouts/DashboardLinks";
import { Suspense } from "react";
import Loader from "@/components/ui/loader";

export default function DashboardLayout() {
  return (
    <div className="flex items-start gap-5 py-3 px-5 h-screen overflow-y-hidden">
      <div className="basis-2/12 h-full bg-white rounded-xl p-4">
        <div className="w-[90%] mx-auto mb-10">
          <img src={logo} alt="autoleads" className="w-full" />
        </div>
        <DashboardLinks />
      </div>
      <div className="flex-1 h-full overflow-y-scroll pr-2">
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
    </div>
  );
}
