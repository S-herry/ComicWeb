import React, { useState } from "react";
import KeepCade from "./Card/KeepCade";
const Keep = () => {
  return (
    <div className="flex flex-wrap justify-start">
      <KeepCade />
      <KeepCade />
      <KeepCade />
      <KeepCade />
      <KeepCade />
      <KeepCade />
    </div>
  );
};

export default Keep;
