
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCarts = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth()
    const {data: cart = [], isLoading,refetch } = useQuery({
        queryKey: ['crats',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            const data = res.data;
            return data
        }
      })
      return {cart,isLoading,refetch}
};

export default useCarts;