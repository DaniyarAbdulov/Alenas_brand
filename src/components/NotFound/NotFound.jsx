import React from "react";

const NotFoundError = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className=" absolute top-28 left-10 animate-bounce ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
      </div>

      <div className="rounded-lg shadow-pink-400 shadow-lg bg-slate-200 flex flex-col px-10 py-5">
        <text>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Oooops something went wrong!{" ;-)"}
          </h1>
          <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl">
            404 Not Found. This page does not exist I guess.
            <br />
            Click on our Logo and go to HomePage!
          </p>
        </text>
        <div className=" shadow-lg shadow-pink-200 flex gap-10 place-self-end mr-10 font-serif 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs"></div>
      </div>
    </div>
  );
};

export default NotFoundError;
