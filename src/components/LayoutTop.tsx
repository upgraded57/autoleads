interface LayoutTopProps {
  title: String;
  subtitle?: String;
  button?: any;
}

export default function LayoutTop({ title, button, subtitle }: LayoutTopProps) {
  return (
    <div className="w-full flex items-center justify-between h-[150px]">
      <span>
        <h1 className="text-header font-semibold text-2xl">{title}</h1>
        <p>{subtitle}</p>
      </span>

      {button}
    </div>
  );
}
