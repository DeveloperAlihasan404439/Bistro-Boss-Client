import { NavLink, Outlet } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { FaCalendarAlt, FaAmazonPay } from "react-icons/fa";
import { HiShoppingCart,HiMiniUserGroup  } from "react-icons/hi2";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { FaRegCalendarPlus,FaBook,FaUtensils  } from "react-icons/fa6";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet";
import useAdmin from "../../Sheard/Hooks/useAdmin";
const Dashboard = () => {
  const {isAdmin} = useAdmin()
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className="flex ">
        <div className="w-72 bg-[#D1A054] sticky top-0 p-6 text-white text-2xl font-normal h-screen">
          <div className="py-4">
            <h1 className="text-6xl font-normal">BISTRO BOSS</h1>
            <p className="uppercase tracking-[5px]">Restaurant</p>
          </div>
          <ul className="pb-2">
            {isAdmin ? (
              <>
                <NavLink
                  to="/dashbord/adminHome"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <TiHomeOutline />
                  <h1>Admin Home</h1>
                </NavLink>
                <NavLink to="/dashbord/addItems" className="flex gap-5 items-center text-xl uppercase mb-2">
                  <FaUtensils />
                  <h1>add items</h1>
                </NavLink>
                <NavLink to="/dashbord/menageItems" className="flex gap-5 items-center text-xl uppercase mb-2">
                  <TfiMenuAlt />
                  <h1>manage items</h1>
                </NavLink>
                <NavLink
                  to="/dashbord/menageBooking"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <FaBook  />
                  <h1>Manage bookings</h1>
                </NavLink>
                <NavLink to="/dashbord/allUsers" className="flex gap-5 items-center text-xl uppercase mb-2">
                  <HiMiniUserGroup  />
                  <h1>all users</h1>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashbord/userHome"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <TiHomeOutline />
                  <h1>User Home</h1>
                </NavLink>
                <NavLink to='/dashbord/payment' className="flex gap-5 items-center text-xl uppercase mb-2">
                  <FaCalendarAlt />
                  <h1>reservation</h1>
                </NavLink>
                <NavLink to='/dashbord/paymentHistroy' className="flex gap-5 items-center text-xl uppercase mb-2">
                  <FaAmazonPay />
                  <h1>payment history</h1>
                </NavLink>
                <NavLink
                  to="/dashbord/myCrat"
                  className="flex gap-5 items-center text-xl uppercase mb-2"
                >
                  <HiShoppingCart />
                  <h1>my cart</h1>
                </NavLink>
                <NavLink className="flex gap-5 items-center text-xl uppercase mb-2">
                  <BsDatabaseFillAdd />
                  <h1>add review</h1>
                </NavLink>
                <NavLink className="flex gap-5 items-center text-xl uppercase mb-2">
                  <FaRegCalendarPlus />
                  <h1>my booking</h1>
                </NavLink>
              </>
            )}
          </ul>
          {/* sheard the nav link  */}
          <h1 className="border-2 border-black"></h1>
          <ul className="pt-2">
            <NavLink
              to="/"
              className="flex gap-5 items-center text-xl uppercase mb-2"
            >
              <TiHomeOutline />
              <h1>Home</h1>
            </NavLink>
            <NavLink
              to="/menu"
              className="flex gap-5 items-center text-xl uppercase mb-2"
            >
              <GiHamburgerMenu />
              <h1>Menu</h1>
            </NavLink>
            <NavLink
              to="/shops"
              className="flex gap-5 items-center text-xl uppercase mb-2"
            >
              <GiShoppingBag />
              <h1>Shop</h1>
            </NavLink>
            <NavLink
              to="/contact"
              className="flex gap-5 items-center text-xl uppercase mb-2"
            >
              <MdEmail />
              <h1>contact</h1>
            </NavLink>
          </ul>
        </div>
        <div className="flex-1 w-11/12 mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
