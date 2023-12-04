import Footer from "../../Sheard/Footer/Footer";
import Navber from "../../Sheard/Navber/Navber";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;