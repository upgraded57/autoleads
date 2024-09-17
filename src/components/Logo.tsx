import logoImg from "@/assets/logo-alt.png";

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
      <img src={logoImg} alt="Autoleads logo" className="w-[150px]" />
    </div>
  );
}
