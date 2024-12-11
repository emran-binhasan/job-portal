import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import registerLottieData from '../assets/lottie/register.json'
import Lottie from 'lottie-react'
import AuthContext from '../context/AuthContext';

const Register = () => {
    const{createUser,updateNewUser} = useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.firstName.value+' '+form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        createUser(email,password)
        .then(result => {
            const user = result.user;
            updateNewUser({
                displayName:name,
                photoURL:photoURL
            })
            console.log(user)
            
        })

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Image Section */}
          <div className="w-full h-screen md:w-1/2 hidden md:flex items-center">
          <Lottie animationData={registerLottieData}/>
          </div>
          {/* Right Form Section */}
          <div className="w-full h-auto md:h-screen md:w-2/3 bg-white dark:bg-gray-800 px-8 rounded-lg flex flex-col justify-center">
            {/* Form Section */}
              <div className="mt-4">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Register 
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Manage all your tasks efficiently. Let's get you set up.
                </p>
                <form onSubmit={handleRegister}>
                  {/* First and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                    />
                  </div>
  
                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
                  />
  
                  {/* Photo URL */}
                  <input
                    type="text"
                    name="photoURL"
                    required
                    placeholder="Photo URL"
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
  
                  {/* Confirm Password */}
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    autoComplete="true"
                    required
                    className="input input-bordered w-full mb-6 dark:bg-gray-700 dark:text-gray-200"
                  />
  
                  {/* Terms & Conditions Checkbox */}
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      className="checkbox checkbox-primary mr-2"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      I agree to the{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        Terms and Conditions
                      </span>
                    </label>
                  </div>
  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-full py-3 text-white text-lg font-semibold transition-all duration-300"
                  >
                    Create Account
                  </button>
                </form>
                <div className="mt-4">
                  <button
                   
                    className="btn bg-green-300 hover:bg-red-600 w-full text-white py-3 text-lg font-semibold transition-all duration-300"
                  >
                    <FaGoogle className="inline-block mr-2" /> Sign in with Google
                  </button>
                </div>
  
                <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
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

export default Register;