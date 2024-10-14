import { GoBellFill } from "react-icons/go";

import { MdSpaceDashboard } from "react-icons/md";
import {
  BsBoxArrowLeft,
  BsFillFileEarmarkSpreadsheetFill,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { PiGearSixFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function DashboardLinks() {
  const navLinks = [
    {
      title: "Dashboard",
      path: "/app/dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      title: "Campaigns",
      path: "/app/campaigns",
      icon: <BsFillFileEarmarkSpreadsheetFill />,
    },
    {
      title: "User Account",
      path: "/app/account",
      icon: <FaUser />,
    },

    {
      title: "Settings",
      path: "/app/settings",
      icon: <PiGearSixFill />,
    },
    {
      title: "Support",
      path: "/app/support",
      icon: <BiSupport />,
    },
    {
      title: "Notifications",
      path: "/app/notifications",
      icon: <GoBellFill />,
    },
    {
      title: "Logout",
      path: "/auth",
      icon: <BsBoxArrowLeft />,
      onClick: () => {
        localStorage.clear();
      },
    },
  ];

  return (
    <div className="w-full">
      {navLinks.map((link, idx) => (
        <NavLink
          onClick={link.onClick}
          to={link.path}
          title={link.title}
          className={`navLinks rounded-md transition-all flex items-center justify-center lg:justify-start gap-2 w-full p-2 mb-2 ${
            link.title.toLowerCase() === "settings" && "mt-10"
          } ${
            link.title.toLowerCase() === "logout" && "mt-10"
          } hover:text-pry-clr lg:hover:translate-x-2`}
          key={idx}
        >
          <span>{link.icon}</span>
          <p className="text-[16px] hidden lg:block">{link.title}</p>
        </NavLink>
      ))}
    </div>
  );
}
