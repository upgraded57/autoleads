import LayoutTop from "@/components/LayoutTop";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Card from "@/components/Card";
import Loader from "@/components/ui/loader";
import dashboardData from "./data/dashboardData";
import FollowUpChart from "@/components/FollowUpChart";
import RecentActivities from "@/components/RecentActivities";
import { useState } from "react";
import DashboardTable from "@/components/DashboardTable";

export default function Dashboard() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<string>(currentYear.toString());

  const yearBefore = currentYear - 1;
  const twoYearsBefore = currentYear - 2;

  const {
    user,
    isLoading,
    leads,
    yearLeads,
    reachedLeads,
    convertedLeads,
    answeredLeads,
  } = dashboardData({ year });

  if (isLoading)
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  return (
    <>
      <LayoutTop
        title="Dashboard"
        subtitle={`Welcome, ${user.first_name} ${user.last_name}`}
        button={
          <Link to="/campaigns/new">
            <Button className="pry-btn gap-1">
              <FaPlus /> Add New Campaign
            </Button>
          </Link>
        }
      />

      <div className="w-full rounded-2xl bg-white p-4 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold">Summary</h4>
          <Button variant="outline" className="p-0 h-auto">
            <select
              className="bg-transparent outline-none h-10 px-2"
              onChange={(e) => setYear(e.target.value)}
            >
              <option value={currentYear}>This Year</option>
              <option value={yearBefore}>Last Year</option>
              <option value={twoYearsBefore}>{twoYearsBefore}</option>
            </select>
          </Button>
        </div>

        <div className="flex gap-4">
          <Card title="Total Leads" qty={yearLeads?.length || 0} />
          <Card
            title="Total Reached"
            qty={reachedLeads?.length || 0}
            total={yearLeads?.length}
          />
          <Card
            title="Total Answered"
            qty={answeredLeads?.length || 0}
            total={reachedLeads?.length}
          />
          <Card
            title="Total Positive"
            qty={convertedLeads?.length || 0}
            total={yearLeads?.length}
          />
        </div>
      </div>

      <div className="w-full flex items-stretch gap-6 mb-6">
        <div className="basis-3/5 p-4 rounded-2xl bg-white">
          <FollowUpChart year={year} />
        </div>
        <div className="basis-2/5 p-4 rounded-2xl bg-white">
          <RecentActivities />
        </div>
      </div>

      <div className="w-full rounded-2xl bg-white p-4 mb-6">
        <DashboardTable data={leads} year={year} />
      </div>
    </>
  );
}
