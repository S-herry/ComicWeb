import { Link } from "react-router-dom";
import Tab from "../common/Tab";
const WeekCard = ({
  title,
  description,
  isOngoing,
  category,
  image = "https://shogakukan-comic.jp/book-images/w400/books/9784098717330.jpg",
}) => {
  return (
    <Link
      to="#"
      className="flex flex-col items-center no-underline m-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-fill w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={image}
        alt={title}
      />
      <div className="flex flex-col  p-4 leading-normal text-start w-48">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="mb-2">
          <Tab label={category}></Tab>
          <Tab
            label={isOngoing ? "連載中" : "完結"}
            className="ms-2 bg-black text-white border-black"
          ></Tab>
        </div>
        <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default WeekCard;
