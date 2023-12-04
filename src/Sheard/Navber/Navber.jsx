import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import {BsCart4} from 'react-icons/bs'
import useCarts from "../Hooks/useCarts";
import useAdmin from "../Hooks/useAdmin";
const Navber = () => {
  const [open, setOpen] = useState(true);
  const {user, logout} = useAuth()
  const {isAdmin} = useAdmin()
  const {cart} = useCarts()
  const hendelLogOut = ()=>{
    logout()
    .then(() =>{
    })
  }
  const navber = (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/menu'>Our Menu</NavLink>
      <NavLink to ='/shops'>Our Shop</NavLink>
      <NavLink to ='/contact'>CONTACT us</NavLink>
      {
        user ? isAdmin? <NavLink to ='/dashbord/adminHome'>DASHBOARD</NavLink>
        :<NavLink to ='/dashbord/userHome'>DASHBOARD</NavLink>
        :<NavLink to ='/dashbord/userHome'>DASHBOARD</NavLink>
      }
      
      {
        user?
        <>
        <NavLink to='/dashbord/myCrat'>
        <div className="flex items-center gap-1">
        <BsCart4 className="text-4xl text-orange-600"/>
        <span>+{cart?cart.length:0} </span>
        </div>
      </NavLink>
        <NavLink onClick={hendelLogOut}>Sign out</NavLink>
        </>
        :<>
        <NavLink to ='/signup'>Sign UP</NavLink>
        <NavLink to ='/login'>Log In</NavLink>
        </>
        
      }
    </>
  );
  return (
    <div className="bg-[#151515c2] fixed top-0 left-0 w-full mx-auton z-30" >
      <div className="w-11/12 mx-auto flex py-1 items-center justify-between z-30">
        <div className="flex items-center justify-between flex-row-reverse w-full lg:w-auto">
          <div className="block lg:hidden">
            <div className="drawer drawer-end">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" onClick={() => setOpen(!open)}>
                  {open ? (
                    <svg
                      className="swap-off fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                  ) : (
                    <svg
                      className="swap-on fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 512 512"
                    >
                      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                  )}
                </label>
              </div>
              <div className="drawer-side mt-12">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {navber}
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-medium">BISTRO BOSS</h1>
            <h1 className="tracking-[5px]">Restaurant</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 items-center text-xl font-[600] text-white px-1 uppercase">
            {navber}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
