import { MdOutlineIndeterminateCheckBox } from "react-icons/md";

export default function EmptyState() {
  return (
    <div className="w-full h-[400px] bg-white rounded-2xl flex items-center justify-center flex-col gap-5">
      <MdOutlineIndeterminateCheckBox className="text-[100px] text-gray-300" />
      <p>There's nothing here yet</p>
    </div>
  );
}
