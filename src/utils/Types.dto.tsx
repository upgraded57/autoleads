export interface CampaignsTableProps {
  data: {
    converted: number;
    created: string;
    id: string;
    leads: number;
    title: string;
    type_of: string;
    contacted_leads: string;
    converted_leads: string;
  }[];
}

export interface CampaignTableProps {
  campaign_name: string;
  campaign_id: string;
  data: {
    call_duration: string | null;
    call_time: string | null;
    contacted_status: string;
    created: string;
    id: string;
    full_name: string;
    email: string;
    phone_number: string;
    recording_url: string | null;
    status: string;
  }[];
}

export interface LeadProps {
  lead: {
    call_duration: string | null;
    call_time: string | null;
    contacted_status: string;
    created: string;
    id: string;
    full_name: string;
    email: string;
    phone_number: string;
    recording_url: string | null;
    status: string;
  };
}

export interface DashboardTableProps {
  data: {
    call_duration: string;
    call_time: string;
    contacted_status: string;
    created: string;
    email: string;
    full_name: string;
    id: string;
    phone_number: string;
    recording_url: string;
    status: string;
    campaign_name: string;
  }[];
  year: string;
}
