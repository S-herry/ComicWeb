import React from "react";

const Input = ({ label, name, id, className, ...props }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className={` `}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="rounded-md w-80"
        name={name}
        {...props}
      />
    </div>
  );
};

export default Input;
