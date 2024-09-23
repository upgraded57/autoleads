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
const Call = lazy(() => import("@/pages/follow-up/Call"));
const Text = lazy(() => import("@/pages/follow-up/Text"));
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

export const Routes = [
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/features",
    element: (
      <Suspense>
        <Features />
      </Suspense>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Suspense>
        <Pricing />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/auth",
    element: (
      <Suspense>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: "/auth/verify-otp",
    element: (
      <Suspense>
        <VerifyOtp />
      </Suspense>
    ),
  },
  {
    path: "/app",
    element: <DashboardLayout />,
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
    element: <RootCampaignsLayout />,
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
      <Suspense>
        <UserForms />
      </Suspense>
    ),
  },
  {
    path: "guest/campaigns/:campaign_id",
    element: (
      <Suspense>
        <GuestCampaign />
      </Suspense>
    ),
  },
  {
    path: "guest/campaigns/:campaign_id/lead/:lead_id",
    element: (
      <Suspense>
        <Lead type="guest" />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
  },
];
