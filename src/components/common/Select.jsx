import React from "react";

const Select = ({ label, data }) => {
  return (
    <div className="flex flex-col justify-center">
      <label htmlFor="tag" className="text-white text-xl">
        {label}
      </label>
      <select name="tag" id="tag" className=" rounded-md">
        <option value=""></option>
        {data &&
          data.map((item, index) => (
            <option value={item.value} key={index}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
