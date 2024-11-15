interface CardProp {
  title: string;
  qty: number;
  total?: number;
}

export default function Card({ title, qty, total }: CardProp) {
  return (
    <div className="w-full p-4 rounded-2xl bg-accent-clr flex flex-col gap-4 text-white">
      <p>{title}</p>
      <div className="flex justify-between items-center">
        <h1 className="text-header text-3xl font-semibold">{qty}</h1>

        <h1 className="text-md font-semibold text-yellow-200">
          {total ? `${((qty / total) * 100).toFixed(1)}%` : ""}
        </h1>
      </div>
    </div>
  );
}
