import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = (
    <>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/jobs'}>Jobs</NavLink>
      <NavLink to={'/employers'}>Employers</NavLink>
      <NavLink to={'/blogs'}>Blogs</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      <NavLink to={'/auth/register'}>Register</NavLink>
      <NavLink to={'/auth/login'}>Login</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md max-w-7xl mx-auto">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Left Section */}
        <div className="font-medium text-lg">Job Portal</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">{navLinks}</nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="z-50 absolute md:hidden top-4 right-4 text-2xl"
        >
          {isMenuOpen ? <IoMdClose /> : <RiMenu2Fill />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-1/3 h-full bg-white dark:bg-gray-800 shadow-lg p-4 transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6 py-10 text-center text-lg h-2/3 justify-center">
          {navLinks}
        </nav>
      </div>
    </header>
  );
};

export default Header;
