import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  const [newImageIndex, SetNewImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    pauseOnHover: true,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex) => {
      SetNewImageIndex(newIndex);
    },
  };

  return (
    <div
      className={`slider-container text-black w-full h-96 flex flex-col justify-center `}
    >
      <Slider {...settings} className="flex gap-5">
        {data &&
          data.map((item, index) => (
            <div key={index} className="p-5 relative">
              <img
                src={item}
                alt="image"
                className={`transition-transform duration-500  ${
                  newImageIndex === index ? "transform scale-110" : "scale-100"
                }`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
