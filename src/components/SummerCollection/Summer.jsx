import React, { useState } from "react";
import summerImages from "../store/summerCollections";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("clothing");

  const filteredImages =
    selectedCategory === "all"
      ? summerImages.flatMap((category) => category.items)
      : summerImages.find((category) => category.category === selectedCategory)
          ?.items || [];

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setSelectedCategory("clothing")}
          className={`${
            selectedCategory === "clothing" ? "bg-pink-400" : "bg-gray-200"
          } px-4 py-2 rounded-lg`}
        >
          Clothing
        </button>
        <button
          onClick={() => setSelectedCategory("shoes")}
          className={`${
            selectedCategory === "shoes" ? "bg-pink-400" : "bg-gray-200"
          } px-4 py-2 rounded-lg`}
        >
          Shoes
        </button>
        <button
          onClick={() => setSelectedCategory("accessories")}
          className={`${
            selectedCategory === "accessories" ? "bg-pink-400" : "bg-gray-200"
          } px-4 py-2 rounded-lg`}
        >
          Accessories
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Category: ${image.category}`}
            className="  w-96 h-full  rounded-xl  hover:contrast-75 hover:opacity-75"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
