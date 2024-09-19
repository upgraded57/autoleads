import logo from "../../assets/logo-alt.png";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosCloseCircleOutline } from "react-icons/io";

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

  const toggleNav = () => setNavOpen(!navOpen);

  const login = () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/app/dashboard");
    } else {
      navigate("/auth?type=login");
    }
  };

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Call handler immediately to set the initial state
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex items-center justify-between md:justify-center py-4 h-[100px]">
      <div className="md:basis-1/4">
        <Link to="/">
          <img src={logo} alt="Primeclick logo" className="w-[150px]" />
        </Link>
      </div>

      <ul className="hidden md:flex items-center justify-between basis-2/4 w-full">
        {navLinks.map((el, idx) => (
          <li key={idx}>
            <Link to={el.path} className="text-sm">
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex ml-auto items-center justify-end gap-4 basis-1/4">
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

      {/* Mobile Nav */}
      {navOpen && (
        <div className="w-screen h-screen fixed inset-0 bg-white px-3">
          <div className="flex items-center justify-between h-[100px]">
            <Link to="/">
              <img src={logo} alt="Primeclick logo" className="w-[150px]" />
            </Link>

            <IoIosCloseCircleOutline
              className="text-2xl cursor-pointer"
              onClick={toggleNav}
            />
          </div>

          <ul className="">
            {navLinks.map((el, idx) => (
              <li key={idx} className="py-5 pl-4">
                <Link to={el.path} className="text-lg">
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <Button variant="outline" onClick={login} className="w-full py-6">
              Log in
            </Button>
            <Button
              className="pry-btn w-full py-6"
              onClick={() => navigate("/auth?type=signup")}
            >
              Sign up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
