import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Menus from "../../Pages/Menus/Menus";
import OureShop from "../../Pages/OureShop/OureShop";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import LogIn from "../../Pages/Log/LogIn";
import Signup from "../../Pages/Signup/Signup";
import PriveatRout from "../../Sheard/Auth/PriveatRout";
import UserHome from "../../Pages/Dashboard/user/UserHome/UserHome";
import AllUsaers from "../../Pages/Dashboard/admin/AllUsaers/AllUsaers";
import MyCrat from "../../Pages/Dashboard/user/MyCrat/MyCrat";
import AddItem from "../../Pages/Dashboard/AddItem/AddItem";
import AdminRout from "../../Pages/Dashboard/admin/AdminRout/AdminRout";
import ManageItme from "../../Pages/Dashboard/ManageItme/ManageItme";
import ManageItmeTablenUpdated from "../../Pages/Dashboard/ManageItme/ManageItmeTablenUpdated";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import PaymentHistroy from "../../Pages/Dashboard/PaymentHistroy/PaymentHistroy";
import AdminHome from "../../Pages/Dashboard/admin/AdminHome/AdminHome";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <Menus/>
            },
            {
                path: '/shops',
                element: <PriveatRout><OureShop/></PriveatRout>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
        ]
    },
    {
        path: '/dashbord',
        element: <PriveatRout><Dashboard/></PriveatRout>,
        children: [
            {
                path: '/dashbord/userHome',
                element: <UserHome/>
            },
            {
                path: '/dashbord/myCrat',
                element: <MyCrat/>
            },
            {
                path: '/dashbord/payment',
                element: <Payment/>
            },
            {
                path: '/dashbord/paymentHistroy',
                element: <PaymentHistroy/>
            },
            
            // admin router panel
            {
                path: '/dashbord/adminHome',
                element: <AdminRout><AdminHome/></AdminRout>
            },
            {
                path: '/dashbord/addItems',
                element: <AdminRout><AddItem/></AdminRout>
            },
            {
                path: '/dashbord/menageItems',
                element: <AdminRout><ManageItme/></AdminRout>
            },
            {
                path: '/dashbord/menageItems/:id',
                loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`),
                element: <AdminRout><ManageItmeTablenUpdated/></AdminRout>
            },
            {
                path: '/dashbord/allUsers',
                element: <AdminRout><AllUsaers/></AdminRout>
            },
        ]
    },
    
])