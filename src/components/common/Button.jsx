import React from "react";

const Button = ({ type = "button", onClick, className, children, props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`block  rounded font-semibold transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
