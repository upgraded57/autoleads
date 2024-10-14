import { SuspenseFallback } from "@/utils/Routes";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Outlet />
    </Suspense>
  );
}
