import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const {data: isAdmin, isLoading,refetch } = useQuery({
        queryKey: ['isAdmin',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin?email=${user?.email}`,{withCredentials: true})
            const data = res.data;
            return data?.admin
        }
      })
    return {isAdmin, isLoading,refetch };
};

export default useAdmin;