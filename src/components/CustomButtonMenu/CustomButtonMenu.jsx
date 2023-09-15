import React from "react";

const CustomButtonMenu = ({ image }) => {
  return (
    <div className="relative flex justify-end">
      <div className="absolute z-10 shadow-pink-400 shadow-lg rounded-2xl">
        <div className="bg-slate-50 rounded-xl border-2 pr-10 pl-4 pt-2 pb-2 sm:pr-12 sm:pl-6 sm:pt-4 sm:pb-4 md:pr-14 md:pl-8 md:pt-6 md:pb-6 lg:pr-16 lg:pl-10 lg:pt-8 lg:pb-8">
          <div>
            <div className="flex flex-col gap-5 font-sans text-xs sm:text-sm md:text-base">
              {image.map((svg, i) => (
                <div className="flex flex-row gap-5" key={i}>
                  <div>{svg.srs}</div>
                <button className="hover:scale-110 border-b-4 flex items-center">
                    {svg.text}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomButtonMenu;
