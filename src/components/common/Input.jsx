import React from "react";

const Input = ({ label, name, id, className, type = "text", ...props }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className="rounded-md w-80"
        name={name}
        {...props}
      />
    </div>
  );
};

export default Input;
