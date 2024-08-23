import { Link } from "react-router-dom";
import Button from "../common/Button";
import image from "../../json/image.json";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === image.length - 1 ? 0 : prevIndex + 1;
    });
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? image.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className=" bg-stone-900 px-5 py-10 w-full">
      <ul className="flex justify-center items-center overflow-x-auto w-full">
        {/* {image.map((movie) => ( */}
        <li
          // key={movie.name}
          className={`
            inline-block  relative `}
        >
          {/* ${
              currentName == movie.name ? "flex-1 w-full" : "flex-none  w-72"
            } */}
          {/* {currentName == movie.name ? null : (
              <div className="bg-black absolute w-full h-full opacity-30 shadow"></div>
            )} */}
          <Link href="#">
            <img
              src={image[currentIndex]}
              alt={image[currentIndex]}
              draggable="false"
              className={`object-full h-96 `}
            />
            {/* ${
                  currentName == movie.name ? "flex-1 w-full" : "flex-none "
                } */}
          </Link>
        </li>
        {/* ))} */}
      </ul>
      <div className=" flex  justify-center items-center mt-3">
        {/* {image.map((movie) => ( */}
        <Button
          // key={movie.url}
          className={` py-1 px-3 m-1 rounded-md bg-white`}
          // ${
          //   currentName === movie.name ? "bg-orange-400" : "bg-white"
          // }
          onClick={nextSlide}
        ></Button>
        {/* ))} */}
        <Button
          className={` py-1 px-3 m-1 rounded-md bg-white`}
          onClick={prevSlide}
        ></Button>
      </div>
    </div>
  );
};

export default Carousel;
