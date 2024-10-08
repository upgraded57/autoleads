import { createContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useFetchUser } from "@/api/user";
import Loader from "@/components/ui/loader";

interface UserContextType {
  user: any;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: UserProviderProps) => {
  const userId = localStorage.getItem("user");
  const business = localStorage.getItem("business_id");

  if (!userId || !business) return <Navigate to="/auth" />;

  const { isLoading, data: user } = useFetchUser(JSON.parse(userId));

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isLoading && !user) return <Navigate to="/auth" />;

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
