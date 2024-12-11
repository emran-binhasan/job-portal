import { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Jobs</NavLink>
      <NavLink>Employers</NavLink>
      <NavLink>Contact</NavLink>
    </>
  );
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <CgMenuMotion className="text-2xl" />
        <a className="btn btn-ghost text-xl">jobPortal</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="space-x-2">
            {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="space-x-2">
        <NavLink>Login</NavLink>
        <NavLink>Register</NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
