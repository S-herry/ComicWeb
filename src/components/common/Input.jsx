import React from "react";

const Input = ({ label, name, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={name} {...props} />
    </>
  );
};

export default Input;
