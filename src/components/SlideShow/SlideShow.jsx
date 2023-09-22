import React, { useState } from "react";
import pictures from "../store/pictures";
import './SlideShowModule.css'


const SlideShow = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const visiblePictures = [
    pictures[(startIndex - 2 + pictures.length) % pictures.length],
    pictures[(startIndex - 1 + pictures.length) % pictures.length],
    pictures[startIndex],
    pictures[(startIndex + 1) % pictures.length],
    pictures[(startIndex + 2) % pictures.length],
  ];

  return (
    <div className="w-full flex flex-col mt-5 mb-10 justify-center items-center">
      <div className="mb-5 mt-5">
        <div className="hidden md:text-xl lg:flex lg:text-2xl flex-row gap-5 justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
            />
          </svg>
          <text className="font-sans font-bold">
            Check out our latest in Stock!
          </text>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-10 mr-10 ml-10">
        <div className=" flex flex-row gap-10">
          <button
            onClick={handlePrev}
            className=" hover:-translate-x-1 hover:scale-110 duration-300 md:flex md:items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div className="  flex justify-center flex-row gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
            {visiblePictures.map((p) => (
              <div key={p.id}
              className="slide-in"
              >
                <h1 className=" hidden sm:flex sm:text-sm md:text-2xl lg:text-4xl font-serif">
                  Collection
                </h1>
                <p className=" hidden sm:flex sm:text-xs md:text-sm lg:text-lg  font-sans">
                  Description: price, size, season
                </p>
                <div>
                  <img
                    src={p.imgSrc}
                    alt={`Image ${p.id}`}
                    className="  w-96 h-80 object-center object-cover rounded-xl  hover:contrast-75 hover:opacity-75"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className=" hover:translate-x-1 hover:scale-110 duration-300 md:flex md:items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
