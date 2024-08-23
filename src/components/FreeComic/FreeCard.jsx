import { Link } from "react-router-dom";
import Tab from "../common/Tab";

const FreeCard = ({ title, category, image, is_completed, description }) => {
  return (
    <div className=" bg-slate-800 w-full  flex  flex-col  rounded-md  relative m-3">
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

export default FreeCard;
