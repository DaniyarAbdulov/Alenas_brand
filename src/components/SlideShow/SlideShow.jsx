import React, { useState } from "react";
import pictures from "../store/pictures";

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
    pictures[(startIndex - 1 + pictures.length) % pictures.length],
    pictures[startIndex],
    pictures[(startIndex + 1) % pictures.length],
  ];

  return (
    <div>
      <div className="w-full flex flex-row justify-between">
        <button onClick={handlePrev}>left</button>
        <div className="flex flex-row gap-5">
          {visiblePictures.map((p) => (
            <div className=" w-72 border-2 border-white" key={p.id}>
              <img
                src={p.imgSrc}
                alt={`Image ${p.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <button onClick={handleNext}>right</button>
      </div>
    </div>
  );
};

export default SlideShow;
