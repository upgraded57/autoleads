import toast from "react-hot-toast";
import { axiosInstance } from "./axiosInstance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "./baseUrl";
import { NavigateFunction } from "react-router-dom";

// create campaign
export const createCampaign = async (
  name: string,
  navigate: NavigateFunction
) => {
  const business = localStorage.getItem("business_id") || "";
  const businessId = JSON.parse(business);

  const toastId = toast.loading("Creating campaign");
  await axiosInstance({
    method: "post",
    url: `${baseURL}/campaign/create/${businessId}/`,
    data: { name },
  })
    .then((res) => {
      toast.success("Campaign name created", {
        id: toastId,
      });
      navigate(`/campaigns/new/${res.data.campaign_id}?type=form`);
    })
    .catch(() => {
      toast.error("Something went wrong. Please Retry", {
        id: toastId,
      });
    });
};

// create campaign by upload
export const uploadCampaign = async (
  file: File,
  navigate: NavigateFunction
) => {
  const toastId = toast.loading("Uploading File...");
  const business = localStorage.getItem("business_id") || "";

  const businessId = JSON.parse(business);
  const data = new FormData();
  data.append("campaign", file);
  await axiosInstance({
    method: "post",
    url: `${baseURL}/campaign/upload/${businessId}/`,
    data,
  })
    .then((res) => {
      toast.success("File uploaded successfully", {
        id: toastId,
      });
      navigate(`/campaigns/new/${res.data.campaign_id}?type=upload`);
    })
    .catch(() => {
      toast.error("Please check the file and retry", {
        id: toastId,
      });
    });
};

// create campaign for google sheet
export const createGoogleCampaign = async (
  name: string,
  navigate: NavigateFunction
) => {
  const toastId = toast.loading("Creating campaign");
  const business = localStorage.getItem("business_id") || "";
  const businessId = JSON.parse(business);

  await axiosInstance({
    method: "post",
    url: `${baseURL}/campaign/create/${businessId}/`,
    data: { name },
  })
    .then((res) => {
      toast.success("Campaign name created", {
        id: toastId,
      });
      // navigate(`/form/${res.data.campaign_id}/wizard`);
      navigate(`/campaigns/new/${res.data.campaign_id}?type=sheet`);
    })
    .catch(() => {
      toast.error("Something went wrong. Please Retry", {
        id: toastId,
      });
    });
};

// fetch all campaigns
export const useFetchCampaigns = () => {
  const business = localStorage.getItem("business_id") || "";
  const businessId = JSON.parse(business);
  const fetchCampaigns = async () => {
    const response = await axiosInstance({
      method: "get",
      url: `/campaigns/list/${businessId}/`,
    });

    return response.data;
  };

  return useQuery({
    queryKey: ["Campaigns", businessId],
    queryFn: fetchCampaigns,
    staleTime: 0,
  });
};

// fetch single campaign
export const useFetchCampaign = (campaign_id: string) => {
  const fetchCampaign = async () => {
    const response = await axiosInstance({
      method: "get",
      url: `/leads/list/${campaign_id}`,
    });

    return response.data;
  };

  return useQuery({
    queryKey: ["Campaign", campaign_id],
    queryFn: fetchCampaign,
    staleTime: 5 * 60 * 1000,
  });
};

// set campaign follow up method
export const chooseFollowUpOption = async (
  campaign_id: string,
  followUpOption: "CALL" | "Sms",
  navigate: NavigateFunction,
  type: string
) => {
  const toastId = toast.loading("Setting up follow up option");
  await axiosInstance
    .put(`${baseURL}/campaign/add/contact/${campaign_id}/`, {
      contact_option:
        followUpOption === "CALL" ? followUpOption.toUpperCase() : "Sms",
    })
    .then(() => {
      toast.success("Follow up method set", { id: toastId });
      navigate(
        `/campaigns/new/${campaign_id}/content-type?type=${type}&option=${followUpOption}`
      );
    })

    .catch(() => {
      toast.error("Something went wrong. Please retry", { id: toastId });
    });
};

