import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import Campaigns from "@/pages/campaigns/Campaigns";
import User from "@/pages/user/User";
import Settings from "@/pages/settings/Settings";
import Support from "@/pages/support/Support";
import Notifications from "@/pages/notifications/Notifications";
import Auth from "@/pages/auth/Auth";
import Campaign from "@/pages/campaign/Campaign";
import Lead from "@/pages/lead/Lead";
import NewCampaign from "@/pages/new-campaign/NewCampaign";
import FollowUp from "@/pages/follow-up/FollowUp";
import Call from "@/pages/follow-up/Call";
import Text from "@/pages/follow-up/Text";
import FormWizard from "@/pages/form-wizard/FormWizard";
import UserForms from "@/pages/user-forms/UserForms";
import VerifyOtp from "@/pages/auth/VerifyOtp";
import GuestCampaign from "@/pages/guest/GuestCampaign";
import Features from "@/pages/Features/Features";
import Pricing from "@/pages/Pricing/Pricing";
import About from "@/pages/About/About";
import NotFound from "@/pages/NotFound/NotFound";
import RootCampaignsLayout from "@/layouts/RootCampaignsLayout";
import Home from "./../pages/Home/Home";

export const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/auth/verify-otp",
    element: <VerifyOtp />,
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
    element: <UserForms />,
  },
  {
    path: "guest/campaigns/:campaign_id",
    element: <GuestCampaign />,
  },
  {
    path: "guest/campaigns/:campaign_id/lead/:lead_id",
    element: <Lead type="guest" />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
