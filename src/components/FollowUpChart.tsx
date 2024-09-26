import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import dashboardData from "@/pages/dashboard/data/dashboardData";
import moment from "moment";

interface FollowUpChartprops {
  year: string;
}
export default function FollowUpChart({ year }: FollowUpChartprops) {
  const { leads } = dashboardData();

  const yearLeads = leads.filter(
    (lead: any) => moment(lead.created).format("YYYY") === year
  );

  const janLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "jan"
  );

  const febLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "feb"
  );

  const marLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "mar"
  );

  const aprLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "apr"
  );

  const mayLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "may"
  );

  const junLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "jun"
  );

  const julLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "jul"
  );

  const augLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "aug"
  );

  const sepLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "sep"
  );

  const octLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "oct"
  );

  const novLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "nov"
  );

  const decLeads = yearLeads.filter(
    (lead: any) => moment(lead.created).format("MMM").toLowerCase() === "dec"
  );

  const chartData = [
    {
      month: "January",
      contacted: parseInt(
        janLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        janLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        janLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "February",
      contacted: parseInt(
        febLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        febLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        febLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "March",
      contacted: parseInt(
        marLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        marLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        marLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "April",
      contacted: parseInt(
        aprLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        aprLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        aprLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "May",
      contacted: parseInt(
        mayLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        mayLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        mayLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "June",
      contacted: parseInt(
        junLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        junLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        junLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "July",
      contacted: parseInt(
        julLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        julLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        julLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "August",
      contacted: parseInt(
        augLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        augLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        augLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "September",
      contacted: parseInt(
        sepLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        sepLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        sepLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "October",
      contacted: parseInt(
        octLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        octLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: octLeads.filter(
        (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
      ).length,
    },
    {
      month: "November",
      novtacted: parseInt(
        janLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        novLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        novLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
    {
      month: "December",
      contacted: parseInt(
        decLeads.filter(
          (lead: any) => lead.status.toLowerCase() === "contacted"
        ).length
      ),
      converted: parseInt(
        decLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "converted"
        ).length
      ),
      rejected: parseInt(
        decLeads.filter(
          (lead: any) => lead.contacted_status.toLowerCase() === "rejected"
        ).length
      ),
    },
  ];

  const chartConfig = {
    contacted: {
      label: "Contacted",
      color: "#ababab",
    },
    converted: {
      label: "Converted",
      color: "#6FCF97",
    },
    rejected: {
      label: "Rejected",
      color: "#EB5757",
    },
  } satisfies ChartConfig;

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <p className="font-semibold">Follow-up Rates</p>
        <div className="flex gap-5">
          <span className="flex gap-1">
            <div className="w-4 h-4 bg-[#ababab]"></div>
            <p className="text-xs">Contacted</p>
          </span>
          <span className="flex gap-1">
            <div className="w-4 h-4 bg-[#6FCF97]"></div>
            <p className="text-xs">Converted</p>
          </span>
          <span className="flex gap-1">
            <div className="w-4 h-4 bg-[#EB5757]"></div>
            <p className="text-xs">Rejected</p>
          </span>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={0}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={0} axisLine={false} width={30} />
          <ChartTooltip
            cursor={true}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="contacted" fill="#ababab" radius={[4, 4, 0, 0]} />
          <Bar dataKey="converted" fill="#6FCF97" radius={[4, 4, 0, 0]} />
          <Bar dataKey="rejected" fill="#EB5757" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </>
  );
}