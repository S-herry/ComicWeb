import React from "react";
import { Link } from "react-router-dom";
const News = ({ year, date, content }) => {
  return (
    <div className="flex items-center text-white mt-5">
      <div className=" border-indigo-300 border-r-2  me-3 min-w-28">
        <div className="date">{date}</div>
      </div>
      <Link className=" text-sm no-underline  hover:underline text-white text-wrap hover:text-red-300">
        {content}
      </Link>
    </div>
  );
};

export default News;
