import { Link } from "react-router-dom";
import Tab from "../common/Tab";
const RecommendCard = ({
  title,
  category,
  image,
  is_completed,
  description,
}) => {
  return (
    <div className=" bg-slate-800 w-full  flex  flex-col  rounded-md  relative m-3">
      <div className=" absolute rounded-md  w-full h-full opacity-0 hover:opacity-90 hover:bg-gray-700 flex justify-center items-center p-5 text-white font-normal flex-col">
        <p>{description}</p>
        <Link className="mt-auto ms-auto text-white ">閱讀漫畫</Link>
      </div>
      <div className="w-full flex justify-center items-center p-2">
        <img src={image} alt="" className=" w-11/12 h-56 object-cover " />
      </div>
      <div className="w-full flex justify-center ps-2 pt-2 flex-col">
        <div className="px-4">
          <Tab label={category} className=" border-pink-600 text-pink-200" />
          <Tab
            label={is_completed ? "完結" : "連載中"}
            className="mx-2 text-white"
          />
        </div>
        <p className=" text-white  font-bold px-4 py-2">{title}</p>
      </div>
    </div>
  );
};

export default RecommendCard;
