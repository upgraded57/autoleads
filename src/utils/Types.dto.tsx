export interface CampaignsTableProps {
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
