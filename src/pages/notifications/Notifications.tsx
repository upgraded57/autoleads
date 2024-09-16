import LayoutTop from "@/components/LayoutTop";
import { IoCheckmarkDoneOutline, IoTrashOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Notifications() {
  return (
    <>
      <LayoutTop
        title="Notifications"
        subtitle="All your notifications in one place"
        button={
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="default"
              className="bg-accent-clr gap-1 hover:bg-blue-500"
            >
              <IoCheckmarkDoneOutline />
              Mark all as Read
            </Button>
            <Button type="button" variant="default" className="pry-btn">
              <IoTrashOutline />
              Delete
            </Button>
          </div>
        }
      />

      {[1, 2, 3, 4, 5, 6].map((_, idx) => (
        <div key={idx} className="w-full p-4 bg-white mb-4 rounded-2xl">
          <div className="flex gap-2 items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200"></div>
            <div className="flex flex-col gap-1">
              <small className="text-xs text-gray-400">2 days ago</small>
              <h1 className="text-xl leading-none">
                New Campaign Added - (New campaign name)
              </h1>
              <small className="text-xs text-gray-400">
                Click{" "}
                <Link
                  to="#"
                  className="text-accent-clr font-semibold cursor-pointer hover:underline"
                >
                  here
                </Link>{" "}
                to view details
              </small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
