
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-12 py-4 my-2 ">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Website Name and Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} Job Portal 2024 All rights reserved.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-medium text-gray-400">Contact Us</h3>
          <p className="text-sm text-gray-500 mt-2">
            Email:{" "}
            <a
              href="mailto:info@visaglide.com"
              className="text-blue-400 hover:text-blue-600"
            >
              info@jobportal.com
            </a>
          </p>
       
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61568535268975&_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FaFacebook className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/emran-binhasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FaTwitter className="h-8 w-8" />
          </a>
          <a
            href="https://instagram.com/emran-binhasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FaInstagram className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/emran-binhasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
