import logoImg from "@/assets/logo-alt.png";

export default function Logo() {
  return (
    <div className="w-full h-[100px] flex items-center">
      <img src={logoImg} alt="Autoleads logo" className="w-[150px]" />
    </div>
  );
}
