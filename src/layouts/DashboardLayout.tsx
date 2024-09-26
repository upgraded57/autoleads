import { UserProvider } from "@/context/UserContext";
import { Outlet } from "react-router-dom";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import logo from "@/assets/logo-alt.png";
import logoSm from "@/assets/logo-sm.png";
import DashboardLinks from "@/layouts/DashboardLinks";

export default function DashboardLayout() {
  return (
    <div className="flex items-start gap-5 py-3 px-5 h-screen overflow-y-hidden">
      <div className="lg:basis-2/12 h-full bg-white rounded-xl p-4">
        <div className="w-6 lg:w-[90%] mx-auto mb-10">
          <img src={logo} alt="autoleads" className="hidden lg:block w-full" />
          <img src={logoSm} alt="autoleads" className="lg:hidden w-full" />
        </div>
        <DashboardLinks />
      </div>
      <div className="flex-1 h-full overflow-y-scroll pr-2">
        <UserProvider>
          <ProtectedRoutes>
            <Outlet />
          </ProtectedRoutes>
        </UserProvider>
      </div>
    </div>
  );
}
