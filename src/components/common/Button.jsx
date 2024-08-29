import React from "react";

const Button = ({ type = "button", onClick, className, children, props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` ${className} block  font-semibold transition-all`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
