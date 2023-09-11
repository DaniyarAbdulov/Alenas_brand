import React, { Fragment, useState } from "react";
import Modal from "./Modal";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className=" flex isolate rounded-t-sm rounded-b-sm bg-black justify-center py-1 relative">
        <div className="flex flex-row  gap-5">
          <text className=" font-sans text-white">Purchase now with 60%</text>
          <button
            onClick={() => setShowModal(true)}
            className="font-sans text-white bg-pink-400 rounded py-1 px-1"
          >
            <span>
              register now
              <span aria-hidden="true">&rarr;</span>
            </span>
          </button>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className=" font-sans">
          <h3 className=" text-xl">Join our Alena's Family!</h3>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-pink-400 hover:text-pink-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pink-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Banner;
