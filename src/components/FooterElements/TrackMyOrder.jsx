import React from "react";

const TrackMyOrder = () => {
  return (
    <div className="overflow-hidden flex flex-row justify-center items-center lg:justify-end gap-10 mt-2 ">
      <div></div>
      <div className=" font-sans flex flex-col">
        <h3 className=" text-xl">Track my order</h3>
        <form className="space-y-6 mt-5">
          <div>
            <label className="block text-base font-medium leading-6 text-gray-900">
              Order number
            </label>
            <div className="mt-2">
              <input
                placeholder="XXX-XXX"
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
            <p className=" hidden md:flex md:text-xs whitespace-nowrap mt-4">
              You can find it in the order confirmation email you received when{" "}
              <br />
              you placed your order
            </p>
          </div>

          <div>
            <button className="flex w-full uppercase justify-center rounded-md bg-pink-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              track order
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex">
        <img src="https://www.nastygal.com/dw/image/v2/BBZH_PRD/on/demandware.static/-/Library-Sites-nastygal-content-global-sfra/default/dwa8f8f775/images/myaccount/AccountLogIn_Creation_Banner_Desktop_SFRA.jpg?sw=768&q=65" />
      </div>
    </div>
  );
};

export default TrackMyOrder;
