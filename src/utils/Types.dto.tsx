export interface CampaignsTableProps {
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
  }[];
  year: string;
}
