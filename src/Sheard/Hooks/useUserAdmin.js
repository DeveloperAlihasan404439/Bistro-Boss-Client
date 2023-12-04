import { useQuery } from "@tanstack/react-query";
// import useAxiosPublick from "./useAxiosPublick";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUserAdmin = () => {
    // const axiosPublick = useAxiosPublick()
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const email = {email: user?.email}
    const {data: users = [], isLoading,refetch } = useQuery({
        queryKey: ['users', email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users?email=${user?.email}`, {withCredentials: true})
            const data = res.data;
            return data
        }
      })
      return {users,isLoading,refetch}
};

export default useUserAdmin;