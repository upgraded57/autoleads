import logoImg from "@/assets/logo-alt.png";
import { Link } from "react-router-dom";

interface LogoProps {
  height?: string;
}
export default function Logo({ height }: LogoProps) {
  return (
    <div
      className={`w-full ${
        height === "small" ? "h-[50px]" : "h-[100px]"
      } flex items-center`}
    >
      <Link to={`${height === "small" ? "#" : "/app/dashboard"}`}>
        <img src={logoImg} alt="Autoleads logo" className="w-[150px]" />
      </Link>
    </div>
  );
}
