interface CardProp {
  title: string;
  qty: number;
}

export default function Card({ title, qty }: CardProp) {
  return (
    <div className="w-full p-4 rounded-2xl bg-accent-clr flex flex-col gap-4 text-white">
      <p>{title}</p>
      <h1 className="text-header text-3xl font-semibold">{qty}</h1>
    </div>
  );
}
