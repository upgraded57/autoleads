import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useFetchUser = (id: string) => {
  const fetchUser = async () => {
    const response = await axiosInstance.get(`auth/users/${id}`);
    return response.data;
  };

  return useQuery({
    queryKey: ["Fetch User", id],
    queryFn: fetchUser,
    staleTime: 5 * 60 * 1000,
  });
};
