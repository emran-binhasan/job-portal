import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import loginLottieData from "../assets/lottie/login.json";
import Lottie from "lottie-react";
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full h-screen md:w-1/2 hidden md:flex items-center">
          <Lottie animationData={loginLottieData} />
        </div>
        {/* Right Form Section */}
        <div className="w-full h-auto md:h-screen md:w-2/3 bg-white dark:bg-gray-800 px-8 rounded-lg flex flex-col justify-center">
          {/* Form Section */}
          <div className="mt-4">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Login
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Manage all your tasks efficiently. Let's get you set up.
            </p>
            <form onSubmit={handleLogin}>
              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="true"
                required
                className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full py-3 text-white text-lg font-semibold transition-all duration-300"
              >
                Create Account
              </button>
            </form>
            <div className="mt-4">
              <button className="btn bg-green-300 hover:bg-red-600 w-full text-white py-3 text-lg font-semibold transition-all duration-300">
                <FaGoogle className="inline-block mr-2" /> Sign in with Google
              </button>
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
              Already have an account?{" "}
              <Link
                to="/auth/register"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
