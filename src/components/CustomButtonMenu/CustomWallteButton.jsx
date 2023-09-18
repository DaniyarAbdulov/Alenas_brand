import React from "react";
import walletstore from "../store/walletstore";
import './CustomWalletModal.css'

const CustomWallteButton = () => {
  return (
    <div className="relative flex justify-end ">
      <div className="absolute shadow-pink-400 slide-right z-10 shadow-lg rounded-2xl overflow-y-auto overflow-x-hidden h-56 sm:h-60 sm:w-auto md:h-64 md:w-auto lg:h-72 lg:w-auto xl:h-64 xl:w-auto 2xl:h-80 2xl:w-auto ">
        <div className="bg-slate-50  rounded-xl border-2 pr-10 pl-2 pt-2 pb-2 sm:pr-12 sm:pl-6 sm:pt-4 sm:pb-4 md:pr-14 md:pl-8 md:pt-6 md:pb-6 lg:pr-16 lg:pl-10 lg:pt-8 lg:pb-8">
          <div className=""> 
            <div className="flex flex-col gap-5 font-sans text-xs sm:text-sm md:text-base">
              <span>Balance: €1000</span>
              {walletstore.map((e, i) => (
                <div className="flex flex-col gap-5" key={i}>
                  <div className=" flex flex-col rounded-2xl bg-sky-50">
                    <span>Your ourder #{e.number}</span>
                    <div className=" flex flex-col">
                      <span className=" font-serif">{e.description}</span>
                      <img
                        className=" w-20 h-auto sm:w-24 sm:h-auto md:w-28 md:h-auto lg:w-32 lg:h-auto xl:w-36 xl:h-auto 2xl:h-auto 2xl:w-40 rounded-xl  hover:contrast-75 hover:opacity-75 object-center"
                        src={e.oderpic}
                      />
                      <span>{e.price}</span>
                      <span>Delivery:{e.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWallteButton;
