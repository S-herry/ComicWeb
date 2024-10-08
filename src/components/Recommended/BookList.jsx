import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecommendCard from "./RecommendCard";
import useGetFetch from "../../hook/useGetFetch";
import Div from "../common/Div";
import Get from "../../URL/Get.json";

const menu = [
  {
    name: "情人節專屬",
    hover: "hover:text-pink-400 hover:border-pink-400",
    color: "text-pink-400 border-pink-400",
  },
  {
    name: "浪漫愛情推薦",
    hover: "hover:text-red-400 hover:border-red-400",
    color: "text-red-400 border-red-400",
  },
  {
    name: "輕鬆搞笑推薦",
    hover: " hover:text-yellow-400 hover:border-yellow-400 ",
    color: "text-yellow-400 border-yellow-400",
  },
  {
    name: "BL漫畫推薦",
    hover: "hover:text-purple-500 hover:border-purple-500",
    color: "text-purple-500 border-purple-500",
  },
  {
    name: "獨家漫畫推薦",
    hover: "hover:text-purple-300 hover:border-purple-300",
    color: "text-purple-300 border-purple-300",
  },
  {
    name: "連載最新番",
    hover: "hover:text-green-300 hover:border-green-300",
    color: "text-green-300 border-green-300",
  },
];

const BookList = () => {
  const [bookTab, setBookTab] = useState("情人節專屬");
  const [ComicBookList, GetComicBookList] = useGetFetch(null);

  const handleGetComicList = () => {
    GetComicBookList({
      url: Get.comicList.replace("{number}", 6),
    });
  };

  useEffect(() => {
    handleGetComicList();
  }, []);

  function OnChangeBookTab(tab) {
    handleGetComicList();
  }

  return (
    <Div className=" bg-zinc-600 ">
      <div className="text-sm font-medium text-center ">
        <ul className="flex flex-wrap -mb-px justify-center">
          {menu.map((item, index) => {
            return (
              <li key={item.color} className="me-2 ">
                <Link
                  href="#"
                  className={`inline-block p-4 border-b-2  text-base  no-underline ${
                    item.hover
                  } ${
                    bookTab == item.name
                      ? item.color
                      : "text-blue-50 border-transparent"
                  } `}
                  onClick={() => {
                    setBookTab(item.name);
                    OnChangeBookTab(item.name);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li className="ms-auto flex justify-center items-center">
            <Link className="flex justify-center items-center no-underline text-white hover:text-slate-300 hover:border-slate-400 border-2 border-slate-300 rounded-lg p-2 ">
              <p className="pe-2">更多推薦</p>
              <svg
                className="w-3 h-3 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`flex  flex-wrap lg:flex-nowrap justify-center items-center  lg:rounded-tr-none `}
      >
        {ComicBookList != null
          ? ComicBookList.map((item, index) => {
              return (
                <RecommendCard
                  key={"RecommendCard" + index}
                  title={item.comicName}
                  image={item.image}
                  category={item.category}
                  is_completed={item.is_completed}
                  description={item.ComicLists[0].description}
                />
              );
            })
          : null}
      </div>
    </Div>
  );
};

export default BookList;
