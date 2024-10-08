import React, { useState } from "react";
import Input from "../components/common/Input";
import Select from "../components/common/Select";
const ComicSet = () => {
  const [setting, SettingData] = useState();
  function handleChangeFile(event) {
    let files = event.target.files;
    let firstFile = files[0];
    console.log(firstFile);
    console.log(firstFile.length);
  }
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="w-8/12">
        <input type="file" name="" id="" onChange={handleChangeFile} />
      </div>
    </div>
  );
};

export default ComicSet;
