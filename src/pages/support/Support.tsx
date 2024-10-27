import LayoutTop from "@/components/LayoutTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { useState } from "react";
import SupportModal from "@/components/SupportModal";
export default function Support() {
  const [formModalOpen, setFormModalOpen] = useState(false);
  return (
    <>
      <LayoutTop
        title="Support"
        subtitle="Get support, report problems and make suggestions"
      />

      {<SupportModal open={formModalOpen} setOpen={setFormModalOpen} />}

      <div className="w-full grid grid-cols-3 gap-6">
        <div className="w-full bg-white rounded-xl p-4">
          <p className="font-semibold">Get Help Now</p>
          <p className="text-sm my-4">
            Having problems? Fill out our report form and we'll be with you in
            no time!.
          </p>
          <Button
            className="pry-btn rounded-md mt-4"
            size="xs"
            onClick={() => setFormModalOpen(true)}
          >
            Fill Report Form
          </Button>
        </div>
        <div className="w-full bg-white rounded-xl p-4">
          <p className="font-semibold">Self Help</p>
          <p className="text-sm my-4">
            Search for answers in our community knowledge base.
          </p>
          <div className="flex text-sm gap-1 pt-4">
            <p className="text-sm">Check out our</p>
            <Link to="#" className="text-pry-clr font-medium">
              {" "}
              Customer Portal FAQ
            </Link>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl p-4">
          <p className="font-semibold">Call Us</p>
          <p className="text-sm my-4">
            Phone Support Hours: <br />9 AM - 6 PM WAT - 7 days a week
          </p>
          <div className="flex gap-2 items-center pt-4">
            <FaPhoneVolume className="text-red-500" />
            <Link to="tel:+2349123456789" className="text-sm">
              (+234) 9123-456-7890
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
