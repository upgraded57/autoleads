import logo from "../../assets/logo-alt.png";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const navigate = useNavigate();
  const navLinks = [
    {
      path: "#",
      title: "Resources",
    },
    {
      path: "/features",
      title: "Features",
    },
    {
      path: "/pricing",
      title: "Pricing",
    },
    {
      path: "/about",
      title: "About Us",
    },
  ];
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  const login = () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/app/dashboard");
    } else {
      navigate("/auth?type=login");
    }
  };
  return (
    <header className="flex items-center justify-between py-4 h-[100px]">
      <div className="basis-1/4">
        <Link to="/">
          <img src={logo} alt="Primeclick logo" className="w-[150px]" />
        </Link>
      </div>

      <nav className="basis-2/4">
        <ul className="flex items-center justify-between w-full">
          {navLinks.map((el, idx) => (
            <li key={idx}>
              <Link to={el.path}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-4 basis-1/4">
        <Button variant="ghost" onClick={login} className="px-6">
          Log in
        </Button>
        <Button
          className="pry-btn px-6"
          onClick={() => navigate("/auth?type=signup")}
        >
          Sign up
        </Button>
      </div>

      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleNav}>
        <HiMiniBars3 />
      </div>
    </header>
  );
}
