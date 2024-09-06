import React from "react";

const Input = ({ label, name, id, className, type = "text", ...props }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        required
        type={type}
        id={id}
        className="rounded-md "
        name={name}
        {...props}
      />
    </div>
  );
};

export default Input;
