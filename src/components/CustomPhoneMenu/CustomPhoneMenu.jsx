import React from "react";
import "./CustomPhoneMenuModule.css";


const CustomPhoneMenu = ({ setShowCallMenu }) => {
  return (
    <div className="flex">
      <div className="fixed slide-right-phone inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm flex justify-end items-center ">
        <div className="shadow-2xl shadow-pink-400 bg-slate-100 rounded-3xl border-double border-4 border-black px-5 py-5 overflow-auto lg:h-screen">
          <div className="flex justify-end">
            <button
              onClick={() => setShowCallMenu(false)}
              className="border-b-2 border-pink-400"
            >
              X
            </button>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center mt-10 font-sans">
              <h1>
                Tell us Your number <br /> We'll call You soon!
              </h1>
              <form className="mt-10 flex flex-col justify-center items-center ">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col justify-center items-center">
                    <label htmlFor="first_name">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      className="rounded-xl px-5 py-1"
                      placeholder="+7 your code"
                      required
                    />
                  </div>
                  <div className="flex">
                    <label htmlFor="Question">
                      <select required className="rounded-xl px-10 py-1">
                        <option value="" disabled selected hidden>
                          My Question is...
                        </option>
                        <option>Find a Job</option>
                        <option>Commercial</option>
                        <option>Alena's Charity</option>
                        <option>Recycle Using</option>
                        <option>Else</option>
                      </select>
                    </label>
                  </div>
                </div>
              </form>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => {
                    setShowCallMenu(false);
                  }}
                  className="hover:scale-105 transition ease-in-out delay-75 hover:bg-pink-300 rounded-3xl bg-pink-400 px-5 py-2"
                >
                  Call me!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPhoneMenu;
