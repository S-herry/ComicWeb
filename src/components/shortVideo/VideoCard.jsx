import { useState } from "react";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Icon from "../common/Icon";
const VideoCard = ({ videoUri, videoName = "漫畫名稱", props }) => {
  const [sound, setSound] = useState(false);

  return (
    <div className="flex-1 pb-5  relative mx-5 hover:shadow-lg hover:scale-105  ">
      <Button
        className="absolute bg-gray-800 text-white right-0 z-10 m-3 p-3 rounded-full"
        onClick={() =>
          setSound((prev) => {
            return !prev;
          })
        }
      >
        <Icon icon={sound ? faVolumeHigh : faVolumeXmark} />
      </Button>
      <h2 className="absolute bg-black opacity-65 font-bold text-white rounded-lg  px-4 py-3">
        {videoName}
      </h2>
      <Link to="/">
        <video
          src={videoUri}
          loop
          autoPlay
          muted={!sound}
          className="object-cover shadow-sm rounded-md shadow-black"
          {...props}
        />
      </Link>
    </div>
  );
};

export default VideoCard;
