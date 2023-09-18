import React from "react";

const CustomCookiesNotification = ({onClose, isVisible}) => {
    if (!isVisible) return null;
    return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex items-end">
      <div className="rounded-lg shadow-pink-400 shadow-lg bg-slate-200 flex flex-col px-10 py-5">
        <text>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Coockies Notification!{' ;-)'}</h1>
          <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl">
            Our web-site is using Coockies. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Optio, neque voluptatum? Lorem ipsum dolor sit amet consectetem eligend
          </p>
        </text>
        <div className=" shadow-lg shadow-pink-200 flex gap-10 place-self-end mr-10 font-serif 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
          <button className="border-2 border-dotted border-pink-400 px-2" onClick={()=>onClose()}>Accept</button>
          <button className="border-2 border-dotted border-pink-400 px-2" onClick={()=>onClose()}>No</button>
        </div>
      </div>
    </div>  
  );
};

export default CustomCookiesNotification;
