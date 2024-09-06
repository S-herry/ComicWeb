import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../common/Icon";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../../common/Button";
const KeepCade = () => {
  const [lovely, setLovely] = useState(true);

  return (
    <div className=" bg-slate-800   flex rounded-md  relative mt-5  me-6">
      <div className=" flex flex-col justify-center items-center p-2 w-52">
        <div className="flex flex-col">
          <p className=" text-white font-black  px-4 py-2 text-nowrap text-base">
            狗血反派的宿命
          </p>
        </div>
        <img
          src="https://images.vocus.cc/17966820-0cb4-45b7-ba12-525c2c415074.jpg"
          className=" w-11/12 h-56 object-cover  "
        />
        <div className="flex justify-between px-2 w-full items-center ">
          <Button onClick={() => setLovely(!lovely)}>
            <Icon
              icon={faHeart}
              size="xl"
              className={` ${lovely ? "text-red-500" : "text-white"}`}
            />
          </Button>
          <Link className=" mt-2 text-white  p-1  ">閱讀漫畫</Link>
        </div>
      </div>
    </div>
  );
};

export default KeepCade;
