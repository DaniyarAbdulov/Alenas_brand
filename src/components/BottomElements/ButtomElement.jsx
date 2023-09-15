import React from "react";

const ButtomElement = () => {
  return (
    <div className=" mt-14 relative">
      <div className="flex flex-row justify-center items-center">
        <div className="w-1/3 relative left-5 transform skew-y-6">
          <img
            className=" border-e-8 border-t-8 border-x-stone-100 w-auto h-auto hover:opacity-90  bg-transparent rounded-xl shadow-pink-400 shadow-2xl"
            src="https://images.unsplash.com/photo-1542534759-05f6c34a9e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          />
        </div>
        <div className="w-1/3 relative top-20 transform skew-y-6">
          <img
            className=" border-e-8 border-t-8 border-x-stone-100 w-auto h-auto hover:opacity-90   bg-transparent  rounded-xl shadow-pink-400 shadow-2xl"
            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          />
        </div>
        <div className="w-1/3 relative top-40 right-5 transform skew-y-6">
          <img
            className=" border-e-8 border-t-8 border-x-stone-100 w-auto h-auto hover:opacity-90  bg-transparent rounded-3xl  shadow-pink-400 shadow-2xl"
            src="https://images.unsplash.com/photo-1525348371953-ac094a7e70be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          />
        </div>
      </div>
      <div className=" absolute top-5 right-10 -skew-x-12 skew-y-12">
        <text>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-extrabold">
            Story in the Eyes
          </h1>
        </text>
      </div>
    </div>
  );
};

export default ButtomElement;
