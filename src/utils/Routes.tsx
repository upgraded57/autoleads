import DashboardLayout from "@/layouts/DashboardLayout";
import Home from "@/pages/home/Home";
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

export const Routes = [
  {
    path: "/",
    element: <Home />,
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
    path: "/campaigns/new",
    element: <NewCampaign />,
  },
  {
    path: "/campaigns/new/:campaign_id",
    element: <FollowUp />,
  },
  {
    path: "/campaigns/new/:campaign_id/:type/call",
    element: <Call />,
  },
  {
    path: "/campaigns/new/:campaign_id/:type/text",
    element: <Text />,
  },
  {
    path: "/campaigns/new/form/:campaign_id/wizard",
    element: <FormWizard />,
  },
  {
    path: "forms/:campaign_id",
    element: <UserForms />,
  },
];
