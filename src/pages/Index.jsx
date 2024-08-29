import { Link } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import FreeComic from "../components/freeComic/FreeComic";
import HolidayBookList from "../components/Recommended/BookList";
import Week from "../components/latestDayUpDates/Week";
import Div from "../components/common/Div";
import News from "../components/newAnnouncement/News";
import Button from "../components/common/Button";
import Announcement from "../data/Announcement.json";
import ShortVideo from "../components/shortVideo/ShortVideo";
import { useState } from "react";
import FridayComic from "../data/weekComic/FridayComic.json";
import MondayComic from "../data/weekComic/MondayComic.json";
import SaturdayComic from "../data/weekComic/SaturdayComic.json";
import SundayComic from "../data/weekComic/SundayComic.json";
import ThursdayComic from "../data/weekComic/ThursdayComic.json";
import TuesdayComic from "../data/weekComic/TuesdayComic.json";
import WednesdayComic from "../data/weekComic/WednesdayComic.json";

const weekDay = [
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
  "星期日",
];
const weekData = {
  星期一: MondayComic,
  星期二: TuesdayComic,
  星期三: WednesdayComic,
  星期四: ThursdayComic,
  星期五: FridayComic,
  星期六: SaturdayComic,
  星期日: SundayComic,
};
const Index = () => {
  const [week, setWeek] = useState("星期一");

  return (
    <div className="flex  flex-col justify-center items-center">
      <Carousel />
      <div className="bg-gray-900 p-4 w-full  text-center ">
        {weekDay.map((item, index) => {
          return (
            <Link
              key={"week_" + index}
              className=" font-bold text-2xl  no-underline text-white hover:text-gray-400 ms-8"
              onClick={() => setWeek(item)}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <Week Weeks={weekData[week]} />
      <Div className="bg-zinc-600  relative flex flex-row">
        <h2 className="title_text font-black text-8xl text-yellow-400 absolute -top-9  -left-14 rotate-3 ">
          NEWS
        </h2>
        <Div className="  flex-1 mt-14 grid  ">
          {Announcement.map((item, index) => {
            return (
              <News
                key={"news_" + index}
                date={item.date}
                year={item.dateYear}
                content={item.content}
              />
            );
          })}
          <Button className="mt-auto ms-auto bg-white rounded-md py-2 px-4">
            看更多...
          </Button>
        </Div>
        <Div className="  flex-1 m-5 p-5 hidden lg:flex flex-col">
          <img
            src="https://news-cdn.para-daily.com/wp-content/uploads/2024/08/20190346/00_FF43_banner-1024x393.webp"
            className="w-full h-96 rounded-md"
          />
        </Div>
      </Div>
      <ShortVideo />
      <HolidayBookList />
      <FreeComic />
    </div>
  );
};

export default Index;
