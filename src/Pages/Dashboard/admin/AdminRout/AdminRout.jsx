import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../../Sheard/Hooks/useAdmin";
import useAuth from "../../../../Sheard/Hooks/useAuth";

const AdminRout = ({children}) => {
    const {user,loader} = useAuth()
    const {isAdmin, isLoading} = useAdmin()
    const location = useLocation()
    if(loader || isLoading){
        return <div className="w-full h-screen flex justify-center items-center">
        <span className="loading w-[500px] loading-infinity bg-gradient-to-r from-[#f7be02] to-[#f81808]"></span>
        </div>

    }
    if(user && isAdmin){
       return children
    }
    return <Navigate state={location.pathname} to='/login'/>;
};

export default AdminRout;