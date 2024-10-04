import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";
import Icon from "../common/Icon";
const ComicList = () => {
  return (
    <li className=" flex bg-white/80 rounded-md">
      <div className="w-1/4">
        <img
          src="https://stickershop.line-scdn.net/stickershop/v1/product/24184346/LINEStorePC/main.png"
          alt="非常謝謝"
        />
      </div>
      <div className="w-3/4 flex">
        <div className="w-4/5 flex flex-col justify-center p-4 text-black">
          <h4 className=" text-lg">第一話 美術館</h4>
          <h4 className=" text-sm text-gray-500">2024-04-16 更新</h4>
          <div className="flex items-center mt-3">
            <Icon icon={faThumbsUp} className="text-red-500  text-2xl" />
            <h3 className=" ms-2 text-red-500 ">123456</h3>
          </div>
        </div>
        <div className="w-1/5 flex flex-col  justify-center">
          <Button className="py-2 me-2 text-black border-2 rounded-md border-black hover:border-white">
            開始閱讀
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ComicList;
