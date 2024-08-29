import { Link, Outlet } from "react-router-dom";
import Button from "../components/common/Button";
import { useState } from "react";
import ComicTags from "../components/tabs/ComicTags";
import Footer from "../components/Footer/Footer";

const linkStyle =
  "no-underline me-5 text-white font-bold  hover:border-yellow-500 pb-1  b-4  border-b-4";

const Layout = () => {
  const [actionTab, setActionTab] = useState("漫畫");
  const [hidden, setHidden] = useState(false);

  function onMouseEnter() {
    setHidden(true);
  }
  function onMouseLeave() {
    setHidden(false);
  }

  return (
    <>
      <nav className="shadow-lg bg-black sticky top-0 z-40 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
          <div className="flex">
            <Link
              to="#"
              className="flex items-center space-x-3 rtl:space-x-reverse no-underline Red-Text "
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
                漫畫平台
              </span>
            </Link>
            <input
              className="ms-20 rounded-md w-70 px-3"
              type="text"
              placeholder="請輸入關鍵字搜尋作品"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto ">
            <ul className=" flex flex-col md:p-0 items-center md:flex-row md:space-x-8 ">
              <li>
                <Link
                  to="/login"
                  className="py-2 border border-yellow-300 rounded-md px-5 text-black bg-yellow-300 hover:bg-yellow-500"
                >
                  註冊
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="py-2  px-5 border rounded-md  text-white bg-black hover:text-black hover:bg-white"
                >
                  登入
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto ">
          <Link
            to="#"
            className={`${linkStyle} ${
              actionTab === "漫畫" ? "border-yellow-500" : "border-black"
            }`}
            onClick={() => setActionTab("漫畫")}
            onMouseEnter={() => setHidden(true)}
            onMouseLeave={() => setHidden(false)}
          >
            漫畫
          </Link>
          <Link
            to="#"
            className={`${linkStyle} ${
              actionTab === "小說" ? "border-yellow-500" : "border-black"
            }`}
            onClick={() => setActionTab("小說")}
            onMouseEnter={() => setHidden(true)}
            onMouseLeave={() => setHidden(false)}
          >
            小說
          </Link>
          <Link
            to="#"
            className={`${linkStyle} ${
              actionTab === "創作者平台" ? "border-yellow-500" : "border-black"
            }`}
            onClick={() => setActionTab("創作者平台")}
            onMouseEnter={() => setHidden(true)}
            onMouseLeave={() => setHidden(false)}
          >
            創作者平台
          </Link>
        </div>
        <ComicTags
          actionTab={actionTab}
          hidden={hidden}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </nav>

      <main className=" min-h-svh">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
