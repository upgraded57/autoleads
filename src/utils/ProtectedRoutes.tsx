import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: React.ReactNode; // Define the type for children
}

export default function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const user = useContext(UserContext)?.user;

  if (!user) return <Navigate to="/auth" />;
  return children;
}
