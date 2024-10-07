import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Carousel from "../components/header/Carousel/Carousel";
import FreeComic from "../components/freeComic/FreeComic";
import HolidayBookList from "../components/recommended/BookList";
import Week from "../components/latestDayUpDates/Week";
import Div from "../components/common/Div";
import News from "../components/newAnnouncement/News";
import Button from "../components/common/Button";
import ShortVideo from "../components/shortVideo/ShortVideo";
import { useEffect } from "react";
import useGetFetch from "../hook/useGetFetch";
import Get from "../URL/Get.json";
import Icon from "../components/common/Icon";
import image from "../data/image.json";
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
  const [WeekData, GetWeekData] = useGetFetch(null);
  const [announcement, getAnnouncementData] = useGetFetch(null);

  function handleGetWeekData() {
    GetWeekData({
      url: Get.comicList.replace("{number}", 8),
    });
  }

  useEffect(() => {
    handleGetWeekData();
    getAnnouncementData({ url: Get.anno.replace("{number}", 5) });
  }, []);

  return (
    <div className="flex  flex-col justify-center items-center">
      <Carousel data={image} />
      <div className="bg-gray-900 p-4 w-full  text-center ">
        {weekDay.map((item, index) => {
          return (
            <Link
              key={"week_" + index}
              className=" font-bold text-2xl  no-underline text-white hover:text-gray-400 ms-8"
              onClick={handleGetWeekData}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <Week Weeks={WeekData} />
      <Div className="bg-zinc-600  relative flex flex-row">
        <h2 className="title_text font-black text-8xl text-yellow-400 absolute -top-9  -left-14 rotate-3 ">
          <Icon icon={faStar} spin style={{ color: "#FFD43B" }} />
          NEWS
        </h2>
        <Div className="  flex-1 mt-14 grid  ">
          {announcement != null
            ? announcement.map((item, index) => {
                const datetime = item.createdAt;
                const date = datetime.split("T")[0];
                return (
                  <News
                    key={"news_" + index}
                    date={date}
                    year={item.dateYear}
                    content={item.annoContent}
                  />
                );
              })
            : null}
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
