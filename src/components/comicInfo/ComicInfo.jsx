import {
  faBell,
  faArrowUpRightFromSquare,
  faHeart,
  faEye,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Tab from "../common/Tab";
import Button from "../common/Button";
import ComicList from "./ComicList";
const ComicInfo = () => {
  const [heard, setHeard] = useState(false);

  return (
    <div className=" flex  flex-col justify-center items-center ">
      <div className="flex justify-center w-2/3 bg-zinc-400/20 mt-3 p-5 rounded-md">
        <div className="w-1/4">
          <img
            src="https://via.placeholder.com/300x350/FFFFFF?text=Image40"
            className=" rounded-md "
          />
        </div>
        <div className="flex flex-col w-3/4 ms-8">
          <h3 className="text-white text-3xl mb-2">夏日微風的告白</h3>
          <p className="text-white  mb-2 bg-white/20 p-2 rounded-md ">
            作者姓名
          </p>
          <div>
            <span className="border-2  bg-yellow-200 p-1 rounded-md me-3">
              <FontAwesomeIcon
                icon={faBell}
                style={{ color: "#fe5858", paddingRight: "5px" }}
                size="md"
              />
              每周三更新
            </span>
            <Tab label="類型" />
            <Tab
              label="類型"
              className="ms-3 border-orange-300 text-orange-300"
            />
          </div>
          <p className="text-white text-wrap mt-3 ">
            沒有夢想的李侑新，畢業即失業成為家裡蹲，被爸媽趕出家門自尋生路，偶然應徵上了美術館夜間保全的工作，夜晚的美術館裡，還有正為了年度展覽忙碌中的富三代策展人查爾斯，兩人遇到了被困在畫中的安柏，安柏是一名滿懷夢想的畫家，卻不知道自己為什麼會被困在畫裡。深怕自己搞砸工作的侑新，還有深怕展覽出問題的查爾斯，決定攜手合作，一起尋找解救安柏的辦法！
          </p>
          <div className="flex items-center text-center mt-5">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEye} className=" text-white" size="xl" />
              <h3 className="text-white ms-2">123456</h3>
            </div>
            <div className="flex items-center ms-5">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="text-lime-400"
                size="xl"
              />
              <h3 className=" ms-2 text-lime-400 ">123456</h3>
            </div>
          </div>
          <div className="mt-auto flex">
            <Button className="bg-amber-400 text-black px-4 py-2 me-5 text-xl rounded-md ">
              繼續閱讀
            </Button>
            <Button className="bg-white/20  rounded-full flex justify-center items-center p-3 me-5">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className=" text-white "
                size="xl"
              />
            </Button>
            <Button
              className="bg-white/20 rounded-full flex justify-center items-center p-3 me-5"
              onClick={() => setHeard(!heard)}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={` ${heard ? "text-red-500" : "text-white"}`}
                size="xl"
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="text-white mt-10 flex w-2/3 ">
        <div className="w-2/3">
          <div className="flex">
            <p>共10話</p>
            <p className="ms-auto">排列依照：由舊到新</p>
          </div>
          <ul>
            <li className="mt-5">
              <ComicList />
            </li>
            <li className="mt-5">
              <ComicList />
            </li>
            <li className="mt-5">
              <ComicList />
            </li>
          </ul>
        </div>
        <div className="w-1/3 ms-5">
          <div>
            <img
              src="https://stickershop.line-scdn.net/stickershop/v1/product/24158538/LINEStorePC/main.png?v=1"
              className=" rounded-md "
            />
          </div>
          <div className="mt-5">
            <img
              src="https://stickershop.line-scdn.net/stickershop/v1/product/24167775/LINEStorePC/main.png?v=1"
              className=" rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicInfo;
