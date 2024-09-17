interface LayoutTopProps {
  title: String;
  subtitle?: String;
  height?: string;
  button?: any;
}

export default function LayoutTop({
  title,
  button,
  subtitle,
  height,
}: LayoutTopProps) {
  return (
    <div
      className={`w-full flex items-center justify-between ${
        height === "short" ? "h-[100px]" : "h-[150px]"
      }`}
    >
      <span>
        <h1 className="text-header font-semibold text-2xl">{title}</h1>
        <p>{subtitle}</p>
      </span>

      {button}
    </div>
  );
}
