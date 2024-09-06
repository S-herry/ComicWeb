import React from "react";
import Tab from "../../common/Tab";
import Button from "../../common/Button";
const RecordCard = () => {
  return (
    <div className="flex gap-12 mb-10 pb-2 border-b-2">
      <div className="mb-5 basis-1/8">
        <img
          src="https://www.tongli.com.tw/ComicImages/Images/IC0381/IC0381002/IC0381002.jpg"
          alt=""
          className="w-36"
        />
      </div>
      <section className="flex flex-col basis-7/12">
        <h3 className=" text-black font-extrabold">隔壁天使變成廢材</h3>
        <p className="mt-2 text-sm text-wrap">
          莉音和修輔在大學校園裡的一場雨中重新相遇，並重溫了他們在高中時期的秘密約定。
          莉音和修輔在大學校園裡的一場雨中重新相遇，並重溫了他們在高中時期的秘密約定。
          莉音和修輔在大學校園裡的一場雨中重新相遇，並重溫了他們在高中時期的秘密約定。
        </p>
        <p className="my-8">上次閱讀：第1話　天使的詐騙簡訊</p>
        <div className="mt-auto mb-2">
          <Tab label="愛情" className=" border-rose-300 text-rose-300 me-2" />
          <Tab label="已完結" />
        </div>
      </section>
      <div className="ms-auto flex flex-col basis-1/6">
        <p className="text-right">最後閱讀：2024/09/06</p>
        <div className="mt-auto text-right">
          <Button className="inline p-3 bg-green-300 rounded-md me-3">
            繼續閱讀
          </Button>
          <Button className="inline p-3 bg-red-300 rounded-md">取消收藏</Button>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
