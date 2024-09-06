import React, { useEffect, useState } from "react";
import Input from "../common/Input";

const UserInput = ({ label, name, userDate = "", changeData = true }) => {
  const [inputVal, setInputVal] = useState(userDate);
  useEffect(() => {
    setInputVal(userDate);
  }, [userDate]);
  return (
    <div className="flex items-start w-full mt-3 flex-col  md:flex-row md:items-center ">
      <p className=" text-lg rounded-md px-2 py-1 md:min-w-20  text-yellow-500">
        {label}
      </p>
      {!changeData ? (
        <span className="text-xl ps-2 py-2 border-b w-full transition-all">
          {inputVal}
        </span>
      ) : (
        <Input
          value={inputVal}
          name={name}
          onChange={(e) => setInputVal(e.target.value)}
          className="md:ms-5 ms-2  transition-all"
        />
      )}
    </div>
  );
};

export default UserInput;
