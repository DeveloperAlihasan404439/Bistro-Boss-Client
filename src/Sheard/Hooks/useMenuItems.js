import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useMenuItems = () => {
    const axiosSecure = useAxios()
    const {data: menu = [], isLoading,refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/menu', {withCredentials: true})
            const data = res.data;
            return data
        }
      })
    return {menu,isLoading,refetch};
};

export default useMenuItems;