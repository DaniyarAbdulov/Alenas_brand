import React from "react";
import { NavLink } from "react-router-dom";

const MyAccount = () => {
  return (
    <div className="overflow-hidden font-sans">
      <div className="flex justify-center mr-5 ml-5 lg:flex-row lg:justify-end  gap-10 mt-2">
        <div className="flex flex-col gap-10 w-full lg:w-auto">
          <div>
            <h1 className="font-bold">Log in</h1>
            <form className="space-y-6 mt-5">
              <div>
                <label className="block text-base font-bold leading-6 text-black">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <label className="block text-base font-bold leading-6 text-black">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <label className="whitespace-nowrap">
                    <input type="checkbox" className="mt-5" /> Remember me
                  </label>
                </div>
              </div>
              <div>
                <button className="flex w-full uppercase justify-center rounded-md bg-pink-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="whitespace-nowrap flex flex-col gap-5">
              <span>
                <h1 className="font-bold">I'm new to Alena's Brand.</h1>
                <p className="mt-1 text-xs">
                  Join the gang to get all the member benefits
                </p>
              </span>
              <div>
                <button className="flex w-full uppercase justify-center rounded-md bg-pink-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Create Account
                </button>
              </div>
              <ul>
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <li>Speedy checkout</li>
                </div>

                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <li>Quick order tracking</li>
                </div>
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <li>Access to offers and special events</li>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <div className="whitespace-nowrap gap-4">
              <span>
                <p className="mt-1 text-xs">Or, continue with</p>
              </span>
              <div>
                <NavLink to="/facebook">
                  <button className="flex justify-center rounded-md bg-blue-500 px-8 py-1.5">
                    <p className="hover:underline text-white">Facebook</p>
                  </button>
                </NavLink>
                <span>
                  <p className="mt-1 text-xs">
                    By continuing you agree to our{" "}
                    <NavLink to="/terms" className="hover:underline">
                      Terms & Conditions
                    </NavLink>
                    . See our{" "}
                    <NavLink to="/privacy" className="hover:underline">
                      Privacy Notice
                    </NavLink>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-auto mt-5 lg:mt-0">
          <img
            src="https://www.nastygal.com/dw/image/v2/BBZH_PRD/on/demandware.static/-/Library-Sites-nastygal-content-global-sfra/default/dwa8f8f775/images/myaccount/AccountLogIn_Creation_Banner_Desktop_SFRA.jpg?sw=768&q=65"
            alt="Account Banner"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
