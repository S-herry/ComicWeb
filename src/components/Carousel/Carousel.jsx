import React, { useEffect, useState } from "react";
import image from "../../data/image.json";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const getSlideClass = (index) => {
    if (index === currentIndex) {
      return "scale-100 opacity-100 z-10 w-2/4";
    } else if (index === (currentIndex - 1 + image.length) % image.length) {
      return "scale-90 opacity-60 w-1/4 ";
    } else if (index === (currentIndex + 1) % image.length) {
      return "scale-90 opacity-60 w-1/4 ";
    } else {
      return "hidden";
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      <button
        className="absolute left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevSlide}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="text-white font-extrabold text-xl bg-white/70 p-4 w-5 rounded-full"
        />
      </button>

      <div className="relative overflow-hidden rounded-lg h-96 flex items-center justify-center">
        {image.map((item, index) => {
          return (
            <div
              key={"img" + index}
              className={`transition-all duration-700 ease-in-out transform mx-1 ${getSlideClass(
                index
              )}`}
            >
              <Link>
                <img src={item} className="block w-full h-full object-cover" />
              </Link>
            </div>
          );
        })}
      </div>

      <button
        className="absolute right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNextSlide}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-white font-extrabold text-xl bg-white/70 p-4 w-5 rounded-full"
        />
      </button>
    </div>
  );
};

export default Carousel;
