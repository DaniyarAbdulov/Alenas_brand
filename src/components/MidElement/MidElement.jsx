import React from "react";

const MidElement = () => {
  return (
    <div className=" ">
      <div className="">
        <div className="  bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
          <text className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex justify-center font-serif font-extrabold ">
            <p>Alena's brand</p>
          </text>
        </div>
        <div className=" flex flex-row gap-5 font-serif text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-extrabold text-slate-100 w-auto h-auto">
          <div className="relative flex justify-center items-center hover:opacity-90">
            <img
              src="https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              alt="Image"
            />
            <button className="absolute bottom-10 flex border-t-2 border-b-2 hover:scale-125">
              Click
            </button>
          </div>
          <div className="relative flex justify-center items-center hover:opacity-90">
            <img
              alt="Image"
              src="https://images.unsplash.com/photo-1524681051551-4d2ef100779c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            />
            <button className="absolute bottom-10 flex  border-t-2 border-b-2 hover:scale-125">
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidElement;
