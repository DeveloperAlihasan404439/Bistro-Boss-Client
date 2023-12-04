import { useEffect, useState } from "react";
import useAuth from "../../../../Sheard/Hooks/useAuth";
import useAxios from "../../../../Sheard/Hooks/useAxios";
import wallet from '../../../../assets/wallet 1.svg'
import customer from '../../../../assets/customer 1.svg'
import chef from '../../../../assets/chef 1.svg'
import truck from '../../../../assets/truck 1.svg'
const AdminHome = () => {
    const {user} = useAuth()
    const axiosSecure = useAxios()
    const [adminData, setAdminData] = useState([])
    useEffect(()=>{
        axiosSecure.get('/adminHomeStatus', {withCredentials: true})
        .then(res=>{
            setAdminData(res.data)
        })
    },[axiosSecure])
    console.log(adminData);
    return (
        <div className="w-11/12 mx-auto pt-5">
            <h1 className="text-3xl">
                <span>Hi welcome </span>
                {
                    user?.displayName? user.displayName : "Go Back"
                }
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                <div className="flex justify-center items-center gap-5 p-10 bg-gradient-to-r from-[#BB34F5] rounded-xl shadow-2xl">
                    <img src={wallet} alt="" />
                    <div>
                        <h1 className="text-5xl font-semibold text-center ">{adminData?.revenue}</h1>
                        <h1 className="text-3xl font-medium">Revenue</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 p-10 bg-gradient-to-r from-[#D3A256] rounded-xl shadow-2xl">
                    <img src={customer} alt="" />
                    <div>
                        <h1 className="text-5xl font-semibold text-center ">{adminData?.user}</h1>
                        <h1 className="text-3xl font-medium">Customers</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 p-10 bg-gradient-to-r from-[#FE4880] rounded-xl shadow-2xl">
                    <img src={chef} alt="" />
                    <div>
                        <h1 className="text-5xl font-semibold text-center ">{adminData?.menu}</h1>
                        <h1 className="text-3xl font-medium">Products</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 p-10 bg-gradient-to-r from-[#6AAEFF] rounded-xl shadow-2xl">
                    <img src={truck} alt="" />
                    <div>
                        <h1 className="text-5xl font-semibold text-center ">{adminData?.payment}</h1>
                        <h1 className="text-3xl font-medium">Orders</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;