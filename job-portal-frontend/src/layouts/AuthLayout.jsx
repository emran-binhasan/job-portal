import { NavLink, Outlet } from "react-router-dom";
import jobIcon from '../assets/icons/logo.png'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const AuthLayout = () => {
    const{user,logOutUser} = useContext(AuthContext)
  return (
    <div>
      <header className="flex border justify-between items-center p-4">
        <div className="font-medium text-lg flex items-center gap-1">
          <img src={jobIcon} className="w-8" alt="logo" />
          <h3 className="text-teal-500">Job Portal</h3>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
