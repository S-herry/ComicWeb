import { useState } from "react";
import Easy from "../../data/Comic Content/Easy.json";
import { Link } from "react-router-dom";
import FreeCard from "./FreeCard";
import Div from "../common/Div";

const FreeComic = () => {
  const [bookTabData, setBookTabData] = useState(Easy);

  return (
    <Div className=" bg-white ">
      <div className="flex ">
        <div className="m-2 flex justify-center items-center">
          <p className=" text-2xl font-bold ms-2">
            超多免費漫畫任你看　點擊「換一批」找好書
          </p>
        </div>
        <Link
          className="ms-auto flex justify-center items-center  no-underline text-black
         hover:text-slate-500 hover:border-slate-500 border-slate-800 rounded-md border-2 mx-3 my-2 p-2"
        >
          <p className="flex text-base pe-1 font-bold">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
              />
            </svg>
          </p>
          <p className="text-md">換一批</p>
        </Link>
      </div>

      <div
        className={`flex  flex-wrap lg:flex-nowrap justify-center items-center  lg:rounded-tr-none `}
      >
        {bookTabData.manga.map((item, index) => {
          return (
            <Link key={"bookTabData" + item.id} className=" m-3 w-full">
              <FreeCard
                title={item.title}
                image={item.image}
                category={item.category}
                is_completed={item.is_completed}
              />
            </Link>
          );
        })}
      </div>
    </Div>
  );
};

export default FreeComic;