// set campaign content upload type
export const chooseContentUploadType = async (
  campaign_id: string | undefined,
  type: string | null,
  cType: string,
  option: string | null,
  navigate: NavigateFunction
) => {
  const toastId = toast.loading("Setting content type", { id: "a" });
  await axiosInstance
    .put(`/campaign/content-option/${campaign_id}/`, { content_option: cType })
    .then(() => {
      toast.success("Content type set", { id: toastId });
      cType.toLowerCase() === "audio"
        ? navigate(
            `/campaigns/new/${campaign_id}/${type}/${option!.toLowerCase()}`
          )
        : navigate(
            `/campaigns/new/${campaign_id}/tts/${type}/${option!.toLowerCase()}`
          );
    })
    .catch(() => {
      toast.error("Something went wrong", { id: toastId });
    });
};

// add audio files to campaign with calls follow up method
export const addCampaignAudios = async (
  form: FormData,
  campaign_id: string,
  navigate: NavigateFunction,
  type: string
) => {
  const toastId = toast.loading("Assigning audios to call");

  await axiosInstance
    .put(`campaign/call/create/${campaign_id}/`, form)
    .then(() => {
      toast.success("Audios assigned to calls", { id: toastId });
      type === "upload" || type === "sheet"
        ? navigate("/app/campaigns")
        : navigate(`/campaigns/new/form/${campaign_id}/wizard`);
    })
    .catch(() => {
      toast.error("Something went wrong. Please retry", { id: toastId });
    });
};

// add texts to campaign with calls follow up method
export const addCampaignTexts = async (
  text: any[],
  campaign_id: string | undefined,
  navigate: NavigateFunction,
  type: string | undefined
) => {
  const toastId = toast.loading("Assigning audios to call");

  await axiosInstance
    .put(`campaign/call/create/${campaign_id}/`, {
      text_1: text[0],
      text_2: text[1],
      text_3: text[2],
      text_4: text[3],
    })
    .then(() => {
      toast.success("Audios assigned to calls", { id: toastId });
      type === "upload" || type === "sheet"
        ? navigate("/app/campaigns")
        : navigate(`/campaigns/new/form/${campaign_id}/wizard`);
    })
    .catch(() => {
      toast.error("Something went wrong. Please retry", { id: toastId });
    });
};

// launch campaign
export const launchCampaign = async (campaign_id: string) => {
  const toastId = toast.loading("Launching Campaigns");

  await axiosInstance
    .post(`/campaign/call/launch/${campaign_id}/`)
    .then(() => {
      toast.success("Campaign Started", { id: toastId });
    })
    .catch(() => {
      toast.error("Something went wrong. Please retry", { id: toastId });
    });
};

export const useFetchLeadInfo = (lead_id: string) => {
  // fetch lead info
  const fetchLeadInfo = () => {
    return axios({
      url: `${baseURL}/leads/detail/${lead_id}/`,
    });
  };

  return useQuery({
    queryKey: ["leadInfo", lead_id],
    queryFn: fetchLeadInfo,
    select: (data) => data.data,
  });
};

// Fetch dashboard leads
export const useFetchDashboardLeads = () => {
  const business = localStorage.getItem("business_id") || "";
  const businessId = JSON.parse(business);
  const fetchDashboardLeads = () => {
    return axiosInstance.get(`/business/leads/${businessId}`);
  };

  return useQuery({
    queryKey: ["Dashboard Leads", businessId],
    queryFn: fetchDashboardLeads,
    select: (data) => data.data,
  });
};

export const useFetchLogs = () => {
  const business = localStorage.getItem("business_id") || "";
  const businessId = JSON.parse(business);

  const fetchLogs = () => {
    return axiosInstance.get(`/business/${businessId}/logs/`);
  };

  return useQuery({
    queryKey: ["Logs", businessId],
    queryFn: fetchLogs,
    select: (data) => data.data,
  });
};

export const useFetchRoles = () => {
  const business = localStorage.getItem("business_id") || "";
  const businessId = JSON.parse(business);

  const fetchRoles = () => {
    return axiosInstance.get(`/business/${businessId}/invited-users/`);
  };

  return useQuery({
    queryKey: ["Roles", businessId],
    queryFn: fetchRoles,
    select: (data) => data.data,
  });
};
