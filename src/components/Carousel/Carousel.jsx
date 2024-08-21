import { Link } from "react-router-dom";
import Button from "../common/Button";
import image from "../../json/image.json";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState("刀刀");

  return (
    <div className="w-full  bg-stone-900 px-5 py-10">
      <ul className="flex justify-center items-center overflow-x-auto ">
        {image.map((movie) => (
          <li key={movie.name} className="inline-block w-1/5 relative">
            <div className="bg-black absolute w-full h-full opacity-30 shadow"></div>
            <Link href="#">
              <img
                src={movie.url}
                alt={movie.name}
                draggable="false"
                className="object-fill h-72 "
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className=" flex  justify-center items-center mt-3">
        {image.map((movie) => (
          <Button
            key={movie.url}
            className={`${
              currentIndex === movie.name ? "bg-orange-400" : "bg-white"
            } py-1 px-3 m-1`}
            onClick={() => setCurrentIndex(movie.name)}
          ></Button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
