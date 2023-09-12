import React from "react";

const CustomVideoGreeting = () => {
  return (
    <div className=" flex flex-col gap-10">
      <div className=" flex flex-col gap-5">
        <h3 className=" font-serif text-5xl">Eva Green Collection 2023</h3>
        <h1 className=" font-serif text-4xl">The Goddess</h1>
        <span className=" font-sans text-base">
          Available in Stock untill December
        </span>
      </div>
      <div className=" flex flex-row">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/cTokdWmlaBc?si=YSjFS98Z-skqXGZc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default CustomVideoGreeting;
