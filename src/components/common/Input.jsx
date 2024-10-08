import React from "react";

const Input = ({
  label,
  name,
  id,
  className,
  type = "text",
  labelClass,
  ...props
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        required
        type={type}
        id={id}
        className="rounded-md text-black"
        name={name}
        {...props}
      />
    </div>
  );
};

export default Input;
