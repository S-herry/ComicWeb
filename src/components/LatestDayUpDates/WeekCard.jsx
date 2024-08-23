import Button from "../common/Button";
import Tab from "../common/Tab";
const WeekCard = () => {
  return (
    <div className="flex mt-2 ms-2 bg-white rounded-lg w-1/5">
      <img
        src="https://shogakukan-comic.jp/book-images/w400/books/9784098717330.jpg"
        className=" w-48 h-64 object-full p-3"
      />
      <div className="ps-3  w-2/4 text-left mt-5 flex flex-col">
        <p className="mb-2">他與我的故事</p>
        <div className="mb-2">
          <Tab label="熱門 "></Tab>
          <Tab
            label="連載中"
            className="ms-2 bg-black text-white border-black"
          ></Tab>
        </div>
        <p>
          白天是精英律師，夜晚是神秘畫家的真司，與同樣雙重身份的健一陷入一段複雜的情感糾葛。
        </p>
        <Button className=" mt-auto ms-auto p-4 bg-black text-white rounded-tl-md">
          閱讀
        </Button>
      </div>
    </div>
  );
};

export default WeekCard;
