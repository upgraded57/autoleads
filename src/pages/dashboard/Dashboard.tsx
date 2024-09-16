import LayoutTop from "@/components/LayoutTop";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const user = useContext(UserContext)?.user;
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
    </>
  );
}
