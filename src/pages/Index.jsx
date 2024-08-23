import { Link } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Button from "../components/common/Button";
import FreeComic from "../components/FreeComic/FreeComic";
import Typewriter from "../components/Marquee/Typewriter";
import HolidayBookList from "../components/Recommended/BookList";
import newImage from "../image/newImage.png";
import Week from "../components/LatestDayUpDates/Week";
const weekDay = [
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
  "星期日",
];

const Index = () => {
  return (
    <div className="flex  flex-col justify-center items-center">
      <Carousel />
      <div className="bg-gray-900 p-4 w-full  text-center ">
        {weekDay.map((item, index) => {
          return (
            <Link
              key={index}
              className=" font-bold text-2xl  no-underline text-white hover:text-gray-400 ms-8"
            >
              {item}
            </Link>
          );
        })}
      </div>
      {/* <Typewriter /> */}
      <div className="w-full mb-5 flex  p-10 justify-center items-center">
        <Week />
      </div>

      <FreeComic />
      <HolidayBookList />
    </div>
  );
};

export default Index;

/* <li className="inline-block w-3/5">
          <Link href="#">
            <img
              src={image.data.鬼滅之刃}
              alt=""
              draggable="false"
              className="object-fill h-96 w-full"
            />
          </Link>
        </li>
        <li className="inline-block w-1/5 relative">
          <div className="bg-black absolute w-full h-full opacity-30"></div>
          <Link href="#">
            <img
              src={image.data.初戀}
              alt=""
              draggable="false"
              className="object-fill h-72"
            />
          </Link>
        </li> */
