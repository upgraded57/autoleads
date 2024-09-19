import { useParams } from "react-router-dom";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
import GuestModal from "./GuestModal";
import axios from "axios";
import { baseURL } from "@/api/baseUrl";
import toast from "react-hot-toast";
import Card from "@/components/Card";
import CampaignTable from "@/components/CampaignTable";

export default function GuestCampaign() {
  const guestVerified = sessionStorage.getItem("guestVerified");
  const { campaign_id } = useParams();
  const [modalActive, setModalActive] = useState(() =>
    guestVerified ? false : true
  );

  const [campaigns, setCampaigns] = useState<any>([]);

  const verifyAccessCode = async () => {
    const accessCode = sessionStorage.getItem("access_code");
    if (!accessCode) return setModalActive(true);
    await axios
      .get(`${baseURL}/dashboard/${campaign_id}/${JSON.parse(accessCode)}`)
      .then((res) => {
        setCampaigns(res.data);
        sessionStorage.setItem("guestVerified", "true");
      })
      .catch((err) => {
        setModalActive(true);
        if (err.response.status && err.response.status === 401) {
          return toast.error("Access denied. Access code invalid");
        }
        toast.error("Something went wrong");
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("guestVerified")) {
      verifyAccessCode();
    }
  }, []);

  const calledLeads =
    campaigns?.leads &&
    campaigns?.leads.filter((el: any) => {
      return el.status.toLowerCase() === "contacted";
    });

  const qualifiedLeads =
    campaigns?.leads &&
    campaigns?.leads.filter((el: any) => {
      return el.contacted_status.toLowerCase() === "converted";
    });

  const rejectedLeads =
    campaigns?.leads &&
    campaigns?.leads.filter((el: any) => {
      return el.contacted_status.toLowerCase() === "rejected";
    });

  return (
    <>
      {modalActive && (
        <GuestModal
          modalActive={modalActive}
          setModalActive={setModalActive}
          setCampaigns={setCampaigns}
          campaign_id={campaign_id!}
        />
      )}
      <Logo />

      {campaigns?.leads && (
        <div className="px-5">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card title="Total Leads" qty={campaigns?.leads?.length || 0} />
            <Card title="Total Called" qty={calledLeads?.length || 0} />
            <Card title="Total Qualified" qty={qualifiedLeads?.length || 0} />
            <Card title="Total Rejected" qty={rejectedLeads?.length || 0} />
          </div>

          <div className="p-4 rounded-2xl bg-white">
            <CampaignTable
              campaign_id={campaign_id ?? ""}
              data={campaigns?.leads}
              campaign_name={campaigns?.campaign_name}
            />
          </div>
        </div>
      )}
    </>
  );
}
