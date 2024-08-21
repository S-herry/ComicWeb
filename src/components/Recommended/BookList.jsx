import { Link } from "react-router-dom";
import RecommendCard from "./RecommendCard";
import Tab from "../common/Tab";
import Button from "../common/Button";
import { useState } from "react";

const liStyle = "text-white m-3 text-xl  p-2 rounded-md  text-center ";
const menu = [
  {
    name: "情人節專屬",
    color: "FF69B4",
  },
  {
    name: "浪漫愛情推薦",
    color: "FF7F7F",
  },
  {
    name: "輕鬆搞笑推薦",
    color: "FFA500",
  },
  {
    name: "BL漫畫推薦",
    color: "9370DB",
  },
  {
    name: "獨家漫畫推薦",
    color: "800080",
  },
  {
    name: "連載最新番",
    color: "2E8B57     ",
  },
];

const BookList = () => {
  const [bookTab, setBookTab] = useState("bg-pink-500");

  return (
    <div>
      <div className="flex flex-wrap  rounded-md  ">
        {/* <div className=" basis-1/6">
          <Button
            className={`${liStyle}  border-t border-x bg-blue-500 m-0 rounded-b-none h-full `}
          >
            BL漫畫推薦
          </Button>
        </div> */}
        {menu.map((item, index) => {
          return (
            <div
              key={`${item.color}_${index}`}
              className={`${
                bookTab == item.color ? " border-b-none" : " border-b-2"
              }  basis-1/6 flex justify-center`}
            >
              <Button
                className={`${liStyle} bg-[#${item.color}]  ${
                  bookTab == item.color
                    ? "border-t border-x bg-blue-500 m-0 rounded-b-none h-full w-full"
                    : ""
                }`}
                onClick={() => setBookTab(item.color)}
              >
                {item.name}
              </Button>
            </div>
          );
        })}
      </div>
      <div
        className={`${bookTab} flex  flex-wrap lg:flex-nowrap justify-center items-center border-b-2 border-x-2 rounded-tl-none rounded-tr-none rounded-md p-3 mb-5`}
      >
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
      </div>
    </div>
  );
};

export default BookList;
