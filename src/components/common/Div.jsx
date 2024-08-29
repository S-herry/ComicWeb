import React from "react";

const Div = ({ children, className }) => {
  return (
    <section
      className={` mt-8 mb-5 px-3  rounded-xl justify-center  w-9/12  ${className}  `}
    >
      {children}
    </section>
  );
};

export default Div;
