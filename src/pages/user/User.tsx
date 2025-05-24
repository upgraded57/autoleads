import LayoutTop from "@/components/LayoutTop";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function User() {
  const user = useContext(UserContext)?.user;
  return (
    <>
      <LayoutTop
        title="Business Account"
        subtitle="Update you company info and details here"
      />
      <div className="bg-white rounded-2xl">
        <div className="p-10 flex items-center gap-4">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-xl">
              {user.first_name[0] + user?.last_name[0]}
            </AvatarFallback>
          </Avatar>
          <span>
            <h3 className="text-2xl font-[500]">{`${user.first_name} ${user?.last_name}`}</h3>
            <p>{user?.email}</p>
          </span>
        </div>

        <hr />
        <div className="p-10">
          <div className="grid grid-cols-2 gap-10 items-center">
            <span>
              <h3 className="text-xl font-[500]">Public Profile</h3>
              <p className="text-sm">This will be displayed on your Profile</p>
            </span>
            <span>
              <Input
                type="text"
                placeholder="company name"
                defaultValue={user.first_name + " " + user?.last_name}
              />
            </span>
          </div>
        </div>

        <hr />
        <div className="p-10">
          <div className="grid grid-cols-2 gap-10 items-center">
            <span>
              <h3 className="text-xl font-[500]">Company Logo</h3>
              <p className="text-sm">
                Update your company logo and choose where you want it to be
                displayed
              </p>
            </span>
            <span>
              <Input type="file" />
            </span>
          </div>
        </div>

        <hr />
        <div className="p-10">
          <div className="grid grid-cols-2 gap-10 items-center">
            <span>
              <h3 className="text-xl font-[500]">Registered Email</h3>
              <p className="text-sm">This will be displayed on your Profile</p>
            </span>
            <span>
              <Input
                type="email"
                placeholder="email address"
                defaultValue={user.email}
              />
            </span>
          </div>
        </div>
        <div className="px-10 pb-6 flex justify-end">
          <Button className="pry-btn">Save Changes</Button>
        </div>
      </div>
    </>
  );
}
