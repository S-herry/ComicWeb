import React from "react";
import Button from "../../common/Button";
const BrowseCard = () => {
  return (
    <div className="border-2 flex gap-4">
      <div>
        <img
          src="https://www.tongli.com.tw/ComicImages/Images/IC0381/IC0381002/IC0381002.jpg"
          alt=""
          className="w-20"
        />
      </div>
      <div className="">
        <h3 className=" text-black font-extrabold">傾聽畫語：記憶中的景色</h3>
        <p className="text-black font-extrabold">第1話 美術館</p>
        <div className=" flex  justify-between">
          <div className="bg-gray-200 rounded me-2 p-2">
            <p>真好看</p>
          </div>
          <div className="ms-auto flex gap-2">
            <Button className="me-2 mb-5">good</Button>
            <Button className="me-2 mb-5">回復數量</Button>
          </div>
        </div>
      </div>
      <div className="ms-auto flex flex-col">
        <small>2024/09/06 12:00</small>
      </div>
    </div>
  );
};

export default BrowseCard;
