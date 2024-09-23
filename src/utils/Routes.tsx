import Loader from "@/components/ui/loader";
import { lazy, Suspense } from "react";

const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));
const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));
const Campaigns = lazy(() => import("@/pages/campaigns/Campaigns"));
const User = lazy(() => import("@/pages/user/User"));
const Settings = lazy(() => import("@/pages/settings/Settings"));
const Support = lazy(() => import("@/pages/support/Support"));
const Notifications = lazy(() => import("@/pages/notifications/Notifications"));
const Auth = lazy(() => import("@/pages/auth/Auth"));
const Campaign = lazy(() => import("@/pages/campaign/Campaign"));
const Lead = lazy(() => import("@/pages/lead/Lead"));
const NewCampaign = lazy(() => import("@/pages/new-campaign/NewCampaign"));
const FollowUp = lazy(() => import("@/pages/follow-up/FollowUp"));
const TextToSpeech = lazy(() => import("@/pages/follow-up/TextToSpeech"));
const Call = lazy(() => import("@/pages/follow-up/Call"));
const Text = lazy(() => import("@/pages/follow-up/Text"));
const ContentType = lazy(() => import("@/pages/content-type/ContentType"));
const FormWizard = lazy(() => import("@/pages/form-wizard/FormWizard"));
const UserForms = lazy(() => import("@/pages/user-forms/UserForms"));
const VerifyOtp = lazy(() => import("@/pages/auth/VerifyOtp"));
const GuestCampaign = lazy(() => import("@/pages/guest/GuestCampaign"));
const Features = lazy(() => import("@/pages/features/Features"));
const Pricing = lazy(() => import("@/pages/pricing/Pricing"));
const About = lazy(() => import("@/pages/about/About"));
const NotFound = lazy(() => import("@/pages/not-found/NotFound"));
const RootCampaignsLayout = lazy(() => import("@/layouts/RootCampaignsLayout"));
const Home = lazy(() => import("@/pages/home/Home"));

export const SuspenseFallback = () => {
  return (
    <div className="w-full h-full min-h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
};

export const Routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/features",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <Features />
      </Suspense>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <Pricing />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: "/auth/verify-otp",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <VerifyOtp />
      </Suspense>
    ),
  },
  {
    path: "/app",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "campaigns",
        element: <Campaigns />,
      },
      {
        path: "campaigns/:campaign_id",
        element: <Campaign />,
      },
      {
        path: "lead/:lead_id",
        element: <Lead />,
      },
      {
        path: "account",
        element: <User />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "/campaigns",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <RootCampaignsLayout />
      </Suspense>
    ),
    children: [
      {
        path: "new",
        element: <NewCampaign />,
      },
      {
        path: "new/:campaign_id",
        element: <FollowUp />,
      },
      {
        path: "new/:campaign_id/content-type",
        element: <ContentType />,
      },
      {
        path: "new/:campaign_id/tts/:type/call",
        element: <TextToSpeech />,
      },
      {
        path: "new/:campaign_id/:type/call",
        element: <Call />,
      },
      {
        path: "new/:campaign_id/:type/text",
        element: <Text />,
      },
      {
        path: "new/form/:campaign_id/wizard",
        element: <FormWizard />,
      },
    ],
  },

  {
    path: "forms/:campaign_id",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <UserForms />
      </Suspense>
    ),
  },
  {
    path: "guest/campaigns/:campaign_id",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <GuestCampaign />
      </Suspense>
    ),
  },
  {
    path: "guest/campaigns/:campaign_id/lead/:lead_id",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <Lead type="guest" />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <NotFound />
      </Suspense>
    ),
  },
];
